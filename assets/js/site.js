/* Effets propres à Artisan Sandero (« Sous les tuiles »). Le socle gère l'ouverture, le voile en rangs de tuiles,
   l'en-tête, le mode calme, les mesures et la bibliothèque d'effets. Ici seulement ce qui est propre au client ;
   chaque effet porte data-effet="nom-du-plan" dans les pages. */
import { demarrer, etat, versObjet } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const calme = () => etat.calme || document.documentElement.classList.contains('calme') || matchMedia('(prefers-reduced-motion: reduce)').matches;

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

/* ---------- Ouverture : soulever une tuile sur le toit vu du faîtage (grille wouahou point 1, effet signature) ----------
   Photo paysage ouverture-faitage (1920 × 1289) en plein cadre. Sur le pan de droite, trois rangs de tuiles mécaniques
   relevés sur la photo (lignes des nez, joints) donnent douze cellules à quatre coins [rang, colonne, x1 y1 … x4 y4]
   (haut gauche, haut droite, nez droite, nez gauche). Une tuile levée garde sa tête accrochée au liteau ; son nez se
   soulève : le dessus se raccourcit, la tranche de terre cuite apparaît et, dans la fente, le liteau en pin sur l'écran
   noir. Son ombre portée suit le soleil réel sur Taverny à l'heure de la visite. À l'arrivée, le logo glisse jusqu'au
   trou d'une tuile manquante et devient cette tuile, qui se pose ; elle reste levée avec l'étiquette du devis. */
const PHOTO = { w: 1920, h: 1289 };
const CELLULES = [["c",0,[1030,970,1183,977,1205,1040,1037,1037]],["c",1,[1183,977,1349,983,1370,1043,1205,1040]],["c",2,[1349,983,1505,989,1525,1046,1370,1043]],["c",3,[1505,989,1653,994,1672,1049,1525,1046]],["d",0,[1037,1037,1206,1041,1240,1127,1047,1125]],["d",1,[1206,1041,1396,1044,1430,1129,1240,1127]],["d",2,[1396,1044,1579,1048,1612,1130,1430,1129]],["d",3,[1579,1048,1750,1051,1782,1132,1612,1130]],["e",0,[1046,1125,1249,1127,1286,1251,1060,1251]],["e",1,[1249,1127,1468,1129,1504,1251,1286,1251]],["e",2,[1468,1129,1684,1131,1720,1251,1504,1251]],["e",3,[1684,1131,1882,1133,1917,1251,1720,1251]]];
const RANGS_TOIT = 'cde';

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

