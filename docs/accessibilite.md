\# Accessibilité numérique - Portfolio LOG3500





\## 1. Structure HTML5 sémantique



L'application utilise les balises HTML5 :



\- header : en-tête du site

\- nav : navigation principale

\- main : contenu principal

\- section : regroupement des contenus

\- article : cartes des membres et projets

\- footer : pied de page





\## 2. Navigation accessible



La navigation utilise :



\- des liens clairs

\- une structure de liste ul/li

\- l'attribut aria-label





Exemple :



<nav aria-label="Navigation principale">





\## 3. Images accessibles



Toutes les images possèdent :



\- un attribut alt descriptif

\- un chargement optimisé avec loading="lazy"





Exemple :



<img 

src="images/kervins.jpg"

alt="Portrait de Kervins Lucien Heriveaux, développeur web"

loading="lazy">





\## 4. Formulaire accessible



Le formulaire utilise :



\- des labels associés aux champs

\- des attributs required

\- des types adaptés (email, text)

\- des messages compréhensibles





\## 5. Navigation clavier



Les éléments interactifs :



\- boutons

\- liens

\- champs de formulaire



possèdent un état focus visible.





\## 6. Gestion des thèmes



Le site utilise :



\- variables CSS

\- mode clair

\- mode sombre



Les couleurs respectent les règles de contraste.





\## 7. Responsive Design



La mise en page utilise :



\- Flexbox

\- CSS Grid

\- Media Queries



Le site est adapté :



\- ordinateurs

\- tablettes

\- téléphones

