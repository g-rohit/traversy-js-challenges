const generateHashtag = require('./hashtag-generator');

const testCases = [
    {
        input: 'hello world',
        expected: '#HelloWorld'
    },
    {
        input: 'JavaScript is awesome',
        expected: '#JavaScriptIsAwesome'
    },
    {
        input: 'hello   world',
        expected: '#HelloWorld'
    },
    {
        input: '   hello world   ',
        expected: '#HelloWorld'
    },
    {
        input: '',
        expected: false
    },
    {
        input: '    ',
        expected: false
    },
    {
        input: 'a'.repeat(139),
        expected: `#A${'a'.repeat(138)}`
    },
    {
        input: 'a'.repeat(140),
        expected: false
    },
    {
        input: 'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140',
        expected: false
    }
];

testCases.forEach(({ input, expected }, index) => {
    const result = generateHashtag(input);

    console.log(
        `Test ${index + 1}:`,
        result === expected ? 'PASS' : 'FAIL'
    );

    console.log('Input:', JSON.stringify(input));
    console.log('Expected:', expected);
    console.log('Received:', result);
    console.log('--------------------');
});