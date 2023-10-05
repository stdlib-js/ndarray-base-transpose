// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t,e,n,o;if((o=(e=r.shape).length)<2)throw new Error(function(){var r,t=arguments,e="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}("0jb0c,E2"));return n=r.strides,t=e[o-2],e[o-2]=e[o-1],e[o-1]=t,t=n[o-2],n[o-2]=n[o-1],n[o-1]=t,new r.constructor(r.dtype,r.data,e,n,function(r,t){var e,n,o;for(n=r.length,e=0,o=0;o<n;o++)t[o]<0&&(e-=t[o]*(r[o]-1));return e}(e,n),r.order)}export{r as default};
//# sourceMappingURL=mod.js.map
