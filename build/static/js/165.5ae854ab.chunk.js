(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[165],{2266:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(838),r=a(45),s=a(11),l=a(12),o=a(14),c=a(13),i=a(1),u=a.n(i),f=a(823),d=a(821),p=a(822),m=a(198),h=a(826),g=a(836),b=a(835),v=a(832),y=a(813),E=a(21),O=a(830),j=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("specialoffer_title",l.state.specialoffer_title),t.append("product",l.state.product),t.append("rate",l.state.rate),t.append("product_qty",l.state.product_qty),t.append("sortorder",l.state.sortorder),t.append("status",l.state.status),t.append("offer_img",l.state.selectedFile,l.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var s=a.value;console.log(s)}}catch(u){r.e(u)}finally{r.f()}var o,c=Object(n.a)(t.keys());try{for(c.s();!(o=c.n()).done;){var i=o.value;console.log(i)}}catch(u){c.e(u)}finally{c.f()}O.a.post("http://35.154.86.59/api/admin/add_specialoffer",t).then((function(e){console.log(e.data),l.props.history.push("/app/offerAndCoupon/specialOffer/specialOfferList")})).catch((function(e){console.log(e)}))},l.state={specialoffer_title:"",product:"",rate:"",product_qty:"",sortorder:"",selectedFile:null,selectedName:"",status:""},l.state={allProduct1:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/getproduct").then((function(t){console.log(t),e.setState({allProduct1:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(f.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add special Offer")),u.a.createElement(p.a,null,u.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/offerAndCoupon/specialOffer/specialOfferList")}},"Back"))),u.a.createElement(h.a,null,u.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,"Offer Title"),u.a.createElement(v.a,{type:"text",name:"specialoffer_title",value:this.state.specialoffer_title,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a,null,"Product"),u.a.createElement(y.a,{type:"select",name:"product",value:this.state.product,onChange:this.changeHandler},this.state.allProduct1.map((function(e){return u.a.createElement("option",{value:e._id,key:e._id},e.product_name)})))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(b.a,null,"Rate"),u.a.createElement(v.a,{type:"text",name:"rate",value:this.state.rate,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(b.a,null,"Product Qty"),u.a.createElement(v.a,{type:"number",name:"product_qty",value:this.state.product_qty,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,"Image"),u.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(b.a,null,"Short Order"),u.a.createElement(v.a,{type:"text",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(b.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),u.a.createElement(d.a,null,u.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Special Offer"))))))}}]),a}(i.Component)},830:function(e,t,a){"use strict";var n=a(44),r=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=r},832:function(e,t,a){"use strict";var n=a(6),r=a(7),s=a(17),l=a(19),o=a(1),c=a.n(o),i=a(2),u=a.n(i),f=a(5),d=a.n(f),p=a(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,f=e.addon,h=e.plaintext,g=e.innerRef,b=Object(r.a)(e,m),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=f?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var j=Object(p.mapToCssModules)(d()(t,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===E||u&&"function"===typeof u)&&(b.type=s),b.children&&!h&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(E,Object(n.a)({},b,{ref:g,className:j,"aria-invalid":i}))},t}(c.a.Component);g.propTypes=h,g.defaultProps={type:"text"},t.a=g},835:function(e,t,a){"use strict";var n=a(6),r=a(7),s=a(1),l=a.n(s),o=a(2),c=a.n(o),i=a(5),u=a.n(i),f=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.tagPropType,className:c.a.string,cssModule:c.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,m=e.for,h=Object(r.a)(e,d),g=[];o.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var s,l=!n;if(Object(f.isObject)(r)){var o,c=l?"-":"-"+t+"-";s=b(l,t,r.size),g.push(Object(f.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o))),a)}else s=b(l,t,r),g.push(s)}}));var v=Object(f.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),a);return l.a.createElement(c,Object(n.a)({htmlFor:m},h,{className:v}))};v.propTypes=h,v.defaultProps=g,t.a=v},836:function(e,t,a){"use strict";var n=a(6),r=a(7),s=a(17),l=a(19),o=a(1),c=a.n(o),i=a(2),u=a.n(i),f=a(5),d=a.n(f),p=a(4),m=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,i=Object(r.a)(e,m),u=Object(p.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);g.propTypes=h,g.defaultProps={tag:"form"},t.a=g},838:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(104);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=165.5ae854ab.chunk.js.map