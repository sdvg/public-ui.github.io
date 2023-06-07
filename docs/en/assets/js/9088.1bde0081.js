"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9088],{12472:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(50959),r=a(45924),n=a(24973),o=a(73416),s=a(90170),i=a(65939);const c={sidebar:"sidebar_wk6A",sidebarItemTitle:"sidebarItemTitle_vj0P",sidebarItemList:"sidebarItemList_sDiX",sidebarItem:"sidebarItem_Bg7p",sidebarItemLink:"sidebarItemLink_bZEu",sidebarItemLinkActive:"sidebarItemLinkActive_E8vg"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(77187);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return l.createElement(n.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},38729:(e,t,a)=>{a.d(t,{Z:()=>A});var l=a(50959),r=a(45924),n=a(64160),o=a(39549);function s(e){let{children:t,className:a}=e;const{frontMatter:r,assets:s}=(0,n.C)(),{withBaseUrl:i}=(0,o.C)(),c=s.image??r.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(90170);const c={title:"title_L_MB"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,n.C)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,r.Z)(c.title,t),itemProp:"headline"},o?m:l.createElement(i.Z,{itemProp:"url",to:s},m))}var u=a(65939),d=a(73370);const g={container:"container_z5gp"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:o,formattedDate:s,readingTime:i}=a;return l.createElement("div",{className:(0,r.Z)(g.container,"margin-vert--md",t)},l.createElement(h,{date:o,formattedDate:s}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:i})))}function f(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:n,title:o,url:s,imageURL:i,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return l.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},i&&l.createElement(f,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:n})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const P={authorCol:"authorCol_lBdA",imageOnlyAuthorRow:"imageOnlyAuthorRow_Ul51",imageOnlyAuthorCol:"imageOnlyAuthorCol_caDo"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,n.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",s?P.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!s&&"col col--6",s?P.imageOnlyAuthorCol:P.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function _(){return l.createElement("header",null,l.createElement(m,null),l.createElement(b,null),l.createElement(N,null))}var k=a(55994),Z=a(30122);function I(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,n.C)();return l.createElement("div",{id:o?k.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody"},l.createElement(Z.Z,null,t))}var C=a(97302),w=a(56323),T=a(15882);function y(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.Z,(0,T.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(y,null))}const L={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_uXaV"};function B(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,c=!t&&i,m=a.length>0;return m||c||s?l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&L.blogPostFooterDetailsFull)},m&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":c})},l.createElement(w.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(C.Z,{editUrl:s})),c&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":m})},l.createElement(F,{blogPostTitle:o,to:e.permalink}))):null}function A(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,r.Z)(o,a)},l.createElement(_,null),l.createElement(I,null,t),l.createElement(B,null))}},64160:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(50959),r=a(48480);const n=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return l.createElement(n.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(n);if(null===e)throw new r.i6("BlogPostProvider");return e}},73370:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(50959),r=a(55704);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);