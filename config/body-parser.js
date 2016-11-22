'use strict';

/**
 |------------------------------------------------------------------
 | Express body parser options
 |------------------------------------------------------------------
 |
 | Parse incoming request bodies in a middleware before your
 | handlers, available under the req.body property.
 |
 | https://github.com/expressjs/body-parser#api
 |
**/

module.exports = {

	/**
	 |------------------------------------------------------------------
	 | JSON Options
	 |------------------------------------------------------------------
	 |
	 | Returns middleware that only parses json. This parser accepts
	 | any Unicode encoding of the body and supports automatic
	 | inflation of gzip and deflate encodings
	 |
	**/

	json: {
		//
	},

	/**
	 |------------------------------------------------------------------
	 | URL Encoded
	 |------------------------------------------------------------------
	 |
	 | Returns middleware that only parses urlencoded bodies. This
	 | parser accepts only UTF-8 encoding of the body and supports
	 | automatic inflation of gzip and deflate encodings.
	 |
	**/

	urlencoded: {
		extended: true
	},

	/**
	 |------------------------------------------------------------------
	 | Raw options
	 |------------------------------------------------------------------
	 |
	 | Returns middleware that parses all bodies as a Buffer.
	 | This parser supports automatic inflation of gzip
	 | and deflate encodings.
	 |
	**/

	raw: {
		//
	},

	/**
	 |------------------------------------------------------------------
	 | Text options
	 |------------------------------------------------------------------
	 |
	 | Returns middleware that parses all bodies as a string.
	 | This parser supports automatic inflation of gzip
	 | and deflate encodings.
	 |
	**/

	text: {
		//
	}

};
