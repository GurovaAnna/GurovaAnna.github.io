(function($) {
    $.fn.creatCarousel = function() {
        var list = this.children('ul');
        var firstItemClone = this.find('li').eq(0).clone();
        //добавляем первый элемент в конец списка, для плавного перехода
        list.append(firstItemClone);
        var carouselItems = this.find('li');
        //задаем классы элементам управления
        var leftArrow = this.children('a').eq(0).addClass('arrow left');
        var rightArrow = this.children('a').eq(1).addClass('arrow right');
        //текущий элемент
        var counter = 0;
        leftArrow.html('<');
        rightArrow.html('>');

        leftArrow.on('click', moveLeft);
        rightArrow.on('click', moveRight);
        // функция листать влево
        function moveLeft() {
            if (counter === 0) {
                counter = carouselItems.length - 2;
                list.animate({
                    'left': '-1536px'
                }, 600);
            } else {

                list.animate({
                    'left': '+=512px'
                }, 400);
                counter--;
            }
        }
        //функция листать вправо
        function moveRight() {
            list.animate({
                'left': '-=512px'
            }, 400, function() {
                if (counter === carouselItems.length - 2) {
                    list.css('left', 0);
                    counter = 0;
                } else {
                    counter++;
                }
            });
        }
        return this;
    };
})(jQuery);
