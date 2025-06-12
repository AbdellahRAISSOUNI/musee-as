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
  - Fonctionnalité de recherche intégrée avec transformation dynamique de l'interface
  - Adaptation automatique aux différents appareils avec menu mobile optimisé

- **Sections Principales**
  - **Fondation Abderrahman Slaoui**: Histoire et mission de la fondation
  - **Collections & Expositions**: Collections permanentes et expositions temporaires
  - **Visites, Ateliers & Activités**: Programmation culturelle du musée
  - **Jeune Public**: Activités éducatives pour les enfants et groupes scolaires
  - **Infos Pratiques**: Horaires, tarifs, accès et services
  - **Tempus Fugit**: Exposition spéciale avec animations de défilement parallaxe

- **Composants Réutilisables**
  - Structure de pages modulaire et flexible
  - Système de grille cohérent pour l'affichage des contenus
  - Templates adaptés pour chaque type de contenu (collections, actualités, informations)

## Architecture du Projet

Le site est développé avec Next.js (App Router) et TypeScript, offrant une structure organisée pour faciliter la collaboration entre développeurs.

### Structure des Dossiers

```
src/
  app/                               # Dossier principal des routes Next.js
    fondation/                       # Section Fondation
      projet-musee/                  # Page du projet de musée
      presse/                        # Couverture médiatique
    collections-expositions/         # Section Collections & Expositions
      collections-permanentes/       # Collections permanentes
        [itemId]/                    # Pages dynamiques pour chaque objet de collection
      expositions-temporaires/       # Expositions temporaires
    visites-ateliers-activites/      # Section Visites & Activités
      actualites/                    # Actualités du musée
      ateliers-artistiques/          # Ateliers artistiques
      rencontres/                    # Événements et rencontres
      visites-guidees/               # Visites guidées
      privatisation/                 # Privatisation des espaces
    jeune-public/                    # Section Jeune Public
      visites-scolaires/             # Visites pour groupes scolaires
      ateliers-pedagogiques/         # Ateliers pour enfants
    infos-pratiques/                 # Informations pratiques
      horaires-tarifs-acces/         # Horaires, tarifs et accès
      cafe-musee/                    # Café du musée
      comptoir-vente/                # Boutique du musée
      contact/                       # Page de contact
    tempus-fugit/                    # Exposition spéciale Tempus Fugit
    site-map/                        # Plan du site
  components/                        # Composants réutilisables
    Header.tsx                       # En-tête du site avec navigation
    HeroSection.tsx                  # Section héro pour la page d'accueil
    HeroVideo.tsx                    # Composant vidéo pour la page d'accueil
    PageLayout.tsx                   # Layout réutilisable pour les pages
    ProjectMap.tsx                   # Composant de carte du site
  styles/                            # Styles globaux et utilitaires
```

### Guide des Composants et Organisation du Code

#### 1. Composants Réutilisables (`src/components/`)

Tous les composants réutilisables sont regroupés dans ce dossier pour faciliter leur maintenance et assurer la cohérence de l'interface:

- **Header.tsx**: Composant d'en-tête complexe avec navigation à double niveau, menus déroulants pleine largeur et fonctionnalité de recherche.
  - Inclut une logique d'animation pour masquer/afficher le header lors du défilement
  - Gère les différents états (menu ouvert, recherche active, vue mobile)
  - Comportement optimisé des menus: fermeture automatique lors de la navigation, détection des clics à l'extérieur
  - Effets visuels améliorés avec transitions fluides et animations d'underline centrées

- **PageLayout.tsx**: Composant de mise en page générique utilisé comme wrapper pour la plupart des pages.
  - Fournit une structure cohérente (titre, description, liens de navigation)
  - Gère les animations d'entrée standards
  - Facilite la création de nouvelles pages avec un minimum de code répétitif

- **HeroSection.tsx**: Section d'en-tête de la page d'accueil avec vidéo ou image de fond.
  - Inclut des effets de parallaxe et de défilement
  - S'adapte au contexte (avec/sans vidéo)

- **ProjectMap.tsx**: Génère une visualisation de la structure du site.
  - Utile pour la documentation et la navigation

#### 2. Pages et Routing (`src/app/`)

Suit l'architecture App Router de Next.js, avec une organisation hiérarchique par section:

- **Chaque dossier principal** représente une section du site (ex: `fondation/`, `collections-expositions/`)
- **Les fichiers `page.tsx`** dans chaque dossier définissent la page de la section
- **Les dossiers imbriqués** représentent des sous-sections ou pages enfants
- **Les dossiers avec crochets** comme `[itemId]` représentent des routes dynamiques

**Conventions importantes:**

- Toutes les pages utilisent le préfixe `"use client"` pour le rendu côté client
- Chaque page est un composant fonctionnel React autonome
- Les pages complexes sont divisées en sections claires avec des commentaires

#### 3. Pages Dynamiques

Les pages dynamiques comme `collections-permanentes/[itemId]/page.tsx` suivent un modèle standard:

