// var test = require('../js/app.js'); (for phantomjs)
describe("function Pow", function() {
  describe("возводит x в степень n", function() {
     function testing(number) {
       var result = number*number*number*number;
        it("при возведении " + number + " в степень 4 результат: " + result, function() {
            expect(pow(number, 4)).toEqual(result);
          });
   }
    for (var i=0; i<=6; i++) {
     testing(i);
    }
  });
  describe("возводит x в степень отрицательную степень -n", function() {
    function testing(number) {
      var result = 1/(number*number*number);
       it("при возведении " + number + " в степень -3 результат: " + result, function() {
           expect(pow(number, -3)).toEqual(result);
         });
  }
   for (var i=0; i<=6; i++) {
    testing(i);
   }
 });
 describe("любое число возведенное в степень 0 равно 1", function() {
   function testing(number) {
      it("при возведении " + number + " в степень 0 результат: " + 1, function() {
          expect(pow(number, 0)).toEqual(1);
        });
 }
  for (var i=0; i<=6; i++) {
   testing(i);
  }
});





});
