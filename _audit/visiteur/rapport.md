# Test « vrai visiteur » : Artisan Sandero

**Persona** : Nathalie, 52 ans, propriétaire d'un pavillon à Saint-Leu-la-Forêt. Depuis l'orage, une tache d'humidité est apparue au plafond de sa chambre et sa gouttière déborde. Elle cherche un couvreur sérieux et proche, qui vienne voir et fasse un devis.

**Conditions** : outil `node _audit/visiteur.mjs`, le 12 novembre 2026. Chaque mission est faite sur téléphone (390x844, tactile) puis sur ordinateur (1440x900). Les gestes et les secondes viennent des fichiers `journal.json`. Ces secondes sont un temps machine : la saisie d'un champ (`remplir`) y compte pour 0 s, alors qu'une vraie personne mettrait au moins une minute à remplir le formulaire. Chaque chemin de capture part de la racine du projet.

**Barème** : la mission 1 se fait sans aucun geste. Les autres se font en 3 gestes au plus et en 30 s au plus.

## Synthèse

| Mission | Format | Résultat | Gestes | Secondes | Capture clé |
|---|---|---|---|---|---|
| 1 arrivee | téléphone | Réussie, avec réserves | 0 | 2,2 | `_audit/visiteur/arrivee-390x844/etape-0.png` |
| 1 arrivee | ordinateur | Réussie | 0 | 2,3 | `_audit/visiteur/arrivee-1440x900/etape-0.png` |
| 2 prix | téléphone | Réussie | 1 | 4,7 | `_audit/visiteur/prix-390x844/etape-1.png` |
| 2 prix | ordinateur | Réussie | 1 | 5,0 | `_audit/visiteur/prix-1440x900/etape-1.png` |
| 3 devis | téléphone | Aboutie, **hors barème** | 18 (19 pour voir la confirmation) | 26,6 (27,8) | `_audit/visiteur/devis-390x844/etape-20.png` |
| 3 devis | ordinateur | Aboutie, **hors barème** | 18 | 25,5 | `_audit/visiteur/devis-1440x900/etape-21.png` |
| 4 contact | téléphone | Aboutie, **hors barème** (adresse) | 4 | 7,5 | `_audit/visiteur/contact-390x844/etape-6.png` |
| 4 contact | ordinateur | Réussie | 2 | 5,3 | `_audit/visiteur/contact-1440x900/etape-3.png` |
| 5 difference | téléphone | Réussie de justesse | 3 | 26,6 | `_audit/visiteur/difference-390x844/etape-6.png` |
| 5 difference | ordinateur | Réussie | 3 | 25,4 | `_audit/visiteur/difference-1440x900/etape-6.png` |
| 6 gouttiere | téléphone | Aboutie avec réserve, **hors barème** | 7 | 13,4 | `_audit/visiteur/gouttiere-390x844/etape-5.png` |
| 6 gouttiere | ordinateur | Aboutie avec réserve, **hors barème** | 5 | 10,6 | `_audit/visiteur/gouttiere-1440x900/etape-4.png` |

**Bilan : 7 missions sur 12 sont réussies dans le barème.** Les 12 aboutissent, mais 5 dépassent le barème : le devis sur les deux formats, la gouttière sur les deux formats et le contact sur téléphone.

---

## 1. arrivee : de quoi s'agit-il, pour qui, où ?

### Téléphone : réussie, avec réserves (0 geste, 2,2 s)
Le premier écran montre :
- « COUVREUR-ZINGUEUR À TAVERNY · DEPUIS 2006 » ;
- le titre « Ce qui se passe sous les tuiles, une famille le sait. » ;
- le bouton « Demander un devis gratuit » et la mention « Lun.-sam. 8 h-20 h · Devis gratuit » ;
- la photo d'un toit de pavillon ;
- en bas, une barre fixe « Appeler / Devis gratuit ».

Le métier et la ville se comprennent en une seconde.

