var mt=(l,d)=>()=>(d||l((d={exports:{}}).exports,d),d.exports);var St=mt((He,at)=>{(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))O(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const x of n.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&O(x)}).observe(document,{childList:!0,subtree:!0});function E(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function O(r){if(r.ep)return;r.ep=!0;const n=E(r);fetch(r.href,n)}})();console.log("Works best on Firefox");document.addEventListener("DOMContentLoaded",function(){var l=new Howl({src:["assets/click.mp3"],volume:.6}),d=document.getElementById("clipboard-notification"),E=document.querySelector(".social.discord");E.addEventListener("click",function(){var n="kallosus16(2)#6138";navigator.clipboard.writeText(n).then(function(){d.style.display="block",setTimeout(function(){d.style.animation="notification-fade-out 0.5s ease-in-out forwards"},5e3)}).catch(console.error),l.play()}),new Howl({src:["assets/sound.mp3"],loop:!0,volume:.1,autoplay:!0,autoplayOn:[15e3,9e4]});var O=document.querySelector(".clock");function r(){var n=new Date,x=n.getHours(),g=n.getMinutes(),C=n.getSeconds();x=x>12?x-12:x,g=g<10?"0"+g:g,C=C<10?"0"+C:C,O.innerHTML=x+":"+g+":"+C}setInterval(r,1)});const{gsap:y,CircleType:nt}=window,ee=document.querySelector(".cursor--large"),te=document.querySelector(".cursor--small"),Z=document.querySelector(".cursor--text"),be=Z.querySelector(".text"),ot=document.querySelectorAll(".cursor-hover-item"),L=.3;let Me=!1,Te;const vt=7;let Se=new nt(be);Se.radius(50);setTimeout(()=>{Te=Se.container.style.getPropertyValue("height"),console.log(Te)},50);ot.forEach(l=>{l.addEventListener("pointerenter",wt),l.addEventListener("pointerleave",st)});let G={x:-100,y:-100};document.body.addEventListener("mousedown",l=>{if(l.detail===2){y.to(te,{duration:L,scale:10.4}),y.to(ee,{duration:L,scale:.3});let d;document.addEventListener("mouseup",function(E){E.code==="click"&&clearInterval(d)})}else y.to(te,{duration:L,scale:3.5}),y.to(ee,{duration:L,scale:.4})});document.body.addEventListener("mouseup",l=>{y.to(te,{duration:L,scale:1}),y.to(ee,{duration:L,scale:1.2})});document.body.addEventListener("pointermove",yt);function yt(l){G.x=l.pageX,G.y=l.pageY}function it(){y.set([te,Z],{x:G.x,y:G.y}),y.to(ee,{duration:.023,x:G.x,y:G.y}),Me||(y.to(Z,L*.5,{opacity:0}),y.set(Z,{rotate:0})),requestAnimationFrame(it)}it();function wt(l){Me=!0;const d=l.currentTarget;bt(d),y.set([Z,be],{height:Te,width:Te}),y.fromTo(Z,{rotate:0},{duration:vt,rotate:320,ease:"none",repeat:-1}),y.to(te,{duration:L,scale:2}),y.fromTo(Z,L,{scale:1.2,opacity:0},{delay:L*.75,scale:1,opacity:1}),y.to(ee,{duration:L,scale:2,opacity:0})}ot.forEach(l=>{l.addEventListener("pointerleave",st)});function st(){Me=!1,y.to([te,ee],{duration:L,scale:1,opacity:1})}function bt(l){const d=l.getAttribute("data-cursor-text-repeat"),E=Tt(l.getAttribute("data-cursor-text"),parseInt(d));Se.destroy(),be.innerHTML=E,Se=new nt(be)}function Tt(l,d){let E="";for(let O=0;O<d;O++)E+=` ${l} `;return E}(function(l,d){typeof He=="object"&&typeof at<"u"?d(He):typeof define=="function"&&define.amd?define(["exports"],d):d((l=l||self).window=l.window||{})})(globalThis,function(l){function d(a,m){for(var z=0;z<m.length;z++){var P=m[z];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(a,P.key,P)}}function E(){return typeof window<"u"}function O(){return n||E()&&(n=window.gsap)&&n.registerPlugin&&n}function r(){return String.fromCharCode.apply(null,arguments)}var n,x,g,C,re,_,K,Ie,s,A,ue,qe,Fe,ze,Be,ct=r(103,114,101,101,110,115,111,99,107,46,99,111,109),W=(function(a){var m=typeof window<"u";(m?window.location.href:"").indexOf(r(102,105,108,101,58,47,47))===0||a.indexOf(r(108,111,99,97,108,104,111,115,116))!==-1||a.indexOf(r(49,50,55,46,48,32,48,46,49)),r(99,111,100,101,112,101,110,46,105,111),r(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),r(99,111,100,101,112,101,110,46,100,101,118),r(99,111,100,101,112,101,110,46,97,112,112),r(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),r(112,101,110,115,46,99,108,111,117,100),r(99,115,115,45,116,114,105,99,107,115,46,99,111,109),r(99,100,112,110,46,105,111),r(112,101,110,115,46,105,111),r(103,97,110,110,111,110,46,116,118),r(99,111,100,101,99,97,110,121,111,110,46,110,101,116),r(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),r(99,101,114,101,98,114,97,120,46,99,111,46,117,107),r(116,121,109,112,97,110,117,115,46,110,101,116),r(116,119,101,101,110,109,97,120,46,99,111,109),r(112,108,110,107,114,46,99,111),r(104,111,116,106,97,114,46,99,111,109),r(119,101,98,112,97,99,107,98,105,110,46,99,111,109),r(97,114,99,104,105,118,101,46,111,114,103),r(99,111,100,101,115,97,110,100,98,111,120,46,105,111),r(99,115,98,46,97,112,112),r(115,116,97,99,107,98,108,105,116,122,46,99,111,109),r(115,116,97,99,107,98,108,105,116,122,46,105,111),r(99,111,100,105,101,114,46,105,111),r(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),r(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),r(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),r(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),r(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),r(106,115,102,105,100,100,108,101,46,110,101,116)}(typeof window<"u"?window.location.host:""),F.register=function(m){return x||(n=m||O(),E()&&window.document&&(g=window,C=document,re=C.documentElement,_=C.body),n&&(K=n.utils.toArray,Ie=n.utils.clamp,ue=n.parseEase("expo"),ze=n.core.context||function(){},Be=n.delayedCall(.2,function(){return s.isRefreshing||A&&A.refresh()}).pause(),s=n.core.globals().ScrollTrigger,n.core.globals("ScrollSmoother",F),_&&s&&(qe=s.core._getVelocityProp,Fe=s.core._inputObserver,F.refresh=s.refresh,x=1))),x},function(m,z,P){return z&&d(m.prototype,z),P&&d(m,P),m}(F,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),F);function F(a){var m=this;x||F.register(n)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),a=this.vars=a||{},A&&A.kill(),ze(A=this);function z(){return oe.update(-b)}function P(){return w.style.overflow="visible"}function fe(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),Ce=!1,e.animation.progress(e.progress,!0)}function de(e,t){(e!==b&&!H||t)&&(dt&&(e=Math.round(e)),M&&(w.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",w._gsap.y=e+"px"),Le=e-b,b=e,s.isUpdating||F.isRefreshing||s.update())}function ne(e){return arguments.length?(e<0&&(e=0),J.y=-e,Ce=!0,H?b=-e:de(-e),s.isRefreshing?h.update():he(e/I),this):-b}function Ne(e){v.scrollTop=0,e.target.contains&&e.target.contains(v)||$e&&$e(m,e)===!1||(s.isInViewport(e.target)||e.target===Xe||m.scrollTo(e.target,!1,"center center"),Xe=e.target)}function Ue(e){var t,i,o,c;p.forEach(function(u){t=u.pins,c=u.markers,e.forEach(function(f){u.trigger&&f.trigger&&u!==f&&(f.trigger===u.trigger||f.pinnedContainer===u.trigger||u.trigger.contains(f.trigger))&&(i=f.start,o=(i-u.start-u.offset)/u.ratio-(i-u.start),t.forEach(function(B){return o-=B.distance/u.ratio-B.distance}),f.setPositions(i+o,f.end+o),f.markerStart&&c.push(n.quickSetter([f.markerStart,f.markerEnd],"y","px")),f.pin&&0<f.end&&(o=f.end-f.start,t.push({start:f.start,end:f.end,distance:o,trig:f}),u.setPositions(u.start,u.end+o),u.vars.onRefresh(u)))})})}function De(){P(),requestAnimationFrame(P),p&&(p.forEach(function(e){var t=e.start,i=e.auto?Math.min(s.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,o=(i-e.end)/2;t-=o,i-=o,e.offset=o||1e-4,e.pins.length=0,e.setPositions(Math.min(t,i),Math.max(t,i)),e.vars.onRefresh(e)}),Ue(s.sort())),oe.reset()}function xe(){return s.addEventListener("refresh",De)}function lt(){return p&&p.forEach(function(e){return e.vars.onRefresh(e)})}function ut(){return p&&p.forEach(function(e){return e.vars.onRefreshInit(e)}),lt}function Ve(e,t,i,o){return function(){var c=typeof t=="function"?t(i,o):t;return c||c===0||(c=o.getAttribute("data-"+pe+e)||(e==="speed"?1:0)),o.setAttribute("data-"+pe+e,c),c==="auto"?c:parseFloat(c)}}function ft(e,t,i,o,c){function u(){t=pt(),i=ht(),D=parseFloat(t)||1,Oe=(Q=t==="auto")?0:.5,R&&R.kill(),R=i&&n.to(e,{ease:ue,overwrite:!1,y:"+=0",duration:i}),T&&(T.ratio=D,T.autoSpeed=Q)}function f(){se.y=ye+"px",se.renderTransform(1),u()}function B(N){if(Q){f();var k=function(V,U){var q,Y,$=V.parentNode||re,ce=V.getBoundingClientRect(),j=$.getBoundingClientRect(),et=j.top-ce.top,tt=j.bottom-ce.bottom,le=(Math.abs(et)>Math.abs(tt)?et:tt)/(1-U),rt=-le*U;return 0<le&&(Y=(q=j.height/(g.innerHeight+j.height))==.5?2*j.height:2*Math.min(j.height,-le*q/(2*q-1))*(U||1),rt+=U?-Y*U:-Y/2,le+=Y),{change:le,offset:rt}}(e,Ie(0,1,-N.start/(N.end-N.start)));ae=k.change,_e=k.offset}else ae=(N.end-N.start)*(1-D),_e=0;we.forEach(function(S){return ae-=S.distance*(1-D)}),N.vars.onUpdate(N),R&&R.progress(1)}c=(typeof c=="function"?c(o,e):c)||0;var D,T,Q,R,Oe,_e,pt=Ve("speed",t,o,e),ht=Ve("lag",i,o,e),ye=n.getProperty(e,"y"),se=e._gsap,we=[],Ae=[],ae=0;return u(),(D!==1||Q||R)&&(B(T=s.create({trigger:Q?e.parentNode:e,start:"top bottom+="+c,end:"bottom top-="+c,scroller:v,scrub:!0,refreshPriority:-999,onRefreshInit:f,onRefresh:B,onKill:function(k){var S=p.indexOf(k);0<=S&&p.splice(S,1),f()},onUpdate:function(k){var S,V,U,q=ye+ae*(k.progress-Oe),Y=we.length,$=0;if(k.offset){if(Y){for(V=-b,U=k.end;Y--;){if((S=we[Y]).trig.isActive||V>=S.start&&V<=S.end)return void(R&&(S.trig.progress+=S.trig.direction<0?.001:-.001,S.trig.update(0,0,1),R.resetTo("y",parseFloat(se.y),-Le,!0),me&&R.progress(1)));V>S.end&&($+=S.distance),U-=S.distance}q=ye+$+ae*((n.utils.clamp(k.start,k.end,V)-k.start-$)/(U-k.start)-Oe)}q=function(j){return Math.round(1e5*j)/1e5||0}(q+_e),Ae.length&&!Q&&Ae.forEach(function(ce){return ce(q-$)}),R?(R.resetTo("y",q,-Le,!0),me&&R.progress(1)):(se.y=q+"px",se.renderTransform(1))}}})),n.core.getCache(T.trigger).stRevert=ut,T.startY=ye,T.pins=we,T.markers=Ae,T.ratio=D,T.autoSpeed=Q,e.style.willChange="transform"),T}var w,v,Ee,h,p,X,Ye,je,Ke,H,ge,We,Pe,Ce,Xe,Je=a.smoothTouch,Qe=a.onUpdate,Ze=a.onStop,Re=a.smooth,$e=a.onFocusIn,ke=a.normalizeScroll,dt=a.wholePixels,gt=this,pe=a.effectsPrefix||"",he=s.getScrollFunc(g),M=s.isTouch===1?Je===!0?.8:parseFloat(Je)||0:Re===0||Re===!1?0:parseFloat(Re)||.8,I=M&&+a.speed||1,b=0,Le=0,me=1,oe=qe(0),J={y:0},ve=typeof ResizeObserver<"u"&&a.autoResize!==!1&&new ResizeObserver(function(){if(!s.isRefreshing){var e=s.maxScroll(v);e<-b&&ne(e),Be.restart(!0)}});function ie(){return Ee=w.clientHeight,w.style.overflow="visible",_.style.height=g.innerHeight+(Ee-g.innerHeight)/I+"px",Ee-g.innerHeight}xe(),s.addEventListener("killAll",xe),n.delayedCall(.5,function(){return me=0}),this.scrollTop=ne,this.scrollTo=function(e,t,i){var o=n.utils.clamp(0,s.maxScroll(g),isNaN(e)?m.offset(e,i):+e);t?H?n.to(m,{duration:M,scrollTop:o,overwrite:"auto",ease:ue}):he(o):ne(o)},this.offset=function(e,t){var i,o=(e=K(e)[0]).style.cssText,c=s.create({trigger:e,start:t||"top top"});return p&&Ue([c]),i=c.start/I,c.kill(!1),e.style.cssText=o,n.core.getCache(e).uncache=1,i},this.content=function(e){if(arguments.length){var t=K(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||_.children[0];return t!==w&&(Ke=(w=t).getAttribute("style")||"",ve&&ve.observe(w),n.set(w,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),M||n.set(w,{clearProps:"transform"})),this}return w},this.wrapper=function(e){return arguments.length?(v=K(e||"#smooth-wrapper")[0]||function(i){var o=C.querySelector(".ScrollSmoother-wrapper");return o||((o=C.createElement("div")).classList.add("ScrollSmoother-wrapper"),i.parentNode.insertBefore(o,i),o.appendChild(i)),o}(w),je=v.getAttribute("style")||"",ie(),n.set(v,M?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):v},this.effects=function(e,t){if(p=p||[],!e)return p.slice(0);(e=K(e)).forEach(function(D){for(var T=p.length;T--;)p[T].trigger===D&&p[T].kill()}),t=t||{};var i,o,c=t.speed,u=t.lag,f=t.effectsPadding,B=[];for(i=0;i<e.length;i++)(o=ft(e[i],c,u,i,f))&&B.push(o);return p.push.apply(p,B),B},this.sections=function(e,t){if(X=X||[],!e)return X.slice(0);var i=K(e).map(function(o){return s.create({trigger:o,start:"top 120%",end:"bottom -20%",onToggle:function(u){o.style.opacity=u.isActive?"1":"0",o.style.pointerEvents=u.isActive?"all":"none"}})});return t&&t.add?X.push.apply(X,i):X=i.slice(0),i},this.content(a.content),this.wrapper(a.wrapper),this.render=function(e){return de(e||e===0?e:b)},this.getVelocity=function(){return oe.getVelocity(-b)},s.scrollerProxy(v,{scrollTop:ne,scrollHeight:function(){return ie()&&_.scrollHeight},fixedMarkers:a.fixedMarkers!==!1&&!!M,content:w,getBoundingClientRect:function(){return{top:0,left:0,width:g.innerWidth,height:g.innerHeight}}}),s.defaults({scroller:v});var Ge=s.getAll().filter(function(e){return e.scroller===g||e.scroller===v});Ge.forEach(function(e){return e.revert(!0,!0)}),h=s.create({animation:n.fromTo(J,{y:0},{y:function(){return-ie()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(this._dur){var t=Ce;t&&(fe(h),J.y=b),de(J.y,t),z(),Qe&&!H&&Qe(gt)}}}),onRefreshInit:function(t){if(F.isRefreshing=!0,p){var i=s.getAll().filter(function(c){return!!c.pin});p.forEach(function(c){c.vars.pinnedContainer||i.forEach(function(u){if(u.pin.contains(c.trigger)){var f=c.vars;f.pinnedContainer=u.pin,c.vars=null,c.init(f,c.animation)}})})}var o=t.getTween();Pe=o&&o._end>o._dp._time,We=b,J.y=0,M&&(s.isTouch===1&&(v.style.position="absolute"),v.scrollTop=0,s.isTouch===1&&(v.style.position="fixed"))},onRefresh:function(t){t.animation.invalidate(),t.setPositions(t.start,ie()/I),Pe||fe(t),J.y=-he()*I,de(J.y),me||t.animation.progress(n.utils.clamp(0,1,We/I/-t.end)),Pe&&(t.progress-=.001,t.update()),F.isRefreshing=!1},id:"ScrollSmoother",scroller:g,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return ie()/I},onScrubComplete:function(){oe.reset(),Ze&&Ze(m)},scrub:M||!0}),this.smooth=function(e){return arguments.length&&(I=(M=e||0)&&+a.speed||1,h.scrubDuration(e)),h.getTween()?h.getTween().duration():0},h.getTween()&&(h.getTween().vars.ease=a.ease||ue),this.scrollTrigger=h,a.effects&&this.effects(a.effects===!0?"[data-"+pe+"speed], [data-"+pe+"lag]":a.effects,{effectsPadding:a.effectsPadding}),a.sections&&this.sections(a.sections===!0?"[data-section]":a.sections),Ge.forEach(function(e){e.vars.scroller=v,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!H!==e&&(e?(h.getTween()&&h.getTween().pause(),he(-b/I),oe.reset(),(ge=s.normalizeScroll())&&ge.disable(),(H=s.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return ne(-b)}})).nested=Fe(re,"wheel,touch,scroll",!0,t!==!1)):(H.nested.kill(),H.kill(),H=0,ge&&ge.enable(),h.progress=(-b/I-h.start)/(h.end-h.start),fe(h))),this):!!H},this.kill=this.revert=function(){m.paused(!1),fe(h),h.kill();for(var e=(p||[]).concat(X||[]),t=e.length;t--;)e[t].kill();s.scrollerProxy(v),s.removeEventListener("killAll",xe),s.removeEventListener("refresh",De),v.style.cssText=je,w.style.cssText=Ke;var i=s.defaults({});i&&i.scroller===v&&s.defaults({scroller:g}),m.normalizer&&s.normalizeScroll(!1),clearInterval(Ye),A=null,ve&&ve.disconnect(),_.style.removeProperty("height"),g.removeEventListener("focusin",Ne)},this.refresh=function(e,t){return h.refresh(e,t)},ke&&(this.normalizer=s.normalizeScroll(ke===!0?{debounce:!0,content:!M&&w}:ke)),s.config(a),"overscrollBehavior"in g.getComputedStyle(_)&&n.set([_,re],{overscrollBehavior:"none"}),"scrollBehavior"in g.getComputedStyle(_)&&n.set([_,re],{scrollBehavior:"auto"}),g.addEventListener("focusin",Ne),Ye=setInterval(z,250),C.readyState==="loading"||requestAnimationFrame(function(){return s.refresh()})}W.version="3.11.5",W.create=function(a){return A&&a&&A.content()===K(a.content)[0]?A:new W(a)},W.get=function(){return A},O()&&n.registerPlugin(W),l.ScrollSmoother=W,l.default=W,typeof window>"u"||window!==l?Object.defineProperty(l,"__esModule",{value:!0}):delete l.default})});export default St();
