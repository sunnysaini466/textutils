(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),l=c(4),o=c.n(l),s=(c(9),c(2)),r=(c(10),c(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.toggleMode," bg-").concat(e.toggleMode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.toggleMode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.enableToggleMode}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:e.btnText})]})]})]})})}function d(e){var t=Object(a.useState)(""),c=Object(s.a)(t,2),n=c[0],l=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.toggleMode?"white":"black"},children:[Object(r.jsx)("h3",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",onChange:function(e){console.log("handle on change clicked"),l(e.target.value)},value:n,id:"myBox",rows:"20",style:{backgroundColor:"dark"===e.toggleMode?"#2c373f":"white",color:"dark"===e.toggleMode?"white":"black"}})}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("handle up button clicked");var t=n.toUpperCase();l(t),e.showAlert("Text is converted to upper case","success")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){console.log("handle lo button clicked");var t=n.toLowerCase();l(t),e.showAlert("Text is converted to lower case","success")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{className:"btn btn-warning mx-1",onClick:function(){console.log("handle handleCapitalizedClick button clicked");var e=n.split(" ").map((function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" ");l(e)},children:"Convert to Capitalized"}),Object(r.jsx)("button",{className:"btn btn-danger mx-1",onClick:function(){console.log("handle handleCLRClick button clicked");l(""),e.showAlert("Text is cleared","success")},children:"Clear Text"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("handle handleCopy button clicked");var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text has been copied.","success")},children:"Copy Text"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.split(/[ ]+/);l(t.join(" ")),e.showAlert("Extra spaces are removed from text.","success")},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.toggleMode?"white":"black"},children:[Object(r.jsx)("h2",{children:"My Text Summary"}),Object(r.jsxs)("p",{children:[n.length," Characters | ",n.trim().replace("/s+/gi"," ").split(" ").length," Words"]}),Object(r.jsxs)("p",{children:[.008*n.split(" ").length," Minutes to read"]}),Object(r.jsx)("h3",{children:"Preview"}),Object(r.jsx)("p",{children:n.length>0?n:"Enter your to preview here."})]})]})}function b(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type),role:"alert",children:[Object(r.jsx)("strong",{children:e.alert.type})," ",e.alert.message]})}i.defaultProps={title:"Set Title Here",contactUs:"My Contact"};var h=function(){var e=Object(a.useState)("light"),t=Object(s.a)(e,2),c=t[0],n=t[1],l=Object(a.useState)("Enable Dark Mode"),o=Object(s.a)(l,2),h=o[0],u=o[1],j=Object(a.useState)("initialState"),g=Object(s.a)(j,2),x=g[0],m=g[1],p=function(e,t){m({message:e,type:t}),setTimeout((function(){m(null)}),1500)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"TextUtils",toggleMode:c,enableToggleMode:function(){"light"===c?(n("dark"),u("Disable Dark Mode"),document.body.style.backgroundColor="#042743",p("Dark Mode is enabled.","success"),document.title="Textutils - Dark Mode"):(n("light"),u("Enable Dark Mode"),document.body.style.backgroundColor="white",p("Dark Mode is disabled.","success"),document.title="Textutils - Light Mode")},btnText:h}),Object(r.jsx)(b,{alert:x}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)(d,{heading:"My Textarea",toggleMode:c,showAlert:p})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,l=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),l(e),o(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.70f8e61d.chunk.js.map