let toit = null;
function tuiles() {
  const zone = $('.toit');
  if (!zone) return;
  const toile = $('.toit-toile', zone), img = $('.toit-photo img', zone), trou = $('.toit-trou', zone);
  const etiquette = $('.toit-bulle', zone), legende = $('.toit-soleil', zone);
  if (!toile || !img) return;
  const ctx = toile.getContext('2d'), fond = document.createElement('canvas'), fctx = fond.getContext('2d');
  const anime = !calme() && !!gsap;
  let cases = [], dpr = 1, W = 0, H = 0, heros = null, survol = null, actif = false, dernier = 0, pret = false;
  let phase = anime ? 'attente' : 'fini';
  let ombre = { x: -.3, y: .6, l: 1, flou: 8, nuit: false };

  const poly = (pts) => { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); };
  const trouver = (r, q) => cases.find((c) => c.r === r && c.q === q);
  const dedans = ([x, y], p) => { let ok = false; for (let i = 0, j = 3; i < 4; j = i++) { const [xi, yi] = p[i], [xj, yj] = p[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ok = !ok; } return ok; };

  function construire() {
    W = zone.clientWidth; H = zone.clientHeight;
    if (!W || !H || !img.naturalWidth) return false;
    dpr = Math.min(2, devicePixelRatio || 1);
    toile.width = fond.width = Math.round(W * dpr); toile.height = fond.height = Math.round(H * dpr);
    /* Même cadrage que l'image : object-fit cover dans sa boîte, object-position lu sur la page. */
    const fig = $('.toit-photo', zone), garde = fig ? fig.style.transform : '';
    if (fig) fig.style.transform = '';
    const zr = zone.getBoundingClientRect(), ir = img.getBoundingClientRect();
    if (fig) fig.style.transform = garde;
    const sc = Math.max(ir.width / PHOTO.w, ir.height / PHOTO.h);
    const pos = getComputedStyle(img).objectPosition.split(' ').map((v) => (v.endsWith('%') ? parseFloat(v) / 100 : .5));
    const ox = ir.left - zr.left + (ir.width - PHOTO.w * sc) * pos[0], oy = ir.top - zr.top + (ir.height - PHOTO.h * sc) * (pos[1] ?? .5);
    fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fctx.clearRect(0, 0, W, H);
    fctx.drawImage(img, ox, oy, PHOTO.w * sc, PHOTO.h * sc);
    const anciens = new Map(cases.map((c) => [c.cle, c]));
    const basUtile = H - (W < 761 ? 6 : 4);
    cases = CELLULES.map(([r, q, v]) => {
      const p = [0, 2, 4, 6].map((i) => [ox + v[i] * sc, oy + v[i + 1] * sc]);
      const xs = p.map((a) => a[0]), ys = p.map((a) => a[1]);
      const bx = Math.min(...xs), by = Math.min(...ys), bw = Math.max(...xs) - bx, bh = Math.max(...ys) - by;
      const a = anciens.get(r + q);
      return { cle: r + q, r, q, p, bx, by, bw, bh, h: (p[3][1] - p[0][1] + p[2][1] - p[1][1]) / 2, k: a ? a.k : 0, v: 0, cible: 0, garde: a ? a.garde : false, absent: false, vague: 0 };
    }).filter((c) => c.bx > 2 && c.bx + c.bw < W - 2 && c.by > H * .3 && c.by + c.bh < basUtile);
    const cible = W < 761 ? [W * .55, H * .8] : [W * .72, H * .86];
    const d = (c) => Math.hypot(c.bx + c.bw / 2 - cible[0], c.by + c.bh / 2 - cible[1]);
    heros = cases.slice().sort((a, b) => d(a) - d(b))[0] || null;
    placerLegende();
    if (heros && trou) {
      const tw = Math.max(66, heros.bw), th = Math.max(66, heros.bh);
      trou.style.cssText = `left:${(heros.bx + heros.bw / 2 - tw / 2).toFixed(0)}px;top:${(heros.by + heros.bh / 2 - th / 2).toFixed(0)}px;width:${tw.toFixed(0)}px;height:${th.toFixed(0)}px`;
    }
    if (heros) {
      if (phase === 'attente') heros.absent = true;
      if (phase === 'fini' && !cases.some((c) => c.garde)) { heros.garde = true; heros.k = 1; }
    }
    pret = true;
    dessiner();
    if (phase === 'fini' && heros && heros.garde) montrerDevis(heros, false);
    return true;
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
    ctx.shadowBlur = (ombre.flou + c.h * .05) * dpr;
    ctx.shadowOffsetX = 5000 * dpr;
    ctx.translate(-5000, 0); poly(pts); ctx.fillStyle = '#000'; ctx.fill();
    ctx.restore();
  }
  function dessus(c, n, k) {
    const [tl, tr] = c.p, haut = Math.min(tl[1], tr[1]), bas = Math.max(c.p[2][1], c.p[3][1]), hc = bas - haut, s = 1 - n.d / hc;
    ctx.save(); poly([tl, tr, n.br, n.bl]); ctx.clip();
    const N = Math.max(10, Math.round(hc / 3)), sx = c.bx - 8, sw = c.bw + 16;
    for (let i = 0; i < N; i++) {
      const a = i / N, b = (i + 1) / N, f = 1 + n.ex * (a + b) / 2, y0 = haut + hc * a, y1 = haut + hc * b;
      ctx.drawImage(fond, sx * dpr, y0 * dpr, sw * dpr, (y1 - y0) * dpr, n.cx + (sx - n.cx) * f, haut + (y0 - haut) * s, sw * f, (y1 - y0) * s + .8);
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
    ctx.drawImage(fond, (c.bx - 6) * dpr, (bas - sh) * dpr, (c.bw + 12) * dpr, sh * dpr, x, haut - 1, w, n.ep + Math.abs(n.br[1] - n.bl[1]) + 2);
    const g = ctx.createLinearGradient(0, haut, 0, haut + n.ep + 2);
    g.addColorStop(0, 'rgba(70,24,8,.12)'); g.addColorStop(1, 'rgba(40,12,3,.74)');
    ctx.fillStyle = g; ctx.fillRect(x - 4, haut - 2, w + 8, n.ep + Math.abs(n.br[1] - n.bl[1]) + 6);
    ctx.restore();
    ctx.strokeStyle = `rgba(255,226,192,${(.6 * Math.min(1, k * 2)).toFixed(2)})`; ctx.lineWidth = 1.3;
    ctx.beginPath(); ctx.moveTo(n.bl[0], n.bl[1] + .5); ctx.lineTo(n.br[0], n.br[1] + .5); ctx.stroke();
  }
  function dessiner() {
    if (!pret) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, toile.width, toile.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    for (const c of cases) {
      if (c.absent) { cavite(c, Math.min(c.p[0][1], c.p[1][1]), true); continue; }
      if (c.k < .012) continue;
      const k = c.k, n = nez(c, k);
      cavite(c, Math.min(n.bl[1], n.br[1]) + n.ep * .6, false);
      ombrePortee(c, n, k);
      dessus(c, n, k);
      tranche(c, n, k);
    }
  }

  /* ----- Mouvement : un ressort par tuile, une seule levée à la fois ----- */
  function pas(t) {
    const dt = Math.min(.05, (t - (dernier || t)) / 1000);
    dernier = t;
    let bouge = false;
    for (const c of cases) {
      if (c.absent) continue;
      let cible = c.garde ? 1 : 0;
      if (survol === c) cible = 1;
      if (c.vague && t > c.vague && t < c.vague + 260) cible = 3.2 / (.5 * c.h);
      const [raideur, frein] = c.lent && cible > 0 ? [38, 11.5] : [175, 15];
      const acc = raideur * (cible - c.k) - frein * c.v;
      c.v += acc * dt; c.k += c.v * dt;
      if (c.k < 0) { c.k = 0; c.v = -c.v * .3; if (Math.abs(c.v) < .2) c.v = 0; }
      if (Math.abs(cible - c.k) > .002 || Math.abs(c.v) > .003) bouge = true;
    }
    dessiner();
    if (bouge || cases.some((c) => c.vague && t < c.vague + 700)) requestAnimationFrame(pas);
    else { actif = false; dernier = 0; }
  }
  function relancer() { if (!anime) { cases.forEach((c) => { c.k = c.garde || survol === c ? 1 : 0; }); dessiner(); return; } if (!actif) { actif = true; dernier = 0; requestAnimationFrame(pas); } }

  const toucher = () => zone.classList.add('toit-touche');
  /* Toit en profondeur à la souris : la photo, la toile et la bulle glissent ensemble, le titre en sens opposé. */
  const calques = [$('.toit-photo', zone), toile, etiquette].filter(Boolean), titreUne = $('.une-texte');
  let dec = { x: 0, y: 0, s: 1 }, vise = [0, 0], suivi = [0, 0], rafP = 0;
  const sourisFine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  function profondeur() {
    rafP = 0;
    suivi = suivi.map((v, i) => v + (vise[i] - v) * .09);
    const tx = -suivi[0] * 20, ty = -suivi[1] * 12, s = 1 + 2 * Math.max(Math.abs(tx) / (W || 1), Math.abs(ty) / (H || 1)) + (tx || ty ? .004 : 0);
    dec = { x: tx, y: ty, s };
    const tr = tx || ty ? `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${s.toFixed(4)})` : '';
    calques.forEach((el) => {
      el.style.transform = tr;
      if (el === etiquette) el.style.transformOrigin = `${(W / 2 - el.offsetLeft).toFixed(0)}px ${(H / 2 - el.offsetTop).toFixed(0)}px`;
    });
    if (titreUne) titreUne.style.transform = tx || ty ? `translate3d(${(suivi[0] * 10).toFixed(2)}px, ${(suivi[1] * 6).toFixed(2)}px, 0)` : '';
    if (Math.abs(vise[0] - suivi[0]) > .002 || Math.abs(vise[1] - suivi[1]) > .002) rafP = requestAnimationFrame(profondeur);
  }
  if (anime && sourisFine && titreUne) {
    const scene = zone.parentElement;
    scene.addEventListener('pointermove', (e) => { if (phase !== 'fini' || e.pointerType !== 'mouse') return; const r = scene.getBoundingClientRect(); vise = [(e.clientX - r.left) / r.width - .5, (e.clientY - r.top) / r.height - .5]; if (!rafP) rafP = requestAnimationFrame(profondeur); });
    scene.addEventListener('pointerleave', () => { vise = [0, 0]; if (!rafP) rafP = requestAnimationFrame(profondeur); });
  }
  const caseSous = (e) => {
    const r = zone.getBoundingClientRect();
    let x = e.clientX - r.left, y = e.clientY - r.top;
    x = (x - W / 2 - dec.x) / dec.s + W / 2; y = (y - H / 2 - dec.y) / dec.s + H / 2;
    return cases.find((c) => !c.absent && dedans([x, y], c.p)) || null;
  };
  zone.addEventListener('pointermove', (e) => {
    const c = caseSous(e);
    zone.classList.toggle('sur-tuile', !!c);
    if ((e.pointerType === 'mouse' || e.pointerType === 'pen') && c !== survol) { survol = c; if (c) toucher(); relancer(); }
  });
  zone.addEventListener('pointerleave', () => { survol = null; zone.classList.remove('sur-tuile'); relancer(); });
  zone.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    const c = caseSous(e);
    if (!c) return;
    toucher();
    const garde = !c.garde;
    cases.forEach((x) => { x.garde = false; });
    c.garde = garde; relancer();
    if (garde) setTimeout(() => montrerDevis(c), anime ? 230 : 0); else cacherDevis();
  });

  /* La tuile mène au devis : au-dessus de la tuile levée, « Un doute sur la vôtre ? Diagnostic gratuit ». */
  function montrerDevis(c, joue = true) {
    if (!etiquette || !c) return;
    etiquette.hidden = false;
    const w = etiquette.offsetWidth || 250, h = etiquette.offsetHeight || 60;
    etiquette.style.left = `${Math.min(W - w - 12, Math.max(12, c.bx + c.bw / 2 - 40)).toFixed(0)}px`;
    etiquette.style.top = `${Math.max(12, c.by - h - 14).toFixed(0)}px`;
    if (joue && anime) gsap.fromTo(etiquette, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: .45, ease: 'back.out(1.6)' });
  }
  function cacherDevis() { if (etiquette) etiquette.hidden = true; }

  /* Arrivée : la tuile du logo se pose dans son trou, ses deux voisines frémissent de 3 px, puis elle se lève
     lentement et la bulle du devis apparaît au-dessus. */
  function poser(depuisLogo = false) {
    if (phase !== 'attente') return;
    phase = 'pose';
    if (!heros) return;
    heros.absent = false;
    if (depuisLogo) { heros.k = .08; heros.v = -1.2; } else { heros.k = 1.2; heros.v = 0; }
    relancer();
    setTimeout(() => {
      const t0 = performance.now();
      const voisines = [trouver(heros.r, heros.q - 1), trouver(heros.r, heros.q + 1)].filter(Boolean);
      voisines.forEach((c, i) => { c.vague = t0 + i * 280; });
      relancer();
      setTimeout(() => {
        heros.garde = true; heros.lent = true; phase = 'fini'; relancer();
        setTimeout(() => { heros.lent = false; montrerDevis(heros); }, 900);
      }, voisines.length * 280 + 320);
    }, depuisLogo ? 420 : 820);
  }
  /* Intro de l'accueil : le logo prend la couleur et la forme de la tuile manquante, puis tombe dans son trou. */
  function intro(tl, panneau) {
    if (!anime || !heros || !panneau) return false;
    const logo = $('[data-ouverture-objet]', panneau);
    if (!logo) return false;
    const zr = zone.getBoundingClientRect(), L = logo.getBoundingClientRect();
    const face = document.createElement('canvas');
    face.width = Math.max(1, Math.round(heros.bw * dpr)); face.height = Math.max(1, Math.round(heros.bh * dpr));
    face.getContext('2d').drawImage(fond, heros.bx * dpr, heros.by * dpr, heros.bw * dpr, heros.bh * dpr, 0, 0, face.width, face.height);
    face.className = 'tuile-vol-face';
    face.style.clipPath = `polygon(${heros.p.map(([x, y]) => `${(x - heros.bx).toFixed(1)}px ${(y - heros.by).toFixed(1)}px`).join(',')})`;
    const image = logo.cloneNode(true);
    image.removeAttribute('data-ouverture-objet'); image.className = 'tuile-vol-logo';
    const vol = document.createElement('div');
    vol.className = 'tuile-vol';
    vol.style.cssText = `left:${(zr.left + heros.bx).toFixed(1)}px;top:${(zr.top + heros.by).toFixed(1)}px;width:${heros.bw.toFixed(1)}px;height:${heros.bh.toFixed(1)}px`;
    vol.append(face, image);
    document.body.append(vol);
    const cx = zr.left + heros.bx + heros.bw / 2, cy = zr.top + heros.by + heros.bh / 2;
    gsap.set(vol, { x: L.left + L.width / 2 - cx, y: L.top + L.height / 2 - cy, scale: L.width / heros.bw, transformPerspective: 900, '--o': 1 });
    gsap.set(face, { opacity: 0 });
    let fini = false;
    const atterrir = () => { if (fini) return; fini = true; vol.remove(); poser(true); };
    tl.set(logo, { opacity: 0 }, .18)
      .set(vol, { visibility: 'visible' }, .18)
      .to(panneau, { opacity: 0, duration: .32, ease: 'power2.out' }, .22)
      .to(face, { opacity: 1, duration: .22 }, .3)
      .to(image, { opacity: 0, duration: .22 }, .34)
      .to(vol, { x: 0, y: -50, scale: 1.14, rotationX: 30, duration: .5, ease: 'power2.inOut' }, .24)
      .to(vol, { y: 0, scale: 1, rotationX: 0, '--o': 0, duration: .42, ease: 'bounce.out' }, .74)
      .call(atterrir, null, 1.17);
    setTimeout(atterrir, 3200);
    return true;
  }
  function placerLegende() {}
  function final() {
    phase = 'fini';
    if (!heros) return;
    heros.absent = false; heros.garde = true; heros.k = 1; heros.v = 0;
    dessiner(); montrerDevis(heros, false);
  }

  /* Lumière de l'heure : l'ombre de la tuile levée suit le soleil réel sur Taverny (on regarde vers le sud). */
  function majSoleil() {
    const s = soleil(), heure = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: 'numeric', minute: '2-digit' }).format(new Date()).replace(':', ' h ');
    const rel = ((s.az - 180) * Math.PI) / 180;
    if (s.el > 0) {
      const l = Math.min(2.2, Math.max(.45, .32 / Math.tan((Math.max(5, s.el) * Math.PI) / 180)));
      ombre = { x: -Math.sin(rel) * .9, y: Math.max(.2, Math.cos(rel)) * .75, l, flou: 5 + l * 3, nuit: false };
      if (legende) { legende.textContent = `L’ombre suit le soleil de Taverny, ${heure}`; legende.classList.remove('nuit'); }
    } else {
      ombre = { x: 0, y: .4, l: .6, flou: 14, nuit: true };
      if (legende) { legende.textContent = `Soleil couché sur Taverny, ${heure} : ombre douce`.replace(' :', '\u00a0:'); legende.classList.add('nuit'); }
    }
    if (legende) { legende.hidden = false; placerLegende(); }
    dessiner();
  }
  majSoleil();
  setInterval(majSoleil, 60000);

  let attente;
  new ResizeObserver(() => { clearTimeout(attente); attente = setTimeout(() => { construire(); if (heros && heros.garde && etiquette && !etiquette.hidden) montrerDevis(heros, false); }, 120); }).observe(zone);
  const charger = () => construire();
  if (img.complete && img.naturalWidth) (img.decode ? img.decode() : Promise.resolve()).catch(() => {}).then(charger);
  img.addEventListener('load', charger);
  toit = { construire, poser, final, intro, arriver: () => setTimeout(poser, 300) };
}

