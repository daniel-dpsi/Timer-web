var timeStart = null;
var timeStop = null;
var timeStoppedLog = 0;
var startInt = null;
var flag = false; // start/pause

const timeContainer = document.getElementsByClassName("timer-main")[0]; // links the variable const to the html's "timer-main"

timeContainer.addEventListener("click", function() // event listener that triggers upon receiving user input (click)
{
    if(!flag) { // if timer not active => starts the timer
        startTimer();
        flag = true;
    }
    else { // if timer active and received user input (click) => stops the timer
        stopTimer();
        flag = false;
    }
})

function startTimer() { // function containing logic behind starting the timer
    if(timeStart === null)
    timeStart = new Date(); // gets h1's value which is 00:00:00 

    if(timeStop !== null)
    timeStoppedLog += (new Date() - timeStopped); // logic for logging the current time on the timer 

    startInt = setInterval(clockRunning, 10); // upon timer running increment by 10ms (milliseconds)
}

function stopTimer() {
    timeStop = new Date();
    clearInterval(startInt); // switches the timer off by stopping the incrementing process
}

function clockRunning() { // function that contains the logic behind timer incrementation
    var currentTime = new Date(); 
    var timeElapsed = new Date(currentTime - timeStart - timeStoppedLog); // upon stopping calculates the elapsed time since starting

    //assigning dynamic values based on 00:00:00 => (m,s,ms) opposed to the value in the .html file which is static
    var minutes = timeElapsed.getUTCMinutes();
    var seconds = timeElapsed.getUTCSeconds();
    var milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds/10);

    //makes the main element under h1 in .html dynamic therefore allowing it to increment 
    document.getElementById("timer-display").innerHTML = 
    (minutes = minutes < 10 ? '0' + minutes:minutes) + ":" +
    (seconds = seconds < 10 ? '0' + seconds:seconds) + ":" +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}

// pwrdaniel 2022