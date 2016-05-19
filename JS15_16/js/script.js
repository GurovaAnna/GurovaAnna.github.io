var request;
var ques;

function Callback(obj) {
    console.log(obj.items);
    request = obj.items;
    var tmpl = document.querySelector('#render').innerHTML.trim();
    tmpl = _.template(tmpl);
    document.querySelector('.result').innerHTML = tmpl({
        list: request
    });
}
$(function() {
    $('button').on('click', search);
    $('input').on('keydown', search);
    function search(e) {
        if (e.keyCode == 13) {
          e.preventDefault();
        }
        ques = $('input').val();
        $.ajax({
            url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBNl1l1gJZeuNrlSQJd1mIAsafZ246-HUI&cx=011278363705118738616:dzkoifevcqu&q=' + ques + '&callback=Callback&context=?',
            dataType: "jsonp",
        });
    }
});

//Prototyping

function Human(name, age, sex, height, weight) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight=weight;
}
function Worker(name, age, sex, height, weight, placeWork, salary){
  Human.apply(this, arguments);
  this.placeWork = placeWork;
  this.salary = salary;
}
Worker.prototype = Object.create(Human.prototype);
Worker.prototype.coпstructor = Worker;
Worker.prototype.work = function () {
  return 'working';
};
function Student(name, age, sex, height, weight, placeStudy, stipend) {
  Human.apply(this, arguments);
  this.placeStudy = placeStudy;
  this.stipend = stipend;
}
Student.prototype = Object.create(Human.prototype);
Student.prototype.coпstructor = Student;
Student.prototype.work = function () {
  return 'watching the shows';
};

var worker = new Worker ('Vasya', 25, 'male', 180, 90,'Factory', 350);
var firstStudent = new Student ('Fedor', 18, 'male', 180, 70,'University', 50);
console.log(worker);
console.log(firstStudent);
