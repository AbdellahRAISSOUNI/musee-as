# Architecture Technique du Projet Musée Abderrahman Slaoui

Ce document décrit l'architecture technique du site web du Musée Abderrahman Slaoui, expliquant les choix technologiques, la structure du code et les patterns de développement utilisés.

## 1. Vue d'Ensemble de l'Architecture

Le projet est développé avec Next.js 14 (App Router) et TypeScript, offrant une application web moderne avec rendu côté serveur, routage basé sur le système de fichiers, et typage statique.

### 1.1 Stack Technique

- **Frontend**:
  - **Next.js**: Framework React avec App Router pour le routage et le rendu côté serveur
  - **TypeScript**: Pour le typage statique et la robustesse du code
  - **Tailwind CSS**: Pour les styles et la conception responsive
  - **Framer Motion**: Pour les animations et transitions

### 1.2 Architecture Logicielle

Le projet suit une architecture modulaire basée sur les composants React, organisée selon les fonctionnalités et les routes de l'application:

```
src/
  app/                # Routage et pages de l'application
  components/         # Composants réutilisables
  styles/             # Styles globaux et utilitaires CSS
  docs/               # Documentation technique
```

## 2. Système de Routage

Next.js App Router est utilisé pour le routage, avec une structure de dossiers qui reflète directement les URL du site:

### 2.1 Organisation des Routes

- Chaque dossier dans `src/app/` correspond à un segment d'URL
- Les fichiers `page.tsx` définissent le composant de page rendu pour cette route
- Les routes dynamiques utilisent la syntaxe `[paramètre]` pour les segments variables

### 2.2 Paramètres Dynamiques

Les routes dynamiques comme `/collections-expositions/collections-permanentes/[itemId]` permettent d'afficher des pages pour chaque objet de collection avec un seul modèle de page.

### 2.3 Navigation et Liens

- La navigation est gérée principalement par le composant `Header.tsx`
- Les liens utilisent le composant `Link` de Next.js pour la navigation côté client
- Les routes sont en français pour correspondre au contenu du site

## 3. Architecture des Composants

### 3.1 Organisation des Composants

Les composants sont organisés selon leur fonction et leur réutilisabilité:

- **Composants de Layout**: Définissent la structure globale des pages (`PageLayout.tsx`)
- **Composants de Navigation**: Gèrent la navigation et les menus (`Header.tsx`)
- **Composants de Section**: Représentent des sections spécifiques des pages (`HeroSection.tsx`)
- **Composants de Présentation**: Affichent des éléments de contenu spécifiques

### 3.2 Patterns de Composants

- **Composition de Composants**: Construction de composants complexes à partir de composants plus simples
- **Render Props et HOCs**: Utilisés pour partager la logique entre composants
- **Composants Contrôlés**: Pour les formulaires et éléments interactifs

### 3.3 Gestion d'État

- **Local State**: Utilisation de `useState` pour l'état local des composants
- **Context API**: Pour le partage d'état entre composants sans prop drilling
- **Refs**: Utilisation de `useRef` pour accéder aux éléments DOM et stocker des valeurs persistantes

## 4. Styles et Design System

### 4.1 Approche CSS

Le projet utilise Tailwind CSS avec quelques extensions personnalisées:

- **Système de Classes**: Utilisation cohérente des classes Tailwind
- **Responsive Design**: Utilisation des préfixes de breakpoint (`md:`, `lg:`)
- **Variables Personnalisées**: Pour les couleurs et typographies spécifiques au projet

### 4.2 Design System

Un design system cohérent est implémenté à travers l'application:

- **Palette de Couleurs**:
  - **Noir Premium**: `#000000` (bg-premium-black)
  - **Charbon**: `#1A1A1A` (bg-charcoal)
  - **Graphite**: `#2A2A2A` (bg-graphite)
  - **Ardoise**: `#3A3A3A` (bg-slate)
  - **Blanc Premium**: `#FFFFFF` (text-premium-white)
  - **Blanc Doux**: `#F5F5F5` (text-soft-white)
  - **Or Accent**: `#D4AF37` (text-accent-gold)

- **Typographie**:
  - **Bodoni Regular**: Titres principaux et texte de séquence
  - **Bodoni Italic**: Citations et accents
  - **Bodoni Bold**: Mise en évidence et sous-titres

- **Composants UI Réutilisables**:
  - Boutons avec états et variantes
  - Cartes et conteneurs de contenu
  - Grilles et layouts flexibles

### 4.3 Animations

Framer Motion est utilisé pour les animations:

- **Animations d'Entrée**: Pour les éléments apparaissant dans la vue
- **Animations de Défilement**: Effets de parallaxe et transformations basées sur le défilement
- **Transitions d'État**: Pour les changements d'état des composants interactifs

## 5. Gestion du Contenu

### 5.1 Approche Actuelle

Le contenu est actuellement géré directement dans le code:

- Objets JavaScript pour les données statiques
- Structures de données TypeScript pour garantir la cohérence

### 5.2 Extension Future

