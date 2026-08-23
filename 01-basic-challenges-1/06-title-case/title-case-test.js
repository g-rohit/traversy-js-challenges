const titleCase = require('./title-case');

test('Convert a string to title case', () => {
  // Basic case
  expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');

  // Single word
  expect(titleCase('hello')).toBe('Hello');

  // Already title case
  expect(titleCase('The Quick Brown Fox')).toBe('The Quick Brown Fox');

  // Mixed case
  expect(titleCase('tHE qUICK bROWN fOX')).toBe('The Quick Brown Fox');

  // All uppercase
  expect(titleCase('THE QUICK BROWN FOX')).toBe('The Quick Brown Fox');

  // Empty string
  expect(titleCase('')).toBe('');

  // Single character
  expect(titleCase('a')).toBe('A');

  // Multiple spaces
  expect(titleCase('the   quick   fox')).toBe('The Quick Fox');

  // Leading and trailing spaces
  expect(titleCase('  the quick fox  ')).toBe('The Quick Fox');

  // Numbers
  expect(titleCase('hello 123 world')).toBe('Hello 123 World');

  // Punctuation
  expect(titleCase('hello, world!')).toBe('Hello, World!');

});