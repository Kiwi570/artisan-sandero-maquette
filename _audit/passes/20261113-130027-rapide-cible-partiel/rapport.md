# Rapport d’audit

Projet : `artisan-sandero-maquette` · 13/11/2026 14:02:37 · 2 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur / (étapes : parcours)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261113-130027-rapide-cible-partiel` · version ?v=14
- Échecs : **4**
- À regarder : **0**
- Non lancé : **1**
- Contrôles passés : intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), mode calme (2)

## Passes de cette version (?v=14)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-125550-rapide-cible-partiel | rapide | / | parcours, films, fluidite, mesures, ecran | 5 | 15 | 1 | échecs |
| **20261113-130027-rapide-cible-partiel** (celle-ci) | rapide | / | parcours | 4 | 0 | 1 | échecs |

## Échecs

### mode calme (4)

- **mode calme** — `/` — une boucle tourne encore (75 images par seconde) _(390×844 calme)_
- **mode calme** — `/` — une boucle tourne encore (74 images par seconde) _(1366×768 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

## À regarder

Rien.

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]

## Repères

- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,parcours
```
