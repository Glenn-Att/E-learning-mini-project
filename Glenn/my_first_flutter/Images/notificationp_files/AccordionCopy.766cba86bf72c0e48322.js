(window.webpackJsonp=window.webpackJsonp||[]).push([[16,28,52],{1380:function(e,t,o){"use strict";o(965)},1381:function(e,t,o){var n=o(6)((function(i){return i[1]}));n.push([e.i,".app-accordion2__copy-menu{--menu-min-width:140px}.app-accordion2__copy-menu-item{--icon-size:16px}.app-accordion2__copy-menu-item.i8-menu-item_disabled .i8-icon>svg{filter:invert(67%) sepia(0) saturate(57%) hue-rotate(172deg) brightness(93%) contrast(86%)}",""]),n.locals={},e.exports=n},1382:function(e,t,o){"use strict";o(966)},1383:function(e,t,o){var n=o(6)((function(i){return i[1]}));n.push([e.i,".app-accordion2__copy-btn_copied[data-v-563e913e]{--button-color:var(--copy-text-button-copied-color,var(--c-green_500))}",""]),n.locals={},e.exports=n},1530:function(e,t,o){"use strict";o.r(t);var n=o(8),c=o(15),r=o(10),l=o(651),d=o(714),f=o(726),h=o(54),y=o(683),I=o(719),_=o(706);var m={name:"AccordionCopy",components:{I8Button:c.I8Button,I8Menu:d.a,I8MenuItem:f.a,I8Loader:c.I8Loader},props:{color:{type:String,default:void 0},fetchSvgFunc:{type:Function,default:()=>{}}},data:()=>({iconsLicense:!1,copied:!1,debouncedSetCopiedFalse:()=>{},svgLoading:!1}),computed:{...Object(n.e)({user:e=>e.auth.user,fullIcon:e=>e.icon.fullIcon,selectedIcon:e=>e.icon.selectedIcon,colorGradient:e=>e.filters.colorGradient,projectId:e=>e.icon.accordion.project.id}),...Object(n.c)("icon",["fullIconLoading","hasSvgFormat"]),url(){return this.selectedIcon.url||this.fullIcon.url}},watch:{"user.allowances":{immediate:!0,deep:!0,handler(e){e&&e.length?this.iconsLicense=!!e.find((e=>"icon"===e.resource)):this.iconsLicense=!1}}},mounted(){this.debouncedSetCopiedFalse=Object(r.debounce)((()=>{this.copied=!1}),3e3)},methods:{...Object(n.b)("icon",["extendFullIcon"]),...Object(n.b)(["fillUserInfo"]),copyText(text){this.$copyText(text).then((()=>{this.copied=!0,this.debouncedSetCopiedFalse.apply(this)}),(e=>{console.error(e)}))},copyLink(){this.copyText(window.location.origin+this.url),this.$refs.copyMenu.hide()},copyPng(){try{var e,t;this.projectId&&Object(I.projectHasActiveEffects)(this.projectId)&&this.extendFullIcon({svgEffect:Object(l.getSVG)(this.projectId)}),Object(_.a)(this.$store,this).downloadIcon(this.fullIconLoading?this.selectedIcon:this.fullIcon,{color:this.color,format:"png",size:100,userLicense:this.iconsLicense},null===(e=this.user)||void 0===e?void 0:e.email,(null===(t=this.user)||void 0===t?void 0:t.publicApiKey)||"").then((e=>{navigator.clipboard.write([new ClipboardItem({[e.data.type]:e.data})]).then((()=>{this.copied=!0,this.debouncedSetCopiedFalse.apply(this)}))}))}catch(e){console.error(e)}this.$refs.copyMenu.hide()},async copySvgCode(){if(this.iconsLicense){this.svgLoading=!0,this.fullIcon.svg?this.projectId&&Object(I.projectHasActiveEffects)(this.projectId)&&await this.extendFullIcon({svgEffect:Object(l.getSVG)(this.projectId)}):await this.fetchSvgFunc();try{const e=(await Object(y.m)({...this.fullIcon,color:this.color,colorGradient:this.colorGradient},100)).result;await Object(h.d)(this.selectedIcon.id,this.user)||(await Object(_.a)(this.$store,this).buyIcon(this.fullIcon,this.user,this.iconsLicense),this.fillUserInfo()),this.copyText(e)}catch(e){this.$notify({title:"SVG Code is not available",type:"error",delay:5e3}),console.error(e)}this.svgLoading=!1,this.$refs.copyMenu.hide()}else window.open("/pricing","_blank","noopener,noreferrer"),this.$refs.copyMenu.hide()}}},v=(o(1380),o(1382),o(5)),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("I8Menu",{ref:"copyMenu",attrs:{"popup-side":"bottom","menu-offset":20,"centered-menu-position":!0,"menu-classes":["app-accordion2__copy-menu"]},scopedSlots:e._u([{key:"activator",fn:function(){return[t("I8Button",{class:["app-accordion2__copy-btn",{"app-accordion2__copy-btn_copied":e.copied}],attrs:{size:"large",type:"outline"}},[e._v("\n      "+e._s(e.copied?"✓ "+e.$t("ICON.COMPONENTS.ACCORDION_V2.COPIED"):e.$t("ICON.COMPONENTS.ACCORDION_V2.COPY"))+"\n    ")])]},proxy:!0},{key:"default",fn:function(){return[t("I8MenuItem",{staticClass:"app-accordion2__copy-menu-item",attrs:{disabled:!e.url,"icon-family":"simpleSmall","icon-left":"link"},on:{click:e.copyLink}},[e._v("\n      "+e._s(e.$t("ICON.COMPONENTS.ACCORDION_V2.COPY_LINK"))+"\n    ")]),e._v(" "),t("I8MenuItem",{staticClass:"app-accordion2__copy-menu-item",on:{click:e.copyPng},scopedSlots:e._u([{key:"iconLeft",fn:function(){return[t("div",{staticClass:"i8-icon i8-menu-item__icon i8-menu-item__icon_left",domProps:{innerHTML:e._s(e.$icons.image)}})]},proxy:!0},{key:"default",fn:function(){return[e._v("\n        "+e._s("PNG")+"\n      ")]},proxy:!0}])}),e._v(" "),e.hasSvgFormat?t("I8MenuItem",{staticClass:"app-accordion2__copy-menu-item",attrs:{disabled:e.svgLoading||e.fullIconLoading},on:{click:e.copySvgCode},scopedSlots:e._u([{key:"iconLeft",fn:function(){return[e.svgLoading?[t("I8Loader",{staticClass:"i8-icon i8-menu-item__icon i8-menu-item__icon_left",attrs:{size:16}})]:[t("div",{staticClass:"i8-icon i8-menu-item__icon i8-menu-item__icon_left",domProps:{innerHTML:e._s(e.$icons.code)}})]]},proxy:!0},{key:"default",fn:function(){return[e._v("\n        "+e._s(e.$t("ICON.COMPONENTS.ACCORDION_V2.COPY_SVG_CODE"))+"\n      ")]},proxy:!0}],null,!1,130477278)}):e._e()]},proxy:!0}])})}),[],!1,null,"563e913e",null);t.default=component.exports},709:function(e,t){},710:function(e,t){},719:function(e,t,o){"use strict";o.r(t),o.d(t,"projectHasActiveEffects",(function(){return l})),o.d(t,"brightnessByColor",(function(){return d})),o.d(t,"recolorMonochromeIcon",(function(){return f})),o.d(t,"recolorNolanIcon",(function(){return h})),o.d(t,"toLowerHex6",(function(){return y})),o.d(t,"isNotRecolored",(function(){return I})),o.d(t,"isRecoloredByGradient",(function(){return _}));var n=o(651),c=o(684),r=o(771);function l(e,t){if(void 0===t&&(t={gradient:void 0,color:void 0}),!e)return!1;const o=Object(n.getProject)(e).effects,c=Object.keys(o).filter((e=>o[e].active));if(!c.length)return!1;if(1===c.length&&"recolor"===c[0]){const e=o.recolor.controls.palette,n=Object.keys(e);if(1===n.length){if(t.color&&y(e[n[0]].color)===y(t.color))return!1}else if(t.gradient){if(_(e,t.gradient))return!1}}return!0}function d(e){const t=e.startsWith("#"),o=e.startsWith("rgb");let n,g,b;if(t){const t=7===e.length,o=e.slice(1).match(t?/(\S{2})/g:/(\S{1})/g);o&&(n=parseInt(o[0]+(t?"":o[0]),16),g=parseInt(o[1]+(t?"":o[1]),16),b=parseInt(o[2]+(t?"":o[2]),16))}if(o){const t=e.match(/(\d+){3}/g);t&&(n=t[0],g=t[1],b=t[2])}if(void 0!==n)return(299*n+587*g+114*b)/1e3/255}function f(e,t){if(!t||!e)return console.error("Incorrect arguments in recolorMonochromeIcon"),!1;try{const o=Object(n.getProject)(e);o.effects.recolor||Object(c.b)(e);const r=o.effects.recolor.controls.palette;if(1===Object.keys(r).length){const o=Object.keys(r)[0];return Object(c.e)(e,o,t),Object(c.d)(e,o,t),!0}return!1}catch(e){return console.error(e),!1}}function h(e,t){if(!e||!t.start||!t.end)return console.error("Incorrect arguments in recolorNolanIcon"),!1;try{const o=Object(n.getProject)(e);o.effects.recolor||Object(c.b)(e);const l=o.effects.recolor.controls.palette,f=o.effects.recolor.nodes,h=[];for(const e in l){const t=f[e][0].index;if("number"==typeof t){const o=l[e].initColor;h.push({color:o,stopIndex:t,lightness:d(o),key:e})}}h.sort(((a,b)=>a.lightness-b.lightness));const y=(t,o)=>{Object(c.e)(e,t,o),Object(c.d)(e,t,o)};for(let i=0;i<h.length;i++)i<2?0===h[i].stopIndex?y(h[i].key,t.start):1===h[i].stopIndex&&y(h[i].key,t.end):(t.additional||(t.additional={start:Object(r.a)(22,t.start).hex,end:Object(r.a)(22,t.end).hex}),0===h[i].stopIndex?y(h[i].key,t.additional.start):1===h[i].stopIndex&&y(h[i].key,t.additional.end));return!0}catch(e){return console.error(e),!1}}function y(e){return e.length>7&&e.endsWith("FF")?e.toLowerCase().slice(0,-2):e.toLowerCase()}function I(e){return!Object.keys(e).some((t=>!(y(e[t].color)===e[t].initColor)))}function _(e,t){var o,n;if(!t||!t.start||!t.end)return console.error("Incorrect arguments in isRecoloredByGradient"),!1;const c=[t.start.toLowerCase(),t.end.toLowerCase(),null===(o=t.additional)||void 0===o?void 0:o.start.toLowerCase(),null===(n=t.additional)||void 0===n?void 0:n.end.toLowerCase()];return!Object.keys(e).some((t=>{const o=y(e[t].color);return!c.includes(o)}))}},965:function(e,t,o){var content=o(1381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(7).default)("03fc51da",content,!0,{sourceMap:!1})},966:function(e,t,o){var content=o(1383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(7).default)("16a24347",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=AccordionCopy.766cba86bf72c0e48322.js.map