import task from '../../src/task-9.js';

const merge = task;

describe('Task 9: Fancy Merger', () => {
  it('Empty object case', () =>
    expect(merge([{}, {}, {}, {}, {}])).toEqual({})
  );

  it('Single object case', () =>
    expect(merge([{ field1: 'value1' }])).toEqual({ field1: ['value1'] })
  );

  it('Single object case #2', () =>
    expect(merge([{ field1: 'value1' }, {}, {}, {}])).toEqual({ field1: ['value1'] })
  );

  it('Unique fields case', () =>
    expect(merge([
      { login: 'mark twain' },
      { roles: ['admin', 'moderator'] },
      { disabled: false },
      { projects: 3 }
    ])).toEqual({
      login: ['mark twain'],
      roles: [['admin', 'moderator']],
      disabled: [false],
      projects: [3]
    })
  );

  it('Boring case', () =>
    expect(merge([
      { name: 'oven', height: 12, brand: 'Samsung' },
      { name: 'Galaxy S12', android: 10, brand: 'Samsung' },
      { name: 'oven', type: 'microwave', brand: 'LG', warranty: true },
      { name: 'G7', brand: 'LG', android: 10, warranty: true }
    ])).toEqual({
      name: ['oven', 'Galaxy S12', 'oven', 'G7'],
      height: [12],
      brand: ['Samsung', 'Samsung', 'LG', 'LG'],
      android: [10, 10],
      type: ['microwave'],
      warranty: [true, true]
    })
  );
});
