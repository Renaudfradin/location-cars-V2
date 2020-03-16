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
            //document.getElementById("nom-inscription-erreur").innerHTML += "<p class='help is-success'>This usernasqqssqsqsqsqsqsqsqme is available</p>";
        }
        else{
            console.log("pa bon");
            document.getElementById("nom-inscription").className = isdanger();
            //document.getElementById("nom-inscription-erreur").innerHTML += "<p class='help is-danger'>This usernasqqssqsqsqsqsqsqsqme issss available</p>";
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
        //document.getElementById("nom-inscription-erreur").innerHTML += "<p class='help is-danger'>This usernasqqssqsqsqsqsqsqsqme issssss available</p>";
        //
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
    const email11 = document.getElementById("email1-inscription").value;
    if (regex1.test(champ.value)) {
        if (email11 == champ.value) {
            console.log("bon");
            console.log("2 email bons");
            console.log("respect email");
            document.getElementById("email-inscription").className = issucces();
            document.getElementById("email1-inscription").className = issucces();
        }
        else{
            document.getElementById("email-inscription").className = isdanger();
            document.getElementById("email1-inscription").className = isdanger();
        }
    }else{
        console.log("pa respect mail");
        document.getElementById("email-inscription").className = isdanger();
        document.getElementById("email1-inscription").className = isdanger();
    }
};
function controlmail1(champ) {
    const regex1 = regexcontrolmail();
    const email12 = document.getElementById("email-inscription").value;
    if (regex1.test(champ.value)) {
        if (email12 == champ.value) {
            console.log("bon");
            console.log("2 email bons");
            console.log("respect email");
            document.getElementById("email-inscription").className = issucces();
            document.getElementById("email1-inscription").className = issucces();
        }
        else{
            document.getElementById("email-inscription").className = isdanger();
            document.getElementById("email1-inscription").className = isdanger();
        }
    }else{
        console.log("pa respect mail1");
        document.getElementById("email-inscription").className = isdanger();
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

    if (mdp1 == mdp2 && email == email1 && mdp1.length > 2 && mdp2.length > 2 && email.length > 2 && email1.length > 2 && prenom.length > 2 && nom.length > 2 && pseudo.length > 2){
        console.log("envoie info");
        document.getElementById("mdp-inscription").className = issucces();
        document.getElementById("mdp1-inscription").className = issucces();
        document.getElementById("email-inscription").className = issucces();
        document.getElementById("email1-inscription").className = issucces();  
        document.getElementById("nom-inscription").className = issucces();
        document.getElementById("prenom-inscription").className = issucces();
        document.getElementById("pseudo-inscription").className = issucces();       
        document.getElementById("nocccm-inscription-erreur").innerHTML = "<p class='help is-success'>Le formulaire est bien remplie</p>";

    }else{
        console.log("mdp pa egale");
        document.getElementById("mdp-inscription").className = isdanger();
        document.getElementById("mdp1-inscription").className = isdanger();
        document.getElementById("email-inscription").className = isdanger();
        document.getElementById("email1-inscription").className = isdanger(); 
        document.getElementById("nom-inscription").className = isdanger();
        document.getElementById("prenom-inscription").className = isdanger();
        document.getElementById("pseudo-inscription").className = isdanger();      
        document.getElementById("nocccm-inscription-erreur").innerHTML = "<p class='help is-danger'>Le formulaire est mal remplie</p>";
    }
};

function controlpseudo1(champ) {
    const regex = regexcontrolletrechiffre();
    if (champ.value.length > 2 && champ.value.length < 50) {
        if (regex.test(champ.value)) {
            console.log("respect lettre");
            console.log("bon");
            document.getElementById("pseudo-connexion").className = issucces();
 
        }
        else{
            console.log("pa bon");
            document.getElementById("pseudo-connexion").className = isdanger();
        }
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("pseudo-connexion").className = normalinput();
    }
    else{
        console.log("pa bon");
        document.getElementById("pseudo-connexion").className = isdanger();
    }
};
function controlmdp3(champ) {
    if (champ.value.length > 2 && champ.value.length < 50) {
        document.getElementById("mdp-connexion").className = issucces();
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("mdp-connexion").className = normalinput();
    }
    else{
        console.log("pa bon");
        document.getElementById("mdp-connexion").className = isdanger();
    }
};
function controleinfoconexion() {
    const pseudo = document.getElementById("pseudo-connexion").value;
    const mdp = document.getElementById("mdp-connexion").value;

    if (pseudo.length < 2 || mdp.length < 2) {
        if (pseudo.length < 2 && mdp.length > 2) {
            console.log("1");
            document.getElementById("pseudo-connexion").className = isdanger();
            document.getElementById("mdp-connexion").className = issucces();
            document.getElementById("nocccm-connexion-erreur").innerHTML = "<p class='help is-danger'>Il manque le pseudo</p>";
        } else if(mdp.length < 2 && pseudo.length > 2){
            console.log("2");
            document.getElementById("pseudo-connexion").className = issucces();
            document.getElementById("mdp-connexion").className = isdanger();
            document.getElementById("nocccm-connexion-erreur").innerHTML = "<p class='help is-danger'>Il manque  le mot de passe</p>";
        } else if(pseudo.length < 2 && mdp.length < 2){
            console.log("3");
            document.getElementById("pseudo-connexion").className = isdanger();
            document.getElementById("mdp-connexion").className = isdanger();
            document.getElementById("nocccm-connexion-erreur").innerHTML = "<p class='help is-danger'>Il manque le pseudo est le mot de passe</p>";
        }
    } else {
        document.getElementById("pseudo-connexion").className = issucces();
        document.getElementById("mdp-connexion").className = issucces();
        document.getElementById("nocccm-connexion-erreur").innerHTML = "<p class='help is-success'>Le formulaire est bien remplie</p>";
    }
};