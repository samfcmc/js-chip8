'use strict';

module.exports = function(CPU, assert) {
  function testPC(oldpc, pc, increment) {
    it('PC should be incremented by ' + increment, function() {
      assert.equal(pc, oldpc + increment);
    });
  }

  describe('Instructions', function() {
    require('./cls')(CPU, assert, testPC);
    require('./callnnn')(CPU, assert);
    require('./jmpnnn')(CPU, assert);
    require('./ret')(CPU, assert);
    require('./sevxbyte')(CPU, assert);
    require('./snevxbyte')(CPU, assert);
    require('./sevxvy')(CPU, assert);
    require('./ldvxbyte')(CPU, assert, testPC);
    require('./addvxbyte')(CPU, assert);
  });
};
