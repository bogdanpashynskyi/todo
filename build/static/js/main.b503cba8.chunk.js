(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),l=n(3),d=n(4),i=n(6),u=n(5),s=n(7),m=n(2),p=n(1),h=(n(9),function(e){var t=e.onItemChange,n=e.onPressInput,a=e.onItemAdded,r=e.onClearInput;return o.a.createElement("div",null,o.a.createElement("input",{onChange:function(e){return t(e.target.value)},onKeyPress:function(e){return n(e)},className:"App__todo-input",value:r,type:"text",placeholder:"Add task..."}),o.a.createElement("button",{className:"App__todo-add-btn",onClick:function(){return a()}},"Add"))}),f=function(e){var t=e.todoTask,n=e.handleItemCompleted,a=e.itemId,r=e.completed,c=e.changeEditMode,l=e.editMode,d=e.updateItem,i=e.cancelUpdate;return o.a.createElement("div",{className:"App__todo-item"},o.a.createElement("input",{type:"checkbox",onChange:function(){return n(a)}}),o.a.createElement("div",{onDoubleClick:function(){return c(a)}},l?o.a.createElement("div",null,o.a.createElement("input",{className:"App__todo-edit-input",type:"text",defaultValue:t,autoFocus:!0,onKeyPress:function(e){return d(e,a)},onKeyDown:function(e){return i(e,a)}})):o.a.createElement("div",null,o.a.createElement("li",{className:"App__todo-item-text ".concat(r?"App__todo-item-completed":"")},t))))},v=function(e){var t=e.todos,n=e.handleItemCompleted,a=e.changeEditMode,r=e.updateItem,c=e.cancelUpdate;return o.a.createElement("ul",{className:"App__todo-list"},t.map(function(e){return o.a.createElement(f,{key:e.id,itemId:e.id,todoTask:e.task,handleItemCompleted:n,completed:e.completed,changeEditMode:a,editMode:e.editMode,updateItem:r,cancelUpdate:c})}))},E=function(e){var t=e.onFilterChange;return o.a.createElement("div",null,o.a.createElement("button",{value:"completed",className:"App__todo-btn",onClick:function(e){return t(e)}},"Completed"),o.a.createElement("button",{value:"all",className:"App__todo-btn",onClick:function(e){return t(e)}},"All"),o.a.createElement("button",{value:"active",className:"App__todo-btn",onClick:function(e){return t(e)}},"Active"))},b=function(e){var t=e.todos,n=0,a=!0,r=!1,c=void 0;try{for(var l,d=t[Symbol.iterator]();!(a=(l=d.next()).done);a=!0)l.value.completed&&n++}catch(i){r=!0,c=i}finally{try{a||null==d.return||d.return()}finally{if(r)throw c}}return o.a.createElement("div",{className:"App__todo-counter"},n," / ",t.length)},I=0,w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:999,task:"Buy groceries",completed:!1,editMode:!1},{id:1e3,task:"Go for a walk",completed:!1,editMode:!1}],filterMode:"all",showTips:!1,newTodo:""},n.handleArchive=function(){n.setState(function(e){var t=e.todos;return{todos:Object(p.a)(t).filter(function(e){return!e.completed})}})},n.onFilterChange=function(e){var t=e.target.value;n.setState({filterMode:t})},n.handleFilter=function(e){switch(n.state.filterMode){case"all":return e;case"active":return e.filter(function(e){return!e.completed});case"completed":return e.filter(function(e){return e.completed});default:return e}},n.onPressInput=function(e){"Enter"===e.key&&n.handleOnItemAdded()},n.changeEditMode=function(e){n.setState(function(t){var n=t.todos,a=t.showTips;return{todos:Object(p.a)(n).map(function(t){return Object(m.a)({},t,{editMode:t.id===e})}),showTips:!a}})},n.updateItem=function(e,t){var a=e.target.value;a&&"Enter"===e.key&&n.setState(function(e){var n=e.todos;return{todos:Object(p.a)(n).map(function(e){return Object(m.a)({},e,{task:e.id===t?a:e.task,editMode:!1})}),showTips:!1}})},n.cancelUpdate=function(e,t){"Escape"===e.key&&n.setState(function(e){var t=e.todos;return{todos:Object(p.a)(t).map(function(e){return Object(m.a)({},e,{editMode:!1})}),showTips:!1}})},n.handleItemChange=function(e){n.setState({newTodo:e})},n.handleOnItemAdded=function(){n.state.newTodo&&n.setState(function(e){var t=e.todos,n=e.newTodo;return{todos:[{id:I++,task:n,completed:!1,editMode:!1}].concat(Object(p.a)(t)),newTodo:""}})},n.handleItemCompleted=function(e){n.setState(function(t){var n=t.todos;return{todos:Object(p.a)(n).map(function(t){return Object(m.a)({},t,{completed:t.id===e?!t.completed:t.completed})})}})},n}return Object(s.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.todos,a=t.newTodo,r=t.showTips,c=this.handleFilter(n);return o.a.createElement("div",null,o.a.createElement("h1",null,"Your todo list"),o.a.createElement(h,{onItemAdded:this.handleOnItemAdded,onItemChange:this.handleItemChange,onClearInput:a,onPressInput:this.onPressInput}),o.a.createElement(v,{todos:c,handleItemCompleted:this.handleItemCompleted,changeEditMode:this.changeEditMode,updateItem:this.updateItem,cancelUpdate:this.cancelUpdate}),o.a.createElement(E,{onFilterChange:this.onFilterChange}),o.a.createElement("button",{className:"App__todo-btn",onClick:function(){return e.handleArchive(n)}}," Archive"),o.a.createElement(b,{todos:n}),o.a.createElement("div",{className:"App__todo-tips"},r?o.a.createElement("div",null,o.a.createElement("p",null,"Press 'Esc' to cancel changes"),o.a.createElement("p",null,"Press 'Enter' to update the item")):o.a.createElement("div",null," Doubleclick to change the item ")))}}]),t}(a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.b503cba8.chunk.js.map