export default function decorate(block) {
  const link = block.querySelector('a[href]');
  if (!link) {
    block.textContent = '';
    return;
  }

  const type = block.children[3]?.textContent.trim();
  link.classList.add('button');
  if (type) link.classList.add(type);
}
 