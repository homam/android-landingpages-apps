/* Built with Hydra */(function(){function f(){return function(){}}var g;function h(a,b){function c(){}c.prototype=b.prototype;a.q=b.prototype;a.prototype=new c};var i,aa,ba,j;var k=Math.random;function l(a,b,c,d){return b+(c-b)*(a/d)}function ca(a,b,c,d){a/=d;return(c-b)*a*a+b};function da(a,b){var c=a.indexOf(b);if(c>=0){a.splice(c,1);return true}else return false};function m(a){var b=document.createElement("div");b.className=a;return b}function ea(a){var b=document.createElement("div");b.innerHTML=a;if(b.childElementCount==1)b=b.firstElementChild;return b};var fa,ga,ha,ia,ja,ka,la,n,ma;function p(a){q.call(this);this.element=a||document.createElement("div");this.y=this.x=0;this.G=this.w=1;this.rotation=0}h(p,q);p.prototype.detach=function(){if(this.parent){if(da(this.parent.o,this)){this.parent=null;this.detach()}}else this.element.parentNode&&this.element.parentNode.removeChild(this.element)};p.prototype.p=function(){p.q.p.call(this);this.detach();this.element=null};function na(a,b){a.y=b;r(a)}function s(a,b,c){a.x=b;a.y=c;r(a)}
function oa(a,b){a.w=b;r(a)}function r(a){a.element.style.setProperty("-o-transform","translate("+a.x+"px,"+a.y+"px)rotate("+a.rotation+"deg)scale("+a.w+","+a.G+")","")}function t(a){p.call(this,a);this.o=[]}h(t,p);t.prototype.Q=function(a){t.q.Q.call(this,a);for(var b=0;b<this.o.length;++b)u(a,this.o[b],null)};t.prototype.p=function(){t.q.p.call(this);for(var a=0;a<this.o.length;++a){var b=this.o[a];b.parent=null;b.p()}};
function pa(a,b){if(a.g!=null&&b.g==null)u(a.g,b,a);else{if(b.parent!=null)if(da(b.parent.o,b)){b.parent=null;b.detach()}var c=a.o;c[c.length]=b;b.parent=a;a.element.appendChild(b.element)}}function v(a,b,c){this.duration=1E3*a;this.ma=b;this.pa=c;this.c=0}g=v.prototype;g.F=f();g.A=f();function w(a,b,c){return a.ma(a.c,b,c,a.duration)}g.update=function(a,b){b=this.pa||b;this.c||this.A(b);this.c+=a;if(this.c>this.duration)this.c=this.duration;this.F(b);if(this.c>=this.duration){this.c=0;return true}else return false};
g.stop=f();g.start=f();function x(a,b,c,d,e){v.call(this,c,d,e);this.Y=a;this.value=parseFloat(b)}h(x,v);x.prototype.A=function(a){a=window.getComputedStyle(a.element,null);this.ja=parseFloat(a.getPropertyValue(this.Y))};x.prototype.F=function(a){a.element.style.setProperty(this.Y,w(this,this.ja,this.value),"")};function y(a,b,c,d,e){v.call(this,c,d,e);this.x=a;this.y=b}h(y,v);y.prototype.A=function(a){this.S=a.x;this.T=a.y};y.prototype.F=function(a){s(a,w(this,this.S,this.x),w(this,this.T,this.y))};
function z(a,b,c,d){v.call(this,b,c,d);this.rotation=a}h(z,v);z.prototype.A=function(a){this.ia=a.rotation};z.prototype.F=function(a){var b=w(this,this.ia,this.rotation);a.rotation=b;r(a)};function A(a,b,c,d,e){v.call(this,c,d,e);this.x=a;this.y=b}h(A,v);A.prototype.A=function(a){this.S=a.w;this.T=a.G};A.prototype.F=function(a){var b=w(this,this.S,this.x),c=w(this,this.T,this.y);a.w=b;a.G=c;r(a)};ma=function(a,b,c,d){return new x(a,b,c,l,d)};n=function(a,b,c,d){return new y(a,b,c,l,d)};
la=function(a,b,c,d){return new y(a,b,c,ca,d)};ka=function(a,b,c,d){return new y(a,b,c,l,d)};ja=function(a,b,c){return new z(a,b,l,c)};ia=function(a,b,c){return new z(a,b,l,c)};ha=function(a,b,c,d){return new A(a,b,c,l,d)};ga=function(a,b,c,d){return new A(a,b,c,ca,d)};fa=function(a,b,c,d){return new A(a,b,c,l,d)};function B(a){this.duration=1E3*a;this.c=0;this.O=false}B.prototype.start=f();B.prototype.stop=f();
B.prototype.update=function(a,b){this.c+=a;if(this.c>=this.duration){this.c=0;this.O=false;b.element.style.visibility="";return true}else{b.element.style.visibility=this.O?"":"hidden";this.O=!this.O;return false}};function qa(){this.M=[]}qa.prototype.h=function(a,b,c){var d=this.M;d[d.length]=new ra(a,b,c);a.addEventListener(b,c,false)};qa.prototype.H=function(){for(var a=0;a<this.M.length;++a){var b=this.M[a];b.ea.removeEventListener(b.ga,b.la,false)}this.M=[]};function ra(a,b,c){this.ea=a;this.ga=b;this.la=c};var C=[],D=document.getElementById("hydra-stage");function sa(a){var b=C.pop();i=C[C.length]=a;if(b){b.n();b.P()}a.load();a.m()}function ta(a){if(a!=i){i&&i.n();for(var b=C.length-1;b>=0;--b){var c=C[b];if(a!=c){--C.length;c.P()}else{i=c;a.m();return}}C=[a];i=a;a.load();a.m()}}function E(a){i&&i.n();i=C[C.length]=a;a.load();a.m()}function ua(){var a=Date.now();i.update(a-aa);aa=a}
function va(){if(D!=null){D.parentNode.removeChild(D);for(D=null;C.length>0;){var a=C.pop();a.n();a.P()}i=null;clearInterval(ba)}}function q(){this.b=[];this.g=null}g=q.prototype;g.h=function(a,b,c){if(!this.L)this.L=new qa;this.L.h(a,b,c)};g.H=function(){this.L&&this.L.H()};g.f=function(a){if(this.b.length==0&&this.g!=null){var b=this.g.z;b[b.length]=this}b=this.b;b[b.length]=a;a.start(this)};g.s=function(){for(var a=0;a<this.b.length;++a){var b=this.b[a];if(b){b.stop(this);this.b[a]=null}}};
g.Q=function(a){this.g=a;if(this.b.length>0){a=this.g.z;a[a.length]=this}};g.update=function(a){for(var b=0;b<this.b.length;++b){var c=this.b[b];if(!c||c.update(a,this))this.b.splice(b--,1)}return b==0};g.p=function(){this.s();this.H();if(this.g!=null){da(this.g.entities,this);this.g=null}};g.m=function(){for(var a=0;a<this.b.length;++a){var b=this.b[a];b&&b.start(this)}};g.n=function(){for(var a=0;a<this.b.length;++a){var b=this.b[a];b&&b.stop(this)}};
function F(a){this.entities=[];this.z=[];this.name=a;this.k=new t(m("scene scene-"+a));u(this,this.k,D)}g=F.prototype;g.update=function(a){for(var b=0;b<this.z.length;++b){var c=this.z[b];if(!c||c.update(a))this.z.splice(b--,1)}};function u(a,b,c){if(!b.g){var d=a.entities;d[d.length]=b;b.Q(a);if(b instanceof p)if(c instanceof HTMLElement)c.appendChild(b.element);else if(c!==null){c=c||a.k;pa(c,b)}}}g.load=f();
g.P=function(){for(var a=0;a<this.entities.length;++a){var b=this.entities[a];if(b.g!=null){b.g=null;b.p()}}this.entities=[];this.z=[]};g.m=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].m()};g.n=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].n()};g.h=function(a,b,c){this.k.h(a,b,c)};g.H=function(){this.k.H()};g.f=function(a){this.k.f(a)};g.s=function(){this.k.s()};function G(a){this.ha=a}G.prototype.start=f();G.prototype.stop=f();G.prototype.update=function(a,b){this.ha(a,b);return true};function H(a){this.t=1E3*a;this.c=0}H.prototype.start=f();H.prototype.stop=f();H.prototype.update=function(a){this.c+=a;if(this.c>=this.t){this.c=0;return true}else return false};function I(a){this.b=a;this.I=[]}I.prototype.stop=function(a){for(var b=0;b<this.b.length;++b){var c=this.b[b];c&&c.stop(a)}};
I.prototype.start=function(a){for(var b=0;b<this.b.length;++b){var c=this.b[b];c&&c.start(a)}};I.prototype.update=function(a,b){for(var c=0;c<this.b.length;++c){var d=this.b[c];if(d&&d.update(a,b)){this.b[c]=null;var e=this.I;e[e.length]=d}}if(this.I.length==this.b.length){this.b=this.I;this.I=[];return true}else return false};function J(a){this.W=a}J.prototype.stop=function(a){this.W.stop(a)};J.prototype.start=function(a){this.W.start(a)};J.prototype.update=function(a,b){this.W.update(a,b);return false};
function K(){}K.prototype.start=f();K.prototype.stop=f();K.prototype.update=function(a,b){b.p();return true};function L(a){this.b=a;this.r=0}L.prototype.stop=function(a){this.r<this.b.length&&this.b[this.r].stop(a)};L.prototype.start=function(a){this.r<this.b.length&&this.b[this.r].start(a)};L.prototype.update=function(a,b){if(this.b[this.r].update(a,b))if(++this.r<this.b.length){this.b[this.r].start(b);return false}else{this.r=0;return true}else return false};
function M(a,b,c){this.oa=a;this.value=b;this.fa=c}M.prototype.start=f();M.prototype.stop=f();M.prototype.update=function(a,b){b=this.fa||b;b.element.style.setProperty(this.oa,this.value);return true};function N(a){q.call(this);this.l=document.createElement("audio");this.l.addEventListener("ended",HTMLAudioElement.prototype.play,false);this.l.autoplay=false;this.l.src=a;this.l.load();this.enabled=true}h(N,q);N.prototype.p=function(){N.q.p.call(this);this.l.pause();this.l=null};N.prototype.n=function(){N.q.n.call(this);this.l.pause()};N.prototype.m=function(){N.q.m.call(this);this.enabled&&this.l.play()};
function wa(a,b){if(a.g!=null)if(b&&!a.enabled)a.l.play();else!b&&a.enabled&&a.l.pause();a.enabled=b};var xa=null;function ya(a){xa.game_start(a)};function O(a){p.call(this,a);this.X=false;a=this.element;if(a.className)(" "+a.className+" ").indexOf(" button ")>=0||(a.className+=" button");else a.className="button";this.h(this.element,"touchstart",this);this.h(this.element,"touchend",this);this.h(this.element,"touchcancel",this)}h(O,p);O.prototype.u=f();
function za(a,b){if(a.X=b){var c=a.element;if(c.className)(" "+c.className+" ").indexOf(" button-down ")>=0||(c.className+=" button-down");else c.className="button-down"}else{c=a.element;var d=c.className.split(" "),e=d.indexOf("button-down");if(e>=0){d.splice(e,1);c.className=d.join(" ")}}}
O.prototype.handleEvent=function(a){if(i==this.g)switch(a.type){case "touchstart":var b=this.element;if(b.className)(" "+b.className+" ").indexOf(" button-down ")>=0||(b.className+=" button-down");else b.className="button-down";break;case "touchend":case "touchcancel":if(!a.targetTouches.length){b=this.element;var c=b.className.split(" "),d=c.indexOf("button-down");if(d>=0){c.splice(d,1);b.className=c.join(" ")}this.u()}}a.stopPropagation()};var Aa=true;try{document.createEvent("TouchEvent")}catch(Ba){Aa=false}var P=null,Ca=0;
function Da(a){a.preventDefault();var b="";switch(a.type){case "mousedown":b="touchstart";P=a.target;break;case "mousemove":if(!P)return;b="touchmove";break;case "mouseup":b="touchend";Ca++}a={clientX:a.clientX,clientY:a.clientY,identifier:Ca,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY,target:P};var c=document.createEvent("UIEvent");c.initEvent(b,true,false);c.touches=b=="touchend"?[]:[a];c.targetTouches=b=="touchend"?[]:[a];c.changedTouches=[a];P.dispatchEvent(c);if(b=="touchend")P=
null};function Q(a){F.call(this,"transition");this.N=a}h(Q,F);Q.prototype.load=function(){var a=this.N,b=0;if(b<0){b+=C.length;if(b<0)b=0}else if(b>C.length)b=C.length;if(i&&C[b]==i){i.n();i=a}C.splice(b,0,a);a.load();i==a&&a.m()};Q.prototype.complete=function(){ta(this.N)};var Ea=0,Fa=false,R=0;
function S(){F.call(this,"playing");this.B=[];var a=this;Aa?this.h(document.body,"touchmove",function(e){e=e.touches[0];Ga(a,{x:e.pageX,y:e.pageY}.x)}):this.h(document.body,"mousemove",function(e){Ga(a,{x:e.pageX,y:e.pageY}.x)});this.h(window,"devicemotion",function(e){Ea=Math.max(-10,Math.min(5*e.accelerationIncludingGravity.x,10))});this.h(document.body,"touchstart",function(){Fa=true});this.h(document.body,"touchend",function(e){Fa=e.touches.length>0});this.i=0;this.ba=new H(1);this.left=true;
this.f(new J(new L([new G(function(){var e;e=k();if(e<0.02)e=new T;else if(e<0.02+0.1)e=new U;else if(e<0.02+0.1+0.1){e=new V(a.left);a.left=!a.left}else e=new W;Ha(a,e)}),this.ba])));this.V=new p(m("life"));Ia(this,3);u(this,this.V);this.ca=new p(m("speed"));u(this,this.ca);this.aa=new p(m("score"));X(this,0);u(this,this.aa);this.j=new p(m("combo"));Ka(this,0);u(this,this.j);var b=new O(m("pause-button"));b.u=function(){var e=new p(m("paused"));e.element.textContent="PAUSED";e.f(new J(new L([new H(0.8),
new M("visibility","hidden"),new H(0.4),new M("visibility","")])));var o=new F("pause");u(o,e);o.h(window,"touchstart",function(){if(C.length>1){var Ja=C.pop();Ja.n();Ja.P();i=C[C.length-1];i.m()}});E(o)};u(this,b);var c=new O(m("mute-button"));c.u=function(){var e=c.X;wa(d,e);j.mute=!e;try{localStorage["hydra:ski"]=JSON.stringify(j)||null}catch(o){}za(c,!e)};za(c,j.mute);u(this,c);this.U=1;La(this,1);this.c=0;this.qa=true;b=document.createElement("canvas");this.a=b.getContext("2d");b.height=84;u(this,
new p(b));this.h(window,"resize",function(){a.D()});this.D();this.e=new p(m("player"));this.d=new t;pa(this.d,this.e);s(this.d,window.innerWidth/2,80);this.K=this.d.x;u(this,this.d);Ha(this,new Y("DANGER"));var d=new N("static/music.mp3");wa(d,!c.X);u(this,d)}h(S,F);function Ma(a,b){a.e.element.style.backgroundPosition=b*-48+"px 0"}function Ga(a,b){if(i==a&&a.i!=3){var c=a.d;c.x=Math.max(0,Math.min(b,window.innerWidth));r(c)}}
S.prototype.D=function(){var a=window.innerWidth;this.a.canvas.width=a;this.a.globalCompositeOperation="copy";this.a.lineWidth=8;this.ba.t=1E3*(64/a)};
S.prototype.update=function(a){S.q.update.call(this,a);!Fa&&Ea!=0&&Ga(this,this.d.x+Ea);if(this.i!=3){this.c+=a;if(this.c>1E4){this.c-=1E4;var b=new Y("Level "+(this.U+1)),c=this;b.v=function(){var d=c.U+1;c.U=d;La(c,0.75+d*0.25)};Ha(this,b)}a=a*window.innerHeight/(1E3*this.t);this.a.drawImage(this.a.canvas,0,-a);this.a.clearRect(0,84-a,this.a.canvas.width,a);if(this.i!=2){this.a.beginPath();this.a.strokeStyle="#909090";this.a.lineCap="butt";this.a.moveTo(this.K,80-a);this.a.lineTo(this.d.x,80);this.a.stroke();
this.a.beginPath();this.a.strokeStyle="#e0e0e0";this.a.lineCap="round";this.a.moveTo(this.K+2,80-a);this.a.lineTo(this.d.x+2,80);this.a.stroke()}if(this.i==0){a=this.d.x-this.K;if(a>0)oa(this.d,1);else a<0&&oa(this.d,-1);Ma(this,a>5||a<-5?1:0)}this.K=this.d.x;for(a=0;a<this.B.length;++a){b=this.B[a];if(b.g!=null)if(this.i==0&&(b.x-this.d.x<0?-(b.x-this.d.x):b.x-this.d.x)<30&&(b.y-this.d.y<0?-(b.y-this.d.y):b.y-this.d.y)<30)b.C(this);else{if(b.y<=80){b.v(this);this.B.splice(a--,1)}}else this.B.splice(a--,
1)}}};function Na(a){if(a.i!=1){a.i=1;Ma(a,3);a.e.f(new L([new I([new B(1),new L([ka(0,-20,0.2),la(0,0,0.2)])]),new G(function(){a.i=0})]))}Ia(a,a.Z-1)}
function Ia(a,b){if(b==0){for(var c=0;c<a.k.o.length;++c)a.k.o[c].s();a.e.s();a.s();j.bestScore=R>(j.bestScore|0)?R:j.bestScore|0;a.d.f(new L([ka(a.d.x,0.5*window.innerHeight,0.5*a.t),new G(function(){var d=new F("gameover"),e=ea("<div class='gameover menu'><div class='gameover-title'>Game Over</div><div class='gameover-body'>Your personal best score is "+j.bestScore+"</div><div class='action-button'>Replay</div><div class='action-button'>Menu</div></div>"),o=new p(e);na(o,-20);o.f(n(0,0,1));o.element.style.setProperty("opacity",
"0","");o.f(ma("opacity","1",1));u(d,o);o=new O(e.getElementsByClassName("action-button")[0]);o.u=function(){ya(function(){sa(new Z(new S))})};u(d,o,null);e=new O(e.getElementsByClassName("action-button")[1]);e.u=function(){sa(new Z(new $))};u(d,e,null);E(d);xa.game_end()})]));a.e.f(ia(1125,0.5*a.t));La(a,0);Ka(a,0);a.i=3}a.Z=b;a.V.element.style.width=b*16+"px"}function X(a,b){R=b;a.aa.element.textContent=String(b)}
function Ka(a,b){a.j.s();if(b>1){a.j.element.style.opacity="";a.j.element.textContent=b+" Combo!";var c=a.j;c.w=1.2;c.G=1.2;r(c);na(a.j,0);a.j.f(fa(1,1,0.2))}else if(a.R>b){c=a.j;c.w=1;c.G=1;r(c);a.j.f(n(0,30,0.5));a.j.f(ma("opacity","0",0.5))}else a.j.element.style.opacity="0";a.R=b}function Oa(a){if(a.i!=2){a.i=2;Ma(a,4);a.d.element.style.zIndex="1001";a.e.f(new L([k()<0.5?ga(-2,2,0.5):ga(2,-2,0.5),fa(1,1,0.5),new G(function(){a.i=0;a.d.element.style.zIndex=""})]))}}
function Ha(a,b){b.f(new L([n(b.x,-32,a.t),new K]));a.B.push(b);u(a,b)}function La(a,b){a.ca.element.textContent=(30*b|0)+" km/h";a.t=3/b}function W(){p.call(this,m("tree"));s(this,k()*window.innerWidth,window.innerHeight+32)}h(W,p);W.prototype.C=function(a){Na(a)};W.prototype.v=f();function U(){p.call(this,m("ramp"));s(this,k()*window.innerWidth,window.innerHeight+32)}h(U,p);U.prototype.C=function(a){Oa(a);X(a,R+100)};U.prototype.v=f();
function V(a){p.call(this,m(a?"flag-left":"flag-right"));this.left=a;var b=window.innerWidth;s(this,0.4*k()*b+(a?0.1*b:0.5*b),window.innerHeight+32)}h(V,p);V.prototype.C=f();V.prototype.v=function(a){if(a.d.x<this.x==this.left){this.element.style.backgroundColor="lime";Ka(a,a.R+1);X(a,R+200+10*a.R)}else{this.element.style.backgroundColor="yellow";Ka(a,0)}};function Y(a){p.call(this,m("sign"));this.element.textContent=a;s(this,k()*window.innerWidth,window.innerHeight+32)}h(Y,p);Y.prototype.v=f();
Y.prototype.C=f();function T(){t.call(this);this.J=new p(m("candy"));pa(this,this.J);s(this,k()*window.innerWidth,window.innerHeight+32)}h(T,t);T.prototype.v=f();T.prototype.C=function(a){if(this.J){this.s();this.f(new L([n(16,16,1),new K]));this.J.f(ja(1080,1));this.J=null;var b=a.Z+1;if(b<=3){a.V.f(new L([ha(1.2,1.2,0.2),ha(1,1,0.2)]));Ia(a,b)}X(a,R+500)}};function Z(a){Q.call(this,a)}h(Z,Q);
Z.prototype.load=function(){Z.q.load.call(this);var a=C[C.length-2],b=this;this.N.k.element.style.setProperty("visibility","hidden","");var c=new p(m("avalanche"));na(c,-window.innerHeight);c.f(new L([n(0,0,1),new G(function(){a.k.element.style.setProperty("visibility","hidden","");b.N.k.element.style.setProperty("visibility","","")}),n(0,window.innerHeight,1),new G(function(){b.complete()})]));u(this,c)};function $(){F.call(this,"main")}h($,F);
$.prototype.load=function(){var a=document.createElement("canvas");this.a=a.getContext("2d");u(this,new p(a));this.e=new p(m("player"));this.e.element.style.backgroundPosition="-48px";u(this,this.e);a=ea("<div class='main menu'><div class='logo'></div><div class='action-button'>Play</div><div class='action-button'>Quit</div></div>");u(this,new p(a));var b=new O(a.getElementsByClassName("action-button")[0]);b.u=function(){ya(function(){E(new Z(new S))})};u(this,b,null);a=new O(a.getElementsByClassName("action-button")[1]);
a.u=function(){if(window.history.length>1)window.history.back();else{window.close();window.location="http://google.com"}};u(this,a,null);u(this,new p(ea("<div class='credit'>by @b_garcia</div>")));this.c=0;Pa(this);var c=this;this.h(window,"resize",function(){c.D()});this.D()};$.prototype.D=function(){this.a.canvas.width=window.innerWidth;this.a.canvas.height=window.innerHeight;this.a.globalCompositeOperation="copy";this.a.lineWidth=8};
function Pa(a){var b=window.innerWidth;b=k()*(b*0.8-b*0.2)+b*0.2;a.da=b|0;s(a.e,a.da,0)}
$.prototype.update=function(a){$.q.update.call(this,a);this.c+=a;this.e.y>window.innerHeight&&Pa(this);a=this.da+window.innerWidth/3*(Math.sin(6.0E-4*this.c)+Math.sin(0.002*this.c));var b=this.e.y+2;this.a.beginPath();this.a.strokeStyle="#909090";this.a.lineCap="butt";this.a.moveTo(this.e.x,this.e.y);this.a.lineTo(a,b);this.a.stroke();this.a.beginPath();this.a.strokeStyle="#e0e0e0";this.a.lineCap="round";this.a.moveTo(this.e.x+2,this.e.y);this.a.lineTo(a+2,b);this.a.stroke();oa(this.e,a>this.e.x?
1:-1);s(this.e,a,b)};var Qa;try{Qa=JSON.parse(localStorage["hydra:ski"]||null)}catch(Ra){Qa=null}j=Qa||{};
(function(a,b){window.vipgames.api.register({game_id:a,load:function(c){xa=c;c.game_load({getScores:b.ka,stop:function(){ta(b.$())},unload:va},function(){var d=document.createElement("div");d.id="hydra-stage";c.getScene().appendChild(d);D=d;d=b.$();E(d);aa=Date.now();ba=setInterval(ua,1E3/30);b.na()})}})})("bruno.snowbound",{$:function(){return new $},ka:function(){return R},na:function(){if(!Aa){document.addEventListener("mousemove",Da,true);document.addEventListener("mouseup",Da,true);document.addEventListener("mousedown",
Da,true)}window.addEventListener("orientationchange",function(){window.setTimeout(function(){window.scrollTo(0,1);window.innerHeight<416&&alert("Your screen is very small! Try going into portrait mode for a better fit.")},0)},false);document.addEventListener("touchstart",function(a){a.preventDefault();window.scrollTo(0,1)},true);window.scrollTo(0,1)}});})()
