const validateEmail = require('./validate-email');

test('Valid Email Addresses', () => {
  expect(validateEmail('jane.doe@domain.org')).toBe(true);
});

test('Invalid Email Addresses', () => {
  expect(validateEmail('@domain.com')).toBe(false);
  expect(validateEmail('rohit@yaho@xx.com')).toBe(false);
  expect(validateEmail('user@domain')).toBe(false);
  expect(validateEmail('gmail')).toBe(false);
});