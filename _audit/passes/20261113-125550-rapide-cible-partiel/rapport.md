# Rapport d’audit

Projet : `artisan-sandero-maquette` · 13/11/2026 13:59:48 · 4 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur / (étapes : parcours, films, fluidite, mesures, ecran)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261113-125550-rapide-cible-partiel` · version ?v=14
- Échecs : **5**
- À regarder : **15**
- Non lancé : **1**
- Contrôles passés : mesures (7), films d’ouverture (2), films de transition (2), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), mode calme (2), tient dans l’écran (2), films des épinglages (1), fluidité (2), défilement selon l’appareil (5)

## Échecs

### la page défile pendant l’intro (1)

- **la page défile pendant l’intro** — `/` — 225 px après un glissement _(390×844 intro)_

### mode calme (4)

- **mode calme** — `/` — une boucle tourne encore (75 images par seconde) _(390×844 calme)_
- **mode calme** — `/` — une boucle tourne encore (80 images par seconde) _(1366×768 calme)_
- **mode calme** — `/` — animation en boucle toujours active : SPAN _(1366×768 calme)_
- **mode calme** — `/` — défilement adouci toujours actif _(1366×768 calme)_

## À regarder

### contraste sur image (13)

- **contraste sur image** — `/` — p.plongee-n:nth-of-type(1) > div.pc-ligne-mask > div.pc-ligne > span « 05 » — 1.04:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-n:nth-of-type(1) > div.pc-ligne-mask > div.pc-ligne « 05 / 05 · SOUS LES TUILES » — 1.54:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(1) « c » — 1.71:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(2) « h » — 1.78:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(3) « e » — 1.71:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(4) « v » — 1.98:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(5) « r » — 2.14:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(6) « o » — 1.85:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(7) « n » — 1.89:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.pc-titre > em:nth-of-type(2) > div.pc-mot > div.pc-lettre:nth-of-type(8) « s » — 2.81:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(1) > div.pc-ligne « La charpente est diagnostiquée, renforcée ou » — 1.45:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(2) > div.pc-ligne « remplacée, et traitée contre les insectes et » — 1.51:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — li#couche-5 > p.plongee-phrase:nth-of-type(2) > div.pc-ligne-mask:nth-of-type(3) > div.pc-ligne « la mérule. » — 1.41:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.plan.plan--toit > div.toit > canvas.toit-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### fluidité (1)

- **fluidité** — `/` — 3 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **bouton du mode calme** : aucune section ou aucun bouton [data-calme-bascule]

## Repères

- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 1526 ms depuis le premier octet
- Ouverture / (390×844) : 1470 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms

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
