(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbb4d4ea","chunk-6e9e04dc"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function r(t,e,a,r,n,o,i){try{var s=t[o](i),c=s.value}catch(l){return void a(l)}s.done?e(c):Promise.resolve(c).then(r,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,o){var i=t.apply(e,a);function s(t){r(i,n,o,s,c,"next",t)}function c(t){r(i,n,o,s,c,"throw",t)}s(void 0)}))}}},"614c":function(t,e,a){},"96cf":function(t,e,a){var r=function(t){"use strict";var e,a=Object.prototype,r=a.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(F){c=function(t,e,a){return t[e]=a}}function l(t,e,a,r){var n=e&&e.prototype instanceof g?e:g,o=Object.create(n.prototype),i=new M(r||[]);return o._invoke=L(t,a,i),o}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(F){return{type:"throw",arg:F}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",m={};function g(){}function v(){}function y(){}var _={};_[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==a&&r.call(w,o)&&(_=w);var k=y.prototype=g.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function a(n,o,i,s){var c=u(t[n],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,s)}),(function(t){a("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return a("throw",t,i,s)}))}s(c.arg)}var n;function o(t,r){function o(){return new e((function(e,n){a(t,r,e,n)}))}return n=n?n.then(o,o):o()}this._invoke=o}function L(t,e,a){var r=d;return function(n,o){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===n)throw o;return V()}a.method=n,a.arg=o;while(1){var i=a.delegate;if(i){var s=T(i,a);if(s){if(s===m)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=p;var c=u(t,e,a);if("normal"===c.type){if(r=a.done?f:h,c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r=f,a.method="throw",a.arg=c.arg)}}}function T(t,a){var r=t.iterator[a.method];if(r===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,T(t,a),"throw"===a.method))return m;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=u(r,t.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,m;var o=n.arg;return o?o.done?(a[t.resultName]=o.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,m):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,m)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function S(t){if(t){var a=t[o];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function a(){while(++n<t.length)if(r.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return i.next=i}}return{next:V}}function V(){return{value:e,done:!0}}return v.prototype=k.constructor=y,y.constructor=v,v.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(C.prototype),C.prototype[i]=function(){return this},t.AsyncIterator=C,t.async=function(e,a,r,n,o){void 0===o&&(o=Promise);var i=new C(l(e,a,r,n),o);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(k),c(k,s,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=S,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(r,n){return s.type="throw",s.arg=t,a.next=r,n&&(a.method="next",a.arg=e),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),E(a),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;E(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:S(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,o=a("1dde"),i=a("ae40"),s=o("map"),c=i("map");r({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},ed17:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"code-statistic",attrs:{"element-loading-text":"拼命加载中...","element-loading-spinner":"el-icon-loading"}},[a("div",{staticClass:"head"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.$route.meta.title)+" ")])]),a("div",{staticClass:"main-cards"},[a("div",{staticClass:"card"},[a("span",[t._v("昨日新增客户数 "),a("el-tooltip",{staticClass:"item",attrs:{content:"新增客户数，成员新添加的客户数量。",placement:"top"}},[a("i",{staticClass:"iconfont icon-question-circle"})])],1),a("p",[a("span",[t._v(t._s(t.yesterday_count.add_customer||0))]),a("span",[t._v(t._s(0==t.before_count.add_customer?"与前日持平":t.before_count.add_customer>0?"与前日相比增长"+Math.abs(t.before_count.add_customer)+"%":"与前日相比下降"+Math.abs(t.before_count.add_customer)+"%"))])])]),a("div",{staticClass:"card"},[a("span",[t._v("昨日被客户删除/拉黑的人数 "),a("el-tooltip",{staticClass:"item",attrs:{content:"删除/拉黑成员的客户数，即将成员删除或加入黑名单的客户数。",placement:"top"}},[a("i",{staticClass:"iconfont icon-question-circle"})])],1),a("p",[a("span",[t._v(t._s(t.yesterday_count.deleted_customer||0))]),a("span",[t._v(t._s(0==t.before_count.deleted_customer?"与前日持平":t.before_count.deleted_customer>0?"与前日相比增长"+Math.abs(t.before_count.deleted_customer)+"%":"与前日相比下降"+Math.abs(t.before_count.deleted_customer)+"%"))])])]),a("div",{staticClass:"card"},[a("span",[t._v("昨日删除人数 "),a("el-tooltip",{staticClass:"item",attrs:{content:"员工删除的客户数。",placement:"top"}},[a("i",{staticClass:"iconfont icon-question-circle"})])],1),a("p",[a("span",[t._v(t._s(t.yesterday_count.deleted_staff||0))]),a("span",[t._v(t._s(0==t.before_count.deleted_staff?"与前日持平":t.before_count.deleted_staff>0?"与前日相比增长"+Math.abs(t.before_count.deleted_staff)+"%":"与前日相比下降"+Math.abs(t.before_count.deleted_staff)+"%"))])])]),a("div",{staticClass:"card"},[a("span",[t._v("昨日净增人数 "),a("el-tooltip",{staticClass:"item",attrs:{content:"新增客户数减去昨日被客户删除/拉黑人数。",placement:"top"}},[a("i",{staticClass:"iconfont icon-question-circle"})])],1),a("p",[a("span",[t._v(t._s(t.yesterday_count.growth||0))]),a("span",[t._v(t._s(0==t.before_count.growth?"与前日持平":t.before_count.growth>0?"与前日相比增长"+Math.abs(t.before_count.growth)+"%":"与前日相比下降"+Math.abs(t.before_count.growth)+"%"))])])])]),a("div",{staticClass:"header-tabs"},[a("el-button",{class:1===t.checked?"active":"",on:{click:function(e){return t.handleCheckTabs(1)}}},[t._v("活码TOP10")]),a("el-button",{class:2===t.checked?"active":"",on:{click:function(e){return t.handleCheckTabs(2)}}},[t._v("客户增长")]),a("el-button",{class:3===t.checked?"active":"",on:{click:function(e){return t.handleCheckTabs(3)}}},[t._v("客户属性")]),a("span",{staticClass:"line"})],1),a("div",{staticClass:"flex"},[a("div",{directives:[{name:"show",rawName:"v-show",value:3!==t.checked,expression:"checked !== 3"}],staticClass:"date"},[a("el-button",{ref:"day",class:1===t.date_type?"btn-blue btn-active":"btn-white",attrs:{size:"small"},on:{click:function(e){t.date_type=1}}},[t._v("按日")]),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:1===t.date_type,expression:"date_type === 1"}],staticClass:"date-active",staticStyle:{width:"260px"},attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至",clearable:!1,"start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small"},model:{value:t.daysValue,callback:function(e){t.daysValue=e},expression:"daysValue"}}),a("el-button",{ref:"week",class:2===t.date_type?"btn-blue btn-active":"btn-white",staticStyle:{"margin-left":"20px"},attrs:{size:"small"},on:{click:function(e){t.date_type=2}}},[t._v("按周")]),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:2===t.date_type,expression:"date_type === 2"}],staticClass:"date-active-center",staticStyle:{width:"160px"},attrs:{type:"week",format:"yyyy 第 WW 周","value-format":"yyyy-MM-dd","range-separator":"至",clearable:!1,"start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small"},model:{value:t.weekValueStart,callback:function(e){t.weekValueStart=e},expression:"weekValueStart"}}),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:2===t.date_type,expression:"date_type === 2"}],staticClass:"date-active-left",staticStyle:{width:"160px"},attrs:{type:"week",format:"yyyy 第 WW 周","value-format":"yyyy-MM-dd",clearable:!1,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small"},model:{value:t.weekValueEnd,callback:function(e){t.weekValueEnd=e},expression:"weekValueEnd"}}),a("el-button",{ref:"month",staticClass:"btn-white",class:3===t.date_type?"btn-blue btn-active":"btn-white",staticStyle:{"margin-left":"20px"},attrs:{size:"small"},on:{click:function(e){t.date_type=3}}},[t._v("按月")]),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:3===t.date_type,expression:"date_type === 3"}],staticClass:"date-active",staticStyle:{width:"260px"},attrs:{size:"small",type:"monthrange",format:"yyyy-MM-dd",clearable:!1,"value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},model:{value:t.monthValue,callback:function(e){t.monthValue=e},expression:"monthValue"}}),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",placeholder:"请选择"},model:{value:t.group_code,callback:function(e){t.group_code=e},expression:"group_code"}},[a("el-option",{attrs:{label:"所有活码",value:""}}),t._l(t.liveGroupList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],2)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.checked,expression:"checked === 1"}],staticClass:"legend"},[a("span",{on:{click:function(e){return t.handleChange(0)}}},[a("span",{staticClass:"icon-circle c1"}),a("span",{staticClass:"text"},[t._v("新增客户数")])]),a("span",{on:{click:function(e){return t.handleChange(1)}}},[a("span",{staticClass:"icon-circle c2 c-active"}),a("span",{staticClass:"text"},[t._v("被客户删除/拉黑人数")])]),a("span",{on:{click:function(e){return t.handleChange(2)}}},[a("span",{staticClass:"icon-circle c3 c-active"}),a("span",{staticClass:"text"},[t._v("删除人数")])]),a("span",{on:{click:function(e){return t.handleChange(3)}}},[a("span",{staticClass:"icon-circle c4 c-active"}),a("span",{staticClass:"text"},[t._v("净增人数")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.checked,expression:"checked === 1"}],staticClass:"echarts",attrs:{id:"bar"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.checked,expression:"checked === 2"}],staticClass:"echarts",attrs:{id:"line"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.checked,expression:"checked === 1"}],staticClass:"main-footer"},[a("div",{staticClass:"f-title"},[a("span",[t._v("详细数据")]),a("el-button",{staticClass:"btn-blue",attrs:{size:"small"}},[t._v("导出数据")])],1),a("div",{staticClass:"table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.topTableData,"header-cell-style":{color:"#333",fontSize:"14px",backgroundColor:"#F6idF7FB",fontWeight:"normal"}}},[a("el-table-column",{attrs:{label:"排行"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1))]}}])}),a("el-table-column",{attrs:{prop:"name",label:"活码名称"}}),a("el-table-column",{attrs:{prop:"num",label:1===t.stat_type?"新增客户数":2===t.stat_type?"被客户删除/拉黑人数":3===t.stat_type?"删除人数":4===t.stat_type?"净增人数":""}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.topTableData.length,expression:"topTableData.length !== 0"}],staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.topPage,"page-sizes":[10,20,50,100],"page-size":t.topLimit,layout:"total, sizes, prev, pager, next, jumper",total:t.topTotal},on:{"size-change":function(e){t.topLimit=e},"current-change":function(e){t.topPage=e}}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.checked,expression:"checked === 2"}],staticClass:"main-footer"},[a("div",{staticClass:"f-title"},[a("span",[t._v("详细数据")]),a("el-button",{staticClass:"btn-blue",attrs:{size:"small"}},[t._v("导出数据")])],1),a("div",{staticClass:"table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.growTableData,"header-cell-style":{color:"#333",fontSize:"14px",backgroundColor:"#F6F7FB",fontWeight:"normal"}}},[a("el-table-column",{attrs:{prop:"created_at",label:"时间"}}),a("el-table-column",{attrs:{prop:"add_customer",label:"新增客户数"}}),a("el-table-column",{attrs:{prop:"deleted_customer",label:"被客户删除/拉黑人数"}}),a("el-table-column",{attrs:{prop:"deleted_staff",label:"删除人数","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"流失率"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.loss)+"%")]}}])},[a("template",{slot:"header"},[t._v(" 流失率 "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"(被客户删除/拉黑人数+员工删除客户人数)/当前总客户人数",placement:"top-start"}},[a("i",{staticClass:"el-icon-question",staticStyle:{cursor:"pointer"}})])],1)],2),a("el-table-column",{attrs:{prop:"growth"}},[a("template",{slot:"header"},[t._v(" 净增人数 "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"新增人数-被客户删除/拉黑人数",placement:"top-start"}},[a("i",{staticClass:"el-icon-question",staticStyle:{cursor:"pointer"}})])],1)],2)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.growTableData.length,expression:"growTableData.length !== 0"}],staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.growPage,"page-sizes":[10,20,50,100],"page-size":t.growLimit,layout:"total, sizes, prev, pager, next, jumper",total:t.growTotal},on:{"size-change":function(e){t.growLimit=e,t.getAddTable()},"current-change":function(e){t.growPage=e,t.getAddTable()}}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:3===t.checked,expression:"checked === 3"}],staticClass:"main-footer"},[a("p",{staticClass:"date"},[a("el-date-picker",{staticStyle:{width:"260px"},attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至",clearable:!1,"start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small"},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}}),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",placeholder:"请选择"},model:{value:t.groupCode,callback:function(e){t.groupCode=e},expression:"groupCode"}},[a("el-option",{attrs:{label:"所有活码",value:""}}),t._l(t.liveGroupList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],2)],1),a("div",{staticClass:"f-title"},[a("span",[t._v("详细数据")]),a("el-button",{staticClass:"btn-blue",attrs:{size:"small"}},[t._v("导出数据")])],1),a("div",{staticClass:"table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.attrTableData,"header-cell-style":{color:"#333",fontSize:"14px",backgroundColor:"#F6F7FB",fontWeight:"normal"}}},[a("el-table-column",{attrs:{prop:"follow_state",label:"渠道"}}),a("el-table-column",{attrs:{prop:"num",label:"新增客户数"}}),a("el-table-column",{attrs:{label:"客户占比"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.ratio)+"%")]}}])})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.attrTableData.length,expression:"attrTableData.length !== 0"}],staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.attrPage,"page-sizes":[10,20,50,100],"page-size":t.attrLimit,layout:"total, sizes, prev, pager, next, jumper",total:t.attrTotal},on:{"size-change":function(e){t.attrLimit=e},"current-change":function(e){t.attrPage=e}}})],1),t._m(0),a("div",{attrs:{id:"line-pie"}})])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"f-title"},[a("span",[t._v("客户性别统计")])])}],o=(a("99af"),a("4160"),a("d81d"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3"),a("159b"),a("ddb0"),a("2909")),i=(a("96cf"),a("1da1")),s=a("365c"),c={data:function(){return{loading:!1,checked:1,topTableData:[],topPage:1,topLimit:10,topTotal:0,growTableData:[],growPage:1,growLimit:10,growTotal:0,attrTableData:[],attrPage:1,attrLimit:10,attrTotal:0,date_type:1,daysValue:[this.getCurrentMonthFirst(),this.getCurrentMonthLast()],weekValueStart:this.getCurrentMonthFirst(),weekValueEnd:this.getCurrentMonthLast(),monthValue:[(new Date).getMonth()+2>12?(new Date).getFullYear()-1+"-"+(new Date).getMonth()-10+"-01":(new Date).getFullYear()-1+"-"+(new Date).getMonth()+"2-01",(new Date).getFullYear()+"-"+(new Date).getMonth()+"1-"+(new Date).getDate()],start_time:this.getCurrentMonthFirst(),end_time:this.getCurrentMonthLast(),liveGroupList:[],group_code:"",groupCode:"",stat_type:1,name:"新增客户数",color:["#6881EC","#7FD5D8","#FFBBC0","#FEA96C"],before_count:{add_customer:0,deleted_customer:0,deleted_staff:0,growth:0},yesterday_count:{add_customer:0,deleted_customer:0,deleted_staff:0,growth:0},topData:[],dateValue:[this.getCurrentMonthFirst(),this.getCurrentMonthLast()],during:{add_num:0,ratio:0}}},watch:{checked:function(t){1===t?this.reqGetTop():2===t?this.reqGetAdd():3===t&&this.reqGetAttribute()},stat_type:function(t){1===t?this.name="新增客户数":2===t?this.name="被客户删除/拉黑人数":3===t?this.name="删除人数":4===t&&(this.name="净增人数"),1===this.checked?this.reqGetTop():2===this.checked&&this.reqGetAdd()},dateValue:function(){this.reqGetAttribute()},groupCode:function(){this.reqGetAttribute()},date_type:function(t){this.changeDate()},daysValue:function(t){this.start_time=t[0],this.end_time=t[1],1===this.checked?this.reqGetTop():2===this.checked&&this.reqGetAdd()},monthValue:function(t){this.start_time=t[0],this.end_time=t[1],1===this.checked?this.reqGetTop():2===this.checked&&this.reqGetAdd()},weekValueStart:function(t){t.toString()>this.weekValueEnd.toString()&&(this.weekValueStart=this.weekValueEnd),this.changeDate()},weekValueEnd:function(t){t.toString()<this.weekValueStart.toString()&&(this.weekValueStart=this.weekValueEnd),this.changeDate()},group_code:function(){1===this.checked?this.reqGetTop():2===this.checked&&this.reqGetAdd()}},mounted:function(){this.initData()},methods:{initData:function(){var t=this;this.loading=!0;var e=[];e[0]=Object(s["fb"])({}),e[1]=Object(s["gb"])({stat_type:this.stat_type,start_time:this.start_time,end_time:this.end_time,group_code:this.group_code}),e[2]=Object(s["X"])({}),Promise.all(e).then((function(e){if(t.loading=!1,200==e[0].code?(t.before_count=e[0].data.before_count,t.yesterday_count=e[0].data.yesterday_count):(t.before_count={add_customer:0,deleted_customer:0,deleted_staff:0,growth:0},t.yesterday_count={add_customer:0,deleted_customer:0,deleted_staff:0,growth:0}),200===e[1].code)if(t.topTableData=e[1].data,t.topTotal=e[1].data.length,0!==e[1].data.length){var a=[],r=[];e[1].data.forEach((function(t){a.push(t.name),r.push(t.num)})),t.getBar(t.name,a,r)}else t.getBar(t.name,["暂无数据"],[0]);else t.topTotal=0,t.topTableData=[],t.getBar(t.name,["暂无数据"],[0]);200===e[2].code&&(t.liveGroupList=e[2].data)}))},reqGetTop:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(s["gb"])({stat_type:t.stat_type,start_time:t.start_time,end_time:t.end_time,group_code:t.group_code});case 3:a=e.sent,t.loading=!1,200===a.code?(t.topTableData=a.data,t.topTotal=a.data.length,0!==a.data.length?(r=[],n=[],a.data.forEach((function(t){r.push(t.name),n.push(t.num)})),t.getBar(t.name,r,n)):t.getBar(t.name,["暂无数据"],[0])):(t.topTotal=0,t.topTableData=[],t.getBar(t.name,["暂无数据"],[0]));case 6:case"end":return e.stop()}}),e)})))()},reqGetAdd:function(){var t=this;this.loading=!0;var e=[];e[0]=Object(s["M"])({date_type:this.date_type,start_time:this.start_time,end_time:this.end_time,group_code:this.group_code,page:1,limit:1e4}),e[1]=Object(s["M"])({date_type:this.date_type,start_time:this.start_time,end_time:this.end_time,group_code:this.group_code,page:this.growPage,limit:this.growLimit}),Promise.all(e).then((function(e){if(t.loading=!1,200===e[0].code){var a=[],r=[],n=[],o=[],i=[];e[0].data.data.forEach((function(t){for(var e in i.push(t["created_at"]),t)"add_customer"===e?a.push(t[e]):"deleted_customer"===e?r.push(t[e]):"deleted_staff"===e?n.push(t[e]):"growth"===e&&o.push(t[e])})),t.getLine(i,a,r,n,o)}else t.$message.error(e.msg);200===e[1].code?(t.growTableData=e[1].data.data,t.growTotal=e[1].data.count):t.$message.error(e.msg)}))},getAddTable:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["M"])({date_type:t.date_type,start_time:t.start_time,end_time:t.end_time,group_code:t.group_code,page:t.growPage,limit:t.growLimit});case 2:a=e.sent,200===a.code?(t.growTableData=a.data.data,t.growTotal=a.data.count):(t.$message.error(a.msg),t.growTableData=[],t.growTotal=0);case 4:case"end":return e.stop()}}),e)})))()},reqGetAttribute:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["N"])({start_time:t.dateValue[0],end_time:t.dateValue[1],group_code:t.groupCode});case 2:if(a=e.sent,200===a.code){for(o in console.log(a.data),r=[["product"]],n=[],t.attrTableData=a.data.add_customer_list,t.during=a.data.during,a.data.gender_info)r.push([o]),n.push({type:"line",smooth:!0,seriesLayoutBy:"row"});a.data.gender_list.forEach((function(t){r[0].push(t.created_at),r.map((function(e){"男"===e[0]?e.push(t.unknown_num):"女"===e[0]?e.push(t.female_num):"未知"===e[0]&&e.push(t.male_num)}))})),t.getLinePie(r,n)}case 4:case"end":return e.stop()}}),e)})))()},changeDate:function(){var t=this.date_type;1===t?(this.start_time=this.daysValue[0],this.end_time=this.daysValue[1]):2===t?(this.start_time=this.weekValueStart,this.end_time=this.weekValueEnd):3===t&&(this.start_time=this.monthValue[0],this.end_time=this.monthValue[1]),1===this.checked?this.reqGetTop():2===this.checked&&this.reqGetAdd()},getCurrentMonthFirst:function(){var t=new Date;t.setDate(1);var e=parseInt(t.getMonth()+1),a=t.getDate();return e<10&&(e="0"+e),a<10&&(a="0"+a),t.getFullYear()+"-"+e+"-"+a},getCurrentMonthLast:function(){var t=new Date,e=t.getMonth(),a=++e,r=new Date(t.getFullYear(),a,1),n=864e5,o=new Date(r-n),i=parseInt(o.getMonth()+1),s=o.getDate();return i<10&&(i="0"+i),s<10&&(s="0"+s),t.getFullYear()+"-"+i+"-"+s},handleCheckTabs:function(t){this.checked=t},handleChange:function(t){for(var e=document.getElementsByClassName("icon-circle"),a=0;a<e.length;a++)e[a].classList.add("c-active");e[t].classList.remove("c-active"),this.stat_type=parseInt(t+1)},getBar:function(t,e,a){var r=this.$echarts.init(document.getElementById("bar")),n={color:[this.color[this.stat_type-1]],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"5%",right:"6%",bottom:0,top:50,containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:[{type:"category",data:e,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:t,type:"bar",barWidth:"60%",data:a}]};r.setOption(n)},getLine:function(t,e,a,r,n){var o=this.$echarts.init(document.getElementById("line")),i={tooltip:{trigger:"axis"},legend:{right:30,top:0,icon:"circle",itemWidth:8,itemHeight:8,itemGap:40,data:["新增客户数","被客户删除/拉黑人数","删除人数","净增人数"]},color:["#6881EC","#7FD5D8","#FFBBC0","#FEA96C"],grid:{left:"5%",right:"6%",bottom:0,top:97,containLabel:!0},toolbox:{top:47,feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:t,axisTick:{show:!1},splitLine:{show:!1}},yAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"dashed"}}},series:[{name:"新增客户数",type:"line",data:e},{name:"被客户删除/拉黑人数",type:"line",data:a},{name:"删除人数",type:"line",data:r},{name:"净增人数",type:"line",data:n}]};o.setOption(i)},getLinePie:function(t,e){var a=this;setTimeout((function(){var r=a.$echarts.init(document.getElementById("line-pie")),n={legend:{},tooltip:{trigger:"axis",showContent:!1},dataset:{source:t},color:a.color,xAxis:{type:"category"},yAxis:{gridIndex:0},grid:{top:"55%"},series:[].concat(Object(o["a"])(e),[{type:"pie",id:"pie",radius:"30%",center:["50%","25%"],label:{formatter:"{b}: {@".concat(t[0][1],"} ({d}%)")},encode:{itemName:"product",value:t[0][1],tooltip:t[0][1]}}])};r.on("updateAxisPointer",(function(t){var e=t.axesInfo[0];if(e){var a=e.value+1;r.setOption({series:{id:"pie",label:{formatter:"{b}: {@["+a+"]} ({d}%)"},encode:{value:a,tooltip:a}}})}})),r.setOption(n)}))}}},l=c,u=(a("f332"),a("2877")),d=Object(u["a"])(l,r,n,!1,null,"6208a1b1",null);e["default"]=d.exports},f332:function(t,e,a){"use strict";a("614c")}}]);
//# sourceMappingURL=chunk-bbb4d4ea.0e63e076.js.map