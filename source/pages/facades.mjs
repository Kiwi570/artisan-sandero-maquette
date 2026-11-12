/* Peinture et façades : titre centré au-dessus d'un grand bandeau de façade, révélé par un coup de taloche (un arc
   qui balaie l'image comme la lame sur l'enduit). La peinture et sa préparation, le ravalement en quatre temps, la
   question de l'obligation. Signature : les quatre finitions d'enduit qui se recomposent autour de celle qu'on touche. */
import { html } from '../../outils/gabarit.mjs';
import { liteau, tel, finPage, vignettes } from '../gabarits/morceaux.mjs';

export const page = { cle: 'facades', fichier: 'facades', imagePartage: 'grok/facade-pavillon' };

export default (c) => {
  const d = c.donnees.facades;
  return html`
<section class="page-une facade-une" id="debut">
  <div class="conteneur facade-tete">
    ${liteau(c.s('facades.sur'))}
    <h1 class="titre-geant" data-titre-pose="intro" data-grille="typo" data-effet="titre-pose">${c.tb('facades.titre')}</h1>
    <p class="chapo">${c.t('facades.chapo')}</p>
    <p class="une-actions">
      ${c.lien('devis', { ancre: 'demande', params: 'prestation=ravalement', classe: 'bouton', texte: c.t('facades.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${tel(c)}
    </p>
    <p class="une-info" data-info-cle>${c.t('facades.info')}</p>
  </div>
  <div class="taloche" data-iris-centre data-effet="coup-taloche">
    ${c.media({ nom: 'grok/facade-pavillon', alt: c.s('facades.alt'), cadrage: '50% 46%', priorite: true, sizes: '100vw' })}
    <div class="taloche-enduit" aria-hidden="true"></div>
  </div>
</section>

<section class="section" id="peinture" aria-labelledby="peinture-titre">
  <div class="conteneur peinture-grille">
    <div>
      ${liteau(c.s('facades.rubriquePeinture'))}
      <h2 id="peinture-titre" data-titre-pose data-effet="titre-pose">${c.t('facades.peintureTitre')}</h2>
      <p class="peinture-texte">${c.t('facades.peintureTexte')}</p>
      <p class="peinture-marques">${c.t('facades.marques')}</p>
    </div>
    <div class="couches-peinture">
      <p class="surtitre">${c.t('facades.peintureEtapes')}</p>
      <ol data-anime="cascade" data-visuel>${d.preparation.map((p, i) => html`<li style="--i:${i}"><span>${String(i + 1).padStart(2, '0')}</span>${p}</li>`)}</ol>
    </div>
  </div>
</section>

<section class="section ravalement" id="ravalement" aria-labelledby="ravalement-titre">
  <div class="conteneur">
    ${liteau(c.s('facades.rubriqueRavalement'), true)}
    <div class="section-tete">
      <h2 id="ravalement-titre" data-titre-pose data-effet="titre-pose">${c.t('facades.ravalementTitre')}</h2>
      <p>${c.t('facades.supportsTitre')} · ${d.enduits}.</p>
    </div>
    <ol class="temps" data-anime="cascade">
      ${d.ravalement.map((r, i) => html`<li><span class="temps-n">${i + 1}</span><h3>${r.nom}</h3><p>${r.texte}</p></li>`)}
    </ol>
    ${vignettes(c, d.chantiers, c.s('facades.legende'))}
    <details class="faq">
      <summary>${c.t('facades.faqTitre')}</summary>
      <p>${c.t('facades.faq')}</p>
    </details>
  </div>
</section>

<section class="section" id="finitions" aria-labelledby="finitions-titre">
  <div class="conteneur">
    ${liteau(c.s('facades.rubriqueFinitions'))}
    <div class="section-tete">
      <h2 id="finitions-titre" data-titre-pose data-effet="titre-pose">${c.t('facades.finitionsTitre')}</h2>
      <p>${c.t('facades.finitionsIntro')}</p>
    </div>
    <ul class="finitions" data-effet="finitions" data-grille="manipuler">
      ${d.finitions.map((f, i) => html`<li class="finition${i === 1 ? ' choisie' : ''}" data-finition="${f.cle}">
        ${c.media({ nom: f.image, alt: '', classe: 'finition-photo', sizes: '(max-width: 760px) 100vw, 50vw' })}
        <button type="button" class="finition-bouton" aria-pressed="${i === 1 ? 'true' : 'false'}">
          <span class="finition-texte"><b>${f.nom}</b><span>${f.texte}</span></span>
        </button>
      </li>`)}
    </ul>
  </div>
</section>
${finPage(c, 'facades', 'ravalement')}`;
};
