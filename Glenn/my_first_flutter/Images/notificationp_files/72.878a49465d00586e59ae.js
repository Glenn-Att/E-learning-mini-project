(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1211:function(t,e,o){"use strict";o(877)},1212:function(t,e,o){var n=o(6)((function(i){return i[1]}));n.push([t.i,".carbon-horizontal-ad[data-v-75b32c3a]{background:#c3efcd;border:1px solid rgba(0,0,0,.03);border-radius:8px;box-sizing:border-box;height:132px;transition:all .25s ease;width:288px}@media(max-width:680px){.carbon-horizontal-ad[data-v-75b32c3a]{height:148px}}.carbon-horizontal-ad .container[data-v-75b32c3a]{align-items:center;height:100%;justify-content:center}",""]),n.locals={},t.exports=n},1213:function(t,e,o){"use strict";o(878)},1214:function(t,e,o){var n=o(6)((function(i){return i[1]}));n.push([t.i,".carbon-horizontal-ad #carbonads{display:flex;height:100%}.carbon-horizontal-ad #carbonads .carbon-wrap{align-items:center;display:flex;flex-flow:row nowrap;height:100%;justify-content:center}.carbon-horizontal-ad #carbonads .carbon-img{display:flex;margin-left:16px;max-height:76px;max-width:98px}.carbon-horizontal-ad #carbonads .carbon-img>img{border-radius:4px;max-height:76px;max-width:98px}.carbon-horizontal-ad #carbonads .carbon-text-wrap{display:flex;flex-direction:column;justify-content:space-between;padding:22px 16px}.carbon-horizontal-ad #carbonads .carbon-text{color:#1a1a1a;display:flex;flex-flow:column nowrap;font-size:12px;font-style:normal;font-weight:400;justify-content:space-between;line-height:16px;min-height:100%}.carbon-horizontal-ad #carbonads .carbon-poweredby{align-items:center;color:rgba(0,0,0,.26);display:flex;font-size:10px;font-style:normal;font-weight:600;line-height:16px;padding-top:8px;text-transform:uppercase}.carbon-horizontal-ad #carbonads .carbon-button{background-color:#1a1a1a;font-size:12px;font-weight:600;line-height:16px;margin-top:6px;white-space:nowrap;width:-moz-fit-content;width:fit-content}",""]),n.locals={},t.exports=n},1506:function(t,e,o){"use strict";o.r(e);var n=o(8),r=o(4),c=o(15),d={name:"CarbonHorizontalAd",data:()=>({container:void 0,loaded:!1}),computed:{...Object(n.e)({user:t=>t.auth.user}),isOurAd(){if(!this.container)return;const t=this.container.querySelector(".carbon-text");return!(!t||!t.href)&&t.href.includes("mega-creator")}},watch:{$route(){this.startShowAds()},"user.loaded"(){this.startShowAds()},"user.activeLicense"(t){t?this.cleanAds():this.startShowAds()}},mounted(){this.container=this.$el.querySelector(".container"),this.startShowAds()},methods:{loadAds(t){if(void 0===t&&(t=()=>{}),this.container.style.display="flex",this.cleanAds(),"zh-cN"===this.lang)return;const e=document.createElement("script");e.setAttribute("src","//cdn.carbonads.com/carbon.js?serve=CKYIV27I&placement=icons8com"),e.async=!0,e.setAttribute("type","text/javascript"),e.setAttribute("id","_carbonads_js"),e.addEventListener("load",t),this.container.appendChild(e)},cleanAds(){for(this.loaded=!1;this.container&&this.container.firstChild;)this.container.removeChild(this.container.firstChild);"function"==typeof window._carbonads_go&&(window._carbonads_go=void 0)},startShowAds(){this.user.loaded&&!this.user.activeLicense&&this.loadAds(this.callbackScript)},checkAds(){return this.container.querySelector("#carbonads")},callbackScript(){var t=this;const e=window._carbonads_go;"function"==typeof e?window._carbonads_go=function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];t.checkAds()||e.apply(window,n),t.checkAds()?(t.$emit("approveAds"),t.setLoaded(!0),t.changeLayoutToCardType()):(t.setLoaded(!1),t.$emit("rejectAds"))}:setTimeout((()=>{this.checkAds()?(this.$emit("approveAds"),this.setLoaded(!0),this.changeLayoutToCardType()):(this.setLoaded(!1),this.$emit("rejectAds"))}),300)},createCarbonButton(){const t=new(r.default.extend(c.I8Button))({propsData:{type:"primary",size:"small"}});t.$mount(),this.container.appendChild(t.$el);const e=this.$el.querySelector(".i8-button");e.classList.add("carbon-button");const o=document.createElement("span");return o.innerHTML=this.isOurAd?"Try Mega Creator":"Start using",e.appendChild(o),e},hasAlreadyBeenChanged(){return this.$el.querySelector(".carbon-text-wrap")},changeLayoutToCardType(){if(this.hasAlreadyBeenChanged())return;const t=this.$el.querySelector(".carbon-wrap"),e=this.$el.querySelector(".carbon-text"),o=this.$el.querySelector(".carbon-poweredby"),n=document.createElement("div");if(n.classList.add("carbon-text-wrap"),n.appendChild(e),o&&n.appendChild(o),t.appendChild(n),this.isOurAd){const t=this.createCarbonButton();e.appendChild(t)}},setLoaded(t){this.loaded=t}}},l=d,h=(o(1211),o(1213),o(5)),component=Object(h.a)(l,(function(){var t=this._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.loaded,expression:"loaded"}],staticClass:"carbon-horizontal-ad"},[t("div",{staticClass:"container"})])}),[],!1,null,"75b32c3a",null);e.default=component.exports},877:function(t,e,o){var content=o(1212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("588847c2",content,!0,{sourceMap:!1})},878:function(t,e,o){var content=o(1214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("4cf7f5cc",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=72.878a49465d00586e59ae.js.map