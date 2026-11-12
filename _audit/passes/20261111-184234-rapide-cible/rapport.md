# Rapport d’audit

Projet : `artisan-sandero-maquette` · 11/11/2026 19:47:36 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **80 échec(s)**
- Passe : `20261111-184234-rapide-cible` · version ?v=1
- Échecs : **80**
- À regarder : **11**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (7), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (9), liens vers la page en cours (1), changements de hauteur (1), mode calme (2), bouton du mode calme (2), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (6), souris immobile (2), vitesse (1), captures (1)

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

## Échecs

### image de partage (5)

- **image de partage** — `couverture.html` — fichier introuvable : /assets/partage/couverture-fr.jpg
- **image de partage** — `devis.html` — fichier introuvable : /assets/partage/devis-fr.jpg
- **image de partage** — `facades.html` — fichier introuvable : /assets/partage/facades-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `zinguerie-charpente.html` — fichier introuvable : /assets/partage/zinguerie-charpente-fr.jpg

### texte sous 12 px (17)

- **texte sous 12 px** — `/` — div#debut > p.ligne-magazine > span:nth-of-type(1) « TAVERNY · VAL-D'OISE » — 11.8 px _(390×844 calme, 1366×768 normal, 390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — div#debut > p.ligne-magazine > span:nth-of-type(3) « 01 76 29 26 34 » — 11.8 px _(390×844 calme, 1366×768 normal, 390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — div.une-grille > div.toit:nth-of-type(2) > span.toit-geste > span.tactile:nth-of-type(2) « GLISSEZ LE DOIGT SUR LES TUILES » — 11.8 px _(390×844 calme, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.couches-collant > div.couches-texte:nth-of-type(1) > div.liteau.liteau--clair > span.rubrique:nth-of-type(1) « RUBRIQUE 01 · SOUS LA TUILE » — 11.8 px _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **texte sous 12 px** — `/` — section#metiers > div.liteau.pose:nth-of-type(1) > span.rubrique:nth-of-type(1) « RUBRIQUE 02 · LES MÉTIERS » — 11.8 px _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — section#chantiers > div.conteneur > div.liteau.pose:nth-of-type(1) > span.rubrique:nth-of-type(1) « RUBRIQUE 03 · LES CHANTIERS » — 11.8 px _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — section#methode > div.conteneur > div.liteau.pose:nth-of-type(1) > span.rubrique:nth-of-type(1) « RUBRIQUE 04 · LA MÉTHODE » — 11.8 px _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — section#famille > div.conteneur > div.liteau.liteau--clair:nth-of-type(1) > span.rubrique:nth-of-type(1) « RUBRIQUE 05 · DE PÈRE EN FILS » — 11.8 px _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **texte sous 12 px** — `/` — section#avis > div.liteau.pose:nth-of-type(1) > span.rubrique:nth-of-type(1) « RUBRIQUE 06 · LE COURRIER ET LES LABELS » — 11.8 px _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — section#zone > div.conteneur > div.liteau.liteau--clair > span.rubrique:nth-of-type(1) « RUBRIQUE 07 · LA ZONE » — 11.8 px _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **texte sous 12 px** — `/` — div#debut > p.ligne-magazine > span:nth-of-type(2) « ENTREPRISE FAMILIALE DEPUIS 2006 » — 11.8 px _(1366×768 normal)_
- **texte sous 12 px** — `/` — div.une-grille > div.toit.decoupe:nth-of-type(2) > span.toit-geste > span.souris:nth-of-type(1) « SOULEVEZ LES TUILES » — 11.8 px _(1366×768 normal)_
- **texte sous 12 px** — `/` — div.une-grille > div.toit.decoupe:nth-of-type(2) > span.toit-geste > span.tactile:nth-of-type(2) « GLISSEZ LE DOIGT SUR LES TUILES » — 11.8 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — section#metiers > div.liteau:nth-of-type(1) > span.rubrique:nth-of-type(1) « RUBRIQUE 02 · LES MÉTIERS » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — section#chantiers > div.conteneur > div.liteau:nth-of-type(1) > span.rubrique:nth-of-type(1) « RUBRIQUE 03 · LES CHANTIERS » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — section#methode > div.conteneur > div.liteau:nth-of-type(1) > span.rubrique:nth-of-type(1) « RUBRIQUE 04 · LA MÉTHODE » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — section#avis > div.liteau:nth-of-type(1) > span.rubrique:nth-of-type(1) « RUBRIQUE 06 · LE COURRIER ET LES LABELS » — 11.8 px _(390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/` — div.une-grille > div.toit:nth-of-type(2) > figure.media.toit-dessus:nth-of-type(2) > figcaption.mention-ia « Illustration générée » — avec div.une-grille > div.toit:nth-of-type(2) > span.toit-geste > span.tactile:nth-of-type(2) « GLISSEZ LE DOIGT SUR LES TUILES » _(390×844 calme, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.une-grille > div.toit.decoupe:nth-of-type(2) > figure.media.toit-dessus:nth-of-type(2) > figcaption.mention-ia « Illustration générée » — avec div.une-grille > div.toit.decoupe:nth-of-type(2) > span.toit-geste > span.tactile:nth-of-type(2) « GLISSEZ LE DOIGT SUR LES TUILES » _(390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.couches-pile:nth-of-type(2) > div.plaque:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — avec div.couches-collant > div.couches-pile:nth-of-type(2) > div.plaque:nth-of-type(3) > p.plaque-nom « L'écran sous-toiture » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.avis-grille:nth-of-type(3) > ul.avis-liste > li:nth-of-type(1) > span.etoiles « ★★★★★ » — avec div.avis-grille:nth-of-type(3) > ul.avis-liste > li:nth-of-type(1) > cite « Berhouet Thierry » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.avis-grille:nth-of-type(3) > ul.avis-liste > li:nth-of-type(4) > span.etoiles « ★★★★★ » — avec div.avis-grille:nth-of-type(3) > ul.avis-liste > li:nth-of-type(4) > cite « Joseph Sebag » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.avis-grille:nth-of-type(3) > ul.avis-liste > li:nth-of-type(6) > span.etoiles « ★★★★★ » — avec div.avis-grille:nth-of-type(3) > ul.avis-liste > li:nth-of-type(6) > cite « Azaoui Cheikh » _(320×568 sansJs)_

