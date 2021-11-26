/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js":
/*!***************************************************************!*\
  !*** ./node_modules/@rebelstack-io/metaflux/dist/metaflux.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){if(true)module.exports=e();else { var o, n; }}(self,(function(){return(()=>{var t={968:(t,e,n)=>{(()=>{const e={};function o(t,e={}){const n=document.createElement(t);return Object.keys(e).forEach((t=>{const o=e[t];"attributes"===t?n.setAttributes(o):"classList"===t?n.classList.add(...o):"content"===t?r(o,n):n[t]=o})),n}function r(t,e){t instanceof HTMLElement?e.appendChild(t):"function"==typeof t?r(t(),e):t instanceof Array?e.append(...t):t.content&&t.events?(function(t){if(!n.g.storage)throw new TypeError("CustomElements.handleStoreEvents: storage is not defined, this must be defined <global | window>.storage level");Object.keys(t).forEach((e=>{n.g.storage.on(e,t[e])}))}(t.events),r(t.content,e)):e.innerHTML+=t}function s(t,e){return Object.assign({},t,{content:e||""})}["H1","H2","H3","H4","H5","H6","Div","Span","Ol","Ul","Li","Table","Thead","Tbody","Tfoot","Tr","Td","Th","Form","Label","Input","TextArea","Button","Img","Picture","Source","Select","Option","P","A","Section","Video"].forEach((t=>{e[t]=function(e,n){return e=s(e,n),o(t.toLowerCase(),e)}})),t.exports=Object.assign({},{HTMLElementCreator:o,DefineElement:function(t,e){window.customElements.define(t,e),function(t){const e=function(t){return t.replace(/(-|\b[a-z](?!-))/g,(function(t){return"-"===t?"":t.toUpperCase()}))}(t);HTMLElement.prototype[e]=function(e,n){const r=s(e,n),i=o(t,r);return this.appendChild(i),i},window[e]=function(e,n){const r=s(e,n);return o(t,r)}}(t)}},e)})()},961:(t,e,n)=>{(()=>{const t=n(968);Object.keys(t).forEach((e=>{HTMLElement.prototype[e]=function(n,o){const r=t[e](n,o);return this.appendChild(r),r}})),HTMLElement.prototype.onStoreEvent=function(t,e,o=!1){const r=o||"storage";if(!n.g[r])throw new TypeError(`CustomElements.onStoreEvent: ${r} is not defined, this must be defined <global | window>.${r} level`);const s=()=>{this.baseNode()instanceof HTMLHtmlElement?e(n.g[r].getState(),this):n.g[r].removeListener(t,s)};return n.g[r].on(t,s),this},HTMLElement.prototype.baseNode=function(){return null===this.parentElement?this:this.parentElement.baseNode()},HTMLElement.prototype.setAttributes=function(t){return Object.keys(t).forEach((e=>{this.setAttribute(e,t[e])})),this}})()},568:(t,e,n)=>{const{MetaComponent:o}=n(308),{MetaContainer:r}=n(939),{MetaShadowComponent:s}=n(458),i=n(914),c=n(968);n(961),t.exports=Object.assign({},{MetaComponent:o,MetaContainer:r,MetaShadowComponent:s,Store:i},c)},511:t=>{class e extends window.HTMLElement{constructor(t=!1){super(),this.render?this.render=this.render.bind(this):this.ComponentDidFail(new TypeError("render method required on MetaComponents")),t&&(this.storage=t),this.addListeners&&(this.addListeners=this.addListeners.bind(this))}_appendContent(){try{const t=this.render();this.root?"string"==typeof t?this.root.innerHTML+=t:this.root.appendChild(t):"string"==typeof t?this.innerHTML+=t:this.appendChild(t)}catch(t){this.ComponentDidFail(t)}}_mapStoreEvents(){const t=this.handleStoreEvents();for(const e in t)t.hasOwnProperty(e)&&this.storage.on(e,t[e])}handleStoreEvents(){this.ComponentDidFail(new TypeError('MetaComponent.handleStoreEvents: This function expects to be overwritten by child object, otherwise do not pass "storage" object as argument to constructor.'))}ComponentDidFail(t){throw t}disconnectedCallback(){const t=this.storage?this.handleStoreEvents():{};for(const e in t)t.hasOwnProperty(e)&&this.storage.removeListener(e,t[e])}}t.exports={MetaBase:e}},308:(t,e,n)=>{const{MetaBase:o}=n(511);t.exports={MetaComponent:class extends o{constructor(t=!1){super(t)}connectedCallback(){this._appendContent(),this.addListeners&&this.addListeners(),this.storage&&this._mapStoreEvents()}}}},939:(t,e,n)=>{const{MetaBase:o}=n(511);t.exports={MetaContainer:class extends o{constructor(){if(super(),!this.render)throw new TypeError("render method is require for MetaContainers")}connectedCallback(){this._appendContent()}}}},458:(t,e,n)=>{const{MetaBase:o}=n(511);t.exports={MetaShadowComponent:class extends o{constructor(t=!1){super(t)}connectedCallback(){this.root=this.shadowRoot||this.attachShadow({mode:"open"}),this.root.innerHTML=`\n\t\t<style>\n\t\t\t${this.styles.map((t=>`\n\t\t\t@import url("${t}");\n\t\t\t`)).join("")}\n\t\t</style>\n\t\t`,this._appendContent(),this.addListeners&&this.addListeners(),this.storage&&this._mapStoreEvents()}}}},914:(t,e,n)=>{"use strict";const o=n(729);class r extends o{static clone(t,e,n){if(null===t||"object"!=typeof t)return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t);if(t.nodeType&&"function"==typeof t.cloneNode)return t.cloneNode(!0);void 0===e&&(e=[],n=[]);let o,s=e.length;for(o=0;o<s;o++)if(t===e[o])return n[o];if("[object Array]"==Object.prototype.toString.call(t)){let o=t.slice();e.push(t),n.push(o);let s=o.length;for(;s--;)o[s]=r.clone(o[s],e,n);return o}let i=Object.getPrototypeOf?Object.getPrototypeOf(t):t.__proto__;i||(i=t.constructor.prototype);let c=Object.create(i);e.push(t),n.push(c);for(let o in t)c[o]=r.clone(t[o],e,n);return c}constructor(t,e,...n){super();let o,s=e||{},i=r.clone(t)||{};const c=function(t){if(s[t.type]){let e=s[t.type](t,r.clone(i));e.newState&&(i=r.clone(e.newState)),this.emit(t.type,e,t)}else this.emit(t.type,t);t.cb&&"function"==typeof t.cb&&t.cb(i)};let a=function(t,e,n){return t?n?function(o){return next=n.bind(e,o),t}.bind(e):function(e){return next=c.bind(this,e),t}.bind(e):c.bind(this)};this.getState=function(){return r.clone(i)},this.getHandlers=function(){return s},this.addHandler=function(t,e){s[t]=e},this.dispatch=function(t){o(t)};let p=0;const h={getState:this.getState,dispatch:this.dispatch};do{a=a.bind(this),o=a(n[p],h,n[p+1])}while(++p<n.length)}}t.exports=r},729:t=>{"use strict";var e=Object.prototype.hasOwnProperty,n="~";function o(){}function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function s(t,e,o,s,i){if("function"!=typeof o)throw new TypeError("The listener must be a function");var c=new r(o,s||t,i),a=n?n+e:e;return t._events[a]?t._events[a].fn?t._events[a]=[t._events[a],c]:t._events[a].push(c):(t._events[a]=c,t._eventsCount++),t}function i(t,e){0==--t._eventsCount?t._events=new o:delete t._events[e]}function c(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(n=!1)),c.prototype.eventNames=function(){var t,o,r=[];if(0===this._eventsCount)return r;for(o in t=this._events)e.call(t,o)&&r.push(n?o.slice(1):o);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},c.prototype.listeners=function(t){var e=n?n+t:t,o=this._events[e];if(!o)return[];if(o.fn)return[o.fn];for(var r=0,s=o.length,i=new Array(s);r<s;r++)i[r]=o[r].fn;return i},c.prototype.listenerCount=function(t){var e=n?n+t:t,o=this._events[e];return o?o.fn?1:o.length:0},c.prototype.emit=function(t,e,o,r,s,i){var c=n?n+t:t;if(!this._events[c])return!1;var a,p,h=this._events[c],l=arguments.length;if(h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),l){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,o),!0;case 4:return h.fn.call(h.context,e,o,r),!0;case 5:return h.fn.call(h.context,e,o,r,s),!0;case 6:return h.fn.call(h.context,e,o,r,s,i),!0}for(p=1,a=new Array(l-1);p<l;p++)a[p-1]=arguments[p];h.fn.apply(h.context,a)}else{var u,f=h.length;for(p=0;p<f;p++)switch(h[p].once&&this.removeListener(t,h[p].fn,void 0,!0),l){case 1:h[p].fn.call(h[p].context);break;case 2:h[p].fn.call(h[p].context,e);break;case 3:h[p].fn.call(h[p].context,e,o);break;case 4:h[p].fn.call(h[p].context,e,o,r);break;default:if(!a)for(u=1,a=new Array(l-1);u<l;u++)a[u-1]=arguments[u];h[p].fn.apply(h[p].context,a)}}return!0},c.prototype.on=function(t,e,n){return s(this,t,e,n,!1)},c.prototype.once=function(t,e,n){return s(this,t,e,n,!0)},c.prototype.removeListener=function(t,e,o,r){var s=n?n+t:t;if(!this._events[s])return this;if(!e)return i(this,s),this;var c=this._events[s];if(c.fn)c.fn!==e||r&&!c.once||o&&c.context!==o||i(this,s);else{for(var a=0,p=[],h=c.length;a<h;a++)(c[a].fn!==e||r&&!c[a].once||o&&c[a].context!==o)&&p.push(c[a]);p.length?this._events[s]=1===p.length?p[0]:p:i(this,s)}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&i(this,e)):(this._events=new o,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,t.exports=c}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n(568)})()}));
//# sourceMappingURL=metaflux.js.map

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/css/general.css":
/*!*******************************************************!*\
  !*** ./node_modules/css-loader!./src/css/general.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,light);", ""]);

// module
exports.push([module.i, ":root{\n\t--main-yellow: #f5d22a;\n\t--main-red: #a4161a;\n\t--main-blue: #004e89;\n\t--main-green: #a7c957;\n\t--x-size: 75px;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: Roboto;\n}\n\nbody,html {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0;\n}\n\n#container {\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\tplace-content: center;\n}\n\n.option-wrapper > * {\n\twidth: var(--x-size);\n\theight: var(--x-size);\n\tborder-radius: 50%;\n}\n\n.option-wrapper {\n\ttransition: all .3s ease;\n}\n\n.option-wrapper.selected {\n\ttransform: scale(1.1);\n}\n\n.red {\n\tbackground-color: var(--main-red);\n}\n\n.blue {\n\tbackground-color: var(--main-blue);\n}\n\n.yellow {\n\tbackground-color: var(--main-yellow);\n}\n\n.green {\n\tbackground-color: var(--main-green);\n}\n\n.swipe-area-wrapper {\n\tposition: relative;\n}\n\n.swipe-area-wrapper > img {\n\twidth: 150px;\n\theight: auto;\n}\n\n.swipe-area-wrapper > div {\n\tposition: absolute;\n}\n\n.t-red {\n\ttop: calc(-20px - var(--x-size));\n\tleft: calc(50% - (var(--x-size) / 2));\n}\n\n.t-blue {\n\tbottom: calc(-20px - var(--x-size));\n\tleft: calc(50% - (var(--x-size) / 2));\n}\n\n.t-yellow {\n\tleft: calc(-20px - var(--x-size));\n\ttop: calc(50% - (var(--x-size) / 2));\n}\n\n.t-green {\n\tright: calc(-20px - var(--x-size));\n\ttop: calc(50% - (var(--x-size) / 2));\n}\n\n.list-wrapper {\n\tposition: absolute;\n\ttop: 0;\n\twidth: 100%;\n\tdisplay: grid;\n\trow-gap: 10px;\n}\n\n.list-item {\n\tposition: relative;\n    display: grid;\n    place-content: center;\n    column-gap: 1rem;\n    grid-template-columns: .5fr 1fr;\n    padding: 0.5rem 0;\n    margin: 0 15%;\n}\n\n.list-item::before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: -2px;\n\tleft: 0;\n\theight: 2px;\n\tbackground-color: var(--main-red);\n\ttransform: scaleX(0);\n\ttransform-origin: right;\n\ttransition: transform .3s ease;\n}\n\n\n.list-item.selected::before {\n\ttransform: scaleX(1);\n\ttransform-origin: left;\n}\n\n.l-red::before {\n\tbackground-color: var(--main-red);\n}\n\n.l-blue::before {\n\tbackground-color: var(--main-blue);\n}\n\n.l-yellow::before {\n\tbackground-color: var(--main-yellow);\n}\n\n.l-green::before {\n\tbackground-color: var(--main-green);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/List/index.js":
/*!**************************************!*\
  !*** ./src/components/List/index.js ***!
  \**************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);


const list = [
	{
		symbol: 'red',
		answer: 'Dobby!'
	},
	{
		symbol: 'yellow',
		answer: 'Sirius Black'
	},
	{
		symbol: 'blue',
		answer: 'Rubeus Hagrid'
	},
	{
		symbol: 'green',
		answer: 'Snape'
	}
]

const dirMap = {
	'up': 'red',
	'down': 'blue',
	'left': 'yellow',
	'right': 'green'
}

const List = () => Object(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Div"])({ className: 'list-wrapper' }, list.map((l) => {
	return Object(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Div"])({ className: 'list-item l-' + l.symbol }, [
		Object(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Span"])({}, l.symbol),
		Object(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["H3"])({}, l.answer)
	]).onStoreEvent('SWIPE', (state, that) => {
		const selected = dirMap[state.Main.swipedValue];
		if (selected === l.symbol) {
			that.classList.add('selected');
		} else {
			that.classList.remove('selected');
		}
	})
}));


/***/ }),

