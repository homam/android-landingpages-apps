/* Built with Hydra */(function(){function f(){return function(){}}var g,i=this;Math.floor(Math.random()*2147483648).toString(36);function j(a,b){var c=b||i;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}}function l(a,b){function c(){}c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c};var m,aa,ba,n;var o=Math.random;function p(a,b,c,d){return b+(c-b)*(a/d)}function ca(a,b,c,d){a/=d;return(c-b)*a*a+b};function fa(a,b){var c=a.indexOf(b);if(c>=0){a.splice(c,1);return true}else return false}function q(a,b){a[a.length]=b};function r(a){var b=document.createElement("div");b.className=a;return b}function s(a){var b=document.createElement("div");b.innerHTML=a;if(b.childElementCount==1)b=b.firstElementChild;return b};var ga,ha,ia,u,ja,v,ka,w;function x(a){la.call(this);this.element=a||document.createElement("div");this.y=this.x=0;this.B=this.L=1;this.rotation=0}l(x,la);x.prototype.detach=function(){if(this.parent){if(fa(this.parent.o,this)){this.parent=null;this.detach()}}else this.element.parentNode&&this.element.parentNode.removeChild(this.element)};x.prototype.j=function(){x.P.j.call(this);this.detach();this.element=null};function ma(a,b){a.x=b;y(a)}function z(a,b){a.y=b;y(a)}
function A(a,b,c){a.x=b;a.y=c;y(a)}function na(a,b){a.L=b;a.B=b;y(a)}function y(a){a.element.style.setProperty("-moz-transform","translate("+a.x+"px,"+a.y+"px)rotate("+a.rotation+"deg)scale("+a.L+","+a.B+")","")}function B(a){x.call(this,a);this.o=[]}l(B,x);B.prototype.s=function(a){B.P.s.call(this,a);for(var b=0;b<this.o.length;++b)C(a,this.o[b],null)};B.prototype.j=function(){B.P.j.call(this);for(var a=0;a<this.o.length;++a){var b=this.o[a];b.parent=null;b.j()}};
function D(a,b){if(a.g!=null&&b.g==null)C(a.g,b,a);else{if(b.parent!=null)if(fa(b.parent.o,b)){b.parent=null;b.detach()}q(a.o,b);b.parent=a;a.element.appendChild(b.element)}}function E(a,b,c){this.duration=1E3*a;this.la=b;this.Ba=c;this.l=0}g=E.prototype;g.z=f();g.u=f();function F(a,b,c){return a.la(a.l,b,c,a.duration)}g.update=function(a,b){b=this.Ba||b;this.l||this.u(b);this.l+=a;if(this.l>this.duration)this.l=this.duration;this.z(b);if(this.l>=this.duration){this.l=0;return true}else return false};
g.stop=f();g.start=f();function G(a,b,c,d,e){E.call(this,c,d,e);this.U=a;this.value=parseFloat(b)}l(G,E);G.prototype.u=function(a){a=window.getComputedStyle(a.element,null);this.ia=parseFloat(a.getPropertyValue(this.U))};G.prototype.z=function(a){a.element.style.setProperty(this.U,F(this,this.ia,this.value),"")};function H(a,b,c,d,e){E.call(this,c,d,e);this.x=a;this.y=b}l(H,E);H.prototype.u=function(a){this.v=a.x;this.w=a.y};H.prototype.z=function(a){A(a,F(this,this.v,this.x),F(this,this.w,this.y))};
function oa(a,b,c,d,e){E.call(this,c,d,e);this.x=a;this.y=b}l(oa,E);oa.prototype.u=function(a){this.v=a.x;this.w=a.y};oa.prototype.z=function(a){A(a,F(this,this.v,this.v+this.x),F(this,this.w,this.w+this.y))};function pa(a,b,c,d){E.call(this,b,c,d);this.rotation=a}l(pa,E);pa.prototype.u=function(a){this.W=a.rotation};pa.prototype.z=function(a){var b=F(this,this.W,this.W+this.rotation);a.rotation=b;y(a)};function qa(a,b,c,d,e){E.call(this,c,d,e);this.x=a;this.y=b}l(qa,E);
qa.prototype.u=function(a){this.v=a.L;this.w=a.B};qa.prototype.z=function(a){var b=F(this,this.v,this.x),c=F(this,this.w,this.y);a.L=b;a.B=c;y(a)};w=function(a,b,c,d){return new G(a,b,c,p,d)};ka=function(a,b,c,d){return new G(a,b,c,ca,d)};v=function(a,b,c,d){return new H(a,b,c,p,d)};ja=function(a,b,c,d){return new H(a,b,c,ca,d)};u=function(a,b,c,d){return new H(a,b,c,p,d)};ia=function(a,b,c,d){return new oa(a,b,c,p,d)};ha=function(a,b,c){return new pa(a,b,p,c)};
ga=function(a,b,c,d){return new qa(a,b,c,ca,d)};function ra(){this.A={}}ra.prototype.addEventListener=function(a,b){var c=this.A[a];if(c==null)this.A[a]=[b];else q(c,b)};ra.prototype.removeEventListener=function(a,b){var c=this.A[a];c!=null&&fa(c,b)};ra.prototype.dispatchEvent=function(a){var b=this.A[a];if(b!=null){var c=Array.prototype.slice.apply(arguments);c.shift();for(var d=0;d<b.length;++d)b[d].apply(undefined,c)}};function sa(){this.H=[]}sa.prototype.e=function(a,b,c){q(this.H,new ta(a,b,c));a.addEventListener(b,c,false)};
sa.prototype.C=function(){for(var a=0;a<this.H.length;++a){var b=this.H[a];b.fa.removeEventListener(b.ga,b.ka,false)}this.H=[]};function ta(a,b,c){this.fa=a;this.ga=b;this.ka=c};var I=[],J=document.getElementById("hydra-stage");function ua(a){if(a!=m){m&&m.q();for(var b=I.length-1;b>=0;--b){var c=I[b];if(a!=c){--I.length;c.T()}else{m=c;a.p();return}}I=[a];m=a;a.load();a.p()}}function K(){if(I.length>1){var a=I.pop();a.q();a.T();m=I[I.length-1];m.p()}}function O(a){m&&m.q();q(I,a);m=a;a.load();a.p()}function va(){var a=Date.now();m.update(a-aa);aa=a}
function wa(){if(J!=null){J.parentNode.removeChild(J);for(J=null;I.length>0;){var a=I.pop();a.q();a.T()}m=null;clearInterval(ba)}}function la(){this.a=[];this.g=null}g=la.prototype;g.e=function(a,b,c){if(!this.G)this.G=new sa;this.G.e(a,b,c)};g.C=function(){this.G&&this.G.C()};g.c=function(a){this.a.length==0&&this.g!=null&&q(this.g.r,this);q(this.a,a);a.start(this)};g.K=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];if(b){b.stop(this);this.a[a]=null}}};
g.s=function(a){this.g=a;this.a.length>0&&q(this.g.r,this)};g.update=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];if(!c||c.update(a,this))this.a.splice(b--,1)}return b==0};g.j=function(){this.K();this.C();if(this.g!=null){fa(this.g.entities,this);this.g=null}};g.p=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.start(this)}};g.q=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.stop(this)}};
function P(a){this.entities=[];this.r=[];this.name=a;this.d=new B(r("scene scene-"+a));C(this,this.d,J)}g=P.prototype;g.update=function(a){for(var b=0;b<this.r.length;++b){var c=this.r[b];if(!c||c.update(a))this.r.splice(b--,1)}};function C(a,b,c){if(!b.g){q(a.entities,b);b.s(a);if(b instanceof x)if(c instanceof HTMLElement)c.appendChild(b.element);else if(c!==null){c=c||a.d;D(c,b)}}}g.load=f();
g.T=function(){for(var a=0;a<this.entities.length;++a){var b=this.entities[a];if(b.g!=null){b.g=null;b.j()}}this.entities=[];this.r=[]};g.p=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].p()};g.q=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].q()};g.e=function(a,b,c){this.d.e(a,b,c)};g.C=function(){this.d.C()};g.c=function(a){this.d.c(a)};g.K=function(){this.d.K()};function Q(a){this.ha=a}Q.prototype.start=f();Q.prototype.stop=f();Q.prototype.update=function(a,b){this.ha(a,b);return true};function R(a){this.V=1E3*a;this.l=0}R.prototype.start=f();R.prototype.stop=f();R.prototype.update=function(a){this.l+=a;if(this.l>=this.V){this.l=0;return true}else return false};function S(a){this.a=a;this.D=[]}S.prototype.stop=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.stop(a)}};
S.prototype.start=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.start(a)}};S.prototype.update=function(a,b){for(var c=0;c<this.a.length;++c){var d=this.a[c];if(d&&d.update(a,b)){this.a[c]=null;q(this.D,d)}}if(this.D.length==this.a.length){this.a=this.D;this.D=[];return true}else return false};function T(a){this.Q=a}T.prototype.stop=function(a){this.Q.stop(a)};T.prototype.start=function(a){this.Q.start(a)};T.prototype.update=function(a,b){this.Q.update(a,b);return false};
function xa(){}xa.prototype.start=f();xa.prototype.stop=f();xa.prototype.update=function(a,b){b.j();return true};function U(a){this.a=a;this.n=0}U.prototype.stop=function(a){this.n<this.a.length&&this.a[this.n].stop(a)};U.prototype.start=function(a){this.n<this.a.length&&this.a[this.n].start(a)};U.prototype.update=function(a,b){if(this.a[this.n].update(a,b))if(++this.n<this.a.length){this.a[this.n].start(b);return false}else{this.n=0;return true}else return false};function V(a){x.call(this,a);this.Da=false;a=this.element;if(a.className)a.classList.add("button");else a.className="button";this.e(this.element,"touchstart",this);this.e(this.element,"touchend",this);this.e(this.element,"touchcancel",this)}l(V,x);V.prototype.m=f();
V.prototype.handleEvent=function(a){if(m==this.g)switch(a.type){case "touchstart":var b=this.element;if(b.className)b.classList.add("button-down");else b.className="button-down";break;case "touchend":case "touchcancel":if(!a.targetTouches.length){this.element.classList.remove("button-down");this.m()}}a.stopPropagation()};var ya=null;function za(a){ya.game_start(a)};var Aa=true;try{document.createEvent("TouchEvent")}catch(Ba){Aa=false}var Ca=null,Da=0;
function Ea(a){a.preventDefault();var b="";switch(a.type){case "mousedown":b="touchstart";Ca=a.target;break;case "mousemove":if(!Ca)return;b="touchmove";break;case "mouseup":b="touchend";Da++}a={clientX:a.clientX,clientY:a.clientY,identifier:Da,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY,target:Ca};var c=document.createEvent("UIEvent");c.initEvent(b,true,false);c.touches=b=="touchend"?[]:[a];c.targetTouches=b=="touchend"?[]:[a];c.changedTouches=[a];Ca.dispatchEvent(c);if(b=="touchend")Ca=
null};function Fa(a,b){if(b)return a.replace(Ga,"&amp;").replace(Ha,"&lt;").replace(Ia,"&gt;").replace(Ja,"&quot;");else{if(!Ka.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(Ga,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(Ha,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(Ia,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(Ja,"&quot;");return a}}var Ga=/&/g,Ha=/</g,Ia=/>/g,Ja=/\"/g,Ka=/[&<>\"]/;
function La(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),k=Math.max(d.length,e.length),h=0;c==0&&h<k;h++){var t=d[h]||"",L=e[h]||"",M=RegExp("(\\d*)(\\D*)","g"),da=RegExp("(\\d*)(\\D*)","g");do{var N=M.exec(t)||["","",""],ea=da.exec(L)||["","",""];if(N[0].length==0&&ea[0].length==0)break;c=Ma(N[1].length==0?0:parseInt(N[1],10),ea[1].length==0?0:parseInt(ea[1],10))||Ma(N[2].length==0,ea[2].length==0)||Ma(N[2],
ea[2])}while(c==0)}return c}function Ma(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var W,Na,Oa,Pa;"ScriptEngine"in i&&i.ScriptEngine()=="JScript"&&(i.ScriptEngineMajorVersion(),i.ScriptEngineMinorVersion(),i.ScriptEngineBuildVersion());function Qa(){return i.navigator?i.navigator.userAgent:null}Pa=Oa=Na=W=false;var Ra;if(Ra=Qa()){var Sa=i.navigator;W=Ra.indexOf("Opera")==0;Na=!W&&Ra.indexOf("MSIE")!=-1;Oa=!W&&Ra.indexOf("WebKit")!=-1;Pa=!W&&!Oa&&Sa.product=="Gecko"}var Ta=Na,Ua=Pa,Va=Oa,Wa;
a:{var Xa="",Ya;if(W&&i.opera){var Za=i.opera.version;Xa=typeof Za=="function"?Za():Za}else{if(Ua)Ya=/rv\:([^\);]+)(\)|;)/;else if(Ta)Ya=/MSIE\s+([^\);]+)(\)|;)/;else if(Va)Ya=/WebKit\/(\S+)/;if(Ya){var $a=Ya.exec(Qa());Xa=$a?$a[1]:""}}if(Ta){var ab,bb=i.document;ab=bb?bb.documentMode:undefined;if(ab>parseFloat(Xa)){Wa=String(ab);break a}}Wa=Xa}var cb={};!Ta||cb["9"]||(cb["9"]=La(Wa,"9")>=0);Ta&&(cb["9"]||(cb["9"]=La(Wa,"9")>=0));function db(a){return'<div class="label-gameover"><div>Score: <span class="stat">'+Fa(String(a.f))+'</span></div><div>Level: <span class="stat">'+Fa(String(a.h))+"</span></div><div>Judges say... "+(a.f<10?'<span class="rating0">Awful</span>':a.f<1E3?'<span class="rating1">Weak</span>':a.f<5E3?'<span class="rating2">OK</span>':a.f<12E3?'<span class="rating3">Good</span>':a.f<2E4?'<span class="rating4">Super</span>':a.f<3E4?'<span class="rating5">Marvellous</span>':'<span class="rating6">Blockstar</span>')+
"</div>"+(a.ma?'<div class="label-highscore">It\'s a new high score!</div>':"")+'</div><div class="button-replay button-big">Replay</div><div class="button-quit button-big">Main Menu</div>'}
function eb(a){var b='<div class="scoremenu">';a=a.Aa;var c=a.length;if(c>0)for(var d=0;d<c;d++){var e=a[d];b+='<div class="'+(d==0?"label-highscore":"")+'">'+Fa(String(e.f))+" pts, "+Fa(String(e.ea))+"</div>"}else b+=" <div>No scores recorded yet!</div>";b+='<div class="button-back button-big">Back</div></div>';return b};function X(a,b){this.color=a;this.coords=b}var Y=[new X(1,[[-1,-1],[-1,0],[0,0],[0,-1]]),new X(6,[[-2,0],[-1,0],[0,0],[1,0]]),new X(2,[[0,-1],[1,-1],[0,0],[-1,0]]),new X(0,[[0,-1],[-1,-1],[0,0],[1,0]]),new X(4,[[-1,-1],[-1,0],[0,0],[1,0]]),new X(3,[[1,-1],[-1,0],[0,0],[1,0]]),new X(5,[[0,-1],[-1,0],[0,0],[1,0]])];
X.prototype.rotate=function(){if(this==Y[0])return null;else{for(var a=[],b=0;b<this.coords.length;++b){var c=this.coords[b];q(a,[-c[1],c[0]])}a=new X(this.color,a);a.x=this.x;a.y=this.y;return a}};function fb(){this.A={}}l(fb,ra);function gb(a){a.k=[];a.$=true;var b=o()*Y.length;a.N=Y[b|0];a.aa=0;a.f=0;a.h=1;a.dispatchEvent(7);a.dispatchEvent(6);hb(a)}
function ib(a){if(a.$&&!jb(a,0,1)){for(var b=0;b<a.b.coords.length;++b){var c=a.b.coords[b];a.k[(a.b.y+c[1])*10+(a.b.x+c[0])]=true}a.dispatchEvent(2,a.b);b=[];c=0;a:for(;c<a.b.coords.length;++c){var d=a.b.y+a.b.coords[c][1];if(!(b.indexOf(d)>=0)){for(var e=0;e<10;++e)if(!a.k[d*10+e])continue a;q(b,d)}}if(b.length){b.sort();for(c=0;c<b.length;++c)for(d=b[c];d>0;){for(e=0;e<10;++e)a.k[d*10+e]=a.k[(d-1)*10+e];--d}b.reverse();c=b.length;a.f+=a.h*[40,100,300,1200][c-1];a.aa+=c;c=1+(a.aa/4|0);if(c!=a.h){a.h=
c;a.dispatchEvent(7)}a.dispatchEvent(5,b);a.dispatchEvent(6)}hb(a)}}fb.prototype.rotate=function(){var a=this.b.rotate();if(a&&kb(this,a)){this.b=a;this.dispatchEvent(3,this.b)}};function lb(a){for(;kb(a,a.b);)a.b.y+=1;a.b.y-=1;a.dispatchEvent(1,a.b);ib(a)}function jb(a,b,c){for(var d=a.b.x+b,e=a.b.y+c,k=0;k<a.b.coords.length;++k){var h=a.b.coords[k];if(d+h[0]<0||d+h[0]>=10||e+h[1]<0||e+h[1]>=20||a.k[(e+h[1])*10+(d+h[0])])return false}a.b.x=d;a.b.y=e;a.dispatchEvent(0,a.b,b,c);return true}
function kb(a,b){for(var c=0;c<b.coords.length;++c){var d=b.coords[c];if(b.x+d[0]<0||b.x+d[0]>=10||b.y+d[1]<0||b.y+d[1]>=20||a.k[(b.y+d[1])*10+(b.x+d[0])])return false}return true}function hb(a){a.b=a.N;a.b.x=5;a.b.y=2;var b=o()*Y.length;a.N=Y[b|0];if(kb(a,a.b))a.dispatchEvent(4,a.b,a.N);else{a.$=false;a.dispatchEvent(8)}};function mb(a){var b=r("block");b.style.backgroundPosition=-Z*a+"px 0";return b};var $;function nb(){B.call(this);this.k=[];this.t=new B;D(this,this.t);this.e($,0,j(this.ra,this));this.e($,1,j(this.qa,this));this.e($,4,j(this.J,this));this.e($,5,j(this.va,this));this.e($,3,j(this.ta,this));this.e($,2,j(this.sa,this))}l(nb,B);var Z=20;g=nb.prototype;g.ra=function(a){A(this.t,Z*a.x,Z*a.y)};
g.qa=function(){D(this,this.i);this.element.insertBefore(this.i.element,this.element.childNodes[0]);A(this.i,this.t.x,this.t.y);var a=this.i;a.B=10;y(a);this.i.element.style.opacity="0.2";this.i.c(ia(0,500,0.5));this.i.c(new U([w("opacity","0",0.5),new xa]));this.i=null};g.ta=function(a){this.J(a);a=this.i;a.rotation=-90;y(a);this.i.c(ha(90,0.1))};g.sa=function(a){for(var b=0;b<a.coords.length;++b){var c=a.coords[b],d=new x(mb(a.color)),e=a.x+c[0];c=a.y+c[1];this.k[c*10+e]=d;A(d,e*Z,c*Z);D(this,d)}};
g.J=function(a){this.i&&this.i.j();this.i=new ob(a);A(this.t,a.x*Z,a.y*Z);D(this.t,this.i)};
g.va=function(a){var b=[],c=new B;a.push(0);for(var d=[],e=0,k=a.length-1;e<k;++e){var h=a[e],t=new x(r("explosion"));A(t,0,h*Z);D(c,t);for(var L=0;L<10;++L)(t=this.k[h*10+L])&&q(b,t);h=h-1;if(h>a[e+1]){L=Math.sqrt(e+1)/4;do{for(var M=0;M<10;++M){this.k[10*(h+e+1)+M]=this.k[10*h+M];(t=this.k[10*h+M])&&q(d,ja(t.x,(h+e+1)*Z,L,t))}--h}while(h>a[e+1])}}c.element.style.opacity="0";D(this,c);this.c(new U([w("opacity","0.8",0.5,c),new Q(function(){for(var da=0,N=b.length;da<N;++da)b[da].j();c.j()}),new S(d)]))};function pb(a,b){b=b||Date.now();var c=b-a;if(c<6E4)return"just now";if(c<12E4)return"one minute ago";if(c<36E5)return Math.round(c/6E4)+" minutes ago";if(c<54E5)return"one hour ago";if(c<864E5)return Math.round(c/36E5)+" hours ago";if(c<1728E5)return"yesterday";if(c<2592E6)return Math.round(c/864E5)+" days ago";if(c<3888E6)return"one month ago";if(c<31104E6)return Math.round(c/2592E6)+" months ago";if(c<62208E6)return"one year ago";return Math.round(c/31104E6)+" years ago"};function qb(a){P.call(this,"transition");this.Z=a}l(qb,P);qb.prototype.load=function(){var a=this.Z,b=0;if(b<0){b+=I.length;if(b<0)b=0}else if(b>I.length)b=I.length;if(m&&I[b]==m){m.q();m=a}I.splice(b,0,a);a.load();m==a&&a.p()};qb.prototype.complete=function(){ua(this.Z)};function rb(a){P.call(this,"mainmenu");this.da=a}l(rb,P);
rb.prototype.load=function(){var a=s('<div class="credits">by b_garcia <img src="static/twitter.png"></div><div class="ui-attract"></div>');this.d.element.appendChild(a);var b=new B;C(this,b,a.querySelector(".ui-attract"));b.c(new T(new U([new Q(function(){var c;c=o()*Y.length;c=Y[c|0];if(c!=Y[0]){var d=0,e;for(e=o()*4+0|0;d<e;++d)c=c.rotate()}c=new ob(c);d=o()*320+0;A(c,d|0,450);d=o()*4+1;na(c,2/d);c.c(new U([ia(0,-480,d),new xa]));D(b,c)}),new R(0.1)])));sb(this,false)};
function sb(a,b){var c=new B(s('<div class="mainmenu"><div class="button-play button-big">Play</div><div class="button-scores button-big">Scores</div></div>'));C(a,c);var d=c.element.offsetHeight;if(b||a.da){z(c,-d);c.c(u(0,0,0.5))}var e=new V(c.element.querySelector(".button-play"));e.m=function(){var k=m,h=new tb;z(h.d,416);var t=new qb(h);q(t.r,k);t.c(new U([new S([v(0,-416,1,k.d),w("opacity","0.2",0.5,k.d),v(0,0,1,h.d)]),new Q(function(){t.complete()})]));O(t)};e.s(a);e=new V(c.element.querySelector(".button-scores"));
e.m=function(){c.c(new U([u(0,-d,0.5),new Q(function(){var k=c.g;c.j();ub(k)})]))};e.s(a)}function ub(a){var b;if("scores"in n){var c=Date.now();b=n.scores.map(function(k){return{f:k.score,ea:pb(k.date,c)}})}else b=[];var d=new B(s(eb({Aa:b})));C(a,d);var e=d.element.offsetHeight;b=new V(d.element.querySelector(".button-back"));b.m=function(){d.c(new U([u(0,-e,0.5),new Q(function(){var k=d.g;d.j();sb(k,true)})]))};b.s(a);z(d,-e);d.c(u(0,0,0.5))}
function vb(){var a=m,b=new rb(true);z(b.d,-416);var c=new qb(b);c.c(new U([new S([v(0,416,1,a.d),w("opacity","0.2",0.5,a.d),v(0,0,1,b.d)]),new Q(function(){c.complete()})]));return c};function wb(){P.call(this,"pause")}l(wb,P);
wb.prototype.load=function(){var a=s('<div class="label-pause">PAUSED</div><div class="button-resume button-big">Continue</div><div class="button-quit button-big">Main Menu</div>');this.d.element.appendChild(a);A(this.d,-320,100);this.d.element.style.setProperty("opacity","0","");this.c(v(0,100,0.2));this.c(w("opacity","1",0.2));var b=this,c=new V(a.querySelector(".button-resume"));c.m=function(){b.c(new U([w("opacity","0",0.2),new Q(K)]))};C(this,c,null);a=new V(a.querySelector(".button-quit"));
a.m=function(){ya.game_end();K();O(vb())};C(this,a,null)};function xb(){B.call(this,r("marquee"));this.label=new x(r("marquee-text"));D(this,this.label);this.element.style.setProperty("opacity","0","")}l(xb,B);function yb(a,b){a.K();ma(a.label,200);a.label.element.innerHTML=b;setTimeout(function(){var c=a.label.element.offsetWidth;a.c(new U([w("opacity","1",0.5),v(-c,0,(c+200)/100,a.label),w("opacity","0",0.5)]))},0)};function zb(){P.call(this,"gameover")}l(zb,P);
zb.prototype.load=function(){ya.game_end();n.lastGame=Date.now();var a=n.scores;a||(n.scores=a=[]);for(var b=0;b<a.length;++b)if(a[b].score<$.f)break;a.splice(b,0,{date:Date.now(),score:$.f});if(a.length>10)a.length=10;try{localStorage["hydra:tetris"]=JSON.stringify(n)||null}catch(c){}a=s(db({f:$.f,h:$.h,ma:b==0}));this.d.element.appendChild(a);A(this.d,320,100);this.d.element.style.setProperty("opacity","0","");this.c(v(0,100,0.2));this.c(w("opacity","1",0.2));b=new V(a.querySelector(".button-replay"));
b.m=function(){ua(new tb)};C(this,b,null);a=new V(a.querySelector(".button-quit"));a.m=function(){K();O(vb())};C(this,a,null)};function ob(a){x.call(this);for(var b=0;b<a.coords.length;++b){var c=a.coords[b],d=mb(a.color);d.style.left=c[0]*Z+"px";d.style.top=c[1]*Z+"px";this.element.appendChild(d)}}l(ob,x);function tb(){P.call(this,"playing")}l(tb,P);g=tb.prototype;
g.load=function(){var a=this;za(function(){var b=s('<div class="ui-board"></div><div class="ui-preview"></div><div class="ui-score"></div><div class="ui-level"></div><div class="button-pause"></div>');a.f=new x(b.querySelector(".ui-score"));C(a,a.f,null);a.Ca=b.querySelector(".ui-preview");a.h=new x(b.querySelector(".ui-level"));C(a,a.h,null);a.d.element.appendChild(b);var c=new V(b.querySelector(".button-pause"));c.m=function(){O(new wb)};C(a,c,null);$=new fb;b=b.querySelector(".ui-board");a.I=new xb;
z(a.I,40);"lastGame"in n||yb(a.I,Aa?"&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Welcome to Block Dream!&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;DRAG your finger to move.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;TAP to rotate.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;FLICK down to drop!":"&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Welcome to Block Dream!&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Use the arrow keys to move.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;UP key to rotate.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;DOWN key to drop!");
C(a,a.I,b);c=new nb;C(a,c,b);a.e($,8,j(a.na,a));a.e($,4,j(a.J,a));a.e($,6,j(a.wa,a));a.e($,7,j(a.pa,a));a.e(window,"keydown",j(a.oa,a));a.F=0;a.e(window,"touchstart",j(a.za,a));a.e(window,"touchmove",j(a.ya,a));a.e(window,"touchend",j(a.xa,a));a.ba=new R(1);a.c(new T(new U([a.ba,new Q(function(){ib($)})])));gb($)})};g.na=function(){O(new zb)};g.J=function(a,b){this.O&&this.O.j();this.O=new ob(b);C(this,this.O,this.Ca)};
g.wa=function(){this.f.element.textContent=String($.f);if($.f>0){na(this.f,2);this.f.c(ga(1,1,1))}};g.pa=function(){this.ba.V=1E3/$.h;this.h.element.textContent="LVL "+$.h;if($.h>1){yb(this.I,"Level "+Fa(String($.h)));na(this.h,2);this.h.c(ga(1,1,1))}};g.oa=function(a){if(m==this){switch(a.keyCode){case 27:O(new wb);break;case 37:jb($,-1,0);break;case 39:jb($,1,0);break;case 38:$.rotate();break;case 40:lb($);break;default:return}a.preventDefault()}};
g.za=function(a){if(m==this){var b=a.touches[0];this.X=b.clientX;this.F=1;this.R=b.clientY;this.M=a.timeStamp;this.S=this.ca=null}};g.ya=function(a){if(m==this){var b=a.touches[0];this.ca=this.R;this.S=this.M;this.R=b.clientY;this.M=a.timeStamp;a=b.clientX-this.X;if(a>Z)jb($,1,0);else if(a<-Z)jb($,-1,0);else return;this.X=b.clientX;this.F=2}};g.xa=function(){if(m==this){if(this.S&&(this.R-this.ca)/(this.M-this.S)>0.25)lb($);else this.F==1&&$.rotate();this.M=this.F=0}};function Ab(){P.call(this,"orientation")}l(Ab,P);Ab.prototype.load=function(){this.d.element.appendChild(s("Rotate your device to play!"));this.e(window,"orientationchange",function(){document.body.offsetWidth>320&&document.body.offsetHeight<416||K()})};if(!Aa){document.addEventListener("mousemove",Ea,true);document.addEventListener("mouseup",Ea,true);document.addEventListener("mousedown",Ea,true)}var Bb;try{Bb=JSON.parse(localStorage["hydra:tetris"]||null)}catch(Cb){Bb=null}n=Bb||{};
(function(a,b){window.vipgames.api.register({game_id:a,load:function(c){ya=c;c.game_load({getScores:b.ja,stop:function(){ua(b.Y())},unload:wa},function(){var d=document.createElement("div");d.id="hydra-stage";c.getScene().appendChild(d);J=d;d=b.Y();O(d);aa=Date.now();ba=setInterval(va,1E3/30);b.ua()})}})})("bruno.blockdream",{Y:function(){return new rb(false)},ja:function(){return $!=null?$.f:0},ua:function(){function a(){(document.body.offsetWidth>320&&document.body.offsetHeight<416)&!(m instanceof
Ab)&&O(new Ab)}var b=new P("intro"),c=new x(r("darkness"));c.c(new U([ka("opacity","0",1),new Q(K)]));C(b,c);O(b);window.addEventListener("orientationchange",a,false);a();window.addEventListener("resize",function(){window.setTimeout(window.scrollTo,0,1,0)},false);document.addEventListener("touchstart",function(d){d.preventDefault();window.scrollTo(0,1)},true);window.scrollTo(0,1)}});})()
