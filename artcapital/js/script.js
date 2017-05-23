$(function () {

  // header

$('.header_menu_toggle').on('click', function(){
  $('.header_list').slideToggle(300, function () {
    if ($(this).css('display') === 'none') {
      $(this).removeAttr('style');
    }
  });
});

$('.online_access_representative').on('click', function() {
  if ($(this).hasClass('representative_open')) {
    $(this).toggleClass('representative_open');
    $(this).animate({
         width: '50px',
         height: '60px'
    }, 1000);
    $('.online_access_representative_logo').animate({
      width: '19px'
    }, 1000);
  } else {
  $(this).toggleClass('representative_open');
  $(this).animate({
       width: '186px',
       height: '95px'
  }, 1000);
  $('.online_access_representative_logo').animate({
    width: '150px'
  }, 1000);
}
});

 // service_cost_calculation

 $('.service_cost_calculation_icon').on('click', function() {
     $('.service_cost_calculation_companies').slideToggle(300, function () {
   });

 });

$('input[type=radio]').on('click', function() {

  $('input[type=radio]').siblings('i').removeClass('fa-check-circle-o').addClass('fa-circle-o');
  $(this).siblings('i').removeClass('fa-circle-o').addClass('fa-check-circle-o');


  });
$('input[type=text]').on('blur', function() {
  switch ($(this).attr('name')) {
    case 'amount':   $(this).val($(this).val() + 'шт');
    break;
    case 'month':   $(this).val($(this).val() + 'мес.');
    break;
    case 'cost_purchase':   $(this).val($(this).val() + '$');
    break;
    case 'cost_sale':   $(this).val($(this).val() + '$');
    break;
  }
});
 // footer
 $('.footer_info_item').on('click', function(e){
   e.preventDefault();
   $(this).children('.footer_info_submenu').slideToggle(300, function () {
    });
 });



});
