declare const tryImport: {
	/**
	* Try to import a module, returning undefined if failed.
	* @param name The module to try to import.
	* @example
	* ```
	* const tryImport = require("try-import");
	*
	* tryImport("name");
	* //=> () => { ... }
	* ```
	*/
	(name: string): unknown

	/**
	* Try to resolve a module, returning undefined if failed.
	* @param name The module to try to resolve.
	* @example
	* ```
	* const tryImport = require("try-import");
	*
	* tryImport.resolve("name");
	* //=> 'C:\Users\richi\Documents\GitHub\try-import\node_modules\name\src\index.js'
	* ```
	*/
	resolve(name: string): string | undefined
}

export = tryImport
