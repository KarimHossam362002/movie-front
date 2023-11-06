/*Dark Mode */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".nonbs-container,.movie-list-title,.nonbs-navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


// html locations

function home() {
  window.location.href = "index.html";
}
function movies() {
  window.location.href = "movies.html";
}
function series() {
  window.location.href = "series.html";
}
function popular() {
  window.location.href = "popular.html";
}
function trends() {
  window.location.href = "trends.html";
}
function login() {
  window.location.href = "login.html";
}
function register() {
  window.location.href = "register.html";
}
function bookmark(){
  window.location.href ="bookmark.html"
}
function watchlater(){
  window.location.href ="watchlater.html"
}
function cart(){
  window.location.href ="cart.html"
}
function users(){
  window.location.href ="users.html"
}
function waitingList(){
  window.location.href ="waitinglist.html"
}
function profile(){
  window.location.href ="profile.html"
}
/**************************************************************** */
function validLogin(event) {
  
  event.preventDefault();
  var valid = true;
  if (document.form.email.value == "") {
    
    alert("Email is empty..!")
    document.form.email.focus();
    valid = false;
    return valid;
  }
  else {
    
    if (document.form.email.value.indexOf("@") == -1 || document.form.email.value.indexOf(".") == -1) {
      
      alert("Please enter valid email , example:info@gmail.com")
      document.form.email.focus();
      valid = false;
      return valid;

    }
    else if (document.form.email.value == "admin@gmail.com" && document.form.password.value == "admin"){
      alert("You are Logging now as an admin..!");
      admin();
      return true;
    }

  }
  alert("You Log in Successfully..!"); 
  home();
 
 

}
// Validation register
function validRegister(event) {
  event.preventDefault();
  var valid = true;
  if (document.form.email.value == "") {
    alert("Email is empty..!")
    document.form.email.focus();
    valid = false;
    return valid;
  }
  else if (document.form.email2.value == "") {
    alert("Email is empty..!")
    document.form.email2.focus();
    valid = false;
    return valid;
  }
  else {
    if (document.form.email.value.indexOf("@") == -1 || document.form.email.value.indexOf(".") == -1) {
      alert("Please enter valid email , example:info@gmail.com")
      document.form.email.focus();
      valid = false;
      return valid;
    }
    else if (document.form.email2.value.indexOf("@") == -1 || document.form.email2.value.indexOf(".") == -1) {
      alert("Please enter valid email , example:info@gmail.com")
      document.form.email2.focus();
      valid = false;
      return valid;
    }
  }
  login() + alert("You Signed up Successfully..!") ;
}