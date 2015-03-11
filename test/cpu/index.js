'use strict';

/*
 * CPU Test module
 */

module.exports = function(CPU, assert) {
  describe('CPU', function() {
    require('./registers')(CPU, assert);
    require('./instructions')(CPU, assert);
  });
};
