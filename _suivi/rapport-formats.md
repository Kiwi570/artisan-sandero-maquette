# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 16:29:03 · 7 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **15 échec(s)**
- Passe : `20261112-152227-complet-partiel` · version ?v=1
- Échecs : **15**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : mesures (312), balayage (5), tient dans l’écran (8), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261111-184234-rapide-cible | rapide | / | toutes | 80 | 11 | 1 | échecs |
| 20261112-134004-rapide-cible | rapide | / | toutes | 36 | 14 | 1 | échecs |
| 20261112-142343-rapide-cible | rapide | /couverture,/zinguerie-charpente,/facades,/devis | toutes | 56 | 9 | 1 | échecs |
| 20261112-144311-standard | standard | toutes | toutes | 58 | 13 | 1 | échecs |
| 20261112-150325-standard | standard | toutes | toutes | 6 | 10 | 1 | échecs |
| **20261112-152227-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 15 | 0 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.une-info:nth-of-type(3) « Lun.–sam. 8 h–20 h · Devis gratuit » _(1000×560 normal, 844×390 sansJs, 1000×560 calme, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-grille > div > p.une-info:nth-of-type(4) « 01 76 29 26 34 · Lun.–sam. 8 h–20 h » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/couverture` — section#debut > div.rubrique-une-grille > div.rubrique-une-texte:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(1000×560 normal, 1000×560 sansJs, 1000×560 calme, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/zinguerie-charpente` — section#debut > div.zinc-grille > div.zinc-texte:nth-of-type(1) > p.une-info:nth-of-type(3) « Devis gratuit · lun.–sam. 8 h–20 h » _(1000×560 normal, 1000×560 sansJs, 1000×560 calme, 1000×560 sansWebgl)_

### textes qui se chevauchent (7)

- **textes qui se chevauchent** — `/` — div.une-texte:nth-of-type(2) > h1.une-titre.pose > em > span.mot:nth-of-type(3) « tuiles » — avec div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.chapo:nth-of-type(1) « Couverture, zinguerie, charpente, peinture et rava » _(1000×560 normal, 1000×560 calme, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.une-scene > div.une-texte:nth-of-type(2) > h1.une-titre.pose > span.mot:nth-of-type(5) « , » — avec div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.chapo:nth-of-type(1) « Couverture, zinguerie, charpente, peinture et rava » _(1000×560 normal, 1000×560 calme, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.une-scene > div.une-texte:nth-of-type(2) > h1.une-titre.pose > span.mot:nth-of-type(6) « une » — avec div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.chapo:nth-of-type(1) « Couverture, zinguerie, charpente, peinture et rava » _(1000×560 normal, 1000×560 calme, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.une-scene > div.une-texte:nth-of-type(2) > h1.une-titre.pose > span.mot:nth-of-type(7) « famille » — avec div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.chapo:nth-of-type(1) « Couverture, zinguerie, charpente, peinture et rava » _(1000×560 normal, 1000×560 calme, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.une-scene > div.une-texte:nth-of-type(2) > h1.une-titre.pose > span.mot:nth-of-type(8) « le » — avec div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.chapo:nth-of-type(1) « Couverture, zinguerie, charpente, peinture et rava » _(1000×560 normal, 1000×560 calme, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.une-scene > div.une-texte:nth-of-type(2) > h1.une-titre.pose > span.mot:nth-of-type(9) « sait. » — avec div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.chapo:nth-of-type(1) « Couverture, zinguerie, charpente, peinture et rava » _(1000×560 normal, 1000×560 calme, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/` — div#debut > div.une-scene > div.une-texte:nth-of-type(2) > h1.une-titre « Ce qui se passe sous les tuiles, une famille le sa » — avec div#debut > div.une-scene > div.une-cote:nth-of-type(3) > p.chapo:nth-of-type(1) « Couverture, zinguerie, charpente, peinture et rava » _(1000×560 sansJs, 1280×720 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/` — div.une-scene > div.une-cote:nth-of-type(3) > p.une-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Demander un devis gratuit » _(844×390 sansJs)_

### texte coupé (3)

- **texte coupé** — `/devis` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(2) > span.fpe__nom:nth-of-type(2) « Votre maison » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 calme, 1024×768 sansWebgl, 1000×560 calme, 1000×560 sansWebgl)_
- **texte coupé** — `/devis` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1024×768 calme, 1024×768 sansWebgl, 1000×560 calme, +3)_
- **texte coupé** — `/devis` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(5) > span.fpe__nom:nth-of-type(2) « Récapitulatif » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 calme, 1024×768 sansWebgl, 1000×560 calme, 1000×560 sansWebgl)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /couverture : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.
- Tient dans l'écran /facades : aucune section épinglée ou plein écran.
- Tient dans l'écran /zinguerie-charpente : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/couverture,/devis,/zinguerie-charpente --seulement=fichiers,mesures
```
