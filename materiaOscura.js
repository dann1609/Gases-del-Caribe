const input = `
2
24 1
10 0
2
10 1
24 0
3
10 0
24 0
38 0
3
10 1
24 0
14 0
3
10 1
24 0
38 0
3
10 1
24 1
38 0
3
10 3
24 0
38 1
0
`

const allTested =(possibilities)=>{
  for(let i = 0; i<possibilities.length; i++){
    if(!possibilities[i]){
      return false
    }
  }

  return true;
}

nextPossibility=(possibilities)=>{
  let index = 0;
  let carry = 1;

  while(index<possibilities.length){
    const newValue = possibilities[index] + carry
    carry = newValue >1 ? 1:0;
    possibilities[index] = newValue==1?1:0;
    index++;
  }
}

const processInput=(input)=>{
  const dataArray = input.split('\n')

  return dataArray.reduce((acc,item)=>{
    const data = item.split(' ')

    if(data.length>1){
      acc[acc.length-1].journeys.push({
        duration: Number.parseInt(data[0]),
        extra: Number.parseInt(data[1])
      })
    }else{
      if(data[0]>0) {
        acc.push({
          numberOfJourneys: Number.parseInt(data[0]),
          journeys:[],
        })
      }
    }
    return acc;
  },[])
}

simulateTrip=(trip)=>{

  let tripMinTime = Number.POSITIVE_INFINITY;

  const possibilities = new Array(trip.numberOfJourneys-1)
  possibilities.fill(0);

  do{
    nextPossibility(possibilities);

    const tripDetails = trip.journeys.reduce((acc,path,index)=>{
      const extra = acc.extra > 0?1:0;
      const extraAdded = possibilities[index-1]?extra:0;

      return {
        duration : acc.duration + path.duration/(1+(possibilities[index-1]?extra:0)),
        extra: acc.extra + path.extra - extraAdded
      }
    },{
      duration:0,
      extra:0
    })

    if (tripMinTime>tripDetails.duration){
      tripMinTime = tripDetails.duration;
    }

  }while(!allTested(possibilities))

  return tripMinTime
}

const getTripRegister=()=>{

  const trimmedText = input.trim();

  const data = processInput(trimmedText);

  const tripMinTimes = data.map((trip,index)=>{
    return simulateTrip(trip)
  })

  return tripMinTimes.reduce((acc, item)=>{
    return `${acc}${acc?'\n':''}${item}`
  },"")
}

console.log(getTripRegister())
