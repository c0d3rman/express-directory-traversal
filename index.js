path = require('path');

module.exports = function (message) {
	return function (req, res, next) {
		decoded = decodeURIComponent(req.url);
		if (decoded != path.join('/', decoded)) {
			res.writeHead(403, {"Content-Type": "text/plain"});
			res.write(message || "403 Forbidden");
			res.end();
		} else {
			next();
		}
	}
}
