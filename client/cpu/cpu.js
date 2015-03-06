'use strict';

/*
 * CPU Chip8
 */

module.exports = function(registers, instructions) {
  return {
    memory: new Array(4096),
    registers: registers,
    instructions: instructions,
    gfx: new Array(64*32),
    delayTimer: 0xFF,
    soundTimer: 0xFF,
    stack: new Array(16),
    key: new Array(16)
  };
};
