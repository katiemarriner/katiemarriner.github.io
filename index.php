<html>
<head>
    <title>Katie Marriner | UNC visual journalist</title>
    
    <!--jQUERY-->
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    
    <!--BOOTSTRAP CSS-->
    <link href="css/bootstrap.css" rel="stylesheet" media="screen">
    <link href="css/app.css" rel="stylesheet" media="screen">
    
    <!--BOOTSTRAP JS-->
    <script language="javascript" type="text/javascript" src="js/bootstrap.js"></script>
    
    <!--FONT-->
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,400italic,700,300' rel='stylesheet' type='text/css'>
    
    <script>
    //full divs
    $(document).ready(function(){
            width = $(window).width();
            height = $(window).height();
            halfHeight = $(window).height() / 2;
            $('.halfHeight').height(halfHeight);
            $('.full').height(height);
            
            $('p.text').hide();
            
           
       $('p.text').animate({
                height: "toggle",
                opacity: "toggle",
                easing: "easeout"
              },
                1000, function() {
                // Animation complete.
              }); 
    });
    
    
    
    
    </script>
    
<?php
    require_once('twitter-api-php/TwitterAPIExchange.php');
    
    $settings = array(
        'oauth_access_token' => "635532028-rL5C49Gj4XVrQoC11zmuVoZnQdQmvbDxTrva3m8K",
        'oauth_access_token_secret' => "FNw8qw8v2dy5TtxEgM5jMcYnZP0PdaVWiiPv9Mk4qJH7k",
        'consumer_key' => "Jg53shWJxzIuNPrOWTTXQ",
        'consumer_secret' => "oaoxy9a1GAXFpmgr6LpOxo9TXb92xYFOJ55eyiuLmxU"
    );
    
    $url = 'https://api.twitter.com/1.1/search/tweets.json';
    $requestMethod = 'GET';
    $getFeed = '?q=from:kemarriner';
    
    
    $twitter = new TwitterAPIExchange($settings);
    
    $string = array (
                     json_decode($twitter->setGetfield($getFeed)
                          ->buildOauth($url, $requestMethod)
                          ->performRequest(),$assoc = TRUE),
                    );
?>
    
</head>

<body>
    <div id="nav" class="hidden-sm hidden-xs">
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <a class="navbar-brand" class="formcontainer" href="http://www.katiemarriner.com">Katie Marriner</a>
            <ul class="nav navbar-nav">
                <li><a href="#about">About</a></li>
                <li><a href="#web">Web</a></li>
                <li><a href="#graphics">Graphics</a></li>
                <li><a href="#resume">Resume</a></li>
            </ul>
        </nav>
    </div><!--end-nav-->
    <div id="nav-mobile" class="hidden-md hidden-lg">
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        </nav>
    </div><!--end-nav-mobile-->
    
    <div id="container">
    
    <div id="about">
        <div class="row about-row full">
        <a name="about" class="links"></a>
        <div class="col-md-7 col-sm-12 col-xs-12">
            <h2 class="h2-title">Katie Marriner</h2>
            <p class="text">Katie studies visual journalism at the University of North Carolina at Chapel Hill.
            She began as a graphic designer but has since switched her focus to web design/development
            and enjoys telling stories through code. During the summer of 2013, she interned as a
            web producer and page designer at the Milwaukee Journal Sentinel where she discovered
            the changing dynamics of a newsroom in an increasingly technological world. This year
            she serves as treasurer for the newly established chapter of the Online News Association
            at UNC and continues to create graphics for the Carolina Union’s Marketing and Design department.</p>
            <button type="button" class="btn btn-default btn-lg">Web</button><button type="button" class="btn btn-default btn-lg">Graphics</button><button type="button" class="btn btn-default btn-lg">Resume</button>
        </div>
        <div class="col-md-5 col-sm-12 col-xs-12 twitter-feed">
            <?php
            for ($x=0; $x<=0; $x++) {
                    echo"<div>";
                    foreach($string[$x]['statuses'] as $items)
                        {
                            
                            //CREATES LINKS IN TWEET
                            $tweetText = $items['text'];
                            $tweetText = preg_replace("/(http:\/\/|(www\.))(([^\s<]{4,68})[^\s<]*)/", '<a href="https://$2$3" target="_blank">$1$2$4</a>', $tweetText);
                            $tweetText = preg_replace("/@(\w+)/", '<a href="https://twitter.com/$1" target="_blank">@$1</a>', $tweetText);
                            $tweetText = preg_replace("/#(\w+)/", '<a href="https://twitter.com/search?q=$1" target="_blank">#$1</a>', $tweetText);
                            
                            echo "<div class='tweet'><h4>" . $items['user']['name'] . "<br /></h4>";
                            echo "<h5>" . $tweetText . "<br /></h5>";
                            echo "</div>";
                        };
                    echo"</div>";
                    }
                    
                    //echo "<pre>";
                    //print_r($string);
                    //echo "</pre>";
            ?>
        </div>
        </div>
    </div><!--end-about-id-->
    
    <div id="web">
        <div class="row web-row full">
            <a name="web" class="links"></a>
            <h2 class="h2-title">Web</h2>
            <div class="col-md-4"><a href="http://katiemarriner.com/586_project3" class="web-link"><img src="images/mental-health-nc.PNG" class="web-images img-responsive"/></a></div>
            <a href="http://katiemarriner.com/static/j586_project4" class="web-link"><div class="col-md-4"><img src="images/comedy-nyc.PNG" class="web-images img-responsive"/></div></a>
            <div class="col-md-4 box"><a href=""><img src=""/></a></div>
        </div>
    </div>

    <div id="graphics">
        <div class="row graphics-row full">
            <a name="graphics" class="links"></a>
            <h2 class="h2-title">Graphics</h2>
        </div>
    </div>
    
    <div id="resume">
        <div class="row resume-row full">
            <a name="resume" class="links"></a>
            <h2 class="h2-title">Resume</h2>
        </div>
    </div>

    
    </div><!--container-->
</body>
</html>
