const input = `
7 5
2
1 0 1
99 10
0
5
99 10
1
5 25
99 10
1
3 29
99 10
2
3 29 31
0 0
`

const processInput=(text)=>{
  const arrayData = text.split('\n')
  arrayData.pop();

  const tests = arrayData.reduce((acc,item,index)=>{
    const data = item.split(' ');
    switch (index%3) {
      case 0:
        acc.push({
          n:Number.parseInt(data[0]),
          m:Number.parseInt(data[1])
        })
        break
      case 1:
        acc[Math.floor(index/3)].k = Number.parseInt(data[0])
        break;
      case 2:
        acc[Math.floor(index/3)].a = data.map(number=>Number.parseInt(number));
        break
    }
    return acc;
  },[])

  return tests
}
const getRouletteValue=(test, power)=>{
  const absoluteValue = test.a.reduce((acc,a, index)=>{
    return acc + a*Math.pow(power,index)
  },0)

  return absoluteValue%(test.n+1)
}

const simulateRoulette =(test)=>{

  const possibleValues = {}

  for(let i = 0; i<=test.m; i++){
    const rouletteValue = getRouletteValue(test, i)
    possibleValues[rouletteValue] = true;
  }
  return Object.keys(possibleValues).length
};

const getRouletteRegister=()=>{

  const trimmedText = input.trim();

  const data = processInput(trimmedText);

  const possibleValues = data.map((item)=>{
    return simulateRoulette(item)
  })

  return possibleValues.reduce((acc, item)=>{
    return `${acc}${acc?'\n':''}${item}`
  },"")
}

 console.log(getRouletteRegister())
