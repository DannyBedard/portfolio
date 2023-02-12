/**
 * Créer un quizz et gère les réponses de l'utilisateur
 */

"use strict";

/**
 * Bouton pour envoyer la réponse choisit
 * @type {HTMLElement}
 */
const submitButton = document.getElementById('submit');
/**
 * Bouton pour commencer le quizz
 * @type {HTMLElement}
 */
let commencer = document.getElementById("commencer");
/**
 * choix 1 à 4 les checkbox des choix e réponses
 * @type {HTMLElement}
 */
let choix1 = document.getElementById("choix1");
let choix2 = document.getElementById("choix2");
let choix3 = document.getElementById("choix3");
let choix4 = document.getElementById("choix4");
/**
 * reponse 1 à 4 les labels (textes, liés aux checkbox)
 * @type {HTMLElement}
 */
let reponse1 = document.getElementById("reponse1");
let reponse2 = document.getElementById("reponse2");
let reponse3 = document.getElementById("reponse3");
let reponse4 = document.getElementById("reponse4");
/**
 * Question posé
 * @type {HTMLElement}
 */
let questionPoser = document.getElementById("question");
/**
 * Parcours les questions du quizz
 * @type {number}
 */
let parcours = 0;
/**
 * calcul les points de l'utilisateur
 * @type {number}
 */
let point = 0;
/**
 * Tableau contenant les questions et les réponses
 * @type {({a: string, b: string, c: string, question: string, d: string, correct: string}|{a: string, b: string, c: string, question: string, d: string, correct: string}|{a: string, b: string, c: string, question: string, d: string, correct: string}|{a: string, b: string, c: string, question: string, d: string, correct: string}|{a: string, b: string, c: string, question: string, d: string, correct: string})[]}
 */
const myQuestions = [
    {
        question: "Combien y-a-t-il d'interlignes sur une portée ?",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
        correct: "4"
    },
    {
        question: "Combien y-a-t-il de lignes sur une portée ?",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
        correct: "5"
    },
    {
        question: "Quel est la note concernée par le premier bémol présent à l'armure ?",
        a: "Si",
        b: "Fa",
        c: "Do",
        d: "La",
        correct: "Si"
    },
    {
        question: "Quel est la note concernée par le premier dièse présent à l'armure ?",
        a: "Si",
        b: "Fa",
        c: "Do",
        d: "La",
        correct: "Fa"
    },
    {
        question: "Combien faut-il de double-croches pour valoir une noire ?",
        a: "8 double-croches",
        b: "2 double-croches",
        c: "4 double-croches",
        d: "1 double-croches",
        correct: "4 double-croches"
    },
    {
        question: "Combien la ronde pointée vaut-elle de noires ?",
        a: "3 noires",
        b: "12 noires",
        c: "6 noires",
        d: "4 noires",
        correct: "6 noires"
    },
    {
        question: "Une demi-pause vaut …",
        a: "8 temps",
        b: "1 temps",
        c: "4 temps",
        d: "2 temps",
        correct: "2 temps"
    },
    {
        question: "Combien faut-il de quarts de soupir pour une pause ?",
        a: "16 quarts de soupir",
        b: "8 quarts de soupir",
        c: "4 quarts de soupir",
        d: "32 quarts de soupir",
        correct: "16 quarts de soupir"
    },
    {
        question: "Combien y-a-t-il de demi-tons entre Mi(Bas) et Ré(Haut)?",
        a: "7 demi-tons",
        b: "5 demi-tons",
        c: "10 demi-tons",
        d: "11 demi-tons",
        correct:"10 demi-tons"
    },
    {
        question: "Combien y-a-t-il de demi-tons entre Mib(Bas) et Do(Haut)?",
        a: "5 demi-tons",
        b: "9 demi-tons",
        c: "10 demi-tons",
        d: "6 demi-tons",
        correct: "9 demi-tons"
    },
    {
        question: "Quelle figure de notes représente un temps en 12/8 ?",
        a: "La noire",
        b: "La ronde",
        c: "La croche",
        d: "La double-croche",
        correct: "La croche"
    },
    {
        question: "Combien peut-il y avoir de croches pointées dans une mesure à 6/16 ?",
        a: "2",
        b: "3",
        c: "6",
        d: "12",
        correct: "2"
    },
    {
        question: "Un triolet de double-croches vaut …",
        a: "Une noire",
        b: "Une blanche",
        c: "Une croche",
        d: "Une double croche",
        correct: "Une croche"
    },
    {
        question: "Un triolet de noires vaut …",
        a: "Une noire",
        b: "Une blanche",
        c: "Une croche",
        d: "Une double croche",
        correct: "Une blanche"
    },
    {
        question: "Quelle est la dominante en La majeur ?",
        a: "Ré",
        b: "Sib",
        c: "Mi",
        d: "La",
        correct: "Mi"
    },
    {
        question: "De quelle gamme majeure la note La est-elle la tonique ?",
        a: "Ré",
        b: "Sib",
        c: "Mi",
        d: "La",
        correct: "La"
    },
    {
        question: "Quelles sont les notes de l'accord de Labm7 ?",
        a: "Lab Do Mib Solb",
        b: "Lab Dob Mib Solb",
        c: "Lab Dob Mib Sol",
        d: "Lab Do Mib Sol",
        correct: "Lab Dob Mib Solb"
    },
    {
        question: "Quelles sont les notes de l'accord de SibMaj7 ?",
        a: "Sib Ré Fa La",
        b: "Sib Réb Fa La",
        c: "Sib Ré Fa Lab",
        d: "Sib Réb Fa Lab",
        correct: "Sib Ré Fa La"
    },
    {
        question: "Quel est l'intervalle entre Ré#(Bas) et La(Haut) ?",
        a: "Quarte Juste",
        b: "Sixte mineur",
        c: "Quinte Juste",
        d: "Triton",
        correct: "Triton"
    },
    {
        question: "Qu'est ce qui désigne dans un morceau en mode mineur un accord sur la tonique, où la tierce majeure " +
            "est utilisée à la place de la tierce mineure utilisée dans le reste de la pièce",
        a: "Modulation Majeur",
        b: "Pas besoin de le nommé, on l'utilise souvent",
        c: "Tierce de Picardie",
        d: "Accord de substitution",
        correct: "Tierce de Picardie"
    },
];

