webpackJsonp([41],{1319:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.markdown=a.notes=void 0;var n=s(t(279)),i=(s(t(1)),t(525));function s(e){return e&&e.__esModule?e:{default:e}}a.notes="\n* Nathil me Redux basics\n\n* Atar shel Redux magdir sifriyat Redux kmo:\nPredictable State-Container le niul' State shel' aplikaciya\n\n* Basis shel Redux ze Store...\n* Store mahzik State, meafsher gisha le State,\nmeafsher le state lehitatken be amcaut dispatch shel' Actions\n\n* Esh shlosha icronot shel' Redux: \n* Single source of truth: kol' a-nitunim shel' aplikacia shmurim(metuhzakim) be-State ehad (tree object)\n* State is read only: ve-kol' a-shinuim mufalim al edei Actions \n* State metatken rak be amcaut Pure Functions (Reducers)\n\n* Redux meafsher laavod im sifriyot UI/View shonot, \nve kamuvan oved mitsuyan im React.\n\n* View layer rak merander UI al basis State, kmo she omrim UI ze funkciya mi State.\n";var o=a.markdown="\n## Redux Basics\n* Store: holds application State\n* Actions: object, describe changes to State \n* Reducers: function defined how to transform State\n* View: render UI on base of State\n* Store Middlewares: place for side effects of App\n";a.default=(0,n.default)(i.Slide,{transition:["fade"]},void 0,(0,n.default)(i.Markdown,{},void 0,o))}});