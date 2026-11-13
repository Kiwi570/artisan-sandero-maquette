# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 21:14:27 · 4 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/couverture.html (étapes : fluidite, films, parcours)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261112-201016-rapide-cible-partiel` · version ?v=10
- Échecs : **3**
- À regarder : **2**
- Non lancé : **1**
- Contrôles passés : films d’ouverture (2), films de transition (2), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), mode calme (2), fluidité (2), défilement selon l’appareil (5)

## Passes de cette version (?v=10)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261112-195233-rapide-cible-partiel | rapide | /,/couverture.html | mesures | 2 | 15 | 0 | échecs |
| 20261112-195304-rapide-cible-partiel | rapide | /,/couverture.html | mesures | 0 | 15 | 0 | complet |
| 20261112-195444-rapide-cible | rapide | /,/couverture.html | toutes | 10 | 20 | 2 | échecs |
| 20261112-200258-rapide-cible-partiel | rapide | /,/couverture.html | fichiers, films, parcours, fluidite, mesures | 4 | 19 | 1 | échecs |
| **20261112-201016-rapide-cible-partiel** (celle-ci) | rapide | /,/couverture.html | fluidite, films, parcours | 3 | 2 | 1 | échecs |

## Échecs

### mode calme (3)

- **mode calme** — `/` — une boucle tourne encore (124 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

## À regarder

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.plan.plan--toit > div.toit > canvas.toit-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (10.2 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]

## Repères

- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2461 ms depuis le premier octet
- Ouverture / (390×844) : 2103 ms depuis le premier octet
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 569, tâche la plus longue 69 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms

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
