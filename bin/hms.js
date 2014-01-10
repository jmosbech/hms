#!/usr/bin/env node

var tab = require('tabalot');
var ids = [];
var noop = [];

var help = function() {
	process.stderr.write(require('fs').readFileSync(require('path').join(__dirname, 'help')));
	process.exit(1);
};

tab('*')
	('--remote', '-r', '@host');

tab('list')
	(ids)
	(function(id, opts) {
		require('../commands/list')(id, opts);
	});

tab('add')
	(ids)
	('--start', '-s')
	('--build', '-b')
	('--docks', '-d')
	('--env', '-e')
	(function(id, opts) {
		require('../commands/add')(id, opts);
	});

tab('update')
	(ids)
	('--start', '-s')
	('--build', '-b')
	('--docks', '-d')
	('--env', '-e')
	('--env-add')
	(function(id, opts) {
		require('../commands/update')(id, opts);
	});

tab('remove')
	(ids)
	(function(id, opts) {
		require('../commands/remove')(id, opts);
	});

tab('start')
	(ids)
	(function(id, opts) {
		require('../commands/start')(id, opts);
	});

tab('restart')
	(ids)
	(function(id, opts) {
		require('../commands/restart')(id, opts);
	});

tab('stop')
	(ids)
	(function(id, opts) {
		require('../commands/stop')(id, opts);
	});

tab('ps')
	(ids)
	(function(id, opts) {
		require('../commands/ps')(id, opts);
	});

tab('log')
	(ids)
	(function(id, opts) {
		require('../commands/log')(id, opts);
	});

tab('deploy')
	(ids)
	(function(id, opts) {
		require('../commands/deploy')(id, opts);
	});

tab('dock')
	('--port', '-p')
	(function(opts) {
		require('../commands/dock')(opts);
	});

tab('terminal')
	('--port', '-p')
	('--dock', '-d')
	(function(opts) {
		require('../commands/terminal')(opts);
	});

tab()
	('--version', '-v')
	(function(opts) {
		if (opts.version) return console.log('v'+require('../package.json').version);
		help();
	});

tab.parse() || help();