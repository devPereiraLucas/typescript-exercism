export function score(x: number, y: number): number {
  const coordinates = Math.sqrt(x * x + y * y)
  if (coordinates <= 1) {
    return 10
  } else if (coordinates <= 5) {
    return 5
  } else if (coordinates <= 10) {
    return 1
  }
  return 0
}
