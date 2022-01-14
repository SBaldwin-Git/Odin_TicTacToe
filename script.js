const gameBoard = (() => {

  let boardArray = [
    '', 'X', '',
    '', '', '',
    '', '', '',
  ];

  return {
    boardArray
  };
})();

const displayController = (() => {

  let playerTurn = true;
  let gridItems = document.querySelectorAll('.grid-item');
  let playerOneNameButton = document.querySelector('changePlayerOneBtn');
  let playerTwoNameButton = document.querySelector('changePlayerTwoBtn');

  const draw = () => {
    gridItems.forEach((element, index) => {
      element.textContent = gameBoard.boardArray[index];
      element.addEventListener('click', () => {
        if(element.textContent == '' && playerTurn == true){
          element.textContent = playerOne.marker;
          playerTurn = false;
        } else if(element.textContent == '' && playerTurn == false){
          element.textContent = playerTwo.marker;
          playerTurn = true;
        } else{
          return;
        }
        
      })
    });
  }

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
displayController.draw();