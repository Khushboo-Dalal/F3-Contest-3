const fName = document.getElementById('name');
const email = document.getElementById('email');
const token = document.getElementById('token');
const pass = document.getElementById('password');
const logoutBtn = document.getElementById('logout');

fName.innerText = localStorage.getItem("name");
email.innerText = localStorage.getItem("email");
token.innerText = localStorage.getItem("token");
pass.innerText = localStorage.getItem("pass");

logoutBtn.addEventListener("click",() =>{
    localStorage.clear();
    window.location.href = "../index.html";
})