const fName = document.getElementById('fName');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('confirmPass');
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(fName.value === '' || email.value === '' || pass.value === '' || confirmPass.value === ''){
        if(document.querySelector(".error")){
            document.querySelector(".error").style.display = "none";
          }
        const error = document.createElement('div');
        error.className = "error";
        error.innerText = "Error : All fields are mandatory"
        form.appendChild(error);
    }
    else if(document.getElementById('pass').value !== document.getElementById('confirmPass').value){
          if(document.querySelector(".error")){
            document.querySelector(".error").style.display = "none";
          }
         const error = document.createElement('div');
         error.className = "error"
         error.innerText = "Error : Confirmed password doesn't match"
         form.appendChild(error);
      }
      else{
         let str = "";
         for(let i = 0; i < 16; i++){
            str+=String.fromCharCode(Math.round(Math.random()*25 + 65));
         }

        localStorage.setItem("name",form["fName"].value.trim());
        localStorage.setItem("email",form["email"].value.trim());
        localStorage.setItem("token",str);
        localStorage.setItem("pass",form["pass"].value.trim());

            window.location.href = "./profile/index.html";
        
      }
})