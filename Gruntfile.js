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

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['qunit_zombie']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
