var butStart = document.querySelector('.btn-success');
var butReset = document.querySelector('.btn-warning');
var showTimer = document.querySelector('.input-lg');
var showMilisec = document.querySelector('.input-sm')
var  runTime, clock, start, finish;
var result = 0;
butStart.addEventListener('click', getStart);
butReset.addEventListener('click', getReset);
//
function getStart() {
  if (!runTime){
    runTime = true;
      this.value = 'Pause';
      start = new Date();
      start.setTime(start.getTime() - result);
      counter();
  } else {
    runTime = false;
    this.value = 'Continue';
    finish = new Date();
    result = finish.getTime() - start.getTime();
  };
};
//функция сброса
function getReset() {
    clearTimeout(clock);
    butStart.value = 'Start';
    showTimer.value = "00:00:00";
    showMilisec.value = "000";
    runTime = false;
    result = 0;
}
//функция форматирования Даты
function formatDate(time) {
  var milliseconds = Math.floor((time % 1000)),
      seconds = Math.floor((time/1000) % 60),
      minutes = Math.floor((time/(1000*60)) % 60),
      hours = Math.floor((time/(1000*60*60)) % 24);
      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      hours = hours < 10 ? '0' + hours : hours;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};
//счетчик
function counter() {
  clock = setTimeout("counter()", 1);
  if (runTime) {
    finish = new Date();
    result = finish.getTime() - start.getTime();
    showTimer.value = formatDate(result).split('.')[0];
    showMilisec.value = formatDate(result).split('.')[1];
  };

}
