/* Effets propres à Artisan Sandero (« Sous les tuiles »). Le socle gère l'ouverture, le voile en rangs de tuiles,
   l'en-tête, le mode calme, les mesures et la bibliothèque d'effets. Ici seulement ce qui est propre au client ;
   chaque effet porte data-effet="nom-du-plan" dans les pages. */
import { demarrer, etat, versObjet } from './socle/index.js?v=11';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
/* Mode calme retiré en v3 (à la demande du client) : les animations jouent toujours. */
const calme = () => false;

/* ---------- Titres posés tuile par tuile (data-titre-pose, grille wouahou point 5) ---------- */
function decouperMots(el) {
  if (el.dataset.decoupe) return;
  el.dataset.decoupe = '1';
  const marcher = (n) => {
    for (const enfant of [...n.childNodes]) {
      if (enfant.nodeType === 3) {
        const morceaux = enfant.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        for (const m of morceaux) {
          if (!m) continue;
          if (/^\s+$/.test(m)) frag.append(document.createTextNode(m));
          else { const s = document.createElement('span'); s.className = 'mot'; s.textContent = m; frag.append(s); }
        }
        enfant.replaceWith(frag);
      } else if (enfant.nodeType === 1) marcher(enfant);
    }
  };
  marcher(el);
}
function poserTitre(el, delai = 0) {
  if (!el || el.classList.contains('pose')) return;
  const mots = $$('.mot', el);
  if (!gsap || calme() || !mots.length) { el.classList.add('pose'); return; }
  gsap.fromTo(mots, { rotationX: -88, opacity: 0, transformPerspective: 600 }, {
    rotationX: 0, opacity: 1, duration: .75, ease: 'back.out(1.7)', stagger: .055, delay: delai,
    onComplete: () => { el.classList.add('pose'); gsap.set(mots, { clearProps: 'transform,opacity' }); },
  });
}
/* Titre posé sur le toit : les mots d'une même ligne tombent ensemble, rang par rang, comme des tuiles posées,
   et leur ombre se resserre en touchant (variable --o). */