/***/ "./src/components/Option/index.js":
/*!****************************************!*\
  !*** ./src/components/Option/index.js ***!
  \****************************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);


const dirMap = {
	'up': 'red',
	'down': 'blue',
	'left': 'yellow',
	'right': 'green'
}

const Option = (props) => {
	return Object(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Div"])({ className: 'option-wrapper t-' + props.symbol }, [
		Object(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Div"])({ className: props.symbol })
	]).onStoreEvent('SWIPE', (state, that) => {
		const selected = dirMap[state.Main.swipedValue];
		console.log(selected);
		if (selected === props.symbol) {
			that.classList.add('selected');
		} else {
			that.classList.remove('selected');
		}
	})
}


/***/ }),

/***/ "./src/components/SwipeArea/index.js":
/*!*******************************************!*\
  !*** ./src/components/SwipeArea/index.js ***!
  \*******************************************/
/*! exports provided: SwipeArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeArea", function() { return SwipeArea; });
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Option */ "./src/components/Option/index.js");



const options = [
	'red',
	'blue',
	'yellow',
	'green'
]

const questionURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2560px-Question_Mark.svg.png';

const SwipeArea = (props) => {
	return Object(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Div"])({ className: 'swipe-area-wrapper' }, [
		Object(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Img"])({ src: questionURL }),
		...options.map((color) => {
			return Object(_Option__WEBPACK_IMPORTED_MODULE_1__["Option"])({ symbol: color })
		})
	]);
};


