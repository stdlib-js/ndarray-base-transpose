// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var e,t,n;for(t=r.length,e=[],n=0;n<t;n++)e.push(r[n]);return e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var o=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function c(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===s.call(r.specifier)?s.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(r){return"string"==typeof r}var l=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,m=/\.0*e/,y=/(\..*[^0])0*e/;function _(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,y,"$1e"),t=g.call(t,m,"e"),t=g.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===f.call(r.specifier)?f.call(t):p.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var k=String.fromCharCode,x=isNaN,S=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,t,n,i,o,s,l,p,f;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,p=0;p<r.length;p++)if(u(n=r[p]))s+=n;else{if(e=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){return"string"==typeof r}function C(r){var e,t;if(!A(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return $.apply(null,e)}var R,O,P=Object.prototype,Z=P.toString,G=P.__defineGetter__,W=P.__defineSetter__,L=P.__lookupGetter__,M=P.__lookupSetter__;function N(r,e){return"column-major"===e?function(r){var e,t,n;for(e=[],t=1,n=0;n<r.length;n++)e.push(t),t*=r[n];return e}(r):function(r){var e,t,n,i;for(e=r.length,t=[],i=0;i<e;i++)t.push(0);for(n=1,i=e-1;i>=0;i--)t[i]=n,n*=r[i];return t}(r)}R=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||M.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(r,e,t.get),o&&W&&W.call(r,e,t.set),r},O=function(r,e,t){return"column-major"===e?function(r,e){var t,n;for(t=1,n=0;n<r.length;n++)e[n]=t,t*=r[n];return e}(r,t):function(r,e){var t,n;for(t=1,n=r.length-1;n>=0;n--)e[n]=t,t*=r[n];return e}(r,t)},R(N,"assign",{configurable:!1,enumerable:!1,writable:!1,value:O});function U(r){return Math.abs(r)}function X(r){var e,t;return"string"==typeof(t=r.order)?t:"object"!=typeof(e=r.strides)||null===e?"row-major":(t=function(r){var e,t,n,i,a,o;if(0===(t=r.length))return 0;for(e=!0,n=!0,i=U(r[0]),o=1;o<t;o++){if(a=U(r[o]),e&&a<i?e=!1:n&&a>i&&(n=!1),!n&&!e)return 0;i=a}return n&&e?3:n?1:2}(e),1===t||3===t?"row-major":2===t?"column-major":0===r.shape.length?"row-major":null)}function z(e){var t,n,i,a;if(n=function(e,t){var n=e.shape;return t?r(n):n}(e,!0),(a=n.length)<2)throw new Error("invalid argument. Must provide an ndarray having two or more dimensions.");return i=function(e,t){var n,i,a;return"object"!=typeof(a=e.strides)||null===a?0===(i=e.shape).length?[0]:("string"!=typeof(n=e.order)&&(n="row-major"),N(i,n)):t?r(a):a}(e,!0),t=n[a-2],n[a-2]=n[a-1],n[a-1]=t,t=i[a-2],i[a-2]=i[a-1],i[a-1]=t,new e.constructor(function(r){return r.dtype}(e),function(r){return r.data}(e),n,i,function(r,e){var t,n,i;for(n=r.length,t=0,i=0;i<n;i++)e[i]<0&&(t-=e[i]*(r[i]-1));return t}(n,i),X(e))}export{z as default};
//# sourceMappingURL=mod.js.map
