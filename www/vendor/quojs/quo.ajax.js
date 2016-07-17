/**
 * QuoJS - Micro #JavaScript Library for Mobile Devices.
 * @version v3.0.7
 * @link    http://quojs.tapquo.com
 * @author  Javi Jimenez Villar (@soyjavi) (https://twitter.com/soyjavi)
 * @license MIT
 */
(function(){"use strict";!function(t){var e,n,a,r,o,u,c,s,i,p,d,l;return e={TYPE:"GET",MIME:"json"},a={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},n=0,t.ajaxSettings={type:e.TYPE,async:!0,success:{},error:{},context:null,dataType:e.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0},t.ajax=function(n){var a,u,s,d;if(s=t.mix(t.ajaxSettings,n),s.type===e.TYPE?s.url+=t.serialize(s.data,"?"):s.data=t.serialize(s.data),r(s.url))return o(s);d=s.xhr(),d.onreadystatechange=function(){return 4===d.readyState?(clearTimeout(a),p(d,s)):void 0},d.open(s.type,s.url,s.async),i(d,s),s.timeout>0&&(a=setTimeout(function(){return l(d,s)},s.timeout));try{d.send(s.data)}catch(f){u=f,d=u,c("Resource not found",d,s)}return d},t.get=function(e,n,a,r){return t.ajax({url:e,data:n,success:a,dataType:r})},t.post=function(t,e,n,a){return s("POST",t,e,n,a)},t.put=function(t,e,n,a){return s("PUT",t,e,n,a)},t["delete"]=function(t,e,n,a){return s("DELETE",t,e,n,a)},t.json=function(e,n,a){return t.ajax({url:e,data:n,success:a})},t.serialize=function(t,e){var n,a;null==e&&(e=""),a=e;for(n in t)t.hasOwnProperty(n)&&(a!==e&&(a+="&"),a+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return a===e?"":a},o=function(e){var a,r,o,u;return e.async?(r="jsonp"+ ++n,o=document.createElement("script"),u={abort:function(){return t(o).remove(),r in window?window[r]={}:void 0}},a=void 0,window[r]=function(n){return clearTimeout(a),t(o).remove(),delete window[r],d(n,u,e)},o.src=e.url.replace(RegExp("=\\?"),"="+r),t("head").append(o),e.timeout>0&&(a=setTimeout(function(){return l(u,e)},e.timeout)),u):console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")},p=function(t,e){t.status>=200&&t.status<300||0===t.status?e.async&&d(u(t,e),t,e):c("QuoJS.ajax: Unsuccesful request",t,e)},d=function(t,e,n){n.success.call(n.context,t,e)},c=function(t,e,n){n.error.call(n.context,t,e,n)},i=function(t,e){var n;e.contentType&&(e.headers["Content-Type"]=e.contentType),e.dataType&&(e.headers.Accept=a[e.dataType]);for(n in e.headers)t.setRequestHeader(n,e.headers[n])},l=function(t,e){t.onreadystatechange={},t.abort(),c("QuoJS.ajax: Timeout exceeded",t,e)},s=function(e,n,a,r,o){return t.ajax({type:e,url:n,data:a,success:r,dataType:o,contentType:"application/x-www-form-urlencoded"})},r=function(t){return RegExp("=\\?").test(t)},u=function(t,n){var a,r;if(r=t,t.responseText){if(n.dataType===e.MIME)try{r=JSON.parse(t.responseText)}catch(o){a=o,r=a,c("QuoJS.ajax: Parse Error",t,n)}"xml"===n.dataType&&(r=t.responseXML)}return r}}(Quo)}).call(this);