Ce qui a gêné :
- **Le nom de l'entreprise n'est écrit nulle part dans l'écran.** Le logo est seul, sans « Artisan Sandero », alors que l'ordinateur l'affiche. Nathalie ne sait pas chez qui elle est.
- **La zone d'intervention n'apparaît pas.** L'écran dit seulement « à Taverny ». Rien n'indique que Saint-Leu-la-Forêt est desservie : sur l'accueil, il faut descendre jusqu'au 9e écran (`_audit/visiteur/tour-accueil-390x844/etape-18.png`).
- **Le paragraphe d'introduction de l'ordinateur manque sur téléphone.** Ce paragraphe dit « Couverture, zinguerie, charpente, peinture et ravalement à Taverny et alentour. Le père et le fils regardent tout… ». Il est absent du premier écran comme de l'écran suivant (`_audit/visiteur/tour-accueil-390x844/etape-2.png`).
- « Pour qui » n'est dit qu'à travers l'image : un pavillon, donc des particuliers.
- Les mentions « Illustration générée » et « Soleil réel · 15 h 43 » sont posées sur la photo. La première fait douter que ce soit un vrai chantier. La seconde est incompréhensible pour une visiteuse.

Capture : `_audit/visiteur/arrivee-390x844/etape-0.png`

### Ordinateur : réussie (0 geste, 2,3 s)
Tout y est :
- le nom « ARTISAN SANDERO » ;
- le métier et la ville (« couvreur-zingueur à Taverny depuis 2006 ») ;
- les cinq métiers, avec « Taverny et alentour » ;
- « le père et le fils » ;
- le numéro 01 76 29 26 34, les horaires et le bouton de devis.

Ce qui a gêné (mineur) :
- Le gros titre est posé directement sur la photo des maisons. « famille le sait » se lit sur un fond chargé.
- La légende « Ombre réelle : soleil sur Taverny à 15 h 43 » est en petit italique blanc sur les tuiles : elle se lit mal et on ne comprend pas ce qu'elle veut dire.

Capture : `_audit/visiteur/arrivee-1440x900/etape-0.png`

---

## 2. prix : comment obtenir un prix

### Téléphone : réussie (1 geste, 4,7 s)
Chemin : « Devis gratuit » dans la barre du bas, ce qui mène à `/devis`. La page dit clairement « l'entreprise revient vers vous pour le diagnostic et le devis, gratuit ». Elle propose aussi le téléphone (« du lundi au samedi, 8 h à 20 h », 01 76 29 26 34, « Joignable maintenant, jusqu'à 20 h »). Aucun prix n'est inventé.

Ce qui a gêné :
- Aucun délai de réponse n'est annoncé : quand la rappelle-t-on ? Quand le couvreur passe-t-il voir le toit ?
- Des bandes jaunes horizontales passent derrière le titre et le texte d'introduction. On dirait des lignes de cahier qui barrent le texte.
- Un grand vide beige sépare le bloc téléphone du formulaire, alors que le formulaire est l'action attendue.

Capture : `_audit/visiteur/prix-390x844/etape-1.png`

### Ordinateur : réussie (1 geste, 5,0 s)
Même chemin avec le bouton « Devis gratuit » de l'en-tête. Le bloc téléphone est bien visible à droite.

Ce qui a gêné :
- Les bandes jaunes traversent nettement le grand titre « Votre chantier, en quelques étapes » et le paragraphe : la lecture en souffre.
- Il y a environ 150 px de vide avant le formulaire, qui commence en bas de l'écran.
- Toujours aucun délai annoncé.

Capture : `_audit/visiteur/prix-1440x900/etape-1.png`

---

## 3. devis : la demande jusqu'à la confirmation

Le formulaire compte 5 étapes : Prestation, Votre maison, Adresse, Coordonnées, Récapitulatif. Les étapes 1 et 2 sont obligatoires : si on n'a rien choisi, le message « Choisissez une option pour continuer » s'affiche (`_audit/visiteur/essai-etape1-390x844/etape-3.png`, `_audit/visiteur/essai-etape2-390x844/etape-5.png`).

