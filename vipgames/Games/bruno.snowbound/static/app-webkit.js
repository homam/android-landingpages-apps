/* Built with Hydra */(function(){function g(){return function(){}}var h;
function aa(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b==
"function"&&typeof a.call=="undefined")return"object";return b}function i(a,b){function c(){}c.prototype=b.prototype;a.r=b.prototype;a.prototype=new c};var j,ba,ca,k;var l=Math.random;function m(a,b,c,d){return b+(c-b)*(a/d)}function da(a,b,c,d){a/=d;return(c-b)*a*a+b};function ea(a,b){var c=a.indexOf(b);if(c>=0){a.splice(c,1);return true}else return false};function fa(a,b,c,d){var e=a.getPropertyValue("-webkit-transition-property");if(e){var f=e.split(", ").indexOf(b);if(f<0){a.setProperty("-webkit-transition-property",e+", "+b,"");a.setProperty("-webkit-transition-duration",a.getPropertyValue("-webkit-transition-duration")+", "+c,"");a.setProperty("-webkit-transition-timing-function",a.getPropertyValue("-webkit-transition-timing-function")+", "+d,"")}else{b=a.getPropertyValue("-webkit-transition-duration").split(", ");b[f]=c;a.setProperty("-webkit-transition-duration",
b.join(", "),"");c=a.getPropertyValue("-webkit-transition-timing-function").split(", ");c[f]=d;a.setProperty("-webkit-transition-timing-function",c.join(", "),"")}}else{a.setProperty("-webkit-transition-property",b,"");a.setProperty("-webkit-transition-duration",c,"");a.setProperty("-webkit-transition-timing-function",d,"")}}
function ga(a,b){var c=a.getPropertyValue("-webkit-transition-property");if(c){var d=c.split(", ");c=d.indexOf(b);if(c>=0)if(d.length>1){d.splice(c,1);a.setProperty("-webkit-transition-property",d.join(", "),"");d=a.getPropertyValue("-webkit-transition-duration").split(", ");d.splice(c,1);a.setProperty("-webkit-transition-duration",d.join(", "),"");d=a.getPropertyValue("-webkit-transition-timing-function").split(", ");d.splice(c,1);a.setProperty("-webkit-transition-timing-function",d.join(", "),"")}else{a.setProperty("-webkit-transition-property",
"","");a.setProperty("-webkit-transition-duration","","");a.setProperty("-webkit-transition-timing-function","","")}}}function n(a){var b=document.createElement("div");b.className=a;return b}function ha(a){var b=document.createElement("div");b.innerHTML=a;if(b.childElementCount==1)b=b.firstElementChild;return b};function o(a){p.call(this);this.element=a||document.createElement("div");this.y=this.x=0;this.C=this.w=1;this.rotation=0}i(o,p);o.prototype.detach=function(){if(this.parent){if(ea(this.parent.p,this)){this.parent=null;this.detach()}}else this.element.parentNode&&this.element.parentNode.removeChild(this.element)};o.prototype.q=function(){o.r.q.call(this);this.detach();this.element=null};function ia(a,b){a.y=b;q(a)}function r(a,b,c){a.x=b;a.y=c;q(a)}function ja(a,b){a.w=b;q(a)}
function q(a){a.element.style.webkitTransform="translate3d("+a.x+"px,"+a.y+"px,0)rotate("+a.rotation+"deg)scale("+a.w+","+a.C+")"}function ka(a,b,c){b=new WebKitPoint(b,c);return window.webkitConvertPointFromPageToNode(a.element,b)}function s(a){o.call(this,a);this.p=[]}i(s,o);s.prototype.S=function(a){s.r.S.call(this,a);for(var b=0;b<this.p.length;++b)t(a,this.p[b],null)};s.prototype.q=function(){s.r.q.call(this);for(var a=0;a<this.p.length;++a){var b=this.p[a];b.parent=null;b.q()}};
function la(a,b){if(a.g!=null&&b.g==null)t(a.g,b,a);else{if(b.parent!=null)if(ea(b.parent.p,b)){b.parent=null;b.detach()}var c=a.p;c[c.length]=b;b.parent=a;a.element.appendChild(b.element)}}function u(a,b,c,d){this.i=a;this.duration=1E3*b;this.ba=c;this.Z=d;this.z=ma;this.c=0}var ma=0;u.prototype.B=g();function v(a,b,c){return a.W(a.c,b,c,a.duration)}u.prototype.handleEvent=function(a){if(a.propertyName==this.i){this.z=2;a.target.removeEventListener("webkitTransitionEnd",this,false)}};
u.prototype.update=function(a,b){b=this.Z||b;switch(this.z){case 1:this.c+=a;if(this.c>this.duration)this.c=this.duration;this.B(b);return false;case ma:var c=window.getComputedStyle(b.element,null).getPropertyValue(this.i);this.F(b);if(c!=b.element.style.getPropertyValue(this.i)){this.z=1;fa(b.element.style,this.i,this.duration+"ms",this.ba);b.element.addEventListener("webkitTransitionEnd",this,false);this.c=0;this.B(b);return false}else return true;case 2:this.z=ma;ga(b.element.style,this.i);this.c=
this.duration;this.B(b);return true}};u.prototype.stop=function(a){if(this.z==1){a=this.Z||a;var b=window.getComputedStyle(a.element,null).getPropertyValue(this.i);ga(a.element.style,this.i);a.element.removeEventListener("webkitTransitionEnd",this,false);a.element.style.setProperty(this.i,b,"")}};
u.prototype.start=function(a){if(this.z==1){a=this.Z||a;var b=window.getComputedStyle(a.element,null).getPropertyValue(this.i);this.F(a);if(b!=a.element.style.getPropertyValue(this.i)){fa(a.element.style,this.i,this.duration-this.c+"ms",this.ba);a.element.addEventListener("webkitTransitionEnd",this,false)}else this.z=2}};function w(a,b,c,d,e){u.call(this,a,c,d,e);this.value=b}i(w,u);w.prototype.F=function(a){a.element.style.setProperty(this.i,this.value,"")};
function x(a,b,c,d,e,f){u.call(this,"-webkit-transform",c,d,f);this.x=a;this.y=b;this.W=e}i(x,u);x.prototype.F=function(a){this.U=a.x;this.V=a.y;a.x=this.x;a.y=this.y;q(a)};x.prototype.B=function(a){a.x=v(this,this.U,this.x);a.y=v(this,this.V,this.y)};function y(a,b,c,d,e,f){u.call(this,"-webkit-transform",c,d,f);this.x=a;this.y=b;this.W=e}i(y,u);y.prototype.F=function(a){this.U=a.w;this.V=a.C;a.w=this.x;a.C=this.y;q(a)};y.prototype.B=function(a){a.w=v(this,this.U,this.x);a.C=v(this,this.V,this.y)};
function z(a,b,c,d,e){u.call(this,"-webkit-transform",b,c,e);this.rotation=a;this.W=d}i(z,u);z.prototype.F=function(a){this.ma=a.rotation;a.rotation=this.rotation;q(a)};z.prototype.B=function(a){a.rotation=v(this,this.ma,this.rotation)};function A(a,b,c,d){return new x(a,b,c,"linear",m,d)}function B(a){this.duration=1E3*a;this.c=0;this.Q=false}B.prototype.start=g();B.prototype.stop=g();
B.prototype.update=function(a,b){this.c+=a;if(this.c>=this.duration){this.c=0;this.Q=false;b.element.style.visibility="";return true}else{b.element.style.visibility=this.Q?"":"hidden";this.Q=!this.Q;return false}};function na(){this.O=[]}na.prototype.h=function(a,b,c){var d=this.O;d[d.length]=new oa(a,b,c);a.addEventListener(b,c,false)};na.prototype.J=function(){for(var a=0;a<this.O.length;++a){var b=this.O[a];b.ia.removeEventListener(b.ka,b.oa,false)}this.O=[]};function oa(a,b,c){this.ia=a;this.ka=b;this.oa=c};var C=[],D=document.getElementById("hydra-stage");function pa(a){var b=C.pop();j=C[C.length]=a;if(b){b.o();b.R()}a.load();a.n()}function qa(a){if(a!=j){j&&j.o();for(var b=C.length-1;b>=0;--b){var c=C[b];if(a!=c){--C.length;c.R()}else{j=c;a.n();return}}C=[a];j=a;a.load();a.n()}}function E(a){j&&j.o();j=C[C.length]=a;a.load();a.n()}function ra(){var a=Date.now();j.update(a-ba);ba=a}
function sa(){if(D!=null){D.parentNode.removeChild(D);for(D=null;C.length>0;){var a=C.pop();a.o();a.R()}j=null;clearInterval(ca)}}function p(){this.b=[];this.g=null}h=p.prototype;h.h=function(a,b,c){if(!this.N)this.N=new na;this.N.h(a,b,c)};h.J=function(){this.N&&this.N.J()};h.f=function(a){if(this.b.length==0&&this.g!=null){var b=this.g.D;b[b.length]=this}b=this.b;b[b.length]=a;a.start(this)};h.t=function(){for(var a=0;a<this.b.length;++a){var b=this.b[a];if(b){b.stop(this);this.b[a]=null}}};
h.S=function(a){this.g=a;if(this.b.length>0){a=this.g.D;a[a.length]=this}};h.update=function(a){for(var b=0;b<this.b.length;++b){var c=this.b[b];if(!c||c.update(a,this))this.b.splice(b--,1)}return b==0};h.q=function(){this.t();this.J();if(this.g!=null){ea(this.g.entities,this);this.g=null}};h.n=function(){for(var a=0;a<this.b.length;++a){var b=this.b[a];b&&b.start(this)}};h.o=function(){for(var a=0;a<this.b.length;++a){var b=this.b[a];b&&b.stop(this)}};
function F(a){this.entities=[];this.D=[];this.name=a;this.j=new s(n("scene scene-"+a));t(this,this.j,D)}h=F.prototype;h.update=function(a){for(var b=0;b<this.D.length;++b){var c=this.D[b];if(!c||c.update(a))this.D.splice(b--,1)}};function t(a,b,c){if(!b.g){var d=a.entities;d[d.length]=b;b.S(a);if(b instanceof o)if(c instanceof HTMLElement)c.appendChild(b.element);else if(c!==null){c=c||a.j;la(c,b)}}}h.load=g();
h.R=function(){for(var a=0;a<this.entities.length;++a){var b=this.entities[a];if(b.g!=null){b.g=null;b.q()}}this.entities=[];this.D=[]};h.n=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].n()};h.o=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].o()};h.h=function(a,b,c){this.j.h(a,b,c)};h.J=function(){this.j.J()};h.f=function(a){this.j.f(a)};h.t=function(){this.j.t()};function G(a){this.la=a}G.prototype.start=g();G.prototype.stop=g();G.prototype.update=function(a,b){this.la(a,b);return true};function H(a){this.u=1E3*a;this.c=0}H.prototype.start=g();H.prototype.stop=g();H.prototype.update=function(a){this.c+=a;if(this.c>=this.u){this.c=0;return true}else return false};function I(a){this.b=a;this.K=[]}I.prototype.stop=function(a){for(var b=0;b<this.b.length;++b){var c=this.b[b];c&&c.stop(a)}};
I.prototype.start=function(a){for(var b=0;b<this.b.length;++b){var c=this.b[b];c&&c.start(a)}};I.prototype.update=function(a,b){for(var c=0;c<this.b.length;++c){var d=this.b[c];if(d&&d.update(a,b)){this.b[c]=null;var e=this.K;e[e.length]=d}}if(this.K.length==this.b.length){this.b=this.K;this.K=[];return true}else return false};function J(a){this.$=a}J.prototype.stop=function(a){this.$.stop(a)};J.prototype.start=function(a){this.$.start(a)};J.prototype.update=function(a,b){this.$.update(a,b);return false};
function K(){}K.prototype.start=g();K.prototype.stop=g();K.prototype.update=function(a,b){b.q();return true};function L(a){this.b=a;this.s=0}L.prototype.stop=function(a){this.s<this.b.length&&this.b[this.s].stop(a)};L.prototype.start=function(a){this.s<this.b.length&&this.b[this.s].start(a)};L.prototype.update=function(a,b){if(this.b[this.s].update(a,b))if(++this.s<this.b.length){this.b[this.s].start(b);return false}else{this.s=0;return true}else return false};
function M(a,b,c){this.i=a;this.value=b;this.ja=c}M.prototype.start=g();M.prototype.stop=g();M.prototype.update=function(a,b){b=this.ja||b;b.element.style.setProperty(this.i,this.value);return true};function ta(a){return eval("("+a+")")}function ua(a){var b=[];va(new wa,a,b);return b.join("")}function wa(){}
function va(a,b,c){switch(typeof b){case "string":xa(a,b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==null){c.push("null");break}if(aa(b)=="array"){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++){c.push(e);va(a,b[f],c);e=","}c.push("]");break}c.push("{");d="";for(e in b)if(b.hasOwnProperty(e)){f=b[e];if(typeof f!="function"){c.push(d);xa(a,e,c);c.push(":");va(a,f,c);d=","}}c.push("}");
break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var ya={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},za=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function xa(a,b,c){c.push('"',b.replace(za,function(d){if(d in ya)return ya[d];var e=d.charCodeAt(0),f="\\u";if(e<16)f+="000";else if(e<256)f+="00";else if(e<4096)f+="0";return ya[d]=f+e.toString(16)}),'"')};"JSON"in window||(JSON={parse:ta,stringify:ua});"localStorage"in window||(localStorage={});function N(a){p.call(this);this.m=document.createElement("audio");this.m.addEventListener("ended",HTMLAudioElement.prototype.play,false);this.m.autoplay=false;this.m.src=a;this.m.load();this.enabled=true}i(N,p);N.prototype.q=function(){N.r.q.call(this);this.m.pause();this.m=null};N.prototype.o=function(){N.r.o.call(this);this.m.pause()};N.prototype.n=function(){N.r.n.call(this);this.enabled&&this.m.play()};
function Aa(a,b){if(a.g!=null)if(b&&!a.enabled)a.m.play();else!b&&a.enabled&&a.m.pause();a.enabled=b};var Ba=null;function Ca(a){Ba.game_start(a)};function O(a){o.call(this,a);this.aa=false;a=this.element;if(a.className)(" "+a.className+" ").indexOf(" button ")>=0||(a.className+=" button");else a.className="button";this.h(this.element,"touchstart",this);this.h(this.element,"touchend",this);this.h(this.element,"touchcancel",this)}i(O,o);O.prototype.v=g();
function Da(a,b){if(a.aa=b){var c=a.element;if(c.className)(" "+c.className+" ").indexOf(" button-down ")>=0||(c.className+=" button-down");else c.className="button-down"}else{c=a.element;var d=c.className.split(" "),e=d.indexOf("button-down");if(e>=0){d.splice(e,1);c.className=d.join(" ")}}}
O.prototype.handleEvent=function(a){if(j==this.g)switch(a.type){case "touchstart":var b=this.element;if(b.className)(" "+b.className+" ").indexOf(" button-down ")>=0||(b.className+=" button-down");else b.className="button-down";break;case "touchend":case "touchcancel":if(!a.targetTouches.length){b=this.element;var c=b.className.split(" "),d=c.indexOf("button-down");if(d>=0){c.splice(d,1);b.className=c.join(" ")}this.v()}}a.stopPropagation()};var Ea=true;try{document.createEvent("TouchEvent")}catch(Fa){Ea=false}var P=null,Ga=0;
function Ha(a){a.preventDefault();var b="";switch(a.type){case "mousedown":b="touchstart";P=a.target;break;case "mousemove":if(!P)return;b="touchmove";break;case "mouseup":b="touchend";Ga++}a={clientX:a.clientX,clientY:a.clientY,identifier:Ga,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY,target:P};var c=document.createEvent("UIEvent");c.initEvent(b,true,false);c.type=b;c.touches=b=="touchend"?[]:[a];c.targetTouches=b=="touchend"?[]:[a];c.changedTouches=[a];P.dispatchEvent(c);if(b==
"touchend")P=null};function Q(a){F.call(this,"transition");this.P=a}i(Q,F);Q.prototype.load=function(){var a=this.P,b=0;if(b<0){b+=C.length;if(b<0)b=0}else if(b>C.length)b=C.length;if(j&&C[b]==j){j.o();j=a}C.splice(b,0,a);a.load();j==a&&a.n()};Q.prototype.complete=function(){qa(this.P)};var Ja=0,Ka=false,R=0;
function S(){F.call(this,"playing");this.G=[];var a=this;Ea?this.h(document.body,"touchmove",function(e){e=e.touches[0];e=ka(a.j,e.pageX,e.pageY);La(a,e.x)}):this.h(document.body,"mousemove",function(e){e=ka(a.j,e.pageX,e.pageY);La(a,e.x)});this.h(window,"devicemotion",function(e){Ja=Math.max(-10,Math.min(5*e.accelerationIncludingGravity.x,10))});this.h(document.body,"touchstart",function(){Ka=true});this.h(document.body,"touchend",function(e){Ka=e.touches.length>0});this.k=0;this.fa=new H(1);this.left=
true;this.f(new J(new L([new G(function(){var e;e=l();if(e<0.02)e=new T;else if(e<0.02+0.1)e=new U;else if(e<0.02+0.1+0.1){e=new V(a.left);a.left=!a.left}else e=new W;Ma(a,e)}),this.fa])));this.Y=new o(n("life"));Na(this,3);t(this,this.Y);this.ga=new o(n("speed"));t(this,this.ga);this.ea=new o(n("score"));X(this,0);t(this,this.ea);this.l=new o(n("combo"));Oa(this,0);t(this,this.l);var b=new O(n("pause-button"));b.v=function(){var e=new o(n("paused"));e.element.textContent="PAUSED";e.f(new J(new L([new H(0.8),
new M("visibility","hidden"),new H(0.4),new M("visibility","")])));var f=new F("pause");t(f,e);f.h(window,"touchstart",function(){if(C.length>1){var Ia=C.pop();Ia.o();Ia.R();j=C[C.length-1];j.n()}});E(f)};t(this,b);var c=new O(n("mute-button"));c.v=function(){var e=c.aa;Aa(d,e);k.mute=!e;try{localStorage["hydra:ski"]=JSON.stringify(k)||null}catch(f){}Da(c,!e)};Da(c,k.mute);t(this,c);this.X=1;Pa(this,1);this.c=0;this.qa=true;b=document.createElement("canvas");this.a=b.getContext("2d");b.height=84;
t(this,new o(b));this.h(window,"resize",function(){a.I()});this.I();this.e=new o(n("player"));this.d=new s;la(this.d,this.e);r(this.d,window.innerWidth/2,80);this.M=this.d.x;t(this,this.d);Ma(this,new Y("DANGER"));var d=new N("static/music.mp3");Aa(d,!c.aa);t(this,d)}i(S,F);function Qa(a,b){a.e.element.style.backgroundPosition=b*-48+"px 0"}function La(a,b){if(j==a&&a.k!=3){var c=a.d;c.x=Math.max(0,Math.min(b,window.innerWidth));q(c)}}
S.prototype.I=function(){var a=window.innerWidth;this.a.canvas.width=a;this.a.globalCompositeOperation="copy";this.a.lineWidth=8;this.fa.u=1E3*(64/a)};
S.prototype.update=function(a){S.r.update.call(this,a);!Ka&&Ja!=0&&La(this,this.d.x+Ja);if(this.k!=3){this.c+=a;if(this.c>1E4){this.c-=1E4;var b=new Y("Level "+(this.X+1)),c=this;b.A=function(){var d=c.X+1;c.X=d;Pa(c,0.75+d*0.25)};Ma(this,b)}a=a*window.innerHeight/(1E3*this.u);this.a.drawImage(this.a.canvas,0,-a);this.a.clearRect(0,84-a,this.a.canvas.width,a);if(this.k!=2){this.a.beginPath();this.a.strokeStyle="#909090";this.a.lineCap="butt";this.a.moveTo(this.M,80-a);this.a.lineTo(this.d.x,80);this.a.stroke();
this.a.beginPath();this.a.strokeStyle="#e0e0e0";this.a.lineCap="round";this.a.moveTo(this.M+2,80-a);this.a.lineTo(this.d.x+2,80);this.a.stroke()}if(this.k==0){a=this.d.x-this.M;if(a>0)ja(this.d,1);else a<0&&ja(this.d,-1);Qa(this,a>5||a<-5?1:0)}this.M=this.d.x;for(a=0;a<this.G.length;++a){b=this.G[a];if(b.g!=null)if(this.k==0&&(b.x-this.d.x<0?-(b.x-this.d.x):b.x-this.d.x)<30&&(b.y-this.d.y<0?-(b.y-this.d.y):b.y-this.d.y)<30)b.H(this);else{if(b.y<=80){b.A(this);this.G.splice(a--,1)}}else this.G.splice(a--,
1)}}};function Ra(a){if(a.k!=1){a.k=1;Qa(a,3);a.e.f(new L([new I([new B(1),new L([new x(0,-20,0.2,"ease-out",m,void 0),new x(0,0,0.2,"ease-in",da,void 0)])]),new G(function(){a.k=0})]))}Na(a,a.ca-1)}
function Na(a,b){if(b==0){for(var c=0;c<a.j.p.length;++c)a.j.p[c].t();a.e.t();a.t();k.bestScore=R>(k.bestScore|0)?R:k.bestScore|0;a.d.f(new L([new x(a.d.x,0.5*window.innerHeight,0.5*a.u,"ease-out",m,void 0),new G(function(){var d=new F("gameover"),e=ha("<div class='gameover menu'><div class='gameover-title'>Game Over</div><div class='gameover-body'>Your personal best score is "+k.bestScore+"</div><div class='action-button'>Replay</div><div class='action-button'>Menu</div></div>"),f=new o(e);ia(f,
-20);f.f(A(0,0,1));f.element.style.setProperty("opacity","0","");f.f(new w("opacity","1",1,"linear",void 0));t(d,f);f=new O(e.getElementsByClassName("action-button")[0]);f.v=function(){Ca(function(){pa(new Z(new S))})};t(d,f,null);e=new O(e.getElementsByClassName("action-button")[1]);e.v=function(){pa(new Z(new $))};t(d,e,null);E(d);Ba.game_end()})]));a.e.f(new z(1125,0.5*a.u,"ease-out",m,void 0));Pa(a,0);Oa(a,0);a.k=3}a.ca=b;a.Y.element.style.width=b*16+"px"}
function X(a,b){R=b;a.ea.element.textContent=String(b)}function Oa(a,b){a.l.t();if(b>1){a.l.element.style.opacity="";a.l.element.textContent=b+" Combo!";var c=a.l;c.w=1.2;c.C=1.2;q(c);ia(a.l,0);a.l.f(new y(1,1,0.2,"ease-out",m,void 0))}else if(a.T>b){c=a.l;c.w=1;c.C=1;q(c);a.l.f(A(0,30,0.5));a.l.f(new w("opacity","0",0.5,"linear",void 0))}else a.l.element.style.opacity="0";a.T=b}
function Sa(a){if(a.k!=2){a.k=2;Qa(a,4);a.d.element.style.zIndex="1001";a.e.f(new L([l()<0.5?new y(-2,2,0.5,"ease-in",da,void 0):new y(2,-2,0.5,"ease-in",da,void 0),new y(1,1,0.5,"ease-out",m,void 0),new G(function(){a.k=0;a.d.element.style.zIndex=""})]))}}function Ma(a,b){b.f(new L([A(b.x,-32,a.u),new K]));a.G.push(b);t(a,b)}function Pa(a,b){a.ga.element.textContent=(30*b|0)+" km/h";a.u=3/b}function W(){o.call(this,n("tree"));r(this,l()*window.innerWidth,window.innerHeight+32)}i(W,o);
W.prototype.H=function(a){Ra(a)};W.prototype.A=g();function U(){o.call(this,n("ramp"));r(this,l()*window.innerWidth,window.innerHeight+32)}i(U,o);U.prototype.H=function(a){Sa(a);X(a,R+100)};U.prototype.A=g();function V(a){o.call(this,n(a?"flag-left":"flag-right"));this.left=a;var b=window.innerWidth;r(this,0.4*l()*b+(a?0.1*b:0.5*b),window.innerHeight+32)}i(V,o);V.prototype.H=g();
V.prototype.A=function(a){if(a.d.x<this.x==this.left){this.element.style.backgroundColor="lime";Oa(a,a.T+1);X(a,R+200+10*a.T)}else{this.element.style.backgroundColor="yellow";Oa(a,0)}};function Y(a){o.call(this,n("sign"));this.element.textContent=a;r(this,l()*window.innerWidth,window.innerHeight+32)}i(Y,o);Y.prototype.A=g();Y.prototype.H=g();function T(){s.call(this);this.L=new o(n("candy"));la(this,this.L);r(this,l()*window.innerWidth,window.innerHeight+32)}i(T,s);T.prototype.A=g();
T.prototype.H=function(a){if(this.L){this.t();this.f(new L([A(16,16,1),new K]));this.L.f(new z(1080,1,"linear",m,void 0));this.L=null;var b=a.ca+1;if(b<=3){a.Y.f(new L([new y(1.2,1.2,0.2,"linear",m,void 0),new y(1,1,0.2,"linear",m,void 0)]));Na(a,b)}X(a,R+500)}};function Z(a){Q.call(this,a)}i(Z,Q);
Z.prototype.load=function(){Z.r.load.call(this);var a=C[C.length-2],b=this;this.P.j.element.style.setProperty("visibility","hidden","");var c=new o(n("avalanche"));ia(c,-window.innerHeight);c.f(new L([A(0,0,1),new G(function(){a.j.element.style.setProperty("visibility","hidden","");b.P.j.element.style.setProperty("visibility","","")}),A(0,window.innerHeight,1),new G(function(){b.complete()})]));t(this,c)};function $(){F.call(this,"main")}i($,F);
$.prototype.load=function(){var a=document.createElement("canvas");this.a=a.getContext("2d");t(this,new o(a));this.e=new o(n("player"));this.e.element.style.backgroundPosition="-48px";t(this,this.e);a=ha("<div class='main menu'><div class='logo'></div><div class='action-button'>Play</div><div class='action-button'>Quit</div></div>");t(this,new o(a));var b=new O(a.getElementsByClassName("action-button")[0]);b.v=function(){Ca(function(){E(new Z(new S))})};t(this,b,null);a=new O(a.getElementsByClassName("action-button")[1]);
a.v=function(){if(window.history.length>1)window.history.back();else{window.close();window.location="http://google.com"}};t(this,a,null);t(this,new o(ha("<div class='credit'>by @b_garcia</div>")));this.c=0;Ta(this);var c=this;this.h(window,"resize",function(){c.I()});this.I()};$.prototype.I=function(){this.a.canvas.width=window.innerWidth;this.a.canvas.height=window.innerHeight;this.a.globalCompositeOperation="copy";this.a.lineWidth=8};
function Ta(a){var b=window.innerWidth;b=l()*(b*0.8-b*0.2)+b*0.2;a.ha=b|0;r(a.e,a.ha,0)}
$.prototype.update=function(a){$.r.update.call(this,a);this.c+=a;this.e.y>window.innerHeight&&Ta(this);a=this.ha+window.innerWidth/3*(Math.sin(6.0E-4*this.c)+Math.sin(0.002*this.c));var b=this.e.y+2;this.a.beginPath();this.a.strokeStyle="#909090";this.a.lineCap="butt";this.a.moveTo(this.e.x,this.e.y);this.a.lineTo(a,b);this.a.stroke();this.a.beginPath();this.a.strokeStyle="#e0e0e0";this.a.lineCap="round";this.a.moveTo(this.e.x+2,this.e.y);this.a.lineTo(a+2,b);this.a.stroke();ja(this.e,a>this.e.x?
1:-1);r(this.e,a,b)};var Ua;try{Ua=JSON.parse(localStorage["hydra:ski"]||null)}catch(Va){Ua=null}k=Ua||{};
(function(a,b){window.vipgames.api.register({game_id:a,load:function(c){Ba=c;c.game_load({getScores:b.na,stop:function(){qa(b.da())},unload:sa},function(){var d=document.createElement("div");d.id="hydra-stage";c.getScene().appendChild(d);D=d;d=b.da();E(d);ba=Date.now();ca=setInterval(ra,1E3/30);b.pa()})}})})("bruno.snowbound",{da:function(){return new $},na:function(){return R},pa:function(){if(!Ea){document.addEventListener("mousemove",Ha,true);document.addEventListener("mouseup",Ha,true);document.addEventListener("mousedown",
Ha,true)}window.addEventListener("orientationchange",function(){window.setTimeout(function(){window.scrollTo(0,1);window.innerHeight<416&&alert("Your screen is very small! Try going into portrait mode for a better fit.")},0)},false);document.addEventListener("touchstart",function(a){a.preventDefault();window.scrollTo(0,1)},true);window.scrollTo(0,1)}});})()