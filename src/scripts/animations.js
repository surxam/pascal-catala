import { gsap } from "gsap";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const lines = gsap.utils.toArray(".link");

if (reduce) {
  gsap.set([".hero-item"], { opacity: 1 });
} else {
  lines.forEach((l) => {
    const len = l.getTotalLength();
    gsap.set(l, { strokeDasharray: len, strokeDashoffset: len });
  });

  // Une seule séquence au chargement : texte, puis le réseau se connecte autour de Pascal
  gsap
    .timeline({ defaults: { ease: "power2.out" } })
    .to(".txt", { opacity: 1, y: 0, startAt: { y: 24 }, duration: 0.7, stagger: 0.1 })
    .to(".hub", { opacity: 1, scale: 1, startAt: { scale: 0.6 }, duration: 0.5, ease: "back.out(1.7)" }, "-=0.5")
    .to(lines, { strokeDashoffset: 0, duration: 0.6, stagger: 0.1 }, "-=0.1")
    .to(".node", { opacity: 1, scale: 1, startAt: { scale: 0.5 }, duration: 0.45, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.9");
}
