/* Built with Hydra */(function(){function h(){return function(){}}var i,j=this;
function aa(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}Math.floor(Math.random()*2147483648).toString(36);function k(a,b){var c=b||j;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}}function l(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c};var m,ba,ca,o;function da(a){return a|0}var p=Math.random;function q(a,b,c,d){return b+(c-b)*(a/d)}function r(a,b,c,d){a/=d;return(c-b)*a*a+b};function ea(a,b){var c=a.indexOf(b);if(c>=0){a.splice(c,1);return true}else return false}function s(a,b){a[a.length]=b};function fa(a,b,c,d){var e=a.getPropertyValue("-webkit-transition-property");if(e){var f=e.split(", ").indexOf(b);if(f<0){a.setProperty("-webkit-transition-property",e+", "+b,"");a.setProperty("-webkit-transition-duration",a.getPropertyValue("-webkit-transition-duration")+", "+c,"");a.setProperty("-webkit-transition-timing-function",a.getPropertyValue("-webkit-transition-timing-function")+", "+d,"")}else{b=a.getPropertyValue("-webkit-transition-duration").split(", ");b[f]=c;a.setProperty("-webkit-transition-duration",
b.join(", "),"");c=a.getPropertyValue("-webkit-transition-timing-function").split(", ");c[f]=d;a.setProperty("-webkit-transition-timing-function",c.join(", "),"")}}else{a.setProperty("-webkit-transition-property",b,"");a.setProperty("-webkit-transition-duration",c,"");a.setProperty("-webkit-transition-timing-function",d,"")}}
function ga(a,b){var c=a.getPropertyValue("-webkit-transition-property");if(c){var d=c.split(", ");c=d.indexOf(b);if(c>=0)if(d.length>1){d.splice(c,1);a.setProperty("-webkit-transition-property",d.join(", "),"");d=a.getPropertyValue("-webkit-transition-duration").split(", ");d.splice(c,1);a.setProperty("-webkit-transition-duration",d.join(", "),"");d=a.getPropertyValue("-webkit-transition-timing-function").split(", ");d.splice(c,1);a.setProperty("-webkit-transition-timing-function",d.join(", "),"")}else{a.setProperty("-webkit-transition-property",
"","");a.setProperty("-webkit-transition-duration","","");a.setProperty("-webkit-transition-timing-function","","")}}}function t(a){var b=document.createElement("div");b.className=a;return b}function ia(a){var b=document.createElement("div");b.innerHTML=a;if(b.childElementCount==1)b=b.firstElementChild;return b};function v(a){ja.call(this);this.element=a||document.createElement("div");this.y=this.x=0;this.G=this.F=1;this.rotation=0}l(v,ja);v.prototype.detach=function(){if(this.parent){if(ea(this.parent.r,this)){this.parent=null;this.detach()}}else this.element.parentNode&&this.element.parentNode.removeChild(this.element)};v.prototype.t=function(){v.N.t.call(this);this.detach();this.element=null};function ka(a,b){a.x=b;w(a)}function la(a,b){a.y=b;w(a)}function x(a,b,c){a.x=b;a.y=c;w(a)}
function ma(a,b){a.rotation=b;w(a)}function w(a){a.element.style.webkitTransform="translate3d("+a.x+"px,"+a.y+"px,0)rotate("+a.rotation+"deg)scale("+a.F+","+a.G+")"}function y(a){v.call(this,a);this.r=[]}l(y,v);y.prototype.I=function(a){y.N.I.call(this,a);for(var b=0;b<this.r.length;++b)z(a,this.r[b],null)};y.prototype.t=function(){y.N.t.call(this);for(var a=0;a<this.r.length;++a){var b=this.r[a];b.parent=null;b.t()}};
function A(a,b){if(a.d!=null&&b.d==null)z(a.d,b,a);else{if(b.parent!=null)if(ea(b.parent.r,b)){b.parent=null;b.detach()}s(a.r,b);b.parent=a;a.element.appendChild(b.element)}}function B(a,b,c,d){this.g=a;this.duration=1E3*b;this.V=c;this.S=d;this.u=na;this.e=0}var na=0;B.prototype.v=h();function C(a,b,c){return a.P(a.e,b,c,a.duration)}B.prototype.handleEvent=function(a){if(a.propertyName==this.g){this.u=2;a.target.removeEventListener("webkitTransitionEnd",this,false)}};
B.prototype.update=function(a,b){b=this.S||b;switch(this.u){case 1:this.e+=a;if(this.e>this.duration)this.e=this.duration;this.v(b);return false;case na:var c=window.getComputedStyle(b.element,null).getPropertyValue(this.g);this.z(b);if(c!=b.element.style.getPropertyValue(this.g)){this.u=1;fa(b.element.style,this.g,this.duration+"ms",this.V);b.element.addEventListener("webkitTransitionEnd",this,false);this.e=0;this.v(b);return false}else return true;case 2:this.u=na;ga(b.element.style,this.g);this.e=
this.duration;this.v(b);return true}};B.prototype.stop=function(a){if(this.u==1){a=this.S||a;var b=window.getComputedStyle(a.element,null).getPropertyValue(this.g);ga(a.element.style,this.g);a.element.removeEventListener("webkitTransitionEnd",this,false);a.element.style.setProperty(this.g,b,"")}};
B.prototype.start=function(a){if(this.u==1){a=this.S||a;var b=window.getComputedStyle(a.element,null).getPropertyValue(this.g);this.z(a);if(b!=a.element.style.getPropertyValue(this.g)){fa(a.element.style,this.g,this.duration-this.e+"ms",this.V);a.element.addEventListener("webkitTransitionEnd",this,false)}else this.u=2}};function D(a,b,c,d,e){B.call(this,a,c,d,e);this.value=b}l(D,B);D.prototype.z=function(a){a.element.style.setProperty(this.g,this.value,"")};
function E(a,b,c,d,e,f){B.call(this,"-webkit-transform",c,d,f);this.x=a;this.y=b;this.P=e}l(E,B);E.prototype.z=function(a){this.A=a.x;this.B=a.y;a.x=this.x;a.y=this.y;w(a)};E.prototype.v=function(a){a.x=C(this,this.A,this.x);a.y=C(this,this.B,this.y)};function oa(a,b,c,d,e,f){B.call(this,"-webkit-transform",c,d,f);this.ca=a;this.da=b;this.P=e}l(oa,B);oa.prototype.z=function(a){this.A=a.x;this.B=a.y;if(this.U==null){this.U=this.ca+a.x;this.Z=this.da+a.y}a.x=this.U;a.y=this.Z;w(a)};
oa.prototype.v=function(a){a.x=C(this,this.A,this.U);a.y=C(this,this.B,this.Z)};function F(a,b,c,d,e,f){B.call(this,"-webkit-transform",c,d,f);this.x=a;this.y=b;this.P=e}l(F,B);F.prototype.z=function(a){this.A=a.F;this.B=a.G;a.F=this.x;a.G=this.y;w(a)};F.prototype.v=function(a){a.F=C(this,this.A,this.x);a.G=C(this,this.B,this.y)};function pa(a,b,c,d){return new F(a,b,c,"ease-out",q,d)};function qa(){this.C={}}qa.prototype.addEventListener=function(a,b){var c=this.C[a];if(c==null)this.C[a]=[b];else s(c,b)};qa.prototype.removeEventListener=function(a,b){var c=this.C[a];c!=null&&ea(c,b)};qa.prototype.dispatchEvent=function(a){var b=this.C[a];if(b!=null){var c=Array.prototype.slice.apply(arguments);c.shift();for(var d=0;d<b.length;++d)b[d].apply(undefined,c)}};function ra(){this.L=[]}ra.prototype.b=function(a,b,c){s(this.L,new sa(a,b,c));a.addEventListener(b,c,false)};
ra.prototype.H=function(){for(var a=0;a<this.L.length;++a){var b=this.L[a];b.ba.removeEventListener(b.ea,b.ha,false)}this.L=[]};function sa(a,b,c){this.ba=a;this.ea=b;this.ha=c};var G=[],H=document.getElementById("hydra-stage");function ta(a){if(a!=m){m&&m.m();for(var b=G.length-1;b>=0;--b){var c=G[b];if(a!=c){--G.length;c.O()}else{m=c;a.l();return}}G=[a];m=a;a.load();a.l()}}function ua(){if(G.length>1){var a=G.pop();a.m();a.O();m=G[G.length-1];m.l()}}function I(a){m&&m.m();s(G,a);m=a;a.load();a.l()}function va(){var a=Date.now();m.update(a-ba);ba=a}
function wa(){if(H!=null){H.parentNode.removeChild(H);for(H=null;G.length>0;){var a=G.pop();a.m();a.O()}m=null;clearInterval(ca)}}function ja(){this.a=[];this.d=null}i=ja.prototype;i.b=function(a,b,c){if(!this.K)this.K=new ra;this.K.b(a,b,c)};i.H=function(){this.K&&this.K.H()};i.c=function(a){this.a.length==0&&this.d!=null&&s(this.d.w,this);s(this.a,a);a.start(this)};i.p=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];if(b){b.stop(this);this.a[a]=null}}};
i.I=function(a){this.d=a;this.a.length>0&&s(this.d.w,this)};i.update=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];if(!c||c.update(a,this))this.a.splice(b--,1)}return b==0};i.t=function(){this.p();this.H();if(this.d!=null){ea(this.d.entities,this);this.d=null}};i.l=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.start(this)}};i.m=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.stop(this)}};
function J(a){this.entities=[];this.w=[];this.name=a;this.h=new y(t("scene scene-"+a));z(this,this.h,H)}i=J.prototype;i.update=function(a){for(var b=0;b<this.w.length;++b){var c=this.w[b];if(!c||c.update(a))this.w.splice(b--,1)}};function z(a,b,c){if(!b.d){s(a.entities,b);b.I(a);if(b instanceof v)if(c instanceof HTMLElement)c.appendChild(b.element);else if(c!==null){c=c||a.h;A(c,b)}}}i.load=h();
i.O=function(){for(var a=0;a<this.entities.length;++a){var b=this.entities[a];if(b.d!=null){b.d=null;b.t()}}this.entities=[];this.w=[]};i.l=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].l()};i.m=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].m()};i.b=function(a,b,c){this.h.b(a,b,c)};i.H=function(){this.h.H()};i.c=function(a){this.h.c(a)};i.p=function(){this.h.p()};function K(a){this.fa=a}K.prototype.start=h();K.prototype.stop=h();K.prototype.update=function(a,b){this.fa(a,b);return true};function L(a){this.aa=1E3*a;this.e=0}L.prototype.start=h();L.prototype.stop=h();L.prototype.update=function(a){this.e+=a;if(this.e>=this.aa){this.e=0;return true}else return false};function M(a){this.a=a;this.J=[]}M.prototype.stop=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.stop(a)}};
M.prototype.start=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.start(a)}};M.prototype.update=function(a,b){for(var c=0;c<this.a.length;++c){var d=this.a[c];if(d&&d.update(a,b)){this.a[c]=null;s(this.J,d)}}if(this.J.length==this.a.length){this.a=this.J;this.J=[];return true}else return false};function N(a){this.T=a}N.prototype.stop=function(a){this.T.stop(a)};N.prototype.start=function(a){this.T.start(a)};N.prototype.update=function(a,b){this.T.update(a,b);return false};
function O(){}O.prototype.start=h();O.prototype.stop=h();O.prototype.update=function(a,b){b.t();return true};function P(a){this.a=a;this.n=0}P.prototype.stop=function(a){this.n<this.a.length&&this.a[this.n].stop(a)};P.prototype.start=function(a){this.n<this.a.length&&this.a[this.n].start(a)};P.prototype.update=function(a,b){if(this.a[this.n].update(a,b))if(++this.n<this.a.length){this.a[this.n].start(b);return false}else{this.n=0;return true}else return false};function xa(){J.call(this,"orientation")}l(xa,J);xa.prototype.load=function(){this.h.element.appendChild(ia("Rotate your device to play!"));this.b(window,"orientationchange",function(){document.body.offsetWidth>320&&document.body.offsetHeight<416||ua()})};function ya(a){return eval("("+a+")")}function za(a){var b=[];Aa(new Ba,a,b);return b.join("")}function Ba(){}
function Aa(a,b,c){switch(typeof b){case "string":Ca(a,b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==null){c.push("null");break}if(aa(b)=="array"){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++){c.push(e);Aa(a,b[f],c);e=","}c.push("]");break}c.push("{");d="";for(e in b)if(b.hasOwnProperty(e)){f=b[e];if(typeof f!="function"){c.push(d);Ca(a,e,c);c.push(":");Aa(a,f,c);d=","}}c.push("}");
break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},Ea=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ca(a,b,c){c.push('"',b.replace(Ea,function(d){if(d in Da)return Da[d];var e=d.charCodeAt(0),f="\\u";if(e<16)f+="000";else if(e<256)f+="00";else if(e<4096)f+="0";return Da[d]=f+e.toString(16)}),'"')};"JSON"in window||(JSON={parse:ya,stringify:za});"localStorage"in window||(localStorage={});function Fa(a,b){try{localStorage["hydra:"+a]=JSON.stringify(b)||null}catch(c){}};function Q(a){v.call(this,a);this.$=false;a=this.element;if(a.className)(" "+a.className+" ").indexOf(" button ")>=0||(a.className+=" button");else a.className="button";this.b(this.element,"touchstart",this);this.b(this.element,"touchend",this);this.b(this.element,"touchcancel",this)}l(Q,v);Q.prototype.D=h();
function Ga(a,b){if(a.$=b){var c=a.element;if(c.className)(" "+c.className+" ").indexOf(" button-down ")>=0||(c.className+=" button-down");else c.className="button-down"}else{c=a.element;var d=c.className.split(" "),e=d.indexOf("button-down");if(e>=0){d.splice(e,1);c.className=d.join(" ")}}}
Q.prototype.handleEvent=function(a){if(m==this.d)switch(a.type){case "touchstart":var b=this.element;if(b.className)(" "+b.className+" ").indexOf(" button-down ")>=0||(b.className+=" button-down");else b.className="button-down";break;case "touchend":case "touchcancel":if(!a.targetTouches.length){b=this.element;var c=b.className.split(" "),d=c.indexOf("button-down");if(d>=0){c.splice(d,1);b.className=c.join(" ")}this.D()}}a.stopPropagation()};function Ha(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;c==0&&g<f;g++){var n=d[g]||"",u=e[g]||"",ha=RegExp("(\\d*)(\\D*)","g"),hb=RegExp("(\\d*)(\\D*)","g");do{var U=ha.exec(n)||["","",""],V=hb.exec(u)||["","",""];if(U[0].length==0&&V[0].length==0)break;c=Ia(U[1].length==0?0:parseInt(U[1],10),V[1].length==0?0:parseInt(V[1],10))||Ia(U[2].length==0,V[2].length==0)||Ia(U[2],
V[2])}while(c==0)}return c}function Ia(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var R,Ja,Ka,La;"ScriptEngine"in j&&j.ScriptEngine()=="JScript"&&(j.ScriptEngineMajorVersion(),j.ScriptEngineMinorVersion(),j.ScriptEngineBuildVersion());function Ma(){return j.navigator?j.navigator.userAgent:null}La=Ka=Ja=R=false;var Na;if(Na=Ma()){var Oa=j.navigator;R=Na.indexOf("Opera")==0;Ja=!R&&Na.indexOf("MSIE")!=-1;Ka=!R&&Na.indexOf("WebKit")!=-1;La=!R&&!Ka&&Oa.product=="Gecko"}var Pa=Ja,Qa=La,Ra=Ka,Sa;
a:{var Ta="",S;if(R&&j.opera){var Ua=j.opera.version;Ta=typeof Ua=="function"?Ua():Ua}else{if(Qa)S=/rv\:([^\);]+)(\)|;)/;else if(Pa)S=/MSIE\s+([^\);]+)(\)|;)/;else if(Ra)S=/WebKit\/(\S+)/;if(S){var Va=S.exec(Ma());Ta=Va?Va[1]:""}}if(Pa){var Wa,Xa=j.document;Wa=Xa?Xa.documentMode:undefined;if(Wa>parseFloat(Ta)){Sa=String(Wa);break a}}Sa=Ta}var Ya={};!Pa||Ya["9"]||(Ya["9"]=Ha(Sa,"9")>=0);Pa&&(Ya["9"]||(Ya["9"]=Ha(Sa,"9")>=0));function T(a){J.call(this,"transition");this.M=a}l(T,J);T.prototype.load=function(){var a=this.M,b=0;if(b<0){b+=G.length;if(b<0)b=0}else if(b>G.length)b=G.length;if(m&&G[b]==m){m.m();m=a}G.splice(b,0,a);a.load();m==a&&a.l()};T.prototype.complete=function(){ta(this.M)};function Za(a,b){T.call(this,a);this.duration=b}l(Za,T);
Za.prototype.load=function(){Za.N.load.call(this);var a=H.clientWidth;ka(this.M.h,a);var b=this;this.c(new P([new M([new E(-a,0,this.duration,"linear",q,G[G.length-2].h),new E(0,0,this.duration,"linear",q,this.M.h)]),new K(function(){b.complete()})]))};function $a(){J.call(this,"mainmenu")}l($a,J);
$a.prototype.load=function(){var a=ia('<div class="credits">by b_garcia <img src="static/twitter.png"></div><div class="ui-attract"></div><div class="logo"></div><div class="menu"><div class="button-play punch-button">PLAY</div></div>');this.h.element.appendChild(a);var b=new Q(a.querySelector(".credits"));b.D=function(){window.top.location="http://twitter.com/b_garcia"};z(this,b,null);b=new Q(a.querySelector(".logo"));b.c(new N(new P([new F(1.1,1,2,"ease-in",r,void 0),pa(1,1,2)])));z(this,b,null);
b=new y;for(var c=0;c<15;++c){var d=new v(t("block0"));x(d,da(p()*320+0),da(p()*400+0));ma(d,da(p()*360+0));d.c(new N(new P([new L(p()*4+1.5),new K(function(e,f){var g;g=p()*320+0|0;var n;n=p()*400+0|0;var u=g-f.x;ma(f,57.29577951308232*Math.atan((n-f.y)/u)+(u>0?270:90));f.c(new E(g,n,1,"ease-out",q,void 0))})])));(function(e){e.b(e.element,"touchstart",function(){e.p();ma(e,0);var f=e.element,g=p()*(ab-1)+1;f.className="block"+(g|0)})})(d);A(b,d)}z(this,b,a.querySelector(".ui-attract"));a=new Q(a.querySelector(".button-play"));
a.D=function(){var e=new W;ka(e.h,320);I(new Za(new W,1))};a.I(this)};var bb=null;function cb(a){bb.game_start(a)};var db=true;try{document.createEvent("TouchEvent")}catch(eb){db=false}var X=null,fb=0;
function gb(a){a.preventDefault();var b="";switch(a.type){case "mousedown":b="touchstart";X=a.target;break;case "mousemove":if(!X)return;b="touchmove";break;case "mouseup":b="touchend";fb++}a={clientX:a.clientX,clientY:a.clientY,identifier:fb,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY,target:X};var c=document.createEvent("UIEvent");c.initEvent(b,true,false);c.type=b;c.touches=b=="touchend"?[]:[a];c.targetTouches=b=="touchend"?[]:[a];c.changedTouches=[a];X.dispatchEvent(c);if(b==
"touchend")X=null};function ib(){this.C={}}l(ib,qa);var ab=3;var Y,Z;function jb(){y.call(this,t("board"));this.b(Y,4,k(this.ja,this));this.b(Y,0,k(this.la,this));this.b(Y,1,k(this.ka,this));this.b(Y,2,k(this.Q,this));this.b(this.element,"touchstart",k(this.Y,this));this.b(this.element,"touchmove",k(this.Y,this));this.b(this.element,"touchend",k(this.X,this));this.b(this.element,"touchcancel",k(this.X,this));var a=new v(document.createElement("canvas"));A(this,a);a.element.style.zIndex="9999";a.element.width=$;a.element.height=kb;this.k=a.element.getContext("2d");
this.k.lineWidth=6;this.k.strokeStyle="#0000ff"}l(jb,y);var $=320,kb=360;i=jb.prototype;i.ja=function(){this.q=[];for(var a=0;a<9;++a)for(var b=0;b<8;++b){var c=new v(t("block"+Y.j[a*8+b]));x(c,40*b,40*a);A(this,c);this.q[a*8+b]=c}};
i.la=function(){for(var a=Y.i,b={},c=0,d=a.length;c<d;++c){var e=this.q[a[c]];b[a[c]]=true;e.p();e.element.style.backgroundColor="";e.c(new P([new L((d-c)*0.1),new F(0,0,0.15,"linear",q,void 0),new O]))}a=0.1*d;for(c=0;c<8;++c){d=0;for(var f=true,g=8;g>=0;--g){var n=g*8+c;if(n in b)++d;else{e=Y.j[n];if(f&&e==0)++d;else f=false;if(d){var u=this.q[n];n=n+d*8;var ha=[new L(a),new E(c*40,(g+d)*40,d*0.2,"ease-in",r,void 0)];if(n>72)ha.push(new O);else{this.q[n]=u;Y.j[n]=e}u.p();u.c(new P(ha))}}}for(g=
0;g<d;++g){n=g*8+c;e=Y.f/1E4|0;if(p()<(0.3<0.1*(e+1)?0.3:0.1*(e+1)))e=0;else{e=ab;e=p()*(e-1)+1|0}e=e;Y.j[n]=e;e=new v(t("block"+e));x(e,c*40,-(d-g)*40);e.c(new P([new L(a),new E(c*40,g*40,d*0.2,"ease-in",r,void 0)]));A(this,e);this.q[n]=e}}this.k.clearRect(0,0,$,kb)};i.ka=function(){for(var a=Y.i,b=0;b<a.length;++b)this.q[a[b]].element.style.backgroundColor="";this.k.clearRect(0,0,$,kb)};
i.Y=function(a){if(this.d==m){a=a.touches[0];a=new WebKitPoint(a.pageX,a.pageY);a=window.webkitConvertPointFromPageToNode(this.element,a);a.x=a.x>$-1?$-1:a.x<0?0:a.x;a.y=a.y>kb-1?kb-1:a.y<0?0:a.y;var b=a.x/40|0,c=a.y/40|0,d;d=Y;var e=c*8+b;if(e in d.R)d=1;else{var f=2;if(d.i.length){var g=d.i[d.i.length-1];if(e==g+1||e==g-1||e==g+8||e==g-8)if(d.j[g]==d.j[e])f=0}else if(d.j[e]!=0)f=0;if(f==0){d.R[e]=true;s(d.i,e)}d=f}switch(d){case 0:this.q[c*8+b].element.style.backgroundColor="#fff";case 1:if(this.o){this.k.beginPath();
this.k.moveTo(this.o.x,this.o.y);this.k.lineTo(a.x,a.y);this.k.stroke()}this.o=a}}};i.X=function(){if(this.d==m){var a=Y;if(a.i.length>1){a.dispatchEvent(0);var b=50*(Math.pow(a.i.length,1.6)|0);a.f+=b;a.dispatchEvent(2,b)}else a.dispatchEvent(1);a.R={};a.i.length=0;this.o=null}};
i.Q=function(a){if(a>0){var b=new v(t("floater"));b.element.textContent="+"+a;b.c(new P([new oa(0,-30,1.5,"linear",q,void 0),new O]));b.c(new P([new L(1),new D("opacity","0",0.5,"linear",void 0)]));A(this,b);a=b.element.clientWidth;x(b,this.o.x-a/2>320-a?320-a:this.o.x-a/2<0?0:this.o.x-a/2,this.o.y-b.element.clientHeight/2)}};function W(){J.call(this,"playing")}l(W,J);
W.prototype.load=function(){var a=this;cb(function(){Y=new ib;a.s=new v(t("clock"));x(a.s,200,10);a.c(new N(new P([new L(1),new K(function(){++Y.e;lb(a)})])));a.s.b(Y,2,k(a.Q,a));a.s.b(Y,3,k(a.ia,a));a.s.b(Y,4,function(){lb(a)});z(a,a.s);a.f=new v(t("score"));x(a.f,32,10);z(a,a.f);var b=new Q(t("mute-button"));b.D=function(){var e=b.$;e?Z.play():Z.pause();o.mute=!e;Fa("jam",o);Ga(b,!e)};Ga(b,o.mute);x(b,272,10);z(a,b);var c=new Q(t("pause-button"));x(c,0,10);c.D=function(){var e=new J("pause"),f=
new y(t("fader"));f.element.style.opacity="0";f.b(document,"touchstart",function(){f.p();f.c(new P([new D("opacity","0",0.5,"linear",void 0),new K(ua)]))});f.c(new D("opacity","0.9",0.5,"linear",void 0));z(e,f);var g=new v(t("paused"));g.element.textContent="PAUSED";x(g,320,158);g.c(new P([new E(80,158,1,"ease-out",q,void 0),new N(new P([new F(1.2,1,0.5,"ease-in",r,void 0),pa(1,1,0.5)]))]));A(f,g);I(e)};z(a,c);c=new jb;la(c,53);z(a,c);var d=new J("interstitial");c=new v(t("ready"));x(c,60,0);c.element.textContent=
"Ready...";c.element.style.opacity="0";c.c(new P([new M([new E(60,208,3,"linear",q,void 0),new P([new D("opacity","1",1,"ease-in",void 0),new L(1.5),new D("opacity","0",0.5,"ease-out",void 0)])]),new K(function(){var e=new v(t("go"));e.element.textContent="GO!";x(e,40,416/3);e.F=0.25;e.G=0.25;w(e);e.c(new P([new M([pa(1,1,1),new P([new L(0.5),new D("opacity","0",0.5,"linear",void 0)])]),new O]));z(a,e);ua();e=Y;e.R={};e.i=[];e.j=[];for(var f=0;f<72;++f){var g=e.j,n=f,u=ab+1;u=p()*(u-1)+1;g[n]=u|0}e.na=
true;e.f=0;e.e=0;e.dispatchEvent(4);e.dispatchEvent(2)})]));z(d,c);a.c(new K(function(){I(d)}))})};W.prototype.Q=function(){if(Y.i.length){this.f.p();this.f.c(new P([pa(1.2,1.2,0.1),new F(1,1,0.1,"ease-in",r,void 0)]))}this.f.element.textContent=String(Y.f)};function lb(a){var b=90-Y.e;if(b>=0){var c=b%60;a.s.element.textContent=(b/60|0)+(c>9?":":":0")+c;b<10&&a.s.element.style.setProperty("color","red","")}else{a=Y;a.na=false;a.dispatchEvent(3)}}
W.prototype.ia=function(){var a=o.best||0;if(Y.f>a){a=Y.f;o.best=a;Fa("jam",o)}bb.game_end();a=confirm("Game over! You scored "+Y.f+" points.\n\nYour personal best is "+a+" points. Play again?")?new W:new $a;var b=G.pop();s(G,a);m=a;if(b){b.m();b.O()}a.load();a.l()};function mb(a){var b=document.createElement("audio");b.src=a;b.load();b.play();return b};if(!db){document.addEventListener("mousemove",gb,true);document.addEventListener("mouseup",gb,true);document.addEventListener("mousedown",gb,true)}var nb;try{nb=JSON.parse(localStorage["hydra:jam"]||null)}catch(ob){nb=null}o=nb||{};
(function(a,b){window.vipgames.api.register({game_id:a,load:function(c){bb=c;c.game_load({getScores:b.ga,stop:function(){ta(b.W())},unload:wa},function(){var d=document.createElement("div");d.id="hydra-stage";c.getScene().appendChild(d);H=d;d=b.W();I(d);ba=Date.now();ca=setInterval(va,1E3/30);b.ma()})}})})("bruno.fruitlink",{W:function(){return new $a},ga:function(){return Y!=null?Y.f:0},ma:function(){function a(){(document.body.offsetWidth>320&&document.body.offsetHeight<416)&!(m instanceof xa)&&
I(new xa)}Z=mb("static/music.mp3");o.mute&&Z.pause();Z.addEventListener("ended",HTMLAudioElement.prototype.play,false);var b=new J("intro"),c=new v(t("darkness"));c.c(new P([new D("opacity","0",1,"ease-in",void 0),new K(ua)]));z(b,c);I(b);window.addEventListener("orientationchange",a,false);a();window.addEventListener("resize",function(){window.setTimeout(window.scrollTo,0,1,0)},false);document.addEventListener("touchstart",function(d){d.preventDefault();window.scrollTo(0,1)},true);window.scrollTo(0,
1)}});})()