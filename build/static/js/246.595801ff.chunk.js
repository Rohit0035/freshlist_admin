(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[246],{2312:function(e,a,t){"use strict";t.r(a),t.d(a,"WebsitePdf",(function(){return y}));var n=t(11),s=t(12),r=t(14),o=t(13),l=t(1),i=t.n(l),c=t(823),d=t(824),u=t(825),p=t(826),f=t(836),b=t(821),m=t(822),h=t(835),g=t(832),v=t(199),O=t(868),y=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(c.a,null,i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Website PDF Upload")),i.a.createElement(p.a,null,i.a.createElement(f.a,null,i.a.createElement(b.a,{className:"mb-2"},i.a.createElement(m.a,null,i.a.createElement(h.a,{className:"mb-1"},"Upoad PDF"),i.a.createElement(g.a,{type:"file",placeholder:"Upload Pdf"}))),i.a.createElement(b.a,null,i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add New PDF")))),i.a.createElement(O.a,{dark:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Uploaded Pdf"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"row"},"1"),i.a.createElement("td",null,"Mark"),i.a.createElement("td",null,"Otto"))))))}}]),t}(l.Component);a.default=y},832:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(17),o=t(19),l=t(1),i=t.n(l),c=t(2),d=t.n(c),u=t(5),p=t.n(u),f=t(4),b=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,l=e.valid,c=e.invalid,d=e.tag,u=e.addon,m=e.plaintext,h=e.innerRef,g=Object(s.a)(e,b),v=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),y=d||("select"===r||"textarea"===r?r:"input"),j="form-control";m?(j+="-plaintext",y=d||"input"):"file"===r?j+="-file":"range"===r?j+="-range":v&&(j=u?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var E=Object(f.mapToCssModules)(p()(a,c&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,j),t);return("input"===y||d&&"function"===typeof d)&&(g.type=r),g.children&&!m&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":c}))},a}(i.a.Component);h.propTypes=m,h.defaultProps={type:"text"},a.a=h},835:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(1),o=t.n(r),l=t(2),i=t.n(l),c=t(5),d=t.n(c),u=t(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],f=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),m={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,i=e.tag,c=e.check,f=e.size,b=e.for,m=Object(s.a)(e,p),h=[];l.forEach((function(a,n){var s=e[a];if(delete m[a],s||""===s){var r,o=!n;if(Object(u.isObject)(s)){var l,i=o?"-":"-"+a+"-";r=g(o,a,s.size),h.push(Object(u.mapToCssModules)(d()(((l={})[r]=s.size||""===s.size,l["order"+i+s.order]=s.order||0===s.order,l["offset"+i+s.offset]=s.offset||0===s.offset,l))),t)}else r=g(o,a,s),h.push(r)}}));var v=Object(u.mapToCssModules)(d()(a,!!r&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),t);return o.a.createElement(i,Object(n.a)({htmlFor:b},m,{className:v}))};v.propTypes=m,v.defaultProps=h,a.a=v},836:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(17),o=t(19),l=t(1),i=t.n(l),c=t(2),d=t.n(c),u=t(5),p=t.n(u),f=t(4),b=["className","cssModule","inline","tag","innerRef"],m={children:d.a.node,inline:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,l=e.innerRef,c=Object(s.a)(e,b),d=Object(f.mapToCssModules)(p()(a,!!r&&"form-inline"),t);return i.a.createElement(o,Object(n.a)({},c,{ref:l,className:d}))},a}(l.Component);h.propTypes=m,h.defaultProps={tag:"form"},a.a=h},868:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(1),o=t.n(r),l=t(2),i=t.n(l),c=t(5),d=t.n(c),u=t(4),p=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],f={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:u.tagPropType,responsiveTag:u.tagPropType,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},b=function(e){var a=e.className,t=e.cssModule,r=e.size,l=e.bordered,i=e.borderless,c=e.striped,f=e.dark,b=e.hover,m=e.responsive,h=e.tag,g=e.responsiveTag,v=e.innerRef,O=Object(s.a)(e,p),y=Object(u.mapToCssModules)(d()(a,"table",!!r&&"table-"+r,!!l&&"table-bordered",!!i&&"table-borderless",!!c&&"table-striped",!!f&&"table-dark",!!b&&"table-hover"),t),j=o.a.createElement(h,Object(n.a)({},O,{ref:v,className:y}));if(m){var E=Object(u.mapToCssModules)(!0===m?"table-responsive":"table-responsive-"+m,t);return o.a.createElement(g,{className:E},j)}return j};b.propTypes=f,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b}}]);
//# sourceMappingURL=246.595801ff.chunk.js.map