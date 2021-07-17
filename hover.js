function myFunction() {
  document.getElementById("htmlCode").style.display = "block";
  document.getElementById("cssCode").style.display = "none";
  document.getElementById("jsCode").style.display = "none";
}
function myFunction1() {
  document.getElementById("htmlCode").style.display = "none";
  document.getElementById("cssCode").style.display = "block";
  document.getElementById("jsCode").style.display = "none";
}
function myFunction2() {
  document.getElementById("htmlCode").style.display = "none";
  document.getElementById("cssCode").style.display = "none";
  document.getElementById("jsCode").style.display = "block";
}
function myFunction0() {
  var x = document.getElementById("myDropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}