const cursorPointed = document.querySelector('.pointed');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)

// window.addEventListener("keydown", e => {
//   const key = document.getElementById(e.key);
//   if (key) key.classList.add('pressed');
// });


// window.addEventListener("keyup", e => {
//   const key = document.getElementById(e.key);
//   if (key) key.classList.remove('pressed');
// });

const cursorImage1 = document.querySelector('#cursor1');
const cursorImage2 = document.querySelector('#cursor2');

window.addEventListener("keypress", checkKeyPressed, false);

function checkKeyPressed(e) {
	if (e.charCode === 49) {
		cursorImage1.classList.toggle('cursor-off');
		cursorImage2.classList.toggle('cursor-off');
}
}