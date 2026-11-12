# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 18:13:46 · 2 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur / (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **10 échec(s)**
- Passe : `20261112-171146-rapide-cible-partiel` · version ?v=4
- Échecs : **10**
- À regarder : **14**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (7), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (9), liens vers la page en cours (1), changements de hauteur (1), mode calme (2)

## Échecs

### texte coupé (6)

- **texte coupé** — `/` — h1#plongee-titre > span.mot:nth-of-type(1) « Ce » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal, 844×390 normal)_
- **texte coupé** — `/` — h1#plongee-titre > em > span.mot:nth-of-type(1) « sous » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — h1#plongee-titre > span.mot:nth-of-type(7) « famille » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — div.plongee-collant > div.plongee-une:nth-of-type(7) > p.une-actions:nth-of-type(1) > a.bouton:nth-of-type(1) « Demander un devis gratuit » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal)_
- **texte coupé** — `/` — section#debut > div.plongee-collant > div.plongee-une:nth-of-type(7) > p.plongee-indice:nth-of-type(2) « Faites défiler : on passe sous les tuiles » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(1366×768 normal, 844×390 normal)_
- **texte coupé** — `/` — h1#plongee-titre > em > span.mot:nth-of-type(3) « tuiles » — coupé par section#debut > div.plongee-collant « Toit de tuiles vu du faîtage, les pavillons de Tav » _(844×390 normal)_

### mode calme (4)

- **mode calme** — `/` — une boucle tourne encore (72 images par seconde) _(390×844 calme)_
- **mode calme** — `/` — une boucle tourne encore (74 images par seconde) _(1366×768 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### numéro de version (1)

- **numéro de version** — ?v=4 est celui de la dernière livraison : à changer avant de livrer

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 4 de donnees/site.json

### contraste sur image (10)

- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) « 05 / 05 · SOUS LES TUILES » — 1.71:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 > em « chevrons » — 1.48:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) « La charpente est diagnostiquée, renforcée ou rempl » — 1.99:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) « 05 / 05 · SOUS LES TUILES » — 1.09:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 « Les chevrons » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 > em « chevrons » — 1.73:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) « La charpente est diagnostiquée, renforcée ou rempl » — 1.02:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(1) > a « 01 Tuile » — 4.21:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(4) > a > span « 04 » — 3.85:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li.actif:nth-of-type(5) > a « 05 Chevrons » — 4.34:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (16.8 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]

## Repères

- Numéro de version des fichiers : ?v=4
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

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
