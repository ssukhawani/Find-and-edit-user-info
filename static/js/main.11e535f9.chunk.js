(this["webpackJsonpsingle-page-app"]=this["webpackJsonpsingle-page-app"]||[]).push([[0],{22:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(23),i=n.n(a),r=n(7),j=n(10),o=n(1),u=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("span",{children:"Made by Sahil"})})},d=n(11),l={commonlink:{marginRight:"30px",fontSize:"23px",color:"white"},header:{fontSize:"50px"},linkwrap:{marginTop:"30px"}},b=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsxs)("div",{className:"links",style:l.linkwrap,children:[Object(o.jsx)(d.b,{style:l.commonlink,to:"/",children:"Home"}),Object(o.jsx)(d.b,{style:l.commonlink,to:"/user",children:"User"}),Object(o.jsx)(d.b,{style:l.commonlink,to:"/Comments",children:"Comments"})]})})},m=n(16),h=n.n(m),O=(n(22),function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{alt:"user",src:"https://robohash.org/".concat(e.id,"/?set=set2&size=180x180")}),Object(o.jsx)("h2",{children:e.user.name}),Object(o.jsx)("div",{children:e.user.email}),Object(o.jsx)("div",{children:e.user.website}),Object(o.jsx)("button",{className:"editsingle",onClick:function(){e.history.push("/edituser/".concat(e.id))},children:"Edit"})]})}),x=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),s=n[0],a=n[1],i=e.data.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"user-searchwrap",children:Object(o.jsx)("input",{onChange:function(e){a(e.target.value)},className:"searchbox",type:"search",placeholder:"Search User"})}),Object(o.jsx)("div",{className:"cardlist",children:i.map((function(t){return Object(o.jsx)(O,Object(r.a)({user:t,id:t.id},e),t.id)}))})]})},p=function(){return Object(o.jsx)("div",{children:"Comment section"})},f=n(20),v=n(14),g=function(e){var t=e.match.params.userId,n=Object(c.useState)([]),s=Object(j.a)(n,2),a=s[0],i=s[1],u=function(e){i(Object(r.a)(Object(r.a)({},a),{},Object(v.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){i({id:t,name:e.data[Number(t)-1].name,email:e.data[Number(t)-1].email,website:e.data[Number(t)-1].website})}),[]);return Object(o.jsxs)("div",{className:"edituser",children:[Object(o.jsx)("input",{className:"edit",onChange:function(e){return u(e)},value:a.name,name:"name"}),Object(o.jsx)("input",{className:"edit",onChange:u,value:a.email,name:"email"}),Object(o.jsx)("input",{className:"edit",onChange:u,value:a.website,name:"website"}),Object(o.jsx)("button",{onClick:function(){e.setData([].concat(Object(f.a)(e.data.slice(0,Number(t)-1)),[a],Object(f.a)(e.data.slice(Number(t)-1+1)))),e.history.push("/user")},children:"Update"})]})},N=function(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsxs)(d.a,{children:[Object(o.jsx)(b,{}),Object(o.jsx)(h.a,{path:"/user",render:function(e){return Object(o.jsx)(x,Object(r.a)({data:s},e))}}),Object(o.jsx)(h.a,{path:"/comments",component:p}),Object(o.jsx)(h.a,{path:"/edituser/:userId",render:function(e){return Object(o.jsx)(g,Object(r.a)({data:s,setData:a},e))}})]})}),Object(o.jsx)(u,{})]})})};var w=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(N,{})})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.11e535f9.chunk.js.map