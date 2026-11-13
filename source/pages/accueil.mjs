/* Accueil Artisan Sandero · « Sous les tuiles » : magazine du toit.
   Ouverture : une seule scène en plein écran, la plongée. On part du faîtage au-dessus de Taverny ; au défilement,
   la caméra plonge dans le toit, couche après couche (tuile, liteau, écran, isolant, chevrons), et l'on peut soulever
   soi-même la grande tuile du premier plan. Puis titres posés tuile par tuile (typo), trame des liteaux (fil),
   métiers qui se recomposent, méthode en rangs empilés. */
import { html, brut } from '../../outils/gabarit.mjs';
import { coupe, COUPE } from '../gabarits/planches.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/zone-faitage' };

const liteau = (c, rubrique, clair = false) => html`<div class="liteau${clair ? ' liteau--clair' : ''}" data-grille="fil" data-effet="liteau-fil" aria-hidden="true"><span class="rubrique">${rubrique}</span>${[8, 31, 54, 77, 96].map((x, i) => html`<span class="clou" style="left:${x}%;--i:${i}"></span>`)}</div>`;

export default (c) => {
  const symptomes = c.donnees.diagnostic.symptomes;
  const pieceNom = (id) => { const p = c.donnees.anatomie.pieces.find((x) => x.id === id); return p ? brut(p.nom.replace(/<\/?em>/g, '')) : id; };
  const d = c.donnees;
  const metiers = [['tout', 'Tout'], ['toit', 'Toit'], ['gouttieres', 'Gouttières'], ['facade', 'Façade'], ['charpente', 'Charpente']];
  return html`
<section class="plongee" id="debut" data-scene data-grille="scene" data-effet="couches" aria-labelledby="plongee-titre">
  <div class="plongee-collant" data-collant>
    <div class="plan plan--toit" data-plan="0">
      <div class="toit" data-grille="manipuler" data-effet="tuiles-levees" data-souris>
        <p class="visuellement-cache">${c.t('accueil.hero.region')}</p>
        ${c.media({ nom: 'grok/zone-faitage', alt: '', classe: 'toit-photo', cadrage: '50% 100%', cadrageMobile: '72% 100%', priorite: true, sizes: '100vw' })}
        <canvas class="toit-toile" aria-hidden="true"></canvas>
      </div>
    </div>
    ${d.couches.slice(1).map((x, i) => html`<div class="plan plan-couche" data-plan="${i + 1}" aria-hidden="true"><div class="plan-camera">${c.media({ nom: x.image, alt: '', cadrage: x.cadrage || '50% 50%', sizes: '100vw' })}</div></div>`)}
    <div class="plongee-ombre" aria-hidden="true"></div>
    <div class="plongee-une" data-iris-centre>
      <h1 class="une-titre" id="plongee-titre" data-titre-pose="intro" data-grille="typo" data-effet="titre-pose">${c.tb('accueil.hero.titre')}</h1>
      <p class="une-actions">
        ${c.lien('devis', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <a class="bouton bouton--contour une-tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
      <p class="plongee-indice" aria-hidden="true"><span></span>${c.t('accueil.hero.indice')}</p>
    </div>
    <div class="plongee-couches">
      <h2 class="visuellement-cache">${c.t('accueil.couches.titre')}</h2>
      <ol>
        ${d.couches.map((x, i) => html`<li class="plongee-couche" id="couche-${i + 1}" data-couche="${i}">
          <p class="plongee-n"><span>${String(i + 1).padStart(2, '0')}</span> / ${String(d.couches.length).padStart(2, '0')} · ${c.t('accueil.couches.sur')}</p>
          <h3>${brut(x.titre || x.nom)}</h3>
          <p class="plongee-phrase">${x.phrase || x.texte}</p>
          ${i === 0 ? html`<p class="plongee-geste" aria-hidden="true"><span class="souris">${c.t('accueil.hero.geste')}</span><span class="tactile">${c.t('accueil.hero.gesteTactile')}</span> <span class="toit-soleil"></span></p>` : ''}
          ${i === d.couches.length - 1
            ? html`<p class="plongee-fin">${c.lien('devis', { ancre: 'demande', params: 'prestation=couverture', classe: 'bouton', texte: c.t('accueil.couches.diagnostic') })} <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>`
            : html`<p class="plongee-lien">${c.lien(x.page, { ancre: x.ancre || '', texte: html`${x.lien} →` })}</p>`}
        </li>`)}
      </ol>
    </div>
    <ol class="plongee-rail" aria-label="${c.s('accueil.couches.rail')}">
      ${d.couches.map((x, i) => html`<li data-rail><a href="#couche-${i + 1}" data-aller="${i}"><span>${String(i + 1).padStart(2, '0')}</span> ${x.court || x.nom}</a></li>`)}
      <li class="plongee-passer"><a href="#diagnostic">${c.t('accueil.couches.passer')} ↓</a></li>
    </ol>
  </div>
</section>

<section class="section diagnostic sombre" id="diagnostic" aria-labelledby="diagnostic-titre" data-planche>
  <div class="conteneur">
    ${liteau(c, 'Rubrique 01 · Le diagnostic', true)}
    <div class="section-tete">
      <h2 id="diagnostic-titre" data-titre-pose data-effet="titre-pose">${c.tb('accueil.diagnostic.titre')}</h2>
      <p>${c.t('accueil.diagnostic.intro')}</p>
    </div>
    <div class="planche planche--coupe">
      <div class="planche-dessin">
        ${coupe()}
        ${symptomes.map((s) => html`<button type="button" class="planche-point" data-choix="${s.id}" style="left:${((s.point[0] - COUPE.x) / COUPE.l * 100).toFixed(2)}%;top:${((s.point[1] - COUPE.y) / COUPE.h * 100).toFixed(2)}%" aria-hidden="true" tabindex="-1"><span></span></button>`)}
      </div>
      <div class="planche-cote">
        <ul class="planche-choix" aria-label="${c.s('accueil.diagnostic.choix')}">
          ${symptomes.map((s, i) => html`<li><button type="button" data-choix="${s.id}" aria-pressed="${i === 0 ? 'true' : 'false'}" aria-controls="symptome-${s.id}">${s.choix}</button></li>`)}
        </ul>
        <div class="planche-fiches">
          ${symptomes.map((s, i) => html`<article class="fiche" data-fiche="${s.id}" id="symptome-${s.id}" aria-labelledby="symptome-${s.id}-titre">
            <p class="fiche-n">${c.t('accueil.diagnostic.n')} ${String(i + 1).padStart(2, '0')} / ${String(symptomes.length).padStart(2, '0')}</p>
            <h3 id="symptome-${s.id}-titre">${brut(s.titre)}</h3>
            <p class="fiche-texte"><b>${c.t('accueil.diagnostic.cause')}</b> ${s.cause}</p>
            <p class="fiche-encause"><span class="fiche-etiquette">${c.t('accueil.diagnostic.enCause')}</span>
              ${s.couche ? html`<a class="fiche-pastille" href="#couche-${s.couche}" data-couche="${s.couche - 1}"><b>${String(s.couche).padStart(2, '0')}</b> ${d.couches[s.couche - 1].nom} <span class="fiche-voir">· ${c.t('accueil.diagnostic.plongee')} ↑</span></a>`
                : s.piece ? c.lien('couverture', { ancre: `piece-${s.piece}`, classe: 'fiche-pastille', texte: html`${pieceNom(s.piece)} <span class="fiche-voir">· ${c.t('accueil.diagnostic.piece')} →</span>` })
                : html`<span class="fiche-pastille fiche-pastille--simple">${s.enCause}</span>`}</p>
            <p class="fiche-texte"><b>${c.t('accueil.diagnostic.action')}</b> ${s.action}</p>
            <p class="fiche-actions">${c.lien('devis', { ancre: 'demande', params: `prestation=${s.prestation}&signes=${encodeURIComponent(s.signe)}`, classe: 'bouton fiche-devis', texte: html`${c.t('accueil.diagnostic.devis')} <span aria-hidden="true">→</span>` })}
              ${c.lien(s.liens[0].page, { ancre: s.liens[0].ancre, classe: 'fiche-lien', texte: html`${s.liens[0].texte} <span aria-hidden="true">→</span>` })}</p>
          </article>`)}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section metiers conteneur" id="metiers" aria-labelledby="metiers-titre">
  ${liteau(c, 'Rubrique 02 · Les métiers')}
  <div class="section-tete">
    <h2 id="metiers-titre" data-titre-pose data-effet="titre-pose">${c.t('accueil.metiers.titre')}</h2>
    <p>${c.t('accueil.metiers.intro')}</p>
  </div>
  <ul class="metiers-trio" data-anime="cascade">
    ${c.donnees.poles.poles.map((m, i) => html`<li class="pole">
      ${c.media({ nom: m.image, alt: '', cadrage: m.cadrage, sizes: '(max-width: 760px) 100vw, 32vw' })}
      <p class="pole-metiers"><span>${String(i + 1).padStart(2, '0')}</span> ${m.metiers}</p>
      <h3>${brut(m.nom)}</h3>
      <p class="pole-texte">${m.texte}</p>
      ${c.lien(m.page, { classe: 'pole-lien', texte: html`${c.t('accueil.metiers.voir')} <span aria-hidden="true">→</span>` })}
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

<section class="section famille sombre" id="famille" aria-labelledby="famille-titre">
  <div class="conteneur">
    ${liteau(c, 'Rubrique 04 · De père en fils', true)}
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
  ${liteau(c, 'Rubrique 05 · Le courrier')}
  <div class="section-tete">
    <h2 id="avis-titre" data-titre-pose data-effet="titre-pose">${c.t('accueil.avis.titre')}</h2>
    <p>${c.t('accueil.avis.intro')}</p>
  </div>
  <div class="avis-grille">
    <div class="avis-cote">
      <div class="avis-note" data-visuel data-anime><span class="avis-chiffre"><span data-compteur="9">9</span> avis</span><span class="etoiles" aria-hidden="true">★★★★★</span><span>tous à cinq étoiles</span></div>
      <p>${c.t('accueil.avis.source')}</p>
    </div>
    <ul class="avis-liste" data-anime="cascade" tabindex="0" aria-label="Six des neuf avis, à faire défiler">
      ${[...d.avis].sort((a, b) => b.texte.length - a.texte.length).slice(0, 6).map((a) => html`<li><blockquote>${a.texte}</blockquote><span class="etoiles" role="img" aria-label="${c.s('accueil.avis.note')}">★★★★★</span><cite>${a.nom}</cite></li>`)}
    </ul>
  </div>
  <div class="labels" aria-labelledby="labels-titre">
    <h2 id="labels-titre" class="visuellement-cache">${c.t('accueil.labels.labels')}</h2>
    <div class="labels-grille">
      <div><h3>${c.t('accueil.labels.labels')}</h3><ul class="logos logos--labels" data-anime="cascade">${d.labels.labels.map((l) => html`<li>${c.media({ nom: l.image, alt: '', sizes: '120px' })}<span>${l.nom}</span></li>`)}</ul></div>
    </div>
  </div>
</section>

<section class="zone" id="zone" aria-labelledby="zone-titre">
  ${c.media({ nom: 'grok/faitage-vue', alt: 'Toits de tuiles et jardins vus depuis un faîtage, la forêt au loin', classe: 'zone-fond', cadrage: '50% 74%', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
  <div class="conteneur">
    ${liteau(c, 'Rubrique 06 · La zone', true)}
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
