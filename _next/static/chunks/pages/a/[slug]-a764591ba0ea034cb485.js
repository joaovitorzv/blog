(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[697],{4764:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(8152),r=n(1664),o=n(7294);var s=n(1059),a=n.n(s),c=n(5893),l=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,o.useState)(e),n=t[0],i=t[1],r=(0,o.useCallback)((function(){return i((function(e){return!e}))}),[]);return[n,r]}(),t=(0,i.Z)(e,2),n=t[0],s=t[1],l=(0,o.useState)(!1),d=l[0],h=l[1],u=(0,o.useState)(66),p=u[0],v=u[1];return(0,o.useEffect)((function(){var e=function(){var e=document.getElementById("navigation");return v(e?e.offsetTop:66),window.pageYOffset>=p?h(!0):window.pageYOffset<=p?h(!1):void 0};return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[]),(0,c.jsxs)("header",{className:a().header,children:[(0,c.jsxs)("h1",{children:["this is"," ",(0,c.jsx)("button",{className:a().hideLinksBtn,onClick:s,children:"@joaovitorzv"})," ","place on internet."]}),(0,c.jsxs)("nav",{id:"navigation",className:d?a().pinnedNav:"",children:[(0,c.jsx)(r.default,{href:"/",children:(0,c.jsx)("a",{children:"Home"})}),(0,c.jsxs)("div",{className:n?a().externalLink:a().hiddenLink,children:[(0,c.jsx)("a",{className:a().link,href:"https://www.github.com/joaovitorzv",target:"_blank",rel:"noopener noreferrer",children:"Github"}),(0,c.jsx)("svg",{fill:"#374151",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"14px",height:"18px",children:(0,c.jsx)("path",{d:"M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"})})]}),(0,c.jsxs)("div",{className:n?a().externalLink:a().hiddenLink,children:[(0,c.jsx)("a",{className:a().link,href:"https://www.linkedin.com/in/jo%C3%A3o-vitor-veras-165045186/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),(0,c.jsx)("svg",{fill:"#374151",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"14px",height:"18px",children:(0,c.jsx)("path",{d:"M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"})})]})]})]})}},6172:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return g}});var i=n(7294),r=n(5675),o=n(9008),s=n(1664),a=n(5660),c=n.n(a),l=n(2962),d=(n(2827),n(366),n(2356),n(3571)),h=n(4764),u=n(671),p=n.n(u),v=n(3196);var f=function(e){var t=e.src,n=e.width,i=e.height,r=t.split("/");return"https://media.graphcms.com/resize=".concat(i?"height:"+i:"","width:").concat(n,"/").concat(r[3])},x=n(5893),m=!0,g=function(e){var t=e.post;return(0,i.useEffect)((function(){c().highlightAll()}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.default,{children:[(0,x.jsx)("title",{children:t.title}),(0,x.jsx)("meta",{name:"author",content:"https://github.com/joaovitorzv"})]}),(0,x.jsx)(l.PB,{openGraph:{title:t.title,description:t.description,url:"https://joaovitorzv.github.io/post/".concat(t.slug),type:"article",article:{publishedTime:"".concat(t.date,"T03:00:00Z"),modifiedTime:"".concat(t.date,"T03:00:00Z"),expirationTime:"2030-12-21T03:00:00Z",section:"Technology",authors:["https://github.com/joaovitorzv"],tags:t.tags},images:[{url:"https://media.graphcms.com/resize=width:1920/"+t.coverImage.handle,width:1920,height:1080,alt:t.coverImageAlt}]}}),(0,x.jsxs)("main",{className:"container",children:[(0,x.jsx)(h.Z,{}),(0,x.jsxs)("section",{className:p().postHeader,children:[(0,x.jsx)("div",{className:p().postCover,children:(0,x.jsx)(r.default,{loader:f,src:t.coverImage.url,width:t.coverImage.width,height:t.coverImage.height,layout:"responsive",alt:"peak of ice mountain"})}),(0,x.jsx)("h2",{children:t.title}),(0,x.jsx)("span",{children:(0,v.p)(t.date)})]}),(0,x.jsx)("article",{id:"keep-reading",className:p().content,children:(0,x.jsx)(d.H,{content:t.content.raw,renderers:{bold:function(e){var t=e.children;return(0,x.jsx)("b",{className:"bold",children:t})},li:function(e){var t=e.children;return(0,x.jsx)("li",{className:"li",children:t})},img:function(e){var t=e.src,n=e.width,i=e.height;return(0,x.jsx)("div",{className:"img",children:(0,x.jsx)(r.default,{src:t,loader:f,height:i,width:n,layout:"intrinsic"})})},code:function(e){var t=e.children;return(0,x.jsx)("code",{className:"inlineHighlight",children:t})},code_block:function(e){var t=e.children,n=/(?<=\$)(.*?)(?=\$)/.exec(t.props.content[0].text||""),i=t.props.content[0].text.replace(/\$.*?\$\n/,"");return(0,x.jsx)("pre",{className:"blockHighlight language-".concat(n?null===n||void 0===n?void 0:n[1]:"none"),children:(0,x.jsx)("code",{children:i})})},blockquote:function(e){var t=e.children;return(0,x.jsx)("blockquote",{className:"quote",children:t})}}})}),(0,x.jsx)("div",{className:p().postFooter,children:(0,x.jsx)(s.default,{href:"/",children:"Voltar"})})]}),(0,x.jsx)("footer",{className:p().footer,children:(0,x.jsx)("span",{children:"Escrito por @joaovitorzv obrigado por ler!"})})]})}},3196:function(e,t,n){"use strict";function i(e){return new Date(e+"T03:00:00.000Z").toLocaleDateString("pt-BR",{year:"numeric",day:"2-digit",month:"long"})}n.d(t,{p:function(){return i}})},2549:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/a/[slug]",function(){return n(6172)}])},1059:function(e){e.exports={header:"Header_header__cwxka",pinnedNav:"Header_pinnedNav__3Il6M",hideLinksBtn:"Header_hideLinksBtn__1mu8E",externalLink:"Header_externalLink__1yu3I",link:"Header_link__1GkhW",hiddenLink:"Header_hiddenLink__2SCVW"}},671:function(e){e.exports={postHeader:"Post_postHeader__1kQ5G",postCover:"Post_postCover__KyTCo",footer:"Post_footer__3B1iK",content:"Post_content__2KPEW",postFooter:"Post_postFooter__1mNkv"}}},function(e){e.O(0,[540,774,888,179],(function(){return t=2549,e(e.s=t);var t}));var t=e.O();_N_E=t}]);