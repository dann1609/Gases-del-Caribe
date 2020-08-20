const input = `
2

6
19
17
13
1
99
1
3
20
16

4
19
17
13
1
99
1
3
20
2
`

const getArrayFromTextInstructions=(data,index)=>{
  return data.split('99')[index].trim().split('\n')
}

const getInitialCarPositions =(currentDataSet)=>{
  return getArrayFromTextInstructions(currentDataSet,0)
}

const getVacatedSpaceSequence =(currentDataSet)=>{
  return getArrayFromTextInstructions(currentDataSet,1)
}

const getOuputFormat=(initialCarPositions,carFinalParking)=>{
  const outputText = initialCarPositions.reduce((acc,current)=>{
    const finalParking = carFinalParking[current]

    if(finalParking){
      return `${acc}\nEl auto de la posición inicial ${current} aparcó en ${finalParking}`
    }else{
      return `${acc}\nEl auto de la posición inicial ${current} no aparcó`
    }
  },"")

  return outputText
}

const parkingSimulation=(initialCarPositions, vacatedSpaceSecuence)=>{
  const parkingArray = new Array(20)
  const waitingCarsArray = new Array(20)
  parkingArray.fill('x')
  waitingCarsArray.fill(null)


  const carFinalParking = {};


  initialCarPositions.forEach(car=>waitingCarsArray[car-1] = car)

  vacatedSpaceSecuence.forEach(instruction=>{
    const slot = instruction-1
    parkingArray[slot] = null

    while(!parkingArray[slot]){
      if(!waitingCarsArray[slot]){
        waitingCarsArray.unshift(waitingCarsArray.pop())
      }else{
        parkingArray[slot] = waitingCarsArray[slot]
        waitingCarsArray[slot] = null
        carFinalParking[parkingArray[slot]] = instruction;
      }
    }

  })

  return carFinalParking
}

const getParkingRegister =()=>{

  const trimmedText = input.trim();

  const numberOfDataSets = trimmedText.split('\n\n')[0];

  const dataSets = trimmedText.split('\n\n')
  dataSets.shift();

  let outputString = "";

  for(let i= 0; i<numberOfDataSets ; i++){

    const initialCarPositions = getInitialCarPositions(dataSets[i])
    const vacatedSpaceSecuence = getVacatedSpaceSequence(dataSets[i]);

    const carFinalParking = parkingSimulation(initialCarPositions,vacatedSpaceSecuence)

    outputString = outputString.concat(getOuputFormat(initialCarPositions,carFinalParking), '\n')
  }

  return outputString
}

console.log(getParkingRegister())
