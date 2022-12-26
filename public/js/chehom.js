function openTab(evt, tabName) {
  var i, tabcont, tabs;
  tabcont = document.getElementsByClassName("tabcont");
  for (i = 0; i < tabcont.length; i++) {
    tabcont[i].style.display = "none";
  }
  tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab2(evt, tabName2) {
  var i, tabcont2, tablinks2;
  tabcont2 = document.getElementsByClassName("tabcont2");
  for (i = 0; i < tabcont2.length; i++) {
    tabcont2[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }
  document.getElementById(tabName2).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen2").click();