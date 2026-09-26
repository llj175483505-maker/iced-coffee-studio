(() => {
  'use strict';
  const content = window.PORTFOLIO;
  if (!content) return;
  const dialog = document.querySelector('#project-dialog');
  let lastTrigger;
  const safeUrl = value => {
    try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
  };
  document.querySelector('#year').textContent = String(new Date().getFullYear());
  document.querySelector('#about-description').textContent = content.about;
  if (typeof content.email === 'string' && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(content.email)) {
    const link = document.querySelector('#contact-link');
    link.href = 'mailto:' + content.email;
    link.textContent = '联系工作室 · ' + content.email;
    link.hidden = false;
  }
  for (const project of content.projects) {
    const card = Array.from(document.querySelectorAll('[data-project]')).find(el => el.dataset.project === project.id);
    if (!card) continue;
    card.querySelector('h3').textContent = project.title;
    card.querySelector('.project-category').textContent = project.category;
    card.querySelector('.project-info p').textContent = project.summary;
    card.querySelector('.sample-badge').hidden = !project.sample;
    const button = card.querySelector('[data-open]');
    button.setAttribute('aria-label', '查看' + project.title + (project.sample ? '展示示例' : '项目详情'));
    if (project.cover && /^(?:assets\/)?[a-zA-Z0-9_-]+\.(?:png|jpe?g|webp|avif|svg)$/.test(project.cover)) {
      const visual = card.querySelector('.project-visual');
      visual.style.backgroundImage = 'url("' + project.cover + '")';
      visual.style.backgroundSize = 'cover';
      visual.style.backgroundPosition = 'center';
      visual.classList.add('has-art');
      if (!project.sample) Array.from(visual.children).filter(el => !el.classList.contains('sample-badge')).forEach(el => el.hidden = true);
    }
    button.addEventListener('click', () => {
      lastTrigger = button;
      document.querySelector('#dialog-label').textContent = project.sample ? 'CONCEPT PREVIEW / 展示示例' : 'PROJECT / 项目详情';
      document.querySelector('#dialog-title').textContent = project.title;
      document.querySelector('#dialog-kind').textContent = project.category;
      document.querySelector('#dialog-description').textContent = project.description;
      const note = document.querySelector('#dialog-note');
      note.textContent = '此处为作品集展示示例，不代表冰咖啡工作室已发布该项目。';
      note.hidden = !project.sample;
      const url = safeUrl(project.url);
      const link = document.querySelector('#dialog-link');
      link.hidden = !url;
      if (url) link.href = url; else link.removeAttribute('href');
      dialog.showModal();
    });
  }
  if (!content.projects.some(project => project.sample)) document.querySelector('#work-note').hidden = true;
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { if (lastTrigger) lastTrigger.focus(); });
})();
