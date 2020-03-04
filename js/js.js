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
function controlpseudo(champ) {
    if (champ.value.length > 2 && champ.value.length < 50) {
        console.log("bon");
        document.getElementById("pseudo-inscription").className = "input is-success";
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("pseudo-inscription").className = "input";
    }
    else{
        console.log("pa bon");
        document.getElementById("pseudo-inscription").className = "input is-danger";
    }
};
function controlnom(champ) {
    if (champ.value.length > 2 && champ.value.length < 50) {
        //const notiferreurs = document.getElementById("nom-inscription-erreur");
        console.log("bon");
        document.getElementById("nom-inscription").className = "input is-success";
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("nom-inscription").className = "input";
    }
    else{
        console.log("pa bon");
        document.getElementById("nom-inscription").className = "input is-danger";
        //document.getElementById("nom-inscription-erreur").innerHTML += "<p class='help is-success'>This usernasqqssqsqsqsqsqsqsqme is available</p>";
    }
};
function controlprenom(champ) {
    if (champ.value.length > 2 && champ.value.length < 50) {
        console.log("bon");
        document.getElementById("prenom-inscription").className = "input is-success";
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("prenom-inscription").className = "input";
    }
    else{
        console.log("pa bon");
        document.getElementById("prenom-inscription").className = "input is-danger";
    }
};
function controlmdp(champ) {
    if (champ.value.length > 2 && champ.value.length < 50) {
        console.log("bon");
        document.getElementById("mdp-inscription").className = "input is-success";
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("mdp-inscription").className = "input";
    }
    else{
        console.log("pa bon");
        document.getElementById("mdp-inscription").className = "input is-danger";
    }
};
function controlmdp1(champ) {
    if (champ.value.length > 2 && champ.value.length < 50) {
        console.log("bon");
    }
    else if(champ.value.length == 0){
        console.log("pa bon");
        document.getElementById("mpd1-inscription").className = "input";
    }
    else{
        console.log("pa bon");
        document.getElementById("mdp1-inscription").className = "input is-danger";
    }
};
function controlle2mdp() {
    const mdp1 = document.getElementById("mdp-inscription").value;
    const mdp2 = document.getElementById("mdp1-inscription").value;
    console.log(mdp1);
    console.log(mdp2);
    if (mdp1 == mdp2){
        console.log("mdp egale");
        document.getElementById("mdp1-inscription").className = "input is-success";
    }
    else{
        console.log("mdp pa egale");
        document.getElementById("mdp1-inscription").className = "input is-danger";
    }
};
