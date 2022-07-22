# The Digital Dickens Notes Project

The Digital Dickens Notes Project allows users to explore and interpret the ‘Working Notes’ Charles Dickens kept for his novels. Dickens composed and published all of his fifteen novels in monthly or weekly installments, and for many novels he used these Working Notes–one sheet of paper for each installment–to consider character combinations and plot developments; to record titles, events, and key phrases; and to document decisions made or deferred to subsequent numbers. 

The DDNP pairs accurate transcriptions of the Working Notes with scholarly introductions and annotations that illuminate their significance for understanding the dynamics of Dickens’s creative process and Victorian serial form.  

## Running the DDNP locally

The DDNP is built on [Astro](https://astro.build/), uses [TailwindCSS](https://tailwindcss.com/) for styling, and several [React](https://reactjs.org/) libraries, including [Mirador](https://projectmirador.org/).

It also leverages [pnpm](https://pnpm.js.org/) to manage JS dependencies.

To run locally:

1. Ensure you have [Node](https://nodejs.org/) and [pnpm](https://pnpm.js.org/) installed.
2. Clone the repository.
3. Run `pnpm install` at the root of the repository to install dependencies.
4. Run `pnpm run dev` at the root of the repository to run the application. 

## Astro Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |

Feel free to check [the Astro documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat) for help with Astro.
