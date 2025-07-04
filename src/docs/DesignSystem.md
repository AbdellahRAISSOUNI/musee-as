# Design System du Musée Abderrahman Slaoui

Ce document décrit en détail le système de design utilisé pour le site web du Musée Abderrahman Slaoui, incluant la typographie, les couleurs, les composants, et les principes de design appliqués à travers le site.

## 1. Principes de Design

Le design du site web du Musée Abderrahman Slaoui est guidé par les principes suivants :

### 1.1 Élégance et Sophistication

- Design minimaliste et épuré qui met en valeur le contenu
- Utilisation d'espaces négatifs pour créer une sensation d'air et de légèreté
- Typographie classique et raffinée avec la famille de polices Bodoni

### 1.2 Contraste et Lisibilité

- Fort contraste entre le texte et l'arrière-plan pour une lisibilité optimale
- Hiérarchie visuelle claire pour guider l'utilisateur à travers le contenu
- Tailles de texte adaptatives selon les appareils

### 1.3 Cohérence et Harmonie

- Système de design unifié à travers toutes les pages
- Utilisation cohérente des couleurs, typographies et espacements
- Transitions et animations subtiles et harmonieuses

### 1.4 Respect du Patrimoine

- Design qui reflète l'héritage culturel et artistique du musée
- Mise en valeur des œuvres et collections sans les éclipser
- Palette de couleurs inspirée de l'art marocain traditionnel et contemporain

## 2. Palette de Couleurs

La palette de couleurs du site est basée sur un schéma noir et or élégant, créant une ambiance premium et sophistiquée.

### 2.1 Couleurs Primaires

| Nom | Valeur HEX | Classe Tailwind | Utilisation |
|-----|------------|-----------------|-------------|
| Noir Premium | `#000000` | `bg-premium-black` | Arrière-plans principaux, éléments d'interface |
| Blanc Premium | `#FFFFFF` | `text-premium-white` | Texte principal sur fond sombre |
| Or Accent | `#D4AF37` | `text-accent-gold` | Accents, liens, éléments interactifs |

### 2.2 Couleurs Secondaires

| Nom | Valeur HEX | Classe Tailwind | Utilisation |
|-----|------------|-----------------|-------------|
| Charbon | `#1A1A1A` | `bg-charcoal` | Arrière-plans secondaires, cartes |
| Graphite | `#2A2A2A` | `bg-graphite` | Éléments d'interface, séparateurs |
| Ardoise | `#3A3A3A` | `bg-slate` | Éléments tertiaires, bordures |
| Blanc Doux | `#F5F5F5` | `text-soft-white` | Texte secondaire sur fond sombre |

### 2.3 Variations d'Opacité

Les couleurs principales sont également utilisées avec différentes opacités pour créer des effets visuels subtils :

- `bg-black/50` : Superpositions semi-transparentes sur les images
- `text-accent-gold/80` : États de survol pour les éléments interactifs
- `bg-charcoal/50` : Arrière-plans atténués pour les sections secondaires

## 3. Typographie

La typographie du site est centrée autour de la famille de polices Bodoni, connue pour son élégance et son caractère classique.

### 3.1 Familles de Polices

| Famille | Variantes | Utilisation |
|---------|-----------|-------------|
| Bodoni | Regular | Texte principal, titres de sections |
| Bodoni | Italic | Citations, accents textuels |
| Bodoni | Bold | Titres principaux, mise en évidence |

### 3.2 Hiérarchie Typographique

| Élément | Taille | Poids | Classe |
|---------|--------|-------|--------|
| Titre Grand Texte | 200pt/240pt | Regular | `font-bodoni text-6xl lg:text-7xl` |
| Titre de Page | 48px-72px | Regular | `font-bodoni text-4xl md:text-5xl lg:text-6xl` |
| Titre de Section | 36px-48px | Regular | `font-bodoni text-3xl md:text-4xl` |
| Sous-titre | 24px-30px | Regular | `font-bodoni text-2xl md:text-3xl` |
| Texte de Séquence | 50pt/65pt | Regular | `font-bodoni text-2xl md:text-3xl` |
| Corps de Texte | 16px-18px | Regular | `text-base md:text-lg` |
| Texte Secondaire | 14px-16px | Regular | `text-sm md:text-base` |
| Légendes | 12px-14px | Regular | `text-xs md:text-sm` |
| Comment Labels | 34pt/39pt | Regular | `font-comment text-lg` |

