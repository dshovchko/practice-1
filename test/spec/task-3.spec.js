import task from '../../src/task-3.js';

const sumDigits = task;

describe('Task 3: Sum of Number Digits', () => {
  it('Case #1', () => expect(sumDigits(717)).toBe(15));
  it('Case #2', () => expect(sumDigits(918)).toBe(18));
  it('Case #3', () => expect(sumDigits(5)).toBe(5));
  it('Case #4', () => expect(sumDigits(0)).toBe(0));
  it('Case #5', () => expect(sumDigits(1234)).toBe(10));
  it('Case #6', () => expect(sumDigits(111111111)).toBe(9));
});
