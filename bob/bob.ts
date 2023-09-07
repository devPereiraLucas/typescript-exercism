const isQuestion = (message: string): boolean => message.endsWith('?')
const isYelling = (message: string): boolean => message.toUpperCase() === message && message.toLowerCase() !== message
const isSilence = (message: string): boolean => message.trim() === ''

export function hey(message: string): string {

  if (isSilence(message)) return "Fine. Be that way!"
  if (isYelling(message) && isQuestion(message)) return "Calm down, I know what I'm doing!"
  if (isYelling(message)) return "Whoa, chill out!"
  if (isQuestion(message)) return "Sure."
    return "Whatever."
}
