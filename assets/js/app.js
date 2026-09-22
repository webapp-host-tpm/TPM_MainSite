const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 40);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.style.overflow = open ? 'hidden' : '';
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: .12 })
  : null;
document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('is-visible'));

const lightbox = document.querySelector('.lightbox');
const frame = lightbox?.querySelector('iframe');
const lightboxTitle = lightbox?.querySelector('.lightbox-title');
const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  if (frame) frame.src = '';
  document.body.style.overflow = '';
};

document.querySelectorAll('[data-vimeo]').forEach(card => card.addEventListener('click', () => {
  if (!lightbox || !frame) return;
  frame.src = `https://player.vimeo.com/video/${card.dataset.vimeo}?autoplay=1&color=c7a451&title=0&byline=0&portrait=0`;
  if (lightboxTitle) lightboxTitle.textContent = card.dataset.title || 'Ten Peak Media video';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.lightbox-close')?.focus();
}));
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

document.querySelector('[data-mail-form]')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    `Name: ${data.get('name') || ''}`,
    `Business: ${data.get('business') || ''}`,
    `Phone: ${data.get('phone') || ''}`,
    `Project type: ${data.get('project') || ''}`,
    '',
    String(data.get('message') || '')
  ];
  const subject = encodeURIComponent(`Project inquiry from ${data.get('name') || 'website visitor'}`);
  const body = encodeURIComponent(lines.join('\n'));
  window.location.href = `mailto:info@tenpeakmedia.com?subject=${subject}&body=${body}`;
});
