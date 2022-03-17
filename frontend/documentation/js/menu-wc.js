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
                                            'data-target="#components-links-module-AllenamentiModule-19f3c3649181ecefc4c3b90454bbd69a0740ee7edbc63d2334543bcb6d55cc1f897c23b3e5f608069f7b2a58fef8ead68b18e002e3154b0a172a4e23fecaa3e0"' : 'data-target="#xs-components-links-module-AllenamentiModule-19f3c3649181ecefc4c3b90454bbd69a0740ee7edbc63d2334543bcb6d55cc1f897c23b3e5f608069f7b2a58fef8ead68b18e002e3154b0a172a4e23fecaa3e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AllenamentiModule-19f3c3649181ecefc4c3b90454bbd69a0740ee7edbc63d2334543bcb6d55cc1f897c23b3e5f608069f7b2a58fef8ead68b18e002e3154b0a172a4e23fecaa3e0"' :
                                            'id="xs-components-links-module-AllenamentiModule-19f3c3649181ecefc4c3b90454bbd69a0740ee7edbc63d2334543bcb6d55cc1f897c23b3e5f608069f7b2a58fef8ead68b18e002e3154b0a172a4e23fecaa3e0"' }>
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
                                                <a href="components/AllenamentoSelectAtletaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentoSelectAtletaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllenamentoSelectTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentoSelectTestComponent</a>
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
                                            'data-target="#components-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' : 'data-target="#xs-components-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' :
                                            'id="xs-components-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' }>
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
                                                <a href="components/InputSexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputSexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTestTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTestTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' : 'data-target="#xs-directives-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' :
                                        'id="xs-directives-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' }>
                                        <li class="link">
                                            <a href="directives/BackButtonDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackButtonDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' : 'data-target="#xs-pipes-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' :
                                            'id="xs-pipes-links-module-BaseModule-797c10f26dbd37e9a985cbfdb9946e83b63ee2d012897b981dbd4864db488d1b0c9ffaf09cfbdebe4b9f217531a4a9f5942d59af7d07e3f739f2e9dc6703191b"' }>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GestioneModule.html" data-type="entity-link" >GestioneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GestioneModule-7fab1322327d5019e358f382a3f4ec9d82a052f64caa78ff5953d9dc8fe5fc72e2677eadc1d2aabe5276927bf7f4393f7fe94062486a44cedc90b88ff64530ea"' : 'data-target="#xs-components-links-module-GestioneModule-7fab1322327d5019e358f382a3f4ec9d82a052f64caa78ff5953d9dc8fe5fc72e2677eadc1d2aabe5276927bf7f4393f7fe94062486a44cedc90b88ff64530ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GestioneModule-7fab1322327d5019e358f382a3f4ec9d82a052f64caa78ff5953d9dc8fe5fc72e2677eadc1d2aabe5276927bf7f4393f7fe94062486a44cedc90b88ff64530ea"' :
                                            'id="xs-components-links-module-GestioneModule-7fab1322327d5019e358f382a3f4ec9d82a052f64caa78ff5953d9dc8fe5fc72e2677eadc1d2aabe5276927bf7f4393f7fe94062486a44cedc90b88ff64530ea"' }>
                                            <li class="link">
                                                <a href="components/GestioneAtletiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestioneAtletiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GestioneAtletiLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestioneAtletiLandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GestioneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestioneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GestioneLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestioneLandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GestioneTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestioneTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GestioneTestLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestioneTestLandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-3e572aa9f37ff4f2aca0bb12f8206c49569763ab00da7b718fe74e85bbd96c6f292ad4a968edf7bea2006e0295c669602d765750f8e63ebd930cd58f7f5e470f"' : 'data-target="#xs-components-links-module-SharedModule-3e572aa9f37ff4f2aca0bb12f8206c49569763ab00da7b718fe74e85bbd96c6f292ad4a968edf7bea2006e0295c669602d765750f8e63ebd930cd58f7f5e470f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3e572aa9f37ff4f2aca0bb12f8206c49569763ab00da7b718fe74e85bbd96c6f292ad4a968edf7bea2006e0295c669602d765750f8e63ebd930cd58f7f5e470f"' :
                                            'id="xs-components-links-module-SharedModule-3e572aa9f37ff4f2aca0bb12f8206c49569763ab00da7b718fe74e85bbd96c6f292ad4a968edf7bea2006e0295c669602d765750f8e63ebd930cd58f7f5e470f"' }>
                                            <li class="link">
                                                <a href="components/AnagraficaAtletaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnagraficaAtletaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnagraficaTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnagraficaTestComponent</a>
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
                                    <a href="injectables/AtletaAllenamentoService.html" data-type="entity-link" >AtletaAllenamentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AtletaService.html" data-type="entity-link" >AtletaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseService.html" data-type="entity-link" >BaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomDateAdapter.html" data-type="entity-link" >CustomDateAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationService.html" data-type="entity-link" >NavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RisultatoService.html" data-type="entity-link" >RisultatoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestAllenamentoService.html" data-type="entity-link" >TestAllenamentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestService.html" data-type="entity-link" >TestService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
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