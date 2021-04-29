let a = {};
// console.log(Object.getPrototypeOf(a));

function Hero(name, level) {
  this.name = name;
  this.level = level;
}
Hero.prototype.greet = function () {
  return `${this.name} says hello`;
};
let hero1 = new Hero("Bjorn", 1);

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}
Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};
Healer.prototype = Object.create(Hero.prototype);
Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};
const hero4 = new Warrior('Bjorn', 1, 'axe');
const hero5 = new Healer('Kanin', 1, 'cure');

closures = []
let i=0;
for (let i = 0; i<2; i++) {
  closures.push(function() { console.log(i) });
}
// console.log(closures);
closures[0]()
closures[1]()

function Country(name, yearFounded) {
    this.name = name
    this.yearFounded = yearFounded
  console.log(this);
    this.describe = function() {
      console.log(`${this.name} was founded in ${this.yearFounded}.`)
    }
  }
  
  const america = new Country('The United States of America', 1776)
//   Country();
//   america.describe()

 