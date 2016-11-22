'use strict';

class HomeController
{
	/**
	 * Display a listing of the resource.
	 *
	 * @param  {Http.request} request
	 * @param  {Http.response} response
	 * @return {Http.response}
	 */
	index(req, res)
	{
		return res.render('index');
	}
}

module.exports = HomeController;
