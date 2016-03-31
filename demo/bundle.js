/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _simpleModalEs = __webpack_require__(1);

	var _simpleModalEs2 = _interopRequireDefault(_simpleModalEs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var message = '<div><h4>Where have all the wild things gone?</h4><div id="again">TRY AGAIN</div></div>';

	document.getElementById('anchor').onclick = function (event) {
	    event.preventDefault();
	    (0, _simpleModalEs2.default)().open(message);
	    document.getElementById('again').onclick = function (event) {
	        event.preventDefault();
	        (0, _simpleModalEs2.default)().open('<h4>AGAIN, SERIOUSLY?</h4>');
	    };
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (e, t) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var n = t();for (var o in n) {
	      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = n[o];
	    }
	  }
	}(undefined, function () {
	  return function (e) {
	    function t(o) {
	      if (n[o]) return n[o].exports;var r = n[o] = { exports: {}, id: o, loaded: !1 };return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
	    }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
	  }([function (e, t, n) {
	    "use strict";
	    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = function () {
	      return { state: {}, close: s, open: a };
	    }, n(1);var o = n(5),
	        r = function r(e) {
	      var t = '<div class="tm-modal__content">';t += '<div class="tm-modal__content__inner">' + e + "</div>", t += '<button title="Close (Esc)" type="button" class="tm-modal__close">×</button>', t += "</div>";var n = document.createElement("div");return n.id = "tm-modal", n.innerHTML = t, n;
	    },
	        i = function i(e) {
	      27 == e.keyCode && this.close();
	    },
	        s = function s() {
	      (0, o.removeEvent)(document, "keyup", i), this.state.modal.remove();
	    },
	        a = function a(e) {
	      var t = this;if (document.getElementById("tm-modal")) document.getElementById("tm-modal").getElementsByClassName("tm-modal__content__inner")[0].innerHTML = e;else {
	        var n = this.state;document.body.appendChild(r(e)), n.modal = document.getElementById("tm-modal"), n.closeBtn = n.modal.getElementsByClassName("tm-modal__close")[0], (0, o.addEvent)(n.modal, "click", function (e) {
	          "tm-modal" === e.target.id && t.close();
	        }), (0, o.addEvent)(n.closeBtn, "click", function () {
	          t.close();
	        }), (0, o.addEvent)(document, "keyup", i.bind(this));
	      }
	    };
	  }, function (e, t, n) {
	    var o = n(2);"string" == typeof o && (o = [[e.id, o, ""]]);n(4)(o, {});o.locals && (e.exports = o.locals);
	  }, function (e, t, n) {
	    t = e.exports = n(3)(), t.push([e.id, "#tm-modal{background-color:rgba(0,0,0,.65);display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;right:0;bottom:0;left:0}#tm-modal .tm-modal__content{position:relative}#tm-modal .tm-modal__content__inner{background:#fff;box-sizing:border-box;margin:auto;max-width:600px;min-width:300px;padding:20px}#tm-modal .tm-modal__close{background:#fff;border:none;cursor:pointer;font-size:2rem;line-height:1;margin:0;padding:0;position:absolute;top:0;right:0;width:2rem;height:2rem;overflow:hidden}#tm-modal .tm-modal__close:focus{outline:none}#tm-modal .test{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}", ""]);
	  }, function (e, t) {
	    e.exports = function () {
	      var e = [];return e.toString = function () {
	        for (var e = [], t = 0; t < this.length; t++) {
	          var n = this[t];n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
	        }return e.join("");
	      }, e.i = function (t, n) {
	        "string" == typeof t && (t = [[null, t, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
	          var i = this[r][0];"number" == typeof i && (o[i] = !0);
	        }for (r = 0; r < t.length; r++) {
	          var s = t[r];"number" == typeof s[0] && o[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s));
	        }
	      }, e;
	    };
	  }, function (e, t, n) {
	    function o(e, t) {
	      for (var n = 0; n < e.length; n++) {
	        var o = e[n],
	            r = m[o.id];if (r) {
	          r.refs++;for (var i = 0; i < r.parts.length; i++) {
	            r.parts[i](o.parts[i]);
	          }for (; i < o.parts.length; i++) {
	            r.parts.push(d(o.parts[i], t));
	          }
	        } else {
	          for (var s = [], i = 0; i < o.parts.length; i++) {
	            s.push(d(o.parts[i], t));
	          }m[o.id] = { id: o.id, refs: 1, parts: s };
	        }
	      }
	    }function r(e) {
	      for (var t = [], n = {}, o = 0; o < e.length; o++) {
	        var r = e[o],
	            i = r[0],
	            s = r[1],
	            a = r[2],
	            l = r[3],
	            d = { css: s, media: a, sourceMap: l };n[i] ? n[i].parts.push(d) : t.push(n[i] = { id: i, parts: [d] });
	      }return t;
	    }function i(e, t) {
	      var n = h(),
	          o = g[g.length - 1];if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), g.push(t);else {
	        if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t);
	      }
	    }function s(e) {
	      e.parentNode.removeChild(e);var t = g.indexOf(e);t >= 0 && g.splice(t, 1);
	    }function a(e) {
	      var t = document.createElement("style");return t.type = "text/css", i(e, t), t;
	    }function l(e) {
	      var t = document.createElement("link");return t.rel = "stylesheet", i(e, t), t;
	    }function d(e, t) {
	      var n, o, r;if (t.singleton) {
	        var i = y++;n = b || (b = a(t)), o = c.bind(null, n, i, !1), r = c.bind(null, n, i, !0);
	      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), o = u.bind(null, n), r = function r() {
	        s(n), n.href && URL.revokeObjectURL(n.href);
	      }) : (n = a(t), o = f.bind(null, n), r = function r() {
	        s(n);
	      });return o(e), function (t) {
	        if (t) {
	          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;o(e = t);
	        } else r();
	      };
	    }function c(e, t, n, o) {
	      var r = n ? "" : o.css;if (e.styleSheet) e.styleSheet.cssText = x(t, r);else {
	        var i = document.createTextNode(r),
	            s = e.childNodes;s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
	      }
	    }function f(e, t) {
	      var n = t.css,
	          o = t.media;if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = n;else {
	        for (; e.firstChild;) {
	          e.removeChild(e.firstChild);
	        }e.appendChild(document.createTextNode(n));
	      }
	    }function u(e, t) {
	      var n = t.css,
	          o = t.sourceMap;o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");var r = new Blob([n], { type: "text/css" }),
	          i = e.href;e.href = URL.createObjectURL(r), i && URL.revokeObjectURL(i);
	    }var m = {},
	        p = function p(e) {
	      var t;return function () {
	        return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
	      };
	    },
	        v = p(function () {
	      return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
	      );
	    }),
	        h = p(function () {
	      return document.head || document.getElementsByTagName("head")[0];
	    }),
	        b = null,
	        y = 0,
	        g = [];e.exports = function (e, t) {
	      t = t || {}, "undefined" == typeof t.singleton && (t.singleton = v()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");var n = r(e);return o(n, t), function (e) {
	        for (var i = [], s = 0; s < n.length; s++) {
	          var a = n[s],
	              l = m[a.id];l.refs--, i.push(l);
	        }if (e) {
	          var d = r(e);o(d, t);
	        }for (var s = 0; s < i.length; s++) {
	          var l = i[s];if (0 === l.refs) {
	            for (var c = 0; c < l.parts.length; c++) {
	              l.parts[c]();
	            }delete m[l.id];
	          }
	        }
	      };
	    };var x = function () {
	      var e = [];return function (t, n) {
	        return e[t] = n, e.filter(Boolean).join("\n");
	      };
	    }();
	  }, function (e, t) {
	    "use strict";
	    function n(e, t, n) {
	      e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, function () {
	        return n.apply(e, [window.event]);
	      });
	    }function o(e, t, n) {
	      e.removeEventListener && e.removeEventListener(t, n, !1), e.detachEvent && e.detachEvent("on" + t, n);
	    }Object.defineProperty(t, "__esModule", { value: !0 }), t.addEvent = n, t.removeEvent = o;
	  }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);