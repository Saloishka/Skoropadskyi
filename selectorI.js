const Pavlo = document.getElementById("Pavlo");
if (Pavlo) {
  Pavlo.style.textShadow = "2px 3px 3px rgb(54, 54, 54)";
}

const Link = document.querySelectorAll("nav a");
Link.forEach(link => { 
  link.style.border = "1px solid black";
  link.style.borderRadius = "2px";
});


const Pavlo2 = document.getElementById("Pavlo");
if (Pavlo2) {
  const nextP = Pavlo2.nextElementSibling;
  if (nextP && nextP.firstChild && nextP.firstChild.nodeType === Node.TEXT_NODE) {
    nextP.firstChild.nodeValue = "Змінено абзац через nodeValue.";
  }
}


const textBlock = document.querySelector(".text");
if (textBlock) {
  const newInfo = document.createElement("p");
  newInfo.textContent = "Додано через append.";
  textBlock.append(newInfo);


  const topInfo = document.createElement("div");
  topInfo.textContent = "Верхнє повідомлення prepend";
  textBlock.prepend(topInfo);

 
  const afterInfo = document.createElement("p");
  afterInfo.textContent = "Нижнє повідомлення after";
  textBlock.after(afterInfo);

  const allP = textBlock.querySelectorAll("p");
  if (allP.length > 0) {
    const lastP = allP[allP.length - 1];
    const replacement = document.createElement("p");
    replacement.textContent = "Абзац замінено з replaceWith";
    lastP.replaceWith(replacement);
  }

 
  if (allP.length > 1) {
    allP[1].remove();
  }
}