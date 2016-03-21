var test = {
  bodyBackground : function () {
        document.body.style.background = 'grey';
  },
  wrapper : function () {
    var testWrapper = document.createElement ('div');
    testWrapper.className = 'container';
    testWrapper.style.background = 'white';
    testWrapper.style.border = '1px solid black';
    testWrapper.style.margin = '100px auto';
    testWrapper.style.fontFamily = 'Arial';
    testWrapper.style.fontSize = '24px';
    document.body.appendChild (testWrapper);

  },
  header : function () {
    var testProgramm = document.createElement ('div');
    testProgramm.className = 'testHeader';
    testProgramm.innerHTML = 'Тест по программированию';
    testProgramm.style.textAlign = 'center';
    testProgramm.style.marginTop = '20px';
    document.querySelector('.container').appendChild (testProgramm);
  },
  question : function () {
    var olContent =  document.createElement ('ol');
    document.querySelector('.container').appendChild (olContent);
    var testLi = [];
    var testCheckbox = [];
    var testLabel = [];
    for (var i = 0; i < 3; i++) {
      testLi[i] = document.createElement ('li');
      testLi[i].innerHTML = 'Вопрос №' + +(i+1);
      testLi[i].style.textAlign = 'left';
      testLi[i].style.fontWeight = 'bold';
      testLi[i].style.fontSize = '18px';
      testLi[i].style.marginLeft = '50px';
      testLi[i].style.marginTop = '20px';
        document.querySelector('ol').appendChild (testLi[i]);
        for (var j = 0; j < 3; j++) {
          testCheckbox[j] = document.createElement ('input');
          testLabel[j] = document.createElement ('label');
          testCheckbox[j].style.display = 'block';
          testCheckbox[j].style.position = 'relative';
          testCheckbox[j].style.marginTop = '15px';
          testCheckbox[j].type = 'checkbox';
          testCheckbox[j].id = +(i+1) + 'answer' + +(j+1);
          testLabel[j].htmlFor =  +(i+1) + 'answer'+ +(j+1);
          testLabel[j].innerHTML = 'Ответ на вопрос №' + (j+1);
          testLabel[j].style.fontWeight = 'normal';
          testLabel[j].style.fontSize = '14px';
          testLabel[j].style.position = 'absolute';
          testLabel[j].style.marginLeft = '30px';
          testLabel[j].style.marginTop = '-17px';


         document.querySelectorAll('li')[i].appendChild (testCheckbox[j]);
         document.querySelectorAll('li')[i].appendChild(testLabel[j]);

        }
    }

  },
  sendResults: function () {
    var testButton =  document.createElement ('button');
    testButton.innerHTML = 'Проверить мои результаты';
    testButton.className = 'btn btn-primary btn-lg';
    testButton.style.fontSize = '20px';
    testButton.style.margin = '30px 450px';
    document.querySelector('.container').appendChild (testButton);
  }
}
test.bodyBackground ();
test.wrapper ();
test.header ();
test.question ();
test.sendResults ();
