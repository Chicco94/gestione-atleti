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
                                            'data-target="#components-links-module-AllenamentiModule-4dced8738887c396d2fbefb39425fb5a482cadd634f5f40d14f7ade9dcad999f20e965a6bdc487f56924da2bba311f061c84e3f3e11b377ac813ea0d6e3cb436"' : 'data-target="#xs-components-links-module-AllenamentiModule-4dced8738887c396d2fbefb39425fb5a482cadd634f5f40d14f7ade9dcad999f20e965a6bdc487f56924da2bba311f061c84e3f3e11b377ac813ea0d6e3cb436"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AllenamentiModule-4dced8738887c396d2fbefb39425fb5a482cadd634f5f40d14f7ade9dcad999f20e965a6bdc487f56924da2bba311f061c84e3f3e11b377ac813ea0d6e3cb436"' :
                                            'id="xs-components-links-module-AllenamentiModule-4dced8738887c396d2fbefb39425fb5a482cadd634f5f40d14f7ade9dcad999f20e965a6bdc487f56924da2bba311f061c84e3f3e11b377ac813ea0d6e3cb436"' }>
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
                                <a href="modules/AllenamentiRoutingModule.html" data-type="entity-link" >AllenamentiRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f4e2082308c9d94d960d303c2a2907c2b04cb780c43b8b8da8329a77c68651ea3c3ae9a1f303e777cb6752a4a149357ace4185818cd5d8253f2fd652ef2e8a5e"' : 'data-target="#xs-components-links-module-AppModule-f4e2082308c9d94d960d303c2a2907c2b04cb780c43b8b8da8329a77c68651ea3c3ae9a1f303e777cb6752a4a149357ace4185818cd5d8253f2fd652ef2e8a5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f4e2082308c9d94d960d303c2a2907c2b04cb780c43b8b8da8329a77c68651ea3c3ae9a1f303e777cb6752a4a149357ace4185818cd5d8253f2fd652ef2e8a5e"' :
                                            'id="xs-components-links-module-AppModule-f4e2082308c9d94d960d303c2a2907c2b04cb780c43b8b8da8329a77c68651ea3c3ae9a1f303e777cb6752a4a149357ace4185818cd5d8253f2fd652ef2e8a5e"' }>
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
                                            'data-target="#components-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' : 'data-target="#xs-components-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' :
                                            'id="xs-components-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' }>
                                            <li class="link">
                                                <a href="components/AtletaPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtletaPreviewComponent</a>
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
                                                <a href="components/ListaAtletiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaAtletiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaRisultatiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaRisultatiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RisultatoPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RisultatoPreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' : 'data-target="#xs-directives-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' :
                                        'id="xs-directives-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' }>
                                        <li class="link">
                                            <a href="directives/BackButtonDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackButtonDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' : 'data-target="#xs-pipes-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' :
                                            'id="xs-pipes-links-module-BaseModule-51bd7593c2a4236c553ec59a1b5ba8fe015d719904298c261b9bd269f32995c3276f75729d8b3ca43b66ab248e069b0bd31e2ea43b4d2940b249303e6d98adc8"' }>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GareModule.html" data-type="entity-link" >GareModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GareModule-c0f4df49e7875bc5fbfa99bf3211385dfb34aef5ca952258ba2144204c74330ef2370904a4325c668a563236e05dc54605fd576c65b6345efaafc33695230b01"' : 'data-target="#xs-components-links-module-GareModule-c0f4df49e7875bc5fbfa99bf3211385dfb34aef5ca952258ba2144204c74330ef2370904a4325c668a563236e05dc54605fd576c65b6345efaafc33695230b01"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GareModule-c0f4df49e7875bc5fbfa99bf3211385dfb34aef5ca952258ba2144204c74330ef2370904a4325c668a563236e05dc54605fd576c65b6345efaafc33695230b01"' :
                                            'id="xs-components-links-module-GareModule-c0f4df49e7875bc5fbfa99bf3211385dfb34aef5ca952258ba2144204c74330ef2370904a4325c668a563236e05dc54605fd576c65b6345efaafc33695230b01"' }>
                                            <li class="link">
                                                <a href="components/BeforeGaraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BeforeGaraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CostruisciComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CostruisciComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GaraLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GaraLandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GaraPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GaraPreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GareComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GareComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GareLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GareLandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GareggiaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GareggiaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaGareComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaGareComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaGareLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaGareLandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GareRoutingModule.html" data-type="entity-link" >GareRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GestioneModule.html" data-type="entity-link" >GestioneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GestioneModule-e08ef0458a2fef15de5fd95aa63ef7a8c327fd1756c096055147f6a3cea317356767186a74c83d2c7454a6404ba1b672da318ffacc5b4cbd70a0e81f0612d2f4"' : 'data-target="#xs-components-links-module-GestioneModule-e08ef0458a2fef15de5fd95aa63ef7a8c327fd1756c096055147f6a3cea317356767186a74c83d2c7454a6404ba1b672da318ffacc5b4cbd70a0e81f0612d2f4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GestioneModule-e08ef0458a2fef15de5fd95aa63ef7a8c327fd1756c096055147f6a3cea317356767186a74c83d2c7454a6404ba1b672da318ffacc5b4cbd70a0e81f0612d2f4"' :
                                            'id="xs-components-links-module-GestioneModule-e08ef0458a2fef15de5fd95aa63ef7a8c327fd1756c096055147f6a3cea317356767186a74c83d2c7454a6404ba1b672da318ffacc5b4cbd70a0e81f0612d2f4"' }>
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
                                <a href="modules/GestioneRoutingModule.html" data-type="entity-link" >GestioneRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-83093fac15cffdb480ef7b4a934904d336b8fdc468f1f8e8ee6373f37a85eb60e5bf36d925c2f5e3f7b034f071da3ada30ba5d7ca4a076b6fb231f693c9e83f0"' : 'data-target="#xs-components-links-module-SharedModule-83093fac15cffdb480ef7b4a934904d336b8fdc468f1f8e8ee6373f37a85eb60e5bf36d925c2f5e3f7b034f071da3ada30ba5d7ca4a076b6fb231f693c9e83f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-83093fac15cffdb480ef7b4a934904d336b8fdc468f1f8e8ee6373f37a85eb60e5bf36d925c2f5e3f7b034f071da3ada30ba5d7ca4a076b6fb231f693c9e83f0"' :
                                            'id="xs-components-links-module-SharedModule-83093fac15cffdb480ef7b4a934904d336b8fdc468f1f8e8ee6373f37a85eb60e5bf36d925c2f5e3f7b034f071da3ada30ba5d7ca4a076b6fb231f693c9e83f0"' }>
                                            <li class="link">
                                                <a href="components/AnagraficaAtletaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnagraficaAtletaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnagraficaRisultatoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnagraficaRisultatoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnagraficaTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnagraficaTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
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
                                <a href="classes/Gara.html" data-type="entity-link" >Gara</a>
                            </li>
                            <li class="link">
                                <a href="classes/IdBase.html" data-type="entity-link" >IdBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockAllenamentoService.html" data-type="entity-link" >MockAllenamentoService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockAtletaAllenamentoService.html" data-type="entity-link" >MockAtletaAllenamentoService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockAtletaService.html" data-type="entity-link" >MockAtletaService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockAuthenticationService.html" data-type="entity-link" >MockAuthenticationService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockGaraService.html" data-type="entity-link" >MockGaraService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockRisultatoService.html" data-type="entity-link" >MockRisultatoService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockTestAllenamentoService.html" data-type="entity-link" >MockTestAllenamentoService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockTestService.html" data-type="entity-link" >MockTestService</a>
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
                                    <a href="injectables/CustomDateAdapter.html" data-type="entity-link" >CustomDateAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GaraService.html" data-type="entity-link" >GaraService</a>
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