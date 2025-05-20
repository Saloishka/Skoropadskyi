function changeback() {
  document.body.style.backgroundColor = "#fffbe6";
  setTimeout(function() {
    document.body.style.backgroundColor = "";
  }, 30000);
}

window.addEventListener("DOMContentLoaded", changeback);