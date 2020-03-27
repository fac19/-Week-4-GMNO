// import { format } from "url";

const message = document.querySelector("#textBox");


document.getElementsByClassName("form").onkeypress = function(e) {
    let key = e.charCode || e.keyCode; // using charCode or keyCode for cross-browser support
    if (key == 13 && e.target !== message) {
      e.preventDefault(); // do not disable default enter behaviour on message textarea
    }
  };


var buttons = document.querySelectorAll('.post-remove__button');

for(var i=0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function () {
    console.log(this.parentNode); 
    this.parentNode.remove();
    }, false);
}



  // <input class="form__input" type="text" id="title" name="title" placeholder="Type your title" required>
