


function pow () {
  var number, power;
  number = prompt('Введите число', '');
  if (number == null) {
    alert ('This is a mistake');
    return;
  }
  while ((number == '') || isNaN (+number)) {
    alert ('Введите корректно число')
    number = prompt('Введите число', '');
      }
  power = prompt('Введите степень', '' );
  if (power == null) {
    alert ('This is a mistake');
    return;
  }
  while ((power == '')||(power != ~~power) || isNaN (number)) {
    alert ('Введите корректно число')
    power = prompt('Введите степень', '' );
  }

    if (power == 0) {
    result = 1;
      }
   if (power > 0) {
     var result = 1;
    for ( var i = 1; i <= power; i++) {
       result *= number;
        }
} else {
  var result = 1;
  for ( var j = 1; j <= -power; j++) {
  result *= number;
}
  result = 1/result;
}
console.log ('powResult =', result);
}


function controlUser ( ) {
  var arr = [];
  var userName, coincidence;
  for (var i = 0; i < 5; i++) {
   arr [i] = prompt ('Enter name', '');
   if (arr [i] == null) {
     alert ('This is a mistake');
     return;
   }
   if (arr [i] == '') {
     alert ('This is a mistake');
     return;
   }
  }
  userName = prompt ('Enter your name, please', '');

  for (var j = 0; j < 5; j++) {
    if (arr [j] == userName) {
      coincidence = true;
      break;
    } else {
       coincidence = false;
        }
  }
  if (coincidence) {
    alert (userName + ' '+ ',' + ' ' + 'You are logged successfully');
  } else {
    alert ('Your name is not found');
  }
}
