(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{290:function(e,a,t){e.exports=t(328)},295:function(e,a,t){},296:function(e,a,t){},328:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),o=t.n(l),c=(t(295),t(296),t(82)),i=t.n(c),s=t(127),m=t(147),u=t(354),d=t(355),f=t(356),E=t(350),p=t(353),g=t(357),h=t(64),b=t(241),y=t(352),v=Object(b.a)((function(e){return{root:{display:"flex",color:"white",height:"70px",alignItems:"center",justifyContent:"center",marginTop:e.spacing(8),backgroundColor:"#9b0101"},icon:{marginRight:e.spacing(2)},card:{maxHeight:"200%",display:"block",flexDirection:"column",minWidth:"300px",marginLeft:"13.5px",marginRight:"13.5px",float:"right",width:"100px",position:"center",borderRadius:"7px",justifyContent:"space-evenly",boxSizing:"border-box"},cardMedia:{paddingTop:"6.25%",paddingButtom:"6.25%"},cardContent:{flexGrow:1}}}));function C(){var e=v(),a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],o=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v2/all");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,console.log(t),o(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=new Intl.NumberFormat("en");return console.log("formater",b.format(l.cases)),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement("main",null,r.a.createElement(y.a,{className:e.cardGrid,maxWidth:"600px"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{container:!0,spacing:0,justify:"space-evenly"},r.a.createElement(u.a,{className:e.card,variant:"outlined",elevation:3},r.a.createElement(d.a,{className:e.cardContent},r.a.createElement(f.a,{className:e.cardMedia,align:"center"},r.a.createElement(h.a,{color:"secondary",style:{fontSize:25}},"TOTAL CASES"),r.a.createElement(g.a,null),r.a.createElement(h.a,{color:"primary",style:{fontSize:40}},b.format(l.cases))))),r.a.createElement(u.a,{className:e.card,variant:"outlined"},r.a.createElement(d.a,{className:e.cardContent},r.a.createElement(f.a,{className:e.cardMedia,align:"center"},r.a.createElement(h.a,{color:"secondary",style:{fontSize:25}},"TOTAL DEATHS"),r.a.createElement(g.a,null),r.a.createElement(h.a,{color:"primary",style:{fontSize:40}},b.format(l.deaths))))),r.a.createElement(u.a,{className:e.card,variant:"outlined"},r.a.createElement(d.a,{className:e.cardContent},r.a.createElement(f.a,{className:e.cardMedia,align:"center"},r.a.createElement(h.a,{color:"secondary",style:{fontSize:25}},"TOTAL RECOVERED"),r.a.createElement(g.a,null),r.a.createElement(h.a,{color:"primary",style:{fontSize:40}},b.format(l.recovered)))))),r.a.createElement("br",null),r.a.createElement(p.a,{container:!0,spacing:0,justify:"space-evenly"},r.a.createElement(u.a,{className:e.card,variant:"outlined"},r.a.createElement(d.a,{className:e.cardContent},r.a.createElement(f.a,{className:e.cardMedia,align:"center"},r.a.createElement(h.a,{color:"secondary",style:{fontSize:25}},"TOTAL TESTS"),r.a.createElement(g.a,null),r.a.createElement(h.a,{color:"primary",style:{fontSize:40}},b.format(l.tests))))),r.a.createElement(u.a,{className:e.card,variant:"outlined"},r.a.createElement(d.a,{className:e.cardContent},r.a.createElement(f.a,{className:e.cardMedia,align:"center"},r.a.createElement(h.a,{color:"secondary",style:{fontSize:25}},"TOTAL ACTIVE CASES"),r.a.createElement(g.a,null),r.a.createElement(h.a,{color:"primary",style:{fontSize:40}},b.format(l.active))))),r.a.createElement(u.a,{className:e.card,variant:"outlined"},r.a.createElement(d.a,{className:e.cardContent},r.a.createElement(f.a,{className:e.cardMedia,align:"center"},r.a.createElement(h.a,{color:"secondary",style:{fontSize:25}},"AFFECTED COUNTRIES"),r.a.createElement(g.a,null),r.a.createElement(h.a,{color:"primary",style:{fontSize:40}},b.format(l.affectedCountries)))))),r.a.createElement("br",null),r.a.createElement("br",null))))}var x=Object(b.a)((function(e){return{root:{display:"flex",color:"white",height:"70px",alignItems:"center",justifyContent:"center",marginTop:e.spacing(8),backgroundColor:"#01579b"},icon:{marginRight:e.spacing(2)},card:{maxHeight:"70%",display:"block",flexDirection:"column",minWidth:"300px",marginLeft:"20.5px",marginRight:"20.5px",float:"right",width:"1200px",position:"center",borderRadius:"5px",justifyContent:"space-evenly",boxSizing:"border-box"},cardMedia:{paddingTop:"4.25%",paddingButtom:"4.25%"},cardContent:{flexGrow:0}}}));function S(){var e=x(),a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],o=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v2/countries/India");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,o(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement("main",null,r.a.createElement(y.a,{className:e.cardGrid,maxWidth:"600px"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{container:!0,spacing:15,justify:"space-evenly"},r.a.createElement(u.a,{className:e.card,variant:"outlined",elevation:3},r.a.createElement(d.a,{className:e.cardContent},r.a.createElement(f.a,{className:e.cardMedia,align:"center"},r.a.createElement(h.a,{color:"secondary",style:{fontSize:25}},"India"),r.a.createElement(g.a,null),r.a.createElement(h.a,{color:"primary",style:{fontSize:20}},"Total Cases (",l.cases,"), Cases Today (",l.todayCases,"), Total Deaths (",l.deaths,"), Deaths Today (",l.todayDeaths,"), Recovered Patients (",l.recovered,"), Active (",l.active,"), Critical Patients (",l.critical,")"))))),r.a.createElement("br",null),r.a.createElement("br",null))))}var w=t(273),N=t(274),T=t(281),j=t(280),k=t(275),O=t.n(k),D=t(71),R=t(358),z=function(e){Object(T.a)(t,e);var a=Object(j.a)(t);function t(e){var n;return Object(w.a)(this,t),(n=a.call(this,e)).state={stats:[],loading:!1},n.getMuiTheme=function(){return Object(D.a)({overrides:{MUIDataTable:{root:{backgroundColor:"#FF000"},paper:{boxShadow:"none"}},MUIDataTableBodyCell:{root:{backgroundColor:"white"}}}})},n.tableRef=r.a.createRef(),n}return Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://corona.lmao.ninja/v2/countries?yesterday=true&sort=cases&allowNull=true").then((function(e){return e.json()})).then((function(a){e.setState({stats:a,loading:!1},(function(){return console.log(a)}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginLeft:"10px",marginRight:"10px"}},r.a.createElement("br",null),r.a.createElement(R.a,{theme:this.getMuiTheme()},r.a.createElement(O.a,{title:r.a.createElement("h1",{style:{float:"left",color:"#3f51b5"}},"World Wide Corona Stats"),isLoading:this.state.loading,columns:[{name:"country",label:"Country",options:{filter:!0,sort:!1}},{name:"cases",label:"Total Cases",options:{filter:!0,sort:!0}},{name:"todayCases",label:"Current Cases",options:{filter:!0,sort:!1}},{name:"deaths",label:"Total Deaths",options:{filter:!0,sort:!1}},{name:"todayDeaths",label:"Current Deaths",options:{filter:!0,sort:!1}},{name:"recovered",label:"Recovered Patients",options:{filter:!0,sort:!1}},{name:"active",label:"Active",options:{filter:!0,sort:!1}},{name:"critical",label:"Critical Patients",options:{filter:!0,sort:!1}}],data:this.state.stats,options:{filter:!0,rowHover:!0,downloadOptions:{filename:"CovidData.csv",separator:","},filterType:"dropdown",selectableRows:!1,responsive:"stacked"}}))))}}]),t}(r.a.Component),I=t(150),M=function(){return r.a.createElement("div",{style:{color:"#3f51b5",float:"centre"}},r.a.createElement("br",null),r.a.createElement(I.SocialIcon,{network:"linkedin",bgColor:"#0e76a8",url:"https://www.linkedin.com/in/aniket-tikone-27808a138",target:"_blanck"})," "," ",r.a.createElement(I.SocialIcon,{network:"github",bgColor:"#4078c0",url:"https://github.com/annytikone",target:"_blanck"})," ",r.a.createElement(I.SocialIcon,{network:"medium",bgColor:"#0000cd",url:"https://medium.com/@anikettikone9",target:"_blanck"}))},A=t(360),L=t(248),F=Object(b.a)((function(e){return{root:{flexGrow:1,boxShadow:"none",backgroundColor:"#D3300E"},title:{flexGrow:1}}})),W=function(){var e=F();return r.a.createElement("div",{className:e.root},r.a.createElement(A.a,{position:"static"},r.a.createElement(L.a,null,r.a.createElement(h.a,{variant:"h6",className:e.title},"COVID-19 CORONAVIRUS PANDEMIC"))))};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null),r.a.createElement(C,null),r.a.createElement(S,null),r.a.createElement(z,null),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[290,1,2]]]);
//# sourceMappingURL=main.d2abaf04.chunk.js.map