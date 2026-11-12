# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 15:34:06 · 10 min · 4 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /couverture,/zinguerie-charpente,/facades,/devis

## Résumé

- Statut : **56 échec(s)**
- Passe : `20261112-142343-rapide-cible` · version ?v=1
- Échecs : **56**
- À regarder : **9**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (28), films d’ouverture (8), films de transition (8), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (4), liens et boutons (4), liens vers la page en cours (4), changements de hauteur (1), mode calme (8), bouton du mode calme (2), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (13), souris immobile (3), vitesse (4), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 2 autre(s) page(s) |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en tuiles |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /devis |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261111-184234-rapide-cible | rapide | / | toutes | 80 | 11 | 1 | échecs |
| 20261112-134004-rapide-cible | rapide | / | toutes | 36 | 14 | 1 | échecs |
| **20261112-142343-rapide-cible** (celle-ci) | rapide | /couverture,/zinguerie-charpente,/facades,/devis | toutes | 56 | 9 | 1 | échecs |

## Échecs

### image de partage (5)

- **image de partage** — `couverture.html` — fichier introuvable : /assets/partage/couverture-fr.jpg
- **image de partage** — `devis.html` — fichier introuvable : /assets/partage/devis-fr.jpg
- **image de partage** — `facades.html` — fichier introuvable : /assets/partage/facades-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `zinguerie-charpente.html` — fichier introuvable : /assets/partage/zinguerie-charpente-fr.jpg

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/couverture` — div.rubrique-une-grille > div.rubrique-une-texte:nth-of-type(1) > p.une-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Demander un devis couverture » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/devis` — section#debut > div.conteneur.devis-tete > div.devis-appel:nth-of-type(2) > a.bouton:nth-of-type(2) « Demande de devis » _(844×390 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/zinguerie-charpente` — div.zinc-grille > div.zinc-texte:nth-of-type(1) > p.une-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Demander un devis zinguerie » _(844×390 normal)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/couverture` — section#debut > div.rubrique-une-grille > div.rubrique-une-texte:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/devis` — section#debut > div.conteneur.devis-tete > div.devis-appel:nth-of-type(2) > a.devis-tel:nth-of-type(1) « 01 76 29 26 34 » _(844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/facades` — section#debut > div.conteneur.facade-tete:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/zinguerie-charpente` — section#debut > div.zinc-grille > div.zinc-texte:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(844×390 normal)_

### section sans visuel (8)

- **section sans visuel** — `/couverture` — section#interventions « RUBRIQUE 01 · SUR LE TOIT Ce que l'on fait sur un  » _(390×844 calme, 390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/couverture` — main#contenu > section.section.fin:nth-of-type(5) « DEVIS GRATUIT · ARTISAN SANDERO Un toit à regarder » _(390×844 calme, 390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/devis` — section#debut « DEVIS GRATUIT · ARTISAN SANDERO Votre chantier, en » _(390×844 normal, 1366×768 normal, 390×844 calme, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/facades` — section#peinture « RUBRIQUE 01 · LA PEINTURE La peinture, préparée av » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 calme, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/facades` — section#ravalement « RUBRIQUE 02 · LE RAVALEMENT Le ravalement en quatr » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 calme, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/facades` — main#contenu > section.section.fin:nth-of-type(5) « DEVIS GRATUIT · ARTISAN SANDERO Une façade à repre » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 calme, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/zinguerie-charpente` — section#signes « RUBRIQUE 02 · LES SIGNES Votre gouttière vous fait » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, +1)_
- **section sans visuel** — `/zinguerie-charpente` — main#contenu > section.section.fin:nth-of-type(5) « DEVIS GRATUIT · ARTISAN SANDERO Une fuite, une pou » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, +1)_

### photo faible affichée en grand (4)

