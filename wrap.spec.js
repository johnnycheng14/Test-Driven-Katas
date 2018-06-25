const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });



  xit('Takes two arguments', () => {
    expect(arguments.length).to.equal(2);
  });
  xit('First takes in a string as an argument', () => {
    expect(arguments[0]).to.be.a('string');
  });
  xit('Then takes in a number as an argument', () => {
    expect(arguments[1]).to.be.a('number');
  });
  it('Returns a string', () => {
    expect(wrap('hello', 15)).to.be.a('string');
  });

  let exampleString =
    'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';
  let example = wrap(exampleString, 20);
  console.log("Example: ",example)
  let solution = 'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'

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

  const splicedExample = example.split('\n')
  const splicedSolution = solution.split('\n')  

  it("Does not exceed more than the column number in length per line", () => {

    expect(splicedExample[0].length).to.be.below(21)
    expect(splicedExample[1].length).to.be.below(21)
    expect(splicedExample[2].length).to.be.below(21)
    expect(splicedExample[3].length).to.be.below(21)
  })

  it("Does not break words in two", () => {

    expect(splicedExample[0].length).to.equal(17)
    expect(splicedExample[1].length).to.equal(20)
    expect(splicedExample[2].length).to.equal(20)
    expect(splicedExample[3].length).to.equal(20)
})


});

// two arguments
// returns a string
// line shouldn't be longer than column number
// doesn't break words apart
