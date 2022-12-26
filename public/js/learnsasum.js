function learnBug(evt, contName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  tabicon = document.querySelectorAll(".tabicon");
  bar = document.querySelectorAll(".bar");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabicon[i].src = "img/icon_bar_other.png";
    bar[i].style.fontWeight = "400";
    bar[i].style.color = "#929292";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    // tabicon[i].src = "img/icon_bar_choose.png";
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(contName).style.display = "block";
  evt.currentTarget.firstElementChild.src = "img/icon_bar_choose.png";
  evt.currentTarget.lastElementChild.style.fontWeight = "bold";
  evt.currentTarget.lastElementChild.style.color = "#000";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
