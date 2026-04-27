# ELECTRON Business Suite - Configuration Domaine

## URL Actuelle (Vercel)
```
https://electron-orcin.vercel.app
```

## Pour connecter votre nom de domaine:

### Methode 1: Via Vercel Dashboard

1. Allez sur https://vercel.com/dashboard
2. Selectionnez le projet "ELECTRON"
3. Allez dans **Settings** > **Domains**
4. Entrez votre nom de domaine (ex: electron.business)
5. Suivez les instructions pour le DNS

### Methode 2: Acheter nouveau domaine

1. Allez sur https://vercel.com/domains
2. Cherchez un nom disponible
3. Achetez directement (gratuit pour .vercel.app)

## DNS Configuration

Si vous avez un domaine externe:

| Type | Name | Value |
|-----|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.verceldns.com |

## Environment Variables necessaires

Creez un fichier `.env.local`:

```env
VITE_FIREBASE_API_KEY= votreCle
VITE_FIREBASE_AUTH_DOMAIN= votreProjet.firebaseapp.com
VITE_FIREBASE_PROJECT_ID= votreProjet
VITE_FIREBASE_STORAGE_BUCKET= votreProjet.appspot.com
VITE_FIREBASE_APP_ID= votreAppId
VITE_OPENAI_API_KEY= votreCleOpenAI
```

## Commandes de deployment

```bash
# Development
npm run dev

# Build production
npm run build

# Deploy vers Vercel
vercel --prod
```

## Structure du projet

```
ELECTRON/
├── src/
│   ├── pages/         (30+ pages React)
│   ├── stores/        (Zustand cart)
│   ├── firebase/     (Config Firebase)
│   └── components/    (Composants)
├── public/
│   ├── manifest.json (PWA)
│   ├── robots.txt
│   └── sitemap.xml
├── index.html
└── vite.config.js
```

## Pages disponibles

| Route | Description |
|------|-------------|
| / | Accueil |
| /e-expresse | Marketplace principal |
| /e-battisseurs | Construction |
| /e-clean | Nettoyage |
| /e-sim | Telephonie |
| /ai-automation | IA |
| /payments | Paiements |
| /cart | Panier |
| /checkout | Commander |
| /login | Connexion |
| /dashboard | Tableau de bord |
| /admin | Administration |
| /blog | Blog |
| /contact | Contact |
| /careers | Carrieres |
