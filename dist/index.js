"use strict";var o=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(i){throw t=0,i}}};var u=o(function(w,s){"use strict";var v=require("@stdlib/ndarray-base-dtype"),g=require("@stdlib/ndarray-base-shape"),d=require("@stdlib/ndarray-base-strides"),p=require("@stdlib/ndarray-base-offset"),q=require("@stdlib/ndarray-base-order"),c=require("@stdlib/ndarray-base-data-buffer");function h(e,t){var i,a,n,r;if(a=g(e,!0),r=a.length,r<2)throw new Error("invalid argument. Must provide an ndarray having two or more dimensions.");return n=d(e,!0),i=a[r-2],a[r-2]=a[r-1],a[r-1]=i,i=n[r-2],n[r-2]=n[r-1],n[r-1]=i,new e.constructor(v(e),c(e),a,n,p(e),q(e),{readonly:!t})}s.exports=h});var m=u();module.exports=m;
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
