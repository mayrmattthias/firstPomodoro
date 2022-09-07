var countDownTime = 25 * 60;
var minutes = Math.floor(countDownTime / 60);
var seconds = countDownTime % 60;
document.getElementById("timer").innerHTML = `${minutes} : 0${seconds}`;

/*functions*/
function startPomodoro() {    
    document.getElementById("start_sound").play()    
    mytimer = setInterval(updateTime, 1000);
}

function displaycountDownTime(){
    minutes = Math.floor(countDownTime / 60);
    seconds = countDownTime % 60;
    if (seconds < 10){
        seconds = '0' + seconds;
    };  
    document.getElementById("timer").innerHTML = `${minutes} : ${seconds}`;
}
    

function updateTime(){ 
    
    displaycountDownTime();

    countDownTime--;
    if (countDownTime < 0){
        clearInterval(mytimer);
        document.getElementById("finish_sound").play()
        countDownTime = 5 * 60;
    }
}

function stopPomodoro(){
    clearInterval(mytimer);
}

function resetPomodoro(){
    clearInterval(mytimer);
    countDownTime = 25 * 60;
    displaycountDownTime();
    
}

/*Start timer und führe jede Sekunde eine Funtkion aus*/
document.getElementById("start").addEventListener("click", startPomodoro);

/*Stop timer*/
document.getElementById("stop").addEventListener("click", stopPomodoro);

/*Reset All*/
document.getElementById("reset").addEventListener("click", resetPomodoro);