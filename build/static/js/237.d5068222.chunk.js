(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[237],{2125:function(e,a,t){"use strict";t.r(a),t.d(a,"AddGallery",(function(){return j}));var n=t(45),s=t(11),r=t(12),l=t(14),c=t(13),o=t(1),i=t.n(o),u=t(817),d=t(815),m=t(816),f=t(192),p=t(820),h=t(830),b=t(831),g=t(807),y=t(21),v=t(825),j=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",r.state.name),a.append("sortorder",r.state.sortorder),a.append("desc",r.state.desc),a.append("status",r.state.status),a.append("product_img",r.state.selectedFile,r.state.selectedName),v.a.post(" /addproductcategory",a).then((function(e){console.log(e),r.props.history.push("/app/freshlist/gallery/gallery")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},r}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Add New Product"),i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-1"},i.a.createElement(m.a,{className:""},i.a.createElement("h2",null,"Upload File")),i.a.createElement(m.a,null,i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/freshlist/gallery/gallery")}},"Back"))),i.a.createElement(p.a,null,i.a.createElement(h.a,{onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-1"},i.a.createElement(m.a,{lg:"12"},i.a.createElement(b.a,null,"Image"),i.a.createElement(g.a,{required:!0,type:"file",name:"bannertype",placeholder:"Upload image",value:this.state.bannertype,onChange:this.changeHandler}))),i.a.createElement(d.a,{style:{float:"right"}},i.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Upload")))))))}}]),t}(o.Component);a.default=j},825:function(e,a,t){"use strict";var n=t(44),s=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=s},830:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(17),l=t(19),c=t(1),o=t.n(c),i=t(2),u=t.n(i),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,i=Object(s.a)(e,p),u=Object(f.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},831:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),h={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,o=e.tag,i=e.check,f=e.size,p=e.for,h=Object(s.a)(e,m),b=[];c.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,l=!n;if(Object(d.isObject)(s)){var c,o=l?"-":"-"+a+"-";r=g(l,a,s.size),b.push(Object(d.mapToCssModules)(u()(((c={})[r]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),t)}else r=g(l,a,s),b.push(r)}}));var y=Object(d.mapToCssModules)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:p},h,{className:y}))};y.propTypes=h,y.defaultProps=b,a.a=y}}]);
//# sourceMappingURL=237.d5068222.chunk.js.map