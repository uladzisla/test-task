let userName = document.getElementById("name");
let userMail = document.getElementById("mail");
let userPassword = document.getElementById("password");
let comment = document.getElementById("comment");

function req(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users")
    .then(function (response) {
        return response.json();
    })
    .then((response) => {
    response.map((el) => {
    console.log(el);
        if (el.name !== userName.value) {
            comment.innerHTML =
            '<div class="danger" id="commentBlock"><h4>Username is invalid</h4></div>';
            userName.classList.add("danger");
        } else if (
            el.mail !== userMail.value ||
            el.password !== userPassword.value) {
            userName.classList.remove("danger");
            comment.innerHTML =
            '<div class="danger" id="commentBlock"><h4>Invalid Credentials</h4></div>';
            userMail.classList.add("danger");
            userPassword.classList.add("danger");
        } else {
            userName.classList.remove("danger");
            userPassword.classList.remove("danger");
            userMail.classList.remove("danger");
            comment.innerHTML =
            '<div class="successful" id="commentBlock"><h4>Successful</h4></div>';
    setTimeout(() => {
    document.getElementById("commentBlock").remove();
    }, 3000);
        }
    });
    });
}
