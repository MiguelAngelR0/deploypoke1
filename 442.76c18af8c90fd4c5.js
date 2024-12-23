"use strict";(self.webpackChunkpokeProyec=self.webpackChunkpokeProyec||[]).push([[442],{9442:(F,p,c)=>{c.r(p),c.d(p,{ContactsPageModule:()=>O});var a=c(6895),g=c(9299),t=c(4650),C=c(1997),i=c(7392),h=c(266),r=c(4859),f=c(8383),d=c(4006);const v=function(e,o){return{local:e,remoto:o}};function U(e,o){if(1&e&&(t.TgZ(0,"p",8),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.Q6J("ngClass",t.WLB(2,v,1===n.messageType,2===n.messageType)),t.xp6(1),t.Oqu(n.text)}}const T=function(){return{standalone:!0}};let M=(()=>{class e{constructor(n){this.chat=n,this.selectedUser=null,this.text=""}sendMessage(){this.chat.sendMessage({text:this.text,messageType:1}),this.text=""}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chat"]],inputs:{selectedUser:"selectedUser"},decls:12,vars:5,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"chatContainer","scroll-bottom"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"input-group","mb-3"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["type","submit","mat-icon-button","",3,"click"],[3,"ngClass"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"div",3),t.YNc(6,U,2,5,"p",4),t.qZA(),t.TgZ(7,"div",5)(8,"input",6),t.NdJ("ngModelChange",function(l){return s.text=l}),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return s.sendMessage()}),t.TgZ(10,"mat-icon"),t._uU(11,"send"),t.qZA()()()()()()),2&n&&(t.xp6(3),t.Oqu(null==s.selectedUser?null:s.selectedUser.email),t.xp6(3),t.Q6J("ngForOf",s.chat.chats),t.xp6(2),t.Q6J("ngModel",s.text)("ngModelOptions",t.DdM(4,T)))},dependencies:[a.mk,a.sg,d.Fj,d.JJ,d.On,i.Hw,r.RK],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{height:100%;min-height:1rem}.chatContainer[_ngcontent-%COMP%]{padding:2em 2em 20em;width:100%;height:max-content;min-width:100%;display:flex;flex-direction:column;background-color:#f8f8ff;overflow-y:scroll;min-height:60vh;max-height:60vh}.local[_ngcontent-%COMP%]{padding:15px;border-radius:1em;background-color:#008b8b;max-width:85%;color:#fff;align-self:flex-start}.remoto[_ngcontent-%COMP%]{padding:15px;border-radius:1.5em;background-color:#b8860b;max-width:85%;color:#fff;align-self:flex-end}.inputContainer[_ngcontent-%COMP%]{background-color:#f8f8ff;flex-grow:1}.chatContainer.scroll-bottom[_ngcontent-%COMP%]{height:calc(100% - 3rem);padding-bottom:0;overflow-y:auto}.chatContainer.scroll-bottom[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{margin-bottom:0}']}),e})();function Z(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",8)(1,"div",9),t._uU(2),t.qZA(),t.TgZ(3,"button",10),t.NdJ("click",function(){const l=t.CHM(n).$implicit,m=t.oxw();return t.KtG(m.detalleContacto(l))}),t.TgZ(4,"mat-icon"),t._uU(5,"person_pin"),t.qZA()(),t.TgZ(6,"button",10),t.NdJ("click",function(){const l=t.CHM(n).$implicit,m=t.oxw();return t.KtG(m.selectUser(l))}),t.TgZ(7,"mat-icon"),t._uU(8,"message"),t.qZA()()()}if(2&e){const n=o.$implicit;t.s9C("matTooltip",null==n?null:n.name),t.xp6(2),t.hij(" ",null==n?null:n.email,"")}}let x=(()=>{class e{constructor(n,s){this.userService=n,this.router=s,this.users=[],this.selectedUser=null,this.selectedUserChat=new t.vpe}ngOnInit(){this.userService.getAllUsers().subscribe(n=>{console.log("Usuarios que me llegan del servicio "+n),console.table(n),this.users=n})}selectUser(n){this.selectedUser=n,this.selectedUserChat.emit(this.selectedUser)}detalleContacto(n){console.log(n.id),this.router.navigateByUrl(`/dashboard/contactsDetail/${n.id}`)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.f),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contacts"]],inputs:{selectedUserChat:"selectedUserChat"},decls:18,vars:3,consts:[[1,"container"],[1,"row","mt-5"],[1,"col"],[1,"row"],[1,"contactos-container","align-self-center"],["class","m-4 d-flex align-items-center justify-content-between","matTooltipPosition","left",3,"matTooltip",4,"ngFor","ngForOf"],[1,"col","columnaContactos"],[3,"selectedUser"],["matTooltipPosition","left",1,"m-4","d-flex","align-items-center","justify-content-between",3,"matTooltip"],[1,"col-4"],["mat-icon-button","",1,"col-1",3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"P\xe1gina de contactos con chat que ir\xe1 cambiando al seleccionar un contacto"),t.qZA(),t.TgZ(3,"div",1)(4,"h2"),t._uU(5," Lista de contactos favoritos"),t.qZA()(),t.TgZ(6,"div",1)(7,"div",2)(8,"div",3)(9,"h2"),t._uU(10,"Lista de contactos"),t.qZA()(),t.TgZ(11,"div",3)(12,"div",4),t.YNc(13,Z,9,2,"div",5),t.qZA()()(),t.TgZ(14,"div",6)(15,"h2"),t._uU(16),t.qZA(),t._UZ(17,"app-chat",7),t.qZA()()()),2&n&&(t.xp6(13),t.Q6J("ngForOf",s.users),t.xp6(3),t.hij("Chat para el contacto: ",null==s.selectedUser?null:s.selectedUser.name,""),t.xp6(1),t.Q6J("selectedUser",s.selectedUser))},dependencies:[i.Hw,h.gM,a.sg,r.RK,M],styles:[".columnaContactos[_ngcontent-%COMP%]{height:50vh}"]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contacts-page"]],decls:1,vars:0,template:function(n,s){1&n&&t._UZ(0,"app-contacts")},dependencies:[x]}),e})();var b=c(9350);let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,d.u5,i.Ps,r.ot]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Ps,h.AV,a.ez,r.ot,P]}),e})();const A=[{path:"",component:y}];let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,g.Bz.forChild(A),b.q,_]}),e})()}}]);