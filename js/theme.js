console.log("theme.js chargé");

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    console.log("Classe actuelle :", document.body.className);

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️ Mode clair";

    } else {

        themeButton.textContent = "🌙 Mode sombre";

    }

});