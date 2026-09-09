export default function decorate(block) {
  block.classList.add('hero-banner');

  const rows = [...block.children];

  const imageRow = rows[0];
  const eyebrowRow = rows[1];
  const contentRow = rows[2];
  const linksRow = rows[3];


  imageRow.classList.add('hero-image-container');
  eyebrowRow.classList.add('hero-eyebrow-container');
  contentRow.classList.add('hero-content-container');
  linksRow.classList.add('hero-action-links-container');


  const eyebrow = eyebrowRow.querySelector('p');
  if (eyebrow) eyebrow.classList.add('hero-eyebrow');

  const heading = contentRow.querySelector('h1');
  if (heading) heading.classList.add('hero-title');

  const paragraphs = contentRow.querySelectorAll('p');

  if (paragraphs[0]) {
    paragraphs[0].classList.add('hero-description');
  }

  const links = linksRow.querySelectorAll('a');

  if (links[0]) {
    links[0].classList.add('hero-btn', 'primary');
  }

  if (links[1]) {
    links[1].classList.add('hero-btn', 'secondary');
  }
}