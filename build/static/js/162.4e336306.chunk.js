(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[162,215],{1376:function(e,t,a){"use strict";a.r(t),a.d(t,"VendorInformation",(function(){return y}));var n=a(45),l=a(11),s=a(12),r=a(14),c=a(13),o=a(1),i=a.n(o),m=a(823),d=a(821),u=a(822),p=a(198),h=a(826),f=a(836),g=a(835),b=a(832),E=(a(21),a(830)),v=a(62),y=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",s.state.name),t.append("sortorder",s.state.sortorder),t.append("desc",s.state.desc),t.append("status",s.state.status),t.append("product_img",s.state.selectedFile,s.state.selectedName),E.a.post(" /addvender",t).then((function(e){console.log(e),s.props.history.push("/app/vender/venderList")})).catch((function(e){console.log(e)}))},s.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",aadhar_img:"",pan_img:"",status:""},s}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{className:"m-1"},i.a.createElement(u.a,null,i.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},"Vendor Information")),i.a.createElement(u.a,null,i.a.createElement(v.b,{render:function(e){var t=e.history;return i.a.createElement(p.a,{className:"btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/vendor/vendorList")}},"Back")}}))),i.a.createElement(h.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(g.a,null,"Name"),i.a.createElement(b.a,{type:"text",name:"type",value:this.state.type,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Mobile No."),i.a.createElement(b.a,{required:!0,type:"number",name:"date",placeholder:"Enter Mobile Number.",value:this.state.date,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Door Number"),i.a.createElement(b.a,{type:"text",name:"desc",placeholder:"Door Number",value:this.state.desc,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Street"),i.a.createElement(b.a,{type:"text",name:"desc",placeholder:"Street",value:this.state.desc,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"City"),i.a.createElement(b.a,{type:"text",name:"desc",placeholder:"City",value:this.state.desc,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"PINCODE"),i.a.createElement(b.a,{type:"text",name:"desc",placeholder:"PINCODE",value:this.state.desc,onChange:this.changeHandler}))))))))}}]),a}(o.Component);t.default=y},2412:function(e,t,a){"use strict";a.r(t),a.d(t,"AddVendor",(function(){return j}));var n=a(45),l=a(11),s=a(12),r=a(14),c=a(13),o=a(1),i=a.n(o),m=a(1376),d=a(823),u=a(821),p=a(822),h=a(826),f=a(836),g=a(835),b=a(832),E=(a(21),a(830)),v=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",s.state.name),t.append("sortorder",s.state.sortorder),t.append("desc",s.state.desc),t.append("status",s.state.status),t.append("product_img",s.state.selectedFile,s.state.selectedName),E.a.post(" /addproductcategory",t).then((function(e){console.log(e),s.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},s.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},s}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-1"},i.a.createElement(p.a,null,i.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},"Service Details"))),i.a.createElement(h.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,{className:"mb-2"},i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Location"),i.a.createElement(b.a,{type:"text",name:"desc",placeholder:"Location",value:this.state.desc,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"City"),i.a.createElement(b.a,{type:"text",name:"desc",placeholder:"City",value:this.state.desc,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"PINCODE"),i.a.createElement(b.a,{type:"text",name:"desc",placeholder:"PINCODE",value:this.state.desc,onChange:this.changeHandler}))))))))}}]),a}(o.Component),y=a(813),N=a(198),O=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",s.state.name),t.append("sortorder",s.state.sortorder),t.append("desc",s.state.desc),t.append("status",s.state.status),t.append("product_img",s.state.selectedFile,s.state.selectedName),E.a.post(" /addproductcategory",t).then((function(e){console.log(e),s.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},s.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},s}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-1"},i.a.createElement(p.a,null,i.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},"VENDOR PHOTO"))),i.a.createElement(h.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,{className:"mb-2"},i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Vendor Image"),i.a.createElement(y.a,{required:!0,type:"file",name:"date",value:this.state.date,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"ID PROOF"),i.a.createElement(b.a,{type:"text",name:"desc",placeholder:"ADHAR CARD NUMBER",value:this.state.desc,onChange:this.changeHandler}),i.a.createElement(b.a,{type:"text",name:"desc",placeholder:"ENTER NUMBER",value:this.state.desc,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Aadhar Image"),i.a.createElement(y.a,{required:!0,type:"file",name:"aadhar",value:this.state.aadhar,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Pan Image"),i.a.createElement(y.a,{required:!0,type:"file",name:"pan",value:this.state.pan,onChange:this.changeHandler}))),i.a.createElement(u.a,{style:{float:"right"}},i.a.createElement(N.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit")))))))}}]),a}(o.Component),j=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",s.state.name),t.append("sortorder",s.state.sortorder),t.append("desc",s.state.desc),t.append("status",s.state.status),t.append("product_img",s.state.selectedFile,s.state.selectedName),E.a.post(" /addproductcategory",t).then((function(e){console.log(e),s.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},s.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},s}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p.a,{sm:"12"},i.a.createElement(p.a,null,i.a.createElement("h1",{sm:"12"},i.a.createElement(m.default,null)))),i.a.createElement(p.a,{sm:"12"},i.a.createElement(p.a,null,i.a.createElement("h1",{sm:"12"},i.a.createElement(v,null)))),i.a.createElement(p.a,{sm:"12"},i.a.createElement(p.a,null,i.a.createElement("h1",{sm:"12"},i.a.createElement(O,null)))))}}]),a}(o.Component);t.default=j},830:function(e,t,a){"use strict";var n=a(44),l=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=l},832:function(e,t,a){"use strict";var n=a(6),l=a(7),s=a(17),r=a(19),c=a(1),o=a.n(c),i=a(2),m=a.n(i),d=a(5),u=a.n(d),p=a(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,c=e.valid,i=e.invalid,m=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,b=Object(l.a)(e,h),E=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),N="form-control";f?(N+="-plaintext",y=m||"input"):"file"===s?N+="-file":"range"===s?N+="-range":E&&(N=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var O=Object(p.mapToCssModules)(u()(t,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,N),a);return("input"===y||m&&"function"===typeof m)&&(b.type=s),b.children&&!f&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(y,Object(n.a)({},b,{ref:g,className:O,"aria-invalid":i}))},t}(o.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},835:function(e,t,a){"use strict";var n=a(6),l=a(7),s=a(1),r=a.n(s),c=a(2),o=a.n(c),i=a(5),m=a.n(i),d=a(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),f={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:o.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,s=e.hidden,c=e.widths,o=e.tag,i=e.check,p=e.size,h=e.for,f=Object(l.a)(e,u),g=[];c.forEach((function(t,n){var l=e[t];if(delete f[t],l||""===l){var s,r=!n;if(Object(d.isObject)(l)){var c,o=r?"-":"-"+t+"-";s=b(r,t,l.size),g.push(Object(d.mapToCssModules)(m()(((c={})[s]=l.size||""===l.size,c["order"+o+l.order]=l.order||0===l.order,c["offset"+o+l.offset]=l.offset||0===l.offset,c))),a)}else s=b(r,t,l),g.push(s)}}));var E=Object(d.mapToCssModules)(m()(t,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),a);return r.a.createElement(o,Object(n.a)({htmlFor:h},f,{className:E}))};E.propTypes=f,E.defaultProps=g,t.a=E},836:function(e,t,a){"use strict";var n=a(6),l=a(7),s=a(17),r=a(19),c=a(1),o=a.n(c),i=a(2),m=a.n(i),d=a(5),u=a.n(d),p=a(4),h=["className","cssModule","inline","tag","innerRef"],f={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,r=e.tag,c=e.innerRef,i=Object(l.a)(e,h),m=Object(p.mapToCssModules)(u()(t,!!s&&"form-inline"),a);return o.a.createElement(r,Object(n.a)({},i,{ref:c,className:m}))},t}(c.Component);g.propTypes=f,g.defaultProps={tag:"form"},t.a=g}}]);
//# sourceMappingURL=162.4e336306.chunk.js.map