webpackJsonp([1],{1350:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notes=void 0;var n=a(r(279)),o=(a(r(1)),r(525)),i=r(1447);function a(e){return e&&e.__esModule?e:{default:e}}t.notes="\nbodkim she akol oved\n";t.default=(0,n.default)(o.Slide,{transition:["fade"]},void 0,(0,n.default)(o.Heading,{size:4},void 0,"Island Counters Example"),(0,n.default)(i.CounterApp,{}))},1372:function(e,t,r){(function(e){!function(e,r){r(t)}(0,function(t){"use strict";function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,r){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function c(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function l(e){var t=void 0===e?"undefined":E(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,r,n,s,d,p){s=s||[],p=p||[];var v=s.slice(0);if(void 0!==d){if(n){if("function"==typeof n&&n(v,d))return;if("object"===(void 0===n?"undefined":E(n))){if(n.prefilter&&n.prefilter(v,d))return;if(n.normalize){var h=n.normalize(v,d,e,t);h&&(e=h[0],t=h[1])}}}v.push(d)}"regexp"===l(e)&&"regexp"===l(t)&&(e=e.toString(),t=t.toString());var y=void 0===e?"undefined":E(e),g=void 0===t?"undefined":E(t),m="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),b="undefined"!==g||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!m&&b)r(new i(v,t));else if(!b&&m)r(new a(v,e));else if(l(e)!==l(t))r(new o(v,e,t));else if("date"===l(e)&&e-t!=0)r(new o(v,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new o(v,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var S;for(e.length,S=0;S<e.length;S++)S>=t.length?r(new u(v,S,new a(void 0,e[S]))):f(e[S],t[S],r,n,v,S,p);for(;S<t.length;)r(new u(v,S,new i(void 0,t[S++])))}else{var _=Object.keys(e),O=Object.keys(t);_.forEach(function(o,i){var a=O.indexOf(o);a>=0?(f(e[o],t[o],r,n,v,o,p),O=c(O,a)):f(e[o],void 0,r,n,v,o,p)}),O.forEach(function(e){f(void 0,t[e],r,n,v,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new o(v,e,t)))}function s(e,t,r,n){return n=n||[],f(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=c(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r,n){var o=s(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+j[t].text,function(e){return"color: "+j[e].color+"; font-weight: bold"}(t)].concat(O(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function v(e,t,r,n){switch(void 0===e?"undefined":E(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,O(r)):e[n];case"function":return e(t);default:return e}}function h(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,u=t.colors,c=t.level,l=t.diff,f=void 0===t.titleFormatter;e.forEach(function(o,s){var d=o.started,h=o.startedTime,y=o.action,g=o.prevState,m=o.error,b=o.took,_=o.nextState,E=e[s+1];E&&(_=E.prevState,b=E.started-d);var O=n(y),P="function"==typeof a?a(function(){return _},y,o):a,j=S(h),w=u.title?"color: "+u.title(O)+";":"",C=["color: gray; font-weight: lighter;"];C.push(w),t.timestamp&&C.push("color: gray; font-weight: lighter;"),t.duration&&C.push("color: gray; font-weight: lighter;");var k=i(O,j,b);try{P?u.title&&f?r.groupCollapsed.apply(r,["%c "+k].concat(C)):r.groupCollapsed(k):u.title&&f?r.group.apply(r,["%c "+k].concat(C)):r.group(k)}catch(e){r.log(k)}var A=v(c,O,[g],"prevState"),D=v(c,O,[O],"action"),x=v(c,O,[m,g],"error"),M=v(c,O,[_],"nextState");if(A)if(u.prevState){var T="color: "+u.prevState(g)+"; font-weight: bold";r[A]("%c prev state",T,g)}else r[A]("prev state",g);if(D)if(u.action){var N="color: "+u.action(O)+"; font-weight: bold";r[D]("%c action    ",N,O)}else r[D]("action    ",O);if(m&&x)if(u.error){var R="color: "+u.error(m,g)+"; font-weight: bold;";r[x]("%c error     ",R,m)}else r[x]("error     ",m);if(M)if(u.nextState){var I="color: "+u.nextState(_)+"; font-weight: bold";r[M]("%c next state",I,_)}else r[M]("next state",_);l&&p(g,_,r,P);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},w,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,u=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var c=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var f={};c.push(f),f.started=_.now(),f.startedTime=new Date,f.prevState=n(r()),f.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){f.error=o(e)}else s=e(l);f.took=_.now()-f.started,f.nextState=n(r());var d=t.diff&&"function"==typeof u?u(r,l):t.diff;if(h(c,Object.assign({},t,{diff:d})),c.length=0,f.error)throw f.error;return s}}}}var g,m,b=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},S=function(e){return b(e.getHours(),2)+":"+b(e.getMinutes(),2)+":"+b(e.getSeconds(),2)+"."+b(e.getMilliseconds(),3)},_="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},P=[];g="object"===(void 0===e?"undefined":E(e))&&e?e:"undefined"!=typeof window?window:{},(m=g.DeepDiff)&&P.push(function(){void 0!==m&&g.DeepDiff===s&&(g.DeepDiff=m,m=void 0)}),r(o,n),r(i,n),r(a,n),r(u,n),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&f(e,t,function(n){r&&!r(e,t,n)||d(e,t,n)})},enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=c(t,r)}return t}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==m},enumerable:!0},noConflict:{value:function(){return P&&(P.forEach(function(e){e()}),P=null),s},enumerable:!0}});var j={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},w={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?y()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=w,t.createLogger=y,t.logger=C,t.default=C,Object.defineProperty(t,"__esModule",{value:!0})})}).call(t,r(27))},1373:function(e,t,r){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1374));t.default=n.default||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}},1374:function(e,t,r){e.exports={default:r(1375),__esModule:!0}},1375:function(e,t,r){r(1376),e.exports=r(28).Object.assign},1376:function(e,t,r){var n=r(60);n(n.S+n.F,"Object",{assign:r(1377)})},1377:function(e,t,r){"use strict";var n=r(177),o=r(280),i=r(178),a=r(528),u=r(527),c=Object.assign;e.exports=!c||r(125)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=c({},e)[r]||Object.keys(c({},t)).join("")!=n})?function(e,t){for(var r=a(e),c=arguments.length,l=1,f=o.f,s=i.f;c>l;)for(var d,p=u(arguments[l++]),v=f?n(p).concat(f(p)):n(p),h=v.length,y=0;h>y;)s.call(p,d=v[y++])&&(r[d]=p[d]);return r}:c},1378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=void 0;var n=r(526),o=r(1372);t.createStore=function(e,t){var r=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;return"function"==typeof r?(0,n.createStore)(e,t,r((0,n.applyMiddleware)(o.logger))):(0,n.createStore)(e,t,(0,n.compose)((0,n.applyMiddleware)(o.logger)))}},1383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isolateDispatch=void 0;var n=r(1390);t.isolateDispatch=function(e){return function(t){return function(r){return t((0,n.isolateAction)(e,r))}}}},1389:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.islandedThunk=void 0;var n=r(1383);function o(e){return function(t){var r=t.dispatch,o=t.getState;return function(t){return function(i){if(!i)return t(i);var a=i.meta;if(!a)return t(i);var u=a.thunk,c=a.isolateId;return"function"!=typeof u?t(i):u(c?(0,n.isolateDispatch)(c)(r):r,o,e,r)}}}}(t.islandedThunk=o()).withExtraArgument=o},1390:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unisolateAction=t.isolateAction=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(1452);t.isolateAction=function(e,t){if("object"!==(void 0===t?"undefined":o(t)))return t;if(!t.type)return t;var r=Object.assign({},t.meta||{});return r.isolateId=e,n({},t,{type:e+"."+t.type,meta:r})},t.unisolateAction=function(e,t){if(t.type===e)return t;var r=(0,i.parseIsolatedAction)(e,t.type);return r?n({},t,{type:r}):null}},1447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CounterApp=void 0;var n,o,i,a=y(r(1373)),u=y(r(279)),c=y(r(529)),l=y(r(530)),f=y(r(531)),s=y(r(1)),d=(r(2),r(526)),p=r(176),v=r(1448),h=r(1378);function y(e){return e&&e.__esModule?e:{default:e}}var g=(o=n=function(e){function t(){var r,n,o;(0,c.default)(this,t);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return r=n=(0,l.default)(this,e.call.apply(e,[this].concat(a))),n.handlePlus=function(){n.props.increment()},n.handleMinus=function(){n.props.decrement()},o=r,(0,l.default)(n,o)}return(0,f.default)(t,e),t.prototype.render=function(){return(0,u.default)("div",{className:"counter-example"},void 0,(0,u.default)("h2",{},void 0,this.props.count),(0,u.default)("fieldset",{},void 0,(0,u.default)("button",{onClick:this.handlePlus},void 0,"+"),(0,u.default)("button",{onClick:this.handleMinus},void 0,"-")))},t}(s.default.Component),n.defaultProps={count:0},o),m={top:{count:33},my:{custom:{bottomCounter:{count:42}}}},b=function(){return{type:"COUNTER_INCREMENT"}},S=function(){return{type:"COUNTER_DECREMENT"}},_=((i={}).COUNTER_INCREMENT=function(e){return(0,a.default)({},e,{count:e.count+1})},i.COUNTER_DECREMENT=function(e){return(0,a.default)({},e,{count:e.count-1})},i),E=(0,v.makeReducer)({actionsMap:_,initialState:m}),O=(0,d.combineReducers)({top:(0,v.isolateReducer)(["top"],E),my:(0,d.combineReducers)({custom:(0,d.combineReducers)({bottomCounter:(0,v.isolateReducer)(["bottom"],E)})})}),P=(0,h.createStore)(O,m),j=(0,v.islandedConnect)(function(e,t,r){return{count:e.count}},function(e){return{increment:(0,d.bindActionCreators)(b,e),decrement:(0,d.bindActionCreators)(S,e)}})(g);t.CounterApp=function(){return(0,u.default)(p.Provider,{store:P},void 0,(0,u.default)("div",{},void 0,(0,u.default)(j,{isolateId:"top",selector:function(e){return e.top}}),(0,u.default)(j,{isolateId:"bottom",selector:function(e){return e.my.custom.bottomCounter}})))}},1448:function(e,t,r){"use strict";const n=r(1449);e.exports=n},1449:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeReducer=t.makeActionCreatorEnhancers=t.isolateReducer=t.isolateDispatch=t.islandedThunk=t.islandedConnect=t.enhanceActionCreatorsBinderWithDataProvider=t.createCustomStore=void 0;var n=r(1450),o=r(1383),i=r(1453),a=r(1389),u=r(1455),c=r(1456),l=r(1457);t.createCustomStore=n.createCustomStore,t.enhanceActionCreatorsBinderWithDataProvider=c.enhanceActionCreatorsBinderWithDataProvider,t.islandedConnect=i.islandedConnect,t.islandedThunk=a.islandedThunk,t.isolateDispatch=o.isolateDispatch,t.isolateReducer=u.isolateReducer,t.makeActionCreatorEnhancers=c.makeActionCreatorEnhancers,t.makeReducer=l.makeReducer},1450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createCustomStore=t.getComposeEnhancers=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(526),i=c(r(1451)),a=c(r(1372)),u=r(1389);function c(e){return e&&e.__esModule?e:{default:e}}var l=t.getComposeEnhancers=function(e){if("object"!==(void 0===e?"undefined":n(e)))return!1;var t=e.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;return"function"==typeof t&&t};t.createCustomStore=function(e,t,r){var n=l(e)||o.compose;return(0,o.createStore)(t,r,n((0,o.applyMiddleware)(u.islandedThunk,i.default,a.default)))}},1451:function(e,t,r){"use strict";function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}Object.defineProperty(t,"__esModule",{value:!0});var o=n();o.withExtraArgument=n,t.default=o},1452:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.parseIsolatedAction=function(e,t){var r=e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"),n=new RegExp("^"+r+"\\.(.+)"),o=t.match(n);return!!o&&o[1]}},1453:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.islandedConnect=t.newMergeProps=t.makeMapDispatchToProps=t.makeMapStateToProps=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(176),i=r(1383),a=function(e){return e&&e.__esModule?e:{default:e}}(r(1454));var u=t.makeMapStateToProps=function(e){return"function"!=typeof e?e:function(t,r){var n=r.selector;return"function"==typeof n?e(n(t),r,t):e(t,r)}},c=t.makeMapDispatchToProps=function(e){return"function"!=typeof e?e:function(t,r){var n=r.isolateId;if(n){var o=(0,i.isolateDispatch)(n)(t);return e(o,r,t)}return e(t,r)}},l=t.newMergeProps=function(e,t,r){return n({},e,t,r)};t.islandedConnect=function(e,t,r,n){return function(r){var i=u(e),f=c(t);return(0,a.default)((0,o.connect)(i,f,l,n)(r))}}},1454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=c(r(2)),a=r(1),u=c(a);function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t={isolateId:i.default.string},r={dataProvider:i.default.object,selector:i.default.func},c={dataProvider:i.default.object,selector:i.default.func},l=function(t){function r(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return n.dataProvider=r.computeDataProvider(e,t),n.selector=r.computeSelector(e,t),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,a.Component),o(r,[{key:"getChildContext",value:function(){return{dataProvider:this.dataProvider,selector:this.selector}}},{key:"render",value:function(){var t={};return this.dataProvider&&(t.dataProvider=this.dataProvider),this.selector&&(t.selector=this.selector),u.default.createElement(e,n({},this.props,t))}}],[{key:"computeDataProvider",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.dataProvider||t.dataProvider||void 0}},{key:"computeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).selector,r=e.selector,n="function"==typeof t,o="function"==typeof r;return n&&o?function(e){return r(t(e))}:n?function(e){return t(e)}:o?function(e){return r(e)}:void 0}}]),r}(),f=e.displayName||e.name||"Component";return l.WrappedComponent=e,l.displayName="Island("+f+")",l.childContextTypes=r,l.contextTypes=c,l.propTypes=Object.assign({},c,t),l}},1455:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isolateReducer=void 0;var n=r(1390);t.isolateReducer=function(e,t){var r=t.initState||t.initialState||null;return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,i=arguments[1];return Array.isArray(e)||(e=[e]),e.map(function(e){return(0,n.unisolateAction)(e,i)}).reduce(function(e,r){return r?t(e,r):e},o)}}},1456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeActionCreatorEnhancers=t.makeWithDataProviderEnhancer=t.enhanceActionCreatorsBinderWithDataProvider=t.getCurrentDataProvider=void 0;var n=r(526),o=t.getCurrentDataProvider=function(e,t,r){return t?t[e]?t[e]:t:r},i=(t.enhanceActionCreatorsBinderWithDataProvider=function(e,t){return function(r,i,a){var u=o(t,r.dataProvider,e);return(0,n.bindActionCreators)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return i.apply(void 0,[u].concat(t))},a)}},t.makeWithDataProviderEnhancer=function(e,t){return function(r){return function(n){return function(){for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return r.apply(void 0,[o(t,n,e)].concat(a))}}}});t.makeActionCreatorEnhancers=function(e,t,r){var n=r.defaultDataProvider;console.warn("makeActionCreatorEnhancers DEPRECATED, use enhanceActionCreatorsBinderWithDataProvider instead");var o=i(n,t);return Object.keys(e).reduce(function(t,r){var n=e[r],i=n();return i.meta&&"function"==typeof i.meta.thunk&&(t[r+"Enhancer"]=o(n)),t},{})}},1457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.makeReducer=function(e){var t=e.initState,r=e.initialState,o=e.actionsMap,i=e.customReducer,a=e.reduceApi;r||(r=t);var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];if("object"===(void 0===o?"undefined":n(o))){var a=o[t.type];if("function"==typeof a)return a(e,t)}return i?i(e,t):e};return u.initState=r,u.initialState=r,u.api=a,u}}});