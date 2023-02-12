/**
 * Change le menu lorsqu'on utilisateur se connecte et offre la page profil au lieu de connexion
 */

"use strict";

if (sessionStorage.getItem('connecté') == 'true'){

    /**
     * Nom de l'utilisateur connecté
     * @type {String}
     */
    let nomProfil = sessionStorage.getItem("nom");

    /**
     * Meilleur Score au Quizz
     * @type {number}
     */
    let score = sessionStorage.getItem("meilleurScore");

    document.getElementById("login").setAttribute("href", "profil.html");
    document.getElementById("login").textContent="Profil";
    document.getElementById("profil").textContent=nomProfil;
    if (score == null){
        document.getElementById("meilleurScore").textContent = "  Vous n'avez pas fait le quizz encore  "
    }
    else
    document.getElementById("meilleurScore").textContent = "Votre meilleur score au quizz est de " + score + "/20";

    /**
     * Bouton se Déconnecter
     * @type {Element}
     */
    let logout = document.getElementById("logout");
    logout.addEventListener('click',function (event) {
        deconnecter();
    });
}

function deconnecter() {
    sessionStorage.setItem('connecté','false');
    window.location.replace("index.html");
}



