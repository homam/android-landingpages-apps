/* Built with Hydra */(function(){function f(){return function(){}}var g,aa=this;function ba(a,b){var c=b||aa;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}}function h(a,b){function c(){}c.prototype=b.prototype;a.s=b.prototype;a.prototype=new c};var i,j,ca,k;var l=Math.random;function m(a,b,c,d){return b+(c-b)*(a/d)}function da(a,b,c,d){a/=d;return(c-b)*a*a+b};function n(a,b){var c=a.indexOf(b);if(c>=0){a.splice(c,1);return true}else return false};function o(a){var b=document.createElement("div");b.className=a;return b}function ea(a){var b=document.createElement("div");b.innerHTML=a;if(b.childElementCount==1)b=b.firstElementChild;return b};var fa,ga,ha,ia,q;function r(a){ja.call(this);this.element=a||document.createElement("div");this.y=this.x=0;this.I=this.w=1;this.rotation=0}h(r,ja);function ka(a){return new r(o(a))}r.prototype.detach=function(){if(this.parent){if(n(this.parent.k,this)){this.parent=null;this.detach()}}else this.element.parentNode&&this.element.parentNode.removeChild(this.element)};r.prototype.f=function(){r.s.f.call(this);this.detach();this.element=null};function la(a,b){a.x=b;s(a)}function ma(a,b){a.y=b;s(a)}
function t(a,b,c){a.x=b;a.y=c;s(a)}function s(a){a.element.style.setProperty("-moz-transform","translate("+a.x+"px,"+a.y+"px)rotate("+a.rotation+"deg)scale("+a.w+","+a.I+")","")}function u(a){r.call(this,a);this.k=[]}h(u,r);function na(a){var b=document.createElement("div");b.className=a;return new u(b)}u.prototype.K=function(a){u.s.K.call(this,a);for(var b=0;b<this.k.length;++b)v(a,this.k[b],null)};
u.prototype.f=function(){u.s.f.call(this);for(var a=0;a<this.k.length;++a){var b=this.k[a];b.parent=null;b.f()}};function w(a,b){if(a.c!=null&&b.c==null)v(a.c,b,a);else{if(b.parent!=null)if(n(b.parent.k,b)){b.parent=null;b.detach()}var c=a.k;c[c.length]=b;b.parent=a;a.element.appendChild(b.element)}}function x(a,b,c){this.duration=1E3*a;this.ca=b;this.ha=c;this.b=0}g=x.prototype;g.G=f();g.B=f();function y(a,b,c){return a.ca(a.b,b,c,a.duration)}
g.update=function(a,b){b=this.ha||b;this.b||this.B(b);this.b+=a;if(this.b>this.duration)this.b=this.duration;this.G(b);if(this.b>=this.duration){this.b=0;return true}else return false};g.stop=f();g.start=f();function z(a,b,c,d,e){x.call(this,c,d,e);this.S=a;this.value=parseFloat(b)}h(z,x);z.prototype.B=function(a){a=window.getComputedStyle(a.element,null);this.Z=parseFloat(a.getPropertyValue(this.S))};z.prototype.G=function(a){a.element.style.setProperty(this.S,y(this,this.Z,this.value),"")};
function B(a,b,c,d,e){x.call(this,c,d,e);this.x=a;this.y=b}h(B,x);B.prototype.B=function(a){this.o=a.x;this.p=a.y};B.prototype.G=function(a){t(a,y(this,this.o,this.x),y(this,this.p,this.y))};function C(a,b,c,d,e){x.call(this,c,d,e);this.x=a;this.y=b}h(C,x);C.prototype.B=function(a){this.o=a.w;this.p=a.I};C.prototype.G=function(a){var b=y(this,this.o,this.x),c=y(this,this.p,this.y);a.w=b;a.I=c;s(a)};q=function(a,b,c,d){return new z(a,b,c,m,d)};ia=function(a,b,c,d){return new B(a,b,c,m,d)};
ha=function(a,b,c,d){return new C(a,b,c,m,d)};ga=function(a,b,c,d){return new C(a,b,c,da,d)};fa=function(a,b,c,d){return new C(a,b,c,m,d)};function D(a,b){this.H=a;this.duration=1E3*b;this.b=0}D.prototype.start=function(a){this.o=a.x;this.p=a.y};D.prototype.stop=f();D.prototype.update=function(a,b){this.b+=a;if(this.b>=this.duration){this.b=0;t(b,this.o,this.p);return true}else{t(b,this.o+2*l()*this.H-this.H,this.p+2*l()*this.H-this.H);return false}};function oa(){this.F=[]}oa.prototype.g=function(a,b,c){var d=this.F;d[d.length]=new pa(a,b,c);a.addEventListener(b,c,false)};oa.prototype.A=function(){for(var a=0;a<this.F.length;++a){var b=this.F[a];b.W.removeEventListener(b.X,b.ba,false)}this.F=[]};function pa(a,b,c){this.W=a;this.X=b;this.ba=c};var E=[],F=document.getElementById("hydra-stage");function qa(a){if(a!=i){i&&i.m();for(var b=E.length-1;b>=0;--b){var c=E[b];if(a!=c){--E.length;c.R()}else{i=c;a.l();return}}E=[a];i=a;a.load();a.l()}}function G(a){i&&i.m();i=E[E.length]=a;a.load();a.l()}function ra(){var a=Date.now();i.update(a-j);j=a}function ta(){if(F!=null){F.parentNode.removeChild(F);for(F=null;E.length>0;){var a=E.pop();a.m();a.R()}i=null;clearInterval(ca)}}function ja(){this.a=[];this.c=null}g=ja.prototype;
g.g=function(a,b,c){if(!this.D)this.D=new oa;this.D.g(a,b,c)};g.A=function(){this.D&&this.D.A()};g.e=function(a){if(this.a.length==0&&this.c!=null){var b=this.c.t;b[b.length]=this}b=this.a;b[b.length]=a;a.start(this)};g.N=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];if(b){b.stop(this);this.a[a]=null}}};g.K=function(a){this.c=a;if(this.a.length>0){a=this.c.t;a[a.length]=this}};
g.update=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];if(!c||c.update(a,this))this.a.splice(b--,1)}return b==0};g.f=function(){this.N();this.A();if(this.c!=null){n(this.c.entities,this);this.c=null}};g.l=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.start(this)}};g.m=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.stop(this)}};function H(a){this.entities=[];this.t=[];this.name=a;this.d=new u(o("scene scene-"+a));v(this,this.d,F)}g=H.prototype;
g.update=function(a){for(var b=0;b<this.t.length;++b){var c=this.t[b];if(!c||c.update(a))this.t.splice(b--,1)}};function v(a,b,c){if(!b.c){var d=a.entities;d[d.length]=b;b.K(a);if(b instanceof r)if(c instanceof HTMLElement)c.appendChild(b.element);else if(c!==null){c=c||a.d;w(c,b)}}}g.load=f();g.R=function(){for(var a=0;a<this.entities.length;++a){var b=this.entities[a];if(b.c!=null){b.c=null;b.f()}}this.entities=[];this.t=[]};g.l=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].l()};
g.m=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].m()};g.g=function(a,b,c){this.d.g(a,b,c)};g.A=function(){this.d.A()};g.e=function(a){this.d.e(a)};g.N=function(){this.d.N()};function I(a){this.Y=a}I.prototype.start=f();I.prototype.stop=f();I.prototype.update=function(a,b){this.Y(a,b);return true};function J(a){this.V=1E3*a;this.b=0}J.prototype.start=f();J.prototype.stop=f();J.prototype.update=function(a){this.b+=a;if(this.b>=this.V){this.b=0;return true}else return false};function K(a){this.a=a;this.C=[]}K.prototype.stop=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.stop(a)}};
K.prototype.start=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.start(a)}};K.prototype.update=function(a,b){for(var c=0;c<this.a.length;++c){var d=this.a[c];if(d&&d.update(a,b)){this.a[c]=null;var e=this.C;e[e.length]=d}}if(this.C.length==this.a.length){this.a=this.C;this.C=[];return true}else return false};function L(a){this.P=a}L.prototype.stop=function(a){this.P.stop(a)};L.prototype.start=function(a){this.P.start(a)};L.prototype.update=function(a,b){this.P.update(a,b);return false};
function M(){}M.prototype.start=f();M.prototype.stop=f();M.prototype.update=function(a,b){b.f();return true};function N(a){this.a=a;this.j=0}N.prototype.stop=function(a){this.j<this.a.length&&this.a[this.j].stop(a)};N.prototype.start=function(a){this.j<this.a.length&&this.a[this.j].start(a)};N.prototype.update=function(a,b){if(this.a[this.j].update(a,b))if(++this.j<this.a.length){this.a[this.j].start(b);return false}else{this.j=0;return true}else return false};function O(a){H.call(this,"transition");this.r=a}h(O,H);O.prototype.load=function(){var a=this.r,b=0;if(b<0){b+=E.length;if(b<0)b=0}else if(b>E.length)b=E.length;if(i&&E[b]==i){i.m();i=a}E.splice(b,0,a);a.load();i==a&&a.l()};O.prototype.complete=function(){qa(this.r)};function P(a,b){O.call(this,a);this.duration=b}h(P,O);
P.prototype.load=function(){P.s.load.call(this);var a=F.clientWidth;la(this.r.d,a);var b=this;this.e(new N([new K([ia(-a,0,this.duration,E[E.length-2].d),ia(0,0,this.duration,this.r.d)]),new I(function(){b.complete()})]))};function Q(a,b){O.call(this,a);this.duration=b}h(Q,O);Q.prototype.load=function(){Q.s.load.call(this);var a=this;this.r.d.element.style.setProperty("opacity","0","");this.e(new N([q("opacity","1",this.duration,this.r.d),new I(function(){a.complete()})]))};var R,S,T,U=0;function V(){H.call(this,"playing");this.v=[];this.z=[];this.M=Math.round(5*Math.pow(R,0.5))<R?Math.round(5*Math.pow(R,0.5)):R;this.U=Math.round(5*Math.pow(R,0.5))}h(V,H);
V.prototype.load=function(){this.d.element.style.backgroundImage="url(static/terrain"+(R/3|0)%3+".png)";v(this,this.aa=new u);v(this,this.L=new u);v(this,this.J=new u);for(var a=0;a<this.U;++a){var b=new ua,c=l()*2*3.141592653589793;t(b,l()*320,l()*416);b.h=50*Math.cos(c);b.i=50*Math.sin(c);w(this.L,b);this.v.push(b)}this.q=this.b=0;this.O=false;w(this.J,this.ga=new r(o("score")));w(this.J,this.status=new r(o("status")));this.updateStatus();this.g(this.d.element,"touchstart",ba(V.prototype.fa,this));
a=new ka("marquee");a.element.textContent="Stage "+R;ma(a,150);a.e(new N([q("opacity","0",3)]));w(this.J,a);var d=new X(o("mute-button"));d.n=function(){var e=d.Q;e?T.play():T.pause();k.mute=!e;va("chain",k);wa(d,!e)};wa(d,k.mute);w(this.J,d);d.Q?T.pause():T.play()};V.prototype.fa=function(a){if(!this.O){this.O=true;a=a.touches[0];xa(this,a.pageX-F.offsetLeft,a.pageY-F.offsetTop)}};
function xa(a,b,c){var d=new ya;t(d,b,c);w(a.L,d);d=new r(o("shockwave"));t(d,b,c);d.w=0;d.I=0;s(d);d.e(new N([ha(1,1,0.5),new J(0.5),q("opacity","0",0.25),new M]));w(a.L,d);a.z.push(d);d=new r(o("crater"));t(d,b,c);w(a.aa,d)}
V.prototype.updateStatus=function(){this.status.element.textContent=this.q+" / "+this.M+" of "+this.U;this.ga.element.textContent=String(U+this.q*25);if(this.q==this.M){var a=this.status.element;if(a.className)a.classList.add("win");else a.className="win";this.status.e(new N([ga(1.2,1.2,0.25),fa(1,1,0.25)]))}};
V.prototype.update=function(a){V.s.update.call(this,a);var b=(this.b/200|0)%4;if(b==3)b=1;var c=false;if(this.da!=b){this.da=b;c=true}this.b+=a;var d=0;a:for(;d<this.v.length;++d){var e=this.v[d],A=0;for(;A<this.z.length;++A){var p=this.z[A];if(p.c!=null){var W=e.x-p.x,sa=e.y-p.y;W=W*W+sa*sa;p=p.w*48+12;p*=p;if(W<p){e.f();this.v.splice(d--,1);xa(this,e.x,e.y);++this.q;this.updateStatus();continue a}}else this.z.splice(A--,1)}A=e.x+0.001*a*e.h;p=e.y+0.001*a*e.i;if(e.x<12){A=12;e.h=-e.h}if(e.x>308){A=
308;e.h=-e.h}if(e.y<12){p=12;e.i=-e.i}if(e.y>404){p=404;e.i=-e.i}t(e,A,p);if(c)e.element.style.setProperty("background-position",-24*b+"px "+-32*(e.h<e.i?e.h<-e.i?3:2:e.h<-e.i?0:1)+"px")}if(this.O&&(this.v.length==0||this.z.length==0)){if(a=this.q>=this.M)U=U+this.q*25+R*25*3;k.bestScore=(k.bestScore|0)>U?k.bestScore|0:U;va("chain",k);G(new Q(new za(a),0.5))}};
function ya(){r.call(this,o("fireball"));var a=0,b=this;this.e(new L(new N([new J(0.05),new I(function(){if(a==13)b.f();else{b.element.style.setProperty("background-position",-80*(a%7)+"px "+-81*(a/7|0)+"px");++a}})])))}h(ya,r);function ua(){r.call(this,o("robot"));this.i=this.h=0}h(ua,r);function za(a){H.call(this,"continue");this.u=a}h(za,H);
za.prototype.load=function(){var a=na("continue menu");v(this,a);var b=new r(o("summary "+(this.u?"win":"loss")));b.element.innerHTML=this.u?"Stage "+R+" complete!<br>"+U+" pts ("+R*25*3+" bonus)":S>0?"Stage failed...<br>"+S+" tries left":"Game over<br>Final score:"+U;w(a,b);if(this.u||S>0){b=new X(o("action-button"));b.element.textContent=this.u?"Continue":"Retry";b.n=function(){G(new Q(new V,0.5))};w(a,b)}b=new X(o("action-button"));b.element.textContent="End Game";b.n=function(){Aa.game_end();
T.pause();T=null;G(new P(new Y,0.8))};w(a,b);if(this.u){++R;S=2}else--S};function Y(){H.call(this,"mainmenu")}h(Y,H);
Y.prototype.load=function(){var a=new u;this.e(new L(new N([new J(0.2),new I(function(){var e=new ya;t(e,l()*320,l()*416);w(a,e)})])));v(this,a);var b=new r(o("logo"));v(this,b);b.e(new L(new N([new J(2),new D(4,1)])));b=na("main menu");v(this,b);var c=k.bestScore,d=new r(o("info"));d.element.textContent=c?"High score: "+c:"Tap once to create a chain reaction!";w(b,d);c=new X(o("action-button"));c.element.textContent="Play";c.n=function(){R=1;U=0;S=2;T=Ba("static/music.mp3");T.addEventListener("ended",
HTMLAudioElement.prototype.play,false);Ca(function(){G(new P(new V,0.8))})};w(b,c);c=new X(o("action-button"));c.element.textContent="Quit";c.n=function(){if(window.history.length>1)window.history.back();else{window.close();window.location="http://google.com"}};w(b,c);b=new X(o("credit"));b.element.textContent="by @b_garcia";b.n=function(){window.top.location="http://twitter.com/b_garcia"};v(this,b)};function Z(){H.call(this,"orientation")}h(Z,H);
Z.prototype.load=function(){v(this,new r(ea("Rotate your device to play!")));this.g(window,"orientationchange",function(){if(!(document.body.offsetWidth>320&&document.body.offsetHeight<416))if(E.length>1){var a=E.pop();a.m();a.R();i=E[E.length-1];i.l()}})};function va(a,b){try{localStorage["hydra:"+a]=JSON.stringify(b)||null}catch(c){}};function X(a){r.call(this,a);this.Q=false;a=this.element;if(a.className)a.classList.add("button");else a.className="button";this.g(this.element,"touchstart",this);this.g(this.element,"touchend",this);this.g(this.element,"touchcancel",this)}h(X,r);X.prototype.n=f();function wa(a,b){if(a.Q=b){var c=a.element;if(c.className)c.classList.add("button-down");else c.className="button-down"}else a.element.classList.remove("button-down")}
X.prototype.handleEvent=function(a){if(i==this.c)switch(a.type){case "touchstart":var b=this.element;if(b.className)b.classList.add("button-down");else b.className="button-down";break;case "touchend":case "touchcancel":if(!a.targetTouches.length){this.element.classList.remove("button-down");this.n()}}a.stopPropagation()};var Aa=null;function Ca(a){Aa.game_start(a)};var Da=true;try{document.createEvent("TouchEvent")}catch(Ea){Da=false}var $=null,Fa=0;
function Ga(a){a.preventDefault();var b="";switch(a.type){case "mousedown":b="touchstart";$=a.target;break;case "mousemove":if(!$)return;b="touchmove";break;case "mouseup":b="touchend";Fa++}a={clientX:a.clientX,clientY:a.clientY,identifier:Fa,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY,target:$};var c=document.createEvent("UIEvent");c.initEvent(b,true,false);c.touches=b=="touchend"?[]:[a];c.targetTouches=b=="touchend"?[]:[a];c.changedTouches=[a];$.dispatchEvent(c);if(b=="touchend")$=
null};function Ba(a){var b=document.createElement("audio");b.src=a;b.load();b.play();return b};var Ha;try{Ha=JSON.parse(localStorage["hydra:chain"]||null)}catch(Ia){Ha=null}k=Ha||{};
(function(a,b){window.vipgames.api.register({game_id:a,load:function(c){Aa=c;c.game_load({getScores:b.$,stop:function(){qa(b.T())},unload:ta},function(){var d=document.createElement("div");d.id="hydra-stage";c.getScene().appendChild(d);F=d;d=b.T();G(d);j=Date.now();ca=setInterval(ra,1E3/30);b.ea()})}})})("bruno.blasteffect",{T:function(){return new Y},$:function(){return U},ea:function(){if(!Da){document.addEventListener("mousemove",Ga,true);document.addEventListener("mouseup",Ga,true);document.addEventListener("mousedown",
Ga,true)}window.addEventListener("orientationchange",function(){window.setTimeout(function(){window.scrollTo(0,1);document.body.offsetWidth>320&&document.body.offsetHeight<416&&!(i instanceof Z)&&G(new Z)},0)},false);document.addEventListener("touchstart",function(a){a.preventDefault();window.scrollTo(0,1)},true);window.scrollTo(0,1)}});})()
