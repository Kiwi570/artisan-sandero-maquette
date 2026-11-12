# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 17:48:05 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **42 échec(s)**
- Passe : `20261112-164242-rapide` · version ?v=3
- Échecs : **42**
- À regarder : **20**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (7), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (9), liens vers la page en cours (1), changements de hauteur (1), mode calme (2), tient dans l’écran (2), films des épinglages (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (14), souris immobile (2), vitesse (1), captures (1)

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

## Échecs

### texte sous 12 px (5)

- **texte sous 12 px** — `/` — div.plongee-collant > ol.plongee-rail > li.actif:nth-of-type(1) > a « Tuile » — 0.0 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(2) > a « Liteau » — 0.0 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(3) > a « Écran » — 0.0 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(4) > a « Isolant » — 0.0 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(5) > a « Chevrons » — 0.0 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_

### zone tactile sous 44 px (9)

- **zone tactile sous 44 px** — `/` — div.plongee-collant > ol.plongee-rail > li.actif:nth-of-type(1) > a « Tuile » — 42 × 34 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(2) > a « Liteau » — 42 × 34 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(3) > a « Écran » — 42 × 34 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(4) > a « Isolant » — 42 × 34 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(5) > a « Chevrons » — 42 × 34 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/` — ol > li.plongee-couche:nth-of-type(1) > p.plongee-lien:nth-of-type(4) > a « Couverture → » — 110 × 20 px _(390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — ol > li.plongee-couche:nth-of-type(2) > p.plongee-lien:nth-of-type(3) > a « Couverture → » — 110 × 20 px _(390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — ol > li.plongee-couche:nth-of-type(3) > p.plongee-lien:nth-of-type(3) > a « Couverture → » — 110 × 20 px _(390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — ol > li.plongee-couche:nth-of-type(4) > p.plongee-lien:nth-of-type(3) > a « Isolation → » — 90 × 20 px _(390×844 sansJs, 320×568 sansJs)_

### contraste insuffisant (12)

- **contraste insuffisant** — `/` — h1#plongee-titre > span.mot:nth-of-type(1) « Ce » — 1.02:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > span.mot:nth-of-type(2) « qui » — 1.02:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > span.mot:nth-of-type(3) « se » — 1.02:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > span.mot:nth-of-type(4) « passe » — 1.02:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > em > span.mot:nth-of-type(1) « sous » — 2.52:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > em > span.mot:nth-of-type(2) « les » — 2.52:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > em > span.mot:nth-of-type(3) « tuiles » — 2.52:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > span.mot:nth-of-type(5) « , » — 1.02:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > span.mot:nth-of-type(6) « une » — 1.02:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > span.mot:nth-of-type(7) « famille » — 1.02:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > span.mot:nth-of-type(8) « le » — 1.02:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — h1#plongee-titre > span.mot:nth-of-type(9) « sait. » — 1.02:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_

### mention « Illustration générée » absente (5)

- **mention « Illustration générée » absente** — `/` — div.toit > figure.media.toit-photo > picture > img — zone-faitage-800.webp _(390×844 sansJs, 320×568 sansJs)_
- **mention « Illustration générée » absente** — `/` — div.plan-camera > figure.media > picture > img — liteaux-ecran-mobile-640.webp _(390×844 sansJs, 320×568 sansJs)_
- **mention « Illustration générée » absente** — `/` — div.plan-camera > figure.media > picture > img — couche-ecran-640.webp _(390×844 sansJs, 320×568 sansJs)_
- **mention « Illustration générée » absente** — `/` — div.plan-camera > figure.media > picture > img — couche-isolant-640.webp _(390×844 sansJs, 320×568 sansJs)_
- **mention « Illustration générée » absente** — `/` — div.plan-camera > figure.media > picture > img — charpente-neuve-mobile-640.webp _(390×844 sansJs, 320×568 sansJs)_

### contraste sur image (8)

- **contraste sur image** — `/` — ol > li.plongee-couche.actif:nth-of-type(5) > p.plongee-n:nth-of-type(1) > span « 05 » — 2.90:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ol > li.plongee-couche:nth-of-type(5) > p.plongee-n:nth-of-type(1) > span « 05 » — 1.09:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.plongee-couches:nth-of-type(8) > ol > li.plongee-couche.actif:nth-of-type(5) > p.plongee-n:nth-of-type(1) « 05 / 05 · SOUS LES TUILES » — 3.54:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-couches:nth-of-type(8) > ol > li.plongee-couche:nth-of-type(5) > p.plongee-n:nth-of-type(1) « 05 / 05 · SOUS LES TUILES » — 1.68:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — ol > li.plongee-couche:nth-of-type(5) > p.plongee-fin:nth-of-type(3) > a.bouton:nth-of-type(1) « Diagnostic gratuit de votre toit → » — 2.30:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — ol > li.plongee-couche.actif:nth-of-type(5) > p.plongee-fin:nth-of-type(3) > a.bouton:nth-of-type(1) « Diagnostic gratuit de votre toit → » — 3.26:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ol > li.plongee-couche:nth-of-type(5) > p.plongee-fin:nth-of-type(3) > a.bouton.bouton--contour:nth-of-type(2) « 01 76 29 26 34 » — 2.17:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — ol > li.plongee-couche.actif:nth-of-type(5) > p.plongee-fin:nth-of-type(3) > a.bouton.bouton--contour:nth-of-type(2) « 01 76 29 26 34 » — 3.28:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### mode calme (3)

- **mode calme** — `/` — une boucle tourne encore (124 images par seconde) _(390×844 calme)_
- **mode calme** — `/` — une boucle tourne encore (64 images par seconde) _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### numéro de version (1)

- **numéro de version** — ?v=3 est celui de la dernière livraison : à changer avant de livrer

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 3 de donnees/site.json

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### contraste sur image (12)

- **contraste sur image** — `/` — div.plongee-couches:nth-of-type(8) > ol > li.plongee-couche.actif:nth-of-type(5) > h3 « Les chevrons » — 2.80:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-couches:nth-of-type(8) > ol > li.plongee-couche:nth-of-type(5) > h3 « Les chevrons » — 2.37:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — ol > li.plongee-couche:nth-of-type(5) > h3 > em « chevrons » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — ol > li.plongee-couche.actif:nth-of-type(5) > h3 > em « chevrons » — 1.42:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-couches:nth-of-type(8) > ol > li.plongee-couche:nth-of-type(5) > p.plongee-phrase:nth-of-type(2) « La charpente est diagnostiquée, renforcée ou rempl » — 2.10:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.plongee-couches:nth-of-type(8) > ol > li.plongee-couche.actif:nth-of-type(5) > p.plongee-phrase:nth-of-type(2) « La charpente est diagnostiquée, renforcée ou rempl » — 2.43:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(1) > a > span « 01 » — 2.99:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(1) > a « 01 Tuile » — 2.05:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(3) > a > span « 03 » — 3.45:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(4) > a > span « 04 » — 2.06:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(4) > a « 04 Isolant » — 2.09:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li.actif:nth-of-type(5) > a > span « 05 » — 4.43:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 169 ms (différence 30 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 89 ms (différence 22 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### lien vers la page en cours (1)

- **lien vers la page en cours** — `/` — adresse non mise à jour ( au lieu de #debut)

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (16.1 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=3
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2195 ms depuis le premier octet
- Ouverture / (390×844) : 2136 ms depuis le premier octet
- Bords de l’écran : 10 images d’intro, 8 de voile et 35 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 1366×768 (molette) : 3 % d'images lentes sur 509, tâche la plus longue 142 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Vitesse / : 0.76 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours
```
