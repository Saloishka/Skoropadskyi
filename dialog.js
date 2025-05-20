function dialogWithUser() {
    if (!confirm("Бажаєте дізнатися про Скоропадського?")) {
      alert("Шкода. До побачення!");
      return;
    }

    let more = confirm("Хочете пройти невеличке опитування?");
    if (more) {
      let score = 0;

      let answer1 = prompt("У якому році Скоропадський став гетьманом?");
      if (answer1 === "1918") {
        score++;
      }

      let answer2 = prompt("Чи був Скоропадський президентом? (так / ні)");
      if (answer2 === "ні") {
        score++;
      }

      alert(`Ваш результат: ${score} з 2 правильних відповідей.`);

    } else {
      alert("Гаразд, можливо наступного разу.");
    }

    let name = prompt("Як вас звати?", "Гість");
    if (!name) {
      name = "Гість";
    }
  
    alert(`Вітаю вас, вельможе ${name}!`);

}
dialogWithUser();