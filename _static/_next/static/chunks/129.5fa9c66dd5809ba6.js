"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{8679:function(t,e,r){var a=r(9864),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(t){return a.isMemo(t)?s:i[t.$$typeof]||n}i[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[a.Memo]=s;var l=Object.defineProperty,f=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,p=Object.prototype;t.exports=function t(e,r,a){if("string"!=typeof r){if(p){var n=u(r);n&&n!==p&&t(e,n,a)}var s=f(r);m&&(s=s.concat(m(r)));for(var i=c(e),y=c(r),h=0;h<s.length;++h){var g=s[h];if(!o[g]&&!(a&&a[g])&&!(y&&y[g])&&!(i&&i[g])){var b=d(r,g);try{l(e,g,b)}catch(t){}}}}return e}},4415:function(t,e){/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),e.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case n:case s:case o:case m:case d:return t;default:switch(t=t&&t.$$typeof){case l:case c:case f:case p:case u:case i:return t;default:return e}}case a:return e}}}(t)===n}},4954:function(t,e,r){t.exports=r(4415)},9921:function(t,e){/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,u=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case a:switch(t=t.type){case f:case m:case o:case i:case s:case u:return t;default:switch(t=t&&t.$$typeof){case l:case d:case h:case y:case c:return t;default:return e}}case n:return e}}}function k(t){return w(t)===m}e.AsyncMode=f,e.ConcurrentMode=m,e.ContextConsumer=l,e.ContextProvider=c,e.Element=a,e.ForwardRef=d,e.Fragment=o,e.Lazy=h,e.Memo=y,e.Portal=n,e.Profiler=i,e.StrictMode=s,e.Suspense=u,e.isAsyncMode=function(t){return k(t)||w(t)===f},e.isConcurrentMode=k,e.isContextConsumer=function(t){return w(t)===l},e.isContextProvider=function(t){return w(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===a},e.isForwardRef=function(t){return w(t)===d},e.isFragment=function(t){return w(t)===o},e.isLazy=function(t){return w(t)===h},e.isMemo=function(t){return w(t)===y},e.isPortal=function(t){return w(t)===n},e.isProfiler=function(t){return w(t)===i},e.isStrictMode=function(t){return w(t)===s},e.isSuspense=function(t){return w(t)===u},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===o||t===m||t===i||t===s||t===u||t===p||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===y||t.$$typeof===c||t.$$typeof===l||t.$$typeof===d||t.$$typeof===b||t.$$typeof===v||t.$$typeof===x||t.$$typeof===g)},e.typeOf=w},9864:function(t,e,r){t.exports=r(9921)},7129:function(t,e,r){r.d(e,{U4:function(){return en},pT:function(){return eb},LG:function(){return eE}});var a,n,o=r(5893),s=r(7294),i=r.t(s,2),c=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){if(this.ctr%(this.isSpeedy?65e3:1)==0){var e;this._insertTag(((e=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&e.setAttribute("nonce",this.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(r);try{a.insertRule(t,a.cssRules.length)}catch(t){}}else r.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},t}(),l=Math.abs,f=String.fromCharCode,m=Object.assign;function d(t,e,r){return t.replace(e,r)}function u(t,e){return t.indexOf(e)}function p(t,e){return 0|t.charCodeAt(e)}function y(t,e,r){return t.slice(e,r)}function h(t){return t.length}function g(t,e){return e.push(t),t}var b=1,v=1,x=0,w=0,k=0,S="";function $(t,e,r,a,n,o,s){return{value:t,root:e,parent:r,type:a,props:n,children:o,line:b,column:v,length:s,return:""}}function C(t,e){return m($("",null,null,"",null,null,0),t,{length:-t.length},e)}function O(){return k=w<x?p(S,w++):0,v++,10===k&&(v=1,b++),k}function _(){return p(S,w)}function A(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(t){return b=v=1,x=h(S=t),w=0,[]}function z(t){var e,r;return(e=w-1,r=function t(e){for(;O();)switch(k){case e:return w;case 34:case 39:34!==e&&39!==e&&t(k);break;case 40:41===e&&t(e);break;case 92:O()}return w}(91===t?t+2:40===t?t+1:t),y(S,e,r)).trim()}var N="-ms-",j="-moz-",Y="-webkit-",P="comm",M="rule",X="decl",T="@keyframes";function R(t,e){for(var r="",a=t.length,n=0;n<a;n++)r+=e(t[n],n,t,e)||"";return r}function F(t,e,r,a){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case X:return t.return=t.return||t.value;case P:return"";case T:return t.return=t.value+"{"+R(t.children,a)+"}";case M:t.value=t.props.join(",")}return h(r=R(t.children,a))?t.return=t.value+"{"+r+"}":""}function I(t,e,r,a,n,o,s,i,c,f,m){for(var u=n-1,p=0===n?o:[""],h=p.length,g=0,b=0,v=0;g<a;++g)for(var x=0,w=y(t,u+1,u=l(b=s[g])),k=t;x<h;++x)(k=(b>0?p[x]+" "+w:d(w,/&\f/g,p[x])).trim())&&(c[v++]=k);return $(t,e,r,0===n?M:i,c,f,m)}function V(t,e,r,a){return $(t,e,r,X,y(t,0,a),y(t,a+1,-1),a)}var D=function(t,e,r){for(var a=0,n=0;a=n,n=_(),38===a&&12===n&&(e[r]=1),!A(n);)O();return y(S,t,w)},G=function(t,e){var r=-1,a=44;do switch(A(a)){case 0:38===a&&12===_()&&(e[r]=1),t[r]+=D(w-1,e,r);break;case 2:t[r]+=z(a);break;case 4:if(44===a){t[++r]=58===_()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=f(a)}while(a=O());return t},L=function(t,e){var r;return r=G(E(t),e),S="",r},W=new WeakMap,B=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||W.get(r))&&!a){W.set(t,!0);for(var n=[],o=L(e,n),s=r.props,i=0,c=0;i<o.length;i++)for(var l=0;l<s.length;l++,c++)t.props[c]=n[i]?o[i].replace(/&\f/g,s[l]):s[l]+" "+o[i]}}},U=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}},q=[function(t,e,r,a){if(t.length>-1&&!t.return)switch(t.type){case X:t.return=function t(e,r){switch(45^p(e,0)?(((r<<2^p(e,0))<<2^p(e,1))<<2^p(e,2))<<2^p(e,3):0){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+j+e+N+e+e;case 6828:case 4268:return Y+e+N+e+e;case 6165:return Y+e+N+"flex-"+e+e;case 5187:return Y+e+d(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return Y+e+N+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return Y+e+N+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return Y+e+N+d(e,"shrink","negative")+e;case 5292:return Y+e+N+d(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+d(e,"-grow","")+Y+e+N+d(e,"grow","positive")+e;case 4554:return Y+d(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-r>6)switch(p(e,r+1)){case 109:if(45!==p(e,r+4))break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+j+(108==p(e,r+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?t(d(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==p(e,r+1))break;case 6444:switch(p(e,h(e)-3-(~u(e,"!important")&&10))){case 107:return d(e,":",":"+Y)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(45===p(e,14)?"inline-":"")+"box$3$1"+Y+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(p(e,r+11)){case 114:return Y+e+N+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+N+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+N+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Y+e+N+e+e}return e}(t.value,t.length);break;case T:return R([C(t,{value:d(t.value,"@","@"+Y)})],a);case M:if(t.length)return t.props.map(function(e){var r;switch(r=e,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return R([C(t,{props:[d(e,/:(read-\w+)/,":"+j+"$1")]})],a);case"::placeholder":return R([C(t,{props:[d(e,/:(plac\w+)/,":"+Y+"input-$1")]}),C(t,{props:[d(e,/:(plac\w+)/,":"+j+"$1")]}),C(t,{props:[d(e,/:(plac\w+)/,N+"input-$1")]})],a)}return""}).join("")}}];function H(t,e,r){var a="";return r.split(" ").forEach(function(r){void 0!==t[r]?e.push(t[r]+";"):a+=r+" "}),a}var Z=function(t,e,r){var a=t.key+"-"+e.name;!1===r&&void 0===t.registered[a]&&(t.registered[a]=e.styles)},J=function(t,e,r){Z(t,e,r);var a=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var n=e;do t.insert(e===n?"."+a:"",n,t.sheet,!0),n=n.next;while(void 0!==n)}},K={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q=/[A-Z]|^ms/g,tt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,te=function(t){return 45===t.charCodeAt(1)},tr=function(t){return null!=t&&"boolean"!=typeof t},ta=(a=Object.create(null),function(t){return void 0===a[t]&&(a[t]=te(t)?t:t.replace(Q,"-$&").toLowerCase()),a[t]}),tn=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(tt,function(t,e,r){return n={name:e,styles:r,next:n},e})}return 1===K[t]||te(t)||"number"!=typeof e||0===e?e:e+"px"};function to(t,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return n={name:r.name,styles:r.styles,next:n},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)n={name:a.name,styles:a.styles,next:n},a=a.next;return r.styles+";"}return function(t,e,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=to(t,e,r[n])+";";else for(var o in r){var s=r[o];if("object"!=typeof s)null!=e&&void 0!==e[s]?a+=o+"{"+e[s]+"}":tr(s)&&(a+=ta(o)+":"+tn(o,s)+";");else if(Array.isArray(s)&&"string"==typeof s[0]&&(null==e||void 0===e[s[0]]))for(var i=0;i<s.length;i++)tr(s[i])&&(a+=ta(o)+":"+tn(o,s[i])+";");else{var c=to(t,e,s);switch(o){case"animation":case"animationName":a+=ta(o)+":"+c+";";break;default:a+=o+"{"+c+"}"}}}return a}(t,e,r);case"function":if(void 0!==t){var o=n,s=r(t);return n=o,to(t,e,s)}}if(null==e)return r;var i=e[r];return void 0!==i?i:r}var ts=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ti=function(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var a,o=!0,s="";n=void 0;var i=t[0];null==i||void 0===i.raw?(o=!1,s+=to(r,e,i)):s+=i[0];for(var c=1;c<t.length;c++)s+=to(r,e,t[c]),o&&(s+=i[c]);ts.lastIndex=0;for(var l="";null!==(a=ts.exec(s));)l+="-"+a[1];return{name:function(t){for(var e,r=0,a=0,n=t.length;n>=4;++a,n-=4)e=(65535&(e=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(65535&e)*1540483477+((e>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(255&t.charCodeAt(a+2))<<16;case 2:r^=(255&t.charCodeAt(a+1))<<8;case 1:r^=255&t.charCodeAt(a),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(s)+l,styles:s,next:n}},tc=!!i.useInsertionEffect&&i.useInsertionEffect,tl=tc||function(t){return t()};tc||s.useLayoutEffect;var tf={}.hasOwnProperty,tm=s.createContext("undefined"!=typeof HTMLElement?function(t){var e,r,a,n,o,s=t.key;if("css"===s){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))})}var l=t.stylisPlugins||q,m={},x=[];n=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+s+' "]'),function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)m[e[r]]=!0;x.push(t)});var C=(r=(e=[B,U].concat(l,[F,(a=function(t){o.insert(t)},function(t){!t.root&&(t=t.return)&&a(t)})])).length,function(t,a,n,o){for(var s="",i=0;i<r;i++)s+=e[i](t,a,n,o)||"";return s}),N=function(t){var e,r;return R((r=function t(e,r,a,n,o,s,i,c,l){for(var m,x=0,C=0,E=i,N=0,j=0,Y=0,M=1,X=1,T=1,R=0,F="",D=o,G=s,L=n,W=F;X;)switch(Y=R,R=O()){case 40:if(108!=Y&&58==p(W,E-1)){-1!=u(W+=d(z(R),"&","&\f"),"&\f")&&(T=-1);break}case 34:case 39:case 91:W+=z(R);break;case 9:case 10:case 13:case 32:W+=function(t){for(;k=_();)if(k<33)O();else break;return A(t)>2||A(k)>3?"":" "}(Y);break;case 92:W+=function(t,e){for(var r;--e&&O()&&!(k<48)&&!(k>102)&&(!(k>57)||!(k<65))&&(!(k>70)||!(k<97)););return r=w+(e<6&&32==_()&&32==O()),y(S,t,r)}(w-1,7);continue;case 47:switch(_()){case 42:case 47:g($(m=function(t,e){for(;O();)if(t+k===57)break;else if(t+k===84&&47===_())break;return"/*"+y(S,e,w-1)+"*"+f(47===t?t:O())}(O(),w),r,a,P,f(k),y(m,2,-2),0),l);break;default:W+="/"}break;case 123*M:c[x++]=h(W)*T;case 125*M:case 59:case 0:switch(R){case 0:case 125:X=0;case 59+C:-1==T&&(W=d(W,/\f/g,"")),j>0&&h(W)-E&&g(j>32?V(W+";",n,a,E-1):V(d(W," ","")+";",n,a,E-2),l);break;case 59:W+=";";default:if(g(L=I(W,r,a,x,C,o,c,F,D=[],G=[],E),s),123===R){if(0===C)t(W,r,L,L,D,s,E,c,G);else switch(99===N&&110===p(W,3)?100:N){case 100:case 108:case 109:case 115:t(e,L,L,n&&g(I(e,L,L,0,0,o,c,F,o,D=[],E),G),o,G,E,c,n?D:G);break;default:t(W,L,L,L,[""],G,0,c,G)}}}x=C=j=0,M=T=1,F=W="",E=i;break;case 58:E=1+h(W),j=Y;default:if(M<1){if(123==R)--M;else if(125==R&&0==M++&&125==(k=w>0?p(S,--w):0,v--,10===k&&(v=1,b--),k))continue}switch(W+=f(R),R*M){case 38:T=C>0?1:(W+="\f",-1);break;case 44:c[x++]=(h(W)-1)*T,T=1;break;case 64:45===_()&&(W+=z(O())),N=_(),C=E=h(F=W+=function(t){for(;!A(_());)O();return y(S,t,w)}(w)),R++;break;case 45:45===Y&&2==h(W)&&(M=0)}}return s}("",null,null,null,[""],e=E(e=t),0,[0],e),S="",r),C)},j={key:s,sheet:new c({key:s,container:n,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:m,registered:{},insert:function(t,e,r,a){o=r,N(t?t+"{"+e.styles+"}":e.styles),a&&(j.inserted[e.name]=!0)}};return j.sheet.hydrate(x),j}({key:"css"}):null);tm.Provider;var td=function(t){return(0,s.forwardRef)(function(e,r){return t(e,(0,s.useContext)(tm),r)})},tu=s.createContext({}),tp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ty=function(t,e){var r={};for(var a in e)tf.call(e,a)&&(r[a]=e[a]);return r[tp]=t,r},th=function(t){var e=t.cache,r=t.serialized,a=t.isStringTag;return Z(e,r,a),tl(function(){return J(e,r,a)}),null},tg=td(function(t,e,r){var a=t.css;"string"==typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var n=t[tp],o=[a],i="";"string"==typeof t.className?i=H(e.registered,o,t.className):null!=t.className&&(i=t.className+" ");var c=ti(o,void 0,s.useContext(tu));i+=e.key+"-"+c.name;var l={};for(var f in t)tf.call(t,f)&&"css"!==f&&f!==tp&&(l[f]=t[f]);return l.ref=r,l.className=i,s.createElement(s.Fragment,null,s.createElement(th,{cache:e,serialized:c,isStringTag:"string"==typeof n}),s.createElement(n,l))});r(8679);var tb=o.Fragment;function tv(t,e,r){return tf.call(e,"css")?o.jsx(tg,ty(t,e),r):o.jsx(t,e,r)}function tx(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return ti(e)}var tw=function(){var t=tx.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},tk=function t(e){for(var r=e.length,a=0,n="";a<r;a++){var o=e[a];if(null!=o){var s=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))s=t(o);else for(var i in s="",o)o[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=o}s&&(n&&(n+=" "),n+=s)}}return n},tS=function(t){var e=t.cache,r=t.serializedArr;return tl(function(){for(var t=0;t<r.length;t++)J(e,r[t],!1)}),null},t$=td(function(t,e){var r=[],a=function(){for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];var o=ti(a,e.registered);return r.push(o),Z(e,o,!1),e.key+"-"+o.name},n={css:a,cx:function(){for(var t,r,n,o,s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return t=e.registered,o=H(t,n=[],r=tk(i)),n.length<2?r:o+a(n)},theme:s.useContext(tu)},o=t.children(n);return s.createElement(s.Fragment,null,s.createElement(tS,{cache:e,serializedArr:r}),o)}),tC=Object.defineProperty,tO=(t,e,r)=>e in t?tC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,t_=(t,e,r)=>(tO(t,"symbol"!=typeof e?e+"":e,r),r),tA=new Map,tE=new WeakMap,tz=0,tN=void 0;function tj(t,e,r={},a=tN){if(void 0===window.IntersectionObserver&&void 0!==a){let n=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:n,observer:o,elements:s}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var r;return`${e}_${"root"===e?(r=t.root)?(tE.has(r)||(tz+=1,tE.set(r,tz.toString())),tE.get(r)):"0":t[e]}`}).toString(),r=tA.get(e);if(!r){let a;let n=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{var r;let o=e.isIntersecting&&a.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(r=n.get(e.target))||r.forEach(t=>{t(o,e)})})},t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:o,elements:n},tA.set(e,r)}return r}(r),i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(e),o.observe(t),function(){i.splice(i.indexOf(e),1),0===i.length&&(s.delete(t),o.unobserve(t)),0===s.size&&(o.disconnect(),tA.delete(n))}}var tY=class extends s.Component{constructor(t){super(t),t_(this,"node",null),t_(this,"_unobserveCb",null),t_(this,"handleNode",t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),t_(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:o}=this.props;this._unobserveCb=tj(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:e,entry:r}=this.state;return t({inView:e,entry:r,ref:this.handleNode})}let{as:e,triggerOnce:r,threshold:a,root:n,rootMargin:o,onChange:i,skip:c,trackVisibility:l,delay:f,initialInView:m,fallbackInView:d,...u}=this.props;return s.createElement(e||"div",{ref:this.handleNode,...u},t)}};function tP({threshold:t,delay:e,trackVisibility:r,rootMargin:a,root:n,triggerOnce:o,skip:i,initialInView:c,fallbackInView:l,onChange:f}={}){var m;let[d,u]=s.useState(null),p=s.useRef(),[y,h]=s.useState({inView:!!c,entry:void 0});p.current=f,s.useEffect(()=>{let s;if(!i&&d)return s=tj(d,(t,e)=>{h({inView:t,entry:e}),p.current&&p.current(t,e),e.isIntersecting&&o&&s&&(s(),s=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:r,delay:e},l),()=>{s&&s()}},[Array.isArray(t)?t.toString():t,d,n,a,o,i,r,l,e]);let g=null==(m=y.entry)?void 0:m.target,b=s.useRef();d||!g||o||i||b.current===g||(b.current=g,h({inView:!!c,entry:void 0}));let v=[u,y.inView,y.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var tM=r(4954);let tX=tw`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,tT=tw`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,tR=tw`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,tF=tw`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,tI=tw`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,tV=tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tD=tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tG=tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tL=tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tW=tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,tB=tw`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,tU=tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tq=tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tH=tw`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,tZ=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tJ=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tK=tw`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tQ=tw`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t0=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t1=tw`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t3=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t5=tw`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t4=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t2=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t9=tw`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t6=tw`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function t7(t){var e;return e=()=>null,r=>r?t():e()}function t8(t){return t7(()=>({opacity:0}))(t)}let et=t=>{let{cascade:e=!1,damping:r=.5,delay:a=0,duration:n=1e3,fraction:o=0,keyframes:i=t0,triggerOnce:c=!1,className:l,style:f,childClassName:m,childStyle:d,children:u,onVisibilityChange:p}=t,y=(0,s.useMemo)(()=>(function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:a=t0,iterationCount:n=1}){return tx`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:i,duration:n}),[n,i]);return void 0==u?null:"string"==typeof u||"number"==typeof u||"boolean"==typeof u?tv(er,{...t,animationStyles:y,children:String(u)}):(0,tM.isFragment)(u)?tv(ea,{...t,animationStyles:y}):tv(tb,{children:s.Children.map(u,(i,u)=>{if(!(0,s.isValidElement)(i))return null;let h=a+(e?u*n*r:0);switch(i.type){case"ol":case"ul":return tv(t$,{children:({cx:e})=>tv(i.type,{...i.props,className:e(l,i.props.className),style:Object.assign({},f,i.props.style),children:tv(et,{...t,children:i.props.children})})});case"li":return tv(tY,{threshold:o,triggerOnce:c,onChange:p,children:({inView:t,ref:e})=>tv(t$,{children:({cx:r})=>tv(i.type,{...i.props,ref:e,className:r(m,i.props.className),css:t7(()=>y)(t),style:Object.assign({},d,i.props.style,t8(!t),{animationDelay:h+"ms"})})})});default:return tv(tY,{threshold:o,triggerOnce:c,onChange:p,children:({inView:t,ref:e})=>tv("div",{ref:e,className:l,css:t7(()=>y)(t),style:Object.assign({},f,t8(!t),{animationDelay:h+"ms"}),children:tv(t$,{children:({cx:t})=>tv(i.type,{...i.props,className:t(m,i.props.className),style:Object.assign({},d,i.props.style)})})})})}})})},ee={display:"inline-block",whiteSpace:"pre"},er=t=>{var e,r;let{animationStyles:a,cascade:n=!1,damping:o=.5,delay:s=0,duration:i=1e3,fraction:c=0,triggerOnce:l=!1,className:f,style:m,children:d,onVisibilityChange:u}=t,{ref:p,inView:y}=tP({triggerOnce:l,threshold:c,onChange:u});return(e=()=>tv("div",{ref:p,className:f,style:Object.assign({},m,ee),children:d.split("").map((t,e)=>tv("span",{css:t7(()=>a)(y),style:{animationDelay:s+e*i*o+"ms"},children:t},e))}),r=()=>tv(ea,{...t,children:d}),r=>r?e():r())(n)},ea=t=>{let{animationStyles:e,fraction:r=0,triggerOnce:a=!1,className:n,style:o,children:s,onVisibilityChange:i}=t,{ref:c,inView:l}=tP({triggerOnce:a,threshold:r,onChange:i});return tv("div",{ref:c,className:n,css:t7(()=>e)(l),style:Object.assign({},o,t8(!l)),children:s})},en=t=>{let{effect:e="bounce",style:r,...a}=t,[n,o]=(0,s.useMemo)(()=>(function(t){switch(t){case"bounce":return[tX,{transformOrigin:"center bottom"}];case"flash":return[tT];case"headShake":return[tR,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[tF,{animationTimingFunction:"ease-in-out"}];case"jello":return[tI,{transformOrigin:"center"}];case"pulse":return[tV,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[tD];case"shake":return[tG];case"shakeX":return[tL];case"shakeY":return[tW];case"swing":return[tB,{transformOrigin:"top center"}];case"tada":return[tU];case"wobble":return[tq]}})(e),[e]);return tv(et,{keyframes:n,style:Object.assign({},r,o),...a})};tw`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,tw`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,tw`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,tw`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,tw`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;let eo=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,es=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,ei=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,ec=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,el=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,ef=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,em=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ed=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,eu=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ep=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,ey=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,eh=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,eg=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,eb=t=>{let{big:e=!1,direction:r,reverse:a=!1,...n}=t,o=(0,s.useMemo)(()=>(function(t,e,r){switch(r){case"bottom-left":return e?es:tZ;case"bottom-right":return e?ei:tJ;case"down":return t?e?el:tQ:e?ec:tK;case"left":return t?e?em:t1:e?ef:t0;case"right":return t?e?eu:t5:e?ed:t3;case"top-left":return e?ep:t4;case"top-right":return e?ey:t2;case"up":return t?e?eg:t6:e?eh:t9;default:return e?eo:tH}})(e,a,r),[e,r,a]);return tv(et,{keyframes:o,...n})};tw`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,tw`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tw`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tw`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,tw`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,tw`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,tw`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;let ev=tw`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,ex=tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ew=tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ek=tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eS=tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,e$=tw`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,eC=tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eO=tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,e_=tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,eA=tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eE=t=>{let{direction:e,reverse:r=!1,...a}=t,n=(0,s.useMemo)(()=>(function(t,e){switch(e){case"down":return t?eC:ex;case"left":return t?eO:ew;case"right":return t?e_:ek;case"up":return t?eA:eS;default:return t?e$:ev}})(r,e),[e,r]);return tv(et,{keyframes:n,...a})}}}]);