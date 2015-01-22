# grunt-qunit-zombie

A [QUnit][] plugin for [Grunt][] using [Zombie][].

> This plugin is a work in progress, and isn't usable yet. Sorry!

[QUnit]: http://qunitjs.com/
[Grunt]: http://gruntjs.com/
[Zombie]: http://zombie.labnotes.org/

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt][] before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-qunit-zombie --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-qunit-zombie');
```

## The "qunit_zombie" task

### Overview
In your project's Gruntfile, add a section named `qunit_zombie` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  qunit_zombie: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Usage Examples

#### Wildcards
In this example, `grunt qunit_zombie:all` (or `grunt qunit_zombie` because `qunit_zombie` is a multi task) will test all `.html` files in the test directory _and all subdirectories_. First, the wildcard is expanded to match each individual file. Then, each matched filename is passed to [Zombie][] one at a time.

```js
grunt.initConfig({
  qunit_zombie: {
      all: ['test/**/*.html'],
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt][].

## Release History
_(Nothing yet)_
