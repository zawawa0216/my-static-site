(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const yearEl = document.getElementById('year');

  yearEl.textContent = new Date().getFullYear();

  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (prefersLight) root.classList.add('light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      root.classList.toggle('light');
      themeToggle.textContent = root.classList.contains('light')
        ? 'ダークモードに戻す'
        : 'ダークモードを試す';
    });
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get('name');
      feedback.textContent = `${name || 'ゲスト'} さん、メッセージを受け取りました！`;
    });
  }
})();
