# Rapport d’audit

Projet : `artisan-sandero-maquette` · 12/11/2026 21:07:26 · 4 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/couverture.html (étapes : fichiers, films, parcours, fluidite, mesures)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261112-200258-rapide-cible-partiel` · version ?v=10
- Échecs : **4**
- À regarder : **19**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (7), films d’ouverture (2), films de transition (2), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), mode calme (2), fluidité (2), défilement selon l’appareil (5)

## Passes de cette version (?v=10)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261112-195233-rapide-cible-partiel | rapide | /,/couverture.html | mesures | 2 | 15 | 0 | échecs |
| 20261112-195304-rapide-cible-partiel | rapide | /,/couverture.html | mesures | 0 | 15 | 0 | complet |
| 20261112-195444-rapide-cible | rapide | /,/couverture.html | toutes | 10 | 20 | 2 | échecs |
| **20261112-200258-rapide-cible-partiel** (celle-ci) | rapide | /,/couverture.html | fichiers, films, parcours, fluidite, mesures | 4 | 19 | 1 | échecs |

## Échecs

### mode calme (3)

- **mode calme** — `/` — une boucle tourne encore (124 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

### fluidité (1)

- **fluidité** — `/` — 10 % d'images de plus de 50 ms, tâche la plus longue 80 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### numéro de version (1)

- **numéro de version** — ?v=10 est celui de la dernière livraison : à changer avant de livrer

### contraste sur image (15)

- **contraste sur image** — `/` — p.plongee-n:nth-of-type(1) > div.pc-ligne-mask > div.pc-ligne > span « 05 » — 1.13:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) > div.pc-ligne-mask > div.pc-ligne « 05 / 05 · SOUS LES TUILES » — 1.15:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre-mask > div.pc-titre > div.pc-mot > div.pc-lettre:nth-of-type(1) « L » — 1.64:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre-mask > div.pc-titre > div.pc-mot > div.pc-lettre:nth-of-type(2) « e » — 1.77:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(1) « c » — 1.22:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(2) « h » — 1.50:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(3) « e » — 1.69:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(4) « v » — 2.84:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(5) « r » — 1.97:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(6) « o » — 1.52:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(7) « n » — 1.57:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(8) « s » — 2.04:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(1) > div.pc-ligne « La charpente est diagnostiquée, renforcée ou » — 1.40:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(2) > div.pc-ligne « remplacée, et traitée contre les insectes et » — 1.37:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(3) > div.pc-ligne « la mérule. » — 1.32:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.plan.plan--toit > div.toit > canvas.toit-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (10.2 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]

## Repères

- Numéro de version des fichiers : ?v=10
- Journal v10 : 3 étape(s) notée(s), 42 min de travail pour 90 min de budget, 0 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2163 ms depuis le premier octet
- Ouverture / (390×844) : 2091 ms depuis le premier octet
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1373, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,parcours,fluidite
```
