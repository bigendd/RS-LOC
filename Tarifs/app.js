const btn = document.querySelector('.btn');
window.addEventListener("scroll", () => {
   if ( window.pageYOffset>100) {
    btn.classList.add("active")
   } else {
    btn.classList.remove("active")
   }

})

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const mouseMove = (e) => {
  let mouseX, mouseY;
  let traX, traY;
  mouseX = e.pageX;
  mouseY = e.pageY;
  traX = ((20 * mouseX) / 570) + 40;
  traY = ((20 * mouseY) / 570) + 50;
  document.getElementById('bigTitle').style.backgroundPosition = traX + "%" + traY + "%";
}