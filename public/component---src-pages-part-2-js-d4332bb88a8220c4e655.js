(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(163),r=a(164);t.default=function(){return l.a.createElement(i.a,null,l.a.createElement(r.a,{title:"Home",keywords:["gatsby","application","react"]}),l.a.createElement("h1",null,"What's Changed Here?"),l.a.createElement("p",null,"We've done a couple of things for this part:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Created a ","<Menu>"," component"),l.a.createElement("li",null,"Created a ","<Footer>"," component and added the menu to it"),l.a.createElement("li",null,"Edited the ","<Header"," component to add the menu to it"),l.a.createElement("li",null,"Edited the ","<Layout"," component to reflect these changes"),l.a.createElement("li",null,"Added support for SASS - just in case you like it!")),l.a.createElement("p",null,"To install sass, run ",l.a.createElement("strong",null,"npm install --save node-sass gatsby-plugin-sass"),". Then add it to your ",l.a.createElement("strong",null,"gatsby-config.js")," file as a plugin."))}},159:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),l=a.n(n),i=a(4),r=a.n(i),s=a(33),m=a.n(s);a.d(t,"a",function(){return m.a});a(160);var c=l.a.createContext({}),o=function(e){return l.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},160:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"GatsbyJS Intro"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),i=a(4),r=a.n(i),s=a(55),m=a(2),c=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,a){"use strict";var n=a(161),l=a(0),i=a.n(l),r=a(4),s=a.n(r),m=a(159),c=(a(166),function(){var e=document.querySelector(".header .menu__items");e.classList.toggle("menu__items--expanded"),e.classList.toggle("menu__items--collapsed")}),o=function(e){return i.a.createElement("nav",{className:e.menuClass},i.a.createElement("button",{className:"menu__toggle",onClick:c},"Menu ",i.a.createElement("span",{className:"menu__toggle-icon"},"+")),i.a.createElement("ul",{className:"menu__items menu__items--expanded"},i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/",className:"menu__link",activeClassName:"menu__link--active"},"Home")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/part-2",className:"menu__link",activeClassName:"menu__link--active"},"Part 2")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/part-3",className:"menu__link",activeClassName:"menu__link--active"},"Part 3")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/part-4",className:"menu__link",activeClassName:"menu__link--active"},"Part 4")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/link-component/",className:"menu__link",activeClassName:"menu__link--active"},"Link Component")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/image-component/",className:"menu__link",activeClassName:"menu__link--active"},"Image Component")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/whats-interesting/",className:"menu__link",activeClassName:"menu__link--active"},"What's Interesting?")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/menu-component/",className:"menu__link",activeClassName:"menu__link--active"},"Menu Component")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/typography/",className:"menu__link",activeClassName:"menu__link--active"},"Typography.JS")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/styled-components/",className:"menu__link",activeClassName:"menu__link--active"},"Styled Components")),i.a.createElement("li",{className:"menu__item"},i.a.createElement(m.a,{to:"/articles/",className:"menu__link",activeClassName:"menu__link--active",partiallyActive:!0},"Articles"))))},u=(a(167),function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"header bg-grey--lightest"},i.a.createElement("div",{className:"layout-contained padding-horizontal"},i.a.createElement(m.a,{to:"/",className:"header__logo",rel:"home"},t),i.a.createElement(o,{menuClass:"menu menu--light-bg menu--is-mobile"})))});u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var d=u,p=(a(168),function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"layout-contained padding-horizontal"},i.a.createElement(o,{menuClass:"menu menu--dark-bg menu--footer menu--is-not-mobile"}),"© ",(new Date).getFullYear(),", @markconroy| | Built with ",i.a.createElement("a",{className:"footer__link",href:"https://www.gatsbyjs.org"},"Gatsby")))}),_=(a(169),function(e){var t=e.children;return i.a.createElement(m.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"website-container"},i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",{className:"main-content"},i.a.createElement("div",{className:"layout-contained padding-horizontal"},t)),i.a.createElement(p,null)))},data:n})});_.propTypes={children:s.a.node.isRequired};t.a=_},164:function(e,t,a){"use strict";var n=a(165),l=a(0),i=a.n(l),r=a(4),s=a.n(r),m=a(170),c=a.n(m);function o(e){var t=e.description,a=e.lang,l=e.meta,r=e.keywords,s=e.title,m=n.data.site,o=t||m.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(l)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=o},165:function(e){e.exports={data:{site:{siteMetadata:{title:"GatsbyJS Intro",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@markconroy"}}}}}}]);
//# sourceMappingURL=component---src-pages-part-2-js-d4332bb88a8220c4e655.js.map