(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[204],{2182:function(e,t,a){"use strict";a.r(t),a.d(t,"EditFeatureDeal",(function(){return y}));var n=a(45),r=a(11),s=a(12),l=a(14),o=a(13),i=a(1),c=a.n(i),u=a(823),d=a(826),p=a(836),f=a(821),m=a(822),h=a(835),b=a(832),g=a(198),v=(a(21),a(830)),y=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",s.state.name),t.append("sortorder",s.state.sortorder),t.append("desc",s.state.desc),t.append("status",s.state.status),t.append("product_img",s.state.selectedFile,s.state.selectedName),v.a.post(" /addproductcategory",t).then((function(e){console.log(e),s.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},s.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},s}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null," Update Feature Deal "),c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(p.a,{onSubmit:this.submitHandler},c.a.createElement(f.a,{className:"mb-1"},c.a.createElement(m.a,{lg:"12"},c.a.createElement(h.a,null,"Title"),c.a.createElement(b.a,{required:!0,type:"text",name:"bannertype",placeholder:"Enter Title",value:this.state.bannertype,onChange:this.changeHandler})),c.a.createElement(m.a,{lg:"6"},c.a.createElement(h.a,null,"Start date"),c.a.createElement(b.a,{required:!0,type:"date",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler})),c.a.createElement(m.a,{lg:"6"},c.a.createElement(h.a,null,"End Date"),c.a.createElement(b.a,{required:!0,type:"date",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler}))),c.a.createElement(f.a,{style:{float:"right"}},c.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Update")))))))}}]),a}(i.Component);t.default=y},830:function(e,t,a){"use strict";var n=a(44),r=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=r},832:function(e,t,a){"use strict";var n=a(6),r=a(7),s=a(17),l=a(19),o=a(1),i=a.n(o),c=a(2),u=a.n(c),d=a(5),p=a.n(d),f=a(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(r.a)(e,m),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),O=u||("select"===s||"textarea"===s?s:"input"),j="form-control";h?(j+="-plaintext",O=u||"input"):"file"===s?j+="-file":"range"===s?j+="-range":v&&(j=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var E=Object(f.mapToCssModules)(p()(t,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,j),a);return("input"===O||u&&"function"===typeof u)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof O&&"select"!==O&&(Object(f.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(O,Object(n.a)({},g,{ref:b,className:E,"aria-invalid":c}))},t}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},835:function(e,t,a){"use strict";var n=a(6),r=a(7),s=a(1),l=a.n(s),o=a(2),i=a.n(o),c=a(5),u=a.n(c),d=a(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],f=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,i=e.tag,c=e.check,f=e.size,m=e.for,h=Object(r.a)(e,p),b=[];o.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var s,l=!n;if(Object(d.isObject)(r)){var o,i=l?"-":"-"+t+"-";s=g(l,t,r.size),b.push(Object(d.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o))),a)}else s=g(l,t,r),b.push(s)}}));var v=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),a);return l.a.createElement(i,Object(n.a)({htmlFor:m},h,{className:v}))};v.propTypes=h,v.defaultProps=b,t.a=v},836:function(e,t,a){"use strict";var n=a(6),r=a(7),s=a(17),l=a(19),o=a(1),i=a.n(o),c=a(2),u=a.n(c),d=a(5),p=a.n(d),f=a(4),m=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,c=Object(r.a)(e,m),u=Object(f.mapToCssModules)(p()(t,!!s&&"form-inline"),a);return i.a.createElement(l,Object(n.a)({},c,{ref:o,className:u}))},t}(o.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b}}]);
//# sourceMappingURL=204.a264c1fd.chunk.js.map