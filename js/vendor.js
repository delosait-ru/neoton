/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function l(t){var n=this,i=!1;return e(this).one(c.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||c.triggerTransitionEnd(n)}),t),this}var c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&c.isElement(s)?"element":null===(a=s)||"undefined"==typeof a?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};c.jQueryDetection(),e.fn.emulateTransitionEnd=l,e.event.special[c.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var h="alert",u=e.fn[h],d=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=c.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=c.getTransitionDurationFromElement(t);e(t).one(c.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),e.fn[h]=d._jQueryInterface,e.fn[h].Constructor=d,e.fn[h].noConflict=function(){return e.fn[h]=u,d._jQueryInterface};var f=e.fn.button,g=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var s=i.querySelector(".active");s&&e(s).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"LABEL"===i.tagName&&o&&"checkbox"===o.type&&t.preventDefault(),g._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var s=0,r=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=t[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=g._jQueryInterface,e.fn.button.Constructor=g,e.fn.button.noConflict=function(){return e.fn.button=f,g._jQueryInterface};var m="carousel",p=".bs.carousel",_=e.fn[m],v={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},b={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},y={TOUCH:"touch",PEN:"pen"},E=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(c.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(p),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=a(a({},v),t),c.typeCheckConfig(m,t,b),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,s,r=this,a=this._element.querySelector(".active.carousel-item"),l=this._getItemIndex(a),h=n||a&&this._getItemByDirection(t,a),u=this._getItemIndex(h),d=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",s="left"):(i="carousel-item-right",o="carousel-item-prev",s="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,s).isDefaultPrevented()&&a&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event("slid.bs.carousel",{relatedTarget:h,direction:s,from:l,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),c.reflow(h),e(a).addClass(i),e(h).addClass(i);var g=parseInt(h.getAttribute("data-interval"),10);g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval;var m=c.getTransitionDurationFromElement(a);e(a).one(c.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(a).removeClass("active "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(f)}),0)})).emulateTransitionEnd(m)}else e(a).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),o=a(a({},v),e(this).data());"object"==typeof n&&(o=a(a({},o),n));var s="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof s){if("undefined"==typeof i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=c.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var s=a(a({},e(o).data()),e(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),t._jQueryInterface.call(e(o),s),r&&e(o).data("bs.carousel").to(r),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return v}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",E._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);E._jQueryInterface.call(o,o.data())}})),e.fn[m]=E._jQueryInterface,e.fn[m].Constructor=E,e.fn[m].noConflict=function(){return e.fn[m]=_,E._jQueryInterface};var w="collapse",T=e.fn[w],C={toggle:!0,parent:""},S={toggle:"boolean",parent:"(string|element)"},D=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var s=n[i],r=c.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}));null!==r&&a.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=e.Event("show.bs.collapse");if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var r=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",c.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],a=c.getSelectorFromElement(r);if(null!==a)e([].slice.call(document.querySelectorAll(a))).hasClass("show")||e(r).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=a(a({},C),t)).toggle=Boolean(t.toggle),c.typeCheckConfig(w,t,S),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;c.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o));return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=c.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.collapse"),s=a(a(a({},C),i.data()),"object"==typeof n&&n?n:{});if(!o&&s.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data("bs.collapse",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return C}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=c.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();D._jQueryInterface.call(t,i)}))})),e.fn[w]=D._jQueryInterface,e.fn[w].Constructor=D,e.fn[w].noConflict=function(){return e.fn[w]=T,D._jQueryInterface};var k="dropdown",N=e.fn[k],A=new RegExp("38|40|27"),I={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},O={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},j=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var o={relatedTarget:this._element},s=e.Event("show.bs.dropdown",o),r=t._getParentFromElement(this._element);if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if("undefined"==typeof n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=r:c.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=a(a(a({},this.constructor.Default),e(this._element).data()),t),c.typeCheckConfig(k,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a(a({},t),this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event("hide.bs.dropdown",l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=c.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!A.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==s.length){var r=s.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return I}},{key:"DefaultType",get:function(){return O}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",j._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),j._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[k]=j._jQueryInterface,e.fn[k].Constructor=j,e.fn[k].noConflict=function(){return e.fn[k]=N,j._jQueryInterface};var P=e.fn.modal,x={backdrop:!0,keyboard:!0,focus:!0,show:!0},L={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},R=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var s=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=a(a({},x),t),c.typeCheckConfig("modal",t,L),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add("modal-static");var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t._element.classList.remove("modal-static")})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&c.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var a=c.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(c.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&c.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var s=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var r=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data("bs.modal"),s=a(a(a({},x),e(this).data()),"object"==typeof n&&n?n:{});if(o||(o=new t(this,s),e(this).data("bs.modal",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else s.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return x}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,o=c.getSelectorFromElement(this);o&&(n=document.querySelector(o));var s=e(n).data("bs.modal")?"toggle":a(a({},e(n).data()),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));R._jQueryInterface.call(e(n),s,this)})),e.fn.modal=R._jQueryInterface,e.fn.modal.Constructor=R,e.fn.modal.noConflict=function(){return e.fn.modal=P,R._jQueryInterface};var q=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],F={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Q=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,B=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function H(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===q.indexOf(n)||Boolean(t.nodeValue.match(Q)||t.nodeValue.match(B));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return i.body.innerHTML}var U="tooltip",M=e.fn[U],W=new RegExp("(^|\\s)bs-tooltip\\S+","g"),V=["sanitize","whiteList","sanitizeFn"],z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},K={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},X={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:F,popperConfig:null},Y={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},$=function(){function t(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=c.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=c.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass("fade");var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(h)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=c.getTransitionDurationFromElement(this.tip);e(this.tip).one(c.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var r=c.getTransitionDurationFromElement(i);e(i).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=H(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return a(a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),this.config.popperConfig)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:c.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return K[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a(a({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==V.indexOf(t)&&delete n[t]})),"number"==typeof(t=a(a(a({},this.constructor.Default),n),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),c.typeCheckConfig(U,t,this.constructor.DefaultType),t.sanitize&&(t.template=H(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(W);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return X}},{key:"NAME",get:function(){return U}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Y}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return z}}]),t}();e.fn[U]=$._jQueryInterface,e.fn[U].Constructor=$,e.fn[U].noConflict=function(){return e.fn[U]=M,$._jQueryInterface};var J="popover",G=e.fn[J],Z=new RegExp("(^|\\s)bs-popover\\S+","g"),tt=a(a({},$.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),et=a(a({},$.DefaultType),{},{content:"(string|element|function)"}),nt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},it=function(t){var n,i;function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Z);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return tt}},{key:"NAME",get:function(){return J}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return nt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return et}}]),s}($);e.fn[J]=it._jQueryInterface,e.fn[J].Constructor=it,e.fn[J].noConflict=function(){return e.fn[J]=G,it._jQueryInterface};var ot="scrollspy",st=e.fn[ot],rt={offset:10,method:"auto",target:""},at={offset:"number",method:"string",target:"(string|element)"},lt=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=c.getSelectorFromElement(t);if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=a(a({},rt),"object"==typeof t&&t?t:{})).target&&c.isElement(t.target)){var n=e(t.target).attr("id");n||(n=c.getUID(ot),e(t.target).attr("id",n)),t.target="#"+n}return c.typeCheckConfig(ot,t,at),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return rt}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);lt._jQueryInterface.call(i,i.data())}})),e.fn[ot]=lt._jQueryInterface,e.fn[ot].Constructor=lt,e.fn[ot].noConflict=function(){return e.fn[ot]=st,lt._jQueryInterface};var ct=e.fn.tab,ht=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],s=c.getSelectorFromElement(this._element);if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var a=e.Event("hide.bs.tab",{relatedTarget:this._element}),l=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],r=i&&s&&e(s).hasClass("fade"),a=function(){return o._transitionComplete(t,s,i)};if(s&&r){var l=c.getTransitionDurationFromElement(s);e(s).removeClass("show").one(c.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),c.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var s=e(t).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));e(r).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),ht._jQueryInterface.call(e(this),"show")})),e.fn.tab=ht._jQueryInterface,e.fn.tab.Constructor=ht,e.fn.tab.noConflict=function(){return e.fn.tab=ct,ht._jQueryInterface};var ut=e.fn.toast,dt={animation:"boolean",autohide:"boolean",delay:"number"},ft={animation:!0,autohide:!0,delay:500},gt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),c.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=a(a(a({},ft),e(this._element).data()),"object"==typeof t&&t?t:{}),c.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"DefaultType",get:function(){return dt}},{key:"Default",get:function(){return ft}}]),t}();e.fn.toast=gt._jQueryInterface,e.fn.toast.Constructor=gt,e.fn.toast.noConflict=function(){return e.fn.toast=ut,gt._jQueryInterface},t.Alert=d,t.Button=g,t.Carousel=E,t.Collapse=D,t.Dropdown=j,t.Modal=R,t.Popover=it,t.Scrollspy=lt,t.Tab=ht,t.Toast=gt,t.Tooltip=$,t.Util=c,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=bootstrap.min.js.map
/*
 * jQuery mmenu v5.5.3
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Licensed under the MIT license:
 * http://en.wikipedia.org/wiki/MIT_License
 */
! function (e) {
    function n() {
        e[t].glbl || (l = {
            $wndw: e(window),
            $html: e("html"),
            $body: e("body")
        }, a = {}, i = {}, r = {}, e.each([a, i, r], function (e, n) {
            n.add = function (e) {
                e = e.split(" ");
                for (var t = 0, s = e.length; s > t; t++) n[e[t]] = n.mm(e[t])
            }
        }), a.mm = function (e) {
            return "mm-" + e
        }, a.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), a.umm = function (e) {
            return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
        }, i.mm = function (e) {
            return "mm-" + e
        }, i.add("parent sub"), r.mm = function (e) {
            return e + ".mm"
        }, r.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"), e[t]._c = a, e[t]._d = i, e[t]._e = r, e[t].glbl = l)
    }
    var t = "mmenu",
        s = "5.5.3";
    if (!(e[t] && e[t].version > s)) {
        e[t] = function (e, n, t) {
            this.$menu = e, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = n, this.conf = t, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
            var s = this.$pnls.children();
            return this._initAddons(), this.init(s), "function" == typeof this.___debug && this.___debug(), this
        }, e[t].version = s, e[t].addons = {}, e[t].uniqueId = 0, e[t].defaults = {
            extensions: [],
            navbar: {
                add: !0,
                title: "Menu",
                titleLink: "panel"
            },
            onClick: {
                setSelected: !0
            },
            slidingSubmenus: !0
        }, e[t].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            },
            clone: !1,
            openingInterval: 25,
            panelNodetype: "ul, ol, div",
            transitionDuration: 400
        }, e[t].prototype = {
            init: function (e) {
                e = e.not("." + a.nopanel), e = this._initPanels(e), this.trigger("init", e), this.trigger("update")
            },
            update: function () {
                this.trigger("update")
            },
            setSelected: function (e) {
                this.$menu.find("." + a.listview).children().removeClass(a.selected), e.addClass(a.selected), this.trigger("setSelected", e)
            },
            openPanel: function (n) {
                var s = n.parent();
                if (s.hasClass(a.vertical)) {
                    var i = s.parents("." + a.subopened);
                    if (i.length) return this.openPanel(i.first());
                    s.addClass(a.opened)
                } else {
                    if (n.hasClass(a.current)) return;
                    var r = this.$pnls.children("." + a.panel),
                        l = r.filter("." + a.current);
                    r.removeClass(a.highest).removeClass(a.current).not(n).not(l).not("." + a.vertical).addClass(a.hidden), e[t].support.csstransitions || l.addClass(a.hidden), n.hasClass(a.opened) ? n.nextAll("." + a.opened).addClass(a.highest).removeClass(a.opened).removeClass(a.subopened) : (n.addClass(a.highest), l.addClass(a.subopened)), n.removeClass(a.hidden).addClass(a.current), setTimeout(function () {
                        n.removeClass(a.subopened).addClass(a.opened)
                    }, this.conf.openingInterval)
                }
                this.trigger("openPanel", n)
            },
            closePanel: function (e) {
                var n = e.parent();
                n.hasClass(a.vertical) && (n.removeClass(a.opened), this.trigger("closePanel", e))
            },
            closeAllPanels: function () {
                this.$menu.find("." + a.listview).children().removeClass(a.selected).filter("." + a.vertical).removeClass(a.opened);
                var e = this.$pnls.children("." + a.panel),
                    n = e.first();
                this.$pnls.children("." + a.panel).not(n).removeClass(a.subopened).removeClass(a.opened).removeClass(a.current).removeClass(a.highest).addClass(a.hidden), this.openPanel(n)
            },
            togglePanel: function (e) {
                var n = e.parent();
                n.hasClass(a.vertical) && this[n.hasClass(a.opened) ? "closePanel" : "openPanel"](e)
            },
            getInstance: function () {
                return this
            },
            bind: function (e, n) {
                this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(n)
            },
            trigger: function () {
                var e = this,
                    n = Array.prototype.slice.call(arguments),
                    t = n.shift();
                if (this.cbck[t])
                    for (var s = 0, a = this.cbck[t].length; a > s; s++) this.cbck[t][s].apply(e, n)
            },
            _initMenu: function () {
                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
                    e(this).attr("id", a.mm(e(this).attr("id")))
                })), this.$menu.contents().each(function () {
                    3 == e(this)[0].nodeType && e(this).remove()
                }), this.$pnls = e('<div class="' + a.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(a.wrapper);
                var n = [a.menu];
                this.opts.slidingSubmenus || n.push(a.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && n.push(this.opts.extensions), this.$menu.addClass(n.join(" "))
            },
            _initPanels: function (n) {
                var t = this,
                    s = this.__findAddBack(n, "ul, ol");
                this.__refactorClass(s, this.conf.classNames.inset, "inset").addClass(a.nolistview + " " + a.nopanel), s.not("." + a.nolistview).addClass(a.listview);
                var r = this.__findAddBack(n, "." + a.listview).children();
                this.__refactorClass(r, this.conf.classNames.selected, "selected"), this.__refactorClass(r, this.conf.classNames.divider, "divider"), this.__refactorClass(r, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(n, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                var l = e(),
                    d = n.add(n.find("." + a.panel)).add(this.__findAddBack(n, "." + a.listview).children().children(this.conf.panelNodetype)).not("." + a.nopanel);
                this.__refactorClass(d, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || d.addClass(a.vertical), d.each(function () {
                    var n = e(this),
                        s = n;
                    n.is("ul, ol") ? (n.wrap('<div class="' + a.panel + '" />'), s = n.parent()) : s.addClass(a.panel);
                    var i = n.attr("id");
                    n.removeAttr("id"), s.attr("id", i || t.__getUniqueId()), n.hasClass(a.vertical) && (n.removeClass(t.conf.classNames.vertical), s.add(s.parent()).addClass(a.vertical)), l = l.add(s)
                });
                var o = e("." + a.panel, this.$menu);
                l.each(function () {
                    var n = e(this),
                        s = n.parent(),
                        r = s.children("a, span").first();
                    if (s.is("." + a.panels) || (s.data(i.sub, n), n.data(i.parent, s)), !s.children("." + a.next).length && s.parent().is("." + a.listview)) {
                        var l = n.attr("id"),
                            d = e('<a class="' + a.next + '" href="#' + l + '" data-target="#' + l + '" />').insertBefore(r);
                        r.is("span") && d.addClass(a.fullsubopen)
                    }
                    if (!n.children("." + a.navbar).length && !s.hasClass(a.vertical)) {
                        if (s.parent().is("." + a.listview)) var s = s.closest("." + a.panel);
                        else var r = s.closest("." + a.panel).find('a[href="#' + n.attr("id") + '"]').first(),
                            s = r.closest("." + a.panel);
                        var o = e('<div class="' + a.navbar + '" />');
                        if (s.length) {
                            var l = s.attr("id");
                            switch (t.opts.navbar.titleLink) {
                                case "anchor":
                                    _url = r.attr("href");
                                    break;
                                case "panel":
                                case "parent":
                                    _url = "#" + l;
                                    break;
                                case "none":
                                default:
                                    _url = !1
                            }
                            o.append('<a class="' + a.btn + " " + a.prev + '" href="#' + l + '" data-target="#' + l + '" />').append(e('<a class="' + a.title + '"' + (_url ? ' href="' + _url + '"' : "") + " />").text(r.text())).prependTo(n), t.opts.navbar.add && n.addClass(a.hasnavbar)
                        } else t.opts.navbar.title && (o.append('<a class="' + a.title + '">' + t.opts.navbar.title + "</a>").prependTo(n), t.opts.navbar.add && n.addClass(a.hasnavbar))
                    }
                });
                var c = this.__findAddBack(n, "." + a.listview).children("." + a.selected).removeClass(a.selected).last().addClass(a.selected);
                c.add(c.parentsUntil("." + a.menu, "li")).filter("." + a.vertical).addClass(a.opened).end().not("." + a.vertical).each(function () {
                    e(this).parentsUntil("." + a.menu, "." + a.panel).not("." + a.vertical).first().addClass(a.opened).parentsUntil("." + a.menu, "." + a.panel).not("." + a.vertical).first().addClass(a.opened).addClass(a.subopened)
                }), c.children("." + a.panel).not("." + a.vertical).addClass(a.opened).parentsUntil("." + a.menu, "." + a.panel).not("." + a.vertical).first().addClass(a.opened).addClass(a.subopened);
                var h = o.filter("." + a.opened);
                return h.length || (h = l.first()), h.addClass(a.opened).last().addClass(a.current), l.not("." + a.vertical).not(h.last()).addClass(a.hidden).end().appendTo(this.$pnls), l
            },
            _initAnchors: function () {
                var n = this;
                l.$body.on(r.click + "-oncanvas", "a[href]", function (s) {
                    var i = e(this),
                        r = !1,
                        l = n.$menu.find(i).length;
                    for (var d in e[t].addons)
                        if (r = e[t].addons[d].clickAnchor.call(n, i, l)) break;
                    if (!r && l) {
                        var o = i.attr("href");
                        if (o.length > 1 && "#" == o.slice(0, 1)) try {
                            var c = e(o, n.$menu);
                            c.is("." + a.panel) && (r = !0, n[i.parent().hasClass(a.vertical) ? "togglePanel" : "openPanel"](c))
                        } catch (h) {}
                    }
                    if (r && s.preventDefault(), !r && l && i.is("." + a.listview + " > li > a") && !i.is('[rel="external"]') && !i.is('[target="_blank"]')) {
                        n.__valueOrFn(n.opts.onClick.setSelected, i) && n.setSelected(e(s.target).parent());
                        var p = n.__valueOrFn(n.opts.onClick.preventDefault, i, "#" == o.slice(0, 1));
                        p && s.preventDefault(), n.__valueOrFn(n.opts.onClick.close, i, p) && n.close()
                    }
                })
            },
            _initAddons: function () {
                for (var n in e[t].addons) e[t].addons[n].add.call(this), e[t].addons[n].add = function () {};
                for (var n in e[t].addons) e[t].addons[n].setup.call(this)
            },
            __api: function () {
                var n = this,
                    t = {};
                return e.each(this._api, function () {
                    var e = this;
                    t[e] = function () {
                        var s = n[e].apply(n, arguments);
                        return "undefined" == typeof s ? t : s
                    }
                }), t
            },
            __valueOrFn: function (e, n, t) {
                return "function" == typeof e ? e.call(n[0]) : "undefined" == typeof e && "undefined" != typeof t ? t : e
            },
            __refactorClass: function (e, n, t) {
                return e.filter("." + n).removeClass(n).addClass(a[t])
            },
            __findAddBack: function (e, n) {
                return e.find(n).add(e.filter(n))
            },
            __filterListItems: function (e) {
                return e.not("." + a.divider).not("." + a.hidden)
            },
            __transitionend: function (e, n, t) {
                var s = !1,
                    a = function () {
                        s || n.call(e[0]), s = !0
                    };
                e.one(r.transitionend, a), e.one(r.webkitTransitionEnd, a), setTimeout(a, 1.1 * t)
            },
            __getUniqueId: function () {
                return a.mm(e[t].uniqueId++)
            }
        }, e.fn[t] = function (s, a) {
            return n(), s = e.extend(!0, {}, e[t].defaults, s), a = e.extend(!0, {}, e[t].configuration, a), this.each(function () {
                var n = e(this);
                if (!n.data(t)) {
                    var i = new e[t](n, s, a);
                    n.data(t, i.__api())
                }
            })
        }, e[t].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints,
            csstransitions: function () {
                if ("undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransitions) return Modernizr.csstransitions;
                var e = document.body || document.documentElement,
                    n = e.style,
                    t = "transition";
                if ("string" == typeof n[t]) return !0;
                var s = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                t = t.charAt(0).toUpperCase() + t.substr(1);
                for (var a = 0; a < s.length; a++)
                    if ("string" == typeof n[s[a] + t]) return !0;
                return !1
            }()
        };
        var a, i, r, l
    }
}(jQuery);
/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (e) {
    var t = "mmenu",
        o = "offCanvas";
    e[t].addons[o] = {
        setup: function () {
            if (this.opts[o]) {
                var s = this.opts[o],
                    i = this.conf[o];
                a = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), ("top" == s.position || "bottom" == s.position) && (s.zposition = "front"), "string" != typeof i.pageSelector && (i.pageSelector = "> " + i.pageNodetype), a.$allMenus = (a.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
                var r = [n.offcanvas];
                "left" != s.position && r.push(n.mm(s.position)), "back" != s.zposition && r.push(n.mm(s.zposition)), this.$menu.addClass(r.join(" ")).parent().removeClass(n.wrapper), this.setPage(a.$page), this._initBlocker(), this["_initWindow_" + o](), this.$menu[i.menuInjectMethod + "To"](i.menuWrapperSelector)
            }
        },
        add: function () {
            n = e[t]._c, s = e[t]._d, i = e[t]._e, n.add("offcanvas slideout blocking modal background opening blocker page"), s.add("style"), i.add("resize")
        },
        clickAnchor: function (e) {
            if (!this.opts[o]) return !1;
            var t = this.$menu.attr("id");
            if (t && t.length && (this.conf.clone && (t = n.umm(t)), e.is('[href="#' + t + '"]'))) return this.open(), !0;
            if (a.$page) {
                var t = a.$page.first().attr("id");
                return t && t.length && e.is('[href="#' + t + '"]') ? (this.close(), !0) : !1
            }
        }
    }, e[t].defaults[o] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0
    }, e[t].configuration[o] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    }, e[t].prototype.open = function () {
        if (!this.vars.opened) {
            var e = this;
            this._openSetup(), setTimeout(function () {
                e._openFinish()
            }, this.conf.openingInterval), this.trigger("open")
        }
    }, e[t].prototype._openSetup = function () {
        var t = this,
            r = this.opts[o];
        this.closeAllOthers(), a.$page.each(function () {
            e(this).data(s.style, e(this).attr("style") || "")
        }), a.$wndw.trigger(i.resize + "-" + o, [!0]);
        var p = [n.opened];
        r.blockUI && p.push(n.blocking), "modal" == r.blockUI && p.push(n.modal), r.moveBackground && p.push(n.background), "left" != r.position && p.push(n.mm(this.opts[o].position)), "back" != r.zposition && p.push(n.mm(this.opts[o].zposition)), this.opts.extensions && p.push(this.opts.extensions), a.$html.addClass(p.join(" ")), setTimeout(function () {
            t.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(n.current + " " + n.opened)
    }, e[t].prototype._openFinish = function () {
        var e = this;
        this.__transitionend(a.$page.first(), function () {
            e.trigger("opened")
        }, this.conf.transitionDuration), a.$html.addClass(n.opening), this.trigger("opening")
    }, e[t].prototype.close = function () {
        if (this.vars.opened) {
            var t = this;
            this.__transitionend(a.$page.first(), function () {
                t.$menu.removeClass(n.current).removeClass(n.opened), a.$html.removeClass(n.opened).removeClass(n.blocking).removeClass(n.modal).removeClass(n.background).removeClass(n.mm(t.opts[o].position)).removeClass(n.mm(t.opts[o].zposition)), t.opts.extensions && a.$html.removeClass(t.opts.extensions), a.$page.each(function () {
                    e(this).attr("style", e(this).data(s.style))
                }), t.vars.opened = !1, t.trigger("closed")
            }, this.conf.transitionDuration), a.$html.removeClass(n.opening), this.trigger("close"), this.trigger("closing")
        }
    }, e[t].prototype.closeAllOthers = function () {
        a.$allMenus.not(this.$menu).each(function () {
            var o = e(this).data(t);
            o && o.close && o.close()
        })
    }, e[t].prototype.setPage = function (t) {
        var s = this,
            i = this.conf[o];
        t && t.length || (t = a.$body.find(i.pageSelector), i.noPageSelector.length && (t = t.not(i.noPageSelector.join(", "))), t.length > 1 && i.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[o].pageNodetype + " />").parent())), t.each(function () {
            e(this).attr("id", e(this).attr("id") || s.__getUniqueId())
        }), t.addClass(n.page + " " + n.slideout), a.$page = t, this.trigger("setPage", t)
    }, e[t].prototype["_initWindow_" + o] = function () {
        a.$wndw.off(i.keydown + "-" + o).on(i.keydown + "-" + o, function (e) {
            return a.$html.hasClass(n.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
        });
        var e = 0;
        a.$wndw.off(i.resize + "-" + o).on(i.resize + "-" + o, function (t, o) {
            if (1 == a.$page.length && (o || a.$html.hasClass(n.opened))) {
                var s = a.$wndw.height();
                (o || s != e) && (e = s, a.$page.css("minHeight", s))
            }
        })
    }, e[t].prototype._initBlocker = function () {
        var t = this;
        this.opts[o].blockUI && (a.$blck || (a.$blck = e('<div id="' + n.blocker + '" class="' + n.slideout + '" />')), a.$blck.appendTo(a.$body).off(i.touchstart + "-" + o + " " + i.touchmove + "-" + o).on(i.touchstart + "-" + o + " " + i.touchmove + "-" + o, function (e) {
            e.preventDefault(), e.stopPropagation(), a.$blck.trigger(i.mousedown + "-" + o)
        }).off(i.mousedown + "-" + o).on(i.mousedown + "-" + o, function (e) {
            e.preventDefault(), a.$html.hasClass(n.modal) || (t.closeAllOthers(), t.close())
        }))
    };
    var n, s, i, a
}(jQuery);
/*	
 * jQuery mmenu autoHeight addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (t) {
    var e = "mmenu",
        s = "autoHeight";
    t[e].addons[s] = {
        setup: function () {
            if (this.opts.offCanvas) {
                switch (this.opts.offCanvas.position) {
                    case "left":
                    case "right":
                        return
                }
                var n = this,
                    o = this.opts[s];
                if (this.conf[s], h = t[e].glbl, "boolean" == typeof o && o && (o = {
                        height: "auto"
                    }), "object" != typeof o && (o = {}), o = this.opts[s] = t.extend(!0, {}, t[e].defaults[s], o), "auto" == o.height) {
                    this.$menu.addClass(i.autoheight);
                    var u = function (t) {
                        var e = parseInt(this.$pnls.css("top"), 10) || 0;
                        _bot = parseInt(this.$pnls.css("bottom"), 10) || 0, this.$menu.addClass(i.measureheight), t = t || this.$pnls.children("." + i.current), t.is("." + i.vertical) && (t = t.parents("." + i.panel).not("." + i.vertical).first()), this.$menu.height(t.outerHeight() + e + _bot).removeClass(i.measureheight)
                    };
                    this.bind("update", u), this.bind("openPanel", u), this.bind("closePanel", u), this.bind("open", u), h.$wndw.off(a.resize + "-autoheight").on(a.resize + "-autoheight", function () {
                        u.call(n)
                    })
                }
            }
        },
        add: function () {
            i = t[e]._c, n = t[e]._d, a = t[e]._e, i.add("autoheight measureheight"), a.add("resize")
        },
        clickAnchor: function () {}
    }, t[e].defaults[s] = {
        height: "default"
    };
    var i, n, a, h
}(jQuery);
/*	
 * jQuery mmenu backButton addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (o) {
    var t = "mmenu",
        n = "backButton";
    o[t].addons[n] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var i = this,
                    e = this.opts[n];
                if (this.conf[n], a = o[t].glbl, "boolean" == typeof e && (e = {
                        close: e
                    }), "object" != typeof e && (e = {}), e = o.extend(!0, {}, o[t].defaults[n], e), e.close) {
                    var c = "#" + i.$menu.attr("id");
                    this.bind("opened", function () {
                        location.hash != c && history.pushState(null, document.title, c)
                    }), o(window).on("popstate", function (o) {
                        a.$html.hasClass(s.opened) ? (o.stopPropagation(), i.close()) : location.hash == c && (o.stopPropagation(), i.open())
                    })
                }
            }
        },
        add: function () {
            return window.history && window.history.pushState ? (s = o[t]._c, i = o[t]._d, void(e = o[t]._e)) : void(o[t].addons[n].setup = function () {})
        },
        clickAnchor: function () {}
    }, o[t].defaults[n] = {
        close: !1
    };
    var s, i, e, a
}(jQuery);
/*	
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (t) {
    var n = "mmenu",
        e = "counters";
    t[n].addons[e] = {
        setup: function () {
            var s = this,
                o = this.opts[e];
            this.conf[e], c = t[n].glbl, "boolean" == typeof o && (o = {
                add: o,
                update: o
            }), "object" != typeof o && (o = {}), o = this.opts[e] = t.extend(!0, {}, t[n].defaults[e], o), this.bind("init", function (n) {
                this.__refactorClass(t("em", n), this.conf.classNames[e].counter, "counter")
            }), o.add && this.bind("init", function (n) {
                n.each(function () {
                    var n = t(this).data(a.parent);
                    n && (n.children("em." + i.counter).length || n.prepend(t('<em class="' + i.counter + '" />')))
                })
            }), o.update && this.bind("update", function () {
                this.$pnls.find("." + i.panel).each(function () {
                    var n = t(this),
                        e = n.data(a.parent);
                    if (e) {
                        var c = e.children("em." + i.counter);
                        c.length && (n = n.children("." + i.listview), n.length && c.html(s.__filterListItems(n.children()).length))
                    }
                })
            })
        },
        add: function () {
            i = t[n]._c, a = t[n]._d, s = t[n]._e, i.add("counter search noresultsmsg")
        },
        clickAnchor: function () {}
    }, t[n].defaults[e] = {
        add: !1,
        update: !1
    }, t[n].configuration.classNames[e] = {
        counter: "Counter"
    };
    var i, a, s, c
}(jQuery);
/*	
 * jQuery mmenu dividers addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (i) {
    var e = "mmenu",
        s = "dividers";
    i[e].addons[s] = {
        setup: function () {
            var n = this,
                a = this.opts[s];
            if (this.conf[s], l = i[e].glbl, "boolean" == typeof a && (a = {
                    add: a,
                    fixed: a
                }), "object" != typeof a && (a = {}), a = this.opts[s] = i.extend(!0, {}, i[e].defaults[s], a), this.bind("init", function () {
                    this.__refactorClass(i("li", this.$menu), this.conf.classNames[s].collapsed, "collapsed")
                }), a.add && this.bind("init", function (e) {
                    switch (a.addTo) {
                        case "panels":
                            var s = e;
                            break;
                        default:
                            var s = i(a.addTo, this.$pnls).filter("." + d.panel)
                    }
                    i("." + d.divider, s).remove(), s.find("." + d.listview).not("." + d.vertical).each(function () {
                        var e = "";
                        n.__filterListItems(i(this).children()).each(function () {
                            var s = i.trim(i(this).children("a, span").text()).slice(0, 1).toLowerCase();
                            s != e && s.length && (e = s, i('<li class="' + d.divider + '">' + s + "</li>").insertBefore(this))
                        })
                    })
                }), a.collapse && this.bind("init", function (e) {
                    i("." + d.divider, e).each(function () {
                        var e = i(this),
                            s = e.nextUntil("." + d.divider, "." + d.collapsed);
                        s.length && (e.children("." + d.subopen).length || (e.wrapInner("<span />"), e.prepend('<a href="#" class="' + d.subopen + " " + d.fullsubopen + '" />')))
                    })
                }), a.fixed) {
                var o = function (e) {
                    e = e || this.$pnls.children("." + d.current);
                    var s = e.find("." + d.divider).not("." + d.hidden);
                    if (s.length) {
                        this.$menu.addClass(d.hasdividers);
                        var n = e.scrollTop() || 0,
                            t = "";
                        e.is(":visible") && e.find("." + d.divider).not("." + d.hidden).each(function () {
                            i(this).position().top + n < n + 1 && (t = i(this).text())
                        }), this.$fixeddivider.text(t)
                    } else this.$menu.removeClass(d.hasdividers)
                };
                this.$fixeddivider = i('<ul class="' + d.listview + " " + d.fixeddivider + '"><li class="' + d.divider + '"></li></ul>').prependTo(this.$pnls).children(), this.bind("openPanel", o), this.bind("init", function (e) {
                    e.off(t.scroll + "-dividers " + t.touchmove + "-dividers").on(t.scroll + "-dividers " + t.touchmove + "-dividers", function () {
                        o.call(n, i(this))
                    })
                })
            }
        },
        add: function () {
            d = i[e]._c, n = i[e]._d, t = i[e]._e, d.add("collapsed uncollapsed fixeddivider hasdividers"), t.add("scroll")
        },
        clickAnchor: function (i, e) {
            if (this.opts[s].collapse && e) {
                var n = i.parent();
                if (n.is("." + d.divider)) {
                    var t = n.nextUntil("." + d.divider, "." + d.collapsed);
                    return n.toggleClass(d.opened), t[n.hasClass(d.opened) ? "addClass" : "removeClass"](d.uncollapsed), !0
                }
            }
            return !1
        }
    }, i[e].defaults[s] = {
        add: !1,
        addTo: "panels",
        fixed: !1,
        collapse: !1
    }, i[e].configuration.classNames[s] = {
        collapsed: "Collapsed"
    };
    var d, n, t, l
}(jQuery);
/*	
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (e) {
    function t(e, t, n) {
        return t > e && (e = t), e > n && (e = n), e
    }
    var n = "mmenu",
        o = "dragOpen";
    e[n].addons[o] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var i = this,
                    a = this.opts[o],
                    p = this.conf[o];
                if (r = e[n].glbl, "boolean" == typeof a && (a = {
                        open: a
                    }), "object" != typeof a && (a = {}), a = this.opts[o] = e.extend(!0, {}, e[n].defaults[o], a), a.open) {
                    var d, f, c, u, h, l = {},
                        m = 0,
                        g = !1,
                        v = !1,
                        w = 0,
                        _ = 0;
                    switch (this.opts.offCanvas.position) {
                        case "left":
                        case "right":
                            l.events = "panleft panright", l.typeLower = "x", l.typeUpper = "X", v = "width";
                            break;
                        case "top":
                        case "bottom":
                            l.events = "panup pandown", l.typeLower = "y", l.typeUpper = "Y", v = "height"
                    }
                    switch (this.opts.offCanvas.position) {
                        case "right":
                        case "bottom":
                            l.negative = !0, u = function (e) {
                                e >= r.$wndw[v]() - a.maxStartPos && (m = 1)
                            };
                            break;
                        default:
                            l.negative = !1, u = function (e) {
                                e <= a.maxStartPos && (m = 1)
                            }
                    }
                    switch (this.opts.offCanvas.position) {
                        case "left":
                            l.open_dir = "right", l.close_dir = "left";
                            break;
                        case "right":
                            l.open_dir = "left", l.close_dir = "right";
                            break;
                        case "top":
                            l.open_dir = "down", l.close_dir = "up";
                            break;
                        case "bottom":
                            l.open_dir = "up", l.close_dir = "down"
                    }
                    switch (this.opts.offCanvas.zposition) {
                        case "front":
                            h = function () {
                                return this.$menu
                            };
                            break;
                        default:
                            h = function () {
                                return e("." + s.slideout)
                            }
                    }
                    var b = this.__valueOrFn(a.pageNode, this.$menu, r.$page);
                    "string" == typeof b && (b = e(b));
                    var y = new Hammer(b[0], a.vendors.hammer);
                    y.on("panstart", function (e) {
                        u(e.center[l.typeLower]), r.$slideOutNodes = h(), g = l.open_dir
                    }).on(l.events + " panend", function (e) {
                        m > 0 && e.preventDefault()
                    }).on(l.events, function (e) {
                        if (d = e["delta" + l.typeUpper], l.negative && (d = -d), d != w && (g = d >= w ? l.open_dir : l.close_dir), w = d, w > a.threshold && 1 == m) {
                            if (r.$html.hasClass(s.opened)) return;
                            m = 2, i._openSetup(), i.trigger("opening"), r.$html.addClass(s.dragging), _ = t(r.$wndw[v]() * p[v].perc, p[v].min, p[v].max)
                        }
                        2 == m && (f = t(w, 10, _) - ("front" == i.opts.offCanvas.zposition ? _ : 0), l.negative && (f = -f), c = "translate" + l.typeUpper + "(" + f + "px )", r.$slideOutNodes.css({
                            "-webkit-transform": "-webkit-" + c,
                            transform: c
                        }))
                    }).on("panend", function () {
                        2 == m && (r.$html.removeClass(s.dragging), r.$slideOutNodes.css("transform", ""), i[g == l.open_dir ? "_openFinish" : "close"]()), m = 0
                    })
                }
            }
        },
        add: function () {
            return "function" != typeof Hammer || Hammer.VERSION < 2 ? void(e[n].addons[o].setup = function () {}) : (s = e[n]._c, i = e[n]._d, a = e[n]._e, void s.add("dragging"))
        },
        clickAnchor: function () {}
    }, e[n].defaults[o] = {
        open: !1,
        maxStartPos: 100,
        threshold: 50,
        vendors: {
            hammer: {}
        }
    }, e[n].configuration[o] = {
        width: {
            perc: .8,
            min: 140,
            max: 440
        },
        height: {
            perc: .8,
            min: 140,
            max: 880
        }
    };
    var s, i, a, r
}(jQuery);
/*	
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (s) {
    var i = "mmenu",
        t = "fixedElements";
    s[i].addons[t] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var n = this.opts[t];
                this.conf[t], d = s[i].glbl, n = this.opts[t] = s.extend(!0, {}, s[i].defaults[t], n);
                var a = function (s) {
                    var i = this.conf.classNames[t].fixed;
                    this.__refactorClass(s.find("." + i), i, "slideout").appendTo(d.$body)
                };
                a.call(this, d.$page), this.bind("setPage", a)
            }
        },
        add: function () {
            n = s[i]._c, a = s[i]._d, e = s[i]._e, n.add("fixed")
        },
        clickAnchor: function () {}
    }, s[i].configuration.classNames[t] = {
        fixed: "Fixed"
    };
    var n, a, e, d
}(jQuery);
/*	
 * jQuery mmenu iconPanels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (e) {
    var n = "mmenu",
        i = "iconPanels";
    e[n].addons[i] = {
        setup: function () {
            var a = this,
                l = this.opts[i];
            if (this.conf[i], d = e[n].glbl, "boolean" == typeof l && (l = {
                    add: l
                }), "number" == typeof l && (l = {
                    add: !0,
                    visible: l
                }), "object" != typeof l && (l = {}), l = this.opts[i] = e.extend(!0, {}, e[n].defaults[i], l), l.visible++, l.add) {
                this.$menu.addClass(s.iconpanel);
                for (var t = [], o = 0; o <= l.visible; o++) t.push(s.iconpanel + "-" + o);
                t = t.join(" ");
                var c = function (n) {
                    var i = a.$pnls.children("." + s.panel).removeClass(t),
                        d = i.filter("." + s.subopened);
                    d.removeClass(s.hidden).add(n).slice(-l.visible).each(function (n) {
                        e(this).addClass(s.iconpanel + "-" + n)
                    })
                };
                this.bind("openPanel", c), this.bind("init", function (n) {
                    c.call(a, a.$pnls.children("." + s.current)), l.hideNavbars && n.removeClass(s.hasnavbar), n.each(function () {
                        e(this).children("." + s.subblocker).length || e(this).prepend('<a href="#' + e(this).closest("." + s.panel).attr("id") + '" class="' + s.subblocker + '" />')
                    })
                })
            }
        },
        add: function () {
            s = e[n]._c, a = e[n]._d, l = e[n]._e, s.add("iconpanel subblocker")
        },
        clickAnchor: function () {}
    }, e[n].defaults[i] = {
        add: !1,
        visible: 3,
        hideNavbars: !1
    };
    var s, a, l, d
}(jQuery);
/*	
 * jQuery mmenu navbar addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (n) {
    var a = "mmenu",
        t = "navbars";
    n[a].addons[t] = {
        setup: function () {
            var r = this,
                s = this.opts[t],
                c = this.conf[t];
            if (i = n[a].glbl, "undefined" != typeof s) {
                s instanceof Array || (s = [s]);
                var d = {};
                n.each(s, function (i) {
                    var o = s[i];
                    "boolean" == typeof o && o && (o = {}), "object" != typeof o && (o = {}), "undefined" == typeof o.content && (o.content = ["prev", "title"]), o.content instanceof Array || (o.content = [o.content]), o = n.extend(!0, {}, r.opts.navbar, o);
                    var l = o.position,
                        h = o.height;
                    "number" != typeof h && (h = 1), h = Math.min(4, Math.max(1, h)), "bottom" != l && (l = "top"), d[l] || (d[l] = 0), d[l]++;
                    var f = n("<div />").addClass(e.navbar + " " + e.navbar + "-" + l + " " + e.navbar + "-" + l + "-" + d[l] + " " + e.navbar + "-size-" + h);
                    d[l] += h - 1;
                    for (var v = 0, p = o.content.length; p > v; v++) {
                        var u = n[a].addons[t][o.content[v]] || !1;
                        u ? u.call(r, f, o, c) : (u = o.content[v], u instanceof n || (u = n(o.content[v])), u.each(function () {
                            f.append(n(this))
                        }))
                    }
                    var b = Math.ceil(f.children().not("." + e.btn).length / h);
                    b > 1 && f.addClass(e.navbar + "-content-" + b), f.children("." + e.btn).length && f.addClass(e.hasbtns), f.prependTo(r.$menu)
                });
                for (var o in d) r.$menu.addClass(e.hasnavbar + "-" + o + "-" + d[o])
            }
        },
        add: function () {
            e = n[a]._c, r = n[a]._d, s = n[a]._e, e.add("close hasbtns")
        },
        clickAnchor: function () {}
    }, n[a].configuration[t] = {
        breadcrumbSeparator: "/"
    }, n[a].configuration.classNames[t] = {
        panelTitle: "Title",
        panelNext: "Next",
        panelPrev: "Prev"
    };
    var e, r, s, i
}(jQuery),
/*	
 * jQuery mmenu navbar addon breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function (n) {
    var a = "mmenu",
        t = "navbars",
        e = "breadcrumbs";
    n[a].addons[t][e] = function (t, e, r) {
        var s = n[a]._c,
            i = n[a]._d;
        s.add("breadcrumbs separator"), t.append('<span class="' + s.breadcrumbs + '"></span>'), this.bind("init", function (a) {
            a.removeClass(s.hasnavbar).each(function () {
                for (var a = [], t = n(this), e = n('<span class="' + s.breadcrumbs + '"></span>'), c = n(this).children().first(), d = !0; c && c.length;) {
                    c.is("." + s.panel) || (c = c.closest("." + s.panel));
                    var o = c.children("." + s.navbar).children("." + s.title).text();
                    a.unshift(d ? "<span>" + o + "</span>" : '<a href="#' + c.attr("id") + '">' + o + "</a>"), d = !1, c = c.data(i.parent)
                }
                e.append(a.join('<span class="' + s.separator + '">' + r.breadcrumbSeparator + "</span>")).appendTo(t.children("." + s.navbar))
            })
        });
        var c = function () {
            var n = this.$pnls.children("." + s.current),
                a = t.find("." + s.breadcrumbs),
                e = n.children("." + s.navbar).children("." + s.breadcrumbs);
            a.html(e.html())
        };
        this.bind("openPanel", c), this.bind("init", c)
    }
}(jQuery),
/*	
 * jQuery mmenu navbar addon close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function (n) {
    var a = "mmenu",
        t = "navbars",
        e = "close";
    n[a].addons[t][e] = function (t) {
        var e = n[a]._c,
            r = n[a].glbl;
        t.append('<a class="' + e.close + " " + e.btn + '" href="#"></a>');
        var s = function (n) {
            t.find("." + e.close).attr("href", "#" + n.attr("id"))
        };
        s.call(this, r.$page), this.bind("setPage", s)
    }
}(jQuery),
/*	
 * jQuery mmenu navbar addon next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function (n) {
    var a = "mmenu",
        t = "navbars",
        e = "next";
    n[a].addons[t][e] = function (e) {
        var r = n[a]._c;
        e.append('<a class="' + r.next + " " + r.btn + '" href="#"></a>');
        var s = function (n) {
            n = n || this.$pnls.children("." + r.current);
            var a = e.find("." + r.next),
                s = n.find("." + this.conf.classNames[t].panelNext),
                i = s.attr("href"),
                c = s.html();
            a[i ? "attr" : "removeAttr"]("href", i), a[i || c ? "removeClass" : "addClass"](r.hidden), a.html(c)
        };
        this.bind("openPanel", s), this.bind("init", function () {
            s.call(this)
        })
    }
}(jQuery),
/*	
 * jQuery mmenu navbar addon prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function (n) {
    var a = "mmenu",
        t = "navbars",
        e = "prev";
    n[a].addons[t][e] = function (e) {
        var r = n[a]._c;
        e.append('<a class="' + r.prev + " " + r.btn + '" href="#"></a>'), this.bind("init", function (n) {
            n.removeClass(r.hasnavbar)
        });
        var s = function () {
            var n = this.$pnls.children("." + r.current),
                a = e.find("." + r.prev),
                s = n.find("." + this.conf.classNames[t].panelPrev);
            s.length || (s = n.children("." + r.navbar).children("." + r.prev));
            var i = s.attr("href"),
                c = s.html();
            a[i ? "attr" : "removeAttr"]("href", i), a[i || c ? "removeClass" : "addClass"](r.hidden), a.html(c)
        };
        this.bind("openPanel", s), this.bind("init", s)
    }
}(jQuery),
/*	
 * jQuery mmenu navbar addon searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function (n) {
    var a = "mmenu",
        t = "navbars",
        e = "searchfield";
    n[a].addons[t][e] = function (t) {
        var e = n[a]._c,
            r = n('<div class="' + e.search + '" />').appendTo(t);
        "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = r
    }
}(jQuery),
/*	
 * jQuery mmenu navbar addon title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function (n) {
    var a = "mmenu",
        t = "navbars",
        e = "title";
    n[a].addons[t][e] = function (e, r) {
        var s = n[a]._c;
        e.append('<a class="' + s.title + '"></a>');
        var i = function (n) {
            n = n || this.$pnls.children("." + s.current);
            var a = e.find("." + s.title),
                i = n.find("." + this.conf.classNames[t].panelTitle);
            i.length || (i = n.children("." + s.navbar).children("." + s.title));
            var c = i.attr("href"),
                d = i.html() || r.title;
            a[c ? "attr" : "removeAttr"]("href", c), a[c || d ? "removeClass" : "addClass"](s.hidden), a.html(d)
        };
        this.bind("openPanel", i), this.bind("init", function () {
            i.call(this)
        })
    }
}(jQuery);
/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (e) {
    function s(e) {
        switch (e) {
            case 9:
            case 16:
            case 17:
            case 18:
            case 37:
            case 38:
            case 39:
            case 40:
                return !0
        }
        return !1
    }
    var n = "mmenu",
        a = "searchfield";
    e[n].addons[a] = {
        setup: function () {
            var o = this,
                d = this.opts[a],
                c = this.conf[a];
            r = e[n].glbl, "boolean" == typeof d && (d = {
                add: d
            }), "object" != typeof d && (d = {}), d = this.opts[a] = e.extend(!0, {}, e[n].defaults[a], d), this.bind("close", function () {
                this.$menu.find("." + l.search).find("input").blur()
            }), this.bind("init", function (n) {
                if (d.add) {
                    switch (d.addTo) {
                        case "panels":
                            var a = n;
                            break;
                        default:
                            var a = e(d.addTo, this.$menu)
                    }
                    a.each(function () {
                        var s = e(this);
                        if (!s.is("." + l.panel) || !s.is("." + l.vertical)) {
                            if (!s.children("." + l.search).length) {
                                var n = c.form ? "form" : "div",
                                    a = e("<" + n + ' class="' + l.search + '" />');
                                if (c.form && "object" == typeof c.form)
                                    for (var t in c.form) a.attr(t, c.form[t]);
                                a.append('<input placeholder="' + d.placeholder + '" type="text" autocomplete="off" />'), s.hasClass(l.search) ? s.replaceWith(a) : s.prepend(a).addClass(l.hassearch)
                            }
                            if (d.noResults) {
                                var i = s.closest("." + l.panel).length;
                                if (i || (s = o.$pnls.children("." + l.panel).first()), !s.children("." + l.noresultsmsg).length) {
                                    var r = s.children("." + l.listview).first();
                                    e('<div class="' + l.noresultsmsg + '" />').append(d.noResults)[r.length ? "insertAfter" : "prependTo"](r.length ? r : s)
                                }
                            }
                        }
                    }), d.search && e("." + l.search, this.$menu).each(function () {
                        var n = e(this),
                            a = n.closest("." + l.panel).length;
                        if (a) var r = n.closest("." + l.panel),
                            c = r;
                        else var r = e("." + l.panel, o.$menu),
                            c = o.$menu;
                        var h = n.children("input"),
                            u = o.__findAddBack(r, "." + l.listview).children("li"),
                            f = u.filter("." + l.divider),
                            p = o.__filterListItems(u),
                            v = "> a",
                            m = v + ", > span",
                            b = function () {
                                var s = h.val().toLowerCase();
                                r.scrollTop(0), p.add(f).addClass(l.hidden).find("." + l.fullsubopensearch).removeClass(l.fullsubopen).removeClass(l.fullsubopensearch), p.each(function () {
                                    var n = e(this),
                                        a = v;
                                    (d.showTextItems || d.showSubPanels && n.find("." + l.next)) && (a = m), e(a, n).text().toLowerCase().indexOf(s) > -1 && n.add(n.prevAll("." + l.divider).first()).removeClass(l.hidden)
                                }), d.showSubPanels && r.each(function () {
                                    var s = e(this);
                                    o.__filterListItems(s.find("." + l.listview).children()).each(function () {
                                        var s = e(this),
                                            n = s.data(t.sub);
                                        s.removeClass(l.nosubresults), n && n.find("." + l.listview).children().removeClass(l.hidden)
                                    })
                                }), e(r.get().reverse()).each(function (s) {
                                    var n = e(this),
                                        i = n.data(t.parent);
                                    i && (o.__filterListItems(n.find("." + l.listview).children()).length ? (i.hasClass(l.hidden) && i.children("." + l.next).not("." + l.fullsubopen).addClass(l.fullsubopen).addClass(l.fullsubopensearch), i.removeClass(l.hidden).removeClass(l.nosubresults).prevAll("." + l.divider).first().removeClass(l.hidden)) : a || (n.hasClass(l.opened) && setTimeout(function () {
                                        o.openPanel(i.closest("." + l.panel))
                                    }, 1.5 * (s + 1) * o.conf.openingInterval), i.addClass(l.nosubresults)))
                                }), c[p.not("." + l.hidden).length ? "removeClass" : "addClass"](l.noresults), this.update()
                            };
                        h.off(i.keyup + "-searchfield " + i.change + "-searchfield").on(i.keyup + "-searchfield", function (e) {
                            s(e.keyCode) || b.call(o)
                        }).on(i.change + "-searchfield", function () {
                            b.call(o)
                        })
                    })
                }
            })
        },
        add: function () {
            l = e[n]._c, t = e[n]._d, i = e[n]._e, l.add("search hassearch noresultsmsg noresults nosubresults fullsubopensearch"), i.add("change keyup")
        },
        clickAnchor: function () {}
    }, e[n].defaults[a] = {
        add: !1,
        addTo: "panels",
        search: !0,
        placeholder: "Search",
        noResults: "No results found.",
        showTextItems: !1,
        showSubPanels: !0
    }, e[n].configuration[a] = {
        form: !1
    };
    var l, t, i, r
}(jQuery);
/*	
 * jQuery mmenu sectionIndexer addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (e) {
    var a = "mmenu",
        r = "sectionIndexer";
    e[a].addons[r] = {
        setup: function () {
            var i = this,
                d = this.opts[r];
            this.conf[r], t = e[a].glbl, "boolean" == typeof d && (d = {
                add: d
            }), "object" != typeof d && (d = {}), d = this.opts[r] = e.extend(!0, {}, e[a].defaults[r], d), this.bind("init", function (a) {
                if (d.add) {
                    switch (d.addTo) {
                        case "panels":
                            var r = a;
                            break;
                        default:
                            var r = e(d.addTo, this.$menu).filter("." + n.panel)
                    }
                    r.find("." + n.divider).closest("." + n.panel).addClass(n.hasindexer)
                }
                if (!this.$indexer && this.$pnls.children("." + n.hasindexer).length) {
                    this.$indexer = e('<div class="' + n.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(s.mouseover + "-sectionindexer " + n.touchstart + "-sectionindexer", function () {
                        var a = e(this).attr("href").slice(1),
                            r = i.$pnls.children("." + n.current),
                            s = r.find("." + n.listview),
                            t = !1,
                            d = r.scrollTop(),
                            h = s.position().top + parseInt(s.css("margin-top"), 10) + parseInt(s.css("padding-top"), 10) + d;
                        r.scrollTop(0), s.children("." + n.divider).not("." + n.hidden).each(function () {
                            t === !1 && a == e(this).text().slice(0, 1).toLowerCase() && (t = e(this).position().top + h)
                        }), r.scrollTop(t !== !1 ? t : d)
                    });
                    var t = function (e) {
                        i.$menu[(e.hasClass(n.hasindexer) ? "add" : "remove") + "Class"](n.hasindexer)
                    };
                    this.bind("openPanel", t), t.call(this, this.$pnls.children("." + n.current))
                }
            })
        },
        add: function () {
            n = e[a]._c, i = e[a]._d, s = e[a]._e, n.add("indexer hasindexer"), s.add("mouseover touchstart")
        },
        clickAnchor: function (e) {
            return e.parent().is("." + n.indexer) ? !0 : void 0
        }
    }, e[a].defaults[r] = {
        add: !1,
        addTo: "panels"
    };
    var n, i, s, t
}(jQuery);
/*	
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function (t) {
    var e = "mmenu",
        c = "toggles";
    t[e].addons[c] = {
        setup: function () {
            var n = this;
            this.opts[c], this.conf[c], l = t[e].glbl, this.bind("init", function (e) {
                this.__refactorClass(t("input", e), this.conf.classNames[c].toggle, "toggle"), this.__refactorClass(t("input", e), this.conf.classNames[c].check, "check"), t("input." + s.toggle + ", input." + s.check, e).each(function () {
                    var e = t(this),
                        c = e.closest("li"),
                        i = e.hasClass(s.toggle) ? "toggle" : "check",
                        l = e.attr("id") || n.__getUniqueId();
                    c.children('label[for="' + l + '"]').length || (e.attr("id", l), c.prepend(e), t('<label for="' + l + '" class="' + s[i] + '"></label>').insertBefore(c.children("a, span").last()))
                })
            })
        },
        add: function () {
            s = t[e]._c, n = t[e]._d, i = t[e]._e, s.add("toggle check")
        },
        clickAnchor: function () {}
    }, t[e].configuration.classNames[c] = {
        toggle: "Toggle",
        check: "Check"
    };
    var s, n, i, l
}(jQuery);

/*
 * jQuery Superfish Menu Plugin - v1.7.7
 * Copyright (c) 2015 
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;
(function (e, s) {
    "use strict";
    var o = function () {
        var o = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            n = function () {
                var s = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
                return s && e("html").css("cursor", "pointer").on("click", e.noop), s
            }(),
            t = function () {
                var e = document.documentElement.style;
                return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
            }(),
            i = function () {
                return !!s.PointerEvent
            }(),
            r = function (e, s) {
                var n = o.menuClass;
                s.cssArrows && (n += " " + o.menuArrowClass), e.toggleClass(n)
            },
            a = function (s, n) {
                return s.find("li." + n.pathClass).slice(0, n.pathLevels).addClass(n.hoverClass + " " + o.bcClass).filter(function () {
                    return e(this).children(n.popUpSelector).hide().show().length
                }).removeClass(n.pathClass)
            },
            l = function (e) {
                e.children("a").toggleClass(o.anchorClass)
            },
            h = function (e) {
                var s = e.css("ms-touch-action"),
                    o = e.css("touch-action");
                o = o || s, o = "pan-y" === o ? "auto" : "pan-y", e.css({
                    "ms-touch-action": o,
                    "touch-action": o
                })
            },
            u = function (s, o) {
                var r = "li:has(" + o.popUpSelector + ")";
                e.fn.hoverIntent && !o.disableHI ? s.hoverIntent(c, f, r) : s.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, f);
                var a = "MSPointerDown.superfish";
                i && (a = "pointerdown.superfish"), n || (a += " touchend.superfish"), t && (a += " mousedown.superfish"), s.on("focusin.superfish", "li", c).on("focusout.superfish", "li", f).on(a, "a", o, p)
            },
            p = function (s) {
                var o = e(this),
                    n = m(o),
                    t = o.siblings(s.data.popUpSelector);
                return n.onHandleTouch.call(t) === !1 ? this : (t.length > 0 && t.is(":hidden") && (o.one("click.superfish", !1), "MSPointerDown" === s.type || "pointerdown" === s.type ? o.trigger("focus") : e.proxy(c, o.parent("li"))()), void 0)
            },
            c = function () {
                var s = e(this),
                    o = m(s);
                clearTimeout(o.sfTimer), s.siblings().superfish("hide").end().superfish("show")
            },
            f = function () {
                var s = e(this),
                    o = m(s);
                n ? e.proxy(d, s, o)() : (clearTimeout(o.sfTimer), o.sfTimer = setTimeout(e.proxy(d, s, o), o.delay))
            },
            d = function (s) {
                s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(v(this)), s.$path.length && e.proxy(c, s.$path)())
            },
            v = function (e) {
                return e.closest("." + o.menuClass)
            },
            m = function (e) {
                return v(e).data("sf-options")
            };
        return {
            hide: function (s) {
                if (this.length) {
                    var o = this,
                        n = m(o);
                    if (!n) return this;
                    var t = n.retainPath === !0 ? n.$path : "",
                        i = o.find("li." + n.hoverClass).add(this).not(t).removeClass(n.hoverClass).children(n.popUpSelector),
                        r = n.speedOut;
                    if (s && (i.show(), r = 0), n.retainPath = !1, n.onBeforeHide.call(i) === !1) return this;
                    i.stop(!0, !0).animate(n.animationOut, r, function () {
                        var s = e(this);
                        n.onHide.call(s)
                    })
                }
                return this
            },
            show: function () {
                var e = m(this);
                if (!e) return this;
                var s = this.addClass(e.hoverClass),
                    o = s.children(e.popUpSelector);
                return e.onBeforeShow.call(o) === !1 ? this : (o.stop(!0, !0).animate(e.animation, e.speed, function () {
                    e.onShow.call(o)
                }), this)
            },
            destroy: function () {
                return this.each(function () {
                    var s, n = e(this),
                        t = n.data("sf-options");
                    return t ? (s = n.find(t.popUpSelector).parent("li"), clearTimeout(t.sfTimer), r(n, t), l(s), h(n), n.off(".superfish").off(".hoverIntent"), s.children(t.popUpSelector).attr("style", function (e, s) {
                        return s.replace(/display[^;]+;?/g, "")
                    }), t.$path.removeClass(t.hoverClass + " " + o.bcClass).addClass(t.pathClass), n.find("." + t.hoverClass).removeClass(t.hoverClass), t.onDestroy.call(n), n.removeData("sf-options"), void 0) : !1
                })
            },
            init: function (s) {
                return this.each(function () {
                    var n = e(this);
                    if (n.data("sf-options")) return !1;
                    var t = e.extend({}, e.fn.superfish.defaults, s),
                        i = n.find(t.popUpSelector).parent("li");
                    t.$path = a(n, t), n.data("sf-options", t), r(n, t), l(i), h(n), u(n, t), i.not("." + o.bcClass).superfish("hide", !0), t.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function (s) {
        return o[s] ? o[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof s && s ? e.error("Method " + s + " does not exist on jQuery.fn.superfish") : o.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        onHandleTouch: e.noop
    }
})(jQuery, window);
