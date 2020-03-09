document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        });
    });
    }

});
function regexcontrollettre() {
    const regex = /^[a-zA-Z]+$/;
    return regex;
};
function regexcontrolletrechiffre() {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex;
};
function regexcontrolmail() {
    const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex1;
};
function isdanger() {
    const isdanger = "input is-danger";
    return isdanger;
};
function issucces() {
    const issucces = "input is-success";
    return issucces;
};
function normalinput() {
    const normalinput = "input";
    return normalinput;
};



function controlpseudo(champ) {
    const regex = regexcontrolletrechiffre();
    if (champ.value.length > 2 && champ.value.length < 50) {
        if (regex.test(champ.value)) {
            console.log("respect lettre");
            console.log("bon");
            document.getElementById("pseudo-inscription").className = issucces();
        }
        else{
            console.log("pa bon");
            document.getElementById("pseudo-inscription").className = isdanger();
        }
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("pseudo-inscription").className = normalinput();
    }
    else{
        console.log("pa bon");
        document.getElementById("pseudo-inscription").className = isdanger();
    }
};
function controlnom(champ) {
    const regex = regexcontrollettre();
    if (champ.value.length > 2 && champ.value.length < 50) {
        if (regex.test(champ.value)) {
            console.log("respect lettre");
            console.log("bon");
            document.getElementById("nom-inscription").className = issucces();
        }
        else{
            console.log("pa bon");
            document.getElementById("nom-inscription").className = isdanger();
        }
        //const notiferreurs = document.getElementById("nom-inscription-erreur");
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("nom-inscription").className = normalinput();
    }
    else{
        console.log("pa bon");
        document.getElementById("nom-inscription").className = isdanger();
        //document.getElementById("nom-inscription-erreur").innerHTML += "<p class='help is-success'>This usernasqqssqsqsqsqsqsqsqme is available</p>";
    }
};
function controlprenom(champ) {
    const regex = regexcontrollettre();
    if (champ.value.length > 2 && champ.value.length < 50) {
        if (regex.test(champ.value)) {
            console.log("respect lettre");
            console.log("bon");
            document.getElementById("prenom-inscription").className = issucces();
        }
        else{
            console.log("pa bon");
            document.getElementById("prenom-inscription").className = isdanger();
        }
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("prenom-inscription").className = normalinput();
    }
    else{
        console.log("pa bon");
        document.getElementById("prenom-inscription").className = isdanger();
    }
};
function controlmdp(champ) {
    const mdp11 = document.getElementById("mdp1-inscription").value;
    if (champ.value.length > 2 && champ.value.length < 50) {
        if (mdp11 == champ.value) {
            console.log("bon");
            console.log("2 code bons")
            document.getElementById("mdp-inscription").className = issucces();
            document.getElementById("mdp1-inscription").className = issucces();
        }
        else{
            document.getElementById("mdp-inscription").className = isdanger();
            document.getElementById("mdp1-inscription").className = isdanger();
        }
    }
    else if(champ.value.length == 0){
        console.log("pa bon444");
        document.getElementById("mdp-inscription").className = normalinput();
        document.getElementById("mdp1-inscription").className = normalinput();
    }
    else{
        console.log("pa bon1111");
        document.getElementById("mdp-inscription").className = isdanger();
    }
};
function controlmdp1(champ) {
    const mdp12 = document.getElementById("mdp-inscription").value;
    if (champ.value.length > 2 && champ.value.length < 50) {
        if (mdp12 == champ.value) {
            console.log("bon");
            console.log("2 code bons")
            document.getElementById("mdp-inscription").className = issucces();
            document.getElementById("mdp1-inscription").className = issucces();
        }
        else{
            document.getElementById("mdp-inscription").className = isdanger();
            document.getElementById("mdp1-inscription").className = isdanger();
        }
        console.log("bon");
        document.getElementById("mdp1-inscription").className = issucces();
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("mpd1-inscription").className = normalinput();
    }
    else{
        console.log("pa bon");
        document.getElementById("mdp1-inscription").className = isdanger();
    }
};
function controlmail(champ) {
    const regex1 = regexcontrolmail();
    if (regex1.test(champ.value)) {
        console.log("respect email");
        document.getElementById("email-inscription").className = issucces();
    }else{
        console.log("pa respect mail");
        document.getElementById("email-inscription").className = isdanger();

    }
};
function controlmail1(champ) {
    const regex1 = regexcontrolmail();
    if (regex1.test(champ.value)) {
        console.log("respect email1");
        document.getElementById("email1-inscription").className = issucces();
    }else{
        console.log("pa respect mail1");
        document.getElementById("email1-inscription").className = isdanger();

    }
};
function controlleinfo() {
    const mdp1 = document.getElementById("mdp-inscription").value;
    const mdp2 = document.getElementById("mdp1-inscription").value;
    const email = document.getElementById("email-inscription").value;
    const email1 = document.getElementById("email1-inscription").value;
    const prenom = document.getElementById("prenom-inscription").value;  
    const nom = document.getElementById("nom-inscription").value;
    const pseudo = document.getElementById("pseudo-inscription").value;

    if (mdp1 == mdp2 && email == email1){
        if (mdp1.length === 0 || mdp2 === 0 || prenom === 0 || nom === 0 || pseudo === 0 || email === 0 || email1 === 0) {
            document.getElementById("mdp-inscription").className = isdanger();
            document.getElementById("mdp1-inscription").className = isdanger();
            document.getElementById("prenom-inscription").className = isdanger();
            document.getElementById("nom-inscription").className = isdanger();
            document.getElementById("pseudo-inscription").className = isdanger();
            document.getElementById("email-inscription").className = isdanger();
            document.getElementById("email1-inscription").className = isdanger();

        }else{
            console.log("info bonne est remplie");
            document.getElementById("mdp1-inscription").className = issucces();
        }
    }
    else{
        console.log("mdp pa egale");
        document.getElementById("mdp-inscription").className = isdanger();
        document.getElementById("mdp1-inscription").className = isdanger();
        document.getElementById("email-inscription").className = isdanger();
        document.getElementById("email1-inscription").className = isdanger();
        
    }
};