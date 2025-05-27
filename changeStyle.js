  const Par = document.getElementById("Pavlo");
  Par.addEventListener("mouseover", function(event) {
    if (!event.relatedTarget || !Par.contains(event.relatedTarget)) {
      event.target.classList.add("print");
    }
  });
  Par.addEventListener("mouseout", function(event) {
    if (!event.relatedTarget || !Par.contains(event.relatedTarget)) {
      event.target.classList.remove("print");
    }
  });
  