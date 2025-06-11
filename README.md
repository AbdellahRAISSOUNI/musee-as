# Musée Abderrahman Slaoui - Site Web Officiel

Un site web moderne et élégant pour le Musée Abderrahman Slaoui, conçu avec une typographie raffinée basée sur la famille de polices Bodoni et un design premium noir et blanc avec des accents dorés.

## Caractéristiques

- **Interface Utilisateur Premium**
  - Design sophistiqué noir et blanc avec accents dorés
  - Mise en page élégante et minimaliste avec des détails visuels premium
  - Animations subtiles et transitions fluides pour une expérience immersive
  - Entièrement responsive pour tous les appareils

- **Header à Double Niveau Inspiré du Louvre**
  - Navigation principale avec menus déroulants pleine largeur
  - Animation de défilement: apparaît/disparaît intelligemment selon le défilement
  - Fonctionnalité de recherche intégrée avec transformation de l'interface
  - Menus déroulants sophistiqués avec contenu organisé et mises en avant

- **Section Héro Immersive**
  - Arrière-plan vidéo avec fallback en image
  - Typographie dynamique avec animations d'entrée
  - Effet de fondu progressif lors du défilement
  - Indicateur de défilement animé

- **Système Typographique Personnalisé**
  - Basé sur les directives de la marque de la Fondation Slaoui
  - Bodoni Poster (Regular)
  - Bodoni Poster Italic
  - Bodoni Bold
  - Hiérarchie typographique avec Titre Grand Texte, Texte de Séquence et Étiquettes de Commentaire
  
- **Technologies Web Modernes**
  - Next.js 15 avec App Router
  - TypeScript pour la sécurité du typage
  - Tailwind CSS pour un design responsive
  - Framer Motion pour des animations fluides

## Structure du Projet

```
musee/
├── public/
│   ├── fonts/           # Fichiers de police Bodoni
│   ├── images/          # Images et assets
│   └── videos/          # Vidéos (fond héro, etc.)
├── src/
│   ├── app/             # Pages Next.js App Router
│   ├── components/      # Composants React
│   │   ├── Header.tsx   # Composant d'en-tête à double niveau
│   │   ├── HeroSection.tsx # Section héro avec effet de défilement
│   │   └── HeroVideo.tsx # Composant vidéo avec fallback
│   └── styles/          # Définitions CSS et de style
├── tailwind.config.js   # Configuration Tailwind
└── package.json         # Dépendances du projet
```

## Composants Clés

### Header

Le composant Header est conçu avec une approche sophistiquée inspirée du site web du Louvre:

- **Structure à Double Niveau**:
  - Niveau supérieur: Nom du musée (en Bodoni Italic) avec icônes de recherche
  - Niveau inférieur: Sections de navigation principales (EXPOSITIONS, COLLECTIONS, VISITE, À PROPOS)

- **Comportement de Défilement Intelligent**:
  - Disparaît lorsque l'utilisateur défile vers le bas (au-delà de 150px)
  - Réapparaît instantanément lorsque l'utilisateur défile vers le haut
  - Transitions fluides avec animation de transformation

- **Menus Déroulants Pleine Largeur**:
  - Lorsqu'une section est cliquée, un panneau pleine largeur s'ouvre
  - Disposition en grille moderne avec liens à gauche
  - Section de contenu en vedette à droite avec image, titre, description et lien
  - Animations d'ouverture/fermeture avec Framer Motion

- **Fonctionnalité de Recherche Transformative**:
  - L'interface de navigation se transforme en barre de recherche
  - Animation fluide lors du basculement entre les états

- **Responsive Mobile**:
  - Menu hamburger pour les petits écrans
  - Navigation mobile optimisée avec animations accordéon
  - Expérience utilisateur cohérente sur tous les appareils

### Section Héro

La section Héro crée une première impression puissante:

- **Arrière-plan Dynamique**:
  - Vidéo en arrière-plan avec fallback automatique en image
  - Superposition sombre pour améliorer la lisibilité du texte

- **Typographie Animée**:
  - Animations d'entrée séquentielles pour les éléments textuels
  - Hiérarchie typographique claire avec Bodoni

- **Effet de Défilement**:
  - La section s'estompe progressivement lors du défilement vers le bas
  - Réapparaît lors du défilement vers le haut
  - Début de l'effet à 50px, complètement transparent à 500px

- **Indicateur de Défilement**:
  - Animation pulsante pour guider l'utilisateur vers le contenu principal
  - Comportement de défilement fluide vers la première section

## Palette de Couleurs

La palette de couleurs est conçue pour transmettre un luxe premium avec une esthétique moderne:

- **Noir Premium**: #000000 - La base du design
- **Noir Doux**: #0A0A0A - Légèrement plus doux que le noir pur
- **Charbon**: #1A1A1A - Pour les panneaux et arrière-plans de section
- **Graphite**: #2A2A2A - Pour une différenciation subtile
- **Ardoise**: #3A3A3A - Pour les bordures et séparateurs
- **Blanc Premium**: #FFFFFF - Pour le contraste et la lisibilité
- **Blanc Doux**: #F5F5F5 - Blanc plus doux pour une lecture confortable
- **Or Accent**: #D4AF37 - Accent luxueux pour les surlignages et détails

## Démarrage Rapide

1. Installer les dépendances:
   ```
   npm install
   ```

2. Lancer le serveur de développement:
   ```
   npm run dev
   ```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Utilisation des Polices

Les polices Bodoni personnalisées sont chargées via CSS et configurées dans Tailwind. Pour les utiliser dans vos composants:

```jsx
// Utilisation directe des classes de police
<h1 className="font-bodoni-regular">Texte de Titre</h1>
<p className="font-bodoni-italic">Texte en italique</p>
<strong className="font-bodoni-bold">Texte en gras</strong>
```

## Design Responsive

Le site web est entièrement responsive avec des points d'arrêt soigneusement élaborés pour garantir une typographie et une mise en page optimales sur tous les appareils.

## Animations et Transitions

Le site utilise Framer Motion pour des animations fluides et des transitions élégantes:

- **Animations d'Interface**:
  - Menus déroulants avec effet de fondu et de déplacement
  - Transformations douces entre les états de navigation
  - Effets de survol subtils sur les éléments interactifs

- **Animations de Contenu**:
  - Apparition séquentielle des éléments de la section héro
  - Transitions de page fluides
  - Indicateurs animés pour guider l'attention de l'utilisateur

## Déploiement

Le site peut être déployé sur diverses plateformes, mais Vercel est recommandé pour les applications Next.js:

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel
```

## Contributeurs

- Design et Développement: Équipe Musée Abderrahman Slaoui

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
