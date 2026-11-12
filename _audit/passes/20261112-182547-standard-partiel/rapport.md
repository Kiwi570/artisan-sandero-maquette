# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 19:36:42 · 11 min · 6 page(s) · audit standard (étapes : fichiers, mesures, films, parcours, fluidite)

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261112-182547-standard-partiel` · version ?v=7
- Échecs : **16**
- À regarder : **11**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (84), balayage (5), films d’ouverture (10), films de transition (10), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (12), liens vers la page en cours (5), changements de hauteur (2), mode calme (10), fluidité (10), défilement selon l’appareil (5)

## Échecs

### contenu inaccessible (1)

- **contenu inaccessible** — `/` — section#chantiers > div.chantiers-piste:nth-of-type(2) > div.chantier:nth-of-type(5) « Fenêtre de toit entre les liteaux · Chantier de l' » — 1 élément(s) de galerie hors de l'écran, sans défilement possible _(1366×768 calme, 844×390 calme)_

### mode calme (14)

- **mode calme** — `/` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/couverture` — une boucle tourne encore (113 images par seconde) _(390×844 calme)_
- **mode calme** — `/devis` — une boucle tourne encore (111 images par seconde) _(390×844 calme)_
- **mode calme** — `/facades` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/zinguerie-charpente` — une boucle tourne encore (82 images par seconde) _(390×844 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_
- **mode calme** — `/couverture` — une boucle tourne encore (115 images par seconde) _(1366×768 calme)_
- **mode calme** — `/couverture` — défilement adouci toujours actif _(1366×768 calme)_
- **mode calme** — `/devis` — une boucle tourne encore (112 images par seconde) _(1366×768 calme)_
- **mode calme** — `/devis` — défilement adouci toujours actif _(1366×768 calme)_
- **mode calme** — `/facades` — défilement adouci toujours actif _(1366×768 calme)_
- **mode calme** — `/zinguerie-charpente` — une boucle tourne encore (84 images par seconde) _(1366×768 calme)_
- **mode calme** — `/zinguerie-charpente` — défilement adouci toujours actif _(1366×768 calme)_

### fluidité (1)

- **fluidité** — `/` — 12 % d'images de plus de 50 ms, tâche la plus longue 93 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### numéro de version (1)

- **numéro de version** — ?v=7 est celui de la dernière livraison : à changer avant de livrer

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 7 de donnees/site.json

### contraste sur image (5)

- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) > span « 05 » — 1.16:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) « 05 / 05 · SOUS LES TUILES » — 1.23:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 « Les chevrons » — 1.75:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 > em « chevrons » — 1.49:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) « La charpente est diagnostiquée, renforcée ou rempl » — 2.01:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 90 ms (différence 21 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.plan.plan--toit > div.toit > canvas.toit-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (16.8 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]

## Repères

- Numéro de version des fichiers : ?v=7
- Audit standard : étapes lourdes sur /, /couverture, /devis, /facades, /zinguerie-charpente.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2079 ms depuis le premier octet
- Ouverture /couverture (1366×768) : 1446 ms depuis le premier octet
- Ouverture /devis (1366×768) : 1372 ms depuis le premier octet
- Ouverture /facades (1366×768) : 1475 ms depuis le premier octet
- film de l'ouverture /facades 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /zinguerie-charpente (1366×768) : 1410 ms depuis le premier octet
- film de l'ouverture /zinguerie-charpente 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2060 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /couverture (390×844) : 1454 ms depuis le premier octet
- Ouverture /devis (390×844) : 1428 ms depuis le premier octet
- Ouverture /facades (390×844) : 1469 ms depuis le premier octet
- Ouverture /zinguerie-charpente (390×844) : 1382 ms depuis le premier octet
- Changements de hauteur /couverture : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /facades : aucun effet ScrollTrigger, rien à recalculer.
- Changements de hauteur /zinguerie-charpente : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité /couverture 1366×768 (molette) : 0 % d'images lentes sur 298, tâche la plus longue 0 ms
- Fluidité /devis 1366×768 (molette) : 0 % d'images lentes sur 125, tâche la plus longue 0 ms
- Fluidité /facades 1366×768 (molette) : 1 % d'images lentes sur 235, tâche la plus longue 0 ms
- Fluidité /zinguerie-charpente 1366×768 (molette) : 0 % d'images lentes sur 232, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1366, tâche la plus longue 0 ms
- Fluidité /couverture 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /devis 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /facades 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /zinguerie-charpente 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours,fluidite
```
