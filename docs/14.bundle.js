webpackJsonp([14],{1341:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notes=void 0;var n=a(r(279)),o=(a(r(1)),r(525)),i=r(1419);function a(e){return e&&e.__esModule?e:{default:e}}t.notes="\nKan efshar lirot she Counters meshtamshim ba-nitunim sjonim\nlamrot she le shihpalnu at-mapStateToProps ve-mapDispatchToProps\n\nIm anahnu meashanim ehad mi Counters, meshtane gam at a-sheni\n\nBou niftah debug, ve-nire she oto Action tofes paamaim,\nVe combinedReducer maric Action le shnej slicim\n\nShe omer she hayavim Incapsulate gam Action\n";t.default=(0,n.default)(o.Slide,{transition:["fade"]},void 0,(0,n.default)(o.Heading,{size:4},void 0,"Two Sliced Counters Example"),(0,n.default)(i.TwoCountersSliced,{}))},1371:function(e,t,r){(function(e){!function(e,r){r(t)}(0,function(t){"use strict";function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,r){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function c(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function l(e){var t=void 0===e?"undefined":E(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,r,n,s,d,p){s=s||[],p=p||[];var h=s.slice(0);if(void 0!==d){if(n){if("function"==typeof n&&n(h,d))return;if("object"===(void 0===n?"undefined":E(n))){if(n.prefilter&&n.prefilter(h,d))return;if(n.normalize){var g=n.normalize(h,d,e,t);g&&(e=g[0],t=g[1])}}}h.push(d)}"regexp"===l(e)&&"regexp"===l(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":E(e),m=void 0===t?"undefined":E(t),b="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),y="undefined"!==m||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&y)r(new i(h,t));else if(!y&&b)r(new a(h,e));else if(l(e)!==l(t))r(new o(h,e,t));else if("date"===l(e)&&e-t!=0)r(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new o(h,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new u(h,w,new a(void 0,e[w]))):f(e[w],t[w],r,n,h,w,p);for(;w<t.length;)r(new u(h,w,new i(void 0,t[w++])))}else{var S=Object.keys(e),x=Object.keys(t);S.forEach(function(o,i){var a=x.indexOf(o);a>=0?(f(e[o],t[o],r,n,h,o,p),x=c(x,a)):f(e[o],void 0,r,n,h,o,p)}),x.forEach(function(e){f(void 0,t[e],r,n,h,e,p)})}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function s(e,t,r,n){return n=n||[],f(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=c(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r,n){var o=s(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+O[t].text,function(e){return"color: "+O[e].color+"; font-weight: bold"}(t)].concat(x(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function h(e,t,r,n){switch(void 0===e?"undefined":E(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,x(r)):e[n];case"function":return e(t);default:return e}}function g(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,u=t.colors,c=t.level,l=t.diff,f=void 0===t.titleFormatter;e.forEach(function(o,s){var d=o.started,g=o.startedTime,v=o.action,m=o.prevState,b=o.error,y=o.took,S=o.nextState,E=e[s+1];E&&(S=E.prevState,y=E.started-d);var x=n(v),j="function"==typeof a?a(function(){return S},v,o):a,O=w(g),C=u.title?"color: "+u.title(x)+";":"",_=["color: gray; font-weight: lighter;"];_.push(C),t.timestamp&&_.push("color: gray; font-weight: lighter;"),t.duration&&_.push("color: gray; font-weight: lighter;");var k=i(x,O,y);try{j?u.title&&f?r.groupCollapsed.apply(r,["%c "+k].concat(_)):r.groupCollapsed(k):u.title&&f?r.group.apply(r,["%c "+k].concat(_)):r.group(k)}catch(e){r.log(k)}var A=h(c,x,[m],"prevState"),D=h(c,x,[x],"action"),N=h(c,x,[b,m],"error"),P=h(c,x,[S],"nextState");if(A)if(u.prevState){var T="color: "+u.prevState(m)+"; font-weight: bold";r[A]("%c prev state",T,m)}else r[A]("prev state",m);if(D)if(u.action){var M="color: "+u.action(x)+"; font-weight: bold";r[D]("%c action    ",M,x)}else r[D]("action    ",x);if(b&&N)if(u.error){var R="color: "+u.error(b,m)+"; font-weight: bold;";r[N]("%c error     ",R,b)}else r[N]("error     ",b);if(P)if(u.nextState){var F="color: "+u.nextState(S)+"; font-weight: bold";r[P]("%c next state",F,S)}else r[P]("next state",S);l&&p(m,S,r,j);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},C,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,u=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var c=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var f={};c.push(f),f.started=S.now(),f.startedTime=new Date,f.prevState=n(r()),f.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){f.error=o(e)}else s=e(l);f.took=S.now()-f.started,f.nextState=n(r());var d=t.diff&&"function"==typeof u?u(r,l):t.diff;if(g(c,Object.assign({},t,{diff:d})),c.length=0,f.error)throw f.error;return s}}}}var m,b,y=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},w=function(e){return y(e.getHours(),2)+":"+y(e.getMinutes(),2)+":"+y(e.getSeconds(),2)+"."+y(e.getMilliseconds(),3)},S="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},j=[];m="object"===(void 0===e?"undefined":E(e))&&e?e:"undefined"!=typeof window?window:{},(b=m.DeepDiff)&&j.push(function(){void 0!==b&&m.DeepDiff===s&&(m.DeepDiff=b,b=void 0)}),r(o,n),r(i,n),r(a,n),r(u,n),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&f(e,t,function(n){r&&!r(e,t,n)||d(e,t,n)})},enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=c(t,r)}return t}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==b},enumerable:!0},noConflict:{value:function(){return j&&(j.forEach(function(e){e()}),j=null),s},enumerable:!0}});var O={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},C={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?v()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=C,t.createLogger=v,t.logger=_,t.default=_,Object.defineProperty(t,"__esModule",{value:!0})})}).call(t,r(27))},1372:function(e,t,r){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1373));t.default=n.default||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}},1373:function(e,t,r){e.exports={default:r(1374),__esModule:!0}},1374:function(e,t,r){r(1375),e.exports=r(28).Object.assign},1375:function(e,t,r){var n=r(60);n(n.S+n.F,"Object",{assign:r(1376)})},1376:function(e,t,r){"use strict";var n=r(177),o=r(280),i=r(178),a=r(528),u=r(527),c=Object.assign;e.exports=!c||r(125)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=c({},e)[r]||Object.keys(c({},t)).join("")!=n})?function(e,t){for(var r=a(e),c=arguments.length,l=1,f=o.f,s=i.f;c>l;)for(var d,p=u(arguments[l++]),h=f?n(p).concat(f(p)):n(p),g=h.length,v=0;g>v;)s.call(p,d=h[v++])&&(r[d]=p[d]);return r}:c},1377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=void 0;var n=r(526),o=r(1371);t.createStore=function(e,t){var r=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;return"function"==typeof r?(0,n.createStore)(e,t,r((0,n.applyMiddleware)(o.logger))):(0,n.createStore)(e,t,(0,n.compose)((0,n.applyMiddleware)(o.logger)))}},1419:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TwoCountersSliced=t.CounterContainer=void 0;var n,o,i=h(r(279)),a=h(r(529)),u=h(r(530)),c=h(r(531)),l=h(r(1372)),f=h(r(1)),s=(r(2),r(176)),d=r(526),p=r(1377);function h(e){return e&&e.__esModule?e:{default:e}}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(console.log("sliced reducer",t,e),t.type){case"COUNTER_INCREMENT":return(0,l.default)({},e,{count:e.count+1});case"COUNTER_DECREMENT":return(0,l.default)({},e,{count:e.count-1});default:return e}},v=(0,d.combineReducers)({top:g,my:(0,d.combineReducers)({custom:(0,d.combineReducers)({bottomCounter:g})})}),m=(0,p.createStore)(v,{top:{count:17},my:{custom:{bottomCounter:{count:58}}}}),b=(o=n=function(e){function t(){var r,n,o;(0,a.default)(this,t);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return r=n=(0,u.default)(this,e.call.apply(e,[this].concat(c))),n.handlePlus=function(){n.props.increment()},n.handleMinus=function(){n.props.decrement()},o=r,(0,u.default)(n,o)}return(0,c.default)(t,e),t.prototype.render=function(){return(0,i.default)("div",{className:"counter-example"},void 0,(0,i.default)("h2",{},void 0,this.props.count),(0,i.default)("fieldset",{},void 0,(0,i.default)("button",{onClick:this.handlePlus},void 0,"+"),(0,i.default)("button",{onClick:this.handleMinus},void 0,"-")))},t}(f.default.Component),n.defaultProps={count:0},o),y=t.CounterContainer=(0,s.connect)(function(e,t){var r=t.isolateId,n=t.selector;return n||(n=function(e){return e[r]}),{count:n(e).count}},function(e){return{increment:function(){return e({type:"COUNTER_INCREMENT"})},decrement:function(){return e({type:"COUNTER_DECREMENT"})}}})(b),w=(0,i.default)(y,{isolateId:"top"});t.TwoCountersSliced=function(){return(0,i.default)(s.Provider,{store:m},void 0,(0,i.default)("div",{},void 0,w,(0,i.default)(y,{isolateId:"bottom",selector:function(e){return e.my.custom.bottomCounter}})))}}});