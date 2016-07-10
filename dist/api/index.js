'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var api = (0, _express.Router)();

	// mount the facets resource
	api.use('/facets', _facets2.default);

	// perhaps expose some API metadata at the root
	api.get('/', function (req, res) {
		res.json({
			version: '1.0'
		});
	});

	api.get('/new_team', function (req, res) {
		//let team = Team.createNewTeam("IFK Kuk", "Mr Kuk");
		//let team = new Team("","");
		res.json({
			hello: "yes hesllo please"
		});
	});

	return api;
};

var _express = require('express');

var _facets = require('./facets');

var _facets2 = _interopRequireDefault(_facets);

var _team = require('../models/team');

var _team2 = _interopRequireDefault(_team);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }