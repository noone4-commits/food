// Loader hide and confetti on load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.addEventListener('transitionend', () => loader.remove());
    if (window.confetti) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  }, 300);
});

// Fade-in posts on scroll
document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.blog-post');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  posts.forEach(post => observer.observe(post));
}); 