// Scroll past header on smaller screens

function skipHeader(){
  if (window.location.pathname != '/' && window.location.pathname != '/index.html'){
    window.scroll(0, document.getElementById('main').offsetTop);
  }
}

