export function isPangram(sentense: string): boolean {
  const alphabetArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("")
  const sentenseArray = sentense.toLowerCase().split("")
  
  const result = alphabetArray.filter((letter) =>
    sentenseArray.includes(letter)
  )

  return result.length === alphabetArray.length
}
