var fs = require('fs');
var Handlebars = require('handlebars');

var source = `<div class="col-sm-8 col-12">
{{#each this}}
<div class="row portfolio-entry">
  {{#if this.image}}
    <div class="col-auto">				
      <a href="{{ link }}"><img width="250px" height="250px" alt="{{ image_alt }}" src="images-optimized/{{ image }}" class="img-preview"/></a>
    </div>
    <div class="col">
  {{else}}
  <div class="col-12">
  {{/if}}
    <h4>
      {{#if this.link}}<a href="{{ link }}">{{/if}}
      {{ title }}
      {{#if this.link}}</a>{{/if}}
    </h4>
    <p class="tools">{{tools}}</p>
    <p class="description">{{{description}}}</p>
    {{#if this.source}}<a href="{{ source }}">Source</a>{{/if}}
  </div>
</div>
{{/each}}
</div>`

var meta = `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-37362223-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-37362223-3');
</script>
<title>Katie Marriner, data journalist and developer</title>
<meta name="description" content="Katie Marriner is data journalist and interactives developer at MarketWatch, and a data journalism instructor.">
<meta name="author" content="Katie Marriner">
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index,follow">
<meta name="keywords" content="katie marriner, marriner, data, journalist, marketwatch, data journalist, developer, new york, developer, data visualization, data viz, marriner, wsj, wall street journal, graphics journalist, journalism, unc, university of north carolina">

<link rel="shortcut icon" href="images/logo.ico" type="image/x-icon">
<link href="dist/css/bootstrap-grid.min.css" rel="stylesheet" media="screen">
<link href="dist/css/app.min.css" rel="stylesheet" media="screen">`

var nav = `<div class="col-sm-4 col-12">
  <ul class="vertical-nav full">
  <li><h1 class="content-name">Katie Marriner</h1></li>
  <li><h2 class="content-title">Data journalist and developer for MarketWatch</h2></li>
  <li><h3 class="content-bio">I gather and analyze data to create visualizations and interactives about economic and financial news.</h3></li>
    <li>
      <a href="https://twitter.com/kemarriner" class="sub-cats">Twitter | </a>
      <a href="http://www.github.com/katiemarriner" class="sub-cats">Github | </a>
      <a href="http://www.linkedin.com/in/kemarriner" class="sub-cats">Linkedin | </a>
      <a href="images/katiemarriner_resume.pdf" class="sub-cats">Resume</a>
    </li>
  </ul>
</div>`

var template = Handlebars.compile(source);
var data = fs.readFileSync('dist/js/data.json');
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