### contraste insuffisant (19)

- **contraste insuffisant** — `/` — section#zone > div.conteneur > div.liteau.liteau--clair > span.rubrique:nth-of-type(1) « RUBRIQUE 07 · LA ZONE » — 1.53:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(1) « De » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(2) « Taverny » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(3) « aux » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(4) « communes » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — h2#zone-titre > span.mot:nth-of-type(5) « voisines » — 1.11:1 (minimum 3:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > p:nth-of-type(1) « Taverny et alentour : Saint-Leu-la-Forêt, Ermont,  » — 1.00:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes.fx-fini > li.siege:nth-of-type(1) « Taverny » — 4.47:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes.fx-fini > li:nth-of-type(2) « Saint-Leu-la-Forêt » — 1.11:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes.fx-fini > li:nth-of-type(3) « Ermont » — 1.11:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes.fx-fini > li:nth-of-type(4) « Eaubonne » — 1.11:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes.fx-fini > li:nth-of-type(5) « Cormeilles-en-Parisis » — 1.11:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > p.zone-actions:nth-of-type(2) > a.bouton.bouton--contour:nth-of-type(2) « 01 76 29 26 34 » — 1.11:1 (minimum 4.5:1) _(390×844 calme, 1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/` — h2#zone-titre « De Taverny aux communes voisines » — 1.11:1 (minimum 3:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes > li.siege:nth-of-type(1) « Taverny » — 4.47:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes > li:nth-of-type(2) « Saint-Leu-la-Forêt » — 1.11:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes > li:nth-of-type(3) « Ermont » — 1.11:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes > li:nth-of-type(4) « Eaubonne » — 1.11:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#zone > div.conteneur > ul.communes > li:nth-of-type(5) « Cormeilles-en-Parisis » — 1.11:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_

### mention « Illustration générée » absente (1)

