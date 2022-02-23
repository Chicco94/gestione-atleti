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
                                            'data-target="#components-links-module-AllenamentiModule-2cf5a4bc142861bd135ff64c0fe307b0c1fa83c63e2b76b14cc39c5d349a828730ed5e8ceaa68b20ad66b88adc1862ef61902fdd687b7ef8b1ee0148a04be451"' : 'data-target="#xs-components-links-module-AllenamentiModule-2cf5a4bc142861bd135ff64c0fe307b0c1fa83c63e2b76b14cc39c5d349a828730ed5e8ceaa68b20ad66b88adc1862ef61902fdd687b7ef8b1ee0148a04be451"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AllenamentiModule-2cf5a4bc142861bd135ff64c0fe307b0c1fa83c63e2b76b14cc39c5d349a828730ed5e8ceaa68b20ad66b88adc1862ef61902fdd687b7ef8b1ee0148a04be451"' :
                                            'id="xs-components-links-module-AllenamentiModule-2cf5a4bc142861bd135ff64c0fe307b0c1fa83c63e2b76b14cc39c5d349a828730ed5e8ceaa68b20ad66b88adc1862ef61902fdd687b7ef8b1ee0148a04be451"' }>
                                            <li class="link">
                                                <a href="components/AllenamentiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllenamentoAttivoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentoAttivoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllenamentoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllenamentoComponent</a>
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
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ab2a68601f2ab366f1fc43cbfa05d735262a801aa8d96b246e121c09bfd3e4880a9daa20506e181f44b49ec2c613b3f1562be62ea9f2702869a6e5ec117aa4bc"' : 'data-target="#xs-components-links-module-AppModule-ab2a68601f2ab366f1fc43cbfa05d735262a801aa8d96b246e121c09bfd3e4880a9daa20506e181f44b49ec2c613b3f1562be62ea9f2702869a6e5ec117aa4bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ab2a68601f2ab366f1fc43cbfa05d735262a801aa8d96b246e121c09bfd3e4880a9daa20506e181f44b49ec2c613b3f1562be62ea9f2702869a6e5ec117aa4bc"' :
                                            'id="xs-components-links-module-AppModule-ab2a68601f2ab366f1fc43cbfa05d735262a801aa8d96b246e121c09bfd3e4880a9daa20506e181f44b49ec2c613b3f1562be62ea9f2702869a6e5ec117aa4bc"' }>
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
                                            'data-target="#components-links-module-BaseModule-bb653e952f64993ad506e480d36629aba7396ebe17b8f4f17833901d879c134ca64e15c66d23740acf6559ab4c708bf242ef9553106a1a58d1cbe714745d1ffb"' : 'data-target="#xs-components-links-module-BaseModule-bb653e952f64993ad506e480d36629aba7396ebe17b8f4f17833901d879c134ca64e15c66d23740acf6559ab4c708bf242ef9553106a1a58d1cbe714745d1ffb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseModule-bb653e952f64993ad506e480d36629aba7396ebe17b8f4f17833901d879c134ca64e15c66d23740acf6559ab4c708bf242ef9553106a1a58d1cbe714745d1ffb"' :
                                            'id="xs-components-links-module-BaseModule-bb653e952f64993ad506e480d36629aba7396ebe17b8f4f17833901d879c134ca64e15c66d23740acf6559ab4c708bf242ef9553106a1a58d1cbe714745d1ffb"' }>
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
                                            'data-target="#components-links-module-SharedModule-cc336075348e4ef8d4e9559a966f16298f6e1eaa1f72bce4513087f1aaecaa346fbbcbea91e382e1e73b63eb04208543eb7cb5bbe5ae3280543973860bff42f8"' : 'data-target="#xs-components-links-module-SharedModule-cc336075348e4ef8d4e9559a966f16298f6e1eaa1f72bce4513087f1aaecaa346fbbcbea91e382e1e73b63eb04208543eb7cb5bbe5ae3280543973860bff42f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-cc336075348e4ef8d4e9559a966f16298f6e1eaa1f72bce4513087f1aaecaa346fbbcbea91e382e1e73b63eb04208543eb7cb5bbe5ae3280543973860bff42f8"' :
                                            'id="xs-components-links-module-SharedModule-cc336075348e4ef8d4e9559a966f16298f6e1eaa1f72bce4513087f1aaecaa346fbbcbea91e382e1e73b63eb04208543eb7cb5bbe5ae3280543973860bff42f8"' }>
                                            <li class="link">
                                                <a href="components/AthleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AthleteComponent</a>
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
                                            'data-target="#pipes-links-module-SharedModule-cc336075348e4ef8d4e9559a966f16298f6e1eaa1f72bce4513087f1aaecaa346fbbcbea91e382e1e73b63eb04208543eb7cb5bbe5ae3280543973860bff42f8"' : 'data-target="#xs-pipes-links-module-SharedModule-cc336075348e4ef8d4e9559a966f16298f6e1eaa1f72bce4513087f1aaecaa346fbbcbea91e382e1e73b63eb04208543eb7cb5bbe5ae3280543973860bff42f8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-cc336075348e4ef8d4e9559a966f16298f6e1eaa1f72bce4513087f1aaecaa346fbbcbea91e382e1e73b63eb04208543eb7cb5bbe5ae3280543973860bff42f8"' :
                                            'id="xs-pipes-links-module-SharedModule-cc336075348e4ef8d4e9559a966f16298f6e1eaa1f72bce4513087f1aaecaa346fbbcbea91e382e1e73b63eb04208543eb7cb5bbe5ae3280543973860bff42f8"' }>
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
                                <a href="classes/Athlete.html" data-type="entity-link" >Athlete</a>
                            </li>
                            <li class="link">
                                <a href="classes/AthleteGroup.html" data-type="entity-link" >AthleteGroup</a>
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
                                    <a href="injectables/AthleteCompetitionService.html" data-type="entity-link" >AthleteCompetitionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AthleteGroupService.html" data-type="entity-link" >AthleteGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AthleteService.html" data-type="entity-link" >AthleteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AthleteTrainingService.html" data-type="entity-link" >AthleteTrainingService</a>
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