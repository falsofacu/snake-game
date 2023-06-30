//Changes if inside an iframe
if (window.self !== window.top) {
  document.body.style.backgroundColor = "transparent";
  document.body.style.display = "unset";
  document.getElementById("game").style.top = 0;
  document.getElementById("game").style.left = 0;
  document.getElementById("game").style.outlineColor = "transparent";
}