# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 18:37:38 · 2 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur / (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261112-173537-rapide-cible-partiel` · version ?v=5
- Échecs : **9**
- À regarder : **8**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (7), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (9), liens vers la page en cours (1), changements de hauteur (1), mode calme (2)

## Passes de cette version (?v=5)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261112-173325-rapide-cible-partiel | rapide | / | fichiers, mesures, parcours | 10 | 8 | 1 | échecs |
| **20261112-173537-rapide-cible-partiel** (celle-ci) | rapide | / | fichiers, mesures, parcours | 9 | 8 | 1 | échecs |

## Échecs

### contraste sur image (6)

- **contraste sur image** — `/` — ol.plongee-rail > li.actif:nth-of-type(1) > a > span « 01 » — 3.26:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(2) > a > span « 02 » — 3.58:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(2) > a « 02 Liteau » — 3.83:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(3) > a > span « 03 » — 4.28:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ol.plongee-rail > li:nth-of-type(4) > a > span « 04 » — 3.45:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > ol.plongee-rail > li:nth-of-type(4) > a « 04 Isolant » — 4.21:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### mode calme (3)

- **mode calme** — `/` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### numéro de version (1)

- **numéro de version** — ?v=5 est celui de la dernière livraison : à changer avant de livrer

### contraste sur image (5)

- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) > span « 05 » — 1.16:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) « 05 / 05 · SOUS LES TUILES » — 1.24:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 « Les chevrons » — 1.93:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > h3 > em « chevrons » — 1.48:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) « La charpente est diagnostiquée, renforcée ou rempl » — 2.03:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (16.8 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]

## Repères

- Numéro de version des fichiers : ?v=5
- Journal v5 : 1 étape(s) notée(s), 12 min de travail pour 20 min de budget, 0 min d’attente de l’utilisateur.
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
