webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["stein"] = factory();else root["stein"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 1);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            /*!
             * Authored by Milan van As
             * Released under the MIT license
             *
             * Mediator pattern taken from https://gist.github.com/TCotton/d85e879fdbf856ddae3511652f9260f0
             * With a bit of own magic
             */

            var Mediator = exports.Mediator = function () {

                /**
                 * @description Subscribe to an event, supply a callback to be executed when that event is published
                 * @param event {string}
                 * @param fn {function}
                 * @returns {subscribe} {object}
                 */
                var subscribe = function subscribe(event, fn) {

                    // Multiple events
                    if (Array.isArray(event)) {
                        event.map(function (singleStore) {
                            return subscribe(singleStore, fn);
                        });
                    } else {

                        // Single event


                        // If the event hasnt been subscribed to before, initialze the event store
                        if (!Mediator.events[event]) {
                            Mediator.events[event] = [];
                        }

                        // Add the new callback to the event list
                        Mediator.events[event].push({
                            context: this,
                            callback: fn
                        });
                    }

                    return this;
                };

                /**
                 * @description Publish an event to the rest of the application
                 * @param event {string}
                 * @param args {object}
                 * @returns {*||boolean}
                 */
                var publish = function publish(event) {

                    // If this event doesnt exist
                    if (!Mediator.events[event]) {
                        return false;
                    }

                    // Loop through the event lists and callback in context

                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = Mediator.events[event][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var value = _step.value;

                            var subscription = value;
                            subscription.callback.apply(subscription.context, args);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    return this;
                };

                /**
                 * @description a function to `install` the
                 * subscribe and publish functions to other objects
                 * @param obj
                 * @returns undefined
                 */
                var installTo = function installTo(obj) {
                    obj.subscribe = subscribe;
                    obj.publish = publish;
                };

                return {
                    events: {},
                    publish: publish,
                    subscribe: subscribe,
                    installTo: installTo
                };
            }();

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _Mediator = __webpack_require__(0);

            Object.defineProperty(exports, 'Mediator', {
                enumerable: true,
                get: function get() {
                    return _Mediator.Mediator;
                }
            });

            var _Dispatcher = __webpack_require__(2);

            Object.defineProperty(exports, 'Dispatch', {
                enumerable: true,
                get: function get() {
                    return _Dispatcher.Dispatch;
                }
            });

            var _DefaultModule = __webpack_require__(5);

            Object.defineProperty(exports, 'DefaultModule', {
                enumerable: true,
                get: function get() {
                    return _DefaultModule.DefaultModule;
                }
            });

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */(function (global) {
                module.exports = global["Router"] = __webpack_require__(4);
                /* WEBPACK VAR INJECTION */
            }).call(exports, __webpack_require__(3));

            /***/
        },
        /* 3 */
        /***/function (module, exports) {

            var g;

            // This works in non-strict mode
            g = function () {
                return this;
            }();

            try {
                // This works if eval is allowed (see CSP)
                g = g || Function("return this")() || (1, eval)("this");
            } catch (e) {
                // This works if the window reference is available
                if ((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === "object") g = window;
            }

            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}

            module.exports = g;

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            /*!
             * Authored by Milan van As
             * Released under the MIT license
             *
             * Dispatcher
             *
             * Use:
             * Dispatch([Class1, Class2, Class3]);
             * Dispatch(Class1)
             * Dispatch({class1: Class1, class2: Class2, class3: Class3});
             */
            var Dispatch = exports.Dispatch = function Dispatch(modules) {
                if (Array.isArray(modules)) {
                    modules.forEach(function (module, i) {
                        new modules[i]();
                    });
                } else if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
                    Object.getOwnPropertyNames(modules).foreach(function (module) {
                        new modules[module]();
                    });
                } else if (typeof modules === 'function') {
                    var holder = { c: modules };
                    new holder.c();
                }
                return undefined;
            };

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DefaultModule = undefined;

            var _Mediator = __webpack_require__(0);

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            } /*!
               * Authored by Milan van As
               * Released under the MIT license
               *
               * DefaultModule
               * Installs the Mediator and runs the subscriptions() function if it exists
               */

            /* Get the Mediator */

            var DefaultModule =

            /**
             * Constructor
             */
            exports.DefaultModule = function DefaultModule() {
                _classCallCheck(this, DefaultModule);

                // Give this class access to the mediator
                _Mediator.Mediator.installTo(this);

                // If this class has the subscriptions function, run it
                if (typeof this.subscriptions === 'function') {
                    this.subscriptions();
                }
            };

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stein__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stein___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_stein__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_modules_Core_Core__ = __webpack_require__(3);




