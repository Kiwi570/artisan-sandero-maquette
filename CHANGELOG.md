# Ce qui a changé

Chaque version ajoute sa partie en tête de ce fichier, construite en comparant l'archive précédente et la nouvelle, jamais de mémoire.

## v10 — le diagnostic (accueil) et le toit pièce par pièce (Couverture)

- **Accueil, nouvelle rubrique 01 « Ce que vous voyez d'en bas »**, juste après la plongée.
  - Le dessin : la coupe d'un pavillon la nuit, dessinée en SVG. Le toit est coupé et montre les cinq couches de la plongée.
  - Huit symptômes, à choisir sur le dessin ou dans la liste : tache au plafond, mousse, gouttière qui déborde, eau près de la cheminée, combles humides, froid l'hiver, toit qui se creuse, façade fissurée.
  - Chaque symptôme a sa trace animée : la tuile glisse et les gouttes traversent les couches jusqu'à la tache, la mousse pousse, l'eau passe par-dessus la gouttière, la chaleur sort par l'isolant tassé, etc.
  - La fiche dit d'où ça vient, ce qui est en cause et ce qu'on fait. Une couche (« 03 · L'écran sous-toiture ») ramène à sa couche dans la plongée ; une pièce (« Le solin ») mène à l'anatomie de la page Couverture.
  - « Demander un diagnostic pour ça » ouvre le devis avec la prestation cochée et le symptôme déjà écrit dans le message.
  - Les rubriques suivantes passent de 02 à 07. « Passer la plongée » mène au diagnostic.
- **Couverture, nouvelle rubrique 02 « Le toit, pièce par pièce »**, entre les interventions et le nuancier.
  - Le dessin : le pavillon vu de la rue, en croquis à l'encre sur une feuille de chaux.
  - Dix pièces étiquetées, reliées au dessin par un trait : faîtage, noue, solin, abergement, arêtier, chatière, égout, cache-moineaux, gouttière, rive. La pièce choisie s'éclaire en terre cuite.
  - La fiche donne le rôle de la pièce, quand s'en inquiéter, qui s'en occupe (lien vers la bonne rubrique) et un diagnostic gratuit prérempli.
  - On arrive directement sur une pièce par l'adresse (par exemple `couverture#piece-solin`).
- **Le changement de fiche** reprend le relais des légendes de la plongée : les lettres du titre se soulèvent et le texte suit.
- **Téléphone** : on choisit dans une bande de boutons qui défile. Sur la coupe, seul le point choisi reste affiché ; le croquis se recadre sur la maison.
- **Sans JavaScript**, toutes les fiches restent lisibles, l'une sous l'autre.
- **Fluidité de tout l'accueil** : la toile de la plongée n'est plus redessinée à chaque défilement quand rien n'a changé ou qu'elle est hors de l'écran. Avec le processeur ralenti quatre fois, les images lentes tombent d'environ 10 % à environ 1 %, sur toute la page.
- **Premier affichage et retour arrière** : une miniature floue de la photo du toit est posée dessous pendant le décodage. Plus d'image vide.
- **Liens vers les interventions de Couverture** : ils mènent à la section entière, qui ne glisse pas sous l'en-tête à l'arrivée.
- **Restent signalés par l'audit, comme prévu** : les contrôles du mode calme (retiré à la demande du client) et Safari, à vérifier sur le Mac.

## v9 — légendes de la plongée plus aérées

- **Accueil, plongée, sur ordinateur et tablette** :
  - Les légendes quittent le coin de l'écran. Elles sont plus loin du bord gauche (7 % de la largeur, au lieu d'environ 30 px) et plus haut au-dessus du bas (12 % de la hauteur).
  - La colonne est plus large : jusqu'à 860 px, et environ 50 caractères par ligne pour la phrase, au lieu de 34. Les phrases tiennent en deux lignes au lieu de trois. « Passez la souris sur la tuile » et l'heure du soleil tiennent sur une seule ligne.
  - L'espace entre le surtitre, le nom, la phrase et le lien est plus grand.
  - Le voile sombre s'élargit avec la colonne.
  - Sur un écran bas (portable), le nom de la couche est un peu plus grand.
- **La plaque « Diagnostic gratuit »** garde la largeur de ses deux boutons.
- Téléphone : inchangé.

## v8 — relais des textes de la plongée

