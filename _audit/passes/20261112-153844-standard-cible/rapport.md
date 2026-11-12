# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 16:47:50 · 9 min · 3 page(s) · audit standard ciblé sur /couverture,/devis,/facades

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261112-153844-standard-cible` · version ?v=1
- Échecs : **4**
- À regarder : **7**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (42), balayage (3), films d’ouverture (6), films de transition (6), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (3), liens et boutons (3), liens profonds (6), liens vers la page en cours (3), changements de hauteur (1), mode calme (6), bouton du mode calme (2), fluidité (6), défilement selon l’appareil (5), mouvement (6), effets du plan (14), souris immobile (3), vitesse (3), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 3 autre(s) page(s) |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en tuiles |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur / ; geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /devis |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261111-184234-rapide-cible | rapide | / | toutes | 80 | 11 | 1 | échecs |
| 20261112-134004-rapide-cible | rapide | / | toutes | 36 | 14 | 1 | échecs |
| 20261112-142343-rapide-cible | rapide | /couverture,/zinguerie-charpente,/facades,/devis | toutes | 56 | 9 | 1 | échecs |
| 20261112-144311-standard | standard | toutes | toutes | 58 | 13 | 1 | échecs |
| 20261112-150325-standard | standard | toutes | toutes | 6 | 10 | 1 | échecs |
| 20261112-152227-complet-partiel | complet | toutes | mesures, ecran | 15 | 0 | 0 | échecs |
| 20261112-152932-complet-cible-partiel | complet | /,/404,/couverture,/devis,/zinguerie-charpente,/facades | fichiers, mesures | 5 | 1 | 0 | échecs |
| 20261112-153606-complet-cible-partiel | complet | /,/couverture | fichiers, mesures | 0 | 1 | 0 | complet |
| **20261112-153844-standard-cible** (celle-ci) | standard | /couverture,/devis,/facades | toutes | 4 | 7 | 1 | échecs |

## Échecs

### ouverture : élément qui apparaît puis disparaît (1)

- **ouverture : élément qui apparaît puis disparaît** — `/couverture` — div.rubrique-une-grille > div.pente > p.mousse-geste « Passez la brosse : démoussageFrottez la  » _(1366×768 film, 390×844 film)_

### transition : élément qui apparaît puis disparaît (2)

- **transition : élément qui apparaît puis disparaît** — `/devis → /couverture` — div.rubrique-une-grille > div.pente > p.mousse-geste « Passez la brosse : démoussageFrottez la  » _(1366×768 film, 390×844 film)_
- **transition : élément qui apparaît puis disparaît** — `/facades → /couverture` — div.rubrique-une-grille > div.pente > p.mousse-geste « Passez la brosse : démoussageFrottez la  » _(1366×768 film, 390×844 film)_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/zinguerie-charpente` — bande d’environ 15 px en rgb(169, 73, 39) à côté du voile en rgb(133, 57, 29), sur 2 image(s) sur 3 (films/bords-voile-couverture-1920.png) _(1920×1080 barre de défilement classique (15 px))_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### retour avant : changement brusque (3)

- **retour avant : changement brusque** — `/zinguerie-charpente` — à 79 ms (différence 42 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/zinguerie-charpente` — à 114 ms (différence 24 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/zinguerie-charpente` — à 72 ms (différence 42 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/devis` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/facades` — ul.finitions — finitions : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 1284 min de travail pour 125 min de budget, 1166 min d’attente de l’utilisateur.
- Journal : « construction : accueil » 1222 min pour 45 prévues.
- Journal : « construction : pages d'onglet » 35 min pour 25 prévues.
- Audit standard : étapes lourdes sur /couverture, /devis, /facades.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture /couverture (1366×768) : 1454 ms depuis le premier octet
- Ouverture /devis (1366×768) : 1393 ms depuis le premier octet
- Ouverture /facades (1366×768) : 1416 ms depuis le premier octet
- film de l'ouverture /facades 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /couverture (390×844) : 1457 ms depuis le premier octet
- Ouverture /devis (390×844) : 1391 ms depuis le premier octet
- Ouverture /facades (390×844) : 1456 ms depuis le premier octet
- Bords de l’écran : 124 images d’intro, 11 de voile et 86 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /couverture : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /facades : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /couverture : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.
- Tient dans l'écran /facades : aucune section épinglée ou plein écran.
- Fluidité /couverture 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /devis 1366×768 (molette) : 0 % d'images lentes sur 134, tâche la plus longue 0 ms
- Fluidité /facades 1366×768 (molette) : 0 % d'images lentes sur 239, tâche la plus longue 0 ms
- Fluidité /couverture 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /devis 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /facades 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Vitesse /couverture : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /devis : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /facades : 0.54 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,films,bords
```
