import task from '../../src/task-10.js';

const convertToRoman = task;

describe('Task 10: Arabic to Roman Converter', () => {
  it('Boring 1 case',
    () => expect(convertToRoman(1)).toBe('I'));

  it('Boring 3 case',
    () => expect(convertToRoman(3)).toBe('III'));

  it('Not so boring 9 case',
    () => expect(convertToRoman(9)).toBe('IX'));

  it('Not boring at all 1066 case',
    () => expect(convertToRoman(1066)).toBe('MLXVI'));

  it('Not boring at all my ass 1989 case',
    () => expect(convertToRoman(1989)).toBe('MCMLXXXIX'));
});
