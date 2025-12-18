#!/bin/bash

# Script de lancement automatique pour le projet Ndank Ndank

# Obtenir le chemin absolu du dossier où se trouve le script
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🚀 Démarrage de l'application..."

# 1. Lancement du Backend
echo "------------------------------------------------"
echo "📦 Lancement des services Backend (Docker)..."
echo "------------------------------------------------"

cd "$PROJECT_ROOT/backend actuel/docker-compose/default" || { echo "❌ Dossier backend introuvable"; exit 1; }

# Lancer docker-compose en mode détaché (-d)
docker-compose up -d

if [ $? -eq 0 ]; then
  echo "✅ Conteneurs Backend lancés avec succès !"
else
  echo "❌ Erreur lors du lancement de Docker Compose."
  exit 1
fi

echo "⏳ Attente de 15 secondes pour l'initialisation des services..."
sleep 15

# 2. Lancement du Frontend
echo "------------------------------------------------"
echo "💻 Lancement du Frontend (React)..."
echo "------------------------------------------------"

cd "$PROJECT_ROOT/frontend actuel" || { echo "❌ Dossier frontend introuvable"; exit 1; }

if [ ! -d "node_modules" ]; then
  echo "📦 Installation des dépendances NPM..."
  npm install
fi

echo "🌍 Démarrage du serveur de développement..."
npm start
