# N8n Setup for ELECTRON Business Suite
# ==========================================

## 🚀 Option 1: Docker Compose (Recommandé)

### Étape 1: Installer Docker
```bash
# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install docker.io docker-compose

# Démarrer Docker
sudo systemctl start docker
sudo systemctl enable docker
```

### Étape 2: Créer le fichier docker-compose.yml
Copiez le fichier `n8n-docker-compose.yml` fourni et lancez:

```bash
docker-compose up -d
```

### Étape 3: Accéder à N8N
- URL: http://localhost:5678
- Email: admin@electron.africa
- Mot de passe: Definissez-le lors de la première connexion

---

## 🔧 Option 2: Installation Manuelle

### Linux
```bash
# Installer Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs

# Installer n8n
npm install -g n8n

# Lancer n8n
n8n
```

### Avec Docker直接的
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -e N8N_BASIC_AUTH_ACTIVE=true \
  -e N8N_BASIC_AUTH_USER=admin \
  -e N8N_BASIC_AUTH_PASSWORD=electron2024 \
  -e N8N_HOST=localhost \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

---

## ⚙️ CONFIGURATION N8N POUR ELECTRON

### 1. Workflow: Surveillance GitHub
- **Déclencheur**: Webhook GitHub ou cron toutes les heures
- **Action**: Vérifier nouveaux commits, notifier par email/Slack

### 2. Workflow: Sauvegarde Automatique
- **Déclencheur**: Quotidien (minuit)
- **Action**: Sauvegarder base de données, envoyer vers cloud

### 3. Workflow: Rapports Statistiques
- **Déclencheur**: Hebdomadaire (Lundi 9h)
- **Action**: Générer rapport KPIs, envoyer par email

### 4. Workflow: Monitoring Système
- **Déclencheur**: Toutes les 5 minutes
- **Action**: Vérifier santé de l'API, alerter si down

### 5. Workflow: Synchronisation CRM
- **Déclencheur**: Temps réel (webhook)
- **Action**: Synchroniser nouveaux clients avec CRM

---

## 📡 INTÉGRATIONS NODES N8N

### Nodes Recommandés pour ELECTRON:
- **GitHub** - Surveillance repo, releases
- **Gmail** / **Outlook** - Envoi emails
- **Slack** - Notifications
- **Discord** - Notifications
- **Telegram** - Bot notifications
- **MySQL** / **PostgreSQL** - Base de données
- **MongoDB** - Base de données NoSQL
- **HTTP Request** - APIs externes
- **Webhook** - Déclencheurs externes
- **Cron** - Planification

---

## 🔐 VARIABLES D'ENVIRONNEMENT

```env
# N8N
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=votre_mot_de_passe
N8N_HOST=electron.africa
N8N_PROTOCOL=https
N8N_PORT=5678

# ELECTRON
ELECTRON_GITHUB_REPO=https://github.com/IlarionDossouyovo/ELECTRON
ELECTRON_EMAIL=electronbusiness07@gmail.com
ELECTRON_WEBHOOK_URL=https://electron.africa/webhook
```

---

## 📊 WORKFLOWS PRÊTS

Voir le dossier `workflows/` pour les exports JSON des workflows n8n.

### Importer un Workflow:
1. Aller dans N8N → Settings → Import/Export
2. Cliquer "Import Workflow"
3. Coller le JSON du workflow

---

## 🆘 SUPPORT

- **Documentation N8N**: https://docs.n8n.io
- **Discord N8N**: https://discord.gg/n8n
- **GitHub**: https://github.com/n8n-io/n8n