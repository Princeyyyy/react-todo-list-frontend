(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{51:function(e,t,a){e.exports={Footer:"Footer_Footer__gmyoL",footercontainer:"Footer_footercontainer__3u6ka",icons:"Footer_icons__3Jron",icon:"Footer_icon__3bvx2"}},66:function(e,t,a){e.exports=a(84)},75:function(e,t,a){},76:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(58),c=a.n(r),i=(a(75),a(120)),l=a(122),s=a(60),d=a.n(s);a(76);var m=e=>{const{emitDeleteTodoItem:t}=e,[a,r]=Object(n.useState)(e.data),[c,s]=Object(n.useState)(!1),m=Object(n.useRef)(null);function u(e){const t={...a,name:e.target.value};r(t),s(!0)}return Object(n.useEffect)(()=>(c&&(m.current=setTimeout(()=>{fetch("https://apt3095webapp.azurewebsites.net/api/update/item/".concat(a.id),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then(e=>{if(!e.ok)throw new Error("Failed to update Todo item.");return e.json()}).then(e=>{r(e),s(!1)}).catch(e=>{console.error("Error updating Todo item:",e)})},500)),()=>{clearTimeout(m.current)}),[a,c]),o.a.createElement("div",null,o.a.createElement(i.a,{checked:a.completed,onChange:function(){const e={...a,completed:!a.completed};r(e),s(!0)}}),a.completed?o.a.createElement("input",{type:"text",className:"done",value:a.name,onChange:u}):o.a.createElement("input",{type:"text",value:a.name,className:"itemText",onChange:u}),o.a.createElement(l.a,{"aria-label":"delete",size:"large",onClick:function(){fetch("https://apt3095webapp.azurewebsites.net/api/delete/item/".concat(a.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw new Error("Failed to delete Todo item.");t(a)}).catch(e=>{console.error("Error deleting Todo item:",e)})}},o.a.createElement(d.a,{fontSize:"inherit",color:"primary"})))},u=a(121),p=a(51),h=a.n(p);var E=()=>o.a.createElement("div",{className:h.a.Footer},o.a.createElement("div",{className:h.a.footercontainer},o.a.createElement("h1",null,"TO DO LIST APPLICATION | 2024")));var f=function(){const[e,t]=Object(n.useState)(null),a=new Date,r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],c=a.toLocaleString("en-us",{month:"long"}),i="".concat(c," ").concat(a.getDate());function l(a){const n=e.filter(e=>e.id!==a.id);t(n)}let s;return Object(n.useEffect)(()=>{console.log("useEffect Loaded."),e||fetch("https://apt3095webapp.azurewebsites.net/api/items").then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.error("Error fetching data:",e)})},[e]),s=null===e?o.a.createElement("p",null,"Loading data..."):e.length>0?e.map(e=>o.a.createElement(m,{data:e,key:e.id,emitDeleteTodoItem:l})):o.a.createElement("p",null,"No items. Be the first to add one."),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-body"},o.a.createElement("div",{className:"todo-container"},o.a.createElement("div",{className:"above-label"},o.a.createElement("h2",{style:{textTransform:"uppercase"}},"Todo List")),o.a.createElement("div",{className:"date"},o.a.createElement("h3",null,"Today is ",r,", ",i)),o.a.createElement("div",{className:"addbtn"},o.a.createElement(u.a,{variant:"contained",onClick:function(){fetch("https://apt3095webapp.azurewebsites.net/api/add/item",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:"Click to edit...",completed:!1})}).then(e=>{if(!e.ok)throw new Error("Failed to add new Todo item.");return e.json()}).then(a=>{t(e?[...e,a]:[a]),console.log(a)}).catch(e=>{console.error("Error adding new Todo item:",e)})}},"Add task")),o.a.createElement("div",{className:"todoitems"},s))),o.a.createElement(E,null))};var g=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,123)).then(t=>{let{getCLS:a,getFID:n,getFCP:o,getLCP:r,getTTFB:c}=t;a(e),n(e),o(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null))),g()}},[[66,1,2]]]);
//# sourceMappingURL=main.6c1a91d3.chunk.js.map