(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[95864],{275577:function(t,e,r){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/settings/notifications/[category]"]=function(){return r(943570).Z}},454514:function(t,e,r){"use strict";r.d(e,{UZ:function(){return l},Vg:function(){return f},ZP:function(){return y}});var n=r(672652),o=r(684404),i=r(554786),u=r(494125),c=r(819267);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var f=200,l=function(t){var e=t.deviceType,r=t.hiding,n=t.visible,o="desktop"===e,i=0,u=o?"translateY(200px)":"translateY(-200px)",c="opacity 0.1s ease-in-out",a="hidden";return n&&!r&&(i=1,u="translateY(0)",c="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",a="visible"),n&&r&&(u="scale(1.1)",c="opacity transform ".concat(.2,"s")),{opacity:i,pointerEvents:"auto",position:"relative",marginTop:o?10:0,transform:u,transition:c,visibility:a}};function y(t){var e,r,s=t._dangerouslySetThumbnail,y=t._dangerouslySetPrimaryAction,p=t.text,m=t.primaryAction,b=t.dismissButton,d=t.helperLink,v=t.thumbnail,h=t.type,g=t.dataTestId,S=t.duration,x=void 0===S?2e3:S,j=t.onHide,O=t.href,_=t.onClick,P=t.openNewPage,w=t.imageUrl,$=(0,i.ZP)(),C=a((0,n.useState)(!1),2),A=C[0],E=C[1],T=a((0,n.useState)(!1),2),M=T[0],L=T[1],D=(0,n.useRef)(),Z=function(){E(!0),D.current=setTimeout(j,f)},R=function(){D.current=setTimeout(Z,x)},k=function(){D.current&&clearTimeout(D.current)};(0,u.Z)(function(){return setTimeout(function(){return L(!0)},100),R(),k}),w&&(r={image:(0,c.jsx)(o.Ee,{alt:"string"==typeof p?p:"".concat(p[0]," ").concat(p[1]),fit:"cover",naturalHeight:1,naturalWidth:1,src:w})});var F=(0,c.jsx)(o.FN,{_dangerouslySetPrimaryAction:y,_dangerouslySetThumbnail:s,dismissButton:b,helperLink:d,primaryAction:m,text:p,thumbnail:null!==(e=r)&&void 0!==e?e:v,type:h}),q=l({deviceType:$,hiding:A,visible:M}),H=q.marginTop,I=q.opacity,N=q.pointerEvents,z=q.position,U=q.transform,B=q.transition,G=q.visibility;return(0,c.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{transform:U,transition:B,visibility:G,pointerEvents:N}},"data-test-id":null!=g?g:"toast",display:"flex",marginTop:H,onMouseEnter:k,onMouseLeave:R,opacity:I,position:z,children:O?(0,c.jsx)(o.Tg,{href:O,onTap:function(t){var e=t.event,r=t.dangerouslyDisableOnNavigation;O.startsWith("#")&&(e.preventDefault(),r()),null==_||_(e)},rounding:"pill",target:P?"blank":null,children:F}):F})}},5859:function(t,e,r){"use strict";r.d(e,{B:function(){return b},LC:function(){return p},P2:function(){return y},fH:function(){return m},gf:function(){return d}});var n=r(672652),o=r(642190),i=r(520893),u=r(819267);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach(function(e){var n,o;n=e,o=r[e],(n=function(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==c(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===c(e)?e:String(e)}(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var l=(0,n.createContext)();function y(t){var e,r=t.children,c=t.initialValue,a=function(t){if(Array.isArray(t))return t}(e=(0,n.useState)(c))||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return c}}(e,2)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),y=a[0],p=a[1],m=(0,n.useMemo)(function(){return{requestContext:y,updateRequestContext:function(t){var e=s(s({},y),t);(0,i.Z)(y,t)||p(e),(0,o.J)(e)}}},[y]);return(0,u.jsx)(l.Provider,{value:m,children:r})}var p=function(t){var e=t.children,r=(0,n.useContext)(l);if(!r)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(r.requestContext)},m=function(t){var e=t.children,r=(0,n.useContext)(l);if(!r)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(r.requestContext)};function b(){var t=(0,n.useContext)(l);if(!t)throw Error("useRequestContext must be used within a RequestContextProvider");return t.requestContext}function d(){var t=(0,n.useContext)(l);if(!t)throw Error("useUpdateRequestContext must be used within a RequestContextProvider");return t.updateRequestContext}},642190:function(t,e,r){"use strict";var n;function o(t){n=t}function i(){return n}r.d(e,{J:function(){return o},l:function(){return i}})},520893:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(Object.is(t,e))return!0;if("object"!==n(t)||null===t||"object"!==n(e)||null===e)return!1;var r=Object.keys(t),o=Object.keys(e);return r.length===o.length&&r.every(function(r){return t[r]===e[r]})}r.d(e,{Z:function(){return o}})},13848:function(t,e,r){"use strict";r.d(e,{F9:function(){return i},Zo:function(){return o}});var n=(0,r(342513).Z)("toastManagerContext"),o=n.Provider,i=n.useHook},554786:function(t,e,r){"use strict";r.d(e,{HG:function(){return l},Kf:function(){return u},Mq:function(){return o},Wb:function(){return f},dA:function(){return c},ds:function(){return a},ml:function(){return s}});var n=r(5859);function o(t){var e=t.userAgent,r=e.isMobile;return e.isTablet?"tablet":r?"phone":"desktop"}var i=function(){return o((0,n.B)())},u=function(t){return"phone"===t},c=function(t){return"tablet"===t},a=function(t){return"desktop"===t},s=function(){return u(i())},f=function(){return c(i())},l=function(){return a(i())};e.ZP=i},494125:function(t,e,r){"use strict";var n=r(672652);e.Z=function(t){(0,n.useEffect)(t,[])}},943570:function(t,e,r){"use strict";r.d(e,{Z:function(){return _}});var n=r(672652),o=r(328038),i=r(684404),u=r(107366),c=r(454514),a=r(140017),s=r(165706),f=r(179425),l=r(797972),y=r(36938),p=r(340523),m=r(13848),b=r(554786),d=r(149722),v=r(19434),h=r(42978),g=r(819267);function S(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){r(t);return}c.done?e(a):Promise.resolve(a).then(n,o)}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function O(){var t,e=(0,a.ZP)(),r=(0,m.F9)().showToast,p=x((0,n.useState)(null),2),b=p[0],d=p[1],j=x((0,o.TH)().pathname.split("/").filter(function(t){return""!==t}).slice(-1),1)[0];return((0,n.useEffect)(function(){var t,n;(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)({method:"GET",url:"/v3/settings/notifications/".concat(j)});case 3:d(t.sent.resource_response.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r(function(t){var r=t.hideToast;return(0,g.jsx)(c.ZP,{onHide:r,text:(0,y.e$)(e)})});case 11:case"end":return t.stop()}},t,null,[[0,8]])}),n=function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function u(t){S(i,n,o,u,c,"next",t)}function c(t){S(i,n,o,u,c,"throw",t)}u(void 0)})},function(){return n.apply(this,arguments)})()},[j]),b&&(0===Object.keys(b||{}).length||(null==b?void 0:b.key)!==j))?(0,g.jsx)(o.l_,{push:!1,to:l.GT}):j===l.UM||j===l.bv?(0,g.jsx)(o.l_,{push:!1,to:l.zK}):(0,g.jsx)(f.default,{hasFixedHeader:!0,children:b?(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(s.FixedHeader,{paddingY:0,zIndexForGestaltBug:2,children:(0,g.jsx)(v.default,{heading:null==b?void 0:b.label,legoSettingsEnabled:!0,previousUrl:"/settings/notifications/"})}),(0,g.jsx)(i.xu,{"data-test-id":"notifications-settings-subcategories",paddingX:2,children:null==b?void 0:null===(t=b.subcategories)||void 0===t?void 0:t.map(function(t){var e=t.channel_options_label,r=t.key,n=t.label;return(0,g.jsx)(h.Z,{description:e,heading:n,href:"/settings/notifications/".concat(b.key,"/").concat(r),iconAccessibilityLabel:t.label},r)})})]}):(0,g.jsx)(i.$j,{accessibilityLabel:e._('Loading your settings', 'settings.notifications.loadingSpinner', 'accessbility label for the loading spinner on notifications settings edit page'),show:!0})})}var _=function(){var t=(0,b.HG)(),e=(0,d.Z)(),r=e.isLimitedLogin,n=e.isAuth,i=(0,(0,p.F)().checkExperiment)(l.Yv).anyEnabled;return r?(0,g.jsx)(o.l_,{to:"/login"}):n?t||!i?(0,g.jsx)(o.l_,{to:l.GT}):(0,g.jsx)(O,{}):(0,g.jsx)(o.l_,{to:"/"})}},894288:function(t,e,r){"use strict";var n=r(460695),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function a(t){return n.isMemo(t)?u:c[t.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=u;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(m){var o=p(r);o&&o!==m&&t(e,o,n)}var u=f(r);l&&(u=u.concat(l(r)));for(var c=a(e),b=a(r),d=0;d<u.length;++d){var v=u[d];if(!i[v]&&!(n&&n[v])&&!(b&&b[v])&&!(c&&c[v])){var h=y(r,v);try{s(e,v,h)}catch(t){}}}}return e}},381932:function(t,e){"use strict";/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,b=n?Symbol.for("react.memo"):60115,d=n?Symbol.for("react.lazy"):60116;function v(t){if("object"===r(t)&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case y:case u:case a:case c:case m:return t;default:switch(t=t&&t.$$typeof){case f:case p:case s:return t;default:return e}}case d:case b:case i:return e}}}function h(t){return v(t)===y}e.typeOf=v,e.AsyncMode=l,e.ConcurrentMode=y,e.ContextConsumer=f,e.ContextProvider=s,e.Element=o,e.ForwardRef=p,e.Fragment=u,e.Lazy=d,e.Memo=b,e.Portal=i,e.Profiler=a,e.StrictMode=c,e.Suspense=m,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===u||t===y||t===a||t===c||t===m||"object"===r(t)&&null!==t&&(t.$$typeof===d||t.$$typeof===b||t.$$typeof===s||t.$$typeof===f||t.$$typeof===p)},e.isAsyncMode=function(t){return h(t)||v(t)===l},e.isConcurrentMode=h,e.isContextConsumer=function(t){return v(t)===f},e.isContextProvider=function(t){return v(t)===s},e.isElement=function(t){return"object"===r(t)&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return v(t)===p},e.isFragment=function(t){return v(t)===u},e.isLazy=function(t){return v(t)===d},e.isMemo=function(t){return v(t)===b},e.isPortal=function(t){return v(t)===i},e.isProfiler=function(t){return v(t)===a},e.isStrictMode=function(t){return v(t)===c},e.isSuspense=function(t){return v(t)===m}},460695:function(t,e,r){"use strict";t.exports=r(381932)},856608:function(t,e){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,b=n?Symbol.for("react.suspense_list"):60120,d=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,S=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function j(t){if("object"===r(t)&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case y:case u:case a:case c:case m:return t;default:switch(t=t&&t.$$typeof){case f:case p:case v:case d:case s:return t;default:return e}}case i:return e}}}function O(t){return j(t)===y}e.AsyncMode=l,e.ConcurrentMode=y,e.ContextConsumer=f,e.ContextProvider=s,e.Element=o,e.ForwardRef=p,e.Fragment=u,e.Lazy=v,e.Memo=d,e.Portal=i,e.Profiler=a,e.StrictMode=c,e.Suspense=m,e.isAsyncMode=function(t){return O(t)||j(t)===l},e.isConcurrentMode=O,e.isContextConsumer=function(t){return j(t)===f},e.isContextProvider=function(t){return j(t)===s},e.isElement=function(t){return"object"===r(t)&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return j(t)===p},e.isFragment=function(t){return j(t)===u},e.isLazy=function(t){return j(t)===v},e.isMemo=function(t){return j(t)===d},e.isPortal=function(t){return j(t)===i},e.isProfiler=function(t){return j(t)===a},e.isStrictMode=function(t){return j(t)===c},e.isSuspense=function(t){return j(t)===m},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===u||t===y||t===a||t===c||t===m||t===b||"object"===r(t)&&null!==t&&(t.$$typeof===v||t.$$typeof===d||t.$$typeof===s||t.$$typeof===f||t.$$typeof===p||t.$$typeof===g||t.$$typeof===S||t.$$typeof===x||t.$$typeof===h)},e.typeOf=j},89165:function(t,e,r){"use strict";t.exports=r(856608)},215842:function(t,e,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},741747:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(47427);function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,n.Z)(t,e)}},58348:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}r.d(e,{Z:function(){return n}})},47427:function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}r.d(e,{Z:function(){return n}})}},function(t){t.O(0,[97270,84404,28038,24797,55169,44801,35772],function(){return t(t.s=275577)}),t.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/settings/notifications/[category]-62c573e087564d48.js.map