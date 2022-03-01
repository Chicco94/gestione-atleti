'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AllenamentiModule.html" data-type="entity-link" >AllenamentiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AllenamentiModule-0578ff5fb4c8d24d0e4a62d38bc19588695a162ecd9b156200b5290a508b35cf8bc4a649352308eee88d3f529666a1b4d1ef542bdd9d169034750015946d566b"' : 'data-target="#xs-components-links-module-AllenamentiModule-0578ff5fb4c8d24d0e4a62d38bc19588695a162ecd9b156200b5290a508b35cf8bc4a649352308eee88d3f529666a1b4d1ef542bdd9d169034750015946d566b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AllenamentiModule-0578ff5fb4c8d24d0e4a62d38bc19588695a162ecd9b156200b5290a508b35cf8bc4a649352308eee88d3f529666a1b4d1ef542bdd9d169034750015946d566b"' :
                                            'id="xs-components-links-module-AllenamentiModule-0578ff5fb4c8d24d0e4a62d38bc19588695a162ecd9b156200b5290a508b35cf8bc4a649352308eee88d3f529666a1b4d1ef542bdd9d169034750015946d566b"' }>
                                            <li class="link">
                                                <a href="components/AllenamentiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllenamentiLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentiLandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllenamentoAttivoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentoAttivoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllenamentoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllenamentoLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentoLandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllenamentoPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentoPreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BeforeAllenamentoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BeforeAllenamentoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaAllenamentiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaAllenamentiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaAllenamentiLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaAllenamentiLandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ba37b1e4d43f7ee3233e500daef6fb957230837b92a12652defafc38e2629d5178d0a96ea978eacb96f1c350cb96873430d37019ce58ed8e2ec67e6fd66ab99f"' : 'data-target="#xs-components-links-module-AppModule-ba37b1e4d43f7ee3233e500daef6fb957230837b92a12652defafc38e2629d5178d0a96ea978eacb96f1c350cb96873430d37019ce58ed8e2ec67e6fd66ab99f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ba37b1e4d43f7ee3233e500daef6fb957230837b92a12652defafc38e2629d5178d0a96ea978eacb96f1c350cb96873430d37019ce58ed8e2ec67e6fd66ab99f"' :
                                            'id="xs-components-links-module-AppModule-ba37b1e4d43f7ee3233e500daef6fb957230837b92a12652defafc38e2629d5178d0a96ea978eacb96f1c350cb96873430d37019ce58ed8e2ec67e6fd66ab99f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BaseModule.html" data-type="entity-link" >BaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' : 'data-target="#xs-components-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' :
                                            'id="xs-components-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputDateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputNumberComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputNumberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' : 'data-target="#xs-directives-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' :
                                        'id="xs-directives-links-module-BaseModule-d5b3eba849d35e1e0f96df2c5aebebff5ec3a5a22e5c96ad67a02952470de8543249521a33c7f8636832ab55f064c6e5571b4587b4d5cc25b559d900a40d259f"' }>
                                        <li class="link">
                                            <a href="directives/BackButtonDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackButtonDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GestioneModule.html" data-type="entity-link" >GestioneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GestioneModule-9680f80a2fed1e686e18748ec0570d55ff48bdbce325d778e1978fbbde66c95a2b12ba55e46211d5ff2d439ab70e94084b27cc3bb531c5eb0fc2321a05f8b5a4"' : 'data-target="#xs-components-links-module-GestioneModule-9680f80a2fed1e686e18748ec0570d55ff48bdbce325d778e1978fbbde66c95a2b12ba55e46211d5ff2d439ab70e94084b27cc3bb531c5eb0fc2321a05f8b5a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GestioneModule-9680f80a2fed1e686e18748ec0570d55ff48bdbce325d778e1978fbbde66c95a2b12ba55e46211d5ff2d439ab70e94084b27cc3bb531c5eb0fc2321a05f8b5a4"' :
                                            'id="xs-components-links-module-GestioneModule-9680f80a2fed1e686e18748ec0570d55ff48bdbce325d778e1978fbbde66c95a2b12ba55e46211d5ff2d439ab70e94084b27cc3bb531c5eb0fc2321a05f8b5a4"' }>
                                            <li class="link">
                                                <a href="components/GestioneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestioneComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' : 'data-target="#xs-components-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' :
                                            'id="xs-components-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' }>
                                            <li class="link">
                                                <a href="components/AnagraficaAtletaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnagraficaAtletaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnagraficaTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnagraficaTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtletaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtletaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtletaPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtletaPreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaAtletiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaAtletiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' : 'data-target="#xs-pipes-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' :
                                            'id="xs-pipes-links-module-SharedModule-bda66a3b14b01f77d1c6e6aac60017f9946aa2dd39097ec53f913f99052ec55b925e0c5f68dcf66744e90ebc1fc24f81aa95ad1ba3feb0649f8a1bc46884cd20"' }>
                                            <li class="link">
                                                <a href="pipes/EnumToArrayPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnumToArrayPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/InputTimeComponent.html" data-type="entity-link" >InputTimeComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Allenamento.html" data-type="entity-link" >Allenamento</a>
                            </li>
                            <li class="link">
                                <a href="classes/Atleta.html" data-type="entity-link" >Atleta</a>
                            </li>
                            <li class="link">
                                <a href="classes/Base.html" data-type="entity-link" >Base</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseDao.html" data-type="entity-link" >BaseDao</a>
                            </li>
                            <li class="link">
                                <a href="classes/IdBase.html" data-type="entity-link" >IdBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/Risultato.html" data-type="entity-link" >Risultato</a>
                            </li>
                            <li class="link">
                                <a href="classes/Test.html" data-type="entity-link" >Test</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AllenamentoService.html" data-type="entity-link" >AllenamentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AtletaCompetitionService.html" data-type="entity-link" >AtletaCompetitionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AtletaGroupService.html" data-type="entity-link" >AtletaGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AtletaService.html" data-type="entity-link" >AtletaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AtletaTrainingService.html" data-type="entity-link" >AtletaTrainingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseService.html" data-type="entity-link" >BaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompetitionService.html" data-type="entity-link" >CompetitionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupService.html" data-type="entity-link" >GroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationService.html" data-type="entity-link" >NavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestService.html" data-type="entity-link" >TestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TrainingService.html" data-type="entity-link" >TrainingService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Deserializable.html" data-type="entity-link" >Deserializable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableColumn.html" data-type="entity-link" >TableColumn</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});