function poserTitreToit(el, delai = 0) {
  if (!el || el.classList.contains('pose')) return;
  const mots = $$('.mot', el);
  if (!gsap || calme() || !mots.length) { el.classList.add('pose'); return; }
  const lignes = [];
  let y = null;
  mots.forEach((m) => { const t = m.offsetTop; if (y === null || Math.abs(t - y) > 6) { lignes.push([]); y = t; } lignes[lignes.length - 1].push(m); });
  const tl = gsap.timeline({ delay: delai, onComplete: () => { el.classList.add('pose'); gsap.set(mots, { clearProps: 'transform,opacity' }); mots.forEach((m) => m.style.removeProperty('--o')); } });
  lignes.forEach((l, i) => {
    tl.fromTo(l, { y: -54, rotationX: -58, opacity: 0, '--o': 1, transformPerspective: 700, transformOrigin: '50% 0%' },
      { y: 0, rotationX: 0, opacity: 1, '--o': 0, duration: .58, ease: 'back.out(1.25)', stagger: .045 }, i * .2);
  });
}
const poserOuverture = (el, delai = 0) => (el && el.classList.contains('une-titre') ? poserTitreToit(el, delai) : poserTitre(el, delai));
function titres() {
  const tous = $$('[data-titre-pose]');
  tous.forEach(decouperMots);
  if (calme()) { tous.forEach((t) => t.classList.add('pose')); return; }
  const io = new IntersectionObserver((entrees) => {
    for (const e of entrees) if (e.isIntersecting) { poserTitre(e.target); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -12% 0px', threshold: .2 });
  tous.filter((t) => t.dataset.titrePose !== 'intro').forEach((t) => io.observe(t));
}

/* ---------- Trame des liteaux (fil) : chaque liteau se cloue en entrant à l'écran ---------- */
function liteaux() {
  const tous = $$('.liteau');
  if (calme()) { tous.forEach((l) => l.classList.add('pose')); return; }
  const io = new IntersectionObserver((entrees) => {
    for (const e of entrees) if (e.isIntersecting) { e.target.classList.add('pose'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  tous.forEach((l) => io.observe(l));
}

/* Toit vu du faîtage (photo ouverture-faitage, 1920 × 1289) : trois rangs de tuiles mécaniques relevés sur le pan droit
   (lignes des nez, joints), douze cellules à quatre coins [rang, colonne, x1 y1 … x4 y4]
   (haut gauche, haut droite, nez droite, nez gauche). */
const PHOTO = { w: 1920, h: 1289 };
const CELLULES = [["c",0,[1030,970,1183,977,1205,1040,1037,1037]],["c",1,[1183,977,1349,983,1370,1043,1205,1040]],["c",2,[1349,983,1505,989,1525,1046,1370,1043]],["c",3,[1505,989,1653,994,1672,1049,1525,1046]],["d",0,[1037,1037,1206,1041,1240,1127,1047,1125]],["d",1,[1206,1041,1396,1044,1430,1129,1240,1127]],["d",2,[1396,1044,1579,1048,1612,1130,1430,1129]],["d",3,[1579,1048,1750,1051,1782,1132,1612,1130]],["e",0,[1046,1125,1249,1127,1286,1251,1060,1251]],["e",1,[1249,1127,1468,1129,1504,1251,1286,1251]],["e",2,[1468,1129,1684,1131,1720,1251,1504,1251]],["e",3,[1684,1131,1882,1133,1917,1251,1720,1251]]];

/* Position du soleil sur Taverny (49,016 N ; 2,220 E), formule simplifiée : azimut depuis le nord, hauteur en degrés. */
function soleil(d = new Date()) {
  const rad = Math.PI / 180, lat = 49.0156 * rad, n = d.getTime() / 86400000 + 2440587.5 - 2451545;
  const L = (280.46 + .9856474 * n) % 360, g = ((357.528 + .9856003 * n) % 360) * rad;
  const lam = (L + 1.915 * Math.sin(g) + .02 * Math.sin(2 * g)) * rad, eps = (23.439 - .0000004 * n) * rad;
  const ra = Math.atan2(Math.cos(eps) * Math.sin(lam), Math.cos(lam)), dec = Math.asin(Math.sin(eps) * Math.sin(lam));
  const H = (((18.697374558 + 24.06570982441908 * n) % 24) * 15 + 2.2195) * rad - ra;
  const el = Math.asin(Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(H));
  const az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(lat) - Math.tan(dec) * Math.cos(lat)) / rad + 180;
  return { az: (az + 360) % 360, el: el / rad };
}

/* ---------- Ouverture de l'accueil : la plongée sous les tuiles (grille wouahou : scène, manipuler) ----------
   Une seule scène en plein écran, dessinée dans une seule toile (rien d'autre ne bouge que la toile et les textes,
   déplacés par transform) : le défilement est lissé image par image, sans à-coups.
   Premier écran : le titre sur un panneau de chaux à gauche, le toit vu du faîtage à droite. Au défilement, le panneau
   glisse, la photo prend tout l'écran et la caméra plonge jusqu'à une grande tuile du pan droit (400 à 520 px sur
   ordinateur), qu'on soulève soi-même. Puis elle s'envole et l'on passe par son trou : les liteaux ; par le vide entre
   deux liteaux : l'écran sous-toiture ; par une fente dans l'écran : l'isolant ; à travers la laine : les chevrons.
   Chaque couche se voit d'abord au fond de l'ouverture, plus petite, puis vient à sa place (profondeur). */
const borne = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lin = (a, b, x) => borne((x - a) / (b - a));
const doux = (a, b, x) => { const t = lin(a, b, x); return t * t * (3 - 2 * t); };
const melange = (a, b, t) => a + (b - a) * t;
/* Calendrier : progression de 0 à 1 sur toute la hauteur de la section (sept écrans). */
const SCENE = {
  panneau: [.012, .085],
  plonge: [.045, .2],
  repos: [.19, .225],
  leve: [.285, .33],
  envol: [.33, .39],
  passages: [[.385, .5], [.56, .65], [.70, .79], [.84, .92]],
  /* Légendes en relais : chacune reste jusqu'à l'entrée de la suivante (au milieu du passage), jamais d'écran sans texte. */
  legendes: [[.03, .455], [.455, .615], [.615, .755], [.755, .89], [.89, 1.01]],
  arrets: [.25, .53, .68, .815, .97],
};
/* Couches sous la tuile : image (1920 px), point visé, zoom de repos (fois la couverture de l'écran), fenêtre vers la suivante. */
const COUCHES = [
  null,
  { src: 'liteaux-ecran', w: 1920, h: 1289, foyer: [1059, 577], repos: 1.9, fenetre: { type: 'vide', r: [967, 557, 1151, 597] } },
  { src: 'couche-ecran', w: 1920, h: 1280, foyer: [1150, 602], repos: 1.15, fenetre: { type: 'fente', r: [985, 572, 1315, 632] } },
  { src: 'couche-isolant', w: 1920, h: 1280, foyer: [976, 760], repos: 1.1, fenetre: { type: 'laine', c: [976, 760], rx: 150, ry: 112 } },
  { src: 'charpente-neuve', w: 1920, h: 1280, foyer: [1010, 640], repos: 1.02 },
];
const HD = { x: 880, y: 880, w: 1040, h: 409 };
const HEROS = CELLULES.find(([r, q]) => r === 'd' && q === 1)[2];
const HEROS_P = [0, 2, 4, 6].map((i) => [HEROS[i], HEROS[i + 1]]);
const HEROS_C = [HEROS_P.reduce((s, a) => s + a[0], 0) / 4, HEROS_P.reduce((s, a) => s + a[1], 0) / 4];
const HEROS_NEZ = Math.hypot(HEROS_P[2][0] - HEROS_P[3][0], HEROS_P[2][1] - HEROS_P[3][1]);

let plongee = null;
function plongeeScene() {
  const sec = $('.plongee');
  if (!sec || !gsap || !window.ScrollTrigger) return;
  const scene = $('.plongee-collant', sec), zone = $('.toit', sec), toile = $('.toit-toile', sec), img = $('.toit-photo img', sec);
  if (!scene || !zone || !toile || !img) return;
  const legendes = $$('.plongee-couche', sec), rail = $$('.plongee-rail li[data-rail]', sec), une = $('.plongee-une', sec), ombreTexte = $('.plongee-ombre', sec);
  const legende = $('.toit-soleil', sec);
  const ctx = toile.getContext('2d', { alpha: false });
  /* Images décodées d'avance (ImageBitmap) : aucun décodage ni envoi au processeur graphique pendant le défilement. */
  const charge = (url) => {
    const im = new Image(); im.decoding = 'async'; im.src = url;
    im.addEventListener('load', () => {
      const fini = (b) => { if (b) im.bmp = b; try { ctx.drawImage(im.bmp || im, 0, 0, 2, 2); } catch {} salir(); };
      if (window.createImageBitmap) createImageBitmap(im).then(fini, () => fini(null)); else fini(null);
    }, { once: true });
    return im;
  };
  const bmp = (im) => im.bmp || im;
  const photo = charge('/assets/images/grok/zone-faitage-1920.webp');
  let hd = null, couches = [];
  let W = 0, H = 0, dpr = 1, mobile = false, panneau = 0, raf = 0, dernierT = 0, st = null;
  /* Sans processeur graphique (rendu logiciel), la toile est dessinée en plus petit : la scène reste fluide. */
  const lent = (() => { try { const g = document.createElement('canvas').getContext('webgl'); const e = g && g.getExtension('WEBGL_debug_renderer_info'); const r = e ? String(g.getParameter(e.UNMASKED_RENDERER_WEBGL)) : ''; return !g || /swiftshader|llvmpipe|software|basic render/i.test(r); } catch { return true; } })();
  let base = null, region = null, etape = null, cam = { S: 1, tx: 0, ty: 0, a: 0 }, repos = [];
  const etat = { p: 0, cible: 0, intro: 1, k: 0, v: 0, survol: false, garde: false, invite: false, actif: -2, fil: -2 };
  let ombre = { x: -.3, y: .6, l: 1, nuit: false };
  /* Dernière image dessinée : on ne redessine que si quelque chose a changé et que la scène est à l'écran. */
  let sale = true;
  const vu = { p: -1, k: -1, fin: null, i: 0 };

  const pret = (im) => !!im && (!!im.bmp || (im.complete && im.naturalWidth > 0));
  const poly = (pts) => { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); };
  const dedans = ([x, y], p) => { let ok = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) { const [xi, yi] = p[i], [xj, yj] = p[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ok = !ok; } return ok; };
  const vers = (c, [x, y]) => [c.tx + x * c.S, c.ty + y * c.S];
  /* Caméra qui couvre un rectangle de l'écran (x0, y0, x1, y1) avec un point de l'image au centre. */
  function couvrir(w, h, foyer, zoom, x0, y0, x1, y1, cible) {
    const S = Math.max((x1 - x0) / w, (y1 - y0) / h) * zoom;
    const c = cible || [(x0 + x1) / 2, (y0 + y1) / 2];
    return { S, tx: borne(c[0] - foyer[0] * S, x1 - w * S, x0), ty: borne(c[1] - foyer[1] * S, y1 - h * S, y0) };
  }
  /* Interpolation de caméra : échelle en logarithme, un point de l'image glisse d'une position à l'autre. */
  function entre(A, B, t, f) {
    const S = A.S * Math.pow(B.S / A.S, t);
    const x = melange(f[0] * A.S + A.tx, f[0] * B.S + B.tx, t), y = melange(f[1] * A.S + A.ty, f[1] * B.S + B.ty, t);
    return { S, tx: x - f[0] * S, ty: y - f[1] * S };
  }

  function mesurer() {
    W = scene.clientWidth; H = scene.clientHeight;
    if (!W || !H) return false;
    dpr = Math.max(lent ? .6 : 1, Math.min(2, devicePixelRatio || 1, Math.sqrt((lent ? 5e5 : 2.2e6) / (W * H)))); mobile = W < 761;
    toile.width = Math.round(W * dpr); toile.height = Math.round(H * dpr);
    panneau = une ? (mobile ? une.offsetHeight : une.offsetWidth) : 0;
    /* L'image sous la toile (premier affichage, retour arrière) est cadrée comme la toile : même zone libre. */
    sec.style.setProperty('--bande', mobile ? `${panneau}px` : '0px');
    /* Premier écran : la photo couvre ce qui reste à droite du panneau (ou sous la bande, au téléphone). */
    const foyer = mobile ? [1180, 900] : [1010, 880];
    region = mobile ? couvrir(PHOTO.w, PHOTO.h, foyer, 1, 0, panneau, W, H) : couvrir(PHOTO.w, PHOTO.h, foyer, 1, panneau, 0, W, H);
    base = couvrir(PHOTO.w, PHOTO.h, foyer, 1, 0, 0, W, H, mobile ? [W * .5, H * .62] : [W * .5, H * .55]);
    /* La tuile au premier plan : 400 à 520 px de large sur ordinateur, 70 % de l'écran sur téléphone. */
    const largeur = mobile ? W * .7 : Math.min(520, Math.max(400, W * .33));
    etape = couvrir(PHOTO.w, PHOTO.h, HEROS_C, Math.max(largeur / HEROS_NEZ, base.S * 1.05) / Math.max(W / PHOTO.w, H / PHOTO.h), 0, 0, W, H, mobile ? [W * .5, H * .38] : [W * .63, H * .46]);
    repos = COUCHES.map((c) => c && couvrir(c.w, c.h, c.foyer, c.repos, 0, 0, W, H, mobile ? [W * .5, H * .42] : [W * .56, H * .48]));
    /* Redessiner tout de suite : une toile retaillée est vide. */
    if (pret(photo)) { dessiner(etat.p); zone.classList.add('toile-prete'); }
    salir();
    return true;
  }

  /* ----- Couche 0 : le toit vu du faîtage, puis la tuile ----- */
  function camera0(p) {
    const ep = doux(SCENE.panneau[0], SCENE.panneau[1], p), a = doux(SCENE.plonge[0], SCENE.plonge[1], p);
    let c = entre(region, base, ep, HEROS_C);
    if (etat.intro !== 1) { const z = etat.intro, cx = mobile ? W * .5 : (panneau + W) / 2, cy = H * .7; c = { S: c.S * z, tx: cx + (c.tx - cx) * z, ty: cy + (c.ty - cy) * z }; }
    c = entre(c, etape, a, HEROS_C);
    /* La photo couvre toujours la partie libre de l'écran (à droite du panneau, ou sous la bande). */
    const x0 = mobile ? 0 : panneau * (1 - ep), y0 = mobile ? panneau * (1 - ep) : 0;
    c.tx = borne(c.tx, W - PHOTO.w * c.S, x0); c.ty = borne(c.ty, H - PHOTO.h * c.S, y0);
    c.a = a; c.ep = ep;
    return c;
  }
  /* Morceau de la photo sous un rectangle de l'écran ; la zone du pan droit vient de la version double définition. */
  function source(c, x, y, w, h) {
    const px = (x - c.tx) / c.S, py = (y - c.ty) / c.S, pw = w / c.S, ph = h / c.S;
    if (hd && pret(hd) && c.S > .9 && px >= HD.x && py >= HD.y && px + pw <= HD.x + HD.w && py + ph <= HD.y + HD.h) return [bmp(hd), (px - HD.x) * 2, (py - HD.y) * 2, pw * 2, ph * 2];
    const k = photo.naturalWidth / PHOTO.w;
    return [bmp(photo), px * k, py * k, pw * k, ph * k];
  }
  function peindrePhoto(c) {
    const k = photo.naturalWidth / PHOTO.w;
    const x0 = Math.max(0, -c.tx / c.S), y0 = Math.max(0, -c.ty / c.S), x1 = Math.min(PHOTO.w, (W - c.tx) / c.S), y1 = Math.min(PHOTO.h, (H - c.ty) / c.S);
    /* Quand la version fine des tuiles couvre tout l'écran, elle seule est dessinée (une image par image, pas deux). */
    const couvreHD = hd && pret(hd) && c.S > .9 && x0 >= HD.x && y0 >= HD.y && x1 <= HD.x + HD.w && y1 <= HD.y + HD.h && c.tx <= 0 && c.ty <= 0 && c.tx + PHOTO.w * c.S >= W && c.ty + PHOTO.h * c.S >= H;
    if (x1 > x0 && y1 > y0 && !couvreHD) ctx.drawImage(bmp(photo), x0 * k, y0 * k, (x1 - x0) * k, (y1 - y0) * k, c.tx + x0 * c.S, c.ty + y0 * c.S, (x1 - x0) * c.S, (y1 - y0) * c.S);
    if (hd && pret(hd) && c.S > .9) {
      const a0 = Math.max(x0, HD.x), b0 = Math.max(y0, HD.y), a1 = Math.min(x1, HD.x + HD.w), b1 = Math.min(y1, HD.y + HD.h);
      if (a1 > a0 && b1 > b0) ctx.drawImage(bmp(hd), (a0 - HD.x) * 2, (b0 - HD.y) * 2, (a1 - a0) * 2, (b1 - b0) * 2, c.tx + a0 * c.S, c.ty + b0 * c.S, (a1 - a0) * c.S, (b1 - b0) * c.S);
    }
  }
  function cellule(c) {
    const p = HEROS_P.map((a) => vers(c, a)), xs = p.map((a) => a[0]), ys = p.map((a) => a[1]);
    const bx = Math.min(...xs), by = Math.min(...ys);
    return { p, bx, by, bw: Math.max(...xs) - bx, bh: Math.max(...ys) - by, h: (p[3][1] - p[0][1] + p[2][1] - p[1][1]) / 2 };
  }
  function nez(c, k) {
    const [, , br, bl] = c.p, d = c.h * .5 * k, ex = .06 * k, cx = (bl[0] + br[0]) / 2;
    return { bl: [cx + (bl[0] - cx) * (1 + ex), bl[1] - d], br: [cx + (br[0] - cx) * (1 + ex), br[1] - d], d, ex, cx, ep: c.h * .15 * Math.min(1, k * 1.8) };
  }
  /* Sous la tuile : la couche des liteaux elle-même, vue au fond, avec l'ombre du rang du dessus. */
  function cavite(c, y0, cam1) {
    const bas = Math.max(c.p[2][1], c.p[3][1]), x0 = c.bx - 3, w = c.bw + 6, h0 = Math.max(1, bas - y0);
    ctx.save(); poly(c.p); ctx.clip();
    ctx.beginPath(); ctx.rect(x0, y0, w, h0 + 3); ctx.clip();
    ctx.fillStyle = '#0d0c0b'; ctx.fillRect(x0, y0, w, h0 + 3);
    peindreCouche(1, cam1);
    let g = ctx.createLinearGradient(0, y0, 0, y0 + Math.max(8, c.h * .45));
    g.addColorStop(0, 'rgba(0,0,0,.82)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x0, y0, w, Math.max(8, c.h * .45));
    g = ctx.createLinearGradient(0, bas - h0 * .25, 0, bas);
    g.addColorStop(0, 'rgba(110,40,14,0)'); g.addColorStop(1, 'rgba(120,46,18,.75)');
    ctx.fillStyle = g; ctx.fillRect(x0, bas - h0 * .25, w, h0 * .25 + 3);
    ctx.restore();
  }
  /* Ombre portée douce, sans flou coûteux : trois passes de plus en plus larges et légères. */
  function ombrePortee(c, n, k) {
    const L = c.h * .85 * Math.min(1.2, k) * ombre.l, ox = ombre.x * L, oy = ombre.y * L;
    const pts = [c.p[0], c.p[1], [n.br[0] + ox, n.br[1] + n.ep + oy], [n.bl[0] + ox, n.bl[1] + n.ep + oy]];
    const cx = pts.reduce((s, a) => s + a[0], 0) / 4, cy = pts.reduce((s, a) => s + a[1], 0) / 4, f = ombre.nuit ? .7 : 1;
    [[1.1, .1], [1.05, .14], [1, .2]].forEach(([s, al]) => { poly(pts.map(([x, y]) => [cx + (x - cx) * s, cy + (y - cy) * s])); ctx.fillStyle = `rgba(30,11,3,${(al * f).toFixed(3)})`; ctx.fill(); });
  }
  function dessus(c, n, k, cam0) {
    const [tl, tr] = c.p, haut = Math.min(tl[1], tr[1]), bas = Math.max(c.p[2][1], c.p[3][1]), hc = bas - haut, s = 1 - n.d / hc;
    ctx.save(); poly([tl, tr, n.br, n.bl]); ctx.clip();
    const N = Math.round(borne(hc / 5, 14, 56)), sx = c.bx - 8, sw = c.bw + 16;
    for (let i = 0; i < N; i++) {
      const a = i / N, b = (i + 1) / N, f = 1 + n.ex * (a + b) / 2, y0 = haut + hc * a, y1 = haut + hc * b;
      const [im, ...r] = source(cam0, sx, y0, sw, y1 - y0);
      ctx.drawImage(im, ...r, n.cx + (sx - n.cx) * f, haut + (y0 - haut) * s, sw * f, (y1 - y0) * s + .9);
    }
    ctx.fillStyle = `rgba(255,238,220,${(.1 * Math.min(1, k)).toFixed(3)})`; ctx.fillRect(sx - 20, haut, sw + 40, hc);
    const g = ctx.createLinearGradient(0, haut, 0, haut + hc * .2);
    g.addColorStop(0, `rgba(40,14,4,${(.4 * Math.min(1, k)).toFixed(2)})`); g.addColorStop(1, 'rgba(40,14,4,0)');
    ctx.fillStyle = g; ctx.fillRect(sx - 20, haut, sw + 40, hc * .2);
    ctx.restore();
  }
  function tranche(c, n, k, cam0) {
    if (n.ep < .8) return;
    const bas = Math.max(c.p[2][1], c.p[3][1]), haut = Math.min(n.bl[1], n.br[1]);
    ctx.save();
    poly([n.bl, n.br, [n.br[0], n.br[1] + n.ep], [n.bl[0], n.bl[1] + n.ep]]); ctx.clip();
    const sh = c.h * .17, x = Math.min(n.bl[0], n.br[0]) - 6, w = Math.abs(n.br[0] - n.bl[0]) + 12;
    const [im, ...r] = source(cam0, c.bx - 6, bas - sh, c.bw + 12, sh);
    ctx.drawImage(im, ...r, x, haut - 1, w, n.ep + Math.abs(n.br[1] - n.bl[1]) + 2);
    const g = ctx.createLinearGradient(0, haut, 0, haut + n.ep + 2);
    g.addColorStop(0, 'rgba(70,24,8,.12)'); g.addColorStop(1, 'rgba(40,12,3,.74)');
    ctx.fillStyle = g; ctx.fillRect(x - 4, haut - 2, w + 8, n.ep + Math.abs(n.br[1] - n.bl[1]) + 6);
    ctx.restore();
    ctx.strokeStyle = `rgba(255,226,192,${(.6 * Math.min(1, k * 2)).toFixed(2)})`; ctx.lineWidth = Math.max(1.3, c.h / 70);
    ctx.beginPath(); ctx.moveTo(n.bl[0], n.bl[1] + .5); ctx.lineTo(n.br[0], n.br[1] + .5); ctx.stroke();
  }

  /* ----- Couches 1 à 4 ----- */
  function peindreCouche(j, c) {
    const im = couches[j], d = COUCHES[j];
    if (!pret(im)) { ctx.fillStyle = '#16120f'; ctx.fillRect(0, 0, W, H); return; }
    const k = im.naturalWidth / d.w;
    const x0 = Math.max(0, -c.tx / c.S), y0 = Math.max(0, -c.ty / c.S), x1 = Math.min(d.w, (W - c.tx) / c.S), y1 = Math.min(d.h, (H - c.ty) / c.S);
    if (x1 > x0 && y1 > y0) ctx.drawImage(bmp(im), x0 * k, y0 * k, (x1 - x0) * k, (y1 - y0) * k, c.tx + x0 * c.S, c.ty + y0 * c.S, (x1 - x0) * c.S, (y1 - y0) * c.S);
  }
  /* Caméra d'une couche au repos, avec une lente dérive pendant l'arrêt. */
  function cameraRepos(j, p) {
    const r = repos[j], debut = SCENE.passages[j - 1][1], fin = j < 4 ? SCENE.passages[j][0] : 1;
    const z = 1 + .035 * doux(debut, fin, p), cx = mobile ? W * .5 : W * .56, cy = H * .48;
    return { S: r.S * z, tx: cx + (r.tx - cx) * z, ty: cy + (r.ty - cy) * z };
  }
  /* Fenêtre d'une couche vers la suivante, en points de l'écran (polygone), selon la caméra de la couche. */
  function fenetre(j, c, u) {
    const f = COUCHES[j].fenetre;
    if (f.type === 'laine') {
      const [cx, cy] = vers(c, f.c), n = 28, pts = [];
      for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, b = 1 + .07 * Math.sin(a * 5 + 1.3) + .04 * Math.sin(a * 9); pts.push([cx + Math.cos(a) * f.rx * c.S * b, cy + Math.sin(a) * f.ry * c.S * b]); }
      return pts;
    }
    let [x0, y0, x1, y1] = f.r;
    if (f.type === 'fente') { const o = Math.max(.03, doux(0, .3, u)), m = (y0 + y1) / 2, hh = (y1 - y0) / 2 * o; y0 = m - hh; y1 = m + hh; }
    return [[x0, y0], [x1, y0], [x1, y1], [x0, y1]].map((a) => vers(c, a));
  }
  const centre = (pts) => [pts.reduce((s, a) => s + a[0], 0) / pts.length, pts.reduce((s, a) => s + a[1], 0) / pts.length];
  /* La fenêtre s'ouvre jusqu'à déborder l'écran : chaque point part vers le bord, dans sa direction. */
  function ouvrir(pts, g) {
    if (g <= 0) return pts;
    const [cx, cy] = centre(pts), R = Math.hypot(W, H);
    return pts.map(([x, y]) => { const dx = x - cx, dy = y - cy, l = Math.hypot(dx, dy) || 1; return [melange(x, cx + dx / l * R, g), melange(y, cy + dy / l * R, g)]; });
  }
  /* Bords d'une ouverture : l'ombre de l'épaisseur traversée, plus forte en haut. */
  function bordOmbre(pts, force) {
    if (force <= .01) return;
    const xs = pts.map((a) => a[0]), ys = pts.map((a) => a[1]), x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys), w = x1 - x0, h = y1 - y0;
    const bande = (gx0, gy0, gx1, gy1, a, rx, ry, rw, rh) => { const g = ctx.createLinearGradient(gx0, gy0, gx1, gy1); g.addColorStop(0, `rgba(8,6,4,${(a * force).toFixed(3)})`); g.addColorStop(1, 'rgba(8,6,4,0)'); ctx.fillStyle = g; ctx.fillRect(rx, ry, rw, rh); };
    bande(0, y0, 0, y0 + h * .34, .85, x0, y0, w, h * .34);
    bande(x0, 0, x0 + w * .14, 0, .5, x0, y0, w * .14, h);
    bande(x1, 0, x1 - w * .14, 0, .5, x1 - w * .14, y0, w * .14, h);
    bande(0, y1, 0, y1 - h * .16, .35, x0, y1 - h * .16, w, h * .16);
  }
  /* Passage de la couche j à j + 1 (j = 0 : par le trou de la tuile). */
  function passage(j, u, camAvant, fen0) {
    const e = doux(0, 1, u), ez = j === 2 ? doux(.16, 1, u) : doux(0, .92, u), g = Math.pow(lin(.32, 1, u), 1.5);
    /* Caméra de la couche j : elle avance vers le centre de sa fenêtre. */
    const pts0 = fen0 || fenetre(j, camAvant, u), [fx, fy] = centre(pts0);
    const xs = pts0.map((a) => a[0]), ys = pts0.map((a) => a[1]), fw = Math.max(...xs) - Math.min(...xs), fh = Math.max(...ys) - Math.min(...ys);
    const Z = borne(Math.min(W * 1.1 / Math.max(fw, 1), H * 1.1 / Math.max(fh, 1)), 1.6, 3.4), z = Math.pow(Z, ez);
    const px = melange(fx, W / 2, e), py = melange(fy, H / 2, e);
    const S = camAvant.S * z, cAv = { S, tx: px - (fx - camAvant.tx) / camAvant.S * S, ty: py - (fy - camAvant.ty) / camAvant.S * S };
    /* La fenêtre suit la caméra, puis s'ouvre jusqu'aux bords. */
    const pts = ouvrir(pts0.map(([x, y]) => [px + (x - fx) * z, py + (y - fy) * z]), g);
    /* Caméra de la couche j + 1 : vue au fond de la fenêtre, plus petite, puis à sa place. */
    const B = cameraRepos(j + 1, SCENE.passages[j][1]), fB = COUCHES[j + 1].foyer;
    const [wx, wy] = centre(pts), A = { S: B.S * .62, tx: wx - fB[0] * B.S * .62, ty: wy - fB[1] * B.S * .62 };
    const cAp = entre(A, B, doux(0, 1, u), fB);
    return { cAv, pts, cAp, ombre: 1 - g, couvre: g >= .999 };
  }

  function dessiner(p, fin = true) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    /* En mouvement, lissage simple (rapide) ; à l'arrêt, la dernière image est refaite en haute qualité. */
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = fin ? 'high' : 'low';
    const P = SCENE.passages.map(([d, f]) => lin(d, f, p));
    let fait = 0; while (fait < 4 && P[fait] >= 1) fait++;
    const enCours = fait < 4 && P[fait] > 0;
    /* Arrêt sur une couche (1 à 4) */
    if (fait > 0 && !enCours) { peindreCouche(fait, cameraRepos(fait, p)); return; }
    /* Passage entre deux couches (1 → 2, 2 → 3, 3 → 4) */
    if (fait > 0) {
      const t = passage(fait, P[fait], cameraRepos(fait, SCENE.passages[fait][0]));
      if (!t.couvre) peindreCouche(fait, t.cAv);
      ctx.save(); if (!t.couvre) { poly(t.pts); ctx.clip(); }
      peindreCouche(fait + 1, t.cAp); bordOmbre(t.pts, t.ombre * .9);
      ctx.restore();
      if (COUCHES[fait].fenetre.type === 'fente' && P[fait] < .45) { ctx.strokeStyle = `rgba(150,150,150,${(.55 * (1 - lin(.2, .45, P[fait]))).toFixed(2)})`; ctx.lineWidth = 1.2; poly(t.pts); ctx.stroke(); }
      return;
    }
    /* Couche 0 : le toit, la tuile, puis le trou */
    if (!pret(photo)) return;
    const c0 = cam = camera0(p);
    const env = doux(SCENE.envol[0], SCENE.envol[1], p);
    const camTrouDebut = (() => { const cel = cellule(etape); const [wx, wy] = centre(cel.p), B = cameraRepos(1, SCENE.passages[0][1]), f = COUCHES[1].foyer; return { S: B.S * .62, tx: wx - f[0] * B.S * .62, ty: wy - f[1] * B.S * .62 }; })();
    if (enCours) {
      const t = passage(0, P[0], etape, cellule(etape).p);
      cam = t.cAv;
      if (!t.couvre) peindrePhoto(t.cAv);
      ctx.save(); if (!t.couvre) { poly(t.pts); ctx.clip(); }
      ctx.fillStyle = '#0d0c0b'; ctx.fillRect(0, 0, W, H);
      peindreCouche(1, t.cAp); bordOmbre(t.pts, t.ombre);
      ctx.restore();
      return;
    }
    peindrePhoto(c0);
    const c = cellule(c0);
    /* La couche des liteaux, vue au fond du trou, suit la caméra du toit. */
    const r = c0.S / etape.S, cx = vers(c0, HEROS_C), cxE = vers(etape, HEROS_C);
    const cam1 = { S: camTrouDebut.S * r, tx: cx[0] + (camTrouDebut.tx - cxE[0]) * r, ty: cx[1] + (camTrouDebut.ty - cxE[1]) * r };
    if (env > 0) {
      cavite(c, Math.min(c.p[0][1], c.p[1][1]), cam1);
      if (env >= 1) return;
      const kk = Math.min(1.7, Math.max(etat.k, 1) + env * .7), n = nez(c, kk), px = (c.p[0][0] + c.p[1][0]) / 2, py = c.p[0][1], s = 1 + env * .55;
      ctx.save();
      ctx.globalAlpha = 1 - doux(.35, 1, env);
      ctx.translate(px, py - env * c.h * 1.8); ctx.scale(s, s); ctx.translate(-px, -py);
      dessus(c, n, kk, c0); tranche(c, n, kk, c0);
      ctx.restore();
      return;
    }
    if (etat.k < .012) return;
    const n = nez(c, etat.k);
    cavite(c, Math.min(n.bl[1], n.br[1]) + n.ep * .6, cam1);
    ombrePortee(c, n, etat.k);
    dessus(c, n, etat.k, c0);
    tranche(c, n, etat.k, c0);
  }

  /* ----- Textes : le panneau glisse, une couche à la fois, le fil à droite ----- */
  const ecrit = new Map();
  const poser = (el, prop, v) => { const k = el, m = ecrit.get(k) || {}; if (m[prop] === v) return; m[prop] = v; ecrit.set(k, m); el.style[prop] = v; };
  function majTextes(p) {
    if (une) {
      const e = doux(SCENE.panneau[0], SCENE.panneau[1], p);
      poser(une, 'transform', e > 0 ? (mobile ? `translate3d(0, ${(-(panneau + 2) * e).toFixed(1)}px, 0)` : `translate3d(${(-(panneau + 2) * e).toFixed(1)}px, 0, 0)`) : '');
      poser(une, 'visibility', e >= 1 ? 'hidden' : '');
    }
    if (ombreTexte) poser(ombreTexte, 'opacity', doux(.03, .075, p).toFixed(3));
    let actif = -1;
    SCENE.legendes.forEach(([d, f], i) => { if (p >= d && p < f) actif = i; });
    if (actif !== etat.actif) { relais(etat.actif, actif); etat.actif = actif; }
    const fil = Math.max(0, actif);
    if (fil !== etat.fil) { etat.fil = fil; rail.forEach((li, i) => li.classList.toggle('actif', i === fil)); }
    const dessous = p >= SCENE.legendes[0][0];
    if (dessous !== sec.classList.contains('dessous')) sec.classList.toggle('dessous', dessous);
  }

  /* ----- Légendes : passage de relais. La suivante entre pendant que l'autre sort ; les lettres du nom se soulèvent
     comme des tuiles (vers le haut en descendant, vers le bas en remontant), les lignes glissent dans leur masque,
     le lien se pose comme un liteau. Le texte n'est jamais à moitié transparent : il est entier, ou masqué. ----- */
  const Decoupe = window.SplitText;
  const morceaux = legendes.map((li) => {
    const o = { li, extras: $$('.plongee-geste, .plongee-lien, .plongee-fin', li), tl: null, vu: false };
    if (Decoupe) {
      const n = $('.plongee-n', li), h = $('h3', li), ph = $('.plongee-phrase', li);
      try {
        if (n) new Decoupe(n, { type: 'lines', mask: 'lines', linesClass: 'pc-ligne', autoSplit: true });
        if (h) new Decoupe(h, { type: 'lines,words,chars', mask: 'lines', linesClass: 'pc-titre', wordsClass: 'pc-mot', charsClass: 'pc-lettre', autoSplit: true });
        if (ph) new Decoupe(ph, { type: 'lines', mask: 'lines', linesClass: 'pc-ligne', autoSplit: true });
        li.classList.add('decoupe');
      } catch {}
    }
    return o;
  });
  const pieces = (o) => ({
    haut: $$('.plongee-n .pc-ligne', o.li), lettres: $$('h3 .pc-lettre', o.li), phrase: $$('.plongee-phrase .pc-ligne', o.li),
  });
  function sortir(o, dir) {
    if (o.tl) o.tl.kill();
    o.li.classList.remove('actif'); o.li.classList.add('sortie');
    const fin = () => { o.li.classList.remove('sortie'); o.vu = false; };
    o.extras.forEach((e) => { if (!e.style.clipPath) e.style.clipPath = 'inset(-20% -6% -60% -6%)'; });
    if (!o.li.classList.contains('decoupe')) { o.tl = gsap.to(o.li, { autoAlpha: 0, y: -16 * dir, duration: .3, ease: 'power2.in', onComplete: () => { gsap.set(o.li, { clearProps: 'transform,opacity,visibility' }); fin(); } }); return; }
    const { haut, lettres, phrase } = pieces(o);
    o.tl = gsap.timeline({ onComplete: fin })
      .to(haut, { yPercent: -135 * dir, duration: .26, ease: 'power2.in' }, 0)
      .to(lettres, { yPercent: -155 * dir, rotate: -7 * dir, duration: .28, ease: 'power2.in', stagger: { each: .008, from: dir > 0 ? 'start' : 'end' } }, 0)
      .to(phrase, { yPercent: -135 * dir, duration: .26, ease: 'power2.in', stagger: .02 * dir }, 0)
      .to(o.extras, { clipPath: dir > 0 ? 'inset(-20% -6% -60% 100%)' : 'inset(-20% 100% -60% -6%)', duration: .22, ease: 'power2.in' }, 0);
  }
  function entrer(o, dir, retard) {
    if (o.tl) o.tl.kill();
    o.li.classList.remove('sortie'); o.li.classList.add('actif');
    if (!o.li.classList.contains('decoupe')) { o.tl = gsap.fromTo(o.li, { autoAlpha: 0, y: 22 * dir }, { autoAlpha: 1, y: 0, duration: .55, delay: retard, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }); o.vu = true; return; }
    const { haut, lettres, phrase } = pieces(o);
    if (!o.vu) {
      gsap.set([...haut, ...phrase], { yPercent: 135 * dir });
      gsap.set(lettres, { yPercent: 155 * dir, rotate: 9 * dir, transformOrigin: '0% 100%' });
      gsap.set(o.extras, { clipPath: dir > 0 ? 'inset(-20% 100% -60% -6%)' : 'inset(-20% -6% -60% 100%)' });
    }
    o.vu = true;
    o.tl = gsap.timeline({ delay: retard })
      .to(haut, { yPercent: 0, duration: .6, ease: 'power3.out' }, 0)
      .to(lettres, { yPercent: 0, rotate: 0, duration: .75, ease: 'back.out(1.5)', stagger: { each: .026, from: dir > 0 ? 'start' : 'end' } }, .05)
      .to(phrase, { yPercent: 0, duration: .75, ease: 'power3.out', stagger: .075 * dir }, .2)
      .to(o.extras, { clipPath: 'inset(-20% -6% -60% -6%)', duration: .6, ease: 'power3.inOut', stagger: .1, onComplete: () => gsap.set(o.extras, { clearProps: 'clipPath' }) }, .36);
  }
  function relais(avant, apres) {
    const dir = apres > avant ? 1 : -1;
    if (avant >= 0 && morceaux[avant]) sortir(morceaux[avant], dir);
    if (apres >= 0 && morceaux[apres]) entrer(morceaux[apres], dir, avant >= 0 ? .12 : 0);
  }

  /* ----- Boucle unique : progression lissée, ressort de la tuile, dessin ----- */
  const interactif = () => cam.a > .9 && etat.p < SCENE.envol[0] && etat.p > SCENE.repos[0];
  function rendre(t) {
    raf = 0;
    const dt = Math.min(.05, (t - (dernierT || t)) / 1000); dernierT = t;
    /* Position lue à chaque image (pas seulement aux évènements de défilement) ; un saut arrive tout de suite,
       le défilement à la main est suivi avec un léger amorti (constante de temps 0,12 s). */
    if (st) { etat.cible = borne((window.scrollY - st.start) / Math.max(1, st.end - st.start)); if (Math.abs(etat.cible - etat.p) > .15) etat.p = etat.cible; }
    const d = etat.cible - etat.p;
    etat.p = Math.abs(d) < .00004 ? etat.cible : etat.p + d * (1 - Math.exp(-dt / .12));
    const p = etat.p;
    const posee = doux(SCENE.repos[0], SCENE.repos[1], p) * (1 - doux(SCENE.leve[0], SCENE.leve[1], p));
    const cible = Math.max(.16 * posee, doux(SCENE.leve[0], SCENE.leve[1], p), interactif() && (etat.survol || etat.garde) ? 1 : 0);
    etat.v += (120 * (cible - etat.k) - 13 * etat.v) * dt; etat.k += etat.v * dt;
    if (etat.k < 0) { etat.k = 0; etat.v = -etat.v * .3; if (Math.abs(etat.v) < .2) etat.v = 0; }
    if (posee > .98 && !etat.invite) { etat.invite = true; etat.v = 3.2; }
    const bouge = Math.abs(cible - etat.k) > .002 || Math.abs(etat.v) > .003 || etat.p !== etat.cible;
    const fin = !bouge, r = sec.getBoundingClientRect(), visible = r.bottom > 0 && r.top < innerHeight;
    if (W && pret(photo) && visible && (sale || p !== vu.p || etat.k !== vu.k || fin !== vu.fin || etat.intro !== vu.i)) {
      dessiner(p, fin); sale = false; vu.p = p; vu.k = etat.k; vu.fin = fin; vu.i = etat.intro;
      if (!zone.classList.contains('toile-prete')) zone.classList.add('toile-prete');
    }
    majTextes(p);
    if (bouge) demander(); else dernierT = 0;
  }
  function demander() { if (!raf) raf = requestAnimationFrame(rendre); }
  function salir() { sale = true; demander(); }

  /* ----- Gestes sur la grande tuile ----- */
  const surTuile = (e) => {
    if (!interactif()) return false;
    const r = scene.getBoundingClientRect();
    return dedans([(e.clientX - r.left - cam.tx) / cam.S, (e.clientY - r.top - cam.ty) / cam.S], HEROS_P);
  };
  zone.addEventListener('pointermove', (e) => {
    const s = surTuile(e);
    if (s !== zone.classList.contains('sur-tuile')) zone.classList.toggle('sur-tuile', s);
    if (e.pointerType !== 'touch' && s !== etat.survol) { etat.survol = s; demander(); }
  });
  zone.addEventListener('pointerleave', () => { etat.survol = false; zone.classList.remove('sur-tuile'); demander(); });
  zone.addEventListener('click', (e) => { if (!surTuile(e)) return; etat.garde = !etat.garde; demander(); });

  /* ----- Lumière de l'heure : l'ombre de la tuile levée suit le soleil réel sur Taverny (on regarde vers le sud). ----- */
  function majSoleil() {
    const s = soleil(), heure = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: 'numeric', minute: '2-digit' }).format(new Date()).replace(':', ' h ');
    const rel = ((s.az - 180) * Math.PI) / 180;
    if (s.el > 0) {
      const l = Math.min(2.2, Math.max(.45, .32 / Math.tan((Math.max(5, s.el) * Math.PI) / 180)));
      ombre = { x: -Math.sin(rel) * .9, y: Math.max(.2, Math.cos(rel)) * .75, l, nuit: false };
      if (legende) legende.textContent = `Son ombre suit le soleil de Taverny, ${heure}.`;
    } else {
      ombre = { x: 0, y: .4, l: .6, nuit: true };
      if (legende) legende.textContent = `Soleil couché sur Taverny, ${heure} : ombre douce.`.replace(' :', ' :');
    }
    salir();
  }
  majSoleil();
  setInterval(majSoleil, 60000);

  /* ----- Défilement ----- */
  st = window.ScrollTrigger.create({ trigger: sec, start: 'top top', end: 'bottom bottom',
    onUpdate: () => demander(),
    onRefresh: (s) => { etat.cible = etat.p = s.progress; demander(); } });
  addEventListener('scroll', demander, { passive: true });
  rail.forEach((li, i) => $('a', li).addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: st.start + SCENE.arrets[i] * (st.end - st.start), behavior: 'smooth' });
    try { history.replaceState(null, '', `#couche-${i + 1}`); } catch {}
  }));

  let attente;
  new ResizeObserver(() => { clearTimeout(attente); attente = setTimeout(mesurer, 100); }).observe(scene);
  /* Les couches et la version fine des tuiles se chargent une fois la photo du toit là. */
  const suite = () => {
    hd = charge('/assets/images/grok/zone-faitage-tuiles.webp');
    couches = COUCHES.map((c) => c && charge(`/assets/images/grok/${c.src}-1920.webp`));
    [hd, ...couches].forEach((im) => im && im.addEventListener('load', salir));
    mesurer();
  };
  if (pret(photo)) suite(); else photo.addEventListener('load', suite, { once: true });
  mesurer();

  plongee = {
    intro(tl, a = .2) { const o = { z: 1.07 }; etat.intro = 1.07; demander(); tl.to(o, { z: 1, duration: 1.6, ease: 'power3.out', onUpdate: () => { etat.intro = o.z; demander(); } }, a); },
    final() { etat.intro = 1; demander(); },
    aller(i) { window.scrollTo({ top: st.start + SCENE.arrets[i] * (st.end - st.start), behavior: 'smooth' }); },
    arriver() { const o = { z: 1.04 }; etat.intro = 1.04; gsap.to(o, { z: 1, duration: 1.3, ease: 'power3.out', onUpdate: () => { etat.intro = o.z; demander(); } }); },
  };
}

