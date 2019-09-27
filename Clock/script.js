var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var evening = 18;

//Show current time on the page
function showCurrentTime()
{
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    //Display time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;
 
    clock.innerText = clockTime;
};

//change out messages and pictures
function updateClock() 
{
  var time = new Date().getHours();
  var image = "images/1.jpg";
  var imageJS = document.getElementById('localImage');
  if(time == wakeuptime)
  {
    image = "images/2.jpg";
  }
  else if (time == lunchtime)
  {
    image = "images/3.jpg";
  }
  else if (time == naptime)
  {
    image = "images/4.jpg";
  }
  else if (time < noon)
  {
    image = "images/5.jpg";
  }
  else if (time >= evening)
  {
    image = "images/6.jpg";
  }
  else
  {
    image = "images/1.jpg";
  }
  localImage.src = image;
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);
//Wake up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

function wakeUpEvent()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

function lunchEvent()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);
//Nap selector
var napTimeSelector =  document.getElementById("napTimeSelector");

function napEvent()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);