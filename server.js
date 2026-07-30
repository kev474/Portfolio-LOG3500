// server.js
// Sèvè d'application pou Portfolio Professionnel Dynamique Full-Stack
// Ensemble de tâches 3 : Développement Serveur, Interconnexion API et DevOps

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Pò dinamik bay pa Railway (oswa 3000 an lokal pou tès)
const PORT = process.env.PORT || 3000;

// Chemen fichye kote n ap konsève mesaj yo
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// ---------- MIDDLEWARE ----------
// Pèmèt Express li kò (body) requests JSON
app.use(express.json());

// Sèvi fichye estatik build production Vite a (dossier /dist)
app.use(express.static(path.join(__dirname, 'dist')));

// ---------- FONKSYON ITIL ----------

/**
 * Li fichye messages.json epi retounen yon tablo (array).
 * Si fichye a pa egziste, li kreye l ak yon tablo vid.
 */
function readMessages() {
  try {
    if (!fs.existsSync(MESSAGES_FILE)) {
      fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
    }
    const data = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erè pandan lekti messages.json:', err);
    return [];
  }
}

/**
 * Ajoute yon nouvo mesaj nan fichye messages.json
 */
function saveMessage(message) {
  const messages = readMessages();
  messages.push(message);
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

/**
 * Valide done fòm kontak la.
 * Retounen yon objè { valid: boolean, errors: string[] }
 */
function validateContactData({ nom, email, sujet, message }) {
  const errors = [];

  if (!nom || typeof nom !== 'string' || nom.trim().length < 2) {
    errors.push("Non an obligatwa epi dwe gen omwen 2 karaktè.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Fòma imel la pa valid.");
  }

  if (!sujet || typeof sujet !== 'string' || sujet.trim().length < 3) {
    errors.push("Sijè a obligatwa epi dwe gen omwen 3 karaktè.");
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push("Mesaj la dwe gen omwen 10 karaktè.");
  }

  return { valid: errors.length === 0, errors };
}

// ---------- ROUTES API ----------

/**
 * POST /api/contact
 * Resevwa done fòm kontak la, valide yo, epi anrejistre yo nan messages.json
 */
app.post('/api/contact', (req, res) => {
  const { nom, email, sujet, message } = req.body;

  const { valid, errors } = validateContactData({ nom, email, sujet, message });

  if (!valid) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  const nouvoMesaj = {
    id: Date.now().toString(),
    nom: nom.trim(),
    email: email.trim(),
    sujet: sujet.trim(),
    message: message.trim(),
    dateReception: new Date().toISOString(),
  };

  try {
    saveMessage(nouvoMesaj);
    return res.status(201).json({
      success: true,
      messageConfirmation: "Mèsi! Mesaj ou a byen resevwa.",
      data: nouvoMesaj,
    });
  } catch (err) {
    console.error('Erè pandan sovgad mesaj la:', err);
    return res.status(500).json({
      success: false,
      errors: ["veuillez reessayer."],
    });
  }
});

/**
 * GET /api/contact
 * (Opsyonèl - itil pou tès/admin) Retounen tout mesaj yo resevwa
 */
app.get('/api/contact', (req, res) => {
  const messages = readMessages();
  res.status(200).json({ success: true, total: messages.length, data: messages });
});

// ---------- FALLBACK POU REACT ROUTER (SPA) ----------
// Nenpòt lòt route ki pa API dwe voye index.html pou React Router jere l kliyan-kote
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ---------- DEMARE SÈVÈ A ----------
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});