/***/ }),

/***/ "./src/containers/main-container/index.js":
/*!************************************************!*\
  !*** ./src/containers/main-container/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_general_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/general.css */ "./src/css/general.css");
/* harmony import */ var _css_general_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_general_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../handlers */ "./src/handlers/index.js");
/* harmony import */ var _components_SwipeArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SwipeArea */ "./src/components/SwipeArea/index.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/List */ "./src/components/List/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util */ "./src/util/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_5__);







class MainContainer extends _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["MetaContainer"] {
	// eslint-disable-next-line class-method-use-this
	render () {
		return Object(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Div"])({ id: 'container' }, [Object(_components_SwipeArea__WEBPACK_IMPORTED_MODULE_3__["SwipeArea"])(), Object(_components_List__WEBPACK_IMPORTED_MODULE_4__["List"])()])
	}
}

window.customElements.define('main-container', MainContainer);


/***/ }),

/***/ "./src/css/general.css":
/*!*****************************!*\
  !*** ./src/css/general.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./general.css */ "./node_modules/css-loader/index.js!./src/css/general.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/handlers/MainHandler.js":
/*!*************************************!*\
  !*** ./src/handlers/MainHandler.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	value: 1,
	swipedValue: ''
};

/* harmony default export */ __webpack_exports__["default"] = ({
	MainDefaultState,
	MainHandler: {
		'INCREMENT': (action, state) => {
			state.Main.value += 1;
			return { newState: state };
		},
		'SWIPE': (action, state) => {
			state.Main.swipedValue = action.swipedValue;
			console.log('swipeValue: ', action.swipedValue);
			return { newState: state }
		}
	}
});


