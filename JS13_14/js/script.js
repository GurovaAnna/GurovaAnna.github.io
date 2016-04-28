'use stict';
var test = {
    wrapper: function() {
        var testWrapper = document.createElement('div');
        testWrapper.className = 'container';
        document.body.appendChild(testWrapper);
    },
    containerQuestions: function() {
        var contQues = document.createElement('div');
        contQues.className = 'containerQues';
        document.querySelector('.container').appendChild(contQues);
    },
    header: function() {
        var testProgramm = document.createElement('div');
        testProgramm.className = 'testHeader';
        testProgramm.innerHTML = 'Тест по программированию';
        document.querySelector('.container').appendChild(testProgramm);
    },
    sendResults: function() {
        var testButton = document.createElement('button');
        testButton.innerHTML = 'Проверить мои результаты';
        testButton.className = 'btn btn-primary btn-lg';
        testButton.style.fontSize = '20px';
        testButton.style.margin = '30px 450px';
        document.querySelector('.container').appendChild(testButton);
    }
};
test.wrapper();
test.header();
test.containerQuestions();
test.sendResults();

//данные вопросы и ответы

var request = [{
    name: 'По какой причине не желательно использовать оператор with?',
    answers: ['Он сильно замедляет работу программы', 'Он некорректно работает во многих браузерах', 'Такого оператора нет'],
    correct: 'Он сильно замедляет работу программы'
}, {
    name: 'При каком действии пользователя происходит событие contextmenu?',
    answers: ['Когда посетитель нажимает клавишу', 'Посетитель отправил форму ', 'Клик по контекстному меню', 'Клик на элемент правой кнопкой мыши'],
    correct: 'Клик на элемент правой кнопкой мыши'
}, {
    name: 'Как расшифровывается Ajax?',
    answers: ['Anonymous Javascript And Xml', 'Asynchronous Javascript And Xml', 'Asynchronous Java And Xml'],
    correct: 'Asynchronous Javascript And Xml'
},
{
    name: 'Что такое "Полифилл"?',
    answers: ['Функция', 'Геометрическая фигура', 'Библиотека, которая добавляет в старые браузеры поддержку возможностей, которые в современных браузерах являются встроенными.'],
    correct: 'Библиотека, которая добавляет в старые браузеры поддержку возможностей, которые в современных браузерах являются встроенными.'
}
];
//запись в localStorage
var toJSON = JSON.stringify(request);
localStorage.setItem('data', toJSON);

var content = localStorage.getItem('data');
content = JSON.parse(content);

// шаблонизация
var tmpl = document.getElementById('questions').innerHTML.trim();
tmpl = _.template(tmpl);
document.querySelector('.containerQues').innerHTML = tmpl({
    list: content
});

//сумма элементов массива
function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
//сортировка ответов
function compareRandom(a, b) {
    return Math.random() - 0.5;
}

$(function() {
    var $userAnswers = []; //массив ответов пользователя
    var $checkedAnswers = []; //массив проверки ответов
    var $checkbox = $('input');
    var $result; //результат тестирования
    $checkbox.on('change', getAnswers);
    $('.btn').on('click', checkUserAnswers);

//Запись ответов пользователя в массив
    function getAnswers(e) {
        if ($(this).prop('checked')) {
            $userAnswers[$(this).attr('id').slice(0, 1)] = $(this).val();
            $(this).parent().siblings().find('input').attr('disabled', true);
        } else {
            $(this).parent().siblings().find('input').attr('disabled', false);
            delete $userAnswers[$(this).attr('id').slice(0, 1)];
        }
    }


    function checkUserAnswers() {
        var $modal = $('<div class="modal_result"></div>');
        var $overlay = $('<div class="overlay"></div>');

        for (var i = 0; i < content.length; i++) {
            if (content[i].correct === $userAnswers[(i + 1).toString()]) {
                $checkedAnswers[i] = 1;
            } else {
                $checkedAnswers[i] = 0;
            }
        }

        $result = Math.round(arraySum($checkedAnswers) / $checkedAnswers.length * 10000) / 100;

        if ($result >= 80) {
            $modal.append('<p class="result">Результат ' + $result + ' %</p><p class="text">Вы успешно прошли тест!!! Поздравляю</p>');
        } else {
            $modal.append('<p class="result">Результат ' + $result + ' %</p><p class="text red">Увы! Тест не пройден. Необходимо минимум 80%. Попробуйте еще!</p>');
        }

        $('body').append($overlay);
        $('body').append($modal);
        
        $overlay.one('click', function() {
            $modal.remove();
            $overlay.remove();
            $checkbox.prop('checked', false);
            $checkbox.attr('disabled', false);
            $userAnswers = [];
        });
    }
});
