/* Couverture : un très grand titre sur la chaux ; à droite, la pente neuve se découvre rang par rang, comme on dépose
   une vieille couverture. Les cinq interventions en rubriques. Signature : le nuancier des quatre matériaux, des
   échantillons qui s'empilent au défilement en se recouvrant comme des tuiles (empilement). */
import { html } from '../../outils/gabarit.mjs';
import { liteau, tel, finPage, vignettes } from '../gabarits/morceaux.mjs';

export const page = { cle: 'couverture', fichier: 'couverture', imagePartage: 'grok/couverture-ouverture' };

export default (c) => {
  const d = c.donnees.couverture;
  return html`
<section class="page-une rubrique-une" id="debut">
  <div class="rubrique-une-grille">
    <div class="rubrique-une-texte">
      ${liteau(c.s('couverture.sur'))}
      <h1 class="titre-geant" data-titre-pose="intro" data-grille="typo" data-effet="titre-pose">${c.tb('couverture.titre')}</h1>
      <p class="chapo">${c.t('couverture.chapo')}</p>
      <p class="une-actions">
        ${c.lien('devis', { ancre: 'demande', params: 'prestation=couverture', classe: 'bouton', texte: c.t('couverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        ${tel(c)}
      </p>
      <p class="une-info" data-info-cle>${c.t('couverture.info')}</p>
    </div>
    <div class="pente" data-iris-centre data-effet="pente-rangs">
      ${c.media({ nom: 'grok/couverture-ouverture', alt: c.s('couverture.alt'), cadrage: '55% 50%', priorite: true, sizes: '(max-width: 899px) 100vw, 58vw' })}
      <canvas class="mousse" data-effet="demoussage" data-grille="manipuler" data-souris aria-hidden="true"></canvas>
      <p class="mousse-geste" aria-hidden="true"><span class="souris">${c.t('couverture.mousseGeste')}</span><span class="tactile">${c.t('couverture.mousseGesteTactile')}</span></p>
      <div class="pente-rangs" aria-hidden="true">${[0, 1, 2, 3, 4, 5, 6].map((i) => html`<span style="--i:${i}"></span>`)}</div>
    </div>
  </div>
</section>

<section class="section" id="interventions" aria-labelledby="interventions-titre">
  <div class="conteneur">
    ${liteau(c.s('couverture.rubriqueToit'))}
    <div class="section-tete">
      <h2 id="interventions-titre" data-titre-pose data-effet="titre-pose">${c.t('couverture.prestationsTitre')}</h2>
      <p>${c.t('couverture.prestationsIntro')}</p>
    </div>
    <div class="prestations-grille">
    ${c.media({ nom: 'grok/liteaux-toit', alt: c.s('couverture.prestationsAlt'), classe: 'prestations-photo', cadrage: '50% 50%', sizes: '(max-width: 899px) 100vw, 30vw' })}
    <ol class="prestations" data-anime="cascade">
      ${d.prestations.map((p, i) => html`<li class="prestation" id="${p.cle}">
        <span class="prestation-n">${String(i + 1).padStart(2, '0')}</span>
        <h3>${p.nom}</h3>
        <p>${p.texte}</p>
        ${c.lien('devis', { ancre: 'demande', params: 'prestation=couverture', classe: 'prestation-lien', texte: html`${c.t('couverture.devisLien')} <span aria-hidden="true">→</span>` })}
      </li>`)}
    </ol>
    </div>
  </div>
</section>

<section class="section nuancier-section" id="materiaux" aria-labelledby="nuancier-titre">
  <div class="conteneur">
    ${liteau(c.s('couverture.rubriqueNuancier'), true)}
    <div class="section-tete">
      <h2 id="nuancier-titre" data-titre-pose data-effet="titre-pose">${c.t('couverture.nuancierTitre')}</h2>
      <p>${c.t('couverture.nuancierIntro')}</p>
    </div>
    <ol class="nuancier" data-effet="nuancier">
      ${d.materiaux.map((m, i) => html`<li class="echantillon" style="--i:${i}">
        <div class="echantillon-tete"><span class="echantillon-n">${String(i + 1).padStart(2, '0')} / 04</span><h3>${m.nom}</h3><p class="echantillon-duree"><b>${m.duree}</b> ${c.t('couverture.nuancierAns')}</p></div>
        <div class="echantillon-corps">
          ${c.media({ nom: m.image, alt: '', classe: 'echantillon-photo', sizes: '(max-width: 760px) 100vw, 60vw' })}
          <div class="echantillon-texte"><p>${m.texte}</p><p class="echantillon-detail">${m.detail}</p></div>
        </div>
      </li>`)}
    </ol>
  </div>
</section>

<section class="section" id="chantiers" aria-labelledby="chantiers-titre">
  <div class="conteneur">
    ${liteau(c.s('couverture.rubriqueChantiers'))}
    <div class="section-tete">
      <h2 id="chantiers-titre" data-titre-pose data-effet="titre-pose">${c.t('couverture.chantiersTitre')}</h2>
      <p>${c.t('couverture.chantiersIntro')}</p>
    </div>
    ${vignettes(c, d.chantiers, c.s('couverture.legende'))}
    <aside class="conseil" aria-labelledby="conseil-titre">
      <p class="surtitre" id="conseil-titre">${c.t('couverture.conseilTitre')}</p>
      <p class="conseil-texte">${c.t('couverture.conseil')}</p>
    </aside>
  </div>
</section>
${finPage(c, 'couverture', 'couverture')}`;
};
