# Guide de Contribution - Musée Abderrahman Slaoui

Nous sommes ravis que vous envisagiez de contribuer au site web du Musée Abderrahman Slaoui! Ce guide vous aidera à comprendre le processus de contribution et les bonnes pratiques à suivre.

## Comment Contribuer

### 1. Configuration du Projet

1. **Fork et Clone**
   ```bash
   git clone https://github.com/VOTRE-USERNAME/musee-as.git
   cd musee-as
   ```

2. **Installation des Dépendances**
   ```bash
   npm install
   ```

3. **Lancement du Serveur de Développement**
   ```bash
   npm run dev
   ```

### 2. Workflow de Développement

1. **Créez une Branche**
   ```bash
   git checkout -b type/description-courte
   ```
   Types recommandés: `feature`, `fix`, `docs`, `refactor`, `style`, `perf`

2. **Développez et Testez**
   - Assurez-vous que votre code respecte les conventions du projet
   - Testez soigneusement sur différents appareils et navigateurs
   - Vérifiez l'accessibilité des nouvelles fonctionnalités

3. **Soumettez une Pull Request**
   - Décrivez clairement les changements apportés
   - Référencez les issues associées le cas échéant
   - Demandez une revue de code à un membre de l'équipe

## Standards de Code

### 1. TypeScript et React

- Utilisez TypeScript correctement avec des interfaces et des types explicites
- Préférez les composants fonctionnels avec hooks
- Suivez le pattern de "composant contrôlé" pour les composants interactifs
- Utilisez les props et le state de manière appropriée
- Commentez le code complexe pour faciliter la compréhension

### 2. Styles et CSS

- Utilisez Tailwind CSS pour tous les styles
- Suivez la convention de nommage des classes établie
- Respectez la palette de couleurs définie dans le projet
- Assurez-vous que tous les composants sont responsive
- Privilégiez l'approche mobile-first

### 3. Conventions de Nommage

- **Fichiers de Composants**: PascalCase (ex: `HeaderNavigation.tsx`)
- **Fichiers utilitaires**: camelCase (ex: `formatDate.ts`)
- **Variables et fonctions**: camelCase
- **Interfaces et Types**: PascalCase avec préfixe `I` pour les interfaces (ex: `ICollectionItem`)
- **Routes et URLs**: kebab-case, en français (ex: `/collections-expositions/`)

### 4. Structure du Code

- Organisez les importations de manière cohérente:
  1. Bibliothèques externes (React, Next.js)
  2. Composants internes
  3. Utilitaires, hooks, et autres
- Divisez les composants complexes en sous-composants
- Placez les composants internes dans le même fichier que le composant parent si possible
- Utilisez des commentaires pour diviser les sections de code dans les composants complexes

## Ajout de Nouvelles Pages ou Sections

### 1. Création d'une Nouvelle Page

1. Créez un dossier dans `src/app/` suivant la hiérarchie existante
2. Ajoutez un fichier `page.tsx` avec un composant React utilisant le layout approprié
3. Assurez-vous que la page respecte la structure et le design du site
4. Mettez à jour la navigation si nécessaire dans `Header.tsx`

### 2. Ajout de Contenu Dynamique

Pour ajouter un nouveau type de contenu dynamique:

1. Créez une interface TypeScript définissant la structure des données
2. Implémentez le modèle de page dynamique avec récupération basée sur paramètres
3. Testez avec différents jeux de données
4. Documentez clairement le format de données attendu

## Tests et Assurance Qualité

Avant de soumettre une pull request, assurez-vous de:

1. Tester les changements sur différentes tailles d'écran
2. Vérifier la compatibilité avec les navigateurs principaux (Chrome, Firefox, Safari, Edge)
3. S'assurer que le contenu en français est correctement formaté et sans erreurs
4. Valider que le design reste cohérent avec l'identité visuelle du musée

## Mise à Jour de Contenu

Pour la mise à jour du contenu existant:

1. Respectez le ton et le style d'écriture établi
2. Maintenez la cohérence des descriptions et des informations
3. Assurez-vous que les images sont optimisées pour le web
4. Vérifiez que les liens fonctionnent correctement

## Questions et Support

Si vous avez des questions ou besoin d'aide, n'hésitez pas à:

- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement par email

Merci de contribuer au site web du Musée Abderrahman Slaoui! 