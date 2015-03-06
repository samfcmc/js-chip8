'use strict';

var CPU = require('./cpu');
var Registers = require('./registers');
var Instructions = require('./instructions');

var registers = new Registers();

module.exports = function() {
  return new CPU(registers, Instructions);
};
