!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hotwallet=t():e.hotwallet=t()}(this,(function(){return(()=>{"use strict";var e={725:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EventTask=void 0;var n=function(){function e(e,t,n,r,o){this.id=e,this.name=t,this.resolve=n,this.reject=r,this.timer=o}return e.prototype.send=function(e){clearTimeout(this.timer),this.resolve(e)},e.prototype.sendError=function(e){clearTimeout(this.timer),this.reject({message:e})},e}();t.EventTask=n},289:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.HotwalletApi=void 0;var a=n(725),u=n(614),s=function(){function e(){var e=this;this.PROMISE_TIMEOUT=3e4,this.queue=new Map,document.addEventListener("hotwalletResult",(function(t){t&&t instanceof CustomEvent&&t.detail&&e.eventQueueHandler(t)}))}return e.prototype.eventQueueHandler=function(e){var t=e.detail.eventName,n=e.detail.taskId,r=e.detail.result,o=r.error,i=this.queue.get(t+":"+n);i&&(o?i.sendError(o):i.send(r),this.queue.delete(t+":"+n))},e.prototype.eventQueueTimeoutRejectionHandler=function(e,t){var n=this.queue.get(e+":"+t);n&&(n.sendError("rejected for timeout"),this.queue.delete(e+":"+t))},e.prototype.newPromise=function(e,t,n){var o=this;return new Promise((function(i,s){var c=u.v4(),l=setTimeout((function(){return o.eventQueueTimeoutRejectionHandler(t,c)}),o.PROMISE_TIMEOUT);o.queue.set(t+":"+c,new a.EventTask(c,t,i,s,l)),document.dispatchEvent(new CustomEvent("hotwallet",{detail:r({eventName:e,taskId:c},n)}))}))},e.prototype.wait=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){return[2,new Promise((function(t){return setTimeout(t,e)}))]}))}))},e.prototype.isExtensionInstalled=function(){return o(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return"complete"===document.readyState?[3,2]:[4,this.wait(1e3)];case 1:return t.sent(),[3,0];case 2:return[4,this.newPromise("onHotwalletExtension","onHotwalletExtensionResult")];case 3:return e=t.sent(),[2,Promise.resolve(!(!e||!e.running)&&e.running)]}}))}))},e.prototype.connect=function(){return o(this,void 0,void 0,(function(){return i(this,(function(e){return[2,this.newPromise("onHotwalletConnect","onHotwalletConnected")]}))}))},e.prototype.sendTransaction=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){return[2,this.newPromise("onHotwalletTransaction","onHotwalletTransactionResult",{transaction:e})]}))}))},e}();t.HotwalletApi=s},114:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StorageValueFactory=void 0;var n=function(){function e(){}return e.newStorageValue=function(e,t){return{value:e,type:t}},e.newNullReference=function(){return{type:"reference"}},e.newReference=function(e){return{type:"reference",reference:e}},e.newEnum=function(e,t){return{type:t,enumElementName:e}},e}();t.StorageValueFactory=n},614:(e,t,n)=>{var r;n.r(t),n.d(t,{NIL:()=>R,parse:()=>y,stringify:()=>l,v1:()=>h,v3:()=>j,v4:()=>P,v5:()=>O,validate:()=>u,version:()=>_});var o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=function(e){return"string"==typeof e&&a.test(e)};for(var s=[],c=0;c<256;++c)s.push((c+256).toString(16).substr(1));const l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};var f,p,d=0,v=0;const h=function(e,t,n){var r=t&&n||0,o=t||new Array(16),a=(e=e||{}).node||f,u=void 0!==e.clockseq?e.clockseq:p;if(null==a||null==u){var s=e.random||(e.rng||i)();null==a&&(a=f=[1|s[0],s[1],s[2],s[3],s[4],s[5]]),null==u&&(u=p=16383&(s[6]<<8|s[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),h=void 0!==e.nsecs?e.nsecs:v+1,y=c-d+(h-v)/1e4;if(y<0&&void 0===e.clockseq&&(u=u+1&16383),(y<0||c>d)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=c,v=h,p=u;var m=(1e4*(268435455&(c+=122192928e5))+h)%4294967296;o[r++]=m>>>24&255,o[r++]=m>>>16&255,o[r++]=m>>>8&255,o[r++]=255&m;var w=c/4294967296*1e4&268435455;o[r++]=w>>>8&255,o[r++]=255&w,o[r++]=w>>>24&15|16,o[r++]=w>>>16&255,o[r++]=u>>>8|128,o[r++]=255&u;for(var g=0;g<6;++g)o[r+g]=a[g];return t||l(o)},y=function(e){if(!u(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};function m(e,t,n){function r(e,r,o,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=y(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+e.length);if(a.set(r),a.set(e,r.length),(a=n(a))[6]=15&a[6]|t,a[8]=63&a[8]|128,o){i=i||0;for(var u=0;u<16;++u)o[i+u]=a[u];return o}return l(a)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function w(e){return 14+(e+64>>>9<<4)+1}function g(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function b(e,t,n,r,o,i){return g((a=g(g(t,e),g(r,i)))<<(u=o)|a>>>32-u,n);var a,u}function E(e,t,n,r,o,i,a){return b(t&n|~t&r,e,t,o,i,a)}function I(e,t,n,r,o,i,a){return b(t&r|n&~r,e,t,o,i,a)}function T(e,t,n,r,o,i,a){return b(t^n^r,e,t,o,i,a)}function A(e,t,n,r,o,i,a){return b(n^(t|~r),e,t,o,i,a)}const j=m("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,r="0123456789abcdef",o=0;o<n;o+=8){var i=e[o>>5]>>>o%32&255,a=parseInt(r.charAt(i>>>4&15)+r.charAt(15&i),16);t.push(a)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[w(t)-1]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,a=0;a<e.length;a+=16){var u=n,s=r,c=o,l=i;n=E(n,r,o,i,e[a],7,-680876936),i=E(i,n,r,o,e[a+1],12,-389564586),o=E(o,i,n,r,e[a+2],17,606105819),r=E(r,o,i,n,e[a+3],22,-1044525330),n=E(n,r,o,i,e[a+4],7,-176418897),i=E(i,n,r,o,e[a+5],12,1200080426),o=E(o,i,n,r,e[a+6],17,-1473231341),r=E(r,o,i,n,e[a+7],22,-45705983),n=E(n,r,o,i,e[a+8],7,1770035416),i=E(i,n,r,o,e[a+9],12,-1958414417),o=E(o,i,n,r,e[a+10],17,-42063),r=E(r,o,i,n,e[a+11],22,-1990404162),n=E(n,r,o,i,e[a+12],7,1804603682),i=E(i,n,r,o,e[a+13],12,-40341101),o=E(o,i,n,r,e[a+14],17,-1502002290),n=I(n,r=E(r,o,i,n,e[a+15],22,1236535329),o,i,e[a+1],5,-165796510),i=I(i,n,r,o,e[a+6],9,-1069501632),o=I(o,i,n,r,e[a+11],14,643717713),r=I(r,o,i,n,e[a],20,-373897302),n=I(n,r,o,i,e[a+5],5,-701558691),i=I(i,n,r,o,e[a+10],9,38016083),o=I(o,i,n,r,e[a+15],14,-660478335),r=I(r,o,i,n,e[a+4],20,-405537848),n=I(n,r,o,i,e[a+9],5,568446438),i=I(i,n,r,o,e[a+14],9,-1019803690),o=I(o,i,n,r,e[a+3],14,-187363961),r=I(r,o,i,n,e[a+8],20,1163531501),n=I(n,r,o,i,e[a+13],5,-1444681467),i=I(i,n,r,o,e[a+2],9,-51403784),o=I(o,i,n,r,e[a+7],14,1735328473),n=T(n,r=I(r,o,i,n,e[a+12],20,-1926607734),o,i,e[a+5],4,-378558),i=T(i,n,r,o,e[a+8],11,-2022574463),o=T(o,i,n,r,e[a+11],16,1839030562),r=T(r,o,i,n,e[a+14],23,-35309556),n=T(n,r,o,i,e[a+1],4,-1530992060),i=T(i,n,r,o,e[a+4],11,1272893353),o=T(o,i,n,r,e[a+7],16,-155497632),r=T(r,o,i,n,e[a+10],23,-1094730640),n=T(n,r,o,i,e[a+13],4,681279174),i=T(i,n,r,o,e[a],11,-358537222),o=T(o,i,n,r,e[a+3],16,-722521979),r=T(r,o,i,n,e[a+6],23,76029189),n=T(n,r,o,i,e[a+9],4,-640364487),i=T(i,n,r,o,e[a+12],11,-421815835),o=T(o,i,n,r,e[a+15],16,530742520),n=A(n,r=T(r,o,i,n,e[a+2],23,-995338651),o,i,e[a],6,-198630844),i=A(i,n,r,o,e[a+7],10,1126891415),o=A(o,i,n,r,e[a+14],15,-1416354905),r=A(r,o,i,n,e[a+5],21,-57434055),n=A(n,r,o,i,e[a+12],6,1700485571),i=A(i,n,r,o,e[a+3],10,-1894986606),o=A(o,i,n,r,e[a+10],15,-1051523),r=A(r,o,i,n,e[a+1],21,-2054922799),n=A(n,r,o,i,e[a+8],6,1873313359),i=A(i,n,r,o,e[a+15],10,-30611744),o=A(o,i,n,r,e[a+6],15,-1560198380),r=A(r,o,i,n,e[a+13],21,1309151649),n=A(n,r,o,i,e[a+4],6,-145523070),i=A(i,n,r,o,e[a+11],10,-1120210379),o=A(o,i,n,r,e[a+2],15,718787259),r=A(r,o,i,n,e[a+9],21,-343485551),n=g(n,u),r=g(r,s),o=g(o,c),i=g(i,l)}return[n,r,o,i]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(w(t)),r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))})),P=function(e,t,n){var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)};function S(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function U(e,t){return e<<t|e>>>32-t}const O=m("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,a=Math.ceil(i/16),u=new Array(a),s=0;s<a;++s){for(var c=new Uint32Array(16),l=0;l<16;++l)c[l]=e[64*s+4*l]<<24|e[64*s+4*l+1]<<16|e[64*s+4*l+2]<<8|e[64*s+4*l+3];u[s]=c}u[a-1][14]=8*(e.length-1)/Math.pow(2,32),u[a-1][14]=Math.floor(u[a-1][14]),u[a-1][15]=8*(e.length-1)&4294967295;for(var f=0;f<a;++f){for(var p=new Uint32Array(80),d=0;d<16;++d)p[d]=u[f][d];for(var v=16;v<80;++v)p[v]=U(p[v-3]^p[v-8]^p[v-14]^p[v-16],1);for(var h=n[0],y=n[1],m=n[2],w=n[3],g=n[4],b=0;b<80;++b){var E=Math.floor(b/20),I=U(h,5)+S(E,y,m,w)+g+t[E]+p[b]>>>0;g=w,w=m,m=U(y,30)>>>0,y=h,h=I}n[0]=n[0]+h>>>0,n[1]=n[1]+y>>>0,n[2]=n[2]+m>>>0,n[3]=n[3]+w>>>0,n[4]=n[4]+g>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),R="00000000-0000-0000-0000-000000000000",_=function(e){if(!u(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.StorageValueFactory=e.HotwalletApi=void 0;var t=n(289);Object.defineProperty(e,"HotwalletApi",{enumerable:!0,get:function(){return t.HotwalletApi}});var o=n(114);Object.defineProperty(e,"StorageValueFactory",{enumerable:!0,get:function(){return o.StorageValueFactory}})})(),r})()}));