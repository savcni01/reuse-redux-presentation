webpackJsonp([0],{1346:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notes=void 0;var r=a(n(279)),o=(a(n(1)),n(525)),i=a(n(1419));function a(e){return e&&e.__esModule?e:{default:e}}t.notes="\n* Bo nire eih anahnu yaholim laasot otam dvarim she osinu\nbe dugma ahrona Isolate Counters im React Redux Island \n";t.default=(0,r.default)(o.Slide,{transition:["fade"]},void 0,(0,r.default)(o.Heading,{size:5},void 0,"React Redux Island in use"),(0,r.default)(i.default,{title:"1. npm /reuse-redux",output:["npm install --save react-redux-island",(0,r.default)("div",{style:{color:"#33B969"}},12,(0,r.default)("div",{},void 0,"+ react-redux-island@0.26.0"),(0,r.default)("div",{},void 0,"install 1 package in 8.207s"))]}))},1377:function(e,t,n){"use strict";var r=n(179),o=n(1384),i=(n(1379),n(1383),Object.prototype.hasOwnProperty),a=n(1385),u={key:!0,ref:!0,__self:!0,__source:!0};function s(e){return void 0!==e.ref}function l(e){return void 0!==e.key}var c=function(e,t,n,r,o,i,u){var s={$$typeof:a,type:e,key:t,ref:n,props:u,_owner:i};return s};c.createElement=function(e,t,n){var r,a={},p=null,f=null;if(null!=t)for(r in s(t)&&(f=t.ref),l(t)&&(p=""+t.key),void 0===t.__self?null:t.__self,void 0===t.__source?null:t.__source,t)i.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);var d=arguments.length-2;if(1===d)a.children=n;else if(d>1){for(var h=Array(d),y=0;y<d;y++)h[y]=arguments[y+2];0,a.children=h}if(e&&e.defaultProps){var m=e.defaultProps;for(r in m)void 0===a[r]&&(a[r]=m[r])}return c(e,p,f,0,0,o.current,a)},c.createFactory=function(e){var t=c.createElement.bind(null,e);return t.type=e,t},c.cloneAndReplaceKey=function(e,t){return c(e.type,t,e.ref,e._self,e._source,e._owner,e.props)},c.cloneElement=function(e,t,n){var a,p,f=r({},e.props),d=e.key,h=e.ref,y=(e._self,e._source,e._owner);if(null!=t)for(a in s(t)&&(h=t.ref,y=o.current),l(t)&&(d=""+t.key),e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)i.call(t,a)&&!u.hasOwnProperty(a)&&(void 0===t[a]&&void 0!==p?f[a]=p[a]:f[a]=t[a]);var m=arguments.length-2;if(1===m)f.children=n;else if(m>1){for(var v=Array(m),b=0;b<m;b++)v[b]=arguments[b+2];f.children=v}return c(e.type,d,h,0,0,y,f)},c.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},e.exports=c},1378:function(e,t,n){"use strict";e.exports=function(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}},1379:function(e,t,n){"use strict";var r=n(283);e.exports=r},1381:function(e,t,n){"use strict";var r=n(1378),o=n(179),i=n(1382),a=(n(1383),n(282));n(281),n(1423);function u(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||i}function s(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||i}function l(){}u.prototype.isReactComponent={},u.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&r("85"),this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},u.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")},l.prototype=u.prototype,s.prototype=new l,s.prototype.constructor=s,o(s.prototype,u.prototype),s.prototype.isPureReactComponent=!0,e.exports={Component:u,PureComponent:s}},1382:function(e,t,n){"use strict";n(1379);var r={isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){},enqueueReplaceState:function(e,t){},enqueueSetState:function(e,t){}};e.exports=r},1383:function(e,t,n){"use strict";var r=!1;e.exports=r},1384:function(e,t,n){"use strict";e.exports={current:null}},1385:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=r},1419:function(e,t,n){"use strict";e.exports=n(1420)},1420:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(1421)),a=n(2),u=(s(n(1438)),s(n(1439)));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleMaximize=function(e){e.altKey&&77===e.keyCode&&n["handle"+(n.state.isMaximized?"Minimize":"Expand")]()},n.updateCurrentLine=function(e){var t=n.state.currentLine;40===e.keyCode?t=n.goDown(t):38===e.keyCode&&(t=n.goUp(t)),n.setState({currentLine:t,isAutoScroll:t.isAutoScroll})},n.handleClose=function(){n.setState({isCollapsed:!n.state.isCollapsed})},n.handleMinimize=function(){n.setState({isMaximized:!1})},n.handleExpand=function(){n.setState({isMaximized:!0}),n.terminalRef.closest(".spectacle-content").style.transform="none",document.querySelector("button[data-radium]").closest("div").style.display="none"},n.state={currentLine:{index:e.showFirstEntry?0:null,iteration:null},isCollapsed:!1,isMaximized:e.isMaximized,isAutoScroll:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.updateCurrentLine),document.addEventListener("keydown",this.toggleMaximize),this.terminalRef.closest(".spectacle-content").style.transform="none"}},{key:"componentDidUpdate",value:function(e,t){this.mainRef&&(this.state.isAutoScroll?this.mainRef.scrollTop=this.mainRef.scrollHeight:this.state.currentLine.scrollTo&&(this.mainRef.scrollTop=this.state.currentLine.scrollTo)),this.terminalRef.closest(".spectacle-content").style.transform="none"}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.updateCurrentLine),document.removeEventListener("keydown",this.toggleMaximize)}},{key:"goDown",value:function(e){var t=this.props.output;if(null!=e.index){var n=e.index<t.length-1?e.index+1:e.index,r=null!=e.iteration?t[e.index]:t[n];Array.isArray(r)?(null!=e.iteration?(e.iteration=e.iteration<r.length-1?++e.iteration:null,null==e.iteration&&(e.index=n)):(e.index=n,e.iteration=0),r=null!=e.iteration?r[e.iteration]:r):(e.index=n,e.iteration=null,r=t[e.index]),e.isAutoScroll=null==r.isAutoScroll||r.isAutoScroll,e.isSolo=null!=r.isSolo&&r.isSolo,e.scrollTo=null!=r.scrollTo?r.scrollTo:null,e.note=r.note}else e={index:0},Array.isArray(t[e.index])&&(e.iteration=0);return e}},{key:"goUp",value:function(e){var t=this.props,n=t.showFirstEntry,r=t.output;e.index>0?e.index--:0===e.index&&(e.index=n?0:null);var o=r[e.index];return o&&(e.isAutoScroll=null==o.isAutoScroll||o.isAutoScroll,e.isSolo=null!=o.isSolo&&o.isSolo,e.scrollTo=null!=o.scrollTo?o.scrollTo:null,e.note=o.note),e}},{key:"renderLines",value:function(){var e=this.props.output,t=this.state.currentLine;if(t.isSolo){var n=e[t.index];return t.scrollTo?this.mainRef.scrollTop=t.scrollTo:this.mainRef.scrollTop=0,i.default.createElement("div",{key:t.index+"-clear",className:"fragment"},n.output||n)}return e.reduce(function(e,n,r){if(r<=t.index&&!n.isSolo||0===t.index&&0===r)if(Array.isArray(n)){var o=null!=t.iteration&&t.index===r?t.iteration:n.length-1;e.push(i.default.createElement("div",{key:r+"-"+o,className:"fragment"},n[o].output||n[o]))}else e.push(i.default.createElement("div",{key:r,className:"fragment"},n.output||n));return e},[])}},{key:"renderMain",value:function(){var e=this,t=(this.props.output,this.state),n=t.isMaximized,r=t.currentLine;return i.default.createElement("section",{className:"Terminal-main",ref:function(t){e.mainRef=t},style:Object.assign({},u.default.main,n?u.default.mainMaximized:{})},null!=r.index&&this.renderLines())}},{key:"renderNote",value:function(){var e=this.state.currentLine;return i.default.createElement("div",{className:"Terminal-note",style:{position:"absolute",top:"1vw",left:"15vw",right:"15vw",backgroundColor:"white",borderRadius:"0.5rem",display:"flex",justifyContent:"center",alignItems:"center",padding:"1rem",border:"solid 1px #303539"}},e.note)}},{key:"render",value:function(){var e=this,t=this.props.title,n=this.state,o=n.isMaximized,a=n.isCollapsed,s=n.currentLine;return i.default.createElement("div",{className:"Terminal",style:o?u.default.containerMaximized:u.default.container,ref:function(t){e.terminalRef=t}},i.default.createElement("header",{style:u.default.header,className:"Terminal-header"},i.default.createElement("nav",{style:u.default.nav},i.default.createElement("button",{onClick:this.handleClose,style:r({},u.default.button,u.default.buttonClose)}),i.default.createElement("button",{onClick:this.handleMinimize,style:r({},u.default.button,u.default.buttonMinimize)}),i.default.createElement("button",{onClick:this.handleExpand,style:r({},u.default.button,u.default.buttonExpand)})),i.default.createElement("div",{style:u.default.title},t)),!a&&this.renderMain(),s.note&&this.renderNote())}}]),t}();t.default=l,l.propTypes={output:a.array,showFirstEntry:a.bool,isMaximized:!1}},1421:function(e,t,n){"use strict";e.exports=n(1422)},1422:function(e,t,n){"use strict";var r=n(179),o=n(1381),i=n(1424),a=n(1429),u=n(1377),s=n(1430),l=n(1434),c=n(1435),p=n(1437),f=u.createElement,d=u.createFactory,h=u.cloneElement,y=r,m=function(e){return e},v={Children:{map:i.map,forEach:i.forEach,count:i.count,toArray:i.toArray,only:p},Component:o.Component,PureComponent:o.PureComponent,createElement:f,cloneElement:h,isValidElement:u.isValidElement,PropTypes:s,createClass:c,createFactory:d,createMixin:m,DOM:a,version:l,__spread:y};e.exports=v},1423:function(e,t,n){"use strict";var r=function(){};e.exports=r},1424:function(e,t,n){"use strict";var r=n(1425),o=n(1377),i=n(283),a=n(1426),u=r.twoArgumentPooler,s=r.fourArgumentPooler,l=/\/+/g;function c(e){return(""+e).replace(l,"$&/")}function p(e,t){this.func=e,this.context=t,this.count=0}function f(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function d(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function h(e,t,n){var r=e.result,a=e.keyPrefix,u=e.func,s=e.context,l=u.call(s,t,e.count++);Array.isArray(l)?y(l,r,n,i.thatReturnsArgument):null!=l&&(o.isValidElement(l)&&(l=o.cloneAndReplaceKey(l,a+(!l.key||t&&t.key===l.key?"":c(l.key)+"/")+n)),r.push(l))}function y(e,t,n,r,o){var i="";null!=n&&(i=c(n)+"/");var u=d.getPooled(t,i,r,o);a(e,h,u),d.release(u)}function m(e,t,n){return null}p.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},r.addPoolingTo(p,u),d.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},r.addPoolingTo(d,s);var v={forEach:function(e,t,n){if(null==e)return e;var r=p.getPooled(t,n);a(e,f,r),p.release(r)},map:function(e,t,n){if(null==e)return e;var r=[];return y(e,r,null,t,n),r},mapIntoWithKeyPrefixInternal:y,count:function(e,t){return a(e,m,null)},toArray:function(e){var t=[];return y(e,t,null,i.thatReturnsArgument),t}};e.exports=v},1425:function(e,t,n){"use strict";var r=n(1378),o=(n(281),function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)}),i=function(e){e instanceof this||r("25"),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)},a=o,u={addPoolingTo:function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||a,n.poolSize||(n.poolSize=10),n.release=i,n},oneArgumentPooler:o,twoArgumentPooler:function(e,t){if(this.instancePool.length){var n=this.instancePool.pop();return this.call(n,e,t),n}return new this(e,t)},threeArgumentPooler:function(e,t,n){if(this.instancePool.length){var r=this.instancePool.pop();return this.call(r,e,t,n),r}return new this(e,t,n)},fourArgumentPooler:function(e,t,n,r){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}};e.exports=u},1426:function(e,t,n){"use strict";var r=n(1378),o=(n(1384),n(1385)),i=n(1427),a=(n(281),n(1428)),u=(n(1379),"."),s=":";function l(e,t){return e&&"object"==typeof e&&null!=e.key?a.escape(e.key):t.toString(36)}e.exports=function(e,t,n){return null==e?0:function e(t,n,c,p){var f,d=typeof t;if("undefined"!==d&&"boolean"!==d||(t=null),null===t||"string"===d||"number"===d||"object"===d&&t.$$typeof===o)return c(p,t,""===n?u+l(t,0):n),1;var h=0,y=""===n?u:n+s;if(Array.isArray(t))for(var m=0;m<t.length;m++)h+=e(f=t[m],y+l(f,m),c,p);else{var v=i(t);if(v){var b,g=v.call(t);if(v!==t.entries)for(var x=0;!(b=g.next()).done;)h+=e(f=b.value,y+l(f,x++),c,p);else for(;!(b=g.next()).done;){var E=b.value;E&&(h+=e(f=E[1],y+a.escape(E[0])+s+l(f,0),c,p))}}else if("object"===d){var w="",_=String(t);r("31","[object Object]"===_?"object with keys {"+Object.keys(t).join(", ")+"}":_,w)}}return h}(e,"",t,n)}},1427:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.iterator,o="@@iterator";e.exports=function(e){var t=e&&(r&&e[r]||e[o]);if("function"==typeof t)return t}},1428:function(e,t,n){"use strict";var r={escape:function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})},unescape:function(e){var t={"=0":"=","=2":":"};return(""+("."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1))).replace(/(=0|=2)/g,function(e){return t[e]})}};e.exports=r},1429:function(e,t,n){"use strict";var r=n(1377).createFactory,o={a:r("a"),abbr:r("abbr"),address:r("address"),area:r("area"),article:r("article"),aside:r("aside"),audio:r("audio"),b:r("b"),base:r("base"),bdi:r("bdi"),bdo:r("bdo"),big:r("big"),blockquote:r("blockquote"),body:r("body"),br:r("br"),button:r("button"),canvas:r("canvas"),caption:r("caption"),cite:r("cite"),code:r("code"),col:r("col"),colgroup:r("colgroup"),data:r("data"),datalist:r("datalist"),dd:r("dd"),del:r("del"),details:r("details"),dfn:r("dfn"),dialog:r("dialog"),div:r("div"),dl:r("dl"),dt:r("dt"),em:r("em"),embed:r("embed"),fieldset:r("fieldset"),figcaption:r("figcaption"),figure:r("figure"),footer:r("footer"),form:r("form"),h1:r("h1"),h2:r("h2"),h3:r("h3"),h4:r("h4"),h5:r("h5"),h6:r("h6"),head:r("head"),header:r("header"),hgroup:r("hgroup"),hr:r("hr"),html:r("html"),i:r("i"),iframe:r("iframe"),img:r("img"),input:r("input"),ins:r("ins"),kbd:r("kbd"),keygen:r("keygen"),label:r("label"),legend:r("legend"),li:r("li"),link:r("link"),main:r("main"),map:r("map"),mark:r("mark"),menu:r("menu"),menuitem:r("menuitem"),meta:r("meta"),meter:r("meter"),nav:r("nav"),noscript:r("noscript"),object:r("object"),ol:r("ol"),optgroup:r("optgroup"),option:r("option"),output:r("output"),p:r("p"),param:r("param"),picture:r("picture"),pre:r("pre"),progress:r("progress"),q:r("q"),rp:r("rp"),rt:r("rt"),ruby:r("ruby"),s:r("s"),samp:r("samp"),script:r("script"),section:r("section"),select:r("select"),small:r("small"),source:r("source"),span:r("span"),strong:r("strong"),style:r("style"),sub:r("sub"),summary:r("summary"),sup:r("sup"),table:r("table"),tbody:r("tbody"),td:r("td"),textarea:r("textarea"),tfoot:r("tfoot"),th:r("th"),thead:r("thead"),time:r("time"),title:r("title"),tr:r("tr"),track:r("track"),u:r("u"),ul:r("ul"),var:r("var"),video:r("video"),wbr:r("wbr"),circle:r("circle"),clipPath:r("clipPath"),defs:r("defs"),ellipse:r("ellipse"),g:r("g"),image:r("image"),line:r("line"),linearGradient:r("linearGradient"),mask:r("mask"),path:r("path"),pattern:r("pattern"),polygon:r("polygon"),polyline:r("polyline"),radialGradient:r("radialGradient"),rect:r("rect"),stop:r("stop"),svg:r("svg"),text:r("text"),tspan:r("tspan")};e.exports=o},1430:function(e,t,n){"use strict";var r=n(1377).isValidElement,o=n(1431);e.exports=o(r)},1431:function(e,t,n){"use strict";var r=n(1432);e.exports=function(e){return r(e,!1)}},1432:function(e,t,n){"use strict";var r=n(179),o=n(532),i=n(1433),a=function(){};function u(){return null}e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,s="@@iterator";var l="<<anonymous>>",c={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:d(u),arrayOf:function(e){return d(function(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){var s=m(u);return new f("Invalid "+i+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an array.")}for(var l=0;l<u.length;l++){var c=e(u,l,r,i,a+"["+l+"]",o);if(c instanceof Error)return c}return null})},element:function(){return d(function(t,n,r,o,i){var a=t[n];if(!e(a)){var u=m(a);return new f("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected a single ReactElement.")}return null})}(),instanceOf:function(e){return d(function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||l,u=function(e){if(!e.constructor||!e.constructor.name)return l;return e.constructor.name}(t[n]);return new f("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null})},node:function(){return d(function(e,t,n,r,o){if(!y(e[t]))return new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return d(function(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=m(u);if("object"!==s)return new f("Invalid "+i+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var c=e(u,l,r,i,a+"."+l,o);if(c instanceof Error)return c}return null})},oneOf:function(e){if(!Array.isArray(e))return u;return d(function(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(p(a,e[u]))return null;var s=JSON.stringify(e);return new f("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+s+".")})},oneOfType:function(e){if(!Array.isArray(e))return u;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+b(n)+" at index "+t+"."),u}return d(function(t,n,r,i,a){for(var u=0;u<e.length;u++){var s=e[u];if(null==s(t,n,r,i,a,o))return null}return new f("Invalid "+i+" `"+a+"` supplied to `"+r+"`.")})},shape:function(e){return d(function(t,n,r,i,a){var u=t[n],s=m(u);if("object"!==s)return new f("Invalid "+i+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var c=e[l];if(c){var p=c(u,l,r,i,a+"."+l,o);if(p)return p}}return null})},exact:function(e){return d(function(t,n,i,a,u){var s=t[n],l=m(s);if("object"!==l)return new f("Invalid "+a+" `"+u+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");var c=r({},t[n],e);for(var p in c){var d=e[p];if(!d)return new f("Invalid "+a+" `"+u+"` key `"+p+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=d(s,p,i,a,u+"."+p,o);if(h)return h}return null})}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e){this.message=e,this.stack=""}function d(e){function n(n,r,i,a,u,s,c){if((a=a||l,s=s||i,c!==o)&&t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}return null==r[i]?n?null===r[i]?new f("The "+u+" `"+s+"` is marked as required in `"+a+"`, but its value is `null`."):new f("The "+u+" `"+s+"` is marked as required in `"+a+"`, but its value is `undefined`."):null:e(r,i,a,u,s)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function h(e){return d(function(t,n,r,o,i,a){var u=t[n];return m(u)!==e?new f("Invalid "+o+" `"+i+"` of type `"+v(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[s]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!y(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function v(e){if(void 0===e||null===e)return""+e;var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,c.checkPropTypes=i,c.PropTypes=c,c}},1433:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){}},1434:function(e,t,n){"use strict";e.exports="15.6.2"},1435:function(e,t,n){"use strict";var r=n(1381).Component,o=n(1377).isValidElement,i=n(1382),a=n(1436);e.exports=a(r,o,i)},1436:function(e,t,n){"use strict";var r=n(179),o=n(282),i=n(281),a="mixins";e.exports=function(e,t,n){var u=[],s={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},l={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},c={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)f(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=h(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){!function(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in c;i(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var u=l.hasOwnProperty(n)?l[n]:null;return i("DEFINE_MANY_MERGED"===u,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=h(e[n],r))}e[n]=r}}}(e,t)},autobind:function(){}};function p(e,t){var n=s.hasOwnProperty(t)?s[t]:null;g.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function f(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,o=r.__reactAutoBindPairs;for(var u in n.hasOwnProperty(a)&&c.mixins(e,n.mixins),n)if(n.hasOwnProperty(u)&&u!==a){var l=n[u],f=r.hasOwnProperty(u);if(p(f,u),c.hasOwnProperty(u))c[u](e,l);else{var d=s.hasOwnProperty(u);if("function"!=typeof l||d||f||!1===n.autobind)if(f){var m=s[u];i(d&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,u),"DEFINE_MANY_MERGED"===m?r[u]=h(r[u],l):"DEFINE_MANY"===m&&(r[u]=y(r[u],l))}else r[u]=l;else o.push(u,l),r[u]=l}}}}function d(e,t){for(var n in i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function h(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return d(o,n),d(o,r),o}}function y(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}var v={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},g={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},x=function(){};return r(x.prototype,e.prototype,g),function(e){var t=function(e){return e}(function(e,r,a){this.__reactAutoBindPairs.length&&function(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=m(e,o)}}(this),this.props=e,this.context=r,this.refs=o,this.updater=a||n,this.state=null;var u=this.getInitialState?this.getInitialState():null;i("object"==typeof u&&!Array.isArray(u),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=u});for(var r in t.prototype=new x,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],u.forEach(f.bind(null,t)),f(t,v),f(t,e),f(t,b),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),s)t.prototype[r]||(t.prototype[r]=null);return t}}},1437:function(e,t,n){"use strict";var r=n(1378),o=n(1377);n(281);e.exports=function(e){return o.isValidElement(e)||r("143"),e}},1438:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},1439:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={container:{position:"relative",fontSize:"1.75vw",minWidth:"75vw",maxWidth:"75vw",left:"50%",transform:"translateX(-50%)"},containerMaximized:{position:"absolute",top:"1rem",right:"1rem",bottom:"5rem",left:"1rem",fontSize:"1.9vw"},header:{position:"relative",padding:"10px",backgroundColor:"#E0E9F0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",boxShadow:"inset 0px -3px 10px 0px rgba(0, 0, 0, 0.2)"},nav:{display:"flex",textAlign:"left",height:"2vw",alignItems:"center"},title:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"1.75vw"},button:{border:"none",borderRadius:"50%",height:"1.5vw",width:"1.5vw",marginRight:"1vw"},buttonClose:{backgroundColor:"#EE5057"},buttonMinimize:{backgroundColor:"#DEC612"},buttonExpand:{backgroundColor:"#33B969"},main:{padding:"15px",backgroundColor:"#303539",color:"white",height:"50vh",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",tabSize:"4",hyphens:"none",overflow:"auto"},mainMaximized:{height:"100%",maxHeight:"none"}}}});