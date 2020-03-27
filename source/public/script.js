const message = document.querySelector("#textBox");

document.getElementsByClassName("form").onkeypress = function(e) {
    let key = e.charCode || e.keyCode; 
    if (key == 13 && e.target !== message) {
      e.preventDefault(); 
    }
  };


var buttons = document.querySelectorAll('.post-remove__button');

for(var i=0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function () {
    console.log(this.parentNode); 
    this.parentNode.remove();
    }, false);
}



