(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1286:function(t,n,e){"use strict";e(914)},1287:function(t,n,e){var r=e(6)((function(i){return i[1]}));r.push([t.i,"@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.keen-slider{overflow:visible!important;overflow:initial!important}.keen-slider__slide{line-height:0}.keen-slider__slide img{border:1px solid rgba(0,0,0,.03);border-radius:8px;max-width:100%}.app-slider-platform{position:relative}.app-slider-platform__arrow{align-items:center;background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:50%;cursor:pointer;display:flex;height:44px;justify-content:center;opacity:.7;position:absolute;top:50%;transform:translateY(-50%);width:44px}.app-slider-platform__arrow svg{fill:#1a1a1a}.app-slider-platform__arrow_left{left:16px}.app-slider-platform__arrow_right{left:auto;right:16px}.app-slider-platform__arrow:hover{opacity:1}@media(max-width:768px){.app-slider-platform__arrow{display:none}}.app-slider-platform__slider-preloader{background:#fff;bottom:0;height:358px;left:0;min-height:300px;position:absolute;right:0;top:0;width:100%;z-index:1}.app-slider-platform__slider-block{align-items:center;display:flex}",""]),r.locals={},t.exports=r},1514:function(t,n,e){"use strict";e.r(n);e(675);var r=e(676),o={props:{images:{type:Array,default:()=>[]}},data:()=>({slider:null,current:0,loading:!0}),name:"Slider",computed:{classLeftControl(){return{"app-slider-platform__arrow":!0,"app-slider-platform__arrow_left":!0,"app-slider-platform__arrow_disabled":0===this.current}},classRightControl(){var t,n,e;return{"app-slider-platform__arrow":!0,"app-slider-platform__arrow_right":!0,"app-slider-platform__arrow_disabled":this.current===(null===(t=this.slider)||void 0===t||null===(n=t.track)||void 0===n||null===(e=n.details)||void 0===e?void 0:e.slides.length)-2}}},mounted(){this.slider=new r.a(this.$refs.slider,{loop:!0,initial:this.current,slideChanged:s=>{this.current=s.track.details.rel},created:()=>{this.loading=!1,this.$emit("ready")},breakpoints:{"(max-width: 1440px)":{mode:"free",slides:{perView:2,spacing:32}},"(max-width: 796px)":{mode:"free",slides:{perView:1.25,spacing:32}},"(max-width: 500px)":{mode:"free",slides:{perView:1.25,spacing:24}}},slides:{perView:3,spacing:32}})},beforeDestroy(){}},l=(e(1286),e(5)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"app-slider-platform"},[n("div",{staticClass:"app-slider-platform__slider-block"},[n("div",{ref:"slider",staticClass:"app-slider-platform__slider keen-slider"},t._l(t.images,(function(image,t){return n("div",{key:t,staticClass:"keen-slider__slide"},[n("img",{attrs:{src:image,alt:"preview"}})])})),0),t._v(" "),t.slider&&!t.loading?n("div",{class:t.classLeftControl,on:{click:function(n){return t.slider.prev()}}},[n("svg",{staticStyle:{"margin-right":"2px"},attrs:{width:"11",height:"18",viewBox:"0 0 11 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M2.92902 8.99966L9.75002 2.17866C10.164 1.76466 10.164 1.09266 9.75002 0.678664C9.33602 0.264664 8.66402 0.264664 8.25002 0.678664L0.636023 8.29266C0.245023 8.68366 0.245023 9.31666 0.636023 9.70666L8.25002 17.3207C8.66402 17.7347 9.33602 17.7347 9.75002 17.3207C10.164 16.9067 10.164 16.2347 9.75002 15.8207L2.92902 8.99966Z"}})])]):t._e(),t._v(" "),t.slider&&!t.loading?n("div",{class:t.classRightControl,on:{click:function(n){return t.slider.next()}}},[n("svg",{staticStyle:{"margin-left":"2px"},attrs:{width:"11",height:"18",viewBox:"0 0 11 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M8.07193 8.99966L1.25093 15.8207C0.83693 16.2347 0.83693 16.9067 1.25093 17.3207C1.66493 17.7347 2.33693 17.7347 2.75093 17.3207L10.3649 9.70666C10.7559 9.31566 10.7559 8.68266 10.3649 8.29266L2.75093 0.678664C2.33693 0.264664 1.66493 0.264664 1.25093 0.678664C0.83693 1.09266 0.83693 1.76466 1.25093 2.17866L8.07193 8.99966Z"}})])]):t._e()])])}),[],!1,null,null,null);n.default=component.exports},675:function(t,n,e){var content=e(692);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(7).default)("bb5f1032",content,!0,{sourceMap:!1})},676:function(t,n,e){"use strict";e.d(n,"a",(function(){return y}));var r=function(){return r=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},r.apply(this,arguments)};function o(t,n,i){if(i||2===arguments.length)for(var e,r=0,a=n.length;r<a;r++)!e&&r in n||(e||(e=Array.prototype.slice.call(n,0,r)),e[r]=n[r]);return t.concat(e||Array.prototype.slice.call(n))}function i(t){return Array.prototype.slice.call(t)}function l(t,n){var i=Math.floor(t);return i===n||i+1===n?t:n}function d(){return Date.now()}function a(t,n,i){if(n="data-keen-slider-"+n,null===i)return t.removeAttribute(n);t.setAttribute(n,i||"")}function c(t,n){return n=n||document,"function"==typeof t&&(t=t(n)),Array.isArray(t)?t:"string"==typeof t?i(n.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?i(t):[]}function u(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function s(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function f(){var t=[];return{add:function(n,i,e,r){n.addListener?n.addListener(e):n.addEventListener(i,e,r),t.push([n,i,e,r])},input:function(t,n,i,e){this.add(t,n,function(t){return function(n){n.nativeEvent&&(n=n.nativeEvent);var i=n.changedTouches||[],e=n.targetTouches||[],r=n.detail&&n.detail.x?n.detail:null;return t({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:n,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:n.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:n.pageY})}}(i),e)},purge:function(){t.forEach((function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])})),t=[]}}}function v(t,n,i){return Math.min(Math.max(t,n),i)}function h(t){return(t>0?1:0)-(t<0?1:0)||+t}function m(t){var n=t.getBoundingClientRect();return{height:l(n.height,t.offsetHeight),width:l(n.width,t.offsetWidth)}}function p(t,n,i,e){var r=t&&t[n];return null==r?i:e&&"function"==typeof r?r():r}function w(t){return Math.round(1e6*t)/1e6}function x(t){var i,n,a,e,u,s,r,l,c,f,g,b,m,x,k=1/0,_=[],y=null,M=0;function C(t){O(M+t)}function T(t){var n=L(M+t).abs;return A(n)?n:null}function L(t){var i=Math.floor(Math.abs(w(t/n))),e=w((t%n+n)%n);e===n&&(e=0);var a=h(t),l=r.indexOf(o([],r,!0).reduce((function(t,n){return Math.abs(n-e)<Math.abs(t-e)?n:t}))),u=l;return a<0&&i++,l===s&&(u=0,i+=a>0?1:-1),{abs:u+i*s*a,origin:l,rel:u}}function E(t,n,i){var e;if(n||!D())return z(t,i);if(!A(t))return null;var r=L(null!=i?i:M),a=r.abs,o=t-r.rel,u=a+o;e=z(u);var l=z(u-s*h(o));return(null!==l&&Math.abs(l)<Math.abs(e)||null===e)&&(e=l),w(e)}function z(t,e){if(null==e&&(e=w(M)),!A(t)||null===t)return null;t=Math.round(t);var i=L(e),o=i.abs,a=i.rel,l=i.origin,u=S(t),d=(e%n+n)%n,c=r[l],f=Math.floor((t-(o-a))/s)*n;return w(c-d-c+r[u]+f+(l===s?n:0))}function A(t){return I(t)===t}function I(t){return v(t,c,f)}function D(){return e.loop}function S(t){return(t%s+s)%s}function O(n){var i;i=n-M,_.push({distance:i,timestamp:d()}),_.length>6&&(_=_.slice(-6)),M=w(n);var e=V().abs;if(e!==y){var a=null!==y;y=e,a&&t.emit("slideChanged")}}function V(r){var o=r?null:function(){if(s){var t=D(),r=t?(M%n+n)%n:M,i=(t?M%n:M)-u[0][2],o=0-(i<0&&t?n-Math.abs(i):i),l=0,d=L(M),v=d.abs,p=d.rel,w=u[p][2],k=u.map((function(r,i){var a=o+l;(a<0-r[0]||a>1)&&(a+=(Math.abs(a)>n-1&&t?n:0)*h(-a));var u=i-p,d=h(u),c=u+v;t&&(-1===d&&a>w&&(c+=s),1===d&&a<w&&(c-=s),null!==g&&c<g&&(a+=n),null!==b&&c>b&&(a-=n));var f=a+r[0]+r[1],m=Math.max(a>=0&&f<=1?1:f<0||a>1?0:a<0?Math.min(1,(r[0]+a)/r[0]):(1-a)/r[0],0);return l+=r[0]+r[1],{abs:c,distance:e.rtl?-1*a+1-r[0]:a,portion:m,size:r[0]}}));return v=I(v),p=S(v),{abs:I(v),length:a,max:x,maxIdx:f,min:m,minIdx:c,position:M,progress:t?r/n:M/a,rel:p,slides:k,slidesLength:n}}}();return i.details=o,t.emit("detailsChanged"),o}return i={absToRel:S,add:C,details:null,distToIdx:T,idxToDist:E,init:function(o){if(function(){if(e=t.options,u=(e.trackConfig||[]).map((function(t){return[p(t,"size",1),p(t,"spacing",0),p(t,"origin",0)]})),s=u.length){n=w(u.reduce((function(t,n){return t+n[0]+n[1]}),0));var o,i=s-1;a=w(n+u[0][2]-u[i][0]-u[i][2]-u[i][1]),r=u.reduce((function(t,i){if(!t)return[0];var n=u[t.length-1],e=t[t.length-1]+(n[0]+n[2])+n[1];return e-=i[2],t[t.length-1]>e&&(e=t[t.length-1]),e=w(e),t.push(e),(!o||o<e)&&(l=t.length-1),o=e,t}),null),0===a&&(l=0),r.push(w(n))}}(),!s)return V(!0);var i;!function(){var n=t.options.range,i=t.options.loop;g=c=i?p(i,"min",-1/0):0,b=f=i?p(i,"max",k):l;var e=p(n,"min",null),r=p(n,"max",null);e&&(c=e),r&&(f=r),m=c===-1/0?c:t.track.idxToDist(c||0,!0,0),x=f===k?f:E(f,!0,0),null===r&&(b=f),p(n,"align",!1)&&f!==k&&0===u[S(f)][2]&&(x-=1-u[S(f)][0],f=T(x-M)),m=w(m),x=w(x)}(),i=o,Number(i)===i?C(z(I(o))):V()},to:O,velocity:function(){var t=d(),n=_.reduce((function(n,i){var e=i.distance,r=i.timestamp;return t-r>200||(h(e)!==h(n.distance)&&n.distance&&(n={distance:0,lastTimestamp:0,time:0}),n.time&&(n.distance+=e),n.lastTimestamp&&(n.time+=r-n.lastTimestamp),n.lastTimestamp=r),n}),{distance:0,lastTimestamp:0,time:0});return n.distance/n.time||0}}}function g(t){var n,i,e,r,a,o,u;function s(t){return 2*t}function l(t){return v(t,o,u)}function d(t){return 1-Math.pow(1-t,3)}function p(){m();var n="free-snap"===t.options.mode,i=t.track,o=i.velocity();e=h(o);var u=t.track.details,f=[];if(o||!n){var p=c(o),v=p.dist,g=p.dur;if(g=s(g),v*=e,n){var b=i.idxToDist(i.distToIdx(v),!0);b&&(v=b)}f.push({distance:v,duration:g,easing:d});var w=u.position,x=w+v;if(x<r||x>a){var k=x<r?r-w:a-w,_=0,y=o;if(h(k)===e){var M=Math.min(Math.abs(k)/Math.abs(v),1),C=function(t){return 1-Math.pow(1-t,1/3)}(M)*g;f[0].earlyExit=C,y=o*(1-M)}else f[0].earlyExit=0,_+=k;var T=c(y,100),L=T.dist*e;t.options.rubberband&&(f.push({distance:L,duration:s(T.dur),easing:d}),f.push({distance:-L+_,duration:500,easing:d}))}t.animator.start(f)}else t.moveToIdx(l(u.abs),!0,{duration:500,easing:function(t){return 1+--t*t*t*t*t}})}function c(t,n){void 0===n&&(n=1e3);var i=147e-9+(t=Math.abs(t))/n;return{dist:Math.pow(t,2)/i,dur:t/i}}function f(){var n=t.track.details;n&&(r=n.min,a=n.max,o=n.minIdx,u=n.maxIdx)}function m(){t.animator.stop()}t.on("updated",f),t.on("optionsChanged",f),t.on("created",f),t.on("dragStarted",(function(){m(),n=i=t.track.details.abs})),t.on("dragEnded",(function(){var e=t.options.mode;"snap"===e&&function(){var e=t.track,o=t.track.details,u=o.position,s=h(e.velocity());(u>a||u<r)&&(s=0);var d=n+s;0===o.slides[e.absToRel(d)].portion&&(d-=s),n!==i&&(d=i),h(e.idxToDist(d,!0))!==s&&(d+=s),d=l(d);var c=e.idxToDist(d,!0);t.animator.start([{distance:c,duration:500,easing:function(t){return 1+--t*t*t*t*t}}])}(),"free"!==e&&"free-snap"!==e||p()})),t.on("dragged",(function(){i=t.track.details.abs}))}function b(t){var n,i,e,r,a,o,p,l,d,m,g,b,w,x,k,_,y,M,C=f();function T(n){if(o&&l===n.id){var c=A(n);if(d){if(!z(n))return E(n);m=c,d=!1,t.emit("dragChecked")}if(_)return m=c;u(n);var f=function(n){if(y===-1/0&&M===1/0)return n;var e=t.track.details,o=e.length,u=e.position,s=v(n,y-u,M-u);if(0===o)return 0;if(!t.options.rubberband)return s;if(u<=M&&u>=y)return n;if(u<y&&i>0||u>M&&i<0)return n;var l=(u<y?u-y:u-M)/o,d=r*o,c=Math.abs(l*d),p=Math.max(0,1-c/a*2);return p*p*n}(p(m-c)/r*e);i=h(f);var w=t.track.details.position;(w>y&&w<M||w===y&&i>0||w===M&&i<0)&&s(n),g+=f,!b&&Math.abs(g*r)>5&&(b=!0),t.track.add(f),m=c,t.emit("dragged")}}function L(n){!o&&t.track.details&&t.track.details.length&&(g=0,o=!0,b=!1,d=!0,l=n.id,z(n),m=A(n),t.emit("dragStarted"))}function E(n){o&&l===n.idChanged&&(o=!1,t.emit("dragEnded"))}function z(t){var n=I(),i=n?t.y:t.x,e=n?t.x:t.y,r=void 0!==w&&void 0!==x&&Math.abs(x-e)<=Math.abs(w-i);return w=i,x=e,r}function A(t){return I()?t.y:t.x}function I(){return t.options.vertical}function D(){r=t.size,a=I()?window.innerHeight:window.innerWidth;var n=t.track.details;n&&(y=n.min,M=n.max)}function S(t){b&&(s(t),u(t))}function O(){if(C.purge(),t.options.drag&&!t.options.disabled){var i;i=t.options.dragSpeed||1,p="function"==typeof i?i:function(t){return t*i},e=t.options.rtl?-1:1,D(),n=t.container,function(){var t="data-keen-slider-clickable";c("[".concat(t,"]:not([").concat(t,"=false])"),n).map((function(t){C.add(t,"mousedown",s),C.add(t,"touchstart",s)}))}(),C.add(n,"dragstart",(function(t){u(t)})),C.add(n,"click",S,{capture:!0}),C.input(n,"ksDragStart",L),C.input(n,"ksDrag",T),C.input(n,"ksDragEnd",E),C.input(n,"mousedown",L),C.input(n,"mousemove",T),C.input(n,"mouseleave",E),C.input(n,"mouseup",E),C.input(n,"touchstart",L,{passive:!0}),C.input(n,"touchmove",T,{passive:!1}),C.input(n,"touchend",E),C.input(n,"touchcancel",E),C.add(window,"wheel",(function(t){o&&u(t)}));var r="data-keen-slider-scrollable";c("[".concat(r,"]:not([").concat(r,"=false])"),t.container).map((function(t){return function(t){var n;C.input(t,"touchstart",(function(t){n=A(t),_=!0,k=!0}),{passive:!0}),C.input(t,"touchmove",(function(i){var e=I(),r=e?t.scrollHeight-t.clientHeight:t.scrollWidth-t.clientWidth,a=n-A(i),o=e?t.scrollTop:t.scrollLeft,s=e&&"scroll"===t.style.overflowY||!e&&"scroll"===t.style.overflowX;if(n=A(i),(a<0&&o>0||a>0&&o<r)&&k&&s)return _=!0;k=!1,u(i),_=!1})),C.input(t,"touchend",(function(){_=!1}))}(t)}))}}t.on("updated",D),t.on("optionsChanged",O),t.on("created",O),t.on("destroyed",C.purge)}function k(t){var n,i,e=null;function r(n,i,e){t.animator.active?o(n,i,e):requestAnimationFrame((function(){return o(n,i,e)}))}function a(){r(!1,!1,i)}function o(i,r,a){var o=0,u=t.size,d=t.track.details;if(d&&n){var c=d.slides;n.forEach((function(t,n){if(i)!e&&r&&s(t,null,a),l(t,null,a);else{if(!c[n])return;var d=c[n].size*u;!e&&r&&s(t,d,a),l(t,c[n].distance*u-o,a),o+=d}}))}}function u(n){return"performance"===t.options.renderMode?Math.round(n):n}function s(t,n,i){var e=i?"height":"width";null!==n&&(n=u(n)+"px"),t.style["min-"+e]=n,t.style["max-"+e]=n}function l(t,n,i){if(null!==n){n=u(n);var e=i?n:0;n="translate3d(".concat(i?0:n,"px, ").concat(e,"px, 0)")}t.style.transform=n,t.style["-webkit-transform"]=n}function d(){n&&(o(!0,!0,i),n=null),t.on("detailsChanged",a,!0)}function c(){r(!1,!0,i)}function f(){d(),i=t.options.vertical,t.options.disabled||"custom"===t.options.renderMode||(e="auto"===p(t.options.slides,"perView",null),t.on("detailsChanged",a),(n=t.slides).length&&c())}t.on("created",f),t.on("optionsChanged",f),t.on("beforeOptionsChanged",(function(){d()})),t.on("updated",c),t.on("destroyed",d)}function _(t,i){return function(n){var e,u,s,o,l,d=f();function v(t){var e;a(n.container,"reverse","rtl"!==(e=n.container,window.getComputedStyle(e,null).getPropertyValue("direction"))||t?null:""),a(n.container,"v",n.options.vertical&&!t?"":null),a(n.container,"disabled",n.options.disabled&&!t?"":null)}function g(){b()&&_()}function b(){var t=null;if(o.forEach((function(n){n.matches&&(t=n.__media)})),t===e)return!1;e||n.emit("beforeOptionsChanged"),e=t;var i=t?s.breakpoints[t]:s;return n.options=r(r({},s),i),v(),L(),E(),M(),!0}function h(t){var e=m(t);return(n.options.vertical?e.height:e.width)/n.size||1}function w(){return n.options.trackConfig.length}function x(t){for(var a in e=!1,s=r(r({},i),t),d.purge(),u=n.size,o=[],s.breakpoints||[]){var l=window.matchMedia(a);l.__media=a,o.push(l),d.add(l,"change",g)}d.add(window,"orientationchange",T),d.add(window,"resize",C),b()}function k(t){n.animator.stop();var e=n.track.details;n.track.init(null!=t?t:e?e.abs:0)}function _(t){k(t),n.emit("optionsChanged")}function y(t,e){if(t)return x(t),void _(e);L(),E();var i=w();M(),w()!==i?_(e):k(e),n.emit("updated")}function M(){var t=n.options.slides;if("function"==typeof t)return n.options.trackConfig=t(n.size,n.slides);for(var e=n.slides,i=e.length,r="number"==typeof t?t:p(t,"number",i,!0),a=[],o=p(t,"perView",1,!0),u=p(t,"spacing",0,!0)/n.size||0,s="auto"===o?u:u/o,l=p(t,"origin","auto"),d=0,c=0;c<r;c++){var f="auto"===o?h(e[c]):1/o-u+s,v="center"===l?.5-f/2:"auto"===l?0:l;a.push({origin:v,size:f,spacing:u}),d+=f}if(d+=u*(r-1),"auto"===l&&!n.options.loop&&1!==o){var m=0;a.map((function(t){var n=d-m;return m+=t.size+u,n>=1||(t.origin=1-n-(d>1?0:1-d)),t}))}n.options.trackConfig=a}function C(){L();var t=n.size;n.options.disabled||t===u||(u=t,y())}function T(){C(),setTimeout(C,500),setTimeout(C,2e3)}function L(){var t=m(n.container);n.size=(n.options.vertical?t.height:t.width)||1}function E(){n.slides=c(n.options.selector,n.container)}n.container=(l=c(t,document)).length?l[0]:null,n.destroy=function(){d.purge(),n.emit("destroyed"),v(!0)},n.prev=function(){n.moveToIdx(n.track.details.abs-1,!0)},n.next=function(){n.moveToIdx(n.track.details.abs+1,!0)},n.update=y,x(n.options)}}var y=function(t,i,n){try{return function(t,n){var i,e={};return i={emit:function(t){e[t]&&e[t].forEach((function(t){t(i)}));var n=i.options&&i.options[t];n&&n(i)},moveToIdx:function(t,n,e){var r=i.track.idxToDist(t,n);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:p(e||a,"duration",500),easing:p(e||a,"easing",(function(t){return 1+--t*t*t*t*t}))}])}},on:function(t,n,i){void 0===i&&(i=!1),e[t]||(e[t]=[]);var r=e[t].indexOf(n);r>-1?i&&delete e[t][r]:i||e[t].push(n)},options:t},function(){if(i.track=x(i),i.animator=function(t){var n,i,e,r,a,o;function u(n){o||(o=n),s(!0);var a=n-o;a>e&&(a=e);var c=r[i];if(c[3]<a)return i++,u(n);var f=c[2],p=c[4],v=c[0],h=c[1]*(0,c[5])(0===p?1:(a-f)/p);if(h&&t.track.to(v+h),a<e)return d();o=null,s(!1),l(null),t.emit("animationEnded")}function s(t){n.active=t}function l(t){n.targetIdx=t}function d(){var t;t=u,a=window.requestAnimationFrame(t)}function c(){var n;n=a,window.cancelAnimationFrame(n),s(!1),l(null),o&&t.emit("animationStopped"),o=null}return n={active:!1,start:function(n){if(c(),t.track.details){var a=0,o=t.track.details.position;i=0,e=0,r=n.map((function(t){var n,i=o,r=null!==(n=t.earlyExit)&&void 0!==n?n:t.duration,u=t.easing,s=t.distance*u(r/t.duration)||0;o+=s;var l=e;return e+=r,a+=s,[i,t.distance,l,e,t.duration,u]})),l(t.track.distToIdx(a)),d(),t.emit("animationStarted")}},stop:c,targetIdx:null}}(i),n)for(var t=0,e=n;t<e.length;t++)(0,e[t])(i);i.track.init(i.options.initial||0),i.emit("created")}(),i}(i,o([_(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),k,b,g],n||[],!0))}catch(t){console.error(t)}}},692:function(t,n,e){var r=e(6)((function(i){return i[1]}));r.push([t.i,".keen-slider:not([data-keen-slider-disabled]){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;align-content:flex-start;display:flex;overflow:hidden;position:relative;touch-action:pan-y;-webkit-user-select:none;user-select:none;-khtml-user-select:none;width:100%}.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide{min-height:100%;overflow:hidden;position:relative;width:100%}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-reverse]{flex-direction:row-reverse}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-v]{flex-wrap:wrap}",""]),r.locals={},t.exports=r},914:function(t,n,e){var content=e(1287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(7).default)("ad9ea794",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=70.6c3f6cc197d0d998bd3c.js.map