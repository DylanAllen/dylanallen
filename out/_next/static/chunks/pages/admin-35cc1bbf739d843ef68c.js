_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{reNV:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n("zP5P")}])},zP5P:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("apO0"),c=n("ACV0"),s=n("q1tI"),o=n.n(s),i=n("cha2"),u=n("Jgta"),l=(n("5x/H"),n("20a2")),p=n("o0o1"),d=n.n(p),m=n("rePB"),f=n("HaE+"),j=n("aj3o"),b=n("jCe7");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=function(e){return o.a.createElement(b.a,O({viewBox:"0 0 24 24",a11yTitle:"CheckboxSelected"},e),o.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6"}))},v=n("ksn7"),x=n("YFqc"),g=n.n(x);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(){var e=Object(s.useContext)(i.Context),t=Object(s.useState)([]),n=t[0],a=t[1],o=Object(s.useState)(0),l=o[0],p=o[1],m=u.a.firestore().collection("comments"),b=function(e){var t=e.comment;return Object(r.jsxs)("div",{className:"commentContainer",children:[Object(r.jsx)(j.a,{color:"#453762",className:"deleteComment",onClick:function(){k(t.slug,t.id)}}),"approved"!==t.status&&Object(r.jsx)(h,{color:"#453762",className:"approveComment",onClick:function(){w(t.slug,t.id)}}),Object(r.jsxs)("div",{className:"comment",children:[Object(r.jsx)("div",{className:"username",children:t.displayname}),Object(r.jsxs)("div",{className:"timestamp",children:[t.timestamp.toDate().toLocaleDateString()," ",t.timestamp.toDate().toLocaleTimeString()]}),Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("div",{className:"messagespan",children:Object(r.jsx)(v.a,{children:t.message})})}),Object(r.jsx)("div",{className:"slug",children:Object(r.jsx)(g.a,{href:"/blog/".concat(t.slug),children:Object(r.jsx)("a",{children:t.slug})})}),Object(r.jsx)("div",{className:"status",children:t.status})]})]})},O=function(){var e=Object(f.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,m.get();case 3:return n=e.sent,r=n.docs.map(function(){var e=Object(f.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,e.abrupt("return",new Promise(function(){var e=Object(f.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ref.collection("comments").get();case 2:e.sent.docs.forEach((function(e){t.push(y(y({},e.data()),{},{slug:r,id:e.id}))})),a(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=7,Promise.all(r);case 7:return a(t),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){var e;e&&e(),e=u.a.firestore(),O()}),[l]);var x=function(){var e=Object(f.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dylanallen.net".concat(n),{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var t=Object(f.a)(d.a.mark((function t(n,r){var a,c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user){t.next=16;break}return t.t0=n,t.t1=r,t.next=5,e.user.getIdToken();case 5:return t.t2=t.sent,a={slug:t.t0,postid:t.t1,token:t.t2},t.next=9,x(a,"/api/comments/approve");case 9:return c=t.sent,t.next=12,c.json();case 12:s=t.sent,200===c.status?(e.toast("Comment approved."),p(l+1)):(alert(s.message),e.toast(s.message)),t.next=17;break;case 16:alert("User not found");case 17:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(f.a)(d.a.mark((function t(n,r){var a,c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user){t.next=16;break}return t.t0=n,t.t1=r,t.next=5,e.user.getIdToken();case 5:return t.t2=t.sent,a={slug:t.t0,postid:t.t1,token:t.t2},t.next=9,x(a,"/api/comments/delete");case 9:return c=t.sent,t.next=12,c.json();case 12:s=t.sent,200===c.status?(e.toast("Comment deleted."),p(l+1)):(alert(s.message),e.toast(s.message,"error")),t.next=17;break;case 16:alert("User not found");case 17:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"commentsContainer",children:[Object(r.jsx)(c.a,{level:2,children:"Comments"}),Object(r.jsx)("div",{className:"comments",children:n?n.map((function(e,t){return Object(r.jsx)(b,{comment:e},t)})):Object(r.jsx)("div",{children:"No comments"})})]})},N=u.a.firestore;t.default=function(){var e=Object(s.useContext)(i.Context),t=Object(s.useState)(!1),n=t[0],o=t[1],u=Object(l.useRouter)();return Object(s.useEffect)((function(){e.user&&(n||N().collection("users").doc(e.user.uid).get().then((function(e){var t=e.data();t&&!0===t.admin&&o(!0)})).catch((function(e){console.error(e),u.push("/")})))})),Object(r.jsx)(a.a,{title:"Admin Dylan Allen | JavaScript Developer | Frontend Web",children:Object(r.jsx)("div",{children:n&&Object(r.jsxs)("div",{children:[Object(r.jsx)(c.a,{children:"Admin"}),Object(r.jsx)(k,{})]})})})}}},[["reNV",1,2,4,6,0,3,5,7]]]);