// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-order@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-data-buffer@v0.2.2-esm/index.mjs";function m(m){var o,a,j,p;if((p=(a=e(m,!0)).length)<2)throw new Error(s("0jb0c"));return j=d(m,!0),o=a[p-2],a[p-2]=a[p-1],a[p-1]=o,o=j[p-2],j[p-2]=j[p-1],j[p-1]=o,new m.constructor(t(m),i(m),a,j,r(a,j),n(m))}export{m as default};
//# sourceMappingURL=index.mjs.map
