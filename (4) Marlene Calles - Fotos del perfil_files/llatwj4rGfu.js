/*!CK:3266344840!*//*1419254003,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["BwzoK"]); }

__d("cancelAnimationFrame",[],function(a,b,c,d,e,f){var g=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.clearTimeout;e.exports=g;},null);
__d("clearImmediate",["ImmediateImplementation"],function(a,b,c,d,e,f){e.exports=a.clearImmediate||b('ImmediateImplementation').clearImmediate;},null);
__d("SiteTimer",["TimeSlice","cancelAnimationFrame","clearImmediate","requestAnimationFrame","setImmediate"],function(a,b,c,d,e,f,g,h,i,j,k){var l={setTimeout:a.setTimeout,clearTimeout:a.clearTimeout,setInterval:a.setInterval,clearInterval:a.clearInterval},m={setTimeout:function(){for(var n=[],o=0,p=arguments.length;o<p;o++)n.push(arguments[o]);n[0]=g.guard(n[0],'setTimeout');return l.setTimeout.apply(a,n);},clearTimeout:l.clearTimeout.bind(a),setInterval:function(){for(var n=[],o=0,p=arguments.length;o<p;o++)n.push(arguments[o]);n[0]=g.guard(n[0],'setInterval');return l.setInterval.apply(a,n);},clearInterval:l.clearInterval.bind(a),setImmediate:function(){for(var n=[],o=0,p=arguments.length;o<p;o++)n.push(arguments[o]);n[0]=g.guard(n[0],'setImmediate');return k.apply(a,n);},clearImmediate:i.bind(a),requestAnimationFrame:function(){for(var n=[],o=0,p=arguments.length;o<p;o++)n.push(arguments[o]);n[0]=g.guard(n[0],'requestAnimationFrame');return j.apply(a,n);},cancelAnimationFrame:h.bind(a)};e.exports=m;},null);
__d("mixInTimer",["SiteTimer","invariant"],function(a,b,c,d,e,f,g,h){var i='TIMEOUT',j='INTERVAL',k='IMMEDIATE',l='ANIMATION_FRAME',m=function(ba,ca,da){var ea=function(){for(var ga=[],ha=0,ia=arguments.length;ha<ia;ha++)ga.push(arguments[ha]);var ja=this,ka=ga[0],la;ga[0]=function(){fa.call(ja,la);ka.apply(this,arguments);};la=ba.apply(this,ga);this.__getIDs(da).push(la);return la;},fa=function(ga){var ha=this.__getIDs(da),ia=ha.indexOf(ga);if(ia>=0)ha.splice(ia,1);ca(ga);};return {setter:ea,clearer:fa};},n=m(g.setTimeout,g.clearTimeout,i),o=n.setter,p=n.clearer,q=m(g.setInterval,g.clearInterval,j),r=q.setter,s=q.clearer,t=m(g.setImmediate,g.clearImmediate,k),u=t.setter,v=t.clearer,w=m(g.requestAnimationFrame,g.cancelAnimationFrame,l),x=w.setter,y=w.clearer,z={__getIDs:function(ba){this.__timerIDs=this.__timerIDs||{};this.__timerIDs[ba]=this.__timerIDs[ba]||[];return this.__timerIDs[ba];},clearAll:function(){this.__getIDs(i).forEach(this.clearTimeout,this);this.__getIDs(j).forEach(this.clearInterval,this);this.__getIDs(k).forEach(this.clearImmediate,this);this.__getIDs(l).forEach(this.cancelAnimationFrame,this);},setTimeout:o,clearTimeout:p,setInterval:r,clearInterval:s,setImmediate:u,clearImmediate:v,requestAnimationFrame:x,cancelAnimationFrame:y},aa=function(ba){h(!this.__timerIDs);var ca=ba.prototype||ba,da=ba.constructor;if(da)h(da===Object||da===Function);Object.assign(ca,z);};e.exports=aa;},null);
__d("PageTimer",["mixInTimer"],function(a,b,c,d,e,f,g){var h={};g(h);e.exports=h;},null);
__d("QuicklingAugmenter",["URI"],function(a,b,c,d,e,f,g){var h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=g(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};e.exports=i;},null);
__d("Quickling",["AjaxPipeRequest","Arbiter","CSSClassTransition","DocumentTitle","DOM","ErrorUtils","HTML","OnloadHooks","PageTransitions","QuicklingAugmenter","QuicklingConfig","Run","URI","UserAgent_DEPRECATED","PageTimer","PHPQuerySerializer","goOrReplace","isEmpty"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var y=q.version,z=q.sessionLength,aa=new RegExp(q.inactivePageRegex),ba=0,ca,da='',ea=[];function fa(){ea.forEach(clearTimeout);ea.length=0;}function ga(){if(ea.length===0)r.onLeave(fa);}var ha={isActive:function(){return true;},isPageActive:function(qa){if(qa=='#')return false;qa=new s(qa);if(qa.getDomain()&&qa.getDomain()!=s().getDomain())return false;if(qa.getPath()=='/l.php'){var ra=qa.getQueryData().u;if(ra){ra=s(unescape(ra)).getDomain();if(ra&&ra!=s().getDomain())return false;}}var sa=qa.getPath(),ta=qa.getQueryData();if(!x(ta))sa+='?'+v.serialize(ta);return !aa.test(sa);},getLoadCount:function(){return ba;}};function ia(qa){qa=qa||'Facebook';j.set(qa);if(t.ie()){da=qa;if(!ca)ca=window.setInterval(function(){var ra=da,sa=j.get();if(ra!=sa)j.set(ra);},5000,false);}}function ja(qa){var ra=document.getElementsByTagName('link');for(var sa=0;sa<ra.length;++sa){if(ra[sa].rel!='alternate')continue;k.remove(ra[sa]);}if(qa.length){var ta=k.find(document,'head');ta&&k.appendContent(ta,m(qa[0]));}}for(var ka in g)if(g.hasOwnProperty(ka))ma[ka]=g[ka];var la=g===null?null:g.prototype;ma.prototype=Object.create(la);ma.prototype.constructor=ma;ma.__superConstructor__=g;function ma(qa){"use strict";var ra={version:y};g.call(this,qa,{quickling:ra});}ma.prototype._preBootloadFirstResponse=function(qa){"use strict";return true;};ma.prototype._fireDomContentCallback=function(){"use strict";this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');o.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);la._fireDomContentCallback.call(this);};ma.prototype._fireOnloadCallback=function(){"use strict";if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}la._fireOnloadCallback.call(this);};ma.prototype.isPageActive=function(qa){"use strict";return ha.isPageActive(qa);};ma.prototype._versionCheck=function(qa){"use strict";if(qa.version==y)return true;var ra=['quickling','ajaxpipe','ajaxpipe_token'];w(window.location,s(qa.uri).removeQueryData(ra),true);return false;};ma.prototype._processFirstResponse=function(qa){"use strict";var ra=qa.getPayload();ia(ra.title);ja(ra.syndication||[]);window.scrollTo(0,0);i.go(document.body,ra.body_class||'',o.getMostRecentURI(),qa.getRequest().getURI());h.inform('quickling/response');};ma.prototype.getSanitizedParameters=function(){"use strict";return ['quickling'];};function na(){ba++;return ba>=z;}function oa(qa){g.setCurrentRequest(null);if(na())return false;qa=p.augmentURI(qa);if(!ha.isPageActive(qa))return false;window.ExitTime=Date.now();r.__removeHook('onafterloadhooks');r.__removeHook('onloadhooks');n.runHooks('onleavehooks');h.inform('onload/exit',true);new ma(qa).setCanvasId('content').send();return true;}function pa(qa){var ra=window[qa];function sa(ta,ua,va){if(typeof ta!=='function')ta=eval.bind(null,ta);var wa=ra(l.guard(ta,qa+' (with Quickling)'),ua);if(ua>0&&va!==false){ga();ea.push(wa);}return wa;}window[qa]=sa;}r.onAfterLoad(function qa(){pa('setInterval');pa('setTimeout');r.onLeave(u.clearAll.bind(u));o.registerHandler(oa,1);});e.exports=a.Quickling=ha;},null);