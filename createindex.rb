require 'open3'
require 'json'
require 'execjs'
require 'redcarpet'
require 'redcarpet/render_strip'
require 'yaml'

# lunr_src = open(@lunr_path).read
# ctx = ExecJS.compile(lunr_src)
dickensurl = "https://main--tubular-narwhal-84b42b.netlify.app"
@lunr_config = {'fields' => [{'field': 'content', 'boost': 10}, 
	{'field': 'tags', 'boost': 10}, 
	{'field': 'url', 'boost': 1}, 
	{'field': 'title', 'boost': 20}]}
stdout_str, status = Open3.capture2('python3 parseannotations.py')

annotationcontents = JSON.parse(stdout_str)
docs = annotationcontents
index_js = open('lunr.js').read
index_js << 'var idx = lunr(function() {this.pipeline.remove(lunr.stemmer);this.searchPipeline.remove(lunr.stemmer);this.pipeline.remove(lunr.stopWordFilter);this.searchPipeline.remove(lunr.stopWordFilter);this.tokenizer.separator = /[\s,.;:/?!()]+/;'
@lunr_config['fields'].each do |field|
	index_js << "this.field('#{field[:field]}', {'boost': #{field[:boost]}});"
end
Dir['src/pages/**/*.mdx'].each do |page|
	file = File.open(page, "r")
	content = file.read
	headercontent = YAML.load(content.split('---')[1])
	stripmarkdown = Redcarpet::Markdown.new(Redcarpet::Render::StripDown).render(content.split('---')[-1])
	striphtml = stripmarkdown.gsub(/<\/?[^>]*>/, "")
	slug = page.gsub('src/pages', '').gsub('.mdx', '').gsub('index', '')
	url = dickensurl + slug
	#docs[slug] = {'url': url, 'content': striphtml, 'title': headercontent['title']}
end
docs.each do |key, doc|
	doc['content'] = doc['content'].gsub(/<\/?[^>]*>/, "").gsub('\\n', ' ')
	puts JSON.generate(doc, quirks_mode: true)
	puts doc.inspect
	doc['id'] = key
	index_js << 'this.add(' << ::JSON.generate(doc, quirks_mode: true) << ');'
end
index_js << '});'
#puts index_js.inspect

filename = File.join('.', 'index.js')
ctx = ExecJS.compile(index_js)
index = ctx.eval('JSON.stringify(idx)')
total = "var docs = #{docs.to_json}\nvar index = #{index.to_json}\nvar baseurl = #{dickensurl}\nvar lunr_settings = #{@lunr_config}"

File.open(filename, "w") { |f| f.write(total) }
