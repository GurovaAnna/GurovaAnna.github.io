$(function() {
  //табы
      $('.content__item').not(':first').hide(); 
      $('.tabs__item').eq(0).addClass('active');
      $('.tabs__item').on('click', function() {
        if ($('.tabs__item').eq($(this).index()).hasClass('active')) {
          return false;
        };
        $('.tabs__item').removeClass('active')
          .eq($(this).index())
          .addClass('active');
        $('.content__item')
          .hide()
          .eq($(this).index())
          .fadeIn('slow')
      });
      $('.tabs__item').hover(function() {
        $(this).toggleClass('hovered');
      }, function() {
        $(this).toggleClass('hovered');
      });

//подсказки
      $('.tips').css('opacity', '0');
      $('.tip__input')
        .hover(function(event) {
          var index = $('.tip__input').index(this);
          var inTip = $('.tips').eq(index);
          inTip.stop(true, false).animate({
            opacity: 1
          }, 500);
        }, function() {
          var index = $('.tip__input').index(this);
          var inTip = $('.tips').eq(index);
          inTip.stop(true, false).animate({
            opacity: 0
          },300);
        })
        .focusin(function() {
          var index = $('.tip__input').index(this);
          var inTip = $('.tips').eq(index);
          inTip.animate({
            opacity: 1
          }, 500);
        })
        .focusout(function() {
          var index = $('.tip__input').index(this);
          var inTip = $('.tips').eq(index);
          inTip.animate({
            opacity: 0
          }, 100);
        });
    $('.but').on('click', function() {
          $('.tips').animate({
            opacity: 1
          }, 500);
        });

  })
