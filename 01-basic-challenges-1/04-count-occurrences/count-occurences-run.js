const countOccurrences = require('./count-occurrences');

const testCases = [
  { text: 'hello world', character: 'l' },
  { text: 'programming', character: 'm' },
  { text: 'banana', character: 'a' },
  { text: '', character: 'a' },
  { text: 'JavaScript', character: 'a' },
];

testCases.forEach(({ text, character }) => {
  const result = countOccurrences(text, character);
  console.log(`'${character}' occurs ${result} time(s) in '${text}'`);
});