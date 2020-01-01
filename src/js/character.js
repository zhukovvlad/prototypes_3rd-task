
/**
 * Main function that creates user in this game.
 *
 * @function
 * @name Character
 * @param {string} name - string value that defines character's name.
 * @param {string} type - string value that defines character's type.
 * Only one of next types is allowed:
 * 'Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'.
 *
 *
 */
export default function Character(name, type) {
  if (name.length < 2 || name.length > 10) throw new Error('Incorrect name length');

  const allTypes = [
    { heroType: 'Swordsman', attack: 40, defense: 10 },
    { heroType: 'Magician', attack: 10, defense: 40 },
    { heroType: 'Undead', attack: 25, defense: 25 },
    { heroType: 'Zombie', attack: 40, defense: 10 },
    { heroType: 'Daemon', attack: 10, defense: 40 },
    { heroType: 'Bowman', attack: 25, defense: 25 },
  ];

  const checkingType = allTypes.find((item) => item.heroType === type);
  if (checkingType === undefined) throw new Error('Incorrect type of character');

  this.name = name;
  this.health = 100;
  this.level = 1;
  this.attack = checkingType.attack;
  this.defense = checkingType.defense;
  this.type = type;
}
