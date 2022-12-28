let nwBtn = document.querySelectorAll(".fw_button");
let Nu = document.querySelector(".fw_ul");
let Nw = document.querySelectorAll(".fwinput_wrap");

function fwaccor(){
  for (i = 0; i < nwBtn.length; i++) {
    nwBtn[i].addEventListener("click", function() {
      this.classList.toggle("act");
      var panel = this.nextElementSibling;
        if (panel.style.height === "50px") {
          panel.style.height = "0";
        } else {
          panel.style.height = "50px";
        }
    });
  }
}
fwaccor();