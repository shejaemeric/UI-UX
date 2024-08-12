;(function($) {
    'use strict';
    $(window).on( 'elementor/frontend/init', function() {


        //-------------------service-------------------//

        elementorFrontend.hooks.addAction('frontend/element_ready/avrixservices.default',function($scope) {

            const servicesCarousel = new Swiper(".services-carousel", {
                // Optional parameters
                loop: true,
                autoplay: true,
                freeMode: true,
                grabCursor: true,
                slidesPerView: 1,
                spaceBetween: 30,
                // Navigation arrows
                navigation: {
                    nextEl: ".services-button-next",
                    prevEl: ".services-button-prev"
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1400: {
                        slidesPerView: 2.5,
                        spaceBetween: 60,
                    },

                    1800: {
                        spaceBetween: 60,
                        slidesPerView: 2.8,
                    },
                },
            });
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/avrixprojects.default',function($scope) {

            const projectStage = new Swiper(".project-center-stage-carousel", {
                // Optional parameters
                loop: true,
                freeMode: true,
                grabCursor: true,
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 30,
                autoplay: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                // Navigation arrows
                navigation: {
                    nextEl: ".project-button-next",
                    prevEl: ".project-button-prev"
                },
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        centeredSlides: false,
                    },
                    1200: {
                        slidesPerView: 2.5,
                        spaceBetween: 60,
                    },
                    1800: {
                        slidesPerView: 2.8,
                        spaceBetween: 80,
                    },
                },
            });


            // var expand;

            // $(function () {
            //     var $accordion, $wideScreen;
            //     $accordion = $('#accordion').children('li');
            //     $wideScreen = $(window).width() > 767;
            //     if ($wideScreen) {
            //         $accordion.on('mouseenter click', function (e) {
            //             var $this;
            //             e.stopPropagation();
            //             $this = $(this);
            //             if ($this.hasClass('out')) {
            //                 $this.addClass('out');
            //             } else {
            //                 $this.addClass('out');
            //                 $this.siblings().removeClass('out');
            //             }
            //         });
            //     } else {
            //         $accordion.on('touchstart touchend', function (e) {
            //             var $this;
            //             e.stopPropagation();
            //             $this = $(this);
            //             if ($this.hasClass('out')) {
            //                 $this.addClass('out');
            //             } else {
            //                 $this.addClass('out');
            //                 $this.siblings().removeClass('out');
            //             }
            //         });
            //     }
            // });
    

        });

        elementorFrontend.hooks.addAction('frontend/element_ready/avrixtabbuilder.default',function($scope) {

            $(function () {
                var $accordion, $wideScreen;
                $accordion = $('#accordion').children('li');
                $wideScreen = $(window).width() > 767;
                if ($wideScreen) {
                    $accordion.on('mouseenter click', function (e) {
                        var $this;
                        e.stopPropagation();
                        $this = $(this);
                        if ($this.hasClass('out')) {
                            $this.addClass('out');
                        } else {
                            $this.addClass('out');
                            $this.siblings().removeClass('out');
                        }
                    });
                } else {
                    $accordion.on('touchstart touchend', function (e) {
                        var $this;
                        e.stopPropagation();
                        $this = $(this);
                        if ($this.hasClass('out')) {
                            $this.addClass('out');
                        } else {
                            $this.addClass('out');
                            $this.siblings().removeClass('out');
                        }
                    });
                }
            });

            var width = $(window).width();
              if (width > 1023) {

                /* ===============================  scroll  =============================== */

                gsap.registerPlugin(ScrollTrigger);

                let sections = gsap.utils.toArray(".panel");

                gsap.to(sections, {
                  xPercent: -100 * (sections.length - 1),
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".thecontainer",
                    pin: true,
                    scrub: 1,
                    // snap: 1 / (sections.length - 1),
                    end: () => "+=" + document.querySelector(".thecontainer").offsetWidth
                  }
                });

              }


        });



        
        

    });
}(jQuery));