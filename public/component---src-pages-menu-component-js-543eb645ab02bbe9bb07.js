(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(159),r=a(163),s=a(164);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(s.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"Menu Component"),i.a.createElement("p",null,"The menu component is a good example of how you can create a component once in Gatsby and reuse it other places. We can even change how it looks and functions by adding attributes to it via props."),i.a.createElement("p",null,"In the header we added props a light background and a mobile navigation ",i.a.createElement("br",null),i.a.createElement("strong",null,"<Menu menuClass={'menu menu--light-bg menu--is-mobile'} />")),i.a.createElement("p",null,"In the footer we added props a dark background and no change for mobile navigation ",i.a.createElement("br",null),i.a.createElement("strong",null,"<Menu menuClass={'menu menu--dark-bg menu--is-not-mobile'} />")),i.a.createElement("p",null,"Another thing that can be a little tricky with menus is setting an active class on the menu item for the current page, such as /about-us (or parent of the current page, such as /about-us/team). This is easily achieved in Gatsby by adding a prop to say what class acts as the active one. In our case, we set ",i.a.createElement("strong",null,'activeClassName="menu__link--active"')),i.a.createElement(l.a,{to:"/"},"Go back to the homepage"))}},159:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),i=a.n(n),l=a(4),r=a.n(l),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(160);var m=i.a.createContext({}),o=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},160:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"GatsbyJS Intro"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),l=a(4),r=a.n(l),s=a(55),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=m},163:function(e,t,a){"use strict";var n=a(161),i=a(0),l=a.n(i),r=a(4),s=a.n(r),c=a(159),m=(a(166),function(){var e=document.querySelector(".header .menu__items");e.classList.toggle("menu__items--expanded"),e.classList.toggle("menu__items--collapsed")}),o=function(e){return l.a.createElement("nav",{className:e.menuClass},l.a.createElement("button",{className:"menu__toggle",onClick:m},"Menu ",l.a.createElement("span",{className:"menu__toggle-icon"},"+")),l.a.createElement("ul",{className:"menu__items menu__items--expanded"},l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/",className:"menu__link",activeClassName:"menu__link--active"},"Home")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/part-2",className:"menu__link",activeClassName:"menu__link--active"},"Part 2")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/part-3",className:"menu__link",activeClassName:"menu__link--active"},"Part 3")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/part-4",className:"menu__link",activeClassName:"menu__link--active"},"Part 4")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/link-component/",className:"menu__link",activeClassName:"menu__link--active"},"Link Component")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/image-component/",className:"menu__link",activeClassName:"menu__link--active"},"Image Component")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/whats-interesting/",className:"menu__link",activeClassName:"menu__link--active"},"What's Interesting?")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/menu-component/",className:"menu__link",activeClassName:"menu__link--active"},"Menu Component")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/typography/",className:"menu__link",activeClassName:"menu__link--active"},"Typography.JS")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/styled-components/",className:"menu__link",activeClassName:"menu__link--active"},"Styled Components")),l.a.createElement("li",{className:"menu__item"},l.a.createElement(c.a,{to:"/articles/",className:"menu__link",activeClassName:"menu__link--active",partiallyActive:!0},"Articles"))))},u=(a(167),function(e){var t=e.siteTitle;return l.a.createElement("header",{className:"header bg-grey--lightest"},l.a.createElement("div",{className:"layout-contained padding-horizontal"},l.a.createElement(c.a,{to:"/",className:"header__logo",rel:"home"},t),l.a.createElement(o,{menuClass:"menu menu--light-bg menu--is-mobile"})))});u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var d=u,p=(a(168),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"layout-contained padding-horizontal"},l.a.createElement(o,{menuClass:"menu menu--dark-bg menu--footer menu--is-not-mobile"}),"© ",(new Date).getFullYear(),", @markconroy| | Built with ",l.a.createElement("a",{className:"footer__link",href:"https://www.gatsbyjs.org"},"Gatsby")))}),_=(a(169),function(e){var t=e.children;return l.a.createElement(c.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"website-container"},l.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",{className:"main-content"},l.a.createElement("div",{className:"layout-contained padding-horizontal"},t)),l.a.createElement(p,null)))},data:n})});_.propTypes={children:s.a.node.isRequired};t.a=_},164:function(e,t,a){"use strict";var n=a(165),i=a(0),l=a.n(i),r=a(4),s=a.n(r),c=a(170),m=a.n(c);function o(e){var t=e.description,a=e.lang,i=e.meta,r=e.keywords,s=e.title,c=n.data.site,o=t||c.siteMetadata.description;return l.a.createElement(m.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=o},165:function(e){e.exports={data:{site:{siteMetadata:{title:"GatsbyJS Intro",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@markconroy"}}}}}}]);
//# sourceMappingURL=component---src-pages-menu-component-js-543eb645ab02bbe9bb07.js.map