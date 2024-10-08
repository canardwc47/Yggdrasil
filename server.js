const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 5147;

// Configure CORS
app.use(cors({
  origin: '*' // Utilisez * temporairement pour tester, remplacez par l'origine correcte plus tard
}));

// Charger les mondes depuis db.json
const getMondes = () => {
  const data = fs.readFileSync(path.join(__dirname, 'db.json'));
  return JSON.parse(data).mondes;
};

// Routes API
app.get('/api/mondes', (req, res) => {
  const mondes = getMondes();
  res.json(mondes);
});

app.get('/api/mondes/:id', (req, res) => {
  const mondes = getMondes();
  const monde = mondes.find(m => m.id === req.params.id); // Comparaison directe des chaînes de caractères
  if (monde) {
    res.json(monde);
  } else {
    res.status(404).send('Monde not found');
  }
});

// Servir les fichiers statiques du dossier 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Pour toutes les autres requêtes, retourner le fichier 'index.html' du dossier 'build'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});




