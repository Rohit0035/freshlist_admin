(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[207],{2180:function(e,t,a){"use strict";a.r(t),a.d(t,"AddDiscount",(function(){return y}));var n=a(11),r=a(12),s=a(14),l=a(13),c=a(1),o=a.n(c),i=a(823),u=a(821),m=a(822),d=a(199),p=a(826),f=a(836),b=a(835),h=a(832),g=(a(22),a(830),a(62)),y=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Discount")),o.a.createElement(m.a,null,o.a.createElement(g.b,{render:function(e){var t=e.history;return o.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/discount/discountList")}},"Back")}}))),o.a.createElement(p.a,null,"  ",o.a.createElement(f.a,{className:"m-1"},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Auto Generate Code"),o.a.createElement(h.a,{type:"text",placeholder:"Auto Generate Code",name:"name"})),o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Type"),o.a.createElement(h.a,{type:"select"},o.a.createElement("option",{selected:!0},"---Select Type---"),o.a.createElement("option",null,"Flat"),o.a.createElement("option",null,"Percentage"))),o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Discount"),o.a.createElement(h.a,{type:"number",placeholder:"Discount",name:"name"})),o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(b.a,null,"Apply On"),o.a.createElement(h.a,{type:"select"},o.a.createElement("option",{selected:!0},"---Select---"),o.a.createElement("option",null,"Category"),o.a.createElement("option",null,"Subcategory"),o.a.createElement("option",null,"Product")))),o.a.createElement(u.a,null,o.a.createElement(d.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add Attribute"))))))}}]),a}(c.Component);t.default=y},830:function(e,t,a){"use strict";var n=a(44),r=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=r},832:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(17),l=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),m=a(5),d=a.n(m),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,f),y=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),v=u||("select"===s||"textarea"===s?s:"input"),O="form-control";b?(O+="-plaintext",v=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":y&&(O=m?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(t,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===v||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(v,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":i}))},t}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},835:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(1),l=a.n(s),c=a(2),o=a.n(c),i=a(5),u=a.n(i),m=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,s=e.hidden,c=e.widths,o=e.tag,i=e.check,p=e.size,f=e.for,b=Object(r.a)(e,d),h=[];c.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,l=!n;if(Object(m.isObject)(r)){var c,o=l?"-":"-"+t+"-";s=g(l,t,r.size),h.push(Object(m.mapToCssModules)(u()(((c={})[s]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c))),a)}else s=g(l,t,r),h.push(s)}}));var y=Object(m.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return l.a.createElement(o,Object(n.a)({htmlFor:f},b,{className:y}))};y.propTypes=b,y.defaultProps=h,t.a=y},836:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(17),l=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),m=a(5),d=a.n(m),p=a(4),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,i=Object(r.a)(e,f),u=Object(p.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:u}))},t}(c.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=207.b834c44c.chunk.js.map