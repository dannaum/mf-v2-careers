
    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });
    
    var screenWidth = $(window).width();
    var sp500Width = $('.direct-invest_graph').outerWidth();
    var sp500slider = new Dragdealer('home-benefits-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: sp500Width,
        reflow: true,
        animationCallback: function(x, y) {
            $('.home-benefits_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.direct-invest_graph-wrap').css('margin-left', -x * (sp500Width - screenWidth +64));
        }
    });

    for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
        var c = b.item(a);
        c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
    }

    var aPlayed = false;

    function animationsRender() {

        if ($(window).width() > 991) {

            

            var a = anime.timeline({ loop: !1, autoplay: !1 });
            a.add({
                targets: ".fadeup0 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 30 * a,
                begin() {
                    $(".fadeup0").css("opacity", "1");
                },
            });

            $(document).ready(function () {
                a.play();
                $(window).focus(function() {
                    if (!aPlayed) {
                        a.restart();
                        aPlayed = true;
                    }
                    else {
                        
                    }
                });
            });

            var b = anime.timeline({ loop: !1, autoplay: !1 });
            b.add({
                targets: ".fadeup1 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 300 + 30 * a,
                begin() {
                    $(".fadeup1").css("opacity", "1");
                },
            });
            var c = anime.timeline({ loop: !1, autoplay: !1 });
            c.add({
                targets: ".fadeup2 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 300 + 30 * a,
                begin() {
                    $(".fadeup2").css("opacity", "1");
                },
            });
            

            $(window).scroll(function() {
                if ($(".fadeup1").isInViewport()) {
                    b.play();
                    
                }
                else if ($(".fadeup2").isInViewport()) {
                    c.play();
                    $('.invest-your-way_item').each(function (i) {
                        var $item = $(this).find("._8_fundcards");
                        setTimeout(function() { 
                        $item.click();
                        }, 100*i);
                    });
                    
                }
                else if ($(".resouces-section").isInViewport()) {
                    $('.single-resource-wrap-item').each(function (i) {
                        var $item = $(this).find("._8_fundcards");
                        setTimeout(function() { 
                        $item.click();
                        }, 100*i);
                    });
                    
                }

            });
        }
    }
        function dragDetector() {
            if(sp500Width > screenWidth){
                $('.past-future-drag-component').css('display', 'block');
                $('.home-benefits_drag-element').css('display', 'block');
            }
        }

        dragDetector();
        animationsRender();
        $(window).on("orientationchange", function () {
            dragDetector();
        });

        