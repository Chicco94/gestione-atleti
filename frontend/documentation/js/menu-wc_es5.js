'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">frontend documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AllenamentiModule.html\" data-type=\"entity-link\" >AllenamentiModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AllenamentiModule-0578ff5fb4c8d24d0e4a62d38bc19588695a162ecd9b156200b5290a508b35cf8bc4a649352308eee88d3f529666a1b4d1ef542bdd9d169034750015946d566b"' : 'data-target="#xs-components-links-module-AllenamentiModule-0578ff5fb4c8d24d0e4a62d38bc19588695a162ecd9b156200b5290a508b35cf8bc4a649352308eee88d3f529666a1b4d1ef542bdd9d169034750015946d566b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AllenamentiModule-0578ff5fb4c8d24d0e4a62d38bc19588695a162ecd9b156200b5290a508b35cf8bc4a649352308eee88d3f529666a1b4d1ef542bdd9d169034750015946d566b"' : 'id="xs-components-links-module-AllenamentiModule-0578ff5fb4c8d24d0e4a62d38bc19588695a162ecd9b156200b5290a508b35cf8bc4a649352308eee88d3f529666a1b4d1ef542bdd9d169034750015946d566b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AllenamentiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AllenamentiComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AllenamentiLandingComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AllenamentiLandingComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AllenamentoAttivoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AllenamentoAttivoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AllenamentoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AllenamentoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AllenamentoLandingComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AllenamentoLandingComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AllenamentoPreviewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AllenamentoPreviewComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BeforeAllenamentoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BeforeAllenamentoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListaAllenamentiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListaAllenamentiComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListaAllenamentiLandingComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListaAllenamentiLandingComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-ba37b1e4d43f7ee3233e500daef6fb957230837b92a12652defafc38e2629d5178d0a96ea978eacb96f1c350cb96873430d37019ce58ed8e2ec67e6fd66ab99f"' : 'data-target="#xs-components-links-module-AppModule-ba37b1e4d43f7ee3233e500daef6fb957230837b92a12652defafc38e2629d5178d0a96ea978eacb96f1c350cb96873430d37019ce58ed8e2ec67e6fd66ab99f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-ba37b1e4d43f7ee3233e500daef6fb957230837b92a12652defafc38e2629d5178d0a96ea978eacb96f1c350cb96873430d37019ce58ed8e2ec67e6fd66ab99f"' : 'id="xs-components-links-module-AppModule-ba37b1e4d43f7ee3233e500daef6fb957230837b92a12652defafc38e2629d5178d0a96ea978eacb96f1c350cb96873430d37019ce58ed8e2ec67e6fd66ab99f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BaseModule.html\" data-type=\"entity-link\" >BaseModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' : 'data-target="#xs-components-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' : 'id="xs-components-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InputDateComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InputDateComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InputNumberComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InputNumberComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InputTextComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InputTextComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#directives-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' : 'data-target="#xs-directives-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"', ">\n                                        <span class=\"icon ion-md-code-working\"></span>\n                                        <span>Directives</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="directives-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' : 'id="xs-directives-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"', ">\n                                        <li class=\"link\">\n                                            <a href=\"directives/BackButtonDirective.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BackButtonDirective</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/GestioneModule.html\" data-type=\"entity-link\" >GestioneModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-GestioneModule-9680f80a2fed1e686e18748ec0570d55ff48bdbce325d778e1978fbbde66c95a2b12ba55e46211d5ff2d439ab70e94084b27cc3bb531c5eb0fc2321a05f8b5a4"' : 'data-target="#xs-components-links-module-GestioneModule-9680f80a2fed1e686e18748ec0570d55ff48bdbce325d778e1978fbbde66c95a2b12ba55e46211d5ff2d439ab70e94084b27cc3bb531c5eb0fc2321a05f8b5a4"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-GestioneModule-9680f80a2fed1e686e18748ec0570d55ff48bdbce325d778e1978fbbde66c95a2b12ba55e46211d5ff2d439ab70e94084b27cc3bb531c5eb0fc2321a05f8b5a4"' : 'id="xs-components-links-module-GestioneModule-9680f80a2fed1e686e18748ec0570d55ff48bdbce325d778e1978fbbde66c95a2b12ba55e46211d5ff2d439ab70e94084b27cc3bb531c5eb0fc2321a05f8b5a4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/GestioneComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >GestioneComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' : 'data-target="#xs-components-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' : 'id="xs-components-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AnagraficaAtletaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AnagraficaAtletaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AnagraficaTestComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AnagraficaTestComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AtletaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AtletaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AtletaPreviewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AtletaPreviewComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListaAtletiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListaAtletiComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListaTestComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListaTestComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TestPreviewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TestPreviewComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' : 'data-target="#xs-pipes-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' : 'id="xs-pipes-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/EnumToArrayPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EnumToArrayPipe</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"pipes/FilterPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FilterPipe</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"pipes/SearchPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SearchPipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/InputTimeComponent.html\" data-type=\"entity-link\" >InputTimeComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Allenamento.html\" data-type=\"entity-link\" >Allenamento</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Atleta.html\" data-type=\"entity-link\" >Atleta</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Base.html\" data-type=\"entity-link\" >Base</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BaseDao.html\" data-type=\"entity-link\" >BaseDao</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/IdBase.html\" data-type=\"entity-link\" >IdBase</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Risultato.html\" data-type=\"entity-link\" >Risultato</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Test.html\" data-type=\"entity-link\" >Test</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AllenamentoService.html\" data-type=\"entity-link\" >AllenamentoService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AtletaCompetitionService.html\" data-type=\"entity-link\" >AtletaCompetitionService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AtletaGroupService.html\" data-type=\"entity-link\" >AtletaGroupService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AtletaService.html\" data-type=\"entity-link\" >AtletaService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AtletaTrainingService.html\" data-type=\"entity-link\" >AtletaTrainingService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BaseService.html\" data-type=\"entity-link\" >BaseService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/CompetitionService.html\" data-type=\"entity-link\" >CompetitionService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/GroupService.html\" data-type=\"entity-link\" >GroupService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/NavigationService.html\" data-type=\"entity-link\" >NavigationService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TestService.html\" data-type=\"entity-link\" >TestService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TrainingService.html\" data-type=\"entity-link\" >TrainingService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Deserializable.html\" data-type=\"entity-link\" >Deserializable</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TableColumn.html\" data-type=\"entity-link\" >TableColumn</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));