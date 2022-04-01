// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r,n){var t,e,a;for(e=r.length,t=0,a=0;a<e;a++)n[a]<0&&(t-=n[a]*(r[a]-1));return t};var n=function(n){var t,e,a,o;if((o=(e=n.shape).length)<2)throw new Error("invalid argument. Must provide an ndarray having two or more dimensions.");return a=n.strides,t=e[o-2],e[o-2]=e[o-1],e[o-1]=t,t=a[o-2],a[o-2]=a[o-1],a[o-1]=t,new n.constructor(n.dtype,n.data,e,a,r(e,a),n.order)};export{n as default};
//# sourceMappingURL=mod.js.map
