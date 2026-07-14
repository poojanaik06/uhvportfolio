document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => document.querySelector('.preloader').classList.add('done'), 350);
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
document.getElementById('year').textContent = new Date().getFullYear();

const showcase = document.querySelector('.project-showcase');
const projectThumb = document.querySelector('.project-scrollbar span');

if (showcase && projectThumb) {
  const updateProjectProgress = () => {
    const maxScroll = showcase.scrollWidth - showcase.clientWidth;
    const progress = maxScroll ? showcase.scrollLeft / maxScroll : 0;
    projectThumb.style.transform = `translateX(${progress * 300}%)`;
  };

  showcase.addEventListener('scroll', updateProjectProgress, { passive: true });
  updateProjectProgress();

  let dragging = false;
  let startX = 0;
  let startScroll = 0;
  showcase.addEventListener('pointerdown', event => {
    dragging = true;
    startX = event.clientX;
    startScroll = showcase.scrollLeft;
    showcase.setPointerCapture(event.pointerId);
  });
  showcase.addEventListener('pointermove', event => {
    if (!dragging) return;
    showcase.scrollLeft = startScroll - (event.clientX - startX) * 1.25;
  });
  const stopDragging = () => { dragging = false; };
  showcase.addEventListener('pointerup', stopDragging);
  showcase.addEventListener('pointercancel', stopDragging);
}
