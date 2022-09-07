var countDownTime = 25 * 60;
var minutes = Math.floor(countDownTime / 60);
var seconds = countDownTime % 60;
document.getElementById("timer").innerHTML = `${minutes} : 0${seconds}`;

/*functions*/

function startStop() {
  if (document.getElementById("start").classList.contains("start")) {
    document.getElementById("start").classList.remove("start");
    document.getElementById("start").classList.add("stopp");
    document.getElementById("start").getElementsByTagName("img")[0].src =
      "media/pause.svg";

    mytimer = setInterval(updateTime, 1000);
    document.getElementById("start_sound").play();
  } else if (document.getElementById("start").classList.contains("stopp")) {
    stopPomodoro();
    document.getElementById("start").classList.remove("stopp");
    document.getElementById("start").classList.add("start");
    document.getElementById("start").getElementsByTagName("img")[0].src =
      "media/play.svg";
  }
}

function displaycountDownTime() {
  minutes = Math.floor(countDownTime / 60);
  seconds = countDownTime % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("timer").innerHTML = `${minutes} : ${seconds}`;
}

function updateTime() {
  displaycountDownTime();

  countDownTime--;
  if (countDownTime < 0) {
    clearInterval(mytimer);
    document.getElementById("finish_sound").play();
    countDownTime = 5 * 60;
  }
}

function stopPomodoro() {
  clearInterval(mytimer);
}

function resetPomodoro() {
  clearInterval(mytimer);
  countDownTime = 25 * 60;
  displaycountDownTime();
}

/*Start timer und führe jede Sekunde eine Funtkion aus*/
document.getElementById("start").addEventListener("click", startStop);

/*Reset All*/
document.getElementById("reset").addEventListener("click", resetPomodoro);
