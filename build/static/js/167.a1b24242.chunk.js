/*! For license information please see 167.a1b24242.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[167],{2265:function(e,t,r){"use strict";r.r(t);var n=r(135),a=r(11),i=r(12),o=r(14),l=r(13),c=r(1),s=r.n(c),u=r(821),d=r(822),f=r(823),m=r(826),h=r(819),p=r(600),g=r(596),v=r(184),y=r(832),w=r(199),E=r(830),b=r(102),N=r(837),x=r(324),S=r(456),k=r(277),j=r(932),_=r.n(j),z=r(22);r(833),r(831);function R(){R=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(z){c=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),l=new k(a||[]);return n(o,"_invoke",{value:b(e,r,l)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(z){return{type:"throw",arg:z}}}e.wrap=s;var d={};function f(){}function m(){}function h(){}var p={};c(p,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(j([])));v&&v!==t&&r.call(v,i)&&(p=v);var y=h.prototype=f.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;n(this,"_invoke",{value:function(n,i){function o(){return new t((function(a,o){!function n(a,i,o,l){var c=u(e[a],e,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,l)}))}l(c.arg)}(n,i,a,o)}))}return a=a?a.then(o,o):o()}})}function b(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return _()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var l=N(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function N(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return m.prototype=h,n(y,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:m,configurable:!0}),m.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new E(s(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var P=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"",valueGetter:"node.rowIndex + 1",field:"id",width:80,filter:!0},{headerName:"Image",field:"product_img",filter:!1,width:200,setColumnVisible:!1,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},e.data.product_img.map((function(e){return s.a.createElement("img",{className:" rounded-circle border-black m-0",src:e,alt:"user avatar",height:"40",width:"40"})})))}},{headerName:"Product Name",field:"product_name",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.product_name))}},{headerName:"SKU No.",field:"sku_no",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.sku_no))}},{headerName:"HSN/SAC",field:"hsn_sac_no",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.hsn_sac_no))}},{headerName:"Short Description",field:"short_desc",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.short_desc))}},{headerName:"Description",field:"long_desc",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",{className:"mt-1"},s.a.createElement("span",null,_()(e.data.long_desc)))}},{headerName:"Category",field:"productcategory?.name",filter:!0,width:180,cellRendererFramework:function(e){var t;return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,null===(t=e.data.productcategory)||void 0===t?void 0:t.name))}},{headerName:"Sub-Category",field:"productsubcategory?.name",filter:!0,width:180,cellRendererFramework:function(e){var t;return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,null===(t=e.data.productsubcategory)||void 0===t?void 0:t.name))}},{headerName:"Brand",field:"brand?.name",filter:!0,width:180,cellRendererFramework:function(e){var t;return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,null===(t=e.data.brand)||void 0===t?void 0:t.name))}},{headerName:"Product Tag",field:"tag",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.tag))}},{headerName:"Units",field:"unit?.units_title",filter:!0,width:180,cellRendererFramework:function(e){var t;return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,null===(t=e.data.unit)||void 0===t?void 0:t.units_title))}},{headerName:"Material",field:"material",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.material))}},{headerName:"Cost Price",field:"cost_price",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.cost_price))}},{headerName:"Selling Price",field:"sell_price",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.sell_price))}},{headerName:"GST Rate",field:"gstrate.gst_title",filter:!0,width:150,cellRendererFramework:function(e){var t;return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,null===(t=e.data.gstrate)||void 0===t?void 0:t.gst_title))}},{headerName:"Size",field:"size",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},e.data.size.map((function(e){return s.a.createElement("span",null,e.sizeName)})))}},{headerName:"Color",field:"color",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},e.data.color.map((function(e){return s.a.createElement("span",null,e.colorName)})))}},{headerName:"Stk Quantity",field:"qty",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.qty))}},{headerName:"Selling mode",field:"sell_mode",filter:!0,width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.sell_mode))}},{headerName:"Reorder Level",field:"reorder_level",filter:!0,width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",null,e.data.reorder_level))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(x.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return z.a.push("/app/productManagement/simpleProduct/viewSimpleProduct/".concat(t.data._id))}}),s.a.createElement(S.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var r=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:r})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(n.a)(R().mark((function e(){var t=this;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/getproduct").then((function(e){var r=e.data.data;console.log(r),t.setState({rowData:r})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(n.a)(R().mark((function e(t){return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,E.a.get("/del_product/".concat(t)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.rowData,n=t.columnDefs,a=t.defaultColDef,i=t.variation;return console.log(i),s.a.createElement(u.a,{className:"app-user-list"},s.a.createElement(d.a,{sm:"12"}),s.a.createElement(d.a,{sm:"12"},s.a.createElement(f.a,null,s.a.createElement(u.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"Product List"))),s.a.createElement(m.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(h.a,{className:"p-1 ag-dropdown"},s.a.createElement(p.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(k.a,{className:"ml-50",size:15})),s.a.createElement(g.a,{right:!0},s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(y.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(b.a.Consumer,null,(function(t){return s.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:a,columnDefs:n,rowData:r,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),r}(s.a.Component);t.default=P},830:function(e,t,r){"use strict";var n=r(44),a=r.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=a},831:function(e,t,r){},832:function(e,t,r){"use strict";var n=r(6),a=r(8),i=r(17),o=r(19),l=r(1),c=r.n(l),s=r(2),u=r.n(s),d=r(5),f=r.n(d),m=r(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var r;return(r=e.call(this,t)||this).getRef=r.getRef.bind(Object(i.a)(r)),r.focus=r.focus.bind(Object(i.a)(r)),r}Object(o.a)(t,e);var r=t.prototype;return r.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},r.focus=function(){this.ref&&this.ref.focus()},r.render=function(){var e=this.props,t=e.className,r=e.cssModule,i=e.type,o=e.bsSize,l=e.valid,s=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,g=e.innerRef,v=Object(a.a)(e,h),y=["radio","checkbox"].indexOf(i)>-1,w=new RegExp("\\D","g"),E=u||("select"===i||"textarea"===i?i:"input"),b="form-control";p?(b+="-plaintext",E=u||"input"):"file"===i?b+="-file":"range"===i?b+="-range":y&&(b=d?null:"form-check-input"),v.size&&w.test(v.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=v.size,delete v.size);var N=Object(m.mapToCssModules)(f()(t,s&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,b),r);return("input"===E||u&&"function"===typeof u)&&(v.type=i),v.children&&!p&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(m.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(E,Object(n.a)({},v,{ref:g,className:N,"aria-invalid":s}))},t}(c.a.Component);g.propTypes=p,g.defaultProps={type:"text"},t.a=g},933:function(e,t){}}]);
//# sourceMappingURL=167.a1b24242.chunk.js.map