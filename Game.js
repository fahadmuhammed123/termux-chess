const readlineSync = require('readline-sync');

const board = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

function displayBoard() {
  // Display the chess board
  for (let i = 0; i < 8; i++) {
    console.log(board[i].join(' '));
  }
}

function startGame() {
  // Initialize the game loop
  while (true) {
    displayBoard();

    // Get user input for moves
    const move = readlineSync.question('Enter your move (e.g., e2 e4): ');

    // TODO: Implement move logic

    // TODO: Check for checkmate or stalemate

    // TODO: Switch players

    // TODO: Handle special moves (e.g., castling, en passant)

    // TODO: Display messages (e.g., illegal move, check, checkmate)

    // TODO: Implement end conditions

    // break; // Remove this line once the game logic is implemented
  }
}

startGame();
