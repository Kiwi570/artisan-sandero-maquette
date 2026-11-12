/* Devis et contact : ouverture compacte quadrillée de liteaux, formulaire par étapes (module de la bibliothèque) repris
   du vrai formulaire du client, coordonnées, horaires, zone. Retour physique : la fiche se pose sur un liteau et
   reçoit le tampon « Reçu » (grille wouahou, point 7). */
import { html, brut } from '../../outils/gabarit.mjs';

export const page = { cle: 'devis', fichier: 'devis', imagePartage: 'grok/faitage-vue' };

const liteau = (rubrique, clair = false) => html`<div class="liteau${clair ? ' liteau--clair' : ''}" data-grille="fil" data-effet="liteau-fil" aria-hidden="true"><span class="rubrique">${rubrique}</span>${[8, 31, 54, 77, 96].map((x, i) => html`<span class="clou" style="left:${x}%;--i:${i}"></span>`)}</div>`;

export default (c) => {
  const d = c.donnees.devis;
  const icones = { couverture: 'M4 20 L16 8 L28 20 M8 17 V26 H24 V17', zinguerie: 'M4 10 H28 V14 Q28 18 24 18 H8 Q4 18 4 14 Z M22 18 V28', charpente: 'M3 22 L16 6 L29 22 M9 22 L16 13 L23 22 M16 6 V22', peinture: 'M6 6 H22 V12 H6 Z M14 12 V18 M12 18 H16 V28 H12 Z', ravalement: 'M5 27 V5 H27 V27 M5 12 H27 M5 19 H27 M14 5 V12 M20 12 V19 M11 19 V27' };
  return html`
<section class="page-une devis-une" id="debut" data-sans-visuel>
  <div class="conteneur devis-tete">
    <div>
      ${liteau('Devis gratuit · Artisan Sandero')}
      <h1 data-titre-pose="intro" data-grille="typo" data-effet="titre-pose">${c.tb('devis.titre')}</h1>
      <p class="chapo">${c.t('devis.chapo')}</p>
    </div>
    <div class="devis-appel" data-iris-centre>
      <p class="surtitre">${c.t('devis.info')}</p>
      <a class="devis-tel" href="tel:${c.site.contact.telephoneLien}" data-info-cle>${c.site.contact.telephone}</a>
      <p class="joignable" data-joignable hidden></p>
      <a class="bouton" href="#demande" data-action-principale data-sans-transition>${c.t('devis.formTitre')}</a>
    </div>
  </div>
</section>

<section class="section devis-corps" id="demande" aria-labelledby="demande-titre">
  <div class="conteneur devis-grille">
    <div class="fpe devis-form" data-module="formulaire-par-etapes" data-grille="retour" data-effet="tampon-recu">
      <div class="fpe__carton">
        <h2 id="demande-titre" class="devis-form-titre">${c.t('devis.formTitre')}</h2>
        <p class="devis-simule">${c.t('devis.simule')}</p>
        <p class="devis-choix" hidden>Prestation choisie : <b></b> · <button type="button" class="lien" data-aller="0">modifier</button></p>
        <form class="fpe__form" novalidate data-formulaire>
          <fieldset class="fpe__etape" data-etape="${c.s('devis.e1')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('devis.e1q')}</h3></legend>
            <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('devis.e1')}">
              ${d.prestations.map((p) => html`<label class="fpe__carte"><input type="radio" name="prestation" value="${p.v}" required><svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><path d="${p.v in icones ? icones[p.v] : ''}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg><span class="fpe__carte-titre">${p.nom}</span></label>`)}
            </div>
            <p class="fpe__note devis-signes" hidden></p>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('devis.e2')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('devis.e2q')}</h3></legend>
            <p class="fpe__sous">${c.t('devis.toiture')}</p>
            <div class="fpe__groupe fpe__puces" data-libelle="${c.s('devis.toiture')}">
              ${d.toitures.map((t) => html`<label class="fpe__puce"><input type="radio" name="toiture" value="${t}"><span>${t}</span></label>`)}
            </div>
            <p class="fpe__sous">${c.t('devis.etages')}</p>
            <div class="fpe__groupe fpe__puces" data-libelle="${c.s('devis.etages')}">
              ${d.etages.map((t) => html`<label class="fpe__puce"><input type="radio" name="etages" value="${t}"><span>${t}</span></label>`)}
            </div>
            <div class="fpe__champ"><label for="hauteur">${c.t('devis.hauteur')}</label><input id="hauteur" name="hauteur" type="text" inputmode="decimal" autocomplete="off" data-libelle="Hauteur"></div>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('devis.e3')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('devis.e3q')}</h3></legend>
            <div class="fpe__champ"><label for="adresse">${c.t('devis.adresse')}</label><input id="adresse" name="adresse" type="text" autocomplete="street-address" required></div>
            <div class="fpe__ligne">
              <div class="fpe__champ"><label for="cp">${c.t('devis.cp')}</label><input id="cp" name="cp" type="text" inputmode="numeric" autocomplete="postal-code" pattern="[0-9]{5}" required></div>
              <div class="fpe__champ"><label for="ville">${c.t('devis.ville')}</label><input id="ville" name="ville" type="text" autocomplete="address-level2" required></div>
            </div>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('devis.e4')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('devis.e4q')}</h3></legend>
            <div class="fpe__champ"><label for="nom">${c.t('devis.nom')}</label><input id="nom" name="nom" type="text" autocomplete="name" required></div>
            <div class="fpe__ligne">
              <div class="fpe__champ"><label for="tel">${c.t('devis.tel')}</label><input id="tel" name="tel" type="tel" autocomplete="tel" required></div>
              <div class="fpe__champ"><label for="email">${c.t('devis.email')}</label><input id="email" name="email" type="email" autocomplete="email"></div>
            </div>
            <div class="fpe__champ"><label for="message">${c.t('devis.message')}</label><textarea id="message" name="message" rows="3"></textarea></div>
            <label class="fpe__case"><input type="checkbox" name="accord" required data-hors-recap><span>${c.t('devis.accord')}</span></label>
            <p class="fpe__note">${c.t('devis.donnees')}</p>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('devis.e5')}" data-recap>
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('devis.e5q')}</h3></legend>
            <div class="fpe__recap"></div>
          </fieldset>
          <div class="fpe__nav">
            <button type="button" class="bouton bouton--contour" data-precedent>${c.t('devis.retour')}</button>
            <button type="button" class="bouton" data-suivant>${c.t('devis.suivant')}</button>
            <button type="submit" class="bouton">${c.t('devis.envoyer')}</button>
          </div>
        </form>
        <div class="fpe__fin" hidden>
          <h3 tabindex="-1">${c.t('devis.recuTitre')}</h3>
          <p>${c.t('devis.recuTexte')}</p>
          <p data-resume></p>
          <button type="button" class="bouton bouton--contour" data-recommencer>${c.t('devis.recommencer')}</button>
        </div>
        <span class="tampon-recu" aria-hidden="true">${c.t('devis.tampon')}</span>
      </div>
    </div>
    <aside class="devis-cote" aria-label="${c.s('devis.adresseTitre')}">
      ${c.media({ nom: 'artisan-gilet', alt: c.s('accueil.famille.altGilet'), cadrage: '30% 55%', classe: 'devis-photo', sizes: '(max-width: 900px) 100vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
      <div class="devis-carte">
        <h2>${c.t('devis.adresseTitre')}</h2>
        <p>${c.site.contact.adresse}<br><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><br><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a><br><a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(c.site.contact.adresse)}" target="_blank" rel="noopener">${c.t('commun.itineraire')} →</a></p>
        <p>${c.t('commun.horaires')}</p>
      </div>
      <div class="devis-carte">
        <h2>${c.t('devis.zoneTitre')}</h2>
        <svg class="schema-zone" viewBox="0 0 300 280" role="img" aria-label="${c.s('devis.zoneSchema')}" data-fx="trace">
          <path d="M20 260 C 75 175, 125 200, 175 135 S 260 75, 285 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5" opacity=".5" data-fx-trait/>
          ${c.donnees.communes.map((x) => { const cx = x.x * 2.5, cy = (x.y * .95 + 8) * 2.5, fin = x.ancre === 'fin'; return html`<g class="${x.siege ? 'siege' : ''}"><circle cx="${cx}" cy="${cy}" r="${x.siege ? 10 : 6.5}"/><text x="${fin ? cx - 13 : cx + 13}" y="${cy + 5}" text-anchor="${fin ? 'end' : 'start'}">${x.nom}</text></g>`; })}
        </svg>
        <p class="schema-note">${c.t('devis.zoneSchema')}</p>
      </div>
    </aside>
  </div>
</section>
`;
};
