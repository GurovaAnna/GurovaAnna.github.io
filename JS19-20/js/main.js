$(function () {
  $('.flexslider').flexslider({
  animation: "slide"
});
  var dd = $('.news__accordion > dd').hide();
  var dt = $('.news__accordion > dt');
  $('.news__accordion > dt').on('click', showItem);
  function showItem() {
    var index = dt.index(this);
    dd.eq(index).slideToggle();
    dt.eq(index).toggleClass('clickedAccord');
  }
}
);
