(() => {
  'use strict';
  const content = window.PORTFOLIO;
  if (!content) return;
  const dialog = document.querySelector('#project-dialog');
  let lastTrigger;
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const renderProject = project => {
    document.querySelector('#dialog-kind').textContent = project.category;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-description').textContent = project.description;
    document.querySelector('#dialog-tags').replaceChildren(...project.stack.map(text => element('span', '', text)));
    document.querySelector('#dialog-features').replaceChildren(...project.features.map(([title, text]) => {
      const item = element('li');
      item.append(element('h4', '', title), element('p', '', text));
      return item;
    }));
    document.querySelector('#dialog-workflow').replaceChildren(...project.workflow.map(text => element('li', '', text)));
    document.querySelector('#dialog-usecase').textContent = project.usecase;
    document.querySelector('#dialog-gallery').replaceChildren(...project.images.map(({src, caption, width, height}) => {
      const figure = element('figure');
      const link = element('a', 'screenshot-link');
      link.href = src;
      link.target = '_blank';
      link.rel = 'noopener';
      link.setAttribute('aria-label', caption + '，在新标签页查看原图');
      const image = element('img');
      image.src = src;
      image.alt = caption;
      image.width = width;
      image.height = height;
      image.loading = 'lazy';
      link.append(image);
      figure.append(link, element('figcaption', '', caption));
      return figure;
    }));
  };
  document.querySelector('#year').textContent = String(new Date().getFullYear());
  for (const project of content.projects) {
    const button = document.querySelector('[data-open="' + project.id + '"]');
    if (!button) continue;
    button.addEventListener('click', () => {
      lastTrigger = button;
      renderProject(project);
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  }
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => { if (lastTrigger) lastTrigger.focus({preventScroll: true}); });
})();
