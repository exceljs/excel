'use strict';

/**
 |------------------------------------------------------------------
 | Database Configuration
 |------------------------------------------------------------------
 |
 | Define driver database provider
 |
**/

module.exports = {

	/**
	 |------------------------------------------------------------------
	 | Default Connection
	 |------------------------------------------------------------------
	 |
	 | Default database connection
	 |
	**/

	default: 'mongodb',

	/**
	 |------------------------------------------------------------------
	 | Database connection options
	 |------------------------------------------------------------------
	 |
	 | All options database connection supported as default
	 |
	**/

	connection: {

		/**
		 |------------------------------------------------------------------
		 | Mongodb Configuration
		 |------------------------------------------------------------------
		 |
		 | By default, `mongodb` as the default driver.
		 |
		**/

		mongodb: {
			driver: 'mongodb'
			//
		},

		/**
		 |------------------------------------------------------------------
		 | MYSQL Configuration
		 |------------------------------------------------------------------
		 |
		 | Before using mysql, you need to install `mysql` module. Just
		 | follow the instruction.
		 |
		 | https://npmjs.com/package/mysql
		 |
		**/

		mysql: {
			driver: 'mysql',
			host: '127.0.0.1',
			port: '3306',
			database: 'db-name',
			username: 'db-username',
			password: '',
			charset: 'utf8',
			collation: 'utf8_unicode_ci',
			prefix: '',
			strict: true,
			engine: null
		},

		/**
		 |------------------------------------------------------------------
		 | SQLite Configuration
		 |------------------------------------------------------------------
		 |
		 | Before using sqlite, you need to install `sqlite` module. Just
		 | follow the instruction.
		 |
		 | https://npmjs.com/package/sqlite
		 |
		**/

		sqlite: {
			driver: 'sqlite',
			database: 'database.sqlite',
			prefix: ''
		}

	},

	/**
	 |------------------------------------------------------------------
	 | Migration database table
	 |------------------------------------------------------------------
	 |
	 | Using migration table
	 |
	**/

	migrations: 'migrations'

};