Le système est conçu pour être facilement connecté à un CMS ou une API externe:

- Interfaces TypeScript prêtes pour l'intégration de données externes
- Structure de données cohérente pour faciliter la migration
- Possibilité d'implémenter un fetching de données côté serveur avec Next.js

## 6. Performance et Optimisation

### 6.1 Optimisations Implémentées

- **Images Optimisées**: Utilisation du composant `Image` de Next.js
- **Lazy Loading**: Chargement différé des composants et images
- **Code Splitting**: Division automatique du code par Next.js
- **Animations Optimisées**: Utilisation de `will-change` et animations sur GPU

### 6.2 Considérations de Performance

- **First Contentful Paint (FCP)**: Optimisé grâce au rendu côté serveur
- **Time to Interactive (TTI)**: Minimisé par l'hydratation progressive
- **Cumulative Layout Shift (CLS)**: Réduit grâce aux dimensions prédéfinies pour les conteneurs d'images

## 7. Accessibilité

Le site respecte les standards d'accessibilité:

- **Sémantique HTML**: Utilisation appropriée des balises HTML sémantiques
- **ARIA**: Attributs ARIA ajoutés où nécessaire
- **Contraste**: Respect des ratios de contraste pour la lisibilité
- **Navigation au Clavier**: Tous les éléments interactifs sont accessibles au clavier

## 8. Internationalisation

Le site est actuellement uniquement en français, mais l'architecture permet une future internationalisation:

- Structure en place pour l'ajout de traductions
- Organisation du contenu qui facilite la séparation du texte et de la logique

## 9. Modèles de Développement

### 9.1 Ajout d'une Nouvelle Page

```tsx
// src/app/nouvelle-section/page.tsx
"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';

const NouvellePage = () => {
  return (
    <PageLayout
      title="Titre de la Nouvelle Page"
      description="Description de la page."
      parentLink={{ href: "/section-parent", label: "Retour à Section Parent" }}
    >
      {/* Contenu de la page */}
      <section className="mb-12">
        <h2 className="font-bodoni-regular text-2xl text-premium-white mb-6">
          Sous-titre de Section
        </h2>
        <p className="text-soft-white text-lg leading-relaxed">
          Contenu de la section...
        </p>
      </section>
    </PageLayout>
  );
};

export default NouvellePage;
```

### 9.2 Implémentation d'une Page Dynamique

```tsx
// src/app/section/[parametre]/page.tsx
"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

// Définition de l'interface de données
interface IItemData {
  id: string;
  title: string;
  description: string;
  // Autres propriétés...
}

// Exemple de données (à remplacer par un appel API)
const items: Record<string, IItemData> = {
  'item-1': { id: 'item-1', title: 'Premier Item', description: '...' },
  'item-2': { id: 'item-2', title: 'Deuxième Item', description: '...' },
};

const DynamicPage = () => {
  const params = useParams();
  const itemId = params.parametre as string;
  const item = items[itemId];
  
  // Gestion du cas où l'item n'existe pas
  if (!item) {
    return (
      <PageLayout
        title="Item non trouvé"
        parentLink={{ href: "/section", label: "Retour à la section" }}
      >
        <p className="text-soft-white">L'élément demandé n'existe pas.</p>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout
      title={item.title}
      parentLink={{ href: "/section", label: "Retour à la section" }}
    >
      {/* Contenu dynamique basé sur l'item */}
      <p className="text-soft-white text-lg">{item.description}</p>
    </PageLayout>
  );
};

export default DynamicPage;
```

## 10. Déploiement et Infrastructure

### 10.1 Processus de Build

```bash
# Construction de l'application
npm run build

# Démarrage en production
npm start
```

### 10.2 Environnements

- **Développement**: Serveur local (`npm run dev`)
- **Production**: Déploiement sur Vercel, Netlify ou serveur Node.js

### 10.3 Configuration

- **Environment Variables**: Configuration via fichiers `.env`
- **Next.js Config**: Personnalisation dans `next.config.js`

## 11. Évolution Future

L'architecture du projet a été conçue pour faciliter les évolutions futures:

- **Intégration CMS**: Structure prête pour connecter un headless CMS
- **API Backend**: Possibilité d'ajouter des API routes pour fonctionnalités dynamiques
- **Multilingue**: Structure permettant l'ajout de traductions
- **PWA**: Possibilité d'évolution vers une Progressive Web App

## 12. Dépannage et Débuggage

### 12.1 Problèmes Courants

- **Problèmes de Rendu**: Vérifier l'utilisation correcte de `"use client"` et `"use server"`
- **Erreurs de Type**: Valider les interfaces TypeScript et les types de props
- **Problèmes de Style**: Vérifier les classes Tailwind et les conflits potentiels

### 12.2 Outils de Débogage

- **React DevTools**: Pour inspecter les composants et l'état
- **Chrome DevTools**: Pour le débogage général et l'analyse de performance
- **TypeScript**: Utiliser les outils de vérification de type (`tsc --noEmit`)

---

Document mis à jour le: 23/07/2023 