// Проверка загркзки DOM
window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  //timer

  let deadline = '2020-4-22';

  function getTimeRemaining(endtime) {
    let t = Date.parse(deadline) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / 1000 / 60 / 60) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);


    function updateClock() {
      let t = getTimeRemaining(endtime);
      if (t.hours < 10) {
        hours.textContent = '0' + t.hours + ' h';
      } else {
        hours.textContent = t.hours + ' h';
      }
      if (t.minutes < 10) {
        minutes.textContent = '0' + t.minutes + ' m';
      } else {
        minutes.textContent = t.minutes + ' m';
      }
      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds + ' s';
      } else {
        seconds.textContent = t.seconds + ' s';
      }

      if (t.total <= 0) {
        hours.textContent = '00 h';
        minutes.textContent = '00 m';
        seconds.textContent = '00 s';
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadline);

});