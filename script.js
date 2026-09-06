/* Progressive enhancement: firm logos remain readable without JavaScript. */
(() => {
  const carousel = document.querySelector("[data-logo-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector(".logo-track");
  const group = carousel.querySelector(".logo-group");
  const toggle = carousel.querySelector(".logo-toggle");
  if (!track || !group || !toggle) return;

  const duplicate = group.cloneNode(true);
  duplicate.setAttribute("aria-hidden", "true");
  duplicate.removeAttribute("aria-label");
  duplicate.querySelectorAll("img").forEach(image => image.alt = "");
  track.append(duplicate);

  carousel.querySelectorAll("img").forEach(image => {
    const showFallback = () => {
      image.hidden = true;
      image.nextElementSibling.hidden = false;
    };
    image.addEventListener("error", showFallback);
    if (image.complete && image.naturalWidth === 0) showFallback();
  });

  carousel.dataset.paused = "false";
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    const paused = carousel.dataset.paused !== "true";
    carousel.dataset.paused = String(paused);
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.textContent = paused ? "Resume logos" : "Pause logos";
  });
  carousel.classList.add("is-enhanced");
})();
