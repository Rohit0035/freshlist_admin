(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[245],{2292:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(838),s=a(45),r=a(11),l=a(12),o=a(14),i=a(13),c=a(1),u=a.n(c),m=a(823),d=a(821),p=a(822),f=a(199),h=a(826),b=a(836),g=a(835),y=a(832),v=a(44),E=a.n(v),O=a(22),j=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(s.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state);var t=new FormData;t.append("userID",l.state.userID),t.append("usertype",l.state.usertype),t.append("username",l.state.username),t.append("password",l.state.password),t.append("pincode",l.state.pincode),t.append("phone_no",l.state.phone_no),t.append("mobile_no",l.state.mobile_no),t.append("email",l.state.email),t.append("website",l.state.website),t.append("country",l.state.country),t.append("state",l.state.state),t.append("city",l.state.city),t.append("status",l.state.status),t.append("userImage",l.state.selectedFile,l.state.selectedName);var a,s=Object(n.a)(t.values());try{for(s.s();!(a=s.n()).done;){var r=a.value;console.log(r)}}catch(u){s.e(u)}finally{s.f()}var o,i=Object(n.a)(t.keys());try{for(i.s();!(o=i.n()).done;){var c=o.value;console.log(c)}}catch(u){i.e(u)}finally{i.f()}E.a.post("http://65.2.150.118:4444/api/user/adduserbyadmin",t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},l.state={userID:"",usertype:"",username:"",password:"",pincode:"",phone_no:"",mobile_no:"",email:"",website:"",country:"",state:"",city:"",userImage:"",status:"",selectedName:"",selectedFile:null},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Menu")),u.a.createElement(p.a,null,u.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/menuManagement/menuManagementList")}},"Back"))),u.a.createElement(h.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,null,u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,null,"Menu Name:"),u.a.createElement(y.a,{required:!0,type:"text",placeholder:"User Name",name:"username",value:this.state.userID,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,null,"Menu Icon:"),u.a.createElement(y.a,{required:!0,type:"text",placeholder:"User Name",name:"username",value:this.state.userID,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,null,"Select Categories:"),u.a.createElement(y.a,{required:!0,type:"text",placeholder:"User Name",name:"username",value:this.state.userID,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,null,"User Image"),u.a.createElement(y.a,{required:!0,type:"file",onChange:this.onChangeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"checkbox",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),u.a.createElement(d.a,null,u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add User")))))))}}]),a}(c.Component)},832:function(e,t,a){"use strict";var n=a(6),s=a(8),r=a(17),l=a(19),o=a(1),i=a.n(o),c=a(2),u=a.n(c),m=a(5),d=a.n(m),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),y=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":y&&(O=m?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(t,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":c}))},t}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},835:function(e,t,a){"use strict";var n=a(6),s=a(8),r=a(1),l=a.n(r),o=a(2),i=a.n(o),c=a(5),u=a.n(c),m=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,c=e.check,p=e.size,f=e.for,h=Object(s.a)(e,d),b=[];o.forEach((function(t,n){var s=e[t];if(delete h[t],s||""===s){var r,l=!n;if(Object(m.isObject)(s)){var o,i=l?"-":"-"+t+"-";r=g(l,t,s.size),b.push(Object(m.mapToCssModules)(u()(((o={})[r]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o))),a)}else r=g(l,t,s),b.push(r)}}));var y=Object(m.mapToCssModules)(u()(t,!!r&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),a);return l.a.createElement(i,Object(n.a)({htmlFor:f},h,{className:y}))};y.propTypes=h,y.defaultProps=b,t.a=y},836:function(e,t,a){"use strict";var n=a(6),s=a(8),r=a(17),l=a(19),o=a(1),i=a.n(o),c=a(2),u=a.n(c),m=a(5),d=a.n(m),p=a(4),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,c=Object(s.a)(e,f),u=Object(p.mapToCssModules)(d()(t,!!r&&"form-inline"),a);return i.a.createElement(l,Object(n.a)({},c,{ref:o,className:u}))},t}(o.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b},838:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(104);function s(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r,l=!0,o=!1;return{s:function(){s=e[Symbol.iterator]()},n:function(){var e=s.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==s.return||s.return()}finally{if(o)throw r}}}}}}]);
//# sourceMappingURL=245.1af285b5.chunk.js.map