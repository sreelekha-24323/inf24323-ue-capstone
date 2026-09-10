export default function decorate(block) {
  const link = block.querySelector('a[href]');
  console.log("link",link)
  link.classList.add('button');
}
 