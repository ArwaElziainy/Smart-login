var signUp = document.querySelector("#signUp");
var error = document.querySelector("#error");
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


signUp.addEventListener("click", addData)

function addData() {
    var name = document.querySelector("#userNameInput").value;
    var email = document.querySelector("#userEmailInput").value;
    var password = document.querySelector("#userPasswordInput").value;

    var user = [];
    user = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

    if (!name || !email || !password) {
        error.innerHTML = '<strong class="text-danger">All fields are required</strong>'
    } else if (email.match(emailRegex)) {
        if (user.some((v) => {
            return v.email == email 
        })) {
            error.innerHTML = '<strong class="text-warning">Already exist</strong>'
        } else {
            user.push({
                "name": name,
                "email": email,
                "password": password
            })
            error.innerHTML = '<strong class="text-success">Success</strong>'
            localStorage.setItem("users", JSON.stringify(user));
            window.location.href = "index.html"
    
        }
    } else {
        error.innerHTML = '<strong class="text-info">Email should be valid</strong>'
    }
}

