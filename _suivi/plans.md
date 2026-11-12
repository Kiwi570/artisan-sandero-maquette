# Plans — Artisan Sandero · direction « Sous les tuiles »

Palette : chaux #f2ebe1 (fond), encre #22180f, tuile #bd522a (accent, boutons ; texte tuile foncé #9c4120 pour le contraste), écran #1b1c1e (sections sombres), liteau #e2b95c (fil, détails), zinc #8e979b.
Polices : Newsreader (titres, 500 et italique) · Schibsted Grotesk (texte et étiquettes, 500/700/800).
Plan de l'accueil : magazine. Voile : propre, rangs de tuiles (`formeVoile: "tuiles"`).

## Plan du site (v1 en gras)
- **Accueil** `/` — magazine du toit.
- **Couverture** `/couverture` — pose, rénovation, nettoyage, isolation, fenêtres de toit, matériaux. Ouverture : fond chaux, très grand titre « Couverture » à gauche, photo de pente en bandeau à droite qui se découvre rang par rang. Signature : le nuancier des matériaux (terre cuite ~50 ans, ardoise 75 ans, zinc ~40 ans, béton 30 à 50 ans) en cartes qui s'empilent comme des tuiles (empilement).
- **Zinguerie et charpente** `/zinguerie-charpente` — gouttières, chéneaux, noues, solins, cheminées ; charpente, traitements, signes à surveiller. Ouverture : fond écran sombre, photo zinc-soudure à droite, titre traversé par un cordon d'étain qui se trace. Signature : la charpente en plans de profondeur qui s'écartent au défilement (profondeur) et la liste des signes à cocher.
- **Peinture et façades** `/facades` — peinture façades, boiseries, toitures ; ravalement en 4 étapes ; supports et finitions. Ouverture : centrée, titre au-dessus d'un grand bandeau de façade révélé par un coup de taloche (masque). Signature : les quatre finitions d'enduit qui se recomposent quand on choisit un support (recomposition).
- **Devis et contact** `/devis` — ouverture compacte quadrillée de liteaux, formulaire en étapes repris du vrai formulaire (prestation, type de toiture, étages, échelle, adresse, coordonnées), horaires « ouvert maintenant » (lun.–sam. 8 h–20 h, Europe/Paris), adresse, téléphone, communes. Retour : la fiche se pose sur un liteau et reçoit un tampon « Demande reçue ».
- **404** — « Cette page a glissé du toit. »
- Non construites (v2 si le client veut) : À propos (le contenu famille est sur l'accueil), Actualité / conseils de pro, pages par commune (Saint-Leu-la-Forêt, Ermont, Eaubonne, Cormeilles-en-Parisis), sous-pages couverture séparées (regroupées sur Couverture).
- Menu : Couverture · Zinguerie et charpente · Peinture et façades · Devis et contact.

## Accueil (9 écrans ordinateur environ)
1. **Ouverture** (data-iris-centre sur le pan de tuiles) — titre « Ce qui se passe sous les tuiles, une famille le sait. », chapô, Devis gratuit, info clé lun.–sam. 8 h–20 h ; à droite le pan de tuiles (tuiles-face) au-dessus de la trame (liteaux-ecran). Objet : on soulève les tuiles à la souris ou au doigt (glissement horizontal), chaque tuile pivote sur son liteau et retombe avec son poids ; un clic laisse une tuile levée. data-grille="manipuler". Effet signature (profondeur).
2. **Sous la tuile** — scène épinglée (data-grille="scene") : on soulève les couches une à une au défilement : tuile → liteau → écran → isolant → chevron, chaque couche est une photo qui se lève comme une tuile et découvre la suivante, avec le métier qui s'en occupe. Profondeur.
3. **Les cinq métiers** — rubriques de magazine avec vraies photos ; puces de filtre (Toit, Gouttières, Façade, Charpente) qui recomposent la grille comme des tuiles (recomposition, Flip).
4. **Chantiers de l'entreprise** — galerie éditoriale asymétrique des vraies photos (drone, faîtage, liteaux, soudure, Velux), parallaxe et révélation en rideau.
5. **La méthode** — les six vraies étapes, chaque étape recouvre la précédente comme un rang de tuiles (empilement, module planches-empilees).
6. **De père en fils** — citation « Chez Artisan Sandero, la toiture c'est une histoire de famille. » en très grand ; depuis 2006, trois camions équipés, couvreurs harnachés, garantie décennale ; photos gilet et camion.
7. **Courrier des lecteurs** — les 9 vrais avis, colonnes de magazine, noms réels.
8. **Labels et marques** — Label Artisan, Qualibat, Garantie décennale, Toutes hauteurs ; Velux, Tollens, Sikkens, Maestria, Cimentol, Dalep.
9. **Zone et appel** — fond faitage-vue ; Taverny, Saint-Leu-la-Forêt, Ermont, Eaubonne, Cormeilles-en-Parisis ; ouvert maintenant ; Devis gratuit et téléphone.

## Grille wouahou
1. Manipuler : pan de tuiles soulevé à la main (accueil). Geste du métier : soulever une tuile pour voir dessous.
2. Intro qui devient la page : le logo glisse jusqu'au pan de tuiles (`versObjet`), les rangs de tuiles finissent de se poser.
3. Voile : rangs de tuiles qui recouvrent l'écran de haut en bas, puis se soulèvent rang par rang sur la page d'arrivée.
4. Fil : la trame des liteaux en pin, chaque section posée sur un liteau cloué (data-grille="fil") ; continue d'une page à l'autre.
5. Typo : titres « posés tuile par tuile » (mots qui pivotent sur leur arête haute et se recouvrent) sur chaque page ; cordon d'étain sous le titre de la zinguerie ; coup de taloche sur le titre des façades.
6. Scène : soulever les couches du toit (accueil) ; nuancier qui s'empile (couverture).
7. Retour : la demande de devis se pose sur un liteau et reçoit le tampon « Demande reçue ».
8. Effets modernes : profondeur (signature), recomposition, empilement ; chaque page intérieure en reprend au moins un.

## Effets propres (noms du plan, data-effet)
tuiles-levees, couches, metiers-recompose, methode-rangs, liteau-fil, titre-pose, cordon-etain, coup-taloche, nuancier, finitions, tampon-recu, voile-tuiles
