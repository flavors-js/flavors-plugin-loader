'use strict';

const
  assert = require('assert'),
  loader = require('../index.js');

describe('loader', () => {
  it('loads Node.js module', () => {
    assert.deepEqual(loader(require('plugin'), [_ => _]), { value: 1 });
  });
  it('applies loaders', () => {
    assert.deepEqual(loader({ value1: 1 }, [_ => _, _ => ({ value2: _.value1 + 1 }), (_, p) => ({ value3: p.value2 + 1 })]), { value1: 1, value2: 2, value3: 3 });
  });
});