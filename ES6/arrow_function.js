/* ES5 */
const add = function(a, b) {
  return a + b;
};

add(1, 2);

/* ES6 */
let multiply = function(a, b) {
  return a * b;
};

multiply = (a, b) => {
  return a * b;
};

mutiply = (a, b) => a * b;

let double = number => number * 2;
let print = () => "yeonsu";

const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(number => {
  return 2 * number;
});

const team = {
  members: ["Iron man", "Hulk", "Thor", "Captain America", "Dr.Strange"],
  teamName: "Avengers",
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is the ${this.teamName}`;
    });
  },

  //ES6
  sayHello() {
    console.log("Hello");
  }
};

team.teamSummary();
