$(function () {

 var $html_catalog = $("#catalog").html();
 var data = {
   src: 'img/clothes-',
   clothes: ['Printed swimsuit', 'Jogging bermuda shorts', 'Basic beach flip flops', 'Black sunglasses', 'Long sleeved twill shirt', 'Basic swimsuit', 'Bleached shorts', 'T-shirt with lower panel'],
   prices:['$23', '$36', '$9', '$29', '$20', '$36', '$12', '$32']
 };
 $html_catalog = _.template($html_catalog);
 var content = $html_catalog({data});
 $('.grid').append(content);

 $('.grid').masonry({
 // options
 itemSelector: '.grid-item',
 gutter: 28

});
});
