/**
 * Vérifie avec l'API si l'utilisateur existe et le connecte
 */

"use strict";

/**
 * @type {Element}
 */
let form = document.querySelector('#form');

/**
 * URL de l'API
 * @type {String}
 */
let url = "http://420n26.jolinfo.cegep-lanaudiere.qc.ca/api/login.php";


form.addEventListener("submit", event =>{
    /**
     * Formulaire Rempli
     * @type {FormData}
     */
    let formData = new FormData(form);
    formData.append('da', "1289355");
    event.preventDefault();
    fetch(url,{
        method:'POST',
        body: formData
    })
        .then(data => {
            if (data.ok) {
                return data.json();
            }
            else
                alert("Une erreur a eu lieu")
        })
        .then(data => {
            console.log(data);
            if (data.success) {
                connection();
            }
            else{
                alert("une erreur est survenue");
                form.reset();
            }
        });
});

/**
 * Modification du session Storage à la connexion
 */
function connection() {
    /**
     * Nom d'utilisateur
     * @type {Element}
     */
    let profil = document.getElementById("userName").value;
    sessionStorage.setItem('connecté', 'true');
    sessionStorage.setItem('nom', profil);
    window.location.replace("index.html");
}

