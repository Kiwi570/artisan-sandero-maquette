# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 15:59:15 · 16 min · 6 page(s) · audit standard

## Résumé

- Statut : **58 échec(s)**
- Passe : `20261112-144311-standard` · version ?v=1
- Échecs : **58**
- À regarder : **13**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (84), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (6), liens vers la page en cours (5), changements de hauteur (2), mode calme (10), bouton du mode calme (2), tient dans l’écran (5), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (13), souris immobile (5), vitesse (5), captures (1)

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
| **20261112-144311-standard** (celle-ci) | standard | toutes | toutes | 58 | 13 | 1 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (6)

- **premier écran : information clé hors de l’écran** — `/` — div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.une-info:nth-of-type(3) « Lun.–sam. 8 h–20 h · Devis gratuit » _(844×390 normal, 1366×768 sansJs, 844×390 calme)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-grille > div > p.une-info:nth-of-type(4) « 01 76 29 26 34 · Lun.–sam. 8 h–20 h » _(844×390 normal, 844×390 calme)_
- **premier écran : information clé hors de l’écran** — `/couverture` — section#debut > div.rubrique-une-grille > div.rubrique-une-texte:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(844×390 normal, 844×390 calme)_
- **premier écran : information clé hors de l’écran** — `/devis` — section#debut > div.conteneur.devis-tete > div.devis-appel:nth-of-type(2) > a.devis-tel:nth-of-type(1) « 01 76 29 26 34 » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/facades` — section#debut > div.conteneur.facade-tete:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(844×390 normal, 844×390 calme)_
- **premier écran : information clé hors de l’écran** — `/zinguerie-charpente` — section#debut > div.zinc-grille > div.zinc-texte:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(844×390 normal, 844×390 calme)_

### débordement horizontal (16)

- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) « Réfection vue du ciel · Chantier de l'entreprise L » — page large de 1319 px pour un écran de 1313 px _(768×1024 normal)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) « Réfection vue du ciel · Chantier de l'entreprise L » — page large de 1444 px pour un écran de 844 px _(844×390 normal)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) > div.chantier.chantier--etroit:nth-of-type(4) « Liteaux autour du Velux · Chantier de l'entreprise » — dépasse aussi à droite _(844×390 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) > div.chantier.chantier--etroit:nth-of-type(4) > figure.media — dépasse aussi à droite _(844×390 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) > div.chantier.chantier--etroit:nth-of-type(4) > p.chantier-titre « Liteaux autour du Velux · Chantier de l'entreprise » — dépasse aussi à droite _(844×390 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) « Réfection vue du ciel · Chantier de l'entreprise L » — page large de 2317 px pour un écran de 1366 px _(1366×768 normal)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) « Réfection vue du ciel · Chantier de l'entreprise L » — page large de 2436 px pour un écran de 1920 px _(1920×1080 normal)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) > div.chantier:nth-of-type(5) « Écran sous-toiture · Chantier de l'entreprise » — dépasse aussi à droite _(1920×1080 normal)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) > div.chantier:nth-of-type(5) > figure.media — dépasse aussi à droite _(1920×1080 normal)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) > div.chantier:nth-of-type(5) > p.chantier-titre « Écran sous-toiture · Chantier de l'entreprise » — dépasse aussi à droite _(1920×1080 normal)_
- **débordement horizontal** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) « Réfection vue du ciel · Chantier de l'entreprise L » — page large de 2316 px pour un écran de 1366 px _(1366×768 sansWebgl)_
- **débordement horizontal** — `/` — page large de 398 px — largeurs : 320 à 1920 px (31 largeurs) _(balayage 320–1920 normal)_
- **débordement horizontal** — `/couverture` — page large de 327 px — largeurs : 320 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/devis` — page large de 337 px — largeurs : 320 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/facades` — page large de 350 px — largeurs : 320 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/zinguerie-charpente` — page large de 357 px — largeurs : 320 px _(balayage 320–1920 normal)_

### textes qui se chevauchent (5)

- **textes qui se chevauchent** — `/` — div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil > span.long:nth-of-type(1) « Ombre réelle : soleil sur Taverny à » — avec div.une-scene > div.une-cote:nth-of-type(3) > p.une-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Demander un devis gratuit » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — div#debut > div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil « Ombre réelle : soleil sur Taverny à 15 h 43 » — avec div.une-scene > div.une-cote:nth-of-type(3) > p.une-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Demander un devis gratuit » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — div:nth-of-type(1) > ul.logos.logos--labels > li:nth-of-type(3) > span « Garantie décennale » — avec div:nth-of-type(1) > ul.logos.logos--labels > li:nth-of-type(4) > span « Toutes hauteurs » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/couverture` — div.rubrique-une-grille > div.pente.ouverte:nth-of-type(2) > figure.media > figcaption.mention-ia « Illustration générée » — avec div.conteneur > div.prestations-grille:nth-of-type(3) > figure.media.prestations-photo > figcaption.mention-ia « Illustration générée » _(844×390 normal, 844×390 calme)_
- **textes qui se chevauchent** — `/zinguerie-charpente` — section#charpente > div.charpente-scene:nth-of-type(2) > div.charpente-plan.charpente-avant:nth-of-type(2) > a.bouton.charpente-bouton « Demander un diagnostic de charpente » — avec section.section.fin:nth-of-type(5) > div.conteneur:nth-of-type(2) > div.liteau.liteau--clair:nth-of-type(1) > span.rubrique:nth-of-type(1) « DEVIS GRATUIT · ARTISAN SANDERO » _(844×390 normal)_

