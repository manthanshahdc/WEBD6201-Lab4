/*
 | --------------------------------------------------------
 | Theme Name : WebPanda
 | Theme Version : 1.0
 | Theme Date : 07/08/2018
 | Platforms : HTML5, CSS3, Bootstrap4, JS, Jquery, Sass
 | Theme Author : Yankee Themes
 | Author URI : https://themeforest.net/user/yankeethemes
 | Author Contact : enquiry[at]yankeeinfoweb[dot]com
 | Tags : yankeethemes, yankeeinfoweb, webdesign, boostrap, wordpress, support, html, responsive, css3, wellorganized, retina, animation, html5, sass, support, yakneelife
 | File : yit-custom.js
 | --------------------------------------------------------
 */

/*
 | --------------------------------------------------------
 | TABLE OF JS CONTENT
 | --------------------------------------------
 |  Predefine Variable
 |  BS Component JS
 |  OWL Carousel JS
 |  Flex Slider
 |  Slick Slider
 |  Text Fade Slider
 |  Swipper Slider
 |  Onepage Scroll JS
 |  On Scroll Animation Navigation
 |  On Scroll Fixed Navigation
 |  On Scroll Stick Navigation
 |  One Page Collapse Hide Navigation
 |  Scroll To Top
 |  Responsive Dropdown Toggle
 |  Menu Page Active
 |  Menu Page Redirect
 |  WOW Animate JS
 |  Steller Parallax JS
 |  Counter JS
 |  Magnific Popup
 |  Masonry Grid
 |  ISO Top Grid
 |  ISO Top With Masonry Grid
 |  Metro Grid
 |  ISO Top Blog With Masonry Grid
 |  Blog Masonry Grid
 |  Facebookfeed Masonry Grid
 |  Justified Gallery
 |  Skillbar
 |  Pie Chart JS
 |  Count Down JS
 |  Retina JS
 |  Instafeed JS
 |  Validation JS
 |  Nice Select Box JS
 |  Fitvids JS
 |  NiceScroll JS
 |  Custom Google Map JS
 |  Stylish Google Map JS
 |  Twitter Feed JS
 */

