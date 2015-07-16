/* Yahoo! WebPlayer Loader, Build 0.9.18.  Copyright (c) 2011, Yahoo! Inc.  All rights reserved.
 * Your use of this Yahoo! WebPlayer is subject to the Yahoo! Terms of Service
 * located at http://info.yahoo.com/legal/us/yahoo/webplayer/details.html
 */
(function(){if(typeof f=="undefined"||!f){var f={};}f.namespace=function(){var i=arguments,j=null,l,m,k;for(l=0;l<i.length;l=l+1){k=(""+i[l]).split(".");j=f;for(m=(k[0]=="YAHOO")?1:0;m<k.length;m=m+1){j[k[m]]=j[k[m]]||{};j=j[k[m]];}}return j;};f.log=function(j,i,k){var l=f.widget.Logger;if(l&&l.log){return l.log(j,i,k);}else{return false;}};f.register=function(l,q,i){var m=f.env.modules,k,n,o,p,j;if(!m[l]){m[l]={versions:[],builds:[]};}k=m[l];n=i.version;o=i.build;p=f.env.listeners;k.name=l;k.version=n;k.build=o;k.versions.push(n);k.builds.push(o);k.mainClass=q;for(j=0;j<p.length;j=j+1){p[j](k);}if(q){q.VERSION=n;q.BUILD=o;}else{f.log("mainClass is undefined for module "+l,"warn");}};f.env=f.env||{modules:[],listeners:[]};f.env.getVersion=function(i){return f.env.modules[i]||null;};f.env.ua=function(){var m=function(q){var p=0;return parseFloat(q.replace(/\./g,function(){return(p++==1)?"":".";}));},j=navigator,k={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0,caja:j.cajaVersion,secure:false,os:null},n=navigator&&navigator.userAgent,l=window&&window.location,o=l&&l.href,i;k.secure=o&&(o.toLowerCase().indexOf("https")===0);if(n){if((/windows|win32/i).test(n)){k.os="windows";}else{if((/macintosh/i).test(n)){k.os="macintosh";}}if((/KHTML/).test(n)){k.webkit=1;}i=n.match(/AppleWebKit\/([^\s]*)/);if(i&&i[1]){k.webkit=m(i[1]);if(/ Mobile\//.test(n)){k.mobile="Apple";}else{i=n.match(/NokiaN[^\/]*/);if(i){k.mobile=i[0];}}i=n.match(/AdobeAIR\/([^\s]*)/);if(i){k.air=i[0];}}if(!k.webkit){i=n.match(/Opera[\s\/]([^\s]*)/);if(i&&i[1]){k.opera=m(i[1]);i=n.match(/Opera Mini[^;]*/);if(i){k.mobile=i[0];}}else{i=n.match(/MSIE\s([^;]*)/);if(i&&i[1]){k.ie=m(i[1]);}else{i=n.match(/Gecko\/([^\s]*)/);if(i){k.gecko=1;i=n.match(/rv:([^\s\)]*)/);if(i&&i[1]){k.gecko=m(i[1]);}}}}}}return k;}();(function(){f.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var l=YAHOO_config.listener,i=f.env.listeners,j=true,k;if(l){for(k=0;k<i.length;k++){if(i[k]==l){j=false;break;}}if(j){i.push(l);}}}})();f.lang=f.lang||{};(function(){var p=f.lang,i=Object.prototype,j="[object Array]",o="[object Function]",k="[object Object]",m=[],l=["toString","valueOf"],n={isArray:function(q){return i.toString.apply(q)===j;},isBoolean:function(q){return typeof q==="boolean";},isFunction:function(q){return(typeof q==="function")||i.toString.apply(q)===o;},isNull:function(q){return q===null;},isNumber:function(q){return typeof q==="number"&&isFinite(q);},isObject:function(q){return(q&&(typeof q==="object"||p.isFunction(q)))||false;},isString:function(q){return typeof q==="string";},isUndefined:function(q){return typeof q==="undefined";},_IEEnumFix:(f.env.ua.ie)?function(r,s){var t,u,q;for(t=0;t<l.length;t=t+1){u=l[t];q=s[u];if(p.isFunction(q)&&q!=i[u]){r[u]=q;}}}:function(){},extend:function(q,u,r){if(!u||!q){throw new Error("extend failed, please check that "+"all dependencies are included.");}var s=function(){},t;s.prototype=u.prototype;q.prototype=new s();q.prototype.constructor=q;q.superclass=u.prototype;if(u.prototype.constructor==i.constructor){u.prototype.constructor=u;}if(r){for(t in r){if(p.hasOwnProperty(r,t)){q.prototype[t]=r[t];}}p._IEEnumFix(q.prototype,r);}},augmentObject:function(v,q){if(!q||!v){throw new Error("Absorb failed, verify dependencies.");}var t=arguments,r,u,s=t[2];if(s&&s!==true){for(r=2;r<t.length;r=r+1){v[t[r]]=q[t[r]];}}else{for(u in q){if(s||!(u in v)){v[u]=q[u];}}p._IEEnumFix(v,q);}},augmentProto:function(q,r){if(!r||!q){throw new Error("Augment failed, verify dependencies.");}var t=[q.prototype,r.prototype],s;for(s=2;s<arguments.length;s=s+1){t.push(arguments[s]);}p.augmentObject.apply(this,t);},dump:function(y,t){var w,u,r=[],q="{...}",x="f(){...}",s=", ",v=" => ";if(!p.isObject(y)){return y+"";}else{if(y instanceof Date||("nodeType" in y&&"tagName" in y)){return y;}else{if(p.isFunction(y)){return x;}}}t=(p.isNumber(t))?t:3;if(p.isArray(y)){r.push("[");for(w=0,u=y.length;w<u;w=w+1){if(p.isObject(y[w])){r.push((t>0)?p.dump(y[w],t-1):q);}else{r.push(y[w]);}r.push(s);}if(r.length>1){r.pop();}r.push("]");}else{r.push("{");for(w in y){if(p.hasOwnProperty(y,w)){r.push(w+v);if(p.isObject(y[w])){r.push((t>0)?p.dump(y[w],t-1):q);}else{r.push(y[w]);}r.push(s);}}if(r.length>1){r.pop();}r.push("}");}return r.join("");},substitute:function(q,F,x){var B,C,D,u,t,r,v=[],E,A="dump",w=" ",G="{",s="}",y,z;for(;;){B=q.lastIndexOf(G);if(B<0){break;}C=q.indexOf(s,B);if(B+1>=C){break;}E=q.substring(B+1,C);u=E;r=null;D=u.indexOf(w);if(D>-1){r=u.substring(D+1);u=u.substring(0,D);}t=F[u];if(x){t=x(u,t,r);}if(p.isObject(t)){if(p.isArray(t)){t=p.dump(t,parseInt(r,10));}else{r=r||"";y=r.indexOf(A);if(y>-1){r=r.substring(4);}z=t.toString();if(z===k||y>-1){t=p.dump(t,parseInt(r,10));}else{t=z;}}}else{if(!p.isString(t)&&!p.isNumber(t)){t="~-"+v.length+"-~";v[v.length]=E;}}q=q.substring(0,B)+t+q.substring(C+1);}for(B=v.length-1;B>=0;B=B-1){q=q.replace(new RegExp("~-"+B+"-~"),"{"+v[B]+"}","g");}return q;},trim:function(r){try{return r.replace(/^\s+|\s+$/g,"");}catch(q){return r;}},merge:function(){var q={},s=arguments,t=s.length,r;for(r=0;r<t;r=r+1){p.augmentObject(q,s[r],true);}return q;},later:function(r,x,q,v,u){r=r||0;x=x||{};var w=q,s=v,t,y;if(p.isString(q)){w=x[q];}if(!w){throw new TypeError("method undefined");}if(s&&!p.isArray(s)){s=[v];}t=function(){w.apply(x,s||m);};y=(u)?setInterval(t,r):setTimeout(t,r);return{interval:u,cancel:function(){if(this.interval){clearInterval(y);}else{clearTimeout(y);}}};},isValue:function(q){return(p.isObject(q)||p.isString(q)||p.isNumber(q)||p.isBoolean(q));}};p.hasOwnProperty=(i.hasOwnProperty)?function(r,q){return r&&r.hasOwnProperty(q);}:function(r,q){return !p.isUndefined(r[q])&&r.constructor.prototype[q]!==r[q];};n.augmentObject(p,n,true);
f.util.Lang=p;p.augment=p.augmentProto;f.augment=p.augmentProto;f.extend=p.extend;})();f.register("yahoo",f,{version:"2.8.0r4",build:"2449"});(function(){f.env._id_counter=f.env._id_counter||0;var ao=f.util,ai=f.lang,aE=f.env.ua,at=f.lang.trim,aN={},aJ={},ag=/^t(?:able|d|h)$/i,y=/color$/i,aj=window.document,z=aj.documentElement,aM="ownerDocument",aD="defaultView",av="documentElement",ax="compatMode",aP="offsetLeft",ae="offsetTop",aw="offsetParent",x="parentNode",aF="nodeType",aq="tagName",af="scrollLeft",aI="scrollTop",ad="getBoundingClientRect",au="getComputedStyle",aQ="currentStyle",ah="CSS1Compat",aO="BackCompat",aK="class",an="className",ak="",ar=" ",ay="(?:^|\\s)",aG="(?= |$)",Y="g",aB="position",aL="fixed",G="relative",aH="left",aC="top",az="medium",aA="borderLeftWidth",ac="borderTopWidth",ap=aE.opera,al=aE.webkit,am=aE.gecko,aa=aE.ie;ao.Dom={CUSTOM_ATTRIBUTES:(!z.hasAttribute)?{"for":"htmlFor","class":an}:{"htmlFor":"for","className":aK},DOT_ATTRIBUTES:{},get:function(n){var k,i,m,o,l,j;if(n){if(n[aF]||n.item){return n;}if(typeof n==="string"){k=n;n=aj.getElementById(n);j=(n)?n.attributes:null;if(n&&j&&j.id&&j.id.value===k){return n;}else{if(n&&aj.all){n=null;i=aj.all[k];for(o=0,l=i.length;o<l;++o){if(i[o].id===k){return i[o];}}}}return n;}if(f.util.Element&&n instanceof f.util.Element){n=n.get("element");}if("length" in n){m=[];for(o=0,l=n.length;o<l;++o){m[m.length]=ao.Dom.get(n[o]);}return m;}return n;}return null;},getComputedStyle:function(i,j){if(window[au]){return i[aM][aD][au](i,null)[j];}else{if(i[aQ]){return ao.Dom.IE_ComputedStyle.get(i,j);}}},getStyle:function(i,j){return ao.Dom.batch(i,ao.Dom._getStyle,j);},_getStyle:function(){if(window[au]){return function(j,l){l=(l==="float")?l="cssFloat":ao.Dom._toCamel(l);var i=j.style[l],k;if(!i){k=j[aM][aD][au](j,null);if(k){i=k[l];}}return i;};}else{if(z[aQ]){return function(j,m){var i;switch(m){case"opacity":i=100;try{i=j.filters["DXImageTransform.Microsoft.Alpha"].opacity;}catch(l){try{i=j.filters("alpha").opacity;}catch(k){}}return i/100;case"float":m="styleFloat";default:m=ao.Dom._toCamel(m);i=j[aQ]?j[aQ][m]:null;return(j.style[m]||i);}};}}}(),setStyle:function(j,k,i){ao.Dom.batch(j,ao.Dom._setStyle,{prop:k,val:i});},_setStyle:function(){if(aa){return function(k,j){var i=ao.Dom._toCamel(j.prop),l=j.val;if(k){switch(i){case"opacity":if(ai.isString(k.style.filter)){k.style.filter="alpha(opacity="+l*100+")";if(!k[aQ]||!k[aQ].hasLayout){k.style.zoom=1;}}break;case"float":i="styleFloat";default:k.style[i]=l;}}else{}};}else{return function(k,j){var i=ao.Dom._toCamel(j.prop),l=j.val;if(k){if(i=="float"){i="cssFloat";}k.style[i]=l;}else{}};}}(),getXY:function(i){return ao.Dom.batch(i,ao.Dom._getXY);},_canPosition:function(i){return(ao.Dom._getStyle(i,"display")!=="none"&&ao.Dom._inDoc(i));},_getXY:function(){if(aj[av][ad]){return function(r){var q,i,p,k,l,m,n,t,s,o=Math.floor,j=false;if(ao.Dom._canPosition(r)){p=r[ad]();k=r[aM];q=ao.Dom.getDocumentScrollLeft(k);i=ao.Dom.getDocumentScrollTop(k);j=[o(p[aH]),o(p[aC])];if(aa&&aE.ie<8){l=2;m=2;n=k[ax];if(aE.ie===6){if(n!==aO){l=0;m=0;}}if((n===aO)){t=ab(k[av],aA);s=ab(k[av],ac);if(t!==az){l=parseInt(t,10);}if(s!==az){m=parseInt(s,10);}}j[0]-=l;j[1]-=m;}if((i||q)){j[0]+=q;j[1]+=i;}j[0]=o(j[0]);j[1]=o(j[1]);}else{}return j;};}else{return function(p){var i,o,n,l,k,m=false,j=p;if(ao.Dom._canPosition(p)){m=[p[aP],p[ae]];i=ao.Dom.getDocumentScrollLeft(p[aM]);o=ao.Dom.getDocumentScrollTop(p[aM]);k=((am||aE.webkit>519)?true:false);while((j=j[aw])){m[0]+=j[aP];m[1]+=j[ae];if(k){m=ao.Dom._calcBorders(j,m);}}if(ao.Dom._getStyle(p,aB)!==aL){j=p;while((j=j[x])&&j[aq]){n=j[aI];l=j[af];if(am&&(ao.Dom._getStyle(j,"overflow")!=="visible")){m=ao.Dom._calcBorders(j,m);}if(n||l){m[0]-=l;m[1]-=n;}}m[0]+=i;m[1]+=o;}else{if(ap){m[0]-=i;m[1]-=o;}else{if(al||am){m[0]+=i;m[1]+=o;}}}m[0]=Math.floor(m[0]);m[1]=Math.floor(m[1]);}else{}return m;};}}(),getX:function(i){var j=function(k){return ao.Dom.getXY(k)[0];};return ao.Dom.batch(i,j,ao.Dom,true);},getY:function(i){var j=function(k){return ao.Dom.getXY(k)[1];};return ao.Dom.batch(i,j,ao.Dom,true);},setXY:function(j,i,k){ao.Dom.batch(j,ao.Dom._setXY,{pos:i,noRetry:k});},_setXY:function(q,n){var m=ao.Dom._getStyle(q,aB),o=ao.Dom.setStyle,j=n.pos,i=n.noRetry,l=[parseInt(ao.Dom.getComputedStyle(q,aH),10),parseInt(ao.Dom.getComputedStyle(q,aC),10)],k,p;if(m=="static"){m=G;o(q,aB,m);}k=ao.Dom._getXY(q);if(!j||k===false){return false;}if(isNaN(l[0])){l[0]=(m==G)?0:q[aP];}if(isNaN(l[1])){l[1]=(m==G)?0:q[ae];}if(j[0]!==null){o(q,aH,j[0]-k[0]+l[0]+"px");}if(j[1]!==null){o(q,aC,j[1]-k[1]+l[1]+"px");}if(!i){p=ao.Dom._getXY(q);if((j[0]!==null&&p[0]!=j[0])||(j[1]!==null&&p[1]!=j[1])){ao.Dom._setXY(q,{pos:j,noRetry:true});}}},setX:function(j,i){ao.Dom.setXY(j,[i,null]);},setY:function(i,j){ao.Dom.setXY(i,[null,j]);},getRegion:function(i){var j=function(k){var l=false;if(ao.Dom._canPosition(k)){l=ao.Region.getRegion(k);}else{}return l;};return ao.Dom.batch(i,j,ao.Dom,true);},getClientWidth:function(){return ao.Dom.getViewportWidth();},getClientHeight:function(){return ao.Dom.getViewportHeight();},getElementsByClassName:function(n,j,m,k,r,l){j=j||"*";m=(m)?ao.Dom.get(m):null||aj;if(!m){return[];}var i=[],s=m.getElementsByTagName(j),p=ao.Dom.hasClass;for(var q=0,o=s.length;q<o;++q){if(p(s[q],n)){i[i.length]=s[q];}}if(k){ao.Dom.batch(i,k,r,l);}return i;},hasClass:function(j,i){return ao.Dom.batch(j,ao.Dom._hasClass,i);},_hasClass:function(i,k){var j=false,l;if(i&&k){l=ao.Dom._getAttribute(i,an)||ak;if(k.exec){j=k.test(l);}else{j=k&&(ar+l+ar).indexOf(ar+k+ar)>-1;}}else{}return j;},addClass:function(j,i){return ao.Dom.batch(j,ao.Dom._addClass,i);},_addClass:function(i,k){var j=false,l;if(i&&k){l=ao.Dom._getAttribute(i,an)||ak;if(!ao.Dom._hasClass(i,k)){ao.Dom.setAttribute(i,an,at(l+ar+k));j=true;}}else{}return j;},removeClass:function(j,i){return ao.Dom.batch(j,ao.Dom._removeClass,i);},_removeClass:function(n,i){var m=false,l,k,j;if(n&&i){l=ao.Dom._getAttribute(n,an)||ak;ao.Dom.setAttribute(n,an,l.replace(ao.Dom._getClassRegex(i),ak));
k=ao.Dom._getAttribute(n,an);if(l!==k){ao.Dom.setAttribute(n,an,at(k));m=true;if(ao.Dom._getAttribute(n,an)===""){j=(n.hasAttribute&&n.hasAttribute(aK))?aK:an;n.removeAttribute(j);}}}else{}return m;},replaceClass:function(i,k,j){return ao.Dom.batch(i,ao.Dom._replaceClass,{from:k,to:j});},_replaceClass:function(o,i){var n,k,m,j=false,l;if(o&&i){k=i.from;m=i.to;if(!m){j=false;}else{if(!k){j=ao.Dom._addClass(o,i.to);}else{if(k!==m){l=ao.Dom._getAttribute(o,an)||ak;n=(ar+l.replace(ao.Dom._getClassRegex(k),ar+m)).split(ao.Dom._getClassRegex(m));n.splice(1,0,ar+m);ao.Dom.setAttribute(o,an,at(n.join(ak)));j=true;}}}}else{}return j;},generateId:function(j,i){i=i||"yui-gen";var k=function(m){if(m&&m.id){return m.id;}var l=i+f.env._id_counter++;if(m){if(m[aM]&&m[aM].getElementById(l)){return ao.Dom.generateId(m,l+i);}m.id=l;}return l;};return ao.Dom.batch(j,k,ao.Dom,true)||k.apply(ao.Dom,arguments);},isAncestor:function(k,i){k=ao.Dom.get(k);i=ao.Dom.get(i);var j=false;if((k&&i)&&(k[aF]&&i[aF])){if(k.contains&&k!==i){j=k.contains(i);}else{if(k.compareDocumentPosition){j=!!(k.compareDocumentPosition(i)&16);}}}else{}return j;},inDocument:function(i,j){return ao.Dom._inDoc(ao.Dom.get(i),j);},_inDoc:function(k,i){var j=false;if(k&&k[aq]){i=i||k[aM];j=ao.Dom.isAncestor(i[av],k);}else{}return j;},getElementsBy:function(i,j,n,l,q,m,k){j=j||"*";n=(n)?ao.Dom.get(n):null||aj;if(!n){return[];}var r=[],s=n.getElementsByTagName(j);for(var p=0,o=s.length;p<o;++p){if(i(s[p])){if(k){r=s[p];break;}else{r[r.length]=s[p];}}}if(l){ao.Dom.batch(r,l,q,m);}return r;},getElementBy:function(i,j,k){return ao.Dom.getElementsBy(i,j,k,null,null,null,true);},batch:function(i,k,n,m){var o=[],l=(m)?n:window;i=(i&&(i[aq]||i.item))?i:ao.Dom.get(i);if(i&&k){if(i[aq]||i.length===undefined){return k.call(l,i,n);}for(var j=0;j<i.length;++j){o[o.length]=k.call(l,i[j],n);}}else{return false;}return o;},getDocumentHeight:function(){var j=(aj[ax]!=ah||al)?aj.body.scrollHeight:z.scrollHeight,i=Math.max(j,ao.Dom.getViewportHeight());return i;},getDocumentWidth:function(){var j=(aj[ax]!=ah||al)?aj.body.scrollWidth:z.scrollWidth,i=Math.max(j,ao.Dom.getViewportWidth());return i;},getViewportHeight:function(){var i=self.innerHeight,j=aj[ax];if((j||aa)&&!ap){i=(j==ah)?z.clientHeight:aj.body.clientHeight;}return i;},getViewportWidth:function(){var i=self.innerWidth,j=aj[ax];if(j||aa){i=(j==ah)?z.clientWidth:aj.body.clientWidth;}return i;},getAncestorBy:function(i,j){while((i=i[x])){if(ao.Dom._testElement(i,j)){return i;}}return null;},getAncestorByClassName:function(k,j){k=ao.Dom.get(k);if(!k){return null;}var i=function(l){return ao.Dom.hasClass(l,j);};return ao.Dom.getAncestorBy(k,i);},getAncestorByTagName:function(k,j){k=ao.Dom.get(k);if(!k){return null;}var i=function(l){return l[aq]&&l[aq].toUpperCase()==j.toUpperCase();};return ao.Dom.getAncestorBy(k,i);},getPreviousSiblingBy:function(i,j){while(i){i=i.previousSibling;if(ao.Dom._testElement(i,j)){return i;}}return null;},getPreviousSibling:function(i){i=ao.Dom.get(i);if(!i){return null;}return ao.Dom.getPreviousSiblingBy(i);},getNextSiblingBy:function(i,j){while(i){i=i.nextSibling;if(ao.Dom._testElement(i,j)){return i;}}return null;},getNextSibling:function(i){i=ao.Dom.get(i);if(!i){return null;}return ao.Dom.getNextSiblingBy(i);},getFirstChildBy:function(j,i){var k=(ao.Dom._testElement(j.firstChild,i))?j.firstChild:null;return k||ao.Dom.getNextSiblingBy(j.firstChild,i);},getFirstChild:function(i,j){i=ao.Dom.get(i);if(!i){return null;}return ao.Dom.getFirstChildBy(i);},getLastChildBy:function(j,i){if(!j){return null;}var k=(ao.Dom._testElement(j.lastChild,i))?j.lastChild:null;return k||ao.Dom.getPreviousSiblingBy(j.lastChild,i);},getLastChild:function(i){i=ao.Dom.get(i);return ao.Dom.getLastChildBy(i);},getChildrenBy:function(k,l){var i=ao.Dom.getFirstChildBy(k,l),j=i?[i]:[];ao.Dom.getNextSiblingBy(i,function(m){if(!l||l(m)){j[j.length]=m;}return false;});return j;},getChildren:function(i){i=ao.Dom.get(i);if(!i){}return ao.Dom.getChildrenBy(i);},getDocumentScrollLeft:function(i){i=i||aj;return Math.max(i[av].scrollLeft,i.body.scrollLeft);},getDocumentScrollTop:function(i){i=i||aj;return Math.max(i[av].scrollTop,i.body.scrollTop);},insertBefore:function(j,i){j=ao.Dom.get(j);i=ao.Dom.get(i);if(!j||!i||!i[x]){return null;}return i[x].insertBefore(j,i);},insertAfter:function(j,i){j=ao.Dom.get(j);i=ao.Dom.get(i);if(!j||!i||!i[x]){return null;}if(i.nextSibling){return i[x].insertBefore(j,i.nextSibling);}else{return i[x].appendChild(j);}},getClientRegion:function(){var i=ao.Dom.getDocumentScrollTop(),k=ao.Dom.getDocumentScrollLeft(),l=ao.Dom.getViewportWidth()+k,j=ao.Dom.getViewportHeight()+i;return new ao.Region(i,l,j,k);},setAttribute:function(k,j,i){ao.Dom.batch(k,ao.Dom._setAttribute,{attr:j,val:i});},_setAttribute:function(i,k){var j=ao.Dom._toCamel(k.attr),l=k.val;if(i&&i.setAttribute){if(ao.Dom.DOT_ATTRIBUTES[j]){i[j]=l;}else{j=ao.Dom.CUSTOM_ATTRIBUTES[j]||j;i.setAttribute(j,l);}}else{}},getAttribute:function(j,i){return ao.Dom.batch(j,ao.Dom._getAttribute,i);},_getAttribute:function(k,j){var i;j=ao.Dom.CUSTOM_ATTRIBUTES[j]||j;if(k&&k.getAttribute){i=k.getAttribute(j,2);}else{}return i;},_toCamel:function(k){var i=aN;function j(m,l){return l.toUpperCase();}return i[k]||(i[k]=k.indexOf("-")===-1?k:k.replace(/-([a-z])/gi,j));},_getClassRegex:function(j){var i;if(j!==undefined){if(j.exec){i=j;}else{i=aJ[j];if(!i){j=j.replace(ao.Dom._patterns.CLASS_RE_TOKENS,"\\$1");i=aJ[j]=new RegExp(ay+j+aG,Y);}}}return i;},_patterns:{ROOT_TAG:/^body|html$/i,CLASS_RE_TOKENS:/([\.\(\)\^\$\*\+\?\|\[\]\{\}\\])/g},_testElement:function(i,j){return i&&i[aF]==1&&(!j||j(i));},_calcBorders:function(i,l){var k=parseInt(ao.Dom[au](i,ac),10)||0,j=parseInt(ao.Dom[au](i,aA),10)||0;if(am){if(ag.test(i[aq])){k=0;j=0;}}l[0]+=j;l[1]+=k;return l;}};var ab=ao.Dom[au];if(aE.opera){ao.Dom[au]=function(k,j){var i=ab(k,j);if(y.test(j)){i=ao.Dom.Color.toRGB(i);}return i;};}if(aE.webkit){ao.Dom[au]=function(k,j){var i=ab(k,j);if(i==="rgba(0, 0, 0, 0)"){i="transparent";
}return i;};}if(aE.ie&&aE.ie>=8&&aj.documentElement.hasAttribute){ao.Dom.DOT_ATTRIBUTES.type=true;}})();f.util.Region=function(k,j,i,l){this.top=k;this.y=k;this[1]=k;this.right=j;this.bottom=i;this.left=l;this.x=l;this[0]=l;this.width=this.right-this.left;this.height=this.bottom-this.top;};f.util.Region.prototype.contains=function(i){return(i.left>=this.left&&i.right<=this.right&&i.top>=this.top&&i.bottom<=this.bottom);};f.util.Region.prototype.getArea=function(){return((this.bottom-this.top)*(this.right-this.left));};f.util.Region.prototype.intersect=function(j){var l=Math.max(this.top,j.top),k=Math.min(this.right,j.right),i=Math.min(this.bottom,j.bottom),m=Math.max(this.left,j.left);if(i>=l&&k>=m){return new f.util.Region(l,k,i,m);}else{return null;}};f.util.Region.prototype.union=function(j){var l=Math.min(this.top,j.top),k=Math.max(this.right,j.right),i=Math.max(this.bottom,j.bottom),m=Math.min(this.left,j.left);return new f.util.Region(l,k,i,m);};f.util.Region.prototype.toString=function(){return("Region {"+"top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+", height: "+this.height+", width: "+this.width+"}");};f.util.Region.getRegion=function(l){var j=f.util.Dom.getXY(l),m=j[1],k=j[0]+l.offsetWidth,i=j[1]+l.offsetHeight,n=j[0];return new f.util.Region(m,k,i,n);};f.util.Point=function(i,j){if(f.lang.isArray(i)){j=i[1];i=i[0];}f.util.Point.superclass.constructor.call(this,j,i,j,i);};f.extend(f.util.Point,f.util.Region);(function(){var aa=f.util,ab="clientTop",z="clientLeft",v="parentNode",u="right",i="hasLayout",w="px",k="opacity",t="auto",Y="borderLeftWidth",y="borderTopWidth",p="borderRightWidth",j="borderBottomWidth",m="visible",o="transparent",r="height",X="width",x="style",l="currentStyle",n=/^width|height$/,q=/^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,s={get:function(D,B){var C="",A=D[l][B];if(B===k){C=aa.Dom.getStyle(D,k);}else{if(!A||(A.indexOf&&A.indexOf(w)>-1)){C=A;}else{if(aa.Dom.IE_COMPUTED[B]){C=aa.Dom.IE_COMPUTED[B](D,B);}else{if(q.test(A)){C=aa.Dom.IE.ComputedStyle.getPixel(D,B);}else{C=A;}}}}return C;},getOffset:function(D,C){var A=D[l][C],H=C.charAt(0).toUpperCase()+C.substr(1),G="offset"+H,F="pixel"+H,B="",E;if(A==t){E=D[G];if(E===undefined){B=0;}B=E;if(n.test(C)){D[x][C]=E;if(D[G]>E){B=E-(D[G]-E);}D[x][C]=t;}}else{if(!D[x][F]&&!D[x][C]){D[x][C]=A;}B=D[x][F];}return B+w;},getBorderWidth:function(C,A){var B=null;if(!C[l][i]){C[x].zoom=1;}switch(A){case y:B=C[ab];break;case j:B=C.offsetHeight-C.clientHeight-C[ab];break;case Y:B=C[z];break;case p:B=C.offsetWidth-C.clientWidth-C[z];break;}return B+w;},getPixel:function(D,E){var B=null,A=D[l][u],C=D[l][E];D[x][u]=C;B=D[x].pixelRight;D[x][u]=A;return B+w;},getMargin:function(B,C){var A;if(B[l][C]==t){A=0+w;}else{A=aa.Dom.IE.ComputedStyle.getPixel(B,C);}return A;},getVisibility:function(B,C){var A;while((A=B[l])&&A[C]=="inherit"){B=B[v];}return(A)?A[C]:m;},getColor:function(A,B){return aa.Dom.Color.toRGB(A[l][B])||o;},getBorderColor:function(C,D){var B=C[l],A=B[D]||B.color;return aa.Dom.Color.toRGB(aa.Dom.Color.toHex(A));}},Z={};Z.top=Z.right=Z.bottom=Z.left=Z[X]=Z[r]=s.getOffset;Z.color=s.getColor;Z[y]=Z[p]=Z[j]=Z[Y]=s.getBorderWidth;Z.marginTop=Z.marginRight=Z.marginBottom=Z.marginLeft=s.getMargin;Z.visibility=s.getVisibility;Z.borderColor=Z.borderTopColor=Z.borderRightColor=Z.borderBottomColor=Z.borderLeftColor=s.getBorderColor;aa.Dom.IE_COMPUTED=Z;aa.Dom.IE_ComputedStyle=s;})();(function(){var k="toString",i=parseInt,l=RegExp,j=f.util;j.Dom.Color={KEYWORDS:{black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"f00",purple:"800080",fuchsia:"f0f",green:"008000",lime:"0f0",olive:"808000",yellow:"ff0",navy:"000080",blue:"00f",teal:"008080",aqua:"0ff"},re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/([0-9A-F])/gi,toRGB:function(m){if(!j.Dom.Color.re_RGB.test(m)){m=j.Dom.Color.toHex(m);}if(j.Dom.Color.re_hex.exec(m)){m="rgb("+[i(l.$1,16),i(l.$2,16),i(l.$3,16)].join(", ")+")";}return m;},toHex:function(m){m=j.Dom.Color.KEYWORDS[m]||m;if(j.Dom.Color.re_RGB.exec(m)){var n=(l.$1.length===1)?"0"+l.$1:Number(l.$1),o=(l.$2.length===1)?"0"+l.$2:Number(l.$2),p=(l.$3.length===1)?"0"+l.$3:Number(l.$3);m=[n[k](16),o[k](16),p[k](16)].join("");}if(m.length<6){m=m.replace(j.Dom.Color.re_hex3,"$1$1");}if(m!=="transparent"&&m.indexOf("#")<0){m="#"+m;}return m.toLowerCase();}};}());f.register("dom",f.util.Dom,{version:"2.8.0r4",build:"2449"});f.util.CustomEvent=function(l,m,n,i,k){this.type=l;this.scope=m||window;this.silent=n;this.fireOnce=k;this.fired=false;this.firedWith=null;this.signature=i||f.util.CustomEvent.LIST;this.subscribers=[];if(!this.silent){}var j="_YUICEOnSubscribe";if(l!==j){this.subscribeEvent=new f.util.CustomEvent(j,this,true);}this.lastError=null;};f.util.CustomEvent.LIST=0;f.util.CustomEvent.FLAT=1;f.util.CustomEvent.prototype={subscribe:function(l,k,j){if(!l){throw new Error("Invalid callback for subscriber to '"+this.type+"'");}if(this.subscribeEvent){this.subscribeEvent.fire(l,k,j);}var i=new f.util.Subscriber(l,k,j);if(this.fireOnce&&this.fired){this.notify(i,this.firedWith);}else{this.subscribers.push(i);}},unsubscribe:function(l,j){if(!l){return this.unsubscribeAll();}var k=false;for(var n=0,i=this.subscribers.length;n<i;++n){var m=this.subscribers[n];if(m&&m.contains(l,j)){this._delete(n);k=true;}}return k;},fire:function(){this.lastError=null;var j=[],i=this.subscribers.length;var n=[].slice.call(arguments,0),o=true,l,p=false;if(this.fireOnce){if(this.fired){return true;}else{this.firedWith=n;}}this.fired=true;if(!i&&this.silent){return true;}if(!this.silent){}var m=this.subscribers.slice();for(l=0;l<i;++l){var k=m[l];if(!k){p=true;}else{o=this.notify(k,n);if(false===o){if(!this.silent){}break;}}}return(o!==false);},notify:function(l,o){var p,j=null,m=l.getScope(this.scope),i=f.util.Event.throwErrors;if(!this.silent){}if(this.signature==f.util.CustomEvent.FLAT){if(o.length>0){j=o[0];
}try{p=l.fn.call(m,j,l.obj);}catch(k){this.lastError=k;if(i){throw k;}}}else{try{p=l.fn.call(m,this.type,o,l.obj);}catch(n){this.lastError=n;if(i){throw n;}}}return p;},unsubscribeAll:function(){var i=this.subscribers.length,j;for(j=i-1;j>-1;j--){this._delete(j);}this.subscribers=[];return i;},_delete:function(i){var j=this.subscribers[i];if(j){delete j.fn;delete j.obj;}this.subscribers.splice(i,1);},toString:function(){return"CustomEvent: "+"'"+this.type+"', "+"context: "+this.scope;}};f.util.Subscriber=function(i,k,j){this.fn=i;this.obj=f.lang.isUndefined(k)?null:k;this.overrideContext=j;};f.util.Subscriber.prototype.getScope=function(i){if(this.overrideContext){if(this.overrideContext===true){return this.obj;}else{return this.overrideContext;}}return i;};f.util.Subscriber.prototype.contains=function(i,j){if(j){return(this.fn==i&&this.obj==j);}else{return(this.fn==i);}};f.util.Subscriber.prototype.toString=function(){return"Subscriber { obj: "+this.obj+", overrideContext: "+(this.overrideContext||"no")+" }";};if(!f.util.Event){f.util.Event=function(){var p=false,o=[],m=[],l=0,r=[],k=0,j={63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9},i=f.env.ua.ie,q="focusin",n="focusout";return{POLL_RETRYS:500,POLL_INTERVAL:40,EL:0,TYPE:1,FN:2,WFN:3,UNLOAD_OBJ:3,ADJ_SCOPE:4,OBJ:5,OVERRIDE:6,CAPTURE:7,lastError:null,isSafari:f.env.ua.webkit,webkit:f.env.ua.webkit,isIE:i,_interval:null,_dri:null,_specialTypes:{focusin:(i?"focusin":"focus"),focusout:(i?"focusout":"blur")},DOMReady:false,throwErrors:false,startInterval:function(){if(!this._interval){this._interval=f.lang.later(this.POLL_INTERVAL,this,this._tryPreloadAttach,null,true);}},onAvailable:function(u,y,w,v,x){var t=(f.lang.isString(u))?[u]:u;for(var s=0;s<t.length;s=s+1){r.push({id:t[s],fn:y,obj:w,overrideContext:v,checkReady:x});}l=this.POLL_RETRYS;this.startInterval();},onContentReady:function(u,t,s,v){this.onAvailable(u,t,s,v,true);},onDOMReady:function(){this.DOMReadyEvent.subscribe.apply(this.DOMReadyEvent,arguments);},_addListener:function(E,G,v,B,x,s){if(!v||!v.call){return false;}if(this._isValidCollection(E)){var u=true;for(var A=0,y=E.length;A<y;++A){u=this.on(E[A],G,v,B,x)&&u;}return u;}else{if(f.lang.isString(E)){var C=this.getEl(E);if(C){E=C;}else{this.onAvailable(E,function(){f.util.Event._addListener(E,G,v,B,x,s);});return true;}}}if(!E){return false;}if("unload"==G&&B!==this){m[m.length]=[E,G,v,B,x];return true;}var F=E;if(x){if(x===true){F=B;}else{F=x;}}var D=function(H){return v.call(F,f.util.Event.getEvent(H,E),B);};var t=[E,G,v,D,F,B,x,s];var z=o.length;o[z]=t;try{this._simpleAdd(E,G,D,s);}catch(w){this.lastError=w;this.removeListener(E,G,v);return false;}return true;},_getType:function(s){return this._specialTypes[s]||s;},addListener:function(x,u,s,w,v){var t=((u==q||u==n)&&!f.env.ua.ie)?true:false;return this._addListener(x,this._getType(u),s,w,v,t);},addFocusListener:function(s,t,v,u){return this.on(s,q,t,v,u);},removeFocusListener:function(s,t){return this.removeListener(s,q,t);},addBlurListener:function(s,t,v,u){return this.on(s,n,t,v,u);},removeBlurListener:function(s,t){return this.removeListener(s,n,t);},removeListener:function(B,C,v){var A,x,s;C=this._getType(C);if(typeof B=="string"){B=this.getEl(B);}else{if(this._isValidCollection(B)){var u=true;for(A=B.length-1;A>-1;A--){u=(this.removeListener(B[A],C,v)&&u);}return u;}}if(!v||!v.call){return this.purgeElement(B,false,C);}if("unload"==C){for(A=m.length-1;A>-1;A--){s=m[A];if(s&&s[0]==B&&s[1]==C&&s[2]==v){m.splice(A,1);return true;}}return false;}var z=null;var y=arguments[3];if("undefined"===typeof y){y=this._getCacheIndex(o,B,C,v);}if(y>=0){z=o[y];}if(!B||!z){return false;}var t=z[this.CAPTURE]===true?true:false;try{this._simpleRemove(B,C,z[this.WFN],t);}catch(w){this.lastError=w;return false;}delete o[y][this.WFN];delete o[y][this.FN];o.splice(y,1);return true;},getTarget:function(u,s){var t=u.target||u.srcElement;return this.resolveTextNode(t);},resolveTextNode:function(s){try{if(s&&3==s.nodeType){return s.parentNode;}}catch(t){}return s;},getPageX:function(s){var t=s.pageX;if(!t&&0!==t){t=s.clientX||0;if(this.isIE){t+=this._getScrollLeft();}}return t;},getPageY:function(t){var s=t.pageY;if(!s&&0!==s){s=t.clientY||0;if(this.isIE){s+=this._getScrollTop();}}return s;},getXY:function(s){return[this.getPageX(s),this.getPageY(s)];},getRelatedTarget:function(s){var t=s.relatedTarget;if(!t){if(s.type=="mouseout"){t=s.toElement;}else{if(s.type=="mouseover"){t=s.fromElement;}}}return this.resolveTextNode(t);},getTime:function(u){if(!u.time){var s=new Date().getTime();try{u.time=s;}catch(t){this.lastError=t;return s;}}return u.time;},stopEvent:function(s){this.stopPropagation(s);this.preventDefault(s);},stopPropagation:function(s){if(s.stopPropagation){s.stopPropagation();}else{s.cancelBubble=true;}},preventDefault:function(s){if(s.preventDefault){s.preventDefault();}else{s.returnValue=false;}},getEvent:function(v,t){var s=v||window.event;if(!s){var u=this.getEvent.caller;while(u){s=u.arguments[0];if(s&&Event==s.constructor){break;}u=u.caller;}}return s;},getCharCode:function(s){var t=s.keyCode||s.charCode||0;if(f.env.ua.webkit&&(t in j)){t=j[t];}return t;},_getCacheIndex:function(y,v,u,w){for(var x=0,s=y.length;x<s;x=x+1){var t=y[x];if(t&&t[this.FN]==w&&t[this.EL]==v&&t[this.TYPE]==u){return x;}}return -1;},generateId:function(t){var s=t.id;if(!s){s="yuievtautoid-"+k;++k;t.id=s;}return s;},_isValidCollection:function(s){try{return(s&&typeof s!=="string"&&s.length&&!s.tagName&&!s.alert&&typeof s[0]!=="undefined");}catch(t){return false;}},elCache:{},getEl:function(s){return(typeof s==="string")?document.getElementById(s):s;},clearCache:function(){},DOMReadyEvent:new f.util.CustomEvent("DOMReady",f,0,0,1),_load:function(s){if(!p){p=true;var t=f.util.Event;t._ready();t._tryPreloadAttach();}},_ready:function(s){var t=f.util.Event;if(!t.DOMReady){t.DOMReady=true;t.DOMReadyEvent.fire();t._simpleRemove(document,"DOMContentLoaded",t._ready);}},_tryPreloadAttach:function(){if(r.length===0){l=0;
if(this._interval){this._interval.cancel();this._interval=null;}return;}if(this.locked){return;}if(this.isIE){if(!this.DOMReady){this.startInterval();return;}}this.locked=true;var v=!p;if(!v){v=(l>0&&r.length>0);}var w=[];var u=function(B,A){var C=B;if(A.overrideContext){if(A.overrideContext===true){C=A.obj;}else{C=A.overrideContext;}}A.fn.call(C,A.obj);};var s,t,x,y,z=[];for(s=0,t=r.length;s<t;s=s+1){x=r[s];if(x){y=this.getEl(x.id);if(y){if(x.checkReady){if(p||y.nextSibling||!v){z.push(x);r[s]=null;}}else{u(y,x);r[s]=null;}}else{w.push(x);}}}for(s=0,t=z.length;s<t;s=s+1){x=z[s];u(this.getEl(x.id),x);}l--;if(v){for(s=r.length-1;s>-1;s--){x=r[s];if(!x||!x.id){r.splice(s,1);}}this.startInterval();}else{if(this._interval){this._interval.cancel();this._interval=null;}}this.locked=false;},purgeElement:function(x,w,u){var z=(f.lang.isString(x))?this.getEl(x):x;var v=this.getListeners(z,u),y,t;if(v){for(y=v.length-1;y>-1;y--){var s=v[y];this.removeListener(z,s.type,s.fn);}}if(w&&z&&z.childNodes){for(y=0,t=z.childNodes.length;y<t;++y){this.purgeElement(z.childNodes[y],w,u);}}},getListeners:function(z,B){var w=[],A;if(!B){A=[o,m];}else{if(B==="unload"){A=[m];}else{B=this._getType(B);A=[o];}}var u=(f.lang.isString(z))?this.getEl(z):z;for(var x=0;x<A.length;x=x+1){var s=A[x];if(s){for(var v=0,t=s.length;v<t;++v){var y=s[v];if(y&&y[this.EL]===u&&(!B||B===y[this.TYPE])){w.push({type:y[this.TYPE],fn:y[this.FN],obj:y[this.OBJ],adjust:y[this.OVERRIDE],scope:y[this.ADJ_SCOPE],index:v});}}}}return(w.length)?w:null;},_unload:function(t){var z=f.util.Event,w,x,y,u,v,s=m.slice(),A;for(w=0,u=m.length;w<u;++w){y=s[w];if(y){A=window;if(y[z.ADJ_SCOPE]){if(y[z.ADJ_SCOPE]===true){A=y[z.UNLOAD_OBJ];}else{A=y[z.ADJ_SCOPE];}}y[z.FN].call(A,z.getEvent(t,y[z.EL]),y[z.UNLOAD_OBJ]);s[w]=null;}}y=null;A=null;m=null;if(o){for(x=o.length-1;x>-1;x--){y=o[x];if(y){z.removeListener(y[z.EL],y[z.TYPE],y[z.FN],x);}}y=null;}z._simpleRemove(window,"unload",z._unload);},_getScrollLeft:function(){return this._getScroll()[1];},_getScrollTop:function(){return this._getScroll()[0];},_getScroll:function(){var t=document.documentElement,s=document.body;if(t&&(t.scrollTop||t.scrollLeft)){return[t.scrollTop,t.scrollLeft];}else{if(s){return[s.scrollTop,s.scrollLeft];}else{return[0,0];}}},regCE:function(){},_simpleAdd:function(){if(window.addEventListener){return function(v,u,s,t){v.addEventListener(u,s,(t));};}else{if(window.attachEvent){return function(v,u,s,t){v.attachEvent("on"+u,s);};}else{return function(){};}}}(),_simpleRemove:function(){if(window.removeEventListener){return function(v,u,s,t){v.removeEventListener(u,s,(t));};}else{if(window.detachEvent){return function(s,u,t){s.detachEvent("on"+u,t);};}else{return function(){};}}}()};}();(function(){var i=f.util.Event;i.on=i.addListener;i.onFocus=i.addFocusListener;i.onBlur=i.addBlurListener;if(i.isIE){if(self!==self.top){document.onreadystatechange=function(){if(document.readyState=="complete"){document.onreadystatechange=null;i._ready();}};}else{f.util.Event.onDOMReady(f.util.Event._tryPreloadAttach,f.util.Event,true);var j=document.createElement("p");i._dri=setInterval(function(){try{j.doScroll("left");clearInterval(i._dri);i._dri=null;i._ready();j=null;}catch(k){}},i.POLL_INTERVAL);}}else{if(i.webkit&&i.webkit<525){i._dri=setInterval(function(){var k=document.readyState;if("loaded"==k||"complete"==k){clearInterval(i._dri);i._dri=null;i._ready();}},i.POLL_INTERVAL);}else{i._simpleAdd(document,"DOMContentLoaded",i._ready);}}i._simpleAdd(window,"load",i._load);i._simpleAdd(window,"unload",i._unload);i._tryPreloadAttach();})();}f.util.EventProvider=function(){};f.util.EventProvider.prototype={__yui_events:null,__yui_subscribers:null,subscribe:function(i,m,j,k){this.__yui_events=this.__yui_events||{};var l=this.__yui_events[i];if(l){l.subscribe(m,j,k);}else{this.__yui_subscribers=this.__yui_subscribers||{};var n=this.__yui_subscribers;if(!n[i]){n[i]=[];}n[i].push({fn:m,obj:j,overrideContext:k});}},unsubscribe:function(n,l,j){this.__yui_events=this.__yui_events||{};var i=this.__yui_events;if(n){var k=i[n];if(k){return k.unsubscribe(l,j);}}else{var o=true;for(var m in i){if(f.lang.hasOwnProperty(i,m)){o=o&&i[m].unsubscribe(l,j);}}return o;}return false;},unsubscribeAll:function(i){return this.unsubscribe(i);},createEvent:function(o,j){this.__yui_events=this.__yui_events||{};var l=j||{},m=this.__yui_events,k;if(m[o]){}else{k=new f.util.CustomEvent(o,l.scope||this,l.silent,f.util.CustomEvent.FLAT,l.fireOnce);m[o]=k;if(l.onSubscribeCallback){k.subscribeEvent.subscribe(l.onSubscribeCallback);}this.__yui_subscribers=this.__yui_subscribers||{};var i=this.__yui_subscribers[o];if(i){for(var n=0;n<i.length;++n){k.subscribe(i[n].fn,i[n].obj,i[n].overrideContext);}}}return m[o];},fireEvent:function(l){this.__yui_events=this.__yui_events||{};var j=this.__yui_events[l];if(!j){return null;}var i=[];for(var k=1;k<arguments.length;++k){i.push(arguments[k]);}return j.fire.apply(j,i);},hasEvent:function(i){if(this.__yui_events){if(this.__yui_events[i]){return true;}}return false;}};(function(){var i=f.util.Event,j=f.lang;f.util.KeyListener=function(q,l,p,o){if(!q){}else{if(!l){}else{if(!p){}}}if(!o){o=f.util.KeyListener.KEYDOWN;}var n=new f.util.CustomEvent("keyPressed");this.enabledEvent=new f.util.CustomEvent("enabled");this.disabledEvent=new f.util.CustomEvent("disabled");if(j.isString(q)){q=document.getElementById(q);}if(j.isFunction(p)){n.subscribe(p);}else{n.subscribe(p.fn,p.scope,p.correctScope);}function m(u,v){if(!l.shift){l.shift=false;}if(!l.alt){l.alt=false;}if(!l.ctrl){l.ctrl=false;}if(u.shiftKey==l.shift&&u.altKey==l.alt&&u.ctrlKey==l.ctrl){var t,w=l.keys,r;if(f.lang.isArray(w)){for(var s=0;s<w.length;s++){t=w[s];r=i.getCharCode(u);if(t==r){n.fire(r,u);break;}}}else{r=i.getCharCode(u);if(w==r){n.fire(r,u);}}}}this.enable=function(){if(!this.enabled){i.on(q,o,m);this.enabledEvent.fire(l);}this.enabled=true;};this.disable=function(){if(this.enabled){i.removeListener(q,o,m);this.disabledEvent.fire(l);
}this.enabled=false;};this.toString=function(){return"KeyListener ["+l.keys+"] "+q.tagName+(q.id?"["+q.id+"]":"");};};var k=f.util.KeyListener;k.KEYDOWN="keydown";k.KEYUP="keyup";k.KEY={ALT:18,BACK_SPACE:8,CAPS_LOCK:20,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,META:224,NUM_LOCK:144,PAGE_DOWN:34,PAGE_UP:33,PAUSE:19,PRINTSCREEN:44,RIGHT:39,SCROLL_LOCK:145,SHIFT:16,SPACE:32,TAB:9,UP:38};})();f.register("event",f.util.Event,{version:"2.8.0r4",build:"2449"});f.register("yahoo-dom-event",f,{version:"2.8.0r4",build:"2449"});if(typeof f=="undefined"){f={};}if(typeof f.MediaPlayer=="undefined"){f.MediaPlayer=function(){this.controller=null;};}f.MediaPlayer.isAPIReady=false;f.MediaPlayer.onAPIReady={subscribers:[],fire:function(){for(var j=0;j<this.subscribers.length;j++){if(f.MediaPlayer.isAPIReady===true){try{this.subscribers[j]();}catch(k){}}}},subscribe:function(i){this.subscribers.push(i);}};f.WebPlayer=f.MediaPlayer;var b=true;var g=["NETSCAPE6","NETSCAPE/7","(IPAD;","(IPHONE;","(IPOD;"];if(navigator){var a=g.length;for(var c=0;c<a;c++){if(navigator.userAgent.toUpperCase().indexOf(g[c])!==-1){b=false;}}}function e(i){var k=document.createElement("style");k.setAttribute("type","text/css");var l=document.getElementsByTagName("head")[0];l.appendChild(k);if(k.styleSheet){k.styleSheet.cssText=i;}else{var j=document.createTextNode(i);k.appendChild(j);}}if(b===true){if(typeof f.mediaplayer=="undefined"){f.namespace("YAHOO.mediaplayer");}f.mediaplayer.playerAlreadyLoaded=function(){if(f.mediaplayer.bLoaded===true){return true;}f.mediaplayer.bLoaded=true;return false;};var d=false;if(f.mediaplayer.playerAlreadyLoaded()!==true){d=true;f.mediaplayer.partnerId="42858483";if(typeof YMPParams=="undefined"){window.YMPParams={};}YMPParams["_websitelinkhash"]="update";YMPParams["assetsroot"]=YMPParams["assetsroot"]||"http://l.yimg.com/pb/webplayer"+"/"+"0.9.18";YMPParams["wsroot"]=YMPParams["wsroot"]||"http://ws.webplayer.yahoo.com";YMPParams["wwwroot"]=YMPParams["wwwroot"]||"http://webplayer.yahoo.com";YMPParams["build_number"]="0.9.18";if(typeof YMPParams==="object"&&YMPParams.logging===true){if(typeof(f)==="undefined"||typeof(f.ULT)==="undefined"){var h=document.createElement("script");h.type="text/javascript";h.src="http://us.js2.yimg.com/us.js.yimg.com/ult/ylc_1.9.js";document.getElementsByTagName("head")[0].appendChild(h);}}e(".ywp-container iframe { background-color: transparent !important; margin: 0 !important; padding: 0 !important; } .ywp-container { text-rendering: auto; }");f.mediaplayer.loadPlayerScript=function(){if(d!==true){return;}d=false;if(Boolean(arguments.callee.bCalled)){window.status="asyncLoadPlayer Already Called! (webplayerloader)";return;}arguments.callee.bCalled=true;function i(){return YMPParams["assetsroot"]+"/js/player-min.js";}var j=i();if(typeof(j)=="string"&&j.length>0){f.mediaplayer.elPlayerSource=document.createElement("script");f.mediaplayer.elPlayerSource.type="text/javascript";f.mediaplayer.elPlayerSource.src=j;document.getElementsByTagName("head")[0].appendChild(f.mediaplayer.elPlayerSource);}};}}f.util.Event.addListener(window,"load",f.mediaplayer.loadPlayerScript);if(typeof window.YAHOO=="undefined"){window.YAHOO={};}if(typeof window.YAHOO.mediaplayer=="undefined"){window.YAHOO.mediaplayer=f.mediaplayer;}if(typeof window.YAHOO.MediaPlayer=="undefined"){window.YAHOO.MediaPlayer=f.MediaPlayer;}if(typeof window.YAHOO.WebPlayer=="undefined"){window.YAHOO.WebPlayer=f.WebPlayer;}if(typeof window.YAHOO.namespace=="undefined"){window.YAHOO.namespace=f.namespace;}})();
