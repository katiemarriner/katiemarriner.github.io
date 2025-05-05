# katiemarriner.github.io
Portfolio website

## Getting started
`npm install`

## To update projects in `data/projects-current.json`
`npm start` runs `node bake.js`, which...
- populates data/projects-current.json into a handlebars template and saves it as `index.html`
- minifies CSS from src/app.css

## Optimtize images
`cwebp images/[FILENAME].png -o images-optimized/[FILENAME].webp`
