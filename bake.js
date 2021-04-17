var fs = require('fs');
var Handlebars = require('handlebars');

var source = `{{#each this}}
<div class="row portfolio-entry">
  {{#if this.image}}
    <div class="col-md-3 col-sm-4">				
      <a href="{{ link }}"><img alt="{{ image_alt }}" src="images/{{ image }}" class="img-preview"/></a>
    </div>
    <div class="col-md-7 col-sm-8">
  {{else}}
  <div class="col-md-12">
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
{{/each}}`

var meta = `<title>Katie Marriner, data journalist and developer</title>
<meta name="description" content="Katie Marriner is data journalist and developer at MarketWatch in New York.">
<meta name="author" content="Katie Marriner">
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index,follow">
<meta name="keywords" content="katie marriner, new york, data journalist, developer, data visualization, data viz, marriner, marketwatch, wsj, wall street journal, graphics journalist, journalism, unc, university of north carolina">

<link rel="shortcut icon" href="images/logo.ico" type="image/x-icon">
<link href="dist/css/bootstrap.min.css" rel="stylesheet" media="screen">
<link href="dist/css/app.min.css" rel="stylesheet" media="screen">
    
<link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'> 

<!--TRACKING-->	
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-37362223-3', 'katiemarriner.com');
ga('send', 'pageview');
</script>`

var nav = `<div class="col-md-4 col-sm-4 col-xs-12">
  <ul class="vertical-nav full">
  <li><h1 class="content-name">Katie Marriner</h1></li>
  <li><h2 class="content-title">Data journalist and developer for MarketWatch</h2></li>
  <li><h3 class="content-bio">Gathering and analyzing data for visualizations and interactives.</h3></li>
    <li>
      <a href="https://twitter.com/kemarriner" class="" data-show-count="false"><img src="images/social/twitter.png" alt="Twitter" class="social-icon"></a>
      <a href="http://www.github.com/katiemarriner"><img src="images/social/github32.png" alt="GitHub" class="social-icon"></a>
      <a href="http://www.linkedin.com/in/kemarriner"><img src="images/social/linkedin.png" alt="LinkedIn" class="social-icon"/></a>
      <a href="images/katiemarriner_resume.pdf" class="sub-cats">Resume</a>
    </li>
  </ul>
</div>`

var template = Handlebars.compile(source);
var data = fs.readFileSync('dist/js/data.json');
data = JSON.parse(data);
var portfolio = template(data);

const full_page = `<!DOCTYPE html>
<head>${meta}</head>
<body>
<div class="full row row-portfolio">
${nav}
${portfolio}
</div>
</body></html>`

fs.writeFile('index.html', full_page, (error) => { /* handle error */ });
