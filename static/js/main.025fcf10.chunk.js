(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(76)},44:function(e,t,n){},45:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(20),o=n.n(r),l=(n(44),n(2)),u=n(3),i=n(5),s=n(4),m=n(6),d=(n(45),n(15)),p=n(7),h=[{to:"/",exact:!0,label:"Home"},{to:"/product-list",exact:!1,label:"Products"}],b=function(e){var t=e.label,n=e.to,a=e.activeOnlyWhenExact;return c.a.createElement(d.a,{path:n,exact:a,children:function(e){var a=e.match?"active":"";return c.a.createElement("li",{className:"".concat(a)},c.a.createElement(p.b,{to:n},t))}})},E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).showMenus=function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return c.a.createElement(b,{key:t,label:e.label,to:e.to,activeOnlyWhenExact:e.exact})})),t},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-default navbar-default",role:"navigation"},c.a.createElement(p.b,{className:"navbar-brand",to:"/"},"CALL API"),c.a.createElement("ul",{className:"nav navbar-nav"},this.showMenus(h)))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("h1",null,"Home Page !!!")}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p.b,{to:"/product/add",className:"btn btn-success mb-10"},"Add product"),c.a.createElement("div",{className:"panel panel-default"},c.a.createElement("div",{className:"panel-heading"},c.a.createElement("h3",{className:"panel-title"},"Products")),c.a.createElement("div",{className:"panel-body"},c.a.createElement("table",{className:"table table-bordered table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"STT"),c.a.createElement("th",null,"Code"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Status"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,this.props.children)))))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).onDeleteProduct=function(){var e=n.props.product;n.props.onDeleteProduct(e.id)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.product,n=e.index,a=t.status?"Active":"DeActive",r=t.status?"success":"info";return c.a.createElement("tr",null,c.a.createElement("td",null,n+1),c.a.createElement("td",null,t.id),c.a.createElement("td",null,t.name),c.a.createElement("td",null,t.price),c.a.createElement("td",null,c.a.createElement("span",{className:"label label-".concat(r)},a)),c.a.createElement("td",null,c.a.createElement(p.b,{to:"/product/edit/".concat(t.id),type:"button",className:"btn btn-warning mr-10"},"Edit"),c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onDeleteProduct},"Delete")))}}]),t}(a.Component),y=n(13),N=n(37),P=n.n(N),g="https://5ca3823c8bae720014a96298.mockapi.io/api";function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0;return P()({method:t,url:"".concat(g,"/").concat(e),data:n}).catch(function(e){console.log(e)})}var x=function(e){return{type:"FETCH_PRODUCTS",products:e}},C=function(e){return{type:"ADD_PRODUCT",product:e}},D=function(e){return{type:"DELETE_PRODUCT",id:e}},T=function(e){return{type:"GET_PRODUCT_BASE_ON_ID_TO_EDIT",product:e}},k=function(e){return{type:"UPDATE_PRODUCT",product:e}},w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).showProducts=function(e){var t,a=n.props.onDeleteProduct;return e.length>0&&(t=e.map(function(e,t){return c.a.createElement(O,{key:t,product:e,index:t,onDeleteProduct:a})})),t},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchProducts()}},{key:"render",value:function(){var e=this.props.products;return c.a.createElement(v,null,this.showProducts(e))}}]),t}(a.Component),S=Object(y.b)(function(e){return{products:e.product}},function(e,t){return{onFetchProducts:function(){e(function(e){return j("product","GET",null).then(function(t){e(x(t.data))})})},onDeleteProduct:function(t){e(function(e){return function(t){return j("product/".concat(e),"DELETE",null).then(function(n){t(D(e))})}}(t))}}})(w),_=n(22),A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).onChange=function(e){var t=e.target,a=t.name,c="checkbox"===t.type?t.checked:t.value;n.setState(Object(_.a)({},a,c))},n.onSave=function(e){var t=n.props.history,a={name:n.state.txtName,price:n.state.txtPrice,status:n.state.cbStatus};e.preventDefault(),n.props.onAddProduct(a),t.goBack()},n.state={txtName:"",txtPrice:"",cbStatus:!1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.txtName,n=e.txtPrice,a=e.cbStatus;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},c.a.createElement("form",{onSubmit:this.onSave},c.a.createElement("legend",null,"Form Add Product"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"txtName"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Name",id:"txtName",name:"txtName",onChange:this.onChange,value:t})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"txtPrice"},"Price"),c.a.createElement("input",{type:"number",className:"form-control",placeholder:"Enter Price",id:"txtPrice",name:"txtPrice",onChange:this.onChange,value:n})),c.a.createElement("div",{className:"checkbox"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:a,name:"cbStatus",onChange:this.onChange}),"Active")),c.a.createElement(p.b,{to:"/product-list",type:"submit",className:"btn btn-warning mr-10"},"Back"),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")))))}}]),t}(a.Component),U=Object(y.b)(null,function(e,t){return{onAddProduct:function(t){e(function(e){return function(t){return j("product","POST",e).then(function(e){t(C(e.data))})}}(t))}}})(A),R=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).onChange=function(e){var t=e.target,a=t.name,c="checkbox"===t.type?t.checked:t.value;n.setState(Object(_.a)({},a,c))},n.onSave=function(e){e.preventDefault();var t=n.props,a=t.match,c=t.history,r=a.params.id,o=n.state,l={name:o.txtName,price:o.txtPrice,status:o.cbStatus};n.props.onUpdateProduct(r,l),c.goBack()},n.state={txtName:"",txtPrice:"",cbStatus:!1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.onGetProductBaseOnIdToEdit(e)}},{key:"componentWillReceiveProps",value:function(e){console.log(e.productEditing.id),this.setState({txtName:e.productEditing.name,txtPrice:e.productEditing.price,cbStatus:e.productEditing.status})}},{key:"render",value:function(){var e=this.state,t=e.txtName,n=e.txtPrice,a=e.cbStatus;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},c.a.createElement("form",{onSubmit:this.onSave},c.a.createElement("legend",null,"Form Edit Product"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"txtName"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Name",id:"txtName",name:"txtName",onChange:this.onChange,value:t})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"txtPrice"},"Price"),c.a.createElement("input",{type:"number",className:"form-control",placeholder:"Enter Price",id:"txtPrice",name:"txtPrice",onChange:this.onChange,value:n})),c.a.createElement("div",{className:"checkbox"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:a,name:"cbStatus",onChange:this.onChange,checked:a}),"Active")),c.a.createElement(p.b,{to:"/product-list",type:"submit",className:"btn btn-warning mr-10"},"Back"),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")))))}}]),t}(a.Component),B=Object(y.b)(function(e){return{productEditing:e.product}},function(e,t){return{onGetProductBaseOnIdToEdit:function(t){e(function(e){return function(t){return j("product/".concat(e),"GET",null).then(function(e){t(T(e.data))})}}(t))},onUpdateProduct:function(t,n){e(function(e,t){return function(n){return j("product/".concat(e),"PUT",t).then(function(e){n(k(e.data))})}}(t,n))}}})(R),I=[{path:"/",exact:!0,main:function(){return c.a.createElement(f,null)}},{path:"/product-list",exact:!1,main:function(){return c.a.createElement(S,null)}},{path:"/product/add",exact:!1,main:function(e){var t=e.history;return c.a.createElement(U,{history:t})}},{path:"/product/edit/:id",exact:!1,main:function(e){var t=e.match,n=e.history;return c.a.createElement(B,{match:t,history:n})}}],G=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).showContents=function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return c.a.createElement(d.a,{key:t,path:e.path,component:e.main,exact:e.exact})})),t},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(E,null),c.a.createElement("div",{className:"container"},this.showContents(I)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(14),L=n(17),M=[],W=function(e,t){var n=-1;return e.forEach(function(e,a){e.id===t&&(n=a)}),n},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,n=-1;switch(t.type){case"FETCH_PRODUCTS":return e=t.products,Object(L.a)(e);case"ADD_PRODUCT":return e.push(t.product),Object(L.a)(e);case"DELETE_PRODUCT":return n=W(e,t.id),e.splice(n,1),Object(L.a)(e);case"GET_PRODUCT_BASE_ON_ID_TO_EDIT":return e=t.product;case"UPDATE_PRODUCT":return e[n=W(e,t.product.id)]=t.product,Object(L.a)(e);default:return Object(L.a)(e)}},J=Object(F.c)({product:H}),X=n(38),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,$=Object(F.e)(J,V(Object(F.a)(X.a)));o.a.render(c.a.createElement(y.a,{store:$},c.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.025fcf10.chunk.js.map