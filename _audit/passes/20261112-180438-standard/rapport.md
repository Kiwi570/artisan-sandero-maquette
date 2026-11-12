# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 19:22:10 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **17 échec(s)**
- Passe : `20261112-180438-standard` · version ?v=6
- Échecs : **17**
- À regarder : **13**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (84), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (12), liens vers la page en cours (5), changements de hauteur (2), mode calme (10), tient dans l’écran (5), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (14), souris immobile (6), vitesse (5), captures (1)

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

### contenu inaccessible (1)

- **contenu inaccessible** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) > div.chantier:nth-of-type(5) « Fenêtre de toit entre les liteaux · Chantier de l' » — 1 élément(s) de galerie hors de l'écran, sans défilement possible _(1366×768 calme, 844×390 calme)_

### retour arrière : image isolée différente (flash) (1)

- **retour arrière : image isolée différente (flash)** — `/` — à 77 ms (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### mode calme (14)

- **mode calme** — `/` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/couverture` — une boucle tourne encore (102 images par seconde) _(390×844 calme)_
- **mode calme** — `/devis` — une boucle tourne encore (112 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/facades` — une boucle tourne encore (64 images par seconde) _(390×844 calme)_
- **mode calme** — `/zinguerie-charpente` — une boucle tourne encore (83 images par seconde) _(390×844 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_
- **mode calme** — `/couverture` — une boucle tourne encore (115 images par seconde) _(1366×768 calme)_
- **mode calme** — `/couverture` — défilement adouci toujours actif _(1366×768 calme)_
- **mode calme** — `/devis` — défilement adouci toujours actif _(1366×768 calme)_
- **mode calme** — `/facades` — une boucle tourne encore (65 images par seconde) _(1366×768 calme)_
- **mode calme** — `/facades` — défilement adouci toujours actif _(1366×768 calme)_
- **mode calme** — `/zinguerie-charpente` — une boucle tourne encore (87 images par seconde) _(1366×768 calme)_
- **mode calme** — `/zinguerie-charpente` — défilement adouci toujours actif _(1366×768 calme)_

### fluidité (1)

- **fluidité** — `/` — 16 % d'images de plus de 50 ms, tâche la plus longue 100 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### numéro de version (1)

- **numéro de version** — ?v=6 est celui de la dernière livraison : à changer avant de livrer

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### contraste sur image (5)

- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) > span « 05 » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) « 05 / 05 · SOUS LES TUILES » — 1.26:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 « Les chevrons » — 1.84:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 > em « chevrons » — 1.48:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) « La charpente est diagnostiquée, renforcée ou rempl » — 2.03:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.plan.plan--toit > div.toit > canvas.toit-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (16.8 %), voir comparaisons/rechargement-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/devis` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/facades` — ul.finitions — finitions : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/zinguerie-charpente` — div.signes — signes-gouttiere : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

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

- Numéro de version des fichiers : ?v=6
- Journal v6 : 1 étape(s) notée(s), 3 min de travail pour 15 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /couverture, /devis, /facades, /zinguerie-charpente.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2137 ms depuis le premier octet
- Ouverture /couverture (1366×768) : 1461 ms depuis le premier octet
- Ouverture /devis (1366×768) : 1400 ms depuis le premier octet
- Ouverture /facades (1366×768) : 1470 ms depuis le premier octet
- Ouverture /zinguerie-charpente (1366×768) : 1363 ms depuis le premier octet
- Ouverture / (390×844) : 2050 ms depuis le premier octet
- Ouverture /couverture (390×844) : 1425 ms depuis le premier octet
- Ouverture /devis (390×844) : 1435 ms depuis le premier octet
- Ouverture /facades (390×844) : 1461 ms depuis le premier octet
- Ouverture /zinguerie-charpente (390×844) : 1402 ms depuis le premier octet
- Bords de l’écran : 161 images d’intro, 30 de voile et 192 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /couverture : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /facades : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /zinguerie-charpente : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /couverture : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.
- Tient dans l'écran /facades : aucune section épinglée ou plein écran.
- Tient dans l'écran /zinguerie-charpente : aucune section épinglée ou plein écran.
- Fluidité /couverture 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /devis 1366×768 (molette) : 0 % d'images lentes sur 128, tâche la plus longue 0 ms
- Fluidité /facades 1366×768 (molette) : 0 % d'images lentes sur 237, tâche la plus longue 0 ms
- Fluidité /zinguerie-charpente 1366×768 (molette) : 0 % d'images lentes sur 224, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1358, tâche la plus longue 0 ms
- Fluidité /couverture 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /devis 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /facades 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Fluidité /zinguerie-charpente 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Vitesse / : 1.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /couverture : 0.60 s de calcul au chargement (téléphone ralenti).
- Vitesse /devis : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /facades : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /zinguerie-charpente : 0.46 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,films,parcours,fluidite
```
