/* Built with Hydra */(function(){function g(){return function(){}}var i,j=this;Math.floor(Math.random()*2147483648).toString(36);function k(a,b){var c=b||j;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}}function l(a,b){function c(){}c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c};var m,aa,ba,o;function ca(a){return a|0}var p=Math.random;function q(a,b,c,d){return b+(c-b)*(a/d)}function da(a,b,c,d){a/=d;return(c-b)*a*a+b};function ea(a,b){var c=a.indexOf(b);if(c>=0){a.splice(c,1);return true}else return false}function r(a,b){a[a.length]=b};function s(a){var b=document.createElement("div");b.className=a;return b}function fa(a){var b=document.createElement("div");b.innerHTML=a;if(b.childElementCount==1)b=b.firstElementChild;return b};var t,ga,ha,ia,ka,la,ma,na,oa,u;function w(a){pa.call(this);this.element=a||document.createElement("div");this.y=this.x=0;this.K=this.J=1;this.rotation=0}l(w,pa);w.prototype.detach=function(){if(this.parent){if(ea(this.parent.q,this)){this.parent=null;this.detach()}}else this.element.parentNode&&this.element.parentNode.removeChild(this.element)};w.prototype.s=function(){w.L.s.call(this);this.detach();this.element=null};function qa(a,b){a.x=b;x(a)}function ra(a,b){a.y=b;x(a)}
function y(a,b,c){a.x=b;a.y=c;x(a)}function sa(a,b){a.rotation=b;x(a)}function x(a){a.element.style.setProperty("-o-transform","translate("+a.x+"px,"+a.y+"px)rotate("+a.rotation+"deg)scale("+a.J+","+a.K+")","")}function z(a){w.call(this,a);this.q=[]}l(z,w);z.prototype.D=function(a){z.L.D.call(this,a);for(var b=0;b<this.q.length;++b)A(a,this.q[b],null)};z.prototype.s=function(){z.L.s.call(this);for(var a=0;a<this.q.length;++a){var b=this.q[a];b.parent=null;b.s()}};
function B(a,b){if(a.d!=null&&b.d==null)A(a.d,b,a);else{if(b.parent!=null)if(ea(b.parent.q,b)){b.parent=null;b.detach()}r(a.q,b);b.parent=a;a.element.appendChild(b.element)}}function C(a,b,c){this.duration=1E3*a;this.ba=b;this.ia=c;this.e=0}i=C.prototype;i.B=g();i.w=g();function D(a,b,c){return a.ba(a.e,b,c,a.duration)}i.update=function(a,b){b=this.ia||b;this.e||this.w(b);this.e+=a;if(this.e>this.duration)this.e=this.duration;this.B(b);if(this.e>=this.duration){this.e=0;return true}else return false};
i.stop=g();i.start=g();function E(a,b,c,d,e){C.call(this,c,d,e);this.Q=a;this.value=parseFloat(b)}l(E,C);E.prototype.w=function(a){a=window.getComputedStyle(a.element,null);this.Z=parseFloat(a.getPropertyValue(this.Q))};E.prototype.B=function(a){a.element.style.setProperty(this.Q,D(this,this.Z,this.value),"")};function F(a,b,c,d,e){C.call(this,c,d,e);this.x=a;this.y=b}l(F,C);F.prototype.w=function(a){this.t=a.x;this.u=a.y};F.prototype.B=function(a){y(a,D(this,this.t,this.x),D(this,this.u,this.y))};
function ta(a,b,c,d,e){C.call(this,c,d,e);this.x=a;this.y=b}l(ta,C);ta.prototype.w=function(a){this.t=a.x;this.u=a.y};ta.prototype.B=function(a){y(a,D(this,this.t,this.t+this.x),D(this,this.u,this.u+this.y))};function G(a,b,c,d,e){C.call(this,c,d,e);this.x=a;this.y=b}l(G,C);G.prototype.w=function(a){this.t=a.J;this.u=a.K};G.prototype.B=function(a){var b=D(this,this.t,this.x),c=D(this,this.u,this.y);a.J=b;a.K=c;x(a)};u=function(a,b,c,d){return new E(a,b,c,q,d)};
oa=function(a,b,c,d){return new E(a,b,c,da,d)};na=function(a,b,c,d){return new E(a,b,c,q,d)};ma=function(a,b,c,d){return new F(a,b,c,q,d)};la=function(a,b,c,d){return new F(a,b,c,da,d)};ka=function(a,b,c,d){return new F(a,b,c,q,d)};ia=function(a,b,c,d){return new ta(a,b,c,q,d)};ha=function(a,b,c,d){return new G(a,b,c,q,d)};ga=function(a,b,c,d){return new G(a,b,c,da,d)};t=function(a,b,c,d){return new G(a,b,c,q,d)};function ua(){this.z={}}ua.prototype.addEventListener=function(a,b){var c=this.z[a];if(c==null)this.z[a]=[b];else r(c,b)};ua.prototype.removeEventListener=function(a,b){var c=this.z[a];c!=null&&ea(c,b)};ua.prototype.dispatchEvent=function(a){var b=this.z[a];if(b!=null){var c=Array.prototype.slice.apply(arguments);c.shift();for(var d=0;d<b.length;++d)b[d].apply(undefined,c)}};function va(){this.H=[]}va.prototype.b=function(a,b,c){r(this.H,new wa(a,b,c));a.addEventListener(b,c,false)};
va.prototype.C=function(){for(var a=0;a<this.H.length;++a){var b=this.H[a];b.W.removeEventListener(b.X,b.aa,false)}this.H=[]};function wa(a,b,c){this.W=a;this.X=b;this.aa=c};var H=[],I=document.getElementById("hydra-stage");function xa(a){if(a!=m){m&&m.l();for(var b=H.length-1;b>=0;--b){var c=H[b];if(a!=c){--H.length;c.M()}else{m=c;a.k();return}}H=[a];m=a;a.load();a.k()}}function ya(){if(H.length>1){var a=H.pop();a.l();a.M();m=H[H.length-1];m.k()}}function J(a){m&&m.l();r(H,a);m=a;a.load();a.k()}function za(){var a=Date.now();m.update(a-aa);aa=a}
function Aa(){if(I!=null){I.parentNode.removeChild(I);for(I=null;H.length>0;){var a=H.pop();a.l();a.M()}m=null;clearInterval(ba)}}function pa(){this.a=[];this.d=null}i=pa.prototype;i.b=function(a,b,c){if(!this.G)this.G=new va;this.G.b(a,b,c)};i.C=function(){this.G&&this.G.C()};i.c=function(a){this.a.length==0&&this.d!=null&&r(this.d.v,this);r(this.a,a);a.start(this)};i.o=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];if(b){b.stop(this);this.a[a]=null}}};
i.D=function(a){this.d=a;this.a.length>0&&r(this.d.v,this)};i.update=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];if(!c||c.update(a,this))this.a.splice(b--,1)}return b==0};i.s=function(){this.o();this.C();if(this.d!=null){ea(this.d.entities,this);this.d=null}};i.k=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.start(this)}};i.l=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.stop(this)}};
function K(a){this.entities=[];this.v=[];this.name=a;this.g=new z(s("scene scene-"+a));A(this,this.g,I)}i=K.prototype;i.update=function(a){for(var b=0;b<this.v.length;++b){var c=this.v[b];if(!c||c.update(a))this.v.splice(b--,1)}};function A(a,b,c){if(!b.d){r(a.entities,b);b.D(a);if(b instanceof w)if(c instanceof HTMLElement)c.appendChild(b.element);else if(c!==null){c=c||a.g;B(c,b)}}}i.load=g();
i.M=function(){for(var a=0;a<this.entities.length;++a){var b=this.entities[a];if(b.d!=null){b.d=null;b.s()}}this.entities=[];this.v=[]};i.k=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].k()};i.l=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].l()};i.b=function(a,b,c){this.g.b(a,b,c)};i.C=function(){this.g.C()};i.c=function(a){this.g.c(a)};i.o=function(){this.g.o()};function L(a){this.Y=a}L.prototype.start=g();L.prototype.stop=g();L.prototype.update=function(a,b){this.Y(a,b);return true};function M(a){this.V=1E3*a;this.e=0}M.prototype.start=g();M.prototype.stop=g();M.prototype.update=function(a){this.e+=a;if(this.e>=this.V){this.e=0;return true}else return false};function N(a){this.a=a;this.F=[]}N.prototype.stop=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.stop(a)}};
N.prototype.start=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.start(a)}};N.prototype.update=function(a,b){for(var c=0;c<this.a.length;++c){var d=this.a[c];if(d&&d.update(a,b)){this.a[c]=null;r(this.F,d)}}if(this.F.length==this.a.length){this.a=this.F;this.F=[];return true}else return false};function O(a){this.P=a}O.prototype.stop=function(a){this.P.stop(a)};O.prototype.start=function(a){this.P.start(a)};O.prototype.update=function(a,b){this.P.update(a,b);return false};
function P(){}P.prototype.start=g();P.prototype.stop=g();P.prototype.update=function(a,b){b.s();return true};function Q(a){this.a=a;this.m=0}Q.prototype.stop=function(a){this.m<this.a.length&&this.a[this.m].stop(a)};Q.prototype.start=function(a){this.m<this.a.length&&this.a[this.m].start(a)};Q.prototype.update=function(a,b){if(this.a[this.m].update(a,b))if(++this.m<this.a.length){this.a[this.m].start(b);return false}else{this.m=0;return true}else return false};function Ba(){K.call(this,"orientation")}l(Ba,K);Ba.prototype.load=function(){this.g.element.appendChild(fa("Rotate your device to play!"));this.b(window,"orientationchange",function(){document.body.offsetWidth>320&&document.body.offsetHeight<416||ya()})};function Ca(a,b){try{localStorage["hydra:"+a]=JSON.stringify(b)||null}catch(c){}};function R(a){w.call(this,a);this.U=false;a=this.element;if(a.className)(" "+a.className+" ").indexOf(" button ")>=0||(a.className+=" button");else a.className="button";this.b(this.element,"touchstart",this);this.b(this.element,"touchend",this);this.b(this.element,"touchcancel",this)}l(R,w);R.prototype.A=g();
function Da(a,b){if(a.U=b){var c=a.element;if(c.className)(" "+c.className+" ").indexOf(" button-down ")>=0||(c.className+=" button-down");else c.className="button-down"}else{c=a.element;var d=c.className.split(" "),e=d.indexOf("button-down");if(e>=0){d.splice(e,1);c.className=d.join(" ")}}}
R.prototype.handleEvent=function(a){if(m==this.d)switch(a.type){case "touchstart":var b=this.element;if(b.className)(" "+b.className+" ").indexOf(" button-down ")>=0||(b.className+=" button-down");else b.className="button-down";break;case "touchend":case "touchcancel":if(!a.targetTouches.length){b=this.element;var c=b.className.split(" "),d=c.indexOf("button-down");if(d>=0){c.splice(d,1);b.className=c.join(" ")}this.A()}}a.stopPropagation()};function Ea(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),h=Math.max(d.length,e.length),f=0;c==0&&f<h;f++){var n=d[f]||"",v=e[f]||"",ja=RegExp("(\\d*)(\\D*)","g"),fb=RegExp("(\\d*)(\\D*)","g");do{var V=ja.exec(n)||["","",""],W=fb.exec(v)||["","",""];if(V[0].length==0&&W[0].length==0)break;c=Fa(V[1].length==0?0:parseInt(V[1],10),W[1].length==0?0:parseInt(W[1],10))||Fa(V[2].length==0,W[2].length==0)||Fa(V[2],
W[2])}while(c==0)}return c}function Fa(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var S,Ga,Ha,Ia;"ScriptEngine"in j&&j.ScriptEngine()=="JScript"&&(j.ScriptEngineMajorVersion(),j.ScriptEngineMinorVersion(),j.ScriptEngineBuildVersion());function Ja(){return j.navigator?j.navigator.userAgent:null}Ia=Ha=Ga=S=false;var Ka;if(Ka=Ja()){var La=j.navigator;S=Ka.indexOf("Opera")==0;Ga=!S&&Ka.indexOf("MSIE")!=-1;Ha=!S&&Ka.indexOf("WebKit")!=-1;Ia=!S&&!Ha&&La.product=="Gecko"}var Ma=Ga,Na=Ia,Oa=Ha,Pa;
a:{var Qa="",T;if(S&&j.opera){var Ra=j.opera.version;Qa=typeof Ra=="function"?Ra():Ra}else{if(Na)T=/rv\:([^\);]+)(\)|;)/;else if(Ma)T=/MSIE\s+([^\);]+)(\)|;)/;else if(Oa)T=/WebKit\/(\S+)/;if(T){var Sa=T.exec(Ja());Qa=Sa?Sa[1]:""}}if(Ma){var Ta,Ua=j.document;Ta=Ua?Ua.documentMode:undefined;if(Ta>parseFloat(Qa)){Pa=String(Ta);break a}}Pa=Qa}var Va={};!Ma||Va["9"]||(Va["9"]=Ea(Pa,"9")>=0);Ma&&(Va["9"]||(Va["9"]=Ea(Pa,"9")>=0));function U(a){K.call(this,"transition");this.I=a}l(U,K);U.prototype.load=function(){var a=this.I,b=0;if(b<0){b+=H.length;if(b<0)b=0}else if(b>H.length)b=H.length;if(m&&H[b]==m){m.l();m=a}H.splice(b,0,a);a.load();m==a&&a.k()};U.prototype.complete=function(){xa(this.I)};function Wa(a,b){U.call(this,a);this.duration=b}l(Wa,U);
Wa.prototype.load=function(){Wa.L.load.call(this);var a=I.clientWidth;qa(this.I.g,a);var b=this;this.c(new Q([new N([ma(-a,0,this.duration,H[H.length-2].g),ma(0,0,this.duration,this.I.g)]),new L(function(){b.complete()})]))};function Xa(){K.call(this,"mainmenu")}l(Xa,K);
Xa.prototype.load=function(){var a=fa('<div class="credits">by b_garcia <img src="static/twitter.png"></div><div class="ui-attract"></div><div class="logo"></div><div class="menu"><div class="button-play punch-button">PLAY</div></div>');this.g.element.appendChild(a);var b=new R(a.querySelector(".credits"));b.A=function(){window.top.location="http://twitter.com/b_garcia"};A(this,b,null);b=new R(a.querySelector(".logo"));b.c(new O(new Q([ga(1.1,1,2),t(1,1,2)])));A(this,b,null);b=new z;for(var c=0;c<
15;++c){var d=new w(s("block0"));y(d,ca(p()*320+0),ca(p()*400+0));sa(d,ca(p()*360+0));d.c(new O(new Q([new M(p()*4+1.5),new L(function(e,h){var f;f=p()*320+0|0;var n;n=p()*400+0|0;var v=f-h.x;sa(h,57.29577951308232*Math.atan((n-h.y)/v)+(v>0?270:90));h.c(ka(f,n,1))})])));(function(e){e.b(e.element,"touchstart",function(){e.o();sa(e,0);var h=e.element,f=p()*(Ya-1)+1;h.className="block"+(f|0)})})(d);B(b,d)}A(this,b,a.querySelector(".ui-attract"));a=new R(a.querySelector(".button-play"));a.A=function(){var e=
new X;qa(e.g,320);J(new Wa(new X,1))};a.D(this)};var Za=null;function $a(a){Za.game_start(a)};var ab=true;try{document.createEvent("TouchEvent")}catch(bb){ab=false}var Y=null,cb=0;
function db(a){a.preventDefault();var b="";switch(a.type){case "mousedown":b="touchstart";Y=a.target;break;case "mousemove":if(!Y)return;b="touchmove";break;case "mouseup":b="touchend";cb++}a={clientX:a.clientX,clientY:a.clientY,identifier:cb,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY,target:Y};var c=document.createEvent("UIEvent");c.initEvent(b,true,false);c.touches=b=="touchend"?[]:[a];c.targetTouches=b=="touchend"?[]:[a];c.changedTouches=[a];Y.dispatchEvent(c);if(b=="touchend")Y=
null};function eb(){this.z={}}l(eb,ua);var Ya=3;var Z,$;function gb(){z.call(this,s("board"));this.b(Z,4,k(this.da,this));this.b(Z,0,k(this.fa,this));this.b(Z,1,k(this.ea,this));this.b(Z,2,k(this.N,this));this.b(this.element,"touchstart",k(this.T,this));this.b(this.element,"touchmove",k(this.T,this));this.b(this.element,"touchend",k(this.S,this));this.b(this.element,"touchcancel",k(this.S,this));var a=new w(document.createElement("canvas"));B(this,a);a.element.style.zIndex="9999";a.element.width=hb;a.element.height=ib;this.j=a.element.getContext("2d");
this.j.lineWidth=6;this.j.strokeStyle="#0000ff"}l(gb,z);var hb=320,ib=360;i=gb.prototype;i.da=function(){this.p=[];for(var a=0;a<9;++a)for(var b=0;b<8;++b){var c=new w(s("block"+Z.i[a*8+b]));y(c,40*b,40*a);B(this,c);this.p[a*8+b]=c}};
i.fa=function(){for(var a=Z.h,b={},c=0,d=a.length;c<d;++c){var e=this.p[a[c]];b[a[c]]=true;e.o();e.element.style.backgroundColor="";e.c(new Q([new M((d-c)*0.1),ha(0,0,0.15),new P]))}a=0.1*d;for(c=0;c<8;++c){d=0;for(var h=true,f=8;f>=0;--f){var n=f*8+c;if(n in b)++d;else{e=Z.i[n];if(h&&e==0)++d;else h=false;if(d){var v=this.p[n];n=n+d*8;var ja=[new M(a),la(c*40,(f+d)*40,d*0.2)];if(n>72)ja.push(new P);else{this.p[n]=v;Z.i[n]=e}v.o();v.c(new Q(ja))}}}for(f=0;f<d;++f){n=f*8+c;e=Z.f/1E4|0;if(p()<(0.3<
0.1*(e+1)?0.3:0.1*(e+1)))e=0;else{e=Ya;e=p()*(e-1)+1|0}e=e;Z.i[n]=e;e=new w(s("block"+e));y(e,c*40,-(d-f)*40);e.c(new Q([new M(a),la(c*40,f*40,d*0.2)]));B(this,e);this.p[n]=e}}this.j.clearRect(0,0,hb,ib)};i.ea=function(){for(var a=Z.h,b=0;b<a.length;++b)this.p[a[b]].element.style.backgroundColor="";this.j.clearRect(0,0,hb,ib)};
i.T=function(a){if(this.d==m){a=a.touches[0];a={x:a.pageX,y:a.pageY-this.y};a.x=a.x>hb-1?hb-1:a.x<0?0:a.x;a.y=a.y>ib-1?ib-1:a.y<0?0:a.y;var b=a.x/40|0,c=a.y/40|0,d;d=Z;var e=c*8+b;if(e in d.O)d=1;else{var h=2;if(d.h.length){var f=d.h[d.h.length-1];if(e==f+1||e==f-1||e==f+8||e==f-8)if(d.i[f]==d.i[e])h=0}else if(d.i[e]!=0)h=0;if(h==0){d.O[e]=true;r(d.h,e)}d=h}switch(d){case 0:this.p[c*8+b].element.style.backgroundColor="#fff";case 1:if(this.n){this.j.beginPath();this.j.moveTo(this.n.x,this.n.y);this.j.lineTo(a.x,
a.y);this.j.stroke()}this.n=a}}};i.S=function(){if(this.d==m){var a=Z;if(a.h.length>1){a.dispatchEvent(0);var b=50*(Math.pow(a.h.length,1.6)|0);a.f+=b;a.dispatchEvent(2,b)}else a.dispatchEvent(1);a.O={};a.h.length=0;this.n=null}};
i.N=function(a){if(a>0){var b=new w(s("floater"));b.element.textContent="+"+a;b.c(new Q([ia(0,-30,1.5),new P]));b.c(new Q([new M(1),u("opacity","0",0.5)]));B(this,b);a=b.element.clientWidth;y(b,this.n.x-a/2>320-a?320-a:this.n.x-a/2<0?0:this.n.x-a/2,this.n.y-b.element.clientHeight/2)}};function X(){K.call(this,"playing")}l(X,K);
X.prototype.load=function(){var a=this;$a(function(){Z=new eb;a.r=new w(s("clock"));y(a.r,200,10);a.c(new O(new Q([new M(1),new L(function(){++Z.e;jb(a)})])));a.r.b(Z,2,k(a.N,a));a.r.b(Z,3,k(a.ca,a));a.r.b(Z,4,function(){jb(a)});A(a,a.r);a.f=new w(s("score"));y(a.f,32,10);A(a,a.f);var b=new R(s("mute-button"));b.A=function(){var e=b.U;e?$.play():$.pause();o.mute=!e;Ca("jam",o);Da(b,!e)};Da(b,o.mute);y(b,272,10);A(a,b);var c=new R(s("pause-button"));y(c,0,10);c.A=function(){var e=new K("pause"),h=
new z(s("fader"));h.element.style.opacity="0";h.b(document,"touchstart",function(){h.o();h.c(new Q([u("opacity","0",0.5),new L(ya)]))});h.c(u("opacity","0.9",0.5));A(e,h);var f=new w(s("paused"));f.element.textContent="PAUSED";y(f,320,158);f.c(new Q([ka(80,158,1),new O(new Q([ga(1.2,1,0.5),t(1,1,0.5)]))]));B(h,f);J(e)};A(a,c);c=new gb;ra(c,53);A(a,c);var d=new K("interstitial");c=new w(s("ready"));y(c,60,0);c.element.textContent="Ready...";c.element.style.opacity="0";c.c(new Q([new N([ma(60,208,3),
new Q([oa("opacity","1",1),new M(1.5),na("opacity","0",0.5)])]),new L(function(){var e=new w(s("go"));e.element.textContent="GO!";y(e,40,416/3);e.J=0.25;e.K=0.25;x(e);e.c(new Q([new N([t(1,1,1),new Q([new M(0.5),u("opacity","0",0.5)])]),new P]));A(a,e);ya();e=Z;e.O={};e.h=[];e.i=[];for(var h=0;h<72;++h){var f=e.i,n=h,v=Ya+1;v=p()*(v-1)+1;f[n]=v|0}e.ha=true;e.f=0;e.e=0;e.dispatchEvent(4);e.dispatchEvent(2)})]));A(d,c);a.c(new L(function(){J(d)}))})};
X.prototype.N=function(){if(Z.h.length){this.f.o();this.f.c(new Q([t(1.2,1.2,0.1),ga(1,1,0.1)]))}this.f.element.textContent=String(Z.f)};function jb(a){var b=90-Z.e;if(b>=0){var c=b%60;a.r.element.textContent=(b/60|0)+(c>9?":":":0")+c;b<10&&a.r.element.style.setProperty("color","red","")}else{a=Z;a.ha=false;a.dispatchEvent(3)}}
X.prototype.ca=function(){var a=o.best||0;if(Z.f>a){a=Z.f;o.best=a;Ca("jam",o)}Za.game_end();a=confirm("Game over! You scored "+Z.f+" points.\n\nYour personal best is "+a+" points. Play again?")?new X:new Xa;var b=H.pop();r(H,a);m=a;if(b){b.l();b.M()}a.load();a.k()};function kb(a){var b=document.createElement("audio");b.src=a;b.load();b.play();return b};if(!ab){document.addEventListener("mousemove",db,true);document.addEventListener("mouseup",db,true);document.addEventListener("mousedown",db,true)}var lb;try{lb=JSON.parse(localStorage["hydra:jam"]||null)}catch(mb){lb=null}o=lb||{};
(function(a,b){window.vipgames.api.register({game_id:a,load:function(c){Za=c;c.game_load({getScores:b.$,stop:function(){xa(b.R())},unload:Aa},function(){var d=document.createElement("div");d.id="hydra-stage";c.getScene().appendChild(d);I=d;d=b.R();J(d);aa=Date.now();ba=setInterval(za,1E3/30);b.ga()})}})})("bruno.fruitlink",{R:function(){return new Xa},$:function(){return Z!=null?Z.f:0},ga:function(){function a(){(document.body.offsetWidth>320&&document.body.offsetHeight<416)&!(m instanceof Ba)&&J(new Ba)}
$=kb("static/music.mp3");o.mute&&$.pause();$.addEventListener("ended",HTMLAudioElement.prototype.play,false);var b=new K("intro"),c=new w(s("darkness"));c.c(new Q([oa("opacity","0",1),new L(ya)]));A(b,c);J(b);window.addEventListener("orientationchange",a,false);a();window.addEventListener("resize",function(){window.setTimeout(window.scrollTo,0,1,0)},false);document.addEventListener("touchstart",function(d){d.preventDefault();window.scrollTo(0,1)},true);window.scrollTo(0,1)}});})()
