---
layout: "../../layouts/page.astro"
title: "Search site"
description: "search"
---

<form role="search">
<div class="search-control" style="display:none;">
    <input type="search" id="person-serarch" name="query"
           placeholder="Keyword Search"
           aria-label="Search people using keyword">
    <button class="custom_button" style="float: right;">Search</button>
</div>
</form>
<script src="https://dnoneill.github.io/jekyll-lunr-js-custom-search/js/custom-search.js"></script>
<link rel="stylesheet" type="text/css" href="https://dnoneill.github.io/jekyll-lunr-js-custom-search/css/custom-search.css">
<div id="spinner"><i class="fa fa-spinner fa-spin"></i></div>
<script src="/index.js"></script>


<div id="header_info"></div>
<div style="float: left; width: 100%; display: none; border: 1px solid #ccc" class="all_results">
  <div id="search_results">
    <div id="searchInfo">
      <span id="number_results"></span>
      <span id="sort_by" class="dropdownsort"><label for="sortSelect">Sort By:</label>
        <select id="sortSelect" name="sort" onchange="changeSort(event);">
          <option value="">Relevance</option>
          <option value="atoz">Name (Asc)</option>
          <option value="atoz___desc">Name (Desc)</option>
          <option value="born">Birth Year</option>
        </select>
      </span>
    </div>
  </div>
  <ul id="resultslist">
  </ul>
  <div id="pagination"></div>
</div>
<div style="clear:both"><span></span></div>

<script>
window.addEventListener("load", function(){
    loadsearchtemplate();
    $('#spinner').hide();
});
</script>