### Téléphone : aboutie mais hors barème (18 gestes et 26,6 s jusqu'à l'envoi ; 19 gestes et 27,8 s pour voir la confirmation)
Parcours effectué :
1. « Devis gratuit », puis un défilement pour atteindre le formulaire.
2. Couverture, puis Continuer.
3. Terre cuite, 1 étage, puis Continuer.
4. Adresse, code postal, ville, puis Continuer.
5. Nom, téléphone, message, case de consentement, un défilement, puis Continuer.
6. « Envoyer la demande ».

La confirmation existe : « Demande reçue. Démonstration : rien n'a été envoyé. Sur le site en ligne, l'entreprise vous recontactera », avec un résumé et un tampon.

Ce qui a gêné :
- **Après l'envoi, la confirmation est hors de l'écran.** Nathalie tombe sur la photo et la fiche « L'entreprise ». Le message « Demande reçue » est plus haut et il faut remonter pour le voir (`_audit/visiteur/devis-390x844/etape-20.png`, puis `_audit/visiteur/devis-390x844/etape-21.png`). Une visiteuse peut croire que rien ne s'est passé et renvoyer sa demande, ou appeler.
- **Après l'envoi, l'en-tête déborde à droite.** Le bouton « Menu » est coupé et seul le « M » reste visible (même capture etape-20, et etape-21). C'est probablement un débordement horizontal causé par le tampon.
- **18 gestes pour une demande**, dont 2 rien que pour atteindre le formulaire : le bouton « Devis gratuit » mène en haut de `/devis`, pas au formulaire.
- L'étape 1 n'accepte **qu'un seul métier**. Nathalie a une fuite (couverture) et une gouttière (zinguerie) : elle doit choisir l'un des deux et expliquer l'autre dans le message.
- À l'étape 4, le bouton « Continuer » est sous la ligne de flottaison et demande un défilement de plus (`_audit/visiteur/gouttiere-390x844/etape-18.png`, même écran).
- Au récapitulatif, l'écran arrive sur le bas de la page : on ne voit pas « Tout est juste ? » ni les deux premiers blocs (`_audit/visiteur/devis-390x844/etape-18.png`).
- La confirmation ne donne aucun délai (« vous recontactera » : quand ?).

### Ordinateur : aboutie mais hors barème (18 gestes, 25,5 s)
Même parcours. Après l'étape 4, il faut un défilement pour atteindre « Envoyer la demande ». Le tampon « REÇU » est bien visible après l'envoi.

Ce qui a gêné :
- **18 gestes.** Au récapitulatif, le bouton « Envoyer la demande » est hors de l'écran (`_audit/visiteur/devis-1440x900/etape-18.png`).
- Après l'envoi, le titre « Demande reçue » est coupé sous l'en-tête. On voit le résumé et le tampon, puis un grand vide à gauche (`_audit/visiteur/devis-1440x900/etape-21.png`).
- La mention de consentement indique « au nom d'HORTICA DANY (Artisan Sandero) ». Ce nom inconnu, surgi au dernier moment, peut inquiéter (`_audit/visiteur/devis-1440x900/etape-16.png`).
- Un seul métier possible, comme sur téléphone.

---

## 4. contact : téléphone, adresse, horaires

### Téléphone : aboutie mais hors barème pour l'adresse (4 gestes, 7,5 s)
- **Horaires** : visibles dès l'arrivée (« Lun.-sam. 8 h-20 h »).
- **Téléphone** : le bouton « Appeler » est fixe en bas de l'écran, mais il n'affiche pas le numéro. Le numéro apparaît en 1 geste, dans le menu (« Appeler 01 76 29 26 34 »).
- **Adresse** : il faut ouvrir le menu, choisir « Devis et contact », puis défiler 2 fois pour atteindre la fiche « L'entreprise » (105 rue du Maréchal-Foch, 95150 Taverny, numéro, e-mail, « Lundi au samedi, 8 h à 20 h · dimanche fermé »).

