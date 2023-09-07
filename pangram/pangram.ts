export function isPangram(sentense: string): boolean {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz"
  const alphabetArray = alphabet.split("")
  const sentenseArray = sentense.toLowerCase().split("")
  const result = alphabetArray.filter((letter) =>
    sentenseArray.includes(letter)
  )
  return result.length === alphabetArray.length
}
