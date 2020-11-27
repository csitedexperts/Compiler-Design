/*
 Copyright Andrew Lyczak.  All rights reserved.  No HTML pages and/or Javascript may be reproduced without prior permission of the author. */
var vq5="#cad5d3",yJ1="#e4e9e8",Cc4="#f5f7f7",fV2="#3D3F9B",uA6="#000000",vq9="#4a5553",EH3=9,Dd3=16,HZ=0,TQ_ES=1,TQ_PL=2,TQ_FR=3,TQ_SL=4,TQ_ZH=5,Hz=1,TQ_SA=2,TQ_CS=4,TQ_AS=8,aYj=16,TQ_AG=32,TQ_RW=64,TQ_HA=128,TQ_FW=256,HX=127<<EH3,fJ9=1023<<Dd3,aRL=67108864,aYL=134217728,fV6=86400,Yj2="<span class='comma'>,</span>",DOT="<span class='dot'>.</span>",Yj1={l:"en",n:0,i:Yj2,d:DOT,qm:"?",pqm:"",pd:".",ws:" ",sh:1},uD0=/android/.test(Hx),zV4=/iphone|ipod/.test(Hx),g6y=/windows phone/.test(Hx),fV9=/ipad/.test(Hx),
zV3=g9a&&!g6y,aVO=fV9||uD0&&!g9a,y98=zV3||aVO;function jX5(a,b){return RegExp(a,b)}var q50=jX5(/^\d+$/),jA6="algebra arithmetic exponent fraction geometry graphs idfraction idpoints inequality measurement money multiplechoice placevalue probability reducef shapes time calculus freehand graphmodule imgmap verb periodictable convertunits numberline sets trigonometry factors".split(" ");function Bj6(){return 522<hjj||5<J5||IS_FFOX}
function M8(a){a=map(a,function(a){return"quiz219/"+a});fZ6(a);return a}function htmz(a){return!J5&&GZOK?a.replace(/\.html/,"-z.html"):a}function Bj3(a,b,c,d){b||(b=jA6);for(var c=c||0,e=[];a&&b.length>c;)a&1&&e.push((d||"")+b[c]),a>>=1,c++;return e}
function aWu(){var a=document.location;if(!/\/\w\w-\w/.test(a.pathname))return a.search.substr(1).split(/[&-]/).shift().split("_").pop().replace("geography","imgmap");var b=jA6,a=a.href,c=a.search(/\/\w\w-/),a=-1<c?a.substr(c+4):"1",c=parseInt(a,32),b=b[!isNaN(c)&&c<b.length?c:1];return{A:"triangle",B:"fracineq",C:"angles",D:"vocabulary",E:"printable",F:"gradereview"}[a.charAt(0)]||b}function DW2(a){window.car=map(a,function(a){return window[a]=new (window[up(a)])})}
function sfcc(a){return String.fromCharCode(a)}var Wl=sfcc(176),uA7=sfcc(215),q59=sfcc(247),vq6=sfcc(8211),jA7=sfcc(960),fV1=sfcc(8730),uD3=sfcc(8364),s8=sfcc(160)+sfcc(160),q52=900,uA8=100;function osl(a,b){a.style.left=parseInt(b)+"px"}function ost(a,b){a.style.top=parseInt(b)+"px"}function osw(a,b){a.style.width=parseInt(b)+"px"}function osh(a,b){a.style.height=parseInt(b)+"px"}function ocn(a,b){a.className=b}function osbgc(a,b){return a.style.backgroundColor=b}
function sbgc(a,b){var c=a.style.backgroundColor;return c?c:b?b:""}function offw(a){return a.style&&a.style.width?parseInt(a.style.width):a.offsetWidth}function offh(a){return a.style&&a.style.height?parseInt(a.style.height):a.offsetHeight}function offl(a){return a.style&&a.style.left?parseInt(a.style.left):a.offsetLeft}function offt(a){return a.style&&a.style.top?parseInt(a.style.top):a.offsetTop}function toffl(a){return a.offsetLeft+(a.offsetParent?toffl(a.offsetParent):0)}
function tofft(a){return a.offsetTop+(a.offsetParent?tofft(a.offsetParent):0)}function mrnd(a,b){return b?Math.round(a*b)/b:Math.round(a)}function glv(){var a=parseInt(q9("LEVEL").value);return isNaN(a)?3:a}function gln(){return parseInt(q9("TESTLENGTH").value)}function Df(a){return"string"==typeof a}function aY3(a){return"object"==typeof a}function r78(){return window.quiz&&window.quiz.practice}function zJ8(a){a.innerHTML="";return a}function bJd(a){return a.replace(/\s/g,"")}
function v84(a){return trim(a.replace(/<|>|\r|\n|\f/g,""))}function Gg(a,b){var c,d=document.createElement(a);if(b)for(c in b)d.style[c]=b[c];return d}function bZH(a,b){return a.disabled=b}function jA(a,b){return Math.min(a,b)}function jy(a,b,c){return Math.min(Math.min(a,b),c)}function jH(a,b){return Math.max(a,b)}function jE(a,b,c){return Math.max(Math.max(a,b),c)}function bZ9(a){return Math.PI*a/180}function Z2(a){return 180*a/Math.PI}function fZP(a,b){return a<b?-1:1*(a>b)}
function u68(a,b){return fZP(parseInt(a),parseInt(b))}function pythhyp(a,b){return Math.sqrt(a*a+b*b)}function distance(a,b){return pythhyp(a[0]-b[0],a[1]-b[1])}function up(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function clr(a){q9(a).value=""}function sdi(a){return a.style.display="inline"}function csdb(a,b){return b?sdb(a):sdn(a)}function csdi(a,b){return b?sdi(a):sdn(a)}function htmcc(a){return"&#"+a.charCodeAt(0)+";"}
function htmesc(a){return qR4(a,[[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"]])}function htmunesc(a){return qR4(a,[[/&lt;/gi,"<"],[/&gt;/gi,">"],[/&amp;/gi,"&"],[/&#(\d+);/g,function(a,c){return sfcc(c)}]])}function fVg(a){return 384>a||13312<=a}
function escuni(a){for(var b={vq6:1,jA7:1,fV1:1,uD3:1},c=/(<span class=uni>[^<]*)<\/span><span class=uni>/gi,a=a.replace(/[^\w\s]/gi,function(a){var c=a.charCodeAt(0);return fVg(c)||b[a]?a:"<span class=uni>"+a+"</span>"});-1!=a.search(c);)a=a.replace(c,"$1");return a}
function scalerf(a){var b=255&a,c=a>>8&255,d=a>>16&127,e=a>>23&127,f=10<b?1:10,g=10>=b;return 100==b&&0==c&&0==d?mrnd:function(a){var h=a;0<d&&100>d&&(h=e*jA(d,a)/d+e*(jH(d,a)-d)/(100-d));a=mrnd(c+h*(b-c)/100,f);return g?a.toString().replace(/^([1-9])$/,"$1.0"):a}}function gradelabelar(a,b){return a.length?map(map(a.split("~"),Xv),function(a){a[0]=parseFloat(b(parseFloat(a[0])));return a}):[]}function glabeler(a,b){for(var c=0,d=b.length;c<d;c++)if(a>=b[c][0])return b[c][1];return""}
function Xv(a){return a?k66(a.split("|"),1):[]}function aV4(a){return map(a,function(a){return map(a,k66).join("|")}).join("~")}function qJ6(a){return Math.floor(1+a*Math.random())}function YQ(a){return Math.floor(a*Math.random())}function w85(a,b){return a>b?w85(b,a):a+YQ(1+b-a)}function k66(a,b){if(a&&aY3(a))return map(a,k66,a,[b]);var c=b?[[/&#124;/g,"|"],[/&#126;/g,"~"]]:[[/\|/g,"&#124;"],[/\~/g,"&#126;"]];return a&&Df(a)?qR4(a,c):a}
function qR4(a,b){for(var c=0;c<b.length;c++)a=a.replace(b[c][0],b[c][1]);return a}function o06(a,b){var c=[[/[\.\,]/g,function(a){return"."==a?Yj1.d:Yj1.i}]];b&&c.push([/<[^>]+>/g,""],[/&nbsp;/gi," "]);return qR4(String(a),c)}function g47(a,b,c){var d=a?a.nodeName.toLowerCase():"";if("#text"==d)return a.nodeValue;a=a&&a.childNodes?map(a.childNodes,g47,{},[b,c]).join("").replace(/\s\s+/g," "):"";return b&&aZ1(b,d)?"<"+d+">"+a+"</"+d+">":c&&aZ1(c,d)?" "+a+" ":a}
function iE7(a){return g47(a,["sup","sub","i","b","u"],["div","p","br","hr"])}var mobileEventMap={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},aev=document.attachEvent?function(a,b,c){a.attachEvent("on"+b,c)}:function(a,b,c){y98&&mobileEventMap[b]?aev(a,mobileEventMap[b],c):a.addEventListener(b,c,!0)},evd=document.detachEvent?function(a,b,c){a.detachEvent("on"+b,c)}:function(a,b,c){y98&&mobileEventMap[b]?evd(a,mobileEventMap[b],c):a.removeEventListener(b,c,!0)};
function fZO(a){if(8==s97(a=window.event||a)){var b=zE2(a),c=[null,"text","password"];(b=a.returnValue=b&&("TEXTAREA"==b.nodeName||"INPUT"==b.nodeName&&aZ1(c,b.getAttribute("type"))&&!b.getAttribute("readonly")))||estp(a);return b}}function fZM(a){return/^[A-Za-z0-9]{8}$/.test(a)&&/[A-Za-z]/.test(a)}
var LATIN={ch:[],cnv:function(a){return LATIN.ch[a.charCodeAt(0)]||a},ac:[225,233,237,243,250,241,193,201,205,211,218,209,224,226,231,232,234,235,238,239,244,251,249,252,255,321,322,260,261,280,281,377,378,379,380,262,263,323,324,346,347],la:"aeiounAEIOUNaaceeeiiouuuyLlAaEeZzZzCcNnSs".split("")};function latin(a){var b,c=LATIN;if(!c.f){for(b=0;b<c.ac.length;b++)c.ch[c.ac[b]]=c.la[b];c.re=jX5("["+map(c.ac,sfcc).join("")+"]","g");c.f=function(a){return a.replace(this.re,this.cnv)}}return c.f(a)}
function rotate(a,b){return a.slice(b,a.length).concat(a.slice(0,b))}function getf(a){return new Function("o","return (o."+a+");")}
function localtz(a,b){if(10>a.length)return a;var c=map(a.split(/[-: ]/),function(a){return parseInt(a.replace(/^0(\d)/,"$1"))}),c=new Date(c[0],c[1]-1,c[2],c[3],c[4],c[5]),c=new Date(c.getTime()-6E4*c.getTimezoneOffset()),d=c.getMonth()+1,e=c.getDate(),d=c.getFullYear()+"."+(10>d?"0":"")+d+"."+(10>e?"0":"")+e;b&&(e=c.getMinutes().toString(),1==e.length&&(e="0"+e),d+=sfcc(160)+sfcc(160)+c.getHours()+":"+e);return d}function nJ(a,b){var c,d=[];for(c=0;c<a;c++)d[c]=b?b:c;return d}
function uA1(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(a[c]==b)return c;return-1}function aZ1(a,b){return 0<=uA1(a,b)}function pQ7(a,b,c){var d=a[b];a[b]=a[c];a[c]=d;return a}function jy9(a){return a.slice(0).sort(fZP).pop()}function jy8(a){return a.slice(0).sort(fZP).shift()}function v98(a){return a[YQ(a.length)]}
function y96(a){var b,c,d=a.length,e=a.srcIdx||nJ(d);for(c=0;c<d;c++)if(b=w85(0,d-1),(0==b||c+1==b||a[c]!=a[b-1])&&(0==c||b+1==c||a[b]!=a[c-1])&&(b==d||b+1==c||a[c]!=a[b+1])&&(c==d||c+1==b||a[b]!=a[c+1]))pQ7(a,c,b),pQ7(e,c,b);a.srcIdx=e;return a}function v97(a){var b=[],c={};map(a,function(a){c[a]||b.push(c[a]=a)});return b}function sops(a){return qR4(a,[[/\*/g,uA7],[/\x2F/g,q59],[/-/g,vq6]])}function vY7(a){return sops(a.replace(/\*/g,"X"))}function gcd(a,b){return b?gcd(b,a%b):a}
function zZ8(a,b){var c=0>a*b,d,a=Math.abs(a),b=Math.abs(b);d=gcd(a>b?a:b,a>b?b:a);return[(c?-1:1)*a/d,b/d]}function Eb3(a){for(var b=a.getElementsByTagName("option"),c=0;c<b.length;c++)if(b[c].getAttribute("value")==a.value)return g47(b[c])}
function qF0(a,b){var c;zJ8(a);for(var d=0;d<b.length;d++)c=Gg("option"),c.setAttribute("value",b[d][0]),2<b[d].length&&b[d][2]&&c.setAttribute("selected","selected"),c.appendChild(document.createTextNode(htmunesc(String(b[d][1])))),a.appendChild(c);return a}function getPreference(a){var b=mJ7("PRF"),c;return(c=RegExp(a+"_([^_-]+)").exec(b))?parseInt(c.pop()):0}function yZ5(a,b){var c=xY7("PRF"),d=RegExp(a+"_[^_-]+");jU0("PRF",d.test(c)?c.replace(d,a+"_"+b):c+"-"+a+"_"+b)}
function g6t(){return"/tq/teacher.html"}function Cc6(a){if("fContent"!=self.name||2>top.frames.length)a?top.location=g6t():top.location.replace(g6t())}function l60(a){return"number"==typeof a?!0:!Df(a)?!1:q50.test(a)}function JD(a){return l60(a)?parseInt(a):a}function children(a,b){b=b?b.toLowerCase():null;return filter(a.childNodes,b?function(a){return a.nodeName.toLowerCase()==b}:function(a){return a.nodeName&&"#"!=a.nodeName.charAt(0)})}function v94(a){osbgc(a,Cc4)}
function o97(a){osbgc(a,a.getAttribute("bgc"))}function o03(a){for(var a=children(a,"TR"),b=0;b<a.length;b++)a[b].setAttribute("bgc",osbgc(a[b],b%2?vq5:yJ1))}var W2="scrollbars=yes,hotkeys=no,toolbars=no,resizable=yes,dependent=yes,width=500,height=450",fV0=jX5(/^<?(?:img|[vy]tv)(?: id="|-)(\w+)(?:" w="|-)(\d+)(?:" h="|-)(\d+)(?:" \/>)?$/);function aW4(a){return fV0.test(a)?fV0.exec(a)[1]:""}function QS(a){return fV0.test(a)?fV0.exec(a)[2]:""}function QY(a){return fV0.test(a)?fV0.exec(a)[3]:""}
function newitag(a){return fV0.test(a)?[isytv(a)?a.substr(0,3):"img"].concat(fV0.exec(a).slice(1)).join("-"):""}function isytv(a){return 0==a.search(/^[yv]tv/)}function fZ5(){return cdns("/images/misc/film.png")}
function i96(a,b){var c=fV0.exec(a),d=c?c[2]:"",e=c?c[3]:"",f=isytv(a);return f&&"v"==a.charAt(0)&&!b?'<object width="'+d+'"" height="'+e+'"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id='+c[1]+'&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=CAD5D3&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" /><embed src="http://vimeo.com/moogaloop.swf?clip_id='+
c[1]+'&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=CAD5D3&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="'+d+'" height="'+e+'"></embed></object>':f&&!b?'<object width="'+d+'" height="'+e+'""><param name="movie" value="http://www.youtube-nocookie.com/v/'+c[1]+'&hl=en&fs=1&rel=0"></param><param name="allowFullScreen" value="false"></param><param name="allowscriptaccess" value="false"></param><embed src="http://www.youtube.com/v/'+
c[1]+'&hl=en&fs=1&rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="false" width="'+d+'" height="'+e+'"></embed></object>':c?"<img id='"+(f?"ytv-":"img-")+c[1]+"' src='"+(f?fZ5():uQ1(c[1],b))+"' width='"+d+"' height='"+e+"'/>":""}function uQ1(a,b){if(!a)return cdns("/images/misc/transparent.gif");var c=a.length-3,c=a.substring(4,c)+(b?"thumb":"")+"."+a.substr(c);return"/images/user/"+a.substr(0,4).split("").join("/")+"/"+c}function zD1(a){return uQ1(a,1)}
var tqAccessKeys=[];function Bp0(a){a=s97(a);if(Wd?17==a:18==a||27==a)for(a=0;a<tqAccessKeys.length;a++)tqAccessKeys[a].title?sdn(tqAccessKeys[a]):tqAccessKeys[a].style.textDecoration="none"}var akDown=/Firefox\/[2-9]/i.test(Hx)?function(a){return Wd?a.ctrlKey:a.shiftKey&&a.altKey}:function(a){return 18==s97(a)};function Df8(a){if(akDown(a))for(a=0;a<tqAccessKeys.length;a++)tqAccessKeys[a].title?sdi(tqAccessKeys[a]):tqAccessKeys[a].style.textDecoration="underline"}
function vq1(a){return"<span class='ak' title='Alt+"+up(a)+"' style='display:none;'>"+a+"</span>"}function pZ6(a,b){return"<td style='width:12px;text-align:right;vertical-align:"+(b||"top")+";'>"+vq1(a)+"</td>"}function Dp1(){tqAccessKeys=filter(document.getElementsByTagName("SPAN"),function(a){return"akl"==a.className||"ak"==a.className});document.onkeydown=Df8;document.onkeyup=Bp0}
function Bj0(a){if(-1!=a.indexOf("accesskey"))return a;var b,c=0,d=["x","y","z"];return a=a.replace(/<(\/?)(sup|sub|var|span|td)([^>]*)>/gi,"`$1$2$3`").replace(/[^>]+\<input[^>\/]*/gi,function(a){c+=1;b=10>c?String(c):13>c?d[c-10]:"";return-1!=a.indexOf("type='hidden'")?a:-1!=a.indexOf("`td")?pZ6(b)+a+" accesskey='"+b+"'":"<span style='font-family:Arial;position:absolute;'>"+vq1(b)+"</span><span style='font-family:Arial'>&nbsp;&nbsp;</span>"+a+" accesskey='"+b+"' "}).replace(/`(\/?)(sup|sub|var|span|td)([^`]*)`/gi,
"<$1$2$3>")}function fJO(a){var b=q9("category"),c,d="";aY3(a)||(a=[a||""]);for(c=0;c<a.length;c++)d+=/^<\/?div/.test(a[c])?a[c]:"<div>"+a[c]+"</div>";b.innerHTML=Bj0(d)}
function slickSubmit(a,b,c){function d(a){return""!=j[a]?jU0(g[a],j[a]):0}var e,f,g=["CLASSID","PRF"],j=map(g,mJ7),h=nJ(g.length),i=b.length;if(15<i)return a.submit();var k=map(nJ(i),function(c){return jU0(b[c],g90("checkbox"==a.elements[b[c]].type?String(Number(a.elements[b[c]].checked)):a.elements[b[c]].value))});map(h,d);e=0;for(f=8160<document.cookie.length;e<i;e++)if(f||k[e]!=xY7(b[e]))return map(b,y70),map(h,d),a.submit();if(c||a.target&&(c=window.frames[a.target])||a.target&&(c=window[a.target])||
(c=document))try{"hiddenframe"==c.name?c.location.replace(a.action):c.location=a.action}catch(l){c.location=a.action}}
var Qb=J5?function(a){var b=document;return parseInt(a.clientX)+parseInt(b.documentElement.scrollLeft?b.documentElement.scrollLeft:b.body.scrollLeft)}:function(a){return a.touches&&1==a.touches.length?a.touches[0].pageX:a.pageX},Pk=J5?function(a){var b=document;return parseInt(a.clientY)+parseInt(b.documentElement.scrollTop?b.documentElement.scrollTop:b.body.scrollTop)}:function(a){return a.touches&&1==a.touches.length?a.touches[0].pageY:a.pageY};
function estp(a){a||(a=window.event);a.stopPropagation?a.stopPropagation():a.cancelBubble=!0;a.preventDefault?a.preventDefault():a.returnValue=!1}J5&&(document.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),document.createStyleSheet().cssText="vml\\:fill,vml\\:path,vml\\:shape,vml\\:stroke{behavior:url(#default#VML);display:inline-block;}");var Biglib=1;
