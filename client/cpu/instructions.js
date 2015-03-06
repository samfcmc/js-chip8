'use strict';

/*
 * Instructions
 */

module.exports = {
  //Clear the screen
  cls: function(cpu) {
    for(var i = 0; i < cpu.gfx.length; i++) {
      cpu.gfx[i] = 0;
    }
  }
};
