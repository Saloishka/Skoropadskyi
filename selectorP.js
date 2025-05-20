
const firstTitle = document.querySelector('.title');
if (firstTitle) {
  firstTitle.innerHTML = "<span style='color:red;'>Політична діяльність Скоропадського</span>";
}
const SecondTitle = document.querySelectorAll('.title');
if (SecondTitle.length > 1) {
  SecondTitle[1].outerHTML = "<div class='title' style='color:blue;'>Погляди</div>";
}

const firstText = document.querySelector('.text');
if (firstText) {
  firstText.textContent = "Цей розділ замінено!";
}
