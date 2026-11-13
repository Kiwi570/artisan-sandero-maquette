/* Deux planches dessinées pour Artisan Sandero, en SVG calculé (pas d'image) :
   - coupe() : la coupe d'un pavillon de Taverny, la nuit. Le toit est coupé : on y lit les cinq couches de la plongée
     (tuile, liteau, écran, isolant, chevrons). Chaque symptôme a sa « trace » (la goutte qui traverse les couches,
     la mousse, la gouttière qui déborde…), cachée tant qu'on ne l'a pas choisie.
   - elevation() : le même pavillon vu de la rue, en croquis d'encre sur la chaux, avec les pièces du toit
     (faîtage, noue, solin…) qui s'éclairent une à une.
   Les coordonnées sont celles du viewBox ; les points et étiquettes HTML sont placés en pourcentage par-dessus. */
import { brut } from '../../outils/gabarit.mjs';

const f = (n) => Math.round(n * 10) / 10;
const pts = (a) => a.map(([x, y]) => `${f(x)},${f(y)}`).join(' ');

/* ---------- Coupe (viewBox 1000 × 680) ---------- */
export const COUPE = { x: 70, y: 28, l: 900, h: 632 };
/* Pente à 3 pour 4 : égouts (180, 352) et (820, 352), faîtage (500, 112). d = profondeur sous la surface des tuiles. */
const surL = (t, d = 0) => [180 + 320 * t + 0.6 * d, 352 - 240 * t + 0.8 * d];
const surR = (t, d = 0) => [500 + 320 * t - 0.6 * d, 112 + 240 * t + 0.8 * d];
const sommet = (d) => [500, 112 + 1.25 * d];
const tL = (d, y) => (352 + 0.8 * d - y) / 240;
const tR = (d, y) => (y - 112 - 0.8 * d) / 240;
const PLANCHER = 358;
function bande(d1, d2, bas = false) {
  const a1 = bas ? tL(d1, PLANCHER) : 0, a2 = bas ? tL(d2, PLANCHER) : 0, b1 = bas ? tR(d1, PLANCHER) : 1, b2 = bas ? tR(d2, PLANCHER) : 1;
  return [surL(a1, d1), sommet(d1), surR(b1, d1), surR(b2, d2), sommet(d2), surL(a2, d2)];
}
const demi = (cote, d1, d2, t0, t1) => { const s = cote === 'g' ? surL : surR; return [s(t0, d1), s(t1, d1), s(t1, d2), s(t0, d2)]; };
const ligne = (d, bas = false) => [bas ? surL(tL(d, PLANCHER), d) : surL(0, d), sommet(d), bas ? surR(tR(d, PLANCHER), d) : surR(1, d)];
/* Petit carré posé dans la pente (liteau coupé). */
const carre = (s, t, d, r, sens) => { const [x, y] = s(t, d), u = sens === 'g' ? [.8, -.6] : [.8, .6], n = sens === 'g' ? [.6, .8] : [-.6, .8];
  return [[x - u[0] * r - n[0] * r, y - u[1] * r - n[1] * r], [x + u[0] * r - n[0] * r, y + u[1] * r - n[1] * r], [x + u[0] * r + n[0] * r, y + u[1] * r + n[1] * r], [x - u[0] * r + n[0] * r, y - u[1] * r + n[1] * r]]; };