Ce qui a gêné :
- La page « Devis et contact » ouvre sur le formulaire. L'adresse est sous le formulaire, deux écrans plus bas.
- Le raccourci en 3 gestes (« Devis gratuit » puis 2 défilements, `_audit/visiteur/contact-raccourci-390x844/etape-2.png`) n'est pas un chemin naturel pour qui cherche une adresse.
- Sur l'accueil, l'adresse n'est que dans le pied de page, 11 écrans plus bas (`_audit/visiteur/tour-accueil-390x844/etape-22.png`).
- Aucun lien « Itinéraire » ou plan : l'adresse est du texte brut.

Capture : `_audit/visiteur/contact-390x844/etape-6.png`

### Ordinateur : réussie (2 gestes, 5,3 s)
Le numéro et les horaires sont sur le premier écran. En cliquant sur « Devis et contact » puis en défilant une fois, la fiche « L'entreprise » (adresse, téléphone, e-mail, horaires) et le schéma des communes desservies apparaissent.

Ce qui a gêné (mineur) :
- Pas de lien d'itinéraire.
- Sur le schéma « Où intervient l'entreprise », la ligne pointillée traverse le nom « Saint-Leu-la-Forêt ».

Capture : `_audit/visiteur/contact-1440x900/etape-3.png`

---

## 5. difference : ce qui distingue ce couvreur, après 30 s

### Téléphone : réussie de justesse (3 gestes, 26,6 s)
Ce que Nathalie retient en 3 défilements : une **entreprise familiale de Taverny depuis 2006**, qui fait **cinq métiers** (couverture, zinguerie, charpente, peinture, ravalement), et qui parle des couches du toit, de la tuile aux chevrons. C'est une différence affirmée, mais pas prouvée.

Ce qui a gêné :
- **Les preuves arrivent trop tard.** « De père en fils », « 3 camions équipés », « Garantie décennale », « 9 avis tous à cinq étoiles », Qualibat et la zone qui comprend Saint-Leu-la-Forêt ne viennent qu'aux écrans 6 à 9 (`_audit/visiteur/tour-accueil-390x844/etape-12.png`, `etape-14.png`, `etape-16.png`, `etape-18.png`).
- La phrase clé de l'ordinateur, « Avant un devis, chaque couche est regardée », n'apparaît pas sur téléphone. « Le père et le fils regardent tout » non plus.
- Dans « Cinq couches, un seul toit », « Les chevrons » porte le numéro **01**, comme « La tuile ». De plus, seules 2 couches sur 5 sont passées en 2 défilements.
- La surtitre « RUBRIQUE 01 · SOUS LA TUILE » est en partie cachée sous l'image : on lit « QUE 01 · SOUS LA TUILE » (`_audit/visiteur/difference-390x844/etape-6.png`).

Captures : `_audit/visiteur/difference-390x844/etape-3.png`, `etape-6.png`, `etape-10.png`

### Ordinateur : réussie (3 gestes, 25,4 s)
Ce que Nathalie retient :
- une famille, le père et le fils, à Taverny depuis 2006 ;
- « Avant un devis, chaque couche est regardée » : les 5 couches se soulèvent une à une, de la tuile aux chevrons, ce qui donne l'image d'un diagnostic sérieux ;
- cinq métiers sous un même toit.

Ce qui a gêné :
- Comme sur téléphone, les preuves (garantie décennale, avis, labels, 3 camions) sont hors de portée en 30 s.
- La mention « Ombre réelle : soleil sur Taverny à 15 h 52 » reste sans utilité pour une cliente (`_audit/visiteur/difference-1440x900/etape-3.png`).

Captures : `_audit/visiteur/difference-1440x900/etape-3.png`, `etape-6.png`, `etape-10.png`

---

## 6. gouttiere : signaler une gouttière qui déborde et préparer le devis

La page « Zinguerie et charpente » contient la rubrique « Votre gouttière vous fait signe ? » avec 4 cases :
- « Des fuites fréquentes » ;
- « De la rouille » ;
- « Des déformations visibles » ;
- « Des joints abîmés ».

