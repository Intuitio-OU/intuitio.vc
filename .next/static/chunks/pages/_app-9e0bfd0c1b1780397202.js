_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"+/lC":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},t.clamp=function(e,t,n){return Math.min(Math.max(e,t),n)}},"/OZ1":function(e,t,n){},"/nVi":function(e,t,n){},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=(n("k5hY"),n("2N8G"),n("K7k0"),n("tyWD"),function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}),i=function(){var e=Object(a.useState)(0),t=o(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=0,t=!1,n=function(n){e=window.scrollY,t||(window.requestAnimationFrame((function(){r(e),t=!1})),t=!0)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}})),n},l=(n("/nVi"),n("/OZ1"),n("zPlV"),n("2bRD"),r.a.createElement);t.default=function(e){var t=e.Component,n=e.pageProps,o=Object(a.useState)(!1),s=(o[0],o[1],Object(a.useState)()),u=(s[0],s[1]),c=Object(a.useState)("fixed"),d=c[0],f=(c[1],Object(a.useState)()),p=f[0],h=f[1];Object(a.useEffect)((function(){u(document.querySelector("body")),h(document.getElementsByClassName("main-bar-wraper"))}),[]);var m=i();return"fixed"===d&&m>10?p&&p[0].classList.add("is-fixed"):p&&p[0].classList.remove("is-fixed"),l(r.a.Fragment,null,l("div",{className:"page-wraper"},l(t,n)),l("a",{href:"https://1.envato.market/VLMVO",target:"_blank",className:"bt-buy-now theme-btn"},l("i",{className:"ti-shopping-cart"}),l("span",null,"Buy Now")),l("a",{href:"https://w3itexperts.ticksy.com",target:"_blank",className:"bt-support-now theme-btn"},l("i",{className:"ti-headphone-alt"}),l("span",null,"Support")),l("a",{href:"#top"},l("button",{className:"scroltop icon-up",type:"button",style:{display:"inline-block"}},l("i",{className:"fa fa-arrow-up"}))))}},"2DcK":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=c(n("TSYQ")),o=n("q1tI"),i=c(o),l=c(n("17x9")),s=c(n("bdgK")),u=n("+/lC");function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={orientation:{horizontal:{dimension:"width",direction:"left",reverseDirection:"right",coordinate:"x"},vertical:{dimension:"height",direction:"top",reverseDirection:"bottom",coordinate:"y"}}},p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleFormat=function(e){var t=a.props.format;return t?t(e):e},a.handleUpdate=function(){if(a.slider){var e=a.props.orientation,t=(0,u.capitalize)(f.orientation[e].dimension),n=a.slider["offset"+t],r=a.handle["offset"+t];a.setState({limit:n-r,grab:r/2})}},a.handleStart=function(e){var t=a.props.onChangeStart;document.addEventListener("mousemove",a.handleDrag),document.addEventListener("mouseup",a.handleEnd),a.setState({active:!0},(function(){t&&t(e)}))},a.handleDrag=function(e){e.stopPropagation();var t=a.props.onChange,n=e.target,r=n.className,o=n.classList,i=n.dataset;if(t&&"rangeslider__labels"!==r){var l=a.position(e);o&&o.contains("rangeslider__label-item")&&i.value&&(l=parseFloat(i.value)),t&&t(l,e)}},a.handleEnd=function(e){var t=a.props.onChangeComplete;a.setState({active:!1},(function(){t&&t(e)})),document.removeEventListener("mousemove",a.handleDrag),document.removeEventListener("mouseup",a.handleEnd)},a.handleKeyDown=function(e){e.preventDefault();var t=e.keyCode,n=a.props,r=n.value,o=n.min,i=n.max,l=n.step,s=n.onChange,u=void 0;switch(t){case 38:case 39:u=r+l>i?i:r+l,s&&s(u,e);break;case 37:case 40:u=r-l<o?o:r-l,s&&s(u,e)}},a.getPositionFromValue=function(e){var t=a.state.limit,n=a.props,r=n.min,o=(e-r)/(n.max-r);return Math.round(o*t)},a.getValueFromPosition=function(e){var t=a.state.limit,n=a.props,r=n.orientation,o=n.min,i=n.max,l=n.step,s=(0,u.clamp)(e,0,t)/(t||1),c=l*Math.round(s*(i-o)/l),d="horizontal"===r?c+o:i-c;return(0,u.clamp)(d,o,i)},a.position=function(e){var t=a.state.grab,n=a.props,r=n.orientation,o=n.reverse,i=a.slider,l=f.orientation[r].coordinate,s=o?f.orientation[r].reverseDirection:f.orientation[r].direction,c="client"+(0,u.capitalize)(l),d=e.touches?e.touches[0][c]:e[c],p=i.getBoundingClientRect()[s],h=o?p-d-t:d-p-t;return a.getValueFromPosition(h)},a.coordinates=function(e){var t=a.state,n=t.limit,r=t.grab,o=a.props.orientation,i=a.getValueFromPosition(e),l=a.getPositionFromValue(i),s="horizontal"===o?l+r:l;return{fill:"horizontal"===o?s:n-s,handle:s,label:s}},a.renderLabels=function(e){return i.default.createElement("ul",{ref:function(e){a.labels=e},className:(0,r.default)("rangeslider__labels")},e)},a.state={active:!1,limit:0,grab:0},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.handleUpdate(),new s.default(this.handleUpdate).observe(this.slider)}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=t.orientation,o=t.className,l=t.tooltip,s=t.reverse,u=t.labels,c=t.min,p=t.max,h=t.handleLabel,m=this.state.active,v=f.orientation[a].dimension,b=s?f.orientation[a].reverseDirection:f.orientation[a].direction,g=this.getPositionFromValue(n),y=this.coordinates(g),_=d({},v,y.fill+"px"),w=d({},b,y.handle+"px"),E=l&&m,x=[],N=Object.keys(u);if(N.length>0){N=N.sort((function(e,t){return s?e-t:t-e}));var O=!0,D=!1,S=void 0;try{for(var P,j=N[Symbol.iterator]();!(O=(P=j.next()).done);O=!0){var C=P.value,k=this.getPositionFromValue(C),T=d({},b,this.coordinates(k).label+"px");x.push(i.default.createElement("li",{key:C,className:(0,r.default)("rangeslider__label-item"),"data-value":C,onMouseDown:this.handleDrag,onTouchStart:this.handleStart,onTouchEnd:this.handleEnd,style:T},this.props.labels[C]))}}catch(M){D=!0,S=M}finally{try{!O&&j.return&&j.return()}finally{if(D)throw S}}}return i.default.createElement("div",{ref:function(t){e.slider=t},className:(0,r.default)("rangeslider","rangeslider-"+a,{"rangeslider-reverse":s},o),onMouseDown:this.handleDrag,onMouseUp:this.handleEnd,onTouchStart:this.handleStart,onTouchEnd:this.handleEnd,"aria-valuemin":c,"aria-valuemax":p,"aria-valuenow":n,"aria-orientation":a},i.default.createElement("div",{className:"rangeslider__fill",style:_}),i.default.createElement("div",{ref:function(t){e.handle=t},className:"rangeslider__handle",onMouseDown:this.handleStart,onTouchMove:this.handleDrag,onTouchEnd:this.handleEnd,onKeyDown:this.handleKeyDown,style:w,tabIndex:0},E?i.default.createElement("div",{ref:function(t){e.tooltip=t},className:"rangeslider__handle-tooltip"},i.default.createElement("span",null,this.handleFormat(n))):null,i.default.createElement("div",{className:"rangeslider__handle-label"},h)),u?this.renderLabels(x):null)}}]),t}(o.Component);p.propTypes={min:l.default.number,max:l.default.number,step:l.default.number,value:l.default.number,orientation:l.default.string,tooltip:l.default.bool,reverse:l.default.bool,labels:l.default.object,handleLabel:l.default.string,format:l.default.func,onChangeStart:l.default.func,onChange:l.default.func,onChangeComplete:l.default.func},p.defaultProps={min:0,max:100,step:1,value:0,orientation:"horizontal",tooltip:!0,reverse:!1,labels:{},handleLabel:""},t.default=p},"2N8G":function(e,t,n){},"2bRD":function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},K7k0:function(e,t,n){},k5hY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n("2DcK"),o=(a=r)&&a.__esModule?a:{default:a};t.default=o.default},tyWD:function(e,t,n){},zPlV:function(e,t,n){}},[[0,0,1,2,3]]]);