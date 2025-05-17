document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reviewForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const base = data.get('baseName');
    alert(`✅ תודה על הביקורת שלך של ${base}!`);
    form.reset();
  });
}); 