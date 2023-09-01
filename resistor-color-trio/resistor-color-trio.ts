const colorsDictionary:{[color: string]: number} = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
} 

function calculateResistorValue(colors: string[]): number {
  return parseInt(colorsDictionary[colors[0]] + '' + colorsDictionary[colors[1]])
}

export function decodedResistorValue(colors: string[]): string {
  let resistorValue = calculateResistorValue(colors) * (Math.pow(10, colorsDictionary[colors[2]]))

  if (resistorValue >= 1000000000) {
    return resistorValue / 1000000000 + " gigaohms"
  } else if (resistorValue >= 1000000) {
    return resistorValue / 1000000 + " megaohms"
  } else if (resistorValue >= 1000){
    return resistorValue / 1000 + " kiloohms"
  }
  
  return resistorValue + " ohms"
}
