document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
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
function controlpseudo(champ) {
    const regex = regexcontrollettre();
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
    if (champ.value.length > 2 && champ.value.length < 50) {
        console.log("bon");
        document.getElementById("mdp-inscription").className = issucces();
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("mdp-inscription").className = normalinput();
    }
    else{
        console.log("pa bon");
        document.getElementById("mdp-inscription").className = isdanger();
    }
};
function controlmdp1(champ) {
    if (champ.value.length > 2 && champ.value.length < 50) {
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
function controlleinfo() {
    const mdp1 = document.getElementById("mdp-inscription").value;
    const mdp2 = document.getElementById("mdp1-inscription").value;
    const prenom = ;  
    const nom = ;
    const pseudo = ;
    const email = ;
    //console.log(mdp1);
    //console.log(mdp2);
   
    if (mdp1 == mdp2){
        if (mdp1.length === 0 || mdp2 === 0) {
            document.getElementById("mdp-inscription").className = isdanger();
            document.getElementById("mdp1-inscription").className = isdanger();
        }else{
            console.log("mdp egale");
            document.getElementById("mdp1-inscription").className = issucces();
        }
    }
    else{
        console.log("mdp pa egale");
        document.getElementById("mdp-inscription").className = isdanger();
        document.getElementById("mdp1-inscription").className = isdanger();
    }
};