(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a(1),s=a(2),c=a(3),o=a(5),u=a(4),d=a(6),h=a(9),m=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).date=new Date,a.state={text:"",checkbox:!1,date:a.date.toISOString().slice(0,10),maxDate:"".concat(1*a.date.toISOString().slice(0,4)+1,"-12-31"),isCorrect:!0},a.handleInputChange=function(e){var t=e.target.type,n=e.target.value;"checkbox"===t&&(n=e.target.checked),a.setState(Object(h.a)({},t,n))},a.handleSubmit=function(e){if(e.preventDefault(),a.state.text.length<3||!Boolean(a.state.date))return a.setState({isCorrect:!1});(0,a.props.handleNewTask)({text:a.state.text,priority:a.state.checkbox,date:a.state.date}),a.date=new Date,a.setState({text:"",checkbox:!1,date:a.date.toISOString().slice(0,10),maxDate:"".concat(1*a.date.toISOString().slice(0,4)+1,"-12-31"),isCorrect:!0})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"taskContent"},r.a.createElement("span",null,"Zadanie:"),r.a.createElement("input",{type:"text",id:"taskContent",value:this.state.text,onChange:this.handleInputChange,placeholder:"Tre\u015b\u0107 zadania..."})),r.a.createElement("label",{htmlFor:"priority"},r.a.createElement("input",{type:"checkbox",id:"priority",checked:this.state.checkbox,onChange:this.handleInputChange}),r.a.createElement("span",null,"Priorytet"))),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"date"},r.a.createElement("span",null,"Termin wykonania:"),r.a.createElement("input",{type:"date",id:"date",value:this.state.date,min:this.state.date,max:this.state.maxDate,onChange:this.handleInputChange}))),r.a.createElement("button",null,"dodaj")),!this.state.isCorrect&&r.a.createElement("h1",null,"Tre\u015b\u0107 zadania musi zawiera\u0107 przynajmniej 3 znaki oraz mie\u0107 wyznaczony termin wykonania!"))}}]),t}(n.Component),k=function(e){var t=e.task,a=t.id,n=t.text,i=t.priority,l=t.date,s=e.handleDoneTask;return r.a.createElement("p",{className:"activeTask"},r.a.createElement("span",null,r.a.createElement("strong",{className:i?"important":null},n),"- do"," ",l),r.a.createElement("button",{onClick:function(){return s(a,!0)}},"zadanie wykonane"),r.a.createElement("button",{onClick:function(){return s(a,!1)}},"x"))},p=function(e){var t=e.tasks,a=e.handleDoneTask,n=Object(l.a)(t),i=(n=n.filter(function(e){return!e.finishedDate})).length;return n.sort(function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0}),n=n.map(function(e){return r.a.createElement(k,{key:e.id,task:e,handleDoneTask:a})}),r.a.createElement("section",{className:"activeTasks"},i?r.a.createElement("h1",null,"Wykaz aktywnych zada\u0144"):r.a.createElement("h1",null,"Brak aktywnych zada\u0144 do wykonania"),n)},f=function(e){var t=e.task,a=t.id,n=t.text,i=t.priority,l=t.date,s=t.finishedDate,c=e.handleDoneTask,o=new Date(s).toLocaleString();return"."===o.charAt(1)&&(o="0".concat(o)),r.a.createElement("p",{className:"doneTask"},r.a.createElement("span",null,r.a.createElement("strong",{className:i?"important":null},n),r.a.createElement("em",null,"(zrobi\u0107 do ",l,")")),r.a.createElement("span",null,"- potwierdzenie wykonania ",o,r.a.createElement("button",{onClick:function(){return c(a,!1)}},"x")))},y=function(e){var t=e.tasks,a=e.handleDoneTask,n=Object(l.a)(t);(n=n.filter(function(e){return e.finishedDate})).sort(function(e,t){return(e=e.finishedDate)<(t=t.finishedDate)?1:e>t?-1:0});var i=n.length;return n=(n=n.slice(0,3)).map(function(e){return r.a.createElement(f,{key:e.id,task:e,handleDoneTask:a})}),r.a.createElement("section",{className:"doneTasks"},r.a.createElement("h1",null,"Zadania wykonane",r.a.createElement("em",null,"(",i,")")),Boolean(i)&&r.a.createElement("h2",null,"Ostatnie 3 wykonane zadania"),n)},E=(a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentId:null,tasks:[{id:0,text:"naprawi\u0107 kran w kuchni",priority:!1,date:"2019-02-07",finishedDate:null},{id:1,text:"zrobi\u0107 zakupy",priority:!1,date:"2019-04-28",finishedDate:null},{id:2,text:"wyprowadzi\u0107 psa",priority:!0,date:"2019-02-08",finishedDate:null},{id:4,text:"zrobi\u0107 dobry uczynek",priority:!0,date:"2019-12-31",finishedDate:null}]},a.handleNewTask=function(e){e.id=a.state.currentId,e.finishedDate=null;var t=[].concat(Object(l.a)(a.state.tasks),[e]);a.setState(function(e){return{tasks:t,currentId:e.currentId+1}})},a.handleDoneTask=function(e,t){var n=Object(l.a)(a.state.tasks);n=(n=n.map(function(a){if(a.id===e){if(!t)return null;a.finishedDate=(new Date).getTime()}return a})).filter(function(e){return null!==e}),a.setState({tasks:n})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({currentId:this.state.tasks.length+1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(m,{handleNewTask:this.handleNewTask}),r.a.createElement(p,{tasks:this.state.tasks,handleDoneTask:this.handleDoneTask}),r.a.createElement(y,{tasks:this.state.tasks,handleDoneTask:this.handleDoneTask}))}}]),t}(n.Component));Object(i.render)(r.a.createElement(E,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.3ba73d41.chunk.js.map