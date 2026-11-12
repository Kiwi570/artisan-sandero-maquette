# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 16:38:37 · 3 min · 2 page(s) · audit complet ciblé sur /,/couverture (étapes : fichiers, mesures)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261112-153606-complet-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (104), balayage (2)

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
| **20261112-153606-complet-cible-partiel** (celle-ci) | complet | /,/couverture | fichiers, mesures | 0 | 1 | 0 | complet |

## Échecs

Aucun.

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 1284 min de travail pour 125 min de budget, 1166 min d’attente de l’utilisateur.
- Journal : « construction : accueil » 1222 min pour 45 prévues.
- Journal : « construction : pages d'onglet » 35 min pour 25 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