### contraste insuffisant (12)

- **contraste insuffisant** — `/` — div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil > span.long:nth-of-type(1) « Ombre réelle : soleil sur Taverny à » — 2.10:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 calme, 1366×768 sansWebgl, +1)_
- **contraste insuffisant** — `/` — div#debut > div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil « Ombre réelle : soleil sur Taverny à 15 h 43 » — 2.10:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 calme, 1366×768 sansWebgl, +1)_
- **contraste insuffisant** — `/` — div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil > span.court:nth-of-type(2) « Soleil réel · » — 2.10:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 calme, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — div#debut > div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil « Soleil réel · 15 h 43 » — 2.10:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 390×844 calme, 390×844 sansWebgl)_
- **contraste insuffisant** — `/facades` — ul.vignettes.fx-fini > li:nth-of-type(1) > p.vignette-legende > b « Nettoyage de façade » — 2.10:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 calme, +5)_
- **contraste insuffisant** — `/facades` — div.conteneur > ul.vignettes.fx-fini > li:nth-of-type(1) > p.vignette-legende « Nettoyage de façade · chantier de l'entreprise » — 2.10:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 calme, +5)_
- **contraste insuffisant** — `/facades` — ul.vignettes.fx-fini > li:nth-of-type(2) > p.vignette-legende > b « Échafaudage posé » — 2.10:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 calme, +5)_
- **contraste insuffisant** — `/facades` — div.conteneur > ul.vignettes.fx-fini > li:nth-of-type(2) > p.vignette-legende « Échafaudage posé · chantier de l'entreprise » — 2.10:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 calme, +5)_
- **contraste insuffisant** — `/facades` — ul.vignettes > li:nth-of-type(1) > p.vignette-legende > b « Nettoyage de façade » — 2.10:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/facades` — div.conteneur > ul.vignettes > li:nth-of-type(1) > p.vignette-legende « Nettoyage de façade · chantier de l'entreprise » — 2.10:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/facades` — ul.vignettes > li:nth-of-type(2) > p.vignette-legende > b « Échafaudage posé » — 2.10:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/facades` — div.conteneur > ul.vignettes > li:nth-of-type(2) > p.vignette-legende « Échafaudage posé · chantier de l'entreprise » — 2.10:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### texte sous 12 px (5)

- **texte sous 12 px** — `/` — div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil > span.court:nth-of-type(2) « Soleil réel · » — 11.8 px _(390×844 normal, 320×568 normal, 390×844 calme, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — div#debut > div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil « Soleil réel · 15 h 43 » — 11.8 px _(390×844 normal, 320×568 normal, 390×844 calme, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — div#debut > div.une-scene > div.une-texte:nth-of-type(2) > p.surtitre « COUVREUR-ZINGUEUR À TAVERNY · DEPUIS 2006 » — 11.5 px _(390×844 normal, 320×568 normal, 390×844 calme, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — section#couches > div.couches-collant > div.couches-texte:nth-of-type(1) > p.couches-compte:nth-of-type(2) « COUCHE 1 / 5 » — 11.8 px _(1920×1080 normal)_
- **texte sous 12 px** — `/` — div.couches-collant > div.couches-texte:nth-of-type(1) > p.couches-compte:nth-of-type(2) > span « 1 » — 11.8 px _(1920×1080 normal)_

### texte coupé (5)

- **texte coupé** — `/` — div#debut > div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil « Soleil réel · 15 h 43 » — coupé par div#debut > div.une-scene « Illustration générée Soleil réel · 15 h 43 Un dout » _(320×568 normal)_
- **texte coupé** — `/couverture` — section.section.fin:nth-of-type(5) > div.conteneur:nth-of-type(2) > div.liteau.liteau--clair:nth-of-type(1) > span.rubrique:nth-of-type(1) « DEVIS GRATUIT · ARTISAN SANDERO » — coupé par main#contenu > section.section.fin:nth-of-type(5) « DEVIS GRATUIT · ARTISAN SANDERO Un toit à regarder » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/facades` — section.section.fin:nth-of-type(5) > div.conteneur:nth-of-type(2) > div.liteau.liteau--clair:nth-of-type(1) > span.rubrique:nth-of-type(1) « DEVIS GRATUIT · ARTISAN SANDERO » — coupé par main#contenu > section.section.fin:nth-of-type(5) « DEVIS GRATUIT · ARTISAN SANDERO Une façade à repre » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/zinguerie-charpente` — section#charpente > div.charpente-scene:nth-of-type(2) > div.charpente-plan.charpente-avant:nth-of-type(2) > a.bouton.charpente-bouton « Demander un diagnostic de charpente » — coupé par section#charpente > div.charpente-scene:nth-of-type(2) « Illustration générée Les signes qui doivent alerte » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte coupé** — `/zinguerie-charpente` — section.section.fin:nth-of-type(5) > div.conteneur:nth-of-type(2) > div.liteau.liteau--clair:nth-of-type(1) > span.rubrique:nth-of-type(1) « DEVIS GRATUIT · ARTISAN SANDERO » — coupé par main#contenu > section.section.fin:nth-of-type(5) « DEVIS GRATUIT · ARTISAN SANDERO Une fuite, une pou » _(320×568 normal, 320×568 sansJs)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/` — div.plaque:nth-of-type(1) > figure.media > picture > img « La tuile » — grok/tuiles-face (5/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### accessibilité (axe) : nested-interactive (1)

