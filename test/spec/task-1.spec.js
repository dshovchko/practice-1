import task from '../../src/task-1.js';

const isTriangle = task;

describe('Task 1: to be or not to be a triangle', () => {
  it('should spot a triangle for boring case of 3, 4, 5',
    () => expect(isTriangle(3, 4, 5)).toBe(true));

  it('should spot a triangle for equilateral triangle case (2.3, 2.3, 2.3)',
    () => expect(isTriangle(2.3, 2.3, 2.3)).toBe(true));

  it('should spot a triangle if it is vary tall (11.4, 0.8, 11)',
    () => expect(isTriangle(11.4, 0.8, 11)).toBe(true));

  it('should reject a "flat" triangle case (15, 30, 15)',
    () => expect(isTriangle(15, 30, 15)).toBe(false));

  it('should reject zero-side triangle case (0, 4, 5)',
    () => expect(isTriangle(0, 4, 5)).toBe(false));
});