- **mention « Illustration générée » absente** — `/` — div.toit:nth-of-type(2) > figure.media.toit-dessous:nth-of-type(1) > picture > img — liteaux-ecran-mobile-640.webp _(390×844 calme, 390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : link-name (1)

- **accessibilité (axe) : link-name** — `/` — .entete-logo — Links must have discernible text _(390×844 calme)_

### accessibilité (axe) : scrollable-region-focusable (1)

- **accessibilité (axe) : scrollable-region-focusable** — `/` — .avis-liste — Scrollable region must have keyboard access _(390×844 calme)_

### photo faible affichée en grand (7)

- **photo faible affichée en grand** — `/` — div.plaque:nth-of-type(1) > figure.media > picture > img « La tuile » — grok/materiau-terre-cuite (4/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.plaque:nth-of-type(2) > figure.media > picture > img « Le liteau » — grok/liteaux-toit (4/5, faible, 29 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.plaque:nth-of-type(3) > figure.media > picture > img « L'écran sous-toiture » — grok/couche-ecran (4/5, faible, 28 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.plaque:nth-of-type(4) > figure.media > picture > img « L'isolant » — grok/couche-isolant (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.famille-photos:nth-of-type(2) > figure.media.portrait:nth-of-type(1) > picture > img « Un couvreur de l’entreprise pose le faîtage, les p » — chantier-faitage (3/5, faible, 32 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — section#zone > figure.media.zone-fond > picture > img « Toits de tuiles et jardins vus depuis un faîtage,  » — grok/faitage-vue (5/5, faible, 100 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — section#zone > figure.media.zone-fond > picture > img « Toits de tuiles et jardins vus depuis un faîtage,  » — grok/faitage-vue (5/5, faible, 83 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### élément recouvert (7)

- **élément recouvert** — `/` — ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier.grande:nth-of-type(1) > div.metier-corps > h3 « Couverture » — par ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier.grande:nth-of-type(1) > div.metier-corps > a « Voir le métier » _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/` — ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(2) > div.metier-corps > h3 « Isolation » — par ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(2) > div.metier-corps > a « Voir le métier » _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/` — ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(3) > div.metier-corps > h3 « Fenêtres de toit » — par ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(3) > div.metier-corps > a « Voir le métier » _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/` — ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(4) > div.metier-corps > h3 « Zinguerie » — par ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(4) > div.metier-corps > a « Voir le métier » _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/` — ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(5) > div.metier-corps > h3 « Charpente » — par ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(5) > div.metier-corps > a « Voir le métier » _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/` — ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(6) > div.metier-corps > h3 « Peinture » — par ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(6) > div.metier-corps > a « Voir le métier » _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/` — ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(7) > div.metier-corps > h3 « Ravalement » — par ul.metiers-grille.fx-fini:nth-of-type(2) > li.metier:nth-of-type(7) > div.metier-corps > a « Voir le métier » _(390×844 normal, 1366×768 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — div#debut > div.une-grille > div.une-texte:nth-of-type(1) > p.une-info:nth-of-type(4) « Lun.–sam. 8 h–20 h · Devis gratuit · 01 76 29 26 3 » _(320×568 sansJs)_

### bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/couverture` — bande en rgb(197, 97, 48) à côté du voile en rgb(158, 75, 42), sur 3 image(s) sur 3 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_

### ancre introuvable (9)

- **ancre introuvable** — `/` — 03Charpente — /zinguerie-charpente#charpente
- **ancre introuvable** — `/` — 04Peinture — /facades#peinture
- **ancre introuvable** — `/` — 05Ravalement — /facades#ravalement
- **ancre introuvable** — `/` — Charpente → — /zinguerie-charpente#charpente
- **ancre introuvable** — `/` — Voir le métier — /couverture#isolation
- **ancre introuvable** — `/` — Voir le métier — /couverture#fenetres
- **ancre introuvable** — `/` — Voir le métier — /zinguerie-charpente#charpente
- **ancre introuvable** — `/` — Voir le métier — /facades#peinture
- **ancre introuvable** — `/` — Voir le métier — /facades#ravalement

### lien profond (5)

- **lien profond** — `/ → /zinguerie-charpente#charpente` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /facades#peinture` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /facades#ravalement` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /couverture#isolation` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /couverture#fenetres` — section introuvable à l’arrivée _(1366×768 lien profond)_

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

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/couverture` — à 65 ms (différence 29 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/couverture` — à 63 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (23.4 %), voir comparaisons/rechargement-*.png _(1366×768)_

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
- Journal v1 : 2 étape(s) notée(s), 24 min de travail pour 50 min de budget, 60 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2670 ms depuis le premier octet
- Ouverture / (390×844) : 2546 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 66 images d’intro, 3 de voile et 22 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 3 % d'images lentes sur 426, tâche la plus longue 62 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1384, tâche la plus longue 0 ms
- Vitesse / : 0.60 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,bords,parcours
```
