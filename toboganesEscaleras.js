const input = `
3 6 3 2 5 1 3 4 2 3 1 2 0
2
6 95
99 1
0 0
-3
98
0
2
3 99
6 90
0 0
0
6
0 0
0
0
`

const getSlideStairs =(specialFields)=>{
  return specialFields[0].split('\n').reduce(
    (acc, current)=>{
      if(current) {
        const currentPoints = current.split(' ');

        acc[currentPoints[0]] = currentPoints[1];

      }
      return acc;
    },{});
}

const getTurnModifiers =(specialFields)=>{
  return specialFields[1].split('\n').reduce(
    (acc, current)=>{

      if(current) {
        acc[Math.abs(current)] = Math.sign(current);
      }

      return acc;
    },{});
}


const simulateGame=(gameText, diceValues)=>{
  const numberOfPlayers = gameText[0];

  const players= (new Array(Number.parseInt(numberOfPlayers))).fill().map((item,index)=>{
    return {
      id:index+1,
      position:0,
    }
  })

  const specialFields = gameText.substring(2).split('0 0')

  const slidesStairs = getSlideStairs(specialFields);
  const turnsModifier = getTurnModifiers(specialFields)

  const remainingDices = [...diceValues]

  let gameOver = false;

  while(remainingDices.length>1 && !gameOver){
    let currentPlayer = players.shift();

    if(!currentPlayer.avoidTurn) {

      const currentDice = Number.parseInt(remainingDices.shift());

      const nextPos = currentPlayer.position + currentDice;

      if (nextPos <= 100) {
        currentPlayer.position = nextPos;
        gameOver = nextPos == 100? true: false;
      }

      const effect = slidesStairs[nextPos]

      if (effect) {
        currentPlayer.position = Number.parseInt(effect)
      }

      const turnEffect = turnsModifier[nextPos];

      if (turnEffect) {

        if (turnEffect > 0) {
          players.unshift(currentPlayer)

          currentPlayer = null;
        } else {
          currentPlayer.avoidTurn = true;
        }
      }

    }else{
      currentPlayer.avoidTurn = false;
    }

    if(currentPlayer) {
      players.push(currentPlayer);
    }

  }

  const winner = gameOver?players.pop():{id:'0'}
  return winner.id
}

const getGameRegister=()=>{

  const trimmedText = input.trim();

  const diceValues = trimmedText.substring(0,trimmedText.indexOf(' 0\n')).replace('\n',' ').split(' ');

  const games = trimmedText.substring(trimmedText.indexOf('0\n')+2).split('\n0\n');

  games.pop();

  const winners = games.map((gameText,index)=>{

    return simulateGame(gameText, diceValues)

  })

  return winners.reduce((acc, item)=>{
    return `${acc}${acc?'\n':''}${item}`
  },"")
}

console.log(getGameRegister());
