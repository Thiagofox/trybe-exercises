let piece = 'KNIGHT';

switch(piece.toLocaleLowerCase()) 
{
  case 'bishop':
    console.log('diagonals');
    break;
  
  case 'pawn':
    console.log('forward one square');
    break;
  
  case 'rook':
    console.log('forward, backward, left or right');
    break;
  
  case 'knight':
    console.log('similar to the shape of the letter "L"');
    break;
  
  case 'queen':
    console.log('combines the movement of both the Rook and Bishop pieces,');
    break;
  
  case 'king':
    console.log('The King can move in any direction by a single square');
    break;
  
  default:
    console.log('erro')




}

  