(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(9),c=n.n(r),l=n(1),d=n(2),i=n(4),s=n(3),u=n(5),m=n(6),h=(n(8),function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).handleOnItemAdded=n.props.onItemAdded,n.handleOnItemChange=n.props.onItemChange,n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onClearInput;return a.a.createElement("div",null,a.a.createElement("input",{onChange:function(t){e.handleOnItemChange(t.target.value)},className:"App__todo-input",value:t,type:"text",placeholder:"Add task..."}),a.a.createElement("button",{className:"App__todo-add-btn",onClick:function(){e.handleOnItemAdded()}},"Add Task"))}}]),t}(o.Component)),p=function(e){var t=e.todoTask,n=e.handleItemCompleted,o=e.itemId,r=e.completed;return a.a.createElement("div",{className:"App__todo-item"},a.a.createElement("input",{type:"checkbox",onChange:function(){n(o)}}),a.a.createElement("li",{className:"App__todo-checkbox ".concat(r?"App__todo-item-completed":"")},t))},f=function(e){var t=e.todos,n=e.handleItemCompleted;return a.a.createElement("ul",{className:"App__todo-list"},t.map(function(e){return a.a.createElement(p,{key:e.id,itemId:e.id,todoTask:e.task,handleItemCompleted:n,completed:e.completed})}))},v=function(e){var t=e.handleArchive;return a.a.createElement("button",{className:"App__todo-btn",onClick:function(){return t()}}," Clear Completed")},A=function(e){var t=e.showActive;return a.a.createElement("button",{className:"App__todo-btn",onClick:function(){t()}}," Active")},b=function(e){var t=e.showAll;return a.a.createElement("button",{className:"App__todo-btn",onClick:function(){t()}}," All")},w=function(e){var t=e.todos;console.log(t[1]);var n=0,o=!0,r=!1,c=void 0;try{for(var l,d=t[Symbol.iterator]();!(o=(l=d.next()).done);o=!0)l.value.completed&&n++}catch(i){r=!0,c=i}finally{try{o||null==d.return||d.return()}finally{if(r)throw c}}return a.a.createElement("div",{className:"App__todo-counter"},n," / ",t.length)},C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[{id:0,task:"Buy groceries",completed:!1},{id:1,task:"Take out trash",completed:!1}],newTodo:""},n.handleArchive=function(){n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},n.showActive=function(){n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},n.showAll=function(){n.setState(function(e){return{todos:e.todos.map(function(e){return e})}})},n.handleItemChange=function(e){n.setState({newTodo:e})},n.handleOnItemAdded=function(){n.state.newTodo&&n.setState(function(e){var t=e.todos,n=e.newTodo;return{todos:[{id:t.length+1,task:n,completed:!1}].concat(Object(m.a)(t)),newTodo:""}})},n.handleItemCompleted=function(e){n.setState(function(t){var n=t.todos,o=Object(m.a)(n),a=o.findIndex(function(t){return t.id===e});return o[a].completed=!o[a].completed,{todos:o}})},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.newTodo;return a.a.createElement("div",null,a.a.createElement("h1",null,"Your todo list"),a.a.createElement(h,{onItemAdded:this.handleOnItemAdded,onItemChange:this.handleItemChange,onClearInput:n}),a.a.createElement(f,{todos:t,handleItemCompleted:this.handleItemCompleted}),a.a.createElement(b,{showAll:this.showAll}),a.a.createElement(v,{handleArchive:this.handleArchive}),a.a.createElement(A,{showActive:this.showActive}),a.a.createElement(w,{todos:t}))}}]),t}(o.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(C,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.8610d178.chunk.js.map