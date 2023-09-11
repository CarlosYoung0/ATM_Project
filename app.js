let boton = document.getElementById("button");
let inputUser = document.getElementById("inputUser");
let inputPass = document.getElementById("inputPass");
let elementlHelp = document.getElementById("elementlHelp");
let form = document.getElementById("form");
let consultar = document.getElementById("consultar");
let ingresar = document.getElementById("ingresar");
let retirar = document.getElementById("retirar");
let textuser = document.getElementById("textuser");
let textpass = document.getElementById("textpass");
let acceptbutton = document.getElementById("acceptbutton");
let backtologin = document.getElementById("backtologin");
let backtooptions = document.getElementById("backtooptions");
let inputAmountUser = document.getElementById("inputAmountUser");
let addAmountUserbutton = document.getElementById("addAmountUserbutton");
let addAmountUserConfirm = document.getElementById("addAmountUserConfirm");
let SubInputAmount = document.getElementById("SubInputAmount");
let subAmountUserConfirm = document.getElementById("subAmountUserConfirm");
let subAmountUserbutton = document.getElementById("subAmountUserbutton");

let username = "";
let passuser = "";
let amountuser = "";

function getUsers() {
    for (var i = 0; i <= availableAcounts.length - 1; i++) {
        if (inputUser.value == availableAcounts[i].name && inputPass.value == availableAcounts[i].password) {
            username = availableAcounts[i].name;
            passuser = availableAcounts[i].password;
            amountuser = availableAcounts[i].amount;

            inputUser.style.display = "none";
            inputPass.style.display = "none";
            elementlHelp.style.display = "none";
            textuser.style.display = "none";
            textpass.style.display = "none";
            acceptbutton.style.display = "none";

            consultar.style.display = "block"
            ingresar.style.display = "block"
            retirar.style.display = "block"
            backtologin.style.display = "block"

        } else {
            elementlHelp.style.color = "red";
            elementlHelp.innerHTML = "Wrong Credentials, Try Again Please";
        }
    }
}

function consultUser() {
    elementlHelp.style.display = "inline";
    elementlHelp.innerText = "el monto altual es:" + amountuser
    consultar.style.display = "none"
    ingresar.style.display = "none"
    retirar.style.display = "none"
    backtologin.style.display = "none"
    backtooptions.style.display = "block"
    addAmountUserbutton.style.display = "none";
    inputSubAmountUser.style.display = "none";
    subAmountUserbutton.style.display = "none";
}

function backToLogInUser() {
    consultar.style.display = "none"
    ingresar.style.display = "none"
    retirar.style.display = "none"
    backtologin.style.display = "none"
    addAmountUserbutton.style.display = "none";
    inputUser.style.display = "block";
    inputPass.style.display = "block";
    elementlHelp.style.display = "block";
    textuser.style.display = "block";
    textpass.style.display = "block";
    acceptbutton.style.display = "block";
    elementlHelp.style.color = "black";
    elementlHelp.innerHTML = "We'll never share your credentials with anyone else.";
    inputSubAmountUser.style.display = "none";
    subAmountUserbutton.style.display = "none";
}

function addAmountUser() {
    consultar.style.display = "none"
    ingresar.style.display = "none"
    retirar.style.display = "none"
    backtologin.style.display = "none"
    backtooptions.style.display = "block"
    inputAmountUser.style.display = "block"
    elementlHelp.style.display = "none";
    addAmountUserbutton.style.display = "block";
    inputSubAmountUser.style.display = "none";
    subAmountUserbutton.style.display = "none";
}

function showUserInfoAdd() {
    amountuser = parseInt(amountuser) + parseInt(inputAmount.value)
    if (amountuser <= 990) {
        elementlHelp.style.display = "block";
        elementlHelp.innerText = "Tu saldo actual es este: " + amountuser;
    }else{
        elementlHelp.style.display = "block";
        elementlHelp.innerText = "operacion invalida ";
        amountuser = parseInt(amountuser) - parseInt(inputAmount.value)
    }


}

function subtractionAmountUser() {
    consultar.style.display = "none";
    ingresar.style.display = "none";
    retirar.style.display = "none";
    backtologin.style.display = "none";
    backtooptions.style.display = "block";
    inputSubAmountUser.style.display = "block";
    addAmountUserbutton.style.display = "none";
    elementlHelp.style.display = "none";
    subAmountUserbutton.style.display = "block";
}

function showUserInfoSub() {
    amountuser = parseInt(amountuser) - parseInt(SubInputAmount.value)
    if (amountuser >= 10) {
        elementlHelp.style.display = "block";
        elementlHelp.innerText = "Tu saldo actual es: " + amountuser;
    }else{
        elementlHelp.style.display = "block";
        elementlHelp.innerText = "operacion invalida ";
        amountuser = parseInt(amountuser) + parseInt(SubInputAmount.value)
    }
}

function backToOptionsUser() {
    elementlHelp.style.display = "none";
    consultar.style.display = "block"
    ingresar.style.display = "block"
    retirar.style.display = "block"
    backtologin.style.display = "block"
    backtooptions.style.display = "none"
    inputAmountUser.style.display = "none"
    addAmountUserbutton.style.display = "none";
    inputSubAmountUser.style.display = "none";
    subAmountUserbutton.style.display = "none";
}



boton.addEventListener('click', getUsers);
consultar.addEventListener('click', consultUser);
ingresar.addEventListener('click', addAmountUser);
retirar.addEventListener('click', subtractionAmountUser);
backtologin.addEventListener('click', backToLogInUser);
backtooptions.addEventListener('click', backToOptionsUser);
addAmountUserConfirm.addEventListener('click', showUserInfoAdd);
subAmountUserConfirm.addEventListener('click', showUserInfoSub)

form.addEventListener('submit', () => {
    event.preventDefault();
})
