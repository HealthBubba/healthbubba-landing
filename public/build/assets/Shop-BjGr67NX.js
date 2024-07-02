import{r as a,j as e,Y as j,a as u}from"./app-CMyZCvUd.js";import{G as y}from"./GuestLayout-D4F5qYuO.js";import{C as g}from"./Cta-Gwh3oujB.js";import{SingleProduct as f}from"./SingleProduct-YwVzmSlK.js";import"./CartIcon-DTftM_Hk.js";import"./CartModal-SDwuFhN2.js";function _({categories:l,products:o}){const[i,x]=a.useState(o),[m,c]=a.useState(l[0]),[h,r]=a.useState(null),[v,d]=a.useState(!1),p=s=>{c(t=>(r(t),s)),d(!0),fetch(route("medications.list",{category:s.category_id})).then(async t=>{const{medications:n,category:w}=await t.json();x(n)}).catch(t=>{console.log(t),c(h),r(null)}).finally(()=>{d(!1)})};return e.jsxs(y,{children:[e.jsx(j,{title:"Medication"}),e.jsx("div",{className:"mb-4",children:e.jsxs("div",{class:"max-w-7xl mx-auto px-4",children:[e.jsxs("ul",{class:"flex space-x-1 font-medium text-muted items-center",children:[e.jsx("li",{children:e.jsx(u,{className:"hover:text-primary",href:route("home"),children:"Home"})}),e.jsx("li",{children:"/"}),e.jsx("li",{children:"Medications"})]}),e.jsx("h2",{class:"text-2xl md:text-4xl font-medium",children:"Explore Medications"})]})}),e.jsx("div",{className:"py-3 border-y border-gray-200",children:e.jsxs("div",{className:"max-w-7xl mx-auto flex gap-x-4 justify-between items-center px-4",children:[e.jsx("div",{className:"shrink-0 md:w-2/5 hidden md:block",children:e.jsxs("p",{className:"text-muted",children:["1-",i.length," of ",i.length," results"]})}),e.jsx("div",{class:"flex-1 md:w-2/5 ",children:e.jsxs("div",{class:"relative  flex items-center ",children:[e.jsx("span",{class:"absolute left-2",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17.4999 17.5L13.8749 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z",stroke:"#9CA3AF","stroke-width":"1.31602","stroke-linecap":"round","stroke-linejoin":"round"})})}),e.jsx("input",{type:"text",class:"pl-10 w-full border border-primary rounded-md shadow",placeholder:"Search Medications"})]})}),e.jsx("div",{class:"md:w-1/6"})]})}),e.jsxs("div",{className:"md:py-20 py-5 max-w-7xl mx-auto px-4",children:[e.jsxs("div",{class:"md:grid md:grid-cols-12 space-y-5 md:space-y-0",children:[e.jsx("div",{className:"md:col-span-3 col-span-full space-y-2",children:e.jsx("ul",{class:"space-y-2 sticky top-10",children:l.map((s,t)=>e.jsx("li",{children:e.jsxs("label",{class:"flex space-x-2  items-center font-medium",children:[e.jsx("input",{type:"checkbox",checked:s.category_id==m.category_id,onChange:n=>p(s),class:"rounded text-primary p-2",id:""}),e.jsx("span",{children:s.category_name})]})}))})}),e.jsx("div",{className:"col-span-9",children:e.jsx("div",{className:"grid md:grid-cols-3 gap-5 mb-4",children:i.map(s=>e.jsx("div",{children:e.jsx(f,{medication:s})}))})})]}),e.jsx("div",{className:"py-20",children:e.jsx(g,{})})]})]})}export{_ as default};
