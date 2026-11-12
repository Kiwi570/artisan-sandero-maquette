# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 20:13:56 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **23 échec(s)**
- Passe : `20261112-190830-rapide-cible` · version ?v=8
- Échecs : **23**
- À regarder : **22**
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

### texte coupé (8)

- **texte coupé** — `/` — ol.plongee-rail > li.actif:nth-of-type(1) > a > span « 01 » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — div.plongee-collant > ol.plongee-rail > li.actif:nth-of-type(1) > a « 01 Tuile » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — ol.plongee-rail > li:nth-of-type(2) > a > span « 02 » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(2) > a « 02 Liteau » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — ol.plongee-rail > li:nth-of-type(4) > a > span « 04 » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(4) > a « 04 Isolant » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(5) > a « 05 Chevrons » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — div.plongee-collant > ol.plongee-rail > li.plongee-passer:nth-of-type(6) > a « Passer la plongée ↓ » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_

### contraste sur image (11)

- **contraste sur image** — `/` — ol.plongee-rail > li.actif:nth-of-type(1) > a > span « 01 » — 1.13:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li.actif:nth-of-type(1) > a « 01 Tuile » — 1.60:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(2) > a > span « 02 » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(2) > a « 02 Liteau » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(3) > a > span « 03 » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(3) > a « 03 Écran » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(4) > a > span « 04 » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(4) > a « 04 Isolant » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(5) > a > span « 05 » — 3.22:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(5) > a « 05 Chevrons » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li.plongee-passer:nth-of-type(6) > a « Passer la plongée ↓ » — 1.57:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### mode calme (4)

- **mode calme** — `/` — une boucle tourne encore (124 images par seconde) _(390×844 calme)_
- **mode calme** — `/` — une boucle tourne encore (126 images par seconde) _(1366×768 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

## À regarder

### clearProps « all » (2)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')
- **clearProps « all »** — assets/js/site.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 8 de donnees/site.json

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### contraste sur image (14)

- **contraste sur image** — `/` — p.plongee-n:nth-of-type(1) > div.pc-ligne-mask > div.pc-ligne > span « 05 » — 1.16:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) > div.pc-ligne-mask > div.pc-ligne « 05 / 05 · SOUS LES TUILES » — 1.27:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre-mask > div.pc-titre > div.pc-mot > div.pc-lettre:nth-of-type(1) « L » — 2.30:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(1) « c » — 1.21:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(2) « h » — 1.51:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(3) « e » — 1.69:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(4) « v » — 2.84:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(5) « r » — 1.97:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(6) « o » — 1.52:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(7) « n » — 1.57:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(8) « s » — 2.04:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(1) > div.pc-ligne « La charpente est diagnostiquée, renforcée ou » — 1.42:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(2) > div.pc-ligne « remplacée, et traitée contre les insectes et » — 1.38:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(3) > div.pc-ligne « la mérule. » — 1.32:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 64 ms (différence 21 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.plan.plan--toit > div.toit > canvas.toit-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (16.8 %), voir comparaisons/rechargement-*.png _(1366×768)_

### fluidité (1)

- **fluidité** — `/` — 9 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

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

- Numéro de version des fichiers : ?v=8
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2177 ms depuis le premier octet
- Ouverture / (390×844) : 2019 ms depuis le premier octet
- Bords de l’écran : 9 images d’intro, 3 de voile et 34 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1370, tâche la plus longue 0 ms
- Vitesse / : 1.60 s de calcul au chargement (téléphone ralenti).

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
