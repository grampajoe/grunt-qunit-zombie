/*
 * grunt-qunit-zombie
 * https://github.com/grampajoe/grunt-qunit-zombie
 *
 * Copyright (c) 2013 Joe Friedl
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Tests
    qunit_zombie: {
      all: [
        'test/**/*.html',
      ],
    },
  });

  // Build a mapping of url success counters.
  var successes = {};
  var currentUrl;
  grunt.event.on('qunit.spawn', function(url) {
    currentUrl = url;
    if (!successes[currentUrl]) { successes[currentUrl] = 0; }
  });
  grunt.event.on('qunit.done', function(failed, passed) {
    if (failed === 0 && passed === 1) { successes[currentUrl]++; }
  });

  grunt.registerTask('really-test', 'Test to see if qunit task actually worked.', function() {
    var assert = require('assert'),
        difflet = require('difflet')({indent: 2, comment: true}),
        actual = successes,
        expected = {
      'test/qunit-1.11.0-test.html': 1,
    };

    try {
      assert.deepEqual(actual, expected, 'Actual should match expected.');
    } catch (err) {
      grunt.log.subhead('Actual should match expected.');
      console.log(difflet.compare(expected, actual));
      throw new Error(err.message);
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['qunit_zombie', 'really-test']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
