/* Morceaux partagés par les pages d'onglet : le liteau cloué (fil) et l'appel de fin de page. */
import { html } from '../../outils/gabarit.mjs';

export const liteau = (rubrique, clair = false) => html`<div class="liteau${clair ? ' liteau--clair' : ''}" data-grille="fil" data-effet="liteau-fil" aria-hidden="true"><span class="rubrique">${rubrique}</span>${[8, 31, 54, 77, 96].map((x, i) => html`<span class="clou" style="left:${x}%;--i:${i}"></span>`)}</div>`;

export const tel = (c, classe = 'bouton bouton--contour') => html`<a class="${classe}" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>`;

/* Appel de fin de page : sur l'écran sombre, posé sur son liteau. */
export const finPage = (c, cle, prestation) => html`
<section class="section fin" aria-labelledby="fin-titre">
  <div class="fin-fond" aria-hidden="true"></div>
  <div class="conteneur">
    ${liteau(`${c.s('commun.devisGratuit')} · Artisan Sandero`, true)}
    <div class="fin-page">
      <div>
        <h2 id="fin-titre" data-titre-pose data-effet="titre-pose">${c.t(`${cle}.finTitre`)}</h2>
        <p>${c.t(`${cle}.finTexte`)}</p>
      </div>
      <p class="actions">
        ${c.lien('devis', { ancre: 'demande', params: `prestation=${prestation}`, classe: 'bouton', texte: c.t('commun.devisGratuit'), attrs: 'data-survol="magnetique"' })}
        ${tel(c)}
        <span class="joignable" data-joignable hidden></span>
      </p>
    </div>
  </div>
</section>`;

/* Petites photos de chantier (vraies, notées 2 ou 3 sur 5) : toujours en vignettes. */
export const vignettes = (c, liste, legende) => html`
<ul class="vignettes" data-anime="cascade">
  ${liste.map((x) => html`<li>${c.media({ nom: x.image, alt: x.alt, cadrage: x.cadrage || '50% 50%', sizes: '(max-width: 760px) 50vw, 22vw' })}<p class="vignette-legende"><b>${x.titre}</b> · ${legende}</p></li>`)}
</ul>`;
