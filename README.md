# Artisan Sandero · maquette « Sous les tuiles »

Maquette de démonstration du futur site d'Artisan Sandero (couvreur-zingueur à Taverny), faite à partir du site actuel artisan-sandero.fr.
Adresse prévue : https://artisan-sandero-maquette.vercel.app

## Pages
Accueil · Couverture · Zinguerie et charpente · Peinture et façades · Devis et contact · page 404.
Non reprises dans cette version (disponibles ensuite si le client les veut) : À propos (son contenu est sur l'accueil), Actualité et conseils de pro, pages par commune (Saint-Leu-la-Forêt, Ermont, Eaubonne, Cormeilles-en-Parisis), sous-pages de la couverture (regroupées sur la page Couverture).

## Ce que montre la maquette
- Ouverture de l'accueil : le toit vu du faîtage. Le logo devient la tuile qui tombe dans son trou, puis on peut soulever les tuiles du pan droit (liteau et écran dessous). L'ombre suit le soleil réel sur Taverny, et la tuile levée mène au devis.
- Accueil :
  - les cinq couches du toit, à soulever ;
  - les métiers sur de vraies photos de chantier, avec un filtre ;
  - les chantiers en galerie, et la méthode en six rangs ;
  - « De père en fils », les neuf avis, les labels et la zone avec « joignable maintenant ».
- Couverture : la pente se découvre rang par rang, puis le nuancier des quatre matériaux s'empile.
- Zinguerie et charpente : un cordon d'étain se trace sous le titre. Les signes de la gouttière se cochent et sont joints au devis. La charpente apparaît en profondeur.
- Peinture et façades : un coup de taloche révèle la façade, puis viennent les cinq étapes de préparation, le ravalement en quatre temps et les finitions qui se recomposent.
- Devis : un formulaire en cinq étapes, prérempli depuis les pages, avec le tampon « Reçu ». L'envoi est simulé.

## Fiche : ce que le client doit fournir (à compléter)
- Mentions légales : à compléter (éditeur HORTICA DANY, SIRET 492 427 893 00044, RCS, TVA, directeur de la publication).
- Politique de confidentialité : à compléter.
- Hébergeur : Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis (adresse à vérifier au moment de la mise en ligne).
- Médiateur de la consommation : à compléter (obligatoire pour un artisan qui travaille chez des particuliers).
- Assurance décennale : nom de l'assureur et numéro de contrat, à compléter.
- Qualibat : numéro de certificat et qualifications exactes, à compléter (le logo est affiché sur le site actuel sans numéro ; à retirer s'il n'est pas à jour).
- Crédits des illustrations générées : toutes les images marquées « Illustration générée » ont été créées avec Grok (xAI) pour la maquette. Garder la mention sur le site final, ou les remplacer par de vraies photos de chantier.

## À faire trancher par le client
- Ancienneté : le site actuel dit « 40 ans d'expérience » et « plus de 30 ans », pour une entreprise créée en 2006. La maquette dit « depuis 2006 » et « de père en fils », sans nombre d'années.
- Téléphone : le site affiche le 01 76 29 26 34, le camion le 06 26 88 62 93. La maquette utilise le 01.
- Adresse de Belbeuf (76) : son rôle n'est pas dit ; la maquette ne la reprend pas.
- RCS Nanterre pour un siège à Taverny : à vérifier.
- Ravalement « obligatoire tous les dix ans » : formulé sur le site actuel comme une obligation générale, ce qui est inexact ; la maquette dit que l'obligation dépend de la commune.
- Prénoms du père et du fils, photos de l'équipe (de face, si le client le souhaite) : absents du site actuel, donc absents de la maquette.
- Délai de rappel après une demande de devis (et de visite pour le diagnostic) : non donné par le site actuel, donc non annoncé. À confirmer pour l'écrire sur la page Devis.
- Le camion floqué montre le 06 26 88 62 93 : la photo est gardée telle quelle, mais le numéro affiché partout sur la maquette est le 01.

## Retiré ou remplacé faute d'information
- Tarifs : aucun prix sur le site actuel ; la maquette propose le devis gratuit partout.
- Avis : les neuf avis du site actuel, repris tels quels, sans note moyenne ni date (non fournies).
- Photos : les photos de banque d'images du site actuel (AdobeStock) ne sont pas reprises ; seules les vraies photos de chantier le sont.
- Horaires des jours fériés : inconnus ; le statut « joignable maintenant » ne s'affiche pas ces jours-là.

## À retirer à la mise en ligne définitive
- La consigne noindex (balise robots dans source/gabarits/commun.mjs, en-tête X-Robots-Tag dans vercel.json).
- Le formulaire de devis simulé (à brancher sur un vrai envoi).
- Les mentions « à compléter » du pied de page, une fois les pages légales écrites.
## À garder
- La mention « Illustration générée » sur chaque image créée par IA.

## Technique
Site statique (HTML, CSS, JavaScript), pages générées depuis donnees/ par `node outils/generer.mjs`. Ne jamais modifier les pages .html à la main.
