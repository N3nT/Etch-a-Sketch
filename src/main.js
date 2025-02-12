const mainPad = document.querySelector('.mainPad');
const cells = document.querySelectorAll(".cell");
let cellsNumberInput = document.querySelector('.cellsNum');
const cell = document.createElement("div");
cell.className = "cell border-2 p-5";

const getCellsNumber = () => {
  let cellsNumber = cellsNumberInput.value;
  mainPad.classList.add(`grid-cols-${cellsNumber}`);
  console.log(cellsNumber * cellsNumber);
  for(let i = 0; i < cellsNumber * cellsNumber - 1; i++){
    console.log(i);
    mainPad.appendChild(cell);
  }
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.classList.add('bg-black');
    })
  });
}

cellsNumberInput.addEventListener('change', getCellsNumber);
//cell border-2 p-5 - cell
//grid-cols-4 - mainPad