(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[180],{2215:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var n=t(45),l=t(11),s=t(12),c=t(14),r=t(13),o=t(1),i=t.n(o),m=t(817),d=t(815),u=t(816),p=t(192),h=t(820),g=t(830),f=t(831),b=t(827),y=t(807),E=t(825),v=t(21),_=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("item_name",s.state.item_name),a.append("short_name",s.state.short_name),a.append("desc",s.state.desc),a.append("code",s.state.code),a.append("hsn_code",s.state.hsn_code),a.append("productcategory",s.state.productcategory),a.append("productsubcategory",s.state.productsubcategory),a.append("unit",s.state.unit),a.append("alt_unit",s.state.alt_unit),a.append("gst_rate",s.state.gst_rate),a.append("brand",s.state.brand),a.append("type_of_supply",s.state.type_of_supply),a.append("varient",s.state.varient),a.append("material",s.state.material),a.append("stock_qty",s.state.stock_qty),a.append("stock_clearance_limit",s.state.stock_clearance_limit),a.append("colour",s.state.colour),a.append("size",s.state.size),a.append("inc_duty_tax",s.state.inc_duty_tax),a.append("std_package",s.state.std_package),a.append("barcode",s.state.barcode),a.append("status",s.state.status),a.append("product_img",s.state.selectedFile,s.state.selectedName),E.a.post("/addproduct",a).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},s.state={item_name:"",short_name:"",desc:"",code:"",hsn_code:"",productcategory:"",productsubcategory:"",unit:"",alt_unit:"",gst_rate:"",type_of_supply:"",varient:"",material:"",stock_qty:"",stock_clearance_limit:"",size:"",colour:"",brand:"",barcode:"",std_package:"",inc_duty_tax:"",product_img:"",selectedFile:null,selectedName:""},s.state={productC:[],productSC:[],units:[],altUnits:[],gstRate:[],pBrand:[]},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/allproductcategory").then((function(a){console.log(a),e.setState({productC:a.data.data})})).catch((function(e){console.log(e)})),E.a.get("/allproductsubcategory").then((function(a){console.log(a),e.setState({productSC:a.data.data})})).catch((function(e){console.log(e)})),E.a.get("/viewallunits").then((function(a){console.log(a),e.setState({units:a.data.data})})).catch((function(e){console.log(e)})),E.a.get("/allaltunit").then((function(a){console.log(a),e.setState({altUnits:a.data.data})})).catch((function(e){console.log(e)})),E.a.get("/viewallgst").then((function(a){console.log(a),e.setState({gstRate:a.data.data})})).catch((function(e){console.log(e)})),E.a.get("/allbrand").then((function(a){console.log(a),e.setState({pBrand:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(u.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Activity Logs")),i.a.createElement(u.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/activity/activityLogs")}},"Back"))),i.a.createElement(h.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Product Name"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Name",name:"item_name",value:this.state.item_name,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Short Name"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Name",name:"short_name",value:this.state.short_name,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Product Description"),i.a.createElement(b.a,{required:!0,type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler,rows:"1",placeholder:"Textarea"})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Product Code"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Product Code",name:"code",value:this.state.code,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"HSN Code"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"HSN Code",name:"hsn_code",value:this.state.hsn_code,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Product Category"),i.a.createElement(y.a,{type:"select",name:"productcategory",value:this.state.productcategory,onChange:this.changeHandler},this.state.productC.map((function(e){return i.a.createElement("option",{value:e._id,key:e._id},e.name)})))),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Product Sub Category"),i.a.createElement(y.a,{required:!0,type:"select",name:"productsubcategory",value:this.state.productsubcategory,onChange:this.changeHandler},this.state.productSC.map((function(e){return i.a.createElement("option",{value:e._id,key:e._id},e.name)})))),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Units"),i.a.createElement(y.a,{type:"select",name:"unit",value:this.state.unit,onChange:this.changeHandler},this.state.units.map((function(e){return i.a.createElement("option",{value:e._id,key:e._id},e.units_title)})))),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Alternative Units"),i.a.createElement(y.a,{type:"select",name:"alt_units",value:this.state.alt_units,onChange:this.changeHandler},this.state.altUnits.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.alt_unit_title)})))),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"GST Rate"),i.a.createElement(y.a,{type:"select",name:"gst_rate",value:this.state.gst_rate,onChange:this.changeHandler},this.state.gstRate.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.gst_title,"-",e.value)})))),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Brand"),i.a.createElement(y.a,{type:"select",name:"brand",value:this.state.brand,onChange:this.changeHandler},this.state.pBrand.map((function(e){return i.a.createElement("option",{value:e._id,key:e._id},e.name)})))),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Type Of Supply"),i.a.createElement(y.a,{type:"select",name:"type_of_supply",value:this.state.type_of_supply,onChange:this.changeHandler},i.a.createElement("option",null,"Goods"),i.a.createElement("option",null,"Services"))),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Varient"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Varient",name:"varient",value:this.state.varient,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Material"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Material",name:"material",value:this.state.material,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Stock Quantity"),i.a.createElement(b.a,{required:!0,type:"number",placeholder:"Stock Quantity",name:"stock_qty",value:this.state.stock_qty,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Stock Clearance Limit"),i.a.createElement(b.a,{required:!0,type:"number",placeholder:"Stock Clearance",name:"stock_clearance_limit",value:this.state.stock_clearance_limit,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Colour"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Colour",name:"colour",value:this.state.colour,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Size"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Size",name:"size",value:this.state.size,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Inclusive of Duties and Taxes"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Duties and Taxes",name:"inc_duty_tax",value:this.state.inc_duty_tax,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Standard Packing"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Standard Packing",name:"std_package",value:this.state.std_package,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Product Image"),i.a.createElement(b.a,{required:!0,type:"file",onChange:this.onChangeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Barcode"),i.a.createElement(b.a,{required:!0,type:"number",placeholder:"BarCode",name:"barcode",value:this.state.barcode,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),i.a.createElement(d.a,null,i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Activity Logs")))))))}}]),t}(o.Component)},825:function(e,a,t){"use strict";var n=t(44),l=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=l},827:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(17),c=t(19),r=t(1),o=t.n(r),i=t(2),m=t.n(i),d=t(5),u=t.n(d),p=t(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,c=e.bsSize,r=e.valid,i=e.invalid,m=e.tag,d=e.addon,g=e.plaintext,f=e.innerRef,b=Object(l.a)(e,h),y=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),v=m||("select"===s||"textarea"===s?s:"input"),_="form-control";g?(_+="-plaintext",v=m||"input"):"file"===s?_+="-file":"range"===s?_+="-range":y&&(_=d?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var N=Object(p.mapToCssModules)(u()(a,i&&"is-invalid",r&&"is-valid",!!c&&"form-control-"+c,_),t);return("input"===v||m&&"function"===typeof m)&&(b.type=s),b.children&&!g&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(v,Object(n.a)({},b,{ref:f,className:N,"aria-invalid":i}))},a}(o.a.Component);f.propTypes=g,f.defaultProps={type:"text"},a.a=f},830:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(17),c=t(19),r=t(1),o=t.n(r),i=t(2),m=t.n(i),d=t(5),u=t.n(d),p=t(4),h=["className","cssModule","inline","tag","innerRef"],g={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,c=e.tag,r=e.innerRef,i=Object(l.a)(e,h),m=Object(p.mapToCssModules)(u()(a,!!s&&"form-inline"),t);return o.a.createElement(c,Object(n.a)({},i,{ref:r,className:m}))},a}(r.Component);f.propTypes=g,f.defaultProps={tag:"form"},a.a=f},831:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(1),c=t.n(s),r=t(2),o=t.n(r),i=t(5),m=t.n(i),d=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:o.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,s=e.hidden,r=e.widths,o=e.tag,i=e.check,p=e.size,h=e.for,g=Object(l.a)(e,u),f=[];r.forEach((function(a,n){var l=e[a];if(delete g[a],l||""===l){var s,c=!n;if(Object(d.isObject)(l)){var r,o=c?"-":"-"+a+"-";s=b(c,a,l.size),f.push(Object(d.mapToCssModules)(m()(((r={})[s]=l.size||""===l.size,r["order"+o+l.order]=l.order||0===l.order,r["offset"+o+l.offset]=l.offset||0===l.offset,r))),t)}else s=b(c,a,l),f.push(s)}}));var y=Object(d.mapToCssModules)(m()(a,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,f,!!f.length&&"col-form-label"),t);return c.a.createElement(o,Object(n.a)({htmlFor:h},g,{className:y}))};y.propTypes=g,y.defaultProps=f,a.a=y}}]);
//# sourceMappingURL=180.b9576a08.chunk.js.map