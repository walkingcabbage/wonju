let nwBtn = document.querySelectorAll(".fu_button");
let Nu = document.querySelector(".fu_ul");
let Nw = document.querySelectorAll(".fuinput_wrap");

function fuAccor(){
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
fuAccor();