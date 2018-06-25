const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Takes two arguments', () => {
    expect(arguments.length).to.equal(2);
  });
  it('First takes in a string as an argument', () => {
    expect(arguments[0]).to.be('string');
  });
  it('Then takes in a number as an argument', () => {
    expect(arguments[1]).to.be('number');
  });
  it('Returns a string', () => {
    expect(wrap('hello', 15)).to.be('string');
  });

  let exampleString =
    'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';
  let example = wrap(exampleString, 20);

  const countNewLines = function(str) {
    let newLines = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === '\n') {
        newLines++;
      }
    }
    return newLines;
  };

  it('Has the appropriate number of line breaks', () => {
    expect(countNewLines(example)).to.equal(3);
  });
});

// two arguments
// returns a string
// line shouldn't be longer than column number
// doesn't break words apart
