/* Zinguerie et charpente : sur l'écran sombre, le zinc au fer à souder ; sous le titre, un cordon d'étain se trace,
   la pointe encore chaude. Les signes de la gouttière à cocher préparent la demande de devis. Signature : la charpente
   en plans de profondeur qui s'écartent au défilement (profondeur). */
import { html } from '../../outils/gabarit.mjs';
import { liteau, tel, finPage, vignettes } from '../gabarits/morceaux.mjs';

export const page = { cle: 'zinguerie-charpente', fichier: 'zinguerie-charpente', imagePartage: 'grok/zinc-soudure' };

const cle = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');

export default (c) => {
  const d = c.donnees.zinguerie;
  return html`
<section class="page-une zinc-une" id="debut">
  <div class="zinc-grille">
    <div class="zinc-texte">
      ${liteau(c.s('zinguerie.sur'), true)}
      <div class="zinc-titre-bloc">
        <h1 data-titre-pose="intro" data-grille="typo" data-effet="titre-pose">${c.tb('zinguerie.titre')}</h1>
        <svg class="cordon" data-effet="cordon-etain" viewBox="0 0 600 30" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="etain" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6f7"/><stop offset=".45" stop-color="#b9c1c4"/><stop offset="1" stop-color="#6d767a"/></linearGradient>
            <radialGradient id="chaud"><stop offset="0" stop-color="#fff6d8"/><stop offset=".35" stop-color="#ffb347"/><stop offset="1" stop-color="#ff6a00" stop-opacity="0"/></radialGradient>
          </defs>
          <path class="cordon-ombre" d="M4 17 C 70 13, 130 20, 200 16 S 330 12, 400 17 S 530 14, 596 16"/>
          <path class="cordon-trait" d="M4 15 C 70 11, 130 18, 200 14 S 330 10, 400 15 S 530 12, 596 14"/>
          <circle class="cordon-pointe" r="12" cx="4" cy="15" fill="url(#chaud)"/>
        </svg>
      </div>
      <p class="chapo">${c.t('zinguerie.chapo')}</p>
      <p class="une-actions">
        ${c.lien('devis', { ancre: 'demande', params: 'prestation=zinguerie', classe: 'bouton', texte: c.t('zinguerie.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        ${tel(c, 'bouton bouton--contour bouton--clair')}
      </p>
      <p class="une-info" data-info-cle>${c.t('zinguerie.info')}</p>
    </div>
    <div class="zinc-photo" data-iris-centre>
      ${c.media({ nom: 'grok/zinc-soudure', alt: c.s('zinguerie.alt'), cadrage: '50% 50%', priorite: true, sizes: '(max-width: 899px) 100vw, 55vw' })}
    </div>
  </div>
</section>

<section class="section signes-section" id="signes" aria-labelledby="signes-titre">
  <div class="conteneur">
    ${liteau(c.s('zinguerie.rubriqueSignes'))}
    <div class="signes" data-effet="signes-gouttiere" data-grille="manipuler" data-signes>
      <div>
        <h2 id="signes-titre" data-titre-pose data-effet="titre-pose">${c.t('zinguerie.signesTitre')}</h2>
        <p>${c.t('zinguerie.signesIntro')}</p>
        ${c.media({ nom: 'chantier-cheneau', alt: 'Chéneau en zinc neuf posé par l\u2019entreprise', classe: 'signes-photo', cadrage: '50% 50%', sizes: '(max-width: 899px) 100vw, 30vw' })}
      </div>
      <fieldset class="signes-liste">
        <legend class="visuellement-cache">${c.t('zinguerie.signesTitre')}</legend>
        ${d.signes.map((s) => html`<label class="signe"><input class="signe-case" type="checkbox" name="signe" value="${s}"><span>${s}</span></label>`)}
      </fieldset>
      <p class="signes-fin">
        ${c.lien('devis', { ancre: 'demande', params: 'prestation=zinguerie', classe: 'bouton signes-lien', texte: c.t('zinguerie.signesAction') })}
        <span class="signes-compte" aria-live="polite">${c.t('zinguerie.signesAucun')}</span>
      </p>
    </div>
  </div>
</section>

<section class="section zinc-section" id="zinguerie" aria-labelledby="zinc-titre">
  <div class="conteneur">
    ${liteau(c.s('zinguerie.rubriqueZinc'))}
    <div class="zinc-colonnes">
      <div>
        <h2 id="zinc-titre" data-titre-pose data-effet="titre-pose">${c.t('zinguerie.zincTitre')}</h2>
        <p class="zinc-texte-long">${c.t('zinguerie.zincTexte')}</p>
        <p class="zinc-materiaux">${c.t('zinguerie.materiaux')}</p>
      </div>
      <div>
        <p class="surtitre">${c.t('zinguerie.elementsTitre')}</p>
        <ul class="pieces" data-anime="cascade">${d.elements.map((e) => html`<li>${e}</li>`)}</ul>
      </div>
    </div>
    ${vignettes(c, d.chantiers, c.s('zinguerie.legende'))}
  </div>
</section>



<section class="section charpente" id="charpente" aria-labelledby="charpente-titre">
  <div class="conteneur">
    ${liteau(c.s('zinguerie.rubriqueCharpente'), true)}
    <div class="section-tete">
      <h2 id="charpente-titre" data-titre-pose data-effet="titre-pose">${c.t('zinguerie.charpenteTitre')}</h2>
      <p>${c.t('zinguerie.charpenteTexte')}</p>
    </div>
  </div>
  <div class="charpente-scene" data-effet="charpente-profondeur">
    <div class="charpente-plan charpente-fond">${c.media({ nom: 'grok/charpente-neuve', alt: c.s('zinguerie.charpenteAlt'), cadrage: '50% 40%', sizes: '100vw' })}</div>
    <div class="charpente-plan charpente-avant conteneur">
      <h3>${c.t('zinguerie.signesCharpenteTitre')}</h3>
      <fieldset class="alertes" data-signes>
        <legend class="visuellement-cache">${c.t('zinguerie.signesCharpenteTitre')}</legend>
        ${d.signesCharpente.map((s) => html`<label class="alerte"><input class="signe-case" type="checkbox" name="signe" value="${s}"><span>${s}</span></label>`)}
        <p class="signes-fin">${c.lien('devis', { ancre: 'demande', params: 'prestation=charpente', classe: 'bouton signes-lien', texte: c.t('zinguerie.charpenteAction') })} <span class="signes-compte" aria-live="polite">${c.t('zinguerie.signesAucun')}</span></p>
      </fieldset>
    </div>
  </div>
</section>
${finPage(c, 'zinguerie', 'zinguerie')}`;
};
