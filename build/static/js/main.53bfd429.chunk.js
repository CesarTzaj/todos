(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),l=a.n(c),r=(a(16),a(2)),u=a(1);var m=Object(n.createContext)();function s(e){var t=e.children,a=function(e,t){var a=o.a.useState(t),n=Object(u.a)(a,2),c=n[0],l=n[1],r=o.a.useState(!1),m=Object(u.a)(r,2),s=m[0],d=m[1],i=o.a.useState(t),p=Object(u.a)(i,2),f=p[0],E=p[1];return o.a.useEffect(function(){setTimeout(function(){try{var a=localStorage.getItem(e),n=[];a?n=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),n=t),E(n),l(!1)}catch(s){d(s)}},1e3)}),{item:f,saveItem:function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),E(t)}catch(s){d(s)}},loading:c,error:s}}("TODOS_V1",[]),n=a.item,c=a.saveItem,l=a.loading,s=a.error,d=o.a.useState(""),i=Object(u.a)(d,2),p=i[0],f=i[1],E=o.a.useState(!1),g=Object(u.a)(E,2),v=g[0],b=g[1],h=o.a.useState(""),k=Object(u.a)(h,2),C=k[0],S=k[1];var O=n.length,x=n.filter(function(e){return!!e.completed}).length,N=[];N=p.length<=1?n:n.filter(function(e){var t=p.toLowerCase();return e.text.toLowerCase().includes(t)});var y=n.filter(function(e){return!e.completed}),j=n.filter(function(e){return e.completed});return o.a.createElement(m.Provider,{value:{todos:n,loading:l,error:s,searchValue:p,openTodo:v,totalTodos:O,todoCompleted:x,SearchedTodos:N,newTodoValue:C,SetNewTodoValue:S,MarkComplete:function(e,t){var a=n.findIndex(function(t){return t.key===e}),o=Object(r.a)(n);n[a].completed=t,c(o)},Delete:function(e){var t=n.findIndex(function(t){return t.text===e}),a=Object(r.a)(n);a.splice(a[t],1),c(a)},AddTodo:function(e){var t=Object(r.a)(n);t.push({text:e,completed:!1,key:"key".concat(t.length+1)}),c(t)},setAddStatus:function(){b(!v)},SetSearchValue:f,saveTodos:c,onWrite:function(e){S(e.target.value)},GetCompleted:function(){var e=[].concat(Object(r.a)(j),Object(r.a)(y));console.log(e),c(e)},GetUncompleted:function(){var e=[].concat(Object(r.a)(y),Object(r.a)(j));console.log(e),c(e)}}},t)}function d(){return o.a.createElement(m.Consumer,null,function(e){var t=e.todoCompleted,a=e.totalTodos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"My tasks"),o.a.createElement("p",{className:"trackingTask"},"You've completed ",t," out of ",a))})}function i(){var e=Object(n.useContext)(m),t=e.SetSearchValue;e.GetCompleted;return o.a.createElement("section",{className:"searchSection"},o.a.createElement("input",{onChange:function(e){console.log(e.target.value),t(e.target.value)},placeholder:"ToDo's"}))}function p(e){return o.a.createElement("ul",null,e.children)}function f(e){var t=o.a.useContext(m),a=t.MarkComplete,n=t.Delete;return o.a.createElement("li",null,o.a.createElement("span",{className:"material-symbols-outlined  ".concat(e.completed&&"task-completed"," "),onClick:function(){console.log(e.text,e),a(e.key2,!e.completed)}},"done"),o.a.createElement("p",{className:"".concat(e.completed&&"task-completed")},e.text," "),o.a.createElement("span",{className:"material-symbols-outlined delete",onClick:function(){return n(e.text)}},"close"))}var E=a(3),g=a.n(E);function v(){var e=o.a.useContext(m).setAddStatus;return g.a.createPortal(o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"AddTodoButton",onClick:e},"+")),document.querySelector("#Button"))}function b(){var e=Object(n.useContext)(m),t=e.newTodoValue,a=e.AddTodo,c=e.setAddStatus;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"SaveButtons"},o.a.createElement("button",{type:"button",onClick:function(){c()},className:"button"},"Cancel"),o.a.createElement("button",{type:"button",onClick:function(){""!==t&&(a(t),c())},className:"button primary"},"Add")))}function h(){var e=Object(n.useContext)(m),t=e.newTodoValue,a=e.onWrite;return g.a.createPortal(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"background"}),o.a.createElement("section",{className:"information"},o.a.createElement("h2",null,"New Task"),o.a.createElement("div",{className:"constainer"},o.a.createElement("textarea",{placeholder:"New Task",onChange:a,value:t}),o.a.createElement(b,null)),o.a.createElement("section",{className:"ImgBackground"}))),document.querySelector("#addTodo"))}var k=a(4),C=a(7);function S(){var e=function(e){var t=Object(n.useContext)(m),a=t.GetCompleted,o=t.GetUncompleted,c=(t.SearchedTodos,Object(n.useState)(e)),l=Object(u.a)(c,2),r=l[0],s=l[1];return{handleClickBox:function(e){var t=e.target;s(Object(C.a)({},r,Object(k.a)({},t.name,!r[t.name]))),"completed"!==t.name||r.completed?o():a()},check:r}}({pending:!1,completed:!1}),t=e.handleClickBox,a=e.check;return o.a.createElement("form",{className:"FilterSection"},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"pending"},"Peding"),o.a.createElement("input",{type:"checkbox",defaultChecked:a.pending,id:"pending",name:"pending",onChange:t})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"completed"},"Completed"),o.a.createElement("input",{type:"checkbox",id:"completed",name:"completed",defaultChecked:a.completed,onChange:t})))}var O=function(){var e=o.a.useContext(m),t=e.error,a=e.loading,n=e.SearchedTodos,c=e.openTodo;return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"container"},o.a.createElement(d,null),o.a.createElement(i,null),o.a.createElement(S,null),o.a.createElement(p,null,t&&o.a.createElement("p",{className:"estado"},"Error 404..."),a&&o.a.createElement("p",{className:"estado"},"Estamos Cargando...."),!a&&!n.length&&o.a.createElement("p",{className:"estado"},"\xa1creat el primer todo!"),n.map(function(e){return o.a.createElement(f,{text:e.text,key:e.key,completed:e.completed,key2:e.key})})),o.a.createElement(v,null)),!!c&&o.a.createElement(h,null))};function x(){return o.a.createElement(s,null,o.a.createElement(O,null))}l.a.createRoot(document.getElementById("tasks")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)))},8:function(e,t,a){e.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.53bfd429.chunk.js.map