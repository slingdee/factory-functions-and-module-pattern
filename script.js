function makeAdding(firstNumber){
  const first = firstNumber;
  return function resulting(secondNumber){
    const second = secondNumber;
    return first + second
  }
}
const add5 = makeAdding(5)
console.log(add5(2)) //7

//first factory function

function createUser(name){
  const discordName = "@" + name

  let reputation = 0;          //private variable

  // closures (functions that "close over" reputation and discordName)
  const getReputation = () => reputation;   
  const giveReputation = () => reputation++;

  return {name, discordName, getReputation, giveReputation} // same as {name: name, discordName: discordName}
}
const firstUser = createUser("Davie");
console.log(firstUser)

        //destructuring
const obj = {a:1, b:2}
const {a,b} = obj

console.log({a,b})
console.log(obj.a)

const array = [1, 2, 3, 4, 5]
const [zeroth, firstEl] = array

console.log([zeroth, firstEl])

          //Private variables
const josh = createUser("Josh")
console.log(josh.giveReputation()) //modifies reputation
console.log(josh.giveReputation()) //reputations increments again

console.log({
  discordName: josh.discordName,
  repuation: josh.getReputation() //accessing private variable via closures
})

        //Protototypal inheritance

function createPlayer(name, level){   //factory function
  const user = createUser(name);    

  const increaseLevel = () => level++
  const getLevel = () => level;
  return Object.assign({}, user, {increaseLevel, getLevel});

}
const goalKeeper = createPlayer("Saka", 1);

console.log(goalKeeper.getLevel());

goalKeeper.increaseLevel();
goalKeeper.increaseLevel();

console.log(goalKeeper.getLevel());

goalKeeper.giveReputation();
goalKeeper.giveReputation();

console.log({
  name: goalKeeper.name,
  discordName: goalKeeper.discordName,
  reputation: goalKeeper.getReputation(),
  level: goalKeeper.getLevel()
})

      //Module Pattern - This is the pattern of wrapping a factory function inside an IIFE
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
