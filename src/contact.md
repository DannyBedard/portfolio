---
title: Contact Danny Bédard
layout: "base.njk"
css: contact
---

<section id="main">
    <div class="wrapper">
        <h2>Contact</h2>
        <form id="contact-form" method="post" action="mail.php" role="form">
            <fieldset>
                <legend>Formulaire de contact<br><br>Veuillez remplir les champs ci-dessous</legend>
                <div>
                    <label class="visually-hidden" for="nom">nom</label>
                    <input id="nom"  placeholder="Nom" name="nom">
                </div>
                <div>
                    <label class="visually-hidden" for="telNo">telephone</label>
                    <input type="tel" id="telNo" name="telNo" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" placeholder="Tel (555)555-5555">
                </div>
                <div>
                    <label class="visually-hidden" for="Courriel">courriel</label>
                    <input type="email" id="Courriel" placeholder="Courriel" name="courriel">
                </div>
            </fieldset>
            <div>
                <label for="message">Votre message : </label>
            </div>
            <textarea id="message" rows="10" cols="100" maxlength="300" spellcheck="true" wrap="hard" placeholder="Votre message" name="message"></textarea>
            <div>
                <input type="submit" value="Soumettre" id="submit">
            </div>
        </form>
    </div>
</section>