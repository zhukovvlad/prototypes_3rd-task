/* eslint-disable max-len */
/**
 * Main function that creates user in this game.
 *
 * @param {Object} Character - This is our main user with parameters depending on it's type.
 * @param {string} name - string value that defines character's name.
 * @param {string} type - string value that defines character's type. Only one of next types is allowed: 'Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'.
 *
 *
 */
export default function Character(name, type) {
  try {
    if (name.length < 2 || name.length > 10) throw new Error('Incorrect name length');

    const allTypes = [
      { heroType: 'Bowman', attack: 25, defense: 25 },
      { heroType: 'Swordsman', attack: 40, defense: 10 },
      { heroType: 'Magician', attack: 10, defense: 40 },
      { heroType: 'Undead', attack: 25, defense: 25 },
      { heroType: 'Zombie', attack: 40, defense: 10 },
      { heroType: 'Daemon', attack: 10, defense: 40 },
    ];

    const checkingType = allTypes.find((item) => item.heroType === type);

    if (checkingType === undefined) throw new Error('Incorrect type of character');

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = checkingType.attack;
    this.defense = checkingType.defense;
  } catch (error) {
    console.log('We\'ve got Error');
  }
}
