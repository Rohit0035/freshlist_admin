(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[278],{2226:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t(12),r=t(14),c=t(13),m=t(1),s=t.n(m),i=t(817),d=t(815),o=t(816),u=t(192),h=t(820),E=t(830),g=t(831),p=t(827),b=t(915),y=t(904),C=t.n(y),v=(t(954),t(887),t(21)),N=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={editorState:b.EditorState.createEmpty()},e.onEditorStateChange=function(a){e.setState({editorState:a})},e.submitHandler=function(a){a.preventDefault(),console.log(e.editorState)},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this,a=this.state.editorState,t=C()(Object(b.convertToRaw)(a.getCurrentContent()));return console.log(t),s.a.createElement(i.a,null,s.a.createElement(d.a,{className:"m-2"},s.a.createElement(o.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Billable Expense Details")),s.a.createElement(o.a,null,s.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/purchasesAndExpenses/billableExpenseDetails/billableExpenseDetails")}},"Back"))),s.a.createElement(h.a,null,s.a.createElement(E.a,{onSubmit:this.submitHandler},s.a.createElement(d.a,null,s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Product ID"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"PRODUCT ID",name:"item_name",value:this.state.item_name,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Product Name"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"PRODUCT NAME",name:"short_name",value:this.state.short_name,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Product Description"),s.a.createElement(p.a,{required:!0,type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler,rows:"1",placeholder:"PRODUCT DESCRIPTION"})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Product Code"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"Product Code",name:"code",value:this.state.code,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"HSN Code"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"HSN Code",name:"hsn_code",value:this.state.hsn_code,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Varient"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"Varient",name:"varient",value:this.state.varient,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Material"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"Material",name:"material",value:this.state.material,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Stock Quantity"),s.a.createElement(p.a,{required:!0,type:"number",placeholder:"Stock Quantity",name:"stock_qty",value:this.state.stock_qty,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Stock Clearance Limit"),s.a.createElement(p.a,{required:!0,type:"number",placeholder:"Stock Clearance",name:"stock_clearance_limit",value:this.state.stock_clearance_limit,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Colour"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"Colour",name:"colour",value:this.state.colour,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Size"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"Size",name:"size",value:this.state.size,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Inclusive of Duties and Taxes"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"Duties and Taxes",name:"inc_duty_tax",value:this.state.inc_duty_tax,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Standard Packing"),s.a.createElement(p.a,{required:!0,type:"text",placeholder:"Standard Packing",name:"std_package",value:this.state.std_package,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Product Image"),s.a.createElement(p.a,{required:!0,type:"file",onChange:this.onChangeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Barcode"),s.a.createElement(p.a,{required:!0,type:"number",placeholder:"BarCode",name:"barcode",value:this.state.barcode,onChange:this.changeHandler})),s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,{className:"mb-1"},"Status"),s.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),s.a.createElement("span",{style:{marginRight:"20px"}},"Active"),s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),s.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),s.a.createElement(d.a,null,s.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Billable Expense Details"))))))}}]),t}(s.a.Component);a.default=N},887:function(e,a,t){}}]);
//# sourceMappingURL=278.2ce35a69.chunk.js.map