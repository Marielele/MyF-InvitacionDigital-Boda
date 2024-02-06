// Variables
const counter = document.querySelector(".day-counter").children;
const counterDays = counter[0].firstChild;
const counterHours = counter[1].firstChild;
const counterMinutes = counter[2].firstChild;
const counterSeconds = counter[3].firstChild;
const bigDay = document.querySelector('.big-day');

// let today = new Date(Date.now());
let weddingDay = new Date("2024-12-14T16:30:00");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timer;

// Functions
function updateDays() {
  let today = new Date();
  let distance = weddingDay - today;
  if (distance < 0) {
    clearInterval(timer);
    bigDay.lastElementChild.firstElementChild.textContent = 'El evento ha terminado'
    console.log("El evento ha terminado");
    return;
  }
  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  counterDays.textContent = days;
  counterHours.textContent = hours;
  counterMinutes.textContent = minutes;
  counterSeconds.textContent = seconds;
}

timer = setInterval(updateDays, 1000);