import task from '../../src/task-7.js';

const unique = task;

describe('Task 7: Unique Values', () => {

  it('Empty array',
    () => expect(unique([])).toEqual([])
  );

  it('One-value array',
    () => expect(unique([5])).toEqual([5])
  );

  it('Boring case',
    () => expect(unique([8, 2, 2, 3, 8, 2, 2, 3])).toEqual([8, 2, 3])
  );

  it('Array with different types case', () => {
    const obj = {},
        arr = [];
    expect(unique(['A', 5, obj, true, arr, obj, 'a', 5, obj])).toEqual(['A', 5, obj, true, arr, 'a']);
  });
});
