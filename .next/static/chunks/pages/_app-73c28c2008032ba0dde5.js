_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"+/lC":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},t.clamp=function(e,t,n){return Math.min(Math.max(e,t),n)}},"/OZ1":function(e,t,n){},"/nVi":function(e,t,n){},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("rePB"),o=n("q1tI"),i=(n("k5hY"),n("2N8G"),n("K7k0"),n("tyWD"),function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}),l=function(){var e=Object(o.useState)(0),t=i(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){var e=0,t=!1,n=function(n){e=window.scrollY,t||(window.requestAnimationFrame((function(){r(e),t=!1})),t=!0)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}})),n};n("/nVi"),n("/OZ1"),n("zPlV"),n("2bRD");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,a=Object(o.useState)(!1),i=(a[0],a[1],Object(o.useState)()),s=(i[0],i[1]),c=Object(o.useState)("fixed"),d=c[0],f=(c[1],Object(o.useState)()),p=f[0],h=f[1];Object(o.useEffect)((function(){s(document.querySelector("body")),h(document.getElementsByClassName("main-bar-wraper"))}),[]);var b=l();return"fixed"===d&&b>10?p&&p[0].classList.add("is-fixed"):p&&p[0].classList.remove("is-fixed"),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"page-wraper",children:Object(r.jsx)(t,u({},n))}),Object(r.jsxs)("a",{href:"https://1.envato.market/VLMVO",target:"_blank",className:"bt-buy-now theme-btn",children:[Object(r.jsx)("i",{className:"ti-shopping-cart"}),Object(r.jsx)("span",{children:"Buy Now"})]}),Object(r.jsxs)("a",{href:"https://w3itexperts.ticksy.com",target:"_blank",className:"bt-support-now theme-btn",children:[Object(r.jsx)("i",{className:"ti-headphone-alt"}),Object(r.jsx)("span",{children:"Support"})]}),Object(r.jsx)("a",{href:"#top",children:Object(r.jsx)("button",{className:"scroltop icon-up",type:"button",style:{display:"inline-block"},children:Object(r.jsx)("i",{className:"fa fa-arrow-up"})})})]})}},"2DcK":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n("TSYQ")),o=n("q1tI"),i=c(o),l=c(n("17x9")),s=c(n("bdgK")),u=n("+/lC");function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={orientation:{horizontal:{dimension:"width",direction:"left",reverseDirection:"right",coordinate:"x"},vertical:{dimension:"height",direction:"top",reverseDirection:"bottom",coordinate:"y"}}},p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.handleFormat=function(e){var t=r.props.format;return t?t(e):e},r.handleUpdate=function(){if(r.slider){var e=r.props.orientation,t=(0,u.capitalize)(f.orientation[e].dimension),n=r.slider["offset"+t],a=r.handle["offset"+t];r.setState({limit:n-a,grab:a/2})}},r.handleStart=function(e){var t=r.props.onChangeStart;document.addEventListener("mousemove",r.handleDrag),document.addEventListener("mouseup",r.handleEnd),r.setState({active:!0},(function(){t&&t(e)}))},r.handleDrag=function(e){e.stopPropagation();var t=r.props.onChange,n=e.target,a=n.className,o=n.classList,i=n.dataset;if(t&&"rangeslider__labels"!==a){var l=r.position(e);o&&o.contains("rangeslider__label-item")&&i.value&&(l=parseFloat(i.value)),t&&t(l,e)}},r.handleEnd=function(e){var t=r.props.onChangeComplete;r.setState({active:!1},(function(){t&&t(e)})),document.removeEventListener("mousemove",r.handleDrag),document.removeEventListener("mouseup",r.handleEnd)},r.handleKeyDown=function(e){e.preventDefault();var t=e.keyCode,n=r.props,a=n.value,o=n.min,i=n.max,l=n.step,s=n.onChange,u=void 0;switch(t){case 38:case 39:u=a+l>i?i:a+l,s&&s(u,e);break;case 37:case 40:u=a-l<o?o:a-l,s&&s(u,e)}},r.getPositionFromValue=function(e){var t=r.state.limit,n=r.props,a=n.min,o=(e-a)/(n.max-a);return Math.round(o*t)},r.getValueFromPosition=function(e){var t=r.state.limit,n=r.props,a=n.orientation,o=n.min,i=n.max,l=n.step,s=(0,u.clamp)(e,0,t)/(t||1),c=l*Math.round(s*(i-o)/l),d="horizontal"===a?c+o:i-c;return(0,u.clamp)(d,o,i)},r.position=function(e){var t=r.state.grab,n=r.props,a=n.orientation,o=n.reverse,i=r.slider,l=f.orientation[a].coordinate,s=o?f.orientation[a].reverseDirection:f.orientation[a].direction,c="client"+(0,u.capitalize)(l),d=e.touches?e.touches[0][c]:e[c],p=i.getBoundingClientRect()[s],h=o?p-d-t:d-p-t;return r.getValueFromPosition(h)},r.coordinates=function(e){var t=r.state,n=t.limit,a=t.grab,o=r.props.orientation,i=r.getValueFromPosition(e),l=r.getPositionFromValue(i),s="horizontal"===o?l+a:l;return{fill:"horizontal"===o?s:n-s,handle:s,label:s}},r.renderLabels=function(e){return i.default.createElement("ul",{ref:function(e){r.labels=e},className:(0,a.default)("rangeslider__labels")},e)},r.state={active:!1,limit:0,grab:0},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.handleUpdate(),new s.default(this.handleUpdate).observe(this.slider)}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,r=t.orientation,o=t.className,l=t.tooltip,s=t.reverse,u=t.labels,c=t.min,p=t.max,h=t.handleLabel,b=this.state.active,m=f.orientation[r].dimension,v=s?f.orientation[r].reverseDirection:f.orientation[r].direction,y=this.getPositionFromValue(n),g=this.coordinates(y),j=d({},m,g.fill+"px"),O=d({},v,g.handle+"px"),w=l&&b,_=[],E=Object.keys(u);if(E.length>0){E=E.sort((function(e,t){return s?e-t:t-e}));var x=!0,P=!1,D=void 0;try{for(var N,S=E[Symbol.iterator]();!(x=(N=S.next()).done);x=!0){var C=N.value,k=this.getPositionFromValue(C),T=d({},v,this.coordinates(k).label+"px");_.push(i.default.createElement("li",{key:C,className:(0,a.default)("rangeslider__label-item"),"data-value":C,onMouseDown:this.handleDrag,onTouchStart:this.handleStart,onTouchEnd:this.handleEnd,style:T},this.props.labels[C]))}}catch(M){P=!0,D=M}finally{try{!x&&S.return&&S.return()}finally{if(P)throw D}}}return i.default.createElement("div",{ref:function(t){e.slider=t},className:(0,a.default)("rangeslider","rangeslider-"+r,{"rangeslider-reverse":s},o),onMouseDown:this.handleDrag,onMouseUp:this.handleEnd,onTouchStart:this.handleStart,onTouchEnd:this.handleEnd,"aria-valuemin":c,"aria-valuemax":p,"aria-valuenow":n,"aria-orientation":r},i.default.createElement("div",{className:"rangeslider__fill",style:j}),i.default.createElement("div",{ref:function(t){e.handle=t},className:"rangeslider__handle",onMouseDown:this.handleStart,onTouchMove:this.handleDrag,onTouchEnd:this.handleEnd,onKeyDown:this.handleKeyDown,style:O,tabIndex:0},w?i.default.createElement("div",{ref:function(t){e.tooltip=t},className:"rangeslider__handle-tooltip"},i.default.createElement("span",null,this.handleFormat(n))):null,i.default.createElement("div",{className:"rangeslider__handle-label"},h)),u?this.renderLabels(_):null)}}]),t}(o.Component);p.propTypes={min:l.default.number,max:l.default.number,step:l.default.number,value:l.default.number,orientation:l.default.string,tooltip:l.default.bool,reverse:l.default.bool,labels:l.default.object,handleLabel:l.default.string,format:l.default.func,onChangeStart:l.default.func,onChange:l.default.func,onChangeComplete:l.default.func},p.defaultProps={min:0,max:100,step:1,value:0,orientation:"horizontal",tooltip:!0,reverse:!1,labels:{},handleLabel:""},t.default=p},"2N8G":function(e,t,n){},"2bRD":function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},K7k0:function(e,t,n){},k5hY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("2DcK"),o=(r=a)&&r.__esModule?r:{default:r};t.default=o.default},tyWD:function(e,t,n){},zPlV:function(e,t,n){}},[[0,0,1,2,4]]]);