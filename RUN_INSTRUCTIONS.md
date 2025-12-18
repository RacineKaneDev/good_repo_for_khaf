# Guide de Lancement de l'Application

Ce fichier détaille les étapes manuelles pour lancer le projet complet (Backend + Frontend).

## Prérequis
- **Docker** et **Docker Compose** installés et lancés.
- **Node.js** (v14+ recommandé) et **npm**.

## 1. Lancer le Backend

Le backend est composé de microservices gérés par Docker Compose.

1.  Ouvrez un terminal.
2.  Naviguez vers le dossier de configuration Docker :
    ```bash
    cd "backend actuel/docker-compose/default"
    ```
3.  Lancez les conteneurs en arrière-plan :
    ```bash
    docker-compose up -d
    ```
4.  Attendez quelques minutes que les services (Eureka, Gateway, ConfigServer) soient opérationnels.

## 2. Lancer le Frontend

Le frontend est une application React.

1.  Ouvrez un **nouveau terminal** (ou revenez à la racine).
2.  Naviguez vers le dossier du frontend :
    ```bash
    cd "frontend actuel"
    ```
3.  Installez les dépendances (si ce n'est pas déjà fait) :
    ```bash
    npm install
    ```
4.  Lancez le serveur de développement :
    ```bash
    npm start
    ```
5.  L'application s'ouvrira automatiquement à l'adresse : [http://localhost:3000](http://localhost:3000)

## Commandes Utiles

- **Arrêter le backend** :
  ```bash
  cd "backend actuel/docker-compose/default"
  docker-compose down
  ```
- **Reconstruire les images backend** (si le code Java change) :
  ```bash
  docker-compose up -d --build
  ```
