webpackJsonp([5],{1332:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.notes=void 0;var r=n(279),i=o(r),u=n(1),a=(o(u),n(1349)),c=o(a);e.notes="\n* Bo nenase liftor ze bug\n\n* Meshanim kcat mivne shel State (ze lyo kriti, rak 6e ihie yoter noah)\n\n* Osim Store, aval meshtamshim combinedReducer (nire youter meuhar ma ze)\n\n* Presentational Component ze oto component, ein shum shenuim\n\n* Aval at App Components meshtamshim 6nej Containers shonim\nle-TOP ve le-BOTTOM counters \n\n* Ze Containers, ve efshar lirot she mapping funkciot gam sonim\nle-TOP ve le-BOTTOM counters \n\n* Clomar be col shlav anahnu pashut meshahpelim code\ngame be mapStateToProps esh le Top ve le Bottom\n\n* Oto davar le mapDispatchToProps\n\n* Ve ahshav bo nestakel le combinedReducer,\nroim she gam por anahnu crihim shnei reducereim, \nehad le-top,\nve ehad le-bottom,\nkaha hem nirim\n";e.default=(0,i.default)(c.default,{transition:["fade"],lang:"js",code:n(1408),ranges:[{loc:[8,12],title:"Fixed Counters Example"},{loc:[56,57]},{loc:[80,89]},{loc:[132,139]},{loc:[121,130]},{loc:[94,101]},{loc:[103,110]},{loc:[112,119]},{loc:[50,53]},{loc:[14,25]}]})},1348:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!==t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1349:function(t,e,n){"use strict";t.exports=n(1350)},1350:function(t,e,n){"use strict";function o(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){return t===e[0]?"start":t===e[1]?"end":null}function c(t,e){return e[0]<=t&&e[1]>t?1:.2}function s(t){return'<span class="token comment">'+g(t+1,3)+".</span> "}var f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},p=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(1),h=n(2),d=n(525),m=d.Slide,y=n(1351),v=n(1352),b=n(1353),_=n(1354),g=n(1355),w=n(1356),O=n(1358),T=n(1359),E=n(1365),x=E(),C=x.backgroundColor||"#122b45",k=x.color||"white",j={position:"relative",textAlign:"center",overflow:"hidden",color:k,height:"646px",margin:0,padding:"40% 0",whiteSpace:"pre-wrap",wordBreak:"break-word"},S=function(t){function e(){var t,n,o,u;r(this,e);for(var a=arguments.length,c=Array(a),s=0;s<a;s++)c[s]=arguments[s];return n=o=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),o.state={active:o.getStorageItem()||0},o.scrollActiveIntoView=function(t){var e=o.refs,n=e.container,r=e.start,i=e.end,u=O(r,i,n);T(n,0,u,{duration:t?1:1e3})},o.onResize=function(){o.scrollActiveIntoView(!0)},o.onKeyDown=function(t){if(o.isSlideActive()){var e=o.state.active,n=null;38===t.which?n=e-1:40===t.which&&(n=e+1),null!==n&&(t.preventDefault(),n=_(n,0,o.props.ranges.length-1),o.goTo(n))}},o.onStorage=function(t){t.key===o.getStorageId()&&o.goTo(+t.newValue,!0)},u=n,i(o,u)}return u(e,t),p(e,[{key:"componentWillMount",value:function(){this.updateNotes()}},{key:"componentDidMount",value:function(){var t=this;document.addEventListener("keydown",this.onKeyDown),window.addEventListener("storage",this.onStorage),window.addEventListener("resize",this.onResize),this.scrollActiveIntoView(!0),requestAnimationFrame(function(){t.scrollActiveIntoView(!0)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("storage",this.onStorage),window.removeEventListener("resize",this.onResize)}},{key:"componentWillEnter",value:function(t){this.refs.slide.componentWillEnter(t)}},{key:"componentWillAppear",value:function(t){this.refs.slide.componentWillAppear(t)}},{key:"componentWillLeave",value:function(t){this.refs.slide.componentWillLeave(t)}},{key:"getStorageId",value:function(){return"code-slide:"+this.props.slideIndex}},{key:"getStorageItem",value:function(){return+localStorage.getItem(this.getStorageId())}},{key:"setStorageItem",value:function(t){return localStorage.setItem(this.getStorageId(),""+t)}},{key:"isSlideActive",value:function(){var t=this.context.store.getState().route.slide;return this.props.slideIndex===parseInt(t)}},{key:"goTo",value:function(t,e){this.setState({active:t},this.scrollActiveIntoView),this.updateNotes(),e||this.setStorageItem(t)}},{key:"updateNotes",value:function(){if(this.isSlideActive()&&this.context.updateNotes){var t=this.props,e=t.ranges,n=t.notes,o=this.state.active,r=e[o]||{},i=r.notes;this.context.updateNotes(i||n)}}},{key:"render",value:function(){var t=this.props,e=t.code,n=t.lang,r=t.ranges,i=t.color,u=t.bgColor,p=(t.notes,t.showLineNumbers),h=o(t,["code","lang","ranges","color","bgColor","notes","showLineNumbers"]),d=this.state.active,_=r[d]||{},g=_.loc||[],O=u||C,T=f({},j,{color:i||j.color}),E=w(e,n).map(function(t,e){return l.createElement("div",{key:e,ref:a(e,g),dangerouslySetInnerHTML:{__html:p?s(e)+t:t},style:{opacity:c(e,g)}})});return l.createElement(m,f({ref:"slide",bgColor:O,margin:1},h),_.title&&l.createElement(y,null,_.title),l.createElement("pre",{ref:"container",style:T},l.createElement("code",{style:{display:"inline-block",textAlign:"left"}},E)),_.note&&l.createElement(v,null,_.note),_.image&&l.createElement(b,{src:_.image}))}}]),e}(l.Component);S.propTypes={lang:h.string.isRequired,code:h.string.isRequired,ranges:h.arrayOf(h.shape({loc:h.arrayOf(h.number).isRequired,title:h.oneOfType([h.element,h.string]),note:h.oneOfType([h.element,h.string])})),showLineNumbers:h.bool},S.defaultProps={showLineNumbers:!0},S.contextTypes={store:h.object.isRequired,updateNotes:h.func},t.exports=S},1351:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(1),c={position:"fixed",left:"50%",top:"20px",transform:"translate(-50%)",padding:"20px 40px",border:"10px solid hotpink",fontSize:"2.5em",color:"white",whiteSpace:"nowrap"},s=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),u(e,[{key:"render",value:function(){return a.createElement("h1",{style:c},this.props.children)}}]),e}(a.Component);t.exports=s},1352:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(1),c={position:"fixed",bottom:"20px",width:"100%",padding:"20px",background:"black",color:"white",fontFamily:"monospace",textAlign:"left"},s=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),u(e,[{key:"render",value:function(){return a.createElement("div",{style:c},this.props.children)}}]),e}(a.Component);t.exports=s},1353:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(1),c=n(525),s=c.Image,f={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},p=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),u(e,[{key:"render",value:function(){return a.createElement(s,{src:this.props.src,style:f})}}]),e}(a.Component);t.exports=p},1354:function(t,e){function n(t,e,n){return t===t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function r(t){return!!t&&"object"==typeof t}function i(t){return"symbol"==typeof t||r(t)&&y.call(t)==s}function u(t){if("number"==typeof t)return t;if(i(t))return c;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=l.test(t);return n||h.test(t)?d(t.slice(2),n?2:8):p.test(t)?c:+t}function a(t,e,o){return void 0===o&&(o=e,e=void 0),void 0!==o&&(o=u(o),o=o===o?o:0),void 0!==e&&(e=u(e),e=e===e?e:0),n(u(t),e,o)}var c=NaN,s="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,h=/^0o[0-7]+$/i,d=parseInt,m=Object.prototype,y=m.toString;t.exports=a},1355:function(t,e,n){(function(e){function n(t){return t.split("")}function o(t){return D.test(t)}function r(t){return o(t)?u(t):U(t)}function i(t){return o(t)?a(t):n(t)}function u(t){for(var e=q.lastIndex=0;q.test(t);)e++;return e}function a(t){return t.match(q)||[]}function c(t,e){var n="";if(!t||e<1||e>O)return n;do{e%2&&(n+=t),(e=G(e/2))&&(t+=t)}while(e);return n}function s(t,e,n){var o=-1,r=t.length;e<0&&(e=-e>r?0:r+e),n=n>r?r:n,n<0&&(n+=r),r=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(r);++o<r;)i[o]=t[o+e];return i}function f(t){if("string"==typeof t)return t;if(m(t))return X?X.call(t):"";var e=t+"";return"0"==e&&1/t==-w?"-0":e}function p(t,e,n){var o=t.length;return n=void 0===n?o:n,!e&&n>=o?t:s(t,e,n)}function l(t,e){e=void 0===e?" ":f(e);var n=e.length;if(n<2)return n?c(e,t):e;var u=c(e,K(t/r(e)));return o(e)?p(i(u),0,t).join(""):u.slice(0,t)}function h(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function d(t){return!!t&&"object"==typeof t}function m(t){return"symbol"==typeof t||d(t)&&W.call(t)==x}function y(t){if(!t)return 0===t?t:0;if((t=b(t))===w||t===-w){return(t<0?-1:1)*T}return t===t?t:0}function v(t){var e=y(t),n=e%1;return e===e?n?e-n:e:0}function b(t){if("number"==typeof t)return t;if(m(t))return E;if(h(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=h(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(C,"");var n=j.test(t);return n||S.test(t)?$(t.slice(2),n?2:8):k.test(t)?E:+t}function _(t){return null==t?"":f(t)}function g(t,e,n){t=_(t),e=v(e);var o=e?r(t):0;return e&&o<e?l(e-o,n)+t:t}var w=1/0,O=9007199254740991,T=1.7976931348623157e308,E=NaN,x="[object Symbol]",C=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,S=/^0o[0-7]+$/i,P="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",R="\\ud83c[\\udffb-\\udfff]",I="(?:\\ud83c[\\udde6-\\uddff]){2}",M="[\\ud800-\\udbff][\\udc00-\\udfff]",N="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",A="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",I,M].join("|")+")[\\ufe0e\\ufe0f]?"+N+")*",B="[\\ufe0e\\ufe0f]?"+N+A,L="(?:"+["[^\\ud800-\\udfff]"+P+"?",P,I,M,"[\\ud800-\\udfff]"].join("|")+")",q=RegExp(R+"(?="+R+")|"+L+B,"g"),D=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),$=parseInt,Q="object"==typeof e&&e&&e.Object===Object&&e,F="object"==typeof self&&self&&self.Object===Object&&self,z=Q||F||Function("return this")(),U=function(t){return function(e){return null==e?void 0:e[t]}}("length"),V=Object.prototype,W=V.toString,H=z.Symbol,K=Math.ceil,G=Math.floor,J=H?H.prototype:void 0,X=J?J.toString:void 0;t.exports=g}).call(e,n(27))},1356:function(t,e,n){"use strict";function o(t,e){return window.Prism?window.Prism.highlight(t,window.Prism.languages[e]):t}function r(t,e){return o(t,e).split("\n")}var i=n(1357);t.exports=i(r)},1357:function(t,e,n){(function(e){function n(t,e){return null==t?void 0:t[e]}function o(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function r(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function i(){this.__data__=Y?Y(null):{}}function u(t){return this.has(t)&&delete this.__data__[t]}function a(t){var e=this.__data__;if(Y){var n=e[t];return n===N?void 0:n}return K.call(e,t)?e[t]:void 0}function c(t){var e=this.__data__;return Y?void 0!==e[t]:K.call(e,t)}function s(t,e){return this.__data__[t]=Y&&void 0===e?N:e,this}function f(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function p(){this.__data__=[]}function l(t){var e=this.__data__,n=O(e,t);return!(n<0)&&(n==e.length-1?e.pop():X.call(e,n,1),!0)}function h(t){var e=this.__data__,n=O(e,t);return n<0?void 0:e[n][1]}function d(t){return O(this.__data__,t)>-1}function m(t,e){var n=this.__data__,o=O(n,t);return o<0?n.push([t,e]):n[o][1]=e,this}function y(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function v(){this.__data__={hash:new r,map:new(Z||f),string:new r}}function b(t){return E(this,t).delete(t)}function _(t){return E(this,t).get(t)}function g(t){return E(this,t).has(t)}function w(t,e){return E(this,t).set(t,e),this}function O(t,e){for(var n=t.length;n--;)if(P(t[n][0],e))return n;return-1}function T(t){return!(!I(t)||k(t))&&(R(t)||o(t)?J:q).test(j(t))}function E(t,e){var n=t.__data__;return C(e)?n["string"==typeof e?"string":"hash"]:n.map}function x(t,e){var o=n(t,e);return T(o)?o:void 0}function C(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function k(t){return!!W&&W in t}function j(t){if(null!=t){try{return H.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function S(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(M);var n=function(){var o=arguments,r=e?e.apply(this,o):o[0],i=n.cache;if(i.has(r))return i.get(r);var u=t.apply(this,o);return n.cache=i.set(r,u),u};return n.cache=new(S.Cache||y),n}function P(t,e){return t===e||t!==t&&e!==e}function R(t){var e=I(t)?G.call(t):"";return e==A||e==B}function I(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var M="Expected a function",N="__lodash_hash_undefined__",A="[object Function]",B="[object GeneratorFunction]",L=/[\\^$.*+?()[\]{}|]/g,q=/^\[object .+?Constructor\]$/,D="object"==typeof e&&e&&e.Object===Object&&e,$="object"==typeof self&&self&&self.Object===Object&&self,Q=D||$||Function("return this")(),F=Array.prototype,z=Function.prototype,U=Object.prototype,V=Q["__core-js_shared__"],W=function(){var t=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),H=z.toString,K=U.hasOwnProperty,G=U.toString,J=RegExp("^"+H.call(K).replace(L,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),X=F.splice,Z=x(Q,"Map"),Y=x(Object,"create");r.prototype.clear=i,r.prototype.delete=u,r.prototype.get=a,r.prototype.has=c,r.prototype.set=s,f.prototype.clear=p,f.prototype.delete=l,f.prototype.get=h,f.prototype.has=d,f.prototype.set=m,y.prototype.clear=v,y.prototype.delete=b,y.prototype.get=_,y.prototype.has=g,y.prototype.set=w,S.Cache=y,t.exports=S}).call(e,n(27))},1358:function(t,e,n){"use strict";function o(t,e,n){if(t){e=e||t;var o=t.offsetTop,r=e.offsetTop+e.offsetHeight;return Math.floor((o+r)/2)-n.offsetHeight/2}}t.exports=o},1359:function(t,e,n){"use strict";function o(t){return{top:t.scrollTop,left:t.scrollLeft}}function r(t,e,n,r){function a(){u(a),s.update()}r=r||{};var c=o(t),s=i(c).ease(r.ease||"out-circ").to({top:n,left:e}).duration(r.duration||1e3);return s.update(function(e){t.scrollTop=0|e.top,t.scrollLeft=0|e.left}),s.on("end",function(){a=function(){}}),a(),s}var i=n(1360),u=n(1364);t.exports=r},1360:function(t,e,n){function o(t){if(!(this instanceof o))return new o(t);this._from=t,this.ease("linear"),this.duration(500)}var r=n(1361),i=n(1362),u=n(1348),a=n(1363);t.exports=o,r(o.prototype),o.prototype.reset=function(){return this.isArray="array"===u(this._from),this._curr=i(this._from),this._done=!1,this._start=Date.now(),this},o.prototype.to=function(t){return this.reset(),this._to=t,this},o.prototype.duration=function(t){return this._duration=t,this},o.prototype.ease=function(t){if(!(t="function"==typeof t?t:a[t]))throw new TypeError("invalid easing function");return this._ease=t,this},o.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},o.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,o=this._to,r=this._curr,i=this._ease,u=(e-this._start)/t,a=i(u);if(this.isArray){for(var c=0;c<n.length;++c)r[c]=n[c]+(o[c]-n[c])*a;return this._update(r),this}for(var s in n)r[s]=n[s]+(o[s]-n[s])*a;return this._update(r),this}},o.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1361:function(t,e){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o,r=0;r<n.length;r++)if((o=n[r])===e||o.fn===e){n.splice(r,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var o=0,r=n.length;o<r;++o)n[o].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1362:function(t,e,n){function o(t){switch(r(t)){case"object":var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=o(t[n]));return e;case"array":for(var e=new Array(t.length),i=0,u=t.length;i<u;i++)e[i]=o(t[i]);return e;case"regexp":var a="";return a+=t.multiline?"m":"",a+=t.global?"g":"",a+=t.ignoreCase?"i":"",new RegExp(t.source,a);case"date":return new Date(t.getTime());default:return t}}var r;try{r=n(1348)}catch(t){r=n(1348)}t.exports=o},1363:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return t*=2,t<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return t*=2,t<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return t*=2,t<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return t*=2,t<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return t*=2,t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1364:function(t,e){function n(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-o)),r=setTimeout(t,n);return o=e,r}e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||n;var o=(new Date).getTime(),r=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){r.call(window,t)}},1365:function(t,e,n){"use strict";function o(){if(!r){var t=document.createElement("code");t.style.display="none",t.className="language-xxx",document.body.appendChild(t),r=window.getComputedStyle(t)}return r}var r;t.exports=o},1408:function(t,e){t.exports='/* eslint-disable no-invalid-this,no-console,dot-notation */\nimport React from "react";\nimport { number, func } from "prop-types";\nimport { connect, Provider } from "react-redux";\nimport { combineReducers } from "redux";\nimport { createStore } from "./utils";\n\n// TOP and BOTTOM COUNTERS - FIXED VERSION\nconst INITIAL_STATE = {\n  top: { count: 0 },\n  bottom: { count: 0 }\n};\n\n// top reducer\nconst reducerTop = function (state = INITIAL_STATE.top, action) {\n  switch (action.type) {\n    case "TOP_COUNTER_INCREMENT":\n      return {\n        ...state,\n        count: state.count + 1\n      };\n    case "TOP_COUNTER_DECREMENT":\n      return {\n        ...state,\n        count: state.count - 1\n      };\n    default:\n      return state;\n  }\n};\n\n// bottom reducer\nconst reducerBottom = function (state = INITIAL_STATE.bottom, action) {\n  switch (action.type) {\n    case "BOTTOM_COUNTER_INCREMENT":\n      return {\n        ...state,\n        count: state.count + 1\n      };\n    case "BOTTOM_COUNTER_DECREMENT":\n      return {\n        ...state,\n        count: state.count - 1\n      };\n    default:\n      return state;\n  }\n};\n\n// combined reducer\nconst combinedReducer = combineReducers({\n  top: reducerTop,\n  bottom: reducerBottom\n});\n\n// store for two counters\nconst store = createStore(combinedReducer);\n\n// Presentational Component\nclass Counter extends React.Component {\n  static propTypes = {\n    count: number,\n    decrement: func,\n    increment: func\n  };\n\n  static defaultProps = {\n    count: 0\n  };\n\n  handlePlus = () => {\n    this.props.increment();\n  };\n\n  handleMinus = () => {\n    this.props.decrement();\n  };\n\n  render() {\n    return (<div>\n      <h2>{this.props.count}</h2>\n      <fieldset>\n        <button onClick={this.handlePlus}>\n          +\n        </button>\n        <button onClick={this.handleMinus}>\n          -\n        </button>\n      </fieldset>\n    </div>);\n  }\n}\n\n// top and bottom props mapping\nconst mapStateToPropsTop = (state) => ({\n  count: state.top.count\n});\n\nconst mapStateToPropsBottom = (state) => ({\n  count: state.bottom.count\n});\n\n// top and bottom dispatch mapping\nconst mapDispatchToPropsTop = (dispatch) => ({\n  increment: () => dispatch({\n    type: "TOP_COUNTER_INCREMENT"\n  }),\n  decrement: () => dispatch({\n    type: "TOP_COUNTER_DECREMENT"\n  })\n});\n\nconst mapDispatchToPropsBottom = (dispatch) => ({\n  increment: () => dispatch({\n    type: "BOTTOM_COUNTER_INCREMENT"\n  }),\n  decrement: () => dispatch({\n    type: "BOTTOM_COUNTER_DECREMENT"\n  })\n});\n\n// top and bottom Containers\nconst CounterContainerTop = connect(\n  mapStateToPropsTop,\n  mapDispatchToPropsTop\n)(Counter);\n\nconst CounterContainerBottom = connect(\n  mapStateToPropsBottom,\n  mapDispatchToPropsBottom\n)(Counter);\n\n// top bottom containers app\nexport const TwoCountersFixed = () => (\n  <Provider store={store}>\n    <div>\n      <CounterContainerTop/>\n      <CounterContainerBottom/>\n    </div>\n  </Provider>\n);\n'}});