webpackJsonp([3],{1341:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.notes=void 0;var o=i(n(279)),r=(i(n(1)),i(n(1352)));function i(t){return t&&t.__esModule?t:{default:t}}e.notes="\n* Bo nenase laasot et ze\n\n* nathil shuv mi mivne shel' State\n\n* be gadol anahnu le crihim shhum shenuim be-CounterApp\nakol' kvar muhan\n\n* ein gam shinuim be Container\n\n* ve be-mapStateToProps\n\n* ve po be mapSiaptchToProps, anahnu ken, yaholim leosif\nisolation shel' Action.\nIm esh isolateId, as bemcom originalDiapatch, \nmeacrim funkcia Dispatch hadasha\nshe mekabelet action, ose transformation/isolation shel' Action.type\nmosifa prefix (clomar isolateId), ve rak as diaptch IsolatedAction\n\n* Kaha anahnu potrim issue im oto Action le shnej reducers\nAval reducer ka rega lyo yodea laavod im prefixed actions\n\n* Az be zman she ossim combinedReducer, anahnu osim \nisolation gam le-Reducers\n\n* isolateReducer ze HOF: mekabelet reducer -> mahzira isolatedReducer\nshe reduce state al' basis prefixed (isolated) Action\nisolatedReducer parse action.type le prefix ve unisolatedAction\nbodek she prefix matim le isoalteId she mekablim kmo parameter shel \nisolateReducer funckcia\nVe im hu le matim, pashut mahzerim state, ve le osim shum reducing\nAval im isolateId ve prefix domim, az maricim originalReducer im unisolateAction\n";e.default=(0,o.default)(r.default,{transition:["fade"],lang:"js",code:n(1416),ranges:[{loc:[8,15],title:"Isolated Counters Example"},{loc:[142,155]},{loc:[136,140]},{loc:[101,111]},{loc:[113,130]},{loc:[18,34]},{loc:[53,60]},{loc:[37,49]}]})},1351:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!=t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1352:function(t,e,n){"use strict";t.exports=n(1353)},1353:function(t,e,n){"use strict";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=n(1),a=n(2),c=n(525).Slide,s=n(1354),l=n(1355),f=n(1356),p=n(1357),h=n(1358),d=n(1359),m=n(1361),y=n(1362);var v=n(1368)(),b=v.backgroundColor||"#122b45",g={position:"relative",textAlign:"center",overflow:"hidden",color:v.color||"white",height:"646px",margin:0,padding:"40% 0",whiteSpace:"pre-wrap",wordBreak:"break-word"},_=function(t){function e(){var t,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,u=Array(r),a=0;a<r;a++)u[a]=arguments[a];return n=o=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),o.state={active:o.getStorageItem()||0},o.scrollActiveIntoView=function(t){var e=o.refs,n=e.container,r=e.start,i=e.end,u=m(r,i,n);y(n,0,u,{duration:t?1:1e3})},o.onResize=function(){o.scrollActiveIntoView(!0)},o.onKeyDown=function(t){if(o.isSlideActive()){var e=o.state.active,n=null;38===t.which?n=e-1:40===t.which&&(n=e+1),null!==n&&(t.preventDefault(),n=p(n,0,o.props.ranges.length-1),o.goTo(n))}},o.onStorage=function(t){t.key===o.getStorageId()&&o.goTo(+t.newValue,!0)},i(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u.Component),r(e,[{key:"componentWillMount",value:function(){this.updateNotes()}},{key:"componentDidMount",value:function(){var t=this;document.addEventListener("keydown",this.onKeyDown),window.addEventListener("storage",this.onStorage),window.addEventListener("resize",this.onResize),this.scrollActiveIntoView(!0),requestAnimationFrame(function(){t.scrollActiveIntoView(!0)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("storage",this.onStorage),window.removeEventListener("resize",this.onResize)}},{key:"componentWillEnter",value:function(t){this.refs.slide.componentWillEnter(t)}},{key:"componentWillAppear",value:function(t){this.refs.slide.componentWillAppear(t)}},{key:"componentWillLeave",value:function(t){this.refs.slide.componentWillLeave(t)}},{key:"getStorageId",value:function(){return"code-slide:"+this.props.slideIndex}},{key:"getStorageItem",value:function(){return+localStorage.getItem(this.getStorageId())}},{key:"setStorageItem",value:function(t){return localStorage.setItem(this.getStorageId(),""+t)}},{key:"isSlideActive",value:function(){var t=this.context.store.getState().route.slide;return this.props.slideIndex===parseInt(t)}},{key:"goTo",value:function(t,e){this.setState({active:t},this.scrollActiveIntoView),this.updateNotes(),e||this.setStorageItem(t)}},{key:"updateNotes",value:function(){if(this.isSlideActive()&&this.context.updateNotes){var t=this.props,e=t.ranges,n=t.notes,o=(e[this.state.active]||{}).notes;this.context.updateNotes(o||n)}}},{key:"render",value:function(){var t=this.props,e=t.code,n=t.lang,r=t.ranges,i=t.color,a=t.bgColor,p=(t.notes,t.showLineNumbers),m=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["code","lang","ranges","color","bgColor","notes","showLineNumbers"]),y=r[this.state.active]||{},v=y.loc||[],_=a||b,w=o({},g,{color:i||g.color}),O=d(e,n).map(function(t,e){return u.createElement("div",{key:e,ref:function(t,e){return t===e[0]?"start":t===e[1]?"end":null}(e,v),dangerouslySetInnerHTML:{__html:p?function(t){return'<span class="token comment">'+h(t+1,3)+".</span> "}(e)+t:t},style:{opacity:function(t,e){return e[0]<=t&&e[1]>t?1:.2}(e,v)}})});return u.createElement(c,o({ref:"slide",bgColor:_,margin:1},m),y.title&&u.createElement(s,null,y.title),u.createElement("pre",{ref:"container",style:w},u.createElement("code",{style:{display:"inline-block",textAlign:"left"}},O)),y.note&&u.createElement(l,null,y.note),y.image&&u.createElement(f,{src:y.image}))}}]),e}();_.propTypes={lang:a.string.isRequired,code:a.string.isRequired,ranges:a.arrayOf(a.shape({loc:a.arrayOf(a.number).isRequired,title:a.oneOfType([a.element,a.string]),note:a.oneOfType([a.element,a.string])})),showLineNumbers:a.bool},_.defaultProps={showLineNumbers:!0},_.contextTypes={store:a.object.isRequired,updateNotes:a.func},t.exports=_},1354:function(t,e,n){"use strict";var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var r=n(1),i={position:"fixed",left:"50%",top:"20px",transform:"translate(-50%)",padding:"20px 40px",border:"10px solid hotpink",fontSize:"2.5em",color:"white",whiteSpace:"nowrap"},u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.Component),o(e,[{key:"render",value:function(){return r.createElement("h1",{style:i},this.props.children)}}]),e}();t.exports=u},1355:function(t,e,n){"use strict";var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var r=n(1),i={position:"fixed",bottom:"20px",width:"100%",padding:"20px",background:"black",color:"white",fontFamily:"monospace",textAlign:"left"},u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.Component),o(e,[{key:"render",value:function(){return r.createElement("div",{style:i},this.props.children)}}]),e}();t.exports=u},1356:function(t,e,n){"use strict";var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var r=n(1),i=n(525).Image,u={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.Component),o(e,[{key:"render",value:function(){return r.createElement(i,{src:this.props.src,style:u})}}]),e}();t.exports=a},1357:function(t,e){var n=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,s=Object.prototype.toString;function l(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function f(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&s.call(t)==o}(t))return n;if(l(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=l(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var f=u.test(t);return f||a.test(t)?c(t.slice(2),f?2:8):i.test(t)?n:+t}t.exports=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=f(n))==n?n:0),void 0!==e&&(e=(e=f(e))==e?e:0),function(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}(f(t),e,n)}},1358:function(t,e,n){(function(e){var n=1/0,o=9007199254740991,r=1.7976931348623157e308,i=NaN,u="[object Symbol]",a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f="[\\ud800-\\udfff]",p="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",h="\\ud83c[\\udffb-\\udfff]",d="[^\\ud800-\\udfff]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",v="(?:"+p+"|"+h+")"+"?",b="[\\ufe0e\\ufe0f]?"+v+("(?:\\u200d(?:"+[d,m,y].join("|")+")[\\ufe0e\\ufe0f]?"+v+")*"),g="(?:"+[d+p+"?",p,m,y,f].join("|")+")",_=RegExp(h+"(?="+h+")|"+g+b,"g"),w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),O=parseInt,x="object"==typeof e&&e&&e.Object===Object&&e,k="object"==typeof self&&self&&self.Object===Object&&self,E=x||k||Function("return this")(),j=function(t){return function(e){return null==e?void 0:e[t]}}("length");function C(t){return w.test(t)}function I(t){return C(t)?function(t){var e=_.lastIndex=0;for(;_.test(t);)e++;return e}(t):j(t)}function S(t){return C(t)?function(t){return t.match(_)||[]}(t):function(t){return t.split("")}(t)}var T=Object.prototype.toString,A=E.Symbol,R=Math.ceil,P=Math.floor,M=A?A.prototype:void 0,N=M?M.toString:void 0;function L(t,e){var n="";if(!t||e<1||e>o)return n;do{e%2&&(n+=t),(e=P(e/2))&&(t+=t)}while(e);return n}function $(t){if("string"==typeof t)return t;if(Q(t))return N?N.call(t):"";var e=t+"";return"0"==e&&1/t==-n?"-0":e}function q(t,e,n){var o=t.length;return n=void 0===n?o:n,!e&&n>=o?t:function(t,e,n){var o=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(n=n>r?r:n)<0&&(n+=r),r=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(r);++o<r;)i[o]=t[o+e];return i}(t,e,n)}function D(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Q(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&T.call(t)==u}function B(t){return t?(t=function(t){if("number"==typeof t)return t;if(Q(t))return i;if(D(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=D(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=s.test(t);return n||l.test(t)?O(t.slice(2),n?2:8):c.test(t)?i:+t}(t))===n||t===-n?(t<0?-1:1)*r:t==t?t:0:0===t?t:0}t.exports=function(t,e,n){t=function(t){return null==t?"":$(t)}(t);var o=(e=function(t){var e=B(t),n=e%1;return e==e?n?e-n:e:0}(e))?I(t):0;return e&&o<e?function(t,e){var n=(e=void 0===e?" ":$(e)).length;if(n<2)return n?L(e,t):e;var o=L(e,R(t/I(e)));return C(e)?q(S(o),0,t).join(""):o.slice(0,t)}(e-o,n)+t:t}}).call(e,n(27))},1359:function(t,e,n){"use strict";var o=n(1360);t.exports=o(function(t,e){return function(t,e){return window.Prism?window.Prism.highlight(t,window.Prism.languages[e]):t}(t,e).split("\n")})},1360:function(t,e,n){(function(e){var n="Expected a function",o="__lodash_hash_undefined__",r="[object Function]",i="[object GeneratorFunction]",u=/^\[object .+?Constructor\]$/,a="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=a||c||Function("return this")();var l=Array.prototype,f=Function.prototype,p=Object.prototype,h=s["__core-js_shared__"],d=function(){var t=/[^.]+$/.exec(h&&h.keys&&h.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),m=f.toString,y=p.hasOwnProperty,v=p.toString,b=RegExp("^"+m.call(y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),g=l.splice,_=I(s,"Map"),w=I(Object,"create");function O(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function x(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function k(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function E(t,e){for(var n=t.length;n--;)if(T(t[n][0],e))return n;return-1}function j(t){return!(!A(t)||function(t){return!!d&&d in t}(t))&&(function(t){var e=A(t)?v.call(t):"";return e==r||e==i}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?b:u).test(function(t){if(null!=t){try{return m.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function C(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function I(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return j(n)?n:void 0}function S(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(n);var o=function(){var n=arguments,r=e?e.apply(this,n):n[0],i=o.cache;if(i.has(r))return i.get(r);var u=t.apply(this,n);return o.cache=i.set(r,u),u};return o.cache=new(S.Cache||k),o}function T(t,e){return t===e||t!=t&&e!=e}function A(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}O.prototype.clear=function(){this.__data__=w?w(null):{}},O.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},O.prototype.get=function(t){var e=this.__data__;if(w){var n=e[t];return n===o?void 0:n}return y.call(e,t)?e[t]:void 0},O.prototype.has=function(t){var e=this.__data__;return w?void 0!==e[t]:y.call(e,t)},O.prototype.set=function(t,e){return this.__data__[t]=w&&void 0===e?o:e,this},x.prototype.clear=function(){this.__data__=[]},x.prototype.delete=function(t){var e=this.__data__,n=E(e,t);return!(n<0||(n==e.length-1?e.pop():g.call(e,n,1),0))},x.prototype.get=function(t){var e=this.__data__,n=E(e,t);return n<0?void 0:e[n][1]},x.prototype.has=function(t){return E(this.__data__,t)>-1},x.prototype.set=function(t,e){var n=this.__data__,o=E(n,t);return o<0?n.push([t,e]):n[o][1]=e,this},k.prototype.clear=function(){this.__data__={hash:new O,map:new(_||x),string:new O}},k.prototype.delete=function(t){return C(this,t).delete(t)},k.prototype.get=function(t){return C(this,t).get(t)},k.prototype.has=function(t){return C(this,t).has(t)},k.prototype.set=function(t,e){return C(this,t).set(t,e),this},S.Cache=k,t.exports=S}).call(e,n(27))},1361:function(t,e,n){"use strict";t.exports=function(t,e,n){if(t){e=e||t;var o=t.offsetTop,r=e.offsetTop+e.offsetHeight;return Math.floor((o+r)/2)-n.offsetHeight/2}}},1362:function(t,e,n){"use strict";var o=n(1363),r=n(1367);t.exports=function(t,e,n,i){i=i||{};var u=function(t){return{top:t.scrollTop,left:t.scrollLeft}}(t),a=o(u).ease(i.ease||"out-circ").to({top:n,left:e}).duration(i.duration||1e3);function c(){r(c),a.update()}return a.update(function(e){t.scrollTop=0|e.top,t.scrollLeft=0|e.left}),a.on("end",function(){c=function(){}}),c(),a}},1363:function(t,e,n){var o=n(1364),r=n(1365),i=n(1351),u=n(1366);function a(t){if(!(this instanceof a))return new a(t);this._from=t,this.ease("linear"),this.duration(500)}t.exports=a,o(a.prototype),a.prototype.reset=function(){return this.isArray="array"===i(this._from),this._curr=r(this._from),this._done=!1,this._start=Date.now(),this},a.prototype.to=function(t){return this.reset(),this._to=t,this},a.prototype.duration=function(t){return this._duration=t,this},a.prototype.ease=function(t){if(!(t="function"==typeof t?t:u[t]))throw new TypeError("invalid easing function");return this._ease=t,this},a.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},a.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,o=this._to,r=this._curr,i=(0,this._ease)((e-this._start)/t);if(this.isArray){for(var u=0;u<n.length;++u)r[u]=n[u]+(o[u]-n[u])*i;return this._update(r),this}for(var a in n)r[a]=n[a]+(o[a]-n[a])*i;return this._update(r),this}},a.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1364:function(t,e){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,o=this._callbacks["$"+t];if(!o)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r=0;r<o.length;r++)if((n=o[r])===e||n.fn===e){o.splice(r,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var o=0,r=(n=n.slice(0)).length;o<r;++o)n[o].apply(this,e);return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1365:function(t,e,n){var o;try{o=n(1351)}catch(t){o=n(1351)}t.exports=function t(e){switch(o(e)){case"object":var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n;case"array":for(var n=new Array(e.length),i=0,u=e.length;i<u;i++)n[i]=t(e[i]);return n;case"regexp":var a="";return a+=e.multiline?"m":"",a+=e.global?"g":"",a+=e.ignoreCase?"i":"",new RegExp(e.source,a);case"date":return new Date(e.getTime());default:return e}}},1366:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1367:function(t,e){e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){var e=(new Date).getTime(),o=Math.max(0,16-(e-n)),r=setTimeout(t,o);return n=e,r};var n=(new Date).getTime();var o=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){o.call(window,t)}},1368:function(t,e,n){"use strict";var o;t.exports=function(){if(!o){var t=document.createElement("code");t.style.display="none",t.className="language-xxx",document.body.appendChild(t),o=window.getComputedStyle(t)}return o}},1416:function(t,e){t.exports='/* eslint-disable no-invalid-this,no-console,dot-notation */\nimport React from "react";\nimport { number, func } from "prop-types";\nimport { connect, Provider } from "react-redux";\nimport { combineReducers } from "redux";\nimport { createStore } from "./utils";\n\n// ISOLATE STATE\nconst INITIAL_STATE = {\n  top: { count: 3 },\n  my: {\n    custom: {\n      bottomCounter: { count: 6 }\n    }\n  }\n};\n\n// sliced counter reducer\nconst reducer = function (state = {}, action) {\n  console.log("sliced reducer", action, state);\n  switch (action.type) {\n    case "COUNTER_INCREMENT":\n      return {\n        ...state,\n        count: state.count + 1\n      };\n    case "COUNTER_DECREMENT":\n      return {\n        ...state,\n        count: state.count - 1\n      };\n    default:\n      return state;\n  }\n};\n\n// helper HOF - isolate reducer\nconst isolateReducer = (isolateId, originalReducer, initialState) => {\n  return (state = initialState, action) => {\n    const [isolateIdFromAction, unisolatedAction] = action.type.split(".");\n    if (isolateId !== isolateIdFromAction) {\n      console.log("action with ALIEN prefix", isolateId, action.type);\n      return state;\n    }\n    console.log("action with MY prefix", isolateId, action.type);\n    return originalReducer(state, {\n      ...action,\n      type: unisolatedAction\n    });\n  };\n};\n\n// isolated combined reducer\nexport const combinedReducer = combineReducers({\n  top: isolateReducer("top", reducer, INITIAL_STATE.top),\n  my: combineReducers({\n    custom: combineReducers({\n      bottomCounter: isolateReducer("bottom", reducer, INITIAL_STATE.my.custom.bottomCounter)\n    })\n  })\n});\n\n// new store for two counters\nconst store = createStore(combinedReducer);\n\n// Presentational Component\nclass Counter extends React.Component {\n  static propTypes = {\n    count: number,\n    decrement: func,\n    increment: func\n  };\n\n  static defaultProps = {\n    count: 0\n  };\n\n  handlePlus = () => {\n    this.props.increment();\n  };\n\n  handleMinus = () => {\n    this.props.decrement();\n  };\n\n  render() {\n    return (<div>\n      <h2>{this.props.count}</h2>\n      <fieldset>\n        <button onClick={this.handlePlus}>\n          +\n        </button>\n        <button onClick={this.handleMinus}>\n          -\n        </button>\n      </fieldset>\n    </div>);\n  }\n}\n\n// isolated state mapping\nconst mapStateToProps = (state, { isolateId, selector }) => {\n  if (!selector) {\n    selector = (globalState) =>\n      globalState[isolateId];\n  }\n  const slice = selector(state);\n  return {\n    count: slice.count\n  };\n};\n\n// isolated dispatch mapping\nconst mapDispatchToProps = (dispatch, { isolateId }) => {\n  if (isolateId) {\n    const originalDispatch = dispatch;\n    dispatch = ((action) => {\n      const prefixedType = `${isolateId}.${action.type}`;\n      const isolatedAction = {\n        ...action,\n        type: prefixedType\n      };\n      return originalDispatch(isolatedAction);\n    });\n  }\n  return {\n    increment: () => dispatch({\n      type: "COUNTER_INCREMENT"\n    }),\n    decrement: () => dispatch({\n      type: "COUNTER_DECREMENT"\n    })\n  };\n};\n\n// create isolated Container\nconst CounterContainer = connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(Counter);\n\n// isolated containers app\nexport const TwoCountersIsolated = () => (\n  <Provider store={store}>\n    <div>\n      <CounterContainer\n        isolateId="top"\n      />\n      <CounterContainer\n        isolateId="bottom"\n        selector={(state) =>\n          state.my.custom.bottomCounter}\n      />\n    </div>\n  </Provider>\n);\n'}});