'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

// 3rd party middleware
app.use((0, _cors2.default)({
	exposedHeaders: ['Link']
}));

app.use(_bodyParser2.default.json({
	limit: '100kb'
}));

// connect to db
(0, _db2.default)(function (λ) {

	// internal middleware
	app.use((0, _middleware2.default)());

	// api router
	app.use('/api', (0, _api2.default)());

	app.server.listen(8080);

	console.log('Started on port ' + app.server.address().port);
});

exports.default = app;