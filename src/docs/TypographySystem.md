# Système de Typographie - Musée Abderrahman Slaoui

Ce document présente le système typographique utilisé sur le site web du Musée Abderrahman Slaoui, conformément aux directives de la charte graphique de la Fondation.

## Famille de Polices Bodoni

La typographie du site est construite autour de la famille de polices Bodoni, une police élégante et intemporelle qui reflète le caractère raffiné et prestigieux du musée.

### Variantes Principales

- **Bodoni Poster (Regular)** - Police principale pour les titres et le texte courant
- **Bodoni Poster Italic** - Pour les citations, les légendes et le texte en italique
- **Bodoni Bold** - Pour mettre en évidence les informations importantes

### Polices de Secours (Fallbacks)

En cas de problème de chargement des polices web, les alternatives suivantes sont utilisées dans cet ordre:
1. Bodoni
2. Didot
3. Baskerville
4. Libre Bodoni
5. Times New Roman
6. Serif générique

## Hiérarchie Typographique

### Titres Principaux et Textes

| Classe              | Taille/Interligne | Usage                                           |
|---------------------|-------------------|--------------------------------------------------|
| `.font-title-grand` | 200pt/240pt       | Titres héroïques, très grands titres d'exposition |
| `.font-sequence`    | 50pt/65pt         | Titres de section, textes de séquence narrative  |
| `.font-comment`     | 34pt/39pt         | Étiquettes de commentaire, descriptions d'œuvres  |
| `.font-caption`     | 24pt/30pt         | Légendes, sous-titres                            |
| `.font-quote`       | 32pt/42pt         | Citations, témoignages                           |
| `.font-detail`      | 18pt/28pt         | Texte courant détaillé                           |
| `.font-metadata`    | 14pt/18pt         | Métadonnées, informations techniques             |

### Classes d'Utilité

| Classe               | Description                                     |
|----------------------|-------------------------------------------------|
| `.font-bodoni`       | Applique la police Bodoni Poster (Regular)      |
| `.font-bodoni-italic`| Applique la police Bodoni Poster Italic         |
| `.font-bodoni-bold`  | Applique la police Bodoni Bold                  |

## Responsive Typography

Le système typographique s'adapte automatiquement aux différentes tailles d'écran:

### Desktop (>1280px)
- Utilise les tailles standard définies ci-dessus

### Tablette (768px-1280px)
- Tailles réduites d'environ 20% pour une meilleure lisibilité

### Mobile (<768px)
- Tailles significativement réduites pour s'adapter aux petits écrans
- Interlignage optimisé pour la lecture sur mobile

## Implémentation dans Tailwind CSS

Le système typographique est configuré dans les fichiers suivants:
- `src/styles/fonts.css` - Définition des polices et des variables CSS
- `tailwind.config.js` - Configuration des classes Tailwind
- `src/app/globals.css` - Classes d'utilité et responsivité

## Utilisation dans le Code

```jsx
// Exemple d'utilisation des classes typographiques
<h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6">
  Titre Principal
</h1>

<blockquote className="font-bodoni-italic text-2xl text-soft-white mb-4">
  "Une citation élégante pour illustrer un propos."
</blockquote>

<h2 className="font-bodoni text-3xl text-gray-900 mb-6">
  Titre de Section
</h2>

<p className="text-gray-700 mb-4">
  Texte courant utilisant la police Bodoni par défaut.
</p>
```

## Recommandations

1. Toujours utiliser les classes de police appropriées pour maintenir la cohérence
2. Pour les pages futures, s'assurer que tous les textes utilisent l'une des variantes de Bodoni
3. Respecter la hiérarchie typographique pour maintenir une structure visuelle claire
4. Utiliser les tailles de police prédéfinies plutôt que des valeurs personnalisées

---

Cette documentation sert de référence pour tous les développeurs travaillant sur le site du Musée Abderrahman Slaoui afin d'assurer une cohérence typographique à travers toutes les pages. 