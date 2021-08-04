(this.webpackJsonpmusicbox=this.webpackJsonpmusicbox||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(4),a=c.n(i),d=(c(9),c(2)),l=(c(10),c(11),c(12),c(13),c(0));var r=function(e){var t=Object(s.useMemo)((function(){return{Q:"Heater-1",W:"Heater-2",E:"Heater-3",A:"Heater-4",S:"Clap",D:"Open HH",Z:"Kick n' Hat",X:"Kick",C:"Closed HH"}})),c=Object(s.useCallback)((function(c){!0===e.isMusicEnabled&&(document.getElementById(c).play(),e.keyText(t[c]))}),[t,e]);return Object(s.useEffect)((function(){var e=function(e){var t=e.key;["Q","W","E","A","S","D","Z","X","C","q","w","e","a","s","d","z","x","c"].indexOf(t)>=0&&c(t.toUpperCase())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[c]),Object(l.jsxs)("div",{className:"buttonGroup",children:[Object(l.jsxs)("div",{className:"bg-dark buttonRow topButtonRow",children:[Object(l.jsxs)("div",{id:"div_Q",className:"btn btn-light drum-pad text-center",onClick:function(){return c("Q")},children:["Q",Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",className:"clip",id:"Q"})]}),Object(l.jsxs)("div",{id:"div_W",className:"btn btn-light drum-pad",onClick:function(){return c("W")},children:["W",Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",className:"clip",id:"W"})]}),Object(l.jsxs)("div",{id:"div_E",className:"btn btn-light drum-pad",onClick:function(){return c("E")},children:["E",Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",className:"clip",id:"E"})]})]}),Object(l.jsxs)("div",{className:"bg-dark buttonRow",children:[Object(l.jsxs)("div",{id:"div_A",className:"btn btn-light drum-pad",onClick:function(){return c("A")},children:["A",Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",className:"clip",id:"A"})]}),Object(l.jsxs)("div",{id:"div_S",className:"btn btn-light drum-pad",onClick:function(){return c("S")},children:["S",Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",className:"clip",id:"S"})]}),Object(l.jsxs)("div",{id:"div_D",className:"btn btn-light drum-pad",onClick:function(){return c("D")},children:["D",Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",className:"clip",id:"D"})]})]}),Object(l.jsxs)("div",{className:"bg-dark buttonRow bottomButtonRow",children:[Object(l.jsxs)("div",{id:"div_Z",className:"btn btn-light drum-pad",onClick:function(){return c("Z")},children:["Z",Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",className:"clip",id:"Z"})]}),Object(l.jsxs)("div",{id:"div_X",className:"btn btn-light drum-pad",onClick:function(){return c("X")},children:["X",Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",className:"clip",id:"X"})]}),Object(l.jsxs)("div",{id:"div_C",className:"btn btn-light drum-pad",onClick:function(){return c("C")},children:["C",Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",className:"clip",id:"C"})]})]})]})};c(15);var o=function(e){var t=Object(s.useState)({float:"left"}),c=Object(d.a)(t,2),n=c[0],i=c[1];return Object(l.jsxs)("div",{className:"ControlGroup d-flex flex-column justify-content-between align-items-center bg-dark",children:[Object(l.jsxs)("div",{className:"SwitchContainer d-flex flex-column text-light align-items-center",children:[Object(l.jsx)("label",{htmlFor:"ToggleSwitch",children:"Power"}),Object(l.jsx)("div",{className:"ToggleSwitch bg-light",id:"ToggleSwitch",onClick:function(){"right"===n.float?(e.enableMusicCheck(!0),i({float:"left"})):(e.enableMusicCheck(!1),i({float:"right"}))},children:Object(l.jsx)("div",{className:"ToggleButton bg-danger",style:n})})]}),Object(l.jsx)("div",{id:"display",className:"MusicDisplay bg-light",children:e.keyDisplayText}),Object(l.jsx)("input",{type:"range",className:"form-range",id:"customRange1"}),Object(l.jsxs)("div",{className:"SwitchContainer d-flex flex-column text-light align-items-center",children:[Object(l.jsx)("label",{htmlFor:"ToggleSwitch",children:"Bank"}),Object(l.jsx)("div",{className:"ToggleSwitch bg-light",id:"ToggleSwitch",children:Object(l.jsx)("div",{className:"ToggleButton bg-primary"})})]})]})};var m=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(""),a=Object(d.a)(i,2),m=a[0],u=a[1];return Object(l.jsx)("div",{className:"App",onKeyPress:function(e){console.log(e)},children:Object(l.jsxs)("div",{id:"drum-machine",className:"DrumMachine d-flex flex-row",children:[Object(l.jsx)(r,{isMusicEnabled:c,keyText:function(e){u(e)}}),Object(l.jsx)(o,{enableMusicCheck:function(e){n(!0===e)},keyDisplayText:m})]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),u()}],[[16,1,2]]]);
//# sourceMappingURL=main.99049db2.chunk.js.map