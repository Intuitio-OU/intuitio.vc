(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||a}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var l=Object.defineProperty,d=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var a=h(r);a&&a!==m&&e(t,a,n)}var c=d(r);p&&(c=c.concat(p(r)));for(var s=i(t),f=i(r),b=0;b<c.length;++b){var j=c[b];if(!o[j]&&(!n||!n[j])&&(!f||!f[j])&&(!s||!s[j])){var y=u(r,j);try{l(t,j,y)}catch(g){}}}}return t}},"5lBx":function(e,t,r){"use strict";var n=r("nKUr"),a=r("q1tI"),o=r.n(a),c=r("17x9"),s=r.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(l(t)),t.handleErrored=t.handleErrored.bind(l(t)),t.handleChange=t.handleChange.bind(l(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(l(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},a.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},a.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},a.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},a.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},a.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},a.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},a.handleRecaptchaRef=function(e){this.captcha=e},a.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return o.a.createElement("div",i({},t,{ref:this.handleRecaptchaRef}))},n}(o.a.Component);d.displayName="ReCAPTCHA",d.propTypes={sitekey:s.a.string.isRequired,onChange:s.a.func,grecaptcha:s.a.object,theme:s.a.oneOf(["dark","light"]),type:s.a.oneOf(["image","audio"]),tabindex:s.a.number,onExpired:s.a.func,onErrored:s.a.func,size:s.a.oneOf(["compact","normal","invisible"]),stoken:s.a.string,hl:s.a.string,badge:s.a.oneOf(["bottomright","bottomleft","inline"])},d.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var p=r("2mql"),u=r.n(p);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m={},f=0;var b="onloadcallback";var j,y,g=(j=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+b+"&render=explicit"},y=(y={callbackName:b,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,n;function o(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}n=t,(r=o).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var c=o.prototype;return c.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+f++),this.__scriptLoaderID},c.setupScriptURL=function(){return this.__scriptURL="function"===typeof j?j():j,this.__scriptURL},c.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},c.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=m[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[y.callbackName]},c.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=y,a=n.globalName,o=n.callbackName,c=n.scriptId;if(a&&"undefined"!==typeof window[a]&&(m[t]={loaded:!0,observers:{}}),m[t]){var s=m[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var i={};i[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},m[t]={loaded:!1,observers:i};var l=document.createElement("script");for(var d in l.src=t,l.async=!0,y.attributes)l.setAttribute(d,y.attributes[d]);c&&(l.id=c);var p=function(e){if(m[t]){var r=m[t].observers;for(var n in r)e(r[n])&&delete r[n]}};o&&"undefined"!==typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=m[t];e&&(e.loaded=!0,p((function(t){return!o&&(t(e),!0)})))},l.onerror=function(){var e=m[t];e&&(e.errored=!0,p((function(t){return t(e),!0})))},document.body.appendChild(l)},c.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===y.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=m[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===y.removeOnUnmount&&delete m[e])},c.render=function(){var t=y.globalName,r=this.props,n=(r.asyncScriptOnLoad,r.forwardedRef),o=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(o[t]="undefined"!==typeof window[t]?window[t]:void 0),o.ref=n,Object(a.createElement)(e,o)},o}(a.Component),n=Object(a.forwardRef)((function(e,t){return Object(a.createElement)(r,h({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:s.a.func},u()(n,e)})(d);function x(e){console.log("Captcha value:",e)}t.a=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("section",{className:"content-inner",style:{backgroundImage:"url(images/background/bg1.png)"},children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsxs)("div",{className:"col-xl-6 col-lg-7 m-b30 wow fadeInLeft","data-wow-duration":"2s","data-wow-delay":"0.2s",children:[Object(n.jsxs)("div",{className:"section-head style-1",children:[Object(n.jsx)("h6",{className:"sub-title bgl-primary m-b20 text-primary",children:"Contact Us"}),Object(n.jsx)("h2",{className:"title",children:"We Love To Help Great Companies To Enlarge Their Revenues."})]}),Object(n.jsxs)("form",{className:"dlab-form dzForm",method:"POST",action:"script/contact.php",children:[Object(n.jsx)("div",{className:"dzFormMsg"}),Object(n.jsx)("input",{type:"hidden",className:"form-control",name:"dzToDo",value:"Contact"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm-6",children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",children:Object(n.jsx)("i",{className:"la la-user"})})}),Object(n.jsx)("input",{name:"dzName",type:"text",required:!0,className:"form-control",placeholder:"First Name"})]})}),Object(n.jsx)("div",{className:"col-sm-6",children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",children:Object(n.jsx)("i",{className:"la la-user"})})}),Object(n.jsx)("input",{name:"dzOther[last_name]",type:"text",className:"form-control",required:!0,placeholder:"Last Name"})]})}),Object(n.jsx)("div",{className:"col-sm-6",children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",children:Object(n.jsx)("i",{className:"la la-envelope"})})}),Object(n.jsx)("input",{name:"dzEmail",type:"text",required:!0,className:"form-control",placeholder:"Email Address"})]})}),Object(n.jsx)("div",{className:"col-sm-6",children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",children:Object(n.jsx)("i",{className:"la la-phone"})})}),Object(n.jsx)("input",{name:"dzOther[phone]",type:"text",required:!0,className:"form-control",placeholder:"Phone No."})]})}),Object(n.jsx)("div",{className:"col-sm-6",children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",children:Object(n.jsx)("i",{className:"la la-file-alt"})})}),Object(n.jsx)("input",{name:"dzOther[project_title]",type:"text",className:"form-control",required:!0,placeholder:"Project Title"})]})}),Object(n.jsx)("div",{className:"col-sm-6",children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",children:Object(n.jsx)("i",{className:"la la-list"})})}),Object(n.jsxs)("select",{name:"dzOther[choose_service]",className:"form-control",required:!0,children:[Object(n.jsx)("option",{selected:!0,children:"Choose Service"}),Object(n.jsx)("option",{value:"1",children:"Web Development"}),Object(n.jsx)("option",{value:"2",children:"Web Design"}),Object(n.jsx)("option",{value:"3",children:"Strategy & Research"})]})]})}),Object(n.jsx)("div",{className:"col-sm-12",children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",children:Object(n.jsx)("i",{className:"la la-sms"})})}),Object(n.jsx)("textarea",{name:"dzMessage",required:!0,className:"form-control",placeholder:"Message"})]})}),Object(n.jsx)("div",{className:"col-sm-12",children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"g-recaptcha","data-sitekey":"6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN","data-callback":"verifyRecaptchaCallback","data-expired-callback":"expiredRecaptchaCallback"}),Object(n.jsx)("input",{className:"form-control d-none",style:{display:"none"},"data-recaptcha":"true",required:!0,"data-error":"Please complete the Captcha"})]})}),Object(n.jsx)(g,{sitekey:"6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",onChange:x}),Object(n.jsx)("div",{className:"col-sm-12 mt-2",children:Object(n.jsxs)("button",{name:"submit",type:"submit",value:"Submit",className:"btn btn-link d-inline-flex align-items-center",children:[Object(n.jsx)("i",{className:"fa fa-angle-right m-r10"}),"Submit Now"]})})]})]})]}),Object(n.jsx)("div",{className:"col-xl-6 col-lg-5 m-b30 wow fadeInRight","data-wow-duration":"2s","data-wow-delay":"0.4s",children:Object(n.jsx)("div",{className:"dlab-media cf-r-img",children:Object(n.jsx)("img",{src:"images/about/img2.png",className:"move-1",alt:""})})})]})})})})}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";var n="function"===typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,d=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,b=n?Symbol.for("react.memo"):60115,j=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,x=n?Symbol.for("react.responder"):60118,v=n?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case u:case c:case i:case s:case m:return e;default:switch(e=e&&e.$$typeof){case d:case h:case j:case b:case l:return e;default:return t}}case o:return t}}}function N(e){return O(e)===u}t.AsyncMode=p,t.ConcurrentMode=u,t.ContextConsumer=d,t.ContextProvider=l,t.Element=a,t.ForwardRef=h,t.Fragment=c,t.Lazy=j,t.Memo=b,t.Portal=o,t.Profiler=i,t.StrictMode=s,t.Suspense=m,t.isAsyncMode=function(e){return N(e)||O(e)===p},t.isConcurrentMode=N,t.isContextConsumer=function(e){return O(e)===d},t.isContextProvider=function(e){return O(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return O(e)===h},t.isFragment=function(e){return O(e)===c},t.isLazy=function(e){return O(e)===j},t.isMemo=function(e){return O(e)===b},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===i},t.isStrictMode=function(e){return O(e)===s},t.isSuspense=function(e){return O(e)===m},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===u||e===i||e===s||e===m||e===f||"object"===typeof e&&null!==e&&(e.$$typeof===j||e.$$typeof===b||e.$$typeof===l||e.$$typeof===d||e.$$typeof===h||e.$$typeof===g||e.$$typeof===x||e.$$typeof===v||e.$$typeof===y)},t.typeOf=O}}]);