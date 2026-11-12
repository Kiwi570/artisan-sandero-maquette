/* Effets propres à Artisan Sandero (« Sous les tuiles »). Le socle gère l'ouverture, le voile en rangs de tuiles,
   l'en-tête, le mode calme, les mesures et la bibliothèque d'effets. Ici seulement ce qui est propre au client ;
   chaque effet porte data-effet="nom-du-plan" dans les pages. */
import { demarrer, etat, versObjet } from './socle/index.js?v=3';

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
   Une seule scène en plein écran. On part du faîtage au-dessus de Taverny (photo ouverture-faitage, 1920 × 1289, dessinée
   dans la toile par une caméra). Au défilement, la caméra plonge jusqu'à une tuile du pan droit, grande (400 px au moins
   sur ordinateur) : on peut la soulever soi-même. Puis elle s'envole, on passe par son trou : le liteau ; entre deux
   liteaux : l'écran sous-toiture ; une fente dans l'écran : l'isolant ; à travers l'isolant : les chevrons.
   Une tuile levée garde sa tête accrochée au liteau ; son nez se soulève : le dessus se raccourcit, la tranche de terre
   cuite apparaît et, dans la fente, le liteau en pin sur l'écran noir. Son ombre suit le soleil réel sur Taverny. */
const borne = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lin = (a, b, x) => borne((x - a) / (b - a));
const doux = (a, b, x) => { const t = lin(a, b, x); return t * t * (3 - 2 * t); };
const melange = (a, b, t) => a + (b - a) * t;
/* Calendrier de la scène : progression de 0 à 1 sur toute la hauteur de la section (sept écrans). */
const SCENE = {
  une: [.02, .095],
  plonge: [.03, .2],
  leve: [.285, .33],
  envol: [.33, .39],
  trou: [.385, .5],
  passages: [[.555, .65, 'vide'], [.70, .79, 'fente'], [.835, .915, 'fondu']],
  legendes: [[.16, .345], [.475, .585], [.625, .73], [.765, .865], [.885, 1.01]],
  arrets: [.25, .53, .68, .815, .97],
};
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
  const planToit = $('.plan--toit', sec);
  const plans = $$('.plan-couche', sec).map((el) => ({ el, cam: $('.plan-camera', el), img: $('img', el) }));
  const legendes = $$('.plongee-couche', sec), rail = $$('.plongee-rail li', sec), une = $('.plongee-une', sec), ombreTexte = $('.plongee-ombre', sec);
  const legende = $('.toit-soleil', sec);
  const ctx = toile.getContext('2d');
  const photo = new Image();
  photo.decoding = 'async';
  photo.src = (img.currentSrc || img.src).replace(/-\d+\.webp(\?.*)?$/, '-1920.webp');
  let W = 0, H = 0, dpr = 1, mobile = false, pret = false, raf = 0, dernierT = 0;
  let base = null, etape = null, zoomTrou = 6, cam = { S: 1, tx: 0, ty: 0 }, vide = null;
  const etat = { p: 0, intro: 1, k: 0, v: 0, survol: false, garde: false, invite: false, actif: -2 };
  let ombre = { x: -.3, y: .6, l: 1, flou: 8, nuit: false };

  const poly = (pts) => { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); };
  const dedans = ([x, y], p) => { let ok = false; for (let i = 0, j = 3; i < 4; j = i++) { const [xi, yi] = p[i], [xj, yj] = p[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ok = !ok; } return ok; };
  /* Morceau de photo sous un rectangle de l'écran (coordonnées de la photo en pixels réels). */
  const src = (x, y, w, h) => { const k = photo.naturalWidth / PHOTO.w; return [(x - cam.tx) / cam.S * k, (y - cam.ty) / cam.S * k, w / cam.S * k, h / cam.S * k]; };
  const versEcran = ([x, y]) => [cam.tx + x * cam.S, cam.ty + y * cam.S];
  function cellule() {
    const p = HEROS_P.map(versEcran), xs = p.map((a) => a[0]), ys = p.map((a) => a[1]);
    const bx = Math.min(...xs), by = Math.min(...ys);
    return { p, bx, by, bw: Math.max(...xs) - bx, bh: Math.max(...ys) - by, h: (p[3][1] - p[0][1] + p[2][1] - p[1][1]) / 2 };
  }

  function mesurer() {
    W = scene.clientWidth; H = scene.clientHeight;
    if (!W || !H) return false;
    dpr = Math.min(2, devicePixelRatio || 1); mobile = W < 761;
    toile.width = Math.round(W * dpr); toile.height = Math.round(H * dpr);
    const pos = getComputedStyle(img).objectPosition.split(' ').map((v) => (v.endsWith('%') ? parseFloat(v) / 100 : .5));
    const S0 = Math.max(W / PHOTO.w, H / PHOTO.h);
    base = { S: S0, tx: (W - PHOTO.w * S0) * pos[0], ty: (H - PHOTO.h * S0) * (pos[1] ?? 1) };
    /* La tuile au premier plan : 400 à 520 px de large sur ordinateur, 70 % de l'écran sur téléphone. */
    const largeur = mobile ? W * .7 : Math.min(520, Math.max(400, W * .33));
    const S = Math.max(largeur / HEROS_NEZ, S0 * 1.05);
    const cible = mobile ? [W * .5, H * .4] : [W * .64, H * .47];
    etape = { S, tx: borne(cible[0] - HEROS_C[0] * S, W - PHOTO.w * S, 0), ty: borne(cible[1] - HEROS_C[1] * S, H - PHOTO.h * S, 0) };
    const c0 = { bw: 224, bh: 90 };
    zoomTrou = Math.max(W * 1.5 / (c0.bw * S), H * 1.5 / (c0.bh * S));
    vide = null;
    pret = !!photo.naturalWidth;
    demander();
    return true;
  }

  function camera(p) {
    const a = doux(SCENE.plonge[0], SCENE.plonge[1], p), b = doux(SCENE.trou[0], SCENE.trou[1], p);
    let S, tx, ty;
    if (b <= 0) {
      S = base.S * Math.pow(etape.S / base.S, a);
      const fx = melange(HEROS_C[0] * base.S + base.tx, HEROS_C[0] * etape.S + etape.tx, a);
      const fy = melange(HEROS_C[1] * base.S + base.ty, HEROS_C[1] * etape.S + etape.ty, a);
      tx = fx - HEROS_C[0] * S; ty = fy - HEROS_C[1] * S;
      if (etat.intro !== 1) { const z = etat.intro, cx = W * .5, cy = H * .7; S *= z; tx = cx + (tx - cx) * z; ty = cy + (ty - cy) * z; }
      tx = borne(tx, W - PHOTO.w * S, 0); ty = borne(ty, H - PHOTO.h * S, 0);
    } else {
      S = etape.S * Math.pow(zoomTrou, b);
      const fx = melange(HEROS_C[0] * etape.S + etape.tx, W / 2, b), fy = melange(HEROS_C[1] * etape.S + etape.ty, H / 2, b);
      tx = fx - HEROS_C[0] * S; ty = fy - HEROS_C[1] * S;
    }
    return { S, tx, ty, a, b };
  }

  /* ----- Peinture ----- */
  function liteau(x, y, w, h) {
    const g = ctx.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(0, '#f2d58f'); g.addColorStop(.42, '#e2b95c'); g.addColorStop(1, '#9c7128');
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
    ctx.fillStyle = 'rgba(120,80,24,.22)';
    for (let i = 1; i < 4; i++) ctx.fillRect(x, y + (h * i) / 4, w, Math.max(.6, h * .05));
    const o = ctx.createLinearGradient(0, y + h, 0, y + h * 1.9);
    o.addColorStop(0, 'rgba(0,0,0,.7)'); o.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = o; ctx.fillRect(x, y + h, w, h * .9);
    const r = Math.max(1.6, h * .17);
    for (const fx of [.28, .74]) {
      const cx = x + w * fx, cy = y + h * .5, n = ctx.createRadialGradient(cx - r * .3, cy - r * .3, 0, cx, cy, r);
      n.addColorStop(0, '#f3f5f6'); n.addColorStop(1, '#6b7378');
      ctx.fillStyle = n; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    }
  }
  /* Ce qu'on voit sous la tuile : l'écran noir, le liteau en pin, la tête de la tuile du dessous dans l'ombre. */
  function cavite(c, y0, entier) {
    const bas = Math.max(c.p[2][1], c.p[3][1]), x0 = c.bx - 3, w = c.bw + 6, h0 = Math.max(1, bas - y0);
    ctx.save(); poly(c.p); ctx.clip();
    ctx.beginPath(); ctx.rect(x0, y0, w, h0 + 3); ctx.clip();
    let g = ctx.createLinearGradient(0, y0, 0, bas);
    g.addColorStop(0, '#0b0a09'); g.addColorStop(1, '#1d1915');
    ctx.fillStyle = g; ctx.fillRect(x0, y0, w, h0 + 3);
    if (entier) { liteau(x0, y0 + h0 * .1, w, Math.max(5, c.h * .14)); liteau(x0, y0 + h0 * .58, w, Math.max(5, c.h * .14)); }
    else if (h0 > 7) liteau(x0, y0 + h0 * .2, w, Math.max(4, Math.min(c.h * .13, h0 * .34)));
    g = ctx.createLinearGradient(0, bas - h0 * .3, 0, bas);
    g.addColorStop(0, 'rgba(120,46,18,0)'); g.addColorStop(1, 'rgba(150,60,26,.92)');
    ctx.fillStyle = g; ctx.fillRect(x0, bas - h0 * .3, w, h0 * .3 + 3);
    g = ctx.createLinearGradient(0, y0, 0, y0 + Math.min(h0, c.h * .24));
    g.addColorStop(0, 'rgba(0,0,0,.8)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x0, y0, w, Math.min(h0, c.h * .24));
    ctx.restore();
  }
  function nez(c, k) {
    const [, , br, bl] = c.p, d = c.h * .5 * k, ex = .06 * k, cx = (bl[0] + br[0]) / 2;
    return { bl: [cx + (bl[0] - cx) * (1 + ex), bl[1] - d], br: [cx + (br[0] - cx) * (1 + ex), br[1] - d], d, ex, cx, ep: c.h * .15 * Math.min(1, k * 1.8) };
  }
  function ombrePortee(c, n, k) {
    const L = c.h * .85 * Math.min(1.2, k) * ombre.l, ox = ombre.x * L, oy = ombre.y * L;
    const pts = [c.p[0], c.p[1], [n.br[0] + ox, n.br[1] + n.ep + oy], [n.bl[0] + ox, n.bl[1] + n.ep + oy]];
    ctx.save();
    ctx.shadowColor = `rgba(30,11,3,${ombre.nuit ? .38 : .55})`;
    ctx.shadowBlur = (ombre.flou * c.h / 60 + c.h * .05) * dpr;
    ctx.shadowOffsetX = 9000 * dpr;
    ctx.translate(-9000, 0); poly(pts); ctx.fillStyle = '#000'; ctx.fill();
    ctx.restore();
  }
  function dessus(c, n, k) {
    const [tl, tr] = c.p, haut = Math.min(tl[1], tr[1]), bas = Math.max(c.p[2][1], c.p[3][1]), hc = bas - haut, s = 1 - n.d / hc;
    ctx.save(); poly([tl, tr, n.br, n.bl]); ctx.clip();
    const N = Math.max(10, Math.min(160, Math.round(hc / 3))), sx = c.bx - 8, sw = c.bw + 16;
    for (let i = 0; i < N; i++) {
      const a = i / N, b = (i + 1) / N, f = 1 + n.ex * (a + b) / 2, y0 = haut + hc * a, y1 = haut + hc * b;
      ctx.drawImage(photo, ...src(sx, y0, sw, y1 - y0), n.cx + (sx - n.cx) * f, haut + (y0 - haut) * s, sw * f, (y1 - y0) * s + .8);
    }
    ctx.fillStyle = `rgba(255,238,220,${(.1 * Math.min(1, k)).toFixed(3)})`; ctx.fillRect(sx - 20, haut, sw + 40, hc);
    const g = ctx.createLinearGradient(0, haut, 0, haut + hc * .2);
    g.addColorStop(0, `rgba(40,14,4,${(.4 * Math.min(1, k)).toFixed(2)})`); g.addColorStop(1, 'rgba(40,14,4,0)');
    ctx.fillStyle = g; ctx.fillRect(sx - 20, haut, sw + 40, hc * .2);
    ctx.restore();
  }
  function tranche(c, n, k) {
    if (n.ep < .8) return;
    const bas = Math.max(c.p[2][1], c.p[3][1]), haut = Math.min(n.bl[1], n.br[1]);
    ctx.save();
    poly([n.bl, n.br, [n.br[0], n.br[1] + n.ep], [n.bl[0], n.bl[1] + n.ep]]); ctx.clip();
    const sh = c.h * .17, x = Math.min(n.bl[0], n.br[0]) - 6, w = Math.abs(n.br[0] - n.bl[0]) + 12;
    ctx.drawImage(photo, ...src(c.bx - 6, bas - sh, c.bw + 12, sh), x, haut - 1, w, n.ep + Math.abs(n.br[1] - n.bl[1]) + 2);
    const g = ctx.createLinearGradient(0, haut, 0, haut + n.ep + 2);
    g.addColorStop(0, 'rgba(70,24,8,.12)'); g.addColorStop(1, 'rgba(40,12,3,.74)');
    ctx.fillStyle = g; ctx.fillRect(x - 4, haut - 2, w + 8, n.ep + Math.abs(n.br[1] - n.bl[1]) + 6);
    ctx.restore();
    ctx.strokeStyle = `rgba(255,226,192,${(.6 * Math.min(1, k * 2)).toFixed(2)})`; ctx.lineWidth = Math.max(1.3, c.h / 70);
    ctx.beginPath(); ctx.moveTo(n.bl[0], n.bl[1] + .5); ctx.lineTo(n.br[0], n.br[1] + .5); ctx.stroke();
  }
  function dessiner(p) {
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, toile.width, toile.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    const k = photo.naturalWidth / PHOTO.w;
    const x0 = Math.max(0, -cam.tx / cam.S), y0 = Math.max(0, -cam.ty / cam.S);
    const x1 = Math.min(PHOTO.w, (W - cam.tx) / cam.S), y1 = Math.min(PHOTO.h, (H - cam.ty) / cam.S);
    if (x1 > x0 && y1 > y0) ctx.drawImage(photo, x0 * k, y0 * k, (x1 - x0) * k, (y1 - y0) * k, cam.tx + x0 * cam.S, cam.ty + y0 * cam.S, (x1 - x0) * cam.S, (y1 - y0) * cam.S);
    const c = cellule(), env = doux(SCENE.envol[0], SCENE.envol[1], p);
    if (env > 0) {
      cavite(c, Math.min(c.p[0][1], c.p[1][1]), true);
      if (env >= 1) return;
      /* La tuile s'envole vers nous : son nez monte, elle grandit, s'élève et s'efface. */
      const kk = Math.min(1.7, Math.max(etat.k, 1) + env * .7), n = nez(c, kk), px = (c.p[0][0] + c.p[1][0]) / 2, py = c.p[0][1], s = 1 + env * .55;
      ctx.save();
      ctx.globalAlpha = 1 - doux(.35, 1, env);
      ctx.translate(px, py - env * c.h * 1.8); ctx.scale(s, s); ctx.translate(-px, -py);
      dessus(c, n, kk); tranche(c, n, kk);
      ctx.restore();
      return;
    }
    if (etat.k < .012) return;
    const n = nez(c, etat.k);
    cavite(c, Math.min(n.bl[1], n.br[1]) + n.ep * .6, false);
    ombrePortee(c, n, etat.k);
    dessus(c, n, etat.k);
    tranche(c, n, etat.k);
  }

  /* ----- Plans des couches : chacun s'ouvre dans une fenêtre du précédent (trou, vide entre liteaux, fente, fondu). ----- */
  const plein = () => [-W * .1, -H * .1, W * 1.1, H * 1.1];
  function trouverVide(im) {
    if (!im || !im.complete || !im.naturalWidth) return null;
    try {
      const iw = im.naturalWidth, ih = im.naturalHeight, s = Math.max(W / iw, H / ih);
      const pos = getComputedStyle(im).objectPosition.split(' ').map((v) => (v.endsWith('%') ? parseFloat(v) / 100 : .5));
      const q = 4, cw = Math.ceil(W / q), ch = Math.ceil(H / q);
      const cv = document.createElement('canvas'); cv.width = cw; cv.height = ch;
      const g = cv.getContext('2d', { willReadFrequently: true });
      g.drawImage(im, (W - iw * s) * pos[0] / q, (H - ih * s) * pos[1] / q, iw * s / q, ih * s / q);
      const d = g.getImageData(0, 0, cw, ch).data, noir = (i) => d[i * 4] + d[i * 4 + 1] + d[i * 4 + 2] < 190;
      const cx = cw * .5, cy = ch * (mobile ? .42 : .46);
      let meilleur = -1, md = Infinity;
      for (let y = 0; y < ch; y++) for (let x = 0; x < cw; x++) { const i = y * cw + x; if (noir(i)) { const dd = (x - cx) ** 2 + (y - cy) ** 2; if (dd < md) { md = dd; meilleur = i; } } }
      if (meilleur < 0) return null;
      const vu = new Uint8Array(cw * ch), file = [meilleur]; vu[meilleur] = 1;
      let x0 = cw, y0 = ch, x1 = 0, y1 = 0, n = 0;
      while (file.length && n < cw * ch * .2) {
        const i = file.pop(), x = i % cw, y = (i / cw) | 0; n++;
        x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
        for (const j of [i - 1, i + 1, i - cw, i + cw]) if (j >= 0 && j < cw * ch && !vu[j] && Math.abs((j % cw) - x) <= 1 && noir(j)) { vu[j] = 1; file.push(j); }
      }
      const bw = (x1 - x0 + 1) * q, bh = (y1 - y0 + 1) * q;
      if (bw < 24 || bh < 10 || bw > W * .6 || bh > H * .4 || n < (x1 - x0 + 1) * (y1 - y0 + 1) * .6) return null;
      return [x0 * q + 2, y0 * q + 2, (x1 + 1) * q - 2, (y1 + 1) * q - 2];
    } catch { return null; }
  }
  function fenetre(type) {
    if (type === 'vide') {
      if (!vide) vide = trouverVide(plans[0] && plans[0].img);
      if (vide) return vide;
      return [W * .5 - Math.min(W * .1, 120), H * .45 - 22, W * .5 + Math.min(W * .1, 120), H * .45 + 22];
    }
    const lw = mobile ? W * .34 : Math.min(W * .2, 260), lh = mobile ? H * .09 : H * .11;
    return [W * .5 - lw, H * .47 - lh, W * .5 + lw, H * .47 + lh];
  }
  const appliquer = (el, s, ox, oy) => { el.style.transform = `translate3d(${ox.toFixed(2)}px, ${oy.toFixed(2)}px, 0) scale(${s.toFixed(5)})`; };
  const montrer = (pl, v) => { if (pl._v !== v) { pl._v = v; pl.el.style.visibility = v ? 'visible' : 'hidden'; } };
  function majPlans(p) {
    const b = doux(SCENE.trou[0], SCENE.trou[1], p);
    if (planToit) planToit.style.visibility = b >= 1 ? 'hidden' : '';
    sec.classList.toggle('sous-toit', b >= 1);
    plans.forEach((pl, j) => {
      /* Entrée du plan j : par le trou de la tuile (j = 0) ou par la fenêtre du passage précédent. */
      let r, typeEntree, fen = null, sortie = 0, typeSortie = null;
      if (j === 0) { r = b; typeEntree = 'trou'; }
      else { const [d, f, t] = SCENE.passages[j - 1]; r = lin(d, f, p); typeEntree = t; }
      if (j < plans.length - 1) { const [d, f, t] = SCENE.passages[j]; sortie = lin(d, f, p); typeSortie = t; }
      if (r <= 0 || sortie >= 1) { montrer(pl, false); return; }
      montrer(pl, true);
      /* Dérive lente pendant l'arrêt, puis plongée dans la fenêtre de sortie. */
      const debutArret = j === 0 ? SCENE.trou[1] : SCENE.passages[j - 1][1];
      const finArret = j < plans.length - 1 ? SCENE.passages[j][0] : 1;
      const sd = 1 + .035 * lin(debutArret, finArret, p);
      let s = sd, ox = W * .5 * (1 - sd), oy = H * .5 * (1 - sd), op = 1;
      if (sortie > 0) {
        const e = doux(0, 1, sortie);
        if (typeSortie === 'fondu') { const z = 1 + .6 * e; s = sd * z; ox = W * .5 - (W * .5 - ox) * z; oy = H * .5 - (H * .5 - oy) * z; op = 1 - lin(.25, .95, sortie); }
        else {
          fen = fenetre(typeSortie);
          const fx = (fen[0] + fen[2]) / 2, fy = (fen[1] + fen[3]) / 2, sx = ox + sd * fx, sy = oy + sd * fy;
          const Z = borne(Math.min(W / (fen[2] - fen[0]), H / (fen[3] - fen[1])) * .9, 2.2, 6);
          const z = Math.pow(Z, typeSortie === 'fente' ? doux(.18, 1, sortie) : e);
          s = sd * z; ox = sx - fx * s; oy = sy - fy * s;
        }
      }
      appliquer(pl.cam, s, ox, oy);
      pl._s = s; pl._ox = ox; pl._oy = oy;
      if (r >= 1) { pl.el.style.clipPath = ''; pl.el.style.opacity = String(op); return; }
      /* Pendant l'entrée : le plan se voit à travers la fenêtre, de plus loin, et vient à sa place. */
      const e = doux(0, 1, r);
      if (typeEntree === 'trou') {
        const c = cellule(), cx = (c.p[0][0] + c.p[2][0]) / 2, cy = (c.p[0][1] + c.p[2][1]) / 2, si = melange(.5, 1, e) * s;
        appliquer(pl.cam, si, cx - (cx - ox) * si / s, cy - (cy - oy) * si / s);
        pl.el.style.clipPath = b < .985 ? `polygon(${c.p.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(',')})` : '';
        pl.el.style.opacity = lin(.1, .55, r).toFixed(3);
        return;
      }
      if (typeEntree === 'fondu') {
        const si = melange(1.22, 1, e) * s;
        appliquer(pl.cam, si, W * .5 - (W * .5 - ox) * si / s, H * .5 - (H * .5 - oy) * si / s);
        pl.el.style.clipPath = ''; pl.el.style.opacity = lin(0, .7, r).toFixed(3);
        return;
      }
      const prec = plans[j - 1];
      const f = fenetre(typeEntree), ps = prec._s || 1, pox = prec._ox || 0, poy = prec._oy || 0;
      let R = [pox + f[0] * ps, poy + f[1] * ps, pox + f[2] * ps, poy + f[3] * ps];
      if (typeEntree === 'fente') { const o = doux(0, .3, r), my = (R[1] + R[3]) / 2, hh = (R[3] - R[1]) / 2 * Math.max(.03, o); R = [R[0], my - hh, R[2], my + hh]; }
      const g = Math.pow(lin(.35, 1, r), 1.6), P = plein();
      R = R.map((v, i) => melange(v, P[i], g));
      const cx = (R[0] + R[2]) / 2, cy = (R[1] + R[3]) / 2, si = melange(.6, 1, e) * s;
      appliquer(pl.cam, si, cx - (cx - ox) * si / s, cy - (cy - oy) * si / s);
      pl.el.style.clipPath = g >= 1 ? '' : `inset(${Math.max(0, R[1]).toFixed(1)}px ${Math.max(0, W - R[2]).toFixed(1)}px ${Math.max(0, H - R[3]).toFixed(1)}px ${Math.max(0, R[0]).toFixed(1)}px)`;
      pl.el.style.opacity = lin(0, .4, r).toFixed(3);
    });
  }

  /* ----- Textes : le titre s'efface, une couche à la fois, le fil à droite ----- */
  function majTextes(p) {
    /* Le titre ne s'efface pas : il monte et sort de l'écran, comme une page qu'on fait défiler. */
    if (une) {
      const e = doux(SCENE.une[0], SCENE.une[1], p);
      une.style.transform = e > 0 ? `translate3d(0, ${(-(une.offsetHeight + 40) * e).toFixed(1)}px, 0)` : '';
      une.style.visibility = e >= 1 ? 'hidden' : '';
    }
    if (ombreTexte) ombreTexte.style.opacity = doux(.1, .17, p).toFixed(3);
    let actif = -1;
    SCENE.legendes.forEach(([d, f], i) => { if (p >= d && p < f) actif = i; });
    if (actif !== etat.actif) {
      etat.actif = actif;
      legendes.forEach((l, i) => l.classList.toggle('actif', i === actif));
    }
    let fil = 0;
    SCENE.legendes.forEach(([d], i) => { if (p >= d - .02) fil = i; });
    rail.forEach((li, i) => li.classList.toggle('actif', i === fil));
    sec.classList.toggle('dessous', p > .13);
  }

  /* ----- Boucle : ressort de la tuile, caméra, plans ----- */
  const interactif = () => cam.a > .9 && etat.p < SCENE.envol[0];
  function rendre(t) {
    raf = 0;
    const dt = Math.min(.05, (t - (dernierT || t)) / 1000); dernierT = t;
    const p = etat.p;
    const auto = doux(SCENE.leve[0], SCENE.leve[1], p);
    const cible = Math.max(auto, interactif() && (etat.survol || etat.garde) ? 1 : 0);
    const acc = 120 * (cible - etat.k) - 13 * etat.v;
    etat.v += acc * dt; etat.k += etat.v * dt;
    if (etat.k < 0) { etat.k = 0; etat.v = -etat.v * .3; if (Math.abs(etat.v) < .2) etat.v = 0; }
    const bouge = Math.abs(cible - etat.k) > .002 || Math.abs(etat.v) > .003;
    cam = camera(p);
    if (cam.a > .97 && !etat.invite && p < SCENE.leve[0]) { etat.invite = true; etat.v = 3.4; }
    if (pret && cam.b < 1) dessiner(p);
    majPlans(p);
    majTextes(p);
    if (bouge) demander(); else dernierT = 0;
  }
  function demander() { if (!raf) raf = requestAnimationFrame(rendre); }

  /* ----- Gestes sur la grande tuile ----- */
  const surTuile = (e) => {
    if (!interactif()) return false;
    const r = scene.getBoundingClientRect();
    return dedans([(e.clientX - r.left - cam.tx) / cam.S, (e.clientY - r.top - cam.ty) / cam.S], HEROS_P);
  };
  zone.addEventListener('pointermove', (e) => {
    const s = surTuile(e);
    zone.classList.toggle('sur-tuile', s);
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
      ombre = { x: -Math.sin(rel) * .9, y: Math.max(.2, Math.cos(rel)) * .75, l, flou: 5 + l * 3, nuit: false };
      if (legende) legende.textContent = `Son ombre suit le soleil de Taverny, ${heure}.`;
    } else {
      ombre = { x: 0, y: .4, l: .6, flou: 14, nuit: true };
      if (legende) legende.textContent = `Soleil couché sur Taverny, ${heure} : ombre douce.`.replace(' :', ' :');
    }
    demander();
  }
  majSoleil();
  setInterval(majSoleil, 60000);

  /* ----- Défilement : progression amortie, sans à-coups ----- */
  const suivi = { p: 0 };
  const vers = (p) => gsap.to(suivi, { p, duration: .65, ease: 'power2.out', overwrite: true, onUpdate: () => { etat.p = suivi.p; demander(); } });
  const st = window.ScrollTrigger.create({ trigger: sec, start: 'top top', end: 'bottom bottom', onUpdate: (s) => vers(s.progress), onRefresh: (s) => { suivi.p = etat.p = s.progress; demander(); } });
  rail.forEach((li, i) => $('a', li).addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: st.start + SCENE.arrets[i] * (st.end - st.start), behavior: 'smooth' });
    try { history.replaceState(null, '', `#couche-${i + 1}`); } catch {}
  }));

  let attente;
  new ResizeObserver(() => { clearTimeout(attente); attente = setTimeout(mesurer, 100); }).observe(scene);
  plans.forEach((pl) => pl.img && pl.img.addEventListener('load', () => { vide = null; demander(); }));
  /* Les plans des couches se chargent dès que la photo du toit est là (jamais avant l'image d'ouverture). */
  const charger = () => { pret = true; zone.classList.add('toile-prete'); mesurer(); plans.forEach((pl) => { if (pl.img) pl.img.loading = 'eager'; }); };
  photo.addEventListener('load', () => (photo.decode ? photo.decode() : Promise.resolve()).catch(() => {}).then(charger));
  if (photo.complete && photo.naturalWidth) charger();
  mesurer();

  plongee = {
    /* Intro : la photo se pose en reculant légèrement pendant que le panneau du logo s'efface. */
    intro(tl, a = .2) { const o = { z: 1.09 }; etat.intro = 1.09; demander(); tl.to(o, { z: 1, duration: 1.7, ease: 'power3.out', onUpdate: () => { etat.intro = o.z; demander(); } }, a); },
    final() { etat.intro = 1; demander(); },
    arriver() { const o = { z: 1.05 }; etat.intro = 1.05; gsap.to(o, { z: 1, duration: 1.4, ease: 'power3.out', onUpdate: () => { etat.intro = o.z; demander(); } }); },
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
  if (fpe) { const m = await import('./projet/devis.js?v=3'); m.devis(fpe); }
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

