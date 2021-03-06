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

var Float64Array = require( '@stdlib/array-float64' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var rpad = require( '@stdlib/string-right-pad' );
var transpose = require( './../lib' );

function print( arr, name ) { // eslint-disable-line stdlib/no-redeclare
	var str;
	var sh;
	var p;
	var i;
	var j;
	var k;

	sh = arr.shape;
	for ( i = 0; i < sh[0]; i++ ) {
		str = name+'['+i+',:,:] = [ ';
		p = str.length + 1;
		for ( j = 0; j < sh[1]; j++ ) {
			if ( j > 0 ) {
				str += rpad( '\n', p, ' ' );
			}
			for ( k = 0; k < sh[2]; k++ ) {
				str += arr.get( i, j, k );
				if ( k < sh[2]-1 ) {
					str += ', ';
				}
			}
		}
		console.log( str + ' ]\n' );
	}
}

// Create a data buffer:
var buf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Create a stack of matrices:
var x = new ndarray( 'float64', buf, [ 2, 2, 3 ], [ 0, 3, 1 ], 0, 'row-major' );

// Transpose the stack of matrices:
var y = transpose( x );

// Print the stacks:
console.log( '' );
print( x, 'X' );
console.log( '' );
print( y, 'Y' );
