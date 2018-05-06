<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <title>Cat Footwear | David Kinloch UX Design &amp; Development</title>
        <meta name="description" content="One of the most famous boots in the world had a 25th Annviersary and working with PD3 I helped create a website to celebrate">
        <?php include ('includes/header.php'); ?>
    </head>
    <body class="work yellow">
        <div class="header-container">
            <header class="wrapper site-header">
                 <nav class="nav-primary">
                    <a href="/" class="nav-toggle back" aria-hidden="false">
                        <span>Back</span>
                    </a>                      
                </nav><!--.site-navigation -->
            </header>
        </div>
        <div class="work-nav">
            <ul class="work-nav__list">
                <li class="work-nav__item">
                    <a href="mercedes-benz" class="work-nav__link work-nav__link--prev">
                        <i class="fa fa-angle-left"></i> 
                        <span class="text">Previous</span>
                    </a>
                </li>
                <li class="work-nav__item">
                    <a href="index.php#work" class="work-nav__link work-nav__link--all">
                        <i class="fa fa-th"></i> 
                        <span class="text">All</span>
                    </a>
                </li>
                <li class="work-nav__item">
                    <a href="links-of-london" class="work-nav__link work-nav__link--next">
                        <span class="text">Next</span>
                        <i class="fa fa-angle-right"></i> 
                    </a>
                </li>
            </ul>
            <?php include('includes/work-thumbs.php'); ?>
        </div>
         <div class="main-container view--in">
            <div id="beamme" class="main">
                
                <div class="wrapper">
                    <section class="section section-primary section-header">
                        <div class="section__imageholder" style="background-image:url(assets/build/cat/cat-hero.jpg);">
                        </div>
                 
                        <div class="section-header__header">
                            <div class="section-header__details">
                                <h1 class="section-header__h1">
                                    <span class="section__subtitle">Iconic Footwear Brand</span><Br>
                                    <span class="section__title">Cat Footwear</span>                        
                                </h1>
                                <ul class="section-header__list">
                                    <li class="section-header__item section-header__item--title"><strong>The Essentials</strong></li>
                                    <li class="section-header__item">Prototyping</li>
                                    <li class="section-header__item">Frontend</li>
                                    <li class="section-header__item">Wordpress Theme</li>
                                </ul>
                            </div>

                             <div class="section-header__intro">
                                <p>One of the most famous boots in the world had a 25th Annviersary, working with PD3, I helped create a website to celebrate.</p>
                                <p>From initial responsive wireframing to frontend templates and a custom Woprdress theme with deployment to live.</p>
                           </div>
                        </div>
                    </section>
                </div>
                <div class="wrapper--skinny">
                    <div class="section section-primary">
                        <figure class="section__block">
                            <img class="section__image lazy" data-src="assets/build/cat/cat01.png" alt="Cat Footwear Screenshot 01" />
                        </figure>
                    </div>

                    <div class="section section-primary animation">
                        <div class="section__block">
                            <img class="section__image lazy" data-src="assets/build/cat/cat02.png" alt="Cat Footwear Screenshot 02" />
                        </div>
                    </div>

                    <div class="section section-primary animation">
                        <div class="section__block">
                            <img class="section__image section__image--full lazy" data-src="assets/build/cat/25Colorado-Celebrating-25-Years-of-CAT-Colorado-Boots.jpg" alt="Cat Footwear Screenshot 03" />
                        </div>
                    </div>

                    <div class="section section-primary animation">
                        <div class="section__block">
                            <img class="section__image lazy" data-src="assets/build/cat/cat06.png" alt="Cat Footwear Screenshot 04" />
                        </div>
                    </div>

                </div><!-- end skinny wrapper -->  
                <?php include('includes/contact.php'); ?>
                <?php include('includes/footer.php'); ?>
            </div><!-- #main -->
        </div> <!-- #main-container -->
        <?php include('includes/view-out.php'); ?>
<?php include('includes/end.php'); ?>  
