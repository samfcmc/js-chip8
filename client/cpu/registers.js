'use strict';

/*
 * Registers
 */

module.exports = function() {

  return {
    v: new Array(16),
    I: 0,
    pc: 0,
    sp: 0,
    reset: function() {
      for(var i = 0; i < this.v.length; i++) {
        this.v[i] = 0;
      }
      this.I = 0;
      this.pc = 0;
      this.sp = 0;
    }
  };

};
