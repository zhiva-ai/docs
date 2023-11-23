"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[556],{1622:function(e,n,t){t.d(n,{W:function(){return s}});var r=t(1880),i=t(7294),u=t(8348),a=t(7906);var l,o=t(8392),c=(0,u.ZP)("div")(l||(l=(0,r.Z)(["\n  padding: ","px 0;\n\n  &:last-child {\n    min-height: calc(100vh + 1px);\n  }\n\n  & > &:last-child {\n    min-height: initial;\n  }\n\n  "," {\n    padding: 0;\n  }\n  ","\n"])),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.breakpoints.down("md")}),(function(e){return e.underlined?"\n    position: relative;\n\n    &:not(:last-of-type):after {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      display: block;\n      content: '';\n      border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    }\n  ":""})),s=function(e){var n=e.id,t=e.underlined,r=e.children,u=(0,i.useRef)(),l=(0,i.useContext)(o.kH),s=(l[0],l[1]),m=function(e,n){var t=(0,i.useState)(!1),r=t[0],u=t[1];if(!(0,a.j)())return!1;var l=new IntersectionObserver((function(e){var t=e[0];u(t.isIntersecting),n&&n(t.isIntersecting)}));return(0,i.useEffect)((function(){return l.observe(e.current),function(){l.disconnect()}}),[]),r}(u,(function(){}));return(0,i.useEffect)((function(){s(m?{type:o.je.ADD_VISIBLE_ELEMENT,value:n,field:null}:{type:o.je.REMOVE_VISIBLE_ELEMENT,value:n,field:null})}),[m]),i.createElement(c,{id:n,underlined:t,ref:u},r)}},7385:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(7294),i=t(2585),u=t(2476),a=t(1622),l=t(1533),o=t(3205);function c(e){var n,t=e.item;switch(t.type){case"group":n=null;break;case"tag":case"section":default:n=r.createElement(l.Z,{item:t});break;case"operation":n=r.createElement(o.Z,{item:t})}return r.createElement(r.Fragment,null,null!=n&&r.createElement(a.W,{id:t.urlId,underlined:"operation"===t.type},n),t.items&&r.createElement(s,{items:t.items}))}function s(e){var n=e.items;return 0===n.length?null:r.createElement(r.Fragment,null,n.map((function(e){return r.createElement(c,{key:e.id,item:e})})))}function m(e){var n=e.selectedGroup,t=e.openApiStore,i=t.spec["x-tagGroups"].filter((function(e){return e.slug===n}));return r.createElement(r.Fragment,null,i.map((function(e){return r.createElement(r.Fragment,{key:"group-"+e.slug},e.tags.map((function(e){return r.createElement(r.Fragment,{key:"tag-"+e},r.createElement(l.Z,{item:t.items[e]}),r.createElement(s,{items:t.items[e].items}))})),null!=t.items[e.name]&&r.createElement(s,{items:t.items[e.name].items}))})),";")}var p=t(1446),d=t(4434);function f(e){var n,t=e.data,a=e.pageContext,l=t.openapiYaml,o=t.allOpenapiYaml,c=t.site.siteMetadata.categories,s=(0,d.C9)(o.nodes.map((function(e){return e.info.version}))),f=new u.fC({spec:JSON.parse(l.spec),versionSlug:l.info.version===s?"latest":l.slug}),g=null==l||null===(n=l.x_tagGroups)||void 0===n?void 0:n.find((function(e){return e.slug===a.group})),E=c.find((function(e){return e.key===(null==g?void 0:g.section)}));return r.createElement(i.Z,{selectedVersion:l.slug,selectedTagGroup:a.group,openApiStore:f},r.createElement(r.Fragment,null,r.createElement(p.Z,{title:g.name+" - "+E.name+" - v"+l.info.version}),r.createElement(m,{selectedGroup:a.group,openApiStore:f})))}}}]);
//# sourceMappingURL=component---src-templates-page-tag-group-tsx-b59feb6720ae0137a85c.js.map