(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[197],{2236:function(e,a,t){"use strict";t.r(a),t.d(a,"AddBrand",(function(){return N}));var n=t(45),s=t(11),r=t(12),l=t(14),c=t(13),o=t(1),i=t.n(o),m=t(823),d=t(821),u=t(822),p=t(199),f=t(826),b=t(836),h=t(835),g=t(813),v=t(841),E=(t(22),t(830)),y=t(62),N=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",r.state.name),a.append("sortorder",r.state.sortorder),a.append("desc",r.state.desc),a.append("status",r.state.status),null!==r.state.selectedFile&&a.append("brand_img",r.state.selectedFile,r.state.selectedName),E.a.post("/addbrand",a).then((function(e){console.log(e),r.props.history.push("/app/freshlist/subcategory/subcategoryList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(u.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Brand")),i.a.createElement(u.a,null,i.a.createElement(y.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/brand/brandList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(h.a,null,"Brand Name"),i.a.createElement(g.a,{type:"select",placeholder:"Select Brand",name:"type",value:this.state.name,onChange:this.changeHandler},i.a.createElement("option",null,"---Select---"),i.a.createElement("option",{value:"1KG"},"1"),i.a.createElement("option",{value:"2KG"},"2"),i.a.createElement("option",{value:"3KG"},"3"))),i.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(h.a,null,"Brand Image"),i.a.createElement(g.a,{type:"file",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(v.a,null,i.a.createElement(h.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),i.a.createElement(d.a,null,i.a.createElement(p.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add Brand"))))))}}]),t}(o.Component);a.default=N},830:function(e,a,t){"use strict";var n=t(44),s=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=s},835:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(5),m=t.n(i),d=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,o=e.tag,i=e.check,p=e.size,f=e.for,b=Object(s.a)(e,u),h=[];c.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,l=!n;if(Object(d.isObject)(s)){var c,o=l?"-":"-"+a+"-";r=g(l,a,s.size),h.push(Object(d.mapToCssModules)(m()(((c={})[r]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),t)}else r=g(l,a,s),h.push(r)}}));var v=Object(d.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},836:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(17),l=t(19),c=t(1),o=t.n(c),i=t(2),m=t.n(i),d=t(5),u=t.n(d),p=t(4),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,i=Object(s.a)(e,f),m=Object(p.mapToCssModules)(u()(a,!!r&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:m}))},a}(c.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},841:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(5),m=t.n(i),d=t(4),u=["className","cssModule","row","disabled","check","inline","tag"],p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,o=e.check,i=e.inline,p=e.tag,f=Object(s.a)(e,u),b=Object(d.mapToCssModules)(m()(a,!!r&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===p&&(f.disabled=c),l.a.createElement(p,Object(n.a)({},f,{className:b}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=197.b7f1d74c.chunk.js.map