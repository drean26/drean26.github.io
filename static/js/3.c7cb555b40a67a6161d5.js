webpackJsonp([3],{"/+A0":function(t,e,n){t.exports=n.p+"static/img/1-1610011631540-L.50b48c8.png"},"21It":function(t,e,n){"use strict";var r=n("FtD3");t.exports=function(t,e,n){var o=n.config.validateStatus;!o||o(n.status)?t(n):e(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"5VQ+":function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},"7GwW":function(t,e,n){"use strict";var r=n("cGG2"),o=n("21It"),s=n("DQCr"),i=n("oJlt"),a=n("GHBc"),c=n("FtD3");t.exports=function(t){return new Promise(function(e,u){var f=t.data,l=t.headers;r.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var d=t.auth.username||"",h=t.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:t,request:p};o(e,u,r),p=null}},p.onabort=function(){p&&(u(c("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){u(c("Network Error",t,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var m=n("p1b6"),v=(t.withCredentials||a(t.url))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;v&&(l[t.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(l,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete l[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),u(t),p=null)}),void 0===f&&(f=null),p.send(f)})}},"9hFn":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("SRa8"),o=n("mtWM"),s=n.n(o),i={data:function(){return{pcCaseList:[{imgUrl:n("Mq+s"),caseName:"厦门国际动漫节官网",caseText:"厦门国际动漫节金海豚动画作品大赛是一项由政府、业界、学界支持的中国动画界最权威、影响面最广的赛事之一。通过中外动画作品交流评比，挖掘国内优秀动画作品和人才，促进中...",caseTitle:"厦门国际动漫节官网",caseBtn:"查看站点"},{imgUrl:n("/+A0"),caseName:"益才猎头ECHR-官方网站",caseText:"益才猎头（ECHR）是一家专业的招聘整体解决方案供应商。致力于研究和提供定制性人力资本解决方案，在高端人才寻聘、招聘流程外包及行业调查服务等方面，为客户提供优质服务...",caseTitle:"益才猎头ECHR-官方网站",caseBtn:"查看站点"},{imgUrl:n("IypG"),caseName:"非凡品位网站",caseText:"We have been committed to the development of high-end watches, when a product is repeatedly to overturn to overthrow again, keep the design of the polishing until (till) the final finished product shipments it is no longer a simple product,...",caseTitle:"非凡品位网站",caseBtn:"查看站点"},{imgUrl:n("Mq+s"),caseName:"世界之钻官网",caseText:"世界之钻品牌一直坚持不懈，为成为全球认知的品牌所奋斗。作为知名奢侈品牌，集团致力为全球顾客提供优秀饰品，以进一步确立其国际市场上声望。源自「真挚  品质」历久不变...",caseTitle:"世界之钻官网",caseBtn:"查看站点"},{imgUrl:n("sliz"),caseName:"潮连旅游网",caseText:"潮连旅游网----江门地区首个乡村旅游特色网站门户。主要介绍了潮连旅游文化、餐饮美食、特色祠堂、潮连景点、交通线路、新闻资讯、商家推广等。...",caseTitle:"潮连旅游网",caseBtn:"查看站点"}],bootCaseList:[{imgUrl:n("aXcr"),caseName:"印象摄影",caseText:"印象摄影有限公司属于中国高端旅游婚纱摄影，专注于新人婚纱摄影服务，成立于2010年。自成立以来，一直秉承品质优先 服务至上的品牌理念及一切以人为本，以客为尊的服务理念，不...",caseTitle:"印象摄影",caseBtn:"查看站点"}],govCaseList:[{imgUrl:n("IypG"),caseName:"非凡品位网站",caseText:"We have been committed to the development of high-end watches, when a product is repeatedly to overturn to overthrow again, keep the design of the polishing until (till) the final finished product shipments it is no longer a simple product,...",caseTitle:"非凡品位网站",caseBtn:"查看站点"},{imgUrl:n("Mq+s"),caseName:"世界之钻官网",caseText:"世界之钻品牌一直坚持不懈，为成为全球认知的品牌所奋斗。作为知名奢侈品牌，集团致力为全球顾客提供优秀饰品，以进一步确立其国际市场上声望。源自「真挚  品质」历久不变...",caseTitle:"世界之钻官网",caseBtn:"查看站点"}],allText:{bannerTitle:"软中科是专业信息技术解决方案的提供商",bannerText:"专注于数据中心建设、高性能计算系统、存储系统、网络系统集成、云计算系统、网络视频会议系统"},titlelist:[],diffType:0,datatitle:[],allsect:[]}},computed:{customCaseList:function(){if(console.log(this.datatitle,"pppp123"),this.datatitle.length>0)var t=this.allsect[this.datatitle[this.diffType].name];return t}},components:{"other-carousel":r.a},created:function(){var t=this;s.a.get("http://www.rzkchina.com/newdata/newtilesect.json").then(function(e){console.log(e),t.allsect=e.data}).catch(function(t){console.log(t)}),s.a.get("http://www.rzkchina.com/newdata/title.json").then(function(e){console.log(e),t.datatitle=e.data,t.titlelist=t.datatitle}).catch(function(t){console.log(t)}),console.log("123123",this.datatitle,this.allsect)},methods:{diffCase:function(t){this.diffType=t}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"rowFluid"},[n("div",{staticClass:"span12"},[n("div",{staticClass:"main"},[n("other-carousel",{attrs:{content:t.allText}}),t._v(" "),n("div",{staticClass:"support_type"},[n("div",{staticClass:"rowFluid"},[n("div",{staticClass:"span12"},[n("div",{staticClass:"container"},[n("div",{staticClass:"support_type_content"},t._l(t.titlelist,function(e,r){return n("div",{key:r,staticClass:"span2 col-xs-4"},[n("a",{staticClass:"support_type_list normal",class:{active:t.diffType==r},attrs:{title:e.name},on:{click:function(e){e.preventDefault(),t.diffCase(r)}}},[t._v(t._s(e.name))])])}),0)])]),t._v(" "),n("div",{staticClass:"case_show"},[n("div",{staticClass:"rowFluid"},[n("div",{staticClass:"span12"},[n("div",{staticClass:"container"},[n("div",{staticClass:"case_show_content"},t._l(t.customCaseList,function(e,r){return n("div",{key:r,staticClass:"case_show_list wow fadeInUp"},[n("div",{staticClass:"span7 col-xm-6 col-sm-12"},[n("div",{staticClass:"case_show_pic"},[n("img",{attrs:{src:e.imgUrl,alt:e.caseName}})])]),t._v(" "),n("div",{staticClass:"span5 col-xm-6 col-sm-12"},[n("div",{staticClass:"case_show_brief"},[n("h3",{staticClass:"case_show_brief_title"},[n("span"),t._v(t._s(e.caseName)+"\n                            ")]),t._v(" "),n("div",{staticClass:"case_show_brief_text"},[n("p",[t._v(t._s(e.caseText))])]),t._v(" "),n("div",{staticClass:"case_show_brief_button"})])])])}),0),t._v(" "),t._m(0)])])])])])])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"know_more wow fadeInUp"},[e("a",{staticClass:"all_button",attrs:{target:"_blank",href:"http://wpa.qq.com/msgrd?v=3&uin=3294345656&site=qq&menu=yes"}},[this._v("立即咨询")])])}]};var c=n("VU/8")(i,a,!1,function(t){n("rUnQ")},"data-v-3416874d",null);e.default=c.exports},DQCr:function(t,e,n){"use strict";var r=n("cGG2");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(r.isURLSearchParams(e))s=e.toString();else{var i=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))}))}),s=i.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},DUeU:function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e){e=e||{};var n={};return r.forEach(["url","method","params","data"],function(t){void 0!==e[t]&&(n[t]=e[t])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(e[o])?n[o]=r.deepMerge(t[o],e[o]):void 0!==e[o]?n[o]=e[o]:r.isObject(t[o])?n[o]=r.deepMerge(t[o]):void 0!==t[o]&&(n[o]=t[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])}),n}},FtD3:function(t,e,n){"use strict";var r=n("t8qj");t.exports=function(t,e,n,o,s){var i=new Error(t);return r(i,e,n,o,s)}},GHBc:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},IypG:function(t,e,n){t.exports=n.p+"static/img/1-1610011631240-L.b241981.png"},"JP+z":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},KCLY:function(t,e,n){"use strict";(function(e){var r=n("cGG2"),o=n("5VQ+"),s={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,c={adapter:(void 0!==e&&"[object process]"===Object.prototype.toString.call(e)?a=n("7GwW"):"undefined"!=typeof XMLHttpRequest&&(a=n("7GwW")),a),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){c.headers[t]={}}),r.forEach(["post","put","patch"],function(t){c.headers[t]=r.merge(s)}),t.exports=c}).call(e,n("W2nU"))},"Mq+s":function(t,e,n){t.exports=n.p+"static/img/1-1610011632240-L.dd498cc.png"},Re3r:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},TNV1:function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},W2nU:function(t,e){var n,r,o=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var c,u=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&d())}function d(){if(!f){var t=a(p);f=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||f||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},XmWM:function(t,e,n){"use strict";var r=n("cGG2"),o=n("DQCr"),s=n("fuGk"),i=n("xLtR"),a=n("DUeU");function c(t){this.defaults=t,this.interceptors={request:new s,response:new s}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=a(this.defaults,t)).method=t.method?t.method.toLowerCase():"get";var e=[i,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=a(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(t){c.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}}),r.forEach(["post","put","patch"],function(t){c.prototype[t]=function(e,n,o){return this.request(r.merge(o||{},{method:t,url:e,data:n}))}}),t.exports=c},aXcr:function(t,e,n){t.exports=n.p+"static/img/1-1610011631020-L.067a02b.png"},cGG2:function(t,e,n){"use strict";var r=n("JP+z"),o=n("Re3r"),s=Object.prototype.toString;function i(t){return"[object Array]"===s.call(t)}function a(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===s.call(t)}function u(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===s.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===s.call(t)},isFile:function(t){return"[object File]"===s.call(t)},isBlob:function(t){return"[object Blob]"===s.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return e},deepMerge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]="object"==typeof n?t({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return e},extend:function(t,e,n){return u(e,function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},cWxy:function(t,e,n){"use strict";var r=n("dVOP");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},dIwP:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},fuGk:function(t,e,n){"use strict";var r=n("cGG2");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},mtWM:function(t,e,n){t.exports=n("tIFN")},oJlt:function(t,e,n){"use strict";var r=n("cGG2"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,i={};return t?(r.forEach(t.split("\n"),function(t){if(s=t.indexOf(":"),e=r.trim(t.substr(0,s)).toLowerCase(),n=r.trim(t.substr(s+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}}),i):i}},p1b6:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,s,i){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},rUnQ:function(t,e){},sliz:function(t,e,n){t.exports=n.p+"static/img/1-161001153Z50-L.c5164b8.png"},t8qj:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},tIFN:function(t,e,n){"use strict";var r=n("cGG2"),o=n("JP+z"),s=n("XmWM"),i=n("DUeU");function a(t){var e=new s(t),n=o(s.prototype.request,e);return r.extend(n,s.prototype,e),r.extend(n,e),n}var c=a(n("KCLY"));c.Axios=s,c.create=function(t){return a(i(c.defaults,t))},c.Cancel=n("dVOP"),c.CancelToken=n("cWxy"),c.isCancel=n("pBtG"),c.all=function(t){return Promise.all(t)},c.spread=n("pxG4"),t.exports=c,t.exports.default=c},xLtR:function(t,e,n){"use strict";var r=n("cGG2"),o=n("TNV1"),s=n("pBtG"),i=n("KCLY"),a=n("dIwP"),c=n("qRfI");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||i.adapter)(t).then(function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}});
//# sourceMappingURL=3.c7cb555b40a67a6161d5.js.map