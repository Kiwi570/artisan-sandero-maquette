# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 16:50:03 · 2 min · 2 page(s) · audit standard ciblé sur /couverture,/zinguerie-charpente (étapes : films, bords)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261112-154823-standard-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : films d’ouverture (4), films de transition (4), bords de l’écran (3)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261111-184234-rapide-cible | rapide | / | toutes | 80 | 11 | 1 | échecs |
| 20261112-134004-rapide-cible | rapide | / | toutes | 36 | 14 | 1 | échecs |
| 20261112-142343-rapide-cible | rapide | /couverture,/zinguerie-charpente,/facades,/devis | toutes | 56 | 9 | 1 | échecs |
| 20261112-144311-standard | standard | toutes | toutes | 58 | 13 | 1 | échecs |
| 20261112-150325-standard | standard | toutes | toutes | 6 | 10 | 1 | échecs |
| 20261112-152227-complet-partiel | complet | toutes | mesures, ecran | 15 | 0 | 0 | échecs |
| 20261112-152932-complet-cible-partiel | complet | /,/404,/couverture,/devis,/zinguerie-charpente,/facades | fichiers, mesures | 5 | 1 | 0 | échecs |
| 20261112-153606-complet-cible-partiel | complet | /,/couverture | fichiers, mesures | 0 | 1 | 0 | complet |
| 20261112-153844-standard-cible | standard | /couverture,/devis,/facades | toutes | 4 | 7 | 1 | échecs |
| **20261112-154823-standard-cible-partiel** (celle-ci) | standard | /couverture,/zinguerie-charpente | films, bords | 0 | 4 | 0 | complet |

## Échecs

Aucun.

## À regarder

### retour avant : changement brusque (3)

- **retour avant : changement brusque** — `/zinguerie-charpente` — à 70 ms (différence 42 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/zinguerie-charpente` — à 99 ms (différence 24 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/zinguerie-charpente` — à 81 ms (différence 42 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/couverture` — à 84 ms (différence 46 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

## Non lancé

Tout a été lancé.


## Repères

- Audit standard : étapes lourdes sur /couverture, /zinguerie-charpente.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture /couverture (1366×768) : 1494 ms depuis le premier octet
- Ouverture /zinguerie-charpente (1366×768) : 1413 ms depuis le premier octet
- Ouverture /couverture (390×844) : 1489 ms depuis le premier octet
- Ouverture /zinguerie-charpente (390×844) : 1452 ms depuis le premier octet
- Bords de l’écran : 83 images d’intro, 8 de voile et 64 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
