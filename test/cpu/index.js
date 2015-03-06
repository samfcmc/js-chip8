'use strict';

/*
 * CPU Test module
 */

module.exports = function() {
  describe('CPU', function() {
    require('./registers')();
    require('./instructions')();
  });
};
