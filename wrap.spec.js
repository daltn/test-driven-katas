const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('If column number is less than the character count it just returns the string', () => {
    expect(wrap('Hey', 12)).to.equal('Hey');
  });
  it('Returns a string broken up at every second position', () => {
    expect(wrap('Lorem', 2)).to.equal('Lo\nre\nm');
  });
  it('Returns a string broken up per word at each column', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );
  });
});
