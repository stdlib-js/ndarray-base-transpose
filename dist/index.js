"use strict";var o=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var i=o(function(c,n){"use strict";var d=require("@stdlib/ndarray-base-strides2offset");function u(t){var e,s,a,r;if(s=t.shape,r=s.length,r<2)throw new Error("invalid argument. Must provide an ndarray having two or more dimensions.");return a=t.strides,e=s[r-2],s[r-2]=s[r-1],s[r-1]=e,e=a[r-2],a[r-2]=a[r-1],a[r-1]=e,new t.constructor(t.dtype,t.data,s,a,d(s,a),t.order)}n.exports=u});var v=i();module.exports=v;
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
