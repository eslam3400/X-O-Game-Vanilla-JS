let currentPlayer = "X";
let cells = new Array(9);
const htmlCells = document.getElementsByClassName("cell");
const currentPlayerElement = document.getElementById("current-player")

const cellClick = (index) => {
  if (cells[index - 1] == null) {
    cells[index - 1] = currentPlayer;
    htmlCells[index - 1].innerHTML = currentPlayer;
    if (isWin()) {
      return setTimeout(() => {
        alert(`Player ${currentPlayer} Wins!`);
        reset();
      }, 100);
    }
    changePlayer()
  }
};

const changePlayer = () => {
  if (currentPlayer === "X") currentPlayer = "O";
  else currentPlayer = "X";
  currentPlayerElement.innerHTML = currentPlayer;
};

const isWin = () => {
  let count = 0;
  let win = false;

  const winMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  winMatrix.forEach((line) => {
    line.forEach((e) => {
      if (cells[e] === currentPlayer) count++;
    });
    if (count === 3) win = true;
    else count = 0;
  });

  return win;
};

const reset = () => {
  cells = new Array(9);
  for (let i = 0; i < 9; i++) htmlCells[i].innerHTML = null;
  currentPlayer = "X"
  currentPlayerElement.innerHTML = currentPlayer;
};
