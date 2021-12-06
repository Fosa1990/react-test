(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a,c,s=n(1),o=n.n(s),i=n(22),l=n.n(i),r=(n(30),n(31),n(14)),j=n(15),h=n(0),d=j.a.h2(a||(a=Object(r.a)(["\n  color: var(--yellow);\n"]))),b=function(e){var t=e.title;return Object(h.jsx)(d,{children:t})},u=n(17),p=n(2),O=n(3),m=n(4),g=n(10),x=n(6),v=n(5),f=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={class:"off",label:"Press"},a.press=a.press.bind(Object(g.a)(a)),console.log("constructor"),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount()")}},{key:"shouldComponentUpdate",value:function(){return console.log("shouldComponentUpdate()"),!0}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate()")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount()")}},{key:"press",value:function(){var e="off"===this.state.class?"on":"off";this.setState({class:e})}},{key:"render",value:function(){return console.log("render"),Object(h.jsx)("button",{onClick:this.press,className:this.state.class,children:this.state.label})}}]),n}(s.Component),C=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.drinks})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.items;return t?Object(h.jsxs)("p",{children:["Error: ",t.message]}):n?Object(h.jsx)("ul",{children:a.map((function(e){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsxs)("li",{children:["Random cocktail is: ",Object(h.jsx)(b,{title:e.strDrink})]},"".concat(e.idDrink,"_list_item")),Object(h.jsx)("img",{loading:"lazy",width:"150",height:"150",src:e.strDrinkThumb,alt:e.idDrink},"".concat(e.idDrink,"_img")),Object(h.jsx)("p",{children:e.strAlcoholic}),Object(h.jsx)("p",{children:e.strInstructions})]},"".concat(e.idDrink,"_fragment"))}))}):Object(h.jsx)("p",{children:"Loading..."})}}]),n}(s.Component),y=function(){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{style:{color:"var(--green)"},children:"Routing to: "}),Object(h.jsx)("span",{style:{color:"var(--red)"},children:'Component "1" '}),Object(h.jsx)("span",{style:{color:"var(--white)"},children:"watch to URL (^_^)"})]}),Object(h.jsx)(b,{title:"Component: FetchApi"}),Object(h.jsx)(C,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(b,{title:"Component: Lifecycle"}),Object(h.jsx)("p",{children:"Open console (^_^)"}),Object(h.jsx)(f,{})]})},w=n(20),S=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={input:"",submit:"",items:[]},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a.todoSubmit=a.todoSubmit.bind(Object(g.a)(a)),a.clearFields=a.clearFields.bind(Object(g.a)(a)),a.handleTodoSubmit=a.handleTodoSubmit.bind(Object(g.a)(a)),a}return Object(m.a)(n,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submit:this.state.input})}},{key:"todoSubmit",value:function(e){e.preventDefault(),this.setState({input:this.state.input,items:[].concat(Object(w.a)(this.state.items),[this.state.input])})}},{key:"handleTodoSubmit",value:function(e){e.preventDefault(),this.setState({input:this.state.input,submit:this.state.input,items:[].concat(Object(w.a)(this.state.items),[this.state.input])})}},{key:"clearFields",value:function(){this.setState({input:"",submit:"",items:[]})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{autoComplete:"off",onSubmit:this.handleTodoSubmit,children:[Object(h.jsx)("input",{value:this.state.input,onChange:this.handleChange,type:"text"}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]}),Object(h.jsx)("button",{onClick:this.clearFields,type:"button",children:"Clear All"}),Object(h.jsxs)("h3",{children:["Input: ",this.state.input]}),Object(h.jsxs)("h3",{children:["Submit: ",this.state.submit]}),Object(h.jsx)("ul",{children:this.state.items.map((function(e,t){return Object(h.jsx)("li",{children:e},t)}))})]})}}]),n}(s.Component),k=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={login:""},e.handleChange=function(t){e.setState({login:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),console.log("Signed up as: ".concat(e.state.login)),e.props.onSubmit(e.state.login)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.login;return Object(h.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",placeholder:"Enter login",value:e,onChange:this.handleChange})]}),Object(h.jsxs)("button",{type:"submit",children:["Sign up as ",e]})]})}}]),n}(s.Component),E=k,A=n(9),D=n(8),F={login:"",email:"",password:""},L=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=Object(D.a)({},F),e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(A.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.login,c=n.email,s=n.password;console.log("\n      Login: ".concat(a,"\n      Email: ").concat(c,"\n      Password: ").concat(s,"\n    ")),e.reset()},e.reset=function(){e.setState(Object(D.a)({},F))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.login,n=e.email,a=e.password;return Object(h.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",placeholder:"Enter login",name:"login",value:t,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Email",Object(h.jsx)("input",{type:"email",placeholder:"Enter email",name:"email",value:n,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Password",Object(h.jsx)("input",{type:"password",placeholder:"Enter password",name:"password",value:a,onChange:this.handleChange})]}),Object(h.jsxs)("button",{type:"submit",children:["Sign up as ",t]})]})}}]),n}(s.Component),R=L,N={login:"",email:"",password:"",agreed:!1},U=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=Object(D.a)({},N),e.handleChange=function(t){var n=t.target,a=n.name,c=n.value,s=n.type,o=n.checked;e.setState(Object(A.a)({},a,"checkbox"===s?o:c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.login,c=n.email,s=n.password,o=n.agreed;console.log("\n      Login: ".concat(a,"\n      Email: ").concat(c,"\n      Password: ").concat(s,"\n      Agreed: ").concat(o,"\n    ")),e.reset()},e.reset=function(){e.setState(Object(D.a)({},N))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.login,n=e.email,a=e.password,c=e.agreed;return Object(h.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",placeholder:"Enter login",name:"login",value:t,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Email",Object(h.jsx)("input",{type:"email",placeholder:"Enter email",name:"email",value:n,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Password",Object(h.jsx)("input",{type:"password",placeholder:"Enter password",name:"password",value:a,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Agree to terms",Object(h.jsx)("input",{type:"checkbox",name:"agreed",checked:c,onChange:this.handleChange})]}),Object(h.jsxs)("button",{type:"submit",disabled:!c,children:["Sign up as ",t]})]})}}]),n}(s.Component),P=U,_="male",M="female",T={login:"",email:"",password:"",agreed:!1,gender:null},I=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=Object(D.a)({},T),e.handleChange=function(t){var n=t.target,a=n.name,c=n.value,s=n.type,o=n.checked;e.setState(Object(A.a)({},a,"checkbox"===s?o:c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.login,c=n.email,s=n.password,o=n.agreed,i=n.gender;console.log("\n      Login: ".concat(a,"\n      Email: ").concat(c,"\n      Password: ").concat(s,"\n      Agreed: ").concat(o,"\n      Gender: ").concat(i,"\n    ")),e.reset()},e.reset=function(){e.setState(Object(D.a)({},T))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.login,n=e.email,a=e.password,c=e.agreed,s=e.gender;return Object(h.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("section",{children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",placeholder:"Enter login",name:"login",value:t,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Email",Object(h.jsx)("input",{type:"email",placeholder:"Enter email",name:"email",value:n,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Password",Object(h.jsx)("input",{type:"password",placeholder:"Enter password",name:"password",value:a,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Agree to terms",Object(h.jsx)("input",{type:"checkbox",name:"agreed",checked:c,onChange:this.handleChange})]}),Object(h.jsx)("h2",{children:"Choose your gender"}),Object(h.jsxs)("label",{children:["Male",Object(h.jsx)("input",{type:"radio",checked:s===_,name:"gender",value:_,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Female",Object(h.jsx)("input",{type:"radio",checked:s===M,name:"gender",value:M,onChange:this.handleChange})]})]}),Object(h.jsxs)("button",{type:"submit",disabled:!c,children:["Sign up as ",t]})]})}}]),n}(s.Component),B=I,G="male",J="female",W={login:"",email:"",password:"",agreed:!1,gender:null},z=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=Object(D.a)({},W),e.handleChange=function(t){var n=t.target,a=n.name,c=n.value,s=n.type,o=n.checked;e.setState(Object(A.a)({},a,"checkbox"===s?o:c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.login,c=n.email,s=n.password,o=n.agreed,i=n.gender,l=n.age;console.log("\n      Login: ".concat(a,"\n      Email: ").concat(c,"\n      Password: ").concat(s,"\n      Agreed: ").concat(o,"\n      Gender: ").concat(i,"\n      Age: ").concat(l,"\n    ")),e.reset()},e.reset=function(){e.setState(Object(D.a)({},W))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.login,n=e.email,a=e.password,c=e.agreed,s=e.gender,o=e.age;return Object(h.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("section",{children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",placeholder:"Enter login",name:"login",value:t,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Email",Object(h.jsx)("input",{type:"email",placeholder:"Enter email",name:"email",value:n,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Password",Object(h.jsx)("input",{type:"password",placeholder:"Enter password",name:"password",value:a,onChange:this.handleChange})]}),Object(h.jsx)("h2",{children:"Choose your gender"}),Object(h.jsxs)("label",{children:["Male",Object(h.jsx)("input",{type:"radio",checked:s===G,name:"gender",value:G,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Female",Object(h.jsx)("input",{type:"radio",checked:s===J,name:"gender",value:J,onChange:this.handleChange})]}),Object(h.jsx)("h2",{children:"Choose your age"}),Object(h.jsxs)("label",{children:["Choose your age",Object(h.jsxs)("select",{name:"age",value:o,onChange:this.handleChange,children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"..."}),Object(h.jsx)("option",{value:"18-25",children:"18-25"}),Object(h.jsx)("option",{value:"26-35",children:"26-35"}),Object(h.jsx)("option",{value:"36+",children:"36+"})]})]}),Object(h.jsx)("h2",{children:"Agree to terms"}),Object(h.jsxs)("label",{children:["Agree to terms",Object(h.jsx)("input",{type:"checkbox",name:"agreed",checked:c,onChange:this.handleChange})]})]}),Object(h.jsxs)("button",{type:"submit",disabled:!c,children:["Sign up as ",t]})]})}}]),n}(s.Component),q=z,H=function(){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{style:{color:"var(--green)"},children:"Routing to: "}),Object(h.jsx)("span",{style:{color:"var(--red)"},children:'Component "2" '}),Object(h.jsx)("span",{style:{color:"var(--white)"},children:"watch to URL (^_^)"})]}),Object(h.jsx)(b,{title:"Component: Form"}),Object(h.jsx)(S,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(b,{title:"Component: LoginForm"}),Object(h.jsx)(E,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(b,{title:"Component: SignUpForm"}),Object(h.jsx)(R,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(b,{title:"Component: SignUpFormCheckbox"}),Object(h.jsx)(P,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(b,{title:"Component: RadioButtons"}),Object(h.jsx)(B,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(b,{title:"Component: SignUpFormFinal"}),Object(h.jsx)(q,{})]})},K=function(){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{style:{color:"var(--green)"},children:"Routing to: "}),Object(h.jsx)("span",{style:{color:"var(--red)"},children:'Component "1" '}),Object(h.jsx)("span",{style:{color:"var(--white)"},children:"watch to URL (^_^)"})]}),Object(h.jsx)(b,{title:"It's main page, but still nothing here  \u03a3(\u2018\u25c9\u2313\u25c9\u2019) ",children:" "})]})},Q=function(){return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{style:{color:"var(--red)"},children:" 404 "}),Object(h.jsx)("span",{style:{color:"var(--green)"},children:"Page not found. \u03a3(\u2018\u25c9\u2313\u25c9\u2019)"})]})})},V=Object(j.a)(u.b)(c||(c=Object(r.a)(["\n  color: var(--yellow);\n  text-decoration: none;\n  :hover {\n    text-decoration: underline;\n    color: white;\n  }\n"]))),X=function(){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsxs)(V,{to:"/main",children:[Object(h.jsx)("span",{style:{color:"var(--green)"},children:"New React "}),"Routing: Link to Main"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(V,{to:"/component1",children:[Object(h.jsx)("span",{style:{color:"var(--green)"},children:"New React "}),"Routing: Link to Component 1"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(V,{to:"/component2",children:[Object(h.jsx)("span",{style:{color:"var(--green)"},children:"New React "}),"Routing: Link to Component 2"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(V,{to:"/error",children:[Object(h.jsx)("span",{style:{color:"var(--green)"},children:"New React "}),"Routing: Link to Error [not complete yet]"]})})]}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{path:"/main",element:Object(h.jsx)(K,{})}),Object(h.jsx)(p.a,{path:"/component1",element:Object(h.jsx)(y,{})}),Object(h.jsx)(p.a,{path:"/component2",element:Object(h.jsx)(H,{})}),Object(h.jsx)(p.a,{path:"/error",element:Object(h.jsx)(Q,{})})]})]})};var Y=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header"}),Object(h.jsxs)("main",{children:[Object(h.jsx)(b,{title:"Component: App"}),Object(h.jsx)(b,{title:"Component: NewRouting"}),Object(h.jsx)(X,{}),Object(h.jsx)("hr",{})]})]})};l.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(Y,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.172ade18.chunk.js.map