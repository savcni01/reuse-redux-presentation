webpackJsonp([2],{1310:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.notes=void 0;var o=n(278),i=r(o),u=n(1),a=(r(u),n(1317)),c=r(a);e.notes="\n_TODO:_\n* change code\n";e.default=(0,i.default)(c.default,{transition:["fade"],lang:"js",code:n(1366),ranges:[{loc:[5,10],title:"Island Counters"},{loc:[58,65]},{loc:[68,79]},{loc:[79,90]},{loc:[92,99]},{loc:[14,22]},{loc:[60,65]},{loc:[67,75]},{loc:[84,92]},{loc:[77,81]}]})},1316:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!==t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1317:function(t,e,n){"use strict";t.exports=n(1318)},1318:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){return t===e[0]?"start":t===e[1]?"end":null}function c(t,e){return e[0]<=t&&e[1]>t?1:.2}function s(t){return'<span class="token comment">'+g(t+1,3)+".</span> "}var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=n(1),d=n(2),h=n(526),_=h.Slide,v=n(1319),y=n(1320),b=n(1321),m=n(1322),g=n(1323),x=n(1324),w=n(1326),C=n(1327),O=n(1333),E=O(),j=E.backgroundColor||"#122b45",k=E.color||"white",R={position:"relative",textAlign:"center",overflow:"hidden",color:k,height:"646px",margin:0,padding:"40% 0",whiteSpace:"pre-wrap",wordBreak:"break-word"},S=function(t){function e(){var t,n,r,u;o(this,e);for(var a=arguments.length,c=Array(a),s=0;s<a;s++)c[s]=arguments[s];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),r.state={active:r.getStorageItem()||0},r.scrollActiveIntoView=function(t){var e=r.refs,n=e.container,o=e.start,i=e.end,u=w(o,i,n);C(n,0,u,{duration:t?1:1e3})},r.onResize=function(){r.scrollActiveIntoView(!0)},r.onKeyDown=function(t){if(r.isSlideActive()){var e=r.state.active,n=null;38===t.which?n=e-1:40===t.which&&(n=e+1),null!==n&&(t.preventDefault(),n=m(n,0,r.props.ranges.length-1),r.goTo(n))}},r.onStorage=function(t){t.key===r.getStorageId()&&r.goTo(+t.newValue,!0)},u=n,i(r,u)}return u(e,t),f(e,[{key:"componentWillMount",value:function(){this.updateNotes()}},{key:"componentDidMount",value:function(){var t=this;document.addEventListener("keydown",this.onKeyDown),window.addEventListener("storage",this.onStorage),window.addEventListener("resize",this.onResize),this.scrollActiveIntoView(!0),requestAnimationFrame(function(){t.scrollActiveIntoView(!0)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("storage",this.onStorage),window.removeEventListener("resize",this.onResize)}},{key:"componentWillEnter",value:function(t){this.refs.slide.componentWillEnter(t)}},{key:"componentWillAppear",value:function(t){this.refs.slide.componentWillAppear(t)}},{key:"componentWillLeave",value:function(t){this.refs.slide.componentWillLeave(t)}},{key:"getStorageId",value:function(){return"code-slide:"+this.props.slideIndex}},{key:"getStorageItem",value:function(){return+localStorage.getItem(this.getStorageId())}},{key:"setStorageItem",value:function(t){return localStorage.setItem(this.getStorageId(),""+t)}},{key:"isSlideActive",value:function(){var t=this.context.store.getState().route.slide;return this.props.slideIndex===parseInt(t)}},{key:"goTo",value:function(t,e){this.setState({active:t},this.scrollActiveIntoView),this.updateNotes(),e||this.setStorageItem(t)}},{key:"updateNotes",value:function(){if(this.isSlideActive()&&this.context.updateNotes){var t=this.props,e=t.ranges,n=t.notes,r=this.state.active,o=e[r]||{},i=o.notes;this.context.updateNotes(i||n)}}},{key:"render",value:function(){var t=this.props,e=t.code,n=t.lang,o=t.ranges,i=t.color,u=t.bgColor,f=(t.notes,t.showLineNumbers),d=r(t,["code","lang","ranges","color","bgColor","notes","showLineNumbers"]),h=this.state.active,m=o[h]||{},g=m.loc||[],w=u||j,C=l({},R,{color:i||R.color}),O=x(e,n).map(function(t,e){return p.createElement("div",{key:e,ref:a(e,g),dangerouslySetInnerHTML:{__html:f?s(e)+t:t},style:{opacity:c(e,g)}})});return p.createElement(_,l({ref:"slide",bgColor:w,margin:1},d),m.title&&p.createElement(v,null,m.title),p.createElement("pre",{ref:"container",style:C},p.createElement("code",{style:{display:"inline-block",textAlign:"left"}},O)),m.note&&p.createElement(y,null,m.note),m.image&&p.createElement(b,{src:m.image}))}}]),e}(p.Component);S.propTypes={lang:d.string.isRequired,code:d.string.isRequired,ranges:d.arrayOf(d.shape({loc:d.arrayOf(d.number).isRequired,title:d.oneOfType([d.element,d.string]),note:d.oneOfType([d.element,d.string])})),showLineNumbers:d.bool},S.defaultProps={showLineNumbers:!0},S.contextTypes={store:d.object.isRequired,updateNotes:d.func},t.exports=S},1319:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),c={position:"fixed",left:"50%",top:"20px",transform:"translate(-50%)",padding:"20px 40px",border:"10px solid hotpink",fontSize:"2.5em",color:"white",whiteSpace:"nowrap"},s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),u(e,[{key:"render",value:function(){return a.createElement("h1",{style:c},this.props.children)}}]),e}(a.Component);t.exports=s},1320:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),c={position:"fixed",bottom:"20px",width:"100%",padding:"20px",background:"black",color:"white",fontFamily:"monospace",textAlign:"left"},s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),u(e,[{key:"render",value:function(){return a.createElement("div",{style:c},this.props.children)}}]),e}(a.Component);t.exports=s},1321:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),c=n(526),s=c.Image,l={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},f=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),u(e,[{key:"render",value:function(){return a.createElement(s,{src:this.props.src,style:l})}}]),e}(a.Component);t.exports=f},1322:function(t,e){function n(t,e,n){return t===t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function o(t){return!!t&&"object"==typeof t}function i(t){return"symbol"==typeof t||o(t)&&v.call(t)==s}function u(t){if("number"==typeof t)return t;if(i(t))return c;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=p.test(t);return n||d.test(t)?h(t.slice(2),n?2:8):f.test(t)?c:+t}function a(t,e,r){return void 0===r&&(r=e,e=void 0),void 0!==r&&(r=u(r),r=r===r?r:0),void 0!==e&&(e=u(e),e=e===e?e:0),n(u(t),e,r)}var c=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt,_=Object.prototype,v=_.toString;t.exports=a},1323:function(t,e,n){(function(e){function n(t){return t.split("")}function r(t){return $.test(t)}function o(t){return r(t)?u(t):z(t)}function i(t){return r(t)?a(t):n(t)}function u(t){for(var e=L.lastIndex=0;L.test(t);)e++;return e}function a(t){return t.match(L)||[]}function c(t,e){var n="";if(!t||e<1||e>w)return n;do{e%2&&(n+=t),(e=X(e/2))&&(t+=t)}while(e);return n}function s(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),n=n>o?o:n,n<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i}function l(t){if("string"==typeof t)return t;if(_(t))return J?J.call(t):"";var e=t+"";return"0"==e&&1/t==-x?"-0":e}function f(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:s(t,e,n)}function p(t,e){e=void 0===e?" ":l(e);var n=e.length;if(n<2)return n?c(e,t):e;var u=c(e,K(t/o(e)));return r(e)?f(i(u),0,t).join(""):u.slice(0,t)}function d(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){return!!t&&"object"==typeof t}function _(t){return"symbol"==typeof t||h(t)&&V.call(t)==E}function v(t){if(!t)return 0===t?t:0;if((t=b(t))===x||t===-x){return(t<0?-1:1)*C}return t===t?t:0}function y(t){var e=v(t),n=e%1;return e===e?n?e-n:e:0}function b(t){if("number"==typeof t)return t;if(_(t))return O;if(d(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=d(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(j,"");var n=R.test(t);return n||S.test(t)?Q(t.slice(2),n?2:8):k.test(t)?O:+t}function m(t){return null==t?"":l(t)}function g(t,e,n){t=m(t),e=y(e);var r=e?o(t):0;return e&&r<e?p(e-r,n)+t:t}var x=1/0,w=9007199254740991,C=1.7976931348623157e308,O=NaN,E="[object Symbol]",j=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,S=/^0o[0-7]+$/i,T="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",M="\\ud83c[\\udffb-\\udfff]",I="(?:\\ud83c[\\udde6-\\uddff]){2}",P="[\\ud800-\\udbff][\\udc00-\\udfff]",N="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",q="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",I,P].join("|")+")[\\ufe0e\\ufe0f]?"+N+")*",A="[\\ufe0e\\ufe0f]?"+N+q,D="(?:"+["[^\\ud800-\\udfff]"+T+"?",T,I,P,"[\\ud800-\\udfff]"].join("|")+")",L=RegExp(M+"(?="+M+")|"+D+A,"g"),$=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),Q=parseInt,B="object"==typeof e&&e&&e.Object===Object&&e,F="object"==typeof self&&self&&self.Object===Object&&self,U=B||F||Function("return this")(),z=function(t){return function(e){return null==e?void 0:e[t]}}("length"),W=Object.prototype,V=W.toString,H=U.Symbol,K=Math.ceil,X=Math.floor,G=H?H.prototype:void 0,J=G?G.toString:void 0;t.exports=g}).call(e,n(27))},1324:function(t,e,n){"use strict";function r(t,e){return window.Prism?window.Prism.highlight(t,window.Prism.languages[e]):t}function o(t,e){return r(t,e).split("\n")}var i=n(1325);t.exports=i(o)},1325:function(t,e,n){(function(e){function n(t,e){return null==t?void 0:t[e]}function r(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function o(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function i(){this.__data__=Z?Z(null):{}}function u(t){return this.has(t)&&delete this.__data__[t]}function a(t){var e=this.__data__;if(Z){var n=e[t];return n===N?void 0:n}return K.call(e,t)?e[t]:void 0}function c(t){var e=this.__data__;return Z?void 0!==e[t]:K.call(e,t)}function s(t,e){return this.__data__[t]=Z&&void 0===e?N:e,this}function l(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function f(){this.__data__=[]}function p(t){var e=this.__data__,n=w(e,t);return!(n<0)&&(n==e.length-1?e.pop():J.call(e,n,1),!0)}function d(t){var e=this.__data__,n=w(e,t);return n<0?void 0:e[n][1]}function h(t){return w(this.__data__,t)>-1}function _(t,e){var n=this.__data__,r=w(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function v(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function y(){this.__data__={hash:new o,map:new(Y||l),string:new o}}function b(t){return O(this,t).delete(t)}function m(t){return O(this,t).get(t)}function g(t){return O(this,t).has(t)}function x(t,e){return O(this,t).set(t,e),this}function w(t,e){for(var n=t.length;n--;)if(T(t[n][0],e))return n;return-1}function C(t){return!(!I(t)||k(t))&&(M(t)||r(t)?G:L).test(R(t))}function O(t,e){var n=t.__data__;return j(e)?n["string"==typeof e?"string":"hash"]:n.map}function E(t,e){var r=n(t,e);return C(r)?r:void 0}function j(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function k(t){return!!V&&V in t}function R(t){if(null!=t){try{return H.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function S(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(P);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,r);return n.cache=i.set(o,u),u};return n.cache=new(S.Cache||v),n}function T(t,e){return t===e||t!==t&&e!==e}function M(t){var e=I(t)?X.call(t):"";return e==q||e==A}function I(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var P="Expected a function",N="__lodash_hash_undefined__",q="[object Function]",A="[object GeneratorFunction]",D=/[\\^$.*+?()[\]{}|]/g,L=/^\[object .+?Constructor\]$/,$="object"==typeof e&&e&&e.Object===Object&&e,Q="object"==typeof self&&self&&self.Object===Object&&self,B=$||Q||Function("return this")(),F=Array.prototype,U=Function.prototype,z=Object.prototype,W=B["__core-js_shared__"],V=function(){var t=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),H=U.toString,K=z.hasOwnProperty,X=z.toString,G=RegExp("^"+H.call(K).replace(D,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=F.splice,Y=E(B,"Map"),Z=E(Object,"create");o.prototype.clear=i,o.prototype.delete=u,o.prototype.get=a,o.prototype.has=c,o.prototype.set=s,l.prototype.clear=f,l.prototype.delete=p,l.prototype.get=d,l.prototype.has=h,l.prototype.set=_,v.prototype.clear=y,v.prototype.delete=b,v.prototype.get=m,v.prototype.has=g,v.prototype.set=x,S.Cache=v,t.exports=S}).call(e,n(27))},1326:function(t,e,n){"use strict";function r(t,e,n){if(t){e=e||t;var r=t.offsetTop,o=e.offsetTop+e.offsetHeight;return Math.floor((r+o)/2)-n.offsetHeight/2}}t.exports=r},1327:function(t,e,n){"use strict";function r(t){return{top:t.scrollTop,left:t.scrollLeft}}function o(t,e,n,o){function a(){u(a),s.update()}o=o||{};var c=r(t),s=i(c).ease(o.ease||"out-circ").to({top:n,left:e}).duration(o.duration||1e3);return s.update(function(e){t.scrollTop=0|e.top,t.scrollLeft=0|e.left}),s.on("end",function(){a=function(){}}),a(),s}var i=n(1328),u=n(1332);t.exports=o},1328:function(t,e,n){function r(t){if(!(this instanceof r))return new r(t);this._from=t,this.ease("linear"),this.duration(500)}var o=n(1329),i=n(1330),u=n(1316),a=n(1331);t.exports=r,o(r.prototype),r.prototype.reset=function(){return this.isArray="array"===u(this._from),this._curr=i(this._from),this._done=!1,this._start=Date.now(),this},r.prototype.to=function(t){return this.reset(),this._to=t,this},r.prototype.duration=function(t){return this._duration=t,this},r.prototype.ease=function(t){if(!(t="function"==typeof t?t:a[t]))throw new TypeError("invalid easing function");return this._ease=t,this},r.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},r.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,r=this._to,o=this._curr,i=this._ease,u=(e-this._start)/t,a=i(u);if(this.isArray){for(var c=0;c<n.length;++c)o[c]=n[c]+(r[c]-n[c])*a;return this._update(o),this}for(var s in n)o[s]=n[s]+(r[s]-n[s])*a;return this._update(o),this}},r.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1329:function(t,e){function n(t){if(t)return r(t)}function r(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if((r=n[o])===e||r.fn===e){n.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1330:function(t,e,n){function r(t){switch(o(t)){case"object":var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=r(t[n]));return e;case"array":for(var e=new Array(t.length),i=0,u=t.length;i<u;i++)e[i]=r(t[i]);return e;case"regexp":var a="";return a+=t.multiline?"m":"",a+=t.global?"g":"",a+=t.ignoreCase?"i":"",new RegExp(t.source,a);case"date":return new Date(t.getTime());default:return t}}var o;try{o=n(1316)}catch(t){o=n(1316)}t.exports=r},1331:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return t*=2,t<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return t*=2,t<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return t*=2,t<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return t*=2,t<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return t*=2,t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1332:function(t,e){function n(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-r)),o=setTimeout(t,n);return r=e,o}e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var r=(new Date).getTime(),o=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){o.call(window,t)}},1333:function(t,e,n){"use strict";function r(){if(!o){var t=document.createElement("code");t.style.display="none",t.className="language-xxx",document.body.appendChild(t),o=window.getComputedStyle(t)}return o}var o;t.exports=r},1366:function(t,e){t.exports='"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.IslandCounters = exports.CounterContainer = exports.combinedReducer = exports.initialState = exports.createStoreEnhanced = undefined;\n\nvar _extends2 = require("babel-runtime/helpers/extends");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _jsx2 = require("babel-runtime/helpers/jsx");\n\nvar _jsx3 = _interopRequireDefault(_jsx2);\n\nvar _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = require("babel-runtime/helpers/inherits");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _class, _temp2, _actionsMap; /* eslint-disable no-invalid-this,no-console,dot-notation */\n\n\nvar _react = require("react");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = require("prop-types");\n\nvar _redux = require("redux");\n\nvar _reactRedux = require("react-redux");\n\nvar _reactReduxIsland = require("react-redux-island");\n\nvar _reduxLogger = require("redux-logger");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// enhance createStore for logger/debugger and\nvar createStoreEnhanced = exports.createStoreEnhanced = function createStoreEnhanced(rootReducer, initialState) {\n  var reduxDevtoolsExtCompose = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];\n  if (typeof reduxDevtoolsExtCompose === "function") {\n    return (0, _redux.createStore)(rootReducer, initialState, reduxDevtoolsExtCompose((0, _redux.applyMiddleware)(_reduxLogger.logger)));\n  }\n  return (0, _redux.createStore)(rootReducer, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxLogger.logger)));\n};\n\nvar Counter = (_temp2 = _class = function (_React$Component) {\n  (0, _inherits3.default)(Counter, _React$Component);\n\n  function Counter() {\n    var _temp, _this, _ret;\n\n    (0, _classCallCheck3.default)(this, Counter);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handlePlus = function () {\n      _this.props.increment();\n    }, _this.handleMinus = function () {\n      _this.props.decrement();\n    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);\n  }\n\n  Counter.prototype.render = function render() {\n    return (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)("h2", {}, void 0, this.props.count), (0, _jsx3.default)("fieldset", {}, void 0, (0, _jsx3.default)("button", {\n      onClick: this.handlePlus\n    }, void 0, "+"), (0, _jsx3.default)("button", {\n      onClick: this.handleMinus\n    }, void 0, "-")));\n  };\n\n  return Counter;\n}(_react2.default.Component), _class.defaultProps = {\n  count: 0\n}, _temp2);\n\n//\n//\n// ISLAND CONTAINER\n\nvar initialState = exports.initialState = {\n  top: { count: 3 },\n  my: {\n    custom: {\n      bottomCounter: { count: 6 }\n    }\n  }\n};\n\n// action type\nvar COUNTER_INCREMENT = "COUNTER_INCREMENT";\nvar COUNTER_DECREMENT = "COUNTER_DECREMENT";\n\n// action creators\nvar incrementCounter = function incrementCounter() {\n  return {\n    type: COUNTER_INCREMENT\n  };\n};\n\nvar decrementCounter = function decrementCounter() {\n  return {\n    type: COUNTER_DECREMENT\n  };\n};\n\n// counter reducer\nvar actionsMap = (_actionsMap = {}, _actionsMap[COUNTER_INCREMENT] = function (state) {\n  return (0, _extends3.default)({}, state, {\n    count: state.count + 1\n  });\n}, _actionsMap[COUNTER_DECREMENT] = function (state) {\n  return (0, _extends3.default)({}, state, {\n    count: state.count - 1\n  });\n}, _actionsMap);\nvar reducer = (0, _reactReduxIsland.makeReducer)({ actionsMap: actionsMap, initialState: initialState });\n\n// combined reducer\nvar combinedReducer = exports.combinedReducer = (0, _redux.combineReducers)({\n  top: (0, _reactReduxIsland.isolateReducer)(["top"], reducer),\n  my: (0, _redux.combineReducers)({\n    custom: (0, _redux.combineReducers)({\n      bottomCounter: (0, _reactReduxIsland.isolateReducer)(["bottom"], reducer)\n    })\n  })\n});\n\n// island store\nvar store = createStoreEnhanced(combinedReducer, initialState);\n\n// island state amd dispatch mapping\nvar mapStateToProps = function mapStateToProps(slicedState, props, state) {\n  return slicedState;\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    increment: (0, _redux.bindActionCreators)(incrementCounter, dispatch),\n    decrement: (0, _redux.bindActionCreators)(decrementCounter, dispatch)\n  };\n};\n\n// create isolated Container\nvar CounterContainer = exports.CounterContainer = (0, _reactReduxIsland.islandedConnect)(mapStateToProps, mapDispatchToProps)(Counter);\n\n// island containers app\nvar IslandCounters = exports.IslandCounters = function IslandCounters() {\n  return (0, _jsx3.default)(_reactRedux.Provider, {\n    store: store\n  }, void 0, (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(CounterContainer, {\n    isolateId: "top",\n    selector: function selector(state) {\n      return state.top;\n    }\n  }), (0, _jsx3.default)(CounterContainer, {\n    isolateId: "bottom",\n    selector: function selector(state) {\n      return state.my.custom.bottomCounter;\n    }\n  })));\n};'}});