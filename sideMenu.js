 const sideMenu = document.getElementById('sideMenu');

  sideMenu.onclick = function(event) {
    if (event.target.tagName === 'BUTTON') {
      const action = event.target.dataset.action;

      switch (action) {
        case 'home':
          window.location.href = 'index.html';
          break;
        case 'map':
          window.location.href = 'map.html';
          break;
        case 'politics':
          window.location.href = 'politics.html';
          break;
        case 'art':
          window.location.href = 'art.html';
          break;
        case 'wiki':
          window.open('https://uk.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BE%D1%80%D0%BE%D0%BF%D0%B0%D0%B4%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87', '_blank');
        break;
      }
    }
  };