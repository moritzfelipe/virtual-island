var i = 0;
var txt = 'You are stranded at an virtual island. One has a presentation. Get to know the others.'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("instructions").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    $('.hide').css("display" , "block");
  }
}