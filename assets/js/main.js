// Menu mobile
const bouton = document.querySelector('.menu-bouton');
const nav = document.querySelector('.nav');
if (bouton && nav) {
  bouton.addEventListener('click', () => {
    const ouvert = nav.classList.toggle('ouvert');
    bouton.setAttribute('aria-expanded', ouvert);
  });
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') { nav.classList.remove('ouvert'); bouton.setAttribute('aria-expanded', false); }
  });
}

// Filtre des réalisations par pôle
const filtres = document.querySelectorAll('.filtres button');
filtres.forEach(f => f.addEventListener('click', () => {
  filtres.forEach(b => b.setAttribute('aria-pressed', b === f));
  const pole = f.dataset.pole;
  document.querySelectorAll('.realisation').forEach(r => {
    r.hidden = pole !== 'tous' && r.dataset.pole !== pole;
  });
}));

// Formulaire de devis : ouvre le courriel (ou WhatsApp) avec la demande pré-remplie
const form = document.querySelector('.formulaire');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const lignes = [...d.entries()].map(([k, v]) => `${form.querySelector(`[name="${k}"]`).dataset.label}: ${v}`);
    const sujet = `${form.dataset.sujet} – ${d.get('pole')} – ${d.get('entreprise') || d.get('nom')}`;
    window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(lignes.join('\n'))}`;
  });
}

// Diaporama du hero
const calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.diaporama').forEach(d => {
  const images = d.querySelectorAll('img');
  if (images.length < 2 || calme) return;
  let i = 0;
  setInterval(() => {
    if (!d.offsetParent) return;
    images[i].classList.remove('actif');
    i = (i + 1) % images.length;
    images[i].loading = 'eager';
    images[i].classList.add('actif');
  }, 5000);
});

// Apparition des blocs au défilement (seulement ceux sous la ligne de flottaison au chargement)
if ('IntersectionObserver' in window && !calme) {
  const blocs = [...document.querySelectorAll('.produit, .bloc-photo, .segment, .carte-pole, .engagement, .etapes li, .partenaire, .atout, .produits-miniers figure, .realisation')]
    .filter(b => b.getBoundingClientRect().top > window.innerHeight);
  document.documentElement.classList.add('js');
  blocs.forEach((b, n) => { b.classList.add('apparait'); b.style.transitionDelay = `${(n % 4) * 90}ms`; });
  const obs = new IntersectionObserver(entrees => entrees.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vu'); obs.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  blocs.forEach(b => obs.observe(b));
}
