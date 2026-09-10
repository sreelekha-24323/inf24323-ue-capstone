export default function decorate(block) {
  const link = block.querySelector('a[href]');
  console.log("link",link)
  // if (!link) {
  //   block.textContent = '';
  //   return;
  // }

  // const type = block.children[3]?.textContent.trim();
  link.classList.add('button');
  // if (type) link.classList.add(type);
}
 