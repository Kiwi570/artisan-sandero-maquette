# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 16:19:51 · 16 min · 6 page(s) · audit standard

## Résumé

- Statut : **6 échec(s)**
- Passe : `20261112-150325-standard` · version ?v=1
- Échecs : **6**
- À regarder : **10**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (84), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (12), liens vers la page en cours (5), changements de hauteur (2), mode calme (10), bouton du mode calme (2), tient dans l’écran (5), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (13), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 2 autre(s) page(s) |
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
| **20261112-150325-standard** (celle-ci) | standard | toutes | toutes | 6 | 10 | 1 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/` — div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.une-info:nth-of-type(3) « Lun.–sam. 8 h–20 h · Devis gratuit » _(1366×768 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-grille > div > p.une-info:nth-of-type(4) « 01 76 29 26 34 · Lun.–sam. 8 h–20 h » _(844×390 normal, 844×390 calme)_
- **premier écran : information clé hors de l’écran** — `/couverture` — section#debut > div.rubrique-une-grille > div.rubrique-une-texte:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(844×390 normal, 844×390 calme)_
- **premier écran : information clé hors de l’écran** — `/facades` — section#debut > div.conteneur.facade-tete:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(844×390 normal, 844×390 calme)_
- **premier écran : information clé hors de l’écran** — `/zinguerie-charpente` — section#debut > div.zinc-grille > div.zinc-texte:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(320×568 normal, 844×390 normal, 320×568 sansJs, 844×390 calme)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/couverture` — div.rubrique-une-grille > div.pente.ouverte:nth-of-type(2) > figure.media > figcaption.mention-ia « Illustration générée » — avec div.conteneur > div.prestations-grille:nth-of-type(3) > figure.media.prestations-photo > figcaption.mention-ia « Illustration générée » _(844×390 normal, 844×390 calme)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 154 ms (différence 26 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/couverture` — à 79 ms (différence 25 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile (2)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/couverture` — bande d’environ 15 px en rgb(168, 74, 38) à côté du voile en rgb(133, 57, 29), sur 1 image(s) sur 2 (films/bords-voile-zinguerie-charpente-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/couverture` — bande d’environ 15 px en rgb(169, 73, 39) à côté du voile en rgb(133, 57, 29), sur 1 image(s) sur 2 (films/bords-voile-1920.png) _(1920×1080 barre de défilement classique (15 px))_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (12.6 %), voir comparaisons/rechargement-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/devis` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/facades` — ul.finitions — finitions : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/zinguerie-charpente` — div.signes — signes-gouttiere : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

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
- Audit standard : étapes lourdes sur /, /couverture, /devis, /facades, /zinguerie-charpente.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 1544 ms depuis le premier octet
- Ouverture /couverture (1366×768) : 1802 ms depuis le premier octet
- Ouverture /devis (1366×768) : 1761 ms depuis le premier octet
- Ouverture /facades (1366×768) : 1870 ms depuis le premier octet
- Ouverture /zinguerie-charpente (1366×768) : 1753 ms depuis le premier octet
- Ouverture / (390×844) : 1498 ms depuis le premier octet
- Ouverture /couverture (390×844) : 1787 ms depuis le premier octet
- Ouverture /devis (390×844) : 1771 ms depuis le premier octet
- Ouverture /facades (390×844) : 1736 ms depuis le premier octet
- film de l'ouverture /facades 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /zinguerie-charpente (390×844) : 1734 ms depuis le premier octet
- bords de l’écran /facades 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 222 images d’intro, 17 de voile et 125 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /couverture : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /facades : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /zinguerie-charpente : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /couverture : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.
- Tient dans l'écran /facades : aucune section épinglée ou plein écran.
- Tient dans l'écran /zinguerie-charpente : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 3 % d'images lentes sur 370, tâche la plus longue 107 ms
- Fluidité /couverture 1366×768 (molette) : 0 % d'images lentes sur 287, tâche la plus longue 0 ms
- Fluidité /devis 1366×768 (molette) : 0 % d'images lentes sur 137, tâche la plus longue 0 ms
- Fluidité /facades 1366×768 (molette) : 0 % d'images lentes sur 241, tâche la plus longue 64 ms
- Fluidité /zinguerie-charpente 1366×768 (molette) : 0 % d'images lentes sur 242, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /couverture 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /devis 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /facades 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /zinguerie-charpente 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Vitesse / : 0.70 s de calcul au chargement (téléphone ralenti).
- Vitesse /couverture : 0.52 s de calcul au chargement (téléphone ralenti).
- Vitesse /devis : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /facades : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /zinguerie-charpente : 0.59 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/couverture,/facades,/zinguerie-charpente --seulement=fichiers,mesures
```
