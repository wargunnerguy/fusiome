(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8413eac"],{"0a47":function(e,r,t){"use strict";t.r(r),t.d(r,"ion_refresher",(function(){return C})),t.d(r,"ion_refresher_content",(function(){return R}));var n=t("9ab4"),i=t("6d28"),s=t("7d8d"),o=t("41b3"),a=t("61cf"),l=t("2da8"),c=t("ef7a"),f=t("2196"),h=t("2c6d"),u=function(e){var r=e.previousElementSibling,t=null!==r&&"ION-HEADER"===r.tagName;return t?"translate":"scale"},p=function(e,r,t){return"scale"===e?g(r,t):m(r,t)},d=function(e){var r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,o=Object(c["a"])().duration(1e3).easing("ease-out"),a=Object(c["a"])().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=Object(c["a"])().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),f=Object(c["a"])().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var h=Object(c["a"])().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),u=Object(c["a"])().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([h,u])}return o.addAnimation([a,l,f])},g=function(e,r){var t=r.clientHeight,n=Object(c["a"])().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-"+t+"px)"},{offset:1,transform:"scale(1) translateY(100px)"}]);return d(e).addAnimation([n])},m=function(e,r){var t=r.clientHeight,n=Object(c["a"])().addElement(e).keyframes([{offset:0,transform:"translateY(-"+t+"px)"},{offset:1,transform:"translateY(100px)"}]);return d(e).addAnimation([n])},b=function(e){return Object(c["a"])().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")},v=function(e,r){e.style.setProperty("opacity",r.toString())},y=function(e,r,t,n){Object(i["f"])((function(){v(e,t),r.forEach((function(e,r){return e.style.setProperty("opacity",r<=n?"0.99":"0")}))}))},x=function(e,r){Object(i["f"])((function(){e.style.setProperty("--refreshing-rotation-duration",r>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")}))},w=function(e,r){if(!e)return Promise.resolve();var t=k(e,200);return Object(i["f"])((function(){e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform","translate3d(0px, "+r+", 0px)")})),t},j=function(e,r){return Object(n["b"])(void 0,void 0,void 0,(function(){var t,i,o;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return t=e.querySelector("ion-refresher-content"),t?[4,new Promise((function(e){return Object(a["c"])(t,e)}))]:[2,Promise.resolve(!1)];case 1:return n.sent(),i=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),o=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),[2,null!==i&&null!==o&&("ios"===r&&Object(s["a"])("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)]}}))}))},k=function(e,r){return void 0===r&&(r=0),new Promise((function(t){O(e,r,t)}))},O=function(e,r,t){var n,i;void 0===r&&(r=0);var s={passive:!0},o=500,a=function(){n&&n()},l=function(r){void 0!==r&&e!==r.target||(a(),t(r))};return e&&(e.addEventListener("webkitTransitionEnd",l,s),e.addEventListener("transitionend",l,s),i=setTimeout(l,r+o),n=function(){i&&(clearTimeout(i),i=void 0),e.removeEventListener("webkitTransitionEnd",l,s),e.removeEventListener("transitionend",l,s)}),a},E="ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",S="ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}",C=function(){function e(e){Object(i["o"])(this,e),this.ionRefresh=Object(i["g"])(this,"ionRefresh",7),this.ionPull=Object(i["g"])(this,"ionPull",7),this.ionStart=Object(i["g"])(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.enable(!this.disabled)},e.prototype.checkNativeRefresher=function(){return Object(n["b"])(this,void 0,void 0,(function(){var e,r;return Object(n["d"])(this,(function(t){switch(t.label){case 0:return[4,j(this.el,Object(s["b"])(this))];case 1:return e=t.sent(),e&&!this.nativeRefresher?(r=this.el.closest("ion-content"),this.setupNativeRefresher(r)):e||this.destroyNativeRefresher(),[2]}}))}))},e.prototype.destroyNativeRefresher=function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1},e.prototype.resetNativeRefresher=function(e,r){return Object(n["b"])(this,void 0,void 0,(function(){return Object(n["d"])(this,(function(t){switch(t.label){case 0:return this.state=r,"ios"!==Object(s["b"])(this)?[3,2]:[4,w(e,void 0)];case 1:return t.sent(),[3,4];case 2:return[4,k(this.el.querySelector(".refresher-refreshing-icon"),200)];case 3:t.sent(),t.label=4;case 4:return this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach((function(e){return e.destroy()})),this.animations=[],this.progress=0,this.state=1,[2]}}))}))},e.prototype.setupiOSNativeRefresher=function(e,r){return Object(n["b"])(this,void 0,void 0,(function(){var s,o,c,f,h=this;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return this.elementToTransform=this.scrollEl,s=e.shadowRoot.querySelectorAll("svg"),o=.16*this.scrollEl.clientHeight,c=s.length,Object(i["f"])((function(){return s.forEach((function(e){return e.style.setProperty("animation","none")}))})),this.scrollListenerCallback=function(){(h.pointerDown||1!==h.state)&&Object(i["h"])((function(){var t=h.scrollEl.scrollTop,n=h.el.clientHeight;if(t>0){if(8===h.state){var f=Object(a["j"])(0,t/(.5*n),1);return void Object(i["f"])((function(){return v(r,1-f)}))}Object(i["f"])((function(){return v(e,0)}))}else{h.pointerDown&&(h.didStart||(h.didStart=!0,h.ionStart.emit()),h.pointerDown&&h.ionPull.emit());var u=Object(a["j"])(0,Math.abs(t)/n,.99),p=h.progress=Object(a["j"])(0,(Math.abs(t)-30)/o,1),d=Object(a["j"])(0,Math.floor(p*c),c-1),g=8===h.state||d===c-1;g?(h.pointerDown&&x(r,h.lastVelocityY),h.didRefresh||(h.beginRefresh(),h.didRefresh=!0,Object(l["d"])({style:"light"}),h.pointerDown||w(h.elementToTransform,n+"px"))):(h.state=2,y(e,s,u,d))}}))},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),f=this,[4,Promise.resolve().then(t.bind(null,"391c"))];case 1:return f.gesture=n.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){h.pointerDown=!0,h.didRefresh||w(h.elementToTransform,"0px"),0===o&&(o=.16*h.scrollEl.clientHeight)},onMove:function(e){h.lastVelocityY=e.velocityY},onEnd:function(){h.pointerDown=!1,h.didStart=!1,h.needsCompletion?(h.resetNativeRefresher(h.elementToTransform,32),h.needsCompletion=!1):h.didRefresh&&Object(i["h"])((function(){return w(h.elementToTransform,h.el.clientHeight+"px")}))}}),this.disabledChanged(),[2]}}))}))},e.prototype.setupMDNativeRefresher=function(e,r,s){return Object(n["b"])(this,void 0,void 0,(function(){var l,c,f,h,d=this;return Object(n["d"])(this,(function(g){switch(g.label){case 0:return l=Object(a["g"])(r).querySelector("circle"),c=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),f=Object(a["g"])(s).querySelector("circle"),null!==l&&null!==f&&Object(i["f"])((function(){l.style.setProperty("animation","none"),s.style.setProperty("animation-delay","-655ms"),f.style.setProperty("animation-delay","-655ms")})),h=this,[4,Promise.resolve().then(t.bind(null,"391c"))];case 1:return h.gesture=g.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return 8!==d.state&&32!==d.state&&0===d.scrollEl.scrollTop},onStart:function(e){e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(r){if(r.velocityY<0&&0===d.progress&&!r.data.didStart||r.data.cancelled)r.data.cancelled=!0;else{if(!r.data.didStart){r.data.didStart=!0,d.state=2,Object(i["f"])((function(){return d.scrollEl.style.setProperty("--overflow","hidden")}));var t=u(e),n=p(t,c,d.el);return r.data.animation=n,n.progressStart(!1,0),d.ionStart.emit(),void d.animations.push(n)}d.progress=Object(a["j"])(0,r.deltaY/180*.5,1),r.data.animation.progressStep(d.progress),d.ionPull.emit()}},onEnd:function(e){if(e.data.didStart){if(Object(i["f"])((function(){return d.scrollEl.style.removeProperty("--overflow")})),d.progress<=.4)return d.gesture.enable(!1),void e.data.animation.progressEnd(0,d.progress,500).onFinish((function(){d.animations.forEach((function(e){return e.destroy()})),d.animations=[],d.gesture.enable(!0),d.state=1}));var r=Object(o["a"])([0,0],[0,0],[1,1],[1,1],d.progress)[0],t=b(c);d.animations.push(t),Object(i["f"])((function(){return Object(n["b"])(d,void 0,void 0,(function(){return Object(n["d"])(this,(function(n){switch(n.label){case 0:return c.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),[4,t.play()];case 1:return n.sent(),this.beginRefresh(),e.data.animation.destroy(),[2]}}))}))}))}}}),this.disabledChanged(),[2]}}))}))},e.prototype.setupNativeRefresher=function(e){return Object(n["b"])(this,void 0,void 0,(function(){var r,t;return Object(n["d"])(this,(function(n){return this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl||(this.setCss(0,"",!1,""),this.nativeRefresher=!0,r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===Object(s["b"])(this)?this.setupiOSNativeRefresher(r,t):this.setupMDNativeRefresher(e,r,t)),[2]}))}))},e.prototype.componentDidUpdate=function(){this.checkNativeRefresher()},e.prototype.connectedCallback=function(){return Object(n["b"])(this,void 0,void 0,(function(){var e,r,i,o=this;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return"fixed"!==this.el.getAttribute("slot")?(console.error('Make sure you use: <ion-refresher slot="fixed">'),[2]):(e=this.el.closest("ion-content"),e?[4,new Promise((function(r){return Object(a["c"])(e,r)}))]:(console.error("<ion-refresher> must be used inside an <ion-content>"),[2]));case 1:return n.sent(),r=this,[4,e.getScrollElement()];case 2:return r.scrollEl=n.sent(),this.backgroundContentEl=Object(a["g"])(e).querySelector("#background-content"),[4,j(this.el,Object(s["b"])(this))];case 3:return n.sent()?(this.setupNativeRefresher(e),[3,6]):[3,4];case 4:return i=this,[4,Promise.resolve().then(t.bind(null,"391c"))];case 5:i.gesture=n.sent().createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:function(){return o.canStart()},onStart:function(){return o.onStart()},onMove:function(e){return o.onMove(e)},onEnd:function(){return o.onEnd()}}),this.disabledChanged(),n.label=6;case 6:return[2]}}))}))},e.prototype.disconnectedCallback=function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.prototype.complete=function(){return Object(n["b"])(this,void 0,void 0,(function(){var e=this;return Object(n["d"])(this,(function(r){return this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||Object(a["q"])((function(){return Object(a["q"])((function(){return e.resetNativeRefresher(e.elementToTransform,32)}))}))):this.close(32,"120ms"),[2]}))}))},e.prototype.cancel=function(){return Object(n["b"])(this,void 0,void 0,(function(){var e=this;return Object(n["d"])(this,(function(r){return this.nativeRefresher?this.pointerDown||Object(a["q"])((function(){return Object(a["q"])((function(){return e.resetNativeRefresher(e.elementToTransform,16)}))})):this.close(16,""),[2]}))}))},e.prototype.getProgress=function(){return Promise.resolve(this.progress)},e.prototype.canStart=function(){return!!this.scrollEl&&(1===this.state&&!(this.scrollEl.scrollTop>0))},e.prototype.onStart=function(){this.progress=0,this.state=1},e.prototype.onMove=function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0===(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){var i=this.scrollEl.scrollTop;if(i>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var s=this.pullMin;this.progress=n/s,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<s?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}},e.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()},e.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})},e.prototype.close=function(e,r){var t=this;setTimeout((function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)},e.prototype.setCss=function(e,r,t,n){var s=this;this.nativeRefresher||(this.appliedStyles=e>0,Object(i["f"])((function(){if(s.scrollEl&&s.backgroundContentEl){var i=s.scrollEl.style,o=s.backgroundContentEl.style;i.transform=o.transform=e>0?"translateY("+e+"px) translateZ(0px)":"",i.transitionDuration=o.transitionDuration=r,i.transitionDelay=o.transitionDelay=n,i.overflow=t?"hidden":""}})))},e.prototype.render=function(){var e,r=Object(s["b"])(this);return Object(i["j"])(i["c"],{slot:"fixed",class:(e={},e[r]=!0,e["refresher-"+r]=!0,e["refresher-native"]=this.nativeRefresher,e["refresher-active"]=1!==this.state,e["refresher-pulling"]=2===this.state,e["refresher-ready"]=4===this.state,e["refresher-refreshing"]=8===this.state,e["refresher-cancelling"]=16===this.state,e["refresher-completing"]=32===this.state,e)})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i["k"])(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),e}();C.style={ios:E,md:S};var R=function(){function e(e){Object(i["o"])(this,e)}return e.prototype.componentWillLoad=function(){if(void 0===this.pullingIcon){var e=Object(s["b"])(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=s["c"].get("refreshingIcon","ios"===e&&Object(s["a"])("mobile")?s["c"].get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){e=Object(s["b"])(this);this.refreshingSpinner=s["c"].get("refreshingSpinner",s["c"].get("spinner","ios"===e?"lines":"circular"))}},e.prototype.render=function(){var e=this.pullingIcon,r=null!=e&&void 0!==h["a"][e],t=Object(s["b"])(this);return Object(i["j"])(i["c"],{class:t},Object(i["j"])("div",{class:"refresher-pulling"},this.pullingIcon&&r&&Object(i["j"])("div",{class:"refresher-pulling-icon"},Object(i["j"])("div",{class:"spinner-arrow-container"},Object(i["j"])("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&Object(i["j"])("div",{class:"arrow-container"},Object(i["j"])("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&Object(i["j"])("div",{class:"refresher-pulling-icon"},Object(i["j"])("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(i["j"])("div",{class:"refresher-pulling-text",innerHTML:Object(f["a"])(this.pullingText)})),Object(i["j"])("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(i["j"])("div",{class:"refresher-refreshing-icon"},Object(i["j"])("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(i["j"])("div",{class:"refresher-refreshing-text",innerHTML:Object(f["a"])(this.refreshingText)})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i["k"])(this)},enumerable:!1,configurable:!0}),e}()},"2c6d":function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n={bubbles:{dur:1e3,circles:9,fn:function(e,r,t){var n=e*r/t-e+"ms",i=2*Math.PI*r/t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(e,r,t){var n=r/t,i=e*n-e+"ms",s=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,r){var t=-110*r+"ms";return{r:6,style:{left:9-9*r+"px","animation-delay":t}}}},lines:{dur:1e3,lines:12,fn:function(e,r,t){var n="rotate("+(30*r+(r<6?180:-180))+"deg)",i=e*r/t-e+"ms";return{y1:17,y2:29,style:{transform:n,"animation-delay":i}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,r,t){var n="rotate("+(30*r+(r<6?180:-180))+"deg)",i=e*r/t-e+"ms";return{y1:12,y2:20,style:{transform:n,"animation-delay":i}}}}},i=n},"2da8":function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return i})),t.d(r,"d",(function(){return l})),t.d(r,"e",(function(){return a}));var n={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){var e=window;return!!e.Capacitor},impact:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.impact({style:t})}},notification:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.notification({style:t})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=function(){n.selection()},s=function(){n.selectionStart()},o=function(){n.selectionChanged()},a=function(){n.selectionEnd()},l=function(e){n.impact(e)}}}]);
//# sourceMappingURL=chunk-d8413eac.e16f44c3.js.map