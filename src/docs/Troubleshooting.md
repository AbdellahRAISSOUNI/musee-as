# Guide de Dépannage - Musée Abderrahman Slaoui

Ce document fournit des solutions aux problèmes courants que vous pourriez rencontrer lors du développement ou de l'exécution du site web du Musée Abderrahman Slaoui.

## 1. Erreurs d'Hydratation

### Problème: Erreurs de correspondance d'hydratation dans la console

```
Error: A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.
This won't be patched up. This can happen if a SSR-ed Client Component used:
- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.
It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.
```

### Cause

Ces erreurs sont généralement causées par des extensions de navigateur (comme BitDefender ou d'autres outils de sécurité) qui ajoutent des attributs au DOM avant que React ne puisse hydrater les composants. Les attributs comme `bis_skin_checked="1"` et `bis_register` sont typiques de ces extensions.

### Solution

Le projet inclut déjà une solution pour gérer ces erreurs:

1. **HydrationErrorSuppressor**: Supprime les erreurs d'hydratation dans la console
2. **ClientErrorBoundary**: Empêche que les erreurs d'hydratation ne plantent l'application
3. **Configuration Next.js**: Paramètres dans `next.config.ts` pour aider à gérer les problèmes d'hydratation

Si vous continuez à voir ces erreurs:

1. **Désactivez temporairement les extensions de navigateur** pendant le développement
2. **Utilisez un navigateur sans extensions** pour tester l'application
3. **Redémarrez le serveur de développement** après avoir modifié la configuration

## 2. Problèmes de Rendu des Images

### Problème: Images qui ne s'affichent pas correctement

### Causes possibles et solutions

1. **Chemin d'accès incorrect**:
   - Vérifiez que le chemin commence par `/` pour les chemins absolus depuis la racine publique
   - Exemple correct: `/images/collections-permanentes/flacons-de-khol-et-tabatieres/khol_et_tabatiere.png`

2. **Dimensions manquantes**:
   - Assurez-vous que les images ont des dimensions définies ou utilisent `fill` avec un conteneur de taille définie
   ```tsx
   <div className="relative h-[300px]">
     <Image src="/chemin/vers/image.jpg" alt="Description" fill className="object-cover" />
   </div>
   ```

3. **Attribut `sizes` manquant avec `fill`**:
   - Ajoutez toujours l'attribut `sizes` lorsque vous utilisez `fill`
   ```tsx
   <Image 
     src="/chemin/vers/image.jpg" 
     alt="Description" 
     fill 
     className="object-cover"
     sizes="(max-width: 768px) 100vw, 50vw" 
   />
   ```

## 3. Problèmes de Navigation

### Problème: Les liens ne fonctionnent pas comme prévu

### Causes possibles et solutions

1. **Utilisation incorrecte du composant Link**:
   - Assurez-vous d'utiliser le composant `Link` de Next.js pour la navigation interne
   ```tsx
   import Link from 'next/link';
   
   // Correct
   <Link href="/collections-expositions">Collections</Link>
   
   // Incorrect pour la navigation interne
   <a href="/collections-expositions">Collections</a>
   ```

2. **Chemins incorrects**:
   - Vérifiez que les chemins correspondent exactement à la structure des dossiers dans `src/app/`
   - Les chemins sont sensibles à la casse et aux tirets

## 4. Problèmes d'Animation

### Problème: Les animations ne fonctionnent pas correctement

### Causes possibles et solutions

1. **Oubli du préfixe client**:
   - Assurez-vous que les composants utilisant Framer Motion ont la directive `"use client"` en haut du fichier
   ```tsx
   "use client";
   
   import { motion } from 'framer-motion';
   ```

2. **Problèmes de performance**:
   - Utilisez `will-change` pour les animations complexes
   - Limitez le nombre d'éléments animés simultanément
   - Utilisez `layoutId` pour les transitions entre composants

## 5. Problèmes de Style

### Problème: Les styles Tailwind ne s'appliquent pas correctement

### Causes possibles et solutions

1. **Classes personnalisées non définies**:
   - Vérifiez que toutes les classes personnalisées sont définies dans `tailwind.config.js`
   
2. **Problèmes de spécificité CSS**:
   - Utilisez `!important` avec parcimonie ou ajoutez des classes plus spécifiques

3. **Problèmes de purge CSS**:
   - Si des styles manquent en production, vérifiez que les chemins de purge dans `tailwind.config.js` sont corrects

## 6. Problèmes de Performance

### Problème: Le site est lent à charger ou à réagir

### Causes possibles et solutions

1. **Images non optimisées**:
   - Assurez-vous d'utiliser le composant `Image` de Next.js
   - Utilisez des formats d'image modernes (WebP, AVIF)
   
2. **Trop de JavaScript**:
   - Utilisez l'analyse de bundle pour identifier les packages volumineux
   - Implémentez le lazy loading pour les composants lourds
   
3. **Rendu inutile**:
   - Utilisez React.memo pour les composants qui ne changent pas souvent
   - Optimisez les dépendances des hooks useEffect et useMemo

## 7. Comment Demander de l'Aide

Si vous rencontrez un problème qui n'est pas couvert dans ce guide:

1. **Vérifiez les issues GitHub** pour voir si le problème a déjà été signalé
2. **Créez une nouvelle issue** avec:
   - Une description claire du problème
   - Les étapes pour reproduire le problème
   - Des captures d'écran ou des extraits de code pertinents
   - Les messages d'erreur de la console
3. **Contactez l'équipe de développement** via les canaux de communication établis
 