- **Accueil, plongée : jamais d'écran sans texte.**
  - Chaque légende reste à l'écran jusqu'à ce que la suivante arrive, au milieu du passage d'une couche à l'autre. Avant, il y avait un long trou : la tuile se soulevait et s'envolait sans texte.
  - « La tuile » arrive pendant que le panneau du titre glisse : elle est déjà dessous et le panneau la découvre.
  - La dernière légende (« Les chevrons », avec le diagnostic et le numéro) reste jusqu'à l'arrivée de la section suivante.
- **Accueil, plongée : sortie et entrée des légendes.**
  - En descendant, les lettres du nom se soulèvent l'une après l'autre et sortent par le haut, comme des tuiles. Pendant ce temps, les lettres du nom suivant montent par le bas et se posent avec un léger rebond.
  - Le surtitre et les lignes de la phrase glissent dans leur masque. Le lien se pose de gauche à droite, comme un liteau.
  - En remontant, tout se fait dans l'autre sens.
  - Le texte n'est jamais à moitié transparent : il est entier, ou masqué.
- **Accueil, plongée : le fil des couches** entre ligne après ligne depuis la droite, en même temps que la première légende. Le liteau jaune de la couche en cours glisse d'une ligne à l'autre. Il suit maintenant exactement la légende affichée.
- **Restent signalés par l'audit, comme prévu** : les contrôles du mode calme (retiré à la demande du client).

## v7 — audit complet et finitions

Audit automatique standard sur toutes les pages (6 tailles, sans JavaScript, films, fluidité, parcours), puis revue de chaque page en captures sur ordinateur et téléphone.

- **Accueil, plongée** :
  - L'image affichée sous la toile a maintenant le même cadrage que la toile (zone à droite du panneau sur ordinateur, sous la bande au téléphone). Au retour arrière, plus de saut d'image au premier affichage.
  - Quand la version fine des tuiles couvre tout l'écran, elle seule est dessinée, et le lissage est plus simple pendant le mouvement : deux fois moins de travail par image à l'arrivée sur la tuile.
  - Sur un appareil sans processeur graphique (rendu logiciel), la toile est dessinée en plus petit. Le contrôle de fluidité de l'audit (processeur ralenti quatre fois) passe désormais.
  - Le fil des couches propose « Passer la plongée ↓ », qui mène directement aux métiers.
  - Sur téléphone, le voile sous les textes monte plus haut : les chevrons et leur texte restent lisibles devant la fenêtre claire.
