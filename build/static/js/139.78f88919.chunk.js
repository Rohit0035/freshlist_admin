(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[139],{2294:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),l=a(14),s=a(13),c=a(1),o=a.n(c),i=a(823),u=a(821),h=a(822),d=a(199),m=a(826),f=a(836),p=a(835),g=a(832),y=a(900),E=a(892),b=a.n(E),O=(a(926),a(871),a(22)),v=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={editorState:y.EditorState.createEmpty()},e.onEditorStateChange=function(t){e.setState({editorState:t})},e.submitHandler=function(t){t.preventDefault(),console.log(e.editorState)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state.editorState,a=b()(Object(y.convertToRaw)(t.getCurrentContent()));return console.log(a),o.a.createElement(i.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(h.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Billable Expense Details")),o.a.createElement(h.a,null,o.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/purchasesAndExpenses/billableExpenseDetails/billableExpenseDetails")}},"Back"))),o.a.createElement(m.a,null,o.a.createElement(f.a,{onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Product ID"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"PRODUCT ID",name:"item_name",value:this.state.item_name,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Product Name"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"PRODUCT NAME",name:"short_name",value:this.state.short_name,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Product Description"),o.a.createElement(g.a,{required:!0,type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler,rows:"1",placeholder:"PRODUCT DESCRIPTION"})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Product Code"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Product Code",name:"code",value:this.state.code,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"HSN Code"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"HSN Code",name:"hsn_code",value:this.state.hsn_code,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Varient"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Varient",name:"varient",value:this.state.varient,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Material"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Material",name:"material",value:this.state.material,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Stock Quantity"),o.a.createElement(g.a,{required:!0,type:"number",placeholder:"Stock Quantity",name:"stock_qty",value:this.state.stock_qty,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Stock Clearance Limit"),o.a.createElement(g.a,{required:!0,type:"number",placeholder:"Stock Clearance",name:"stock_clearance_limit",value:this.state.stock_clearance_limit,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Colour"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Colour",name:"colour",value:this.state.colour,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Size"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Size",name:"size",value:this.state.size,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Inclusive of Duties and Taxes"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Duties and Taxes",name:"inc_duty_tax",value:this.state.inc_duty_tax,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Standard Packing"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Standard Packing",name:"std_package",value:this.state.std_package,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Product Image"),o.a.createElement(g.a,{required:!0,type:"file",onChange:this.onChangeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,null,"Barcode"),o.a.createElement(g.a,{required:!0,type:"number",placeholder:"BarCode",name:"barcode",value:this.state.barcode,onChange:this.changeHandler})),o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),o.a.createElement(u.a,null,o.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Billable Expense Details"))))))}}]),a}(o.a.Component);t.default=v},832:function(e,t,a){"use strict";var n=a(6),r=a(8),l=a(17),s=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),h=a(5),d=a.n(h),m=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,s=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,h=e.addon,p=e.plaintext,g=e.innerRef,y=Object(r.a)(e,f),E=["radio","checkbox"].indexOf(l)>-1,b=new RegExp("\\D","g"),O=u||("select"===l||"textarea"===l?l:"input"),v="form-control";p?(v+="-plaintext",O=u||"input"):"file"===l?v+="-file":"range"===l?v+="-range":E&&(v=h?null:"form-check-input"),y.size&&b.test(y.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=y.size,delete y.size);var C=Object(m.mapToCssModules)(d()(t,i&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,v),a);return("input"===O||u&&"function"===typeof u)&&(y.type=l),y.children&&!p&&"select"!==l&&"string"===typeof O&&"select"!==O&&(Object(m.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete y.children),o.a.createElement(O,Object(n.a)({},y,{ref:g,className:C,"aria-invalid":i}))},t}(o.a.Component);g.propTypes=p,g.defaultProps={type:"text"},t.a=g},835:function(e,t,a){"use strict";var n=a(6),r=a(8),l=a(1),s=a.n(l),c=a(2),o=a.n(c),i=a(5),u=a.n(i),h=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],m=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),p={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:h.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,l=e.hidden,c=e.widths,o=e.tag,i=e.check,m=e.size,f=e.for,p=Object(r.a)(e,d),g=[];c.forEach((function(t,n){var r=e[t];if(delete p[t],r||""===r){var l,s=!n;if(Object(h.isObject)(r)){var c,o=s?"-":"-"+t+"-";l=y(s,t,r.size),g.push(Object(h.mapToCssModules)(u()(((c={})[l]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c))),a)}else l=y(s,t,r),g.push(l)}}));var E=Object(h.mapToCssModules)(u()(t,!!l&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,g,!!g.length&&"col-form-label"),a);return s.a.createElement(o,Object(n.a)({htmlFor:f},p,{className:E}))};E.propTypes=p,E.defaultProps=g,t.a=E},836:function(e,t,a){"use strict";var n=a(6),r=a(8),l=a(17),s=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),h=a(5),d=a.n(h),m=a(4),f=["className","cssModule","inline","tag","innerRef"],p={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,s=e.tag,c=e.innerRef,i=Object(r.a)(e,f),u=Object(m.mapToCssModules)(d()(t,!!l&&"form-inline"),a);return o.a.createElement(s,Object(n.a)({},i,{ref:c,className:u}))},t}(c.Component);g.propTypes=p,g.defaultProps={tag:"form"},t.a=g},871:function(e,t,a){},892:function(e,t,a){e.exports=function(){"use strict";function e(e,t){if(e)for(var a in e)({}).hasOwnProperty.call(e,a)&&t(a,e[a])}var t={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function a(e){return e&&t[e]}function n(t){var a="";return e(t,(function(e,t){t&&(a+="".concat(e,":").concat(t,";"))})),a}function r(e,t){var a={};return e.COLOR[t]&&(a.COLOR=e.COLOR[t]),e.BGCOLOR[t]&&(a.BGCOLOR=e.BGCOLOR[t]),e.FONTSIZE[t]&&(a.FONTSIZE=e.FONTSIZE[t]),e.FONTFAMILY[t]&&(a.FONTFAMILY=e.FONTFAMILY[t]),e.UNDERLINE[t]&&(a.UNDERLINE=!0),e.ITALIC[t]&&(a.ITALIC=!0),e.BOLD[t]&&(a.BOLD=!0),e.STRIKETHROUGH[t]&&(a.STRIKETHROUGH=!0),e.CODE[t]&&(a.CODE=!0),e.SUBSCRIPT[t]&&(a.SUBSCRIPT=!0),e.SUPERSCRIPT[t]&&(a.SUPERSCRIPT=!0),a}function l(e,t,a){var n=!0;return a>0&&a<e.length?t.forEach((function(t){n=n&&e[t][a]===e[t][a-1]})):n=!1,n}function s(e,t,a,n){var r=e[t];if("function"===typeof n){var l=n(r,a);if(l)return l}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(a,"</a>");if("LINK"===r.type){var s=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(s,'">').concat(a,"</a>")}if("IMAGE"===r.type){var c=r.data.alignment;return c&&c.length?'<div style="text-align:'.concat(c,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):a}function c(e,t,a,n){var s=[],c=Array.from(e.text);if(c.length>0)for(var o,i=function(e){var t=e.text,a=e.inlineStyleRanges,n={BOLD:new Array(t.length),ITALIC:new Array(t.length),UNDERLINE:new Array(t.length),STRIKETHROUGH:new Array(t.length),CODE:new Array(t.length),SUPERSCRIPT:new Array(t.length),SUBSCRIPT:new Array(t.length),COLOR:new Array(t.length),BGCOLOR:new Array(t.length),FONTSIZE:new Array(t.length),FONTFAMILY:new Array(t.length),length:t.length};return a&&a.length>0&&a.forEach((function(e){for(var t=e.offset,a=t+e.length,r=t;r<a;r+=1)0===e.style.indexOf("color-")?n.COLOR[r]=e.style.substring(6):0===e.style.indexOf("bgcolor-")?n.BGCOLOR[r]=e.style.substring(8):0===e.style.indexOf("fontsize-")?n.FONTSIZE[r]=e.style.substring(9):0===e.style.indexOf("fontfamily-")?n.FONTFAMILY[r]=e.style.substring(11):n[e.style]&&(n[e.style][r]=!0)})),n}(e),u=a;u<n;u+=1)u!==a&&l(i,t,u)?(o.text.push(c[u]),o.end=u+1):(o={styles:r(i,u),text:[c[u]],start:u,end:u+1},s.push(o));return s}function o(t,a){var n=c(t,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],a.start,a.end),r="";return n.forEach((function(t){r+=function(t){var a=t.styles,n=function(e){return e&&e.length>0?e.map((function(e){switch(e){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})).join(""):""}(t.text);return e(a,(function(e,t){n=function(e,t){return"BOLD"===e?"<strong>".concat(t,"</strong>"):"ITALIC"===e?"<em>".concat(t,"</em>"):"UNDERLINE"===e?"<ins>".concat(t,"</ins>"):"STRIKETHROUGH"===e?"<del>".concat(t,"</del>"):"CODE"===e?"<code>".concat(t,"</code>"):"SUPERSCRIPT"===e?"<sup>".concat(t,"</sup>"):"SUBSCRIPT"===e?"<sub>".concat(t,"</sub>"):t}(e,n)})),n}(t)})),r=function(e,t){if(e&&(e.COLOR||e.BGCOLOR||e.FONTSIZE||e.FONTFAMILY)){var a='style="';return e.COLOR&&(a+="color: ".concat(e.COLOR,";")),e.BGCOLOR&&(a+="background-color: ".concat(e.BGCOLOR,";")),e.FONTSIZE&&(a+="font-size: ".concat(e.FONTSIZE).concat(/^\d+$/.test(e.FONTSIZE)?"px":"",";")),e.FONTFAMILY&&(a+="font-family: ".concat(e.FONTFAMILY,";")),"<span ".concat(a+='"',">").concat(t,"</span>")}return t}(a.styles,r)}function i(e,t,a,n){var r=[],l=function(e,t){var a=[],n=0,r=e.entityRanges.map((function(e){return{offset:e.offset,length:e.length,key:e.key,type:"ENTITY"}}));return(r=(r=r.concat(function(e,t){var a=[];if(t)for(var n=0,r=0,l=e,s=t.trigger||"#",c=t.separator||" ";l.length>0&&r>=0;)if(l[0]===s?(r=0,n=0,l=l.substr(s.length)):(r=l.indexOf(c+s))>=0&&(l=l.substr(r+(c+s).length),n+=r+c.length),r>=0){var o=l.indexOf(c)>=0?l.indexOf(c):l.length,i=l.substr(0,o);i&&i.length>0&&a.push({offset:n,length:i.length+s.length,type:"HASHTAG"}),n+=s.length}return a}(e.text,t))).sort((function(e,t){return e.offset-t.offset}))).forEach((function(e){e.offset>n&&a.push({start:n,end:e.offset}),a.push({start:e.offset,end:e.offset+e.length,entityKey:e.key,type:e.type}),n=e.offset+e.length})),n<e.text.length&&a.push({start:n,end:e.text.length}),a}(e,a);return l.forEach((function(a,i){var u=function(e,t,a,n){var r=[];c(e,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],a.start,a.end).forEach((function(t){r.push(o(e,t))}));var l=r.join("");return"ENTITY"===a.type?void 0!==a.entityKey&&null!==a.entityKey&&(l=s(t,a.entityKey,l,n)):"HASHTAG"===a.type&&(l='<a href="'.concat(l,'" class="wysiwyg-hashtag">').concat(l,"</a>")),l}(e,t,a,n);0===i&&(u=function(e){if(e){for(var t=e,a=0;a<t.length&&" "===e[a];a+=1)t=t.replace(" ","&nbsp;");return t}return e}(u)),i===l.length-1&&(u=function(e){if(e){for(var t=e,a=t.length-1;a>=0&&" "===t[a];a-=1)t="".concat(t.substring(0,a),"&nbsp;").concat(t.substring(a+1));return t}return e}(u)),r.push(u)})),r.join("")}function u(e,t,r,l,s){var c,o=[],h=[];return e.forEach((function(e){var d=!1;if(c?c.type!==e.type?(o.push("</".concat(a(c.type),">\n")),o.push("<".concat(a(e.type),">\n"))):c.depth===e.depth?h&&h.length>0&&(o.push(u(h,t,r,l,s)),h=[]):(d=!0,h.push(e)):o.push("<".concat(a(e.type),">\n")),!d){o.push("<li");var m=n(e.data);m&&o.push(' style="'.concat(m,'"')),l&&o.push(' dir = "auto"'),o.push(">"),o.push(i(e,t,r,s)),o.push("</li>\n"),c=e}})),h&&h.length>0&&o.push(u(h,t,r,l,s)),o.push("</".concat(a(c.type),">\n")),o.join("")}return function(e,t,r,l){var c=[];if(e){var o=e.blocks,h=e.entityMap;if(o&&o.length>0){var d=[];if(o.forEach((function(e){if("unordered-list-item"===(f=e.type)||"ordered-list-item"===f)d.push(e);else{if(d.length>0){var o=u(d,h,t,l);c.push(o),d=[]}var m=function(e,t,r,l,c){var o=[];if(function(e){return e.entityRanges.length>0&&(void 0===(t=e.text)||null===t||0===t.length||0===t.trim().length||"atomic"===e.type);var t}(e))o.push(s(t,e.entityRanges[0].key,void 0,c));else{var u=a(e.type);if(u){o.push("<".concat(u));var h=n(e.data);h&&o.push(' style="'.concat(h,'"')),l&&o.push(' dir = "auto"'),o.push(">"),o.push(i(e,t,r,c)),o.push("</".concat(u,">"))}}return o.push("\n"),o.join("")}(e,h,t,r,l);c.push(m)}var f})),d.length>0){var m=u(d,h,t,r,l);c.push(m),d=[]}}}return c.join("")}}()}}]);
//# sourceMappingURL=139.78f88919.chunk.js.map