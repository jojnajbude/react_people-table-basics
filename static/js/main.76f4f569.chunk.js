(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(9),s=(c(33),c(34),c(3)),r=(c(35),c(0)),j=c(13),i=c.n(j),l=c(2),o=function(e){var t=e.to,c=e.text;return Object(l.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:c})},b=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(o,{to:"../",text:"Home"}),Object(l.jsx)(o,{to:"../people",text:"People"})]})})})},d=c(4),h=c(22),x=c(7),O=c(5);function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(37);var m=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.slug,c=e.sex,n=e.name;return Object(l.jsx)(a.b,{to:"/people/".concat(t),className:i()({"has-text-danger":"f"===c}),children:n})},f=function(e){var t=e.peopleList,c=Object(s.o)().selectedSlug,n=void 0===c?0:c;return Object(l.jsx)("tbody",{children:t.map((function(e){var t=e.name,c=e.sex,a=e.born,s=e.died,r=e.fatherName,j=e.motherName,o=e.mother,b=e.father,d=e.slug;return Object(l.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":d===n}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(p,{slug:d,name:t,sex:c})}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:o?Object(l.jsx)(p,{slug:o.slug,name:o.name,sex:o.sex}):j||"-"}),Object(l.jsx)("td",{children:b?Object(l.jsx)(p,{slug:b.slug,name:b.name,sex:b.sex}):r||"-"})]},d)}))})},v=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(O.a)(a,2),j=s[0],i=s[1],o=Object(r.useState)(!1),b=Object(O.a)(o,2),p=b[0],v=b[1],g=function(){var e=Object(x.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,u();case 4:t=e.sent,c=t.map((function(e){var c=t.find((function(t){return t.name===e.motherName})),n=t.find((function(t){return t.name===e.fatherName}));return Object(h.a)(Object(h.a)({},e),{},{mother:c,father:n})})),n(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i(!0);case 12:v(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){g()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[p&&Object(l.jsx)(m,{}),j&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!p&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!p&&Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)(f,{peopleList:c})]})]})})]})},g=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(b,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home Page"})}),Object(l.jsx)(s.b,{path:"home",element:Object(l.jsx)(s.a,{to:"/",replace:!0})}),Object(l.jsxs)(s.b,{path:"people",children:[Object(l.jsx)(s.b,{index:!0,element:Object(l.jsx)(v,{})}),Object(l.jsx)(s.b,{path:":selectedSlug",element:Object(l.jsx)(v,{})})]}),Object(l.jsx)(s.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(g,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.76f4f569.chunk.js.map