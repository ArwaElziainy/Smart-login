var welcome = document.querySelector("#welcome");
var logoutBtn = document.querySelector("#logout");




welcome.innerHTML += localStorage.getItem("name");

logoutBtn.addEventListener("click", logout)

function logout() {
    localStorage.removeItem("name");
    window.location.href = "index.html"
}
