/* Page 404 aux couleurs du client. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="page-une introuvable" id="debut">
  <div class="conteneur introuvable-grille">
    <div>
      <p class="surtitre">Erreur 404</p>
      <h1 data-titre-pose="intro" data-grille="typo" data-effet="titre-pose">${c.t('introuvable.titre')}</h1>
      <p class="chapo">${c.t('introuvable.texte')}</p>
      <p class="introuvable-actions">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('devis', { classe: 'bouton bouton--contour', texte: c.t('introuvable.devis') })}</p>
      <p data-info-cle class="une-info">${c.site.contact.telephone} · ${c.t('commun.horairesCourt')}</p>
    </div>
    ${c.media({ nom: 'grok/tuile-glissee', alt: c.s('introuvable.alt'), priorite: true, classe: 'introuvable-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-iris-centre data-fx="zoom" data-fx-force="10"' })}
  </div>
</section>
`;
