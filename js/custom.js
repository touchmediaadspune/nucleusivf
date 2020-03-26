var THEMEMASCOT = THEMEMASCOT || {};

(function($) {
    "use strict";



    THEMEMASCOT.isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (THEMEMASCOT.isMobile.Android() || THEMEMASCOT.isMobile.BlackBerry() || THEMEMASCOT.isMobile.iOS() || THEMEMASCOT.isMobile.Opera() || THEMEMASCOT.isMobile.Windows());
        }
    };

    THEMEMASCOT.isRTL = {
        check: function() {
            if( $( "html" ).attr("dir") == "rtl" ) {
                return true;
            } else {
                return false;
            }
        }
    };

    THEMEMASCOT.initialize = {

        init: function() {
            THEMEMASCOT.initialize.TM_datePicker();
            THEMEMASCOT.initialize.TM_onLoadModal();
            THEMEMASCOT.initialize.TM_platformDetect();
            THEMEMASCOT.initialize.TM_customDataAttributes();
            THEMEMASCOT.initialize.TM_parallaxBgInit();
            THEMEMASCOT.initialize.TM_resizeFullscreen();
            THEMEMASCOT.initialize.TM_magnificPopup_lightbox();
            THEMEMASCOT.initialize.TM_prettyPhoto_lightbox();
            THEMEMASCOT.initialize.TM_nivolightbox();
            THEMEMASCOT.initialize.TM_wow();
            THEMEMASCOT.initialize.TM_equalHeightDivs();
        },


        /* ---------------------------------------------------------------------- */
        /* ------------------------------ Hash Forwarding  ---------------------- */
        /* ---------------------------------------------------------------------- */
        TM_datePicker: function() {
            $( ".date-picker" ).datepicker();
        },

        /* ---------------------------------------------------------------------- */
        /* ------------------------------ Hash Forwarding  ---------------------- */
        /* ---------------------------------------------------------------------- */
        TM_onLoadModal: function() {
            var $modal = $('.modal-on-load');
            if( $modal.length > 0 ) {
                $modal.each( function(){
                    var element             = $(this),
                        elementTarget       = element.attr('data-target'),
                        elementTargetValue  = elementTarget.split('#')[1],
                        elementDelay        = element.attr('data-delay'),
                        elementTimeout      = element.attr('data-timeout'),
                        elementAnimateIn    = element.attr('data-animate-in'),
                        elementAnimateOut   = element.attr('data-animate-out');

                    if( !element.hasClass('enable-cookie') ) { $.removeCookie( elementTargetValue ); }

                    if( element.hasClass('enable-cookie') ) {
                        var elementCookie = $.cookie( elementTargetValue );

                        if( typeof elementCookie !== 'undefined' && elementCookie == '0' ) {
                            return true;
                        }
                    }

                    if( !elementDelay ) {
                        elementDelay = 1500;
                    } else {
                        elementDelay = Number(elementDelay) + 1500;
                    }

                    var t = setTimeout(function() {
                        $.magnificPopup.open({
                            items: { src: elementTarget },
                            type: 'inline',
                            mainClass: 'mfp-no-margins mfp-fade',
                            closeBtnInside: false,
                            fixedContentPos: true,
                            removalDelay: 500,
                            callbacks: {
                                open: function(){
                                    if( elementAnimateIn !== '' ) {
                                        $(elementTarget).addClass( elementAnimateIn + ' animated' );
                                    }
                                },
                                beforeClose: function(){
                                    if( elementAnimateOut !== '' ) {
                                        $(elementTarget).removeClass( elementAnimateIn ).addClass( elementAnimateOut );
                                    }
                                },
                                afterClose: function() {
                                    if( elementAnimateIn !== '' || elementAnimateOut !== '' ) {
                                        $(elementTarget).removeClass( elementAnimateIn + ' ' + elementAnimateOut + ' animated' );
                                    }
                                    if( element.hasClass('enable-cookie') ) {
                                        $.cookie( elementTargetValue, '0' );
                                    }
                                }
                            }
                        }, 0);
                    }, Number(elementDelay) );

                    if( elementTimeout !== '' ) {
                        var to = setTimeout(function() {
                            $.magnificPopup.close();
                        }, Number(elementDelay) + Number(elementTimeout) );
                    }
                });
            }
        },

        /* ---------------------------------------------------------------------- */
        /* ------------------------------- Platform detect  --------------------- */
        /* ---------------------------------------------------------------------- */
        TM_platformDetect: function() {
            if (THEMEMASCOT.isMobile.any()) {
                $html.addClass("mobile");
            } else {
                $html.addClass("no-mobile");
            }
        },


        /* ---------------------------------------------------------------------- */
        /* ------------------------------ Hash Forwarding  ---------------------- */
        /* ---------------------------------------------------------------------- */
        TM_hashForwarding: function() {
            if (window.location.hash) {
                var hash_offset = $(window.location.hash).offset().top;
                $("html, body").animate({
                    scrollTop: hash_offset
                });
            }
        },


        /* ---------------------------------------------------------------------- */
        /* ----------------------- Background image, color ---------------------- */
        /* ---------------------------------------------------------------------- */
        TM_customDataAttributes: function() {
            $('[data-bg-color]').each(function() {
                $(this).css("cssText", "background: " + $(this).data("bg-color") + " !important;");
            });
            $('[data-bg-img]').each(function() {
                $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
            });
            $('[data-text-color]').each(function() {
                $(this).css('color', $(this).data("text-color"));
            });
            $('[data-font-size]').each(function() {
                $(this).css('font-size', $(this).data("font-size"));
            });
            $('[data-height]').each(function() {
                $(this).css('height', $(this).data("height"));
            });
            $('[data-border]').each(function() {
                $(this).css('border', $(this).data("border"));
            });
            $('[data-margin-top]').each(function() {
                $(this).css('margin-top', $(this).data("margin-top"));
            });
            $('[data-margin-right]').each(function() {
                $(this).css('margin-right', $(this).data("margin-right"));
            });
            $('[data-margin-bottom]').each(function() {
                $(this).css('margin-bottom', $(this).data("margin-bottom"));
            });
            $('[data-margin-left]').each(function() {
                $(this).css('margin-left', $(this).data("margin-left"));
            });
        },



        /* ---------------------------------------------------------------------- */
        /* -------------------------- Background Parallax ----------------------- */
        /* ---------------------------------------------------------------------- */
        TM_parallaxBgInit: function() {
            if (!THEMEMASCOT.isMobile.any()) {
                $.stellar({
                  horizontalScrolling: false,
                  verticalOffset: 150,
                  horizontalOffset: 0,
                  responsive: true
                });
            } else {
                $('.parallax').addClass("mobile-parallax");
            }
        },

        /* ---------------------------------------------------------------------- */
        /* --------------------------- Home Resize Fullscreen ------------------- */
        /* ---------------------------------------------------------------------- */
        TM_resizeFullscreen: function() {
            var windowHeight = $window.height();
            $('.fullscreen, .revslider-fullscreen').height(windowHeight);
        },

        /* ---------------------------------------------------------------------- */
        /* ----------------------------- Magnific Popup ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_magnificPopup_lightbox: function() {
            
            $('.image-popup-lightbox').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
                image: {
                    verticalFit: true
                }
            });

            $('.image-popup-vertical-fit').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: true
                }
            });

            $('.image-popup-fit-width').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                image: {
                    verticalFit: false
                }
            });

            $('.image-popup-no-margins').magnificPopup({
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
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });

            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });

            $('.zoom-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function(item) {
                        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                    }
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function(element) {
                        return element.find('img');
                    }
                }
                
            });
            

            $('.popup-with-zoom-anim').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,

                midClick: true,
                removalDelay: 300,
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
                mainClass: 'my-mfp-slide-bottom'
            });
            
            $('.popup-with-form').magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '#name',

                mainClass: 'mfp-no-margins mfp-fade',
                closeBtnInside: false,
                fixedContentPos: true,

                // When elemened is focused, some mobile browsers in some cases zoom in
                // It looks not nice, so we disable it:
                callbacks: {
                  beforeOpen: function() {
                    if($(window).width() < 700) {
                      this.st.focus = false;
                    } else {
                      this.st.focus = '#name';
                    }
                  }
                }
            });

            /*================================
                portfolio magnificPopup
              ================================*/
            var $lightboxImage = $('[data-lightbox="image"]'),
                $lightboxGallery = $('[data-lightbox="gallery"]'),
                $lightboxIframe = $('[data-lightbox="iframe"]'),
                $lightboxInline = $('[data-lightbox="inline"]');

            //lightbox image
            if( $lightboxImage.length > 0 ) {
                $lightboxImage.magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    fixedContentPos: true,
                    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                    image: {
                        verticalFit: true
                    }
                });
            }

            //lightbox gallery
            if( $lightboxGallery.length > 0 ) {
                $lightboxGallery.each(function() {
                    var element = $(this);
                    element.magnificPopup({
                        delegate: 'a[data-lightbox="gallery-item"]',
                        type: 'image',
                        closeOnContentClick: true,
                        closeBtnInside: false,
                        fixedContentPos: true,
                        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                        image: {
                            verticalFit: true
                        },
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                        },
                        zoom: {
                          enabled: true,
                          duration: 300, // don't foget to change the duration also in CSS
                          opener: function(element) {
                            return element.find('img');
                          }
                        }

                    });
                });
            }

            //lightbox iframe
            if( $lightboxIframe.length > 0 ) {
                $lightboxIframe.magnificPopup({
                    disableOn: 600,
                    type: 'iframe',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }

            //lightbox inline
            if( $lightboxInline.length > 0 ) {
                $lightboxInline.magnificPopup({
                    type: 'inline',
                    mainClass: 'mfp-no-margins mfp-zoom-in',
                    closeBtnInside: false,
                    fixedContentPos: true
                });
            }
        },

        /* ---------------------------------------------------------------------- */
        /* ----------------------------- lightbox popup ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_prettyPhoto_lightbox: function() {
            //prettyPhoto lightbox
            $("a[data-rel^='prettyPhoto']").prettyPhoto({
                hook: 'data-rel',
                animation_speed:'normal',
                theme:'light_square',
                slideshow:3000, 
                autoplay_slideshow: false,
                social_tools: false
            });
        },

        /* ---------------------------------------------------------------------- */
        /* ------------------------------ Nivo Lightbox ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_nivolightbox: function() {
            $('a[data-lightbox-gallery]').nivoLightbox({
                effect: 'fadeScale'
            });
        },



        /* ---------------------------------------------------------------------- */
        /* ---------------------------- Wow initialize  ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_wow: function() {
            var wow = new WOW({
                mobile: false // trigger animations on mobile devices (default is true)
            });
            wow.init();
        },

        /* ---------------------------------------------------------------------- */
        /* ---------------------------- equalHeights ---------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_equalHeightDivs: function() {
            /* equal heigh */
            var $equal_height = $('.equal-height');
            $equal_height.children('div').css('min-height', 'auto');
            $equal_height.equalHeights();

            /* equal heigh inner div */
            var $equal_height_inner = $('.equal-height-inner');
            $equal_height_inner.children('div').css('min-height', 'auto');
            $equal_height_inner.children('div').children('div').css('min-height', 'auto');
            $equal_height_inner.equalHeights();
            $equal_height_inner.children('div').each(function() {
                $(this).children('div').css('min-height', $(this).css('min-height'));
            });

            /* pricing-table equal heigh*/
            var $equal_height_pricing_table = $('.equal-height-pricing-table');
            $equal_height_pricing_table.children('div').css('min-height', 'auto');
            $equal_height_pricing_table.children('div').children('div').css('min-height', 'auto');
            $equal_height_pricing_table.equalHeights();
            $equal_height_pricing_table.children('div').each(function() {
                $(this).children('div').css('min-height', $(this).css('min-height'));
            });

        }

    };


    THEMEMASCOT.header = {

        init: function() {

            var t = setTimeout(function() {
                THEMEMASCOT.header.TM_fullscreenMenu();
                THEMEMASCOT.header.TM_scrollToFixed();
                THEMEMASCOT.header.TM_topnavAnimate();
                THEMEMASCOT.header.TM_scrolltoTarget();
                THEMEMASCOT.header.TM_menuzord();
                THEMEMASCOT.header.TM_navLocalScorll();
                THEMEMASCOT.header.TM_menuCollapseOnClick();
                THEMEMASCOT.header.TM_homeParallaxFadeEffect();
            }, 0);

        },


        /* ---------------------------------------------------------------------- */
        /* ------------------------- menufullpage ---------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_fullscreenMenu: function() {
            var $menufullpage = $('.menu-full-page .fullpage-nav-toggle');
            $menufullpage.menufullpage();
        },

        /* ---------------------------------------------------------------------------- */
        /* --------------------------- One Page Nav close on click -------------------- */
        /* ---------------------------------------------------------------------------- */
        TM_menuCollapseOnClick: function() {
            $(document).on('click', '.onepage-nav a', function(e) {
                $('.showhide').trigger('click');
                return false;
            });
        },

        /* ---------------------------------------------------------------------- */
        /* ----------- Active Menu Item on Reaching Different Sections ---------- */
        /* ---------------------------------------------------------------------- */
        TM_activateMenuItemOnReach: function() {
            var $onepage_nav = $('.onepage-nav');
            var cur_pos = $window.scrollTop() + 2;
            var nav_height = $onepage_nav.outerHeight();
            $sections.each(function() {
                var top = $(this).offset().top - nav_height - 80,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
                    $sections.removeClass('current').removeClass('active');

                    //$(this).addClass('current').addClass('active');
                    $onepage_nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
                }
            });
        },

        /* ---------------------------------------------------------------------- */
        /* ------------------- on click scrool to target with smoothness -------- */
        /* ---------------------------------------------------------------------- */
        TM_scrolltoTarget: function() {
            //jQuery for page scrolling feature - requires jQuery Easing plugin
            $('.smooth-scroll-to-target, .fullscreen-onepage-nav a').on('click', function(e) {
                e.preventDefault();

                var $anchor = $(this);
                
                var $hearder_top = $('.header .header-nav');
                var hearder_top_offset = 0;
                if ($hearder_top[0]){
                    hearder_top_offset = $('.header .header-nav').outerHeight(true);
                } else {
                    hearder_top_offset = 0;
                }

                var top = $($anchor.attr('href')).offset().top - hearder_top_offset;
                $('html, body').stop().animate({
                    scrollTop: top
                }, 1500, 'easeInOutExpo');

            });
        },

        /* ---------------------------------------------------------------------- */
        /* -------------------------- Scroll navigation ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_navLocalScorll: function() {
            var data_offset = -60;
            $("#menuzord .menuzord-menu, #menuzord-right .menuzord-menu").localScroll({
                target: "body",
                duration: 800,
                offset: data_offset,
                easing: "easeInOutExpo"
            });

            $("#menuzord-side-panel .menuzord-menu, #menuzord-verticalnav .menuzord-menu").localScroll({
                target: "body",
                duration: 800,
                offset: 0,
                easing: "easeInOutExpo"
            });
        },

        /* ---------------------------------------------------------------------------- */
        /* --------------------------- collapsed menu close on click ------------------ */
        /* ---------------------------------------------------------------------------- */
        TM_scrollToFixed: function() {
            $('.navbar-scrolltofixed').scrollToFixed();
            $('.scrolltofixed').scrollToFixed({
                marginTop: $('.header .header-nav').outerHeight(true) + 10,
                limit: function() {
                    var limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    return limit;
                }
            });
        },

        /* ----------------------------------------------------------------------------- */
        /* --------------------------- Menuzord - Responsive Megamenu ------------------ */
        /* ----------------------------------------------------------------------------- */
        TM_menuzord: function() {
            $("#menuzord").menuzord({
                align: "left",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
            $("#menuzord-right").menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
            $("#menuzord-side-panel").menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-right'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
            
            $("#menuzord-verticalnav").menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-right'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
        },

        /* ---------------------------------------------------------------------- */
        /* --------------------------- Waypoint Top Nav Sticky ------------------ */
        /* ---------------------------------------------------------------------- */
        TM_topnavAnimate: function() {
            if ($window.scrollTop() > (50)) {
                $(".navbar-sticky-animated").removeClass("animated-active");
            } else {
                $(".navbar-sticky-animated").addClass("animated-active");
            }

            if ($window.scrollTop() > (50)) {
                $(".navbar-sticky-animated .header-nav-wrapper .container").removeClass("pt-10").removeClass("pb-10");
            } else {
                $(".navbar-sticky-animated .header-nav-wrapper .container").addClass("pt-10").addClass("pb-10");
            }
        },

        /* ---------------------------------------------------------------------- */
        /* ---------------- home section on scroll parallax & fade -------------- */
        /* ---------------------------------------------------------------------- */
        TM_homeParallaxFadeEffect: function() {
            if ($window.width() >= 1200) {
                var scrolled = $window.scrollTop();
                $('.content-fade-effect .home-content .home-text').css('padding-top', (scrolled * 0.0610) + '%').css('opacity', 1 - (scrolled * 0.00120));
            }
        },

    };

    THEMEMASCOT.widget = {

        init: function() {

            var t = setTimeout(function() {
                THEMEMASCOT.widget.TM_masonryIsotop();
                THEMEMASCOT.widget.TM_funfact();
                THEMEMASCOT.widget.TM_accordion_toggles();
                THEMEMASCOT.widget.TM_tooltip();
            }, 0);

        },


        /* ---------------------------------------------------------------------- */
        /* ----------------------------- Masonry Isotope ------------------------ */
        /* ---------------------------------------------------------------------- */
        TM_masonryIsotop: function() {
            var isotope_mode;
            if ($portfolio_gallery.hasClass("masonry")){
                isotope_mode = "masonry";
            } else{
                isotope_mode = "fitRows";
            }

            //isotope firsttime loading
            $portfolio_gallery.imagesLoaded(function(){
                $portfolio_gallery.isotope({
                    itemSelector: '.portfolio-item',
                    layoutMode: isotope_mode,
                    filter: "*"
                });
            });
            
            //isotope filter
            $portfolio_filter.click(function(){
                $portfolio_filter.removeClass("active");
                $(this).addClass("active");
                var fselector = $(this).data('filter');

                $portfolio_gallery.isotope({
                    itemSelector: '.portfolio-item',
                    layoutMode: isotope_mode,
                    filter: fselector
                });
                return false;
            });
            
            THEMEMASCOT.slider.TM_flexslider();

        },

        TM_portfolioFlexSliderGalleryPopUpInit: function() {
            var $flexSliders = $portfolio_gallery.find('.slides');
            $flexSliders.each(function () {
                var _items = $(this).find("li > a");
                var items = [];
                for (var i = 0; i < _items.length; i++) {
                    items.push({src: $(_items[i]).attr("href"), title: $(_items[i]).attr("title")});
                }
                $(this).parent().parent().parent().find(".icons-holder").magnificPopup({
                    items: items,
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
            });
        },

        TM_isotopeGridRearrange: function() {
            var isotope_mode;
            if ($portfolio_gallery.hasClass("masonry")){
                isotope_mode = "masonry";
            } else{
                isotope_mode = "fitRows";
            }
            $portfolio_gallery.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: isotope_mode
            });
        },

        TM_isotopeGridShuffle: function() {
            $portfolio_gallery.isotope('shuffle');
        },
        

        /* ---------------------------------------------------------------------- */
        /* ------------------------ Funfact Number Counter ---------------------- */
        /* ---------------------------------------------------------------------- */
        TM_funfact: function() {
            var $animate_number = $('.animate-number');
            $animate_number.appear();
            $(document.body).on('appear', '.animate-number', function() {
                $animate_number.each(function() {
                    var current_item = $(this);
                    if (!current_item.hasClass('appeared')) {
                        current_item.animateNumbers(current_item.attr("data-value"), true, parseInt(current_item.attr("data-animation-duration"), 10)).addClass('appeared');
                    }
                });
            });
        },

        /* ---------------------------------------------------------------------- */
        /* ------------------------- accordion & toggles ------------------------ */
        /* ---------------------------------------------------------------------- */
        TM_accordion_toggles: function() {
            var $panel_group_collapse = $('.panel-group .collapse');
            $panel_group_collapse.on("show.bs.collapse", function(e) {
                $(this).closest(".panel-group").find("[href='#" + $(this).attr("id") + "']").addClass("active");
            });
            $panel_group_collapse.on("hide.bs.collapse", function(e) {
                $(this).closest(".panel-group").find("[href='#" + $(this).attr("id") + "']").removeClass("active");
            });
        },

        /* ---------------------------------------------------------------------- */
        /* ------------------------------- tooltip  ----------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_tooltip: function() {
            $('[data-toggle="tooltip"]').tooltip();
        },
    };

    THEMEMASCOT.slider = {

        init: function() {

            var t = setTimeout(function() {
                THEMEMASCOT.slider.TM_typedAnimation();
                THEMEMASCOT.slider.TM_flexslider();
                THEMEMASCOT.slider.TM_owlCarousel();
                THEMEMASCOT.slider.TM_maximageSlider();
            }, 0);

        },


        /* ---------------------------------------------------------------------- */
        /* -------------------------- Typed Text Carousel  ---------------------- */
        /* ---------------------------------------------------------------------- */
        TM_typedAnimation: function() {
            if ($('.typed-text-carousel').length) {
                $('.typed-text-carousel').each(function() {
                    var string_1 = $(this).find('span:first-child').text();
                    var string_2 = $(this).find('span:nth-child(2)').text();
                    var string_3 = $(this).find('span:nth-child(3)').text();
                    var str = '';
                    var $this = $(this);
                    if (!string_2.trim() || !string_3.trim()) {
                        str = [string_1];
                    }
                    if (!string_3.trim() && string_2.length) {
                        str = [string_1, string_2];
                    }
                    if (string_1.length && string_2.length && string_3.length) {
                        str = [string_1, string_2, string_3];
                    }
                    var speed = $(this).data('speed');
                    var back_delay = $(this).data('back_delay');
                    var loop = $(this).data('loop');
                    $(this).typed({
                        strings: str,
                        typeSpeed: speed,
                        backSpeed: 0,
                        backDelay: back_delay,
                        cursorChar: "|",
                        loop: loop,
                        contentType: 'text',
                        loopCount: false
                    });
                });
            }
        },


        /* ---------------------------------------------------------------------- */
        /* -------------------------------- flexslider  ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_flexslider: function() {
            var $flexSlider = $('.flexslider-wrapper').find('.flexslider');
            if( $flexSlider.length > 0 ){
                $flexSlider.each(function() {
                    THEMEMASCOT.widget.TM_portfolioFlexSliderGalleryPopUpInit();
                    var $flexsSlider = $(this),
                        flexsAnimation = $flexsSlider.parent('.fslider').attr('data-animation'),
                        flexsEasing = $flexsSlider.parent('.fslider').attr('data-easing'),
                        flexsDirection = $flexsSlider.parent('.fslider').attr('data-direction'),
                        flexsSlideshow = $flexsSlider.parent('.fslider').attr('data-slideshow'),
                        flexsSlideShowSpeed = $flexsSlider.parent('.fslider').attr('data-slidespeed'),
                        flexsAnimationSpeed = $flexsSlider.parent('.fslider').attr('data-animationspeed'),
                        flexsControlNav = $flexsSlider.parent('.fslider').attr('data-controlnav'),
                        flexsArrows = $flexsSlider.parent('.fslider').attr('data-arrows'),
                        flexsThumbnails = $flexsSlider.parent('.fslider').attr('data-thumbnails'),
                        flexsPauseHover = $flexsSlider.parent('.fslider').attr('data-pausehover');

                    if( !flexsAnimation ) { flexsAnimation = 'slide'; }
                    if( !flexsEasing || flexsEasing == 'swing' ) {
                        flexsEasing = 'swing';
                    }
                    if( !flexsDirection ) { flexsDirection = 'horizontal'; }
                    if( !flexsSlideshow ) { flexsSlideshow = true; } else { flexsSlideshow = false; }
                    if( !flexsSlideShowSpeed ) { flexsSlideShowSpeed = 5000; }
                    if( !flexsAnimationSpeed ) { flexsAnimationSpeed = 600; }
                    if( flexsControlNav == 'false' ) { flexsControlNav = false; } else { flexsControlNav = true; }
                    if( flexsThumbnails == 'true' ) { flexsControlNav = 'thumbnails'; }
                    if( flexsArrows == 'false' ) { flexsArrows = false; } else { flexsArrows = true; }
                    if( flexsPauseHover == 'false' ) { flexsPauseHover = false; } else { flexsPauseHover = true; }

                    $flexsSlider.flexslider({
                        selector: ".slides > li",
                        animation: flexsAnimation,
                        easing: flexsEasing,
                        direction: flexsDirection,
                        slideshow: flexsSlideshow,
                        slideshowSpeed: Number(flexsSlideShowSpeed),
                        animationSpeed: Number(flexsAnimationSpeed),
                        pauseOnHover: flexsPauseHover,
                        controlNav: flexsControlNav,
                        directionNav: flexsArrows,
                        start: function(slider){
                            imagesLoaded($portfolio_gallery, function(){
                                setTimeout(function(){
                                    $portfolio_filter_first_child.trigger("click");
                                },500);
                            });
                            //var t = setTimeout( function(){ $('#portfolio.portfolio-masonry,#portfolio.portfolio-full,#posts.post-masonry').isotope('layout'); }, 1200 );
                            THEMEMASCOT.initialize.TM_magnificPopup_lightbox();
                            THEMEMASCOT.initialize.TM_prettyPhoto_lightbox();
                            THEMEMASCOT.initialize.TM_nivolightbox();
                        },
                        after: function(){
                        }
                    });
                });
            }
        },

        /* ---------------------------------------------------------------------- */
        /* -------------------------------- Owl Carousel  ----------------------- */
        /* ---------------------------------------------------------------------- */
        TM_owlCarousel: function() {
            $(".text-carousel").owlCarousel({
                rtl: THEMEMASCOT.isRTL.check(),
                autoplay: true,
                autoplayTimeout: 2000,
                loop: true,
                items: 1,
                dots: true,
                nav: false,
                navText: [
                    '<i class="pe-7s-angle-left"></i>',
                    '<i class="pe-7s-angle-right"></i>'
                ]
            });

            
            $(".gallery-list-carosel").owlCarousel({
                rtl: THEMEMASCOT.isRTL.check(),
                autoplay: false,
                autoplayTimeout: 4000,
                loop: true,
                margin: 15,
                dots: false,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],
                responsive: {
                    0: {
                        items: 2,
                        center: false
                    },
                    600: {
                        items: 4,
                        center: false
                    },
                    960: {
                        items: 6
                    },
                    1170: {
                        items: 6
                    },
                    1300: {
                        items: 6
                    }
                }
            });

            $(".testimonial-carousel-2col").owlCarousel({
                rtl: THEMEMASCOT.isRTL.check(),
                autoplay: false,
                autoplayTimeout: 4000,
                loop: true,
                margin: 15,
                dots: false,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],
                responsive: {
                    0: {
                        items: 1,
                        center: false
                    },
                    600: {
                        items: 1,
                        center: false
                    },
                    960: {
                        items: 1
                    },
                    1170: {
                        items: 1
                    },
                    1300: {
                        items: 1
                    }
                }
            });      
        },

        /* ---------------------------------------------------------------------- */
        /* ---------- maximage Fullscreen Parallax Background Slider  ----------- */
        /* ---------------------------------------------------------------------- */
        TM_maximageSlider: function() {
            $('#maximage').maximage({
                cycleOptions: {
                    fx: 'fade',
                    speed: 1500,
                    prev: '.img-prev',
                    next: '.img-next'
                }
            });
        }
    };

    THEMEMASCOT.documentOnResize = {

        init: function() {

            var t = setTimeout(function() {
                THEMEMASCOT.initialize.TM_equalHeightDivs();
                THEMEMASCOT.initialize.TM_resizeFullscreen();
            }, 0);

        }

    };


    THEMEMASCOT.documentOnLoad = {

        init: function() {

            var t = setTimeout(function() {
                THEMEMASCOT.initialize.TM_hashForwarding();
                THEMEMASCOT.initialize.TM_parallaxBgInit();
            }, 0);

            $window.trigger("scroll");
            $window.trigger("resize");

        }

    };

    //document ready
    THEMEMASCOT.documentOnReady = {

        init: function() {
            THEMEMASCOT.initialize.init();
            THEMEMASCOT.header.init();
            THEMEMASCOT.slider.init();
            THEMEMASCOT.widget.init();
            THEMEMASCOT.documentOnReady.windowscroll();
        },

        windowscroll: function(){

            $window.on( 'scroll', function(){

                THEMEMASCOT.header.TM_activateMenuItemOnReach();
                THEMEMASCOT.header.TM_topnavAnimate();

            });
        }

    };

    /* ---------------------------------------------------------------------- */
    /* -------------------------- Declare Variables ------------------------- */
    /* ---------------------------------------------------------------------- */
    var $window = $(window),
        $html = $('html'),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $header = $('#header'),
        $footer = $('#footer'),
        $sections = $('section'),
        $portfolio_gallery = $(".portfolio-gallery"),
        $portfolio_filter = $(".portfolio-filter a"),
        $portfolio_filter_first_child = $(".portfolio-filter a:eq(0)"),
        $portfolio_flex_slider = $(".portfolio-slider");

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- Call Functions -------------------------- */
    /* ---------------------------------------------------------------------- */
    
    $(document).ready(THEMEMASCOT.documentOnReady.init);
    $window.load(THEMEMASCOT.documentOnLoad.init);
    $window.on('resize', THEMEMASCOT.documentOnResize.init);

})(jQuery);