// TODO A CONTROLLER IS AN ENTRY POINT!!!!!!
// TODO REGISTER THE CONTROLLER TO A ROUTE
// TODO DISPATCH REGISTRY

Object(__WEBPACK_IMPORTED_MODULE_0_stein__["Dispatch"])([__WEBPACK_IMPORTED_MODULE_1__app_modules_Core_Core__["a" /* default */]]);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_AppModule__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Core_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Core = function (_AppModule) {
    _inherits(Core, _AppModule);

    function Core() {
        _classCallCheck(this, Core);

        // Ref to this
        var _this = _possibleConstructorReturn(this, (Core.__proto__ || Object.getPrototypeOf(Core)).call(this));

        var self = _this;

        _this.speeds = ['STOP', 100, 200, 400, 600, 800, 1000];

        // on DOMContentLoaded, publish DOMReady
        document.addEventListener('DOMContentLoaded', function () {
            return self.publish('DOMReady');
        });
        return _this;
    }

    _createClass(Core, [{
        key: 'DOMReady',
        value: function DOMReady() {

            this.makeButtons();

            var self = this;

            Array.from(document.querySelectorAll('button[data-spin]')).map(function (el) {

                el.addEventListener('click', function () {
                    var spinClass = this.dataset.spin;

                    Array.from(document.querySelectorAll('.wheel')).map(function (wheel) {
                        var _wheel$classList;

                        (_wheel$classList = wheel.classList).remove.apply(_wheel$classList, _toConsumableArray(self.speeds.map(function (spd) {
                            return 'SPEED-' + spd + '-RPM';
                        })));

                        if (spinClass) {
                            var _wheel$classList2;

                            (_wheel$classList2 = wheel.classList).add.apply(_wheel$classList2, ['spin', spinClass]);
                        }
                    });
                });
            });
        }
    }, {
        key: 'makeButtons',
        value: function makeButtons() {

            this.speeds.map(function (speed) {
                var btn = document.createElement('button');
                btn.classList.add('btn', 'btn-primary');
                btn.innerHTML = !isNaN(speed) ? speed + ' RPM' : 'STOP';
                btn.dataset.spin = 'SPEED-' + speed + '-RPM';

                document.querySelector('.controls').append(btn);
            });
        }
    }]);

    return Core;
}(__WEBPACK_IMPORTED_MODULE_0__lib_AppModule__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Core);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stein__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stein___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_stein__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Get DefaultModule


/**
 *
 */

var AppModule = function (_DefaultModule) {
    _inherits(AppModule, _DefaultModule);

    function AppModule() {
        _classCallCheck(this, AppModule);

        var _this = _possibleConstructorReturn(this, (AppModule.__proto__ || Object.getPrototypeOf(AppModule)).call(this));

        if (typeof _this.DOMReady === 'function') {
            _this.subscribe('DOMReady', _this.DOMReady);
        }
        return _this;
    }

    return AppModule;
}(__WEBPACK_IMPORTED_MODULE_0_stein__["DefaultModule"]);

/* harmony default export */ __webpack_exports__["a"] = (AppModule);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[1]);
//# sourceMappingURL=app.js.map