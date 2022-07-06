// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs";function s(s){var e,d,o,n;if((n=(d=s.shape).length)<2)throw new Error(r("0Mi0c"));return o=s.strides,e=d[n-2],d[n-2]=d[n-1],d[n-1]=e,e=o[n-2],o[n-2]=o[n-1],o[n-1]=e,new s.constructor(s.dtype,s.data,d,o,t(d,o),s.order)}export{s as default};
//# sourceMappingURL=index.mjs.map
