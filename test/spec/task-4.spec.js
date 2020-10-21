import task from '../../src/task-4.js';

const formatTime = task;

describe('Task 4: Time Formatter', () => {
  it('Boring AM case',
    () => expect(formatTime(37784)).toBe('10:29:44 AM'));

  it('Boring PM case',
    () => expect(formatTime(59900)).toBe('04:38:20 PM'));

  it("It's zero time!",
    () => expect(formatTime(0)).toBe('12:00:00 AM'));

  it("It's max time!",
    () => expect(formatTime(86399)).toBe('11:59:59 PM'));

  it('Just before 1 AM',
    () => expect(formatTime(3599)).toBe('12:59:59 AM'));

  it('1 AM time',
    () => expect(formatTime(3600)).toBe('01:00:00 AM'));

  it('Just before midday',
    () => expect(formatTime(43199)).toBe('11:59:59 AM'));

  it('Midday',
    () => expect(formatTime(43200)).toBe('12:00:00 PM'));

  it('Just before 1 PM',
    () => expect(formatTime(46799)).toBe('12:59:59 PM'));

  it('1 PM',
    () => expect(formatTime(46800)).toBe('01:00:00 PM'));
});
