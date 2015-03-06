'use strict';

/*
 * CPU Chip8
 */

module.exports = function(registers) {
  return {
    memory: new Array(4096),
    registers: registers
  };
};
