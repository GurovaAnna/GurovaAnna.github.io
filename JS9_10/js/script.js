$(function() {
  //Табы
  $('.content__item').not(':first').hide();
  $('.tabs__item').eq(0).addClass('actived');
  $('.tabs__item').on('click', function() {
    if ($('.tabs__item').eq($(this).index()).hasClass('actived')) {
      return false;
    };
    $('.tabs__item').removeClass('actived')
      .eq($(this).index())
      .addClass('actived');
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

  //Карусель плагин
  $('.carousel').jcarousel();
  $('.jcarousel-control-prev')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

  $('.jcarousel-control-next')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '+=1'
    });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination();

  //кастомный селект плагин

  $('.content__select').selectbox();

  //кастомные чекбоксы CSS и JQuery

  $('i').addClass('newCheck');
  $('i').on('click', selected);

  function selected() {
    var checkIndex = $('.newCheck').index(this);
    $(this).toggleClass('inputChecked');
    if ($(this).hasClass('inputChecked')) {
      $('i input').eq(checkIndex).prop('checked', true);
    } else {
      $('i input').eq(checkIndex).prop('checked', false);
    };
  };
  //dropdown menu
  $('.dropdown').hover(function() {
    $(this).children('.submenu').stop(true, false).slideDown(200).animate({
      backgroundColor: "#52AA5E",
      borderRadius: "10px"

    }, 500)
  }, function() {
    $(this).children('.submenu').stop(true, false).slideUp(200).animate({
      backgroundColor: "#388659",
      borderRadius: "0px"
    }, 200);
  })

});
