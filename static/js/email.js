// Unmangle email addresses on page load

function unmangleEmail(){
  var e = document.querySelectorAll(".email");
  for (var i = 0; i < e.length; i++) {
    var email = e[i].getAttribute("data-email")
    var title = e[i].getAttribute("data-title")
    if (email){
      e[i].href = email.split("").reverse().join("");
      e[i].removeAttribute("data-email");
      e[i].removeAttribute("data-title");
      e[i].removeAttribute("class");
      if (title){
        e[i].setAttribute("title", title);
      }
      else{
        e[i].removeAttribute("title");
      }
    }
  }
}
