# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 17:51:10 · 2 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur / (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **19 échec(s)**
- Passe : `20261112-164908-rapide-cible-partiel` · version ?v=3
- Échecs : **19**
- À regarder : **19**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (7), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (9), liens vers la page en cours (1), changements de hauteur (1), mode calme (2)

## Passes de cette version (?v=3)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261112-164242-rapide | rapide | toutes | toutes | 42 | 20 | 2 | échecs |
| **20261112-164908-rapide-cible-partiel** (celle-ci) | rapide | / | fichiers, mesures, parcours | 19 | 19 | 1 | échecs |

## Échecs

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

### contraste sur image (4)

- **contraste sur image** — `/` — li#couche-5 > p.plongee-fin:nth-of-type(3) > a.bouton:nth-of-type(1) « Diagnostic gratuit de votre toit → » — 2.29:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-fin:nth-of-type(3) > a.bouton.bouton--contour:nth-of-type(2) « 01 76 29 26 34 » — 2.36:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-fin:nth-of-type(3) > a.bouton:nth-of-type(1) « Diagnostic gratuit de votre toit → » — 3.24:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-fin:nth-of-type(3) > a.bouton.bouton--contour:nth-of-type(2) « 01 76 29 26 34 » — 3.14:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### mode calme (3)

- **mode calme** — `/` — une boucle tourne encore (124 images par seconde) _(390×844 calme)_
- **mode calme** — `/` — une boucle tourne encore (64 images par seconde) _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### numéro de version (1)

- **numéro de version** — ?v=3 est celui de la dernière livraison : à changer avant de livrer

### contraste sur image (16)

- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) > span « 05 » — 1.59:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) « 05 / 05 · SOUS LES TUILES » — 1.67:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 « Les chevrons » — 2.37:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) « 05 / 05 · SOUS LES TUILES » — 3.28:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 « Les chevrons » — 2.81:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 > em « chevrons » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 > em « chevrons » — 1.42:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) « La charpente est diagnostiquée, renforcée ou rempl » — 2.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) « La charpente est diagnostiquée, renforcée ou rempl » — 2.43:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(1) > a > span « 01 » — 1.87:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(1) > a « 01 Tuile » — 2.53:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(2) > a > span « 02 » — 3.54:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li.actif:nth-of-type(3) > a > span « 03 » — 3.45:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(4) > a > span « 04 » — 2.05:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(4) > a « 04 Isolant » — 2.09:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(5) > a > span « 05 » — 4.12:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (17.0 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]

## Repères

- Numéro de version des fichiers : ?v=3
- Journal v3 : 3 étape(s) notée(s), 48 min de travail pour 80 min de budget, 0 min d’attente de l’utilisateur.
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
