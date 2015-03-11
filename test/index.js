'use strict';

/*
 * Tests main module
 */

var CPU = require('../client/cpu');
var assert = require('assert');

describe('Testing...', function() {
  require('./cpu')(CPU, assert);
});