### 3.3 Espacement et Alignement

- Interligne généreux pour améliorer la lisibilité : `leading-relaxed`
- Alignement à gauche pour la majorité du texte
- Alignement centré pour les titres de sections et les éléments mis en évidence
- Espacement entre paragraphes : `mb-6`

## 4. Composants d'Interface

### 4.1 Navigation

#### 4.1.1 Header

Le header est minimaliste et élégant, avec un logo à gauche et un menu de navigation à droite. Sur mobile, il se transforme en menu hamburger.

```tsx
// Exemple simplifié
<header className="fixed w-full bg-premium-black/90 backdrop-blur-sm z-50">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <Logo />
    <Navigation />
  </div>
</header>
```

#### 4.1.2 ReturnButton

Bouton de retour standardisé, positionné à droite pour une navigation cohérente.

```tsx
<ReturnButton href="/page-precedente" />
```

Rendu :
- Rectangle noir avec texte "Retour" en blanc
- Police Bodoni
- Effet de hover subtil (légère réduction d'opacité)

### 4.2 Sections de Contenu

#### 4.2.1 HeroSection

Section d'en-tête pleine largeur avec fond noir ou vidéo/image de fond.

```tsx
<section className="relative h-screen bg-black text-white">
  {/* Fond vidéo ou image avec overlay */}
  <div className="absolute inset-0 bg-black/50"></div>
  
  {/* Contenu centré */}
  <div className="container mx-auto px-6 relative z-10 h-full flex items-center justify-center">
    <div className="text-center">
      <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6">
        Titre Principal
      </h1>
      <p className="text-soft-white text-lg md:text-xl max-w-2xl mx-auto">
        Texte descriptif de la section
      </p>
    </div>
  </div>
</section>
```

#### 4.2.2 ContentSection

Section standard pour le contenu principal.

```tsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-bodoni text-3xl text-gray-900 mb-6">
        Titre de Section
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          Contenu de la section...
        </p>
      </div>
    </div>
  </div>
</section>
```

### 4.3 Cartes et Grilles

#### 4.3.1 ItemCard

Carte utilisée pour présenter des éléments de collection ou des événements.

```tsx
<div className="group">
  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
    <Image
      src="/path/to/image.jpg"
      alt="Titre de l'élément"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
  </div>
  
  <p className="text-accent-gold text-sm mb-2">
    Catégorie ou Date
  </p>
  
  <h3 className="font-bodoni text-xl text-premium-white group-hover:text-accent-gold transition-colors">
    Titre de l'élément
  </h3>
</div>
```

#### 4.3.2 GridLayout

Disposition en grille responsive pour les collections d'éléments.

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <ItemCard key={item.id} item={item} />
  ))}
</div>
```

### 4.4 Éléments Interactifs

#### 4.4.1 Boutons

Plusieurs styles de boutons sont disponibles selon le contexte :

**Bouton Principal**
```tsx
<button className="bg-accent-gold text-black hover:bg-accent-gold/90 transition-colors px-6 py-3 font-bodoni">
  Texte du Bouton
</button>
```

**Bouton Secondaire**
```tsx
<button className="bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni">
  Texte du Bouton
</button>
```

**Bouton Tertiaire (Lien)**
```tsx
<Link 
  href="/destination"
  className="inline-block text-accent-gold hover:text-accent-gold/80 transition-colors font-bodoni"
>
  Lire la suite
</Link>
```

#### 4.4.2 Formulaires

Éléments de formulaire avec style cohérent :

**Champ de texte**
```tsx
<input 
  type="text" 
  placeholder="Placeholder" 
  className="bg-charcoal border-none py-3 px-4 text-premium-white focus:outline-none focus:ring-1 focus:ring-accent-gold rounded-sm w-full"
/>
```

## 5. Images et Médias

### 5.1 Images

- Utilisation du composant `Image` de Next.js pour optimisation automatique
- Ratio d'aspect cohérent pour les vignettes (4:3)
- Effet de zoom léger au survol pour les images interactives
- Overlay sombre pour améliorer la lisibilité du texte sur les images

```tsx
<div className="relative h-[300px] overflow-hidden">
  <Image
    src="/path/to/image.jpg"
    alt="Description de l'image"
    fill
    className="object-cover object-center"
  />