/* NOTE: This file includes all custom js and functions */
(function ($) {
    'use strict';
    var WebPanda = WebPanda || {};

    /*************************
     Predefined Variables
     *************************/
    var $window = $(window),
            $document = $(document),
            $html = $('html'),
            $body = $('body'),
            deviceAgent = navigator.userAgent.toLowerCase(),
            isMobile = deviceAgent.match(/(iphone|ipod|android|iemobile)/),
            isMobileAlt = deviceAgent.match(/(iphone|ipod|ipad|android|iemobile)/),
            isAppleDevice = deviceAgent.match(/(iphone|ipod|ipad)/),
            isIEMobile = deviceAgent.match(/(iemobile)/),
            $countdownTimer = $('.countdown'),
            $bar = $('.bar'),
            $pieChart = $('.round-chart'),
            $progressBar = $('.skill-bar'),
            $counter = $('.counter'),
            $datetp = $('.datetimepicker');

    //Check if function exists
    $.fn.exists = function () {
        return 0 < this.length;
    };
    WebPanda.niceSelect = function () {

        /* Nice Selectbox JS BOC
         ====================================================== */
        var $niceSelect = $('select');
        $niceSelect.niceSelect();
    };
    WebPanda.fitVids = function () {

        /* FitVids Video JS BOC
         ====================================================== */
        var $fitVids = $('.fitvids-video');
        if ($fitVids.length) {
            $fitVids.fitVids();
        }
    };
    WebPanda.googleDemoMap = function () {

        /* Stylish Google Map JS BOC
         ==============================================================  */
        var googleDemoMap = $('.google-demo-map');
        googleDemoMap.each(function () {
            var id = $(this).attr('id');
            var color = $(this).attr('data-type');
            var clr = [{'featureType': 'all', 'elementType': 'labels.text.fill', 'stylers': [{'saturation': 36}, {'color': '#000000'}, {'lightness': 40}]}, {'featureType': 'all', 'elementType': 'labels.text.stroke', 'stylers': [{'visibility': 'on'}, {'color': '#000000'}, {'lightness': 16}]}, {'featureType': 'all', 'elementType': 'labels.icon', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'administrative', 'elementType': 'geometry.fill', 'stylers': [{'color': '#000000'}, {'lightness': 20}]}, {'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#000000'}, {'lightness': 17}, {'weight': 1.2}]}, {'featureType': 'landscape', 'elementType': 'geometry', 'stylers': [{'color': '#000000'}, {'lightness': 20}]}, {'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{'color': '#000000'}, {'lightness': 21}]}, {'featureType': 'road.highway', 'elementType': 'geometry.fill', 'stylers': [{'color': '#000000'}, {'lightness': 17}]}, {'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#000000'}, {'lightness': 29}, {'weight': 0.2}]}, {'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{'color': '#000000'}, {'lightness': 18}]}, {'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{'color': '#000000'}, {'lightness': 16}]}, {'featureType': 'transit', 'elementType': 'geometry', 'stylers': [{'color': '#000000'}, {'lightness': 19}]}, {'featureType': 'water', 'elementType': 'geometry', 'stylers': [{'color': '#000000'}, {'lightness': 17}]}];
            if ('green' === color) {
                clr = [{'featureType': 'administrative', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#444444'}]}, {'featureType': 'landscape', 'elementType': 'all', 'stylers': [{'color': '#f2f2f2'}]}, {'featureType': 'poi', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'road', 'elementType': 'all', 'stylers': [{'saturation': -100}, {'lightness': 45}]}, {'featureType': 'road.highway', 'elementType': 'all', 'stylers': [{'visibility': 'simplified'}]}, {'featureType': 'road.arterial', 'elementType': 'labels.icon', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'transit', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'water', 'elementType': 'all', 'stylers': [{'color': '#84ba3f'}, {'visibility': 'on'}]}];
            } else if ('midnight' === color) {
                clr = [{'featureType': 'all', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#ffffff'}]}, {'featureType': 'all', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#000000'}, {'lightness': 13}]}, {'featureType': 'administrative', 'elementType': 'geometry.fill', 'stylers': [{'color': '#000000'}]}, {'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#144b53'}, {'lightness': 14}, {'weight': 1.4}]}, {'featureType': 'landscape', 'elementType': 'all', 'stylers': [{'color': '#08304b'}]}, {'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{'color': '#0c4152'}, {'lightness': 5}]}, {'featureType': 'road.highway', 'elementType': 'geometry.fill', 'stylers': [{'color': '#000000'}]}, {'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#0b434f'}, {'lightness': 25}]}, {'featureType': 'road.arterial', 'elementType': 'geometry.fill', 'stylers': [{'color': '#000000'}]}, {'featureType': 'road.arterial', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#0b3d51'}, {'lightness': 16}]}, {'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{'color': '#000000'}]}, {'featureType': 'transit', 'elementType': 'all', 'stylers': [{'color': '#146474'}]}, {'featureType': 'water', 'elementType': 'all', 'stylers': [{'color': '#021019'}]}];
            } else if ('light' === color) {
                clr = [{'featureType': 'administrative.locality', 'elementType': 'all', 'stylers': [{'hue': '#2c2e33'}, {'saturation': 7}, {'lightness': 19}, {'visibility': 'on'}]}, {'featureType': 'landscape', 'elementType': 'all', 'stylers': [{'hue': '#ffffff'}, {'saturation': -100}, {'lightness': 100}, {'visibility': 'simplified'}]}, {'featureType': 'poi', 'elementType': 'all', 'stylers': [{'hue': '#ffffff'}, {'saturation': -100}, {'lightness': 100}, {'visibility': 'off'}]}, {'featureType': 'road', 'elementType': 'geometry', 'stylers': [{'hue': '#bbc0c4'}, {'saturation': -93}, {'lightness': 31}, {'visibility': 'simplified'}]}, {'featureType': 'road', 'elementType': 'labels', 'stylers': [{'hue': '#bbc0c4'}, {'saturation': -93}, {'lightness': 31}, {'visibility': 'on'}]}, {'featureType': 'road.arterial', 'elementType': 'labels', 'stylers': [{'hue': '#bbc0c4'}, {'saturation': -93}, {'lightness': -2}, {'visibility': 'simplified'}]}, {'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{'hue': '#e9ebed'}, {'saturation': -90}, {'lightness': -8}, {'visibility': 'simplified'}]}, {'featureType': 'transit', 'elementType': 'all', 'stylers': [{'hue': '#e9ebed'}, {'saturation': 10}, {'lightness': 69}, {'visibility': 'on'}]}, {'featureType': 'water', 'elementType': 'all', 'stylers': [{'hue': '#e9ebed'}, {'saturation': -78}, {'lightness': 67}, {'visibility': 'simplified'}]}];
            } else if ('grey' === color) {
                clr = [{'featureType': 'landscape', 'elementType': 'labels', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'transit', 'elementType': 'labels', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'poi', 'elementType': 'labels', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'water', 'elementType': 'labels', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'road', 'elementType': 'labels.icon', 'stylers': [{'visibility': 'off'}]}, {'stylers': [{'hue': '#00aaff'}, {'saturation': -100}, {'gamma': 2.15}, {'lightness': 12}]}, {'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{'visibility': 'on'}, {'lightness': 24}]}, {'featureType': 'road', 'elementType': 'geometry', 'stylers': [{'lightness': 57}]}];
            } else if ('blackandwhite' === color) {
                clr = [{'featureType': 'water', 'elementType': 'all', 'stylers': [{'hue': '#ffffff'}, {'saturation': -100}, {'lightness': 100}, {'visibility': 'on'}]}, {'featureType': 'landscape', 'elementType': 'all', 'stylers': [{'hue': '#ffffff'}, {'saturation': -100}, {'lightness': 100}, {'visibility': 'on'}]}, {'featureType': 'road', 'elementType': 'geometry', 'stylers': [{'hue': '#000000'}, {'saturation': -100}, {'lightness': -100}, {'visibility': 'simplified'}]}, {'featureType': 'road', 'elementType': 'labels', 'stylers': [{'hue': '#ffffff'}, {'saturation': -100}, {'lightness': 100}, {'visibility': 'off'}]}, {'featureType': 'poi', 'elementType': 'all', 'stylers': [{'hue': '#ffffff'}, {'saturation': -100}, {'lightness': 100}, {'visibility': 'off'}]}, {'featureType': 'administrative', 'elementType': 'all', 'stylers': [{'hue': '#ffffff'}, {'saturation': 0}, {'lightness': 100}, {'visibility': 'off'}]}, {'featureType': 'transit', 'elementType': 'geometry', 'stylers': [{'hue': '#000000'}, {'saturation': 0}, {'lightness': -100}, {'visibility': 'on'}]}, {'featureType': 'transit', 'elementType': 'labels', 'stylers': [{'hue': '#ffffff'}, {'saturation': 0}, {'lightness': 100}, {'visibility': 'off'}]}];
            }
            google.maps.event.addDomListener(window, 'load', init(id, clr));

            // Google Callbale
            function init(id, clr) {
                var mapOptions = {
                    zoom: 11,
                    center: new google.maps.LatLng(22.9984713, 72.4997531), //Update Latitude and Longitude here
                    styles: clr
                };
                var mapElement = document.getElementById(id);
                var map = new google.maps.Map(mapElement, mapOptions);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(432.256392, -110.944125),
                    map: map,
                    title: 'Snazzy!'
                });
            }
        });
    };
    WebPanda.niceScroll = function () {

        /* NiceScroll JS BOC
         ====================================================== */
        var $scrollbarOne = $('#scrollbar-one');
        var $scrollbarTwo = $('#scrollbar-two');
        if ($scrollbarOne.length) {
            $scrollbarOne.niceScroll({
                cursorcolor: '#e91e63',
                scrollspeed: 200,
                mousescrollstep: 100,
                cursorwidth: 5,
                cursorborder: 0,
                cursorborderradius: 4
            });
        }
        if ($scrollbarTwo.length) {
            $scrollbarTwo.niceScroll({
                cursorcolor: '#e91e63',
                cursorwidth: '10px',
                background: 'rgba(0,0,0,0.3)',
                cursorborder: '1px solid #e91e63',
                scrollspeed: 200,
                mousescrollstep: 100,
                cursorborderradius: 0
            });
        }
    };
    WebPanda.twitterLive = function () {

        // Twitter Third Column Carousel
        var owlTwitterGridThird = $('.owl-twitter-grid-third-col');
        var owlTwitterGridThirdTwo = $('.owl-grid-third-col-two');
        var owlTwitterSingle = $('.owl-twitter-single');

        /* Twitter Feed JS BOC
         ==============================================================  */
        var xhr = new XMLHttpRequest();
        var resp;
        var $html = [];
        xhr.open('GET', 'http://yankeeinfoweb.com/demo/twitter-feed/twitter-api.php', true);
        xhr.onreadystatechange = function () {
            if (4 == xhr.readyState) {

                // JSON.parse does not evaluate the attacker's scripts.
                resp = JSON.parse(xhr.responseText);
                jQuery.each(resp, function (i, val) {

                    // Twitter Grid Third Function Code
                    //$('.owl-stage').append(
                    owlTwitterGridThird.trigger('add.owl.carousel', '<div class="item mb-20">' +
                            '<div class="yit-twitter-item blue-color-bg pad-25-all flex-full-height">' +
                            '<div class="yit-display-centrize">' +
                            '<div class="yit-display-v-centrize">' +
                            '<div class="tweet-author-thumbnail">' +
                            '<img src="' + val.user.profile_image_url + '" alt="Twitter Avtar" class="img-circle mb-15" width="70" height="70">' +
                            '</div>' +
                            '<div class="tweet-author-name caption-title mb-10">' +
                            '<a href="Javascript:void(0);" title="Author" class="white-color-text">@' + val.user.screen_name + '</a>' +
                            '</div>' +
                            '<div class="tweet-post font-weight-light">' + val.text +
                            '</div>' +
                            '<div class="tweet-timestamp">' +
                            '<p class="muted-text"><i class="ti-time"></i> 6 Days ago</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>');
                });

                // Twitter Grid Third Style Two Function Code
                jQuery.each(resp, function (i, val) {

                    //$('.owl-stage').append(
                    owlTwitterGridThirdTwo.trigger('add.owl.carousel', '<div class="item mb-20">' +
                            '<div class="item">' +
                            '<div class="tweet-item black-extra-grey-color-bg pad-20-all img-rounded flex-full-height">' +
                            '<div class="yit-display-centrize">' +
                            '<div class="yit-display-v-centrize">' +
                            '<div class="tweet-author">' +
                            '<img src="' + val.user.profile_image_url + '" alt="Tweet Author" class="img-circle">' +
                            '<a href="Javascript:void(0);" title="@Lara_ux" class="tweet-user">@' + val.user.screen_name + '</a>' +
                            '</div>' +
                            '<div class="tweet-post font-weight-light">' + val.text + '<p class="text-muted">5 days ago</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>');
                });

                // Twitter Grid Single Column Function Code
                jQuery.each(resp, function (i, val) {
                    owlTwitterSingle.trigger('add.owl.carousel', '<div class="item mb-20">' +
                            '<div class="item">' +
                            '<div class="tweet-item black-extra-grey-color-bg pad-20-all img-rounded flex-full-height">' +
                            '<div class="yit-display-centrize">' +
                            '<div class="yit-display-v-centrize">' +
                            '<div class="tweet-author">' +
                            '<img src="' + val.user.profile_image_url + '" alt="Tweet Author" class="img-circle">' +
                            '<a href="Javascript:void(0);" title="@Lara_ux" class="tweet-user">@' + val.user.screen_name + '</a>' +
                            '</div>' +
                            '<div class="tweet-post">' + val.text + '<p class="text-muted">5 days ago</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>');
                });

                //owl_grid_third.trigger('refresh.owl.carousel').onResize();

                // Twitter Grid Callable Function
                owlTwitterGridThird.trigger('refresh.owl.carousel'); // third column twitter init
                owlTwitterGridThirdTwo.trigger('refresh.owl.carousel'); // third column twitter style version two init
                owlTwitterSingle.trigger('refresh.owl.carousel'); // single column twitter style init
            }
        };
        xhr.send();

        /* Twitter Feed JS EOC */
    };
    WebPanda.generateMap = function () {

        /* MAP Address Function JS BOF */
        generatemap('demo-map', 22.9941262, 72.4987048, 'You Are here.!! <br> Contact Here');
    };
    WebPanda.slider = function () {

        // Twitter Third Column Carousel
        var owlTwitterGridThird = $('.owl-twitter-grid-third-col');
        var owlTwitterGridThirdTwo = $('.owl-grid-third-col-two');
        var owlTwitterSingle = $('.owl-twitter-single');

        var owlSingle = $('.owl-single');
        var owlGridTwo = $('.owl-grid-two-col');
        var owlGridThird = $('.owl-grid-third-col');
        var owlGridFour = $('.owl-grid-four-col');
        var owlGridFive = $('.owl-grid-five-col');
        var yitBlog = $('.yit-owl-blog');
        var yitPartners = $('.yit-owl-partners');
        
        var owlPortfolio = $('.owl-portfolio');
        var owlFull = $('.owl-full-slider');

        owlTwitterGridThird.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 10,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3,
                    margin: 15
                }
            }
        });

        // Twitter Third Column Style2 Carousel
        owlTwitterGridThirdTwo.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 10,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3,
                    margin: 15
                }
            }
        });

        // Twitter Single Column Carousel
        owlTwitterSingle.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 10,
            autoplay: true,
            singleItem: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            animateIn: 'bounceInUp',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1,
                    margin: 15
                }
            }
        });

        owlSingle.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 10,
            autoplay: true,
            singleItem: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            animateIn: 'bounceInUp',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1,
                    margin: 15
                }
            }
        });

        // 2 Column Carousel
        owlGridTwo.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 10,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2,
                    margin: 15
                }
            }
        });

        // 3 Column Carousel
        owlGridThird.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 10,
            //autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3,
                    margin: 15
                }
            }
        });

        // 4 Column Carousel
        owlGridFour.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 10,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4,
                    margin: 15
                }
            }
        });

        // 5 Column Carousel
        owlGridFive.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 10,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5,
                    margin: 15
                }
            }
        });

        // Blog Single Carousel JS BOC
        yitBlog.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 10,
            autoplay: true,
            singleItem: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            animateIn: 'fadeIn',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1,
                    margin: 15
                }
            }
        });

        // Partner Carousel JS EOC
        yitPartners.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 10,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4,
                    margin: 15
                }
            }
        });

        // Blog Carousel JS EOC
        
        owlPortfolio.owlCarousel({
            autoplay: true,
            autoplayTimeout:2000,
            items:1,
            mouseDrag:false,
            loop: true,
            nav: false,
            dots: false,
            singleItem: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
        owlFull.owlCarousel({
            autoplay: true,
            autoplayTimeout:4000,
            items:1,
            mouseDrag:false,
            loop: true,
            nav: false,
            dots: false,
            singleItem: true,
            //animateIn: 'fadeIn',
            //animateOut: 'fadeOut'
        });
        
        
    };
    WebPanda.formValidation = function () {

        /* Form Validation JS BOC
         ====================================================== */
        (function ($) {
            var contactForm = $('#contact-form');
            var newsletterForm = $('#newsletter-form');
            jQuery.validator.addMethod('lettersonly', function (value, element) {
                return this.optional(element) || /^[a-z0-9_-]+$/i.test(value);
            }, 'Please use only a-z0-9_-');

            // Contact Form Validation
            contactForm.validate({
                rules: {
                    firstname: {
                        required: true
                    },
                    email: {
                        email: true,
                        required: true
                    },
                    phoneno: {
                        required: true,
                        number: true,
                        maxlength: 10
                    },
                    website: {
                        required: true
                    }
                },
                highlight: function (element) {
                    $(element).closest('.control-group').removeClass('success').addClass('has-error animation-slideDown');
                },
                success: function (element) {
                    $(element).addClass('valid').closest('.control-group').removeClass('has-error').addClass('success');
                    $('html, body').animate({
                        scrollTop: 0,
                    }, 5000)
                }
            });

            // Form Newsletter Validation
            newsletterForm.validate({
                rules: {
                    newsemail: {
                        email: true,
                        required: true
                    }
                },
                highlight: function (element) {
                    $(element).closest('.control-group-validate').removeClass('success').addClass('has-error animation-slideDown');
                },
                success: function (element) {
                    $(element).addClass('valid').closest('.control-group-validate').removeClass('has-error').addClass('success');
                }
            });
        }(jQuery));
    };
    WebPanda.instaFeed = function () {

        var token = '6803684911.2e0553c.0c00f7341c1c45b29c12449f518a6d3c',
                username = 'yankeeinfoweb', // yankeeinfoweb - my username :)
                numPhotos = 6;
        var x;
        var yitInstafeedBlog = $('.yit-instafeed-blog');
        var yitInstafeedFooter = $('.yit-instafeed-footer');
        var yitInstafeedDual = $('.yit-instafeed-dual');
        var yitInstafeed = $('.yit-instafeed');

        // Instafeed In Blog Sidebar
        if (yitInstafeedBlog.length) {
            numPhotos = 6;
            $.ajax({
                url: 'https://api.instagram.com/v1/users/self/media/recent',
                dataType: 'jsonp',
                type: 'GET',
                data: {access_token: token, count: numPhotos, scope: 'public_content'},
                success: function (data) {
                    $.each(data.data, function (index, el) {
                        yitInstafeedBlog.append('<div class="col-lg-4 col-md-4 col-xl-4"><div class="instafeed-item"><a href="' + el.link + '" title="Insta Thumbnail"><img src="' + el.images.low_resolution.url + '" alt="Insta Image" data-no-retina=""><div class="instafeed-count pink-color-bg"><i class="fa fa-heart-o"></i> ' + el.likes.count + '</div></a></div></div>');
                    });
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }

        // Instafeed In Footer
        if (yitInstafeedFooter.length) {
            numPhotos = 8;
            $.ajax({
                url: 'https://api.instagram.com/v1/users/self/media/recent',
                dataType: 'jsonp',
                type: 'GET',
                data: {access_token: token, count: numPhotos, scope: 'public_content'},
                success: function (data) {
                    console.log(data);
                    $.each(data.data, function (index, el) {
                        yitInstafeedFooter.append('<div class="col-lg-3 col-md-3 col-xl-3"><div class="instafeed-item"><a href="' + el.link + '" title="Insta Thumbnail"><img src="' + el.images.low_resolution.url + '" alt="Insta Image" data-no-retina=""><div class="instafeed-count pink-color-bg"><i class="fa fa-heart-o"></i> ' + el.likes.count + '</div></a></div></div>');
                    });
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }

        // Instafeed In Dual Column
        if (yitInstafeedDual.length) {
            numPhotos = 8;
            $.ajax({
                url: 'https://api.instagram.com/v1/users/self/media/recent',
                dataType: 'jsonp',
                type: 'GET',
                data: {access_token: token, count: numPhotos, scope: 'public_content'},
                success: function (data) {
                    $.each(data.data, function (index, el) {
                        yitInstafeedDual.append('<div class="col-lg-6 col-md-6 col-xl-6"><div class="instafeed-item"><a href="' + el.link + '" title="Insta Thumbnail"><img src="' + el.images.low_resolution.url + '" alt="Insta Image" data-no-retina=""><div class="instafeed-count"><div class="yit-display-centrize"><div class="yit-display-v-centrize"><i class="fa fa-heart-o"></i> ' + el.likes.count + '</div></div></div></a></div></div>');
                    });
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }

        // Instafeed In Page
        if (yitInstafeed.length) {
            numPhotos = 4;
            $.ajax({
                url: 'https://api.instagram.com/v1/users/self/media/recent',
                dataType: 'jsonp',
                type: 'GET',
                data: {access_token: token, count: numPhotos, scope: 'public_content'},
                success: function (data) {
                    $.each(data.data, function (index, el) {
                        yitInstafeed.append('<div class="col-lg-3 col-md-6 col-xl-3"><div class="instafeed-item"><a href="' + el.link + '" title="Insta Thumbnail"><img src="' + el.images.low_resolution.url + '" alt="Insta Image" data-no-retina=""><div class="instafeed-count pink-color-bg"><i class="fa fa-heart-o"></i> ' + el.likes.count + '</div></a></div></div>');
                    });
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }

        /* Instagram JS EOC  */
    };
    WebPanda.retinaImage = function () {

        /* Retina Image JS BOC
         ====================================================== */
        var $NonRatinaImages = $('img:not([data-at2x])');
        $NonRatinaImages.attr('data-no-retina', '');
    };
    WebPanda.countDown = function () {

        /* Count Down JS BOC
         ====================================================== */
        $(function () {

            // Calculate time until launch date
            timeToLaunch();

            // Transition the current countdown from 0
            numberTransition('#days .number', days, 2000, 'easeOutQuad'); // change for delay
            numberTransition('#hours .number', hrs, 1700, 'easeOutQuad');
            numberTransition('#minutes .number', min, 1500, 'easeOutQuad');
            numberTransition('#seconds .number', sec, 1300, 'easeOutQuad');

            // Begin Countdown
            setTimeout(countDownTimer, 1001);
        });

        /* Count Down JS EOC */
    };
    WebPanda.pieChart = function () {

        /* Piechart JS BOC
         ====================================================== */
        var yitChartstyl1 = $('.yit-chart.style-1');
        var yitChartstyl2 = $('.yit-chart.style-2');
        var yitChartstyl3 = $('.yit-chart.style-3');
        var yitChartstyl4 = $('.yit-chart.style-4');
        var yitChartstyl5 = $('.yit-chart.style-5');
        yitChartstyl1.one('inview', function (event, isInView) {
            $('.chart', this).easyPieChart({
                scaleColor: '#e91e63',
                lineWidth: 10,
                lineCap: 'butt',
                barColor: '#e91e63',
                trackColor: '#ecf0f1',
                size: 160,
                animate: 1500,
                // Count No
                onStep: function (value) {
                    this.$el.find('span').text(Math.round(value));
                },
                onStop: function (value, to) {
                    this.$el.find('span').text(Math.round(to));
                }
            });
        });
        yitChartstyl2.one('inview', function (event, isInView) {

            // Chart Style-1
            $('.chart-one', this).easyPieChart({
                scaleColor: '#e91e63',
                lineWidth: 20,
                lineCap: 'round',
                barColor: '#e91e63',
                trackColor: '#ecf0f1',
                size: 160,
                animate: 1500,
                // Count No
                onStep: function (value) {
                    this.$el.find('span').text(Math.round(value));
                },
                onStop: function (value, to) {
                    this.$el.find('span').text(Math.round(to));
                }
            });
        });

        // Chart Style-2
        yitChartstyl2.one('inview', function (event, isInView) {
            $('.chart-two', this).easyPieChart({
                scaleColor: '#000',
                lineWidth: 5,
                lineCap: 'butt',
                barColor: '#e91e63',
                trackColor: '#ecf0f1',
                size: 160,
                animate: 1500,
                // Count No
                onStep: function (value) {
                    this.$el.find('span').text(Math.round(value));
                },
                onStop: function (value, to) {
                    this.$el.find('span').text(Math.round(to));
                }
            });
        });

        // Chart Style-3
        yitChartstyl3.one('inview', function (event, isInView) {
            $('.chart-two', this).easyPieChart({
                scaleColor: '#000',
                lineWidth: 1,
                lineCap: 'round',
                barColor: '#e91e63',
                trackColor: '#ecf0f1',
                size: 160,
                animate: 1500,
                // Count No
                onStep: function (value) {
                    this.$el.find('span').text(Math.round(value));
                },
                onStop: function (value, to) {
                    this.$el.find('span').text(Math.round(to));
                }
            });
        });

        // Chart Style-4
        yitChartstyl4.one('inview', function (event, isInView) {
            $('.chart-two', this).easyPieChart({
                scaleColor: '#000',
                lineWidth: 1,
                lineCap: 'round',
                barColor: '#000',
                trackColor: '#dfdfdf',
                size: 120,
                animate: 1500,
                // Count No
                onStep: function (value) {
                    this.$el.find('span').text(Math.round(value));
                },
                onStop: function (value, to) {
                    this.$el.find('span').text(Math.round(to));
                }
            });
        });

        // Chart Style-
        yitChartstyl5.one('inview', function (event, isInView) {
            $('.chart-four', this).easyPieChart({
                scaleColor: '#e91e63',
                lineWidth: 3,
                lineCap: 'butt',
                barColor: '#e91e63',
                trackColor: '#dfdfdf',
                size: 120,
                animate: 1500,
                // Count No
                onStep: function (value) {
                    this.$el.find('span').text(Math.round(value));
                },
                onStop: function (value, to) {
                    this.$el.find('span').text(Math.round(to));
                }
            });
        });

        /* Piechart JS BOC */
    };
    WebPanda.skillBar = function () {

        /* Skillbar JS BOC
         ====================================================== */
        var yitSkillbarStyle1 = $('.yit-skillbar.style-1');
        yitSkillbarStyle1.one('inview', function (event, isInView) {
            $('.yit-skillbar.style-1 .skillbar').skillBars({
                from: 0,
                speed: 4000,
                interval: 100,
                decimals: 0
            });
        });
        $('.yit-skillbar.style-2').one('inview', function (event, isInView) {
            $('.yit-skillbar.style-2 .skillbar').skillBars({
                from: 0,
                speed: 4000,
                interval: 100,
                decimals: 0
            });
        });
        $('.yit-skillbar.style-3').one('inview', function (event, isInView) {
            $('.yit-skillbar.style-3 .skillbar').skillBars({
                from: 0,
                speed: 4000,
                interval: 100,
                decimals: 0
            });
        });
        $('.yit-skillbar.style-4').one('inview', function (event, isInView) {
            $('.yit-skillbar.style-4 .skillbar').skillBars({
                from: 0,
                speed: 4000,
                interval: 100,
                decimals: 0
            });
        });

        /* Skillbar JS EOC */
    };
    WebPanda.jGallery = function () {
        var yitJustified = $('.justified-gallery');

        /* Justified Gallery JS BOC
         ====================================================== */
        yitJustified.justifiedGallery({
            rowHeight: 400,
            maxRowHeight: false,
            captions: true,
            margins: 10,
            lastRow: 'nojustify',
            randomize: true,
            waitThumbnailsLoad: true
        });

        /* Justified Gallery JS EOC */
    };
    WebPanda.magnificPopup = function () {

        /* Magnific Popup JS BOC
         ====================================================== */
        var popupImage = $('.popup-image'),
                popupImageNoMargin = $('.popup-image-no-margins'),
                popupGallery = $('.popup-gallery'),
                zoomGallery = $('.zoom-gallery'),
                popupWithForm = $('.popup-with-form'),
                popupModal = $('.popup-modal'),
                popupWithZoomAnim = $('.popup-with-zoom-anim'),
                popupWithMoovAnim = $('.popup-with-move-anim'),
                popupIframe = $('.popup-youtube, .popup-vimeo, .popup-gmaps');

        // Single Image
        popupImage.magnificPopup({type: 'image'});

        // iFrame (Youtube, iFrma Video, Map)
        popupIframe.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            removalDelay: 160,
            preloader: false
        });

        /* Popup Group iFrame JS EOC */

        // Single Image Zoom
        popupImageNoMargin.magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't forget to change the duration also in CSS
            }
        });

        /* Single Image Zoom JS EOC */

        // Lightbox Gallery
        popupGallery.magnificPopup({
            delegate: '.popup-link',
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-fade', // call class from css
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<a target="_blank" href="' + item.el.attr('data-link') + '" class="link">Visit Website</a><small>by jarvisbitz</small>';
                }
            }
        });

        /* Lightbox Gallery JS EOC */

        // Lightbox Gallery Zoom
        zoomGallery.magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            fixedContentPos: true,
            closeBtnInside: false,
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>by WebPanda</small>';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });

        /* Lightbox Gallery Zoom JS EOC */

        /* Lightbox With Form JS BOC */
        popupWithForm.magnificPopup({
            type: 'inline',
            preloader: false,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-fade',
            focus: '#name',
            callbacks: {
                beforeOpen: function () {
                    if (700 > $(window).width()) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });

        /* Lightbox With Form JS EOC */

        /* Lightbox Dialog Simple JS BOC */
        popupModal.magnificPopup({
            type: 'inline',
            preloader: false,
            modal: true,
            blackbg: true,
            mainClass: 'mfp-fade',
            callbacks: {
                open: function () {
                    $html.css('margin-right', 0);
                }
            }
        });
        $document.on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

        /* Lightbox Dialog Simple JS EOC */

        /* Lightbox Dialog Animation JS BOC */
        popupWithZoomAnim.magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            blackbg: true,
            mainClass: 'my-mfp-zoom-in'
        });

        $('.popup-with-move-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            blackbg: true,
            mainClass: 'my-mfp-slide-bottom'
        });

        /* Lightbox Dialog Animation JS BOC */
    };
    WebPanda.masonaryIsotop = function () {
        var $yitMasonry,
                $yitIsotop,
                $yitIsotopmasonry,
                $yitIsotopmetro,
                $yitIsotopblog,
                $yitMasonryblog,
                $yitMasonryfacebbok;
        var $grid = $('.grid'),
                $isotopFilters = $('.isotop-filters'),
                $isotopMasonry = $('.isotop-masonry'),
                $isotopMasonryFilter = $('.isotop-masonry-filter'),
                $masonryFilterTab = $('.masonry-filter-tab'),
                $filterTab = $('.filter-tab'),
                $metro = $('.metro'),
                $metroFilter = $('.metro-filter'),
                $metroFilterTab = $('.metro-filter-tab'),
                $blogIsotop = $('.blog-isotope'),
                $blogIsotopTab = $('.blog-filter-tab'),
                $blogMansonry = $('.blog-masonry'),
                $facebookMansonry = $('.facebook-masonry'),
                $blogIsotopFilters = $('.blog-isotop-filters');

        /* Masonry Grid JS BOC
         ====================================================== */
        $yitMasonry = $grid.imagesLoaded(function () {

            // init Masonry after all images have loaded
            $grid.masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                gutter: 0,
                percentPosition: true,
                masonry: {
                    gutterWidth: 0
                }
            });
        });

        /* Masonry Grid JS EOC */

        /* ISO Top Filter Grid JS BOC
         ====================================================== */
        // Isotope Init
        $yitIsotop = $('.isotope').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

        // Isotop Bind Filter
        $isotopFilters.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $yitIsotop.isotope({filter: filterValue});
        });

        // Isotop Filter Active
        $filterTab.each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

        // Isotop Image Loded
        $yitIsotop.imagesLoaded().progress(function () {
            $yitIsotop.isotope('layout');
        });

        /* ISO Top Filter Grid JS EOC */

        /* ISO Top With Masonry Grid JS BOC
         ====================================================== */
        $yitIsotopmasonry = $isotopMasonry.isotope({
            itemSelector: '.isotop-masonry-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.isotop-masonry-item'
            }
        });

        // Isotope / Masonry Filter
        $isotopMasonryFilter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $yitIsotopmasonry.isotope({filter: filterValue});
        });

        // Isotop / Masonry Filter Active
        $masonryFilterTab.each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

        // Isotop / Masonry Image Loded
        $yitIsotopmasonry.imagesLoaded().progress(function () {
            $yitIsotopmasonry.isotope('layout');
        });

        /* ISO With Masonry JS EOC */

        /* Metro Grid JS BOC
         ====================================================== */
        $yitIsotopmetro = $metro.isotope({
            itemSelector: '.metro-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.metro-item'
            }
        });

        // Isotope / Masonry Filter
        $metroFilter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $yitIsotopmetro.isotope({filter: filterValue});
        });

        // Isotop / Masonry Filter Active
        $metroFilterTab.each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

        // Isotop / Masonry Image Loded
        $yitIsotopmetro.imagesLoaded().progress(function () {
            $yitIsotopmetro.isotope('layout');
        });

        /* Metro Grid JS EOC */

        /* ISO Top Blog Grid JS BOC
         ====================================================== */
        // Isotope Init
        $yitIsotopblog = $blogIsotop.isotope({
            itemSelector: '.blog-element-item',
            layoutMode: 'fitRows'
        });

        // Isotop Bind Filter
        $blogIsotopFilters.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $yitIsotopblog.isotope({filter: filterValue});
        });

        // Isotop Filter Active
        $blogIsotopTab.each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

        // Isotop Image Loded
        $yitIsotopblog.imagesLoaded().progress(function () {
            $yitIsotopblog.isotope('layout');
        });

        /* ISO Top Blog Grid JS EOC */

        /* Blog Masonry Grid JS BOC
         ====================================================== */
        $yitMasonryblog = $blogMansonry.imagesLoaded(function () {

            // init Masonry after all images have loaded
            $blogMansonry.masonry({
                itemSelector: '.blog-grid-item',
                columnWidth: '.blog-grid-item',
                gutter: 0,
                percentPosition: true,
                masonry: {
                    gutterWidth: 0
                }
            });
        });

        /* Blog Masonry Grid JS EOC */

        /* Facebook Masonry Grid JS BOC
         ====================================================== */
        $yitMasonryfacebbok = $facebookMansonry.imagesLoaded(function () {

            // init Masonry after all images have loaded
            $facebookMansonry.masonry({
                itemSelector: '.facebook-grid-item',
                columnWidth: '.facebook-grid-item',
                gutter: 0,
                percentPosition: true,
                masonry: {
                    gutterWidth: 0
                }
            });
        });

        /* Facebook Masonry Grid JS EOC */
    };

    WebPanda.counter = function () {

        var $counterStyle1 = $('#counter.style-1'),
                $counterStyle2 = $('#counter.style-2'),
                $counterStyle3 = $('#counter.style-3'),
                $counter = $('#counter');

        var options,
                useOnComplete,
                useEasing,
                useGrouping,
                project,
                client,
                experience,
                hours;

        /* Counter JS BOC
         ====================================================== */
        $counterStyle1.one('inview', function (event, isInView) {

            //if( isElementInViewport($elem) ) { console.log($elem.length);// if target element is visible on screen after DOM loaded
            options = {
                useEasing: true, // toggle easing
                useGrouping: true, // 1,000,000 vs 1000000
                separator: ',', // character to use as a separator
                decimal: '.' // character to use as a decimal
            };
            useOnComplete = false;
            useEasing = true;
            useGrouping = true;
            project = new countUp('.style-1 #data-1', 0, $('#data-1', this).attr('data-count'), 0, 2.5, options);
            client = new countUp('.style-1 #data-2', 0, $('#data-2', this).attr('data-count'), 0, 2.5, options);
            experience = new countUp('.style-1 #data-3', 1, $('#data-3', this).attr('data-count'), 0, 2.5, options);
            hours = new countUp('.style-1 #data-4', 0, $('#data-4', this).attr('data-count'), 0, 2.5, options);

            project.start();
            client.start();
            experience.start();
            hours.start();
        });
        $counterStyle2.one('inview', function (event, isInView) {
            var options,
                    useOnComplete,
                    useEasing,
                    useGrouping,
                    project,
                    client,
                    experience,
                    hours;

            //if( isElementInViewport($elem) ) { console.log($elem.length);// if target element is visible on screen after DOM loaded
            options = {
                useEasing: true, // toggle easing
                useGrouping: true, // 1,000,000 vs 1000000
                separator: ',', // character to use as a separator
                decimal: '.' // character to use as a decimal
            };
            useOnComplete = false;
            useEasing = true;
            useGrouping = true;
            project = new countUp('.style-2 #data-1', 0, $('#data-1', this).attr('data-count'), 0, 2, options);
            client = new countUp('.style-2 #data-2', 0, $('#data-2', this).attr('data-count'), 0, 2, options);
            experience = new countUp('.style-2 #data-3', 1, $('#data-3', this).attr('data-count'), 0, 2, options);
            hours = new countUp('.style-2 #data-4', 0, $('#data-4', this).attr('data-count'), 0, 2, options);

            project.start();
            client.start();
            experience.start();
            hours.start();
        });
        $counterStyle3.one('inview', function (event, isInView) {
            var options,
                    useOnComplete,
                    useEasing,
                    useGrouping,
                    project,
                    client,
                    experience,
                    hours;

            //if( isElementInViewport($elem) ) { console.log($elem.length);// if target element is visible on screen after DOM loaded
            options = {
                useEasing: true, // toggle easing
                useGrouping: true, // 1,000,000 vs 1000000
                separator: ',', // character to use as a separator
                decimal: '.' // character to use as a decimal
            };
            useOnComplete = false;
            useEasing = true;
            useGrouping = true;
            project = new countUp('.style-3 #data-1', 0, $('#data-1', this).attr('data-count'), 0, 2.5, options);
            client = new countUp('.style-3 #data-2', 0, $('#data-2', this).attr('data-count'), 0, 2.5, options);
            experience = new countUp('.style-3 #data-3', 1, $('#data-3', this).attr('data-count'), 0, 2.5, options);
            hours = new countUp('.style-3 #data-4', 0, $('#data-4', this).attr('data-count'), 0, 2.5, options);

            project.start();
            client.start();
            experience.start();
            hours.start();
        });

        $counter.one('inview', function (event, isInView) {
            var options,
                    useOnComplete,
                    useEasing,
                    useGrouping,
                    project,
                    client,
                    experience,
                    hours;

            //if( isElementInViewport($elem) ) { console.log($elem.length);// if target element is visible on screen after DOM loaded
            options = {
                useEasing: true, // toggle easing
                useGrouping: true, // 1,000,000 vs 1000000
                separator: ',', // character to use as a separator
                decimal: '.' // character to use as a decimal
            };
            useOnComplete = false;
            useEasing = true;
            useGrouping = true;
            project = new countUp('#data-1', 0, $('#data-1', this).attr('data-count'), 0, 2.5, options);
            client = new countUp('#data-2', 0, $('#data-2', this).attr('data-count'), 0, 2.5, options);
            experience = new countUp('#data-3', 1, $('#data-3', this).attr('data-count'), 0, 2.5, options);
            hours = new countUp('#data-4', 0, $('#data-4', this).attr('data-count'), 0, 2.5, options);

            project.start();
            client.start();
            experience.start();
            hours.start();
        });

        /* Counter JS EOC */
    };
    WebPanda.stellar = function () {

        /* Parallax JS
         ==============================================================  */
        $.stellar({
            horizontalScrolling: false,
            responsive: true
        });

        /* Parallax JS EOC */
    };
    WebPanda.swiper = function () {

        /* Swiper Slider JS BOC
         ====================================================== */
        // Swiper Default Carousel
        new Swiper('.swiper-default-carousel');

        // Swiper Navigation Carousel
        new Swiper('.swiper-navigation-carousel', {
            allowTouchMove: true,
            loop: true,
            slidesPerView: 1,
            preventClicks: false,
            autoplay: {
                delay: 5000
            },
            keyboard: {
                enabled: true
            },
            navigation: {
                nextEl: '.swiper-navigation-carousel-next',
                prevEl: '.swiper-navigation-carousel-prev'
            },
            pagination: {
                el: '.swiper-navigation-carousel-pagination',
                clickable: true
            }
        });

        // Swiper Fade Carousel
        new Swiper('.swiper-fade-carousel', {
            allowTouchMove: true,
            loop: true,
            slidesPerView: 1,
            preventClicks: false,
            effect: 'fade',
            autoplay: {
                delay: 5000
            },
            keyboard: {
                enabled: true
            },
            navigation: {
                nextEl: '.swiper-fade-carousel-next',
                prevEl: '.swiper-fade-carousel-prev'
            },
            pagination: {
                el: '.swiper-fade-carousel-pagination',
                clickable: true
            }
        });

        // Swiper Center Slide Carousel
        new Swiper('.swiper-center-slide-carousel', {
            allowTouchMove: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 0,
            preventClicks: false,
            loop: true,
            loopedSlides: 3,
            pagination: {
                el: 'null',
                clickable: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });

        // Swiper Scrollable Slide Carousel
        new Swiper('.swiper-bottom-scrollbar-full', {
            allowTouchMove: true,
            slidesPerView: 'auto',
            grabCursor: true,
            preventClicks: false,
            spaceBetween: 30,
            keyboardControl: true,
            speed: 1000,
            pagination: {
                el: null
            },
            autoplay: {
                delay: 5000
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
                snapOnRelease: true
            },
            mousewheel: {
                enable: true
            },
            keyboard: {
                enabled: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });

        // Swiper Multislide Responsive Carousel
        new Swiper('.swiper-multislide', {
            slidesPerView: 4,
            allowTouchMove: true,
            spaceBetween: 0,
            preventClicks: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 3000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });

        // Swiper Verticle Carousel
        new Swiper('.swiper-verticle', {
            allowTouchMove: true,
            loop: true,
            slidesPerView: 1,
            preventClicks: false,
            direction: 'vertical',
            mousewheel: true,
            keyboard: {
                enabled: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });

        // Swiper Progressbar Carousel
        new Swiper('.swiper-progressbar', {
            allowTouchMove: true,
            loop: true,
            slidesPerView: 1,
            preventClicks: false,
            autoplay: {
                delay: 5000
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    };
    WebPanda.navigation = function () {
        var previousScroll = 0,
                $yitScrollNav = $('.yit-on-scroll-nav'),
                $yitScrollFixed = $('.yit-on-scroll-fixed'),
                $xsNavbarListnode = $('.xs-navbar-nav li a'),
                $navbarToggler = $('.navbar-toggler'),
                $navbarCollapse = $('.navbar-collapse'),
                $toggle = $('.toggle'),
                $jsNavActiveNode = $('.js-nav-active a');

        /* On Scroll Animate Navigation JS BOC
         ====================================================== */
        $(window).scroll(function () {
            var y = $(window).scrollTop();
            if (150 < y) {
                $yitScrollNav.removeClass('animated fadeInDown');
                $yitScrollNav.addClass('animated fadeInDown');
            } else {
                $yitScrollNav.removeClass('animated fadeInDown');
            }
        });

        /* On Scroll Animate Navigation JS EOC */

        /* On Scroll Fixed Navigation JS BOC
         ====================================================== */
        $(window).scroll(function () {
            var y = $(window).scrollTop();
            if (150 < y) {
                $yitScrollFixed.removeClass('animated fadeInDown fixed-top');
                $yitScrollFixed.addClass('animated fadeInDown fixed-top');
            } else {
                $yitScrollFixed.removeClass('animated fadeInDown fixed-top');
            }
        });

        /* On Scroll Fixed Navigation JS EOC */

        /* On Scroll Sticky Visible Navigation JS BOC
         ====================================================== */
        $(window).scroll(function () {
            var currentScroll = $(this).scrollTop();

            /*
             If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window
             height (the bottom) run the navigation if/else statement.
             */
            if (0 < currentScroll && currentScroll < $(document).height() - $(window).height()) {

                //If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.

                if (currentScroll > previousScroll) {
                    window.setTimeout(hideNav, 300);

                    //Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.

                } else {
                    window.setTimeout(showNav, 300);
                }

                //Set the previous scroll value equal to the current scroll.
                previousScroll = currentScroll;
            }

        });

        // Callable Function
        function hideNav() {
            $('[data-nav-status=\'toggle\']').removeClass('is-visible').addClass('is-hidden');
        }
        function showNav() {
            $('[data-nav-status=\'toggle\']').removeClass('is-hidden').addClass('is-visible');
        }

        /* On Scroll Sticky Visible Navigation JS EOC */

        /* One Page Collapse Hide Navigation BOC
         ====================================================== */
        $document.on('click', '.xs-navbar-nav li a', function (event) {
            var toggle = $navbarToggler.is(':visible');
            if (toggle) {
                $navbarCollapse.collapse('hide');
            }
        });

        /* One Page Collapse Hide Navigation EOC */

        /* Responsive Dropdown Navigation Toogle JS BOC
         ====================================================== */

        $document.on('click', '.toggle', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent('li.dropdown').siblings('li').find('.dropdown-menu').hide();
            $(this).next('.dropdown-menu').toggle();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $toggle.removeClass('active'); // toogle class for responsive
                $(this).addClass('active');
            }
        });

        /* Dropdown Active Navigation JS EOC */

        /* Current Page Active JS BOC
         ====================================================== */
        $(function () {
            var pgurl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
            $jsNavActiveNode.each(function () {
                if ($(this).attr('href') == pgurl || '' == $(this).attr('href')) {
                    $(this).addClass('active');
                    $(this).parents().each(function () {
                        if ($(this).hasClass('nav-item')) {
                            $(this).addClass('active');
                        }
                    });
                }
            });
        });
    };    
    WebPanda.flexSlider = function () {
        var $flexsliderFade = $('.flexslider-fade'),
                $flexsliderSlide = $('.flexslider-slide');

        /* Flexslider JS
         ====================================================== */

        $flexsliderFade.flexslider({
            animation: 'fade',
            prevText: '<i class="flexslider-icon ti-angle-left"></i>',
            nextText: '<i class="flexslider-icon ti-angle-right"></i>'
        });
        $flexsliderSlide.flexslider({
            animation: 'slide',
            prevText: '<i class="flexslider-icon ti-arrow-left"></i>',
            nextText: '<i class="flexslider-icon ti-arrow-right"></i>'
        });

        /* Flexslider JS EOC */
    };
    WebPanda.slickSlider = function () {
        var $slickSingle = $('.yit-slick-single'),
                $slickThumbSlider = $('.yit-slick-thumbslider-for'),
                $slickThumbSliderNav = $('.yit-slick-thumbslider-nav');

        /* Slick Slider JS BOC
         ====================================================== */
        $slickSingle.slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        });

        /* Slick Slider JS EOC */

        // Slick Tab Slider JS BOC
        $slickThumbSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            asNavFor: '.yit-slick-thumbslider-nav'
        });
        $slickThumbSliderNav.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.yit-slick-thumbslider-for',
            dots: true,
            centerMode: true,
            autoplay: true,
            focusOnSelect: true
        });
    };
    WebPanda.onScroll = function () {

        var goTop;

        /* Scroll To Top JS BOC
         ====================================================== */
        goTop = document.getElementById('toTop');
        if (goTop != null) {
            goTop.addEventListener('click', function (e) {
                return jQuery('html, body').animate({
                    scrollTop: 0
                }, 800),
                    !1;
            });
        }
        jQuery(window).scroll(function () {
            150 < jQuery(this).scrollTop() ? jQuery('#toTop').fadeIn('slow') : jQuery('#toTop').fadeOut('slow');
        });

        /* Scroll To Top JS EOC */

        /* On Scroll Logo Change JS BOC
         ====================================================== */
        $(window).scroll(function () {
            var y = $(window).scrollTop(),
                    $jsScrollLogo = $('#yit-js-scroll-logo'),
                    $normalLogo = $('.normal-logo');


            // add both logo here
            var colorlogo = 'images/logo/webpanda-logo.png'; // add color logo here (option logo)
            var defaultlogo = 'images/logo/webpanda-logo-dark.png'; // add default logo here

            if (200 <= y) {
                $jsScrollLogo.attr('src', colorlogo);
                $('.normal-logo').addClass('on-scroll-logo animated fadeIn');
            } else {
                $jsScrollLogo.attr('src', defaultlogo);
                $normalLogo.removeClass('on-scroll-logo animated fadeIn');
            }
        });

        /* On Scroll Logo Change JS EOC */

        /* Boostrap Components JS BOC
         ====================================================== */

        // Tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // Popovers
        $('[data-toggle="popover"]').popover();


        // Blog Carousel JS EOC

        /* One Page Scroll JS BOF
         ====================================================== */
        $('.yit-scroll-nav').find('a[href^=\'#\']').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 40}, 1000);
        });
    };

    WebPanda.dataTimePicker = function () {

        // Datetime picker
        var dataTogglepopover = $('[data-toggle="popover"]'),
                dateTimePicker1 = $('#datetimepicker1'),
                dateTimePicker2 = $('#datetimepicker2'),
                dateTimePicker4 = $('#datetimepicker4'),
                dateTimePicker5 = $('#datetimepicker5'),
                pickupTime = $('#pickup-time'),
                dropDate = $('#drop-date'),
                dropTime = $('#drop-time'),
                pickupDate = $('#pickup-date');

        dataTogglepopover.popover();

        if (dateTimePicker1.length) {
            dateTimePicker1.datetimepicker({
                format: 'YYYY-MM-DD hh:mm A',
                debug: false // for developer debug style and code (default:false)
            });
        }

        // Bootstrap DTP Picker
        if (pickupDate.length) {
            pickupDate.datetimepicker({
                format: 'YYYY-MM-DD',
                debug: false // for developer debug style and code (default:false)
            });
        }
        if (pickupTime.length) {
            pickupTime.datetimepicker({
                format: 'LT',
                debug: false // for developer debug style and code (default:false)
            });
        }
        if (dropDate.length) {
            dropDate.datetimepicker({
                format: 'YYYY-MM-DD',
                debug: false // for developer debug style and code (default:false)
            });
        }

        if (dropTime.length) {
            dropTime.datetimepicker({
                format: 'LT',
                debug: false // for developer debug style and code (default:false)
            });
        }

        // Time Only
        if (dateTimePicker2.length) {
            dateTimePicker2.datetimepicker({
                format: 'LT'
            });
        }

        // Date Only
        if (dateTimePicker2.length) {
            dateTimePicker2.datetimepicker({
                format: 'L'
            });
        }

        // No Icon
        if (dateTimePicker4.length) {
            dateTimePicker4.datetimepicker();
        }

        // View Mode
        if (dateTimePicker5.length) {
            dateTimePicker5.datetimepicker({
                viewMode: 'years'
            });
        }
    };

    /* Call function once document ready */
    $document.ready(function () {
        var rotate = $('#rotate'),
                dataToggletooltip = $('[data-toggle="tooltip"]');
        WebPanda.slider();
        WebPanda.generateMap();
        //WebPanda.twitterLive();
        WebPanda.niceScroll();
        WebPanda.googleDemoMap();
        WebPanda.fitVids();
        WebPanda.niceSelect();
        WebPanda.formValidation();
        //WebPanda.instaFeed();
        WebPanda.retinaImage();
        WebPanda.countDown();
        WebPanda.pieChart();
        WebPanda.skillBar();
        WebPanda.jGallery();
        WebPanda.magnificPopup();
        WebPanda.masonaryIsotop();
        WebPanda.counter();
        WebPanda.stellar();
        WebPanda.swiper();
        WebPanda.navigation();
        WebPanda.flexSlider();
        WebPanda.slickSlider();
        WebPanda.onScroll();

        /* WOW Animation JS BOC
         ====================================================== */
        new WOW().init();
        rotate.rotaterator({fadeSpeed: 1000, pauseSpeed: 700});

        // Tooltip
        dataToggletooltip.tooltip();

        /* One Page Scroll JS EOC */
    });
}(jQuery));

