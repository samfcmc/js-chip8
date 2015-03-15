'use strict';

/*
 * Instructions
 */

module.exports = {
  //Clear the screen
  cls: function(cpu, opcode) {
    for(var i = 0; i < cpu.gfx.length; i++) {
      cpu.gfx[i] = 0;
    }
    ++cpu.registers.pc;
  },

  ret: function(cpu, opcode) {
    cpu.registers.pc = cpu.stack[cpu.registers.sp];
    --cpu.registers.sp;
  },

  jmpnnn: function(cpu, opcode) {
  //  var opcode = cpu.memory[cpu.registers.pc];
    var address = opcode & 0x0FFF;
    cpu.registers.pc = address;
  },

  callnnn: function(cpu, opcode) {
    //var opcode = cpu.memory[cpu.registers.pc];
    var address = opcode & 0x0FFF;
    ++cpu.registers.sp;
    cpu.stack[cpu.registers.sp] = cpu.registers.pc;
    cpu.registers.pc = address;
  },

  sevxbyte: function(cpu, opcode) {
    //var opcode = cpu.memory[cpu.registers.pc];
    var vx = (opcode & 0x0F00) >> 8;
    var byte = opcode & 0x00FF;
    cpu.registers.pc += cpu.registers.v[vx] == byte ? 2 : 1;
  },

  snevxbyte: function(cpu, opcode) {
    //var opcode = cpu.memory[cpu.registers.pc];
    var vx = (opcode & 0x0F00) >> 8;
    var byte = opcode & 0x00FF;
    cpu.registers.pc += cpu.registers.v[vx] != byte ? 2 : 1;
  },

  sevxvy: function(cpu, opcode) {
    //var opcode = cpu.memory[cpu.registers.pc];
    var vx = (opcode & 0x0F00) >> 8;
    var vy = (opcode & 0x00F0) >> 4;
    cpu.registers.pc += cpu.registers.v[vx] == cpu.registers.v[vy] ? 2 : 1;
  },

  ldvxbyte: function(cpu, opcode) {
    var vx = (opcode & 0x0F00) >> 8;
    var byte = opcode & 0x00FF;
    cpu.registers.v[vx] = byte;
    cpu.registers.pc++;
  }

};
