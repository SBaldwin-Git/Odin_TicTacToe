const GameBoard = (() => {

  let boardArray = [
    '','','',
    '','','',
    '','',''
  ];

  const getBoardArray = () => {
    return boardArray;
  }
  const setBoardArray = (index, newValue) => {
    boardArray[index] = newValue;
  };

  return {
    boardArray,
    getBoardArray,
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
          element.textContent = playerOne.getMarker();
          element.classList.add('playerOneColour');
          GameBoard.setBoardArray(index, playerOne.getMarker());
          gameChecker(playerOne.getMarker());
          playerTurn = false;
        } else if (element.textContent == '' && playerTurn == false) {
          element.textContent = playerTwo.getMarker();
          element.classList.add('playerTwoColour');
          GameBoard.setBoardArray(index, playerTwo.getMarker());
          gameChecker(playerTwo.getMarker);
          playerTurn = true;
        } else {
          return;
        }

      })
    });
  }

  const getCurrentPlayer = () => {
    if (playerTurn == true) {
      return playerOne.getName();
    } else {
      return playerTwo.getName();
    }
  }

  const gameChecker = (marker) => {

    //Check Rows
    if (GameBoard.getBoardArray()[0] == GameBoard.getBoardArray()[1] && GameBoard.getBoardArray()[0] == GameBoard.getBoardArray()[2] && GameBoard.getBoardArray()[0] == marker) {
      alert('Winner is ' + getCurrentPlayer() + '!')
    } else if (GameBoard.getBoardArray()[3] == GameBoard.getBoardArray()[4] && GameBoard.getBoardArray()[0] == GameBoard.getBoardArray()[5] && GameBoard.getBoardArray()[3] == marker) {
      alert('Winner is ' + getCurrentPlayer() + '!')
    } else if (GameBoard.getBoardArray()[6] == GameBoard.getBoardArray()[7] && GameBoard.getBoardArray()[6] == GameBoard.getBoardArray()[8] && GameBoard.getBoardArray()[6] == marker) {
      alert('Winner is ' + getCurrentPlayer() + '!')
    }
    //Check Columns

    //Check diagonal
    
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
  const getName = () => {
    return name;
  }
  const getMarker = () =>{
    return marker;
  }
  return {
    name,
    marker,
    setName,
    getName,
    getMarker
  };
};

//Create default players
const playerOne = playerFactory('Player 1', 'O');
const playerTwo = playerFactory('Player 2', 'X');
//Initialise the board
DisplayController.draw();