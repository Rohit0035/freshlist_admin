(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[263],{2235:function(e,t,a){"use strict";a.r(t);var n=a(45),i=a(11),r=a(12),l=a(14),s=a(13),c=a(1),o=a.n(c),u=a(821),d=a(822),p=a(823),m=a(198),f=a(826),g=a(819),h=a(600),b=a(596),v=a(183),z=a(832),E=(a(44),a(102)),S=a(837),w=a(320),y=a(455),P=a(276),N=a(21),x=(a(834),a(831),a(62)),A=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e,r;Object(i.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(r=t.call.apply(t,[this].concat(s))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Attribute Name",field:"customerId",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.data.customerId))}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(w.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return N.a.push("/app/customer/editCustomer")}}),o.a.createElement(y.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=r.gridApi.getSelectedRows();r.runthisfunction(e.data._id),r.gridApi.updateRowData({remove:t})}}))})),e)]},r.onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi,r.setState({currenPageSize:r.gridApi.paginationGetCurrentPage()+1,getPageSize:r.gridApi.paginationGetPageSize(),totalPages:r.gridApi.paginationGetTotalPages()})},r.updateSearchQuery=function(e){r.gridApi.setQuickFilter(e)},r.filterSize=function(e){r.gridApi&&(r.gridApi.paginationSetPageSize(Number(e)),r.setState({currenPageSize:e,getPageSize:e}))},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return console.log(a),o.a.createElement(u.a,{className:"app-user-list"},o.a.createElement(d.a,{sm:"12"}),o.a.createElement(d.a,{sm:"12"},o.a.createElement(p.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"Product Attribute List")),o.a.createElement(d.a,null,o.a.createElement(m.a,{style:{marginRight:"-22rem"},className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/freshlist/attribute/ProductAttributeList")}},"Back")),o.a.createElement(d.a,null,o.a.createElement(x.b,{render:function(e){var t=e.history;return o.a.createElement(m.a,{className:"btn btn-primary float-right",onClick:function(){return t.push("/app/freshlist/attribute/addProductAttribute")}},"Add New")}}))),o.a.createElement(f.a,null,null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(g.a,{className:"p-1 ag-dropdown"},o.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(P.a,{className:"ml-50",size:15})),o.a.createElement(b.a,{right:!0},o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(z.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(E.a.Consumer,null,(function(t){return o.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(o.a.Component);t.default=A},831:function(e,t,a){},832:function(e,t,a){"use strict";var n=a(6),i=a(7),r=a(17),l=a(19),s=a(1),c=a.n(s),o=a(2),u=a.n(o),d=a(5),p=a.n(d),m=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,o=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,h=e.innerRef,b=Object(i.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,z=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),S="form-control";g?(S+="-plaintext",E=u||"input"):"file"===r?S+="-file":"range"===r?S+="-range":v&&(S=d?null:"form-check-input"),b.size&&z.test(b.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var w=Object(m.mapToCssModules)(p()(t,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,S),a);return("input"===E||u&&"function"===typeof u)&&(b.type=r),b.children&&!g&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(m.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(E,Object(n.a)({},b,{ref:h,className:w,"aria-invalid":o}))},t}(c.a.Component);h.propTypes=g,h.defaultProps={type:"text"},t.a=h}}]);
//# sourceMappingURL=263.8f2e07fd.chunk.js.map