(this["webpackJsonpwikidata-live-changes"]=this["webpackJsonpwikidata-live-changes"]||[]).push([[0],{279:function(e,t,a){e.exports=a(429)},284:function(e,t,a){},295:function(e,t,a){},427:function(e,t,a){e.exports=a.p+"static/media/legend.ee93b5bb.svg"},428:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(84),i=a.n(s),c=(a(284),a(58)),o=a(59),l=a(12),u=a(13),p=a(16),h=a(14),m=a(17),d=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:" text-left"},r.a.createElement("h1",{className:"text-left  display-3"},r.a.createElement("b",null,this.props.title)),r.a.createElement("h4",null,this.props.subtitle))}}]),t}(r.a.Component),f=(a(78),a(452)),b=a(455),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={history:a.props.history},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=window.location.href;return r.a.createElement(f.a,null,r.a.createElement(f.a.Collapse,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Link,{as:c.b,to:"/",className:e.endsWith("/")?"nav-link--active":"nav-link"},"Home"),r.a.createElement(b.a.Link,{as:c.b,to:"/page",className:e.endsWith("/page")?"nav-link--active":"nav-link"},"Page"),r.a.createElement(b.a.Link,{as:c.b,to:"/feed",className:e.endsWith("/feed")?"nav-link--active":"nav-link"},"Feed"))))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ting"},r.a.createElement("h2",{className:this.props.style},this.props.btnTitle1),r.a.createElement("h2",{className:this.props.style},this.props.btnTitle2),r.a.createElement("br",null),r.a.createElement(c.b,{to:this.props.btnLink},r.a.createElement("button",{type:"button",className:this.props.btnStyle},this.props.btnText)))}}]),t}(n.Component),w=a(457),E=a(32),y=a.n(E),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={text:"something",errorCode:"Loading..."},a.updateStats=function(){y.a.ajax({url:"https://cors-anywhere.herokuapp.com/https://www.wikidata.org/wiki/Special:Statistics",type:"GET",success:function(e){y()("#div1").html(y()(y()(e).find(".mw-statistics-articles")).find(".mw-statistics-numbers")),y()("#div2").html(y()(y()(e).find(".mw-statistics-edits")).find(".mw-statistics-numbers")),y()("#div3").html(y()(y()(e).find(".mw-statistics-users")).find(".mw-statistics-numbers")),y()("#div4").html(y()(y()(e).find(".mw-statistics-users-active")).find(".mw-statistics-numbers"))}})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.updateStats(),this.intervalID=setInterval((function(){return e.updateStats()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{horizontal:!0},r.a.createElement(w.a.Item,{className:"list-group-item-black"},r.a.createElement("h1",{id:"div1"},this.state.errorCode),r.a.createElement("h1",null,"Items")),r.a.createElement(w.a.Item,{className:"list-group-item-red"},r.a.createElement("h1",{id:"div2"},this.state.errorCode),r.a.createElement("h1",null,"Edits")),r.a.createElement(w.a.Item,{className:"list-group-item-green"},r.a.createElement("h1",{id:"div3"},this.state.errorCode),r.a.createElement("h1",null,"Users")),r.a.createElement(w.a.Item,{className:"list-group-item-blue"},r.a.createElement("h1",{id:"div4"},this.state.errorCode),r.a.createElement("h1",null,"Active Users"))))}}]),t}(n.Component),x=a(115),j=a(72),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={history:a.props.history},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(v,{history:this.state.history}),r.a.createElement("div",{className:"HomePageContent row margin-right: -15px margin-left: -15px"},r.a.createElement("div",{className:"col-5"},r.a.createElement(d,{title:"Wikidata Live",subtitle:"A web app to visualise recent changes to Wikidata in quasi real time."})),r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",{className:"text-red"},r.a.createElement(x.a,{icon:j.a})),r.a.createElement(g,{style:"font-weight-bold text-red",btnStyle:"align-bottom btn btn-outline-red",btnTitle1:"Wikidata",btnTitle2:"Feed",btnText:"Feed",btnLink:"/feed"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",{className:"text-green"},r.a.createElement(x.a,{icon:j.b})),r.a.createElement(g,{style:"font-weight-bold text-green",btnStyle:"align-bottom btn btn-outline-green",btnTitle1:"Wikidata",btnTitle2:"Dashboard",btnText:"Dashboard",btnLink:"/page"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",{className:"text-blue"},r.a.createElement(x.a,{icon:j.c})),r.a.createElement(g,{style:"font-weight-bold text-blue",btnStyle:"align-bottom btn btn-outline-blue",btnTitle1:"User",btnTitle2:"Data",btnText:"Users",btnLink:"/most-active-users"}))))),r.a.createElement("div",{className:"statsContent row justify-content-center"},r.a.createElement(k,null)))}}]),t}(n.Component),S=a(31),N=Object(S.a)(),C=a(20),L=a(10),D=a.n(L),T=function(){var e,t;return D.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=function(e,t){return t.editcount-e.editcount},t=W({action:"query",format:"json",list:"allusers",auprop:"editcount|groups",aulimit:"max",auwitheditsonly:"1",auactiveusers:"1"},5).then((function(e){return e.query.allusers})).then((function(t){return t.sort(e)})),a.abrupt("return",t);case 4:case"end":return a.stop()}}))},P=function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=W({action:"query",format:"json",list:"recentchanges",rcprop:"title|ids|sizes|timestamp",rclimit:"500"},5).then((function(e){return e.query.recentchanges})),t.abrupt("return",e);case 3:case"end":return t.stop()}}))},I=function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(P());case 2:return(e=t.sent).forEach((function(e){e.value=Math.abs(e.newlen-e.oldlen),e.id=e.title})),e.sort((function(e,t){return t.value-e.value})),t.abrupt("return",e);case 6:case"end":return t.stop()}}))},A=function(e){var t,a,n,r,s;return D.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=M(e),a=Object(C.a)(t,2),n=a[0],r=a[1],s=n.then((function(e){return R(e)})),i.next=4,D.a.awrap(s);case 4:return i.t0=i.sent,i.t1=r,i.abrupt("return",[i.t0,i.t1]);case 7:case"end":return i.stop()}}))},G=function(e){var t,a,n,r,s;return D.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=M(e),a=Object(C.a)(t,2),n=a[0],r=a[1],s=n.then((function(e){return q(e)})),i.next=4,D.a.awrap(s);case 4:return i.t0=i.sent,i.t1=r,i.abrupt("return",[i.t0,i.t1]);case 7:case"end":return i.stop()}}))},M=function(e){var t=new Date,a=t.toISOString();return t-=1e3,t=new Date(t).toISOString(),[W({action:"query",format:"json",list:"recentchanges",rcprop:"title|ids|timestamp|user",rclimit:"max",rcstart:t,rcend:e},5).then((function(e){return e.query.recentchanges})),a]},U=function(e){return function(e,t,a){var n,r,s;return D.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n=[],r=null,r=t instanceof Array?H(t,50):[[t]],s=r.map((function(t){var r;return D.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return r=t.join("|"),a[e]=r,s.abrupt("return",W(a,5).then((function(e){return n.push(e)})).catch((function(e){return null})));case 3:case"end":return s.stop()}}))})),i.next=6,D.a.awrap(Promise.all(s));case 6:return i.abrupt("return",n);case 7:case"end":return i.stop()}}))}("ususers",e,{action:"query",format:"json",list:"users",usprop:"groups"}).then((function(e){var t={};return e.forEach((function(e){e.query.users.forEach((function(e){e.groups&&(t[e.name]=e.groups)}))})),t}))},W=function e(t,a){var n,r;return D.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,n=new URLSearchParams(t).toString(),r="https://www.wikidata.org/w/api.php?"+n+"&origin=*",s.next=5,D.a.awrap(fetch(r).then((function(e){return e.json()})));case 5:return s.abrupt("return",s.sent);case 8:if(s.prev=8,s.t0=s.catch(0),1!==a){s.next=12;break}throw s.t0;case 12:return s.next=14,D.a.awrap(e(t,a-1));case 14:return s.abrupt("return",s.sent);case 15:case"end":return s.stop()}}),null,null,[[0,8]])},R=function(e){var t={};e.forEach((function(e){var a=t[e.title]||0;t[e.title]=a+1}));var a=Object.entries(t).map((function(e){var t=Object(C.a)(e,2);return{id:t[0],actions:t[1]}}));return a.sort((function(e,t){return t.actions-e.actions})),a},q=function(e){var t=function(e,t){return t.actions-e.actions},a={};e.forEach((function(e){var t=e.user,n=a[t]||0;a[t]=n+1}));var n=Object.entries(a).map((function(e){var t=Object(C.a)(e,2);return{username:t[0],actions:t[1]}})),r=n.map((function(e){return e.username}));return U(r).then((function(e){n.forEach((function(t){return t.groups=e[t.username]})),n.sort(t)})),n},H=function(e,t){for(var a=[];e.length>0;)a.push(e.splice(0,t));return a},z=function(){function e(t){Object(l.a)(this,e),this.changes=[],this.maxItems=t,this.prevTimestamp=(new Date).toISOString()}return Object(u.a)(e,[{key:"refresh",value:function(){var e=this,t=M(this.prevTimestamp),a=Object(C.a)(t,2),n=a[0],r=a[1];n.then((function(t){var a=t.map((function(e){return e.user}));U(a).then((function(a){return t.forEach((function(t){t.groups=a[t.user],e.changes.unshift(t),e.changes.length>e.maxItems&&e.changes.pop()}))}))})),this.prevTimestamp=r}}]),e}();a(295);var B=function(e){return Math.round(Math.abs((new Date).getTime()-new Date(e).getTime())/1e3)},F=function(){var e=Object(n.useState)(new z(30)),t=Object(C.a)(e,1)[0],a=Object(n.useState)(!1),s=Object(C.a)(a,2),i=s[0],c=s[1],o=Object(n.useState)({items:[]}),l=Object(C.a)(o,2),u=l[0],p=l[1];return Object(n.useEffect)((function(){var e=setInterval((function(){i||t.refresh(),p({items:t.changes})}),1e3);return function(){return clearInterval(e)}}),[t,i]),r.a.createElement("div",null,r.a.createElement("h3",{className:"text-blue text-left"},"Most Recent Activity"),r.a.createElement("form",{className:"text-left",onChange:function(){c((function(e){return!e}))}},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox"})," Paused")),r.a.createElement("ul",{className:"list-group"},u.items.map((function(e,t){return r.a.createElement("li",{className:"list-group-item text-left",key:t},"User ".concat(e.user," action ").concat(e.type," on ").concat(e.title," ").concat(B(e.timestamp)," seconds ago"))}))))},V=a(116),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onClick=function(){a.state.history.push(a.state.pageLink)},a.state={history:a.props.history,title:a.props.title,pageLink:a.props.pageLink,graph:a.props.graph},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(V.a,{onClick:this.onClick,tag:"a",className:"graph-card"},r.a.createElement(V.a.Body,null,r.a.createElement(V.a.Title,{className:"card-title"},this.state.title),this.state.graph))}}]),t}(n.Component),J=a(167),X=a(63),$=a(234),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).tooltip=function(e,t){return r.a.createElement("div",{className:"iframe-container"},r.a.createElement("iframe",{src:t+e.indexValue,className:"iframe",title:"tooltip-option-2"}))},a.loadData=function(){var e,t,n;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.props.settings.getData.bind(Object(X.a)(a)),r.next=3,D.a.awrap(e());case 3:t=r.sent,n=t.slice(0,a.state.fullGraph?30:10),a.setState({loaded:!0,data:n});case 6:case"end":return r.stop()}}))},a.refresh=function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.props.paused){t.next=4;break}return e=a.props.settings.refreshMethod.bind(Object(X.a)(a)),t.next=4,D.a.awrap(e());case 4:case"end":return t.stop()}}))},a.state={loaded:!1,data:null,fullGraph:a.props.fullGraph},a.loadData(),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.refreshInterval=setInterval((function(){return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(e.refresh());case 2:case"end":return t.stop()}}))}),this.props.settings.refreshTime)}},{key:"render",value:function(){var e={},t=null,a="",n=null,s=!1,i=null;return this.state.fullGraph?(e={top:5,right:30,bottom:80,left:80},t=!0,a="full-graph-container",this.props.settings.onClick&&(n=this.props.settings.onClick,s=!0),this.props.settings.tooltip&&(i=this.props.settings.tooltip.bind(this))):(e={top:0,right:0,bottom:0,left:0},t=!1,a="Graph-Container-Card"),r.a.createElement("div",null,this.state.loaded?r.a.createElement("div",{className:a},r.a.createElement($.a,{data:this.state.data,keys:this.props.settings.keys,indexBy:this.props.settings.index,margin:e,padding:.3,colors:{scheme:this.props.settings.colors},colorBy:"index",borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:30,legend:this.props.settings.xAxis,legendPosition:"start",legendOffset:40},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:this.props.settings.yAxis,legendPosition:"middle",legendOffset:-60},enableLabel:t,onClick:s?n:function(){},animate:t,isInteractive:t,motionStiffness:90,motionDamping:15,tooltip:i})):"Loading...")}}]),t}(n.Component),Q=a(166),Y=a(244),Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).tooltip=function(e,t){return r.a.createElement("div",{className:"iframe-container"},r.a.createElement("iframe",{src:t+e.id,className:"iframe",title:"tooltip-option-2"}))},a.loadData=function(){var e,t,n;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.props.settings.getData.bind(Object(X.a)(a)),r.next=3,D.a.awrap(e());case 3:t=r.sent,n=t.slice(0,a.state.fullGraph?30:10),a.setState({loaded:!0,data:n});case 6:case"end":return r.stop()}}))},a.refresh=function(){return D.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.paused||a.loadData();case 1:case"end":return e.stop()}}))},a.state={loaded:!1,data:null,fullGraph:a.props.fullGraph},a.loadData(),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.refreshInterval=setInterval((function(){return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(e.refresh());case 2:case"end":return t.stop()}}))}),this.props.settings.refreshTime)}},{key:"render",value:function(){var e,t={},a=null,n="",s=null,i=null;return this.state.fullGraph?(t={top:30,right:30,bottom:30,left:80},a=!0,n="full-graph-container",this.props.settings.onClick&&(s=this.props.settings.onClick,!0),this.props.settings.tooltip&&(i=this.props.settings.tooltip.bind(this))):(t={top:0,right:0,bottom:0,left:0},a=!1,n="Graph-Container-Card"),r.a.createElement("div",null,this.state.loaded?r.a.createElement("div",{className:n},r.a.createElement(Y.a,(e={data:this.state.data,margin:t,innerRadius:.4,padAngle:0,cornerRadius:0,colors:{scheme:"paired"},enableRadialLabels:a,radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:{from:"color"},enableSlicesLabels:a,slicesLabelsSkipAngle:10,slicesLabelsTextColor:"#333333",animate:!0,motionStiffness:90,motionDamping:15,defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],onClick:s,tooltip:i},Object(Q.a)(e,"defs",[{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.4)",rotation:-45,lineWidth:6,spacing:10}]),Object(Q.a)(e,"fill",[{match:{type:"edit"},id:"lines"}]),e))):"Loading...")}}]),t}(n.Component),ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={history:a.props.history,title:a.props.name},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(v,{history:this.state.history}),r.a.createElement("div",{className:"infobox"},r.a.createElement("h2",null,this.state.title),r.a.createElement("p",null),r.a.createElement("p",null,this.props.explanation),r.a.createElement("p",null,r.a.createElement("form",{onChange:this.props.handlePause},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",id:"paused",name:"paused",value:this.props.paused})," ","Paused")))),this.props.graph)}}]),t}(n.Component),te={getData:function(){var e,t,a,n;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D.a.awrap(G((new Date).toISOString()));case 2:return e=r.sent,t=Object(C.a)(e,2),a=t[0],n=t[1],a=a.slice(0,50),this.setState({fullData:a,prevTimestamp:n}),r.abrupt("return",a);case 9:case"end":return r.stop()}}),null,this)},refreshTime:2e3,refreshMethod:function(){var e,t,a,n,r,s,i;return D.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,D.a.awrap(G(this.state.prevTimestamp));case 2:e=c.sent,t=Object(C.a)(e,2),a=t[0],n=t[1],this.setState({prevTimestamp:n}),a=a.slice(0,50),this.state.fullData?(r=this.state.fullData,a.forEach((function(e){for(var t=-1,a=0;a<r.length;a+=1)r[a].username===e.username&&(t=a);-1!==t?r[t].actions+=e.actions:r.push(e)})),r.sort((function(e,t){return t.actions-e.actions})),r.slice(0,50),s=r.slice(0,this.state.fullGraph?30:10),this.setState({fullData:r,data:s})):(i=a.slice(0,this.state.fullGraph?30:10),this.setState({data:i}));case 9:case"end":return c.stop()}}),null,this)},keys:["actions"],index:"username",xAxis:"username",yAxis:"actions",colors:"set2",onClick:function(e){window.open("https://www.wikidata.org/wiki/User:"+e.indexValue,"_blank")},tooltip:function(e){return this.tooltip(e,"https://www.wikidata.org/wiki/User:")}},ae=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){var t=a.state.paused;a.setState({paused:!t})},a.state={history:a.props.history,paused:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ee,{handlePause:this.handlePause,paused:this.state.paused,explanation:"A live view of the users active right now. Hover over a bar to get a preview of the user's page, or click to open the user's page in a new tab.",graph:r.a.createElement(K,{fullGraph:!0,settings:te,paused:this.state.paused}),name:"Most Active Users"})}}]),t}(n.Component),ne={getData:function(){var e,t,a,n;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D.a.awrap(A((new Date).toISOString()));case 2:return e=r.sent,t=Object(C.a)(e,2),a=t[0],n=t[1],a=a.slice(0,50),this.setState({fullData:a,prevTimestamp:n}),r.abrupt("return",a);case 9:case"end":return r.stop()}}),null,this)},refreshTime:2e3,refreshMethod:function(){var e,t,a,n,r,s,i;return D.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,D.a.awrap(A(this.state.prevTimestamp));case 2:e=c.sent,t=Object(C.a)(e,2),a=t[0],n=t[1],this.setState({prevTimestamp:n}),a=a.slice(0,50),this.state.fullData?(r=this.state.fullData,a.forEach((function(e){for(var t=-1,a=0;a<r.length;a+=1)r[a].id===e.id&&(t=a);-1!==t?r[t].actions+=e.actions:r.push(e)})),r.sort((function(e,t){return t.actions-e.actions})),r.slice(0,50),s=r.slice(0,this.state.fullGraph?30:10),this.setState({fullData:r,data:s})):(i=a.slice(0,this.state.fullGraph?30:10),this.setState({data:i}));case 9:case"end":return c.stop()}}),null,this)},keys:["actions"],index:"id",xAxis:"pages",yAxis:"actions",colors:"pastel1",onClick:function(e){window.open("https://www.wikidata.org/wiki/"+e.indexValue,"_blank")},tooltip:function(e){return this.tooltip(e,"https://www.wikidata.org/wiki/")}},re=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){var t=a.state.paused;a.setState({paused:!t})},a.state={history:a.props.history,paused:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ee,{handlePause:this.handlePause,paused:this.state.paused,explanation:"A live view of the pages being edited right now. Hover over a bar to get a preview of the page, or click to open the page in a new tab.",graph:r.a.createElement(K,{fullGraph:!0,settings:ne,paused:this.state.paused}),name:"Most Active Pages"})}}]),t}(n.Component),se={getData:function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(T());case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},refreshTime:2e3,refreshMethod:function(){this.loadData()},keys:["editcount"],index:"name",xAxis:"users",yAxis:"edit count",colors:"paired",tooltip:function(e){return this.tooltip(e,"https://www.wikidata.org/wiki/User:")}},ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){a.setState({paused:e.target.value})},a.state={history:a.props.history,paused:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ee,{handlePause:this.handlePause,paused:this.state.paused,graph:r.a.createElement(K,{fullGraph:!0,settings:se,paused:this.state.paused}),name:"Users By Most Edits"})}}]),t}(n.Component),ce={getData:I,refreshTime:2e3,refreshMethod:I,value:function(e){Math.abs(e.newlen-e.oldlen)},colorBy:"type",colors:"pastel1",onClick:function(e){window.open("https://www.wikidata.org/wiki/"+e.id,"_blank")},tooltip:function(e){return this.tooltip(e,"https://www.wikidata.org/wiki/")}},oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){var t=a.state.paused;a.setState({paused:!t})},a.state={history:a.props.history,paused:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ee,{handlePause:this.handlePause,paused:this.state.paused,explanation:r.a.createElement("div",null,"The largest of the last 500 edits. Hover over a section to get a preview of the page, or click to open the page in a new tab.",r.a.createElement("p",null,r.a.createElement("img",{className:"legend",src:a(427)}))),graph:r.a.createElement(Z,{fullGraph:!0,settings:ce,paused:this.state.paused}),name:"Largest Recent Edits"})}}]),t}(n.Component),le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={history:a.props.history},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(v,null),r.a.createElement("div",{class:"row justify-content-left text-dark"},r.a.createElement("div",{class:"col-xs-12 col-sm-12 col-md-12 col-lg-4"},r.a.createElement("div",{class:"feedContainer"},r.a.createElement(F,null))),r.a.createElement("div",{class:"col-xs-12 col-sm-12 col-md-12 col-lg-8"},r.a.createElement("div",{className:"deck-container"},r.a.createElement(J.a,{className:"deck"},r.a.createElement(_,{title:"Users by most edits",pageLink:"users-by-most-edits",history:this.state.history,graph:r.a.createElement(K,{paused:!0,fullGraph:!1,settings:se})}),r.a.createElement(_,{title:"Most Active Users",pageLink:"most-active-users",history:this.state.history,graph:r.a.createElement(K,{paused:!1,fullGraph:!1,settings:te})})),r.a.createElement(J.a,{className:"deck"},r.a.createElement(_,{title:"Most Active Pages",pageLink:"most-active-pages",history:this.state.history,graph:r.a.createElement(K,{paused:!1,fullGraph:!1,settings:ne})}),r.a.createElement(_,{title:"Largest Recent Edits",pageLink:"recent-edit-size",history:this.state.history,graph:r.a.createElement(Z,{paused:!0,fullGraph:!1,settings:ce})}))))))}}]),t}(n.Component);a(428);var ue=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{basename:"/Software-Engineering",history:N},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:O}),r.a.createElement(o.a,{exact:!0,path:"/page",component:le}),r.a.createElement(o.a,{exact:!0,path:"/users-by-most-edits",component:ie}),r.a.createElement(o.a,{exact:!0,path:"/most-active-users",component:ae}),r.a.createElement(o.a,{exact:!0,path:"/recent-edit-size",component:oe}),r.a.createElement(o.a,{exact:!0,path:"/most-active-pages",component:re}),r.a.createElement(o.a,{exact:!0,path:"/feed",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[279,1,2]]]);
//# sourceMappingURL=main.eade0eab.chunk.js.map