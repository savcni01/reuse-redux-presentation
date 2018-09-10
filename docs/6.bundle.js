webpackJsonp([6],{1333:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.notes=void 0;var r=i(n(279)),o=(i(n(1)),i(n(1352)));function i(t){return t&&t.__esModule?t:{default:t}}e.notes="\n* Ahshav bo nenase leosif od CounterContainer le applikacia.\nNenase naive (straight forward) approach\n\n* Mathilim mi mivne shel State. Mosifim oneMoreCount.\n\n* Meacrim Store\n\n* Ve pa6ut mosifim le CounterApp one more Counter\n\n* k6e-ze oto CounterContainer she rainu codem, bli shum shenuim.\n";e.default=(0,r.default)(o.default,{transition:["fade"],lang:"js",code:n(1410),ranges:[{loc:[7,12],title:"Two Counters Example"},{loc:[33,34]},{loc:[92,99]},{loc:[86,90]},{loc:[71,73]},{loc:[76,82]},{loc:[15,26]}]})},1351:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!=t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1352:function(t,e,n){"use strict";t.exports=n(1353)},1353:function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=n(1),a=n(2),c=n(525).Slide,s=n(1354),f=n(1355),l=n(1356),p=n(1357),h=n(1358),d=n(1359),y=n(1361),v=n(1362);var b=n(1368)(),m=b.backgroundColor||"#122b45",_={position:"relative",textAlign:"center",overflow:"hidden",color:b.color||"white",height:"646px",margin:0,padding:"40% 0",whiteSpace:"pre-wrap",wordBreak:"break-word"},g=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,u=Array(o),a=0;a<o;a++)u[a]=arguments[a];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),r.state={active:r.getStorageItem()||0},r.scrollActiveIntoView=function(t){var e=r.refs,n=e.container,o=e.start,i=e.end,u=y(o,i,n);v(n,0,u,{duration:t?1:1e3})},r.onResize=function(){r.scrollActiveIntoView(!0)},r.onKeyDown=function(t){if(r.isSlideActive()){var e=r.state.active,n=null;38===t.which?n=e-1:40===t.which&&(n=e+1),null!==n&&(t.preventDefault(),n=p(n,0,r.props.ranges.length-1),r.goTo(n))}},r.onStorage=function(t){t.key===r.getStorageId()&&r.goTo(+t.newValue,!0)},i(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u.Component),o(e,[{key:"componentWillMount",value:function(){this.updateNotes()}},{key:"componentDidMount",value:function(){var t=this;document.addEventListener("keydown",this.onKeyDown),window.addEventListener("storage",this.onStorage),window.addEventListener("resize",this.onResize),this.scrollActiveIntoView(!0),requestAnimationFrame(function(){t.scrollActiveIntoView(!0)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("storage",this.onStorage),window.removeEventListener("resize",this.onResize)}},{key:"componentWillEnter",value:function(t){this.refs.slide.componentWillEnter(t)}},{key:"componentWillAppear",value:function(t){this.refs.slide.componentWillAppear(t)}},{key:"componentWillLeave",value:function(t){this.refs.slide.componentWillLeave(t)}},{key:"getStorageId",value:function(){return"code-slide:"+this.props.slideIndex}},{key:"getStorageItem",value:function(){return+localStorage.getItem(this.getStorageId())}},{key:"setStorageItem",value:function(t){return localStorage.setItem(this.getStorageId(),""+t)}},{key:"isSlideActive",value:function(){var t=this.context.store.getState().route.slide;return this.props.slideIndex===parseInt(t)}},{key:"goTo",value:function(t,e){this.setState({active:t},this.scrollActiveIntoView),this.updateNotes(),e||this.setStorageItem(t)}},{key:"updateNotes",value:function(){if(this.isSlideActive()&&this.context.updateNotes){var t=this.props,e=t.ranges,n=t.notes,r=(e[this.state.active]||{}).notes;this.context.updateNotes(r||n)}}},{key:"render",value:function(){var t=this.props,e=t.code,n=t.lang,o=t.ranges,i=t.color,a=t.bgColor,p=(t.notes,t.showLineNumbers),y=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["code","lang","ranges","color","bgColor","notes","showLineNumbers"]),v=o[this.state.active]||{},b=v.loc||[],g=a||m,w=r({},_,{color:i||_.color}),O=d(e,n).map(function(t,e){return u.createElement("div",{key:e,ref:function(t,e){return t===e[0]?"start":t===e[1]?"end":null}(e,b),dangerouslySetInnerHTML:{__html:p?function(t){return'<span class="token comment">'+h(t+1,3)+".</span> "}(e)+t:t},style:{opacity:function(t,e){return e[0]<=t&&e[1]>t?1:.2}(e,b)}})});return u.createElement(c,r({ref:"slide",bgColor:g,margin:1},y),v.title&&u.createElement(s,null,v.title),u.createElement("pre",{ref:"container",style:w},u.createElement("code",{style:{display:"inline-block",textAlign:"left"}},O)),v.note&&u.createElement(f,null,v.note),v.image&&u.createElement(l,{src:v.image}))}}]),e}();g.propTypes={lang:a.string.isRequired,code:a.string.isRequired,ranges:a.arrayOf(a.shape({loc:a.arrayOf(a.number).isRequired,title:a.oneOfType([a.element,a.string]),note:a.oneOfType([a.element,a.string])})),showLineNumbers:a.bool},g.defaultProps={showLineNumbers:!0},g.contextTypes={store:a.object.isRequired,updateNotes:a.func},t.exports=g},1354:function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=n(1),i={position:"fixed",left:"50%",top:"20px",transform:"translate(-50%)",padding:"20px 40px",border:"10px solid hotpink",fontSize:"2.5em",color:"white",whiteSpace:"nowrap"},u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"render",value:function(){return o.createElement("h1",{style:i},this.props.children)}}]),e}();t.exports=u},1355:function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=n(1),i={position:"fixed",bottom:"20px",width:"100%",padding:"20px",background:"black",color:"white",fontFamily:"monospace",textAlign:"left"},u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"render",value:function(){return o.createElement("div",{style:i},this.props.children)}}]),e}();t.exports=u},1356:function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=n(1),i=n(525).Image,u={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"render",value:function(){return o.createElement(i,{src:this.props.src,style:u})}}]),e}();t.exports=a},1357:function(t,e){var n=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,s=Object.prototype.toString;function f(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function l(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&s.call(t)==r}(t))return n;if(f(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=f(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var l=u.test(t);return l||a.test(t)?c(t.slice(2),l?2:8):i.test(t)?n:+t}t.exports=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=l(n))==n?n:0),void 0!==e&&(e=(e=l(e))==e?e:0),function(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}(l(t),e,n)}},1358:function(t,e,n){(function(e){var n=1/0,r=9007199254740991,o=1.7976931348623157e308,i=NaN,u="[object Symbol]",a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l="[\\ud800-\\udfff]",p="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",h="\\ud83c[\\udffb-\\udfff]",d="[^\\ud800-\\udfff]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",b="(?:"+p+"|"+h+")"+"?",m="[\\ufe0e\\ufe0f]?"+b+("(?:\\u200d(?:"+[d,y,v].join("|")+")[\\ufe0e\\ufe0f]?"+b+")*"),_="(?:"+[d+p+"?",p,y,v,l].join("|")+")",g=RegExp(h+"(?="+h+")|"+_+m,"g"),w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),O=parseInt,x="object"==typeof e&&e&&e.Object===Object&&e,E="object"==typeof self&&self&&self.Object===Object&&self,j=x||E||Function("return this")(),C=function(t){return function(e){return null==e?void 0:e[t]}}("length");function k(t){return w.test(t)}function S(t){return k(t)?function(t){var e=g.lastIndex=0;for(;g.test(t);)e++;return e}(t):C(t)}function T(t){return k(t)?function(t){return t.match(g)||[]}(t):function(t){return t.split("")}(t)}var P=Object.prototype.toString,A=j.Symbol,I=Math.ceil,M=Math.floor,R=A?A.prototype:void 0,N=R?R.toString:void 0;function L(t,e){var n="";if(!t||e<1||e>r)return n;do{e%2&&(n+=t),(e=M(e/2))&&(t+=t)}while(e);return n}function q(t){if("string"==typeof t)return t;if(D(t))return N?N.call(t):"";var e=t+"";return"0"==e&&1/t==-n?"-0":e}function $(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i}(t,e,n)}function Q(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function D(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&P.call(t)==u}function B(t){return t?(t=function(t){if("number"==typeof t)return t;if(D(t))return i;if(Q(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Q(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=s.test(t);return n||f.test(t)?O(t.slice(2),n?2:8):c.test(t)?i:+t}(t))===n||t===-n?(t<0?-1:1)*o:t==t?t:0:0===t?t:0}t.exports=function(t,e,n){t=function(t){return null==t?"":q(t)}(t);var r=(e=function(t){var e=B(t),n=e%1;return e==e?n?e-n:e:0}(e))?S(t):0;return e&&r<e?function(t,e){var n=(e=void 0===e?" ":q(e)).length;if(n<2)return n?L(e,t):e;var r=L(e,I(t/S(e)));return k(e)?$(T(r),0,t).join(""):r.slice(0,t)}(e-r,n)+t:t}}).call(e,n(27))},1359:function(t,e,n){"use strict";var r=n(1360);t.exports=r(function(t,e){return function(t,e){return window.Prism?window.Prism.highlight(t,window.Prism.languages[e]):t}(t,e).split("\n")})},1360:function(t,e,n){(function(e){var n="Expected a function",r="__lodash_hash_undefined__",o="[object Function]",i="[object GeneratorFunction]",u=/^\[object .+?Constructor\]$/,a="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=a||c||Function("return this")();var f=Array.prototype,l=Function.prototype,p=Object.prototype,h=s["__core-js_shared__"],d=function(){var t=/[^.]+$/.exec(h&&h.keys&&h.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),y=l.toString,v=p.hasOwnProperty,b=p.toString,m=RegExp("^"+y.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_=f.splice,g=S(s,"Map"),w=S(Object,"create");function O(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function x(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function E(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function j(t,e){for(var n=t.length;n--;)if(P(t[n][0],e))return n;return-1}function C(t){return!(!A(t)||function(t){return!!d&&d in t}(t))&&(function(t){var e=A(t)?b.call(t):"";return e==o||e==i}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?m:u).test(function(t){if(null!=t){try{return y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function k(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function S(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return C(n)?n:void 0}function T(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(n);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u),u};return r.cache=new(T.Cache||E),r}function P(t,e){return t===e||t!=t&&e!=e}function A(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}O.prototype.clear=function(){this.__data__=w?w(null):{}},O.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},O.prototype.get=function(t){var e=this.__data__;if(w){var n=e[t];return n===r?void 0:n}return v.call(e,t)?e[t]:void 0},O.prototype.has=function(t){var e=this.__data__;return w?void 0!==e[t]:v.call(e,t)},O.prototype.set=function(t,e){return this.__data__[t]=w&&void 0===e?r:e,this},x.prototype.clear=function(){this.__data__=[]},x.prototype.delete=function(t){var e=this.__data__,n=j(e,t);return!(n<0||(n==e.length-1?e.pop():_.call(e,n,1),0))},x.prototype.get=function(t){var e=this.__data__,n=j(e,t);return n<0?void 0:e[n][1]},x.prototype.has=function(t){return j(this.__data__,t)>-1},x.prototype.set=function(t,e){var n=this.__data__,r=j(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},E.prototype.clear=function(){this.__data__={hash:new O,map:new(g||x),string:new O}},E.prototype.delete=function(t){return k(this,t).delete(t)},E.prototype.get=function(t){return k(this,t).get(t)},E.prototype.has=function(t){return k(this,t).has(t)},E.prototype.set=function(t,e){return k(this,t).set(t,e),this},T.Cache=E,t.exports=T}).call(e,n(27))},1361:function(t,e,n){"use strict";t.exports=function(t,e,n){if(t){e=e||t;var r=t.offsetTop,o=e.offsetTop+e.offsetHeight;return Math.floor((r+o)/2)-n.offsetHeight/2}}},1362:function(t,e,n){"use strict";var r=n(1363),o=n(1367);t.exports=function(t,e,n,i){i=i||{};var u=function(t){return{top:t.scrollTop,left:t.scrollLeft}}(t),a=r(u).ease(i.ease||"out-circ").to({top:n,left:e}).duration(i.duration||1e3);function c(){o(c),a.update()}return a.update(function(e){t.scrollTop=0|e.top,t.scrollLeft=0|e.left}),a.on("end",function(){c=function(){}}),c(),a}},1363:function(t,e,n){var r=n(1364),o=n(1365),i=n(1351),u=n(1366);function a(t){if(!(this instanceof a))return new a(t);this._from=t,this.ease("linear"),this.duration(500)}t.exports=a,r(a.prototype),a.prototype.reset=function(){return this.isArray="array"===i(this._from),this._curr=o(this._from),this._done=!1,this._start=Date.now(),this},a.prototype.to=function(t){return this.reset(),this._to=t,this},a.prototype.duration=function(t){return this._duration=t,this},a.prototype.ease=function(t){if(!(t="function"==typeof t?t:u[t]))throw new TypeError("invalid easing function");return this._ease=t,this},a.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},a.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,r=this._to,o=this._curr,i=(0,this._ease)((e-this._start)/t);if(this.isArray){for(var u=0;u<n.length;++u)o[u]=n[u]+(r[u]-n[u])*i;return this._update(o),this}for(var a in n)o[a]=n[a]+(r[a]-n[a])*i;return this._update(o),this}},a.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1364:function(t,e){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o=0;o<r.length;o++)if((n=r[o])===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var r=0,o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,e);return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1365:function(t,e,n){var r;try{r=n(1351)}catch(t){r=n(1351)}t.exports=function t(e){switch(r(e)){case"object":var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t(e[o]));return n;case"array":for(var n=new Array(e.length),i=0,u=e.length;i<u;i++)n[i]=t(e[i]);return n;case"regexp":var a="";return a+=e.multiline?"m":"",a+=e.global?"g":"",a+=e.ignoreCase?"i":"",new RegExp(e.source,a);case"date":return new Date(e.getTime());default:return e}}},1366:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1367:function(t,e){e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){var e=(new Date).getTime(),r=Math.max(0,16-(e-n)),o=setTimeout(t,r);return n=e,o};var n=(new Date).getTime();var r=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){r.call(window,t)}},1368:function(t,e,n){"use strict";var r;t.exports=function(){if(!r){var t=document.createElement("code");t.style.display="none",t.className="language-xxx",document.body.appendChild(t),r=window.getComputedStyle(t)}return r}},1410:function(t,e){t.exports='/* eslint-disable no-invalid-this,no-console,dot-notation */\nimport React from "react";\nimport { number, func } from "prop-types";\nimport { connect, Provider } from "react-redux";\nimport { createStore } from "./utils";\n\n// TRY TO ADD ONE MORE COUNTER\nconst INITIAL_STATE = {\n  count: 0,\n  "oneMoreCounter": {\n    count: 0\n  }\n};\n\n// counter reducer\nconst reducer = function (state = INITIAL_STATE, action) {\n  switch (action.type) {\n    case "COUNTER_INCREMENT":\n      return {\n        ...state,\n        count: state.count + 1\n      };\n    case "COUNTER_DECREMENT":\n      return {\n        ...state,\n        count: state.count - 1\n      };\n    default:\n      return state;\n  }\n};\n\n// new store for two counters\nconst store = createStore(reducer);\n\n// Presentational Component\nclass Counter extends React.Component {\n  static propTypes = {\n    count: number,\n    decrement: func,\n    increment: func\n  };\n\n  static defaultProps = {\n    count: 0\n  };\n\n  handlePlus = () => {\n    this.props.increment();\n  };\n\n  handleMinus = () => {\n    this.props.decrement();\n  };\n\n  render() {\n    return (<div className="counter-example">\n      <h2>{this.props.count}</h2>\n      <fieldset>\n        <button onClick={this.handlePlus}>\n          +\n        </button>\n        <button onClick={this.handleMinus}>\n          -\n        </button>\n      </fieldset>\n    </div>);\n  }\n}\n\n// select data from store for UI Component\nconst mapStateToProps = (state) => ({\n  count: state.count\n});\n\n// prepare handlers for user actions\nconst mapDispatchToProps = (dispatch) => ({\n  increment: () => dispatch({\n    type: "COUNTER_INCREMENT"\n  }),\n  decrement: () => dispatch({\n    type: "COUNTER_DECREMENT"\n  })\n});\n\n// connect Counter Component to Store, i.e. create Container\nconst CounterContainer = connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(Counter);\n\n// Two Counters App\nexport const TwoCountersApp = () => (\n  <Provider store={store}>\n    <div>\n      <CounterContainer/>\n      <CounterContainer/>\n    </div>\n  </Provider>\n);\n'}});