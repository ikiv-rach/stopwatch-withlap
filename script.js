var ms =0, //milliseconds
    s=0,  //seconds
    m = 0, //minutes
    h =0;   //hours

var timer;

var screenEl = document.querySelector ('.screen')
var lapsContainer = document.querySelector ('.laps');

//logic to calculate the display of hour,minutes,seconds and milliseconds
function starter(){
    return  (h < 10 ? "0" + h : h) + ":"+(m < 10 ? "0" + m : m) + ":"+ (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
     
 }

//logic to make the counter start
function run(){
    screenEl.textContent = starter();
    ms++;
    if(ms == 100) {
        ms = 0;
        s++;
    }
    if(s == 60) {
        s = 0;
        m++;
    }
    if( m == 60){
        m = 0;
        h++;
    }

}

//function for when the start button is clicked
function start() {
    if(!timer)
    timer = setInterval(run,10);
}

//function for when the pause button is clicked

function pause(){
    clearInterval(timer);
    timer = false;
}

//function for when the stop button is clicked

function stop(){
    clearInterval(timer);
    timer = false;

    ms= 0;
    s= 0;
    m=0;
    h=0;
    screenEl.textContent = starter(); 
}

//function for when the reset button is clicked

function reset(){
    stop();
    start();
}

//function for when the lap button is clicked

function lap(){
    if(timer) {
        var li=document.createElement('li');
        li.innerText= starter();
        lapsContainer.appendChild(li);
    }
}