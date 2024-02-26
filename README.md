# O'Clock clock - Class component

Tu viens de découvrir que les composants React, qu'on écrit la majorité du temps sous forme de **fonction**, peuvent aussi s'écrire sous forme de **classe** !

Et oui, avant l'apparition des hooks dans React 16.8, il fallait obligatoirement passer nos composants sous forme de classe pour pourvoir :

- gérer des variable d'état
- gérer des effets de bord (appels API, timers, …)
- … et tout ce que les hooks nous permettent de faire dans les fonctions

Mais même si cette syntaxe de classe est déclarée [*legacy* dans la nouvelle doc de React](https://react.dev/reference/react/Component), tu trouveras très certainement du code sous cette forme dans ta vie de développeur car comme tu t'en doutes, tous les projets n'ont pas été migrés d'une syntaxe à l'autre du jour au lendemain !

Et c'est justement ton challenge du jour, le code de cette application d'horloge a été fait avec des composants sous forme de classe, à toi de migrer le code vers une syntaxe plus moderne en utilisant les hooks `useState` et `useEffect` pour gérer le state et les effets de bord !

Tu peux t'aider de la doc de React : [Migrating a simple component from a class to a function](https://react.dev/reference/react/Component#migrating-a-simple-component-from-a-class-to-a-function)

## 1. Composant `App`

Le composant `App` a été écrit sous forme de classe car il possède un state local. Écris-le sous forme de fonction et utilise `useState` pour chaque variable d'état.

## 2. Composant `Clock`

Le composant `Clock` a été écrit sous forme de classe car il gère des effets de bord :

- au **montage** du composant, il lance un interval pour incrémenter l'heure d'une seconde toutes les secondes
- au **démontage** du composant, il supprime ce timer

Écris-le sous forme de fonction et utilise `useEffect` pour lancer et nettoyer cet effet de bord.
