"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[318],{8411:(t,a,n)=>{n.r(a),n.d(a,{default:()=>s});var i=n(5043);const e=JSON.parse('[{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""},{"attractionName":"Stonehenge","attractionCountry":"London","attractionAdultPrize":"20$","attractionChildPrize":"10$","attractionTimings":"6Am-6PM","action":""}]');var o=n(3156),r=n(3216),c=n(2558),l=n(579);const s=function(){const[t,a]=(0,i.useState)(1),[n,s]=(0,i.useState)([]),d=Math.ceil(e.length/10),h=[],m=(0,r.Zp)();if(d<=3)for(let i=1;i<=d;i++)h.push(i);else t<=2?h.push(1,2,3,"...",d):t>=d-1?h.push(1,"...",d-2,d-1,d):h.push(1,"...",t-1,t,t+1,"...",d);return(0,i.useEffect)((()=>{let a=[];for(let n=10*t-10;n<10*t&&n<e.length;n++)a.push(e[n]);s(a)}),[t]),(0,l.jsxs)("div",{className:"page-container",children:[(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("h3",{className:"my-0",children:"Attractions"}),(0,l.jsx)("div",{children:"Manage attraction and its prices."})]}),(0,l.jsxs)("div",{className:"filter-container mb-4",children:[(0,l.jsxs)("div",{className:"col-auto d-flex",children:[(0,l.jsx)(c.Ay,{options:[{value:1,label:"India"},{value:2,label:"USA"},{value:3,label:"UK"}],placeholder:"Country",classNamePrefix:"custom-select"}),(0,l.jsx)(c.Ay,{options:[{value:1,label:"Banglore"},{value:2,label:"Chennai"},{value:3,label:"Mumbai"}],placeholder:"City",classNamePrefix:"custom-select"})]}),(0,l.jsxs)("div",{className:"col-auto d-flex",children:[(0,l.jsx)("input",{type:"search",className:"filter-inputs",placeholder:"Search by keywords",id:"packages-search"}),(0,l.jsx)("div",{children:(0,l.jsxs)("button",{className:"btn add-new-button",onClick:()=>{m("/attractionsform")},children:[(0,l.jsx)(o.OiG,{className:"icon"}),"Add Attraction"]})})]})]}),(0,l.jsxs)("div",{className:"border bg-white",children:[(0,l.jsx)("div",{className:"data-table-container",children:(0,l.jsxs)("table",{className:"w-100 data-table table table-hover",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Attraction"}),(0,l.jsx)("th",{children:"Country"}),(0,l.jsx)("th",{children:"Adult"}),(0,l.jsx)("th",{children:"Child"}),(0,l.jsx)("th",{children:"Timings"}),(0,l.jsx)("th",{children:"Actions"})]})}),(0,l.jsx)("tbody",{children:n.map(((t,a)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"fw-semibold",children:t.attractionName}),(0,l.jsx)("td",{children:t.attractionCountry}),(0,l.jsx)("td",{children:t.attractionAdultPrize}),(0,l.jsx)("td",{children:t.attractionChildPrize}),(0,l.jsx)("td",{children:t.attractionTimings}),(0,l.jsxs)("td",{className:"",children:[(0,l.jsx)("button",{className:"action-icon",children:(0,l.jsx)("i",{class:"fa-regular fa-pen-to-square"})}),(0,l.jsx)("button",{className:"action-icon",children:(0,l.jsx)("i",{class:"fa-regular fa-trash-can"})})]})]},a)))})]})}),(0,l.jsxs)("div",{className:"d-flex justify-content-end me-2 py-3",children:[(0,l.jsx)("div",{children:(0,l.jsxs)("select",{className:"table-control-input",children:[(0,l.jsx)("option",{selected:!0,children:"10 items per page"}),(0,l.jsx)("option",{value:1,children:"20 items per page"}),(0,l.jsx)("option",{value:2,children:"30 items per page"}),(0,l.jsx)("option",{value:3,children:"40 items per page"}),(0,l.jsx)("option",{value:3,children:"50 items per page"})]})}),(0,l.jsxs)("ul",{className:"pagination",children:[(0,l.jsx)("li",{className:"page-item pagination-page-items ".concat(1===t?"disabled":""),children:(0,l.jsx)("button",{className:"page-link","aria-label":"Previous",onClick:()=>a(t-1),children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),h.map(((n,i)=>(0,l.jsx)("li",{className:"page-item pagination-page-items ".concat(t===n?"active":""),children:"..."===n?(0,l.jsx)("span",{className:"page-link",children:"..."}):(0,l.jsx)("button",{className:"page-link",onClick:()=>a(n),children:n})},i))),(0,l.jsx)("li",{className:"page-item pagination-page-items ".concat(t===d?"disabled":""),children:(0,l.jsx)("button",{className:"page-link","aria-label":"Next",onClick:()=>a(t+1),children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})]})]})]})}},8587:(t,a,n)=>{function i(t,a){if(null==t)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(a.indexOf(i)>=0)continue;n[i]=t[i]}return n}n.d(a,{A:()=>i})},3662:(t,a,n)=>{function i(t,a){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},i(t,a)}n.d(a,{A:()=>i})}}]);
//# sourceMappingURL=318.c2004204.chunk.js.map