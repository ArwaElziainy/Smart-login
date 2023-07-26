var signinBtn = document.querySelector("#signin");
var error = document.querySelector("#error")

signinBtn.addEventListener("click", getData)

function getData() {
    var email = document.querySelector("#loginEmailInput").value
    var password = document.querySelector("#loginPasswordInput").value

    var user = [];

    user = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (!email || !password) {
        error.innerHTML = '<strong class="text-danger">All fields are required </strong>';
    } else if (user.some((v) => {
        return v.email == email && v.password == password
    })) {
        var current_user = user.filter((v) => {
            return v.email == email && v.password == password
        })[0]

        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);

        window.location.href = "profile.html"
    } else {
        error.innerHTML = '<strong class="text-danger">Wrong Email or Password </strong>';
    }
 
    
}
