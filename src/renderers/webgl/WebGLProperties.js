/**
 * @author fordacious / fordacious.github.io
 */

function WebGLProperties() {

	var properties = new WeakMap();

	function get( object ) {

		var map = properties.get( object );

		if ( map === undefined ) {

			map = {};
			properties.set( object, map );

		}

		return map;

	}

	function set( object, map ) {

		properties.set( object, map );

	}


	function remove( object ) {

		properties.delete( object );

	}

	function update( object, key, value ) {

		properties.get( object )[ key ] = value;

	}

	function dispose() {

		properties = new WeakMap();

	}

	return {
		get: get,
		set: set,
		remove: remove,
		update: update,
		dispose: dispose
	};

}


export { WebGLProperties };
