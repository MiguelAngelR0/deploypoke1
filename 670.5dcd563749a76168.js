"use strict";(self.webpackChunkpokeProyec=self.webpackChunkpokeProyec||[]).push([[670],{6670:(g,c,i)=>{i.r(c),i.d(c,{DrawPageModule:()=>v});var u=i(6895),o=i(4650),l=i(8383);const d=["canvasRef"];let w=(()=>{class e{constructor(n){this.chatService=n,this.isDrawing=!1,this.emit=!0,this.drawnPoints=[],n.callBack.subscribe(t=>{const s=t;this.drawnPoints.push(s),this.drawLine(s.x,s.y,!1)})}ngAfterViewInit(){const n=this.canvasRef.nativeElement;if(this.cx=n.getContext("2d"),n.width=n.clientWidth,n.height=n.clientHeight,this.drawnPoints.length>0){this.drawLine(this.drawnPoints[0].x,this.drawnPoints[0].y,!1);for(let t=1;t<this.drawnPoints.length;t++){const s=this.drawnPoints[t];this.drawLine(s.x,s.y,!0)}}}onMouseDown(n){this.isDrawing=!0;const{offsetX:t,offsetY:s}=n;this.empezar(t,s)}onMouseMove(n){if(!this.isDrawing)return;const{offsetX:t,offsetY:s}=n;this.drawLine(t,s,!0)}onMouseUp(){this.isDrawing=!1}empezar(n,t){this.cx.beginPath(),this.cx.moveTo(n,t)}drawLine(n,t,s){this.cx.lineTo(n,t),this.cx.stroke(),s&&this.chatService.emitEvent({x:n,y:t})}clearCanvas(){const n=this.canvasRef.nativeElement;this.cx.clearRect(0,0,n.width,n.height)}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(l.a))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-draw2"]],viewQuery:function(n,t){if(1&n&&o.Gf(d,5),2&n){let s;o.iGM(s=o.CRH())&&(t.canvasRef=s.first)}},hostBindings:function(n,t){1&n&&o.NdJ("mousedown",function(r){return t.onMouseDown(r)})("mousemove",function(r){return t.onMouseMove(r)})("mouseup",function(){return t.onMouseUp()})},decls:6,vars:0,consts:[["width","400","height","400",1,"canvasZone"],["canvasRef",""],[3,"click"]],template:function(n,t){1&n&&(o.TgZ(0,"p"),o._uU(1,"draw2 works!"),o.qZA(),o._UZ(2,"canvas",0,1),o.TgZ(4,"button",2),o.NdJ("click",function(){return t.clearCanvas()}),o._uU(5,"Borrar"),o.qZA())},styles:[".canvasZone[_ngcontent-%COMP%]{background-color:#fff;border-color:#000}"]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-draw-page"]],decls:4,vars:0,consts:[[1,"container"],[1,"row"],[1,"col","justify-content-center"]],template:function(n,t){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._UZ(3,"app-draw2"),o.qZA()()())},dependencies:[w]}),e})();var h=i(9299);let p=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.ez]}),e})();const m=[{path:"",component:f}];let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.ez,h.Bz.forChild(m),p]}),e})()}}]);