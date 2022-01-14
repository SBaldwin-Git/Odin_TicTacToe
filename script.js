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

  //Name Buttons
  const playerOneNameButton = document.querySelector('#changePlayerOneBtn');
  const playerTwoNameButton = document.querySelector('#changePlayerTwoBtn');

  playerOneNameButton.addEventListener('click', () =>{
    console.log('big test')
      let newName = prompt('Please enter new name:');
      document.querySelector('#playerOneHeader').textContent = newName;
  });

  playerTwoNameButton.addEventListener('click', () =>{
    console.log('big test')
      let newName = prompt('Please enter new name:');
      document.querySelector('#playerTwoHeader').textContent = newName;
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
displayController.draw();