(this["webpackJsonpreact-memory"]=this["webpackJsonpreact-memory"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),s=c(9),r=c.n(s),o=c(2),l=c.p+"static/media/brain-2.768f7e44.svg",d=function(e){var t=e.setPageStatus;e.pageStatus;return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"EduMemory"}),Object(n.jsx)("img",{className:"brain-img",alt:"EduMemory logo",src:l})]}),Object(n.jsx)("button",{onClick:function(){return t(1)},children:"Play"}),Object(n.jsx)("button",{onClick:function(){return t(2)},children:"How To Play"}),Object(n.jsx)("button",{onClick:function(){return t(3)},children:"About"})]})},u=c(3),j=c(7),b=c.p+"static/media/home-button.eca9f8a6.svg",h=c.p+"static/media/card-1.66ab882b.png",m=c.p+"static/media/card-13.0d921a5c.png",p=c.p+"static/media/card-3.b0472f0f.png",O=c.p+"static/media/card-4.b648fda9.png",f=c.p+"static/media/card-5.0bf08e22.png",g=c.p+"static/media/card-6.1d2d1ecd.png",x=c.p+"static/media/card-7.07bde922.png",v=c.p+"static/media/card-8.c7103e77.png",y=c.p+"static/media/card-9.1135933e.png",S=c.p+"static/media/card-14.26965b23.png",N=c.p+"static/media/card-11.b25414e3.png",w=c.p+"static/media/card-12.4f0afec8.png",k=c(10),C=c.n(k),E=c.p+"static/media/CardBackBlue.d0829c51.png";function M(e){var t=e.options,c=e.setOptions,i=e.highScore,s=e.setHighScore,r=Object(a.useState)([]),l=Object(o.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)(0),k=Object(o.a)(b,2),C=k[0],E=k[1],M=Object(a.useState)([]),P=Object(o.a)(M,2),B=P[0],F=P[1],H=["url(".concat(h,")"),"url(".concat(m,")"),"url(".concat(p,")"),"url(".concat(O,")"),"url(".concat(f,")"),"url(".concat(g,")"),"url(".concat(x,")"),"url(".concat(v,")"),"url(".concat(y,")"),"url(".concat(S,")"),"url(".concat(N,")"),"url(".concat(w,")")];if(Object(a.useEffect)((function(){for(var e=[],c=0;c<t/2;c++){var n={id:2*c,colorId:c,color:H[c],flipped:!1},a={id:2*c+1,colorId:c,color:H[c],flipped:!1};e.push(n),e.push(a)}var i=e.sort((function(){return Math.random()-.5}));j(i)}),[]),Object(a.useEffect)((function(){!d.some((function(e){return!e.flipped}))&&d.length>0&&setTimeout((function(){var e,n=d.length;12===t?e=5:18===t?e=2.5:24===t&&(e=1);var a,r=Math.round(e*(.66*C-n));if((a=r<100?100-r:0)>i){s(a);var o=JSON.stringify(a);localStorage.setItem("memorygamehighscore",o)}if(window.confirm("You Win!, New Game?")){var l=d.length;c(null),setTimeout((function(){c(l)}),5)}else c(null)}),500)}),[d]),2===B.length)if(d[B[0]].colorId===d[B[1]].colorId){var T=Object(u.a)(d);T[B[0]].flipped=!0,T[B[1]].flipped=!0,j(T);var A=Object(u.a)(B);A.push(!1),F(A)}else{var J=Object(u.a)(B);J.push(!0),F(J)}return 0===d.length?Object(n.jsx)("div",{children:"loading..."}):Object(n.jsx)("div",{id:"cards",children:d.map((function(e,t){return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)(I,{id:t,color:e.color,game:d,flippedCount:C,setFlippedCount:E,flippedIndexes:B,setFlippedIndexes:F})},t)}))})}function I(e){var t=e.id,c=e.color,i=e.game,s=e.flippedCount,r=e.setFlippedCount,l=e.flippedIndexes,d=e.setFlippedIndexes,b=Object(a.useState)(!1),h=Object(o.a)(b,2),m=h[0],p=h[1],O=Object(j.b)({opacity:m?1:0,transform:"perspective(600px) rotateX(".concat(m?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),f=O.transform,g=O.opacity;Object(a.useEffect)((function(){!0===l[2]&&l.indexOf(t)>-1?setTimeout((function(){p((function(e){return!e})),r(s+1),d([])}),2e3):!1===l[2]&&0===t&&(r(s+1),d([]))}),[l]);return Object(n.jsxs)("div",{className:"hovernow",onClick:function(){if(i[t].flipped||s%3!==0){if(s%3===1&&!i[t].flipped&&l.indexOf(t)<0){p((function(e){return!e})),r(s+1);var e=Object(u.a)(l);e.push(t),d(e)}}else{p((function(e){return!e})),r(s+1);var c=Object(u.a)(l);c.push(t),d(c)}},children:[Object(n.jsx)(j.a.div,{className:"c back",style:{opacity:g.interpolate((function(e){return 1-e})),transform:f,backgroundImage:"url(".concat(E,")")}}),Object(n.jsx)(j.a.div,{className:"c front",style:{opacity:g,transform:f.interpolate((function(e){return"".concat(e," rotateX(180deg)")})),backgroundImage:c}})]})}var P=function(e){var t=e.setPageStatus,c=e.pageStatus,i=(e.flippedCount,Object(a.useState)(null)),s=Object(o.a)(i,2),r=s[0],d=s[1],u=Object(a.useState)(0),j=Object(o.a)(u,2),h=j[0],m=j[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("memorygamehighscore"),t=JSON.parse(e);t&&m(t)}),[]),Object(n.jsxs)("div",{className:"game ".concat(c?"active-game":""),children:[Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"home-button",onClick:function(){return t(0)},children:Object(n.jsx)("img",{className:"home-pic",src:b,alt:"Home Button"})})}),Object(n.jsxs)("div",{className:"logo-title-div",children:[Object(n.jsx)("h1",{className:"logo-title",children:"EduMemory"}),Object(n.jsx)("img",{className:"brain-logo",alt:"EduMemory logo",src:l})]}),Object(n.jsx)("h2",{children:"Memory Game"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{children:[null===r?Object(n.jsx)("h2",{children:"Choose a difficulty below to begin!"}):Object(n.jsx)("h2",{children:"Pick 2 cards!"}),null===r?Object(n.jsx)("h6",{children:" "}):Object(n.jsxs)("div",{className:"timer",children:[Object(n.jsx)("h2",{children:"Time:"}),Object(n.jsx)(C.a,{className:"CountUp1",end:2e3,duration:2e4})]})]}),Object(n.jsx)("div",{children:null===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{onClick:function(){return d(12)},children:"Easy"}),Object(n.jsx)("button",{onClick:function(){return d(18)},children:"Medium"}),Object(n.jsx)("button",{onClick:function(){return d(24)},children:"Hard"})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("button",{onClick:function(){return d(null)},children:"Restart"})})})]}),r?Object(n.jsx)(M,{options:r,setOptions:d,highScore:h,setHighScore:m}):Object(n.jsx)("h2",{children:" "})]})},B=function(e){var t=e.setPageStatus;return Object(n.jsxs)("div",{className:"about",children:[Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"home-button",onClick:function(){return t(0)},children:Object(n.jsx)("img",{className:"home-pic",src:b,alt:"Home Button"})})}),Object(n.jsxs)("div",{className:"logo-title-div",children:[Object(n.jsx)("h1",{className:"logo-title",children:"EduMemory"}),Object(n.jsx)("img",{className:"brain-logo",alt:"EduMemory logo",src:l})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"About Page"}),Object(n.jsx)("p",{children:"About page here."})]})]})},F=function(e){var t=e.setPageStatus;return Object(n.jsxs)("div",{className:"tutorial",children:[Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){return t(0)},className:"home-button",children:Object(n.jsx)("img",{className:"home-pic",src:b,alt:"Home Button"})})}),Object(n.jsxs)("div",{className:"logo-title-div",children:[Object(n.jsx)("h1",{className:"logo-title",children:"EduMemory"}),Object(n.jsx)("img",{className:"brain-logo",alt:"EduMemory logo",src:l})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"How do you play?"}),Object(n.jsxs)("p",{children:["When you press play you will get 24 cards face down. ",Object(n.jsx)("br",{})," Take a wild guess! Click on any card and make sure to remember what is on the other side of the card. ",Object(n.jsx)("br",{})," Each card has a pair that goes with it, try to flip both cards in one turn. ",Object(n.jsx)("br",{})," At the end of the game you will get a score, Easy starts at 100 points and each turn you lose 2 points. ",Object(n.jsx)("br",{})," Medium starts at 115, and Hard starts at 130 points, the less amount of turns it takes, the better the score!"]})]})]})},H=(c(21),c(4));function T(e){return e&&e<768?"useMobileVersion":"useDesktopVersion"}var A=function(){var e="object"===typeof window,t=Object(a.useState)(e?T(window.innerWidth):void 0),c=Object(o.a)(t,2),n=c[0],i=c[1];return Object(a.useEffect)((function(){function t(){i(T(window.innerWidth))}if(e)return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[e,i]),n};var J=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),c=t[0],i=t[1];return A(),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("section",{children:function(){switch(c){case 1:return Object(n.jsx)(H.a,{exitBeforeEnter:!0,children:Object(n.jsx)(H.b.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},children:Object(n.jsx)(P,{pageStatus:c,setPageStatus:i})})});case 2:return Object(n.jsx)(H.a,{exitBeforeEnter:!0,children:Object(n.jsx)(H.b.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},children:Object(n.jsx)(F,{pageStatus:c,setPageStatus:i})})});case 3:return Object(n.jsx)(H.a,{exitBeforeEnter:!0,children:Object(n.jsx)(H.b.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},children:Object(n.jsx)(B,{pageStatus:c,setPageStatus:i})})});default:return Object(n.jsx)(d,{pageStatus:c,setPageStatus:i})}}()})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(J,{})}),document.getElementById("root")),L()}},[[22,1,2]]]);
//# sourceMappingURL=main.b88b256d.chunk.js.map