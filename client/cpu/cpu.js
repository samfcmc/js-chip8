'use strict';

/*
 * CPU Chip8
 */

function resetArray(array) {
  for(var i = 0; i < array.length; i++) {
    array[i] = 0;
  }
}

module.exports = function(registers, instructions) {
  var cpu = {
    memory: new Array(4096),
    registers: registers,
    instructions: instructions,
    gfx: new Array(64*32),
    delayTimer: 0xFF,
    soundTimer: 0xFF,
    stack: new Array(16),
    key: new Array(16),

    reset: function() {
      resetArray(this.memory);
      this.registers.reset();
      resetArray(this.gfx);
      this.delayTimer = 0xFF;
      this.soundTimer = 0xFF;
      resetArray(this.stack);
      resetArray(this.key);
    }
  };

  cpu.reset();

  return cpu;
};
