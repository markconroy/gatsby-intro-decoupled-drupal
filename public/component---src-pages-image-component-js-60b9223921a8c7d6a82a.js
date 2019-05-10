(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"imagePageQuery",function(){return u});var n=a(0),i=a.n(n),r=a(159),s=a(163),l=a(171),o=a.n(l),c=a(164);t.default=function(e){return i.a.createElement(s.a,null,i.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"Image Component - OOOH, we added props!"),i.a.createElement("p",null,"The Gatsby ","<Image>"," component is a really powerful image solution."),i.a.createElement("p",null,"Built-in, it comes with:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Responsive Images"),i.a.createElement("li",null,"Lazy Loading"),i.a.createElement("li",null,"Image Optimisation"),i.a.createElement("li",null,"Blur-up technique so pages don't jump as images load")),i.a.createElement("p",null,"To use it:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Place your image(s) into the ",i.a.createElement("strong",null,"src/images")," directory"),i.a.createElement("li",null,"import the Image component at the top of your file"),i.a.createElement("li",null,"Add a GraphQL Query to the component you want to place the image in"),i.a.createElement("li",null,"Add the image using the ","<Image"," component")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("p",null,"This image is 4.2MB in the repo. Gatsby renders it as 134kb. WIN!"),i.a.createElement(o.a,{fluid:e.data.imageAthens.childImageSharp.fluid})),i.a.createElement("li",null,i.a.createElement("p",null,"This image is 4.6MB in the repo. Gatsby renders it as 91kb. ANOTHER WIN!"),i.a.createElement(o.a,{fluid:e.data.imageBerlin.childImageSharp.fluid}))),i.a.createElement(r.a,{to:"/"},"Go back to the homepage"))};var u="2585099259"},159:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),i=a.n(n),r=a(4),s=a.n(r),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(160);var c=i.a.createContext({}),u=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},160:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"GatsbyJS Intro"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),s=a.n(r),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,a){"use strict";var n=a(161),i=a(0),r=a.n(i),s=a(4),l=a.n(s),o=a(159),c=(a(166),function(){var e=document.querySelector(".header .menu__items");e.classList.toggle("menu__items--expanded"),e.classList.toggle("menu__items--collapsed")}),u=function(e){return r.a.createElement("nav",{className:e.menuClass},r.a.createElement("button",{className:"menu__toggle",onClick:c},"Menu ",r.a.createElement("span",{className:"menu__toggle-icon"},"+")),r.a.createElement("ul",{className:"menu__items menu__items--expanded"},r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/",className:"menu__link",activeClassName:"menu__link--active"},"Home")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/part-2",className:"menu__link",activeClassName:"menu__link--active"},"Part 2")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/part-3",className:"menu__link",activeClassName:"menu__link--active"},"Part 3")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/part-4",className:"menu__link",activeClassName:"menu__link--active"},"Part 4")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/link-component/",className:"menu__link",activeClassName:"menu__link--active"},"Link Component")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/image-component/",className:"menu__link",activeClassName:"menu__link--active"},"Image Component")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/whats-interesting/",className:"menu__link",activeClassName:"menu__link--active"},"What's Interesting?")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/menu-component/",className:"menu__link",activeClassName:"menu__link--active"},"Menu Component")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/typography/",className:"menu__link",activeClassName:"menu__link--active"},"Typography.JS")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/styled-components/",className:"menu__link",activeClassName:"menu__link--active"},"Styled Components")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(o.a,{to:"/articles/",className:"menu__link",activeClassName:"menu__link--active",partiallyActive:!0},"Articles"))))},d=(a(167),function(e){var t=e.siteTitle;return r.a.createElement("header",{className:"header bg-grey--lightest"},r.a.createElement("div",{className:"layout-contained padding-horizontal"},r.a.createElement(o.a,{to:"/",className:"header__logo",rel:"home"},t),r.a.createElement(u,{menuClass:"menu menu--light-bg menu--is-mobile"})))});d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var m=d,f=(a(168),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"layout-contained padding-horizontal"},r.a.createElement(u,{menuClass:"menu menu--dark-bg menu--footer menu--is-not-mobile"}),"© ",(new Date).getFullYear(),", @markconroy| | Built with ",r.a.createElement("a",{className:"footer__link",href:"https://www.gatsbyjs.org"},"Gatsby")))}),p=(a(169),function(e){var t=e.children;return r.a.createElement(o.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"website-container"},r.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",{className:"main-content"},r.a.createElement("div",{className:"layout-contained padding-horizontal"},t)),r.a.createElement(f,null)))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p},164:function(e,t,a){"use strict";var n=a(165),i=a(0),r=a.n(i),s=a(4),l=a.n(s),o=a(170),c=a.n(o);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,l=e.title,o=n.data.site,u=t||o.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},165:function(e){e.exports={data:{site:{siteMetadata:{title:"GatsbyJS Intro",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@markconroy"}}}}},171:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var i,r=n(a(7)),s=n(a(35)),l=n(a(74)),o=n(a(75)),c=n(a(0)),u=n(a(4)),d=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m=Object.create({}),f=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+r+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,s=e.onLoad,u=e.onError,d=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:n,src:i},d,{onLoad:s,onError:u,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!1,r=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:r,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,m=void 0===u?{}:u,f=e.placeholderClassName,p=e.fluid,h=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,_=e.Tag,v=e.itemProp,w=this.state.imgLoaded||!1===this.state.fadeIn,N=!0===this.state.fadeIn&&!this.state.imgCached,S=(0,o.default)({opacity:w?1:0,transition:N?"opacity "+b+"ms":"none"},l),k="boolean"==typeof E?"lightgray":E,I={transitionDelay:b+"ms"},L=(0,o.default)({opacity:this.state.imgLoaded?0:1},N&&I,l,m),C={title:t,alt:this.state.isVisible?"":a,style:L,className:f};if(p){var R=p;return c.default.createElement(_,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(_,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),k&&c.default.createElement(_,{title:t,style:(0,o.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&I)}),R.base64&&c.default.createElement(y,(0,o.default)({src:R.base64},C)),R.tracedSVG&&c.default.createElement(y,(0,o.default)({src:R.tracedSVG},C)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},R))}}))}if(h){var T=h,O=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},r);return"inherit"===r.display&&delete O.display,c.default.createElement(_,{className:(n||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},k&&c.default.createElement(_,{title:t,style:(0,o.default)({backgroundColor:k,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},N&&I)}),T.base64&&c.default.createElement(y,(0,o.default)({src:T.base64},C)),T.tracedSVG&&c.default.createElement(y,(0,o.default)({src:T.tracedSVG},C)),this.state.isVisible&&c.default.createElement("picture",null,T.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),c.default.createElement(y,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},T))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var b=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),_=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});E.propTypes={resolutions:b,sizes:_,fixed:b,fluid:_,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var v=E;t.default=v}}]);
//# sourceMappingURL=component---src-pages-image-component-js-60b9223921a8c7d6a82a.js.map