export function coupe() {
  const liteaux = [];
  for (let t = .05; t < .97; t += .068) { liteaux.push(carre(surL, t, 13, 3.4, 'g'), carre(surR, t, 13, 3.4, 'd')); }
  const goutte = (i) => { const [x, y] = surL(.745, 12); return `<ellipse class="tr-goutte" style="--i:${i}" cx="${f(x)}" cy="${f(y)}" rx="3.4" ry="4.8"/>`; };
  const [tx, ty] = surL(.745, 64);
  const mousses = [.79, .83, .865, .9, .935].map((t, i) => { const [x, y] = surR(t, -3); return `<g transform="rotate(36.87 ${f(x)} ${f(y)})"><ellipse class="tr-mousse" style="--i:${i}" cx="${f(x)}" cy="${f(y)}" rx="${9 - i % 2 * 3}" ry="${4.6 - i % 2}"/></g>`; }).join('');
  const condens = [.2, .34, .48, .62, .76].flatMap((t, i) => [surL(t, 23), surR(1 - t, 23)].map(([x, y], j) => `<circle class="tr-perle" style="--i:${i * 2 + j}" cx="${f(x)}" cy="${f(y)}" r="2.2"/>`)).join('');
  const chaleur = [0, 1, 2].map((i) => `<path class="tr-chaleur" style="--i:${i}" d="M${632 + i * 22},440 C${626 + i * 22},410 ${650 + i * 22},392 ${646 + i * 22},372 S${672 + i * 18},322 ${700 + i * 14},300 S${728 + i * 12},262 ${742 + i * 10},244"/>`).join('');
  const sciure = [0, 1, 2, 3, 4, 5].map((i) => `<circle class="tr-sciure" style="--i:${i}" cx="${470 + i * 11}" cy="${355 - (i % 2) * 2}" r="1.6"/>`).join('');
  const etoiles = [[640, 40], [700, 86], [770, 28], [860, 130], [960, 40], [120, 60], [60, 150], [250, 30], [960, 210]].map(([x, y], i) => `<circle class="etoile" style="--i:${i}" cx="${x}" cy="${y}" r="${i % 3 ? 1.2 : 1.8}"/>`).join('');
  const marches = []; for (let i = 0; i < 9; i++) marches.push(`${560 + i * 15},${640 - i * 14.4} ${575 + i * 15},${640 - i * 14.4} ${575 + i * 15},${640 - (i + 1) * 14.4}`);
  return brut(`<svg class="coupe-svg" viewBox="${COUPE.x} ${COUPE.y} ${COUPE.l} ${COUPE.h}" role="img" aria-labelledby="coupe-titre" focusable="false">
  <title id="coupe-titre">Coupe d'un pavillon la nuit : le toit et ses cinq couches, les combles, l'étage et le rez-de-chaussée.</title>
  <defs>
    <pattern id="hachure" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" class="hachure-trait"/></pattern>
    <pattern id="laine" width="18" height="12" patternUnits="userSpaceOnUse"><path d="M0,6 q4.5,-6 9,0 t9,0" class="laine-trait"/></pattern>
    <radialGradient id="lueur"><stop offset="0" stop-color="#f3c66b" stop-opacity=".55"/><stop offset="1" stop-color="#f3c66b" stop-opacity="0"/></radialGradient>
    <radialGradient id="lune"><stop offset=".55" stop-color="#efe7db" stop-opacity=".18"/><stop offset="1" stop-color="#efe7db" stop-opacity="0"/></radialGradient>
    <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3c66b" stop-opacity=".32"/><stop offset="1" stop-color="#f3c66b" stop-opacity="0"/></linearGradient>
  </defs>
  <g class="ciel" aria-hidden="true"><circle cx="890" cy="74" r="54" fill="url(#lune)"/><circle class="lune" cx="890" cy="74" r="20"/><circle class="lune-ombre" cx="900" cy="68" r="17"/></g>
  <g class="maison">
    <line class="sol" x1="30" y1="640" x2="970" y2="640"/>
    ${[60, 96, 128, 870, 910, 948].map((x) => `<path class="herbe" d="M${x},640 l3,-8 M${x + 6},640 l-2,-6"/>`).join('')}
    <!-- murs coupés, planchers -->
    <rect class="lueur-piece" x="240" y="510" width="520" height="130" fill="url(#lueur)" opacity=".35"/>
    <polygon class="cone" points="420,548 380,640 460,640" fill="url(#cone)"/>
    <path class="coupe-mur" d="M222,358 h18 v42 h-18 Z M222,456 h18 v184 h-18 Z M760,358 h18 v182 h-18 Z M760,600 h18 v40 h-18 Z"/>
    <rect class="fenetre-lueur" x="214" y="400" width="34" height="56" fill="url(#lueur)"/><line class="vitre" x1="231" y1="400" x2="231" y2="456"/>
    <rect class="fenetre-lueur" x="752" y="540" width="34" height="60" fill="url(#lueur)"/><line class="vitre" x1="769" y1="540" x2="769" y2="600"/>
    <rect class="enduit" x="778" y="358" width="5" height="282"/>
    <rect class="coupe-plancher" x="240" y="500" width="520" height="10"/>
    <polyline class="escalier" points="${marches.join(' ')}"/>
    <path class="lampe" d="M420,510 v26 M406,548 l14,-12 l14,12 Z"/>
    <path class="radiateur" d="M688,494 v-26 h44 v26 M697,468 v26 M706,468 v26 M715,468 v26 M724,468 v26"/>
    <!-- combles : plancher, lit -->
    <rect class="coupe-plancher" x="240" y="${PLANCHER}" width="520" height="10"/>
    <path class="lit" d="M430,${PLANCHER} v-14 h92 v14 M436,344 v-8 h22 v8"/>
    <!-- le toit coupé : cinq couches -->
    <polygon class="couche couche-5" points="${pts(bande(19, 37))}"/>
    <polygon class="couche couche-4" points="${pts(bande(37, 60, true))}"/>
    <polygon class="couche couche-4-laine" points="${pts(bande(37, 60, true))}" fill="url(#laine)"/>
    <polyline class="plaque" points="${pts(ligne(62, true))}"/>
    <polyline class="couche couche-3" points="${pts(ligne(17.5))}"/>
    ${liteaux.map((c) => `<polygon class="couche couche-2" points="${pts(c)}"/>`).join('')}
    <polygon class="couche couche-1" points="${pts(bande(0, 9))}"/>
    <path class="faitiere" d="M482,${f(sommet(0)[1] + 4)} a18,15 0 0 1 36,0"/>
    <!-- cheminée et solin, fenêtre de toit -->
    <rect class="cheminee" x="330" y="124" width="34" height="376"/>
    <rect class="cheminee" x="324" y="116" width="46" height="9"/>
    <path class="solin" d="M316,250.5 L330,240 V226 M364,198 V214 L378,203.5"/>
    <polygon class="velux" points="${pts([surR(.45, -5), surR(.57, -5), surR(.57, 62), surR(.45, 62)])}"/>
    <polygon class="velux-lueur" points="${pts([surR(.46, 2), surR(.56, 2), surR(.56, 60), surR(.46, 60)])}"/>
    <line class="vitre" x1="${f(surR(.455, 3)[0])}" y1="${f(surR(.455, 3)[1])}" x2="${f(surR(.565, 3)[0])}" y2="${f(surR(.565, 3)[1])}"/>
    <!-- gouttières et descente -->
    <path class="gouttiere" d="M165,356 a9,9 0 0 0 18,0 M817,356 a9,9 0 0 0 18,0"/>
    <path class="descente" d="M826,366 L796,392 V628 l10,8"/>
  </g>
  <!-- traces des symptômes -->
  <g class="trace" data-trace="plafond">
    <polygon class="tr-couche" points="${pts(bande(0, 9))}"/>
    <polygon class="tr-trou" points="${pts(demi('g', -1, 10, .728, .762))}"/>
    <polygon class="tr-tuile" points="${pts(demi('g', -12, -2, .686, .726))}"/>
    ${[0, 1, 2].map(goutte).join('')}
    <g transform="rotate(-36.87 ${f(tx)} ${f(ty)})"><ellipse class="tr-tache" cx="${f(tx)}" cy="${f(ty)}" rx="30" ry="7"/></g>
  </g>
  <g class="trace" data-trace="mousse">
    <polygon class="tr-couche" points="${pts(demi('d', 0, 9, .5, 1))}"/>
    ${mousses}
  </g>
  <g class="trace" data-trace="gouttiere">
    <path class="tr-zinc" d="M817,356 a9,9 0 0 0 18,0 M826,366 L796,392 V628 l10,8"/>
    <ellipse class="tr-feuille" cx="822" cy="359" rx="4" ry="2"/><ellipse class="tr-feuille" cx="830" cy="360" rx="3.4" ry="1.8"/>
    ${[0, 1, 2].map((i) => `<path class="tr-debord" style="--i:${i}" d="M${834 + i * 3},357 q${8 + i * 3},4 ${9 + i * 4},${34 + i * 10} v${70 + i * 30}"/>`).join('')}
  </g>
  <g class="trace" data-trace="cheminee">
    <path class="tr-zinc" d="M316,250.5 L330,240 V226 M364,198 V214 L378,203.5"/>
    <path class="tr-filet" d="M328,244 V356"/>
    <ellipse class="tr-flaque" cx="322" cy="356" rx="16" ry="2.6"/>
  </g>
  <g class="trace" data-trace="combles">
    <polyline class="tr-ecran" points="${pts(ligne(17.5))}"/>
    ${condens}
  </g>
  <g class="trace" data-trace="froid">
    <polygon class="tr-couche" points="${pts(bande(37, 60, true))}"/>
    <polygon class="tr-tasse" points="${pts(demi('d', 37, 51, .62, .76))}"/>
    ${chaleur}
  </g>
  <g class="trace" data-trace="charpente">
    <polygon class="tr-couche" points="${pts(bande(19, 37))}"/>
    <path class="tr-affaisse" d="M176,346 Q330,${f(232)} 500,128 Q670,${f(232)} 824,346"/>
    ${sciure}
  </g>
  <g class="trace" data-trace="facade">
    <rect class="tr-enduit" x="778" y="358" width="5" height="282"/>
    <path class="tr-fissure" d="M781,604 l4,9 -4,8 5,9 -4,7 3,7"/>
    <path class="tr-fissure" d="M781,470 l3,8 -3,7 4,9"/>
  </g>
</svg>`);
}

