(this["webpackJsonptik-tok-clone"]=this["webpackJsonptik-tok-clone"]||[]).push([[0],{27:function(e,t,a){e.exports=a(53)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(14),c=a.n(o),i=(a(32),a(9)),s=(a(33),a(19)),l=a.n(s),m=a(18);var u=function(e){var t=e.channel,a=e.description,n=e.song;return r.a.createElement("div",{className:"videoFooter"},r.a.createElement("div",{className:"videoFooter__text"},r.a.createElement("h3",null,"@",t),r.a.createElement("p",null,a),r.a.createElement("div",{className:"videoFooter__ticker"},r.a.createElement(l.a,{className:"videoFooter__icon"}),r.a.createElement(m.a,{mode:"smooth"},(function(e){e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n))})))),r.a.createElement("img",{className:"videoFooter__record",src:"https://static.thenounproject.com/png/934821-200.png",alt:""}))},d=(a(39),a(21)),p=a.n(d),v=a(22),f=a.n(v),E=a(23),b=a.n(E),g=a(24),h=a.n(g);var k=function(e){var t=e.likes,a=e.shares,o=e.messages,c=Object(n.useState)(!1),s=Object(i.a)(c,2),l=s[0],m=s[1];return r.a.createElement("div",{className:"videoSidebar"},r.a.createElement("div",{className:"videoSidebar__button"},l?r.a.createElement(p.a,{fontSize:"large",onClick:function(e){return m(!1)}}):r.a.createElement(f.a,{fontSize:"large",onClick:function(e){return m(!0)}}),r.a.createElement("p",null,l?t+1:t)),r.a.createElement("div",{className:"videoSidebar__button"},r.a.createElement(b.a,{fontSize:"large"}),r.a.createElement("p",null,o)),r.a.createElement("div",{className:"videoSidebar__button"},r.a.createElement(h.a,{fontSize:"large"}),r.a.createElement("p",null,a)))};a(40);var S=function(e){var t=e.url,a=e.channel,o=e.description,c=e.song,s=e.likes,l=e.messages,m=e.shares,d=Object(n.useState)(!1),p=Object(i.a)(d,2),v=p[0],f=p[1],E=Object(n.useRef)(null);return r.a.createElement("div",{className:"video"},r.a.createElement("video",{className:"video__player",loop:!0,onClick:function(){v?(E.current.pause(),f(!1)):(E.current.play(),f(!0))},ref:E,src:t}),r.a.createElement(u,{channel:a,description:o,song:c}),r.a.createElement(k,{likes:s,messages:l,shares:m}))},_=a(25),N=a.n(_).a.initializeApp({apiKey:"AIzaSyBqvYCcZWKen2EZqgVo3j2jKOj4-HeBBSU",authDomain:"tiktok-b4edb.firebaseapp.com",projectId:"tiktok-b4edb",storageBucket:"tiktok-b4edb.appspot.com",messagingSenderId:"760280721762",appId:"1:760280721762:web:830538edb93fcd52efa43b",measurementId:"G-S44BSFTZNK"}).firestore();a(51);var j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){N.collection("videos").onSnapshot((function(e){return o(e.docs.map((function(e){return e.data()})))}))}),[]),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__videos"},a.map((function(e){var t=e.url,a=e.channel,n=e.description,o=e.song,c=e.likes,i=e.messages,s=e.shares;return r.a.createElement(S,{url:t,channel:a,song:o,likes:c,messages:i,description:n,shares:s})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.7ecb013a.chunk.js.map