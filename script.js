let startEl = document.getElementById("start")
let stopEl = document.getElementById("stop")
let resetEl = document.getElementById("reset")
let shortBreakEl = document.getElementById("shortBreak")
let longBreakEl = document.getElementById("longBreak")

let timer;
let pomodoroTime = 25
let shortBreakTime = 5
let longBreakTime = 15
let timeLeft = 25 * 60
let running = false;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    let seconds = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${minutes}:${seconds}`;
}

startEl.onclick = function() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
            }
        }, 1000);
    }
}

stopEl.onclick = function() {
    clearInterval(timer);
    running = false;
}

resetEl.onclick = function() {
    timeLeft = 25 * 60;
    updateDisplay();
    clearInterval(timer);
    running = false;
}

shortBreakEl.onclick = function() {
    timeLeft = shortBreakTime * 60
    updateDisplay()
}
longBreakEl.onclick = function() {
    timeLeft = longBreakTime * 60
    updateDisplay()
}