Le bouton « Demander un devis avec ces signes » ouvre `/devis?prestation=zinguerie&signes=…`. La prestation Zinguerie y est déjà cochée et le message contient « Signes constatés : Des fuites fréquentes. ».

### Téléphone : aboutie avec réserve, hors barème (7 gestes et 13,4 s jusqu'à la demande préparée ; 16 gestes et 25,5 s pour voir le signe repris dans le message)
Chemin : menu, « Zinguerie et charpente », 3 défilements, case « Des fuites fréquentes », puis « Demander un devis avec ces signes ».

Ce qui a gêné :
- **Aucune case ne correspond à « ma gouttière déborde »**, qui est pourtant le signe le plus courant après un orage : gouttière bouchée ou trop petite. Nathalie a coché « Des fuites fréquentes » faute de mieux. La demande mentionne donc un autre problème que le sien (`_audit/visiteur/gouttiere-390x844/etape-5.png`).
- La liste est à 3 écrans du haut de la page. Une grande image décorative de zinc la précède (`_audit/visiteur/gouttiere-390x844/etape-7.png`).
- En arrivant sur `/devis`, rien n'indique que le signe a été repris : on voit le haut de page, puis la Zinguerie présélectionnée (`_audit/visiteur/gouttiere-390x844/etape-9.png`). Le signe n'apparaît qu'à l'étape 4, dans le message (`_audit/visiteur/gouttiere-390x844/etape-18.png`).
- Pour la tache au plafond, la rubrique charpente propose bien « Traces d'humidité », mais ces signes ne se cochent pas (voir l'ordinateur).

### Ordinateur : aboutie avec réserve, hors barème (5 gestes et 10,6 s jusqu'à la demande préparée ; 14 gestes et 22,3 s jusqu'au message)
Chemin : « Zinguerie et charpente », 2 défilements, case « Des fuites fréquentes », puis « Demander un devis avec ces signes ».

