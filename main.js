
let lapArr = [];

let min = 0, sec = 0, ms = 0;

let startTimer;

function updateDisplay() {
    minute.innerText = min < 10 ? "0" + min : min;
    second.innerText = sec < 10 ? "0" + sec : sec;
    millisec.innerText = ms < 10 ? "0" + ms : ms;
}

stopBtn.disabled = true;
resetBtn.disabled = true;
lapBtn.disabled = true;

lapBtn.style.opacity = "0.5";
resetBtn.style.opacity = "0.5";
stopBtn.style.opacity = "0.5";

startBtn.addEventListener("click", function () {
    startTimer = setInterval(() => {
        ms++;
        if (ms == 100) {
            ms = 0;
            sec++;
        }
        if (sec == 60) {
            sec = 0;
            min++;
        }
        if (min == 20) {
            clearInterval(startTimer);
            min = 19; 
        }

        updateDisplay();
    }, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
    lapBtn.disabled = false;

    startBtn.style.opacity = "0.5";
    stopBtn.style.opacity = "1";
    resetBtn.style.opacity = "0.5";
    lapBtn.style.opacity = "1";
});

stopBtn.addEventListener("click", function () {
    clearInterval(startTimer);
    startBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;

    startBtn.style.opacity = "1";
    stopBtn.style.opacity = "0.5";
    resetBtn.style.opacity = "1";
    lapBtn.style.opacity = "1";
});

resetBtn.addEventListener("click", function () {
    lapContainer.innerHTML = "";
    lapArr = [];
    min = sec = ms = 0;
    updateDisplay();
    startBtn.disabled = false;

    startBtn.style.opacity = "1";
    stopBtn.style.opacity = "0.5";
    resetBtn.style.opacity = "0.5";
    lapBtn.style.opacity = "0.5";
});

lapBtn.addEventListener("click", function () {
    lapArr.push(`${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}:${ms < 10 ? "0" + ms : ms}`);
    lapRender();
    
});

function lapRender() {
    lapContainer.innerHTML = lapArr
      .map((el, index) => `<li class="lap">${index + 1}. ${el}</li>`)
      .join("");
}
