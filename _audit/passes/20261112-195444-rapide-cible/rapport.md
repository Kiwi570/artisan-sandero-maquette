# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 21:01:11 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/couverture.html

## Résumé

- Statut : **10 échec(s)**
- Passe : `20261112-195444-rapide-cible` · version ?v=10
- Échecs : **10**
- À regarder : **20**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (7), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), mode calme (2), tient dans l’écran (2), films des épinglages (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (14), souris immobile (2), vitesse (1), captures (1)

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

## Passes de cette version (?v=10)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261112-195233-rapide-cible-partiel | rapide | /,/couverture.html | mesures | 2 | 15 | 0 | échecs |
| 20261112-195304-rapide-cible-partiel | rapide | /,/couverture.html | mesures | 0 | 15 | 0 | complet |
| **20261112-195444-rapide-cible** (celle-ci) | rapide | /,/couverture.html | toutes | 10 | 20 | 2 | échecs |

## Échecs

### retour arrière : image isolée différente (flash) (1)

- **retour arrière : image isolée différente (flash)** — `/` — à 71 ms (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### lien profond (4)

- **lien profond** — `/ → /couverture#renovation` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /couverture#renovation` — section cachée sous l'en-tête (16 px) _(390×844 lien profond)_
- **lien profond** — `/ → /couverture#nettoyage` — section cachée sous l'en-tête (16 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /couverture#debut` — section cachée sous l'en-tête (65 px) _(1366×768 lien profond)_

### mode calme (4)

- **mode calme** — `/` — une boucle tourne encore (124 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/` — animation en boucle toujours active : [object Object], [object Object], [object Object] _(390×844 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN, [object Object], [object Object], [object Object] _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

### fluidité (1)

- **fluidité** — `/` — 11 % d'images de plus de 50 ms, tâche la plus longue 104 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 10 de donnees/site.json

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### contraste sur image (15)

- **contraste sur image** — `/` — p.plongee-n:nth-of-type(1) > div.pc-ligne-mask > div.pc-ligne > span « 05 » — 1.14:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) > div.pc-ligne-mask > div.pc-ligne « 05 / 05 · SOUS LES TUILES » — 1.15:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre-mask > div.pc-titre > div.pc-mot > div.pc-lettre:nth-of-type(1) « L » — 1.59:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre-mask > div.pc-titre > div.pc-mot > div.pc-lettre:nth-of-type(2) « e » — 1.62:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(1) « c » — 1.23:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(2) « h » — 1.51:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(3) « e » — 1.69:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(4) « v » — 2.87:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(5) « r » — 1.97:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(6) « o » — 1.52:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(7) « n » — 1.57:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(8) « s » — 2.04:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(1) > div.pc-ligne « La charpente est diagnostiquée, renforcée ou » — 1.40:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(2) > div.pc-ligne « remplacée, et traitée contre les insectes et » — 1.39:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(3) > div.pc-ligne « la mérule. » — 1.33:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.plan.plan--toit > div.toit > canvas.toit-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (10.2 %), voir comparaisons/rechargement-*.png _(1366×768)_

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

- Numéro de version des fichiers : ?v=10
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2249 ms depuis le premier octet
- Ouverture / (390×844) : 2072 ms depuis le premier octet
- Bords de l’écran : 7 images d’intro, 8 de voile et 37 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1362, tâche la plus longue 0 ms
- Vitesse / : 1.66 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,films,parcours,fluidite
```
