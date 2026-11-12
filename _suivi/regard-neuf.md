# Regard neuf de fin de projet : Artisan Sandero

12 novembre 2026. Ce regard est celui d'un directeur artistique et d'un client exigeant qui découvrent la maquette sans avoir vu sa construction. Il porte sur toutes les pages : accueil, Couverture, Zinguerie et charpente, Peinture et façades, Devis et contact, 404.

**Sources.**
- Les captures et les films de l'audit standard (passe de 15 h 43 à 15 h 59).
- Le rapport standard, le relevé, les plans et le regard DA sur l'accueil.
- La mosaïque de l'aperçu.
- Les planches du palmarès et les accueils des quatre fiches les plus récentes de la bibliothèque.
- Les vérifications faites sur la version actuelle (16 h) avec `node _audit/visiteur.mjs`.

Les corrections faites après l'audit ont été vérifiées sur la version actuelle :
- Les liens de devis mènent maintenant à `/devis?prestation=…#demande`.
- Les signes de la charpente se cochent.
- La bulle d'ouverture a été reprise.
- La rubrique des signes de gouttière est passée en tête de la page Zinguerie, avec la case « Elle déborde ».

**Abréviations des chemins** (depuis la racine du projet) :
- **C/** = `_audit/passes/20261112-144311-standard/captures/`
- **F/** = `_audit/passes/20261112-144311-standard/films/`
- **V/** = `_audit/visiteur/` (dossiers `regard-*` de ce regard, et rapport du test « vrai visiteur »)

**En bref.** Le système tient : magazine du toit, liteau cloué, palette chaux, terre cuite et pin, faits justes. Mais il ne reste qu'un seul vrai geste, la tuile de l'accueil, et il est petit. Les pages d'onglet sont le même gabarit en quatre couleurs. L'action principale se termine sur un coin de tampon hors de l'écran.

---

## Les cinq questions

### 1. Qu'est-ce que le visiteur peut toucher ?

- **Accueil :**
  - soulever les tuiles du pan droit de l'ouverture (glisser ou cliquer) ;
  - tirer les cinq couches vers le haut (« Tirez la couche vers le haut ») ;
  - filtrer les cinq métiers (Tout, Toit, Gouttières, Façade, Charpente).

  La galerie des chantiers se fait défiler, mais on ne la touche pas. Les pastilles des communes (« Taverny » remplie en terre cuite, puis Saint-Leu-la-Forêt…) ont l'air de boutons, mais ce sont de simples éléments de liste : elles ne font rien.
- **Couverture : rien.** On trouve un bouton de devis en tête, cinq liens « Devis pour ce travail » et un nuancier qui s'empile au défilement, mais rien à manipuler. C'est la seule page d'onglet sans objet à toucher (la grille wouahou dit bien « accueil et 2 autres pages »).
- **Zinguerie et charpente :**
  - cocher cinq signes de gouttière et six signes de charpente, joints ensuite à la demande de devis (vérifié : « 2 signes cochés : ils seront joints à la demande », `V/regard-charpente-1366x768/etape-7.png`).

  Les sept « pièces » en plaques de zinc biseautées (Gouttières, Chéneaux, Noues…) ont l'air de boutons, mais ne sont pas cliquables.
- **Peinture et façades :**
  - toucher une des quatre finitions d'enduit, et la grille se recompose ;
  - ouvrir la question « Le ravalement est-il obligatoire ? ».
- **Devis et contact :**
  - le formulaire en cinq étapes, avec des cartes de métier et des puces ;
  - le lien « Itinéraire » ;
  - le téléphone.
- **404 :** deux boutons. Rien d'autre.

### 2. Qu'est-ce qui relie les pages entre elles ?

- **Intro (premier chargement de chaque page)** :
  - **Sur l'accueil**, elle est juste. Le logo devient une tuile qui tombe dans un trou du toit, où l'on voit la fente et le liteau jaune (`F/ouverture-1366.png`, de 0,45 à 1,4 s).
  - **Sur les quatre pages d'onglet**, c'est la même intro, sans rapport avec le métier. Pendant 1,3 à 1,5 s, le logo glisse seul sur un fond crème vide, puis un iris rond s'ouvre (`F/ouverture-couverture-1366.png`, `F/ouverture-zinguerie-charpente-1366.png`, `F/ouverture-devis-1366.png`).
  - **Sur Façades**, l'écran est presque blanc à 1 358 ms, puis la page apparaît d'un bloc. L'iris s'ouvre sur le bouton, pas sur la façade (`F/ouverture-facades-1366.png`, `F/ouverture-facades-390.png`).
  - L'iris est le voile d'agence-ae.
- **Voile (changement de page)** :
  - Des rangs de vraies tuiles en terre cuite tombent, une étiquette (logo et nom de la page) reste environ 1 s, puis les rangs se soulèvent par le bas (`F/transition-couverture-vers-zinguerie-charpente-1366.png`). C'est dans le motif, et c'est le meilleur lien du site.
  - Mais c'est long : la page Couverture n'est posée qu'à 2,9 s (`F/transition-vers-couverture-1366.png`).
  - Sur Couverture, le voile de tuiles se soulève, puis la pente se découvre à nouveau rang par rang sous une seconde couverture de tuiles. Le même motif joue deux fois en deux secondes.
- **Fil** : le liteau en pin cloué sous chaque surtitre « Rubrique 0X ».
  - Il donne bien une identité, mais c'est une barre décorative identique de 1 050 px, répétée cinq à sept fois par page. On dirait une règle de cahier.
  - Il ne porte aucune information et ne mène nulle part : pas de numéro qui avance, pas de lien vers la page suivante.
  - La « trame des liteaux qui continue d'une page à l'autre » promise par les plans ne se perçoit pas.
- **Ce qui relie vraiment** :
  - la bande finale sombre « DEVIS GRATUIT · ARTISAN SANDERO », identique sur Couverture, Zinguerie et Façades ;
  - la mention « Joignable maintenant, jusqu'à 20 h ».

  C'est de la cohérence, pas un lien.

### 3. Que se passe-t-il quand il demande un devis ?

Chemin testé sur la version actuelle, en 1440 × 900 : depuis Couverture, « Demander un devis couverture » (`V/regard-devis-envoi-1440x900/`).

- **Arrivée :** `/devis?prestation=couverture#demande`, avec Couverture déjà cochée. Mais :
  - l'écran arrive sur environ 200 px de crème vide sous l'en-tête ;
  - « Continuer » est sous la ligne de flottaison (`etape-2.png`) ;
  - il faut donc défiler, puis appuyer sur « Continuer » alors que le métier est déjà choisi.
- **Parcours :** 16 gestes et 23 s, de la page Couverture jusqu'à l'envoi. Le récapitulatif demande encore un défilement pour atteindre « Envoyer la demande ».
- **Retour après l'envoi :**
  - L'écran ne bouge pas (y = 950). Le visiteur voit « Nouvelle demande », le coin d'un tampon « REÇU » et une grande moitié gauche vide (`V/regard-devis-envoi-1440x900/etape-18.png`).
  - Il doit remonter pour lire « Demande reçue. Démonstration : rien n'a été envoyé. Sur le site en ligne, l'entreprise vous recontactera » (`V/regard-devis-1440x900/etape-18.png`).
  - Le résumé oublie le nombre d'étages, le téléphone et la ville.
  - Aucun délai n'est annoncé, ni ce qui se passe ensuite.
  - Sur téléphone, le même défaut était relevé par le test visiteur, avec en plus un débordement qui coupait le bouton Menu (`V/devis-390x844/etape-20.png`). La version actuelle sur téléphone n'a pas été revérifiée.
- **Le tampon « Reçu » vient de la bibliothèque** : qd2a et agence-ae ont le même. La « fiche posée sur un liteau » se réduit à une barre dorée au-dessus du formulaire. Le retour n'a rien d'un couvreur.

### 4. Qu'est-ce qui est spectaculaire au premier défilement de l'accueil ?

**Pas grand-chose.**

Au chargement, le moment fort est la tuile levée : elle mesure environ 200 px dans le coin bas droit à 1366 px, et c'est un rectangle plat posé sur un toit en perspective (`V/regard-accueil-1366x768/etape-1.png`).

Au premier défilement, on quitte le toit pour une section sombre. À droite, une carte de 580 × 390 px change d'image (tuile, liteau, écran, isolant, chevrons : `C/accueil-1366-02.png`, `C/accueil-1366-03.png`). C'est propre, mais c'est un diaporama dans un cadre, pas le toit qui s'ouvre.

| Page | Familles d'effets vues | Bouge au défilement après l'ouverture ? |
|---|---|---|
| Accueil | (1) manipulation en profondeur (tuile) ; (2) scène épinglée à progression (5 couches) ; (3) recomposition au clic (filtres métiers) ; galerie horizontale épinglée ; titres posés mot à mot | Oui : couches, galerie (générique selon l'audit), méthode en rangs (l'empilement ne se lit pas : on voit une grille 3 × 2 qui apparaît, `C/accueil-1366-08.png`) |
| Couverture | masque rang par rang (ouverture) ; empilement collant (nuancier) | Oui : le nuancier, seul effet de défilement de la page |
| Zinguerie et charpente | tracé (cordon d'étain, ouverture) ; profondeur discrète (charpente) ; cases à cocher | Presque rien (rapport : « aucun effet ScrollTrigger » ; « signes-gouttière ne bouge ni au défilement ni tout seul ») |
| Peinture et façades | masque (coup de taloche, **invisible** à l'arrivée) ; cascade (préparation) ; recomposition au clic (finitions) | Non (« finitions ne bouge ni au défilement ni tout seul ») |
| Devis | tracé (pointillés du schéma) ; parallaxe de la photo ; tampon | Non |

**Verdict :**
- Trois familles sur l'accueil : oui, sur le papier.
- Au moins une par page d'onglet : oui, sur le papier. Mais sur Zinguerie et Façades, elles se jouent toutes au chargement, et sur Façades celle du chargement ne se voit pas.
- Rien n'est spectaculaire au premier défilement.

### 5. Chaque page a-t-elle sa signature après l'ouverture ?

**Non : les pages se ressemblent.**

Les quatre pages d'onglet suivent le même ordre :
1. surtitre « Rubrique 0X » et liteau ;
2. grand titre en Newsreader à gauche, chapô à droite ;
3. rangée de trois ou quatre vraies photos légendées « · chantier de l'entreprise » ;
4. section sombre ;
5. même bande finale en tuiles brunes ;
6. même pied de page.

La seule signature lisible après l'ouverture est le nuancier empilé de Couverture. Encore se lit-il comme des cartes empilées : la moitié droite de chaque carte est vide.

**Les ouvertures comparées :**

| Page | Composition | Image | Effet à l'arrivée |
|---|---|---|---|
| Accueil | Photo plein cadre, titre à gauche, carte en bas à gauche, bulle à droite | Toit vu du faîtage, pavillons (générée) | Logo devenu tuile, tuile levée |
| Couverture | Fond chaux, titre géant à gauche, **photo en demi-page à droite** | Pente de tuiles orange et Velux, pavillons (générée) | Pente découverte rang par rang (après le voile de tuiles) |
| Zinguerie et charpente | Fond sombre, titre à gauche, **photo en demi-page à droite** | Fer à souder sur gouttière, tuiles orange (générée) | Cordon d'étain qui se trace en 1,5 s, fin et blanc |
| Peinture et façades | Titre centré au-dessus d'un bandeau | Pavillon crème à volets verts, tuiles orange (générée) | Coup de taloche invisible |
| Devis | Titre à gauche rayé de bandes jaunes, carte sombre à droite | Aucune | Iris |
| 404 | Titre à gauche, **photo encadrée à droite** | Tuile dans l'herbe (générée) | Aucun |

Quatre ouvertures sur six placent le titre à gauche et l'image à droite. Couverture et Zinguerie ont la même grille en deux couleurs. Cinq images sur six viennent de la même famille : pavillon, tuiles orange, arbres, lumière de fin d'après-midi.

---

## Ressemblance avec les plus récentes de la bibliothèque

Oui, par le plan et les modules. On retrouve l'ouverture de jardins-hacienda-2, locomponairo, qd2a et agence-ae (titre serif à gauche avec un mot en italique de couleur sur une image générée plein cadre, objet à manipuler à droite avec sa pastille d'aide, ligne d'état à pastille verte), le Newsreader et le « soleil réel à l'heure du lieu » d'agence-ae, et le formulaire en étapes tamponné « Reçu » de qd2a et agence-ae. Seuls l'objet, la tuile, et la palette l'en distinguent.

---

## Notes sur les huit critères (`_audit/regard-da.md`)

Le critère 7 est mesuré à la barre du palmarès par rôle : ouverture, services, galerie, étapes, contact, page 404.

| Page | 1 Fidélité | 2 Signature | 3 Images | 4 Compo. | 5 Rythme | 6 Typo | 7 Niveau | 8 Agir | Moy. | En une ligne |
|---|---|---|---|---|---|---|---|---|---|---|
| Accueil | 4 | 3 | 3 | 3 | 4 | 3 | 3 | 4 | 3,4 | Vrai lieu, faits justes ; tuile de 200 px plate dans un coin ; « La tuile » en image plate ; heure coupée |
| Couverture | 3 | 3 | 3 | 3 | 3 | 4 | 2 | 4 | 3,1 | Rien à toucher ; nuancier à moitié vide, tuile romane au lieu de la mécanique ; photos reprises de l'accueil |
| Zinguerie et charpente | 3 | 3 | 3 | 3 | 4 | 4 | 2 | 4 | 3,3 | Signes à cocher : bonne idée ; cordon d'étain trop fin ; comble refait de l'accueil pour illustrer des signes d'alerte |
| Peinture et façades | 3 | 2 | 3 | 3 | 4 | 3 | 2 | 4 | 3,0 | Taloche invisible, finitions beiges toutes pareilles, grille cassée sur téléphone |
| Devis et contact | 4 | 2 | 3 | 2 | 3 | 3 | 3 | 4 | 3,0 | Vrai formulaire ; bandes qui rayent le titre, vide avant le formulaire, retour hors de l'écran |
| 404 | 3 | 2 | 4 | 3 | 4 | 4 | 2 | 4 | 3,3 | Belle image juste, mais statique et encadrée ; le palmarès fait des scènes plein écran |

**Selon la règle de la grille, aucune page ne passe.** L'accueil est à 3,4, sous 3,5. Chaque autre page a au moins un 2.

En pratique, deux choses sont à refaire :
- la signature des pages d'onglet ;
- le retour du devis.

Le reste s'ajuste.

---

## Ce qu'un client exigeant ou un directeur artistique relèverait

Du plus grave au moins grave. Pour chaque point : la page, la taille, la capture, le constat, puis quoi faire.

### Grave : à refaire

1. **Les pages d'onglet n'ont pas de signature propre.**
   - *Où :* Couverture, Zinguerie, Façades · 1366 et 390. Captures `C/couverture-1366-02.png`, `-07.png`, `-08.png` ; `C/zinguerie-charpente-1366-02.png`, `-06.png` ; `C/facades-1366-04.png`, `-06.png`.
   - *Constat :* même gabarit, même rangée de photos, même bande finale. Rien à toucher sur Couverture. Rien ne bouge au défilement sur Zinguerie ni sur Façades.
   - **À faire : un geste du métier, manipulable, par page, joué sur l'image d'ouverture elle-même.**
     - **Couverture.** Un démoussage à la main : la pente d'ouverture arrive moussue et grise, le doigt ou la souris fait réapparaître la terre cuite. Ce geste prolonge le « Conseil de couvreur » sur le démoussage. À défaut, le nuancier peut changer le matériau de cette même pente (terre cuite, ardoise, zinc, béton) avec sa durée de vie.
     - **Zinguerie.** Souder en glissant le long du joint de la gouttière d'ouverture : l'étain coule, brille, puis refroidit. Ou bien, au défilement, la gouttière déborde sous l'averse, et l'eau s'arrête quand on coche « Elle déborde ».
     - **Façades.** Passer la taloche à la main sur la façade : avant (enduit gris et fissuré), après (enduit neuf). Puis la finition choisie se pose sur cette même façade, au lieu de quatre vignettes.
     - **Bande finale.** Elle prend la matière de la page (zinc, enduit) au lieu des mêmes tuiles brunes.

2. **Le geste de l'accueil est trop petit et ne suit pas la perspective. Le premier défilement n'ouvre pas le toit.**
   - *Où :* accueil · 1366, 768, 390. Captures `V/regard-accueil-1366x768/etape-1.png`, `V/regard-tablette-768x1024/etape-1.png`, `V/regard-accueil-390x844/etape-1.png`, `C/accueil-1366-02.png`.
   - *Constat :*
     - La tuile levée est un rectangle orthogonal d'environ 200 px, collé sur un pan dont les rangs fuient vers le faîtage.
     - À 768, la carte d'intro la recouvre à moitié et la bulle se pose dessus.
     - Sur téléphone, son ombre est une grosse tache sombre et floue, qui ne suit pas la lumière de la photo.
   - **À faire :**
     - Déformer la tuile et son trou selon la perspective du pan (trapèze, rangs du premier plan, 300 à 400 px de large), avec une ombre courte du côté opposé au soleil de la photo.
     - Au premier défilement, faire se soulever les rangs **du toit de l'ouverture lui-même**, en plein écran : les tuiles, puis la trame des liteaux jaunes sur l'écran noir (le motif fort des vraies photos pose-tuiles-orange et fenetre-toit-nouvellement-posee), puis l'isolant et les chevrons. Le titre reste en place.
     - La section « Cinq couches » devient alors cette scène, au lieu d'une carte dans un fond sombre.

3. **Le retour de l'action principale est raté.**
   - *Où :* devis · 1440, et 390 d'après le test visiteur. Captures `V/regard-devis-envoi-1440x900/etape-18.png`, `V/regard-devis-1440x900/etape-18.png`, `V/devis-390x844/etape-20.png`.
   - *Constat :* après l'envoi, l'écran reste sur « Nouvelle demande » et le coin du tampon. Le titre et le résumé sont plus haut. Le tampon « REÇU » est le module de qd2a et d'agence-ae.
   - **À faire :**
     - Ramener l'écran sur la fiche.
     - Faire de la demande la tuile qui comble le trou vu à l'ouverture de l'accueil : la fiche se plie en tuile et se pose dans le rang, qui se referme. Ajouter « Votre demande est posée ».
     - Donner la suite concrète : qui rappelle et sous quel délai. **Le délai est à faire confirmer par le client** : le relevé n'en donne aucun.
     - Afficher le résumé complet : métier, toiture, étages, adresse, ville, téléphone.

4. **L'intro est la même sur chaque page d'onglet, et sur Façades on ne voit rien.**
   - *Où :* Couverture, Zinguerie, Façades, Devis · 1366 et 390. Captures `F/ouverture-couverture-1366.png`, `F/ouverture-zinguerie-charpente-1366.png`, `F/ouverture-facades-1366.png`, `F/ouverture-facades-390.png`, `F/ouverture-devis-1366.png`.
   - *Constat :* 1,3 à 1,5 s de logo seul sur un fond crème vide, puis un iris rond. Sur Façades, l'écran est presque blanc, puis l'iris s'ouvre sur le bouton.
   - **À faire :**
     - Ramener l'étape du logo à 0,4 s au plus sur les pages d'onglet.
     - Ouvrir par le motif de chaque page :
       - Couverture : les rangs se posent du bas vers le haut, plutôt que de se soulever une deuxième fois après le voile ;
       - Zinguerie : le cordon d'étain traverse l'écran ;
       - Façades : la taloche balaie l'écran et découvre la façade, au-dessus de la ligne de flottaison.
     - Supprimer l'iris.

5. **Les liens de devis atterrissent mal.**
   - *Où :* devis · 1440 et 390. Captures `V/regard-devis-envoi-1440x900/etape-2.png`, `V/regard-devis-arrivee-390x844/etape-0.png`.
   - *Constat :* environ 200 px de vide sous l'en-tête, « Continuer » hors de l'écran, et le métier, déjà choisi, demande quand même « Continuer ». 16 gestes de la page Couverture à l'envoi.
   - **À faire :**
     - Caler l'ancre sur le haut de la fiche, juste sous l'en-tête.
     - Quand la prestation arrive dans l'adresse, ouvrir directement l'étape 2 en rappelant « Couverture ✓ (modifier) ».
     - Garder « Continuer » et « Envoyer la demande » collés en bas de la fiche à l'écran.

6. **Des images reviennent d'une page à l'autre, et l'une d'elles contredit son texte.**
   - *Où :* accueil, Zinguerie, Couverture, Devis · toutes tailles. Captures `C/accueil-1366-03.png` et `C/zinguerie-charpente-1366-05.png`, `C/couverture-1366-07.png` et `C/accueil-1366-06.png`, `C/devis-1366-02.png` et `C/accueil-1366-09.png`.
   - *Constat :*
     - Le même comble refait (parquet, murs vert d'eau, Velux) illustre « Les chevrons » sur l'accueil et « Les signes qui doivent alerter » sur Zinguerie. Une charpente impeccable sous des signes d'alerte : le client le verra.
     - Les quatre photos de « Couvertures refaites par l'équipe » sont déjà dans la galerie de l'accueil.
     - Le gilet qui montre la gouttière sert deux fois (accueil et devis), le gilet à genoux aussi (méthode et Couverture).
     - Pendant ce temps, **la photo du camion floqué « Artisan Sandero couverture · peinture · zinguerie », que le relevé dit précieuse et que les plans prévoyaient dans « De père en fils », n'est utilisée nulle part.**
   - **À faire :**
     - Charpente : une scène générée de vieille charpente en diagnostic (chevrons noircis, auréole d'humidité, sciure au sol, lampe frontale), ou la vraie photo professionnel-batisse (charpente ouverte sous les nuages).
     - Couverture : des photos absentes de l'accueil (renovation-toiture-professionnel, pose-isolant, changement-cheneaux).
     - « De père en fils » : ajouter le camion, recadré serré sur le flocage.

### Moyen : à corriger avant de montrer

7. **Les bandes de liteaux rayent le titre de la page Devis.**
   - *Où :* devis · 1366 et 390. Captures `V/regard-devis-arrivee-1366x768/etape-0.png`, `V/regard-devis-arrivee-390x844/etape-0.png`.
   - *Constat :*
     - Six bandes jaunes horizontales passent derrière « Votre chantier, en quelques étapes » et le chapô, comme des lignes de cahier.
     - Le « quadrillé de liteaux » des plans n'existe pas.
     - Environ 150 px de vide précèdent la fiche.
     - « 8 H / À 20 H » est coupé en deux lignes dans la carte sombre.
   - **À faire :**
     - Une vraie trame (liteaux horizontaux et chevrons verticaux, en pin sur écran noir) dans la seule moitié droite, derrière la carte du téléphone. Le texte reste sur fond chaux uni.
     - Retirer le filet et le vide.
     - Écrire « Du lundi au samedi, 8 h – 20 h » sur une ligne.

8. **Les finitions de Façades ne se distinguent pas, et la grille casse sur téléphone.**
   - *Où :* Façades · 1366 et 390. Captures `C/facades-1366-05.png`, `C/facades-390-04.png`, `C/facades-390-05.png`.
   - *Constat :*
     - Quatre grains beiges presque identiques.
     - Sur téléphone, « Lisse » est seule dans une petite case, puis viennent deux carrés.
     - Les étiquettes « Illustration générée » sur deux lignes recouvrent les boutons (rapport : « élément recouvert »).
   - **À faire :**
     - Une bande de quatre échantillons égaux, éclairés en lumière rasante pour que le relief se lise. Sur téléphone, une rangée de quatre cases égales, à faire glisser.
     - Une seule mention, « Illustrations générées », pour le groupe.

9. **Le nuancier de Couverture est à moitié vide, avec une tuile fausse.**
   - *Où :* Couverture · 1366 et 390. Captures `C/couverture-1366-04.png`, `-06.png`, `C/couverture-390-06.png`.
   - *Constat :*
     - La moitié droite de chaque carte est vide, avec une seule ligne, parfois redondante (« Selon le modèle, de 30 à 50 ans. » sous « 30 à 50 ans environ »).
     - La terre cuite est une tuile romane, alors que les pavillons du relevé et l'ouverture de l'accueil ont des tuiles mécaniques.
     - Sur téléphone, l'en-tête « Ardoise » disparaît sous « Zinc ».
   - **À faire :**
     - Remplir la moitié droite avec les faits du relevé : où on la pose, son entretien (démoussage au printemps ou à l'automne), ce que l'équipe y fait.
     - Une tuile mécanique en terre cuite.
     - Un décalage de 56 px par carte, pour que chaque nom reste lisible dans la pile.

10. **Sur téléphone, la scène des couches cache son surtitre et laisse un trou.**
    - *Où :* accueil · 390. Captures `V/regard-couches-390x844/etape-2.png`, `etape-4.png`.
    - *Constat :* « RUBRIQUE 01 · SOUS LA TUILE » passe sous l'image (« …UE 01 · SOUS LA TUILE »), puis vient une bande sombre vide d'environ 180 px sous le texte.
    - **À faire :** placer le surtitre au-dessus de l'image épinglée, et réduire la hauteur de la scène, ou y loger le lien vers la page du métier.

11. **L'image « La tuile » est une texture plate, mise en grand.**
    - *Où :* accueil · 1366 et 390. Captures `C/accueil-1366-02.png`, `V/regard-couches-390x844/etape-2.png`. Le rapport la signale : « photo faible affichée en grand, 31 % de l'écran ».
    - **À faire :** recadrer les tuiles du premier plan de l'ouverture (mêmes tuiles mécaniques, même lumière), ou prendre la vraie photo pose-tuiles-orange.

12. **De fausses commandes.**
    - *Où :* Zinguerie et accueil · 1366 et 390. Captures `V/regard-zinc-1366x768/etape-4.png`, `C/accueil-1366-12.png`.
    - *Constat :* les plaques de zinc et les pastilles des communes ont l'air de boutons et ne font rien.
    - **À faire :** les faire agir, ou leur donner l'allure d'un simple texte :
      - une pièce touchée montre où elle se trouve sur une gouttière en coupe ;
      - une commune touchée s'allume sur le schéma de la page Devis, avec « Diagnostic à Ermont ».

13. **Les photos de zinc et de ravalement laissent des trous.**
    - *Où :* Zinguerie et Façades · 1366. Captures `C/zinguerie-charpente-1366-02.png`, `C/facades-1366-04.png`.
    - *Constat :* trois photos sur quatre colonnes pour le zinc, deux sur quatre pour le ravalement. Le reste de la ligne est vide. Les légendes de Façades sont à 2,1:1 de contraste.
    - **À faire :** étendre les photos sur toute la largeur, ou ajouter la soudure en gros plan, le pliage de chéneau ou le camion. Passer les légendes à 4,5:1.

14. **Hors sujet : la tôle à joints debout pour « Votre gouttière vous fait signe ? ».**
    - *Où :* Zinguerie · 1366 et 390. Captures `V/regard-zinc-1366x768/etape-2.png`, `C/zinguerie-charpente-390-03.png`.
    - *Constat :* c'est un bardage de couverture, pas une gouttière.
    - **À faire :** les vraies photos changement-cheneaux ou creation-cheneaux recadrées, ou une gouttière générée qui déborde sous l'averse, contre un enduit clair.

15. **L'ouverture de Façades ne montre pas le pavillon du relevé.**
    - *Où :* Façades · 1366. Capture `C/facades-1366-01.png`, `-02.png`.
    - *Constat :* une maison de campagne à volets bois vert sauge, avec lucarne et jardin anglais au couchant. Le relevé décrit des pavillons en enduit clair, souvent à volets roulants. La façade est déjà finie : il n'y a rien à ravaler.
    - **À faire :** générer le pavillon du relevé (enduit crème, volets roulants, haie), avec un échafaudage sur une moitié. C'est la base du geste avant/après du point 1.

16. **La ligne de chiffres de « De père en fils » est incohérente.**
    - *Où :* accueil · 1366 et 390. Captures `C/accueil-1366-09.png`, `C/accueil-390-07.png`.
    - *Constat :* « 3camions équipés » est sur la même ligne, sans espace. « Toutes hauteurs » tient sur deux lignes, et sa légende le répète. « 10 ans · Garantie décennale » est une tautologie.
    - **À faire :** quatre cases de même forme, un chiffre et une légende :
      - « 2006 · création à Taverny » ;
      - « 3 · camions équipés » ;
      - « Père et fils · sur chaque chantier » ;
      - « Décennale · couvreurs harnachés ».

17. **L'accueil à 768 est encombré.**
    - *Où :* accueil · 768. Capture `V/regard-tablette-768x1024/etape-1.png`.
    - *Constat :* le tiers haut est une brume blanche vide, la carte recouvre la tuile et la bulle la chevauche. Le rapport relève aussi un chevauchement avec le bouton de devis.
    - **À faire :** à cette taille, la carte passe sous l'image comme sur téléphone, et le trou monte dans le tiers droit, au-dessus.

18. **La galerie des chantiers déborde et laisse un vide.**
    - *Où :* accueil · toutes tailles. Captures `C/accueil-1366-06.png`, `-07.png` ; `F/epinglage-1.png`.
    - *Constat :*
      - Débordement horizontal de 320 à 1 920 px (rapport).
      - Bande vide d'environ 150 px sous la piste.
      - Première photo coupée à gauche.
      - « Liteaux neufs » montre encore les jambes et les baskets.
      - La grille wouahou la classe « galerie générique ».
    - **À faire :**
      - Couper la piste à la largeur de la page.
      - Recadrer « Liteaux neufs » sous les pieds.
      - Mieux : poser les photos dans la trame des liteaux, chaque photo étant une tuile qui se soulève au survol, au lieu d'un défilement horizontal générique.

19. **Des répétitions de libellés.**
    - *Où :* accueil, Couverture · 1366. Captures `C/accueil-1366-04.png`, `-05.png`, `C/couverture-1366-02.png`, `C/accueil-1366-06.png`.
    - *Constat :*
      - « Lire la rubrique » ×5, avec des cartes de hauteurs inégales : Zinguerie et Peinture s'arrêtent plus haut que leurs voisines.
      - « Devis pour ce travail → » ×5.
      - « · Chantier de l'entreprise » sous chaque photo, neuf fois.
      - « Neuf avis… tous à cinq étoiles » répété dans le pavé « 9 avis · tous à cinq étoiles ».
    - **À faire :**
      - Des liens qui disent où ils mènent (« Gouttières et cheminées → », « Devis démoussage → »).
      - Des cartes de même hauteur.
      - Dire une seule fois « photos de l'équipe », dans le chapô.

### Mineur : finitions

20. **L'heure est coupée en deux dans la bulle.**
    - *Où :* accueil · 1366 et 768. Captures `V/regard-accueil-1366x768/etape-1.png`, `V/regard-tablette-768x1024/etape-1.png`.
    - *Constat :* « 16 h / 10 », « 16 h / 16 ». C'est la même idée de « soleil réel » qu'agence-ae, et le test visiteur la juge sans intérêt pour une cliente.
    - **À faire :** des espaces insécables ; ou plutôt retirer cette ligne de la bulle de devis et la mettre en crédit discret de l'illustration.

21. **Des mentions « Illustration générée » flottantes et des boutons coupés sur téléphone.**
    - *Où :* Couverture, Zinguerie · 390 et 320. Captures `C/couverture-390-02.png`, `C/zinguerie-charpente-390-05.png`. Rapport : textes qui se chevauchent, texte coupé.
    - *Constat :*
      - Une mention flotte sur le liteau de la rubrique 01 de Couverture.
      - Celle de la charpente chevauche la bande « DEVIS GRATUIT ».
      - « Demander un diagnostic de charpente » est coupé.
    - **À faire :** caler les mentions dans le coin intérieur de leur image, et faire passer le bouton sur deux lignes.

22. **« Diagnostic gratuit » n'est pas dans le relevé.**
    - *Où :* accueil (bulle), zone · toutes tailles.
    - *Constat :* le relevé ne dit gratuit que le devis.
    - **À faire :** faire confirmer par le client, sinon écrire « Devis gratuit, après visite ».

23. **« Primaire d'accrochage sur la tuile » est rangé dans la préparation d'une façade.**
    - *Où :* Façades · 1366. Capture `C/facades-1366-02.png`.
    - **À faire :** séparer les préparations « Façade et boiseries » et « Toiture », ou titrer « Avant les deux couches (façade, boiserie ou tuile) ».

24. **La casse des noms des avis change d'un avis à l'autre.**
    - *Où :* accueil · 1366. Capture `C/accueil-1366-10.png`, `-11.png`.
    - *Constat :* « Joseph Sebag » est remis en forme, mais pas « phil giard », « Kim ono », « agnes » ni « rayane ».
    - **À faire :** une seule règle : tels que publiés, ou tous avec une majuscule initiale.

25. **« Mentions légales · à compléter » et « Politique de confidentialité · à compléter » en pied de chaque page.**
    - *Où :* toutes les pages · toutes tailles. Capture `C/accueil-1366-13.png`.
    - **À faire :** rédiger les mentions avec le relevé (HORTICA DANY, SIRET 492 427 893 00044, RCS, TVA, directeur de publication), avec « Médiateur de la consommation : à désigner ».

26. **La 404 est sage.**
    - *Où :* 404 · 1366 et 390. Captures `V/regard-404-1366x768/etape-1.png`, `C/404-390-01.png`.
    - *Constat :* photo encadrée, titre à gauche, comme Couverture. La tuile est romane. Le palmarès fait des scènes plein écran (surffm, sequoia, qd2a).
    - **À faire :** une image plein cadre. À l'arrivée, la tuile mécanique glisse du toit dans l'herbe, et le visiteur peut la remettre dans son trou d'un geste : « On la remet en place », le texte le dit déjà.

27. **Des petits textes et des contrastes faibles.**
    - *Où :* accueil · 390 et 1366 ; Zinguerie · 1366.
    - *Constat :*
      - Surtitre d'ouverture à 11,5 px sur téléphone (rapport).
      - « tuiles » et « sait. » à 2,8:1 sur la photo à 1366.
      - « Aucun signe coché : le devis reste ouvert. » en gris clair sur la photo du comble (`V/regard-charpente-1366x768/etape-2.png`).
    - **À faire :** 13 px au moins pour le surtitre, un léger voile chaux sous le titre, et la phrase sur la plaque des cases.

28. **Une étiquette chevauche sa voisine à 320 px.**
    - *Où :* accueil · 320 (rapport).
    - *Constat :* « Garantie décennale » chevauche « Toutes hauteurs » dans la rangée des labels.
    - **À faire :** une grille 2 × 2 à colonnes fixes.

29. **Des écarts avec le vrai formulaire, à faire valider.**
    - *Où :* devis.
    - *Constat :* le champ « échelle » du formulaire actuel est devenu « Hauteur sous gouttière ». Le numéro 06 26 88 62 93 du camion n'est pas repris, ce qui est juste tant que le client ne l'a pas confirmé. Qualibat est affiché sans numéro.
    - **À faire :** les mettre dans la liste de questions au client.

---

## Ce qui est réussi, à garder

- **L'idée et les faits.** « Ce qui se passe sous les tuiles, une famille le sait. », sur le toit vu du faîtage au-dessus des pavillons et de la forêt. Depuis 2006, de père en fils, les neuf vrais avis, les cinq communes, les vraies durées de vie, et la question du ravalement « obligatoire » traitée honnêtement.
- **Le voile de tuiles en terre cuite** entre les pages, et le logo qui devient une tuile sur l'accueil : le bon motif, à garder et à raccourcir.
- **Les signes à cocher joints au devis** (gouttière et charpente) : la meilleure idée d'usage du site, à étendre à Couverture (tuiles cassées, mousse, fuite au plafond) et à Façades (fissures, salissures, écaillage).
