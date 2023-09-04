export function toRna(nucleotideo: string): string {
  const dnaToRna: { [dnaKey: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  }

  const invalidInput = "Invalid input DNA."

  return nucleotideo
  .split("")
  .map((nucleotideo) => {
    if (!dnaToRna[nucleotideo]) {
      throw new Error(invalidInput)
    }
    return dnaToRna[nucleotideo]
  })
  .join("")
}
