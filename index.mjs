// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs";var e=r;var t=function(r){var t,n,s,a;if((a=(n=r.shape).length)<2)throw new Error("invalid argument. Must provide an ndarray having two or more dimensions.");return s=r.strides,t=n[a-2],n[a-2]=n[a-1],n[a-1]=t,t=s[a-2],s[a-2]=s[a-1],s[a-1]=t,new r.constructor(r.dtype,r.data,n,s,e(n,s),r.order)};export{t as default};
//# sourceMappingURL=index.mjs.map
