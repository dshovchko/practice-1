import task from '../../src/task-8.js';

const getTopLetter = task;

describe('Task 8: Top Letter', () => {
  it('One letter string',
    () => expect(getTopLetter('A')).toBe('A')
  );

  it('Boring case #1',
    () => expect(getTopLetter('CAATGCCATA')).toBe('A')
  );

  it('Boring case #2',
    () => expect(getTopLetter('M7X72DRLlhMBHJzcTROVhy2xPYfVVoyWp9djVkR3FDYo4vsvRUyaq8WBKEk9Igdx')).toBeOneOf(['R', 'V'])
  );

  it('Boring case #3',
    () => expect(getTopLetter('nkfkc9,9gx1 7n7554b iyjtk zvm8k6kodepcnt7gmld7caaih6n5,2arq.v mraefuth4u8u0 gpu3')).toBeOneOf([' ', 'k'])
  );
});
