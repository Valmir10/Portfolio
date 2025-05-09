import { useEffect } from "react";
import "../styles/effects.css";

const targets = [
  ".hero-image-container",
  ".text-1-hero",
  ".text-2-hero",
  ".text-3-hero",
  ".hero-information",
  ".about-me-content-container",
  "#project-information-wrapper-1",
  "#project-information-wrapper-2",
  "#project-image-container-1",
  "#project-image-container-2",
  "#contact-text-1",
  "#contact-text-2",
  ".contact-form-container",
].join(",");

export default function Effects() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(targets);
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
