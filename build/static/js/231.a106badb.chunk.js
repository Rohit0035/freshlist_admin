(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[231],{2323:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),i=t(14),l=t(13),s=t(1),c=t.n(s),o=t(821),d=t(822),u=t(823),m=t(826),f=t(819),p=t(600),g=t(596),h=t(184),b=t(832),v=t(199),w=(t(830),t(102)),E=t(837),S=t(324),z=t(456),N=t(277),R=t(22),y=(t(833),t(831),function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Store/Company name",field:"banner_title",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.banner_title))}},{headerName:"Owner Name",field:"banner_title",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.banner_title))}},{headerName:"Phone No.",field:"banner_title",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.banner_title))}},{headerName:"Email",field:"banner_title",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.banner_title))}},{headerName:"Subscription Date",field:"banner_title",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.banner_title))}},{headerName:"Renewal Date",field:"banner_title",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.banner_title))}},{headerName:"Slot",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Single"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Dual"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Duration",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"6 months"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"12 months"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(a){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(S.a,{className:"mr-50",size:20,onClick:function(){return R.a.push("/app/sponsoredAds/viewSponsoredAds/".concat(a.data._id))}}),c.a.createElement(z.a,{size:20,onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return console.log(t),c.a.createElement(o.a,{className:"app-user-list"},c.a.createElement(d.a,{sm:"12"}),c.a.createElement(d.a,{sm:"12"},c.a.createElement(u.a,null,c.a.createElement(o.a,{className:"m-2"},c.a.createElement(d.a,null,c.a.createElement("h1",{sm:"6",className:"float-left"},"Sponsored Ads Details"))),c.a.createElement(m.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(f.a,{className:"p-1 ag-dropdown"},c.a.createElement(p.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(N.a,{className:"ml-50",size:15})),c.a.createElement(g.a,{right:!0},c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(b.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(v.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(w.a.Consumer,null,(function(a){return c.a.createElement(E.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(c.a.Component));a.default=y},830:function(e,a,t){"use strict";var n=t(44),r=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=r},831:function(e,a,t){},832:function(e,a,t){"use strict";var n=t(6),r=t(8),i=t(17),l=t(19),s=t(1),c=t.n(s),o=t(2),d=t.n(o),u=t(5),m=t.n(u),f=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,s=e.valid,o=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,h=e.innerRef,b=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(i)>-1,w=new RegExp("\\D","g"),E=d||("select"===i||"textarea"===i?i:"input"),S="form-control";g?(S+="-plaintext",E=d||"input"):"file"===i?S+="-file":"range"===i?S+="-range":v&&(S=u?null:"form-check-input"),b.size&&w.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var z=Object(f.mapToCssModules)(m()(a,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,S),t);return("input"===E||d&&"function"===typeof d)&&(b.type=i),b.children&&!g&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(E,Object(n.a)({},b,{ref:h,className:z,"aria-invalid":o}))},a}(c.a.Component);h.propTypes=g,h.defaultProps={type:"text"},a.a=h}}]);
//# sourceMappingURL=231.a106badb.chunk.js.map