$(document).ready(function() {
    // $('.weekcou li').on('mouseover', function(e) {
    //     $(this).parent().find('li.theact').removeClass('theact');
    //     $(this).addClass('theact');
    // });

    // var a = 'hussain';
    // $('.icot1').hover(function(event) {
    //     
    // });
    var a = 'Medical Examination';
    var a1 = 'IVF Process'
    $('.icot1').hover(function() {
        $('.cntplace .icogroup p').text(a);
        $('.cntplace .icogroup').css({
            'background-color': '#f6d622'
        });
        $('.icot1 a.icover').css({
            'border': '10px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    }, function() {
        $('.cntplace .icogroup p').text(a1);
        $('.cntplace .icogroup').css({
            'background-color': '#e97195'
        });
        $('.icot1 a.icover').css({
            'border': '5px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    });

    var b = 'After Transfer';
    var b1 = 'IVF Process'
    $('.icot2').hover(function() {
        $('.cntplace .icogroup p').text(b);
        $('.cntplace .icogroup').css({
            'background-color': '#f09e1e'
        });
        $('.icot2 a.icover').css({
            'border': '10px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    }, function() {
        $('.cntplace .icogroup p').text(b1);
        $('.cntplace .icogroup').css({
            'background-color': '#e97195'
        });
        $('.icot2 a.icover').css({
            'border': '5px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    });

    var c = 'Stimulation';
    var c1 = 'IVF Process'
    $('.icot3').hover(function() {
        $('.cntplace .icogroup p').text(c);
        $('.cntplace .icogroup').css({
            'background-color': '#ff7380'
        });
        $('.icot3 a.icover').css({
            'border': '10px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    }, function() {
        $('.cntplace .icogroup p').text(c1);
        $('.cntplace .icogroup').css({
            'background-color': '#e97195'
        });
        $('.icot3 a.icover').css({
            'border': '5px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    });

    var d = 'Fertilization';
    var d1 = 'IVF Process'
    $('.icot4').hover(function() {
        $('.cntplace .icogroup p').text(d);
        $('.cntplace .icogroup').css({
            'background-color': '#69dceb'
        });
        $('.icot4 a.icover').css({
            'border': '10px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    }, function() {
        $('.cntplace .icogroup p').text(d1);
        $('.cntplace .icogroup').css({
            'background-color': '#e97195'
        });
        $('.icot4 a.icover').css({
            'border': '5px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    });

    var e = 'Egg Collection';
    var e1 = 'IVF Process'
    $('.icot5').hover(function() {
        $('.cntplace .icogroup p').text(e);
        $('.cntplace .icogroup').css({
            'background-color': '#c7d311'
        });
        $('.icot5 a.icover').css({
            'border': '10px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    }, function() {
        $('.cntplace .icogroup p').text(e1);
        $('.cntplace .icogroup').css({
            'background-color': '#e97195'
        });
        $('.icot5 a.icover').css({
            'border': '5px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    });

    var f = 'Sperm Collection';
    var f1 = 'IVF Process'
    $('.icot6').hover(function() {
        $('.cntplace .icogroup p').text(f);
        $('.cntplace .icogroup').css({
            'background-color': '#63ed89'
        });
        $('.icot6 a.icover').css({
            'border': '10px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    }, function() {
        $('.cntplace .icogroup p').text(f1);
        $('.cntplace .icogroup').css({
            'background-color': '#e97195'
        });
        $('.icot6 a.icover').css({
            'border': '5px solid #FFF',
            'transition': 'all 0.5s ease'
        });
    });
});

$(document).ready(function(){
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  var ul = $('.header-nav ul.menuzord-menu li a[href="'+filename+'"]');
  ul.parent().addClass('active');
});

$(document).ready(function(){
    
    $('.appmyForm #appsubmit').click(function() {
        var btn = true;
        $('.appmyForm input, textarea').each(function(){
            
            var n = $(this).val();
            if($.trim(n) == "")
            {
                $(this).css("border", "1px solid red");
                btn = false;
            }
            else {
                $(this).css("border", "1px solid #ccc");
            }
        });
        if(btn == true)
            {
              var mbtn = $('.appmyForm #appsubmit');
              mbtn.attr("disabled", true);
              mbtn.html("Sending.....");
              mbtn.css("cursor", "not-allowed");
            $.post( $(".appmyForm").attr("action"),
                    $(".appmyForm :input").serializeArray(),
                    function(data) {
                mbtn.attr("disabled", false);
                mbtn.html("SEND Email");
                mbtn.css("cursor", "pointer");
                if(data == "y")
                {
                  $('.appmyForm #errormsg2').html('Message Send Successfully');
                  // $('.mySec form.my_form input.r_btn').click();
                }
                else {
                  $(".appmyForm #errormsg").html(data);
                }
                setInterval(function(){ $(".appmyForm #errormsg2").html("");}, 5000);
                    });
            }
            console.log(btn);
       return false;
    })
})