/***/ }),

/***/ "./src/handlers/index.js":
/*!*******************************!*\
  !*** ./src/handlers/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rebelstack-io/metaflux */ "./node_modules/@rebelstack-io/metaflux/dist/metaflux.js");
/* harmony import */ var _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainHandler */ "./src/handlers/MainHandler.js");



const { MainDefaultState, MainHandler } = _MainHandler__WEBPACK_IMPORTED_MODULE_1__["default"];

global.storage = new _rebelstack_io_metaflux__WEBPACK_IMPORTED_MODULE_0__["Store"](
	{Main: MainDefaultState},
	MainHandler
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_main_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/main-container */ "./src/containers/main-container/index.js");


document.addEventListener('DOMContentLoaded', () => {
	const container = document.createElement('main-container');
	document.body.appendChild(container);
})


/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches (evt) {
	return evt.touches || // browser API
				evt.originalEvent.touches; // jQuery
}

function handleTouchStart (evt) {
	const firstTouch = getTouches(evt)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
};

function handleTouchMove (evt) {
	if (!xDown || !yDown) {
		return;
	}

	let xUp = evt.touches[0].clientX;
	let yUp = evt.touches[0].clientY;

	let xDiff = xDown - xUp;
	let yDiff = yDown - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) {
			/* right swipe */
			console.log('swipe left');
			dispatch('left');
		} else {
			console.log('swipe right');
			dispatch('right');
			/* left swipe */
		}
	} else {
		if (yDiff > 0) {
			/* down swipe */
			console.log('swipe up');
			dispatch('up');
		} else {
			console.log('swipe dowm');
			dispatch('down');
			/* up swipe */
		}
	}
	/* reset values */
	xDown = null;
	yDown = null;
};

function dispatch (direction) {
	global.storage.dispatch({ type: 'SWIPE', swipedValue: direction })
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map