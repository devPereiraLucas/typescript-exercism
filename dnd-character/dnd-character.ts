export class DnDCharacter {
  public strength: number
  public dexterity: number
  public constitution: number
  public intelligence: number
  public wisdom: number
  public charisma: number
  public hitpoints: number


  public static generateAbilityScore(): number {
    const values = []
    for (let i = 0; i < 4; i++) {
      values.push(Math.floor(Math.random() * 6) + 1)
    }

    values.sort()
    values.shift()
    return values.reduce((valueAccumulator, currentValue) => valueAccumulator + currentValue)
  }

  public static getModifierFor(abilityValue: number): number {
    throw new Error('Remove this statement and implement this function')
  }
}
