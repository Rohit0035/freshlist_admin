(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[111],{2230:function(e,a,t){"use strict";t.r(a),t.d(a,"AddCategory",(function(){return C}));var n=t(838),l=t(45),r=t(11),c=t(12),s=t(14),o=t(13),i=t(1),m=t.n(i),u=t(823),d=t(821),p=t(822),h=t(199),g=t(826),f=t(836),b=t(841),E=t(835),y=t(832),v=t(813),N=(t(22),t(830)),O=t(62),C=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=a.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("category_name",c.state.category_name),a.append("desc",c.state.desc),a.append("status",c.state.status),null!==c.state.selectedFile&&a.append("image",c.state.selectedFile,c.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(s){l.e(s)}finally{l.f()}N.a.post("/admin/addcategory",a).then((function(e){console.log(e),c.props.history.push("/app/freshlist/category/categoryList")})).catch((function(e){console.log(e)}))},c.state={category_name:"",selectedFile:null,selectedName:"",desc:"",image:"",status:""},c}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(p.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Category")),m.a.createElement(p.a,null,m.a.createElement(O.b,{render:function(e){var a=e.history;return m.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/category/categoryList")}},"Back")}}))),m.a.createElement(g.a,null,m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(d.a,{className:"mb-2"},m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Category Name"),m.a.createElement(y.a,{type:"text",placeholder:"Customer Name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Description"),m.a.createElement(y.a,{type:"text",placeholder:"Enter Here",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Category Image "),m.a.createElement(v.a,{type:"file",name:"image",value:this.state.image,onChange:this.onChangeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(E.a,null,"Type"),m.a.createElement(v.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},m.a.createElement("option",null,"---Select---"),m.a.createElement("option",{value:"veg"},"Veg"),m.a.createElement("option",{value:"nonveg"},"Non-Veg"),m.a.createElement("option",{value:"egg"},"Egg only"))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Web Thumbnail "),m.a.createElement(v.a,{type:"file",name:"image",value:this.state.image,onChange:this.onChangeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"App Thumbnail "),m.a.createElement(v.a,{type:"file",name:"image",value:this.state.image,onChange:this.onChangeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Web Banner "),m.a.createElement(v.a,{type:"file",name:"image",value:this.state.image,onChange:this.onChangeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"App Banner"),m.a.createElement(v.a,{type:"file",name:"image",value:this.state.image,onChange:this.onChangeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(E.a,null,"Show on "),m.a.createElement(v.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},m.a.createElement("option",null,"---Select---"),m.a.createElement("option",{value:"featured"},"Featured"),m.a.createElement("option",{value:"list"},"List"),m.a.createElement("option",{value:"app"},"App"),m.a.createElement("option",{value:"web"},"Web"))),m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(E.a,null,"Status"),m.a.createElement(v.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},m.a.createElement("option",null,"---Select---"),m.a.createElement("option",{value:"enable"},"Enable"),m.a.createElement("option",{value:"disable"},"Disable"))),m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(E.a,null,"Relation "),m.a.createElement(v.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},m.a.createElement("option",null,"---Select---"),m.a.createElement("option",{value:"parent"},"Parent"),m.a.createElement("option",{value:"child"},"Child"))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Url"),m.a.createElement(y.a,{type:"text",placeholder:"Enter Url Here",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,{tag:"fieldset"},m.a.createElement(E.a,null,"Featured:"),m.a.createElement("div",{className:"d-flex"},m.a.createElement(b.a,{check:!0},m.a.createElement(y.a,{name:"radio1",type:"radio"}),m.a.createElement(E.a,{check:!0,className:"mr-2"},"Yes")),m.a.createElement(b.a,{check:!0},m.a.createElement(y.a,{name:"radio1",type:"radio"}),m.a.createElement(E.a,{check:!0},"No")))))),m.a.createElement(d.a,{className:"my-1"},m.a.createElement(p.a,{lg:"12",md:"12"},m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"SEO"))),m.a.createElement(d.a,null,m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(E.a,null,"MetaData"),m.a.createElement(y.a,{type:"text",placeholder:"MetaData",name:"type",value:this.state.sortorder,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(E.a,null,"MetaData Description "),m.a.createElement(y.a,{type:"text",placeholder:"Description",name:"type",value:this.state.sortorder,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(E.a,null,"Product Search Tags"),m.a.createElement(y.a,{type:"text",placeholder:"Product Search Tags",name:"type",value:this.state.sortorder,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(E.a,null,"SeprateSet"),m.a.createElement(y.a,{type:"text",placeholder:"SeprateSet",name:"type",value:this.state.sortorder,onChange:this.changeHandler}))),m.a.createElement(d.a,null,m.a.createElement(h.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add Category"))))))}}]),t}(i.Component);a.default=C},830:function(e,a,t){"use strict";var n=t(44),l=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=l},832:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(17),c=t(19),s=t(1),o=t.n(s),i=t(2),m=t.n(i),u=t(5),d=t.n(u),p=t(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,s=e.valid,i=e.invalid,m=e.tag,u=e.addon,g=e.plaintext,f=e.innerRef,b=Object(l.a)(e,h),E=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),v=m||("select"===r||"textarea"===r?r:"input"),N="form-control";g?(N+="-plaintext",v=m||"input"):"file"===r?N+="-file":"range"===r?N+="-range":E&&(N=u?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var O=Object(p.mapToCssModules)(d()(a,i&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,N),t);return("input"===v||m&&"function"===typeof m)&&(b.type=r),b.children&&!g&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(v,Object(n.a)({},b,{ref:f,className:O,"aria-invalid":i}))},a}(o.a.Component);f.propTypes=g,f.defaultProps={type:"text"},a.a=f},835:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(1),c=t.n(r),s=t(2),o=t.n(s),i=t(5),m=t.n(i),u=t(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:o.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.hidden,s=e.widths,o=e.tag,i=e.check,p=e.size,h=e.for,g=Object(l.a)(e,d),f=[];s.forEach((function(a,n){var l=e[a];if(delete g[a],l||""===l){var r,c=!n;if(Object(u.isObject)(l)){var s,o=c?"-":"-"+a+"-";r=b(c,a,l.size),f.push(Object(u.mapToCssModules)(m()(((s={})[r]=l.size||""===l.size,s["order"+o+l.order]=l.order||0===l.order,s["offset"+o+l.offset]=l.offset||0===l.offset,s))),t)}else r=b(c,a,l),f.push(r)}}));var E=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,f,!!f.length&&"col-form-label"),t);return c.a.createElement(o,Object(n.a)({htmlFor:h},g,{className:E}))};E.propTypes=g,E.defaultProps=f,a.a=E},836:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(17),c=t(19),s=t(1),o=t.n(s),i=t(2),m=t.n(i),u=t(5),d=t.n(u),p=t(4),h=["className","cssModule","inline","tag","innerRef"],g={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,c=e.tag,s=e.innerRef,i=Object(l.a)(e,h),m=Object(p.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return o.a.createElement(c,Object(n.a)({},i,{ref:s,className:m}))},a}(s.Component);f.propTypes=g,f.defaultProps={tag:"form"},a.a=f},838:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(104);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,c=!0,s=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return c=e.done,e},e:function(e){s=!0,r=e},f:function(){try{c||null==l.return||l.return()}finally{if(s)throw r}}}}},841:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(1),c=t.n(r),s=t(2),o=t.n(s),i=t(5),m=t.n(i),u=t(4),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.row,s=e.disabled,o=e.check,i=e.inline,p=e.tag,h=Object(l.a)(e,d),g=Object(u.mapToCssModules)(m()(a,!!r&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!s)&&"disabled"),t);return"fieldset"===p&&(h.disabled=s),c.a.createElement(p,Object(n.a)({},h,{className:g}))};h.propTypes=p,h.defaultProps={tag:"div"},a.a=h}}]);
//# sourceMappingURL=111.9d5ffbc2.chunk.js.map