/* ---------- Métiers : la grille se recompose comme des tuiles qu'on réarrange (Flip) ---------- */
function chargerFlip() {
  if (window.Flip) return Promise.resolve(window.Flip);
  return new Promise((ok) => {
    const s = document.createElement('script');
    s.src = '/assets/vendor/Flip.min.js';
    s.onload = () => { try { gsap.registerPlugin(window.Flip); } catch {} ok(window.Flip); };
    s.onerror = () => ok(null);
    document.head.append(s);
  });
}
function metiers() {
  const grille = $('.metiers-grille');
  if (!grille) return;
  const boutons = $$('[data-filtre]'), cartes = $$('.metier', grille);
  const appliquer = async (filtre) => {
    const Flip = calme() || !gsap ? null : await chargerFlip();
    const etatAvant = Flip ? Flip.getState(cartes) : null;
    let premier = true;
    cartes.forEach((c) => {
      const garde = filtre === 'tout' || c.dataset.tags.split(' ').includes(filtre);
      c.hidden = !garde;
      c.classList.toggle('grande', garde && premier);
      if (garde) premier = false;
    });
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === filtre)));
    if (Flip && etatAvant) {
      Flip.from(etatAvant, {
        duration: .7, ease: 'power3.inOut', absolute: true, nested: true, prune: true,
        onEnter: (els) => gsap.fromTo(els, { opacity: 0, rotationX: -70, transformOrigin: '50% 0', transformPerspective: 800 }, { opacity: 1, rotationX: 0, duration: .6, ease: 'back.out(1.4)', stagger: .05, clearProps: 'transform,opacity' }),
        onLeave: (els) => gsap.to(els, { opacity: 0, scale: .9, duration: .35 }),
        onComplete: () => window.ScrollTrigger && window.ScrollTrigger.refresh(),
      });
    } else if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  };
  boutons.forEach((b) => b.addEventListener('click', () => appliquer(b.dataset.filtre)));
}

