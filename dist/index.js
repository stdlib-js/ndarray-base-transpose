"use strict";var u=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var n=u(function(f,s){"use strict";var o=require("@stdlib/ndarray-base-strides2offset"),v=require("@stdlib/ndarray-base-dtype"),g=require("@stdlib/ndarray-base-shape"),d=require("@stdlib/ndarray-base-strides"),p=require("@stdlib/ndarray-base-order"),q=require("@stdlib/ndarray-base-data-buffer");function c(t){var e,a,i,r;if(a=g(t,!0),r=a.length,r<2)throw new Error("invalid argument. Must provide an ndarray having two or more dimensions.");return i=d(t,!0),e=a[r-2],a[r-2]=a[r-1],a[r-1]=e,e=i[r-2],i[r-2]=i[r-1],i[r-1]=e,new t.constructor(v(t),q(t),a,i,o(a,i),p(t))}s.exports=c});var h=n();module.exports=h;
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
//# sourceMappingURL=index.js.map