- **Accueil, labels et marques au téléphone** : les deux blocs passent l'un sous l'autre. Les quatre labels sont sur une ligne avec leur nom entier (plus de « Quali-bat » ni « décenna-le »), les marques sur trois colonnes.
- **Accueil, zone** : la photo de fond est cadrée plus bas, avec plus de toits et moins de ciel vide sous le titre.
- **Couverture, nuancier** : le texte de chaque matériau est en haut de l'échantillon. Il reste lisible tant que l'échantillon suivant ne le recouvre pas (avant, il était caché dès l'arrivée du suivant).
- **Pages d'onglet, photos de chantier au téléphone** : deux par rang sur toute la largeur, au lieu d'une petite colonne à gauche.
- **Peinture et façades, finitions au téléphone** : une liste, la finition choisie en grand et les autres en bandeaux lisibles. La mention « Illustration générée » ne recouvre plus les petites vignettes.
- **Restent signalés par l'audit, comme prévu** : les contrôles du mode calme (retiré à la demande du client), et la galerie des chantiers vue en mode « animations réduites », qui n'existe plus.
- **Toutes les pages** : le numéro de version des fichiers passe à 7.

## v6 — l'image de Couverture sans raccord visible

- **Couverture, image d'ouverture** : le village derrière le toit commençait par un bord vertical net, un défaut de l'image générée qui faisait croire à un bug d'affichage. Les arbres et les maisons se fondent maintenant doucement dans la brume du ciel, sur ordinateur comme sur téléphone. Le toit, ses tuiles et la mousse n'ont pas changé.
- **Image de partage de la page Couverture** : refaite avec l'image corrigée.
- **Toutes les pages** : le numéro de version des fichiers passe à 6.

## v5 — la plongée plus fluide, le fil des couches lisible

- **Accueil, fluidité de la plongée** :
  - Les images de la scène sont décodées d'avance, et la position est lue à chaque image ; le suivi du défilement est plus serré (0,12 s).
  - Le lissage des images est simple pendant le mouvement ; la dernière image est refaite en haute qualité à l'arrêt.
  - La toile est limitée à 2,2 millions de points.
  - Le voile sombre sous les textes est sur son propre calque, et seuls les styles qui changent sont réécrits.
- **Accueil, fil des couches à droite** : il est posé sur une plaque sombre, lisible sur toutes les images, y compris les liteaux clairs. La couche en cours est en blanc avec son numéro et son trait jaunes.
- **Toutes les pages** : le numéro de version des fichiers passe à 5.

## v4 — un premier écran net, une plongée fluide

- **Accueil, premier écran** : le titre, le bouton devis et le numéro sont posés sur un panneau de chaux à gauche ; la photo du faîtage, nette et sans voile, occupe la droite. Une ligne discrète invite à faire défiler. Au premier défilement, le panneau glisse et la photo prend tout l'écran.
- **Accueil, la plongée refaite** : toute la scène est dessinée dans une seule toile, et le défilement est lissé image par image. Les découpes de calques qui faisaient saccader ont disparu ; les sauts (liens, retour arrière) arrivent directement.
  - Les tuiles du premier plan viennent d'une version double définition de la photo : la grande tuile est plus nette.
  - Sous la tuile, on voit la vraie couche des liteaux, puis on passe par le trou. Les bords de chaque ouverture sont dans l'ombre ; les liteaux dessinés en double ont disparu.
  - On passe du liteau à l'écran par le vide entre deux liteaux, de l'écran à l'isolant par une fente qui s'ouvre, et de l'isolant aux chevrons par un trou dans la laine.
  - Chaque couche se voit d'abord au fond de l'ouverture, plus petite, puis vient à sa place.
  - À son arrivée, la grande tuile se soulève à peine : on voit tout de suite laquelle soulever.
- **Toutes les pages** : le numéro de version des fichiers passe à 4.

## v3 — la plongée sous les tuiles

- **Accueil, ouverture** : une seule grande scène en plein écran remplace la petite tuile du coin et le diaporama des cinq couches.
  - On part du faîtage au-dessus de Taverny. Au défilement, la caméra plonge dans le toit, couche après couche : tuile, liteau, écran sous-toiture, isolant, chevrons.
  - Chaque couche s'affiche en grand, avec son nom et une phrase.
  - Au premier plan, une tuile de 400 à 520 px sur ordinateur (70 % de l'écran sur téléphone) se soulève à la souris ou au doigt, avec son ombre au soleil de Taverny. Puis elle s'envole, et l'on passe par son trou.
  - On passe du liteau à l'écran par le vide entre deux liteaux, de l'écran à l'isolant par une fente, et l'on traverse l'isolant jusqu'aux chevrons.
  - Un fil à droite indique la couche en cours et y mène directement. La scène se termine sur « Diagnostic gratuit de votre toit » et le numéro.
- **Accueil, premier écran épuré** : le titre, un seul bouton devis et le numéro. Le surtitre, le chapeau, l'encart, la bulle et la pastille du soleil sont retirés. Sur téléphone, le titre est posé sur une bande de chaux, au-dessus de la photo en pleine couleur.
- **Accueil, intro** : le logo seul dure moins de 0,6 s, puis la photo du faîtage se pose en reculant légèrement.
- **Couverture** : la mousse ne pousse plus que sur les tuiles, jamais sur le ciel, les arbres, la fenêtre de toit ni l'écran.
  - C'est une vraie texture : voile verdâtre, coussins de mousse dans les joints, lichen.
  - La brosse la retire tuile par tuile, dans un petit nuage de brins, et découvre la terre cuite propre.
  - Une invite bien visible indique le geste (« Passez la souris sur le toit pour le démousser »), avec une jauge qui se remplit. Le devis de démoussage apparaît au bout.
- **Photos de chantier** :
  - Seules les plus nettes sont en grand : la vue de drone du toit refait sur la grande carte Couverture, le chéneau en zinc sur la carte Zinguerie.
  - Recadrages serrés : plus de palissade, de sac, de bouteille ni de chaussures (liteaux neufs, liteaux autour du Velux, fenêtre de toit, charpente, drone).
  - La photo floue de la soudure ne sert plus en grand.
- **Lisibilité** : surtitres et étiquettes à 13 px au moins, textes des cartes à 15 px. Les labels restent à 64 px avec leur nom, sur deux colonnes au téléphone.
- **Mode calme retiré** : le lien « Réduire les animations » (menu et pied de page) et le suivi du réglage de l'appareil sont supprimés. Les animations jouent toujours. Le pied de page propose à la place l'itinéraire.
- **Toutes les pages** : le numéro de version des fichiers passe à 3.

## v2 — la scène des couches, plus lente

- **Accueil, « Cinq couches, un seul toit »** : la scène défile beaucoup plus lentement. Elle mesure 300 svh au lieu de 160, soit environ un demi-écran de défilement par couche, et les couches suivent le défilement avec un léger amorti, sans à-coups.
- **Toutes les pages** : le numéro de version des fichiers passe à 2, pour que les navigateurs chargent la nouvelle version.

## v1 — la base

- **Pages** : Accueil, Couverture, Zinguerie et charpente, Peinture et façades, Devis et contact, page 404 (« Cette page a glissé du toit »). Français seul.
- **Direction « Sous les tuiles »** : un magazine du toit sur fond de chaux. Les couleurs sont la terre cuite, l'écran sombre et le liteau en pin doré, avec les polices Newsreader et Schibsted Grotesk. Chaque rubrique est posée sur un liteau cloué, qui sert de fil d'une page à l'autre.
- **Ouverture de l'accueil** : le toit vu du faîtage, en plein cadre, avec les pavillons alentour. Le titre se pose rang par rang, avec son ombre.
  - À l'arrivée, le logo glisse jusqu'au trou d'une tuile manquante, d'où l'on voit le liteau. Il devient cette tuile, qui se pose.
  - On peut ensuite soulever n'importe quelle tuile du pan droit : on voit la tranche, la fente et le liteau dessous. L'ombre portée suit le soleil réel sur Taverny à l'heure de la visite.
  - La tuile levée mène au devis : « Un doute sur la vôtre ? Diagnostic gratuit ».
- **Accueil, sections** :
  - Les cinq couches du toit, à soulever à la main ou au défilement (tuile, liteau, écran, isolant, chevrons).
  - Les cinq métiers, sur de vraies photos de chantier, avec des filtres qui recomposent la grille.
  - Les chantiers de l'équipe et la méthode en six rangs.
  - « De père en fils » avec le camion floqué et des chiffres qui comptent, les neuf vrais avis, les labels et marques, puis la zone avec « joignable maintenant » à l'heure de Paris.
  - La photo du toit bouge légèrement avec la souris, en relief, et les chantiers défilent en galerie horizontale.
- **Pages d'onglet** :
  - **Couverture** : la pente se découvre rang par rang, encore moussue ; on la démousse à la souris ou au doigt. Suivent les cinq interventions et le nuancier des quatre matériaux, dont les échantillons s'empilent au défilement comme des tuiles.
  - **Zinguerie et charpente** : un cordon d'étain se trace sous le titre, pointe encore chaude. On peut cocher les signes de la gouttière, dont « elle déborde », puis ceux de la charpente : ils sont joints à la demande de devis. La charpente apparaît en profondeur.
  - **Peinture et façades** : un coup de taloche efface l'enduit gris et révèle la façade refaite. Viennent ensuite la préparation en cinq couches, le ravalement en quatre temps, la question de l'obligation, et les quatre finitions d'enduit qui se recomposent autour de celle qu'on touche.
- **Devis et contact** : formulaire en cinq étapes repris du vrai formulaire.
  - Chaque bouton « Devis » mène droit au formulaire, déjà rempli depuis les pages (prestation, signes cochés).
  - L'étape déjà choisie est passée, et « Continuer » reste toujours à l'écran.
  - À l'envoi, l'écran revient sur la fiche, qui reçoit une tuile « Demande posée ».
  - L'envoi est simulé.
  - L'adresse s'accompagne d'un lien d'itinéraire, aussi présent dans le menu.
- **Transitions** : un voile de vraies tuiles en terre cuite recouvre l'écran entre deux pages, puis se soulève rang par rang.
- **Images** :
  - Les vraies photos de chantier du client sont utilisées en vignettes et sur les cartes métiers.
  - Les grandes images sont des illustrations générées avec Grok, toutes marquées « Illustration générée ».
  - Chaque page a son image de partage.
- **Confort** : un mode « Réduire les animations », un site lisible sans JavaScript, et l'appel et le devis toujours à portée sur téléphone.
- **Mise en ligne** : maquette non indexée (balise robots et en-tête X-Robots-Tag), intégrable dans un site Wix.
