(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{140:function(e,t,a){"use strict";a.r(t);a(156);var i=a(0),r=[{link:"mailto:albert.alises@gmail.com",icon:"fas fa-2x fa-envelope"},{link:"https://www.linkedin.com/in/albertalises/",icon:"fab fa-2x fa-linkedin"},{link:"https://github.com/aalises",icon:"fab fa-2x fa-github"},{link:"https://open.spotify.com/user/ironicpsycho?si=jn5PWC-xQxCDLEmiaxCHRw",icon:"fab fa-2x fa-spotify"}];t.default=function(){return i.createElement("div",{style:{justifyContent:"center"},className:"field is-grouped is-grouped-multiline"},r.map(function(e){return i.createElement("a",{style:{margin:"0rem 0.5rem"},key:e.icon+"-medialink",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"icon is-medium media-link"},i.createElement("i",{className:""+e.icon}))}))}},145:function(e,t,a){"use strict";a.r(t);a(153),a(155);var i=a(160),r=a(0),s=a.n(r),n=a(140),o=a(4),l=a.n(o),d=(a(32),a(157),s.a.createContext({})),c=function(e){return s.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var A=a(151),u=a.n(A),f=a(154);t.default=function(e){var t=e.name,a=e.role,s=Object(f.b)({to:{opacity:1,marginTop:"0rem"},from:{opacity:0,marginTop:"1.3rem"}});return r.createElement(c,{query:"2558237336",render:function(e){return r.createElement("div",{id:"section-Header",className:"container has-text-centered"},r.createElement("div",{className:"column is-four-fifths"},r.createElement("div",{className:"columns is-vcentered reverse-column-order"},r.createElement("div",{className:"column"},r.createElement(f.a.h1,{className:"title is-size-1",style:s},t),r.createElement(f.a.h2,{style:s,className:"subtitle is-size-4 has-text-grey"},a),r.createElement(n.default,null)),r.createElement("div",{className:"column"},r.createElement("figure",{className:"image is-180x180"},r.createElement(u.a,{style:{borderRadius:"290486px"},fixed:e.file.childImageSharp.fixed}))))))},data:i})}},151:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),n=i(a(34)),o=i(a(73)),l=i(a(74)),d=i(a(0)),c=i(a(4)),A=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=A(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+o+l+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,s=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},s,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=A(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=A(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,E=e.backgroundColor,b=e.Tag,y=e.itemProp,S="boolean"==typeof E?"lightgray":E,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,u),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),B={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var R=p;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(g,(0,l.default)({src:R.base64},B)),R.tracedSVG&&d.default.createElement(g,(0,l.default)({src:R.tracedSVG},B)),S&&d.default.createElement(b,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(g,{alt:a,title:t,src:R.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},R))}}))}if(h){var j=h,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},s);return"inherit"===s.display&&delete x.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&d.default.createElement(g,(0,l.default)({src:j.base64},B)),j.tracedSVG&&d.default.createElement(g,(0,l.default)({src:j.tracedSVG},B)),S&&d.default.createElement(b,{title:t,style:{backgroundColor:S,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),d.default.createElement(g,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(d.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),y=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=E;t.default=S},152:function(e,t,a){var i=a(11),r=a(17),s=a(18),n=/"/g,o=function(e,t,a,i){var r=String(s(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},153:function(e,t,a){"use strict";a(152)("fixed",function(e){return function(){return e(this,"tt","","")}})},155:function(e,t,a){var i=a(25).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||a(19)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},156:function(e,t,a){"use strict";a(152)("link",function(e){return function(t){return e(this,"a","href",t)}})},157:function(e,t,a){var i;e.exports=(i=a(161))&&i.default||i},160:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAAB0T5pLVyUstglyDWf/8QAHRAAAgICAwEAAAAAAAAAAAAAAQMCBBESABMhI//aAAgBAQABBQJhxxkeuI9D562rDAFVRlLZ72bR+SrM1w//xAAYEQACAwAAAAAAAAAAAAAAAAABEQACEP/aAAgBAwEBPwEVCi3/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/AW3S7//EABwQAAIBBQEAAAAAAAAAAAAAAAABEQIQEiFBYf/aAAgBAQAGPwJLr0ZZzanwfRClLVsVB//EABoQAQADAQEBAAAAAAAAAAAAAAEAETEhQVH/2gAIAQEAAT8hvjrSBXR9H0h6DY5Olx59uApSeZk4JIh+zRLUUeQoNT6T/9oADAMBAAIAAwAAABD4GL3/xAAYEQEAAwEAAAAAAAAAAAAAAAABABAhMf/aAAgBAwEBPxDsEdwcr//EABgRAAMBAQAAAAAAAAAAAAAAAAABIRAx/9oACAECAQE/EOYKRq5//8QAHBABAAICAwEAAAAAAAAAAAAAAQARIUExUWGR/9oACAEBAAE/EGSAdXXsoSlL7EaUlE/KQ6jhFiGlo2PsYSt6rO4b1Uo8lPUqsDoOTnMZrIpx7EKHacuc6Z//2Q==",width:180,height:180,src:"/static/316b1ba0d7bac03ff20600f741d6633c/a7e11/me.jpg",srcSet:"/static/316b1ba0d7bac03ff20600f741d6633c/a7e11/me.jpg 1x,\n/static/316b1ba0d7bac03ff20600f741d6633c/dee67/me.jpg 1.5x,\n/static/316b1ba0d7bac03ff20600f741d6633c/a6257/me.jpg 2x,\n/static/316b1ba0d7bac03ff20600f741d6633c/450bf/me.jpg 3x"}}}}}},161:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(53),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=d}}]);
//# sourceMappingURL=component---src-pages-header-tsx-c8c27251ce67b14f3f65.js.map