/* ---------- Élévation (viewBox 1200 × 640) ---------- */
export const ELEVATION = { l: 1200, h: 640 };
export function elevation() {
  const pan = [[260, 338], [440, 176], [760, 176], [760, 338]];
  const rangs = []; for (let y = 191; y < 338; y += 14.6) rangs.push(`M240,${f(y)} H780`);
  const joints = []; for (let y = 184, k = 0; y < 336; y += 14.6, k++) for (let x = 250 + (k % 2) * 13; x < 780; x += 26) joints.push(`M${x},${f(y)} v6`);
  const faitieres = []; for (let x = 446; x < 756; x += 22) faitieres.push(`M${x},176 a11,7 0 0 1 22,0`);
  const dents = []; for (let x = 294; x < 690; x += 9) dents.push(`M${x},350 v6`);
  const aile = [[700, 372], [850, 186], [1000, 372]];
  const rangsAile = []; for (let i = 1; i < 10; i++) { const k = i / 10; rangsAile.push(`M${f(655 + (828 - 655) * k)},${f(338 - (338 - 190) * k)} L${f(675 + (850 - 675) * k)},${f(374 - (374 - 165) * k)}`); }
  return brut(`<svg class="elevation-svg" viewBox="0 0 ${ELEVATION.l} ${ELEVATION.h}" role="img" aria-labelledby="elevation-titre" focusable="false">
  <title id="elevation-titre">Croquis d'un pavillon vu de la rue, toit à croupe et aile en pignon, avec les pièces de la toiture.</title>
  <defs><clipPath id="pan-clip"><polygon points="${pts(pan)}"/></clipPath></defs>
  <g class="croquis">
    <line class="sol" x1="200" y1="572" x2="1110" y2="572"/>
    <path class="buisson" d="M214,572 c-8,-22 6,-40 26,-36 c6,-18 34,-16 38,4 c18,-2 26,18 14,32"/>
    <!-- corps principal -->
    <rect class="mur" x="290" y="356" width="460" height="216"/>
    <path class="baie" d="M340,430 h62 v80 h-62 Z M371,430 v80 M460,430 h62 v80 h-62 Z M491,430 v80 M560,440 h50 v132"/>
    <polygon class="pan" points="${pts(pan)}"/>
    <g clip-path="url(#pan-clip)"><path class="rang" d="${rangs.join(' ')}"/><path class="joint" d="${joints.join(' ')}"/></g>
    <path class="dents" d="${dents.join(' ')}"/>
    <line class="trait-fort" x1="260" y1="338" x2="440" y2="176"/>
    <line class="trait-fort" x1="440" y1="176" x2="760" y2="176"/>
    <path class="faitieres" d="${faitieres.join(' ')}"/>
    <line class="trait" x1="260" y1="338" x2="700" y2="338"/>
    <rect class="chatiere" x="392" y="282" width="24" height="16"/><path class="trait-fin" d="M397,286 v8 M402,286 v8 M407,286 v8 M412,286 v8"/>
    <!-- cheminée, fenêtre de toit -->
    <rect class="mur" x="535" y="120" width="35" height="106"/><rect class="mur" x="528" y="112" width="49" height="9"/>
    <rect class="zinc" x="527" y="220" width="51" height="12"/>
    <rect class="zinc" x="583" y="243" width="74" height="64"/><rect class="vitrage" x="591" y="251" width="58" height="48"/><path class="trait-fin" d="M620,251 v48 M591,275 h58"/>
    <!-- gouttière, descente -->
    <path class="zinc-trait" d="M256,340 H702 M256,340 v5 q0,5 5,5 H698 q4,0 4,-5 v-5"/>
    <path class="zinc-trait" d="M301,350 v8 q0,6 4,10 V560 h8"/>
    <!-- aile en pignon : noue, rive -->
    <polygon class="pan-aile" points="655,338 828,190 850,165 675,374"/>
    <path class="rang" d="${rangsAile.join(' ')}"/>
    <line class="zinc-trait" x1="655" y1="338" x2="828" y2="190"/>
    <polygon class="mur" points="${pts(aile)} 1000,572 700,572"/>
    <path class="baie" d="M830,262 h40 v44 h-40 Z M780,452 h140 v74 h-140 Z M850,452 v74"/>
    <polyline class="rive" points="675,374 850,165 1025,374"/>
  </g>
  <g class="trace" data-trace="faitage"><line x1="440" y1="176" x2="760" y2="176" pathLength="1"/></g>
  <g class="trace" data-trace="noue"><line x1="655" y1="338" x2="828" y2="190" pathLength="1"/></g>
  <g class="trace" data-trace="solin"><rect x="527" y="220" width="51" height="12" pathLength="1"/></g>
  <g class="trace" data-trace="abergement"><rect x="583" y="243" width="74" height="64" pathLength="1"/></g>
  <g class="trace" data-trace="aretier"><line x1="260" y1="338" x2="440" y2="176" pathLength="1"/></g>
  <g class="trace" data-trace="chatiere"><rect x="392" y="282" width="24" height="16" pathLength="1"/></g>
  <g class="trace" data-trace="egout"><line x1="260" y1="338" x2="700" y2="338" pathLength="1"/></g>
  <g class="trace" data-trace="moineaux"><line x1="292" y1="353" x2="690" y2="353" pathLength="1"/></g>
  <g class="trace" data-trace="gouttiere"><path d="M256,345 H702 M301,350 v8 q0,6 4,10 V560 h8" pathLength="1"/></g>
  <g class="trace" data-trace="rive"><polyline points="675,374 850,165 1025,374" pathLength="1"/></g>
</svg>`);
}

/* Fil d'une étiquette vers sa pièce (dans le même viewBox). */
export function fils(pieces) {
  return brut(`<svg class="fils-svg" viewBox="0 0 ${ELEVATION.l} ${ELEVATION.h}" aria-hidden="true" focusable="false">${pieces.map((p) => {
    const [x, y, cote] = p.etiquette, [cx, cy] = p.cible;
    const [ax, ay] = cote === 'haut' ? [x, y + 8] : cote === 'gauche' ? [x + 8, y] : [x - 8, y];
    return `<g class="fil" data-fil="${p.id}"><line x1="${ax}" y1="${ay}" x2="${cx}" y2="${cy}"/><circle cx="${cx}" cy="${cy}" r="4.5"/></g>`;
  }).join('')}</svg>`);
}
