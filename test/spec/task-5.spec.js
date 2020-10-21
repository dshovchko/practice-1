import task from '../../src/task-5.js';

const trim = task;

describe('Task 5: Text trimmer', () => {
  it('Boring case',
    () => expect(trim('Hello, I am a text!', 9)).toBe('Hello, I\u2026'));

  it('Zero length case',
    () => expect(trim('Hello, I am a text!', 1)).toBe('\u2026'));

  it('Zero text case',
    () => expect(trim('', 5)).toBe(''));

  it('No need to trim case',
    () => expect(trim('Hello, I am a text!', 19)).toBe('Hello, I am a text!'));

  it('should throw a RangeError for negative input',
    () => expect(() => trim('I\'m a text!', -50)).toThrowError(RangeError));

  it('should throw a RangeError for a zero length',
    () => expect(() => trim('', 0)).toThrowError(RangeError));
});
