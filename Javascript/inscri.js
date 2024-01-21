//Pour faire fonctionner le formulaire

let form = document.querySelector("form")

form.addEventListener("submit", function(event) {
    event.preventDefault();

let email = document.querySelector("#emailA")

if (email.value == "") {
    email.classList.remove('vrai')
    email.classList.add('faux')
    console.log("invalide")
} else {
    email.classList.remove('faux')
    email.classList.add('vrai')
    console.log("valide")
}

let errorContainer = document.querySelector(".message-error")
let errorList = document.querySelector(".message-error ul")

errorList.innerHTML = ""
errorContainer.classList.remove("visible")

if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");
    let err = document.createElement("li")
    err.innerText = "Le champ email ne peut pas être vide !"
    errorList.appendChild(err)
} else {
    email.classList.add("success")
}

let pseudo = document.querySelector("#pseudo")

if(pseudo.value == "") {

    errorContainer.classList.add("visible")
    pseudo.classList.remove("success")

    let err = document.createElement("li")
    err.innerHTML = "Le champ pseudo ne peut pas être vide."

    errorList.appendChild(err)
} else {
    pseudo.classList.add("success")
}
let password = document.querySelector("#password")

if(password.value == "") {

    errorContainer.classList.add("visible")
    password.classList.remove("success")

    let err = document.createElement("li")
    err.innerHTML = "Le champ password ne peut pas être vide."

    errorList.appendChild(err)
} else {
    password.classList.add("success")
}

let passwordAgain= document.querySelector("#password2")

if(passwordAgain.value == "") {

    errorContainer.classList.add("visible")
    passwordAgain.classList.remove("success")

    let err = document.createElement("li")
    err.innerHTML = "Le champ de validation du mot de passe ne peut pas être vide."

    errorList.appendChild(err)
} else {
    passwordAgain.classList.add("success")
}

let successContainer = document.querySelector(".message-success")
console.log(successContainer)
successContainer.classList.remove("visible")

if(pseudo.classList.contains("success") && email.classList.contains("success") && password.classList.contains("success") && passwordAgain.classList.contains("success")) {
    successContainer.classList.add("visible")
}

})

//Pour le dark mode 

let darkMode = document.getElementById("darkMode")
let darkBande = document.querySelector("header")
let darkBody = document.querySelector(".inscri")
let darkFoot = document.querySelector(".downpage")

darkMode.addEventListener("click", function() {
    darkBande.classList.add("dark1")
    darkBody.classList.add("dark2")
    darkFoot.classList.add("dark3")
})
