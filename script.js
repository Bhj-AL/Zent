const title = document.querySelector('.variable-title');
const text = title.textContent;
title.textContent = '';

[...text].forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.setProperty('--i', i);
  title.appendChild(span);
});