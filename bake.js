const fs = require('fs');
const Handlebars = require('handlebars');

const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');

minify({
  compressor: cleanCSS,
  input: 'src/app.css',
  output: 'dist/css/app.min.css',
  callback: function (err, min) { }
});

var source = `<div class="col-lg-8 col-12">
{{#each this}}
<div class="row portfolio-entry">
  {{#if this.image}}
    <div class="col-md-auto col-12">				
      <a href="{{ link }}"><img width="250px" height="250px" alt="{{ image_alt }}" src="images-optimized/{{ image }}" class="img-preview"/></a>
    </div>
    <div class="col">
  {{else}}
  <div class="col-md-auto col-12">
  {{/if}}
    {{#if this.source}}<div class="source">{{ source }}</div>{{/if}}
    <h4>
      {{#if this.link}}<a href="{{ link }}">{{/if}}
      {{ title }}
      {{#if this.link}}</a>{{/if}}
    </h4>
    <p class="tools">{{tools}}</p>
    <p class="description">{{{description}}}</p>
    {{#if this.awards_link}}
        {{#each this.awards_link as | a |}}
          <div>
            <a href="{{{a.link}}}">{{{a.title}}}</a>
          </div>
        {{/each}}
    {{/if}}
  </div>
  <div class="col-12">
    {{#if this.additional_links}}
      <div class="row">
        <div class="col-12">
        <ul class="">
          {{#each this.additional_links as | l |}}
              <li>
                {{#if l.link}}<a href="{{ l.link }}">{{/if}}
                {{ l.title }}
                {{#if l.link}}</a>{{/if}}
              </li>
          {{/each}}
          </ul>
        </div>
      </div>
    {{/if}}
  </div>
</div>
{{/each}}
</div>`

var meta = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-ERZCVHH4R2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ERZCVHH4R2');
</script>
<title>Katie Marriner, frontend engineer and data journalist</title>
<meta name="description" content="Katie Marriner is a frontend engineer and data visualization specialist with over a decade of experience designing and building journalistic interactive tools and storytelling experiences.">
<meta name="author" content="Katie Marriner">
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index,follow">
<meta name="keywords" content="katie marriner, marriner, fivethirtyeight, 538, abc news, data, journalist, marketwatch, data journalist, developer, new york, developer, data visualization, data viz, marriner, wsj, wall street journal, graphics journalist, journalism, unc, university of north carolina">

<link rel="shortcut icon" href="images/logo.ico" type="image/x-icon">
<link href="dist/css/bootstrap-grid.min.css" rel="stylesheet" media="screen">
<link href="dist/css/app.min.css" rel="stylesheet" media="screen">

<meta property="og:image" content="images/marriner_preview.png" />
<meta property="og:url" content="https://katiemarriner.com" />
<meta property="og:type" content="website" />

<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="600" />
<meta name="twitter:image" content="images/marriner_preview.png" />
`

var nav = `<div class="col-lg-4 col-12">
  <ul class="vertical-nav full">
  <li><h1 class="content-name">Katie Marriner</h1></li>
  <li><h2 class="content-title">Data journalist, designer and developer</h2></li>
  <li><h3 class="content-bio">My goal to inform and empower audiences through clear, engaging visuals and interactive presentations. I am driven by the belief that open access to information is essential for an informed public. This principle guides my approach to developing visuals and tools that uphold the highest standards of accuracy and journalistic ethics.</h3></li>
    <li>
      <a href="https://bsky.app/profile/katiemarriner.bsky.social" class="sub-cats">Bluesky | </a>
      <a href="http://www.github.com/katiemarriner" class="sub-cats">Github | </a>
      <a href="http://www.linkedin.com/in/kemarriner" class="sub-cats">Linkedin | </a>
      <a href="images/katiemarriner_resume.pdf" class="sub-cats">Resume</a>
    </li>
  </ul>
</div>`

var template = Handlebars.compile(source);
var data = fs.readFileSync('data/projects-current.json');
data = JSON.parse(data);
var portfolio = template(data);

const full_page = `<!DOCTYPE html>
<html lang="en">
<head>${meta}</head>
<body>
<div class="full container-fluid row-portfolio">
<div class="row">
${nav}
${portfolio}
</div>
</div>
</body></html>`

fs.writeFile('index.html', full_page, (error) => { /* handle error */ });