</div>
```

### 5.2 Vidéos

- Vidéos en arrière-plan pour les sections héroïques
- Autoplay silencieux et en boucle
- Overlay pour assurer la lisibilité du texte superposé

```tsx
<div className="relative w-full h-full overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/path/to/video.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
</div>
```

## 6. Animations et Transitions

### 6.1 Animations d'Entrée

Utilisation de Framer Motion pour des animations subtiles lors de l'entrée des éléments dans la vue :

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Contenu */}
</motion.div>
```

### 6.2 Animations d'Interaction

Effets de survol et de transition pour les éléments interactifs :

- Changements de couleur progressifs : `transition-colors duration-300`
- Transformations d'échelle : `transition-transform duration-700 hover:scale-105`
- Changements d'opacité : `transition-opacity duration-300 hover:opacity-80`

### 6.3 Animations de Défilement

Animations déclenchées par le défilement de la page :

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* Contenu */}
</motion.div>
```

## 7. Responsive Design

### 7.1 Approche Mobile-First

Le site utilise une approche mobile-first avec Tailwind CSS :

- Styles de base pour mobile
- Préfixes de breakpoint pour les écrans plus grands : `md:`, `lg:`, `xl:`

### 7.2 Points de Rupture

| Nom | Taille | Préfixe Tailwind |
|-----|--------|------------------|
| Mobile | < 768px | (défaut) |
| Tablette | ≥ 768px | `md:` |
| Desktop | ≥ 1024px | `lg:` |
| Grand écran | ≥ 1280px | `xl:` |

### 7.3 Adaptations Responsive

- Grilles : passage de 1 à 2 ou 3 colonnes selon la taille d'écran
- Typographie : tailles de texte adaptatives
- Navigation : menu hamburger sur mobile, menu horizontal sur desktop
- Marges et espacements : ajustés selon la taille d'écran

## 8. Pages Spécifiques

### 8.1 Page d'Accueil

- Hero section pleine hauteur avec vidéo d'arrière-plan
- Sections d'actualités et événements
- Navigation rapide vers les sections principales

### 8.2 Pages de Collection

- Grille d'éléments de collection
- Filtres et navigation de catégories
- Vue détaillée pour chaque élément

### 8.3 Pages de Projet

- Structure en deux colonnes sur desktop (une colonne sur mobile)
- Navigation entre les différentes sous-sections du projet
- ReturnButton pour revenir à la page parente

### 8.4 Pages d'Information

- Mise en page claire avec hiérarchie visuelle
- Utilisation de listes et de tableaux pour structurer l'information
- Illustrations et images d'accompagnement

## 9. Accessibilité

### 9.1 Contraste et Lisibilité

- Ratio de contraste minimum de 4.5:1 pour le texte standard
- Ratio de contraste minimum de 3:1 pour le texte large
- Taille de police minimum de 16px pour le corps du texte

### 9.2 Navigation au Clavier

- Tous les éléments interactifs sont accessibles au clavier
- État de focus visible et distinct : `focus:ring-2 focus:ring-accent-gold`
- Ordre de tabulation logique

### 9.3 Attributs ARIA

- Utilisation appropriée des landmarks ARIA
- Attributs `aria-label` pour les éléments sans texte visible
- Attributs `aria-expanded` pour les menus déroulants

## 10. Bonnes Pratiques

### 10.1 Pour l'Ajout de Nouvelles Pages

1. Utiliser les composants existants pour maintenir la cohérence
2. Respecter la hiérarchie typographique établie
3. Suivre la palette de couleurs définie
4. Inclure le ReturnButton pour la navigation
5. Implémenter des animations cohérentes avec le reste du site

### 10.2 Pour l'Ajout de Nouveaux Composants

1. Suivre le style visuel existant
2. Utiliser les classes Tailwind de manière cohérente
3. Documenter le composant dans ce document
4. Assurer la compatibilité mobile et desktop
5. Tester l'accessibilité du composant

---

Document créé le: 20/07/2025
