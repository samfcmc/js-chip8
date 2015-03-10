'use strict';

/*
 * CPU Chip8
 */

module.exports = function(registers, instructions) {
  var cpu = {
    memory: new Array(4096),
    registers: registers,
    instructions: instructions,
    gfx: new Array(64*32),
    delayTimer: 0xFF,
    soundTimer: 0xFF,
    stack: new Array(16),
    key: new Array(16)
  };

  // Initialize it
  for(var i = 0; i < cpu.memory.length; i++) {
    cpu.memory[i] = 0;
  }

  for(var i = 0; i < cpu.gfx.length; i++) {
    cpu.gfx[i] = 0;
  }

  for(var i = 0; i < cpu.stack.length; i++) {
    cpu.stack[i] = 0;
  }

  for(var i = 0; i < cpu.key.length; i++) {
    cpu.key[i] = 0;
  }

  return cpu;
};
