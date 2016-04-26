$(function() {
    //применяем плагин
    $('.carousel-outer').creatCarousel();
    //плавный переход по якорям
    $('a[href^="#"]').click(function() {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 2000);
        return false;
    });
    //рендеринг страницы с помощью шаблонизатора
    var html = $('#templ').html();

    var head = [{
        title: 'Simple HTML-structure. John Rezig JS micro-template'
    }];

    var side = [{
        link: 'Home'
    }, {
        link: 'About'
    }, {
        link: 'Goods'
    }, {
        link: 'Contacts'
    }];

    var main = [{
        cont: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur \
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute \
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \
        id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        class: 'main'
    }];

    var foot = [{
        info: 'Have a good day)',
        class: 'footer'
    }];

    var content = tmpl(html, {
        sideData: side,
        headData: head,
        mainData: main,
        footData: foot
    });
    $('.base').append(content);
});
