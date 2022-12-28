let nwBtn = document.querySelectorAll(".nw_button");
let Nu = document.querySelector(".nw_ul");
let Nw = document.querySelectorAll(".nwinput_wrap");

function accor(){
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
accor();