/* ---------- Scène : les couches du toit se soulèvent une à une (data-grille="scene") ---------- */
function couches() {
  const sec = $('.couches');
  if (!sec || calme() || !gsap || !window.ScrollTrigger) return;
  const plaques = $$('.plaque', sec), items = $$('.couches-liste li', sec), n = plaques.length;
  const compte = $('[data-couche-n]', sec);
  const lisse = (x) => x * x * (3 - 2 * x);
  let actifAvant = -1;
  const maj = (p) => {
    let actif = 0;
    plaques.forEach((pl, k) => {
      const debut = .05 + k * (.86 / (n - 1)), l = Math.min(1, Math.max(0, (p - debut) / (.86 / (n - 1) * .8)));
      const e = lisse(l);
      /* Couches encore dessous : décalées en profondeur, elles remontent d'un cran à chaque couche soulevée. */
      const rang = Math.max(0, k - p * (n - 1) / .86 + .05 * (n - 1) / .86);
      const fond = `translate3d(0, ${(rang * 2.2).toFixed(2)}%, ${(-rang * 40).toFixed(1)}px)`;
      if (k === n - 1) { pl.style.transform = fond; return; }
      pl.style.transform = l > 0 ? `translateY(${(-e * 6).toFixed(2)}%) rotateX(${(e * 104).toFixed(2)}deg)` : fond;
      pl.style.opacity = e > .82 ? String(Math.max(0, 1 - (e - .82) / .18)) : '';
      if (l >= .5) actif = k + 1;
    });
    if (actif !== actifAvant) {
      actifAvant = actif;
      items.forEach((it, i) => it.classList.toggle('actif', i === actif));
      if (compte) compte.textContent = String(actif + 1);
    }
  };
  const st = window.ScrollTrigger.create({ trigger: sec, start: 'top top', end: 'bottom bottom', onUpdate: (s) => maj(s.progress), onRefresh: (s) => maj(s.progress) });
  /* Couches à la main (souris) : tirer la couche vers le haut la soulève ; on avance dans la scène du même geste. */
  const pile = $('.couches-pile', sec);
  let tire = null;
  pile.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; tire = { y: e.clientY, s: scrollY }; pile.setPointerCapture(e.pointerId); e.preventDefault(); });
  pile.addEventListener('pointermove', (e) => {
    if (!tire) return;
    const cible = tire.s + (tire.y - e.clientY) * ((st.end - st.start) / (pile.clientHeight * 2.4));
    window.scrollTo(0, Math.min(st.end, Math.max(st.start, cible)));
  });
  const fin = () => { tire = null; };
  pile.addEventListener('pointerup', fin); pile.addEventListener('pointercancel', fin);
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
  if (fpe) { const m = await import('./projet/devis.js?v=1'); m.devis(fpe); }
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

