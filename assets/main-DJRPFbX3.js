var Lh=Object.defineProperty;var Fh=(r,t,e)=>t in r?Lh(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var jt=(r,t,e)=>Fh(r,typeof t!="symbol"?t+"":t,e);import"./style-BPFPZbXq.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr=globalThis,Ls=wr.trustedTypes,$o=Ls?Ls.createPolicy("lit-html",{createHTML:r=>r}):void 0,Oc="$lit$",Gn=`lit$${Math.random().toFixed(9).slice(2)}$`,Bc="?"+Gn,Uh=`<${Bc}>`,Ai=document,Fr=()=>Ai.createComment(""),Ur=r=>r===null||typeof r!="object"&&typeof r!="function",vo=Array.isArray,Ih=r=>vo(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ea=`[ 	
\f\r]`,vr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jo=/-->/g,Ko=/>/g,si=RegExp(`>|${ea}(?:([^\\s"'>=/]+)(${ea}*=${ea}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zo=/'/g,Jo=/"/g,zc=/^(?:script|style|textarea|title)$/i,Nh=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Fn=Nh(1),Ir=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),Qo=new WeakMap,_i=Ai.createTreeWalker(Ai,129);function kc(r,t){if(!vo(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return $o!==void 0?$o.createHTML(t):t}const Oh=(r,t)=>{const e=r.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",a=vr;for(let o=0;o<e;o++){const l=r[o];let c,u,h=-1,d=0;for(;d<l.length&&(a.lastIndex=d,u=a.exec(l),u!==null);)d=a.lastIndex,a===vr?u[1]==="!--"?a=jo:u[1]!==void 0?a=Ko:u[2]!==void 0?(zc.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=si):u[3]!==void 0&&(a=si):a===si?u[0]===">"?(a=i??vr,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?si:u[3]==='"'?Jo:Zo):a===Jo||a===Zo?a=si:a===jo||a===Ko?a=vr:(a=si,i=void 0);const m=a===si&&r[o+1].startsWith("/>")?" ":"";s+=a===vr?l+Uh:h>=0?(n.push(c),l.slice(0,h)+Oc+l.slice(h)+Gn+m):l+Gn+(h===-2?o:m)}return[kc(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Nr{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,a=0;const o=t.length-1,l=this.parts,[c,u]=Oh(t,e);if(this.el=Nr.createElement(c,n),_i.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=_i.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Oc)){const d=u[a++],m=i.getAttribute(h).split(Gn),g=/([.?@])?(.*)/.exec(d);l.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?zh:g[1]==="?"?kh:g[1]==="@"?Hh:Vs}),i.removeAttribute(h)}else h.startsWith(Gn)&&(l.push({type:6,index:s}),i.removeAttribute(h));if(zc.test(i.tagName)){const h=i.textContent.split(Gn),d=h.length-1;if(d>0){i.textContent=Ls?Ls.emptyScript:"";for(let m=0;m<d;m++)i.append(h[m],Fr()),_i.nextNode(),l.push({type:2,index:++s});i.append(h[d],Fr())}}}else if(i.nodeType===8)if(i.data===Bc)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(Gn,h+1))!==-1;)l.push({type:7,index:s}),h+=Gn.length-1}s++}}static createElement(t,e){const n=Ai.createElement("template");return n.innerHTML=t,n}}function rr(r,t,e=r,n){var a,o;if(t===Ir)return t;let i=n!==void 0?(a=e._$Co)==null?void 0:a[n]:e._$Cl;const s=Ur(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=i:e._$Cl=i),i!==void 0&&(t=rr(r,i._$AS(r,t.values),i,n)),t}class Bh{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??Ai).importNode(e,!0);_i.currentNode=i;let s=_i.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new qr(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Gh(s,this,t)),this._$AV.push(c),l=n[++o]}a!==(l==null?void 0:l.index)&&(s=_i.nextNode(),a++)}return _i.currentNode=Ai,i}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class qr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=rr(this,t,e),Ur(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==Ir&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ih(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&Ur(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ai.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Nr.createElement(kc(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(e);else{const a=new Bh(i,this),o=a.u(this.options);a.p(e),this.T(o),this._$AH=a}}_$AC(t){let e=Qo.get(t.strings);return e===void 0&&Qo.set(t.strings,e=new Nr(t)),e}k(t){vo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const s of t)i===e.length?e.push(n=new qr(this.O(Fr()),this.O(Fr()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Vs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=me}_$AI(t,e=this,n,i){const s=this.strings;let a=!1;if(s===void 0)t=rr(this,t,e,0),a=!Ur(t)||t!==this._$AH&&t!==Ir,a&&(this._$AH=t);else{const o=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=rr(this,o[n+l],e,l),c===Ir&&(c=this._$AH[l]),a||(a=!Ur(c)||c!==this._$AH[l]),c===me?t=me:t!==me&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!i&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zh extends Vs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}}class kh extends Vs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}class Hh extends Vs{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=rr(this,t,e,0)??me)===Ir)return;const n=this._$AH,i=t===me&&n!==me||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==me&&(n===me||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Gh{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){rr(this,t)}}const na=wr.litHtmlPolyfillSupport;na==null||na(Nr,qr),(wr.litHtmlVersions??(wr.litHtmlVersions=[])).push("3.3.0");const Hc=(r,t,e)=>{const n=t;let i=n._$litPart$;return i===void 0&&(n._$litPart$=i=new qr(t.insertBefore(Fr(),null),null,void 0,{})),i._$AI(r),i},Vh=r=>{const{isLoaded:t,isHorizontal:e}=r,n="BODEN CHEN",i="title-container absolute w-[90%] text-center",o=t?`${i} ${t?e?"loaded-horizontal":"loaded-vertical":""}`:`${i} ${e?"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":"vertical-initial"}`,l=n.split("").map((c,u)=>{const h=c===" "?Fn`&nbsp;`:c;return Fn`<span
            class="char-wrapper"
            style="--char-index: ${u};"
            aria-hidden="true"
        >
            <span class="char">${h}</span>
        </span>`});return Fn`
        <style>
            /* Simple, minimal per-letter intro: fade + rise */
            .title-text {
                display: inline-flex;
                gap: 0.02em;
                color: rgba(255, 255, 255, 0.5);
            }
            .char-wrapper {
                opacity: 0;
                transform: translateY(40%);
                will-change: opacity, transform;
            }
            .char-wrapper {
                animation: slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                    forwards;
                animation-delay: calc(var(--char-index) * 50ms);
            }
            .char {
                display: inline-block;
            }

            @keyframes slideIn {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* Respect reduced motion */
            @media (prefers-reduced-motion: reduce) {
                .char-wrapper {
                    opacity: 1 !important;
                    transform: none !important;
                    animation: none !important;
                }
            }
        </style>
        <div
            id="titleContainer"
            class="${o}"
            aria-label="Portfolio title"
        >
            <h1
                class="title-text font-bold leading-none whitespace-nowrap relative z-10"
                aria-label="${n}"
            >
                ${l}
            </h1>
        </div>
    `};function Cn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Gc(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ye={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sr={duration:.5,overwrite:!1,delay:0},xo,Me,Kt,tn=1e8,qt=1/tn,Ga=Math.PI*2,Wh=Ga/4,Xh=0,Vc=Math.sqrt,qh=Math.cos,Yh=Math.sin,ge=function(t){return typeof t=="string"},ne=function(t){return typeof t=="function"},In=function(t){return typeof t=="number"},Mo=function(t){return typeof t>"u"},xn=function(t){return typeof t=="object"},Pe=function(t){return t!==!1},yo=function(){return typeof window<"u"},ns=function(t){return ne(t)||ge(t)},Wc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},De=Array.isArray,Va=/(?:-?\.?\d|\.)+/gi,Xc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ki=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ia=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qc=/[+-]=-?[.\d]+/,Yc=/[^,'"\[\]\s]+/gi,$h=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,mn,Wa,Eo,$e={},Fs={},$c,jc=function(t){return(Fs=ar(t,$e))&&Be},So=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Or=function(t,e){return!e&&console.warn(t)},Kc=function(t,e){return t&&($e[t]=e)&&Fs&&(Fs[t]=e)||$e},Br=function(){return 0},jh={suppressEvents:!0,isStart:!0,kill:!1},ws={suppressEvents:!0,kill:!1},Kh={suppressEvents:!0},Do={},jn=[],Xa={},Zc,Ve={},ra={},tl=30,Cs=[],To="",bo=function(t){var e=t[0],n,i;if(xn(e)||ne(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Cs.length;i--&&!Cs[i].targetTest(e););n=Cs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new yu(t[i],n)))||t.splice(i,1);return t},vi=function(t){return t._gsap||bo(en(t))[0]._gsap},Jc=function(t,e,n){return(n=t[e])&&ne(n)?t[e]():Mo(n)&&t.getAttribute&&t.getAttribute(e)||n},Le=function(t,e){return(t=t.split(",")).forEach(e)||t},se=function(t){return Math.round(t*1e5)/1e5||0},ce=function(t){return Math.round(t*1e7)/1e7||0},Qi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Zh=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Us=function(){var t=jn.length,e=jn.slice(0),n,i;for(Xa={},jn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ao=function(t){return!!(t._initted||t._startAt||t.add)},Qc=function(t,e,n,i){jn.length&&!Me&&Us(),t.render(e,n,!!(Me&&e<0&&Ao(t))),jn.length&&!Me&&Us()},tu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Yc).length<2?e:ge(t)?t.trim():t},eu=function(t){return t},je=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Jh=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ar=function(t,e){for(var n in e)t[n]=e[n];return t},el=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=xn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Is=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Cr=function(t){var e=t.parent||Jt,n=t.keyframes?Jh(De(t.keyframes)):je;if(Pe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Qh=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},nu=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ws=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Qn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},xi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},td=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},qa=function(t,e,n,i){return t._startAt&&(Me?t._startAt.revert(ws):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},ed=function r(t){return!t||t._ts&&r(t.parent)},nl=function(t){return t._repeat?or(t._tTime,t=t.duration()+t._rDelay)*t:0},or=function(t,e){var n=Math.floor(t=ce(t/e));return t&&n===t?n-1:n},Ns=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Xs=function(t){return t._end=ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||qt)||0))},qs=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Xs(t),n._dirty||xi(n,t)),t},iu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ns(t.rawTime(),e),(!e._dur||Yr(0,e.totalDuration(),n)-e._tTime>qt)&&e.render(n,!0)),xi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-qt}},gn=function(t,e,n,i){return e.parent&&Qn(e),e._start=ce((In(n)?n:n||t!==Jt?Ze(t,n,e):t._time)+e._delay),e._end=ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),nu(t,e,"_first","_last",t._sort?"_start":0),Ya(e)||(t._recent=e),i||iu(t,e),t._ts<0&&qs(t,t._tTime),t},ru=function(t,e){return($e.ScrollTrigger||So("scrollTrigger",e))&&$e.ScrollTrigger.create(e,t)},su=function(t,e,n,i,s){if(Co(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Me&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zc!==We.frame)return jn.push(t),t._lazy=[s,i],1},nd=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ya=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},id=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&nd(t)&&!(!t._initted&&Ya(t))||(t._ts<0||t._dp._ts<0)&&!Ya(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=Yr(0,t._tDur,e),u=or(l,o),t._yoyo&&u&1&&(a=1-a),u!==or(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Me||i||t._zTime===qt||!e&&t._zTime){if(!t._initted&&su(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?qt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&qa(t,e,n,!0),t._onUpdate&&!n&&Xe(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Xe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Qn(t,1),!n&&!Me&&(Xe(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},rd=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},lr=function(t,e,n,i){var s=t._repeat,a=ce(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ce(a*(s+1)+t._rDelay*s):a,o>0&&!i&&qs(t,t._tTime=t._tDur*o),t.parent&&Xs(t),n||xi(t.parent,t),t},il=function(t){return t instanceof Ce?xi(t):lr(t,t._dur)},sd={_start:0,endTime:Br,totalDuration:Br},Ze=function r(t,e,n){var i=t.labels,s=t._recent||sd,a=t.duration()>=tn?s.endTime(!1):t._dur,o,l,c;return ge(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(De(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Rr=function(t,e,n){var i=In(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Pe(l.vars.inherit)&&l.parent;a.immediateRender=Pe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new le(e[0],a,e[s+1])},ni=function(t,e){return t||t===0?e(t):e},Yr=function(t,e,n){return n<t?t:n>e?e:n},Se=function(t,e){return!ge(t)||!(e=$h.exec(t))?"":e[1]},ad=function(t,e,n){return ni(n,function(i){return Yr(t,e,i)})},$a=[].slice,au=function(t,e){return t&&xn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&xn(t[0]))&&!t.nodeType&&t!==mn},od=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ge(i)&&!e||au(i,1)?(s=n).push.apply(s,en(i)):n.push(i)})||n},en=function(t,e,n){return Kt&&!e&&Kt.selector?Kt.selector(t):ge(t)&&!n&&(Wa||!cr())?$a.call((e||Eo).querySelectorAll(t),0):De(t)?od(t,n):au(t)?$a.call(t,0):t?[t]:[]},ja=function(t){return t=en(t)[0]||Or("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return en(e,n.querySelectorAll?n:n===t?Or("Invalid scope")||Eo.createElement("div"):t)}},ou=function(t){return t.sort(function(){return .5-Math.random()})},lu=function(t){if(ne(t))return t;var e=xn(t)?t:{each:t},n=Mi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return ge(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,m,g){var _=(g||e).length,p=a[_],f,y,v,E,M,b,A,R,x;if(!p){if(x=e.grid==="auto"?0:(e.grid||[1,tn])[1],!x){for(A=-tn;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=a[_]=[],f=l?Math.min(x,_)*u-.5:i%x,y=x===tn?0:l?_*h/x-.5:i/x|0,A=0,R=tn,b=0;b<_;b++)v=b%x-f,E=y-(b/x|0),p[b]=M=c?Math.abs(c==="y"?E:v):Vc(v*v+E*E),M>A&&(A=M),M<R&&(R=M);i==="random"&&ou(p),p.max=A-R,p.min=R,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Se(e.amount||e.each)||0,n=n&&_<0?vu(n):n}return _=(p[d]-p.min)/p.max||0,ce(p.b+(n?n(_):_)*p.v)+p.u}},Ka=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(In(n)?0:Se(n))}},cu=function(t,e){var n=De(t),i,s;return!n&&xn(t)&&(i=n=t.radius||tn,t.values?(t=en(t.values),(s=!In(t[0]))&&(i*=i)):t=Ka(t.increment)),ni(e,n?ne(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=tn,u=0,h=t.length,d,m;h--;)s?(d=t[h].x-o,m=t[h].y-l,d=d*d+m*m):d=Math.abs(t[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:a,s||u===a||In(a)?u:u+Se(a)}:Ka(t))},uu=function(t,e,n,i){return ni(De(t)?!e:n===!0?!!(n=0):!i,function(){return De(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},ld=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},cd=function(t,e){return function(n){return t(parseFloat(n))+(e||Se(n))}},ud=function(t,e,n){return du(t,e,0,1,n)},hu=function(t,e,n){return ni(n,function(i){return t[~~e(i)]})},hd=function r(t,e,n){var i=e-t;return De(t)?hu(t,r(0,t.length),e):ni(n,function(s){return(i+(s-t)%i)%i+t})},dd=function r(t,e,n){var i=e-t,s=i*2;return De(t)?hu(t,r(0,t.length-1),e):ni(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},zr=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?Yc:Va),n+=t.substr(e,i-e)+uu(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},du=function(t,e,n,i,s){var a=e-t,o=i-n;return ni(s,function(l){return n+((l-t)/a*o||0)})},fd=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=ge(t),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(De(t)&&!De(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else i||(t=ar(De(t)?[]:{},t));if(!u){for(l in e)wo.call(o,t,l,"get",e[l]);s=function(g){return Lo(g,o)||(a?t.p:t)}}}return ni(n,s)},rl=function(t,e,n){var i=t.labels,s=tn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Xe=function(t,e,n){var i=t.vars,s=i[e],a=Kt,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&jn.length&&Us(),o&&(Kt=o),u=l?s.apply(c,l):s.call(c),Kt=a,u},Dr=function(t){return Qn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Me),t.progress()<1&&Xe(t,"onInterrupt"),t},Zi,fu=[],pu=function(t){if(t)if(t=!t.name&&t.default||t,yo()||t.headless){var e=t.name,n=ne(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Br,render:Lo,add:wo,kill:Cd,modifier:wd,rawVars:0},a={targetTest:0,get:0,getSetter:Po,aliases:{},register:0};if(cr(),t!==i){if(Ve[e])return;je(i,je(Is(t,s),a)),ar(i.prototype,ar(s,Is(t,a))),Ve[i.prop=e]=i,t.targetTest&&(Cs.push(i),Do[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Kc(e,i),t.register&&t.register(Be,i,Fe)}else fu.push(t)},Xt=255,Tr={aqua:[0,Xt,Xt],lime:[0,Xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xt],navy:[0,0,128],white:[Xt,Xt,Xt],olive:[128,128,0],yellow:[Xt,Xt,0],orange:[Xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xt,0,0],pink:[Xt,192,203],cyan:[0,Xt,Xt],transparent:[Xt,Xt,Xt,0]},sa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Xt+.5|0},mu=function(t,e,n){var i=t?In(t)?[t>>16,t>>8&Xt,t&Xt]:0:Tr.black,s,a,o,l,c,u,h,d,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Tr[t])i=Tr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Xt,i&Xt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Xt,t&Xt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Va),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=sa(l+1/3,s,a),i[1]=sa(l,s,a),i[2]=sa(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Xc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Va)||Tr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Xt,a=i[1]/Xt,o=i[2]/Xt,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},_u=function(t){var e=[],n=[],i=-1;return t.split(Kn).forEach(function(s){var a=s.match(Ki)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},sl=function(t,e,n){var i="",s=(t+i).match(Kn),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=mu(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=_u(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Kn,"1").split(Ki),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Kn),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Kn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Tr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),pd=/hsl[a]?\(/,gu=function(t){var e=t.join(" "),n;if(Kn.lastIndex=0,Kn.test(e))return n=pd.test(e),t[1]=sl(t[1],n),t[0]=sl(t[0],n,_u(t[1])),!0},kr,We=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,m,g=function _(p){var f=r()-i,y=p===!0,v,E,M,b;if((f>t||f<0)&&(n+=f-e),i+=f,M=i-n,v=M-a,(v>0||y)&&(b=++h.frame,d=M-h.time*1e3,h.time=M=M/1e3,a+=v+(v>=s?4:s-v),E=1),y||(l=c(_)),E)for(m=0;m<o.length;m++)o[m](M,d,b,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){$c&&(!Wa&&yo()&&(mn=Wa=window,Eo=mn.document||{},$e.gsap=Be,(mn.gsapVersions||(mn.gsapVersions=[])).push(Be.version),jc(Fs||mn.GreenSockGlobals||!mn.gsap&&mn||{}),fu.forEach(pu)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},kr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),kr=0,c=Br},lagSmoothing:function(p,f){t=p||1/0,e=Math.min(f||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,f,y){var v=f?function(E,M,b,A){p(E,M,b,A),h.remove(v)}:p;return h.remove(p),o[y?"unshift":"push"](v),cr(),v},remove:function(p,f){~(f=o.indexOf(p))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},h}(),cr=function(){return!kr&&We.wake()},zt={},md=/^[\d.\-M][\d.\-,\s]/,_d=/["']/g,gd=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(_d,"").trim():+c,i=l.substr(o+1).trim();return e},vd=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},xd=function(t){var e=(t+"").split("("),n=zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[gd(e[1])]:vd(t).split(",").map(tu)):zt._CE&&md.test(t)?zt._CE("",t):n},vu=function(t){return function(e){return 1-t(1-e)}},xu=function r(t,e){for(var n=t._first,i;n;)n instanceof Ce?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Mi=function(t,e){return t&&(ne(t)?t:zt[t]||xd(t))||e},Pi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Le(t,function(o){zt[o]=$e[o]=s,zt[a=o.toLowerCase()]=n;for(var l in s)zt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=zt[o+"."+l]=s[l]}),s},Mu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},aa=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Ga*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Yh((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Mu(o);return s=Ga/s,l.config=function(c,u){return r(t,c,u)},l},oa=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Mu(n);return i.config=function(s){return r(t,s)},i};Le("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Pi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});zt.Linear.easeNone=zt.none=zt.Linear.easeIn;Pi("Elastic",aa("in"),aa("out"),aa());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Pi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Pi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Pi("Circ",function(r){return-(Vc(1-r*r)-1)});Pi("Sine",function(r){return r===1?1:-qh(r*Wh)+1});Pi("Back",oa("in"),oa("out"),oa());zt.SteppedEase=zt.steps=$e.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-qt;return function(o){return((i*Yr(0,a,o)|0)+s)*n}}};sr.ease=zt["quad.out"];Le("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return To+=r+","+r+"Params,"});var yu=function(t,e){this.id=Xh++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Jc,this.set=e?e.getSetter:Po},Hr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,lr(this,+e.duration,1,1),this.data=e.data,Kt&&(this._ctx=Kt,Kt.data.push(this)),kr||We.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,lr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(cr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(qs(this,n),!s._dp||s.parent||iu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===qt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?or(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-qt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ns(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-qt?0:this._rts,this.totalTime(Yr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Xs(this),td(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qt&&(this._tTime-=qt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Pe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ns(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Kh);var i=Me;return Me=n,Ao(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Me=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,il(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,il(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ze(this,n),Pe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pe(i)),this._dur||(this._zTime=-qt),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-qt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-qt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-qt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=ne(n)?n:eu,o=function(){var c=i.then;i.then=null,ne(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Dr(this)},r}();je(Hr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qt,_prom:0,_ps:!1,_rts:1});var Ce=function(r){Gc(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pe(n.sortChildren),Jt&&gn(n.parent||Jt,Cn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ru(Cn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Rr(0,arguments,this),this},e.from=function(i,s,a){return Rr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Rr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Cr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new le(i,s,Ze(this,a),1),this},e.call=function(i,s,a){return gn(this,le.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new le(i,a,Ze(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Cr(a).immediateRender=Pe(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Cr(o).immediateRender=Pe(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ce(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,m,g,_,p,f,y,v,E,M,b,A;if(this!==Jt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,E=this._start,v=this._ts,f=!v,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=ce(u%p),u===l?(_=this._repeat,d=c):(M=ce(u/p),_=~~M,_&&_===M&&(d=c,_--),d>c&&(d=c)),M=or(this._tTime,p),!o&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),b&&_&1&&(d=c-d,A=1),_!==M&&!this._lock){var R=b&&M&1,x=R===(b&&_&1);if(_<M&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(A?0:ce(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xe(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;xu(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=rd(this,ce(o),ce(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!M&&(Xe(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,a),d!==this._time||!this._ts&&!f){y=0,g&&(u+=this._zTime=-qt);break}}m=g}else{m=this._last;for(var D=i<0?i:d;m;){if(g=m._prev,(m._act||D<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,s,a||Me&&Ao(m)),d!==this._time||!this._ts&&!f){y=0,g&&(u+=this._zTime=D?-qt:qt);break}}m=g}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-qt)._zTime=d>=o?1:-1,this._ts))return this._start=E,Xs(this),this.render(i,s,a);this._onUpdate&&!s&&Xe(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Qn(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Xe(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(In(s)||(s=Ze(this,s,i)),!(i instanceof Hr)){if(De(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ge(i))return this.addLabel(i,s);if(ne(i))i=le.delayedCall(0,i);else return this}return this!==i?gn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-tn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof le?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return ge(i)?this.removeLabel(i):ne(i)?this.killTweensOf(i):(i.parent===this&&Ws(this,i),i===this._recent&&(this._recent=this._last),xi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ce(We.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ze(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=le.delayedCall(0,s||Br,a);return o.data="isPause",this._hasPause=1,gn(this,o,Ze(this,i))},e.removePause=function(i){var s=this._first;for(i=Ze(this,i);s;)s._start===i&&s.data==="isPause"&&Qn(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Vn!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=en(i),l=this._first,c=In(s),u;l;)l instanceof le?Zh(l._targets,o)&&(c?(!Vn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Ze(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,g=le.to(a,je({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||qt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&lr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,je({startAt:{time:Ze(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),rl(this,Ze(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),rl(this,Ze(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+qt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return xi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=tn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,gn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;lr(a,a===Jt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Jt._ts&&(Qc(Jt,Ns(i,Jt)),Zc=We.frame),We.frame>=tl){tl+=Ye.autoSleep||120;var s=Jt._first;if((!s||!s._ts)&&Ye.autoSleep&&We._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||We.sleep()}}},t}(Hr);je(Ce.prototype,{_lock:0,_hasPause:0,_forcing:0});var Md=function(t,e,n,i,s,a,o){var l=new Fe(this._pt,t,e,0,1,Au,null,s),c=0,u=0,h,d,m,g,_,p,f,y;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=zr(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),d=n.match(ia)||[];h=ia.exec(i);)g=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Qi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=ia.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(qc.test(i)||f)&&(l.e=0),this._pt=l,l},wo=function(t,e,n,i,s,a,o,l,c,u){ne(i)&&(i=i(s||0,t,a));var h=t[e],d=n!=="get"?n:ne(h)?c?t[e.indexOf("set")||!ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=ne(h)?c?Td:Tu:Ro,g;if(ge(i)&&(~i.indexOf("random(")&&(i=zr(i)),i.charAt(1)==="="&&(g=Qi(d,i)+(Se(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Za)return!isNaN(d*i)&&i!==""?(g=new Fe(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?Ad:bu,0,m),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&So(e,i),Md.call(this,t,e,d,i,m,l||Ye.stringFilter,c))},yd=function(t,e,n,i,s){if(ne(t)&&(t=Pr(t,s,e,n,i)),!xn(t)||t.style&&t.nodeType||De(t)||Wc(t))return ge(t)?Pr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Pr(t[o],s,e,n,i);return a},Eu=function(t,e,n,i,s,a){var o,l,c,u;if(Ve[t]&&(o=new Ve[t]).init(s,o.rawVars?e[t]:yd(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Fe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Zi))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Vn,Za,Co=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,f=t.parent,y=f&&f.data==="nested"?f.vars.targets:p,v=t._overwrite==="auto"&&!xo,E=t.timeline,M,b,A,R,x,D,B,G,L,U,O,j,k;if(E&&(!d||!s)&&(s="none"),t._ease=Mi(s,sr.ease),t._yEase=h?vu(Mi(h===!0?s:h,sr.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!E&&!!i.runBackwards,!E||d&&!i.stagger){if(G=p[0]?vi(p[0]).harness:0,j=G&&i[G.prop],M=Is(i,Do),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&g?ws:jh),_._lazy=0),a){if(Qn(t._startAt=le.set(p,je({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Pe(l),startAt:null,delay:0,onUpdate:c&&function(){return Xe(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Me||!o&&!m)&&t._startAt.revert(ws),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),A=je({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Pe(l),immediateRender:o,stagger:0,parent:f},M),j&&(A[G.prop]=j),Qn(t._startAt=le.set(p,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Me?t._startAt.revert(ws):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,qt,qt);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Pe(l)||l&&!g,b=0;b<p.length;b++){if(x=p[b],B=x._gsap||bo(p)[b]._gsap,t._ptLookup[b]=U={},Xa[B.id]&&jn.length&&Us(),O=y===p?b:y.indexOf(x),G&&(L=new G).init(x,j||M,t,O,y)!==!1&&(t._pt=R=new Fe(t._pt,x,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(V){U[V]=R}),L.priority&&(D=1)),!G||j)for(A in M)Ve[A]&&(L=Eu(A,M,t,O,x,y))?L.priority&&(D=1):U[A]=R=wo.call(t,x,A,"get",M[A],O,y,0,i.stringFilter);t._op&&t._op[b]&&t.kill(x,t._op[b]),v&&t._pt&&(Vn=t,Jt.killTweensOf(x,U,t.globalTime(e)),k=!t.parent,Vn=0),t._pt&&l&&(Xa[B.id]=1)}D&&wu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!k,d&&e<=0&&E.render(tn,!0,!0)},Ed=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,m;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,m=t._targets.length;m--;){if(u=d[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Za=1,t.vars[e]="+=0",Co(t,o),Za=0,l?Or(e+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=se(n)+Se(h.e)),h.b&&(h.b=u.s+Se(h.b))},Sd=function(t,e){var n=t[0]?vi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=ar({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Dd=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(De(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Pr=function(t,e,n,i,s){return ne(t)?t.call(e,n,i,s):ge(t)&&~t.indexOf("random(")?zr(t):t},Su=To+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Du={};Le(Su+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Du[r]=1});var le=function(r){Gc(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Cr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,y=i.parent||Jt,v=(De(n)||Wc(n)?In(n[0]):"length"in i)?[n]:en(n),E,M,b,A,R,x,D,B;if(o._targets=v.length?bo(v):Or("GSAP target "+n+" not found. https://gsap.com",!Ye.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||d||ns(c)||ns(u)){if(i=o.vars,E=o.timeline=new Ce({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),E.kill(),E.parent=E._dp=Cn(o),E._start=0,d||ns(c)||ns(u)){if(A=v.length,D=d&&lu(d),xn(d))for(R in d)~Su.indexOf(R)&&(B||(B={}),B[R]=d[R]);for(M=0;M<A;M++)b=Is(i,Du),b.stagger=0,f&&(b.yoyoEase=f),B&&ar(b,B),x=v[M],b.duration=+Pr(c,Cn(o),M,x,v),b.delay=(+Pr(u,Cn(o),M,x,v)||0)-o._delay,!d&&A===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),E.to(x,b,D?D(M,x,v):0),E._ease=zt.none;E.duration()?c=u=0:o.timeline=0}else if(g){Cr(je(E.vars.defaults,{ease:"none"})),E._ease=Mi(g.ease||i.ease||"none");var G=0,L,U,O;if(De(g))g.forEach(function(j){return E.to(v,j,">")}),E.duration();else{b={};for(R in g)R==="ease"||R==="easeEach"||Dd(R,g[R],b,g.easeEach);for(R in b)for(L=b[R].sort(function(j,k){return j.t-k.t}),G=0,M=0;M<L.length;M++)U=L[M],O={ease:U.e,duration:(U.t-(M?L[M-1].t:0))/100*c},O[R]=U.v,E.to(v,O,G),G+=O.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return m===!0&&!xo&&(Vn=Cn(o),Jt.killTweensOf(v),Vn=0),gn(y,Cn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===ce(y._time)&&Pe(h)&&ed(Cn(o))&&y.data!=="nested")&&(o._tTime=-qt,o.render(Math.max(0,-u)||0)),p&&ru(Cn(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-qt&&!u?l:i<qt?0:i,d,m,g,_,p,f,y,v,E;if(!c)id(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=ce(h%_),h===l?(g=this._repeat,d=c):(p=ce(h/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),f=this._yoyo&&g&1,f&&(E=this._yEase,d=c-d),p=or(this._tTime,_),d===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(v&&this._yEase&&xu(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(ce(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(su(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!o&&h&&!s&&!p&&(Xe(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&qa(this,i,s,a),Xe(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Xe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&qa(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Qn(this,1),!s&&!(u&&!o)&&(h||o||f)&&(Xe(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){kr||We.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Co(this,c),u=this._ease(c/this._dur),Ed(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(qs(this,0),this.parent||nu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Dr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Me),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Vn&&Vn.vars.overwrite!==!0)._first||Dr(this),this.parent&&a!==this.timeline.totalDuration()&&lr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?en(i):o,c=this._ptLookup,u=this._pt,h,d,m,g,_,p,f;if((!s||s==="all")&&Qh(o,l))return s==="all"&&(this._pt=0),Dr(this);for(h=this._op=this._op||[],s!=="all"&&(ge(s)&&(_={},Le(s,function(y){return _[y]=1}),s=_),s=Sd(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(h[f]=s,g=d,m={}):(m=h[f]=h[f]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ws(this,p,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&Dr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Rr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Rr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Jt.killTweensOf(i,s,a)},t}(Hr);je(le.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Le("staggerTo,staggerFrom,staggerFromTo",function(r){le[r]=function(){var t=new Ce,e=$a.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Ro=function(t,e,n){return t[e]=n},Tu=function(t,e,n){return t[e](n)},Td=function(t,e,n,i){return t[e](i.fp,n)},bd=function(t,e,n){return t.setAttribute(e,n)},Po=function(t,e){return ne(t[e])?Tu:Mo(t[e])&&t.setAttribute?bd:Ro},bu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ad=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Au=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Lo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},wd=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Cd=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ws(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Rd=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},wu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Fe=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||bu,this.d=l||this,this.set=c||Ro,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Rd,this.m=n,this.mt=s,this.tween=i},r}();Le(To+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Do[r]=1});$e.TweenMax=$e.TweenLite=le;$e.TimelineLite=$e.TimelineMax=Ce;Jt=new Ce({sortChildren:!1,defaults:sr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ye.stringFilter=gu;var yi=[],Rs={},Pd=[],al=0,Ld=0,la=function(t){return(Rs[t]||Pd).map(function(e){return e()})},Ja=function(){var t=Date.now(),e=[];t-al>2&&(la("matchMediaInit"),yi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=mn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),la("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),al=t,la("matchMedia"))},Cu=function(){function r(e,n){this.selector=n&&ja(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ld++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ne(n)&&(s=i,i=n,n=ne);var a=this,o=function(){var c=Kt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=ja(s)),Kt=a,h=i.apply(a,arguments),ne(h)&&a._r.push(h),Kt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ne?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Kt;Kt=null,n(this),Kt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof le&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ce?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof le)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=yi.length;a--;)yi[a].id===this.id&&yi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Fd=function(){function r(e){this.contexts=[],this.scope=e,Kt&&Kt.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){xn(n)||(n={matches:n});var a=new Cu(0,s||this.scope),o=a.conditions={},l,c,u;Kt&&!a.selector&&(a.selector=Kt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=mn.matchMedia(n[c]),l&&(yi.indexOf(a)<0&&yi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ja):l.addEventListener("change",Ja)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Os={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return pu(i)})},timeline:function(t){return new Ce(t)},getTweensOf:function(t,e){return Jt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ge(t)&&(t=en(t)[0]);var s=vi(t||{}).get,a=n?eu:tu;return n==="native"&&(n=""),t&&(e?a((Ve[e]&&Ve[e].get||s)(t,e,n,i)):function(o,l,c){return a((Ve[o]&&Ve[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=en(t),t.length>1){var i=t.map(function(u){return Be.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Ve[e],o=vi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Zi._pt=0,h.init(t,n?u+n:u,Zi,0,[t]),h.render(1,h),Zi._pt&&Lo(1,Zi)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Be.to(t,je((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Jt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Mi(t.ease,sr.ease)),el(sr,t||{})},config:function(t){return el(Ye,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ve[o]&&!$e[o]&&Or(e+" effect requires "+o+" plugin.")}),ra[e]=function(o,l,c){return n(en(o),je(l||{},s),c)},a&&(Ce.prototype[e]=function(o,l,c){return this.add(ra[e](o,xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){zt[t]=Mi(e)},parseEase:function(t,e){return arguments.length?Mi(t,e):zt},getById:function(t){return Jt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ce(t),i,s;for(n.smoothChildTiming=Pe(t.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,i=Jt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof le&&i.vars.onComplete===i._targets[0]))&&gn(n,i,i._start-i._delay),i=s;return gn(Jt,n,0),n},context:function(t,e){return t?new Cu(t,e):Kt},matchMedia:function(t){return new Fd(t)},matchMediaRefresh:function(){return yi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ja()},addEventListener:function(t,e){var n=Rs[t]||(Rs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Rs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:hd,wrapYoyo:dd,distribute:lu,random:uu,snap:cu,normalize:ud,getUnit:Se,clamp:ad,splitColor:mu,toArray:en,selector:ja,mapRange:du,pipe:ld,unitize:cd,interpolate:fd,shuffle:ou},install:jc,effects:ra,ticker:We,updateRoot:Ce.updateRoot,plugins:Ve,globalTimeline:Jt,core:{PropTween:Fe,globals:Kc,Tween:le,Timeline:Ce,Animation:Hr,getCache:vi,_removeLinkedListItem:Ws,reverting:function(){return Me},context:function(t){return t&&Kt&&(Kt.data.push(t),t._ctx=Kt),Kt},suppressOverwrites:function(t){return xo=t}}};Le("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Os[r]=le[r]});We.add(Ce.updateRoot);Zi=Os.to({},{duration:0});var Ud=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Id=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ud(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},ca=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ge(s)&&(l={},Le(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Id(o,s)}}}},Be=Os.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Me?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ca("roundProps",Ka),ca("modifiers"),ca("snap",cu))||Os;le.version=Ce.version=Be.version="3.13.0";$c=1;yo()&&cr();zt.Power0;zt.Power1;zt.Power2;zt.Power3;zt.Power4;zt.Linear;zt.Quad;zt.Cubic;zt.Quart;zt.Quint;zt.Strong;zt.Elastic;zt.Back;zt.SteppedEase;zt.Bounce;zt.Sine;zt.Expo;zt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ol,Wn,tr,Fo,gi,ll,Uo,Nd=function(){return typeof window<"u"},Nn={},di=180/Math.PI,er=Math.PI/180,Li=Math.atan2,cl=1e8,Io=/([A-Z])/g,Od=/(left|right|width|margin|padding|x)/i,Bd=/[\s,\(]\S/,vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qa=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},zd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kd=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Hd=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ru=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Pu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Gd=function(t,e,n){return t.style[e]=n},Vd=function(t,e,n){return t.style.setProperty(e,n)},Wd=function(t,e,n){return t._gsap[e]=n},Xd=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},qd=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Yd=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Qt="transform",Ue=Qt+"Origin",$d=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Nn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=vn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Rn(i,o)}):this.tfm[t]=a.x?a[t]:Rn(i,t),t===Ue&&(this.tfm.zOrigin=a.zOrigin);else return vn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Qt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ue,e,"")),t=Qt}(s||e)&&this.props.push(t,e,s[t])},Lu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},jd=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Io,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Uo(),(!s||!s.isStart)&&!n[Qt]&&(Lu(n),i.zOrigin&&n[Ue]&&(n[Ue]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Fu=function(t,e){var n={target:t,props:[],revert:jd,save:$d};return t._gsap||Be.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Uu,to=function(t,e){var n=Wn.createElementNS?Wn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Wn.createElement(t);return n&&n.style?n:Wn.createElement(t)},nn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Io,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ur(e)||e,1)||""},ul="O,Moz,ms,Ms,Webkit".split(","),ur=function(t,e,n){var i=e||gi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(ul[a]+t in s););return a<0?null:(a===3?"ms":a>=0?ul[a]:"")+t},eo=function(){Nd()&&window.document&&(ol=window,Wn=ol.document,tr=Wn.documentElement,gi=to("div")||{style:{}},to("div"),Qt=ur(Qt),Ue=Qt+"Origin",gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Uu=!!ur("perspective"),Uo=Be.core.reverting,Fo=1)},hl=function(t){var e=t.ownerSVGElement,n=to("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),tr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),tr.removeChild(n),s},dl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Iu=function(t){var e,n;try{e=t.getBBox()}catch{e=hl(t),n=1}return e&&(e.width||e.height)||n||(e=hl(t)),e&&!e.width&&!e.x&&!e.y?{x:+dl(t,["x","cx","x1"])||0,y:+dl(t,["y","cy","y1"])||0,width:0,height:0}:e},Nu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Iu(t))},wi=function(t,e){if(e){var n=t.style,i;e in Nn&&e!==Ue&&(e=Qt),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Io,"-$1").toLowerCase())):n.removeAttribute(e)}},Xn=function(t,e,n,i,s,a){var o=new Fe(t._pt,e,n,0,1,a?Pu:Ru);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},fl={deg:1,rad:1,turn:1},Kd={grid:1,flex:1},ti=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=gi.style,l=Od.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",m=i==="%",g,_,p,f;if(i===a||!s||fl[i]||fl[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),f=t.getCTM&&Nu(t),(m||a==="%")&&(Nn[e]||~e.indexOf("adius")))return g=f?t.getBBox()[l?"width":"height"]:t[u],se(m?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Wn||!_.appendChild)&&(_=Wn.body),p=_._gsap,p&&m&&p.width&&l&&p.time===We.time&&!p.uncache)return se(s/p.width*h);if(m&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,g=t[u],y?t.style[e]=y:wi(t,e)}else(m||a==="%")&&!Kd[nn(_,"display")]&&(o.position=nn(t,"position")),_===t&&(o.position="static"),_.appendChild(gi),g=gi[u],_.removeChild(gi),o.position="absolute";return l&&m&&(p=vi(_),p.time=We.time,p.width=_[u]),se(d?g*s/h:g&&s?h/g*s:0)},Rn=function(t,e,n,i){var s;return Fo||eo(),e in vn&&e!=="transform"&&(e=vn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Nn[e]&&e!=="transform"?(s=Vr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:zs(nn(t,Ue))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Bs[e]&&Bs[e](t,e,n)||nn(t,e)||Jc(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ti(t,e,s,n)+n:s},Zd=function(t,e,n,i){if(!n||n==="none"){var s=ur(e,t,1),a=s&&nn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=nn(t,"borderTopColor"))}var o=new Fe(this._pt,t.style,e,0,1,Au),l=0,c=0,u,h,d,m,g,_,p,f,y,v,E,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=nn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=nn(t,e)||i,_?t.style[e]=_:wi(t,e)),u=[n,i],gu(u),n=u[0],i=u[1],d=n.match(Ki)||[],M=i.match(Ki)||[],M.length){for(;h=Ki.exec(i);)p=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(m=parseFloat(_)||0,E=_.substr((m+"").length),p.charAt(1)==="="&&(p=Qi(m,p)+E),f=parseFloat(p),v=p.substr((f+"").length),l=Ki.lastIndex-v.length,v||(v=v||Ye.units[e]||E,l===i.length&&(i+=v,o.e+=v)),E!==v&&(m=ti(t,e,_,v)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:f-m,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Pu:Ru;return qc.test(i)&&(o.e=0),this._pt=o,o},pl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Jd=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=pl[n]||n,e[1]=pl[i]||i,e.join(" ")},Qd=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Nn[o]&&(l=1,o=o==="transformOrigin"?Ue:Qt),wi(n,o);l&&(wi(n,Qt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Vr(n,1),a.uncache=1,Lu(i)))}},Bs={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Fe(t._pt,e,n,0,0,Qd);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Gr=[1,0,0,1,0,0],Ou={},Bu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ml=function(t){var e=nn(t,Qt);return Bu(e)?Gr:e.substr(7).match(Xc).map(se)},No=function(t,e){var n=t._gsap||vi(t),i=t.style,s=ml(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Gr:s):(s===Gr&&!t.offsetParent&&t!==tr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,tr.appendChild(t)),s=ml(t),l?i.display=l:wi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):tr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},no=function(t,e,n,i,s,a){var o=t._gsap,l=s||No(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],f=l[4],y=l[5],v=e.split(" "),E=parseFloat(v[0])||0,M=parseFloat(v[1])||0,b,A,R,x;n?l!==Gr&&(A=m*p-g*_)&&(R=E*(p/A)+M*(-_/A)+(_*y-p*f)/A,x=E*(-g/A)+M*(m/A)-(m*y-g*f)/A,E=R,M=x):(b=Iu(t),E=b.x+(~v[0].indexOf("%")?E/100*b.width:E),M=b.y+(~(v[1]||v[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&o.smooth?(f=E-c,y=M-u,o.xOffset=h+(f*m+y*_)-f,o.yOffset=d+(f*g+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ue]="0px 0px",a&&(Xn(a,o,"xOrigin",c,E),Xn(a,o,"yOrigin",u,M),Xn(a,o,"xOffset",h,o.xOffset),Xn(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",E+" "+M)},Vr=function(t,e){var n=t._gsap||new yu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=nn(t,Ue)||"0",u,h,d,m,g,_,p,f,y,v,E,M,b,A,R,x,D,B,G,L,U,O,j,k,V,Z,K,I,q,st,tt,ot;return u=h=d=_=p=f=y=v=E=0,m=g=1,n.svg=!!(t.getCTM&&Nu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Qt]!=="none"?l[Qt]:"")),i.scale=i.rotate=i.translate="none"),A=No(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),no(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,b=n.yOrigin||0,A!==Gr&&(B=A[0],G=A[1],L=A[2],U=A[3],u=O=A[4],h=j=A[5],A.length===6?(m=Math.sqrt(B*B+G*G),g=Math.sqrt(U*U+L*L),_=B||G?Li(G,B)*di:0,y=L||U?Li(L,U)*di+_:0,y&&(g*=Math.abs(Math.cos(y*er))),n.svg&&(u-=M-(M*B+b*L),h-=b-(M*G+b*U))):(ot=A[6],st=A[7],K=A[8],I=A[9],q=A[10],tt=A[11],u=A[12],h=A[13],d=A[14],R=Li(ot,q),p=R*di,R&&(x=Math.cos(-R),D=Math.sin(-R),k=O*x+K*D,V=j*x+I*D,Z=ot*x+q*D,K=O*-D+K*x,I=j*-D+I*x,q=ot*-D+q*x,tt=st*-D+tt*x,O=k,j=V,ot=Z),R=Li(-L,q),f=R*di,R&&(x=Math.cos(-R),D=Math.sin(-R),k=B*x-K*D,V=G*x-I*D,Z=L*x-q*D,tt=U*D+tt*x,B=k,G=V,L=Z),R=Li(G,B),_=R*di,R&&(x=Math.cos(R),D=Math.sin(R),k=B*x+G*D,V=O*x+j*D,G=G*x-B*D,j=j*x-O*D,B=k,O=V),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,f=180-f),m=se(Math.sqrt(B*B+G*G+L*L)),g=se(Math.sqrt(j*j+ot*ot)),R=Li(O,j),y=Math.abs(R)>2e-4?R*di:0,E=tt?1/(tt<0?-tt:tt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Bu(nn(t,Qt)),k&&t.setAttribute("transform",k))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=se(m),n.scaleY=se(g),n.rotation=se(_)+o,n.rotationX=se(p)+o,n.rotationY=se(f)+o,n.skewX=y+o,n.skewY=v+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ue]=zs(c)),n.xOffset=n.yOffset=0,n.force3D=Ye.force3D,n.renderTransform=n.svg?ef:Uu?zu:tf,n.uncache=0,n},zs=function(t){return(t=t.split(" "))[0]+" "+t[1]},ua=function(t,e,n){var i=Se(e);return se(parseFloat(e)+parseFloat(ti(t,"x",n+"px",i)))+i},tf=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,zu(t,e)},ai="0deg",xr="0px",oi=") ",zu=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,f=n.force3D,y=n.target,v=n.zOrigin,E="",M=f==="auto"&&t&&t!==1||f===!0;if(v&&(h!==ai||u!==ai)){var b=parseFloat(u)*er,A=Math.sin(b),R=Math.cos(b),x;b=parseFloat(h)*er,x=Math.cos(b),a=ua(y,a,A*x*-v),o=ua(y,o,-Math.sin(b)*-v),l=ua(y,l,R*x*-v+v)}p!==xr&&(E+="perspective("+p+oi),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(M||a!==xr||o!==xr||l!==xr)&&(E+=l!==xr||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+oi),c!==ai&&(E+="rotate("+c+oi),u!==ai&&(E+="rotateY("+u+oi),h!==ai&&(E+="rotateX("+h+oi),(d!==ai||m!==ai)&&(E+="skew("+d+", "+m+oi),(g!==1||_!==1)&&(E+="scale("+g+", "+_+oi),y.style[Qt]=E||"translate(0, 0)"},ef=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,f=n.yOffset,y=n.forceCSS,v=parseFloat(a),E=parseFloat(o),M,b,A,R,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=er,c*=er,M=Math.cos(l)*h,b=Math.sin(l)*h,A=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=er,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,R*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,b*=x)),M=se(M),b=se(b),A=se(A),R=se(R)):(M=h,R=d,b=A=0),(v&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(v=ti(m,"x",a,"px"),E=ti(m,"y",o,"px")),(g||_||p||f)&&(v=se(v+g-(g*M+_*A)+p),E=se(E+_-(g*b+_*R)+f)),(i||s)&&(x=m.getBBox(),v=se(v+i/100*x.width),E=se(E+s/100*x.height)),x="matrix("+M+","+b+","+A+","+R+","+v+","+E+")",m.setAttribute("transform",x),y&&(m.style[Qt]=x)},nf=function(t,e,n,i,s){var a=360,o=ge(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?di:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*cl)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*cl)%a-~~(c/a)*a)),t._pt=d=new Fe(t._pt,e,n,i,c,zd),d.e=u,d.u="deg",t._props.push(n),d},_l=function(t,e){for(var n in e)t[n]=e[n];return t},rf=function(t,e,n){var i=_l({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Qt]=e,o=Vr(n,1),wi(n,Qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Qt],a[Qt]=e,o=Vr(n,1),a[Qt]=c);for(l in Nn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Se(c),g=Se(u),h=m!==g?ti(n,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new Fe(t._pt,o,l,h,d-h,Qa),t._pt.u=g||0,t._props.push(l));_l(o,i)};Le("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Bs[t>1?"border"+r:r]=function(o,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(g){return Rn(o,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,m,h)}});var ku={name:"css",register:eo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,d,m,g,_,p,f,y,v,E,M,b,A,R;Fo||eo(),this.styles=this.styles||Fu(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Ve[_]&&Eu(_,e,n,i,t,s)))){if(m=typeof u,g=Bs[_],m==="function"&&(u=u.call(n,i,t,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=zr(u)),g)g(this,t,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Kn.lastIndex=0,Kn.test(c)||(p=Se(c),f=Se(u)),f?p!==f&&(c=ti(t,_,c,f)+f):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],ge(c)&&~c.indexOf("random(")&&(c=zr(c)),Se(c+"")||c==="auto"||(c+=Ye.units[_]||Se(Rn(t,_))||""),(c+"").charAt(1)==="="&&(c=Rn(t,_))):c=Rn(t,_),d=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in vn&&(_==="autoAlpha"&&(d===1&&Rn(t,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,o.visibility),Xn(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=vn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Nn,v){if(this.styles.save(_),m==="string"&&u.substring(0,6)==="var(--"&&(u=nn(t,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),E||(M=t._gsap,M.renderTransform&&!e.parseTransform||Vr(t,e.parseTransform),b=e.smoothOrigin!==!1&&M.smooth,E=this._pt=new Fe(this._pt,o,Qt,0,1,M.renderTransform,M,0,-1),E.dep=1),_==="scale")this._pt=new Fe(this._pt,M,"scaleY",M.scaleY,(y?Qi(M.scaleY,y+h):h)-M.scaleY||0,Qa),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Ue,0,o[Ue]),u=Jd(u),M.svg?no(t,u,0,b,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==M.zOrigin&&Xn(this,M,"zOrigin",M.zOrigin,f),Xn(this,o,_,zs(c),zs(u)));continue}else if(_==="svgOrigin"){no(t,u,1,b,0,this);continue}else if(_ in Ou){nf(this,M,_,d,y?Qi(d,y+u):u);continue}else if(_==="smoothOrigin"){Xn(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){rf(this,u,t);continue}}else _ in o||(_=ur(_)||_);if(v||(h||h===0)&&(d||d===0)&&!Bd.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),f=Se(u)||(_ in Ye.units?Ye.units[_]:p),p!==f&&(d=ti(t,_,c,f)),this._pt=new Fe(this._pt,v?M:o,_,d,(y?Qi(d,y+h):h)-d,!v&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?Hd:Qa),this._pt.u=f||0,p!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=kd);else if(_ in o)Zd.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,i,s);else if(_!=="parseTransform"){So(_,u);continue}v||(_ in o?R.push(_,0,o[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),a.push(_)}}A&&wu(this)},render:function(t,e){if(e.tween._time||!Uo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Rn,aliases:vn,getSetter:function(t,e,n){var i=vn[e];return i&&i.indexOf(",")<0&&(e=i),e in Nn&&e!==Ue&&(t._gsap.x||Rn(t,"x"))?n&&ll===n?e==="scale"?Xd:Wd:(ll=n||{})&&(e==="scale"?qd:Yd):t.style&&!Mo(t.style[e])?Gd:~e.indexOf("-")?Vd:Po(t,e)},core:{_removeProperty:wi,_getMatrix:No}};Be.utils.checkPrefix=ur;Be.core.getStyleSaver=Fu;(function(r,t,e,n){var i=Le(r+","+t+","+e,function(s){Nn[s]=1});Le(t,function(s){Ye.units[s]="deg",Ou[s]=1}),vn[i[13]]=r+","+t,Le(n,function(s){var a=s.split(":");vn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Le("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ye.units[r]="px"});Be.registerPlugin(ku);var gt=Be.registerPlugin(ku)||Be;gt.core.Tween;/*!
 * strings: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sf=/(?:^\s+|\s+$)/g,af=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Hu(r){var t=r.nodeType,e="";if(t===1||t===9||t===11){if(typeof r.textContent=="string")return r.textContent;for(r=r.firstChild;r;r=r.nextSibling)e+=Hu(r)}else if(t===3||t===4)return r.nodeValue;return e}function io(r,t,e,n,i){for(var s=r.firstChild,a=[],o;s;)s.nodeType===3?(o=(s.nodeValue+"").replace(/^\n+/g,""),n||(o=o.replace(/\s+/g," ")),a.push.apply(a,Gu(o,t,e,n,i))):(s.nodeName+"").toLowerCase()==="br"?a[a.length-1]+="<br>":a.push(s.outerHTML),s=s.nextSibling;if(!i)for(o=a.length;o--;)a[o]==="&"&&a.splice(o,1,"&amp;");return a}function Gu(r,t,e,n,i){if(r+="",e&&(r=r.trim?r.trim():r.replace(sf,"")),t&&t!=="")return r.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var s=[],a=r.length,o=0,l,c;o<a;o++)c=r.charAt(o),(c.charCodeAt(0)>=55296&&c.charCodeAt(0)<=56319||r.charCodeAt(o+1)>=65024&&r.charCodeAt(o+1)<=65039)&&(l=((r.substr(o,12).split(af)||[])[1]||"").length||2,c=r.substr(o,l),s.emoji=1,o+=l-1),s.push(i?c:c===">"?"&gt;":c==="<"?"&lt;":n&&c===" "&&(r.charAt(o-1)===" "||r.charAt(o+1)===" ")?"&nbsp;":c);return s}/*!
 * TextPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var br,is,of=function(){return br||typeof window<"u"&&(br=window.gsap)&&br.registerPlugin&&br},$r={version:"3.13.0",name:"text",init:function(t,e,n){typeof e!="object"&&(e={value:e});var i=t.nodeName.toUpperCase(),s=this,a=e,o=a.newClass,l=a.oldClass,c=a.preserveSpaces,u=a.rtl,h=s.delimiter=e.delimiter||"",d=s.fillChar=e.fillChar||(e.padSpace?"&nbsp;":""),m,g,_,p,f,y,v,E;if(s.svg=t.getBBox&&(i==="TEXT"||i==="TSPAN"),!("innerHTML"in t)&&!s.svg)return!1;if(s.target=t,!("value"in e)){s.text=s.original=[""];return}for(_=io(t,h,!1,c,s.svg),is||(is=document.createElement("div")),is.innerHTML=e.value,g=io(is,h,!1,c,s.svg),s.from=n._from,(s.from||u)&&!(u&&s.from)&&(i=_,_=g,g=i),s.hasClass=!!(o||l),s.newClass=u?l:o,s.oldClass=u?o:l,i=_.length-g.length,m=i<0?_:g,i<0&&(i=-i);--i>-1;)m.push(d);if(e.type==="diff"){for(p=0,f=[],y=[],v="",i=0;i<g.length;i++)E=g[i],E===_[i]?v+=E:(f[p]=v+E,y[p++]=v+_[i],v="");g=f,_=y,v&&(g.push(v),_.push(v))}e.speed&&n.duration(Math.min(.05/e.speed*m.length,e.maxDuration||9999)),s.rtl=u,s.original=_,s.text=g,s._props.push("text")},render:function(t,e){t>1?t=1:t<0&&(t=0),e.from&&(t=1-t);var n=e.text,i=e.hasClass,s=e.newClass,a=e.oldClass,o=e.delimiter,l=e.target,c=e.fillChar,u=e.original,h=e.rtl,d=n.length,m=(h?1-t:t)*d+.5|0,g,_,p;i&&t?(g=s&&m,_=a&&m!==d,p=(g?"<span class='"+s+"'>":"")+n.slice(0,m).join(o)+(g?"</span>":"")+(_?"<span class='"+a+"'>":"")+o+u.slice(m).join(o)+(_?"</span>":"")):p=n.slice(0,m).join(o)+o+u.slice(m).join(o),e.svg?l.textContent=p:l.innerHTML=c==="&nbsp;"&&~p.indexOf("  ")?p.split("  ").join("&nbsp;&nbsp;"):p}};$r.splitInnerHTML=io;$r.emojiSafeSplit=Gu;$r.getText=Hu;of()&&br.registerPlugin($r);gt.registerPlugin($r);const lf="cat README.md",ro=["# Hello World!","I'm a software dev who also loves design.","I have experience with full-stack, machine learning, and game development.","Like this website? View this and more on my GitHub!"],cf=()=>{const r=gt.timeline({delay:.3});return r.to("#terminal-command",{duration:.8,text:lf,ease:"expo.out"}),r.to({},{duration:.2}),ro.forEach((t,e)=>{r.to(`#paragraph-${e}`,{duration:1,opacity:1,y:0,ease:"expo.out"},"-=0.7")}),r.to("#social-links",{duration:1.5,opacity:1,y:0,ease:"expo.out"},"-=0.9"),r},uf=r=>{const{isVisible:t,isHorizontal:e}=r,a=`about-container absolute p-4 text-white font-mono ${t?"opacity-100":"opacity-0"} ${e?"loaded-horizontal":"loaded-vertical"}`;return t&&setTimeout(()=>{cf(),gt.to("#cursor",{opacity:0,repeat:-1,yoyo:!0,duration:.8}),gt.to(".social-icon",{y:-3,duration:4.5,ease:"power2.inOut",yoyo:!0,repeat:-1,stagger:.6}),document.querySelectorAll(".social-icon").forEach(l=>{const c=l,u=l.querySelector("svg"),h=l.querySelector("span");c.style.willChange="transform",u&&(u.style.willChange="transform"),h&&(h.style.willChange="transform"),c.style.backfaceVisibility="hidden",c.style.perspective="1000px",c.style.transformStyle="preserve-3d",c.style.transition="transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",u&&(u.style.transition="transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)"),h&&(h.style.transition="transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)"),c.addEventListener("mouseenter",()=>{c.style.transform="scale(1.08) translateY(-2px)",u&&(u.style.transform="scale(1.12)"),h&&(h.style.transform="scale(1.04) translateY(-1px)")}),c.addEventListener("mouseleave",()=>{c.style.transform="scale(1) translateY(0)",u&&(u.style.transform="scale(1)"),h&&(h.style.transform="scale(1) translateY(0)")})})},100),Fn`
        <style>
            @keyframes gradientFlow {
                0%,
                100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            }

            @keyframes purpleGradientFlow {
                0%,
                100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            }

            @keyframes blueGradientFlow {
                0%,
                100% {
                    background-position: 20% 50%;
                }
                50% {
                    background-position: 80% 50%;
                }
            }

            @keyframes greenGradientFlow {
                0%,
                100% {
                    background-position: 10% 50%;
                }
                50% {
                    background-position: 90% 50%;
                }
            }

            @keyframes accentGradientFlow {
                0%,
                100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            } /* Social icon performance optimizations */
            .social-icon {
                will-change: transform;
                backface-visibility: hidden;
                transform-style: preserve-3d;
                transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                width: 80px;
                height: 80px;
            }

            .social-icon svg {
                will-change: transform, filter;
                transition:
                    transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }

            .social-icon span {
                will-change: transform;
                transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            } /* Animated glowing effects for each social icon */
            @keyframes purpleGlow {
                0% {
                    filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3));
                }
                20% {
                    filter: drop-shadow(0 0 12px rgba(147, 51, 234, 0.7)) drop-shadow(0 0 20px rgba(196, 125, 255, 0.4));
                }
                40% {
                    filter: drop-shadow(0 0 16px rgba(236, 72, 153, 0.8)) drop-shadow(0 0 24px rgba(219, 39, 119, 0.5));
                }
                60% {
                    filter: drop-shadow(0 0 20px rgba(192, 38, 211, 0.9)) drop-shadow(0 0 30px rgba(168, 85, 247, 0.6));
                }
                80% {
                    filter: drop-shadow(0 0 18px rgba(139, 92, 246, 0.8)) drop-shadow(0 0 28px rgba(124, 58, 237, 0.5));
                }
                100% {
                    filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3));
                }
            }

            @keyframes blueGlow {
                0% {
                    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 16px rgba(59, 130, 246, 0.3));
                }
                25% {
                    filter: drop-shadow(0 0 12px rgba(37, 99, 235, 0.7)) drop-shadow(0 0 20px rgba(96, 165, 250, 0.4));
                }
                50% {
                    filter: drop-shadow(0 0 16px rgba(6, 182, 212, 0.8)) drop-shadow(0 0 24px rgba(14, 165, 233, 0.5));
                }
                75% {
                    filter: drop-shadow(0 0 14px rgba(8, 145, 178, 0.7)) drop-shadow(0 0 22px rgba(56, 189, 248, 0.4));
                }
                100% {
                    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 16px rgba(59, 130, 246, 0.3));
                }
            }

            @keyframes greenGlow {
                0% {
                    filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.3));
                }
                25% {
                    filter: drop-shadow(0 0 12px rgba(21, 128, 61, 0.7)) drop-shadow(0 0 20px rgba(74, 222, 128, 0.4));
                }
                50% {
                    filter: drop-shadow(0 0 16px rgba(132, 204, 22, 0.8)) drop-shadow(0 0 24px rgba(163, 230, 53, 0.5));
                }
                75% {
                    filter: drop-shadow(0 0 14px rgba(5, 150, 105, 0.7)) drop-shadow(0 0 22px rgba(16, 185, 129, 0.4));
                }
                100% {
                    filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.3));
                }
            }
            @keyframes githubPulse {
                0%,
                100% {
                    transform: scale(1) rotate(0deg);
                    filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3));
                }
                12% {
                    transform: scale(1.02) rotate(1deg);
                    filter: drop-shadow(0 0 12px rgba(147, 51, 234, 0.7)) drop-shadow(0 0 20px rgba(196, 125, 255, 0.4));
                }
                20% {
                    transform: scale(1.04) rotate(-1deg);
                    filter: drop-shadow(0 0 14px rgba(236, 72, 153, 0.75))
                        drop-shadow(0 0 22px rgba(219, 39, 119, 0.45));
                }
                30% {
                    transform: scale(1.06) rotate(2deg);
                    filter: drop-shadow(0 0 16px rgba(192, 38, 211, 0.8)) drop-shadow(0 0 26px rgba(168, 85, 247, 0.5));
                }
                40% {
                    transform: scale(1.08) rotate(-1.5deg);
                    filter: drop-shadow(0 0 18px rgba(139, 92, 246, 0.85))
                        drop-shadow(0 0 30px rgba(124, 58, 237, 0.55));
                }
                50% {
                    transform: scale(1.1) rotate(0deg);
                    filter: drop-shadow(0 0 20px rgba(168, 85, 247, 1)) drop-shadow(0 0 35px rgba(236, 72, 153, 0.7))
                        drop-shadow(0 0 50px rgba(139, 92, 246, 0.4));
                }
                60% {
                    transform: scale(1.08) rotate(1.5deg);
                    filter: drop-shadow(0 0 18px rgba(192, 38, 211, 0.85))
                        drop-shadow(0 0 30px rgba(147, 51, 234, 0.55));
                }
                70% {
                    transform: scale(1.06) rotate(-2deg);
                    filter: drop-shadow(0 0 16px rgba(124, 58, 237, 0.8)) drop-shadow(0 0 26px rgba(236, 72, 153, 0.5));
                }
                80% {
                    transform: scale(1.04) rotate(1deg);
                    filter: drop-shadow(0 0 14px rgba(168, 85, 247, 0.75))
                        drop-shadow(0 0 22px rgba(196, 125, 255, 0.45));
                }
                88% {
                    transform: scale(1.02) rotate(-1deg);
                    filter: drop-shadow(0 0 12px rgba(139, 92, 246, 0.7)) drop-shadow(0 0 20px rgba(147, 51, 234, 0.4));
                }
            }

            .social-icon.github svg {
                animation: githubPulse 3s ease-in-out infinite;
            }

            .social-icon.linkedin svg {
                animation: blueGlow 4s ease-in-out infinite;
            }

            .social-icon.resume svg {
                animation: greenGlow 5s ease-in-out infinite;
            }

            /* Hover state enhancements */
            .social-icon:hover {
                transform: scale(1.08) translateY(-2px);
            }

            .social-icon:hover svg {
                transform: scale(1.12);
            }

            .social-icon:hover span {
                transform: scale(1.04) translateY(-1px);
            }
        </style>
        <section id="about-section" class="${a}" aria-hidden="${!t}" aria-labelledby="terminal-header">
            <div class="terminal-container text-left">
                <!-- Terminal header with static prompt and animated command -->
                <div class="terminal-header flex items-center text-green-400">
                    <span class="font-bold">guest$ </span>
                    <span id="terminal-command"></span>
                    <span id="cursor" class="ml-1 inline-block w-2 h-4 bg-green-400"></span>
                </div>

                <!-- Terminal content (paragraphs with animations) -->
                <div class="mt-4 text-gray-200">
                    <!-- First paragraph as header with different styling -->
                    <p
                        id="paragraph-0"
                        class="mb-4 opacity-0 transform translate-y-4 text-3xl font-bold glossy-text"
                        style="
                            transition: opacity 0.3s, transform 0.3s;
                            background: linear-gradient(90deg, #A389F4, #6F6EF6, #55A2F2, #7AD1F5, #A389F4);
                            background-size: 400% 100%;
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            animation: accentGradientFlow 4s ease-in-out infinite;
                        "
                    >
                        ${ro[0]}
                    </p>

                    <!-- Rest of the paragraphs -->
                    ${ro.slice(1).map((o,l)=>Fn`
                            <p
                                id="paragraph-${l+1}"
                                class="mb-3 opacity-0 text-gray-300 transform translate-y-4 text-lg font-sans"
                                style="transition: opacity 0.3s, transform 0.3s"
                            >
                                ${o}
                            </p>
                        `)}
                </div>
                <!-- Social links -->
                <div
                    id="social-links"
                    class="mt-6 flex items-center justify-center flex-wrap opacity-0 transform translate-y-4"
                    style="gap: 2rem;"
                >
                    <a
                        href="https://github.com/Boden-C"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-icon github text-white hover:text-purple-300 transition-all duration-300 flex flex-col items-center justify-center group relative overflow-hidden rounded-lg backdrop-blur-sm"
                        style="transform-style: preserve-3d;"
                        aria-label="Visit my GitHub profile"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                        <svg
                            id="github-icon"
                            class="w-10 h-10 inline transition-all duration-500 filter drop-shadow-lg relative z-10 group-hover:drop-shadow-xl"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            fill="currentColor"
                            style="filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3));"
                        >
                            <path
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            />
                        </svg>
                        <span
                            class="text-sm mt-1 relative z-10 group-hover:text-purple-200 transition-colors duration-300"
                            >GitHub</span
                        >
                    </a>
                    <a
                        href="https://www.linkedin.com/in/boden-c/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-icon linkedin text-white hover:text-blue-300 transition-all duration-300 flex flex-col items-center justify-center group relative overflow-hidden rounded-lg backdrop-blur-sm"
                        style="transform-style: preserve-3d;"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/10 to-cyan-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                        <svg
                            class="w-10 h-10 inline transition-all duration-500 filter drop-shadow-lg relative z-10 group-hover:drop-shadow-xl"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                            style="filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 16px rgba(59, 130, 246, 0.3));"
                        >
                            <path
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                            />
                        </svg>
                        <span
                            class="text-sm mt-1 relative z-10 group-hover:text-blue-200 transition-colors duration-300"
                            >LinkedIn</span
                        >
                    </a>
                    <a
                        href="../assets/Boden_Chen_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-icon resume text-white hover:text-green-300 transition-all duration-300 flex flex-col items-center justify-center group relative overflow-hidden rounded-lg backdrop-blur-sm"
                        aria-label="View my resume"
                        style="transform-style: preserve-3d;"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-green-600/0 via-emerald-500/10 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                        <svg
                            class="w-10 h-10 inline transition-all duration-500 filter drop-shadow-lg relative z-10 group-hover:drop-shadow-xl"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            fill="currentColor"
                            style="filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.3));"
                        >
                            <path
                                d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"
                            />
                        </svg>
                        <span class="text-sm mt-1">Resume</span>
                    </a>
                </div>
            </div>
        </section>
    `};class hf{constructor(t){jt(this,"el");jt(this,"mountSelector");jt(this,"slides");jt(this,"animated");jt(this,"fadeFirstSlide");jt(this,"progression");jt(this,"mountEl",null);jt(this,"currentIndex",0);jt(this,"currentInstance",null);jt(this,"hasRenderedBefore",!1);jt(this,"isTransitioning",!1);jt(this,"advancing",!1);jt(this,"token",{cancelled:!1});jt(this,"cycleCount",0);jt(this,"slideStartTime",0);this.el=t.el,this.mountSelector=t.mountSelector,this.slides=t.slides,this.animated=t.animated,this.fadeFirstSlide=!!t.fadeFirstSlide,this.progression=t.progression||{}}async start(t=0){this.currentIndex=t,this.mountEl=this.el.querySelector(this.mountSelector),this.mountEl&&await this.showSlide(this.currentIndex)}next(){this.slides.length&&(this.isTransitioning||this.advancing||(this.currentIndex=(this.currentIndex+1)%this.slides.length,this.showSlide(this.currentIndex)))}destroy(){if(this.currentInstance&&typeof this.currentInstance.destroy=="function"){try{this.currentInstance.destroy(this.mountEl)}catch{}this.currentInstance=null}if(this.mountEl)try{gt.killTweensOf(this.mountEl),gt.killTweensOf(this.mountEl.querySelectorAll("*"))}catch{}}getSlideProgression(t){var i;const e=this.progression,n=((i=e.perSlide)==null?void 0:i[t])||{};return{mode:n.mode||e.mode||"cycle",advanceAfterCycles:n.advanceAfterCycles??e.defaultAdvanceAfterCycles??2,minVisibleMs:n.minVisibleMs??e.minVisibleMs??0}}async showSlide(t){if(this.isTransitioning||this.advancing)return;this.isTransitioning=!0,this.token={cancelled:!1},this.cycleCount=0,this.slideStartTime=Date.now();const e=this.mountEl;if(!e||!e.isConnected){this.isTransitioning=!1;return}const n=()=>e.isConnected?!1:(this.isTransitioning=!1,!0);if(this.animated&&e.childElementCount&&(await new Promise(d=>gt.to(e,{opacity:0,duration:.25,ease:"power2.out",onComplete:d})),n()))return;if(this.currentInstance&&typeof this.currentInstance.destroy=="function")try{this.currentInstance.destroy(e)}catch{}this.currentInstance=null;try{gt.killTweensOf(e),gt.killTweensOf(e.querySelectorAll("*"))}catch{}e.style.opacity="0",e.style.willChange="opacity";const i=this.slides[t];if(Hc(i.template(),e),n())return;if(this.currentInstance=i,i.prepare)try{i.prepare(e)}catch{}const s=this.getSlideProgression(i.key);let a=0,o=!1;const l=async d=>{if(!(o||this.advancing)){if(o=!0,this.advancing=!0,this.token.cancelled=!0,i.exit)try{await Promise.race([i.exit(e,{animated:this.animated,token:this.token}),new Promise(m=>setTimeout(m,400))])}catch{}this.animated&&await new Promise(m=>gt.to(e,{opacity:0,duration:.25,ease:"power2.out",onComplete:m}));try{gt.killTweensOf(e),gt.killTweensOf(e.querySelectorAll("*"))}catch{}if(i.destroy)try{i.destroy(e)}catch{}this.advancing=!1,this.isTransitioning=!1,this.next()}},c=d=>{this.token.cancelled||o||(a=d,s.mode==="cycle"&&a>=s.advanceAfterCycles&&Date.now()-this.slideStartTime>=s.minVisibleMs&&l())},u={animated:this.animated,token:this.token,onCycle:c};if(this.animated&&(this.hasRenderedBefore||this.fadeFirstSlide)){if(await new Promise(d=>gt.to(e,{opacity:1,duration:.3,ease:"power2.out",onComplete:d})),n())return}else e.style.opacity="1";e.style.willChange="",!(i.enter&&(await i.enter(e,u),n()))&&(this.isTransitioning=!1,i.play&&i.play(e,u),this.hasRenderedBefore=!0)}}const df=()=>Fn`
    <div id="project-diffusion" class="w-full" aria-roledescription="slide" aria-label="Diffusion LLM">
        <article class="slide w-full" aria-labelledby="diffusion-title" tabindex="0">
            <h3 id="diffusion-title" data-animate="project-title" class="text-white text-lg md:text-2xl font-bold mb-3">
                Diffusion LLM Research
            </h3>
            <div
                class="title-underline"
                aria-hidden="true"
                style="height:2px;width:100%;background:linear-gradient(90deg,#A389F4,#6F6EF6,#55A2F2,#7AD1F5);border-radius:999px;transform-origin:left;transform:scaleX(0);opacity:0.3;"
            ></div>
            <p
                data-animate="project-desc"
                class="mt-3 md:mt-2 text-sm md:text-base text-gray-400 leading-relaxed font-sans"
            >
                A new type of text generation that using a denoising approach to generate multiple tokens in parallel.
                The model can now "see" the whole picture at once at many times the speed!
            </p>
        </article>
        <div
            class="glass-card mt-4 w-full flex flex-col justify-center items-start p-4 space-y-4 overflow-hidden"
            style="height: 400px;"
            id="prediction-demo"
            aria-live="polite"
            aria-label="Text generation demonstration"
        >
            <div class="w-full text-xs uppercase tracking-wide text-gray-400 font-semibold" id="prediction-phase-label">
                Autoregressive Prediction
            </div>
            <div class="w-full font-mono text-3xl md:text-3xl leading-relaxed min-h-[120px]" id="prediction-lines">
                <span id="seq1-line" class="block"></span>
                <span id="seq2-line" class="hidden"></span>
            </div>
            <div class="w-full text-2xl md:text-2xl text-gray-500 font-mono font-semibold" id="turn-counter">
                Turns: <span id="turn-value">0</span>
            </div>
            <div class="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <p class="text-[10px] leading-snug text-gray-500 font-sans" id="prediction-hint"></p>
        </div>
    </div>
`,ff={key:"diffusion",template:df,prepare(r){const t=r.querySelector('[data-animate="project-title"]'),e=r.querySelector('[data-animate="project-desc"]'),n=r.querySelector(".title-underline"),i=r.querySelector(".glass-card");n&&gt.set(n,{scaleX:0,opacity:.3}),e&&gt.set(e,{y:12,opacity:0,filter:"blur(6px)"}),i&&gt.set(i,{y:14,opacity:0,scale:.98}),t&&gt.set(t,{opacity:0,y:-12})},async enter(r,t){const e=r.querySelector('[data-animate="project-title"]'),n=r.querySelector('[data-animate="project-desc"]'),i=r.querySelector(".title-underline"),s=r.querySelector(".glass-card");if(!t.animated){i&&gt.set(i,{scaleX:1,opacity:.5}),n&&gt.set(n,{opacity:1,y:0,filter:"none"}),s&&gt.set(s,{opacity:1,y:0,scale:1}),e&&gt.set(e,{opacity:1,y:0});return}const a=gt.timeline({defaults:{ease:"power3.out"}});e&&(a.to(e,{opacity:1,y:0,duration:.6},0),gt.to(e,{textShadow:"0 0 12px rgba(122,209,245,0.25)",duration:2,yoyo:!0,repeat:-1,ease:"sine.inOut"})),i&&(a.to(i,{scaleX:1,opacity:.8,duration:.7,ease:"expo.out"},">-"),gt.to(i,{opacity:.5,duration:3,yoyo:!0,repeat:-1,ease:"sine.inOut"})),n&&a.to(n,{y:0,opacity:1,filter:"blur(0px)",duration:.6},"+=0.15"),s&&a.to(s,{y:0,opacity:1,scale:1,duration:.5,ease:"power2.out"},"+=0.15"),await a},async play(r,t){let e=0;const n=r.querySelector("#prediction-demo");if(!n)return;const i=n.querySelector("#seq1-line"),s=n.querySelector("#seq2-line"),a=n.querySelector("#prediction-phase-label"),o=n.querySelector("#turn-value"),l=n.querySelector("#prediction-hint"),c=["Using","next","word","prediction,","AI","will","guess","this","sentence","will","have","25","words."],u=["Using","diffusion,","this","is","much","faster","and","it","knows","this","will","have","15","words."],h=u.length,d=["token","model","graph","latent","vector","noise","mask","sample","estimate","denoise","prob","chain","prior","delta","score"],m=f=>{for(;f.firstChild;)f.removeChild(f.firstChild)},g=()=>{a.textContent="Autoregressive Prediction",l.textContent="",i.classList.remove("hidden"),s.classList.add("hidden"),m(i),o.textContent="0";let f=0;return new Promise(y=>{const v=E=>{if(t.token.cancelled)return;if(E>=c.length){const R=Array.from(i.querySelectorAll(".word")).find(x=>x.dataset.w==="25");R&&(R.classList.add("text-red-400","line-through"),R.setAttribute("aria-label","25 (incorrect)"),t.animated&&gt.fromTo(R,{scale:1.1},{scale:1,duration:.4,ease:"back.out(3)"})),setTimeout(()=>y(),t.animated?1800:0);return}const M=c[E],b=document.createElement("span");b.textContent=M,b.className="word inline-block opacity-0",b.dataset.w=M.replace(/[^0-9A-Za-z?]/g,""),i.appendChild(b),E<c.length-1&&i.appendChild(document.createTextNode(" ")),f++,o.textContent=String(f),t.animated?gt.to(b,{opacity:1,y:0,duration:.25,ease:"power2.out",onStart:()=>{gt.from(b,{y:10,filter:"blur(4px)",duration:.25,ease:"power2.out"})}}):b.style.opacity="1",setTimeout(()=>v(E+1),t.animated?140:0)};v(0)})},_=()=>{a.textContent="Diffusion Multi-Token Refinement",l.textContent="",i.classList.add("hidden"),s.classList.remove("hidden"),m(s),o.textContent="0";const f=[];for(let R=0;R<h;R++){const x=document.createElement("span");x.textContent="???",x.className="ph inline-block opacity-60 text-gray-500",f.push(x),s.appendChild(x),R<h-1&&s.appendChild(document.createTextNode(" "))}t.animated?gt.from(f,{opacity:0,y:8,stagger:.01,duration:.35,ease:"power2.out"}):f.forEach(R=>R.style.opacity="1");const y=new Set;let v=0;const E=5,M=u.length,b=u.findIndex(R=>R==="15"),A=(R,x)=>{const D=[];for(let B=0;B<M;B++)y.has(B)||B!==b&&D.push(B);for(let B=0;B<R&&D.length;B++){const G=Math.random()*D.length|0,L=D[G];y.add(L),D.splice(G,1)}};return new Promise(R=>{const x=()=>{if(t.token.cancelled)return;v++,o.textContent=String(v);const D=M-1,B=v===E?M:Math.min(D,Math.ceil(D*v/E));if(y.size<B&&A(B-y.size),v===E)for(let G=0;G<M;G++)y.add(G);for(let G=0;G<f.length;G++){const L=f[G];if(y.has(G)){const U=u[G];L.textContent=U,L.className="inline-block text-green-400 font-semibold"+(U==="15"?" underline":""),U==="15"&&L.setAttribute("aria-label","15 (correct)")}else if(Math.random()<.3){const U=d[Math.random()*d.length|0];L.textContent=U,L.className="inline-block text-gray-400"}else L.textContent="???",L.className="ph inline-block opacity-60 text-gray-500"}if(t.animated&&gt.fromTo(f,{filter:"blur(4px)"},{filter:"blur(0px)",duration:.35,ease:"power2.out"}),v<E)setTimeout(x,t.animated?650:0);else{const G=f[b];G&&t.animated&&gt.fromTo(G,{scale:.6,opacity:.4},{scale:1,opacity:1,duration:.6,ease:"elastic.out(1,0.6)"}),setTimeout(()=>R(),t.animated?1800:0)}};setTimeout(x,t.animated?400:0)})};await(async()=>{var f;for(;!t.token.cancelled&&(await g(),!(t.token.cancelled||(await _(),t.token.cancelled)));)(f=t.onCycle)==null||f.call(t,++e)})()},async exit(r,t){t.token.cancelled=!0,await new Promise(e=>setTimeout(e,100))},destroy(r){try{gt.killTweensOf(r),gt.killTweensOf(r.querySelectorAll("*"))}catch{}}},pf=()=>Fn`
    <div id="project-graph" class="w-full" aria-roledescription="slide" aria-label="Dynamic Network AI Research">
        <article class="slide w-full" aria-labelledby="graph-title" tabindex="0">
            <h3 id="graph-title" class="text-white text-lg md:text-2xl font-bold mb-3">Dynamic Network AI Research</h3>
            <div
                class="title-underline"
                aria-hidden="true"
                style="height:2px;width:100%;background:linear-gradient(90deg,#A389F4,#6F6EF6,#55A2F2,#7AD1F5);border-radius:999px;transform-origin:left;transform:scaleX(0);opacity:0.3;"
            ></div>
            <p class="mt-3 md:mt-2 text-sm md:text-base text-gray-400 leading-relaxed font-sans">
                Creating adaptive Multi-Agent Systems that interact together similar to a neural network that evolve
                based on the question. These systems can dynamically reflect complex problem structures and
                collaboratively reason toward solutions.
            </p>
        </article>
        <div id="nn-wrap" class="mt-5 w-full" role="img" aria-label="Animated neural network diagram in white">
            <svg
                id="nn-svg"
                width="100%"
                height="260"
                style="display:block; overflow:visible"
                focusable="false"
                aria-hidden="true"
            ></svg>
        </div>
    </div>
`,mf={key:"graph",template:pf,prepare(r){const t=r.querySelector("#graph-title"),e=r.querySelector("p"),n=r.querySelector(".title-underline");n&&gt.set(n,{scaleX:0,opacity:.3}),e&&gt.set(e,{y:12,opacity:0,filter:"blur(6px)"}),t&&gt.set(t,{opacity:0,y:-12});const i=r.querySelector("#nn-svg");if(i)for(;i.firstChild;)i.removeChild(i.firstChild)},async enter(r,t){const e=r.querySelector("#graph-title"),n=r.querySelector("p"),i=r.querySelector(".title-underline"),s=r.querySelector("#nn-svg");if(!t.animated){i&&gt.set(i,{scaleX:1,opacity:.5}),n&&gt.set(n,{opacity:1,y:0,filter:"none"}),e&&gt.set(e,{opacity:1,y:0}),s&&gl(s,{animate:!1});return}const a=gt.timeline({defaults:{ease:"power3.out"}});e&&(a.to(e,{opacity:1,y:0,duration:.6},0),gt.to(e,{textShadow:"0 0 12px rgba(163,137,244,0.25)",duration:2,yoyo:!0,repeat:-1,ease:"sine.inOut"})),i&&(a.to(i,{scaleX:1,opacity:.8,duration:.7,ease:"expo.out"},">-"),gt.to(i,{opacity:.5,duration:3,yoyo:!0,repeat:-1,ease:"sine.inOut"})),n&&a.to(n,{y:0,opacity:1,filter:"blur(0px)",duration:.6},"+=0.15"),a.add(()=>{s&&gl(s,{animate:!0})},">-=0.05"),await a},async play(r,t){var n;let e=0;for(;!t.token.cancelled;)e++,(n=t.onCycle)==null||n.call(t,e),await new Promise(i=>setTimeout(i,t.animated?1e4:500))},async exit(r,t){t.token.cancelled=!0,await new Promise(e=>setTimeout(e,100))},destroy(r){try{gt.killTweensOf(r),gt.killTweensOf(r.querySelectorAll("*"));const t=r.querySelector("#nn-svg");if(t)for(Vu(t);t.firstChild;)t.removeChild(t.firstChild)}catch{}}},so=new WeakMap;function gl(r,t){var Ht,ve;Vu(r);const e=36,n=(((Ht=r.parentElement)==null?void 0:Ht.clientWidth)||720)|0,i=360;for(r.setAttribute("viewBox",`0 0 ${n} ${i}`),r.setAttribute("width","100%"),r.setAttribute("height",String(i));r.firstChild;)r.removeChild(r.firstChild);const s=[1,5,5,1],a=s.length,o=(n-e*2)/(a-1),l=6.5,c=16,u=[];for(let J=0;J<a;J++){const C=s[J],xt=e+J*o,Q=i-c*2,dt=C>1?Q/(C-1):0,rt=[];for(let ft=0;ft<C;ft++)rt.push(c+(C===1?Q/2:ft*dt));u.push({x:xt,ys:rt})}const h=J=>document.createElementNS("http://www.w3.org/2000/svg",J),d=h("g"),m=h("g");d.setAttribute("fill","none"),d.setAttribute("stroke","#fff"),d.setAttribute("stroke-opacity","0.9"),d.setAttribute("stroke-linecap","round"),d.setAttribute("stroke-width","1.3"),m.setAttribute("fill","#fff"),r.appendChild(d),r.appendChild(m);let g=1;const _=[],p=[];u.forEach(({x:J,ys:C},xt)=>{const Q=[];C.forEach((dt,rt)=>{const ft=h("circle");ft.setAttribute("cx",String(J)),ft.setAttribute("cy",String(dt)),ft.setAttribute("r",t.animate?"0":String(l)),ft.setAttribute("vector-effect","non-scaling-stroke"),ft.setAttribute("stroke","#fff"),ft.setAttribute("stroke-opacity","0.35"),ft.setAttribute("stroke-width","0.55"),m.appendChild(ft);const vt={id:g++,cx:J,cy:dt,cIndex:xt,ampX:2+Math.random()*3+(xt===1||xt===2?1:0),ampY:2+Math.random()*3+(rt%2===0?1:0),spdX:.4+Math.random()*.6,spdY:.4+Math.random()*.6,phase:Math.random()*Math.PI*2,ampX2:.6+Math.random()*1.2,ampY2:.6+Math.random()*1.2,spdX2:.15+Math.random()*.35,spdY2:.15+Math.random()*.35,phase2:Math.random()*Math.PI*2,circle:ft};p.push(vt),Q.push(vt)}),_.push(Q)});const f=[];for(let J=0,C=0;J<a-1;J++){const xt=s[J],Q=s[J+1],dt=C,rt=C+xt;for(let ft=0;ft<xt;ft++)for(let vt=0;vt<Q;vt++){const Mt=p[dt+ft],Nt=p[rt+vt],Wt=h("path");Wt.setAttribute("opacity","1"),d.appendChild(Wt),f.push({path:Wt,from:Mt,to:Nt,progress:t.animate?0:1})}C+=xt}let y=!t.animate;const v={nx:0,ny:0},E=4,M=r.parentElement,b=((ve=window.matchMedia)==null?void 0:ve.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,A=10,R=12,x={rx:0,ry:0,tx:0,ty:0},D={rx:0,ry:0,tx:0,ty:0};let B=!1;M&&!b&&(M.style.willChange="transform",M.style.transformStyle="preserve-3d",M.style.transformOrigin="50% 50%");const G=()=>{const J=performance.now()/1e3;if(p.forEach(C=>{const xt=Math.sin(J*C.spdX+C.phase)*C.ampX+Math.sin(J*C.spdX2+C.phase2)*C.ampX2+v.nx*(E*(.7+.2*C.cIndex)),Q=Math.cos(J*C.spdY+C.phase*1.1)*C.ampY+Math.cos(J*C.spdY2+C.phase2*1.13)*C.ampY2+v.ny*(E*(.7+.2*C.cIndex));C.circle.setAttribute("cx",String(C.cx+xt)),C.circle.setAttribute("cy",String(C.cy+Q))}),M&&!b){const C=B?.12:.08;D.rx+=(x.rx-D.rx)*C,D.ry+=(x.ry-D.ry)*C,D.tx+=(x.tx-D.tx)*C,D.ty+=(x.ty-D.ty)*C,M.style.transform=`perspective(900px) rotateX(${D.rx.toFixed(3)}deg) rotateY(${D.ry.toFixed(3)}deg) translate3d(${D.tx.toFixed(2)}px, ${D.ty.toFixed(2)}px, 0.01px)`}f.forEach(C=>{const xt=parseFloat(C.from.circle.getAttribute("cx")||String(C.from.cx)),Q=parseFloat(C.from.circle.getAttribute("cy")||String(C.from.cy)),dt=parseFloat(C.to.circle.getAttribute("cx")||String(C.to.cx)),rt=parseFloat(C.to.circle.getAttribute("cy")||String(C.to.cy)),ft=(xt+dt)/2,vt=`M ${xt} ${Q} C ${ft} ${Q}, ${ft} ${rt}, ${dt} ${rt}`;C.path.setAttribute("d",vt);const Mt=C.path.getTotalLength();C.progress<1||!y?(C.path.style.strokeDasharray=`${Mt}`,C.path.style.strokeDashoffset=`${(1-Math.min(1,C.progress))*Mt}`):C.path.style.strokeDasharray!=="none"&&(C.path.style.strokeDasharray="none",C.path.style.strokeDashoffset="0")})},L=J=>{if(J.pointerType&&J.pointerType!=="mouse"||!M)return;const C=M.getBoundingClientRect(),xt=C.left+C.width/2,Q=C.top+C.height/2,dt=(J.clientX-xt)/(C.width/2),rt=(J.clientY-Q)/(C.height/2);v.nx=Math.max(-1,Math.min(1,dt)),v.ny=Math.max(-1,Math.min(1,rt)),b||(B=!0,x.ry=v.nx*A,x.rx=-v.ny*A,x.tx=v.nx*R,x.ty=v.ny*R)},U=()=>{v.nx=0,v.ny=0,b||(x.rx=0,x.ry=0,x.tx=0,x.ty=0),B=!1};if(M==null||M.addEventListener("pointermove",L,{passive:!0}),M==null||M.addEventListener("pointerleave",U,{passive:!0}),G(),t.animate){const J=gt.timeline();J.to(p.map(C=>C.circle),{duration:.32,attr:{r:l},ease:"back.out(2)",stagger:{each:.03,from:"edges"}},0),J.to({},{duration:.15}),J.to(f,{progress:1,duration:.22,ease:"power2.out",stagger:{each:.03},onComplete:()=>{y=!0}},">-0.05")}const O=[1,3,3,1],j=[1,7,7,1],k=J=>{const C=_[J],xt=C.length,Q=u[J].x,dt=i-c*2,rt=xt>1?dt/(xt-1):0,ft=[];for(let Mt=0;Mt<xt;Mt++)ft.push(c+(xt===1?dt/2:Mt*rt));[...C].sort((Mt,Nt)=>Mt.cy-Nt.cy).forEach((Mt,Nt)=>{gt.to(Mt,{cx:Q,cy:ft[Nt],duration:.35,ease:"power2.inOut"})})},V=J=>{const C=_[J];if(C.length<2)return;const xt=[...C].sort((ie,w)=>ie.cy-w.cy),Q=Math.random()*(xt.length-1)|0,dt=Q+1,rt=xt[Q],ft=xt[dt],vt=u[J].x,Mt=rt.cy,Nt=u[J].x,Wt=ft.cy;gt.to(rt,{cx:Nt,cy:Wt,duration:.45,ease:"power2.inOut"}),gt.to(ft,{cx:vt,cy:Mt,duration:.45,ease:"power2.inOut"})},Z=(J,C)=>`${J.id}-${C.id}`,K=J=>{const C=_[J],xt=_[J+1],Q=new Set;C.forEach(rt=>xt.forEach(ft=>Q.add(Z(rt,ft))));const dt=new Map;f.forEach(rt=>{const ft=_[J].includes(rt.from),vt=_[J+1].includes(rt.to);ft&&vt&&dt.set(Z(rt.from,rt.to),rt)}),dt.forEach((rt,ft)=>{Q.has(ft)||gt.to(rt,{progress:0,duration:.18,ease:"power2.out",onComplete:()=>{rt.path.remove();const vt=f.indexOf(rt);vt>=0&&f.splice(vt,1)}})}),Q.forEach(rt=>{if(!dt.has(rt)){const[ft,vt]=rt.split("-").map(w=>parseInt(w,10)),Mt=C.find(w=>w.id===ft),Nt=xt.find(w=>w.id===vt),Wt=h("path");Wt.setAttribute("opacity","1"),d.appendChild(Wt);const ie={path:Wt,from:Mt,to:Nt,progress:0};f.push(ie),gt.to(ie,{progress:1,duration:.22,ease:"power2.out"})}})},I=J=>{const C=_[J];if(C.length>=j[J])return;const xt=u[J].x,Q=h("circle");Q.setAttribute("cx",String(xt)),Q.setAttribute("cy",String(i/2)),Q.setAttribute("r","0"),Q.setAttribute("vector-effect","non-scaling-stroke"),Q.setAttribute("stroke","#fff"),Q.setAttribute("stroke-opacity","0.35"),Q.setAttribute("stroke-width","0.55"),m.appendChild(Q);const dt={id:g++,cx:xt,cy:i/2,cIndex:J,ampX:2+Math.random()*3,ampY:2+Math.random()*3,spdX:.4+Math.random()*.6,spdY:.4+Math.random()*.6,phase:Math.random()*Math.PI*2,ampX2:.6+Math.random()*1.2,ampY2:.6+Math.random()*1.2,spdX2:.15+Math.random()*.35,spdY2:.15+Math.random()*.35,phase2:Math.random()*Math.PI*2,circle:Q};C.push(dt),p.push(dt),gt.to(Q,{attr:{r:l},duration:.28,ease:"back.out(2)"}),k(J),J-1>=0&&K(J-1),J+1<_.length&&K(J)},q=J=>{const C=_[J];if(C.length<=O[J])return;const xt=Math.random()*C.length|0,Q=C[xt];f.filter(ft=>ft.from===Q||ft.to===Q).forEach(ft=>{gt.to(ft,{progress:0,duration:.18,ease:"power2.out",onComplete:()=>{ft.path.remove();const vt=f.indexOf(ft);vt>=0&&f.splice(vt,1)}})}),gt.to(Q.circle,{attr:{r:0},duration:.2,ease:"power2.in",onComplete:()=>Q.circle.remove()}),C.splice(xt,1);const rt=p.indexOf(Q);rt>=0&&p.splice(rt,1),k(J),J-1>=0&&K(J-1),J+1<_.length&&K(J)};let st,tt;const ot=()=>{const J=()=>{for(let C=0;C<_.length;C++){const xt=Math.random();xt<.2?I(C):xt<.4?q(C):xt<.65&&V(C)}};st=window.setInterval(J,700)},Et=()=>{st!==void 0&&window.clearInterval(st)},Ct=()=>G();gt.ticker.add(Ct);const bt=()=>{gt.ticker.remove(Ct),M==null||M.removeEventListener("pointermove",L),M==null||M.removeEventListener("pointerleave",U),M&&(M.style.transform="",M.style.willChange="",M.style.transformStyle=""),Et(),tt!==void 0&&window.clearTimeout(tt)};so.set(r,{nodes:p,cols:_,edges:f,ticker:Ct,dispose:bt,allDrawn:y,mouse:v,mutateStop:Et,mutateStartTimeoutId:tt}),tt=window.setTimeout(()=>{document.contains(r)&&ot()},2e3)}function Vu(r){const t=so.get(r);if(t){try{t.dispose()}catch{}t.mutateStartTimeoutId!==void 0&&window.clearTimeout(t.mutateStartTimeoutId),so.delete(r)}}let vl=!1,ha=null;const _f=r=>{const{isVisible:t,isHorizontal:e}=r;return Fn`
        <section
            id="projects-section"
            class="${`project-container absolute p-4 text-white overflow-y-auto ${t?"opacity-100":"opacity-0"} ${e?"loaded-horizontal":"loaded-vertical"}`}"
            aria-hidden="${!t}"
            aria-labelledby="projects-heading"
        >
            <h2 id="projects-heading" class="sr-only">Projects</h2>
            <div class="projects-inner w-full h-full">
                <div
                    class="slideshow-shell mx-auto flex flex-col items-center justify-center"
                    style="max-width: 540px; max-height: 540px;"
                    role="group"
                    aria-roledescription="carousel"
                    aria-label="Projects slideshow"
                >
                    <div id="project-slide-root" class="w-full" aria-live="polite"></div>
                </div>
            </div>
        </section>
    `},gf=()=>new Promise(r=>{const t=document.getElementById("projects-section");if(!t||vl)return r();vl=!0,console.log("[Projects] init called");const e=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=[mf,ff];ha=new hf({el:t,mountSelector:"#project-slide-root",slides:n,animated:!e,fadeFirstSlide:!0,progression:{mode:"cycle",defaultAdvanceAfterCycles:2,minVisibleMs:2500,perSlide:{graph:{mode:"cycle",advanceAfterCycles:1,minVisibleMs:4800},diffusion:{mode:"cycle",advanceAfterCycles:1,minVisibleMs:2e3}}}}),(async()=>{if(e)return console.log("[Projects] Reduced motion detected, skipping animations"),gt.set(t,{opacity:1,clearProps:"transform"}),await ha.start(0),r();console.log("[Projects] Running entrance animation"),gt.set(t,{opacity:0,y:16}),await new Promise(s=>gt.to(t,{opacity:1,y:0,duration:.45,ease:"power2.out",onComplete:s})),await ha.start(0),r()})()}),vf=r=>{const{isLoaded:t,isHorizontal:e,areExtraDivsVisible:n}=r;return Fn`
        <main class="${e?"app-shell app-shell-horizontal":"app-shell app-shell-vertical"}" aria-label="Portfolio content">
            <!-- Screen reader announcer for accessibility -->
            <div id="screen-reader-announcer" class="sr-only" aria-live="polite" aria-atomic="true"></div>

            <!-- Main components -->
            <section class="${e?"title-stage title-stage-horizontal":"title-stage title-stage-vertical"}" aria-labelledby="portfolio-title">
                ${Vh({isLoaded:t,isHorizontal:e})}
            </section>
            ${uf({isVisible:n,isHorizontal:e})}
            ${_f({isVisible:n,isHorizontal:e})}
        </main>
    `},Wu=()=>window.innerWidth>=1100&&window.innerHeight>=700&&window.innerWidth>window.innerHeight,xf=(r,t)=>{let e;return(...n)=>{const i=()=>{e=void 0,r(...n)};clearTimeout(e),e=window.setTimeout(i,t)}},Xu=r=>{const t=document.getElementById("screen-reader-announcer");if(t){t.textContent=r;return}const e=document.createElement("div");e.id="screen-reader-announcer",e.classList.add("sr-only"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.textContent=r,document.body.appendChild(e)};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="154",Mf=0,xl=1,yf=2,qu=1,Ef=2,wn=3,ei=0,Ie=1,Pn=2,Zn=0,nr=1,ao=2,Ml=3,yl=4,Sf=5,ji=100,Df=101,Tf=102,El=103,Sl=104,bf=200,Af=201,wf=202,Cf=203,Yu=204,$u=205,Rf=206,Pf=207,Lf=208,Ff=209,Uf=210,If=0,Nf=1,Of=2,oo=3,Bf=4,zf=5,kf=6,Hf=7,ju=0,Gf=1,Vf=2,Un=0,Wf=1,Xf=2,qf=3,Yf=4,$f=5,Ku=300,hr=301,dr=302,lo=303,co=304,Ys=306,uo=1e3,hn=1001,ho=1002,we=1003,Dl=1004,da=1005,Je=1006,jf=1007,Wr=1008,Jn=1009,Kf=1010,Zf=1011,Bo=1012,Zu=1013,qn=1014,Yn=1015,Xr=1016,Ju=1017,Qu=1018,Ei=1020,Jf=1021,dn=1023,Qf=1024,tp=1025,Si=1026,fr=1027,ep=1028,th=1029,np=1030,eh=1031,nh=1033,fa=33776,pa=33777,ma=33778,_a=33779,Tl=35840,bl=35841,Al=35842,wl=35843,ip=36196,Cl=37492,Rl=37496,Pl=37808,Ll=37809,Fl=37810,Ul=37811,Il=37812,Nl=37813,Ol=37814,Bl=37815,zl=37816,kl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,ga=36492,rp=36283,Xl=36284,ql=36285,Yl=36286,ih=3e3,Di=3001,sp=3200,ap=3201,op=0,lp=1,Ti="",Ut="srgb",Mn="srgb-linear",rh="display-p3",va=7680,cp=519,up=512,hp=513,dp=514,fp=515,pp=516,mp=517,_p=518,gp=519,$l=35044,jl="300 es",fo=1035,Ln=2e3,ks=2001;class mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xa=Math.PI/180,po=180/Math.PI;function jr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[r&255]+ye[r>>8&255]+ye[r>>16&255]+ye[r>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Re(r,t,e){return Math.max(t,Math.min(e,r))}function vp(r,t){return(r%t+t)%t}function Ma(r,t,e){return(1-e)*r+e*t}function Kl(r){return(r&r-1)===0&&r!==0}function mo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function rs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,i,s,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],y=i[1],v=i[4],E=i[7],M=i[2],b=i[5],A=i[8];return s[0]=a*_+o*y+l*M,s[3]=a*p+o*v+l*b,s[6]=a*f+o*E+l*A,s[1]=c*_+u*y+h*M,s[4]=c*p+u*v+h*b,s[7]=c*f+u*E+h*A,s[2]=d*_+m*y+g*M,s[5]=d*p+m*v+g*b,s[8]=d*f+m*E+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=e*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new It;function sh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Hs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Zl={};function Lr(r){r in Zl||(Zl[r]=!0,console.warn(r))}function ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ea(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const xp=new It().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Mp=new It().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function yp(r){return r.convertSRGBToLinear().applyMatrix3(Mp)}function Ep(r){return r.applyMatrix3(xp).convertLinearToSRGB()}const Sp={[Mn]:r=>r,[Ut]:r=>r.convertSRGBToLinear(),[rh]:yp},Dp={[Mn]:r=>r,[Ut]:r=>r.convertLinearToSRGB(),[rh]:Ep},an={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Mn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Sp[t],i=Dp[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Fi;class ah{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=Hs("canvas")),Fi.width=t.width,Fi.height=t.height;const n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ir(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ir(e[n]/255)*255):e[n]=ir(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tp=0;class oh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=jr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Sa(i[a].image)):s.push(Sa(i[a]))}else s=Sa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Sa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ah.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bp=0;class Ne extends mr{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=hn,i=hn,s=Je,a=Wr,o=dn,l=Jn,c=Ne.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=jr(),this.name="",this.source=new oh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Di?Ut:Ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uo:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uo:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Di:ih}set encoding(t){Lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Di?Ut:Ti}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Ku;Ne.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,E=(m+1)/2,M=(f+1)/2,b=(u+d)/4,A=(h+_)/4,R=(g+p)/4;return v>E&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=A/n):E>M?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=b/i,s=R/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=A/s,i=R/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ci extends mr{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Lr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Di?Ut:Ti),this.texture=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lh extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ap extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==m||u!==g){let p=1-o;const f=l*d+c*m+u*g+h*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),b=Math.atan2(M,f*y);p=Math.sin(p*b)/M,o=Math.sin(o*b)/M}const E=o*y;if(l=l*p+d*E,c=c*p+m*E,u=u*p+g*E,h=h*p+_*E,p===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*m-c*d,t[e+1]=l*g+u*d+c*h-o*m,t[e+2]=c*g+u*m+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,u=l*n+o*e-s*i,h=l*i+s*n-a*e,d=-s*e-a*n-o*i;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new z,Jl=new Kr;class Zr{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ui.copy(t.boundingBox),Ui.applyMatrix4(t.matrixWorld),this.union(Ui);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Sn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Sn)}else i.boundingBox===null&&i.computeBoundingBox(),Ui.copy(i.boundingBox),Ui.applyMatrix4(t.matrixWorld),this.union(Ui)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),ss.subVectors(this.max,Mr),Ii.subVectors(t.a,Mr),Ni.subVectors(t.b,Mr),Oi.subVectors(t.c,Mr),Bn.subVectors(Ni,Ii),zn.subVectors(Oi,Ni),li.subVectors(Ii,Oi);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-li.z,li.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,li.z,0,-li.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-li.y,li.x,0];return!Ta(e,Ii,Ni,Oi,ss)||(e=[1,0,0,0,1,0,0,0,1],!Ta(e,Ii,Ni,Oi,ss))?!1:(as.crossVectors(Bn,zn),e=[as.x,as.y,as.z],Ta(e,Ii,Ni,Oi,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new z,new z,new z,new z,new z,new z,new z,new z],Sn=new z,Ui=new Zr,Ii=new z,Ni=new z,Oi=new z,Bn=new z,zn=new z,li=new z,Mr=new z,ss=new z,as=new z,ci=new z;function Ta(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ci.fromArray(r,s);const o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wp=new Zr,yr=new z,ba=new z;class $s{constructor(t=new z,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);const e=yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(yr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(ba)),this.expandByPoint(yr.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new z,Aa=new z,os=new z,kn=new z,wa=new z,ls=new z,Ca=new z;class ch{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Aa.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Aa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(os),o=kn.dot(this.direction),l=-kn.dot(os),c=kn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Aa).addScaledVector(os,d),m}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,s){wa.subVectors(e,t),ls.subVectors(n,t),Ca.crossVectors(wa,ls);let a=this.direction.dot(Ca),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(ls.crossVectors(kn,ls));if(l<0)return null;const c=o*this.direction.dot(wa.cross(kn));if(c<0||l+c>a)return null;const u=-o*kn.dot(Ca);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,i,s,a,o,l,c,u,h,d,m,g,_,p){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,d,m,g,_,p)}set(t,e,n,i,s,a,o,l,c,u,h,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Bi.setFromMatrixColumn(t,0).length(),s=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cp,t,Rp)}lookAt(t,e,n){const i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Hn.crossVectors(n,He),Hn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Hn.crossVectors(n,He)),Hn.normalize(),cs.crossVectors(He,Hn),i[0]=Hn.x,i[4]=cs.x,i[8]=He.x,i[1]=Hn.y,i[5]=cs.y,i[9]=He.y,i[2]=Hn.z,i[6]=cs.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],y=n[3],v=n[7],E=n[11],M=n[15],b=i[0],A=i[4],R=i[8],x=i[12],D=i[1],B=i[5],G=i[9],L=i[13],U=i[2],O=i[6],j=i[10],k=i[14],V=i[3],Z=i[7],K=i[11],I=i[15];return s[0]=a*b+o*D+l*U+c*V,s[4]=a*A+o*B+l*O+c*Z,s[8]=a*R+o*G+l*j+c*K,s[12]=a*x+o*L+l*k+c*I,s[1]=u*b+h*D+d*U+m*V,s[5]=u*A+h*B+d*O+m*Z,s[9]=u*R+h*G+d*j+m*K,s[13]=u*x+h*L+d*k+m*I,s[2]=g*b+_*D+p*U+f*V,s[6]=g*A+_*B+p*O+f*Z,s[10]=g*R+_*G+p*j+f*K,s[14]=g*x+_*L+p*k+f*I,s[3]=y*b+v*D+E*U+M*V,s[7]=y*A+v*B+E*O+M*Z,s[11]=y*R+v*G+E*j+M*K,s[15]=y*x+v*L+E*k+M*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*m-n*l*m)+_*(+e*l*m-e*c*d+s*a*d-i*a*m+i*c*u-s*l*u)+p*(+e*c*h-e*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+f*(-i*o*u-e*l*h+e*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],y=h*p*c-_*d*c+_*l*m-o*p*m-h*l*f+o*d*f,v=g*d*c-u*p*c-g*l*m+a*p*m+u*l*f-a*d*f,E=u*_*c-g*h*c+g*o*m-a*_*m-u*o*f+a*h*f,M=g*h*l-u*_*l-g*o*d+a*_*d+u*o*p-a*h*p,b=e*y+n*v+i*E+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=y*A,t[1]=(_*d*s-h*p*s-_*i*m+n*p*m+h*i*f-n*d*f)*A,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*f+n*l*f)*A,t[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*m-n*l*m)*A,t[4]=v*A,t[5]=(u*p*s-g*d*s+g*i*m-e*p*m-u*i*f+e*d*f)*A,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*f-e*l*f)*A,t[7]=(a*d*s-u*l*s+u*i*c-e*d*c-a*i*m+e*l*m)*A,t[8]=E*A,t[9]=(g*h*s-u*_*s-g*n*m+e*_*m+u*n*f-e*h*f)*A,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*f+e*o*f)*A,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*m-e*o*m)*A,t[12]=M*A,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*p+e*h*p)*A,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*A,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,g=s*h,_=a*u,p=a*h,f=o*h,y=l*c,v=l*u,E=l*h,M=n.x,b=n.y,A=n.z;return i[0]=(1-(_+f))*M,i[1]=(m+E)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(m-E)*b,i[5]=(1-(d+f))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(g+v)*A,i[9]=(p-y)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Bi.set(i[0],i[1],i[2]).length();const a=Bi.set(i[4],i[5],i[6]).length(),o=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const c=1/s,u=1/a,h=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,e.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Ln){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(o===Ln)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ks)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ln){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),d=(e+t)*c,m=(n+i)*u;let g,_;if(o===Ln)g=(a+s)*h,_=-2*h;else if(o===ks)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new z,on=new _e,Cp=new z(0,0,0),Rp=new z(1,1,1),Hn=new z,cs=new z,He=new z,Ql=new _e,tc=new Kr;class js{constructor(t=0,e=0,n=0,i=js.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}js.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pp=0;const ec=new z,zi=new Kr,Tn=new _e,us=new z,Er=new z,Lp=new z,Fp=new Kr,nc=new z(1,0,0),ic=new z(0,1,0),rc=new z(0,0,1),Up={type:"added"},sc={type:"removed"};class Oe extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new z,e=new js,n=new Kr,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new It}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?us.copy(t):us.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Er,us,this.up):Tn.lookAt(us,Er,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(Tn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(sc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Fp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Oe.DEFAULT_UP=new z(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new z,bn=new z,Ra=new z,An=new z,ki=new z,Hi=new z,ac=new z,Pa=new z,La=new z,Fa=new z;let hs=!1;class un{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),bn.subVectors(n,e),Ra.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(bn),l=ln.dot(Ra),c=bn.dot(bn),u=bn.dot(Ra),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(t,e,n,i,s,a,o,l){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,An),l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),bn.subVectors(t,e),ln.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),ln.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),un.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return un.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ki.subVectors(i,n),Hi.subVectors(s,n),Pa.subVectors(t,n);const l=ki.dot(Pa),c=Hi.dot(Pa);if(l<=0&&c<=0)return e.copy(n);La.subVectors(t,i);const u=ki.dot(La),h=Hi.dot(La);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ki,a);Fa.subVectors(t,s);const m=ki.dot(Fa),g=Hi.dot(Fa);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Hi,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return ac.subVectors(s,i),o=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(ac,o);const f=1/(p+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(ki,a).addScaledVector(Hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ip=0;class Jr extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=nr,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=$u,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Ua(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ut){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,an.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=an.workingColorSpace){return this.r=t,this.g=e,this.b=n,an.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=an.workingColorSpace){if(t=vp(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ua(a,s,t+1/3),this.g=Ua(a,s,t),this.b=Ua(a,s,t-1/3)}return an.toWorkingColorSpace(this,i),this}setStyle(t,e=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ut){const n=hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}copyLinearToSRGB(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ut){return an.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Re(Ee.r*255,0,255))*65536+Math.round(Re(Ee.g*255,0,255))*256+Math.round(Re(Ee.b*255,0,255))}getHexString(t=Ut){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=an.workingColorSpace){an.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,s=Ee.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=an.workingColorSpace){return an.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Ut){an.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==Ut?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(cn),cn.h+=t,cn.s+=e,cn.l+=n,this.setHSL(cn.h,cn.s,cn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(ds);const n=Ma(cn.h,ds.h,e),i=Ma(cn.s,ds.s,e),s=Ma(cn.l,ds.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Vt;Vt.NAMES=hh;class dh extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new z,fs=new Yt;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$l,this.updateRange={offset:0,count:-1},this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$l&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class fh extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ph extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class bi extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Np=0;const Ke=new _e,Ia=new Oe,Gi=new z,Ge=new Zr,Sr=new Zr,pe=new z;class On extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sh(t)?ph:fh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Ge.min,Sr.min),Ge.expandByPoint(pe),pe.addVectors(Ge.max,Sr.max),Ge.expandByPoint(pe)):(Ge.expandByPoint(Sr.min),Ge.expandByPoint(Sr.max))}Ge.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)pe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pe.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(t,c),pe.add(Gi)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new z,u[D]=new z;const h=new z,d=new z,m=new z,g=new Yt,_=new Yt,p=new Yt,f=new z,y=new z;function v(D,B,G){h.fromArray(i,D*3),d.fromArray(i,B*3),m.fromArray(i,G*3),g.fromArray(a,D*2),_.fromArray(a,B*2),p.fromArray(a,G*2),d.sub(h),m.sub(h),_.sub(g),p.sub(g);const L=1/(_.x*p.y-p.x*_.y);isFinite(L)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(L),y.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(L),c[D].add(f),c[B].add(f),c[G].add(f),u[D].add(y),u[B].add(y),u[G].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let D=0,B=E.length;D<B;++D){const G=E[D],L=G.start,U=G.count;for(let O=L,j=L+U;O<j;O+=3)v(n[O+0],n[O+1],n[O+2])}const M=new z,b=new z,A=new z,R=new z;function x(D){A.fromArray(s,D*3),R.copy(A);const B=c[D];M.copy(B),M.sub(A.multiplyScalar(A.dot(B))).normalize(),b.crossVectors(R,B);const L=b.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=L}for(let D=0,B=E.length;D<B;++D){const G=E[D],L=G.start,U=G.count;for(let O=L,j=L+U;O<j;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new On,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new _e,ui=new ch,ps=new $s,lc=new z,Vi=new z,Wi=new z,Xi=new z,Na=new z,ms=new z,_s=new Yt,gs=new Yt,vs=new Yt,cc=new z,uc=new z,hc=new z,xs=new z,Ms=new z;class $n extends Oe{constructor(t=new On,e=new dh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Na.fromBufferAttribute(h,t),a?ms.addScaledVector(Na,u):ms.addScaledVector(Na.sub(e),u))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),ui.copy(t.ray).recast(t.near),!(ps.containsPoint(ui.origin)===!1&&(ui.intersectSphere(ps,lc)===null||ui.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(oc.copy(s).invert(),ui.copy(t.ray).applyMatrix4(oc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,M=v;E<M;E+=3){const b=o.getX(E),A=o.getX(E+1),R=o.getX(E+2);i=ys(this,f,t,n,c,u,h,b,A,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=o.getX(p),v=o.getX(p+1),E=o.getX(p+2);i=ys(this,a,t,n,c,u,h,y,v,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,M=v;E<M;E+=3){const b=E,A=E+1,R=E+2;i=ys(this,f,t,n,c,u,h,b,A,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,v=p+1,E=p+2;i=ys(this,a,t,n,c,u,h,y,v,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Op(r,t,e,n,i,s,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ei,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ms);return c<e.near||c>e.far?null:{distance:c,point:Ms.clone(),object:r}}function ys(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Vi),r.getVertexPosition(l,Wi),r.getVertexPosition(c,Xi);const u=Op(r,t,e,n,Vi,Wi,Xi,xs);if(u){i&&(_s.fromBufferAttribute(i,o),gs.fromBufferAttribute(i,l),vs.fromBufferAttribute(i,c),u.uv=un.getInterpolation(xs,Vi,Wi,Xi,_s,gs,vs,new Yt)),s&&(_s.fromBufferAttribute(s,o),gs.fromBufferAttribute(s,l),vs.fromBufferAttribute(s,c),u.uv1=un.getInterpolation(xs,Vi,Wi,Xi,_s,gs,vs,new Yt),u.uv2=u.uv1),a&&(cc.fromBufferAttribute(a,o),uc.fromBufferAttribute(a,l),hc.fromBufferAttribute(a,c),u.normal=un.getInterpolation(xs,Vi,Wi,Xi,cc,uc,hc,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};un.getNormal(Vi,Wi,Xi,h.normal),u.face=h}return u}class Qr extends On{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(u,3)),this.setAttribute("uv",new bi(h,2));function g(_,p,f,y,v,E,M,b,A,R,x){const D=E/A,B=M/R,G=E/2,L=M/2,U=b/2,O=A+1,j=R+1;let k=0,V=0;const Z=new z;for(let K=0;K<j;K++){const I=K*B-L;for(let q=0;q<O;q++){const st=q*D-G;Z[_]=st*y,Z[p]=I*v,Z[f]=U,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[f]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(q/A),h.push(1-K/R),k+=1}}for(let K=0;K<R;K++)for(let I=0;I<A;I++){const q=d+I+O*K,st=d+I+O*(K+1),tt=d+(I+1)+O*(K+1),ot=d+(I+1)+O*K;l.push(q,st,ot),l.push(st,tt,ot),V+=6}o.addGroup(m,V,x),m+=V,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(r){const t={};for(let e=0;e<r.length;e++){const n=pr(r[e]);for(const i in n)t[i]=n[i]}return t}function Bp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function mh(r){return r.getRenderTarget()===null?r.outputColorSpace:Mn}const zp={clone:pr,merge:Ae};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _h extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends _h{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Yi=1;class Gp extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Qe(qi,Yi,t,e);i.layers=this.layers,this.add(i);const s=new Qe(qi,Yi,t,e);s.layers=this.layers,this.add(s);const a=new Qe(qi,Yi,t,e);a.layers=this.layers,this.add(a);const o=new Qe(qi,Yi,t,e);o.layers=this.layers,this.add(o);const l=new Qe(qi,Yi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(qi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,d=t.xr.enabled;t.toneMapping=Un,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class gh extends Ne{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vp extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Lr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Di?Ut:Ti),this.texture=new gh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qr(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Zn});s.uniforms.tEquirect.value=e;const a=new $n(i,s),o=e.minFilter;return e.minFilter===Wr&&(e.minFilter=Je),new Gp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Oa=new z,Wp=new z,Xp=new It;class fi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Oa.subVectors(n,e).cross(Wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xp.getNormalMatrix(t),i=this.coplanarPoint(Oa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new $s,Es=new z;class vh{constructor(t=new fi,e=new fi,n=new fi,i=new fi,s=new fi,a=new fi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],y=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-s,d-c,p-m,E-f).normalize(),n[1].setComponents(l+s,d+c,p+m,E+f).normalize(),n[2].setComponents(l+a,d+u,p+g,E+y).normalize(),n[3].setComponents(l-a,d-u,p-g,E-y).normalize(),n[4].setComponents(l-o,d-h,p-_,E-v).normalize(),e===Ln)n[5].setComponents(l+o,d+h,p+_,E+v).normalize();else if(e===ks)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Es.x=i.normal.x>0?t.max.x:t.min.x,Es.y=i.normal.y>0?t.max.y:t.min.y,Es.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function qp(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,d):(e?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class zo extends On{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const y=f*d-a;for(let v=0;v<c;v++){const E=v*h-s;g.push(E,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,E=y+c*(f+1),M=y+1+c*(f+1),b=y+1+c*f;m.push(v,E,b),m.push(E,M,b)}this.setIndex(m),this.setAttribute("position",new bi(g,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_m=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Wm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$m=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,a_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,o_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,l_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,c_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,m_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,__=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,L_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,J_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Yp,alphahash_pars_fragment:$p,alphamap_fragment:jp,alphamap_pars_fragment:Kp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:tm,begin_vertex:em,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:rm,bumpmap_pars_fragment:sm,clipping_planes_fragment:am,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:um,color_pars_fragment:hm,color_pars_vertex:dm,color_vertex:fm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:_m,displacementmap_pars_vertex:gm,displacementmap_vertex:vm,emissivemap_fragment:xm,emissivemap_pars_fragment:Mm,colorspace_fragment:ym,colorspace_pars_fragment:Em,envmap_fragment:Sm,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Tm,envmap_pars_vertex:bm,envmap_physical_pars_fragment:Bm,envmap_vertex:Am,fog_vertex:wm,fog_pars_vertex:Cm,fog_fragment:Rm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Lm,lightmap_fragment:Fm,lightmap_pars_fragment:Um,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Nm,lights_pars_begin:Om,lights_toon_fragment:zm,lights_toon_pars_fragment:km,lights_phong_fragment:Hm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Vm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:qm,lights_fragment_end:Ym,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:Qm,map_particle_fragment:t_,map_particle_pars_fragment:e_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphcolor_vertex:r_,morphnormal_vertex:s_,morphtarget_pars_vertex:a_,morphtarget_vertex:o_,normal_fragment_begin:l_,normal_fragment_maps:c_,normal_pars_fragment:u_,normal_pars_vertex:h_,normal_vertex:d_,normalmap_pars_fragment:f_,clearcoat_normal_fragment_begin:p_,clearcoat_normal_fragment_maps:m_,clearcoat_pars_fragment:__,iridescence_pars_fragment:g_,opaque_fragment:v_,packing:x_,premultiplied_alpha_fragment:M_,project_vertex:y_,dithering_fragment:E_,dithering_pars_fragment:S_,roughnessmap_fragment:D_,roughnessmap_pars_fragment:T_,shadowmap_pars_fragment:b_,shadowmap_pars_vertex:A_,shadowmap_vertex:w_,shadowmask_pars_fragment:C_,skinbase_vertex:R_,skinning_pars_vertex:P_,skinning_vertex:L_,skinnormal_vertex:F_,specularmap_fragment:U_,specularmap_pars_fragment:I_,tonemapping_fragment:N_,tonemapping_pars_fragment:O_,transmission_fragment:B_,transmission_pars_fragment:z_,uv_pars_fragment:k_,uv_pars_vertex:H_,uv_vertex:G_,worldpos_vertex:V_,background_vert:W_,background_frag:X_,backgroundCube_vert:q_,backgroundCube_frag:Y_,cube_vert:$_,cube_frag:j_,depth_vert:K_,depth_frag:Z_,distanceRGBA_vert:J_,distanceRGBA_frag:Q_,equirect_vert:tg,equirect_frag:eg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:rg,meshbasic_frag:sg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:ug,meshnormal_frag:hg,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:_g,meshtoon_frag:gg,points_vert:vg,points_frag:xg,shadow_vert:Mg,shadow_frag:yg,sprite_vert:Eg,sprite_frag:Sg},at={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},_n={basic:{uniforms:Ae([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ae([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ae([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ae([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ae([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ae([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ae([at.points,at.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ae([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ae([at.common,at.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ae([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ae([at.sprite,at.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ae([at.common,at.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ae([at.lights,at.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};_n.physical={uniforms:Ae([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ss={r:0,b:0,g:0};function Dg(r,t,e,n,i,s,a){const o=new Vt(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(p,f){let y=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0),r.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ys)?(u===void 0&&(u=new $n(new Qr(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:pr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Ut,(h!==v||d!==v.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $n(new zo(2,2),new Ri({name:"BackgroundMaterial",uniforms:pr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(Ss,mh(r)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Tg(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(U,O,j,k,V){let Z=!1;if(a){const K=_(k,j,O);c!==K&&(c=K,m(c.object)),Z=f(U,k,j,V),Z&&y(U,k,j,V)}else{const K=O.wireframe===!0;(c.geometry!==k.id||c.program!==j.id||c.wireframe!==K)&&(c.geometry=k.id,c.program=j.id,c.wireframe=K,Z=!0)}V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,R(U,O,j,k),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,O,j){const k=j.wireframe===!0;let V=o[U.id];V===void 0&&(V={},o[U.id]=V);let Z=V[O.id];Z===void 0&&(Z={},V[O.id]=Z);let K=Z[k];return K===void 0&&(K=p(d()),Z[k]=K),K}function p(U){const O=[],j=[],k=[];for(let V=0;V<i;V++)O[V]=0,j[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:k,object:U,attributes:{},index:null}}function f(U,O,j,k){const V=c.attributes,Z=O.attributes;let K=0;const I=j.getAttributes();for(const q in I)if(I[q].location>=0){const tt=V[q];let ot=Z[q];if(ot===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ot=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ot=U.instanceColor)),tt===void 0||tt.attribute!==ot||ot&&tt.data!==ot.data)return!0;K++}return c.attributesNum!==K||c.index!==k}function y(U,O,j,k){const V={},Z=O.attributes;let K=0;const I=j.getAttributes();for(const q in I)if(I[q].location>=0){let tt=Z[q];tt===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));const ot={};ot.attribute=tt,tt&&tt.data&&(ot.data=tt.data),V[q]=ot,K++}c.attributes=V,c.attributesNum=K,c.index=k}function v(){const U=c.newAttributes;for(let O=0,j=U.length;O<j;O++)U[O]=0}function E(U){M(U,0)}function M(U,O){const j=c.newAttributes,k=c.enabledAttributes,V=c.attributeDivisors;j[U]=1,k[U]===0&&(r.enableVertexAttribArray(U),k[U]=1),V[U]!==O&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,O),V[U]=O)}function b(){const U=c.newAttributes,O=c.enabledAttributes;for(let j=0,k=O.length;j<k;j++)O[j]!==U[j]&&(r.disableVertexAttribArray(j),O[j]=0)}function A(U,O,j,k,V,Z,K){K===!0?r.vertexAttribIPointer(U,O,j,V,Z):r.vertexAttribPointer(U,O,j,k,V,Z)}function R(U,O,j,k){if(n.isWebGL2===!1&&(U.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const V=k.attributes,Z=j.getAttributes(),K=O.defaultAttributeValues;for(const I in Z){const q=Z[I];if(q.location>=0){let st=V[I];if(st===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(st=U.instanceColor)),st!==void 0){const tt=st.normalized,ot=st.itemSize,Et=e.get(st);if(Et===void 0)continue;const Ct=Et.buffer,bt=Et.type,Ht=Et.bytesPerElement,ve=n.isWebGL2===!0&&(bt===r.INT||bt===r.UNSIGNED_INT||st.gpuType===Zu);if(st.isInterleavedBufferAttribute){const J=st.data,C=J.stride,xt=st.offset;if(J.isInstancedInterleavedBuffer){for(let Q=0;Q<q.locationSize;Q++)M(q.location+Q,J.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Q=0;Q<q.locationSize;Q++)E(q.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let Q=0;Q<q.locationSize;Q++)A(q.location+Q,ot/q.locationSize,bt,tt,C*Ht,(xt+ot/q.locationSize*Q)*Ht,ve)}else{if(st.isInstancedBufferAttribute){for(let J=0;J<q.locationSize;J++)M(q.location+J,st.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let J=0;J<q.locationSize;J++)E(q.location+J);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let J=0;J<q.locationSize;J++)A(q.location+J,ot/q.locationSize,bt,tt,ot*Ht,ot/q.locationSize*J*Ht,ve)}}else if(K!==void 0){const tt=K[I];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(q.location,tt);break;case 3:r.vertexAttrib3fv(q.location,tt);break;case 4:r.vertexAttrib4fv(q.location,tt);break;default:r.vertexAttrib1fv(q.location,tt)}}}}b()}function x(){G();for(const U in o){const O=o[U];for(const j in O){const k=O[j];for(const V in k)g(k[V].object),delete k[V];delete O[j]}delete o[U]}}function D(U){if(o[U.id]===void 0)return;const O=o[U.id];for(const j in O){const k=O[j];for(const V in k)g(k[V].object),delete k[V];delete O[j]}delete o[U.id]}function B(U){for(const O in o){const j=o[O];if(j[U.id]===void 0)continue;const k=j[U.id];for(const V in k)g(k[V].object),delete k[V];delete j[U.id]}}function G(){L(),u=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:L,dispose:x,releaseStatesOfGeometry:D,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:E,disableUnusedAttributes:b}}function bg(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),e.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Ag(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=a||t.has("OES_texture_float"),M=v&&E,b=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:b}}function wg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new fi,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let E=f.clippingState||null;l.value=E,E=u(g,d,v,m);for(let M=0;M!==v;++M)E[M]=e[M];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,E=m;v!==_;++v,E+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Cg(r){let t=new WeakMap;function e(a,o){return o===lo?a.mapping=hr:o===co&&(a.mapping=dr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===lo||o===co)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vp(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Rg extends _h{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,dc=[.125,.215,.35,.446,.526,.582],mi=20,Ba=new Rg,fc=new Vt;let za=null;const pi=(1+Math.sqrt(5))/2,$i=1/pi,pc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,pi,$i),new z(0,pi,-$i),new z($i,0,pi),new z(-$i,0,pi),new z(pi,$i,0),new z(-pi,$i,0)];class mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){za=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za),t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Xr,format:dn,colorSpace:Mn,depthBuffer:!1},i=_c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(s)),this._blurMaterial=Lg(s,t,e)}return i}_compileMaterial(t){const e=new $n(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,i){const o=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fc),u.toneMapping=Un,u.autoClear=!1;const m=new dh({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new $n(new Qr,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(fc),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Ds(i,y*v,f>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===hr||t.mapping===dr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new $n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=pc[(i-1)%pc.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $n(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mi-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):mi;p>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mi}`);const f=[];let y=0;for(let A=0;A<mi;++A){const R=A/_,x=Math.exp(-R*R/2);f.push(x),A===0?y+=x:A<p&&(y+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const E=this._sizeLods[i],M=3*E*(i>v-Ji?i-v+Ji:0),b=4*(this._cubeSize-E);Ds(e,M,b,3*E,2*E),l.setRenderTarget(e),l.render(h,Ba)}}function Pg(r){const t=[],e=[],n=[];let i=r;const s=r-Ji+1+dc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ji?l=dc[a-r+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,R=b>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(x,_*g*b),v.set(d,p*g*b);const D=[b,b,b,b,b,b];E.set(D,f*g*b)}const M=new On;M.setAttribute("position",new rn(y,_)),M.setAttribute("uv",new rn(v,p)),M.setAttribute("faceIndex",new rn(E,f)),t.push(M),i>Ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _c(r,t,e){const n=new Ci(r,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Lg(r,t,e){const n=new Float32Array(mi),i=new z(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function gc(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function vc(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fg(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===lo||l===co,u=l===hr||l===dr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new mc(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new mc(r));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ug(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ig(r,t,e,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,E=y.length;v<E;v+=3){const M=y[v+0],b=y[v+1],A=y[v+2];d.push(M,b,b,A,A,M)}}else{const y=g.array;_=g.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const M=v+0,b=v+1,A=v+2;d.push(M,b,b,A,A,M)}}const p=new(sh(d)?ph:fh)(d,1);p.version=_;const f=s.get(h);f&&t.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ng(r,t,e,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,o,d*l),e.update(m,s,1)}function h(d,m,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,d*l,g),e.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Og(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Bg(r,t){return r[0]-t[0]}function zg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function kg(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new xe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let U=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let R=0;y===!0&&(R=1),v===!0&&(R=2),E===!0&&(R=3);let x=u.attributes.position.count*R,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const B=new Float32Array(x*D*4*g),G=new lh(B,x,D,g);G.type=Yn,G.needsUpdate=!0;const L=R*4;for(let O=0;O<g;O++){const j=M[O],k=b[O],V=A[O],Z=x*D*4*O;for(let K=0;K<j.count;K++){const I=K*L;y===!0&&(a.fromBufferAttribute(j,K),B[Z+I+0]=a.x,B[Z+I+1]=a.y,B[Z+I+2]=a.z,B[Z+I+3]=0),v===!0&&(a.fromBufferAttribute(k,K),B[Z+I+4]=a.x,B[Z+I+5]=a.y,B[Z+I+6]=a.z,B[Z+I+7]=0),E===!0&&(a.fromBufferAttribute(V,K),B[Z+I+8]=a.x,B[Z+I+9]=a.y,B[Z+I+10]=a.z,B[Z+I+11]=V.itemSize===4?a.w:1)}}_={count:g,texture:G,size:new Yt(x,D)},s.set(u,_),u.addEventListener("dispose",U)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<m;v++){const E=g[v];E[0]=v,E[1]=d[v]}g.sort(zg);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Bg);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const E=o[v],M=E[0],b=E[1];M!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+v)!==_[M]&&u.setAttribute("morphTarget"+v,_[M]),p&&u.getAttribute("morphNormal"+v)!==p[M]&&u.setAttribute("morphNormal"+v,p[M]),i[v]=b,f+=b):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Hg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Mh=new Ne,yh=new lh,Eh=new Ap,Sh=new gh,xc=[],Mc=[],yc=new Float32Array(16),Ec=new Float32Array(9),Sc=new Float32Array(4);function _r(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=xc[i];if(s===void 0&&(s=new Float32Array(i),xc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ue(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function he(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ks(r,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Gg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2fv(this.addr,t),he(e,t)}}function Wg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;r.uniform3fv(this.addr,t),he(e,t)}}function Xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4fv(this.addr,t),he(e,t)}}function qg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ue(e,n))return;Sc.set(n),r.uniformMatrix2fv(this.addr,!1,Sc),he(e,n)}}function Yg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ue(e,n))return;Ec.set(n),r.uniformMatrix3fv(this.addr,!1,Ec),he(e,n)}}function $g(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ue(e,n))return;yc.set(n),r.uniformMatrix4fv(this.addr,!1,yc),he(e,n)}}function jg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Kg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2iv(this.addr,t),he(e,t)}}function Zg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;r.uniform3iv(this.addr,t),he(e,t)}}function Jg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4iv(this.addr,t),he(e,t)}}function Qg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function t0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2uiv(this.addr,t),he(e,t)}}function e0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;r.uniform3uiv(this.addr,t),he(e,t)}}function n0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4uiv(this.addr,t),he(e,t)}}function i0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Mh,i)}function r0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Eh,i)}function s0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Sh,i)}function a0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yh,i)}function o0(r){switch(r){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return $g;case 5124:case 35670:return jg;case 35667:case 35671:return Kg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return t0;case 36295:return e0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(r,t){r.uniform1fv(this.addr,t)}function c0(r,t){const e=_r(t,this.size,2);r.uniform2fv(this.addr,e)}function u0(r,t){const e=_r(t,this.size,3);r.uniform3fv(this.addr,e)}function h0(r,t){const e=_r(t,this.size,4);r.uniform4fv(this.addr,e)}function d0(r,t){const e=_r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function f0(r,t){const e=_r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function p0(r,t){const e=_r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function m0(r,t){r.uniform1iv(this.addr,t)}function _0(r,t){r.uniform2iv(this.addr,t)}function g0(r,t){r.uniform3iv(this.addr,t)}function v0(r,t){r.uniform4iv(this.addr,t)}function x0(r,t){r.uniform1uiv(this.addr,t)}function M0(r,t){r.uniform2uiv(this.addr,t)}function y0(r,t){r.uniform3uiv(this.addr,t)}function E0(r,t){r.uniform4uiv(this.addr,t)}function S0(r,t,e){const n=this.cache,i=t.length,s=Ks(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Mh,s[a])}function D0(r,t,e){const n=this.cache,i=t.length,s=Ks(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Eh,s[a])}function T0(r,t,e){const n=this.cache,i=t.length,s=Ks(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Sh,s[a])}function b0(r,t,e){const n=this.cache,i=t.length,s=Ks(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||yh,s[a])}function A0(r){switch(r){case 5126:return l0;case 35664:return c0;case 35665:return u0;case 35666:return h0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return _0;case 35668:case 35672:return g0;case 35669:case 35673:return v0;case 5125:return x0;case 36294:return M0;case 36295:return y0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return b0}}class w0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=o0(e.type)}}class C0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=A0(e.type)}}class R0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Dc(r,t){r.seq.push(t),r.map[t.id]=t}function P0(r,t,e){const n=r.name,i=n.length;for(ka.lastIndex=0;;){const s=ka.exec(n),a=ka.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Dc(e,c===void 0?new w0(o,r,t):new C0(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new R0(o),Dc(e,h)),e=h}}}class Ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);P0(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Tc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let L0=0;function F0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function U0(r){switch(r){case Mn:return["Linear","( value )"];case Ut:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function bc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+F0(r.getShaderSource(t),a)}else return i}function I0(r,t){const e=U0(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function N0(r,t){let e;switch(t){case Wf:e="Linear";break;case Xf:e="Reinhard";break;case qf:e="OptimizedCineon";break;case Yf:e="ACESFilmic";break;case $f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function O0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function B0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function z0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ar(r){return r!==""}function Ac(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(r){return r.replace(k0,G0)}const H0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function G0(r,t){let e=Ft[t];if(e===void 0){const n=H0.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _o(e)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(r){return r.replace(V0,W0)}function W0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ef?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function q0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case hr:case dr:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case dr:t="ENVMAP_MODE_REFRACTION";break}return t}function $0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ju:t="ENVMAP_BLENDING_MULTIPLY";break;case Gf:t="ENVMAP_BLENDING_MIX";break;case Vf:t="ENVMAP_BLENDING_ADD";break}return t}function j0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function K0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=X0(e),c=q0(e),u=Y0(e),h=$0(e),d=j0(e),m=e.isWebGL2?"":O0(e),g=B0(s),_=i.createProgram();let p,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),f.length>0&&(f+=`
`)):(p=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),f=[m,Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Un?N0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,I0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),a=_o(a),a=Ac(a,e),a=wc(a,e),o=_o(o),o=Ac(o,e),o=wc(o,e),a=Cc(a),o=Cc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+p+a,E=y+f+o,M=Tc(i,i.VERTEX_SHADER,v),b=Tc(i,i.FRAGMENT_SHADER,E);if(i.attachShader(_,M),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(b).trim();let G=!0,L=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,b);else{const U=bc(i,M,"vertex"),O=bc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+U+`
`+O)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(D===""||B==="")&&(L=!1);L&&(this.diagnostics={runnable:G,programLog:x,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:f}})}i.deleteShader(M),i.deleteShader(b);let A;this.getUniforms=function(){return A===void 0&&(A=new Ps(i,_)),A};let R;return this.getAttributes=function(){return R===void 0&&(R=z0(i,_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=L0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let Z0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Q0(t),e.set(t,n)),n}}class Q0{constructor(t){this.id=Z0++,this.code=t,this.usedTimes=0}}function tv(r,t,e,n,i,s,a){const o=new uh,l=new J0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,D,B,G,L){const U=G.fog,O=L.geometry,j=x.isMeshStandardMaterial?G.environment:null,k=(x.isMeshStandardMaterial?e:t).get(x.envMap||j),V=k&&k.mapping===Ys?k.image.height:null,Z=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,I=K!==void 0?K.length:0;let q=0;O.morphAttributes.position!==void 0&&(q=1),O.morphAttributes.normal!==void 0&&(q=2),O.morphAttributes.color!==void 0&&(q=3);let st,tt,ot,Et;if(Z){const fn=_n[Z];st=fn.vertexShader,tt=fn.fragmentShader}else st=x.vertexShader,tt=x.fragmentShader,l.update(x),ot=l.getVertexShaderID(x),Et=l.getFragmentShaderID(x);const Ct=r.getRenderTarget(),bt=L.isInstancedMesh===!0,Ht=!!x.map,ve=!!x.matcap,J=!!k,C=!!x.aoMap,xt=!!x.lightMap,Q=!!x.bumpMap,dt=!!x.normalMap,rt=!!x.displacementMap,ft=!!x.emissiveMap,vt=!!x.metalnessMap,Mt=!!x.roughnessMap,Nt=x.anisotropy>0,Wt=x.clearcoat>0,ie=x.iridescence>0,w=x.sheen>0,S=x.transmission>0,X=Nt&&!!x.anisotropyMap,et=Wt&&!!x.clearcoatMap,nt=Wt&&!!x.clearcoatNormalMap,ct=Wt&&!!x.clearcoatRoughnessMap,yt=ie&&!!x.iridescenceMap,ut=ie&&!!x.iridescenceThicknessMap,$=w&&!!x.sheenColorMap,St=w&&!!x.sheenRoughnessMap,Dt=!!x.specularMap,At=!!x.specularColorMap,mt=!!x.specularIntensityMap,_t=S&&!!x.transmissionMap,Ot=S&&!!x.thicknessMap,$t=!!x.gradientMap,P=!!x.alphaMap,lt=x.alphaTest>0,H=!!x.alphaHash,it=!!x.extensions,ht=!!O.attributes.uv1,Gt=!!O.attributes.uv2,Zt=!!O.attributes.uv3;return{isWebGL2:u,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:tt,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:Et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:bt,instancingColor:bt&&L.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ct===null?r.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Mn,map:Ht,matcap:ve,envMap:J,envMapMode:J&&k.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:xt,bumpMap:Q,normalMap:dt,displacementMap:d&&rt,emissiveMap:ft,normalMapObjectSpace:dt&&x.normalMapType===lp,normalMapTangentSpace:dt&&x.normalMapType===op,metalnessMap:vt,roughnessMap:Mt,anisotropy:Nt,anisotropyMap:X,clearcoat:Wt,clearcoatMap:et,clearcoatNormalMap:nt,clearcoatRoughnessMap:ct,iridescence:ie,iridescenceMap:yt,iridescenceThicknessMap:ut,sheen:w,sheenColorMap:$,sheenRoughnessMap:St,specularMap:Dt,specularColorMap:At,specularIntensityMap:mt,transmission:S,transmissionMap:_t,thicknessMap:Ot,gradientMap:$t,opaque:x.transparent===!1&&x.blending===nr,alphaMap:P,alphaTest:lt,alphaHash:H,combine:x.combine,mapUv:Ht&&_(x.map.channel),aoMapUv:C&&_(x.aoMap.channel),lightMapUv:xt&&_(x.lightMap.channel),bumpMapUv:Q&&_(x.bumpMap.channel),normalMapUv:dt&&_(x.normalMap.channel),displacementMapUv:rt&&_(x.displacementMap.channel),emissiveMapUv:ft&&_(x.emissiveMap.channel),metalnessMapUv:vt&&_(x.metalnessMap.channel),roughnessMapUv:Mt&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:et&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(x.sheenRoughnessMap.channel),specularMapUv:Dt&&_(x.specularMap.channel),specularColorMapUv:At&&_(x.specularColorMap.channel),specularIntensityMapUv:mt&&_(x.specularIntensityMap.channel),transmissionMapUv:_t&&_(x.transmissionMap.channel),thicknessMapUv:Ot&&_(x.thicknessMap.channel),alphaMapUv:P&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||Nt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ht,vertexUv2s:Gt,vertexUv3s:Zt,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Ht||P),fog:!!U,useFog:x.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:Un,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===Ie,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:it&&x.extensions.derivatives===!0,extensionFragDepth:it&&x.extensions.fragDepth===!0,extensionDrawBuffers:it&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:it&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const D=[];if(x.shaderID?D.push(x.shaderID):(D.push(x.customVertexShaderID),D.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)D.push(B),D.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(y(D,x),v(D,x),D.push(r.outputColorSpace)),D.push(x.customProgramCacheKey),D.join()}function y(x,D){x.push(D.precision),x.push(D.outputColorSpace),x.push(D.envMapMode),x.push(D.envMapCubeUVHeight),x.push(D.mapUv),x.push(D.alphaMapUv),x.push(D.lightMapUv),x.push(D.aoMapUv),x.push(D.bumpMapUv),x.push(D.normalMapUv),x.push(D.displacementMapUv),x.push(D.emissiveMapUv),x.push(D.metalnessMapUv),x.push(D.roughnessMapUv),x.push(D.anisotropyMapUv),x.push(D.clearcoatMapUv),x.push(D.clearcoatNormalMapUv),x.push(D.clearcoatRoughnessMapUv),x.push(D.iridescenceMapUv),x.push(D.iridescenceThicknessMapUv),x.push(D.sheenColorMapUv),x.push(D.sheenRoughnessMapUv),x.push(D.specularMapUv),x.push(D.specularColorMapUv),x.push(D.specularIntensityMapUv),x.push(D.transmissionMapUv),x.push(D.thicknessMapUv),x.push(D.combine),x.push(D.fogExp2),x.push(D.sizeAttenuation),x.push(D.morphTargetsCount),x.push(D.morphAttributeCount),x.push(D.numDirLights),x.push(D.numPointLights),x.push(D.numSpotLights),x.push(D.numSpotLightMaps),x.push(D.numHemiLights),x.push(D.numRectAreaLights),x.push(D.numDirLightShadows),x.push(D.numPointLightShadows),x.push(D.numSpotLightShadows),x.push(D.numSpotLightShadowsWithMaps),x.push(D.shadowMapType),x.push(D.toneMapping),x.push(D.numClippingPlanes),x.push(D.numClipIntersection),x.push(D.depthPacking)}function v(x,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.matcap&&o.enable(4),D.envMap&&o.enable(5),D.normalMapObjectSpace&&o.enable(6),D.normalMapTangentSpace&&o.enable(7),D.clearcoat&&o.enable(8),D.iridescence&&o.enable(9),D.alphaTest&&o.enable(10),D.vertexColors&&o.enable(11),D.vertexAlphas&&o.enable(12),D.vertexUv1s&&o.enable(13),D.vertexUv2s&&o.enable(14),D.vertexUv3s&&o.enable(15),D.vertexTangents&&o.enable(16),D.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.useLegacyLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),x.push(o.mask)}function E(x){const D=g[x.type];let B;if(D){const G=_n[D];B=zp.clone(G.uniforms)}else B=x.uniforms;return B}function M(x,D){let B;for(let G=0,L=c.length;G<L;G++){const U=c[G];if(U.cacheKey===D){B=U,++B.usedTimes;break}}return B===void 0&&(B=new K0(r,D,x,s),c.push(B)),B}function b(x){if(--x.usedTimes===0){const D=c.indexOf(x);c[D]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:M,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:R}}function ev(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function nv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Pc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,m,g,_,p){let f=r[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),t++,f}function o(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||nv),n.length>1&&n.sort(d||Pc),i.length>1&&i.sort(d||Pc)}function u(){for(let h=t,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function iv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Lc,r.set(n,[a])):i>=s.length?(a=new Lc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function rv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Vt};break;case"SpotLight":e={position:new z,direction:new z,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function sv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let av=0;function ov(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function lv(r,t){const e=new rv,n=sv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new z);const s=new z,a=new _e,o=new _e;function l(u,h){let d=0,m=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let _=0,p=0,f=0,y=0,v=0,E=0,M=0,b=0,A=0,R=0;u.sort(ov);const x=h===!0?Math.PI:1;for(let B=0,G=u.length;B<G;B++){const L=u[B],U=L.color,O=L.intensity,j=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*O*x,m+=U.g*O*x,g+=U.b*O*x;else if(L.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],O);else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const Z=L.shadow,K=n.get(L);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.directionalShadow[_]=K,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=L.shadow.matrix,E++}i.directional[_]=V,_++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(U).multiplyScalar(O*x),V.distance=j,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[f]=V;const Z=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,Z.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[f]=Z.matrix,L.castShadow){const K=n.get(L);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=k,b++}f++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(U).multiplyScalar(O),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=V,y++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*x),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Z=L.shadow,K=n.get(L);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=L.shadow.matrix,M++}i.point[p]=V,p++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(O*x),V.groundColor.copy(L.groundColor).multiplyScalar(O*x),i.hemi[v]=V,v++}}y>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==_||D.pointLength!==p||D.spotLength!==f||D.rectAreaLength!==y||D.hemiLength!==v||D.numDirectionalShadows!==E||D.numPointShadows!==M||D.numSpotShadows!==b||D.numSpotMaps!==A)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,D.directionalLength=_,D.pointLength=p,D.spotLength=f,D.rectAreaLength=y,D.hemiLength=v,D.numDirectionalShadows=E,D.numPointShadows=M,D.numSpotShadows=b,D.numSpotMaps=A,i.version=av++)}function c(u,h){let d=0,m=0,g=0,_=0,p=0;const f=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const E=u[y];if(E.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(E.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function Fc(r,t){const e=new lv(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cv(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Fc(r,t),e.set(s,[l])):a>=o.length?(l=new Fc(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class uv extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hv extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pv(r,t,e){let n=new vh;const i=new Yt,s=new Yt,a=new xe,o=new uv({depthPacking:ap}),l=new hv,c={},u=e.maxTextureSize,h={[ei]:Ie,[Ie]:ei,[Pn]:Pn},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:dv,fragmentShader:fv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new On;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $n(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let f=this.type;this.render=function(M,b,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const R=r.getRenderTarget(),x=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Zn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=f!==wn&&this.type===wn,L=f===wn&&this.type!==wn;for(let U=0,O=M.length;U<O;U++){const j=M[U],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const V=k.getFrameExtents();if(i.multiply(V),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/V.x),i.x=s.x*V.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/V.y),i.y=s.y*V.y,k.mapSize.y=s.y)),k.map===null||G===!0||L===!0){const K=this.type!==wn?{minFilter:we,magFilter:we}:{};k.map!==null&&k.map.dispose(),k.map=new Ci(i.x,i.y,K),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const Z=k.getViewportCount();for(let K=0;K<Z;K++){const I=k.getViewport(K);a.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),B.viewport(a),k.updateMatrices(j,K),n=k.getFrustum(),E(b,A,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===wn&&y(k,A),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(R,x,D)};function y(M,b){const A=t.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ci(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(b,null,A,d,_,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(b,null,A,m,_,null)}function v(M,b,A,R){let x=null;const D=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)x=D;else if(x=A.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=x.uuid,G=b.uuid;let L=c[B];L===void 0&&(L={},c[B]=L);let U=L[G];U===void 0&&(U=x.clone(),L[G]=U),x=U}if(x.visible=b.visible,x.wireframe=b.wireframe,R===wn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=r.properties.get(x);B.light=A}return x}function E(M,b,A,R,x){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===wn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const G=t.update(M),L=M.material;if(Array.isArray(L)){const U=G.groups;for(let O=0,j=U.length;O<j;O++){const k=U[O],V=L[k.materialIndex];if(V&&V.visible){const Z=v(M,V,R,x);r.renderBufferDirect(A,null,G,Z,M,k)}}}else if(L.visible){const U=v(M,L,R,x);r.renderBufferDirect(A,null,G,U,M,null)}}const B=M.children;for(let G=0,L=B.length;G<L;G++)E(B[G],b,A,R,x)}}function mv(r,t,e){const n=e.isWebGL2;function i(){let P=!1;const lt=new xe;let H=null;const it=new xe(0,0,0,0);return{setMask:function(ht){H!==ht&&!P&&(r.colorMask(ht,ht,ht,ht),H=ht)},setLocked:function(ht){P=ht},setClear:function(ht,Gt,Zt,de,fn){fn===!0&&(ht*=de,Gt*=de,Zt*=de),lt.set(ht,Gt,Zt,de),it.equals(lt)===!1&&(r.clearColor(ht,Gt,Zt,de),it.copy(lt))},reset:function(){P=!1,H=null,it.set(-1,0,0,0)}}}function s(){let P=!1,lt=null,H=null,it=null;return{setTest:function(ht){ht?Ct(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ht){lt!==ht&&!P&&(r.depthMask(ht),lt=ht)},setFunc:function(ht){if(H!==ht){switch(ht){case If:r.depthFunc(r.NEVER);break;case Nf:r.depthFunc(r.ALWAYS);break;case Of:r.depthFunc(r.LESS);break;case oo:r.depthFunc(r.LEQUAL);break;case Bf:r.depthFunc(r.EQUAL);break;case zf:r.depthFunc(r.GEQUAL);break;case kf:r.depthFunc(r.GREATER);break;case Hf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}H=ht}},setLocked:function(ht){P=ht},setClear:function(ht){it!==ht&&(r.clearDepth(ht),it=ht)},reset:function(){P=!1,lt=null,H=null,it=null}}}function a(){let P=!1,lt=null,H=null,it=null,ht=null,Gt=null,Zt=null,de=null,fn=null;return{setTest:function(te){P||(te?Ct(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(te){lt!==te&&!P&&(r.stencilMask(te),lt=te)},setFunc:function(te,pn,Te){(H!==te||it!==pn||ht!==Te)&&(r.stencilFunc(te,pn,Te),H=te,it=pn,ht=Te)},setOp:function(te,pn,Te){(Gt!==te||Zt!==pn||de!==Te)&&(r.stencilOp(te,pn,Te),Gt=te,Zt=pn,de=Te)},setLocked:function(te){P=te},setClear:function(te){fn!==te&&(r.clearStencil(te),fn=te)},reset:function(){P=!1,lt=null,H=null,it=null,ht=null,Gt=null,Zt=null,de=null,fn=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,E=null,M=null,b=null,A=null,R=null,x=!1,D=null,B=null,G=null,L=null,U=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,k=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=k>=2);let Z=null,K={};const I=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),st=new xe().fromArray(I),tt=new xe().fromArray(q);function ot(P,lt,H,it){const ht=new Uint8Array(4),Gt=r.createTexture();r.bindTexture(P,Gt),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Zt=0;Zt<H;Zt++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(lt,0,r.RGBA,1,1,it,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(lt+Zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return Gt}const Et={};Et[r.TEXTURE_2D]=ot(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[r.TEXTURE_2D_ARRAY]=ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ct(r.DEPTH_TEST),l.setFunc(oo),rt(!1),ft(xl),Ct(r.CULL_FACE),Q(Zn);function Ct(P){d[P]!==!0&&(r.enable(P),d[P]=!0)}function bt(P){d[P]!==!1&&(r.disable(P),d[P]=!1)}function Ht(P,lt){return m[P]!==lt?(r.bindFramebuffer(P,lt),m[P]=lt,n&&(P===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=lt),P===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=lt)),!0):!1}function ve(P,lt){let H=_,it=!1;if(P)if(H=g.get(lt),H===void 0&&(H=[],g.set(lt,H)),P.isWebGLMultipleRenderTargets){const ht=P.texture;if(H.length!==ht.length||H[0]!==r.COLOR_ATTACHMENT0){for(let Gt=0,Zt=ht.length;Gt<Zt;Gt++)H[Gt]=r.COLOR_ATTACHMENT0+Gt;H.length=ht.length,it=!0}}else H[0]!==r.COLOR_ATTACHMENT0&&(H[0]=r.COLOR_ATTACHMENT0,it=!0);else H[0]!==r.BACK&&(H[0]=r.BACK,it=!0);it&&(e.isWebGL2?r.drawBuffers(H):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function J(P){return p!==P?(r.useProgram(P),p=P,!0):!1}const C={[ji]:r.FUNC_ADD,[Df]:r.FUNC_SUBTRACT,[Tf]:r.FUNC_REVERSE_SUBTRACT};if(n)C[El]=r.MIN,C[Sl]=r.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(C[El]=P.MIN_EXT,C[Sl]=P.MAX_EXT)}const xt={[bf]:r.ZERO,[Af]:r.ONE,[wf]:r.SRC_COLOR,[Yu]:r.SRC_ALPHA,[Uf]:r.SRC_ALPHA_SATURATE,[Lf]:r.DST_COLOR,[Rf]:r.DST_ALPHA,[Cf]:r.ONE_MINUS_SRC_COLOR,[$u]:r.ONE_MINUS_SRC_ALPHA,[Ff]:r.ONE_MINUS_DST_COLOR,[Pf]:r.ONE_MINUS_DST_ALPHA};function Q(P,lt,H,it,ht,Gt,Zt,de){if(P===Zn){f===!0&&(bt(r.BLEND),f=!1);return}if(f===!1&&(Ct(r.BLEND),f=!0),P!==Sf){if(P!==y||de!==x){if((v!==ji||b!==ji)&&(r.blendEquation(r.FUNC_ADD),v=ji,b=ji),de)switch(P){case nr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ao:r.blendFunc(r.ONE,r.ONE);break;case Ml:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ao:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ml:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,M=null,A=null,R=null,y=P,x=de}return}ht=ht||lt,Gt=Gt||H,Zt=Zt||it,(lt!==v||ht!==b)&&(r.blendEquationSeparate(C[lt],C[ht]),v=lt,b=ht),(H!==E||it!==M||Gt!==A||Zt!==R)&&(r.blendFuncSeparate(xt[H],xt[it],xt[Gt],xt[Zt]),E=H,M=it,A=Gt,R=Zt),y=P,x=!1}function dt(P,lt){P.side===Pn?bt(r.CULL_FACE):Ct(r.CULL_FACE);let H=P.side===Ie;lt&&(H=!H),rt(H),P.blending===nr&&P.transparent===!1?Q(Zn):Q(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const it=P.stencilWrite;c.setTest(it),it&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Mt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ct(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(P){D!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),D=P)}function ft(P){P!==Mf?(Ct(r.CULL_FACE),P!==B&&(P===xl?r.cullFace(r.BACK):P===yf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),B=P}function vt(P){P!==G&&(j&&r.lineWidth(P),G=P)}function Mt(P,lt,H){P?(Ct(r.POLYGON_OFFSET_FILL),(L!==lt||U!==H)&&(r.polygonOffset(lt,H),L=lt,U=H)):bt(r.POLYGON_OFFSET_FILL)}function Nt(P){P?Ct(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function Wt(P){P===void 0&&(P=r.TEXTURE0+O-1),Z!==P&&(r.activeTexture(P),Z=P)}function ie(P,lt,H){H===void 0&&(Z===null?H=r.TEXTURE0+O-1:H=Z);let it=K[H];it===void 0&&(it={type:void 0,texture:void 0},K[H]=it),(it.type!==P||it.texture!==lt)&&(Z!==H&&(r.activeTexture(H),Z=H),r.bindTexture(P,lt||Et[P]),it.type=P,it.texture=lt)}function w(){const P=K[Z];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function S(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(P){st.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),st.copy(P))}function mt(P){tt.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),tt.copy(P))}function _t(P,lt){let H=h.get(lt);H===void 0&&(H=new WeakMap,h.set(lt,H));let it=H.get(P);it===void 0&&(it=r.getUniformBlockIndex(lt,P.name),H.set(P,it))}function Ot(P,lt){const it=h.get(lt).get(P);u.get(lt)!==it&&(r.uniformBlockBinding(lt,it,P.__bindingPointIndex),u.set(lt,it))}function $t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Z=null,K={},m={},g=new WeakMap,_=[],p=null,f=!1,y=null,v=null,E=null,M=null,b=null,A=null,R=null,x=!1,D=null,B=null,G=null,L=null,U=null,st.set(0,0,r.canvas.width,r.canvas.height),tt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ct,disable:bt,bindFramebuffer:Ht,drawBuffers:ve,useProgram:J,setBlending:Q,setMaterial:dt,setFlipSided:rt,setCullFace:ft,setLineWidth:vt,setPolygonOffset:Mt,setScissorTest:Nt,activeTexture:Wt,bindTexture:ie,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:St,texImage3D:Dt,updateUBOMapping:_t,uniformBlockBinding:Ot,texStorage2D:ut,texStorage3D:$,texSubImage2D:et,texSubImage3D:nt,compressedTexSubImage2D:ct,compressedTexSubImage3D:yt,scissor:At,viewport:mt,reset:$t}}function _v(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,S){return f?new OffscreenCanvas(w,S):Hs("canvas")}function v(w,S,X,et){let nt=1;if((w.width>et||w.height>et)&&(nt=et/Math.max(w.width,w.height)),nt<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ct=S?mo:Math.floor,yt=ct(nt*w.width),ut=ct(nt*w.height);_===void 0&&(_=y(yt,ut));const $=X?y(yt,ut):_;return $.width=yt,$.height=ut,$.getContext("2d").drawImage(w,0,0,yt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+yt+"x"+ut+")."),$}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function E(w){return Kl(w.width)&&Kl(w.height)}function M(w){return o?!1:w.wrapS!==hn||w.wrapT!==hn||w.minFilter!==we&&w.minFilter!==Je}function b(w,S){return w.generateMipmaps&&S&&w.minFilter!==we&&w.minFilter!==Je}function A(w){r.generateMipmap(w)}function R(w,S,X,et,nt=!1){if(o===!1)return S;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ct=S;return S===r.RED&&(X===r.FLOAT&&(ct=r.R32F),X===r.HALF_FLOAT&&(ct=r.R16F),X===r.UNSIGNED_BYTE&&(ct=r.R8)),S===r.RG&&(X===r.FLOAT&&(ct=r.RG32F),X===r.HALF_FLOAT&&(ct=r.RG16F),X===r.UNSIGNED_BYTE&&(ct=r.RG8)),S===r.RGBA&&(X===r.FLOAT&&(ct=r.RGBA32F),X===r.HALF_FLOAT&&(ct=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ct=et===Ut&&nt===!1?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)),(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function x(w,S,X){return b(w,X)===!0||w.isFramebufferTexture&&w.minFilter!==we&&w.minFilter!==Je?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function D(w){return w===we||w===Dl||w===da?r.NEAREST:r.LINEAR}function B(w){const S=w.target;S.removeEventListener("dispose",B),L(S),S.isVideoTexture&&g.delete(S)}function G(w){const S=w.target;S.removeEventListener("dispose",G),O(S)}function L(w){const S=n.get(w);if(S.__webglInit===void 0)return;const X=w.source,et=p.get(X);if(et){const nt=et[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&U(w),Object.keys(et).length===0&&p.delete(X)}n.remove(w)}function U(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const X=w.source,et=p.get(X);delete et[S.__cacheKey],a.memory.textures--}function O(w){const S=w.texture,X=n.get(w),et=n.get(S);if(et.__webglTexture!==void 0&&(r.deleteTexture(et.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)r.deleteFramebuffer(X.__webglFramebuffer[nt]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[nt]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let nt=0;nt<X.__webglColorRenderbuffer.length;nt++)X.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[nt]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let nt=0,ct=S.length;nt<ct;nt++){const yt=n.get(S[nt]);yt.__webglTexture&&(r.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(S[nt])}n.remove(S),n.remove(w)}let j=0;function k(){j=0}function V(){const w=j;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),j+=1,w}function Z(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function K(w,S){const X=n.get(w);if(w.isVideoTexture&&Wt(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){const et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(X,w,S);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+S)}function I(w,S){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Ht(X,w,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+S)}function q(w,S){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Ht(X,w,S);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+S)}function st(w,S){const X=n.get(w);if(w.version>0&&X.__version!==w.version){ve(X,w,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+S)}const tt={[uo]:r.REPEAT,[hn]:r.CLAMP_TO_EDGE,[ho]:r.MIRRORED_REPEAT},ot={[we]:r.NEAREST,[Dl]:r.NEAREST_MIPMAP_NEAREST,[da]:r.NEAREST_MIPMAP_LINEAR,[Je]:r.LINEAR,[jf]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},Et={[up]:r.NEVER,[gp]:r.ALWAYS,[hp]:r.LESS,[fp]:r.LEQUAL,[dp]:r.EQUAL,[_p]:r.GEQUAL,[pp]:r.GREATER,[mp]:r.NOTEQUAL};function Ct(w,S,X){if(X?(r.texParameteri(w,r.TEXTURE_WRAP_S,tt[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,tt[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,tt[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ot[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ot[S.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==hn||S.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,D(S.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,D(S.minFilter)),S.minFilter!==we&&S.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===we||S.minFilter!==da&&S.minFilter!==Wr||S.type===Yn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Xr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(w,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function bt(w,S){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",B));const et=S.source;let nt=p.get(et);nt===void 0&&(nt={},p.set(et,nt));const ct=Z(S);if(ct!==w.__cacheKey){nt[ct]===void 0&&(nt[ct]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),nt[ct].usedTimes++;const yt=nt[w.__cacheKey];yt!==void 0&&(nt[w.__cacheKey].usedTimes--,yt.usedTimes===0&&U(S)),w.__cacheKey=ct,w.__webglTexture=nt[ct].texture}return X}function Ht(w,S,X){let et=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=r.TEXTURE_3D);const nt=bt(w,S),ct=S.source;e.bindTexture(et,w.__webglTexture,r.TEXTURE0+X);const yt=n.get(ct);if(ct.version!==yt.__version||nt===!0){e.activeTexture(r.TEXTURE0+X),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ut=M(S)&&E(S.image)===!1;let $=v(S.image,ut,!1,u);$=ie(S,$);const St=E($)||o,Dt=s.convert(S.format,S.colorSpace);let At=s.convert(S.type),mt=R(S.internalFormat,Dt,At,S.colorSpace);Ct(et,S,St);let _t;const Ot=S.mipmaps,$t=o&&S.isVideoTexture!==!0,P=yt.__version===void 0||nt===!0,lt=x(S,$,St);if(S.isDepthTexture)mt=r.DEPTH_COMPONENT,o?S.type===Yn?mt=r.DEPTH_COMPONENT32F:S.type===qn?mt=r.DEPTH_COMPONENT24:S.type===Ei?mt=r.DEPTH24_STENCIL8:mt=r.DEPTH_COMPONENT16:S.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Si&&mt===r.DEPTH_COMPONENT&&S.type!==Bo&&S.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=qn,At=s.convert(S.type)),S.format===fr&&mt===r.DEPTH_COMPONENT&&(mt=r.DEPTH_STENCIL,S.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ei,At=s.convert(S.type))),P&&($t?e.texStorage2D(r.TEXTURE_2D,1,mt,$.width,$.height):e.texImage2D(r.TEXTURE_2D,0,mt,$.width,$.height,0,Dt,At,null));else if(S.isDataTexture)if(Ot.length>0&&St){$t&&P&&e.texStorage2D(r.TEXTURE_2D,lt,mt,Ot[0].width,Ot[0].height);for(let H=0,it=Ot.length;H<it;H++)_t=Ot[H],$t?e.texSubImage2D(r.TEXTURE_2D,H,0,0,_t.width,_t.height,Dt,At,_t.data):e.texImage2D(r.TEXTURE_2D,H,mt,_t.width,_t.height,0,Dt,At,_t.data);S.generateMipmaps=!1}else $t?(P&&e.texStorage2D(r.TEXTURE_2D,lt,mt,$.width,$.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,$.width,$.height,Dt,At,$.data)):e.texImage2D(r.TEXTURE_2D,0,mt,$.width,$.height,0,Dt,At,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$t&&P&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,mt,Ot[0].width,Ot[0].height,$.depth);for(let H=0,it=Ot.length;H<it;H++)_t=Ot[H],S.format!==dn?Dt!==null?$t?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,_t.width,_t.height,$.depth,Dt,_t.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,mt,_t.width,_t.height,$.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,_t.width,_t.height,$.depth,Dt,At,_t.data):e.texImage3D(r.TEXTURE_2D_ARRAY,H,mt,_t.width,_t.height,$.depth,0,Dt,At,_t.data)}else{$t&&P&&e.texStorage2D(r.TEXTURE_2D,lt,mt,Ot[0].width,Ot[0].height);for(let H=0,it=Ot.length;H<it;H++)_t=Ot[H],S.format!==dn?Dt!==null?$t?e.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,_t.width,_t.height,Dt,_t.data):e.compressedTexImage2D(r.TEXTURE_2D,H,mt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(r.TEXTURE_2D,H,0,0,_t.width,_t.height,Dt,At,_t.data):e.texImage2D(r.TEXTURE_2D,H,mt,_t.width,_t.height,0,Dt,At,_t.data)}else if(S.isDataArrayTexture)$t?(P&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,mt,$.width,$.height,$.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Dt,At,$.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,mt,$.width,$.height,$.depth,0,Dt,At,$.data);else if(S.isData3DTexture)$t?(P&&e.texStorage3D(r.TEXTURE_3D,lt,mt,$.width,$.height,$.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Dt,At,$.data)):e.texImage3D(r.TEXTURE_3D,0,mt,$.width,$.height,$.depth,0,Dt,At,$.data);else if(S.isFramebufferTexture){if(P)if($t)e.texStorage2D(r.TEXTURE_2D,lt,mt,$.width,$.height);else{let H=$.width,it=$.height;for(let ht=0;ht<lt;ht++)e.texImage2D(r.TEXTURE_2D,ht,mt,H,it,0,Dt,At,null),H>>=1,it>>=1}}else if(Ot.length>0&&St){$t&&P&&e.texStorage2D(r.TEXTURE_2D,lt,mt,Ot[0].width,Ot[0].height);for(let H=0,it=Ot.length;H<it;H++)_t=Ot[H],$t?e.texSubImage2D(r.TEXTURE_2D,H,0,0,Dt,At,_t):e.texImage2D(r.TEXTURE_2D,H,mt,Dt,At,_t);S.generateMipmaps=!1}else $t?(P&&e.texStorage2D(r.TEXTURE_2D,lt,mt,$.width,$.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt,At,$)):e.texImage2D(r.TEXTURE_2D,0,mt,Dt,At,$);b(S,St)&&A(et),yt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ve(w,S,X){if(S.image.length!==6)return;const et=bt(w,S),nt=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+X);const ct=n.get(nt);if(nt.version!==ct.__version||et===!0){e.activeTexture(r.TEXTURE0+X),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const yt=S.isCompressedTexture||S.image[0].isCompressedTexture,ut=S.image[0]&&S.image[0].isDataTexture,$=[];for(let H=0;H<6;H++)!yt&&!ut?$[H]=v(S.image[H],!1,!0,c):$[H]=ut?S.image[H].image:S.image[H],$[H]=ie(S,$[H]);const St=$[0],Dt=E(St)||o,At=s.convert(S.format,S.colorSpace),mt=s.convert(S.type),_t=R(S.internalFormat,At,mt,S.colorSpace),Ot=o&&S.isVideoTexture!==!0,$t=ct.__version===void 0||et===!0;let P=x(S,St,Dt);Ct(r.TEXTURE_CUBE_MAP,S,Dt);let lt;if(yt){Ot&&$t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,P,_t,St.width,St.height);for(let H=0;H<6;H++){lt=$[H].mipmaps;for(let it=0;it<lt.length;it++){const ht=lt[it];S.format!==dn?At!==null?Ot?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,it,0,0,ht.width,ht.height,At,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,it,_t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,it,0,0,ht.width,ht.height,At,mt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,it,_t,ht.width,ht.height,0,At,mt,ht.data)}}}else{lt=S.mipmaps,Ot&&$t&&(lt.length>0&&P++,e.texStorage2D(r.TEXTURE_CUBE_MAP,P,_t,$[0].width,$[0].height));for(let H=0;H<6;H++)if(ut){Ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,$[H].width,$[H].height,At,mt,$[H].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,_t,$[H].width,$[H].height,0,At,mt,$[H].data);for(let it=0;it<lt.length;it++){const Gt=lt[it].image[H].image;Ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,it+1,0,0,Gt.width,Gt.height,At,mt,Gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,it+1,_t,Gt.width,Gt.height,0,At,mt,Gt.data)}}else{Ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,At,mt,$[H]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,_t,At,mt,$[H]);for(let it=0;it<lt.length;it++){const ht=lt[it];Ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,it+1,0,0,At,mt,ht.image[H]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+H,it+1,_t,At,mt,ht.image[H])}}}b(S,Dt)&&A(r.TEXTURE_CUBE_MAP),ct.__version=nt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function J(w,S,X,et,nt){const ct=s.convert(X.format,X.colorSpace),yt=s.convert(X.type),ut=R(X.internalFormat,ct,yt,X.colorSpace);n.get(S).__hasExternalTextures||(nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,ut,S.width,S.height,S.depth,0,ct,yt,null):e.texImage2D(nt,0,ut,S.width,S.height,0,ct,yt,null)),e.bindFramebuffer(r.FRAMEBUFFER,w),Nt(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,nt,n.get(X).__webglTexture,0,Mt(S)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,nt,n.get(X).__webglTexture,0),e.bindFramebuffer(r.FRAMEBUFFER,null)}function C(w,S,X){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let et=r.DEPTH_COMPONENT16;if(X||Nt(S)){const nt=S.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Yn?et=r.DEPTH_COMPONENT32F:nt.type===qn&&(et=r.DEPTH_COMPONENT24));const ct=Mt(S);Nt(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,et,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,et,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,et,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const et=Mt(S);X&&Nt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,S.width,S.height):Nt(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const et=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let nt=0;nt<et.length;nt++){const ct=et[nt],yt=s.convert(ct.format,ct.colorSpace),ut=s.convert(ct.type),$=R(ct.internalFormat,yt,ut,ct.colorSpace),St=Mt(S);X&&Nt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,$,S.width,S.height):Nt(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,$,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,$,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const et=n.get(S.depthTexture).__webglTexture,nt=Mt(S);if(S.depthTexture.format===Si)Nt(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(S.depthTexture.format===fr)Nt(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Q(w){const S=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xt(S.__webglFramebuffer,w)}else if(X){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]=r.createRenderbuffer(),C(S.__webglDepthbuffer[et],w,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),C(S.__webglDepthbuffer,w,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(w,S,X){const et=n.get(w);S!==void 0&&J(et.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),X!==void 0&&Q(w)}function rt(w){const S=w.texture,X=n.get(w),et=n.get(S);w.addEventListener("dispose",G),w.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=S.version,a.memory.textures++);const nt=w.isWebGLCubeRenderTarget===!0,ct=w.isWebGLMultipleRenderTargets===!0,yt=E(w)||o;if(nt){X.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)X.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),ct)if(i.drawBuffers){const ut=w.texture;for(let $=0,St=ut.length;$<St;$++){const Dt=n.get(ut[$]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Nt(w)===!1){const ut=ct?S:[S];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<ut.length;$++){const St=ut[$];X.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[$]);const Dt=s.convert(St.format,St.colorSpace),At=s.convert(St.type),mt=R(St.internalFormat,Dt,At,St.colorSpace,w.isXRRenderTarget===!0),_t=Mt(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,mt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,X.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),C(X.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,S,yt);for(let ut=0;ut<6;ut++)J(X.__webglFramebuffer[ut],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut);b(S,yt)&&A(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){const ut=w.texture;for(let $=0,St=ut.length;$<St;$++){const Dt=ut[$],At=n.get(Dt);e.bindTexture(r.TEXTURE_2D,At.__webglTexture),Ct(r.TEXTURE_2D,Dt,yt),J(X.__webglFramebuffer,w,Dt,r.COLOR_ATTACHMENT0+$,r.TEXTURE_2D),b(Dt,yt)&&A(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ut=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,et.__webglTexture),Ct(ut,S,yt),J(X.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,ut),b(S,yt)&&A(ut),e.unbindTexture()}w.depthBuffer&&Q(w)}function ft(w){const S=E(w)||o,X=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0,nt=X.length;et<nt;et++){const ct=X[et];if(b(ct,S)){const yt=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ut=n.get(ct).__webglTexture;e.bindTexture(yt,ut),A(yt),e.unbindTexture()}}}function vt(w){if(o&&w.samples>0&&Nt(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],X=w.width,et=w.height;let nt=r.COLOR_BUFFER_BIT;const ct=[],yt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=n.get(w),$=w.isWebGLMultipleRenderTargets===!0;if($)for(let St=0;St<S.length;St++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let St=0;St<S.length;St++){ct.push(r.COLOR_ATTACHMENT0+St),w.depthBuffer&&ct.push(yt);const Dt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Dt===!1&&(w.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),$&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[St]),Dt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[yt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[yt])),$){const At=n.get(S[St]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,X,et,0,0,X,et,nt,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let St=0;St<S.length;St++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,ut.__webglColorRenderbuffer[St]);const Dt=n.get(S[St]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,Dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Mt(w){return Math.min(h,w.samples)}function Nt(w){const S=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Wt(w){const S=a.render.frame;g.get(w)!==S&&(g.set(w,S),w.update())}function ie(w,S){const X=w.colorSpace,et=w.format,nt=w.type;return w.isCompressedTexture===!0||w.format===fo||X!==Mn&&X!==Ti&&(X===Ut?o===!1?t.has("EXT_sRGB")===!0&&et===dn?(w.format=fo,w.minFilter=Je,w.generateMipmaps=!1):S=ah.sRGBToLinear(S):(et!==dn||nt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=I,this.setTexture3D=q,this.setTextureCube=st,this.rebindTextures=dt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Nt}function gv(r,t,e){const n=e.isWebGL2;function i(s,a=Ti){let o;if(s===Jn)return r.UNSIGNED_BYTE;if(s===Ju)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Qu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Kf)return r.BYTE;if(s===Zf)return r.SHORT;if(s===Bo)return r.UNSIGNED_SHORT;if(s===Zu)return r.INT;if(s===qn)return r.UNSIGNED_INT;if(s===Yn)return r.FLOAT;if(s===Xr)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Jf)return r.ALPHA;if(s===dn)return r.RGBA;if(s===Qf)return r.LUMINANCE;if(s===tp)return r.LUMINANCE_ALPHA;if(s===Si)return r.DEPTH_COMPONENT;if(s===fr)return r.DEPTH_STENCIL;if(s===fo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ep)return r.RED;if(s===th)return r.RED_INTEGER;if(s===np)return r.RG;if(s===eh)return r.RG_INTEGER;if(s===nh)return r.RGBA_INTEGER;if(s===fa||s===pa||s===ma||s===_a)if(a===Ut)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===fa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Tl||s===bl||s===Al||s===wl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ip)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cl||s===Rl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Cl)return a===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Rl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pl||s===Ll||s===Fl||s===Ul||s===Il||s===Nl||s===Ol||s===Bl||s===zl||s===kl||s===Hl||s===Gl||s===Vl||s===Wl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Pl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ll)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ul)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Il)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ol)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wl)return a===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ga)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ga)return a===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===rp||s===Xl||s===ql||s===Yl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===ga)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Xl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ql)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ei?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class vv extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ts extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xv={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ts;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Mv extends Ne{constructor(t,e,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=qn),n===void 0&&u===fr&&(n=Ei),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class yv extends mr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const _=e.getContextAttributes();let p=null,f=null;const y=[],v=[],E=new Qe;E.layers.enable(1),E.viewport=new xe;const M=new Qe;M.layers.enable(2),M.viewport=new xe;const b=[E,M],A=new vv;A.layers.enable(1),A.layers.enable(2);let R=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let q=y[I];return q===void 0&&(q=new Ha,y[I]=q),q.getTargetRaySpace()},this.getControllerGrip=function(I){let q=y[I];return q===void 0&&(q=new Ha,y[I]=q),q.getGripSpace()},this.getHand=function(I){let q=y[I];return q===void 0&&(q=new Ha,y[I]=q),q.getHandSpace()};function D(I){const q=v.indexOf(I.inputSource);if(q===-1)return;const st=y[q];st!==void 0&&(st.update(I.inputSource,I.frame,c||a),st.dispatchEvent({type:I.type,data:I.inputSource}))}function B(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let I=0;I<y.length;I++){const q=v[I];q!==null&&(v[I]=null,y[I].disconnect(q))}R=null,x=null,t.setRenderTarget(p),m=null,d=null,h=null,i=null,f=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:m}),f=new Ci(m.framebufferWidth,m.framebufferHeight,{format:dn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,st=null,tt=null;_.depth&&(tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=_.stencil?fr:Si,st=_.stencil?Ei:qn);const ot={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(ot),i.updateRenderState({layers:[d]}),f=new Ci(d.textureWidth,d.textureHeight,{format:dn,type:Jn,depthTexture:new Mv(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Et=t.properties.get(f);Et.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(I){for(let q=0;q<I.removed.length;q++){const st=I.removed[q],tt=v.indexOf(st);tt>=0&&(v[tt]=null,y[tt].disconnect(st))}for(let q=0;q<I.added.length;q++){const st=I.added[q];let tt=v.indexOf(st);if(tt===-1){for(let Et=0;Et<y.length;Et++)if(Et>=v.length){v.push(st),tt=Et;break}else if(v[Et]===null){v[Et]=st,tt=Et;break}if(tt===-1)break}const ot=y[tt];ot&&ot.connect(st)}}const L=new z,U=new z;function O(I,q,st){L.setFromMatrixPosition(q.matrixWorld),U.setFromMatrixPosition(st.matrixWorld);const tt=L.distanceTo(U),ot=q.projectionMatrix.elements,Et=st.projectionMatrix.elements,Ct=ot[14]/(ot[10]-1),bt=ot[14]/(ot[10]+1),Ht=(ot[9]+1)/ot[5],ve=(ot[9]-1)/ot[5],J=(ot[8]-1)/ot[0],C=(Et[8]+1)/Et[0],xt=Ct*J,Q=Ct*C,dt=tt/(-J+C),rt=dt*-J;q.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(rt),I.translateZ(dt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const ft=Ct+dt,vt=bt+dt,Mt=xt-rt,Nt=Q+(tt-rt),Wt=Ht*bt/vt*ft,ie=ve*bt/vt*ft;I.projectionMatrix.makePerspective(Mt,Nt,Wt,ie,ft,vt),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function j(I,q){q===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(q.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;A.near=M.near=E.near=I.near,A.far=M.far=E.far=I.far,(R!==A.near||x!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,x=A.far);const q=I.parent,st=A.cameras;j(A,q);for(let tt=0;tt<st.length;tt++)j(st[tt],q);st.length===2?O(A,E,M):A.projectionMatrix.copy(E.projectionMatrix),k(I,A,q)};function k(I,q,st){st===null?I.matrix.copy(q.matrixWorld):(I.matrix.copy(st.matrixWorld),I.matrix.invert(),I.matrix.multiply(q.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const tt=I.children;for(let ot=0,Et=tt.length;ot<Et;ot++)tt[ot].updateMatrixWorld(!0);I.projectionMatrix.copy(q.projectionMatrix),I.projectionMatrixInverse.copy(q.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=po*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)};let V=null;function Z(I,q){if(u=q.getViewerPose(c||a),g=q,u!==null){const st=u.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let tt=!1;st.length!==A.cameras.length&&(A.cameras.length=0,tt=!0);for(let ot=0;ot<st.length;ot++){const Et=st[ot];let Ct=null;if(m!==null)Ct=m.getViewport(Et);else{const Ht=h.getViewSubImage(d,Et);Ct=Ht.viewport,ot===0&&(t.setRenderTargetTextures(f,Ht.colorTexture,d.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(f))}let bt=b[ot];bt===void 0&&(bt=new Qe,bt.layers.enable(ot),bt.viewport=new xe,b[ot]=bt),bt.matrix.fromArray(Et.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Et.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ot===0&&(A.matrix.copy(bt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),tt===!0&&A.cameras.push(bt)}}for(let st=0;st<y.length;st++){const tt=v[st],ot=y[st];tt!==null&&ot!==void 0&&ot.update(tt,q,c||a)}V&&V(I,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const K=new xh;K.setAnimationLoop(Z),this.setAnimationLoop=function(I){V=I},this.dispose=function(){}}}function Ev(r,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,mh(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,y,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ie&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ie&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=t.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ie&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sv(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=i[y.id];E===void 0&&(g(y),E=u(y),i[y.id]=E,y.addEventListener("dispose",p));const M=v.program;n.updateUBOMapping(y,M);const b=t.render.frame;s[y.id]!==b&&(d(y),s[y.id]=b)}function u(y){const v=h();y.__bindingPointIndex=v;const E=r.createBuffer(),M=y.__size,b=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,M,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],E=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,A=E.length;b<A;b++){const R=E[b];if(m(R,b,M)===!0){const x=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let G=0;G<D.length;G++){const L=D[G],U=_(L);typeof L=="number"?(R.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,x+B,R.__data)):L.isMatrix3?(R.__data[0]=L.elements[0],R.__data[1]=L.elements[1],R.__data[2]=L.elements[2],R.__data[3]=L.elements[0],R.__data[4]=L.elements[3],R.__data[5]=L.elements[4],R.__data[6]=L.elements[5],R.__data[7]=L.elements[0],R.__data[8]=L.elements[6],R.__data[9]=L.elements[7],R.__data[10]=L.elements[8],R.__data[11]=L.elements[0]):(L.toArray(R.__data,B),B+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,R.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(y,v,E){const M=y.value;if(E[v]===void 0){if(typeof M=="number")E[v]=M;else{const b=Array.isArray(M)?M:[M],A=[];for(let R=0;R<b.length;R++)A.push(b[R].clone());E[v]=A}return!0}else if(typeof M=="number"){if(E[v]!==M)return E[v]=M,!0}else{const b=Array.isArray(E[v])?E[v]:[E[v]],A=Array.isArray(M)?M:[M];for(let R=0;R<b.length;R++){const x=b[R];if(x.equals(A[R])===!1)return x.copy(A[R]),!0}}return!1}function g(y){const v=y.uniforms;let E=0;const M=16;let b=0;for(let A=0,R=v.length;A<R;A++){const x=v[A],D={boundary:0,storage:0},B=Array.isArray(x.value)?x.value:[x.value];for(let G=0,L=B.length;G<L;G++){const U=B[G],O=_(U);D.boundary+=O.boundary,D.storage+=O.storage}if(x.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=E,A>0){b=E%M;const G=M-b;b!==0&&G-D.boundary<0&&(E+=M-b,x.__offset=E)}E+=D.storage}return b=E%M,b>0&&(E+=M-b),y.__size=E,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function f(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}function Dv(){const r=Hs("canvas");return r.style.display="block",r}class Dh{constructor(t={}){const{canvas:e=Dv(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ut,this.useLegacyLights=!0,this.toneMapping=Un,this.toneMappingExposure=1;const v=this;let E=!1,M=0,b=0,A=null,R=-1,x=null;const D=new xe,B=new xe;let G=null;const L=new Vt(0);let U=0,O=e.width,j=e.height,k=1,V=null,Z=null;const K=new xe(0,0,O,j),I=new xe(0,0,O,j);let q=!1;const st=new vh;let tt=!1,ot=!1,Et=null;const Ct=new _e,bt=new Yt,Ht=new z,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return A===null?k:1}let C=n;function xt(T,N){for(let W=0;W<T.length;W++){const F=T[W],Y=e.getContext(F,N);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",H,!1),e.addEventListener("webglcontextcreationerror",it,!1),C===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),C=xt(N,T),C===null)throw xt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,dt,rt,ft,vt,Mt,Nt,Wt,ie,w,S,X,et,nt,ct,yt,ut,$,St,Dt,At,mt,_t,Ot;function $t(){Q=new Ug(C),dt=new Ag(C,Q,t),Q.init(dt),mt=new gv(C,Q,dt),rt=new mv(C,Q,dt),ft=new Og(C),vt=new ev,Mt=new _v(C,Q,rt,vt,dt,mt,ft),Nt=new Cg(v),Wt=new Fg(v),ie=new qp(C,dt),_t=new Tg(C,Q,ie,dt),w=new Ig(C,ie,ft,_t),S=new Hg(C,w,ie,ft),St=new kg(C,dt,Mt),yt=new wg(vt),X=new tv(v,Nt,Wt,Q,dt,_t,yt),et=new Ev(v,vt),nt=new iv,ct=new cv(Q,dt),$=new Dg(v,Nt,Wt,rt,S,d,l),ut=new pv(v,S,dt),Ot=new Sv(C,ft,dt,rt),Dt=new bg(C,Q,ft,dt),At=new Ng(C,Q,ft,dt),ft.programs=X.programs,v.capabilities=dt,v.extensions=Q,v.properties=vt,v.renderLists=nt,v.shadowMap=ut,v.state=rt,v.info=ft}$t();const P=new yv(v,C);this.xr=P,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(O,j,!1))},this.getSize=function(T){return T.set(O,j)},this.setSize=function(T,N,W=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,j=N,e.width=Math.floor(T*k),e.height=Math.floor(N*k),W===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(O*k,j*k).floor()},this.setDrawingBufferSize=function(T,N,W){O=T,j=N,k=W,e.width=Math.floor(T*W),e.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,N,W,F){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,N,W,F),rt.viewport(D.copy(K).multiplyScalar(k).floor())},this.getScissor=function(T){return T.copy(I)},this.setScissor=function(T,N,W,F){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,N,W,F),rt.scissor(B.copy(I).multiplyScalar(k).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(T){rt.setScissorTest(q=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(T=!0,N=!0,W=!0){let F=0;if(T){let Y=!1;if(A!==null){const pt=A.texture.format;Y=pt===nh||pt===eh||pt===th}if(Y){const pt=A.texture.type,Tt=pt===Jn||pt===qn||pt===Bo||pt===Ei||pt===Ju||pt===Qu,wt=$.getClearColor(),Rt=$.getClearAlpha(),Bt=wt.r,Pt=wt.g,Lt=wt.b;Tt?(m[0]=Bt,m[1]=Pt,m[2]=Lt,m[3]=Rt,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Bt,g[1]=Pt,g[2]=Lt,g[3]=Rt,C.clearBufferiv(C.COLOR,0,g))}else F|=C.COLOR_BUFFER_BIT}N&&(F|=C.DEPTH_BUFFER_BIT),W&&(F|=C.STENCIL_BUFFER_BIT),C.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",H,!1),e.removeEventListener("webglcontextcreationerror",it,!1),nt.dispose(),ct.dispose(),vt.dispose(),Nt.dispose(),Wt.dispose(),S.dispose(),_t.dispose(),Ot.dispose(),X.dispose(),P.dispose(),P.removeEventListener("sessionstart",te),P.removeEventListener("sessionend",pn),Et&&(Et.dispose(),Et=null),Te.stop()};function lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=ft.autoReset,N=ut.enabled,W=ut.autoUpdate,F=ut.needsUpdate,Y=ut.type;$t(),ft.autoReset=T,ut.enabled=N,ut.autoUpdate=W,ut.needsUpdate=F,ut.type=Y}function it(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ht(T){const N=T.target;N.removeEventListener("dispose",ht),Gt(N)}function Gt(T){Zt(T),vt.remove(T)}function Zt(T){const N=vt.get(T).programs;N!==void 0&&(N.forEach(function(W){X.releaseProgram(W)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,W,F,Y,pt){N===null&&(N=ve);const Tt=Y.isMesh&&Y.matrixWorld.determinant()<0,wt=wh(T,N,W,F,Y);rt.setMaterial(F,Tt);let Rt=W.index,Bt=1;F.wireframe===!0&&(Rt=w.getWireframeAttribute(W),Bt=2);const Pt=W.drawRange,Lt=W.attributes.position;let ee=Pt.start*Bt,re=(Pt.start+Pt.count)*Bt;pt!==null&&(ee=Math.max(ee,pt.start*Bt),re=Math.min(re,(pt.start+pt.count)*Bt)),Rt!==null?(ee=Math.max(ee,0),re=Math.min(re,Rt.count)):Lt!=null&&(ee=Math.max(ee,0),re=Math.min(re,Lt.count));const sn=re-ee;if(sn<0||sn===1/0)return;_t.setup(Y,F,wt,W,Rt);let yn,ae=Dt;if(Rt!==null&&(yn=ie.get(Rt),ae=At,ae.setIndex(yn)),Y.isMesh)F.wireframe===!0?(rt.setLineWidth(F.wireframeLinewidth*J()),ae.setMode(C.LINES)):ae.setMode(C.TRIANGLES);else if(Y.isLine){let kt=F.linewidth;kt===void 0&&(kt=1),rt.setLineWidth(kt*J()),Y.isLineSegments?ae.setMode(C.LINES):Y.isLineLoop?ae.setMode(C.LINE_LOOP):ae.setMode(C.LINE_STRIP)}else Y.isPoints?ae.setMode(C.POINTS):Y.isSprite&&ae.setMode(C.TRIANGLES);if(Y.isInstancedMesh)ae.renderInstances(ee,sn,Y.count);else if(W.isInstancedBufferGeometry){const kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Zs=Math.min(W.instanceCount,kt);ae.renderInstances(ee,sn,Zs)}else ae.render(ee,sn)},this.compile=function(T,N){function W(F,Y,pt){F.transparent===!0&&F.side===Pn&&F.forceSinglePass===!1?(F.side=Ie,F.needsUpdate=!0,es(F,Y,pt),F.side=ei,F.needsUpdate=!0,es(F,Y,pt),F.side=Pn):es(F,Y,pt)}p=ct.get(T),p.init(),y.push(p),T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(v.useLegacyLights),T.traverse(function(F){const Y=F.material;if(Y)if(Array.isArray(Y))for(let pt=0;pt<Y.length;pt++){const Tt=Y[pt];W(Tt,T,F)}else W(Y,T,F)}),y.pop(),p=null};let de=null;function fn(T){de&&de(T)}function te(){Te.stop()}function pn(){Te.start()}const Te=new xh;Te.setAnimationLoop(fn),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(T){de=T,P.setAnimationLoop(T),T===null?Te.stop():Te.start()},P.addEventListener("sessionstart",te),P.addEventListener("sessionend",pn),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(N),N=P.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,A),p=ct.get(T,y.length),p.init(),y.push(p),Ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),st.setFromProjectionMatrix(Ct),ot=this.localClippingEnabled,tt=yt.init(this.clippingPlanes,ot),_=nt.get(T,f.length),_.init(),f.push(_),Go(T,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,Z),this.info.render.frame++,tt===!0&&yt.beginShadows();const W=p.state.shadowsArray;if(ut.render(W,T,N),tt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(_,T),p.setupLights(v.useLegacyLights),N.isArrayCamera){const F=N.cameras;for(let Y=0,pt=F.length;Y<pt;Y++){const Tt=F[Y];Vo(_,T,Tt,Tt.viewport)}}else Vo(_,T,N);A!==null&&(Mt.updateMultisampleRenderTarget(A),Mt.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,N),_t.resetDefaultState(),R=-1,x=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Go(T,N,W,F){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||st.intersectsSprite(T)){F&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ct);const Tt=S.update(T),wt=T.material;wt.visible&&_.push(T,Tt,wt,W,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||st.intersectsObject(T))){const Tt=S.update(T),wt=T.material;if(F&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ht.copy(Tt.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(Ct)),Array.isArray(wt)){const Rt=Tt.groups;for(let Bt=0,Pt=Rt.length;Bt<Pt;Bt++){const Lt=Rt[Bt],ee=wt[Lt.materialIndex];ee&&ee.visible&&_.push(T,Tt,ee,W,Ht.z,Lt)}}else wt.visible&&_.push(T,Tt,wt,W,Ht.z,null)}}const pt=T.children;for(let Tt=0,wt=pt.length;Tt<wt;Tt++)Go(pt[Tt],N,W,F)}function Vo(T,N,W,F){const Y=T.opaque,pt=T.transmissive,Tt=T.transparent;p.setupLightsView(W),tt===!0&&yt.setGlobalState(v.clippingPlanes,W),pt.length>0&&Ah(Y,pt,N,W),F&&rt.viewport(D.copy(F)),Y.length>0&&ts(Y,N,W),pt.length>0&&ts(pt,N,W),Tt.length>0&&ts(Tt,N,W),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Ah(T,N,W,F){const Y=dt.isWebGL2;Et===null&&(Et=new Ci(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Xr:Jn,minFilter:Wr,samples:Y?4:0})),v.getDrawingBufferSize(bt),Y?Et.setSize(bt.x,bt.y):Et.setSize(mo(bt.x),mo(bt.y));const pt=v.getRenderTarget();v.setRenderTarget(Et),v.getClearColor(L),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const Tt=v.toneMapping;v.toneMapping=Un,ts(T,W,F),Mt.updateMultisampleRenderTarget(Et),Mt.updateRenderTargetMipmap(Et);let wt=!1;for(let Rt=0,Bt=N.length;Rt<Bt;Rt++){const Pt=N[Rt],Lt=Pt.object,ee=Pt.geometry,re=Pt.material,sn=Pt.group;if(re.side===Pn&&Lt.layers.test(F.layers)){const yn=re.side;re.side=Ie,re.needsUpdate=!0,Wo(Lt,W,F,ee,re,sn),re.side=yn,re.needsUpdate=!0,wt=!0}}wt===!0&&(Mt.updateMultisampleRenderTarget(Et),Mt.updateRenderTargetMipmap(Et)),v.setRenderTarget(pt),v.setClearColor(L,U),v.toneMapping=Tt}function ts(T,N,W){const F=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,pt=T.length;Y<pt;Y++){const Tt=T[Y],wt=Tt.object,Rt=Tt.geometry,Bt=F===null?Tt.material:F,Pt=Tt.group;wt.layers.test(W.layers)&&Wo(wt,N,W,Rt,Bt,Pt)}}function Wo(T,N,W,F,Y,pt){T.onBeforeRender(v,N,W,F,Y,pt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(v,N,W,F,T,pt),Y.transparent===!0&&Y.side===Pn&&Y.forceSinglePass===!1?(Y.side=Ie,Y.needsUpdate=!0,v.renderBufferDirect(W,N,F,Y,T,pt),Y.side=ei,Y.needsUpdate=!0,v.renderBufferDirect(W,N,F,Y,T,pt),Y.side=Pn):v.renderBufferDirect(W,N,F,Y,T,pt),T.onAfterRender(v,N,W,F,Y,pt)}function es(T,N,W){N.isScene!==!0&&(N=ve);const F=vt.get(T),Y=p.state.lights,pt=p.state.shadowsArray,Tt=Y.state.version,wt=X.getParameters(T,Y.state,pt,N,W),Rt=X.getProgramCacheKey(wt);let Bt=F.programs;F.environment=T.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(T.isMeshStandardMaterial?Wt:Nt).get(T.envMap||F.environment),Bt===void 0&&(T.addEventListener("dispose",ht),Bt=new Map,F.programs=Bt);let Pt=Bt.get(Rt);if(Pt!==void 0){if(F.currentProgram===Pt&&F.lightsStateVersion===Tt)return Xo(T,wt),Pt}else wt.uniforms=X.getUniforms(T),T.onBuild(W,wt,v),T.onBeforeCompile(wt,v),Pt=X.acquireProgram(wt,Rt),Bt.set(Rt,Pt),F.uniforms=wt.uniforms;const Lt=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=yt.uniform),Xo(T,wt),F.needsLights=Rh(T),F.lightsStateVersion=Tt,F.needsLights&&(Lt.ambientLightColor.value=Y.state.ambient,Lt.lightProbe.value=Y.state.probe,Lt.directionalLights.value=Y.state.directional,Lt.directionalLightShadows.value=Y.state.directionalShadow,Lt.spotLights.value=Y.state.spot,Lt.spotLightShadows.value=Y.state.spotShadow,Lt.rectAreaLights.value=Y.state.rectArea,Lt.ltc_1.value=Y.state.rectAreaLTC1,Lt.ltc_2.value=Y.state.rectAreaLTC2,Lt.pointLights.value=Y.state.point,Lt.pointLightShadows.value=Y.state.pointShadow,Lt.hemisphereLights.value=Y.state.hemi,Lt.directionalShadowMap.value=Y.state.directionalShadowMap,Lt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Lt.spotShadowMap.value=Y.state.spotShadowMap,Lt.spotLightMatrix.value=Y.state.spotLightMatrix,Lt.spotLightMap.value=Y.state.spotLightMap,Lt.pointShadowMap.value=Y.state.pointShadowMap,Lt.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ee=Pt.getUniforms(),re=Ps.seqWithValue(ee.seq,Lt);return F.currentProgram=Pt,F.uniformsList=re,Pt}function Xo(T,N){const W=vt.get(T);W.outputColorSpace=N.outputColorSpace,W.instancing=N.instancing,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function wh(T,N,W,F,Y){N.isScene!==!0&&(N=ve),Mt.resetTextureUnits();const pt=N.fog,Tt=F.isMeshStandardMaterial?N.environment:null,wt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mn,Rt=(F.isMeshStandardMaterial?Wt:Nt).get(F.envMap||Tt),Bt=F.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pt=!!W.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Lt=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,re=!!W.morphAttributes.color,sn=F.toneMapped?v.toneMapping:Un,yn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=yn!==void 0?yn.length:0,kt=vt.get(F),Zs=p.state.lights;if(tt===!0&&(ot===!0||T!==x)){const ze=T===x&&F.id===R;yt.setState(F,T,ze)}let fe=!1;F.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Zs.state.version||kt.outputColorSpace!==wt||Y.isInstancedMesh&&kt.instancing===!1||!Y.isInstancedMesh&&kt.instancing===!0||Y.isSkinnedMesh&&kt.skinning===!1||!Y.isSkinnedMesh&&kt.skinning===!0||kt.envMap!==Rt||F.fog===!0&&kt.fog!==pt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==yt.numPlanes||kt.numIntersection!==yt.numIntersection)||kt.vertexAlphas!==Bt||kt.vertexTangents!==Pt||kt.morphTargets!==Lt||kt.morphNormals!==ee||kt.morphColors!==re||kt.toneMapping!==sn||dt.isWebGL2===!0&&kt.morphTargetsCount!==ae)&&(fe=!0):(fe=!0,kt.__version=F.version);let ii=kt.currentProgram;fe===!0&&(ii=es(F,N,Y));let qo=!1,gr=!1,Js=!1;const be=ii.getUniforms(),ri=kt.uniforms;if(rt.useProgram(ii.program)&&(qo=!0,gr=!0,Js=!0),F.id!==R&&(R=F.id,gr=!0),qo||x!==T){if(be.setValue(C,"projectionMatrix",T.projectionMatrix),dt.logarithmicDepthBuffer&&be.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),x!==T&&(x=T,gr=!0,Js=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const ze=be.map.cameraPosition;ze!==void 0&&ze.setValue(C,Ht.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&be.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Y.isSkinnedMesh)&&be.setValue(C,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){be.setOptional(C,Y,"bindMatrix"),be.setOptional(C,Y,"bindMatrixInverse");const ze=Y.skeleton;ze&&(dt.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),be.setValue(C,"boneTexture",ze.boneTexture,Mt),be.setValue(C,"boneTextureSize",ze.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qs=W.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0&&dt.isWebGL2===!0)&&St.update(Y,W,ii),(gr||kt.receiveShadow!==Y.receiveShadow)&&(kt.receiveShadow=Y.receiveShadow,be.setValue(C,"receiveShadow",Y.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ri.envMap.value=Rt,ri.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),gr&&(be.setValue(C,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Ch(ri,Js),pt&&F.fog===!0&&et.refreshFogUniforms(ri,pt),et.refreshMaterialUniforms(ri,F,k,j,Et),Ps.upload(C,kt.uniformsList,ri,Mt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ps.upload(C,kt.uniformsList,ri,Mt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&be.setValue(C,"center",Y.center),be.setValue(C,"modelViewMatrix",Y.modelViewMatrix),be.setValue(C,"normalMatrix",Y.normalMatrix),be.setValue(C,"modelMatrix",Y.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const ze=F.uniformsGroups;for(let ta=0,Ph=ze.length;ta<Ph;ta++)if(dt.isWebGL2){const Yo=ze[ta];Ot.update(Yo,ii),Ot.bind(Yo,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Ch(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Rh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,N,W){vt.get(T.texture).__webglTexture=N,vt.get(T.depthTexture).__webglTexture=W;const F=vt.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=W===void 0,F.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const W=vt.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,W=0){A=T,M=N,b=W;let F=!0,Y=null,pt=!1,Tt=!1;if(T){const Rt=vt.get(T);Rt.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(C.FRAMEBUFFER,null),F=!1):Rt.__webglFramebuffer===void 0?Mt.setupRenderTarget(T):Rt.__hasExternalTextures&&Mt.rebindTextures(T,vt.get(T.texture).__webglTexture,vt.get(T.depthTexture).__webglTexture);const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Tt=!0);const Pt=vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Pt[N],pt=!0):dt.isWebGL2&&T.samples>0&&Mt.useMultisampledRTT(T)===!1?Y=vt.get(T).__webglMultisampledFramebuffer:Y=Pt,D.copy(T.viewport),B.copy(T.scissor),G=T.scissorTest}else D.copy(K).multiplyScalar(k).floor(),B.copy(I).multiplyScalar(k).floor(),G=q;if(rt.bindFramebuffer(C.FRAMEBUFFER,Y)&&dt.drawBuffers&&F&&rt.drawBuffers(T,Y),rt.viewport(D),rt.scissor(B),rt.setScissorTest(G),pt){const Rt=vt.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt.__webglTexture,W)}else if(Tt){const Rt=vt.get(T.texture),Bt=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rt.__webglTexture,W||0,Bt)}R=-1},this.readRenderTargetPixels=function(T,N,W,F,Y,pt,Tt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(wt=wt[Tt]),wt){rt.bindFramebuffer(C.FRAMEBUFFER,wt);try{const Rt=T.texture,Bt=Rt.format,Pt=Rt.type;if(Bt!==dn&&mt.convert(Bt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=Pt===Xr&&(Q.has("EXT_color_buffer_half_float")||dt.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Pt!==Jn&&mt.convert(Pt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===Yn&&(dt.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-F&&W>=0&&W<=T.height-Y&&C.readPixels(N,W,F,Y,mt.convert(Bt),mt.convert(Pt),pt)}finally{const Rt=A!==null?vt.get(A).__webglFramebuffer:null;rt.bindFramebuffer(C.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(T,N,W=0){const F=Math.pow(2,-W),Y=Math.floor(N.image.width*F),pt=Math.floor(N.image.height*F);Mt.setTexture2D(N,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,T.x,T.y,Y,pt),rt.unbindTexture()},this.copyTextureToTexture=function(T,N,W,F=0){const Y=N.image.width,pt=N.image.height,Tt=mt.convert(W.format),wt=mt.convert(W.type);Mt.setTexture2D(W,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,W.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,T.x,T.y,Y,pt,Tt,wt,N.image.data):N.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,Tt,N.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,F,T.x,T.y,Tt,wt,N.image),F===0&&W.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(T,N,W,F,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=T.max.x-T.min.x+1,Tt=T.max.y-T.min.y+1,wt=T.max.z-T.min.z+1,Rt=mt.convert(F.format),Bt=mt.convert(F.type);let Pt;if(F.isData3DTexture)Mt.setTexture3D(F,0),Pt=C.TEXTURE_3D;else if(F.isDataArrayTexture)Mt.setTexture2DArray(F,0),Pt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Lt=C.getParameter(C.UNPACK_ROW_LENGTH),ee=C.getParameter(C.UNPACK_IMAGE_HEIGHT),re=C.getParameter(C.UNPACK_SKIP_PIXELS),sn=C.getParameter(C.UNPACK_SKIP_ROWS),yn=C.getParameter(C.UNPACK_SKIP_IMAGES),ae=W.isCompressedTexture?W.mipmaps[0]:W.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,T.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,T.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?C.texSubImage3D(Pt,Y,N.x,N.y,N.z,pt,Tt,wt,Rt,Bt,ae.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Pt,Y,N.x,N.y,N.z,pt,Tt,wt,Rt,ae.data)):C.texSubImage3D(Pt,Y,N.x,N.y,N.z,pt,Tt,wt,Rt,Bt,ae),C.pixelStorei(C.UNPACK_ROW_LENGTH,Lt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ee),C.pixelStorei(C.UNPACK_SKIP_PIXELS,re),C.pixelStorei(C.UNPACK_SKIP_ROWS,sn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,yn),Y===0&&F.generateMipmaps&&C.generateMipmap(Pt),rt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Mt.setTextureCube(T,0):T.isData3DTexture?Mt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Mt.setTexture2DArray(T,0):Mt.setTexture2D(T,0),rt.unbindTexture()},this.resetState=function(){M=0,b=0,A=null,rt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Di:ih}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Di?Ut:Mn}}class Tv extends Dh{}Tv.prototype.isWebGL1Renderer=!0;class Ho{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Ho(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class bv extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Th extends Jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uc=new _e,go=new ch,bs=new $s,As=new z;class Av extends Oe{constructor(t=new On,e=new Th){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=s,t.ray.intersectsSphere(bs)===!1)return;Uc.copy(i).invert(),go.copy(t.ray).applyMatrix4(Uc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);As.fromBufferAttribute(h,p),Ic(As,p,l,i,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,_=m;g<_;g++)As.fromBufferAttribute(h,g),Ic(As,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ic(r,t,e,n,i,s,a){const o=go.distanceSqToPoint(r);if(o<e){const l=new z;go.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);class wv{constructor(){jt(this,"scene");jt(this,"camera");jt(this,"renderer");jt(this,"particles");jt(this,"animationFrame");jt(this,"mouseX",0);jt(this,"mouseY",0);jt(this,"MIN_DISTANCE",40)}init(){return new Promise(t=>{if(!document.getElementById("background-canvas")){const h=document.createElement("canvas");h.id="background-canvas",h.style.position="fixed",h.style.top="0",h.style.left="0",h.style.width="100%",h.style.height="100%",h.style.zIndex="1",h.style.opacity="0",document.body.prepend(h)}this.scene=new bv;const e=new Vt(725536);this.scene.background=e,this.scene.fog=new Ho(725536,2e-5),this.camera=new Qe(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=50,this.renderer=new Dh({canvas:document.getElementById("background-canvas"),alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio);const n=new On,i=5e3,s=new Float32Array(i*3),a=new Float32Array(i*3),o=[new Vt(3900150),new Vt(9133302),new Vt(11032055)],l=.5;for(let h=0;h<i;h++){const d=40+Math.random()*60,m=Math.random()*Math.PI*2,g=Math.acos(Math.random()*2-1);s[h*3]=d*Math.sin(g)*Math.cos(m),s[h*3+1]=d*Math.sin(g)*Math.sin(m),s[h*3+2]=d*Math.cos(g);const _=o[Math.floor(Math.random()*o.length)],p=.5+Math.random()*.05,f=_.r*(1-p)+1*p,y=_.g*(1-p)+1*p,v=_.b*(1-p)+1*p,E=.96+Math.random()*.08;a[h*3]=Math.min(1,f*E),a[h*3+1]=Math.min(1,y*E),a[h*3+2]=Math.min(1,v*E)}n.setAttribute("position",new rn(s,3)),n.setAttribute("color",new rn(a,3));const c=new Ne(this.createParticleTexture());c.needsUpdate=!0;const u=new Th({size:l,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.8,map:c,blending:ao,depthWrite:!1});this.particles=new Av(n,u),this.scene.add(this.particles),window.addEventListener("resize",this.handleResize.bind(this)),this.animate(),gt.to(document.getElementById("background-canvas"),{opacity:.6,duration:2,ease:"power2.inOut",delay:.5,onComplete:()=>t()})})}handleResize(){this.camera&&this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}handleMouseMove(t){this.mouseX=t.clientX/window.innerWidth*2-1,this.mouseY=-(t.clientY/window.innerHeight)*2+1}createParticleTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");if(!e)return t;const n=e.createRadialGradient(t.width/2,t.height/2,0,t.width/2,t.height/2,t.width/2);return n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.3,"rgba(255, 255, 255, 0.9)"),n.addColorStop(.7,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),t}animate(){if(!this.scene||!this.camera||!this.renderer||!this.particles)return;this.animationFrame=requestAnimationFrame(this.animate.bind(this));const t=this.particles.geometry.getAttribute("position"),e=Date.now()*2e-4,n=this.camera.position;for(let i=0;i<t.count;i++){const s=t.getX(i),a=t.getY(i),l=t.getZ(i)+Math.sin(e+s*.02+a*.02)*1.5,c=.03,u=l+this.mouseX*c*s+this.mouseY*c*a,h=s-n.x,d=a-n.y,m=u-n.z;if(Math.sqrt(h*h+d*d+m*m)<this.MIN_DISTANCE){const _=40+Math.random()*60,p=Math.random()*Math.PI*2,f=Math.acos(Math.random()*2-1),y=_*Math.sin(f)*Math.cos(p),v=_*Math.sin(f)*Math.sin(p),E=_*Math.cos(f);t.setXYZ(i,y,v,E)}else t.setZ(i,u)}t.needsUpdate=!0,this.particles.rotation.y+=5e-5,this.renderer.render(this.scene,this.camera)}dispose(){if(window.removeEventListener("resize",this.handleResize.bind(this)),window.removeEventListener("mousemove",this.handleMouseMove.bind(this)),this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.particles){const t=this.particles.geometry,e=this.particles.material;t.dispose(),e.dispose()}this.renderer&&this.renderer.dispose()}}const qe={isLoaded:!1,isHorizontal:Wu(),areExtraDivsVisible:!1},Nc=document.getElementById("app"),Gs=async()=>{if(!Nc){console.error("App container not found");return}Hc(vf(qe),Nc)},Cv=r=>{r.propertyName==="transform"&&qe.isLoaded&&!qe.areExtraDivsVisible&&Rv().catch(t=>console.error("Error showing content sections:",t))},Rv=async()=>{if(!qe.areExtraDivsVisible){console.log("Showing content sections..."),qe.areExtraDivsVisible=!0,await Gs(),Xu("Additional content is now available.");try{await gf()}catch(r){console.error("Failed to init Projects animations",r)}}},bh=async()=>{console.log("Updating layout...");const r=qe.isHorizontal;qe.isHorizontal=Wu(),r!==qe.isHorizontal&&(await Gs(),Xu(`Layout changed to ${qe.isHorizontal?"horizontal":"vertical"} mode.`))},Pv=()=>(console.log("Initializing background effect..."),qe.background=new wv,qe.background.init());window.addEventListener("resize",xf(bh,100));window.addEventListener("orientationchange",bh);document.addEventListener("transitionend",r=>{r.target.id==="titleContainer"&&Cv(r)});let Lv=window.scrollY;window.addEventListener("scroll",()=>{qe.isLoaded||window.scrollTo(0,Lv)});document.documentElement.style.scrollBehavior="auto";window.addEventListener("load",function(){window.scrollTo(0,0),document.documentElement.classList.add("loaded"),setTimeout(()=>{document.documentElement.style.scrollBehavior="smooth"},100)});const Fv=async()=>{await Gs();try{await Pv()}catch(r){console.error(r)}qe.isLoaded=!0,await Gs()};Fv();
