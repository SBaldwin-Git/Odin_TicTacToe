const GameBoard = (() => {

  let boardArray = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];

  const setBoardArray = (index, newValue) => {
    boardArray[index] = newValue;
  };

  return {
    boardArray,
    setBoardArray
  };
})();

const DisplayController = (() => {

  let playerTurn = true;
  let gridItems = document.querySelectorAll('.grid-item');

  const draw = () => {
    gridItems.forEach((element, index) => {
      element.textContent = GameBoard.boardArray[index];
      element.addEventListener('click', () => {
        if (element.textContent == '' && playerTurn == true) {
          element.textContent = playerOne.marker;
          element.classList.add('playerOneColour');
          GameBoard.setBoardArray(index, playerOne.marker);
          playerTurn = false;
        } else if (element.textContent == '' && playerTurn == false) {
          element.textContent = playerTwo.marker;
          element.classList.add('playerTwoColour');
          GameBoard.setBoardArray(index, playerTwo.marker);
          playerTurn = true;
        } else {
          return;
        }

      })
    });
  }

  //Name Buttons
  const playerOneNameButton = document.querySelector('#changePlayerOneBtn');
  const playerTwoNameButton = document.querySelector('#changePlayerTwoBtn');

  //Changes Player 1 name with a prompt
  playerOneNameButton.addEventListener('click', () => {
    let newName = prompt('Please enter new name:');
    document.querySelector('#playerOneHeader').textContent = newName;
    playerOne.setName(newName);
  });

  //Changes Player 2 name with a prompt
  playerTwoNameButton.addEventListener('click', () => {
    let newName = prompt('Please enter new name:');
    document.querySelector('#playerTwoHeader').textContent = newName;
    playerT.setName(newName);
  });

  return {
    draw
  };

})();

const playerFactory = (name, marker) => {

  const setName = (newName) => {
    name = newName;
  }
  return {
    name,
    marker,
    setName
  };
};

//Create default players
const playerOne = playerFactory('Player 1', 'O');
const playerTwo = playerFactory('Player 2', 'X');
//Initialise the board
DisplayController.draw();