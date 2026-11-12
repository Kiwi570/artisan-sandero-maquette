/* Demande de devis Artisan Sandero : formulaire par étapes (module de la bibliothèque), prérempli par l'adresse
   (?prestation=couverture, ?signes=…) ; retour physique de l'action (grille wouahou, point 7) : la fiche se pose sur un
   liteau et reçoit le tampon « Reçu ». Démonstration : rien n'est envoyé. */
import { init } from '../modules/formulaire-par-etapes/module.js?v=4';

export async function devis(root) {
  const params = new URLSearchParams(location.search);
  const form = root.querySelector('form');
  const presta = params.get('prestation');
  if (presta) {
    const r = form.querySelector(`input[name="prestation"][value="${CSS.escape(presta)}"]`);
    if (r) r.checked = true;
  }
  const signes = params.get('signes');
  if (signes) {
    const liste = signes.split(',').join(', ');
    const m = form.querySelector('textarea[name="message"]');
    if (m && !m.value) m.value = `Signes constatés : ${liste}.`;
    const note = root.querySelector('.devis-signes');
    if (note) { note.textContent = `Signes joints à la demande : ${liste}.`; note.hidden = false; }
  }
  const api = await init(root, { messages: {} });
  /* La prestation est déjà choisie depuis une page : on ouvre directement l'étape suivante. */
  if (presta && form.querySelector('input[name="prestation"]:checked')) {
    try { api.aller(1); } catch {}
    const note = root.querySelector('.devis-choix');
    const nom = form.querySelector('input[name="prestation"]:checked').closest('label').textContent.trim();
    if (note) { note.hidden = false; note.querySelector('b').textContent = nom; }
  }
  const fiche = root.querySelector('.fpe__carton');
  root.addEventListener('formulaire:envoye', () => {
    /* La confirmation revient à l'écran, sous l'en-tête. */
    const revenir = () => {
      const haut = fiche.getBoundingClientRect().top + scrollY - ((document.querySelector('[data-entete]') || {}).offsetHeight || 0) - 16;
      window.scrollTo({ top: Math.max(0, haut), behavior: 'auto' });
    };
    requestAnimationFrame(revenir); setTimeout(revenir, 120);
    const gsap = window.gsap;
    const tampon = root.querySelector('.tampon-recu');
    if (!gsap || !tampon) { tampon && tampon.classList.add('pose'); return; }
    gsap.timeline()
      .fromTo(fiche, { y: -26, rotation: -1.2 }, { y: 0, rotation: 0, duration: .55, ease: 'bounce.out' })
      .fromTo(tampon, { scale: 2.4, opacity: 0, rotation: -24 }, { scale: 1, opacity: 1, rotation: -12, duration: .42, ease: 'power4.in', onComplete: () => tampon.classList.add('pose') }, .25)
      .fromTo(fiche, { x: -3 }, { x: 0, duration: .25, ease: 'elastic.out(1.2, .3)' }, .67);
  });
  return api;
}
