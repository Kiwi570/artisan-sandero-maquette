# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 14:44:41 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **36 échec(s)**
- Passe : `20261112-134004-rapide-cible` · version ?v=1
- Échecs : **36**
- À regarder : **14**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (7), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (6), liens vers la page en cours (1), changements de hauteur (1), mode calme (2), bouton du mode calme (2), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (7), souris immobile (2), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en tuiles |
| 4. Quelque chose relie les sections et les pages | ⚠ à regarder | présent sur /devis, / ; absent sur /couverture, /facades, /zinguerie-charpente |
| 5. Un titre fait l’événement sur chaque page | ⚠ à regarder | présent sur /devis, / ; absent sur /couverture, /facades, /zinguerie-charpente |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /devis |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261111-184234-rapide-cible | rapide | / | toutes | 80 | 11 | 1 | échecs |
| **20261112-134004-rapide-cible** (celle-ci) | rapide | / | toutes | 36 | 14 | 1 | échecs |

## Échecs

### image de partage (5)

- **image de partage** — `couverture.html` — fichier introuvable : /assets/partage/couverture-fr.jpg
- **image de partage** — `devis.html` — fichier introuvable : /assets/partage/devis-fr.jpg
- **image de partage** — `facades.html` — fichier introuvable : /assets/partage/facades-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `zinguerie-charpente.html` — fichier introuvable : /assets/partage/zinguerie-charpente-fr.jpg

### contraste insuffisant (12)

- **contraste insuffisant** — `/` — section#zone > div.conteneur > div.liteau.liteau--clair > span.rubrique:nth-of-type(1) « RUBRIQUE 07 · LA ZONE » — 1.26:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(1) « De » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(2) « Taverny » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(3) « aux » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(4) « communes » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(5) « voisines » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > p:nth-of-type(1) « Taverny et alentour : Saint-Leu-la-Forêt, Ermont,  » — 1.00:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes.fx-fini > li.siege:nth-of-type(1) « Taverny » — 4.47:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > p.zone-actions:nth-of-type(2) > a.bouton.bouton--contour:nth-of-type(2) « 01 76 29 26 34 » — 1.11:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > p.zone-actions:nth-of-type(2) > span.joignable « Joignable maintenant, jusqu’à 20 h » — 1.00:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — h2#zone-titre « De Taverny aux communes voisines » — 1.11:1 (minimum 3:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes > li.siege:nth-of-type(1) « Taverny » — 4.47:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : link-name (1)

- **accessibilité (axe) : link-name** — `/` — .entete-logo — Links must have discernible text _(390×844 calme)_

### accessibilité (axe) : scrollable-region-focusable (1)

- **accessibilité (axe) : scrollable-region-focusable** — `/` — .avis-liste — Scrollable region must have keyboard access _(390×844 calme)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/` — div.methode-grille:nth-of-type(3) > figure.media.methode-photo > picture > img « Un couvreur de l’entreprise pose le faîtage, les p » — chantier-faitage (3/5, faible, 29 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### ancre introuvable (7)

- **ancre introuvable** — `/` — 03Charpente — /zinguerie-charpente#charpente
- **ancre introuvable** — `/` — 04Peinture — /facades#peinture
- **ancre introuvable** — `/` — 05Ravalement — /facades#ravalement
- **ancre introuvable** — `/` — Charpente → — /zinguerie-charpente#charpente
- **ancre introuvable** — `/` — Lire la rubrique Charpente — /zinguerie-charpente#charpente
- **ancre introuvable** — `/` — Lire la rubrique Peinture — /facades#peinture
- **ancre introuvable** — `/` — Lire la rubrique Ravalement — /facades#ravalement

### lien profond (3)

- **lien profond** — `/ → /zinguerie-charpente#charpente` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /facades#peinture` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /facades#ravalement` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_

### effet du plan absent (6)

- **effet du plan absent** — « nuancier » : aucun élément data-effet="nuancier"
- **effet du plan absent** — « cordon-etain » : aucun élément data-effet="cordon-etain"
- **effet du plan absent** — « signes-gouttiere » : aucun élément data-effet="signes-gouttiere"
- **effet du plan absent** — « charpente-profondeur » : aucun élément data-effet="charpente-profondeur"
- **effet du plan absent** — « coup-taloche » : aucun élément data-effet="coup-taloche"
- **effet du plan absent** — « finitions » : aucun élément data-effet="finitions"

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `devis.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : rien ne relie les sections (point 4) (3)

- **grille : rien ne relie les sections (point 4)** — `/couverture` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"
- **grille : rien ne relie les sections (point 4)** — `/facades` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"
- **grille : rien ne relie les sections (point 4)** — `/zinguerie-charpente` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (3)

- **grille : aucun titre ne fait l’événement (point 5)** — `/couverture` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/facades` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/zinguerie-charpente` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/` — li.metier.grande:nth-of-type(1) > figure.media > picture > img « Couverture » — chantier-renovation (3/5, 45 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### typographie française (1)

- **typographie française** — `/` — div.une-grille > div.toit.toit-pret:nth-of-type(2) > a.toit-devis > b « Un doute sur la vôtre ? » — espace insécable manquante avant ou après « ? » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 155 ms (différence 22 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/couverture` — à 71 ms (différence 29 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/couverture` — à 69 ms (différence 20 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/couverture` — bande d’environ 15 px en rgb(168, 74, 38) à côté du voile en rgb(133, 57, 29), sur 1 image(s) sur 1 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_

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
- Journal v1 : 2 étape(s) notée(s), 24 min de travail pour 50 min de budget, 1158 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2228 ms depuis le premier octet
- Ouverture / (390×844) : 2164 ms depuis le premier octet
- Bords de l’écran : 47 images d’intro, 1 de voile et 23 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 3 % d'images lentes sur 408, tâche la plus longue 116 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.85 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours,mouvement
```
