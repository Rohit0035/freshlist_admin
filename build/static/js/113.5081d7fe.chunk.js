(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[113],{1244:function(e,t,a){"use strict";var n=a(31),l=a(45),r=a(11),s=a(12),i=a(14),c=a(13),o=a(1),m=a.n(o),d=a(190),u=a(823),p=a(821),g=a(822),f=a(198),h=a(826),b=a(836),y=a(835),E=a(832),v=a(813),N=(a(21),a(830)),O=a(62),j=a(844),C=a.n(j),S=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state.files);var t=new FormData;t.append("firstname",s.state.firstname),t.append("lastname",s.state.lastname),t.append("identity_type",s.state.identity_type),t.append("identity_no",s.state.identity_no),t.append("phone_no",s.state.phone_no),t.append("address",s.state.address),t.append("deliveryman_img",s.state.deliveryman_img),t.append("identity_img",s.state.identity_img),N.a.post("/admin/add_drive",t).then((function(e){console.log(e.data.data),"success"==e.data.msg&&C()("Submitted Successfully"),s.props.history.push("/app/freshlist/driver/driverList")})).catch((function(e){console.log(e.response.data)}))},s.onImageChange=function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];s.setState({identity_img:t})}},s.onImageChangeone=function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];s.setState({aadharcardimage:t})}},s.deliverymanimage=function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];s.setState({deliveryman_img:t})}},s.fileSelectedHandler=function(e){s.setState({aadharcardimage:[].concat(Object(n.a)(s.state.aadharcardimage),Object(n.a)(e.target.files))}),console.log(s.state.aadharcardimage)},s.state={firstname:"",lastname:"",identity_type:"",identity_no:"",phone_no:"",address:"",deliveryman_img:[],identity_img:[],aadharcardimage:[],selectedFile:null,selectedName:"",sortorder:"",desc:"",driver_img:"",files:[],status:""},s}return Object(s.a)(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(p.a,{className:"m-1"},m.a.createElement(g.a,null,m.a.createElement("h1",null,"Add Driver"),m.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},m.a.createElement(d.b,null),"General Information")),m.a.createElement(g.a,null,m.a.createElement(O.b,{render:function(e){var t=e.history;return m.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/driver/driverList")}},"Back")}}))),m.a.createElement(h.a,null,m.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(p.a,{className:"mb-2"},m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(y.a,null,"First Name"),m.a.createElement(E.a,{required:!0,type:"text",name:"firstname",value:this.state.firstname,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(y.a,null,"Last Name"),m.a.createElement(E.a,{required:!0,type:"text",name:"lastname",value:this.state.lastname,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(y.a,null,"Identity Type"),m.a.createElement(E.a,{required:!0,type:"select",name:"identity_type",placeholder:"Enter Identity Type",value:this.state.identity_type,onChange:this.changeHandler},m.a.createElement("option",{value:"Select"},"--Select--"),m.a.createElement("option",{value:"Driving License"},"Driving License"),m.a.createElement("option",{value:"PanCard"},"Pan Card"),m.a.createElement("option",{value:"PassPort"},"Passport"))),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(y.a,null,"Identity No.-",""==this.state.identity_type?null:m.a.createElement("span",{style:{color:"red"}}," ","of-",this.state.identity_type," ")),m.a.createElement(E.a,{required:!0,type:"text",name:"identity_no",value:this.state.identity_no,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(y.a,null,"Identity Type Image"),m.a.createElement(v.a,{required:!0,type:"file",onChange:this.onImageChange})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(y.a,null,"Phone No."),m.a.createElement(E.a,{required:!0,type:"tel",maxlength:"10",name:"phone_no",value:this.state.phone_no,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(y.a,null,"Address"),m.a.createElement(E.a,{required:!0,type:"text",name:"address",value:this.state.address,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(y.a,null,"Aadhar Card-Image",m.a.createElement("span",{style:{color:"red"}},"* Pdf/jpeg")),m.a.createElement(v.a,{required:!0,name:"identity_img",accept:"application/pdf,image/gif, image/jpeg,image/png",multiple:!0,type:"file",onChange:this.fileSelectedHandler})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(y.a,null,"DeliveryMan Image"),m.a.createElement(v.a,{required:!0,type:"file",name:"identity_img",onChange:this.deliverymanimage}))),m.a.createElement(p.a,{style:{float:"right"}},m.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit")))))))}}]),a}(o.Component);t.a=S},1245:function(e,t,a){"use strict";var n=a(45),l=a(11),r=a(12),s=a(14),i=a(13),c=a(1),o=a.n(c),m=a(190),d=a(823),u=a(821),p=a(822),g=a(826),f=a(836),h=a(835),b=a(832),y=a(198),E=(a(21),a(830)),v=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),t.append("product_img",r.state.selectedFile,r.state.selectedName),E.a.post(" /addproductcategory",t).then((function(e){console.log(e),r.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(u.a,{className:"m-1"},o.a.createElement(p.a,null,o.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},o.a.createElement(m.b,null)," Account Information"))),o.a.createElement(g.a,null,o.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(p.a,{lg:"4",md:"4",className:"mb-2"},o.a.createElement(h.a,null,"Email"),o.a.createElement(b.a,{type:"text",name:"type",value:this.state.type,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"4",md:"4",className:"mb-1"},o.a.createElement(h.a,null,"Password"),o.a.createElement(b.a,{type:"text",name:"Password",value:this.state.desc,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"4",md:"4",className:"mb-1"},o.a.createElement(h.a,null," Confirm Password"),o.a.createElement(b.a,{required:!0,type:"text",name:"Enter Password",placeholder:"Enter Password.",value:this.state.date,onChange:this.changeHandler}))),o.a.createElement(u.a,{style:{float:"right"}},o.a.createElement(y.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit")))))))}}]),a}(c.Component);t.a=v},2417:function(e,t,a){"use strict";a.r(t),a.d(t,"AddDriver",(function(){return j}));var n=a(45),l=a(11),r=a(12),s=a(14),i=a(13),c=a(1),o=a.n(c),m=a(1244),d=a(1245),u=a(190),p=a(823),g=a(821),f=a(822),h=a(826),b=a(836),y=a(835),E=a(813),v=a(198),N=(a(21),a(830)),O=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),t.append("product_img",r.state.selectedFile,r.state.selectedName),N.a.post(" /addproductcategory",t).then((function(e){console.log(e),r.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(g.a,{className:"m-1"},o.a.createElement(f.a,null,o.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},o.a.createElement(u.b,null)," Vehicle Information"))),o.a.createElement(h.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(g.a,{className:"mb-2"},o.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(y.a,null,"Registration Card"),o.a.createElement(E.a,{required:!0,type:"file",name:"identity",value:this.state.identity,onChange:this.changeHandler})),o.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(y.a,null,"Insurance"),o.a.createElement(E.a,{required:!0,type:"file",name:"identity",value:this.state.identity,onChange:this.changeHandler})),o.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(y.a,null,"License"),o.a.createElement(E.a,{required:!0,type:"file",name:"identity",value:this.state.identity,onChange:this.changeHandler})),o.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(y.a,null,"Driver Photo"),o.a.createElement(E.a,{required:!0,type:"file",name:"identity",value:this.state.identity,onChange:this.changeHandler}))),o.a.createElement(g.a,{style:{float:"right"}},o.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit")))))))}}]),a}(c.Component),j=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),t.append("product_img",r.state.selectedFile,r.state.selectedName),N.a.post(" /addproductcategory",t).then((function(e){console.log(e),r.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,{sm:"12"},o.a.createElement(f.a,null,o.a.createElement("h1",{sm:"12"},o.a.createElement(m.a,null)))),o.a.createElement(f.a,{sm:"12"},o.a.createElement(f.a,null,o.a.createElement("h1",{sm:"12"},o.a.createElement(d.a,null)))),o.a.createElement(f.a,{sm:"12"},o.a.createElement(f.a,null,o.a.createElement("h1",{sm:"12"},o.a.createElement(O,null)))))}}]),a}(c.Component);t.default=j},830:function(e,t,a){"use strict";var n=a(44),l=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=l},832:function(e,t,a){"use strict";var n=a(6),l=a(7),r=a(17),s=a(19),i=a(1),c=a.n(i),o=a(2),m=a.n(o),d=a(5),u=a.n(d),p=a(4),g=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,s=e.bsSize,i=e.valid,o=e.invalid,m=e.tag,d=e.addon,f=e.plaintext,h=e.innerRef,b=Object(l.a)(e,g),y=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),v=m||("select"===r||"textarea"===r?r:"input"),N="form-control";f?(N+="-plaintext",v=m||"input"):"file"===r?N+="-file":"range"===r?N+="-range":y&&(N=d?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var O=Object(p.mapToCssModules)(u()(t,o&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,N),a);return("input"===v||m&&"function"===typeof m)&&(b.type=r),b.children&&!f&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(v,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":o}))},t}(c.a.Component);h.propTypes=f,h.defaultProps={type:"text"},t.a=h},835:function(e,t,a){"use strict";var n=a(6),l=a(7),r=a(1),s=a.n(r),i=a(2),c=a.n(i),o=a(5),m=a.n(o),d=a(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),g=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:g,sm:g,md:g,lg:g,xl:g,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,r=e.hidden,i=e.widths,c=e.tag,o=e.check,p=e.size,g=e.for,f=Object(l.a)(e,u),h=[];i.forEach((function(t,n){var l=e[t];if(delete f[t],l||""===l){var r,s=!n;if(Object(d.isObject)(l)){var i,c=s?"-":"-"+t+"-";r=b(s,t,l.size),h.push(Object(d.mapToCssModules)(m()(((i={})[r]=l.size||""===l.size,i["order"+c+l.order]=l.order||0===l.order,i["offset"+c+l.offset]=l.offset||0===l.offset,i))),a)}else r=b(s,t,l),h.push(r)}}));var y=Object(d.mapToCssModules)(m()(t,!!r&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return s.a.createElement(c,Object(n.a)({htmlFor:g},f,{className:y}))};y.propTypes=f,y.defaultProps=h,t.a=y},836:function(e,t,a){"use strict";var n=a(6),l=a(7),r=a(17),s=a(19),i=a(1),c=a.n(i),o=a(2),m=a.n(o),d=a(5),u=a.n(d),p=a(4),g=["className","cssModule","inline","tag","innerRef"],f={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,s=e.tag,i=e.innerRef,o=Object(l.a)(e,g),m=Object(p.mapToCssModules)(u()(t,!!r&&"form-inline"),a);return c.a.createElement(s,Object(n.a)({},o,{ref:i,className:m}))},t}(i.Component);h.propTypes=f,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=113.5081d7fe.chunk.js.map