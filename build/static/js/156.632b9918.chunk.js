(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[156],{2160:function(e,a,t){"use strict";t.r(a);var n=t(11),l=t(12),s=t(14),c=t(13),r=t(1),i=t.n(r),m=t(821),o=t(822),u=t(598),d=t(99),f=t(823),E=t(199),h=t(826),v=(t(22),t(863),t(831),t(830)),p=t(62),b=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/user/getviewone/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(d.a,{href:"/app/freshlist/customer/customerList",tag:"a"},"Customer List"),i.a.createElement(d.a,{active:!0}," View CustomerList"))))),i.a.createElement(f.a,{className:"overflow-hidden app-ecommerce-details"},i.a.createElement(m.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View HubList")),i.a.createElement(o.a,null,i.a.createElement(p.b,{render:function(e){var a=e.history;return i.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/hubs/hubList")}},"Back")}}))),i.a.createElement(h.a,{className:"pb-0"},i.a.createElement(m.a,{className:"ml-4"},i.a.createElement(o.a,{sm:"9",md:"12",lg:"12"},i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Customer Name :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.username))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.email))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile No. :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.mobile))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.status))))))))))}}]),t}(i.a.Component);a.default=b},830:function(e,a,t){"use strict";var n=t(44),l=t.n(n).a.create({baseURL:"http://3.6.37.16:8000"});a.a=l},831:function(e,a,t){},863:function(e,a,t){}}]);
//# sourceMappingURL=156.632b9918.chunk.js.map