1. Définition d'interfaces TypeScript pour les données
2. Données d'exemple (qui seraient remplacées par des appels API dans une implémentation complète)
3. Logique de récupération basée sur les paramètres d'URL
4. Rendu conditionnel (incluant les cas d'erreur)

#### 4. Styles et Design System

Le projet utilise Tailwind CSS avec des classes personnalisées pour maintenir une cohérence visuelle:

- **Couleurs**: Utilisation cohérente des variables de couleur (`text-premium-white`, `bg-charcoal`, `text-accent-gold`)
- **Typographie**: Classes standardisées (`font-bodoni-regular`, `font-bodoni-italic`)
- **Espacement**: Système d'espacement cohérent basé sur Tailwind
- **Composants UI**: Styles cohérents pour les cartes, boutons, formulaires, etc.

### Ajout de Nouvelles Fonctionnalités

Pour ajouter de nouvelles fonctionnalités au projet, suivez ces directives:

#### 1. Ajouter une Nouvelle Page

1. Créez un nouveau dossier dans `src/app/` suivant la hiérarchie logique
2. Ajoutez un fichier `page.tsx` avec la structure suivante:
   ```tsx
   "use client";
   
   import React from 'react';
   import PageLayout from '@/components/PageLayout';
   
   const MaNouvellePage = () => {
     return (
       <PageLayout
         title="Titre de la Page"
         description="Description de la page."
         parentLink={{ href: "/section-parente", label: "Retour à Section Parente" }}
       >
         {/* Contenu de la page */}
       </PageLayout>
     );
   };
   
   export default MaNouvellePage;
   ```

#### 2. Ajouter un Nouveau Type de Contenu Dynamique

1. Créez un dossier avec des crochets comme `[monIdentifiant]` dans la section appropriée
2. Créez un fichier `page.tsx` avec la logique de récupération des données basée sur l'identifiant
3. Implémentez une interface TypeScript pour définir la structure des données
4. Ajoutez un gestionnaire de cas pour les éléments non trouvés

#### 3. Étendre la Navigation

Pour ajouter une nouvelle section à la navigation principale:

1. Modifiez le composant `Header.tsx`
2. Ajoutez la nouvelle section à l'objet `navSections`
3. Créez les sous-menus appropriés si nécessaire

## Organisation des Contenus

Le site est organisé avec une structure hiérarchique claire:

1. **Pages Principales**: Chaque section principale a sa propre page d'index avec une présentation générale et des liens vers les sous-sections.

2. **Sous-sections**: Pages dédiées à des contenus spécifiques, accessibles depuis la navigation principale et les pages d'index des sections.

3. **Pages Dynamiques**: Utilisation de routes dynamiques pour les contenus comme les objets de collection, les expositions et les actualités, permettant d'ajouter facilement de nouveaux éléments.

4. **Templates Réutilisables**: Utilisation de composants partagés comme `PageLayout` pour maintenir une cohérence visuelle sur l'ensemble du site.

## Patterns de Développement

### 1. Composants Contrôlés

Les composants interactifs suivent le pattern React de "composant contrôlé" où:
- L'état est géré via des hooks React (`useState`, `useEffect`)
- Les callbacks gèrent les interactions utilisateur
- Les propriétés du composant contrôlent son apparence et comportement

### 2. Animations

Les animations sont gérées principalement via Framer Motion avec:
- Animations basées sur le défilement (`useScroll`, `useTransform`)
- Animations d'entrée et de sortie standardisées
- Transitions et animations conditionnelles

### 3. Responsive Design

L'approche mobile-first est utilisée dans tout le projet:
- Utilisation des classes de breakpoint Tailwind (`md:`, `lg:`)
- Adaptations spécifiques pour les différentes tailles d'écran
- Interfaces alternatives pour mobile (ex: menu hamburger)

## Technologies Utilisées

- **Next.js**: Framework React pour le rendu côté serveur et les routes basées sur le système de fichiers
- **TypeScript**: Pour un typage statique et une meilleure maintenabilité du code
- **Tailwind CSS**: Pour un styling efficace et responsive
- **Framer Motion**: Pour des animations fluides et des transitions élégantes
- **React Icons**: Pour une bibliothèque d'icônes cohérente et légère

## Installation et Démarrage

1. Cloner le dépôt:
   ```bash
   git clone https://github.com/AbdellahRAISSOUNI/musee-as.git
   cd musee-as
   ```

2. Installer les dépendances:
   ```bash
   npm install
   ```

3. Lancer le serveur de développement:
   ```bash
   npm run dev
   ```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Workflows de Développement Recommandés

1. **Nouvelle Fonctionnalité**:
   - Créez une branche dédiée (`feature/nom-fonctionnalite`)
   - Développez et testez localement
   - Créez une Pull Request pour révision

2. **Correction de Bug**:
   - Créez une branche dédiée (`fix/description-bug`)
   - Corrigez et testez localement
   - Créez une Pull Request avec description détaillée du bug

3. **Mise à Jour de Contenu**:
   - Pour les petites modifications de contenu, travaillez directement sur la branche principale
   - Pour les changements majeurs, suivez le processus de nouvelle fonctionnalité

## Déploiement

Le site peut être déployé sur n'importe quelle plateforme compatible avec Next.js comme Vercel, Netlify ou un serveur Node.js:

```bash
# Construction pour la production
npm run build

# Démarrage du serveur de production
npm start
```

## Améliorations Récentes

### Navigation et Interface Utilisateur

- **Header Amélioré**: Correction du comportement des menus déroulants qui restent désormais fermés lors de la navigation entre les pages.
- **Interactions Plus Fluides**: Ajout de transitions douces et d'animations pour les survols et clics.
- **Expérience Mobile Optimisée**: Amélioration de la détection des clics à l'extérieur pour fermer les menus sur mobile.

### Pages de Contenu

- **Section "Le Projet de Musée"**: Création de pages détaillées pour:
  - "Abderrahman Slaoui, humaniste éclairé (1919-2001)"
  - "L'espace muséographique"
- **Galeries d'Images**: Intégration d'images de haute qualité avec optimisation pour le chargement.
- **Typographie Premium**: Implémentation d'un système typographique cohérent basé sur la famille de polices Bodoni.

## Contributeurs

- Design et développement: [Équipe de développement Musée AS]

## Licence

© 2023 Musée Abderrahman Slaoui. Tous droits réservés.
