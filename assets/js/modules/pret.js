/* Adaptateur : les modules de la bibliothèque appellent pret([...]) ; ici on leur donne le GSAP et l'état du socle du site
   (mode calme, défilement natif, rafraîchissement regroupé) au lieu du socle de démonstration des modules. */
import { etat, rafraichir } from '../socle/index.js?v=7';

export async function pret() {
  return {
    gsap: window.gsap || null,
    ScrollTrigger: window.ScrollTrigger || null,
    Flip: window.Flip || null,
    lenis: null,
    get calme() { return false; },
    get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
    get telephone() { return innerWidth < 700; },
    rafraichir,
    mesurer() {},
  };
}
