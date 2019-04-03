'use strict';
import ModuleName from '../src/_module_name';

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('ModuleName is instantiable', () => {
    expect(new ModuleName()).toBeInstanceOf(ModuleName);
  });
});