- **accessibilité (axe) : nested-interactive** — `/` — .toit — Interactive controls must not be nested _(390×844 calme, 1366×768 calme)_

### contraste sur image (1)

- **contraste sur image** — `/` — div#debut > div.une-scene > div.une-texte:nth-of-type(2) > p.surtitre « COUVREUR-ZINGUEUR À TAVERNY · DEPUIS 2006 » — 3.23:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/` — div.une-scene > div.une-cote:nth-of-type(3) > p.une-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Demander un devis gratuit » _(844×390 calme)_
- **premier écran : bouton principal hors de l’écran** — `/devis` — section#debut > div.conteneur.devis-tete > div.devis-appel:nth-of-type(2) > a.bouton:nth-of-type(2) « Demande de devis » _(320×568 normal, 320×568 sansJs)_

### élément recouvert (3)

- **élément recouvert** — `/facades` — div.conteneur > ul.finitions > li.finition:nth-of-type(1) > button.finition-bouton « Lisse » — par ul.finitions > li.finition:nth-of-type(1) > figure.media.finition-photo > figcaption.mention-ia « Illustration générée » _(390×844 normal)_
- **élément recouvert** — `/facades` — div.conteneur > ul.finitions > li.finition:nth-of-type(3) > button.finition-bouton « Talochée » — par ul.finitions > li.finition:nth-of-type(3) > figure.media.finition-photo > figcaption.mention-ia « Illustration générée » _(390×844 normal)_
- **élément recouvert** — `/facades` — div.conteneur > ul.finitions > li.finition:nth-of-type(4) > button.finition-bouton « Projetée » — par ul.finitions > li.finition:nth-of-type(4) > figure.media.finition-photo > figcaption.mention-ia « Illustration générée » _(390×844 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/facades` — li:nth-child(1) > .vignette-legende ; li:nth-child(1) > .vignette-legende > b ; li:nth-child(2) > .vignette-legende — Elements must meet minimum color contrast ratio thresholds _(390×844 calme, 1366×768 calme)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### typographie française (1)

- **typographie française** — `/` — div.une-scene > div.toit:nth-of-type(1) > p.toit-soleil > span.long:nth-of-type(1) « Ombre réelle : soleil sur Taverny à » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### contraste sur image (3)

- **contraste sur image** — `/` — div.une-texte:nth-of-type(2) > h1.une-titre.pose > em > span.mot:nth-of-type(2) « les » — 2.94:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.une-texte:nth-of-type(2) > h1.une-titre.pose > em > span.mot:nth-of-type(3) « tuiles » — 2.81:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.une-scene > div.une-texte:nth-of-type(2) > h1.une-titre.pose > span.mot:nth-of-type(9) « sait. » — 2.93:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 198 ms (différence 28 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/couverture` — à 81 ms (différence 30 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (12.6 %), voir comparaisons/rechargement-*.png _(1366×768)_

### fluidité (1)

- **fluidité** — `/facades` — 3 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

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
- Audit standard : étapes lourdes sur /, /couverture, /devis, /facades, /zinguerie-charpente.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 1471 ms depuis le premier octet
- Ouverture /couverture (1366×768) : 1804 ms depuis le premier octet
- Ouverture /devis (1366×768) : 1769 ms depuis le premier octet
- Ouverture /facades (1366×768) : 1779 ms depuis le premier octet
- Ouverture /zinguerie-charpente (1366×768) : 1802 ms depuis le premier octet
- Ouverture / (390×844) : 1478 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /couverture (390×844) : 1757 ms depuis le premier octet
- film de l'ouverture /couverture 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /devis (390×844) : 1810 ms depuis le premier octet
- Ouverture /facades (390×844) : 1854 ms depuis le premier octet
- Ouverture /zinguerie-charpente (390×844) : 1822 ms depuis le premier octet
- bords de l’écran /devis 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 200 images d’intro, 18 de voile et 114 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /couverture : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /facades : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /zinguerie-charpente : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /couverture : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.
- Tient dans l'écran /facades : aucune section épinglée ou plein écran.
- Tient dans l'écran /zinguerie-charpente : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 380, tâche la plus longue 0 ms
- Fluidité /couverture 1366×768 (molette) : 1 % d'images lentes sur 285, tâche la plus longue 58 ms
- Fluidité /devis 1366×768 (molette) : 0 % d'images lentes sur 129, tâche la plus longue 0 ms
- Fluidité /zinguerie-charpente 1366×768 (molette) : 0 % d'images lentes sur 234, tâche la plus longue 72 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /couverture 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /devis 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /facades 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Fluidité /zinguerie-charpente 390×844 (doigt) : 0 % d'images lentes sur 1355, tâche la plus longue 0 ms
- Vitesse / : 0.90 s de calcul au chargement (téléphone ralenti).
- Vitesse /couverture : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /devis : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /facades : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /zinguerie-charpente : 0.48 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/couverture,/devis,/facades,/zinguerie-charpente --seulement=fichiers,mesures
```
