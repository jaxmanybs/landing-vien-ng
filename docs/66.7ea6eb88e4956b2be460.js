(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{gceo:function(e,n,t){"use strict";t.r(n),t.d(n,"MenuModule",(function(){return f}));var i=t("PCNd"),r=t("iInd"),s=t("8Y7J");let u=(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-menu"]],decls:1,vars:0,template:function(e,n){1&e&&s["\u0275\u0275element"](0,"router-outlet")},directives:[r.g],encapsulation:2}),e})();var a=t("6ULU"),l=t("jl+7"),d=t("69GG"),c=t("TSSN");const o=[{path:"",component:u,children:[{path:"",redirectTo:"types",pathMatch:"full"},{path:"types",component:(()=>{class e{constructor(e){this.sidebarService=e}ngOnInit(){this.subscription=this.sidebarService.getSidebar().subscribe(e=>{this.sidebar=e},e=>{console.error("An error occurred: "+e.message)})}changeDefaultMenuType(e){const n=this.getMenuClassesForResize(e);this.sidebarService.setContainerClassnames(0,n.join(" "),this.sidebar.selectedMenuHasSubItems)}getMenuClassesForResize(e){let n=e.split(" ").filter(e=>""!==e);const t=window.innerWidth;return t<this.sidebarService.menuHiddenBreakpoint?n.push("menu-mobile"):t<this.sidebarService.subHiddenBreakpoint?(n=n.filter(e=>"menu-mobile"!==e),n.includes("menu-default")&&!n.includes("menu-sub-hidden")&&n.push("menu-sub-hidden")):(n=n.filter(e=>"menu-mobile"!==e),n.includes("menu-default")&&n.includes("menu-sub-hidden")&&(n=n.filter(e=>"menu-sub-hidden"!==e))),n}}return e.\u0275fac=function(n){return new(n||e)(s["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-menu-types"]],decls:16,vars:9,consts:[[1,"row"],[1,"col-12"],[1,"separator","mb-5"],[1,"col-12","mb-4"],[1,"btn","btn-outline-primary","mb-1","mr-1",3,"click"]],template:function(e,n){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275element"](2,"app-heading"),s["\u0275\u0275element"](3,"app-breadcrumb"),s["\u0275\u0275element"](4,"div",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"div",0),s["\u0275\u0275elementStart"](6,"div",3),s["\u0275\u0275elementStart"](7,"button",4),s["\u0275\u0275listener"]("click",(function(){return n.changeDefaultMenuType("menu-default")})),s["\u0275\u0275text"](8),s["\u0275\u0275pipe"](9,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"button",4),s["\u0275\u0275listener"]("click",(function(){return n.changeDefaultMenuType("menu-sub-hidden")})),s["\u0275\u0275text"](11),s["\u0275\u0275pipe"](12,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"button",4),s["\u0275\u0275listener"]("click",(function(){return n.changeDefaultMenuType("menu-hidden")})),s["\u0275\u0275text"](14),s["\u0275\u0275pipe"](15,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](8),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](9,3,"menu.default")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](12,5,"menu.subhidden")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](15,7,"menu.hidden")))},directives:[l.a,d.a],pipes:[c.b],encapsulation:2}),e})()},{path:"levels",loadChildren:()=>t.e(65).then(t.bind(null,"uF/L")).then(e=>e.MenuLevelsModule)}]}];let p=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[r.f.forChild(o)],r.f]}),e})();var m=t("91Cs");let f=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[i.a,p,m.a]]}),e})()}}]);