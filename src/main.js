const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
    cell.classList.add('bg-black');
  })
});