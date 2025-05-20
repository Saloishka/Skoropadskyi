function compareStrings(str1, str2) {
    if (str1.length  > str2.length ) {
      alert(`Більший рядок: ${str1}`);
    } else if (str2.length  > str1.length ) {
      alert(`Більший рядок: ${str2}`);
    } else {
      alert("Рядки однакові.");
    }
  }
  compareStrings("Скоропадський", "Петлюра");