/* ---------- Joignable maintenant : lundi au samedi, 8 h à 20 h, heure de Paris ; jours fériés : rien d'affiché ---------- */
const FERIES = ['2026-01-01', '2026-04-06', '2026-05-01', '2026-05-08', '2026-05-14', '2026-05-25', '2026-07-14', '2026-08-15', '2026-11-01', '2026-11-11', '2026-12-25',
  '2027-01-01', '2027-03-29', '2027-05-01', '2027-05-06', '2027-05-08', '2027-05-17', '2027-07-14', '2027-08-15', '2027-11-01', '2027-11-11', '2027-12-25'];
function joignable() {
  const els = $$('[data-joignable]');
  if (!els.length) return;
  const maj = () => {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', weekday: 'short', hour12: false }).formatToParts(new Date()).map((x) => [x.type, x.value]));
    const date = `${p.year}-${p.month}-${p.day}`, h = +p.hour % 24 + +p.minute / 60;
    const ferie = FERIES.includes(date);
    const ouvert = !ferie && p.weekday !== 'Sun' && h >= 8 && h < 20;
    els.forEach((el) => {
      if (ferie) { el.hidden = true; return; }
      el.hidden = false;
      el.classList.toggle('ferme', !ouvert);
      el.textContent = ouvert ? 'Joignable maintenant, jusqu’à 20 h' : 'Fermé maintenant · lundi au samedi, 8 h à 20 h';
    });
  };
  maj();
  setInterval(maj, 60000);
}

