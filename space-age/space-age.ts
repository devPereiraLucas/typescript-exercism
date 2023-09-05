export function age(planet: string, seconds: number): number {
  // secondsInEarthYear = days * hours * minutes * seconds
  const secondsInEarthYear = 365.25 * 24 * 60 * 60

  const planetToEarthYears : { [planet: string]: number } = {
    earth: secondsInEarthYear,
    mercury: 0.2408467 * secondsInEarthYear,
    venus: 0.61519726 * secondsInEarthYear,
    mars: 1.8808158 * secondsInEarthYear,
    jupiter: 11.862615 * secondsInEarthYear,
    saturn: 29.447498 * secondsInEarthYear,
    uranus: 84.016846 * secondsInEarthYear,
    neptune: 164.79132 * secondsInEarthYear,
  }


  return parseFloat((seconds / planetToEarthYears[planet]).toFixed(2))
}
