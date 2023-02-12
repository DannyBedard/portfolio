/**
 * Joue les notes cliquées sur le piano et les accords glissés
 */

"use strict";

/**
 * Touche du piano
 * @type {NodeListOf<Element>}
 */
let touche  = document.querySelectorAll('.set>li');

for (let i = 0; i < touche.length; i++) {
    touche[i].addEventListener('click', function(event) {
        myPlay(event);
    });
}

window.onload = function loadPiano() {
    let noteLoad;
    document.getElementById("main").style.opacity = "0.5";
    for (let i = 1; i <= 24; i++){
        noteLoad = new Audio("javascript/samplePiano/" + i + ".wav");
        noteLoad.load();
    }
    document.getElementById("main").style.opacity = "1";
};

/**
 * Checkbox pour afficher ou non les accords
 * @type {HTMLElement}
 */
let checkBox = document.getElementById("afficher");

checkBox.addEventListener('click', function(event) {
    afficherAccord();
});

/**
 * Trouve l'audio de la note cliqué grace à l'ID de celle-ci
 * Vérifie si la note va être sustain ou non
 * @param event
 */
function myPlay(event) {
    /**
     * ID de la note cliqué
     * @type {string}
     */
    let nom = event.target.id;
    if (document.getElementById("sustain").checked){
        /**
         * Note longue sélectionnée
         * @type {HTMLAudioElement}
         */
        let audio = new Audio("javascript/samplePiano/sustain/" + nom + "sus" + ".wav");
        audio.play();
    }
    else {
        /**
         * Note courte sélectionnée
         * @type {HTMLAudioElement}
         */
        let audio = new Audio("javascript/samplePiano/" + nom + ".wav");
        audio.play();
    }
}

/**
 * Accepte le drop
 * @param event
 */
function allowDrop(event) {
    event.preventDefault();
}

/**
 * Commence le drag
 * @param event
 */
function drag(event) {
    event.dataTransfer.setData("String", event.target.id);
}

/**
 * Joue l'accord sélectionnée au drop
 * @param event
 */
function drop(event) {
    event.preventDefault();
    /**
     * Le nom de l'accord sélectionnée
     * @type {string}
     */
    let data = event.dataTransfer.getData("String");
    /**
     * le nom de la note au drop
     * @type {string}
     */
    let nom = event.target.id;
    /**
     * 2e note de l'accord (selon le type sélectionnée)
     * @type {string}
     */
    let note2;
    /**
     * 3e note de l'accord (selon le type sélectionnée)
     * @type {string}
     */
    let note3;
    /**
     * 4e note de l'accord (selon le type sélectionnée)
     * @type {string}
     */
    let note4;
    /**
     * 2e note de l'accord (selon le type sélectionnée)
     * @type {HTMLAudioElement}
     */
    let audio4;

    switch (data) {
        case "majeur":
            note2 = nextNote(nom, 4);
            note3 = nextNote(nom, 7);
            break;
        case "mineur":
            note2 = nextNote(nom, 3);
            note3 = nextNote(nom, 7);
            break;
        case "minb5":
            note2 = nextNote(nom, 3);
            note3 = nextNote(nom, 6);
            break;
        case "aug":
            note2 = nextNote(nom, 4);
            note3 = nextNote(nom, 8);
            break;
        case "sept":
            note2 = nextNote(nom, 4);
            note3 = nextNote(nom, 7);
            note4 = nextNote(nom, 10);
            audio4 = new Audio("javascript/samplePiano/" + note4 + ".wav");
            audio4.play();
            break;
        case "Maj7":
            note2 = nextNote(nom, 4);
            note3 = nextNote(nom, 7);
            note4 = nextNote(nom, 11);
            audio4 = new Audio("javascript/samplePiano/" + note4 + ".wav");
            audio4.play();
            break;
        case "min7":
            note2 = nextNote(nom, 3);
            note3 = nextNote(nom, 7);
            note4 = nextNote(nom, 10);
            audio4 = new Audio("javascript/samplePiano/" + note4 + ".wav");
            audio4.play();
            break;
    }

    /**
     * Audio avec le nom de la note
     * @type {HTMLAudioElement}
     */
    let audio = new Audio("javascript/samplePiano/" + nom + ".wav");
    /**
     * Audio avec le nom de la 2e note
     * @type {HTMLAudioElement}
     */
    let audio2 = new Audio("javascript/samplePiano/" + note2 + ".wav");
    /**
     * Audio avec le nom de la 3e note
     * @type {HTMLAudioElement}
     */
    let audio3 = new Audio("javascript/samplePiano/" + note3 + ".wav");
    audio.play();
    audio2.play();
    audio3.play();
}

/**
 * Ajoute une note à l'harmonie selon l'interval donné en paramètre
 * @param note nom de la note ou le drop a eu lieu
 * @param i Type d'interval
 * @returns {string} le nom de la note sur le bon interval
 */
function nextNote(note, i) {
    /**
     * Note ajouté à l'harmonie
     * @type {number}
     */
    let ajout = parseInt(note);
    ajout = ajout + i;
    if (ajout > 24)
        ajout = ajout - 12;
    return ajout.toString();
}

/**
 * Affiche ou non les nom d'accords, si on veut faire le quizz avec le piano dans le même écran
 */
function afficherAccord() {
    /**
     * Case à coché "Cacher les accords"
     * @type {HTMLCollectionOf<Element>}
     */
    let accord = document.getElementsByClassName('Accords');
    if (checkBox.checked == true){
        for (let i = 0; i < accord.length; i ++) {
            accord[i].style.display = 'none';
        }
    }
    else{
        for (let i = 0; i < accord.length; i ++) {
            accord[i].style.display = 'flex';
        }
    }
}


