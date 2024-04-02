// selected all html id
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const learnMoreBtn = document.getElementById("learn-more");

const countDownDate = new Date("may 27 2024 00:00:00").getTime();

const myDate = setInterval(function () {
  let currentDate = new Date().getTime();
  let distance = countDownDate - currentDate;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(currentDate);
    day.innerHTML = "00";
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
  }
}, 1000);
