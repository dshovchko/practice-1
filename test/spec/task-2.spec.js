import task from '../../src/task-2.js';

const getNthItem = task;

describe('Task 2: Sequence Generator', () => {
  it('Case #1', () => expect(getNthItem(5, 1)).toBe(5));
  it('Case #2', () => expect(getNthItem(11, 0)).toBe(0));
  it('Case #3', () => expect(getNthItem(10, 3)).toBe(30));
  it('Case #4', () => expect(getNthItem(0, 1)).toBe(0));
  it('Case #5', () => expect(getNthItem(30, 2)).toBe(-30));
  it('Case #6', () => expect(getNthItem(-5, 40)).toBe(1832519379625));
  it('Case #7', () => expect(getNthItem(12, 8)).toBe(-1020));
  it('Case #8', () => expect(getNthItem(0, 0)).toBe(0));
});
