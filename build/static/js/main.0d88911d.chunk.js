(this["webpackJsonprenato-do-list"]=this["webpackJsonprenato-do-list"]||[]).push([[0],{29:function(e,a,t){},35:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var s=t(1),i=t.n(s),n=t(15),l=t.n(n),d=(t(29),t(11)),c=t(18),o=t(23),r=t.n(o),b=t(4),j=t(17),h=t(14);const u=Object(c.b)({name:"task",initialState:[{id:0,label:"batman",isCompleted:!1,speed:3,urgency:1,fun:1,total:5,isClicked:!1,isHighlighted:!1},{id:1,label:"robin",isCompleted:!1,speed:1,urgency:3,fun:3,total:7,isClicked:!1,isHighlighted:!1}],reducers:{addTask:(e,a)=>{const t={id:Date.now(),label:a.payload.label,isCompleted:!1,speed:a.payload.speed,urgency:a.payload.urgency,fun:a.payload.fun,total:a.payload.speed+a.payload.urgency+a.payload.fun,isClicked:!1,isHighlighted:!1};e.push(t)},editTask:(e,a)=>{const t=e.find((e=>e.id===a.payload.index));t&&(t.label=a.payload.label,t.speed=a.payload.speed,t.urgency=a.payload.urgency,t.fun=a.payload.fun)},toggleTask:(e,a)=>{const t=e.find((e=>e.id===a.payload));t&&(t.isCompleted=!t.isCompleted)},highlightTask:(e,a)=>{const t=e.find((e=>e.id===a.payload));t&&(t.isHighlighted=!t.isHighlighted)},removeTask:(e,a)=>e.filter((e=>e.id!==a.payload))}}),{addTask:m,editTask:p,highlightTask:g,toggleTask:x,removeTask:k}=u.actions;var O=u.reducer;const v=Object(b.b)({task:O}),T={key:"root",storage:r.a},y=Object(j.a)(T,v);var f=Object(c.a)({reducer:y,devTools:!1,middleware:[h.a]}),_=(t(35),t(5)),w=t(3),N=t(24),S=t(7),C=t(0);var E=({className:e,label:a,type:t="button",isDisabled:s,arrowLeft:i,arrowRight:n,editSign:l,trashSign:d,plusSign:c,onClick:o})=>Object(C.jsxs)("button",{className:e,type:t,disabled:s,onClick:o,children:[i&&Object(C.jsx)(S.c,{"data-testid":"fi-chevron-left"}),c&&Object(C.jsx)(S.g,{}),l&&Object(C.jsx)(S.f,{}),d&&Object(C.jsx)(S.i,{}),a,n&&Object(C.jsx)(S.b,{})]});var I=({label:e,isFirstElement:a,className:t})=>{let s;return s=a?Object(C.jsx)("h1",{className:t,children:e}):Object(C.jsx)("h2",{className:t,children:e}),Object(C.jsx)(C.Fragment,{children:s})};var A=({alt:e,srcUrl:a,className:t})=>Object(C.jsx)("figure",{className:t,children:Object(C.jsx)("img",{alt:e,src:a})}),M=t.p+"static/media/renato_1.c380084b.jpg";var F={general:{headline:"Renato-do list"},landingView:{imageAlt:"landing-view",ctaLabel:"Inizia"},introView1:{imageAlt:"intro-view-1",subheadline:"Come funziona?",arrayOfParagraphs:["paragraph #1","paragraph #2","paragraph #3"],ctaLabel:"Ho capito"},modal:{label:"Ma siamo sicuri?",deleteButton:"Rimuovi",goBackButton:"Annulla"},toastLabel:"Hai rimosso una task",speed:{headline:{headlineLabel:"Quanto dura?"},name:"speed option",options:[{id:1,label:"poco"},{id:2,label:"medio"},{id:3,label:"tanto"}]},urgency:{headline:{headlineLabel:"Quanto e' importante?"},name:"urgency option",options:[{id:1,label:"non urgente"},{id:3,label:"urgente"}]},fun:{headline:{headlineLabel:"Quanto e' divertente?"},name:"fun option",options:[{id:1,label:"tanto"},{id:3,label:"poco"}]},tasks:{tasksTodoHeadline:"Ancora da fare",tasksDoneHeadline:"Taaaaaaaaaaac! Finito!"},addEditTask:{buttonGoBack:"Lista",buttonDone:"fatto",addTaskHeadline:"Aggiungi una task",modifyTaskHeadline:"Modifica la task",placeHolder:"Cosa devi fare? Scrivilo qui."}};var L=()=>{const{headline:e}=F.general,{imageAlt:a,ctaLabel:t}=F.landingView;return Object(C.jsxs)("div",{className:"LandingView",children:[Object(C.jsx)(I,{className:"LandingView__headline",isFirstElement:!0,label:e}),Object(C.jsx)(A,{alt:a,srcUrl:M,className:"LandingView__image"}),Object(C.jsx)(_.b,{to:"/intro-1",className:"LandingView__button",children:Object(C.jsx)(E,{type:"button",label:t,arrowRight:!0})})]})};var V=({className:e,arrayOfParagraphs:a})=>Object(C.jsx)("section",{className:e,"data-testid":"section-paragraphs",children:a&&a.map(((e,a)=>Object(C.jsx)("p",{children:e},a)))}),U=t.p+"static/media/renato_2.91ad4da8.jpg";var H=()=>{const{headline:e}=F.general,{subheadline:a,arrayOfParagraphs:t}=F.introView1,{imageAlt:s,ctaLabel:i}=F.introView1;return Object(C.jsxs)("div",{className:"IntroView1",children:[Object(C.jsx)(I,{className:"IntroView1__headline",label:e,isFirstElement:!0}),Object(C.jsx)(A,{className:"IntroView1__image",alt:s,srcUrl:U}),Object(C.jsx)(I,{className:"IntroView1__subheadline",label:a}),Object(C.jsx)(V,{className:"IntroView1__sectionParagraphs",arrayOfParagraphs:t}),Object(C.jsx)(_.b,{to:"/main",className:"IntroView1__button",children:Object(C.jsx)(E,{type:"button",label:i,arrowRight:!0})})]})};const D=()=>Object(d.b)(),B=d.c;var $=({tasks:e,setShowModal:a,setShowToast:t})=>{const s=D(),i=e.filter((e=>e.isHighlighted))[0],{label:n,deleteButton:l,goBackButton:d}=F.modal;return Object(C.jsxs)("div",{className:"Dialog","data-testid":"modal",children:[n,Object(C.jsxs)("div",{className:"Dialog__buttons",children:[Object(C.jsx)(E,{className:"Dialog__delete",label:l,type:"button",onClick:()=>{i&&(s(k(i.id)),a(!1),t(!0),setTimeout((()=>{t(!1)}),5e3))}}),Object(C.jsx)(E,{className:"Dialog__goBack",label:d,type:"button",onClick:()=>{s(g(i.id)),a(!1)}})]})]})};var W=()=>Object(C.jsx)("div",{className:"Modal"});var P=()=>Object(C.jsx)("div",{className:"Toast",children:F.toastLabel});var R=({label:e,value:a,isChecked:t,onChange:s})=>Object(C.jsxs)("div",{className:"Task__checkbox",children:[Object(C.jsx)("input",{id:`checkbox-0${a}`,value:a,checked:t,onChange:s,type:"checkbox"}),Object(C.jsx)("label",{htmlFor:`checkbox-0${a}`,children:e})]}),Q=t.p+"static/media/taaac.a8a97478.mp3";var q=({id:e,label:a,speed:t,urgency:s,fun:i,isCompleted:n,setSpeed:l,setUrgency:d,setFun:c,setEditIndex:o,setItemText:r,setModifyTask:b,setShowModal:j})=>{const h=D();return Object(C.jsxs)("li",{className:"Task",children:[Object(C.jsx)(R,{label:a,value:e,isChecked:n,onChange:()=>{h(x(e)),n||new Audio(Q).play()}}),Object(C.jsxs)("div",{className:"Task__buttons",children:[Object(C.jsx)(_.b,{to:"add-edit",className:"Task__edit",children:Object(C.jsx)(E,{editSign:!0,type:"button",onClick:()=>{l(t),d(s),c(i),r(a),o(e),b(!0)}})}),Object(C.jsx)(E,{className:"Task__trash",trashSign:!0,type:"button",onClick:()=>{h(g(e)),j&&j(!0)}})]})]})};var z=({className:e,tasks:a,tasksTotal:t,tasksTodo:s,setSpeed:i,setUrgency:n,setFun:l,setEditIndex:d,setItemText:c,setModifyTask:o,setShowModal:r})=>{const{tasksTodoHeadline:b}=F.tasks,j=0===t?"(vuoto)":`(${`${s}/${t}`})`;return Object(C.jsxs)("div",{className:e,children:[Object(C.jsxs)("div",{className:"TasksTodo__headlineWrapper",children:[Object(C.jsx)(I,{label:`${b} ${j}`}),Object(C.jsx)(S.d,{})]}),s>0&&Object(C.jsx)("ul",{className:"TasksTodo__tasksWrapper",children:a.filter((e=>!e.isCompleted)).sort(((e,a)=>a.total-e.total)).map((({id:e,label:a,isCompleted:t,speed:s,urgency:b,fun:j})=>Object(C.jsx)(q,{id:e,label:a,isCompleted:t,speed:s,urgency:b,fun:j,setItemText:c,setSpeed:i,setUrgency:n,setFun:l,setEditIndex:d,setModifyTask:o,setShowModal:r},e)))})]})};var G=({className:e,tasksDone:a,tasksTotal:t,tasks:s,setSpeed:i,setUrgency:n,setFun:l,setEditIndex:d,setItemText:c,setModifyTask:o,setShowModal:r})=>{const{tasksDoneHeadline:b}=F.tasks,j=0===t?"(vuoto)":`(${`${a}/${t}`})`;return Object(C.jsxs)("div",{className:e,children:[Object(C.jsxs)("div",{className:"TasksDone__headlineWrapper",children:[Object(C.jsx)(I,{label:`${b} ${j}`}),Object(C.jsx)(S.d,{})]}),a>0&&Object(C.jsx)("ul",{className:"TasksDone__tasksWrapper",children:s.filter((e=>e.isCompleted)).map((({id:e,label:a,isCompleted:t,speed:s,urgency:b,fun:j})=>Object(C.jsx)(q,{isCompleted:t,id:e,label:a,speed:s,urgency:b,fun:j,setItemText:c,setSpeed:i,setUrgency:n,setFun:l,setEditIndex:d,setModifyTask:o,setShowModal:r},e)))})]})};var J=({showModal:e,showToast:a,setEditIndex:t,setItemText:i,setSpeed:n,setUrgency:l,setFun:d,setModifyTask:c,setShowModal:o,setShowToast:r})=>{const{headline:b}=F.general,j=B((e=>e.task)),h=B((e=>e.task.map((e=>e.isCompleted)))),u=j.length,m=h.filter(Boolean).length,p=u-m;return Object(s.useEffect)((()=>{const a=document.querySelector("body");a&&(!0===e?a.classList.add("blocked"):a.classList.remove("blocked"))})),Object(C.jsxs)("div",{className:"MainView",children:[e&&Object(C.jsx)(W,{}),Object(C.jsx)(I,{className:"MainView__headline",isFirstElement:!0,label:b}),Object(C.jsx)(z,{className:"MainView__tasksTodo",tasks:j,tasksTodo:p,tasksTotal:u,setItemText:i,setSpeed:n,setUrgency:l,setFun:d,setEditIndex:t,setModifyTask:c,setShowModal:o}),Object(C.jsx)(G,{className:"MainView__tasksDone",tasks:j,tasksDone:m,tasksTotal:u,setItemText:i,setSpeed:n,setUrgency:l,setFun:d,setEditIndex:t,setModifyTask:c,setShowModal:o}),Object(C.jsx)(_.b,{to:"add-edit",className:"MainView__addButton",children:Object(C.jsx)(E,{plusSign:!0,type:"button"})}),e&&Object(C.jsx)($,{tasks:j,setShowModal:o,setShowToast:r}),a&&Object(C.jsx)(P,{})]})};var K=({id:e,label:a,value:t,placeholder:s,onChange:i})=>Object(C.jsxs)("div",{className:"AddEditTask__textarea",children:[Object(C.jsx)("label",{htmlFor:e,children:a}),Object(C.jsx)("textarea",{id:e,rows:6,value:t,placeholder:s,onChange:i})]});var X=({className:e,label:a,speedIcon:t,urgencyIcon:s,funIcon:i})=>Object(C.jsxs)("div",{className:e,"data-testid":"label-icon",children:[t&&Object(C.jsx)(S.e,{"data-testid":"fi-clock"}),s&&Object(C.jsx)(S.a,{"data-testid":"fi-alert-triangle"}),i&&Object(C.jsx)(S.h,{"data-testid":"fi-smile"}),a]});var Y=({className:e,label:a,name:t,isChecked:s,onChange:i})=>Object(C.jsx)("div",{className:e,children:Object(C.jsxs)("label",{htmlFor:a,children:[Object(C.jsx)("input",{checked:s,type:"radio",id:a,name:t,value:a,onChange:i}),a]})});var Z=({className:e,speed:a,setSpeed:t})=>{const{name:s,options:i}=F.speed,{headlineLabel:n}=F.speed.headline;return Object(C.jsxs)("div",{className:e,children:[Object(C.jsx)(X,{className:"AddEditTask__choice-label",speedIcon:!0,label:n}),Object(C.jsx)("div",{className:"AddEditTask__choice-radio-wrapper",children:i.map((({label:e,id:n},l)=>Object(C.jsx)(Y,{className:"AddEditTask__choice-radio "+(n===a?"-selected":""),label:e,isChecked:n===a,onChange:e=>{e.target.value===i[0].label?t(i[0].id):e.target.value===i[1].label?t(i[1].id):t(i[2].id)},name:s,value:e},l)))})]})};var ee=({className:e,urgency:a,setUrgency:t})=>{const{name:s,options:i}=F.urgency,{headlineLabel:n}=F.urgency.headline;return Object(C.jsxs)("div",{className:e,children:[Object(C.jsx)(X,{className:"AddEditTask__choice-label",urgencyIcon:!0,label:n}),Object(C.jsx)("div",{className:"AddEditTask__choice-radio-wrapper",children:i.map((({label:e,id:n},l)=>Object(C.jsx)(Y,{className:"AddEditTask__choice-radio "+(n===a?"-selected":""),label:e,isChecked:n===a,onChange:e=>{e.target.value===i[0].label?t(i[0].id):t(i[1].id)},name:s,value:e},l)))})]})};var ae=({className:e,fun:a,setFun:t})=>{const{name:s,options:i}=F.fun,{headlineLabel:n}=F.fun.headline;return Object(C.jsxs)("div",{className:e,children:[Object(C.jsx)(X,{className:"AddEditTask__choice-label",funIcon:!0,label:n}),Object(C.jsx)("div",{className:"AddEditTask__choice-radio-wrapper",children:i.map((({label:e,id:n},l)=>Object(C.jsx)(Y,{className:"AddEditTask__choice-radio "+(n===a?"-selected":""),label:e,isChecked:n===a,onChange:e=>{e.target.value===i[0].label?t(i[0].id):t(i[1].id)},name:s,value:e},l)))})]})};var te=({itemText:e,speed:a,urgency:t,fun:s,editIndex:i,modifyTask:n,setItemText:l,setSpeed:d,setUrgency:c,setFun:o,setModifyTask:r})=>{const{buttonGoBack:b,buttonDone:j,placeHolder:h,addTaskHeadline:u,modifyTaskHeadline:g}=F.addEditTask,x=D();return Object(C.jsxs)("form",{className:"AddEditTask",children:[Object(C.jsxs)("div",{className:"AddEditTask__buttons",children:[Object(C.jsx)(_.b,{to:"/main",className:"AddEditTask__goBack",children:Object(C.jsx)(E,{arrowLeft:!0,type:"button",label:b,onClick:()=>{d(1),c(1),o(1),l(""),r(!1)}})}),n?Object(C.jsx)(_.b,{to:"/main",className:"AddEditTask__confirm",children:Object(C.jsx)(E,{type:"button",label:j,onClick:()=>{x(p({index:i,label:e,speed:a,urgency:t,fun:s})),l(""),r(!1)}})}):Object(C.jsx)(_.b,{to:"/main",className:"AddEditTask__confirm",children:Object(C.jsx)(E,{type:"submit",label:j,isDisabled:!e,onClick:()=>{x(m({label:e,speed:a,urgency:t,fun:s})),l(""),d(1),c(1),o(1),r(!1)}})})]}),n?Object(C.jsx)(K,{id:"modifyTask",label:g,value:e,onChange:e=>{l(e.target.value)}}):Object(C.jsx)(K,{id:"addTask",label:u,value:e,placeholder:h,onChange:e=>{l(e.target.value)}}),Object(C.jsx)(Z,{className:"AddEditTask__choice AddEditTask__choice--speed",speed:a,setSpeed:d}),Object(C.jsx)(ee,{className:"AddEditTask__choice AddEditTask__choice--urgency",urgency:t,setUrgency:c}),Object(C.jsx)(ae,{className:"AddEditTask__choice AddEditTask__choice--fun",fun:s,setFun:o})]})};const se=Object(j.b)(f);var ie=()=>{const[e,a]=Object(s.useState)(""),[t,i]=Object(s.useState)(1),[n,l]=Object(s.useState)(1),[c,o]=Object(s.useState)(1),[r,b]=Object(s.useState)(0),[j,h]=Object(s.useState)(!1),[u,m]=Object(s.useState)(!1),[p,g]=Object(s.useState)(!1);return Object(C.jsx)(d.a,{store:f,children:Object(C.jsx)(N.a,{loading:null,persistor:se,children:Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(_.a,{children:[Object(C.jsx)(w.a,{exact:!0,path:"/renato-do-list",component:L}),Object(C.jsx)(w.a,{path:"/intro-1",component:H}),Object(C.jsx)(w.a,{path:"/main",render:()=>Object(C.jsx)(J,{setItemText:a,setSpeed:i,setUrgency:l,setFun:o,setEditIndex:b,setModifyTask:h,setShowModal:m,showModal:u,showToast:p,setShowToast:g})}),Object(C.jsx)(w.a,{path:"/add-edit",render:()=>Object(C.jsx)(te,{itemText:e,speed:t,urgency:n,fun:c,editIndex:r,modifyTask:j,setItemText:a,setSpeed:i,setUrgency:l,setFun:o,setModifyTask:h})})]})})})})};const ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e,a){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const t=e.installing;null!=t&&(t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}var de=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((({getCLS:a,getFID:t,getFCP:s,getLCP:i,getTTFB:n})=>{a(e),t(e),s(e),i(e),n(e)}))};l.a.render(Object(C.jsx)(d.a,{store:f,children:Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(ie,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/renato-do-list",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const a="/renato-do-list/service-worker.js";ne?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((t=>{const s=t.headers.get("content-type");404===t.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):le(e,a)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):le(a,e)}))}}(),de()}},[[39,1,2]]]);
//# sourceMappingURL=main.0d88911d.chunk.js.map