let btn = document.querySelectorAll("button");
let count = 0;
var tom1 = new Audio("Music/Hanuman.mpeg")
var tom2 = new Audio("Music/Ganesh.mpeg")
var tom3 = new Audio("Music/Shiv.mpeg")
var tom4 = new Audio("Music/lakshmi.mpeg")
var snare = new Audio("Music/Ram.mpeg")
var head = document.querySelector('h1');
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', event => {
    var inner = event.target.innerHTML;


    switch (inner) {
      case "h":
        head.innerHTML = "Hanuman Chalisha"
        tom1.play();
        tom2.pause();
        tom3.pause();
        tom4.pause();
        snare.pause();
        break;
      case "g":
        head.innerHTML = "Ganesh Chalisha"
        tom1.pause();
        tom2.play();
        tom3.pause();
        tom4.pause();
        snare.pause();
        break;
      case "s":
        head.innerHTML = "Shiv Tandav"
        tom1.pause();
        tom2.pause();
        tom3.play();
        tom4.pause();
        snare.pause();
        break;
      case "l":
        head.innerHTML = "Lakshmi Arti"
        tom1.pause();
        tom2.pause();
        tom3.pause();
        tom4.play();
        snare.pause();
        break;
      case "r":
        head.innerHTML = "Mere Ram"
        tom1.pause();
        tom2.pause();
        tom3.pause();
        tom4.pause();
        snare.play();
        break;

      default:
        head.innerHTML = "Song List"
        tom1.pause();
        tom2.pause();
        tom3.pause();
        tom4.pause();
        snare.pause();
        break;
    }
  })
}


