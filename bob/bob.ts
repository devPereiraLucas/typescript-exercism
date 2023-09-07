const isQuestion = (message: string): boolean => message.endsWith('?')
const isYelling = (message: string): boolean => message.toUpperCase() === message && message.toLowerCase() !== message
const isSilence = (message: string): boolean => message.trim() === ''

export function hey(message: string): string {

  if (isSilence(message)) {
    return "Fine. Be that way!"
  } else if (isYelling(message)) {
    return "Whoa, chill out!"
  } else if (isQuestion(message)) {
    return "Sure."
  } else {
    return "Whatever."
  }
}
