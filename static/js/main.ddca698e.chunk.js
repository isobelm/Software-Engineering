(this["webpackJsonpwikidata-live-changes"]=this["webpackJsonpwikidata-live-changes"]||[]).push([[0],{227:function(e,t,a){e.exports=a.p+"static/media/legend.5378cb25.svg"},281:function(e,t,a){e.exports=a(430)},286:function(e,t,a){},297:function(e,t,a){},429:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(84),i=a.n(s),o=(a(286),a(58)),c=a(59),l=a(11),u=a(12),p=a(14),h=a(13),d=a(15),m=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:" text-left"},r.a.createElement("h1",{className:"text-left  display-3"},r.a.createElement("b",null,this.props.title)),r.a.createElement("h4",null,this.props.subtitle))}}]),t}(r.a.Component),f=(a(78),a(453)),g=a(456),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={history:a.props.history},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=window.location.href;return r.a.createElement(f.a,null,r.a.createElement(f.a.Collapse,null,r.a.createElement(g.a,null,r.a.createElement(g.a.Link,{as:o.b,to:"/",className:e.endsWith("/")?"nav-link--active":"nav-link"},"Home"),r.a.createElement(g.a.Link,{as:o.b,to:"/page",className:e.endsWith("/page")?"nav-link--active":"nav-link"},"Page"),r.a.createElement(g.a.Link,{as:o.b,to:"/feed",className:e.endsWith("/feed")?"nav-link--active":"nav-link"},"Feed"))))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ting"},r.a.createElement("h2",{className:this.props.style},this.props.btnTitle1),r.a.createElement("h2",{className:this.props.style},this.props.btnTitle2),r.a.createElement("br",null),r.a.createElement(o.b,{to:this.props.btnLink},r.a.createElement("button",{type:"button",className:this.props.btnStyle},this.props.btnText)))}}]),t}(n.Component),w=a(458),E=a(32),y=a.n(E),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={text:"something",errorCode:"Loading..."},a.updateStats=function(){y.a.ajax({url:"https://protected-shelf-93081.herokuapp.com/https://www.wikidata.org/wiki/Special:Statistics",type:"GET",success:function(e){y()("#div1").html(y()(y()(e).find(".mw-statistics-articles")).find(".mw-statistics-numbers")),y()("#div2").html(y()(y()(e).find(".mw-statistics-edits")).find(".mw-statistics-numbers")),y()("#div3").html(y()(y()(e).find(".mw-statistics-users")).find(".mw-statistics-numbers")),y()("#div4").html(y()(y()(e).find(".mw-statistics-users-active")).find(".mw-statistics-numbers"))}})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.updateStats(),this.intervalID=setInterval((function(){return e.updateStats()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{horizontal:!0},r.a.createElement(w.a.Item,{className:"list-group-item-black"},r.a.createElement("h1",{id:"div1"},this.state.errorCode),r.a.createElement("h1",null,"Items")),r.a.createElement(w.a.Item,{className:"list-group-item-red"},r.a.createElement("h1",{id:"div2"},this.state.errorCode),r.a.createElement("h1",null,"Edits")),r.a.createElement(w.a.Item,{className:"list-group-item-green"},r.a.createElement("h1",{id:"div3"},this.state.errorCode),r.a.createElement("h1",null,"Users")),r.a.createElement(w.a.Item,{className:"list-group-item-blue"},r.a.createElement("h1",{id:"div4"},this.state.errorCode),r.a.createElement("h1",null,"Active Users"))))}}]),t}(n.Component),x=a(116),O=a(72),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={history:a.props.history},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(b,{history:this.state.history}),r.a.createElement("div",{className:"HomePageContent row margin-right: -15px margin-left: -15px"},r.a.createElement("div",{className:"col-5"},r.a.createElement(m,{title:"Wikidata Live",subtitle:"A web app to visualise recent changes to Wikidata in quasi real time."})),r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",{className:"text-red"},r.a.createElement(x.a,{icon:O.a})),r.a.createElement(v,{style:"font-weight-bold text-red",btnStyle:"align-bottom btn btn-outline-red",btnTitle1:"Wikidata",btnTitle2:"Feed",btnText:"Feed",btnLink:"/feed"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",{className:"text-green"},r.a.createElement(x.a,{icon:O.b})),r.a.createElement(v,{style:"font-weight-bold text-green",btnStyle:"align-bottom btn btn-outline-green",btnTitle1:"Wikidata",btnTitle2:"Dashboard",btnText:"Dashboard",btnLink:"/page"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",{className:"text-blue"},r.a.createElement(x.a,{icon:O.c})),r.a.createElement(v,{style:"font-weight-bold text-blue",btnStyle:"align-bottom btn btn-outline-blue",btnTitle1:"User",btnTitle2:"Data",btnText:"Users",btnLink:"/most-active-users"}))))),r.a.createElement("div",{className:"statsContent row justify-content-center"},r.a.createElement(k,null)))}}]),t}(n.Component),S=a(31),N=Object(S.a)(),C=a(20),L=a(235),T=a(9),D=a.n(T),P="https://www.wikidata.org/w/api.php",G=function(){var e,t;return D.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=function(e,t){return t.editcount-e.editcount},t=R(P,{action:"query",format:"json",list:"allusers",auprop:"editcount|groups",aulimit:"max",auwitheditsonly:"1",auactiveusers:"1"},5).then((function(e){return e.query.allusers})).then((function(t){return t.sort(e)})),a.abrupt("return",t);case 4:case"end":return a.stop()}}))},I=function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=R(P,{action:"query",format:"json",list:"recentchanges",rcprop:"title|ids|sizes|timestamp",rclimit:"500"},5).then((function(e){return e.query.recentchanges})),t.next=4,D.a.awrap(e);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}))},A=function(){var e,t,a,n;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=R(P,{action:"query",format:"json",list:"recentchanges",rcprop:"ids",rclimit:"50"},5).then((function(e){return e.query.recentchanges})),r.next=4,D.a.awrap(e);case 4:return t=(t=r.sent).map((function(e){return e.revid})),r.next=8,D.a.awrap(q(t));case 8:return a=r.sent,n=[{id:"damaging",label:"damaging",value:0,color:"#F25543"},{id:"unsure",label:"unsure",value:0,color:"#FFF047"},{id:"good faith",label:"good faith",value:0,color:"#92E16F"}],r.next=12,D.a.awrap(a);case 12:return a=r.sent,Object.values(a).forEach((function(e){void 0!==e.damaging.score&&!0===e.damaging.score.prediction?n[0].value+=1:void 0!==e.damaging.score&&!1===e.damaging.score.prediction?n[2].value+=1:n[1].value+=1})),r.abrupt("return",n);case 15:case"end":return r.stop()}}))},M=function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(I());case 2:return(e=t.sent).forEach((function(e){e.value=Math.abs(e.newlen-e.oldlen),e.id=e.revid.toString(),e.label=e.title})),e.sort((function(e,t){return t.value-e.value})),t.abrupt("return",e);case 6:case"end":return t.stop()}}))},z=function(e){var t,a,n,r,s;return D.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=U(e),a=Object(C.a)(t,2),n=a[0],r=a[1],s=n.then((function(e){return H(e)})),i.next=4,D.a.awrap(s);case 4:return i.t0=i.sent,i.t1=r,i.abrupt("return",[i.t0,i.t1]);case 7:case"end":return i.stop()}}))},W=function(e){var t,a,n,r,s;return D.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=U(e),a=Object(C.a)(t,2),n=a[0],r=a[1],s=n.then((function(e){return _(e)})),i.next=4,D.a.awrap(s);case 4:return i.t0=i.sent,i.t1=r,i.abrupt("return",[i.t0,i.t1]);case 7:case"end":return i.stop()}}))},F=function(e,t,a,n){var r,s,i;return D.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=[],s=null,s=t instanceof Array?V(t,50):[[t]],i=s.map((function(t){var s;return D.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return s=t.join("|"),n[e]=s,i.abrupt("return",R(a,n,5).then((function(e){return r.push(e)})).catch((function(e){return null})));case 3:case"end":return i.stop()}}))})),o.next=6,D.a.awrap(Promise.all(i));case 6:return o.abrupt("return",r);case 7:case"end":return o.stop()}}))},U=function(e){var t=new Date,a=t.toISOString();return t-=1e3,t=new Date(t).toISOString(),[R(P,{action:"query",format:"json",list:"recentchanges",rcprop:"title|ids|timestamp|user|sizes",rclimit:"max",rcstart:t,rcend:e},5).then((function(e){return e.query.recentchanges})).then((function(e){var t=e.map((function(e){return e.revid}));return q(t).then((function(t){return e.map((function(e){return e.scores=t[e.revid],e}))}))})),a]},B=function(e){return F("ususers",e,P,{action:"query",format:"json",list:"users",usprop:"groups"}).then((function(e){var t={};return e.forEach((function(e){e.query.users.forEach((function(e){e.groups&&(t[e.name]=e.groups)}))})),t}))},R=function e(t,a,n){var r,s;return D.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,r=new URLSearchParams(a).toString(),s=t+"?"+r+"&origin=*",i.next=5,D.a.awrap(fetch(s).then((function(e){return e.json()})));case 5:return i.abrupt("return",i.sent);case 8:if(i.prev=8,i.t0=i.catch(0),1!==n){i.next=12;break}throw i.t0;case 12:return i.next=14,D.a.awrap(setTimeout(e(t,a,n-1),500));case 14:return i.abrupt("return",i.sent);case 15:case"end":return i.stop()}}),null,null,[[0,8]])},q=function(e){var t,a;return D.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==e.length){n.next=2;break}return n.abrupt("return");case 2:return"revids",t={},a={},n.abrupt("return",F("revids",e,"https://ores.wikimedia.org/v3/scores/wikidatawiki/",t).then((function(e){return e.forEach((function(e){var t;return a=Object(L.a)({},a,{},null===(t=e.wikidatawiki)||void 0===t?void 0:t.scores)})),a})));case 6:case"end":return n.stop()}}))},H=function(e){var t={};e.forEach((function(e){var a=t[e.title]||0;t[e.title]=a+1}));var a=Object.entries(t).map((function(e){var t=Object(C.a)(e,2);return{id:t[0],actions:t[1]}}));return a.sort((function(e,t){return t.actions-e.actions})),a},_=function(e){var t=function(e,t){return t.actions-e.actions},a={};e.forEach((function(e){var t=e.user,n=a[t]||0;a[t]=n+1}));var n=Object.entries(a).map((function(e){var t=Object(C.a)(e,2);return{username:t[0],actions:t[1]}})),r=n.map((function(e){return e.username}));return B(r).then((function(e){n.forEach((function(t){return t.groups=e[t.username]})),n.sort(t)})),n},V=function(e,t){for(var a=[];e.length>0;)a.push(e.splice(0,t));return a},J=function(){function e(t){Object(l.a)(this,e),this.changes=[],this.maxItems=t,this.prevTimestamp=(new Date).toISOString()}return Object(u.a)(e,[{key:"refresh",value:function(){var e=this,t=U(this.prevTimestamp),a=Object(C.a)(t,2),n=a[0],r=a[1];n.then((function(t){var a=t.map((function(e){return e.user}));B(a).then((function(a){return t.forEach((function(t){t.groups=a[t.user],e.changes.unshift(t),e.changes.length>e.maxItems&&e.changes.pop()}))}))})),this.prevTimestamp=r}}]),e}();a(297);var X=function(e){return Math.round(Math.abs((new Date).getTime()-new Date(e).getTime())/1e3)},Y=function(){var e=Object(n.useState)(new J(30)),t=Object(C.a)(e,1)[0],a=Object(n.useState)(!1),s=Object(C.a)(a,2),i=s[0],o=s[1],c=Object(n.useState)({items:[]}),l=Object(C.a)(c,2),u=l[0],p=l[1];return Object(n.useEffect)((function(){var e=setInterval((function(){i||t.refresh(),p({items:t.changes})}),500);return function(){return clearInterval(e)}}),[t,i]),r.a.createElement("div",null,r.a.createElement("h3",{className:"text-blue text-left"},"Most Recent Activity"),r.a.createElement("form",{className:"text-left",onChange:function(){o((function(e){return!e}))}},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox"})," Paused")),r.a.createElement("ul",{className:"list-group"},u.items.map((function(e,t){var a,n,s;return r.a.createElement("li",{className:"list-group-item text-left",key:t},r.a.createElement("div",{className:(null===(a=e.scores)||void 0===a?void 0:null===(n=a.damaging)||void 0===n?void 0:null===(s=n.score)||void 0===s?void 0:s.prediction)?"text-red":""},"User ".concat(e.user," action ").concat(e.type," on ").concat(e.title," ").concat(X(e.timestamp)," seconds ago")))}))))},$=a(118),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onClick=function(){a.state.history.push(a.state.pageLink)},a.state={history:a.props.history,title:a.props.title,pageLink:a.props.pageLink,graph:a.props.graph},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement($.a,{onClick:this.onClick,tag:"a",className:"graph-card"},r.a.createElement($.a.Body,null,r.a.createElement($.a.Title,{className:"card-title"},this.state.title),this.state.graph))}}]),t}(n.Component),Q=a(117),Z=a(63),ee=a(236),te=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).tooltip=function(e,t){return r.a.createElement("div",{className:"iframe-container"},r.a.createElement("iframe",{src:t+e.indexValue,className:"iframe",title:"tooltip-option-2"}))},a.loadData=function(){var e,t,n;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.props.settings.getData.bind(Object(Z.a)(a)),r.next=3,D.a.awrap(e());case 3:t=r.sent,n=t.slice(0,a.state.fullGraph?30:10),a.setState({loaded:!0,data:n});case 6:case"end":return r.stop()}}))},a.refresh=function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.props.paused){t.next=4;break}return e=a.props.settings.refreshMethod.bind(Object(Z.a)(a)),t.next=4,D.a.awrap(e());case 4:case"end":return t.stop()}}))},a.state={loaded:!1,data:null,fullGraph:a.props.fullGraph},a.loadData(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.refreshInterval=setInterval((function(){return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(e.refresh());case 2:case"end":return t.stop()}}))}),this.props.settings.refreshTime)}},{key:"render",value:function(){var e={},t=null,a="",n=null,s=!1,i=null,o=[],c=this.props.settings.colorBy?this.props.settings.colorBy:"index";return this.state.fullGraph?(e=this.props.settings.margin?this.props.settings.margin:{top:5,right:30,bottom:80,left:80},this.props.settings.legend&&(o=[this.props.settings.legend]),t=!0,a="full-graph-container",this.props.settings.onClick&&(n=this.props.settings.onClick,s=!0),this.props.settings.tooltip&&(i=this.props.settings.tooltip.bind(this))):(e={top:0,right:0,bottom:0,left:0},t=!1,a="Graph-Container-Card"),r.a.createElement("div",null,this.state.loaded?r.a.createElement("div",{className:a},r.a.createElement(ee.a,{data:this.state.data,keys:this.props.settings.keys,indexBy:this.props.settings.index,margin:e,padding:.3,colors:{scheme:this.props.settings.colors},colorBy:c,borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:30,legend:this.props.settings.xAxis,legendPosition:"start",legendOffset:40},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:this.props.settings.yAxis,legendPosition:"middle",legendOffset:-60},enableLabel:t,onClick:s?n:function(){},animate:t,isInteractive:t,motionStiffness:90,motionDamping:15,tooltip:i,legends:o})):"Loading...")}}]),t}(n.Component),ae=a(86),ne=a(246),re=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).tooltip=function(e,t){return r.a.createElement("div",{className:"iframe-container"},r.a.createElement("iframe",{src:t+e.label,className:"iframe",title:"tooltip-option-2"}))},a.loadData=function(){var e,t,n;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.props.settings.getData.bind(Object(Z.a)(a)),r.next=3,D.a.awrap(e());case 3:t=r.sent,n=t.slice(0,a.state.fullGraph?30:10),a.setState({loaded:!0,data:n});case 6:case"end":return r.stop()}}))},a.refresh=function(){return D.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.paused||a.loadData();case 1:case"end":return e.stop()}}))},a.state={loaded:!1,data:null,fullGraph:a.props.fullGraph},a.loadData(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.refreshInterval=setInterval((function(){return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(e.refresh());case 2:case"end":return t.stop()}}))}),this.props.settings.refreshTime)}},{key:"render",value:function(){var e,t={},a=null,n="",s=function(){},i=null,o={scheme:this.props.settings.colors};return this.props.settings.colorFunction&&(o=this.props.settings.colorFunction),this.state.fullGraph?(t={top:30,right:30,bottom:30,left:30},a=!0,n="full-graph-container",this.props.settings.onClick&&(s=this.props.settings.onClick),this.props.settings.tooltip&&(i=this.props.settings.tooltip.bind(this))):(t={top:0,right:0,bottom:0,left:0},a=!1,n="Graph-Container-Card"),r.a.createElement("div",null,this.state.loaded?r.a.createElement("div",{className:n},r.a.createElement(ne.a,(e={data:this.state.data,margin:t,innerRadius:.4,padAngle:0,cornerRadius:0,colors:o,enableRadialLabels:a,radialLabel:"label",radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:{from:"color"},enableSlicesLabels:a,slicesLabelsSkipAngle:10,slicesLabelsTextColor:"#333333",animate:!0,motionStiffness:90,motionDamping:15,defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],isInteractive:this.state.fullGraph,onClick:s,tooltip:i},Object(ae.a)(e,"defs",[{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.4)",rotation:-45,lineWidth:6,spacing:10}]),Object(ae.a)(e,"fill",[{match:{type:"edit"},id:"lines"}]),e))):"Loading...")}}]),t}(n.Component),se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={history:a.props.history,title:a.props.name},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(b,{history:this.state.history}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"infobox"},r.a.createElement("h2",null,this.state.title),r.a.createElement("p",null),r.a.createElement("p",null,this.props.explanation),r.a.createElement("p",null,r.a.createElement("form",{onChange:this.props.handlePause},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",id:"paused",name:"paused",value:this.props.paused})," ","Paused")))),this.props.graph))}}]),t}(n.Component),ie={getData:function(){var e,t,a,n;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D.a.awrap(W((new Date).toISOString()));case 2:return e=r.sent,t=Object(C.a)(e,2),a=t[0],n=t[1],a=a.slice(0,50),this.setState({fullData:a,prevTimestamp:n}),r.abrupt("return",a);case 9:case"end":return r.stop()}}),null,this)},refreshTime:2e3,refreshMethod:function(){var e,t,a,n,r,s,i;return D.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,D.a.awrap(W(this.state.prevTimestamp));case 2:e=o.sent,t=Object(C.a)(e,2),a=t[0],n=t[1],this.setState({prevTimestamp:n}),a=a.slice(0,50),this.state.fullData?(r=this.state.fullData,a.forEach((function(e){for(var t=-1,a=0;a<r.length;a+=1)r[a].username===e.username&&(t=a);-1!==t?r[t].actions+=e.actions:r.push(e)})),r.sort((function(e,t){return t.actions-e.actions})),r.slice(0,50),(s=r.slice(0,this.state.fullGraph?30:10)).forEach((function(e){void 0!==e.groups&&e.groups.includes("bot")?(e.bot=e.actions,e.human=0):(e.bot=0,e.human=e.actions)})),this.setState({fullData:r,data:s})):(i=a.slice(0,this.state.fullGraph?30:10),this.setState({data:i}));case 9:case"end":return o.stop()}}),null,this)},keys:["bot","human"],index:"username",xAxis:"username",yAxis:"actions",colors:"set2",colorBy:"id",legend:{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]},margin:{top:5,right:130,bottom:50,left:80},onClick:function(e){window.open("https://www.wikidata.org/wiki/User:"+e.indexValue,"_blank")},tooltip:function(e){return this.tooltip(e,"https://www.wikidata.org/wiki/User:")}},oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){var t=a.state.paused;a.setState({paused:!t})},a.state={history:a.props.history,paused:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(se,{handlePause:this.handlePause,paused:this.state.paused,explanation:"A live view of the users active right now. The graph shows users active since this page was loaded. Hover over a bar to get a preview of the user's page, or click to open the user's page in a new tab.",graph:r.a.createElement(te,{fullGraph:!0,settings:ie,paused:this.state.paused}),name:"Most Active Users"})}}]),t}(n.Component),ce={getData:function(){var e,t,a,n;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D.a.awrap(z((new Date).toISOString()));case 2:return e=r.sent,t=Object(C.a)(e,2),a=t[0],n=t[1],a=a.slice(0,50),this.setState({fullData:a,prevTimestamp:n}),r.abrupt("return",a);case 9:case"end":return r.stop()}}),null,this)},refreshTime:2e3,refreshMethod:function(){var e,t,a,n,r,s,i;return D.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,D.a.awrap(z(this.state.prevTimestamp));case 2:e=o.sent,t=Object(C.a)(e,2),a=t[0],n=t[1],this.setState({prevTimestamp:n}),a=a.slice(0,50),this.state.fullData?(r=this.state.fullData,a.forEach((function(e){for(var t=-1,a=0;a<r.length;a+=1)r[a].id===e.id&&(t=a);-1!==t?r[t].actions+=e.actions:r.push(e)})),r.sort((function(e,t){return t.actions-e.actions})),r.slice(0,50),s=r.slice(0,this.state.fullGraph?30:10),this.setState({fullData:r,data:s})):(i=a.slice(0,this.state.fullGraph?30:10),this.setState({data:i}));case 9:case"end":return o.stop()}}),null,this)},keys:["actions"],index:"id",xAxis:"pages",yAxis:"actions",colors:"pastel1",onClick:function(e){window.open("https://www.wikidata.org/wiki/"+e.indexValue,"_blank")},tooltip:function(e){return this.tooltip(e,"https://www.wikidata.org/wiki/")}},le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){var t=a.state.paused;a.setState({paused:!t})},a.state={history:a.props.history,paused:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(se,{handlePause:this.handlePause,paused:this.state.paused,explanation:"A live view of the pages being edited right now. The graph shows pages edited since this page was loaded. Hover over a bar to get a preview of the page, or click to open the page in a new tab.",graph:r.a.createElement(te,{fullGraph:!0,settings:ce,paused:this.state.paused}),name:"Most Active Pages"})}}]),t}(n.Component),ue={getData:M,refreshTime:2e3,refreshMethod:M,colorBy:"type",colors:"set2",onClick:function(e){window.open("https://www.wikidata.org/wiki/"+e.label,"_blank")},tooltip:function(e){return this.tooltip(e,"https://www.wikidata.org/wiki/")}},pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){var t=a.state.paused;a.setState({paused:!t})},a.state={history:a.props.history,paused:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(se,{handlePause:this.handlePause,paused:this.state.paused,explanation:r.a.createElement("div",null,"The largest of the last 500 edits. The number in each of the sections represents the size of the edit in bytes. Hover over a section to get a preview of the page, or click to open the page in a new tab.",r.a.createElement("p",null,r.a.createElement("img",{className:"legend",src:a(227),alt:"Legend"}))),graph:r.a.createElement(re,{fullGraph:!0,settings:ue,paused:this.state.paused}),name:"Largest Recent Edits"})}}]),t}(n.Component),he={getData:function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(I());case 2:return(e=t.sent).forEach((function(e){e.id=e.revid.toString(),e.value=Math.abs(e.newlen-e.oldlen),e.label=e.title})),t.abrupt("return",e);case 5:case"end":return t.stop()}}))},refreshTime:2e3,refreshMethod:function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(I());case 2:return(e=t.sent).forEach((function(e){e.value=Math.abs(e.newlen-e.oldlen),e.id=e.revid.toString(),e.label=e.title})),t.abrupt("return",e);case 5:case"end":return t.stop()}}))},colorBy:"type",colors:"set1",onClick:function(e){window.open("https://www.wikidata.org/wiki/"+e.label,"_blank")},tooltip:function(e){return this.tooltip(e,"https://www.wikidata.org/wiki/")}},de=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){var t=a.state.paused;a.setState({paused:!t})},a.state={history:a.props.history,paused:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(se,{handlePause:this.handlePause,paused:this.state.paused,explanation:r.a.createElement("div",null,"The size of the last 30 edits. The number in each of the sections represents the size of the edit in bytes. Hover over a section to get a preview of the page, or click to open the page in a new tab.",r.a.createElement("p",null,r.a.createElement("img",{className:"legend",src:a(227),alt:"Legend"}))),graph:r.a.createElement(re,{fullGraph:!0,settings:he,paused:this.state.paused}),name:"Recent Edit Size"})}}]),t}(n.Component),me={getData:A,refreshTime:2e3,refreshMethod:A,colorFunction:function(e){return e.color},name:"Proportion Of Edits Flagged"},fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){var t=a.state.paused;a.setState({paused:!t})},a.state={history:a.props.history,paused:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(se,{handlePause:this.handlePause,paused:this.state.paused,explanation:"The proportion of the last 50 edits that was flagged as potentially damaging.",graph:r.a.createElement(re,{fullGraph:!0,settings:me,paused:this.state.paused}),name:me.name})}}]),t}(n.Component),ge=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={history:a.props.history},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(b,null),r.a.createElement("div",{class:"row justify-content-left text-dark"},r.a.createElement("div",{class:"col-xs-12 col-sm-12 col-md-12 col-lg-4"},r.a.createElement("div",{class:"feedContainer"},r.a.createElement(Y,null))),r.a.createElement("div",{class:"col-xs-12 col-sm-12 col-md-12 col-lg-8"},r.a.createElement("div",{className:"deck-container"},r.a.createElement(Q.a,{className:"deck"},r.a.createElement(K,{title:"Recent Edit Size",pageLink:"recent-edit-size",history:this.state.history,graph:r.a.createElement(re,{paused:!0,fullGraph:!1,settings:he})}),r.a.createElement(K,{title:"Most Active Users",pageLink:"most-active-users",history:this.state.history,graph:r.a.createElement(te,{paused:!1,fullGraph:!1,settings:ie})})),r.a.createElement(Q.a,{className:"deck"},r.a.createElement(K,{title:"Most Active Pages",pageLink:"most-active-pages",history:this.state.history,graph:r.a.createElement(te,{paused:!1,fullGraph:!1,settings:ce})})),r.a.createElement(Q.a,{className:"deck"},r.a.createElement(K,{title:"Largest Recent Edits",pageLink:"largest-recent-edits",history:this.state.history,graph:r.a.createElement(re,{paused:!0,fullGraph:!1,settings:ue})}),r.a.createElement(K,{title:me.name,pageLink:"proportion-flagged",history:this.state.history,graph:r.a.createElement(re,{paused:!1,fullGraph:!1,settings:me})}))))))}}]),t}(n.Component),be={getData:function(){var e;return D.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.awrap(G());case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},refreshTime:2e3,refreshMethod:function(){this.loadData()},keys:["editcount"],index:"name",xAxis:"users",yAxis:"edit count",colors:"paired",tooltip:function(e){return this.tooltip(e,"https://www.wikidata.org/wiki/User:")}},ve=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePause=function(e){a.setState({paused:e.target.value})},a.state={history:a.props.history,paused:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(se,{handlePause:this.handlePause,paused:this.state.paused,graph:r.a.createElement(te,{fullGraph:!0,settings:be,paused:this.state.paused}),name:"Users By Most Edits"})}}]),t}(n.Component);a(429);var we=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{basename:"/Software-Engineering",history:N},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:j}),r.a.createElement(c.a,{exact:!0,path:"/page",component:ge}),r.a.createElement(c.a,{exact:!0,path:"/users-by-most-edits",component:ve}),r.a.createElement(c.a,{exact:!0,path:"/most-active-users",component:oe}),r.a.createElement(c.a,{exact:!0,path:"/recent-edit-size",component:de}),r.a.createElement(c.a,{exact:!0,path:"/largest-recent-edits",component:pe}),r.a.createElement(c.a,{exact:!0,path:"/most-active-pages",component:le}),r.a.createElement(c.a,{exact:!0,path:"/proportion-flagged",component:fe}),r.a.createElement(c.a,{exact:!0,path:"/feed",component:Y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[281,1,2]]]);
//# sourceMappingURL=main.ddca698e.chunk.js.map