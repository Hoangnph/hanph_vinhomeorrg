"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[27460],{857916:function(e,t,n){n.d(t,{Di:function(){return p},Jl:function(){return u},R:function(){return l},ZP:function(){return h},aU:function(){return f},j2:function(){return d},pN:function(){return m},rL:function(){return v},vW:function(){return g}});var r=n(684404),a=n(205841),o=n(454514),i=n(339001),c=n(624797),s=n(819267),u=7e3,l="permanent_account_closure",d="account_deletion_email_sent",p="account_deactivated",f="unlink_successful",m="account_switch_to_settings";function _(e,t,n){return(0,s.jsx)(r.xv,{align:n||"center",children:(0,i.nk)(e,{username:(0,s.jsx)(r.xv,{inline:!0,weight:"bold",children:t})})})}function g(e){var t=e.i18n,n=e.message,r=e.multipleAccounts,a=e.username,o=void 0===a?"":a;switch(n){case l:return t._('Your account has been deleted. We\'re sad to see you go', 'unauthLoginPage.accountDeletedToast.message', 'Confirmation message after a user has successfully deleted their account');case d:if(r)return _(t._('An email has been sent with final steps to delete your account, {{username}} and its linked accounts', 'accountDeletedEmailToast.message.multipleAccounts', 'Confirmation message after a user has successfully requested multiple accounts deletion'),o);return _(t._('An email has been sent with final steps to delete your account, {{username}}', 'accountDeletedEmailToast.message.singleAccount', 'Confirmation message after a user has successfully requested a single account deletion'),o);case p:return _(r?t._('The account, {{username}}, and its associated linked accounts have been deactivated', 'unauthLoginPage.deactivatedToast.message.multipleAccounts', 'Confirmation message after a user has successfully deactivated multiple accounts'):t._('The account, {{username}}, has been deactivated', 'unauthLoginPage.deactivatedToast.message.singleAccount', 'Confirmation message after a user has successfully deactivated a single account'),o);case f:return _(t._('Success! You\'ve unlinked this business account. You are currently in {{username}}.', 'authHomeFeedPage.unlinkAccountToast.message', 'Confirmation message after a user has successfully unlinked business account'),o,"start");case m:return _(t._('You\'ve switched into and are currently in the account {{username}}', 'accountSettings.switchAccountToAccountChanges', 'Confirmation message after a user has successfully switched accounts and got redirected to Account Changes'),o,"start");default:return""}}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!(t&&t.search))return"";var r=(0,c.mB)(t.search).message,a=(0,c.mB)(t.search).username||n;return g({i18n:e,message:r,multipleAccounts:"true"===(0,c.mB)(t.search).multiple_accounts,username:a})}function v(e){var t=e.showOneToast,n=e.i18n,r=e.location,i=e.history,l=e.username,d=e.fullName,p=e.avatarUrl;if(r&&r.search){var _=h(n,r,l||""),g=(0,c.mB)(r.search).message,v=g===m||g===f;_&&(t(function(e){var t=e.hideToast;return(0,s.jsx)(o.ZP,{duration:u,onHide:t,text:_,thumbnail:v?{avatar:(0,s.jsx)(a.qE,{name:d||"",size:"md",src:p||""})}:void 0})}),i.replace(r.hash?"".concat(r.pathname).concat(r.hash):r.pathname))}}},508218:function(e,t,n){n.d(t,{Ny:function(){return p},eD:function(){return _},lp:function(){return m},nY:function(){return g}});var r=n(224796),a=n(807657),o=n(602377),i=n(731714),c=n(702497),s=n(217058),u=n(88682),l=n(623891);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=Object.freeze({SOFT_BANNED:0,RATE_LIMITED:1,LOGIN_ASSISTANCE:2,PASSWORD_RESET_SENT:3,PREVENT_FACEBOOK_REGISTER:4,PREVENT_GOOGLE_REGISTER:5,SUSPENDED:6}),f=function(){var e;function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t)}return e=[{key:"defaultLoginRedirectUrl",value:function(){return window.location.pathname===c.lfe||window.location.pathname===c.ZEf||window.location.pathname.startsWith(c.rOJ)?"/":window.location.pathname+window.location.search}},{key:"defaultSocialLoginRedirectUrl",value:function(){return window.location.pathname.startsWith(c.rOJ)?"/":window.location.pathname}},{key:"isExceedRecaptchaLocalLimit",value:function(){var e=i.Z.getItem(r.kl);if(e&&e.indexOf("|")>-1){var t=e.split("|");return 3===t.length&&new Date().getTime()/1e3-parseInt(t[0],10)<=3600}return!1}},{key:"updateRecaptchaTimeStamp",value:function(){var e=i.Z.getItem(r.kl),t=[];e&&3===(t=e.split("|")).length&&t.shift();var n=(new Date().getTime()/1e3).toString();t.push(n);var a=t.join("|");i.Z.setItem(r.kl,a)}},{key:"isFullyLoggedIn",value:function(e,t){return e&&t===o.Z.DEFAULT}},{key:"handleRedirect",value:function(e){if(!e){e="/";var t=(0,l.Z)();if(t){var n=t.next;n&&(e=n,delete t.next),e=(0,u.Z)(e,t)}}(0,a.Z)(e)}},{key:"handleRedirectWithFallbackWindowLocation",value:function(){this.handleRedirect(this.defaultLoginRedirectUrl())}},{key:"handleSignupRedirect",value:function(e,n){i.Z.setItem(r.F6,Date.now()),!n&&e&&"/"!==e?t.handleRedirect(e):t.handleRedirect("/")}},{key:"storeLoginCredentialsToBrowser",value:function(e){var t=window.navigator.credentials;if(t&&e.username_or_email)try{var n=new window.PasswordCredential({id:e.username_or_email,password:e.password});t.store(n).then(function(){(0,s.My)("navigatorCredentials.store.success")})}catch(e){(0,s.My)("navigatorCredentials.store.error")}}},{key:"handleLoginMfa",value:function(e,n,r){(0,s.My)("multi_step_login"),t.storeLoginCredentialsToBrowser(e),r?r(e,n):(0,s.My)("unauth.login.error.CLIENT_ERROR.null_mfa_handler")}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==d(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}(r.key),r)}}(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();function m(e){return e.facebook_id?"facebook":e.google_open_id_token?"google_one_tap":e.line_id_token?"line":e.username_or_email?"email":"other"}function _(e){return e.mfa_token?"mfa_token":e.mfa_resend?"mfa_resend":m(e)}function g(e){return e.facebook_id?"facebook":e.google_open_id_token?"google":e.username_or_email?"email":"other"}t.ZP=f},758939:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(729817),a=n(217058);function o(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){n(e);return}c.done?t(s):Promise.resolve(s).then(r,a)}function i(e){return c.apply(this,arguments)}function c(){var e;return e=regeneratorRuntime.mark(function e(t){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.Kw)();case 2:o=(n=e.sent)?{user_ids:Object.keys(n)}:{},(0,a.tj)("mweb_multiple_accounts_".concat(t),o);case 5:case"end":return e.stop()}},e)}),(c=function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function c(e){o(i,r,a,c,s,"next",e)}function s(e){o(i,r,a,c,s,"throw",e)}c(void 0)})}).apply(this,arguments)}},373236:function(e,t,n){n.d(t,{eN:function(){return u},_:function(){return d},kB:function(){return l}});var r=n(702497),a=n(624797),o=n(328038),i=["/resource/:name/:method/","/resource/commerce/:name/:method/","/:username/pins/follow/","/email/remove/","/about/trademark/:claim_type/","/about/copyright/dmca-pin/web-result/:id/","/about/copyright/dmca-pin/pin/:id/","/about/copyright/dmca-pin/","/about/koplg/","/about/:lawName/","/about/radtc/","/website/confirm/","/oauth/","/app-factory-oauth/","/settings/extension/uninstall/","/offsite/","/amp/(.*)"],c=function(e,t){var n=new URL(e,t);return i.some(function(e){return!!(0,o.LX)(n.pathname,{path:e,exact:!0})})},s=n(953565),u=function(e){return e&&(0,a.Qg)(e)&&r.lfe!==e?(0,a.Qc)(e).relative:"/"},l=function(e,t){var n=(0,a.Jx)(e);return c(n,t)||(0,a.OM)(n)===a.vx.TRUSTED_DIFFERENT_ORIGIN},d=function(e){var t=e.forceFullPageNavigation,n=e.history,r=e.next,o=e.noLocationReplace,i=e.origin,c=(0,a.Jx)(r);l(r,i)||!n||t?(t&&(0,s.nP)("webapp.duplo.navigateOnLogin.forceFullPageNavigation",{sampleRate:1}),window.location.assign(c)):o?n.push(u(c)):n.replace(u(c))}},27460:function(e,t,n){n.d(t,{f:function(){return C},l:function(){return I}});var r=n(672652),a=n(780277),o=n(216167),i=n(224796),c=n(587703),s=n(658583),u=n(622541),l=n(305657),d=n(957753),p=n(820428),f=n(857916),m=n(508218),_=n(340523),g=n(182962),h=n(891276),v=n(5859),y=n(666698),b=n(731714),w=n(191313),k=n(217058),P=n(722363),A=n(407053),E=n(758939),S=n(373236),R=n(546689),x=n(844998),T=n(953565);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){var r,a;r=t,a=n[t],(r=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==O(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===O(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function j(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){n(e);return}c.done?t(s):Promise.resolve(s).then(r,a)}var N=function(e){return{type:"AUTHENTICATE_USER",payload:{user:e}}},C=function(){var e,t,n=(0,c.Z)(),O=(0,_.F)(),D=(0,a.useDispatch)(),C=(0,v.B)(),I=C.country,Z=C.countryFromHostName,F=C.countryFromIp,z=C.regionFromIp,U=C.userAgent,B=U.isTablet,M=U.isMobile,Y=(0,g.Z)(),H=(0,P.Z)();return(0,r.useCallback)((e=regeneratorRuntime.mark(function e(t,r){var a,c,_,g,v,P,j,C,U,W,X,G,J,V,q,K,Q,$,ee,et,en,er,ea,eo,ei,ec=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=ec.length>2&&void 0!==ec[2]?ec[2]:"/",c=ec.length>3&&void 0!==ec[3]?ec[3]:{isAutologin:!1,isSwitchAccount:!1,noLocationReplace:!1,recaptchaV3Token:"default",noImmediateRedirect:!1,useAlternativeResourceCall:!1,trigger:"other",accountUnlinked:!1},_=ec.length>4?ec[4]:void 0,Y(),g=!B&&!M,v=c.isAutologin,P=c.isSwitchAccount,j=c.noLocationReplace,C=c.recaptchaV3Token,U=c.noImmediateRedirect,W=c.useAlternativeResourceCall,X=c.trigger,G=c.accountUnlinked,b.Z.setItem(i.V6,(0,m.nY)(t)),J=function(e){var t;n(L(L({},_),{},{event_type:e,aux_data:L(L({},_.aux_data),{},{upsell_reason:(null===(t=_.aux_data)||void 0===t?void 0:t.upsell_reason)||(v?"autologin":b.Z.getItem(i.bg)||null),upsell_view_count:b.Z.getItem(i.w0)||0})})),7536===e&&b.Z.setItem(i.w0,0)},V=L(L({get_user:!0},t),{},{app_type_from_client:6,recaptchaV3Token:C}),(q=(0,R.t_)())&&(V=L(L({},V),{},{visited_pages_before_login:q})),(K=(0,R.OJ)())&&(V=L(L({},V),{},{referrer:K})),Q=o.Z.create("UserSessionResource",V).callCreate(),W&&t.username_or_email&&t.password&&(($=new FormData).append("username",t.username_or_email),$.append("password",t.password),ee={method:"POST",body:$,credentials:"include",headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":(0,l.getCsrfToken)()||"","X-Requested-With":"XMLHttpRequest"}},Q=fetch("/resource/UserSessionResource/create/",ee).then(function(e){if(200!==e.status)throw Error(e.statusText);return e.json()}).catch(function(e){return Promise.reject(e)})),e.prev=15,v?(0,k.dy)({event:"login_api_call_start",provider:t.google_open_id_token?"google":"facebook"}):(0,k.EX)({event:"login_api_call_start",provider:(0,m.nY)(t)}),J(7534),H({action:v?"autologin":"login",event:"attempt",type:(0,m.lp)(t),trigger:X}),e.next=21,Q;case 21:et=e.sent,v?(0,k.dy)({event:"login_api_call_success",provider:t.google_open_id_token?"google":"facebook"}):(0,k.EX)({event:"login_api_call_success",provider:(0,m.nY)(t)}),D(N(et.resource_response.data.user)),en=et.client_context,(er=et.resource_response.data.user.gatekeeper_experiments)?(ea=er.active,eo=er.triggerable,ea&&eo||(0,T.nP)("webapp.authentication.emptyExperimentsDebug",{sampleRate:1,tags:{active:String(!!ea),triggerable:String(!!eo)}}),O.updateExperiments(ea,eo)):(0,T.nP)("webapp.authentication.updateExperimentsFailed"),en&&en.placed_experiences&&D((0,d.OD)(en.placed_experiences)),(0,E.Z)("authentication.login_success"),m.ZP.storeLoginCredentialsToBrowser(t),J(7536),H({action:v?"autologin":"login",event:"success",type:(0,m.lp)(t),trigger:X}),(0,p.Z)(),s.zN(u.e7.name),s.zN(u.x3.name),(0,w.Nh)(A.AA,1),"/"!==a&&(0,x.E)(!0),P?(0,y.Dm)().then(function(){var e,t="/".concat((null===(e=et.resource_response.data)||void 0===e?void 0:e.user.username)||"")+(G?"?message=".concat(f.aU):"");window.location.href=t}):v&&!g||U||(0,S._)({forceFullPageNavigation:g,history:r,next:a,noLocationReplace:j,origin:window.location}),(0,h.ko)({country:I,countryFromHostName:Z,countryFromIp:F,regionFromIp:z,deviceType:"Mobile",eventCategory:"Logins"}),e.next=52;break;case 41:if(e.prev=41,e.t0=e.catch(15),v?(0,k.dy)({event:"login_api_call_failure",provider:t.google_open_id_token?"google":"facebook"}):(0,k.EX)({event:"login_api_call_failure",provider:(0,m.nY)(t)}),!(1201===e.t0.api_error_code&&!v&&!g)){e.next=48;break}r&&(ei={creds:t,next:a,phoneNumber:e.t0.data.phone_number_end},r.push({pathname:"/login/mfa/",state:ei})),e.next=52;break;case 48:throw J(7535),H({action:v?"autologin":"login",event:"fail",type:(0,m.lp)(t),trigger:X}),P&&(0,E.Z)("authentication.login_error"),e.t0;case 52:case"end":return e.stop()}},e,null,[[15,41]])}),t=function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){j(o,r,a,i,c,"next",e)}function c(e){j(o,r,a,i,c,"throw",e)}i(void 0)})},function(e,n){return t.apply(this,arguments)}),[D,I,Z,F,Y,O,M,B,n,z,H])},I=function(){var e=(0,_.F)(),t=(0,a.useDispatch)(),n=(0,g.Z)();return function(r){var a=r.client_context,o=r.resource_response.data;o&&(n(),t(N(o.user)));var i=o.user.gatekeeper_experiments;if(i){var c=i.active,s=i.triggerable;c&&s||(0,T.nP)("webapp.crossDomainAutologin.emptyExperimentsDebug",{sampleRate:1,tags:{active:String(!!c),triggerable:String(!!s)}}),e.updateExperiments(c,s)}else(0,T.nP)("webapp.crossDomainAutologin.updateExperimentsFailed");a&&t((0,d.OD)(a.placed_experiences))}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/27460-48f1947fea843f42.js.map