- **photo faible affichée en grand** — `/couverture` — div.echantillon-corps:nth-of-type(2) > figure.media.echantillon-photo > picture > img — grok/materiau-ardoise (4/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/couverture` — div.echantillon-corps:nth-of-type(2) > figure.media.echantillon-photo > picture > img — grok/materiau-zinc (4/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/couverture` — div.echantillon-corps:nth-of-type(2) > figure.media.echantillon-photo > picture > img — grok/materiau-beton (4/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/facades` — li.finition.choisie:nth-of-type(2) > figure.media.finition-photo > picture > img — grok/finition-grattee (4/5, faible, 36 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### texte sous 12 px (5)

- **texte sous 12 px** — `/devis` — div.devis-carte:nth-of-type(2) > svg.schema-zone > g.siege:nth-of-type(1) > text — 6.0 px _(390×844 normal, 1366×768 normal, 390×844 calme, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **texte sous 12 px** — `/devis` — div.devis-carte:nth-of-type(2) > svg.schema-zone > g:nth-of-type(2) > text — 6.0 px _(390×844 normal, 1366×768 normal, 390×844 calme, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **texte sous 12 px** — `/devis` — div.devis-carte:nth-of-type(2) > svg.schema-zone > g:nth-of-type(3) > text — 6.0 px _(390×844 normal, 1366×768 normal, 390×844 calme, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **texte sous 12 px** — `/devis` — div.devis-carte:nth-of-type(2) > svg.schema-zone > g:nth-of-type(4) > text — 6.0 px _(390×844 normal, 1366×768 normal, 390×844 calme, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **texte sous 12 px** — `/devis` — div.devis-carte:nth-of-type(2) > svg.schema-zone > g:nth-of-type(5) > text — 6.0 px _(390×844 normal, 1366×768 normal, 390×844 calme, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/devis` — section#debut > div.conteneur.devis-tete > div.devis-appel:nth-of-type(2) > a.devis-tel:nth-of-type(1) « 01 76 29 26 34 » — 217 × 32 px _(390×844 normal, 390×844 calme, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### textes qui se chevauchent (11)

- **textes qui se chevauchent** — `/devis` — div.devis-carte:nth-of-type(2) > svg.schema-zone > g:nth-of-type(3) > text — avec div.devis-carte:nth-of-type(2) > svg.schema-zone > g:nth-of-type(4) > text _(390×844 normal, 1366×768 normal, 390×844 calme, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — li#signe-deformations « Déformations » — avec li#signe-traces-d-humidite « Traces d'humidité » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — li#signe-sciure-de-bois « Sciure de bois » — avec section#charpente > div.charpente-scene:nth-of-type(2) > div.charpente-plan.charpente-avant:nth-of-type(2) > a.bouton « Demander un diagnostic de charpente » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — li#signe-toit-qui-s-affaisse « Toit qui s'affaisse » — avec section#charpente > div.charpente-scene:nth-of-type(2) > div.charpente-plan.charpente-avant:nth-of-type(2) > a.bouton « Demander un diagnostic de charpente » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — li#signe-sciure-de-bois « Sciure de bois » — avec li#signe-toit-qui-s-affaisse « Toit qui s'affaisse » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — h2#charpente-titre > span.mot:nth-of-type(1) « La » — avec section#charpente > div.charpente-scene:nth-of-type(2) > div.charpente-plan.charpente-avant:nth-of-type(2) > h3 « Les signes qui doivent alerter » _(844×390 normal)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — h2#charpente-titre > span.mot:nth-of-type(2) « charpente, » — avec section#charpente > div.charpente-scene:nth-of-type(2) > div.charpente-plan.charpente-avant:nth-of-type(2) > h3 « Les signes qui doivent alerter » _(844×390 normal)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — li#signe-sciure-de-bois « Sciure de bois » — avec section.section.fin:nth-of-type(5) > div.conteneur > div.liteau.liteau--clair:nth-of-type(1) > span.rubrique:nth-of-type(1) « DEVIS GRATUIT · ARTISAN SANDERO » _(844×390 normal)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — li#signe-toit-qui-s-affaisse « Toit qui s'affaisse » — avec section.section.fin:nth-of-type(5) > div.conteneur > div.liteau.liteau--clair:nth-of-type(1) > span.rubrique:nth-of-type(1) « DEVIS GRATUIT · ARTISAN SANDERO » _(844×390 normal)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — li#signe-bruits-inhabituels « Bruits inhabituels » — avec h2#fin-titre > span.mot:nth-of-type(4) « poutre » _(844×390 normal)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — section#charpente > div.charpente-scene:nth-of-type(2) > div.charpente-plan.charpente-avant:nth-of-type(2) > a.bouton « Demander un diagnostic de charpente » — avec section.section.fin:nth-of-type(5) > div.conteneur > div.liteau.liteau--clair:nth-of-type(1) > span.rubrique:nth-of-type(1) « DEVIS GRATUIT · ARTISAN SANDERO » _(844×390 normal)_

### élément recouvert (1)

- **élément recouvert** — `/devis` — h2#demande-titre « Demande de devis » — par div.conteneur.devis-grille > div.fpe.devis-form > div.fpe__carton > span.tampon-recu « REÇU » _(390×844 normal, 1366×768 normal)_

### contraste insuffisant (5)

- **contraste insuffisant** — `/facades` — div.couches-peinture:nth-of-type(2) > ol.fx-fini > li:nth-of-type(1) > span « 01 » — 4.04:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 calme, 390×844 sansWebgl)_
- **contraste insuffisant** — `/facades` — div.couches-peinture:nth-of-type(2) > ol.fx-fini > li:nth-of-type(2) > span « 02 » — 4.43:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 calme, 390×844 sansWebgl)_
- **contraste insuffisant** — `/facades` — div.couches-peinture:nth-of-type(2) > ol > li:nth-of-type(1) > span « 01 » — 4.04:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/facades` — div.couches-peinture:nth-of-type(2) > ol > li:nth-of-type(2) > span « 02 » — 4.43:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/zinguerie-charpente` — section#debut > div.zinc-grille > div.zinc-texte:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » — 1.23:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, 390×844 sansWebgl)_

### mention « Illustration générée » absente (3)

- **mention « Illustration générée » absente** — `/facades` — li.finition:nth-of-type(1) > figure.media.finition-photo > picture > img — finition-lisse-480.webp _(390×844 normal, 390×844 calme, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **mention « Illustration générée » absente** — `/facades` — li.finition:nth-of-type(3) > figure.media.finition-photo > picture > img — finition-talochee-480.webp _(390×844 normal, 390×844 calme, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **mention « Illustration générée » absente** — `/facades` — li.finition:nth-of-type(4) > figure.media.finition-photo > picture > img — finition-projetee-480.webp _(390×844 normal, 390×844 calme, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/facades` — .couches-peinture > ol > li:nth-child(1) > span ; .couches-peinture > ol > li:nth-child(2) > span — Elements must meet minimum color contrast ratio thresholds _(390×844 calme)_
- **accessibilité (axe) : color-contrast** — `/zinguerie-charpente` — .une-info — Elements must meet minimum color contrast ratio thresholds _(390×844 calme)_

### transition : image isolée différente (flash) (2)

- **transition : image isolée différente (flash)** — `/couverture → /zinguerie-charpente` — à 1986 ms (films/transition-couverture-vers-zinguerie-charpente-1366.png) _(1366×768 film)_
- **transition : image isolée différente (flash)** — `/couverture → /zinguerie-charpente` — à 1962 ms (films/transition-couverture-vers-zinguerie-charpente-1366.png) _(1366×768 film)_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/couverture` — bande d’environ 15 px en rgb(168, 74, 38) à côté du voile en rgb(133, 57, 29), sur 2 image(s) sur 4 (films/bords-voile-facades-1366.png) _(1366×768 barre de défilement classique (15 px))_

### clavier (1)

- **clavier** — `/zinguerie-charpente` — input «  » — le focus arrive sur un élément caché _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `devis.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/zinguerie-charpente` — à 124 ms (différence 24 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/zinguerie-charpente` — à 62 ms (différence 48 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile (2)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/zinguerie-charpente` — bande d’environ 15 px en rgb(168, 74, 38) à côté du voile en rgb(133, 57, 29), sur 1 image(s) sur 1 (films/bords-voile-couverture-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/couverture` — bande d’environ 15 px en rgb(168, 74, 38) à côté du voile en rgb(133, 57, 29), sur 1 image(s) sur 1 (films/bords-voile-zinguerie-charpente-1366.png) _(1366×768 barre de défilement classique (15 px))_

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
- Journal v1 : 2 étape(s) notée(s), 24 min de travail pour 50 min de budget, 1164 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /couverture, /devis, /facades, /zinguerie-charpente.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /couverture (1366×768) : 1781 ms depuis le premier octet
- Ouverture /devis (1366×768) : 1881 ms depuis le premier octet
- Ouverture /facades (1366×768) : 1860 ms depuis le premier octet
- Ouverture /zinguerie-charpente (1366×768) : 1902 ms depuis le premier octet
- Ouverture /couverture (390×844) : 1747 ms depuis le premier octet
- Ouverture /devis (390×844) : 1754 ms depuis le premier octet
- Ouverture /facades (390×844) : 1760 ms depuis le premier octet
- Ouverture /zinguerie-charpente (390×844) : 1752 ms depuis le premier octet
- Bords de l’écran : 192 images d’intro, 7 de voile et 93 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun lien profond vers une section d’une autre page.
- Changements de hauteur /couverture : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /facades : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /zinguerie-charpente : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /couverture : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.
- Tient dans l'écran /facades : aucune section épinglée ou plein écran.
- Tient dans l'écran /zinguerie-charpente : aucune section épinglée ou plein écran.
- Fluidité /couverture 1366×768 (molette) : 0 % d'images lentes sur 293, tâche la plus longue 0 ms
- Fluidité /devis 1366×768 (molette) : 0 % d'images lentes sur 129, tâche la plus longue 0 ms
- Fluidité /facades 1366×768 (molette) : 0 % d'images lentes sur 228, tâche la plus longue 0 ms
- Fluidité /zinguerie-charpente 1366×768 (molette) : 0 % d'images lentes sur 192, tâche la plus longue 0 ms
- Fluidité /couverture 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /devis 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /facades 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /zinguerie-charpente 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Vitesse /couverture : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /devis : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /facades : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /zinguerie-charpente : 0.48 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films,bords,parcours
```
