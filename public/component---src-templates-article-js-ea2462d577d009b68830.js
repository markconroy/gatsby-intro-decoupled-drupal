(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),i=a.n(n),s=a(163),r=a(171),l=a.n(r);t.default=function(e){var t=e.data.nodeArticle;return i.a.createElement(s.a,null,i.a.createElement(n.Fragment,null,i.a.createElement("h1",null,t.title),i.a.createElement("small",null,i.a.createElement("em",null,"Published: ",t.created)),i.a.createElement("div",{style:{maxWidth:"900px",marginBottom:"1.45rem",width:"100%"}},i.a.createElement(l.a,{fluid:t.relationships.field_image.localFile.childImageSharp.fluid})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.body.value}})))};var o="2966215696"},159:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),i=a.n(n),s=a(4),r=a.n(s),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(160);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},160:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"GatsbyJS Intro"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),s=a(4),r=a.n(s),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,a){"use strict";var n=a(161),i=a(0),s=a.n(i),r=a(4),l=a.n(r),o=a(159),c=(a(166),function(){var e=document.querySelector(".header .menu__items");e.classList.toggle("menu__items--expanded"),e.classList.toggle("menu__items--collapsed")}),d=function(e){return s.a.createElement("nav",{className:e.menuClass},s.a.createElement("button",{className:"menu__toggle",onClick:c},"Menu ",s.a.createElement("span",{className:"menu__toggle-icon"},"+")),s.a.createElement("ul",{className:"menu__items menu__items--expanded"},s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/",className:"menu__link",activeClassName:"menu__link--active"},"Home")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/part-2",className:"menu__link",activeClassName:"menu__link--active"},"Part 2")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/part-3",className:"menu__link",activeClassName:"menu__link--active"},"Part 3")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/part-4",className:"menu__link",activeClassName:"menu__link--active"},"Part 4")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/link-component/",className:"menu__link",activeClassName:"menu__link--active"},"Link Component")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/image-component/",className:"menu__link",activeClassName:"menu__link--active"},"Image Component")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/whats-interesting/",className:"menu__link",activeClassName:"menu__link--active"},"What's Interesting?")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/menu-component/",className:"menu__link",activeClassName:"menu__link--active"},"Menu Component")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/typography/",className:"menu__link",activeClassName:"menu__link--active"},"Typography.JS")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/styled-components/",className:"menu__link",activeClassName:"menu__link--active"},"Styled Components")),s.a.createElement("li",{className:"menu__item"},s.a.createElement(o.a,{to:"/articles/",className:"menu__link",activeClassName:"menu__link--active",partiallyActive:!0},"Articles"))))},u=(a(167),function(e){var t=e.siteTitle;return s.a.createElement("header",{className:"header bg-grey--lightest"},s.a.createElement("div",{className:"layout-contained padding-horizontal"},s.a.createElement(o.a,{to:"/",className:"header__logo",rel:"home"},t),s.a.createElement(d,{menuClass:"menu menu--light-bg menu--is-mobile"})))});u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var m=u,f=(a(168),function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"layout-contained padding-horizontal"},s.a.createElement(d,{menuClass:"menu menu--dark-bg menu--footer menu--is-not-mobile"}),"© ",(new Date).getFullYear(),", @markconroy| | Built with ",s.a.createElement("a",{className:"footer__link",href:"https://www.gatsbyjs.org"},"Gatsby")))}),p=(a(169),function(e){var t=e.children;return s.a.createElement(o.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"website-container"},s.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("main",{className:"main-content"},s.a.createElement("div",{className:"layout-contained padding-horizontal"},t)),s.a.createElement(f,null)))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p},171:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var i,s=n(a(7)),r=n(a(35)),l=n(a(74)),o=n(a(75)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+r+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,s=e.style,r=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:n,src:i},u,{onLoad:r,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});_.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!1,s=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:s,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,s=void 0===i?{}:i,r=e.imgStyle,l=void 0===r?{}:r,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,E=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,N=!0===this.state.fadeIn&&!this.state.imgCached,w=(0,o.default)({opacity:S?1:0,transition:N?"opacity "+y+"ms":"none"},l),k="boolean"==typeof v?"lightgray":v,L={transitionDelay:y+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},N&&L,l,m),I={title:t,alt:this.state.isVisible?"":a,style:C,className:f};if(p){var R=p;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),k&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&L)}),R.base64&&c.default.createElement(_,(0,o.default)({src:R.base64},I)),R.tracedSVG&&c.default.createElement(_,(0,o.default)({src:R.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(_,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},R))}}))}if(h){var z=h,T=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},s);return"inherit"===s.display&&delete T.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},k&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:k,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},N&&L)}),z.base64&&c.default.createElement(_,(0,o.default)({src:z.base64},I)),z.tracedSVG&&c.default.createElement(_,(0,o.default)({src:z.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(_,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},z))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),b=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:y,sizes:b,fixed:y,fluid:b,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=v;t.default=E}}]);
//# sourceMappingURL=component---src-templates-article-js-ea2462d577d009b68830.js.map