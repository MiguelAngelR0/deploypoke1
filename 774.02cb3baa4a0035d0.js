"use strict";(self.webpackChunkpokeProyec=self.webpackChunkpokeProyec||[]).push([[774],{9774:(Q,u,n)=>{n.r(u),n.d(u,{DashboardRoutingModule:()=>O});var g=n(266),h=n(9299),t=n(4650),f=n(2289),C=n(4004),y=n(7579),P=n(6063);class Z extends y.x{constructor(s=1/0,e=1/0,a=P.l){super(),this._bufferSize=s,this._windowTime=e,this._timestampProvider=a,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,s),this._windowTime=Math.max(1,e)}next(s){const{isStopped:e,_buffer:a,_infiniteTimeWindow:i,_timestampProvider:l,_windowTime:d}=this;e||(a.push(s),!i&&a.push(l.now()+d)),this._trimBuffer(),super.next(s)}_subscribe(s){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(s),{_infiniteTimeWindow:a,_buffer:i}=this,l=i.slice();for(let d=0;d<l.length&&!s.closed;d+=a?1:2)s.next(l[d]);return this._checkFinalizedStatuses(s),e}_trimBuffer(){const{_bufferSize:s,_timestampProvider:e,_buffer:a,_infiniteTimeWindow:i}=this,l=(i?1:2)*s;if(s<1/0&&l<a.length&&a.splice(0,a.length-l),!i){const d=e.now();let c=0;for(let r=1;r<a.length&&a[r]<=d;r+=2)c=r;c&&a.splice(0,c+1)}}}var M=n(3099),p=n(6895),x=n(4859),D=n(7392),A=n(3683),m=n(3267),v=n(4633);function b(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e),t.oxw();const i=t.MAs(2);return t.KtG(i.toggle())}),t.TgZ(1,"mat-icon",8),t._uU(2,"menu"),t.qZA()()}}const I=function(){return["/dashboard"]},H=function(){return["/dashboard/pokedex"]},U=function(){return["/dashboard/contacts"]},J=function(){return["/dashboard/draw"]},L=function(){return["/dashboard/battle"]};let N=(()=>{class o{constructor(e,a){this.breakpointObserver=e,this.router=a,this.isHandset$=this.breakpointObserver.observe(f.u3.Handset).pipe((0,C.U)(i=>i.matches),function T(o,s,e){let a,i=!1;return o&&"object"==typeof o?({bufferSize:a=1/0,windowTime:s=1/0,refCount:i=!1,scheduler:e}=o):a=o??1/0,(0,M.B)({connector:()=>new Z(a,s,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}())}logout(){sessionStorage.removeItem("token"),this.router.navigate(["login"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.Yg),t.Y36(h.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-nav"]],decls:28,vars:22,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],["mat-list-item","",3,"routerLink"],["mat-list-item","",3,"click"],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2),t.ALo(3,"async"),t.ALo(4,"async"),t.ALo(5,"async"),t.TgZ(6,"mat-toolbar"),t._uU(7,"Menu"),t.qZA(),t.TgZ(8,"mat-nav-list")(9,"a",3),t._uU(10,"Home"),t.qZA(),t.TgZ(11,"a",3),t._uU(12,"Pokedex"),t.qZA(),t.TgZ(13,"a",3),t._uU(14,"Contactos"),t.qZA(),t.TgZ(15,"a",3),t._uU(16,"Draw"),t.qZA(),t.TgZ(17,"a",3),t._uU(18,"Battle"),t.qZA(),t.TgZ(19,"a",4),t.NdJ("click",function(){return a.logout()}),t._uU(20,"Log Out"),t.qZA()()(),t.TgZ(21,"mat-sidenav-content")(22,"mat-toolbar",5),t.YNc(23,b,3,0,"button",6),t.ALo(24,"async"),t.TgZ(25,"span"),t._uU(26,"pokeProyec"),t.qZA()(),t._UZ(27,"router-outlet"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("mode",t.lcZ(4,11,a.isHandset$)?"over":"side")("opened",!1===t.lcZ(5,13,a.isHandset$)),t.uIk("role",t.lcZ(3,9,a.isHandset$)?"dialog":"navigation"),t.xp6(8),t.Q6J("routerLink",t.DdM(17,I)),t.xp6(2),t.Q6J("routerLink",t.DdM(18,H)),t.xp6(2),t.Q6J("routerLink",t.DdM(19,U)),t.xp6(2),t.Q6J("routerLink",t.DdM(20,J)),t.xp6(2),t.Q6J("routerLink",t.DdM(21,L)),t.xp6(6),t.Q6J("ngIf",t.lcZ(24,15,a.isHandset$)))},dependencies:[p.O5,h.lC,h.rH,x.RK,D.Hw,A.Ye,m.JX,m.TM,m.Rh,v.Hk,v.Tg,p.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}"]}),o})();const R=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:1,vars:0,template:function(e,a){1&e&&t._UZ(0,"app-nav")},dependencies:[N]}),o})(),children:[{path:"",loadChildren:()=>n.e(915).then(n.bind(n,4915)).then(o=>o.HomeModule)},{path:"contacts",loadChildren:()=>Promise.all([n.e(383),n.e(442)]).then(n.bind(n,9442)).then(o=>o.ContactsPageModule)},{path:"contactsDetail/:room",loadChildren:()=>Promise.all([n.e(592),n.e(769)]).then(n.bind(n,1769)).then(o=>o.ContactsDetailPageModule)},{path:"pokedex",loadChildren:()=>Promise.all([n.e(592),n.e(655)]).then(n.bind(n,9655)).then(o=>o.PokedexPageModule)},{path:"pokedetail/:id",loadChildren:()=>Promise.all([n.e(592),n.e(644)]).then(n.bind(n,2644)).then(o=>o.PokeDetailPageModule)},{path:"draw",loadChildren:()=>Promise.all([n.e(383),n.e(670)]).then(n.bind(n,6670)).then(o=>o.DrawPageModule)},{path:"battle",loadChildren:()=>Promise.all([n.e(592),n.e(886)]).then(n.bind(n,3886)).then(o=>o.RutaPageModule)},{path:"battle/:id/:idE/:modo",loadChildren:()=>Promise.all([n.e(592),n.e(861)]).then(n.bind(n,557)).then(o=>o.BattlePokePageModule)}]}];let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.Bz.forChild(R),g.AV,h.Bz]}),o})()}}]);