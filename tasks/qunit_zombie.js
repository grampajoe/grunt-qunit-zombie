/*
 * grunt-qunit-zombie
 * https://github.com/grampajoe/grunt-qunit-zombie
 *
 * Copyright (c) 2013 Joe Friedl
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var Browser = require('zombie'),
      browser = new Browser();

  grunt.registerMultiTask('qunit_zombie', 'Run QUnit tests with Zombie.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      timeout: 5000,
    });
  },
  function() {
  });
};
