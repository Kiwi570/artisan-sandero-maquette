# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 16:35:30 · 6 min · 6 page(s) · audit complet ciblé sur /,/404,/couverture,/devis,/zinguerie-charpente,/facades (étapes : fichiers, mesures)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261112-152932-complet-cible-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (312), balayage (5)

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
| **20261112-152932-complet-cible-partiel** (celle-ci) | complet | /,/404,/couverture,/devis,/zinguerie-charpente,/facades | fichiers, mesures | 5 | 1 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.une-info:nth-of-type(3) « Lun.–sam. 8 h–20 h · Devis gratuit » _(1000×560 normal, 1000×560 calme, 1000×560 sansWebgl)_

### texte coupé (2)

- **texte coupé** — `/` — div.une-scene > div.toit:nth-of-type(1) > figure.media.toit-photo > figcaption.mention-ia « Illustration générée » — coupé par div#debut > div.une-scene « Toit de tuiles vu du faîtage, les pavillons de Tav » _(320×568 sansJs)_
- **texte coupé** — `/couverture` — li.echantillon:nth-of-type(3) > div.echantillon-corps:nth-of-type(2) > figure.media.echantillon-photo > figcaption.mention-ia « Illustration générée » — coupé par section#materiaux > div.conteneur > ol.nuancier > li.echantillon:nth-of-type(3) « 03 / 04 Zinc 40 ans environ Illustration générée A » _(844×390 normal, 844×390 sansJs, 844×390 calme, 844×390 sansWebgl)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — div#debut > div.une-scene > div.une-texte:nth-of-type(2) > h1.une-titre « Ce qui se passe sous les tuiles, une famille le sa » — avec div.une-scene > div.une-cote:nth-of-type(3) > p.une-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Demander un devis gratuit » _(844×390 sansJs)_
- **textes qui se chevauchent** — `/` — div#debut > div.une-scene > div.une-texte:nth-of-type(2) > h1.une-titre « Ce qui se passe sous les tuiles, une famille le sa » — avec div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.chapo:nth-of-type(1) « Couverture, zinguerie, charpente, peinture et rava » _(1280×720 sansJs)_

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


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/couverture --seulement=fichiers,mesures
```
