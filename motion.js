const studies = document.querySelectorAll('.brick-scene, .footer-wall');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

function updateMotion() {
  studies.forEach(study => {
    if (reducedMotion.matches) {
      study.removeAttribute('data-running');
    } else {
      study.dataset.running = 'true';
    }
  });
}
reducedMotion.addEventListener('change', updateMotion);
updateMotion();
