const name = "janhavi"
const repoCount = 98

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String ('janhavi-js-com')

// console.log(gameName [0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "       janhavi      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://janhavi.com/janhavi%98singh"

console.log(url.replace('%98','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));