/* Custom Google Map JS BOC
 ==============================================================  */
function generatemap(elementid, lat, lang, address) {

    var mapElement = document.getElementById(elementid);
    var mapMarker,
            colorPri;
    if (null != mapElement) {
        google.maps.event.addDomListener(window, 'load', init);
    }

    // Map Icon
    mapMarker = '/images/map-marker.png';
    colorPri = '#F12D34';

    function init() {
        var myLatLng = new google.maps.LatLng(lat, lang);
        var mapOptions = {
            zoom: 10, // Controls ZOOM

            // Map Settings
            disableDefaultUI: true,
            scrollwheel: true,
            scaleControl: true,
            // The latitude and longitude to center the map (always required)
            center: myLatLng, // Miami

            styles: [{
                    stylers: [{
                            hue: '#424449'
                        }, {
                            invert_lightness: true
                        }, {
                            saturation: -88
                        }, {
                            lightness: 36
                        }, {
                            gamma: 0.5
                        }]
                }, {
                    featureType: 'water',
                    elementType: 'geometry'
                }]
        };

        // Maps Address
        var map = new google.maps.Map(mapElement, mapOptions);
        var infoWindow = new google.maps.InfoWindow({
            content: '<div style="width:100%;float:left;"><div style="float:left;"><p style="font-size:14px;text-align:center;"><strong>' + address + '</strong></p></div></div>'
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: mapMarker
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, this);
        });
    }
}

/* Custom Rotate Text Fade Slider JS
 ====================================================== */
(function ($) {
    $.fn.extend({
        rotaterator: function (options) {
            var defaults = {
                fadeSpeed: 1000,
                pauseSpeed: 700,
                child: null
            };
            var options = $.extend(defaults, options);
            var next = '';
            return this.each(function () {
                var o = options;
                var obj = $(this);
                var items = $(obj.children(), obj);
                items.each(function () {
                    $(this).hide();
                });
                if (!o.child) {
                    next = $(obj).children(':first');
                } else {
                    next = o.child;
                }
                $(next).fadeIn(o.fadeSpeed, function () {
                    $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
                        var next = $(this).next();
                        if (0 == next.length) {
                            next = $(obj).children(':first');
                        }
                        $(obj).rotaterator({child: next, fadeSpeed: o.fadeSpeed, pauseSpeed: o.pauseSpeed});
                    });
                });
            });
        }
    });
}(jQuery));
