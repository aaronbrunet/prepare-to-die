(this["webpackJsonpprepare-to-die"]=this["webpackJsonpprepare-to-die"]||[]).push([[0],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";var E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27),E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_components_Card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(18),_components_Die__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(28),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(51),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),primereact_resources_themes_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(52),primereact_resources_themes_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(primereact_resources_themes_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_8__),primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(53),primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_9__),primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(54),primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_10__);function _templateObject4(){var e=Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;  \n  margin-top: 50px;\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  height: 100%;\n  width: 80%;\n  margin: auto;\n  display: block;\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  height: 300px;\n  width: 80%;\n  margin: auto;\n  margin-top: 20px;\n  display: block;\n  border-radius: 30px 30px 0 0;\n  background: rgb(36,37,39);\n  background: linear-gradient(to right top, #242527, #25242d, #2b222f, #351e2d, #3e1925);\n  filter: brightness(1.1);\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  color: white;\n  font-size: 60pt;\n  margin: 0;\n  -webkit-user-select: none;  \n  -moz-user-select: none;    \n  -ms-user-select: none;      \n  user-select: none;\n  padding-top: 50px;\n"]);return _templateObject=function(){return e},e}var Heading=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.h1(_templateObject()),Top=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.div(_templateObject2()),Body=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.div(_templateObject3()),CardBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.div(_templateObject4()),diceList=[{name:"d4",sides:4,qty:1,modifier:[],vantage:null,active:!1},{name:"d6",sides:6,qty:1,modifier:[],vantage:null,active:!1},{name:"d8",sides:8,qty:1,modifier:[],vantage:null,active:!1},{name:"d10",sides:10,qty:1,modifier:[],vantage:null,active:!1},{name:"d12",sides:12,qty:1,modifier:[],vantage:null,active:!1},{name:"d20",sides:20,qty:1,modifier:[],vantage:null,active:!1},{name:"Percentile",sides:100,qty:1,modifier:[],vantage:null,active:!1}];function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),_useState2=Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),roll=_useState2[0],setRoll=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(diceList),_useState4=Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),dice=_useState4[0],setDice=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),_useState6=Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),die=_useState6[0],setDie=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),_useState8=Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),active=_useState8[0],setActive=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),_useState10=Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState9,2),history=_useState10[0],updateHistory=_useState10[1],randomise=function(e,n,t,r){for(var a=[],_=0;_<t;_++){var o=Math.round(e+Math.random()*(n-e));if(r){var i=[o,Math.round(e+Math.random()*(n-e))];"advantage"===r&&(o=i.reduce((function(e,n){return Math.max(e,n)}))+" ("+i+")"),"disadvantage"===r&&(o=i.reduce((function(e,n){return Math.min(e,n)}))+" ("+i+")"),console.log("Vantage: %s, Arr: %o",r,i)}a.push(o)}return a},_addModifier=function(e,n){e.modifier.length<3&&(-1===e.modifier.indexOf(n)?e.modifier.push(n):e.modifier.pop(n),console.log(e.name),setDice(dice.map((function(n){return n.name.match(e.name)?e:n}))))},_updateDie=function(e){setDice(dice.map((function(n){return n.name.match(e.name)?e:n})))},_removeModifier=function(e,n){var t=e.modifier.indexOf(n);t>-1&&e.modifier.splice(t,1),console.log(e.name),setDice(dice.map((function(n){return n.name.match(e.name)?e:n})))},_clearAll=function(e){e.modifier=[],setDice(dice.map((function(n){return n.name.match(e.name)?e:n}))),setRoll([])},_rolled=function _rolled(die,qty,modifier,vantageArr){var min=1,max=die.sides,roll=[],result,vantage=vantageArr.value;if(modifier&&modifier.length>0)for(var mod in roll=randomise(min,max,qty,vantage),result=roll.reduce((function(e,n){return parseInt(e)+parseInt(n)}),0),modifier){var curr=modifier[mod];"undefined"!==curr&&(curr=result+curr.replace(/[^-()\d/*+.]/g,""),result=Math.floor(eval(curr)))}else roll=randomise(min,max,qty,vantage),result=roll.reduce((function(e,n){return parseInt(e)+parseInt(n)}),0);var newRoll=[die.name,die.qty,roll,result,modifier,vantageArr];setRoll(newRoll),updateHistory([].concat(Object(E_Web_Dev_2020_projects_prepare_to_die_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(history),[newRoll])),console.log(roll)},_increment=function(e,n){var t=e.qty+n;t<1&&(t=1),e.qty=t,setDice(dice.map((function(n){return n.name.match(e.name)?e:n})))},_toggle=function(e){_clearAll(e),setDie(e===die?function(){return null}:function(){return e})};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Top,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Heading,null,"R",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",{style:{color:"#b94666"}},"&"),"ller"),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardBox,null,dice.map((function(e,n){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__.a,{die:e,setDie:_toggle,key:n,index:n,active:active,setActive:setActive})})))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Body,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Die__WEBPACK_IMPORTED_MODULE_6__.a,{die:die,rolled:_rolled,update:_updateDie,increment:_increment,modifier:_addModifier,rmodifier:_removeModifier,setDie:_toggle,roll:roll,history:history})))}__webpack_exports__.a=App},18:function(e,n,t){"use strict";var r=t(1),a=t(0),_=t.n(a),o=t(2),i=t(8);function c(){var e=Object(r.a)(["  \n  background: #3b3d44;\n  box-shadow: 0px 0px 6px 0px #331f2e;\n  border-radius: 10px;\n  margin: 10px;\n  padding: 15px;\n  color: ",";\n  cursor: pointer;\n  height: 100%;\n  width: auto;\n  transition: 0.1s ease;\n  position: relative;  \n  flex: none;\n  width: 110px;\n  filter: ",";\n  span {\n    position: relative;\n    display: block;\n  }\n\n  button {\n    border: none;\n    background: transparent;\n    color: white;\n  }\n\n  &:hover{\n    filter: brightness(1.5);\n  }\n"]);return c=function(){return e},e}var l=o.a.div(c(),(function(e){return e.active?"#b94666":"white"}),(function(e){return e.active?"brightness(1)":"brightness(.8)"}));n.a=function(e){var n=e.die;n.index=e.index;return _.a.createElement(l,{className:"Dice",onClick:function(){return function(n){n.active=!n.active,e.setDie(n),e.setActive(e.active===e.index?null:e.index)}(n)},active:null===e.active||e.active===e.index},e.active!==e.index&&_.a.createElement(_.a.Fragment,null),_.a.createElement(i.a,{die:n,index:e.index,size:"md"}))}},28:function(e,n,t){"use strict";var r=t(4),a=t(1),_=t(0),o=t.n(_),i=t(25),c=t(10),l=t(2),u=t(11),s=t(26);function d(){var e=Object(a.a)(["\n  display: ",";\n  width: 70%;\n  margin: auto;\n  margin-top: 10px;  \n"]);return d=function(){return e},e}function m(){var e=Object(a.a)(["\n&&&&{  \n  color: ",";\n  background-color: ",";  \n  .p-button-text {\n    font-size: 16pt;\n  }\n    &:focus,&.p-button-secondary:hover{\n        color: ",";\n        background-color: #0e7d8f;\n        background-color: ",";\n      }\n      &:focus,&.p-button-secondary:focus{\n      box-shadow: 0 0 2px 0.2em #2ea9bd;\n    }\n}\n"]);return m=function(){return e},e}function p(){var e=Object(a.a)(['\n  width: 100%;\n  justify-content: center;\n  div[role="group"] {\n    display: inline-block;\n  }\n  &&& {\n    button {\n      border: 0;\n      background-color: #b94666;\n      &:hover {\n        background-color: #843148;\n      }\n    }\n    input,\n    button {\n      &:focus {\n        box-shadow: 0 0 2px 0.2em #fe99ba;\n        border: 0;\n      }\n    }\n  }\n']);return p=function(){return e},e}function b(){var e=Object(a.a)(["\n  &&&&{\n    width: 15%;\n    display: inline-block;\n    input {\n      width: 100%;\n      font-size: 18pt;\n      line-height: 1;\n      padding: 5px;\n      height: 100%;\n    }\n    button {\n      border-radius: 0;\n    }\n  }\n"]);return b=function(){return e},e}function f(){var e=Object(a.a)(["\n&&&&{\n  display: inline-block;\n  border-radius: 10px;\n  background: white;\n  margin: 0 10px;\n  cursor: pointer;\n  background-color: #2ea9bd;\n  .p-button-text {\n    font-size: 16pt;\n  }\n  &:hover {\n    color: #242527;\n    background: white;\n  }\n}\n"]);return f=function(){return e},e}function E(){var e=Object(a.a)(["\n  display: inline-block;\n  &&&& {\n    .p-highlight {\n      background-color: #2ea9bd;\n      border-color: #2ea9bd;\n      &:hover {\n        background-color: #0e7d8f;\n        border-color: #2ea9bd;\n      }\n      &:focus{\n      box-shadow: 0 0 2px 0.2em #2ea9bd;\n      }\n    }\n    .p-focus {\n      box-shadow: 0 0 2px 0.2em #fe99ba;\n      border: 0;\n    }\n    button {\n      border: 0;\n      background-color: #b94666;\n      &:hover {\n        background-color: #843148;\n      }\n      &:focus {\n        box-shadow: 0 0 2px 0.2em #fe99ba;\n        border: 0;\n      }\n    }\n  }\n"]);return E=function(){return e},e}function g(){var e=Object(a.a)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n  &&&{\n  .secondary{     \n      background-color: #2ea9bd;      \n      &:hover,&:focus{\n        background-color: #0e7d8f;\n      }\n      &:focus{\n        box-shadow: 0 0 2px 0.2em #2ea9bd;\n      }\n    }\n  }\n"]);return g=function(){return e},e}var v=l.a.div(g()),O=Object(l.a)(s.SelectButton)(E()),h=Object(l.a)(u.Button)(f()),D=Object(l.a)(c.Spinner)(b()),M=l.a.div(p()),x=Object(l.a)(u.Button)(m(),(function(e){return"true"===e.toggle?"white":"#0e7d8f"}),(function(e){return"true"===e.toggle?"#2ea9bd":"white"}),(function(e){return"true"===e.toggle?"white":"#0e7d8f"}),(function(e){return"true"===e.toggle?"#0e7d8f":"#c8c8c8"})),P=l.a.form(d(),(function(e){return"true"===e.toggle?"block":"none"})),j=function(e){var n=Object(_.useState)("+"),t=Object(r.a)(n,2),a=t[0],i=t[1],c=Object(_.useState)(1),l=Object(r.a)(c,2),s=l[0],d=l[1],m=Object(_.useState)(!1),p=Object(r.a)(m,2),b=p[0],f=p[1],E=e.die;return o.a.createElement(v,null,E.modifier.map((function(n,t){return o.a.createElement(h,{key:t,onClick:function(){return e.rmodifier(E,n)},className:"secondary",label:n})})),E.modifier.length<3?o.a.createElement(x,{label:"".concat(b?"-":"+"," Modifier"),className:"p-button-raised p-button-secondary",onClick:function(){return f(!b)},toggle:b.toString()}):o.a.createElement("h4",null,"Remove a modifier to add a new one"),o.a.createElement(P,{onSubmit:function(n){n.preventDefault(),a&&s&&(console.log(a+s),e.modifier(E,a+s),d(1),i("+"),f(!1))},toggle:b.toString()},o.a.createElement(M,{className:"p-inputgroup"},o.a.createElement(O,{value:a,options:[{label:"+",value:"+"},{label:"-",value:"-"},{label:"*",value:"*"},{label:"/",value:"/"}],onChange:function(e){return i(e.value)}}),o.a.createElement(D,{value:s,onChange:function(e){d(e.target.value)},min:1,max:100}),o.a.createElement(u.Button,{className:"secondary",label:"Add"}))))};function k(){var e=Object(a.a)(["\n  color: #b94666;\n  display: inline-block;\n  font-size: 25pt;\n  margin: 5px;\n"]);return k=function(){return e},e}function y(){var e=Object(a.a)(["\n  &&& {\n    color: #2ea9bd;\n    display: inline-block;\n    margin: 0 10px;\n  }\n"]);return y=function(){return e},e}function A(){var e=Object(a.a)(["\n  color: white;\n  font-size: 30pt;\n  margin: 5px;\n"]);return A=function(){return e},e}function w(){var e=Object(a.a)(["\n  display: block;\n  background: #2c222f;\n  width: 80%;\n  margin: auto;\n  border-radius: 30px;\n  padding: 20px;\n  margin-top: 30px;\n"]);return w=function(){return e},e}var W=l.a.div(w()),C=l.a.h3(A()),T=l.a.span(y()),R=l.a.h4(k()),B=function(e){var n=Object(r.a)(e.roll,6),t=n[0],a=n[1],_=n[2],i=n[3],c=n[4],l=n[5],u="Percentile"===t;return o.a.createElement(W,null,_?o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null,u?t:a+t,o.a.createElement(T,null,c&&c.length>0&&" (".concat(c,") "),l&&"Normal"!==l.label&&"(".concat(l.label,")"))),_.map((function(e,n){return o.a.createElement(R,{key:n},e,_.length>0&&n<_.length-1&&" + ")})),o.a.createElement(R,null,c&&c.length>0&&" ( ".concat(c," )")),o.a.createElement(C,null,"Result:",o.a.createElement(T,null,i,u&&"%"))):o.a.createElement(C,null,"Roll something!"))},L=t(8);function I(){var e=Object(a.a)(["\n  &&&{\n  width: 50%;\n  display: block;\n  margin: auto;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  /*max-width: 250px;*/  \n \n\n  button {\n    background-color: #b94666;\n    background-color: ",";\n    border-radius: 0;\n    height: 100%;\n    font-size: 12pt;\n    transition: all 0.5s ease;\n\n    &:hover{\n      background-color: #843148;\n      background-color: ",";\n    }\n  }\n  .p-button-text {    \n    font-size: 25pt;\n    line-height: 1;\n    white-space: nowrap;\n  } \n  .p-button-text-only { width: 90%; }\n  .p-button-icon-only { width: 10%; }\n  }\n"]);return I=function(){return e},e}function K(){var e=Object(a.a)(["\n&&&{\n  display: block;\n  width: 30%;  \n  max-width: 200px;\n  margin: auto;\n  box-sizing: border-box;\n\n  input {\n    display: block;\n    text-align: center;\n    padding: 15px 0 !important;    \n    width: 100%;\n    font-size: 18pt;\n    font-weight: bold;\n    color: #b94666;    \n  }\n  button {\n    display: inline-block;\n    position: absolute;\n    top:0;\n    height: 100%;\n    cursor: pointer;\n    span {\n      transform: rotate(90deg);\n    }\n\n    background-color: #b94666;\n    &:hover{\n      background-color: #843148;\n    }\n\n    &.p-spinner-button-up{\n      right: 0;      \n    }\n    &.p-spinner-button-down{\n      left: 0;\n    }\n  }\n}\n"]);return K=function(){return e},e}function U(){var e=Object(a.a)(["  \n&&&{\n    display: block;  \n    margin: 15px 0;\n    .icon-box {      \n      display: inline-block;\n      margin: 0 10px;\n      transition: 0.2s ease;\n      /*&:hover{animation: pulse .5s infinite;}*/\n    }\n    @keyframes pulse {\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(70deg);\n    }\n    50% {\n      transform: rotate(0deg);\n    }\n    75% {\n      transform: rotate(-70deg);\n\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n}\n"]);return U=function(){return e},e}function S(){var e=Object(a.a)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]);return S=function(){return e},e}function q(){var e=Object(a.a)(["\n  flex: 0 0 58%;\n  height: 100%;\n  border-radius: 30px;\n  padding: 30px;\n  &&&{    \n    .p-button-text {\n      font-size: 20pt;\n      line-height: 1;\n      font-weight: bold;\n    }\n    .p-menuitem {\n      font-size: 18pt;\n    }\n  }\n"]);return q=function(){return e},e}function z(){var e=Object(a.a)(["\n  flex: 0 0 40%;\n  height: 100%;\n  border-radius: 30px;\n  background: #2c222f;\n  box-shadow: -2px 5px 12px 0px #242528;\n"]);return z=function(){return e},e}function N(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return N=function(){return e},e}function F(){var e=Object(a.a)(["\n  color: #2ea9bd;\n  font-size: 25pt;\n"]);return F=function(){return e},e}function H(){var e=Object(a.a)(["\n  color: #b94666;\n  font-size: 35pt;\n"]);return H=function(){return e},e}function J(){var e=Object(a.a)(["\n  border-radius: 50px;\n  background: #2c222f;\n  background: #3b3d44;\n  margin: 20px auto;\n  padding: 15px;\n  color: #b94666;\n  height: 50vh;\n  width: 100%;  \n  transition: 0.2s ease-in-out;\n  position: relative;\n  &&&{\n    .secondary {\n      background-color: #2ea9bd;      \n    }\n    button {\n      border: 0;\n    }\n    input, button{\n      &:focus {\n        box-shadow: 0 0 2px 0.2em #fe99ba;\n        border: 0;\n      }\n    }\n  }  \n"]);return J=function(){return e},e}var V=l.a.div(J()),$=l.a.h1(H()),G=l.a.h3(F()),Q=l.a.div(N()),X=l.a.div(z()),Y=l.a.div(q()),Z=l.a.div(S()),ee=l.a.div(U()),ne=Object(l.a)(c.Spinner)(K()),te=Object(l.a)(i.SplitButton)(I(),(function(e){return"Normal"===e.vantage?"#b94666":"#2ea9bd"}),(function(e){return"Normal"===e.vantage?"#843148":"#0e7d8f"}));n.a=function(e){var n=[{label:"Normal",value:null,command:function(e){c(n[0])}},{label:"Advantage",value:"advantage",command:function(e){c(n[1])}},{label:"Disadvantage",value:"disadvantage",command:function(e){c(n[2])}}],t=Object(_.useState)(n[0]),a=Object(r.a)(t,2),i=a[0],c=a[1],l=e.die,u=function(){for(var e=[],n=1;n<=l.qty;)e.push(o.a.createElement(L.a,{die:l,index:l.index,key:n,size:"sm",inline:!0})),n++;return e};return o.a.createElement(V,{className:"Dice"},o.a.createElement(Q,null,l?o.a.createElement(o.a.Fragment,null,o.a.createElement(X,null,o.a.createElement(L.a,{die:l,index:l.index,size:"lg",className:"App-logo"}),o.a.createElement($,null,l.name),o.a.createElement(G,null,l.sides," Sides")),o.a.createElement(Y,null,o.a.createElement(Z,null,o.a.createElement(ne,{value:l.qty,onChange:function(n){return t=n.value,l.qty=t,void e.update(l);var t},min:1,max:10}),o.a.createElement(ee,null,u())),o.a.createElement(j,{rmodifier:e.rmodifier,modifier:e.modifier,die:l}),o.a.createElement(te,{vantage:i.label,label:i.value?"Roll ".concat(i.label):"Roll",onClick:function(){return e.rolled(l,l.qty,l.modifier,i)},model:n}),o.a.createElement(B,{diceList:u(),roll:e.roll}))):o.a.createElement(o.a.Fragment,null,o.a.createElement(X,null,o.a.createElement($,null,"Prepare to Die")),o.a.createElement(Y,null,o.a.createElement(G,null,"Choose a die to begin rolling")))))}},31:function(e,n,t){e.exports=t(55)},36:function(e,n,t){},51:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),_=t(9),o=t.n(_),i=(t(36),t(17));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){"use strict";var r=t(1),a=t(0),_=t.n(a),o=t(2),i=t(30);function c(){var e=Object(r.a)(["\n    display: ",";\n    margin: ",";\n"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["  \n  svg {\n    width: 50px;\n    width: ",";\n    height: 50px;\n    height: ",";\n    fill: #2ea9bd;\n    fill: ",";\n  }\n"]);return l=function(){return e},e}var u=Object(o.a)(i.a)(l(),(function(e){return"Percentile"===e.name?.8*e.size+"px":e.size+"px"}),(function(e){return e.size+"px"}),(function(e){return e.rgb?e.rgb:"#2ea9bd"})),s=o.a.div(c(),(function(e){return e.inline?"inline-block":"block"}),(function(e){return e.inline?"0 10px":""}));n.a=function(e){var n=e.index;return _.a.createElement(s,{className:"icon-box"},_.a.createElement(u,{size:("lg"===e.size?150:"md"===e.size&&80)||"sm"===e.size&&50,src:"../icons/dice-".concat(e.die.name,".svg"),rgb:function(e,n,t){var r=100/6*t/100,a=1-r;return"rgb("+[Math.round(e[0]*r+n[0]*a),Math.round(e[1]*r+n[1]*a),Math.round(e[2]*r+n[2]*a)].join(",")+")"}([185,70,102],[46,169,189],n),name:e.die.name}))}}},[[31,1,2]]]);
//# sourceMappingURL=main.521e94df.chunk.js.map