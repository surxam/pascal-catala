import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation légère : simple apparition en fondu (opacity + léger décalage)
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.fromTo(
    ".hero-item",
    { y: 24, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out" }
  );

  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      }
    );
  });
}
