const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export const colorCode = (color: string): number => {
  return colors.indexOf(color)
}

export const COLORS = colors
