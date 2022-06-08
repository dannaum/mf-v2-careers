//on page load
$(document).ready(function(){
    /*
    //pastFutureSlider
    var pastFutureSlider = $('.past-future_slider');
    var pastFutureSlideNumber = $(pastFutureSlider).find('.w-slider-nav').children('.w-slider-dot').length;
    //in past-future_slider find past-future_slide-nav and append "past-future_single-dot" with number of past-future_slider_nav_length, to first child add class active-dot
    for(var i = 0; i < pastFutureSlideNumber; i++){
        $('.past-future_slider').find('.past-future_slide-nav').append('<div class="past-future_single-dot"></div>');
        //in past-future_total show pastFutureSlideNumber
        $('.past-future_total').text(pastFutureSlideNumber);
    }
    //to first child add class active-dot
    $('.past-future_slider').find('.past-future_slide-nav').children('.past-future_single-dot').first().addClass('active-dot');
    //past-future-arrows on click
    $('.past-future-arrows').on('click', function(){
        var pastFutureActiveDot = $(this).closest('.past-future_slider').find('.w-slider-nav').children('.w-slider-dot.w-active').index(); 
        //past-future_single-dot remove class active-dot
        $(this).closest(pastFutureSlider).find('.past-future_slide-nav').children('.past-future_single-dot').removeClass('active-dot');
        //this find past-future_slide-nav, on child eq pastFutureActiveDot add class active-dot
        $(this).closest(pastFutureSlider).find('.past-future_slide-nav').children('.past-future_single-dot').eq(pastFutureActiveDot).addClass('active-dot');
        //past-future_count text pastFutureActiveDot + 1
        $(this).closest(pastFutureSlider).find('.past-future_count').text(pastFutureActiveDot + 1);
    });
    */

    $('.w-nav-button').on('click', function(){
        if($(this).hasClass('w--open')){
            $('body').css('overflow', 'auto');
        }
        else {
            $('body').css('overflow', 'hidden');
        }
    });
    var screenWidth = $(window).width();
    var closedFundSlidesN = $('.past-future_slider-mask').find('.past-future_slider-slide').length;
    var closedFundSlideO = $('.past-future_slider-slide').outerWidth();
    var totalSlide = (closedFundSlidesN * closedFundSlideO);
    if(screenWidth < totalSlide){
        $('.past-future-drag-component').css('display', 'block');
    }
    var dd = new Dragdealer('content-scroller', {
        steps: closedFundSlidesN,
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        reflow: true,
        animationCallback: function(x, y) {
            $('.past-future-slider-active_line').css('width', Math.round(x * 100) + '%');
            $('.past-future_slider-mask').css('margin-left', -x * (closedFundSlidesN * closedFundSlideO - screenWidth));
        }
    });

    $('.past-future_slider-wrap').on('click', '.past-future_right-arrow', function(e) {
        var steps = dd.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        dd.setStep(parseInt(a)+1, b);

    });

    $('.past-future_slider-wrap').on('click', '.past-future_left-arrow', function(e) {
        var steps = dd.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        dd.setStep(parseInt(a)-1, b);
    });

    var sp500Width = $('.home-benefits_image').outerWidth();
    var sp500slider = new Dragdealer('home-benefits-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: sp500Width,
        reflow: true,
        animationCallback: function(x, y) {
            $('.home-benefits_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.home-benefits_image-wrap').css('margin-left', -x * (sp500Width - screenWidth +64));
        }
    });

    $('.book-demo').on('click', function(){
        //popup_main animate opacity from 0 to 100
        $('.popup_main').animate({opacity: 1}, 500).toggle();
        $('body').css('overflow', 'hidden');
    });
    //on click of popup_close-button
    $('.popup_close-button').on('click', function(){
        //popup_main animate opacity from 100 to 0
        $('.popup_main').animate({opacity: 0}, 500);
        //after 500ms toggle popup_main
        setTimeout(function(){
            $('.popup_main').toggle();
        }, 500);
        $('body').css('overflow', 'auto');
    });

    if(sp500Width > screenWidth){
        $('.past-future-drag-component').css('display', 'block');
        $('.home-benefits_drag-element').css('display', 'block');
    }


});