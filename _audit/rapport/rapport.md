# Rapport d’audit

Projet : `artisan-sandero-maquette` · 13/11/2026 12:53:01 · 3 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison (étapes : fichiers, parcours, ecran)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261113-115019-rapide-partiel` · version ?v=11
- Échecs : **3**
- À regarder : **2**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), mode calme (2), tient dans l’écran (2), films des épinglages (1)

## Passes de cette version (?v=11)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-113920-rapide | rapide | toutes | toutes | 10 | 18 | 2 | échecs |
| 20261113-114605-rapide-partiel | rapide | toutes | fichiers, mesures, parcours, ecran, mouvement | 6 | 18 | 1 | échecs |
| **20261113-115019-rapide-partiel** (celle-ci) | rapide | toutes | fichiers, parcours, ecran | 3 | 2 | 1 | échecs |

## Échecs

### mode calme (3)

- **mode calme** — `/` — une boucle tourne encore (124 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### numéro de version (1)

- **numéro de version** — ?v=11 est celui de la dernière livraison : à changer avant de livrer

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]

## Repères

- Numéro de version des fichiers : ?v=11
- Journal v11 : 4 étape(s) notée(s), 68 min de travail pour 100 min de budget, 0 min d’attente de l’utilisateur.
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