commencer.addEventListener('click', function(event) {
    afficher();
    buildQuiz();
});

submitButton.addEventListener('click', showResults);

/**
 * Parcours le tableau de question et de choix de réponse
 */
function buildQuiz(){
    questionPoser.innerHTML = myQuestions[parcours].question;
    reponse1.innerText = myQuestions[parcours].a;
    reponse2.innerText = myQuestions[parcours].b;
    reponse3.innerText = myQuestions[parcours].c;
    reponse4.innerText = myQuestions[parcours].d;
    submitButton.addEventListener('click', showResults);
}

/**
 * Gère les points et les choix de réponses de l'utilisateur
 */
function showResults(){
    if (choix1.checked)
        confirmer(reponse1);
    if (choix2.checked)
        confirmer(reponse2);
    if (choix3.checked)
        confirmer(reponse3);
    if (choix4.checked)
        confirmer(reponse4);
    parcours++;
    if (parcours === 20){
        alert("Votre score est de " + point + "/20");
        parcours = 0;
        cacher();
        if (sessionStorage.getItem("meilleurScore") < point)
        sessionStorage.setItem("meilleurScore", point);
    }
    buildQuiz();
}

/**
 * Confirme si le choix de l'utilisateur est la bonne réponse
 * @param reponse réponse coché par l'utilisateur
 */
function confirmer(reponse) {
    if (reponse.innerText === myQuestions[parcours].correct){
        alert("Bonne réponse!");
        point++;
    }
    else
        alert("Désolé! Ce n'est pas la bonne réponse!");
}

/**
 * Affiche les éléments du quizz lorsqu'on clique sur "commencer le questionnaire"
 */
function afficher() {
    choix1.style.display = "inline";
    choix2.style.display = "inline";
    choix3.style.display = "inline";
    choix4.style.display = "inline";
    reponse1.style.display = "inline";
    reponse2.style.display = "inline";
    reponse3.style.display = "inline";
    reponse4.style.display = "inline";
    commencer.style.display = "none";
    questionPoser.style.display = "inline";
    submitButton.style.display = "inline";
}

/**
 * Cache les éléments du quizz lorsqu'il est terminé
 */
function cacher() {
    choix1.style.display = "none";
    choix2.style.display = "none";
    choix3.style.display = "none";
    choix4.style.display = "none";
    reponse1.style.display = "none";
    reponse2.style.display = "none";
    reponse3.style.display = "none";
    reponse4.style.display = "none";
    commencer.style.display = "inline";
    questionPoser.style.display = "none";
    submitButton.style.display = "none";
}



