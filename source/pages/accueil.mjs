/* Accueil Artisan Sandero · « Sous les tuiles » : magazine du toit.
   Grille wouahou : pan de tuiles qu'on soulève (manipuler), couches du toit qui se soulèvent (scène), titres posés
   tuile par tuile (typo), trame des liteaux (fil), métiers qui se recomposent, méthode en rangs empilés. */
import { html, brut } from '../../outils/gabarit.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/zone-faitage' };

const liteau = (c, rubrique, clair = false) => html`<div class="liteau${clair ? ' liteau--clair' : ''}" data-grille="fil" data-effet="liteau-fil" aria-hidden="true"><span class="rubrique">${rubrique}</span>${[8, 31, 54, 77, 96].map((x, i) => html`<span class="clou" style="left:${x}%;--i:${i}"></span>`)}</div>`;

export default (c) => {
  const d = c.donnees;
  const metiers = [['tout', 'Tout'], ['toit', 'Toit'], ['gouttieres', 'Gouttières'], ['facade', 'Façade'], ['charpente', 'Charpente']];
  return html`
<div class="une" id="debut">
  <div class="une-scene">
    <div class="toit" data-grille="manipuler" data-effet="tuiles-levees" data-souris>
      <p class="visuellement-cache">${c.t('accueil.hero.region')}</p>
      ${c.media({ nom: 'grok/zone-faitage', alt: '', classe: 'toit-photo', cadrage: '50% 100%', cadrageMobile: '76% 100%', priorite: true, sizes: '106vw' })}
      <canvas class="toit-toile" aria-hidden="true"></canvas>
      <div class="une-orage" aria-hidden="true"></div>
      <span class="toit-trou" data-iris-centre aria-hidden="true"></span>
      <div class="toit-bulle" hidden>
        ${c.lien('devis', { ancre: 'demande', params: 'prestation=couverture', classe: 'toit-devis', texte: html`<b>Un doute sur la vôtre\u00a0?</b> Diagnostic gratuit →` })}
        <span class="toit-bulle-geste" aria-hidden="true"><span class="souris">${c.t('accueil.hero.geste')}</span><span class="tactile">${c.t('accueil.hero.gesteTactile')}</span></span>
        <span class="toit-soleil" aria-hidden="true" hidden></span>
      </div>
    </div>
    <div class="une-texte">
      <p class="surtitre">${c.t('accueil.hero.sur')}</p>
      <h1 class="une-titre" data-titre-pose="intro" data-grille="typo" data-effet="titre-pose">${c.tb('accueil.hero.titre')}</h1>
      <p class="une-court">${c.t('accueil.hero.court')}</p>
    </div>
    <div class="une-cote">
        <p class="chapo">${c.t('accueil.hero.chapo')}</p>
        <p class="une-actions">
          ${c.lien('devis', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
          <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
        </p>
        <p class="une-info" data-info-cle>${c.t('commun.horairesCourt')} · ${c.t('commun.devisGratuit')}</p>
    </div>
  </div>
</div>

<section class="couches sombre" id="couches" data-scene data-grille="scene" data-entete-cache aria-labelledby="couches-titre">
  <div class="couches-collant" data-collant>
    <div class="couches-texte">
      ${liteau(c, 'Rubrique 01 · Sous la tuile', true)}
      <h2 id="couches-titre" data-titre-pose data-effet="titre-pose">${c.t('accueil.couches.titre')}</h2>
      <p>${c.t('accueil.couches.intro')}</p>
      <p class="couches-compte" aria-hidden="true">Couche <span data-couche-n>1</span> / ${d.couches.length}</p>
      <ol class="couches-liste">
        ${d.couches.map((x, i) => html`<li${i === 0 ? brut(' class="actif"') : ''} data-couche="${i}" data-n="${String(i + 1).padStart(2, '0')}"><h3>${x.nom}</h3><p>${x.texte} ${c.lien(x.page, { ancre: x.ancre || '', texte: html`${x.lien} →` })}</p></li>`)}
      </ol>
    </div>
    <div class="couches-pile" data-effet="couches">
      <span class="couches-geste" aria-hidden="true">Tirez la couche vers le haut</span>
      ${d.couches.map((x, i) => html`<div class="plaque" style="z-index:${10 - i}">${c.media({ nom: x.image, alt: x.nom, sizes: '(max-width: 899px) 100vw, 56vw' })}<p class="plaque-nom" aria-hidden="true">${x.nom}</p></div>`)}
    </div>
  </div>
</section>

<section class="section metiers conteneur" id="metiers" aria-labelledby="metiers-titre">
  ${liteau(c, 'Rubrique 02 · Les métiers')}
  <div class="section-tete">
    <h2 id="metiers-titre" data-titre-pose data-effet="titre-pose">${c.t('accueil.metiers.titre')}</h2>
    <p>${c.t('accueil.metiers.intro')}</p>
  </div>
  <ul class="filtres" aria-label="${c.s('accueil.metiers.filtres')}">
    ${metiers.map(([v, n], i) => html`<li><button type="button" data-filtre="${v}" aria-pressed="${i === 0 ? 'true' : 'false'}">${n}</button></li>`)}
  </ul>
  <ul class="metiers-grille" data-anime="cascade" data-effet="metiers-recompose">
    ${d.metiers.map((m, i) => html`<li class="metier${i === 0 ? ' grande' : ''}" data-tags="${m.tags.join(' ')}">
      ${c.media({ nom: m.image, alt: m.nom, cadrage: m.cadrage || '50% 50%', sizes: '(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 25vw' })}
      <div class="metier-corps"><p class="metier-n">${String(i + 1).padStart(2, '0')}</p><h3>${m.nom}</h3><p>${m.texte}</p>${m.sous ? html`<p class="metier-sous">${m.sous.join(' · ')}</p>` : ''}${c.lien(m.page, { ancre: m.ancre || '', texte: html`${m.lienTexte || m.nom} →` })}</div>
    </li>`)}
  </ul>
</section>

<section class="section chantiers" id="chantiers" data-fx="galerie" aria-labelledby="chantiers-titre">
  <div class="conteneur">
    ${liteau(c, 'Rubrique 03 · Les chantiers')}
    <div class="section-tete">
      <h2 id="chantiers-titre" data-titre-pose data-effet="titre-pose">${c.t('accueil.chantiers.titre')}</h2>
      <p>${c.t('accueil.chantiers.intro')}</p>
    </div>
  </div>
  <div class="chantiers-piste" data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.chantiers.piste')}">
    ${d.chantiers.map((x, i) => html`<div class="chantier${i % 2 ? ' chantier--etroit' : ''}">${c.media({ nom: x.image, alt: x.alt, cadrage: x.cadrage || '50% 50%', sizes: '(max-width: 760px) 80vw, 30vw' })}<p class="chantier-titre"><b>${x.titre}</b> · ${c.t('accueil.chantiers.legende')}</p></div>`)}
  </div>
  <div class="conteneur galerie-progres" aria-hidden="true"><span></span></div>
</section>

<section class="section methode" id="methode" aria-labelledby="methode-titre">
  <div class="conteneur">
    ${liteau(c, 'Rubrique 04 · La méthode')}
    <div class="section-tete">
      <h2 id="methode-titre" data-titre-pose data-effet="titre-pose">${c.t('accueil.methode.titre')}</h2>
      <p>${c.t('accueil.methode.intro')}</p>
    </div>
    <div class="methode-grille">
      ${c.media({ nom: 'chantier-faitage', alt: 'Un couvreur de l’entreprise pose le faîtage, les pavillons en contrebas', classe: 'methode-photo', cadrage: '62% 50%', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
      <ol class="rangs" data-effet="methode-rangs">
        ${d.etapes.map((e, i) => html`<li class="rang-tuile" style="--i:${i}"><span class="rang-n">${String(i + 1).padStart(2, '0')}</span><h3>${e.nom}</h3><p>${e.texte}</p></li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="section famille sombre" id="famille" aria-labelledby="famille-titre">
  <div class="conteneur">
    ${liteau(c, 'Rubrique 05 · De père en fils', true)}
    <div class="famille-grille">
      <div>
        <h2 id="famille-titre" class="visuellement-cache">${c.t('accueil.famille.sur')}</h2>
        <blockquote data-titre-pose data-grille="typo" data-effet="titre-pose"><p>${c.t('accueil.famille.citation')}</p></blockquote>
        <p class="chapo">${c.t('accueil.famille.texte')}</p>
        <ul class="famille-faits" data-anime="cascade">
          <li><b>2006</b>${c.t('accueil.famille.f1')}</li>
          <li><b><span data-compteur="3">3</span></b>${c.t('accueil.famille.f2')}</li>
          <li><b>Toutes hauteurs</b>${c.t('accueil.famille.f3')}</li>
          <li><b>Décennale</b>${c.t('accueil.famille.f4')}</li>
        </ul>
      </div>
      <div class="famille-photos">
        ${c.media({ nom: 'artisan-gilet', alt: c.s('accueil.famille.altGilet'), classe: 'portrait', cadrage: '30% 55%', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
        ${c.media({ nom: 'camion', alt: c.s('accueil.famille.altCamion'), classe: 'camion-photo', cadrage: '50% 50%', sizes: '(max-width: 760px) 50vw, 18vw' })}
      </div>
    </div>
  </div>
</section>

<section class="section avis conteneur" id="avis" aria-labelledby="avis-titre">
  ${liteau(c, 'Rubrique 06 · Le courrier et les labels')}
  <div class="section-tete">
    <h2 id="avis-titre" data-titre-pose data-effet="titre-pose">${c.t('accueil.avis.titre')}</h2>
    <p>${c.t('accueil.avis.intro')}</p>
  </div>
  <div class="avis-grille">
    <div class="avis-cote">
      <div class="avis-note" data-visuel data-anime><span class="avis-chiffre"><span data-compteur="9">9</span> avis</span><span class="etoiles" aria-hidden="true">★★★★★</span><span>tous à cinq étoiles</span></div>
      <p>${c.t('accueil.avis.source')}</p>
    </div>
    <ul class="avis-liste" data-anime="cascade" tabindex="0" aria-label="Les neuf avis, à faire défiler">
      ${d.avis.map((a) => html`<li><blockquote>${a.texte}</blockquote><span class="etoiles" role="img" aria-label="${c.s('accueil.avis.note')}">★★★★★</span><cite>${a.nom}</cite></li>`)}
    </ul>
  </div>
  <div class="labels" aria-labelledby="labels-titre">
    <h2 id="labels-titre" class="visuellement-cache">${c.t('accueil.labels.titre')}</h2>
    <div class="labels-grille">
      <div><h3>${c.t('accueil.labels.labels')}</h3><ul class="logos logos--labels" data-anime="cascade">${d.labels.labels.map((l) => html`<li>${c.media({ nom: l.image, alt: '', sizes: '120px' })}<span>${l.nom}</span></li>`)}</ul></div>
      <div><h3>${c.t('accueil.labels.marques')}</h3><ul class="logos logos--marques" data-anime="cascade">${d.labels.marques.map((l) => html`<li>${c.media({ nom: l.image, alt: l.nom, sizes: '160px' })}</li>`)}</ul></div>
    </div>
  </div>
</section>

<section class="zone" id="zone" aria-labelledby="zone-titre">
  ${c.media({ nom: 'grok/faitage-vue', alt: 'Toits de tuiles et jardins vus depuis un faîtage, la forêt au loin', classe: 'zone-fond', cadrage: '50% 48%', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
  <div class="conteneur">
    ${liteau(c, 'Rubrique 07 · La zone', true)}
    <h2 id="zone-titre" data-titre-pose data-effet="titre-pose">${c.t('accueil.zone.titre')}</h2>
    <p>${c.t('accueil.zone.texte')}</p>
    <ul class="communes" data-anime="cascade">${d.communes.map((x) => html`<li${x.siege ? brut(' class="siege"') : ''}>${x.nom}</li>`)}</ul>
    <p class="zone-actions">
      ${c.lien('devis', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.zone.action'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      <span class="joignable" data-joignable hidden></span>
    </p>
  </div>
</section>
`;
};
