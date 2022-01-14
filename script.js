const GameBoard = (() => {

  let boardArray = [
    '', '', '',
    '', '', '',
    '', '', ''
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
  const restartButton = document.querySelector('#restartBtn');

  const draw = () => {
    gridItems.forEach((element, index) => {
      element.textContent = GameBoard.boardArray[index];
      element.addEventListener('click', () => {
        if (element.textContent == '' && playerTurn == true) {
          element.textContent = playerOne.marker;
          element.classList.add('playerOneColour');
          GameBoard.setBoardArray(index, playerOne.marker);
          gameChecker(playerOne.marker);
          playerTurn = false;
        } else if (element.textContent == '' && playerTurn == false) {
          element.textContent = playerTwo.marker;
          element.classList.add('playerTwoColour');
          GameBoard.setBoardArray(index, playerTwo.marker);
          gameChecker(playerTwo.marker);
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

  const declareWinner = () => {
    alert('Winner is ' + getCurrentPlayer() + '!');
    gridItems.forEach((element) => {
      element.classList.add('gameOver');
    });
  }

  const gameChecker = (marker) => {

    //Check Rows
    if (GameBoard.boardArray[0] == GameBoard.boardArray[1] && GameBoard.boardArray[0] == GameBoard.boardArray[2] && GameBoard.boardArray[0] == marker) {
      declareWinner();
    } else if (GameBoard.boardArray[3] == GameBoard.boardArray[4] && GameBoard.boardArray[3] == GameBoard.boardArray[5] && GameBoard.boardArray[3] == marker) {
      declareWinner();
    } else if (GameBoard.boardArray[6] == GameBoard.boardArray[7] && GameBoard.boardArray[6] == GameBoard.boardArray[8] && GameBoard.boardArray[6] == marker) {
      declareWinner();
    }
    //Check Columns
    else if (GameBoard.boardArray[0] == GameBoard.boardArray[3] && GameBoard.boardArray[0] == GameBoard.boardArray[6] && GameBoard.boardArray[0] == marker) {
      declareWinner();
    } else if (GameBoard.boardArray[1] == GameBoard.boardArray[4] && GameBoard.boardArray[1] == GameBoard.boardArray[7] && GameBoard.boardArray[1] == marker) {
      declareWinner();
    } else if (GameBoard.boardArray[2] == GameBoard.boardArray[5] && GameBoard.boardArray[2] == GameBoard.boardArray[8] && GameBoard.boardArray[2] == marker) {
      declareWinner();
    }
    //Check diagonal
    else if (GameBoard.boardArray[0] == GameBoard.boardArray[4] && GameBoard.boardArray[0] == GameBoard.boardArray[8] && GameBoard.boardArray[0] == marker) {
      declareWinner();
    } else if (GameBoard.boardArray[2] == GameBoard.boardArray[4] && GameBoard.boardArray[2] == GameBoard.boardArray[6] && GameBoard.boardArray[2] == marker) {
      declareWinner();
    } else if (!GameBoard.boardArray.includes('')) {
      alert('Draw!')
    } else {
      return;
    }
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

  //Restart button functionality
  restartButton.addEventListener('click', () => {
    GameBoard.boardArray.length = 0;
    GameBoard.boardArray.push('', '', '', '', '', '', '', '', '', )
    playerTurn = true;
    let playerOneClass = document.querySelectorAll('.playerOneColour');
    let playerTwoClass = document.querySelectorAll('.playerTwoColour');
    let gameOverRemover = document.querySelectorAll('.gameOver');

    playerOneClass.forEach((element) => {
      element.classList.remove('playerOneColour');
    });

    playerTwoClass.forEach((element) => {
      element.classList.remove('playerTwoColour');
    });

    gameOverRemover.forEach((element) => {
      element.classList.remove('gameOver');
    });

    draw();
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
  const getMarker = () => {
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