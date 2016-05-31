
$( document ).ready(function() {
    'use strict';
    jQuery.support.cors = true;
    getImage();
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false,
    });
    $('.flex-prev').html('');
    $('.flex-next').html('');

    $('.grid').masonry({
        itemSelector: '.grid-item',
        gutter: 20
    });

    $('.discover__btn').on('click', function(e) {
        e.preventDefault();
        getImage();
    });

    function getImage() {
        var phrase = $('.discover__input').val();
        if (!phrase) {
            phrase = 'travelling';
        }
        var api = 'https://api.gettyimages.com/v3/search/images/?sort_order=best&phrase=' + phrase;
        var apiKey = 'pj25pazjgbw8wz9ppyegbpbb';
        $.ajax({
            type: 'GET',
            url: api,
            dataType: 'json',
            contentType :   'application/json; charset=utf8',
            data: {
              prestige_content_only: true,
              fields: 'detail_set'
            },

            beforeSend: function(request) {
                request.setRequestHeader("Api-Key", apiKey);
            },
            success: loadImages
        });

    }

    function loadImages(data) {
        // console.log(data);
        $('.grid-item').each(function(i) {
            var background = data.images[i].display_sizes[0].uri;
            var describe = data.images[i].title;
            $(this).css('background', '#1a1915 url("' + background + '") 50% / cover');
            $(this).children().html(describe);

        });
    }

});
