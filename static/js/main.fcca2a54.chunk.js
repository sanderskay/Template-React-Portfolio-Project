(this["webpackJsonptutorial-website"]=this["webpackJsonptutorial-website"]||[]).push([[0],{24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),i=c(17),n=c.n(i),l=c(15),r=(c(24),c(2)),j=["btn--primary","btn--outline","btn--test"],b=["btn--medium","btn--large"],o=function(e){var t=e.children,c=e.type,a=e.onClick,i=e.buttonStyle,n=e.buttonSize,l=j.includes(i)?i:j[0],o=b.includes(n)?n:b[0];return Object(s.jsx)(r.b,{to:"/sign-up",className:"btn-mobile",children:Object(s.jsx)("button",{className:"btn ".concat(l," ").concat(o),onClick:a,type:c,children:t})})};c(30);var d=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)(!0),j=Object(l.a)(n,2),b=j[0],d=j[1],h=function(){return i(!1)},x=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(a.useEffect)((function(){x()}),[]),window.addEventListener("resize",x),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[Object(s.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:h,children:["JULIAN SK",Object(s.jsx)("i",{class:"fab fa-typo3"})]}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return i(!c)},children:Object(s.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{to:"/",className:"nav-links",onClick:h,children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{to:"/services",className:"nav-links",onClick:h,children:"Services"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{to:"/contact",className:"nav-links",onClick:h,children:"Contact"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/sign-up",className:"nav-links-mobile",onClick:h,children:"Sign Up"})})]}),b&&Object(s.jsx)(o,{buttonStyle:"btn--outline",children:"SIGN UP"})]})})})};c(9),c(31);var h=function(){return Object(s.jsxs)("div",{className:"hero-container",children:[Object(s.jsx)("img",{src:"./images/img-9.jpg",alt:""}),Object(s.jsx)("h1",{children:"REACT"}),Object(s.jsx)("p",{children:"Template design"}),Object(s.jsxs)("div",{className:"hero-btns",children:[Object(s.jsx)(o,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(s.jsx)(o,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey"),children:"ANOTHER LINK"})]})]})};var x=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"cards__item",children:Object(s.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(s.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(s.jsx)("img",{src:e.src,alt:"Travel Image",className:"cards__item__img"})}),Object(s.jsx)("div",{className:"cards__item__info",children:Object(s.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};c(32);var m=function(){return Object(s.jsxs)("div",{className:"cards",children:[Object(s.jsx)("h1",{children:"These are Template cards"}),Object(s.jsx)("div",{className:"cards__container",children:Object(s.jsxs)("div",{className:"cards__wrapper",children:[Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(x,{src:"images/img-9.jpg",text:"Text for the card will go here.",label:"Template label",path:"/services"}),Object(s.jsx)(x,{src:"images/img-2.jpg",text:"Text for the card will go here.",label:"Template label",path:"/services"}),Object(s.jsx)(x,{src:"images/img-4.jpg",text:"Text for the card will go here.",label:"Template label",path:"/services"})]}),Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(x,{src:"images/img-5.jpg",text:"Text for the card will go here.",label:"Template label",path:"/services"}),Object(s.jsx)(x,{src:"images/img-6.jpg",text:"Text for the card will go here.",label:"Template label",path:"/services"}),Object(s.jsx)(x,{src:"images/img-7.jpg",text:"Text for the card will go here.",label:"Template label",path:"/services"})]})]})})]})};c(33);var O=function(){return Object(s.jsxs)("div",{className:"footer-container",children:[Object(s.jsxs)("section",{className:"footer-subscription",children:[Object(s.jsx)("p",{className:"footer-subscription-heading",children:"Join the Adventure newsletter to receive our best vacation deals"}),Object(s.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(s.jsx)("div",{className:"input-areas",children:Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(s.jsx)(o,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(s.jsxs)("div",{class:"footer-links",children:[Object(s.jsxs)("div",{className:"footer-link-wrapper",children:[Object(s.jsxs)("div",{class:"footer-link-items",children:[Object(s.jsx)("h2",{children:"About Us"}),Object(s.jsx)(r.b,{to:"/sign-up",children:"How it works"}),Object(s.jsx)(r.b,{to:"/",children:"Testimonials"}),Object(s.jsx)(r.b,{to:"/",children:"Careers"}),Object(s.jsx)(r.b,{to:"/",children:"Investors"}),Object(s.jsx)(r.b,{to:"/",children:"Terms of Service"})]}),Object(s.jsxs)("div",{class:"footer-link-items",children:[Object(s.jsx)("h2",{children:"Contact Us"}),Object(s.jsx)(r.b,{to:"/",children:"Contact"}),Object(s.jsx)(r.b,{to:"/",children:"Support"}),Object(s.jsx)(r.b,{to:"/",children:"Destinations"}),Object(s.jsx)(r.b,{to:"/",children:"Sponsorships"})]})]}),Object(s.jsxs)("div",{className:"footer-link-wrapper",children:[Object(s.jsxs)("div",{class:"footer-link-items",children:[Object(s.jsx)("h2",{children:"Videos"}),Object(s.jsx)(r.b,{to:"/",children:"Submit Video"}),Object(s.jsx)(r.b,{to:"/",children:"Ambassadors"}),Object(s.jsx)(r.b,{to:"/",children:"Agency"}),Object(s.jsx)(r.b,{to:"/",children:"Influencer"})]}),Object(s.jsxs)("div",{class:"footer-link-items",children:[Object(s.jsx)("h2",{children:"Social Media"}),Object(s.jsx)(r.b,{to:"/",children:"Instagram"}),Object(s.jsx)(r.b,{to:"/",children:"Facebook"}),Object(s.jsx)(r.b,{to:"/",children:"Youtube"}),Object(s.jsx)(r.b,{to:"/",children:"Twitter"})]})]})]}),Object(s.jsx)("section",{class:"social-media",children:Object(s.jsxs)("div",{class:"social-media-wrap",children:[Object(s.jsx)("div",{class:"footer-logo",children:Object(s.jsxs)(r.b,{to:"/",className:"social-logo",children:["JULIAN SK",Object(s.jsx)("i",{class:"fab fa-typo3"})]})}),Object(s.jsx)("small",{class:"website-rights",children:"JULIAN SK \xa9 2020"}),Object(s.jsxs)("div",{class:"social-icons",children:[Object(s.jsx)(r.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(s.jsx)("i",{class:"fab fa-facebook-f"})}),Object(s.jsx)(r.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(s.jsx)("i",{class:"fab fa-instagram"})}),Object(s.jsx)(r.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(s.jsx)("i",{class:"fab fa-youtube"})}),Object(s.jsx)(r.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(s.jsx)("i",{class:"fab fa-twitter"})}),Object(s.jsx)(r.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(s.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})};var u=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{}),Object(s.jsx)(m,{}),Object(s.jsx)(O,{})]})},p=c(3);function f(){return Object(s.jsx)("h1",{className:"services",children:"SERVICES"})}function g(){return Object(s.jsx)("h1",{className:"contact",children:"CONTACT"})}function v(){return Object(s.jsx)("h1",{className:"sign-up",children:"SIGN UP"})}var N=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(r.a,{children:[Object(s.jsx)(d,{}),Object(s.jsxs)(p.c,{children:[Object(s.jsx)(p.a,{path:"/",exact:!0,component:u}),Object(s.jsx)(p.a,{path:"/services",component:f}),Object(s.jsx)(p.a,{path:"/contact",component:g}),Object(s.jsx)(p.a,{path:"/sign-up",component:v})]})]})})};n.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))},9:function(e,t,c){}},[[34,1,2]]]);
//# sourceMappingURL=main.fcca2a54.chunk.js.map