<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# transpose

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Transpose a matrix (or a stack of matrices).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
transpose = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-transpose@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-transpose@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.transpose;
})();
</script>
```

#### transpose( x )

Transposes a matrix (or a stack of matrices) `x`.

```javascript
var array = require( '@stdlib/ndarray-array' );

var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
// returns <ndarray>

var sh = x.shape;
// returns [ 2, 3 ]

var y = transpose( x );
// returns <ndarray>

sh = y.shape;
// returns [ 3, 2 ]

var bool = ( x.data === y.data );
// returns true

bool = ( x.get( 0, 1 ) === y.get( 1, 0 ) );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned ndarray is a **view** of the input ndarray. Accordingly, writing to the original ndarray will **mutate** the returned ndarray and vice versa. While powerful, this can lead to subtle bugs. In general, one should handle the returned ndarray as **read-only**.
-   If provided an ndarray with fewer than two dimensions, the function raises an exception.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-transpose@umd/bundle.js"></script>
<script type="text/javascript">
(function () {

function print( arr, name ) {
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

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-transpose.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-transpose

[test-image]: https://github.com/stdlib-js/ndarray-base-transpose/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-transpose/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-transpose/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-transpose?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-transpose.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-transpose/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-transpose/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-transpose/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-transpose/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-transpose/main/LICENSE

</section>

<!-- /.links -->
