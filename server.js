// server.js
// Serveur d'application Portfolio Professionnel Dynamique Full-Stack

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Port fourni par Railway ou port local
const PORT = process.env.PORT || 3000;

// Fichier de stockage des messages
const MESSAGES_FILE = path.join(__dirname, "messages.json");

// --------------------
// MIDDLEWARE
// --------------------

app.use(express.json());

// Servir le build React Vite
app.use(
  express.static(path.join(__dirname, "client", "dist"))
);


// --------------------
// FONCTIONS UTILITAIRES
// --------------------

function readMessages() {
  try {
    if (!fs.existsSync(MESSAGES_FILE)) {
      fs.writeFileSync(
        MESSAGES_FILE,
        JSON.stringify([], null, 2)
      );
    }

    const data = fs.readFileSync(
      MESSAGES_FILE,
      "utf-8"
    );

    return JSON.parse(data);

  } catch (error) {
    console.error(
      "Erreur lecture messages.json :",
      error
    );

    return [];
  }
}


function saveMessage(message) {

  const messages = readMessages();

  messages.push(message);

  fs.writeFileSync(
    MESSAGES_FILE,
    JSON.stringify(messages, null, 2)
  );
}


function validateContactData({
  nom,
  email,
  sujet,
  message
}) {

  const errors = [];

  if (
    !nom ||
    typeof nom !== "string" ||
    nom.trim().length < 2
  ) {
    errors.push(
      "Le nom est obligatoire (minimum 2 caractères)."
    );
  }


  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (
    !email ||
    !emailRegex.test(email)
  ) {
    errors.push(
      "Le format du courriel est invalide."
    );
  }


  if (
    !sujet ||
    typeof sujet !== "string" ||
    sujet.trim().length < 3
  ) {
    errors.push(
      "Le sujet est obligatoire (minimum 3 caractères)."
    );
  }


  if (
    !message ||
    typeof message !== "string" ||
    message.trim().length < 10
  ) {
    errors.push(
      "Le message doit contenir au moins 10 caractères."
    );
  }


  return {
    valid: errors.length === 0,
    errors
  };
}


// --------------------
// ROUTES API
// --------------------


// Réception formulaire contact
app.post("/api/contact", (req, res) => {

  const {
    nom,
    email,
    sujet,
    message
  } = req.body;


  const validation =
    validateContactData({
      nom,
      email,
      sujet,
      message
    });


  if (!validation.valid) {

    return res.status(400).json({

      success: false,

      errors: validation.errors

    });

  }


  const nouveauMessage = {

    id: Date.now().toString(),

    nom: nom.trim(),

    email: email.trim(),

    sujet: sujet.trim(),

    message: message.trim(),

    dateReception:
      new Date().toISOString()

  };


  try {

    saveMessage(nouveauMessage);


    res.status(201).json({

      success: true,

      messageConfirmation:
        "Merci ! Votre message a bien été reçu."

    });


  } catch (error) {

    console.error(error);


    res.status(500).json({

      success: false,

      errors: [
        "Erreur serveur."
      ]

    });

  }

});



// Route test récupération messages
app.get("/api/contact", (req, res) => {

  const messages = readMessages();


  res.json({

    success: true,

    total: messages.length,

    data: messages

  });

});


// --------------------
// FALLBACK REACT ROUTER
// --------------------

app.get(/.*/, (req, res) => {

  res.sendFile(

    path.join(
      __dirname,
      "client",
      "dist",
      "index.html"
    )

  );

});


// --------------------
// DÉMARRAGE SERVEUR
// --------------------

app.listen(PORT, () => {

  console.log(
    `✅ Serveur démarré sur le port ${PORT}`
  );

});