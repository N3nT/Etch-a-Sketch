const mainPad = document.querySelector('.mainPad');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const okButton = document.querySelector('.okButton');

let colorPicker = document.querySelector('.colorPicker');
let color = colorPicker.value;

const generateSketch = () => {
	mainPad.innerHTML = '';
	let cellsNumber = document.querySelector('.cellsNum').value;
	if (cellsNumber > 100) {
		alert('It is too much! Do you want to have a fire at home?');
	} else {
		let size = 500 / cellsNumber;
		for (let i = 0; i < cellsNumber * cellsNumber; i++) {
			const cell = document.createElement('div');
      cell.style.transition = "background-color 0.5s ease-in-out";
			cell.style.width = `${size}px`;
			cell.style.height = `${size}px`;
			cell.addEventListener('mouseover', () => {
				cell.style.backgroundColor = color;
			})
			mainPad.appendChild(cell);
		}
	}
}

okButton.addEventListener('click', generateSketch)
colorPicker.addEventListener('change', () => {
	color = colorPicker.value;
})
eraser.addEventListener('click', () => {
	color = '#fff';
})
clear.addEventListener('click', () => {
	mainPad.innerHTML = '';
  generateSketch();
})
window.addEventListener('load', () => {
	generateSketch();
})
