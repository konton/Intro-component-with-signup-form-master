const firstname = document.querySelector("#firstname")
const lastname = document.querySelector("#lastname")
const email = document.querySelector("#email")
const pass = document.querySelector("#pass")
const error = document.querySelectorAll(".errormsg")
const icon = document.querySelectorAll(".icon_error")
const bt = document.getElementById("click")


bt.addEventListener("click", function(event){
    event.preventDefault()

    validate(firstname, 0, "First Name cannot be empty");
    validate(lastname, 1, "Last Name cannot be empty");
    validate(email, 2, "Looks like this is not an email");
    validate(pass, 3, "Password cannot be empty");

  
})

let validate = (input, id, msg) =>{
    if(input.value.trim()===''){
        error[id].innerHTML = msg;
        input.style.border = "2px solid red";
        icon[id].style.background="url(images/icon-error.svg) no-repeat 90% 50%";

    }
}

// document.getElementById("firstname").addEventListener("input", () => console.log(document.getElementById("firstname").value));
// document.getElementById("lastname").addEventListener("input", () => console.log(document.getElementById("lastname").value));
// document.getElementById("email").addEventListener("input", () => console.log(document.getElementById("email").value));
// document.getElementById("pass").addEventListener("input", () => console.log(document.getElementById("pass").value));