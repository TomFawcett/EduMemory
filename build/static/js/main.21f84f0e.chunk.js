(this["webpackJsonpreact-memory"]=this["webpackJsonpreact-memory"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),i=c(9),s=c.n(i),o=c(3),l=c.p+"static/media/brain-2.768f7e44.svg",d=function(e){var t=e.setPageStatus;e.pageStatus;return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"EduMemory"}),Object(a.jsx)("img",{className:"brain-img",alt:"EduMemory logo",src:l})]}),Object(a.jsx)("button",{onClick:function(){return t(1)},children:"Play"}),Object(a.jsx)("button",{onClick:function(){return t(2)},children:"How To Play"}),Object(a.jsx)("button",{onClick:function(){return t(3)},children:"About"})]})},j=c(2),u=c(7),b=c.p+"static/media/home-button.eca9f8a6.svg",h=c.p+"static/media/card-1.66ab882b.png",m=c.p+"static/media/card-13.0d921a5c.png",p=c.p+"static/media/card-3.b0472f0f.png",O=c.p+"static/media/card-4.b648fda9.png",f=c.p+"static/media/card-5.0bf08e22.png",x=c.p+"static/media/card-6.1d2d1ecd.png",g=c.p+"static/media/card-7.07bde922.png",v=c.p+"static/media/card-8.c7103e77.png",y=c.p+"static/media/card-9.1135933e.png",S=c.p+"static/media/card-14.26965b23.png",N=c.p+"static/media/card-11.b25414e3.png",k=c.p+"static/media/card-12.4f0afec8.png",C=c(10),w=c.n(C),I=c.p+"static/media/CardBackBlue.d0829c51.png";function E(e){var t=e.options,c=e.setOptions,r=e.highScore,i=e.setHighScore,s=Object(n.useState)([]),l=Object(o.a)(s,2),d=l[0],u=l[1],b=Object(n.useState)(0),C=Object(o.a)(b,2),w=C[0],I=C[1],E=Object(n.useState)([]),T=Object(o.a)(E,2),P=T[0],H=T[1];if(Object(n.useEffect)((function(){for(var e=["url(".concat(h,")"),"url(".concat(m,")"),"url(".concat(p,")"),"url(".concat(O,")"),"url(".concat(f,")"),"url(".concat(x,")"),"url(".concat(g,")"),"url(".concat(v,")"),"url(".concat(y,")"),"url(".concat(S,")"),"url(".concat(N,")"),"url(".concat(k,")")],c=[],a=0;a<t/2;a++){var n={id:2*a,colorId:a,color:e[a],flipped:!1},r={id:2*a+1,colorId:a,color:e[a],flipped:!1};c.push(n),c.push(r)}var i=c.sort((function(){return Math.random()-.5}));u(i)}),[t]),Object(n.useEffect)((function(){!d.some((function(e){return!e.flipped}))&&d.length>0&&setTimeout((function(){var e,a=d.length;12===t?e=5:18===t?e=2.5:24===t&&(e=1);var n,s=Math.round(e*(.66*w-a));if((n=s<100?100-s:0)>r){i(n);var o=JSON.stringify(n);localStorage.setItem("memorygamehighscore",o)}if(window.confirm("You Win!, New Game?")){var l=d.length;c(null),setTimeout((function(){c(l)}),5)}else c(null)}),500)}),[d,w,r,t,i,c]),2===P.length)if(d[P[0]].colorId===d[P[1]].colorId){var B=Object(j.a)(d);B[P[0]].flipped=!0,B[P[1]].flipped=!0,u(B);var F=Object(j.a)(P);F.push(!1),H(F)}else{var J=Object(j.a)(P);J.push(!0),H(J)}return 0===d.length?Object(a.jsx)("div",{children:"loading..."}):Object(a.jsx)("div",{id:"cards",children:d.map((function(e,t){return Object(a.jsx)("div",{className:"card",children:Object(a.jsx)(M,{id:t,color:e.color,game:d,flippedCount:w,setFlippedCount:I,flippedIndexes:P,setFlippedIndexes:H})},t)}))})}function M(e){var t=e.id,c=e.color,r=e.game,i=e.flippedCount,s=e.setFlippedCount,l=e.flippedIndexes,d=e.setFlippedIndexes,b=Object(n.useState)(!1),h=Object(o.a)(b,2),m=h[0],p=h[1],O=Object(u.b)({opacity:m?1:0,transform:"perspective(600px) rotateX(".concat(m?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),f=O.transform,x=O.opacity;Object(n.useEffect)((function(){!0===l[2]&&l.indexOf(t)>-1?setTimeout((function(){p((function(e){return!e})),s(i+1),d([])}),1800):!1===l[2]&&0===t&&(s(i+1),d([]))}),[l]);return Object(a.jsxs)("div",{className:"hovernow",onClick:function(){if(r[t].flipped||i%3!==0){if(i%3===1&&!r[t].flipped&&l.indexOf(t)<0){p((function(e){return!e})),s(i+1);var e=Object(j.a)(l);e.push(t),d(e)}}else{p((function(e){return!e})),s(i+1);var c=Object(j.a)(l);c.push(t),d(c)}},children:[Object(a.jsx)(u.a.div,{className:"c back",style:{opacity:x.interpolate((function(e){return 1-e})),transform:f,backgroundImage:"url(".concat(I,")")}}),Object(a.jsx)(u.a.div,{className:"c front",style:{opacity:x,transform:f.interpolate((function(e){return"".concat(e," rotateX(180deg)")})),backgroundImage:c}})]})}var T=function(e){var t=e.setPageStatus,c=e.pageStatus,r=(e.flippedCount,Object(n.useState)(null)),i=Object(o.a)(r,2),s=i[0],d=i[1],j=Object(n.useState)(0),u=Object(o.a)(j,2),h=u[0],m=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("memorygamehighscore"),t=JSON.parse(e);t&&m(t)}),[]),Object(a.jsxs)("div",{className:"game ".concat(c?"active-game":""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"home-button",onClick:function(){return t(0)},children:Object(a.jsx)("img",{className:"home-pic",src:b,alt:"Home Button"})})}),Object(a.jsxs)("div",{className:"logo-title-div",children:[Object(a.jsx)("h1",{className:"logo-title",children:"EduMemory"}),Object(a.jsx)("img",{className:"brain-logo",alt:"EduMemory logo",src:l})]}),Object(a.jsx)("h2",{children:"Memory Game"}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{children:[null===s?Object(a.jsx)("h2",{children:"Choose a difficulty below to begin!"}):Object(a.jsx)("h2",{children:"Pick 2 cards!"}),null===s?Object(a.jsx)("h6",{children:" "}):Object(a.jsxs)("div",{className:"timer",children:[Object(a.jsx)("h2",{children:"Time:"}),Object(a.jsx)(w.a,{className:"CountUp1",end:2e3,duration:2e4})]})]}),Object(a.jsx)("div",{className:"difficulty",children:null===s?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){return d(12)},children:"Easy"}),Object(a.jsx)("button",{onClick:function(){return d(18)},children:"Medium"}),Object(a.jsx)("button",{onClick:function(){return d(24)},children:"Hard"})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{onClick:function(){return d(null)},children:"Restart"})})})]}),s?Object(a.jsx)(E,{options:s,setOptions:d,highScore:h,setHighScore:m}):Object(a.jsx)("h2",{children:" "})]})},P=function(e){var t=e.setPageStatus;return Object(a.jsxs)("div",{className:"about",children:[Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"home-button",onClick:function(){return t(0)},children:Object(a.jsx)("img",{className:"home-pic",src:b,alt:"Home Button"})})}),Object(a.jsxs)("div",{className:"logo-title-div",children:[Object(a.jsx)("h1",{className:"logo-title",children:"EduMemory"}),Object(a.jsx)("img",{className:"brain-logo",alt:"EduMemory logo",src:l})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"About My App"}),Object(a.jsxs)("p",{children:["Hello! My name is Tom, and this is my first ever app, ",Object(a.jsx)("br",{})," and the beginning of the creation of several more in the future! ",Object(a.jsx)("br",{})," This took a while to make and I hope you enjoy it!"]}),Object(a.jsx)("h2",{children:"Credits:"}),Object(a.jsxs)("p",{children:["I used"," ",Object(a.jsx)("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noreferrer",children:"Visual Studio Code"})," ","to write my code for this project. ",Object(a.jsx)("br",{}),"I used"," ",Object(a.jsxs)("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:[" ","GitHub"]})," ","to store and share my code.",Object(a.jsx)("br",{}),"I used"," ",Object(a.jsx)("a",{href:"https://developedbyed.com/",target:"_blank",rel:"noreferrer",children:"This Coarse"})," ","to help me learn HTML and CSS.",Object(a.jsx)("br",{}),"I used"," ",Object(a.jsx)("a",{href:"https://watchandcode.com/",target:"_blank",rel:"noreferrer",children:"This Coarse"})," ","to help me learn JavaScript. ",Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://reactjsexample.com/a-simple-memory-game-with-react-js/",target:"_blank",rel:"noreferrer",children:"This"})," ","is the memory game that I based mine off of."]})]})]})},H=function(e){var t=e.setPageStatus;return Object(a.jsxs)("div",{className:"tutorial",children:[Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return t(0)},className:"home-button",children:Object(a.jsx)("img",{className:"home-pic",src:b,alt:"Home Button"})})}),Object(a.jsxs)("div",{className:"logo-title-div",children:[Object(a.jsx)("h1",{className:"logo-title",children:"EduMemory"}),Object(a.jsx)("img",{className:"brain-logo",alt:"EduMemory logo",src:l})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"How do you play?"}),Object(a.jsxs)("p",{children:["When you press play you will get 12, 18, or 24 cards face down depending on the level you choose. ",Object(a.jsx)("br",{})," Take a wild guess! Click on any card and make sure to remember what is on the other side of the card. ",Object(a.jsx)("br",{})," Each card has a pair that goes with it, try to flip both cards in one turn. ",Object(a.jsx)("br",{})," Theres a timer as well, try to beat your last time!"]})]})]})},B=(c(21),c(4));var F=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("section",{children:function(){switch(c){case 1:return Object(a.jsx)(B.a,{exitBeforeEnter:!0,children:Object(a.jsx)(B.b.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},children:Object(a.jsx)(T,{pageStatus:c,setPageStatus:r})})});case 2:return Object(a.jsx)(B.a,{exitBeforeEnter:!0,children:Object(a.jsx)(B.b.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},children:Object(a.jsx)(H,{pageStatus:c,setPageStatus:r})})});case 3:return Object(a.jsx)(B.a,{exitBeforeEnter:!0,children:Object(a.jsx)(B.b.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},children:Object(a.jsx)(P,{pageStatus:c,setPageStatus:r})})});default:return Object(a.jsx)(d,{pageStatus:c,setPageStatus:r})}}()})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),J()}},[[22,1,2]]]);
//# sourceMappingURL=main.21f84f0e.chunk.js.map