/* ---------- Méthode : planches empilées (module de la bibliothèque) ---------- */
/* ---------- Méthode : les rangs se posent l'un après l'autre en entrant à l'écran (empilement) ---------- */
function rangs() {
  const ol = $('.rangs');
  if (!ol) return;
  if (calme() || !gsap) { ol.classList.add('pose'); return; }
  const io = new IntersectionObserver((e) => {
    if (!e[0].isIntersecting) return;
    io.disconnect();
    gsap.fromTo($$('.rang-tuile', ol), { rotationX: -75, opacity: 0, transformPerspective: 800 }, { rotationX: 0, opacity: 1, duration: .8, ease: 'back.out(1.5)', stagger: .12,
      onComplete: () => { ol.classList.add('pose'); gsap.set($$('.rang-tuile', ol), { clearProps: 'transform,opacity' }); } });
  }, { rootMargin: '0px 0px -15% 0px' });
  io.observe(ol);
}

async function modules() {
  const fpe = $('[data-module="formulaire-par-etapes"]');
  if (fpe) { const m = await import('./projet/devis.js?v=11'); m.devis(fpe); }
}

/* ---------- Démarrage ---------- */
/* ---------- Pages d'onglet : ouvertures (pente rang par rang, cordon d'étain, coup de taloche) et signatures ---------- */
function cordonPreparer() {
  const svg = $('.cordon');
  if (!svg || calme() || !gsap) return;
  const ref = $('.cordon-trait', svg), L = ref.getTotalLength();
  $$('.cordon-trait, .cordon-ombre', svg).forEach((t) => { t.style.strokeDasharray = `${L} ${L}`; t.style.strokeDashoffset = `${L}`; });
}
function cordonTracer(final) {
  const svg = $('.cordon');
  if (!svg || svg.dataset.trace) return;
  svg.dataset.trace = '1';
  const traits = $$('.cordon-trait, .cordon-ombre', svg), pointe = $('.cordon-pointe', svg), ref = $('.cordon-trait', svg);
  if (final || calme() || !gsap) { traits.forEach((t) => { t.style.strokeDasharray = ''; t.style.strokeDashoffset = ''; }); return; }
  const L = ref.getTotalLength(), o = { p: 0 };
  gsap.to(o, { p: 1, duration: 1.5, ease: 'power1.inOut', delay: .3,
    onUpdate: () => {
      traits.forEach((t) => { t.style.strokeDashoffset = `${L * (1 - o.p)}`; });
      const pt = ref.getPointAtLength(L * o.p);
      pointe.setAttribute('cx', pt.x.toFixed(1)); pointe.setAttribute('cy', pt.y.toFixed(1)); pointe.style.opacity = '1';
    },
    onComplete: () => gsap.to(pointe, { opacity: 0, duration: .5 }) });
}
function ouvrirPage(final = false) {
  $$('.pente').forEach((p) => p.classList.add('ouverte'));
  $$('.taloche').forEach((t) => t.classList.add('lisse'));
  cordonTracer(final);
  if (!final && mousse) mousse.demo();
}
/* Nuancier : chaque échantillon s'assombrit à mesure que le suivant le recouvre (empilement). */
function nuancier() {
  const cartes = $$('.echantillon');
  if (cartes.length < 2 || calme()) return;
  let attente = false;
  const maj = () => {
    attente = false;
    for (let i = 0; i < cartes.length - 1; i++) {
      const a = cartes[i].getBoundingClientRect(), b = cartes[i + 1].getBoundingClientRect();
      const f = Math.min(1, Math.max(0, (a.bottom - b.top) / Math.max(1, a.height - 66)));
      cartes[i].style.setProperty('--couvert', f.toFixed(3));
    }
  };
  addEventListener('scroll', () => { if (!attente) { attente = true; requestAnimationFrame(maj); } }, { passive: true });
  maj();
}
/* Signes de la gouttière : cocher prépare la demande de devis (?signes=…). */
function signes() {
  $$('[data-signes]').forEach((bloc) => {
    const lien = $('.signes-lien', bloc), compte = $('.signes-compte', bloc);
    if (!lien) return;
    const base = lien.getAttribute('href'), vide = compte ? compte.textContent : '';
    const maj = () => {
      const v = $$('input:checked', bloc).map((i) => i.value);
      const u = new URL(base, location.href);
      if (v.length) u.searchParams.set('signes', v.join(','));
      lien.setAttribute('href', u.pathname + u.search + u.hash);
      if (compte) compte.textContent = v.length ? `${v.length} signe${v.length > 1 ? 's' : ''} coché${v.length > 1 ? 's' : ''} : ${v.length > 1 ? 'ils seront joints' : 'il sera joint'} à la demande.` : vide;
    };
    bloc.addEventListener('change', maj);
    maj();
  });
}
/* Charpente en profondeur : la photo se resserre et les signes montent à des vitesses différentes. */
function profondeur() {
  const scene = $('[data-effet="charpente-profondeur"]');
  if (!scene || calme()) return;
  let attente = false;
  const maj = () => {
    attente = false;
    const r = scene.getBoundingClientRect();
    scene.style.setProperty('--p', Math.min(1, Math.max(0, 1 - r.top / innerHeight)).toFixed(3));
  };
  addEventListener('scroll', () => { if (!attente) { attente = true; requestAnimationFrame(maj); } }, { passive: true });
  maj();
}
/* Finitions d'enduit : celle qu'on touche prend la grande place, les autres se rangent (recomposition). */
function finitions() {
  const liste = $('.finitions');
  if (!liste) return;
  const items = $$('.finition', liste);
  items.forEach((li) => $('.finition-bouton', li).addEventListener('click', async () => {
    if (li.classList.contains('choisie')) return;
    const Flip = calme() || !gsap ? null : await chargerFlip();
    const etat = Flip ? Flip.getState(items) : null;
    items.forEach((x) => { const ch = x === li; x.classList.toggle('choisie', ch); $('.finition-bouton', x).setAttribute('aria-pressed', String(ch)); });
    if (Flip && etat) Flip.from(etat, { duration: .65, ease: 'power3.inOut', absolute: true, nested: true });
  }));
}