/* Couverture : la pente d'ouverture arrive moussue ; la souris ou le doigt la démousse (brosse douce, gomme sur la toile). */
let mousse = null;
function demoussage() {
  const toile = $('.mousse');
  if (!toile || calme()) { if (toile) toile.hidden = true; return; }
  const pente = toile.parentElement, ctx = toile.getContext('2d');
  let W = 0, H = 0, dpr = 1, frotte = 0, dernier = null, demo = false;
  const alea = (n) => { let s = n * 9301 + 49297; return () => ((s = (s * 9301 + 49297) % 233280) / 233280); };
  function peindre() {
    W = pente.clientWidth; H = pente.clientHeight; dpr = Math.min(2, devicePixelRatio || 1);
    toile.width = Math.round(W * dpr); toile.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const r = alea(7);
    ctx.fillStyle = 'rgba(64,72,44,.42)'; ctx.fillRect(0, 0, W, H);
    const teintes = ['74,86,44', '92,104,58', '58,64,40', '120,124,78', '160,156,96', '40,44,34'];
    for (let i = 0; i < 2600; i++) {
      const x = r() * W, y = H * .08 + r() * H * .97, rr = 2 + r() * r() * 22, c = teintes[Math.floor(r() * teintes.length)];
      const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
      g.addColorStop(0, `rgba(${c},${(.35 + r() * .45).toFixed(2)})`); g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g; ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    for (let i = 0; i < 260; i++) { ctx.fillStyle = `rgba(20,24,16,${(.12 + r() * .2).toFixed(2)})`; ctx.fillRect(r() * W, r() * H, 1 + r() * 2, 6 + r() * 30); }
  }
  function brosser(x, y) {
    ctx.save(); ctx.globalCompositeOperation = 'destination-out';
    const pas = dernier ? Math.max(1, Math.ceil(Math.hypot(x - dernier[0], y - dernier[1]) / 8)) : 1;
    for (let k = 1; k <= pas; k++) {
      const px = dernier ? dernier[0] + (x - dernier[0]) * k / pas : x, py = dernier ? dernier[1] + (y - dernier[1]) * k / pas : y;
      const g = ctx.createRadialGradient(px, py, 0, px, py, 46);
      g.addColorStop(0, 'rgba(0,0,0,.9)'); g.addColorStop(.6, 'rgba(0,0,0,.5)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(px, py, 46, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore(); dernier = [x, y];
    if (!demo && ++frotte > 4) pente.classList.add('mousse-touchee');
  }
  const point = (e) => { const r = toile.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  pente.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' || e.buttons) brosser(...point(e)); });
  pente.addEventListener('pointerdown', (e) => brosser(...point(e)));
  pente.addEventListener('pointerleave', () => { dernier = null; });
  pente.addEventListener('pointerup', () => { dernier = null; });
  new ResizeObserver(() => { if (Math.abs(pente.clientWidth - W) > 40) { peindre(); } }).observe(pente);
  peindre();
  /* Démonstration : un coup de brosse en diagonale, une fois la pente découverte. */
  mousse = {
    demo() {
      if (!gsap) return;
      const o = { t: 0 }; dernier = null;
      gsap.to(o, { t: 1, duration: 1.1, delay: .9, ease: 'power1.inOut', onStart: () => { demo = true; }, onUpdate: () => brosser(W * (.18 + .55 * o.t), H * (.78 - .38 * o.t)), onComplete: () => { dernier = null; demo = false; } });
    },
  };
}
const premierTitre = () => $('[data-titre-pose="intro"]');
demarrer({
  preparer() {
    titres();
    liteaux();
    tuiles();
    couches();
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
    const orage = $('.une-orage'), panneau = $('[data-ouverture]');
    const accueil = !!(toit && toit.construire());
    if (orage) { orage.classList.add('orage'); tl.call(() => gsap.to(orage, { opacity: 0, duration: 1.4, ease: 'power2.inOut', onComplete: () => orage.classList.remove('orage') }), null, accueil ? .35 : .8); }
    tl.fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: accueil ? .16 : .3, ease: 'power2.inOut' }, .02)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .16 }, .04)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-trait', { opacity: 0, duration: .14 }, accueil ? .16 : .36);
    /* Accueil : le logo devient la tuile qui tombe dans son trou. Autres pages : il glisse jusqu'à l'objet d'ouverture. */
    if (!(accueil && toit.intro(tl, panneau))) {
      versObjet(tl, { a: .22, duree: .36, ouverture: .6 });
      tl.call(() => toit && toit.poser(), null, .8);
    }
    tl.call(() => poserOuverture(premierTitre()), null, accueil ? .62 : .95);
    tl.call(() => { $$('.une .liteau, .page-une .liteau').forEach((l) => l.classList.add('pose')); }, null, 1.05);
    tl.call(() => ouvrirPage(), null, accueil ? .9 : 1.1);
    return tl;
  },
  etatFinal() {
    $$('[data-titre-pose], .rangs').forEach((t) => t.classList.add('pose'));
    if (toit) toit.final();
    ouvrirPage(true);
    $$('.liteau').forEach((l) => { const r = l.getBoundingClientRect(); if (r.top < innerHeight) l.classList.add('pose'); });
  },
  arrivee() {
    const orage = $('.une-orage');
    if (orage && gsap) { orage.classList.add('orage'); gsap.fromTo(orage, { opacity: 1 }, { opacity: 0, duration: 1.3, delay: .2, ease: 'power2.inOut', onComplete: () => orage.classList.remove('orage') }); }
    poserOuverture(premierTitre(), .15);
    if (toit) toit.arriver();
    setTimeout(() => ouvrirPage(), 250);
  },
});

