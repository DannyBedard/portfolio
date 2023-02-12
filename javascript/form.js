"use strict";

/**
 * @type {Element}
 */
let form = document.querySelector('#form');

/**
 * URL de l'API
 * @type {string}
 */
let url = "http://420n26.jolinfo.cegep-lanaudiere.qc.ca/api/register.php";

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
                alert("Une erreur est survenue")
        })
        .then(data => {
            console.log(data);
            if (data.success) {
                window.location.replace("login.html");
            }
            else{
                alert(data.message);
                form.reset();
            }
        });
});