/* Couverture : la pente d'ouverture arrive moussue, mais seulement sur les tuiles (jamais sur le ciel, les arbres, la
   fenêtre de toit ni l'écran). Une carte de cellules (assets/images/mousse-cellules*.png, une couleur par tuile ou
   groupe de tuiles, découpée sur la photo) dit où est chaque tuile. La mousse pousse dans les joints et sur les nez ;
   la brosse la retire tuile par tuile, dans un petit nuage de brins, et découvre la terre cuite propre. */
let mousse = null;
function demoussage() {
  const toile = $('.mousse');
  if (!toile) return;
  const pente = toile.parentElement, ctx = toile.getContext('2d'), img = $('.media img', pente);
  const jauge = $('.mousse-jauge span', pente), geste = $('.mousse-geste', pente);
  let W = 0, H = 0, dpr = 1, carte = null, demo = false, frotte = 0, dernier = null, raf = 0;
  const propres = new Set(), enCours = new Map(), brins = [];
  const alea = (n) => { let s = n * 9301 + 49297; return () => ((s = (s * 9301 + 49297) % 233280) / 233280); };

  /* Carte des cellules : lue une fois par cadrage (paysage ou téléphone). */
  const cartes = {};
  function lireCarte(mobile) {
    const cle = mobile ? 'mobile' : 'paysage';
    if (cartes[cle]) return cartes[cle];
    return (cartes[cle] = new Promise((ok) => {
      const im = new Image();
      im.onload = () => {
        const cw = im.naturalWidth, ch = im.naturalHeight, cv = document.createElement('canvas');
        cv.width = cw; cv.height = ch;
        const g = cv.getContext('2d', { willReadFrequently: true });
        g.drawImage(im, 0, 0);
        const d = g.getImageData(0, 0, cw, ch).data, lab = new Uint16Array(cw * ch);
        let n = 0;
        for (let i = 0; i < cw * ch; i++) if (d[i * 4 + 2] > 127) { lab[i] = d[i * 4] + d[i * 4 + 1] * 256; n = Math.max(n, lab[i]); }
        const boites = Array.from({ length: n + 1 }, () => [cw, ch, -1, -1, 0]);
        for (let y = 0; y < ch; y++) for (let x = 0; x < cw; x++) { const l = lab[y * cw + x]; if (!l) continue; const b = boites[l]; if (x < b[0]) b[0] = x; if (y < b[1]) b[1] = y; if (x > b[2]) b[2] = x; if (y > b[3]) b[3] = y; b[4]++; }
        /* Masque des tuiles (blanc opaque là où il y a une tuile), pour découper la mousse. */
        const m = g.createImageData(cw, ch);
        for (let i = 0; i < cw * ch; i++) if (lab[i]) { m.data[i * 4] = m.data[i * 4 + 1] = m.data[i * 4 + 2] = 255; m.data[i * 4 + 3] = 255; }
        const masque = document.createElement('canvas'); masque.width = cw; masque.height = ch; masque.getContext('2d').putImageData(m, 0, 0);
        ok({ cw, ch, lab, boites, n, masque, formes: new Map() });
      };
      im.onerror = () => ok(null);
      im.src = `/assets/images/mousse-cellules${mobile ? '-mobile' : ''}.png`;
    }));
  }
  /* Où la photo est posée dans la pente (object-fit: cover et son cadrage). */
  let pose = { x: 0, y: 0, l: 1, h: 1 };
  function poser() {
    const iw = img.naturalWidth || 16, ih = img.naturalHeight || 9, s = Math.max(W / iw, H / ih);
    const pos = getComputedStyle(img).objectPosition.split(' ').map((v) => (v.endsWith('%') ? parseFloat(v) / 100 : .5));
    pose = { x: (W - iw * s) * pos[0], y: (H - ih * s) * (pos[1] ?? .5), l: iw * s, h: ih * s };
  }
  const versCarte = (x, y) => [Math.floor((x - pose.x) / pose.l * carte.cw), Math.floor((y - pose.y) / pose.h * carte.ch)];
  const etiquette = (x, y) => { const [cx, cy] = versCarte(x, y); return cx < 0 || cy < 0 || cx >= carte.cw || cy >= carte.ch ? 0 : carte.lab[cy * carte.cw + cx]; };
  /* Forme d'une cellule (petit masque à sa taille), faite à la demande. */
  function forme(l) {
    let f = carte.formes.get(l);
    if (f) return f;
    const [x0, y0, x1, y1] = carte.boites[l], w = x1 - x0 + 1, h = y1 - y0 + 1, cv = document.createElement('canvas');
    cv.width = w; cv.height = h;
    const g = cv.getContext('2d'), m = g.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (carte.lab[(y0 + y) * carte.cw + x0 + x] === l) m.data[(y * w + x) * 4 + 3] = 255;
    g.putImageData(m, 0, 0);
    f = { cv, x: x0, y: y0, w, h };
    carte.formes.set(l, f);
    return f;
  }
  /* Cellules utiles : celles qui se voient dans le cadre (la jauge compte celles-là). */
  let utiles = 0;
  function compterUtiles() {
    utiles = 0;
    for (let l = 1; l <= carte.n; l++) {
      const b = carte.boites[l]; if (b[4] < 12) continue;
      const cx = pose.x + (b[0] + b[2]) / 2 / carte.cw * pose.l, cy = pose.y + (b[1] + b[3]) / 2 / carte.ch * pose.h;
      if (cx > 8 && cx < W - 8 && cy > 8 && cy < H - 8) utiles++;
    }
  }

  /* ----- La mousse : un voile sale, des coussins de mousse dans les joints, des taches de lichen ----- */
  function peindre() {
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, toile.width, toile.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const r = alea(11), sx = pose.l / carte.cw, sy = pose.h / carte.ch;
    /* Voile : la terre cuite ternie, verdâtre. */
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(58,62,38,.5)'; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 260; i++) {
      const x = r() * W, y = r() * H, rr = 20 + r() * 70, t = ['48,56,30', '84,88,52', '36,38,28', '102,98,64'][Math.floor(r() * 4)];
      const g = ctx.createRadialGradient(x, y, 0, x, y, rr); g.addColorStop(0, `rgba(${t},${(.18 + r() * .3).toFixed(2)})`); g.addColorStop(1, `rgba(${t},0)`);
      ctx.fillStyle = g; ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    /* Joints : la mousse pousse là où deux tuiles se touchent (bords des cellules), surtout en bas des nez. */
    const { cw, ch, lab } = carte, joints = [];
    for (let y = 1; y < ch - 1; y += 1) for (let x = 1; x < cw - 1; x += 1) {
      const l = lab[y * cw + x]; if (!l) continue;
      if (lab[y * cw + x + 1] !== l || lab[(y + 1) * cw + x] !== l) joints.push(x, y);
    }
    const coussin = (x, y, taille) => {
      const n = Math.round(14 + taille * 26);
      for (let k = 0; k < n; k++) {
        const a = r() * Math.PI * 2, d = Math.sqrt(r()) * taille * 7, px = x + Math.cos(a) * d * 1.3, py = y + Math.sin(a) * d * .8;
        const haut = py < y - d * .2, ton = haut ? ['142,152,62', '168,170,78', '120,134,52'] : ['62,76,30', '78,94,36', '44,54,24', '96,110,42'];
        ctx.fillStyle = `rgba(${ton[Math.floor(r() * ton.length)]},${(.65 + r() * .35).toFixed(2)})`;
        const e = .7 + r() * 1.6; ctx.fillRect(px, py, e, e * (.8 + r() * .9));
      }
      /* Brins dressés, plus clairs au bout. */
      ctx.strokeStyle = 'rgba(176,180,92,.7)'; ctx.lineWidth = .7;
      ctx.beginPath();
      for (let k = 0; k < 4 + taille * 4; k++) { const px = x + (r() - .5) * taille * 12, py = y + (r() - .5) * taille * 6; ctx.moveTo(px, py); ctx.lineTo(px + (r() - .5) * 3, py - 2 - r() * 4); }
      ctx.stroke();
    };
    const nJ = joints.length / 2;
    for (let i = 0; i < Math.min(5200, nJ * .5); i++) {
      const k = Math.floor(r() * nJ), x = pose.x + (joints[k * 2] + .5) * sx, y = pose.y + (joints[k * 2 + 1] + .5) * sy;
      if (x < -10 || x > W + 10 || y < -10 || y > H + 10) continue;
      coussin(x, y, .35 + r() * r() * 1.4);
    }
    /* Lichen : rosettes pâles. */
    for (let i = 0; i < 160; i++) {
      const x = r() * W, y = r() * H, rr = 2 + r() * 6;
      ctx.fillStyle = `rgba(${r() < .5 ? '206,204,156' : '214,196,110'},${(.35 + r() * .35).toFixed(2)})`;
      ctx.beginPath(); for (let k = 0; k < 9; k++) { const a = k / 9 * Math.PI * 2, d = rr * (.7 + r() * .45); k ? ctx.lineTo(x + Math.cos(a) * d, y + Math.sin(a) * d) : ctx.moveTo(x + d, y); } ctx.closePath(); ctx.fill();
    }
    /* Seulement sur les tuiles : la carte découpe la mousse. */
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(carte.masque, pose.x, pose.y, pose.l, pose.h);
    ctx.globalCompositeOperation = 'source-over';
    /* Tuiles déjà brossées (après un changement de taille). */
    propres.forEach((l) => effacer(l, 1));
  }
  function effacer(l, a) {
    const f = forme(l), sx = pose.l / carte.cw, sy = pose.h / carte.ch;
    ctx.save(); ctx.globalCompositeOperation = 'destination-out'; ctx.globalAlpha = a;
    ctx.drawImage(f.cv, pose.x + (f.x - .6) * sx, pose.y + (f.y - .6) * sy, (f.w + 1.2) * sx, (f.h + 1.2) * sy);
    ctx.restore();
  }
  /* Un coup de brosse : chaque tuile touchée se nettoie d'un coup, avec un petit nuage de brins. */
  function nettoyer(l, x, y) {
    if (!l || propres.has(l)) return;
    propres.add(l); enCours.set(l, 0);
    const b = carte.boites[l], cx = pose.x + (b[0] + b[2]) / 2 / carte.cw * pose.l, cy = pose.y + (b[1] + b[3]) / 2 / carte.ch * pose.h;
    for (let k = 0; k < 7; k++) brins.push({ x: cx + (Math.random() - .5) * 16, y: cy + (Math.random() - .5) * 8, vx: (x - (dernier ? dernier[0] : x)) * .05 + (Math.random() - .5) * 60, vy: -30 - Math.random() * 50, t: 0, c: ['74,88,34', '120,132,52', '160,164,80'][k % 3], e: 1 + Math.random() * 1.8 });
    demander();
  }
  const brosseR = () => Math.max(26, Math.min(44, W * .035));
  function brosser(x, y) {
    if (!carte) return;
    const pas = dernier ? Math.max(1, Math.ceil(Math.hypot(x - dernier[0], y - dernier[1]) / 10)) : 1, R = brosseR();
    for (let k = 1; k <= pas; k++) {
      const px = dernier ? dernier[0] + (x - dernier[0]) * k / pas : x, py = dernier ? dernier[1] + (y - dernier[1]) * k / pas : y;
      for (const [ox, oy] of [[0, 0], [.55, 0], [-.55, 0], [0, .45], [0, -.45], [.4, .35], [-.4, -.35], [.4, -.35], [-.4, .35]]) nettoyer(etiquette(px + ox * R, py + oy * R), x, y);
    }
    dernier = [x, y];
    if (!demo) { if (++frotte > 3) pente.classList.add('mousse-touchee'); if (geste) geste.classList.add('en-cours'); }
    majJauge();
  }
  function majJauge() {
    const pc = utiles ? Math.min(100, Math.round(propres.size / (utiles * .85) * 100)) : 0;
    if (jauge) jauge.style.transform = `scaleX(${(pc / 100).toFixed(3)})`;
    if (pc >= 100 && !demo) pente.classList.add('mousse-fini');
  }
  /* Animation : les tuiles brossées s'éclaircissent en 0,3 s, les brins tombent. */
  let dernierT = 0;
  function pas(t) {
    raf = 0;
    const dt = Math.min(.05, (t - (dernierT || t)) / 1000); dernierT = t;
    enCours.forEach((v, l) => { const n = Math.min(1, v + dt / .3); effacer(l, Math.min(1, (n - v) / Math.max(.01, 1 - v))); if (n >= 1) enCours.delete(l); else enCours.set(l, n); });
    debris.setTransform(1, 0, 0, 1, 0, 0); debris.clearRect(0, 0, eclats.width, eclats.height); debris.setTransform(dpr, 0, 0, dpr, 0, 0);
    for (let i = brins.length - 1; i >= 0; i--) {
      const b = brins[i]; b.t += dt; b.vy += 260 * dt; b.x += b.vx * dt; b.y += b.vy * dt;
      if (b.t > .9) { brins.splice(i, 1); continue; }
      debris.fillStyle = `rgba(${b.c},${(1 - b.t / .9).toFixed(2)})`; debris.fillRect(b.x, b.y, b.e, b.e * 1.6);
    }
    if (enCours.size || brins.length) demander(); else dernierT = 0;
  }
  function demander() { if (!raf) raf = requestAnimationFrame(pas); }
  /* Les brins qui tombent ont leur propre calque, au-dessus. */
  const eclats = document.createElement('canvas');
  eclats.className = 'mousse-brins'; eclats.setAttribute('aria-hidden', 'true');
  toile.after(eclats);
  const debris = eclats.getContext('2d');

  const point = (e) => { const r = toile.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  pente.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' || e.buttons) brosser(...point(e)); });
  pente.addEventListener('pointerdown', (e) => brosser(...point(e)));
  pente.addEventListener('pointerleave', () => { dernier = null; });
  pente.addEventListener('pointerup', () => { dernier = null; });

  async function preparer() {
    W = pente.clientWidth; H = pente.clientHeight; dpr = Math.min(2, devicePixelRatio || 1);
    if (!W || !H) return;
    toile.width = eclats.width = Math.round(W * dpr); toile.height = eclats.height = Math.round(H * dpr);
    const mobile = /-mobile-/.test(img.currentSrc || '');
    const c = await lireCarte(mobile);
    if (!c) { toile.hidden = true; return; }
    if (carte !== c) { carte = c; propres.clear(); }
    poser(); compterUtiles(); peindre(); majJauge();
  }
  let attente, largeur = 0;
  new ResizeObserver(() => { if (Math.abs(pente.clientWidth - largeur) < 2 && Math.abs(pente.clientHeight - H) < 2) return; largeur = pente.clientWidth; clearTimeout(attente); attente = setTimeout(preparer, 120); }).observe(pente);
  if (img.complete && img.naturalWidth) preparer(); else img.addEventListener('load', preparer, { once: true });
  /* Démonstration : un coup de brosse en diagonale, une fois la pente découverte. */
  mousse = {
    demo() {
      if (!gsap) return;
      const o = { t: 0 };
      gsap.to(o, { t: 1, duration: 1.2, delay: 1, ease: 'power1.inOut', onStart: () => { demo = true; dernier = null; }, onUpdate: () => brosser(W * (.2 + .5 * o.t), H * (.86 - .3 * o.t)), onComplete: () => { dernier = null; demo = false; } });
    },
  };
}
/* ---------- Planches (diagnostic de l'accueil, anatomie de Couverture) : un choix éclaire sa trace sur le dessin
   et pose sa fiche ; la fiche change en relais, comme les légendes de la plongée (les lettres du titre se soulèvent). ---------- */
function planches() {
  $$('[data-planche]').forEach((sec) => {
    const fiches = $$('[data-fiche]', sec), choix = $$('[data-choix]', sec), traces = $$('[data-trace]', sec), fils = $$('[data-fil]', sec), planche = $('.planche', sec);
    if (!fiches.length || !planche) return;
    planche.classList.add('planche-active');
    const Decoupe = window.SplitText;
    if (Decoupe) fiches.forEach((f) => { try { new Decoupe($('h3', f), { type: 'lines,words,chars', mask: 'lines', linesClass: 'pc-titre', wordsClass: 'pc-mot', charsClass: 'pc-lettre', autoSplit: true }); f.classList.add('decoupe'); } catch {} });
    const corps = (f) => [...f.children].filter((e) => e.tagName !== 'H3');
    const anims = new Map();
    let courant = null;
    function sortir(f, dir) {
      if (anims.get(f)) anims.get(f).kill();
      f.classList.remove('actif'); f.classList.add('sortie');
      const fin = () => f.classList.remove('sortie');
      if (!gsap) { fin(); return; }
      const tl = gsap.timeline({ onComplete: fin });
      tl.to($$('.pc-lettre', f), { yPercent: -155 * dir, rotate: -6 * dir, duration: .26, ease: 'power2.in', stagger: { each: .008, from: dir > 0 ? 'start' : 'end' } }, 0)
        .to(corps(f), { y: -12 * dir, autoAlpha: 0, duration: .22, ease: 'power2.in', stagger: .02 }, 0);
      anims.set(f, tl);
    }
    function entrer(f, dir, retard) {
      if (anims.get(f)) anims.get(f).kill();
      f.classList.remove('sortie'); f.classList.add('actif');
      if (!gsap) return;
      const tl = gsap.timeline({ delay: retard });
      tl.fromTo($$('.pc-lettre', f), { yPercent: 155 * dir, rotate: 8 * dir }, { yPercent: 0, rotate: 0, duration: .7, ease: 'back.out(1.5)', stagger: { each: .022, from: dir > 0 ? 'start' : 'end' } }, 0)
        .fromTo(corps(f), { y: 16 * dir, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .5, ease: 'power3.out', stagger: .05, clearProps: 'transform,opacity,visibility' }, .12);
      anims.set(f, tl);
    }
    function choisir(id, anime = true) {
      if (id === courant) return;
      const avant = fiches.find((f) => f.dataset.fiche === courant), apres = fiches.find((f) => f.dataset.fiche === id);
      if (!apres) return;
      const dir = !avant || fiches.indexOf(apres) > fiches.indexOf(avant) ? 1 : -1;
      courant = id;
      choix.forEach((b) => { const on = b.dataset.choix === id; if (b.hasAttribute('aria-pressed')) b.setAttribute('aria-pressed', String(on)); b.classList.toggle('actif', on); });
      traces.forEach((t) => t.classList.toggle('actif', t.dataset.trace === id));
      fils.forEach((t) => t.classList.toggle('actif', t.dataset.fil === id));
      if (!anime || !avant) { fiches.forEach((f) => { f.classList.toggle('actif', f === apres); f.classList.remove('sortie'); }); return; }
      sortir(avant, dir); entrer(apres, dir, .1);
    }
    choix.forEach((b) => {
      b.addEventListener('click', () => {
        choisir(b.dataset.choix);
        /* Sur téléphone, le bouton choisi glisse dans la bande et la fiche reste en vue. */
        if (b.closest('.planche-choix')) b.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
      });
      let attente;
      b.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'mouse' || b.closest('.planche-choix')) return; attente = setTimeout(() => choisir(b.dataset.choix), 90); });
      b.addEventListener('pointerleave', () => clearTimeout(attente));
    });
    /* « En cause : 03 L'écran » : on remonte dans la plongée, à la bonne couche. */
    $$('a[data-couche]', sec).forEach((a) => a.addEventListener('click', (e) => { if (!plongee) return; e.preventDefault(); plongee.aller(Number(a.dataset.couche)); }));
    const depart = fiches.find((f) => location.hash === '#' + f.id);
    choisir(depart ? depart.dataset.fiche : fiches[0].dataset.fiche, false);
    if (depart) {
      /* Arrivée par #piece-… : toute la planche à l'écran, sous l'en-tête. */
      const caler = () => { const e = $('[data-entete]'); window.scrollTo({ top: planche.getBoundingClientRect().top + scrollY - ((e && e.offsetHeight) || 0) - 20, behavior: 'instant' }); };
      requestAnimationFrame(caler); setTimeout(caler, 350);
    }
    /* Les traces s'animent quand la planche est à l'écran, et se mettent en pause quand elle le quitte. */
    new IntersectionObserver((es) => es.forEach((e) => planche.classList.toggle('vu', e.isIntersecting)), { threshold: .12 }).observe(planche);
  });
}
const premierTitre = () => $('[data-titre-pose="intro"]');
demarrer({
  preparer() {
    titres();
    liteaux();
    plongeeScene();
    metiers();
    rangs();
    joignable();
    cordonPreparer();
    demoussage();
    nuancier();
    signes();
    profondeur();
    finitions();
    planches();
    modules();
  },
  /* Intro (moins de 3 s) : le logo, un rang de tuiles qui se pose sous le nom, puis le logo glisse jusqu'à l'objet
     d'ouverture de la page et le panneau s'ouvre depuis lui ; le titre se pose mot par mot, puis une vague soulève les tuiles. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const panneau = $('[data-ouverture]');
    const accueil = !!plongee;
    tl.fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: accueil ? .16 : .3, ease: 'power2.inOut' }, .02)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .16 }, .04)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-trait', { opacity: 0, duration: .14 }, accueil ? .16 : .36);
    /* Accueil : le logo s'efface en 0,6 s au plus, la photo du faîtage se pose en reculant. Autres pages : le logo
       glisse jusqu'à l'objet d'ouverture de la page. */
    if (accueil && panneau) {
      tl.to(panneau, { opacity: 0, duration: .38, ease: 'power2.out' }, .2);
      plongee.intro(tl, .18);
    } else versObjet(tl, { a: .22, duree: .36, ouverture: .6 });
    tl.call(() => poserOuverture(premierTitre()), null, accueil ? .42 : .95);
    tl.call(() => { $$('.page-une .liteau').forEach((l) => l.classList.add('pose')); }, null, 1.05);
    tl.call(() => ouvrirPage(), null, accueil ? .9 : 1.1);
    return tl;
  },
  etatFinal() {
    $$('[data-titre-pose], .rangs').forEach((t) => t.classList.add('pose'));
    if (plongee) plongee.final();
    ouvrirPage(true);
    $$('.liteau').forEach((l) => { const r = l.getBoundingClientRect(); if (r.top < innerHeight) l.classList.add('pose'); });
  },
  arrivee() {
    poserOuverture(premierTitre(), .15);
    if (plongee) plongee.arriver();
    setTimeout(() => ouvrirPage(), 250);
  },
});