Ce qui a gêné :
- Il n'y a pas de case « déborde / bouchée ».
- Un grand vide sépare les cases du bouton « Demander un devis avec ces signes », qui est coupé au bas de l'écran (`_audit/visiteur/gouttiere-1440x900/etape-4.png`).
- Dans la rubrique charpente, la liste « Les signes qui doivent alerter » (« Traces d'humidité », « Fissures »…) ressemble à des boutons, mais rien ne se clique. Le clic sur « Traces d'humidité » échoue (`_audit/visiteur/signes-charpente-1440x900/etape-5.png`). Nathalie ne peut donc pas joindre sa tache au plafond à la demande.
- Le message n'apparaît qu'à l'étape 4 (`_audit/visiteur/gouttiere-1440x900/etape-16.png`). L'étape 1 ne rappelle pas les signes cochés (`_audit/visiteur/gouttiere-1440x900/etape-8.png`).

---

## Corrections à faire

### Missions ratées ou hors barème

1. **devis, téléphone et ordinateur (18 gestes au lieu de 3)**
   - Faire mener « Devis gratuit » directement au formulaire, par une ancre ou un formulaire placé en haut de `/devis`. Cela retire 1 geste.
   - Fusionner « Votre maison » et « Adresse », ou rendre « Votre maison » facultatif.
   - Garder « Continuer » et « Envoyer la demande » visibles sans défiler : au récapitulatif sur ordinateur, à l'étape 4 sur téléphone.
   - Autoriser plusieurs métiers à l'étape 1 (couverture et zinguerie).
   - Captures : `_audit/visiteur/devis-390x844/etape-18.png`, `_audit/visiteur/devis-1440x900/etape-18.png`.
2. **devis, téléphone : la confirmation est hors de l'écran après l'envoi**
   - Après l'envoi, ramener l'écran sur « Demande reçue » et sur le tampon.
   - Corriger le débordement horizontal qui coupe le bouton « Menu ».
   - Captures : `_audit/visiteur/devis-390x844/etape-20.png`, `etape-21.png`.
3. **gouttiere, téléphone (7 gestes) et ordinateur (5 gestes)**
   - Ajouter la case « Elle déborde (bouchée ou trop petite) » à « Votre gouttière vous fait signe ? ».
   - Rapprocher la liste du haut de la page, ou proposer les signes dès le haut de la page Zinguerie.
   - Rendre cochables les signes de charpente, dont « Traces d'humidité ».
   - Rappeler les signes cochés dès l'étape 1 du formulaire.
   - Captures : `_audit/visiteur/gouttiere-390x844/etape-5.png`, `_audit/visiteur/gouttiere-1440x900/etape-4.png`, `_audit/visiteur/signes-charpente-1440x900/etape-5.png`.
4. **contact, téléphone (4 gestes pour l'adresse)**
   - Mettre l'adresse et les horaires dans le menu, à côté de « Appeler 01 76 29 26 34 », ou placer la fiche « L'entreprise » avant le formulaire de `/devis`.
   - Ajouter un lien « Itinéraire ».
   - Capture : `_audit/visiteur/contact-390x844/etape-6.png`.

### Gênes mineures

- Arrivée sur téléphone :
  - écrire « Artisan Sandero » à côté du logo ;
  - remettre la phrase « … à Taverny et alentour. Le père et le fils… » ;
  - citer les communes voisines, dont Saint-Leu-la-Forêt.

  Capture : `_audit/visiteur/arrivee-390x844/etape-0.png`.
- Différence sur téléphone :
  - remonter une preuve courte (garantie décennale, 9 avis à 5 étoiles, de père en fils) dans les trois premiers écrans ;
  - corriger le numéro « 01 » affiché sur « Les chevrons » ;
  - dégager la surtitre « RUBRIQUE 01 » cachée sous l'image.

  Capture : `_audit/visiteur/difference-390x844/etape-6.png`.
- Page `/devis` : les bandes jaunes horizontales traversent le titre et le texte d'introduction, et un grand vide précède le formulaire (`_audit/visiteur/prix-1440x900/etape-1.png`, `_audit/visiteur/prix-390x844/etape-1.png`).
- Aucun délai de rappel ni de visite n'est annoncé, ni sur `/devis` ni dans la confirmation (`_audit/visiteur/devis-390x844/etape-21.png`).
- Le nom « HORTICA DANY » apparaît sans explication dans la mention de consentement (`_audit/visiteur/devis-1440x900/etape-16.png`).
- Les légendes « Soleil réel · 15 h 43 » et « Ombre réelle : soleil sur Taverny à … » sont peu lisibles et n'apportent rien à une cliente (`_audit/visiteur/arrivee-1440x900/etape-0.png`).
- La mention « Illustration générée » sur la photo d'accueil fait douter de l'authenticité. Mieux vaudrait mettre une vraie photo de chantier en premier écran (`_audit/visiteur/arrivee-390x844/etape-0.png`).
- Sur ordinateur, le gros titre de l'accueil est posé sur une photo chargée et se lit moins bien (`_audit/visiteur/arrivee-1440x900/etape-0.png`).
- Sur ordinateur, un grand vide sépare les cases de la gouttière de leur bouton (`_audit/visiteur/gouttiere-1440x900/etape-4.png`).
- Sur le schéma des communes, la ligne pointillée traverse « Saint-Leu-la-Forêt » (`_audit/visiteur/contact-1440x900/etape-3.png`).
- Au récapitulatif sur téléphone, l'écran arrive en bas de page et masque « Tout est juste ? » (`_audit/visiteur/devis-390x844/etape-18.png`).
- Le pied de page affiche « Mentions légales · à compléter » et « Politique de confidentialité · à compléter » (`_audit/visiteur/tour-accueil-390x844/etape-23.png`).
- Sur téléphone, une bande beige vide reste sous le pied de page, à l'emplacement de la barre fixe (`_audit/visiteur/tour-accueil-390x844/etape-23.png`).
