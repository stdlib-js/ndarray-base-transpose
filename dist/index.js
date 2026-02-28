"use strict";var o=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var u=o(function(w,s){"use strict";var v=require("@stdlib/ndarray-base-dtype"),g=require("@stdlib/ndarray-base-shape"),d=require("@stdlib/ndarray-base-strides"),p=require("@stdlib/ndarray-base-offset"),q=require("@stdlib/ndarray-base-order"),c=require("@stdlib/ndarray-base-data-buffer");function h(e,a){var n,t,i,r;if(t=g(e,!0),r=t.length,r<2)throw new Error("invalid argument. Must provide an ndarray having two or more dimensions.");return i=d(e,!0),n=t[r-2],t[r-2]=t[r-1],t[r-1]=n,n=i[r-2],i[r-2]=i[r-1],i[r-1]=n,new e.constructor(v(e),c(e),t,i,p(e),q(e),{readonly:!a})}s.exports=h});var m=u();module.exports=m;
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
