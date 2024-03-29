/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isndarrayLike = require( '@stdlib/assert-is-ndarray-like' );
var zeros = require( '@stdlib/ndarray-base-zeros' );
var pkg = require( './../package.json' ).name;
var transpose = require( './../lib' );


// MAIN //

bench( pkg+'::base:dtype=float64', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'float64', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=float32', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'float32', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=complex128', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'complex128', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=complex64', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'complex64', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=int32', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'int32', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=uint32', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'uint32', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=int16', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'int16', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=uint16', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'uint16', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=int8', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'int8', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=uint8', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'uint8', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=uint8c', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'uint8c', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::base:dtype=generic', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = zeros( 'generic', [ 2, 2 ], 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = transpose( x );
		if ( y.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isndarrayLike( y ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
