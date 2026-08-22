const countOccurrences = require('./count-occurrences');

test('Count Occurrences of a Character', () => {
  expect(countOccurrences('hello', 'l')).toBe(2);
  expect(countOccurrences('programming', 'm')).toBe(2);
  expect(countOccurrences('banana', 'a')).toBe(3);
  expect(countOccurrences('', 'a')).toBe(0);
  expect(countOccurrences('hello', 'z')).toBe(0);
  expect(countOccurrences('aaaaa', 'a')).toBe(5);
  expect(countOccurrences('Hello', 'l')).toBe(2);
  expect(countOccurrences('Hello', 'H')).toBe(1);
  expect(countOccurrences('Mississippi', 's')).toBe(4);
  expect(countOccurrences('123123123', '1')).toBe(3);
  expect(countOccurrences('a b a', ' ')).toBe(2);
});
