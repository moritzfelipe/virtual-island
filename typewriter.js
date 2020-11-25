var i = 0;
var txt = 'You will land on a virtual island with fellow tech explorers. Listen to the talk, ask questions and get to know your peers over a beer.'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("instructions").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    $('.hide').css("display" , "block");
  }
}