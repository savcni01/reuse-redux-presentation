webpackJsonp([15],{1301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.notes=void 0;var o=n(278),i=r(o),u=n(1),c=(r(u),n(526)),a=n(1341);t.notes="\n\nLets see what we have at state\n\n_TODO:_\n\n* add correct app\n\n";t.default=(0,i.default)(c.Slide,{transition:["fade"]},void 0,(0,i.default)(c.Heading,{size:4},void 0,"Fixed Two Counters Example"),(0,i.default)(a.TwoCountersFixed,{}))},1334:function(e,t,n){e.exports={default:n(1337),__esModule:!0}},1335:function(e,t,n){(function(e){!function(e,n){n(t)}(0,function(t){"use strict";function n(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function u(e,t){u.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,n){c.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function a(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function l(e){var t=void 0===e?"undefined":R(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,n,r,d,s,p){d=d||[],p=p||[];var h=d.slice(0);if(void 0!==s){if(r){if("function"==typeof r&&r(h,s))return;if("object"===(void 0===r?"undefined":R(r))){if(r.prefilter&&r.prefilter(h,s))return;if(r.normalize){var g=r.normalize(h,s,e,t);g&&(e=g[0],t=g[1])}}}h.push(s)}"regexp"===l(e)&&"regexp"===l(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":R(e),m=void 0===t?"undefined":R(t),E="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(s),y="undefined"!==m||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(s);if(!E&&y)n(new i(h,t));else if(!y&&E)n(new u(h,e));else if(l(e)!==l(t))n(new o(h,e,t));else if("date"===l(e)&&e-t!=0)n(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&n(new o(h,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var b;for(e.length,b=0;b<e.length;b++)b>=t.length?n(new c(h,b,new u(void 0,e[b]))):f(e[b],t[b],n,r,h,b,p);for(;b<t.length;)n(new c(h,b,new i(void 0,t[b++])))}else{var T=Object.keys(e),C=Object.keys(t);T.forEach(function(o,i){var u=C.indexOf(o);u>=0?(f(e[o],t[o],n,r,h,o,p),C=a(C,u)):f(e[o],void 0,n,r,h,o,p)}),C.forEach(function(e){f(void 0,t[e],n,r,h,e,p)})}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||n(new o(h,e,t)))}function d(e,t,n,r){return r=r||[],f(e,t,function(e){e&&r.push(e)},n),r.length?r:void 0}function s(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":s(o[n.path[r]],n.index,n.item);break;case"D":delete o[n.path[r]];break;case"E":case"N":o[n.path[r]]=n.rhs}}else switch(n.kind){case"A":s(e[t],n.index,n.item);break;case"D":e=a(e,t);break;case"E":case"N":e[t]=n.rhs}return e}function p(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":s(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function h(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":h(o[n.path[r]],n.index,n.item);break;case"D":case"E":o[n.path[r]]=n.lhs;break;case"N":delete o[n.path[r]]}}else switch(n.kind){case"A":h(e[t],n.index,n.item);break;case"D":case"E":e[t]=n.lhs;break;case"N":e=a(e,t)}return e}function g(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===i[n.path[r]]&&(i[n.path[r]]={}),i=i[n.path[r]];switch(n.kind){case"A":h(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}}function v(e,t,n){if(e&&t){f(e,t,function(r){n&&!n(e,t,r)||p(e,t,r)})}}function m(e){return"color: "+D[e].color+"; font-weight: bold"}function E(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,i=e.index,u=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+i+"]",u];default:return[]}}function y(e,t,n,r){var o=d(e,t);try{r?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}o?o.forEach(function(e){var t=e.kind,r=E(e);n.log.apply(n,["%c "+D[t].text,m(t)].concat(x(r)))}):n.log("—— no diff ——");try{n.groupEnd()}catch(e){n.log("—— diff end —— ")}}function b(e,t,n,r){switch(void 0===e?"undefined":R(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,x(n)):e[r];case"function":return e(t);default:return e}}function T(e){var t=e.timestamp,n=e.duration;return function(e,r,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+r),n&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function C(e,t){var n=t.logger,r=t.actionTransformer,o=t.titleFormatter,i=void 0===o?T(t):o,u=t.collapsed,c=t.colors,a=t.level,l=t.diff,f=void 0===t.titleFormatter;e.forEach(function(o,d){var s=o.started,p=o.startedTime,h=o.action,g=o.prevState,v=o.error,m=o.took,E=o.nextState,T=e[d+1];T&&(E=T.prevState,m=T.started-s);var C=r(h),N="function"==typeof u?u(function(){return E},h,o):u,_=I(p),w=c.title?"color: "+c.title(C)+";":"",O=["color: gray; font-weight: lighter;"];O.push(w),t.timestamp&&O.push("color: gray; font-weight: lighter;"),t.duration&&O.push("color: gray; font-weight: lighter;");var S=i(C,_,m);try{N?c.title&&f?n.groupCollapsed.apply(n,["%c "+S].concat(O)):n.groupCollapsed(S):c.title&&f?n.group.apply(n,["%c "+S].concat(O)):n.group(S)}catch(e){n.log(S)}var A=b(a,C,[g],"prevState"),R=b(a,C,[C],"action"),x=b(a,C,[v,g],"error"),M=b(a,C,[E],"nextState");if(A)if(c.prevState){var D="color: "+c.prevState(g)+"; font-weight: bold";n[A]("%c prev state",D,g)}else n[A]("prev state",g);if(R)if(c.action){var j="color: "+c.action(C)+"; font-weight: bold";n[R]("%c action    ",j,C)}else n[R]("action    ",C);if(v&&x)if(c.error){var k="color: "+c.error(v,g)+"; font-weight: bold;";n[x]("%c error     ",k,v)}else n[x]("error     ",v);if(M)if(c.nextState){var P="color: "+c.nextState(E)+"; font-weight: bold";n[M]("%c next state",P,E)}else n[M]("next state",E);l&&y(g,E,n,N);try{n.groupEnd()}catch(e){n.log("—— log end ——")}})}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},j,e),n=t.logger,r=t.stateTransformer,o=t.errorTransformer,i=t.predicate,u=t.logErrors,c=t.diffPredicate;if(void 0===n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var a=[];return function(e){var n=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(n,l))return e(l);var f={};a.push(f),f.started=A.now(),f.startedTime=new Date,f.prevState=r(n()),f.action=l;var d=void 0;if(u)try{d=e(l)}catch(e){f.error=o(e)}else d=e(l);f.took=A.now()-f.started,f.nextState=r(n());var s=t.diff&&"function"==typeof c?c(n,l):t.diff;if(C(a,Object.assign({},t,{diff:s})),a.length=0,f.error)throw f.error;return d}}}}var _,w,O=function(e,t){return new Array(t+1).join(e)},S=function(e,t){return O("0",t-e.toString().length)+e},I=function(e){return S(e.getHours(),2)+":"+S(e.getMinutes(),2)+":"+S(e.getSeconds(),2)+"."+S(e.getMilliseconds(),3)},A="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},M=[];_="object"===(void 0===e?"undefined":R(e))&&e?e:"undefined"!=typeof window?window:{},w=_.DeepDiff,w&&M.push(function(){void 0!==w&&_.DeepDiff===d&&(_.DeepDiff=w,w=void 0)}),n(o,r),n(i,r),n(u,r),n(c,r),Object.defineProperties(d,{diff:{value:d,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:v,enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return void 0!==w},enumerable:!0},noConflict:{value:function(){return M&&(M.forEach(function(e){e()}),M=null),d},enumerable:!0}});var D={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},j={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;return"function"==typeof t||"function"==typeof n?N()({dispatch:t,getState:n}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=j,t.createLogger=N,t.logger=k,t.default=k,Object.defineProperty(t,"__esModule",{value:!0})})}).call(t,n(27))},1336:function(e,t,n){"use strict";t.__esModule=!0;var r=n(1334),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},1337:function(e,t,n){n(1338),e.exports=n(28).Object.assign},1338:function(e,t,n){var r=n(60);r(r.S+r.F,"Object",{assign:n(1339)})},1339:function(e,t,n){"use strict";var r=n(175),o=n(279),i=n(176),u=n(529),c=n(528),a=Object.assign;e.exports=!a||n(123)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=a({},e)[n]||Object.keys(a({},t)).join("")!=r})?function(e,t){for(var n=u(e),a=arguments.length,l=1,f=o.f,d=i.f;a>l;)for(var s,p=c(arguments[l++]),h=f?r(p).concat(f(p)):r(p),g=h.length,v=0;g>v;)d.call(p,s=h[v++])&&(n[s]=p[s]);return n}:a},1341:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TwoCountersIsolated=t.CounterContainerIsolated=t.isolatedCombinedReducer=t.INITIAL_STATE_ISOLATE=t.TwoCountersSliced=t.CounterContainerSliced=t.slicedCombinedReducer=t.slicedReducer=t.INITIAL_STATE_SLICED=t.TwoCountersFixed=t.CounterContainerBottom=t.CounterContainerTop=t.combinedReducer=t.reducerBottom=t.reducerTop=t.INITIAL_STATE_FIXED=t.TwoCountersApp=t.INITIAL_STATE_TWO=t.CounterApp=t.CounterContainer=t.reducer=t.INITIAL_STATE=t.createStoreEnhanced=void 0;var o,i,u=n(1336),c=r(u),a=n(278),l=r(a),f=n(530),d=r(f),s=n(531),p=r(s),h=n(532),g=r(h),v=n(1334),m=r(v),E=n(1),y=r(E),b=(n(2),n(174)),T=n(527),C=n(1335),N=t.createStoreEnhanced=function(e,t){var n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;return"function"==typeof n?(0,T.createStore)(e,t,n((0,T.applyMiddleware)(C.logger))):(0,T.createStore)(e,t,(0,T.compose)((0,T.applyMiddleware)(C.logger)))},_=t.INITIAL_STATE={count:0},w=t.reducer=function(e,t){switch(t.type){case"COUNTER_INCREMENT":return(0,m.default)({},e,{count:e.count+1});case"COUNTER_DECREMENT":return(0,m.default)({},e,{count:e.count-1});default:return e}},O=N(w,_),S=(i=o=function(e){function t(){var n,r,o;(0,d.default)(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=r=(0,p.default)(this,e.call.apply(e,[this].concat(u))),r.handlePlus=function(){r.props.increment()},r.handleMinus=function(){r.props.decrement()},o=n,(0,p.default)(r,o)}return(0,g.default)(t,e),t.prototype.render=function(){return(0,l.default)("div",{},void 0,(0,l.default)("h2",{},void 0,this.props.count),(0,l.default)("fieldset",{},void 0,(0,l.default)("button",{onClick:this.handlePlus},void 0,"+"),(0,l.default)("button",{onClick:this.handleMinus},void 0,"-")))},t}(y.default.Component),o.defaultProps={count:0},i),I=function(e){return e},A=function(e){return{increment:function(){return e({type:"COUNTER_INCREMENT"})},decrement:function(){return e({type:"COUNTER_DECREMENT"})}}},R=t.CounterContainer=(0,b.connect)(I,A)(S),x=(0,l.default)(b.Provider,{store:O},void 0,(0,l.default)(R,{})),M=(t.CounterApp=function(){return x},t.INITIAL_STATE_TWO={count:0,oneMoreCounter:{count:0}}),D=N(w,M),j=(0,l.default)(b.Provider,{store:D},void 0,(0,l.default)("div",{},void 0,(0,l.default)(R,{}),(0,l.default)(R,{}))),k=(t.TwoCountersApp=function(){return j},t.INITIAL_STATE_FIXED={top:{count:0},bottom:{count:0}}),P=t.reducerTop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.top;switch(arguments[1].type){case"TOP_COUNTER_INCREMENT":return(0,m.default)({},e,{count:e.count+1});case"TOP_COUNTER_DECREMENT":return(0,m.default)({},e,{count:e.count-1});default:return e}},L=t.reducerBottom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.bottom;switch(arguments[1].type){case"BOTTOM_COUNTER_INCREMENT":return(0,m.default)({},e,{count:e.count+1});case"BOTTOM_COUNTER_DECREMENT":return(0,m.default)({},e,{count:e.count-1});default:return e}},U=t.combinedReducer=(0,T.combineReducers)({top:P,bottom:L}),F=(0,T.createStore)(U,k),B=function(e){return e.top},H=function(e){return e.bottom},X=function(e){return{increment:function(){return e({type:"TOP_COUNTER_INCREMENT"})},decrement:function(){return e({type:"TOP_COUNTER_DECREMENT"})}}},z=function(e){return{increment:function(){return e({type:"BOTTOM_COUNTER_INCREMENT"})},decrement:function(){return e({type:"BOTTOM_COUNTER_DECREMENT"})}}},G=t.CounterContainerTop=(0,b.connect)(B,X)(S),W=t.CounterContainerBottom=(0,b.connect)(H,z)(S),Y=(0,l.default)(b.Provider,{store:F},void 0,(0,l.default)("div",{},void 0,(0,l.default)(G,{}),(0,l.default)(W,{}))),q=(t.TwoCountersFixed=function(){return Y},t.INITIAL_STATE_SLICED={top:{count:1},my:{custom:{bottomCounter:{count:5}}}}),J=t.slicedReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments[1];switch(console.log("reducerSliced",t,e),t.type){case"COUNTER_INCREMENT":return(0,m.default)({},e,{count:e.count+1});case"COUNTER_DECREMENT":return(0,m.default)({},e,{count:e.count-1});default:return e}},K=t.slicedCombinedReducer=(0,T.combineReducers)({top:J,my:(0,T.combineReducers)({custom:(0,T.combineReducers)({bottomCounter:J})})}),V=N(K,q),Q=function(e,t){var n=t.isolateId,r=t.selector;return r||(r=function(e){return e[n]}),r(e)},Z=function(e){return{increment:function(){return e({type:"COUNTER_INCREMENT"})},decrement:function(){return e({type:"COUNTER_DECREMENT"})}}},$=t.CounterContainerSliced=(0,b.connect)(Q,Z)(S),ee=(0,l.default)($,{isolateId:"top"}),te=(t.TwoCountersSliced=function(){return(0,l.default)(b.Provider,{store:V},void 0,(0,l.default)("div",{},void 0,ee,(0,l.default)($,{isolateId:"bottom",selector:function(e){return e.my.custom.bottomCounter}})))},t.INITIAL_STATE_ISOLATE={top:{count:3},my:{custom:{bottomCounter:{count:6}}}}),ne=function(e,t,n){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,o=arguments[1],i=o.type.split("."),u=i[0],a=i[1];return e!==u?(console.log("action with ALIEN prefix",e,o.type),r):(console.log("action with MY prefix",e,o.type),t(r,(0,c.default)({},o,{type:a})))}},re=t.isolatedCombinedReducer=(0,T.combineReducers)({top:ne("top",J,te.top),my:(0,T.combineReducers)({custom:(0,T.combineReducers)({bottomCounter:ne("bottom",J,te.my.custom.bottomCounter)})})}),oe=N(re,te),ie=function(e,t){var n=t.isolateId,r=t.selector;return"function"!=typeof r&&n&&(r=function(e){return e[n]}),"function"==typeof r?r(e):e},ue=function(e,t){var n=t.isolateId;if(n){var r=e;e=function(e){var t=n+"."+e.type,o=(0,c.default)({},e,{type:t});return r(o)}}return{increment:function(){return e({type:"COUNTER_INCREMENT"})},decrement:function(){return e({type:"COUNTER_DECREMENT"})}}},ce=t.CounterContainerIsolated=(0,b.connect)(ie,ue)(S),ae=(0,l.default)(ce,{isolateId:"top"});t.TwoCountersIsolated=function(){return(0,l.default)(b.Provider,{store:oe},void 0,(0,l.default)("div",{},void 0,ae,(0,l.default)(ce,{isolateId:"bottom",selector:function(e){return e.my.custom.bottomCounter}})))}}});