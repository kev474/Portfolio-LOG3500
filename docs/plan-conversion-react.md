\# Plan de conversion React - Portfolio LOG3500





\## 1. Objectif



Transformer le portfolio HTML/CSS/JavaScript actuel en une application SPA React avec :



\- composants réutilisables

\- React Router v6

\- Context API

\- consommation API GitHub

\- communication avec serveur Express





\---



\# 2. Structure React proposée





src/



├── components/



│   ├── Header.jsx



│   ├── Footer.jsx



│   ├── ThemeButton.jsx



│   ├── TeamCard.jsx



│   ├── ProjectCard.jsx



│   └── ContactForm.jsx





├── pages/



│   ├── Home.jsx



│   ├── Team.jsx



│   ├── Projects.jsx



│   └── Contact.jsx





├── context/



│   └── ThemeContext.jsx





├── assets/



│   └── images/





├── App.jsx



└── main.jsx







\---



\# 3. Conversion des éléments HTML





HTML actuel :



<header>



Devient :



components/Header.jsx







HTML actuel :



<footer>



Devient :



components/Footer.jsx







HTML actuel :



Carte membre :



<article>



Devient :



components/TeamCard.jsx







HTML actuel :



Formulaire :



<form>



Devient :



components/ContactForm.jsx







\---



\# 4. Conservation de l'accessibilité





Chaque composant doit conserver :





\- balises HTML5 sémantiques



\- attribut alt sur images



\- labels de formulaires



\- attribut aria-label



\- navigation clavier



\- contraste des couleurs







\---



\# 5. Gestion du thème





Remplacer :



JavaScript actuel :



document.body.classList.toggle("dark")





par :



Context API React





Structure :



ThemeContext.jsx





Fonctions :



\- ThemeProvider

\- theme

\- toggleTheme







\---



\# 6. Navigation React Router v6





Créer les routes :





/



Accueil







/team



Présentation équipe







/projects



Liste des projets







/projects/:id



Détails projet







/contact



Formulaire contact







\---



\# 7. Gestion des images





Déplacer :



images/





vers :





src/assets/images/





Importer dans React :





import kervins from "../assets/images/kervins.jpg";







\---



\# 8. Conservation du CSS





Réutiliser :



css/style.css



css/responsive.css



css/theme.css







Adapter progressivement les classes aux composants React.







\---



\# 9. Tests avant fusion





Vérifier :



\- navigation sans rechargement



\- responsive mobile



\- thème sombre



\- formulaire



\- images



\- accessibilité







\---



\# 10. Fusion Git





Avant fusion :





git pull





Créer une branche :





git checkout -b react-development





Après validation :





git merge react-development





Puis :



git push

