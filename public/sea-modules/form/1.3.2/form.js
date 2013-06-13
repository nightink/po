seajs.config({alias:{jquery:"jquery/1.8.2/jquery"}});
define(function(y){jQuery=y("jquery");(function(b){function s(a){var f=a.data;a.isDefaultPrevented()||(a.preventDefault(),b(this).ajaxSubmit(f))}function v(a){var f=a.target,g=b(f);if(!g.is(":submit,input:image")){f=g.closest(":submit");if(0===f.length)return;f=f[0]}var d=this;d.clk=f;"image"==f.type&&(void 0!==a.offsetX?(d.clk_x=a.offsetX,d.clk_y=a.offsetY):"function"==typeof b.fn.offset?(g=g.offset(),d.clk_x=a.pageX-g.left,d.clk_y=a.pageY-g.top):(d.clk_x=a.pageX-f.offsetLeft,d.clk_y=a.pageY-f.offsetTop));
setTimeout(function(){d.clk=d.clk_x=d.clk_y=null},100)}function p(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}var u,w;u=void 0!==b("<input type='file'/>").get(0).files;w=void 0!==window.FormData;b.fn.ajaxSubmit=function(a){function f(d){for(var c=new FormData,f=0;f<d.length;f++)c.append(d[f].name,d[f].value);if(a.extraData)for(var g in a.extraData)a.extraData.hasOwnProperty(g)&&
c.append(g,a.extraData[g]);a.data=null;d=b.extend(!0,{},b.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:"POST"});a.uploadProgress&&(d.xhr=function(){var b=jQuery.ajaxSettings.xhr();b.upload&&(b.upload.onprogress=function(b){var e=0,d=b.loaded||b.position,c=b.total;b.lengthComputable&&(e=Math.ceil(100*(d/c)));a.uploadProgress(b,d,c,e)});return b});d.data=null;var k=d.beforeSend;d.beforeSend=function(b,d){d.data=c;k&&k.call(d,b,a)};b.ajax(d)}function g(c){function f(){function a(){try{var b=
(o.contentWindow?o.contentWindow.document:o.contentDocument?o.contentDocument:o.document).readyState;p("state = "+b);b&&"uninitialized"==b.toLowerCase()&&setTimeout(a,50)}catch(c){p("Server abort: ",c," (",c.name,")"),g(u),x&&clearTimeout(x),x=void 0}}var c=k.attr("target"),h=k.attr("action");i.setAttribute("target",n);d||i.setAttribute("method","POST");h!=e.url&&i.setAttribute("action",e.url);!e.skipEncodingOverride&&(!d||/post/i.test(d))&&k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});
e.timeout&&(x=setTimeout(function(){s=!0;g(v)},e.timeout));var j=[];try{if(e.extraData)for(var l in e.extraData)e.extraData.hasOwnProperty(l)&&j.push(b('<input type="hidden" name="'+l+'">').attr("value",e.extraData[l]).appendTo(i)[0]);e.iframeTarget||(t.appendTo("body"),o.attachEvent?o.attachEvent("onload",g):o.addEventListener("load",g,!1));setTimeout(a,15);i.submit()}finally{i.setAttribute("action",h),c?i.setAttribute("target",c):k.removeAttr("target"),b(j).remove()}}function g(a){if(!h.aborted&&
!A){try{q=o.contentWindow?o.contentWindow.document:o.contentDocument?o.contentDocument:o.document}catch(c){p("cannot access response document: ",c),a=u}if(a===v&&h)h.abort("timeout");else if(a==u&&h)h.abort("server abort");else if(q&&q.location.href!=e.iframeSrc||s){o.detachEvent?o.detachEvent("onload",g):o.removeEventListener("load",g,!1);var a="success",d;try{if(s)throw"timeout";var f="xml"==e.dataType||q.XMLDocument||b.isXMLDoc(q);p("isXml="+f);if(!f&&window.opera&&(null===q.body||!q.body.innerHTML)&&
--y){p("requeing onLoad callback, DOM not available");setTimeout(g,250);return}var i=q.body?q.body:q.documentElement;h.responseText=i?i.innerHTML:null;h.responseXML=q.XMLDocument?q.XMLDocument:q;f&&(e.dataType="xml");h.getResponseHeader=function(a){return{"content-type":e.dataType}[a]};i&&(h.status=Number(i.getAttribute("status"))||h.status,h.statusText=i.getAttribute("statusText")||h.statusText);var j=(e.dataType||"").toLowerCase(),k=/(json|script|text)/.test(j);if(k||e.textarea){var m=q.getElementsByTagName("textarea")[0];
if(m)h.responseText=m.value,h.status=Number(m.getAttribute("status"))||h.status,h.statusText=m.getAttribute("statusText")||h.statusText;else if(k){var n=q.getElementsByTagName("pre")[0],r=q.getElementsByTagName("body")[0];n?h.responseText=n.textContent?n.textContent:n.innerText:r&&(h.responseText=r.textContent?r.textContent:r.innerText)}}else"xml"==j&&!h.responseXML&&h.responseText&&(h.responseXML=C(h.responseText));try{w=D(h,j,e)}catch(B){a="parsererror",h.error=d=B||a}}catch(z){p("error caught: ",
z),a="error",h.error=d=z||a}h.aborted&&(p("upload aborted"),a=null);h.status&&(a=200<=h.status&&300>h.status||304===h.status?"success":"error");"success"===a?(e.success&&e.success.call(e.context,w,"success",h),l&&b.event.trigger("ajaxSuccess",[h,e])):a&&(void 0===d&&(d=h.statusText),e.error&&e.error.call(e.context,h,a,d),l&&b.event.trigger("ajaxError",[h,e,d]));l&&b.event.trigger("ajaxComplete",[h,e]);l&&!--b.active&&b.event.trigger("ajaxStop");e.complete&&e.complete.call(e.context,h,a);A=!0;e.timeout&&
clearTimeout(x);setTimeout(function(){e.iframeTarget||t.remove();h.responseXML=null},100)}}}var i=k[0],j,e,l,n,t,o,h,r,s,x;r=!!b.fn.prop;if(b(":input[name=submit],:input[id=submit]",i).length)alert('Error: Form elements must not have name or id of "submit".');else{if(c)for(j=0;j<m.length;j++)c=b(m[j]),r?c.prop("disabled",!1):c.removeAttr("disabled");e=b.extend(!0,{},b.ajaxSettings,a);e.context=e.context||e;n="jqFormIO"+(new Date).getTime();e.iframeTarget?(t=b(e.iframeTarget),(c=t.attr("name"))?n=
c:t.attr("name",n)):(t=b('<iframe name="'+n+'" src="'+e.iframeSrc+'" />'),t.css({position:"absolute",top:"-1000px",left:"-1000px"}));o=t[0];h={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var c=a==="timeout"?"timeout":"aborted";p("aborting upload... "+c);this.aborted=1;t.attr("src",e.iframeSrc);h.error=c;e.error&&e.error.call(e.context,h,c,a);l&&b.event.trigger("ajaxError",
[h,e,c]);e.complete&&e.complete.call(e.context,h,c)}};(l=e.global)&&0===b.active++&&b.event.trigger("ajaxStart");l&&b.event.trigger("ajaxSend",[h,e]);if(e.beforeSend&&!1===e.beforeSend.call(e.context,h,e))e.global&&b.active--;else if(!h.aborted){if(r=i.clk)if((c=r.name)&&!r.disabled)e.extraData=e.extraData||{},e.extraData[c]=r.value,"image"==r.type&&(e.extraData[c+".x"]=i.clk_x,e.extraData[c+".y"]=i.clk_y);var v=1,u=2;r=b("meta[name=csrf-token]").attr("content");if((c=b("meta[name=csrf-param]").attr("content"))&&
r)e.extraData=e.extraData||{},e.extraData[c]=r;e.forceSync?f():setTimeout(f,10);var w,q,y=50,A,C=b.parseXML||function(a,b){if(window.ActiveXObject){b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a)}else b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&b.documentElement.nodeName!="parsererror"?b:null},E=b.parseJSON||function(a){return window.eval("("+a+")")},D=function(a,c,d){var e=a.getResponseHeader("content-type")||"",f=c==="xml"||!c&&e.indexOf("xml")>=
0,a=f?a.responseXML:a.responseText;f&&a.documentElement.nodeName==="parsererror"&&b.error&&b.error("parsererror");d&&d.dataFilter&&(a=d.dataFilter(a,c));typeof a==="string"&&(c==="json"||!c&&e.indexOf("json")>=0?a=E(a):(c==="script"||!c&&e.indexOf("javascript")>=0)&&b.globalEval(a));return a}}}}if(!this.length)return p("ajaxSubmit: skipping submit process - no element selected"),this;var d,c,k=this;"function"==typeof a&&(a={success:a});d=this.attr("method");c=this.attr("action");(c=(c="string"===
typeof c?b.trim(c):"")||window.location.href||"")&&(c=(c.match(/^([^#]+)/)||[])[1]);a=b.extend(!0,{url:c,success:b.ajaxSettings.success,type:d||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);c={};this.trigger("form-pre-serialize",[this,a,c]);if(c.veto)return p("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return p("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var l=
a.traditional;void 0===l&&(l=b.ajaxSettings.traditional);var m=[],i,j=this.formToArray(a.semantic,m);a.data&&(a.extraData=a.data,i=b.param(a.data,l));if(a.beforeSubmit&&!1===a.beforeSubmit(j,this,a))return p("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[j,this,a,c]);if(c.veto)return p("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;c=b.param(j,l);i&&(c=c?c+"&"+i:i);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":
"?")+c,a.data=null):a.data=c;var n=[];a.resetForm&&n.push(function(){k.resetForm()});a.clearForm&&n.push(function(){k.clearForm(a.includeHidden)});if(!a.dataType&&a.target){var s=a.success||function(){};n.push(function(c){var d=a.replaceTarget?"replaceWith":"html";b(a.target)[d](c).each(s,arguments)})}else a.success&&n.push(a.success);a.success=function(b,c,d){for(var f=a.context||a,g=0,e=n.length;g<e;g++)n[g].apply(f,[b,c,d||k,k])};i=0<b("input:file:enabled[value]",this).length;c="multipart/form-data"==
k.attr("enctype")||"multipart/form-data"==k.attr("encoding");l=u&&w;p("fileAPI :"+l);!1!==a.iframe&&(a.iframe||(i||c)&&!l)?a.closeKeepAlive?b.get(a.closeKeepAlive,function(){g(j)}):g(j):(i||c)&&l?f(j):b.ajax(a);for(i=0;i<m.length;i++)m[i]=null;this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){a=a||{};a.delegation=a.delegation&&b.isFunction(b.fn.on);if(!a.delegation&&0===this.length){var f=this.selector,g=this.context;if(!b.isReady&&f)return p("DOM not ready, queuing ajaxForm"),
b(function(){b(f,g).ajaxForm(a)}),this;p("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));return this}return a.delegation?(b(document).off("submit.form-plugin",this.selector,s).off("click.form-plugin",this.selector,v).on("submit.form-plugin",this.selector,a,s).on("click.form-plugin",this.selector,a,v),this):this.ajaxFormUnbind().bind("submit.form-plugin",a,s).bind("click.form-plugin",a,v)};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};
b.fn.formToArray=function(a,f){var g=[];if(0===this.length)return g;var d=this[0],c=a?d.getElementsByTagName("*"):d.elements;if(!c)return g;var k,l,m,i,j,n;k=0;for(n=c.length;k<n;k++)if(j=c[k],m=j.name)if(a&&d.clk&&"image"==j.type)!j.disabled&&d.clk==j&&(g.push({name:m,value:b(j).val(),type:j.type}),g.push({name:m+".x",value:d.clk_x},{name:m+".y",value:d.clk_y}));else if((i=b.fieldValue(j,!0))&&i.constructor==Array){f&&f.push(j);l=0;for(j=i.length;l<j;l++)g.push({name:m,value:i[l]})}else if(u&&"file"==
j.type&&!j.disabled){f&&f.push(j);i=j.files;for(l=0;l<i.length;l++)g.push({name:m,value:i[l],type:j.type})}else null!==i&&"undefined"!=typeof i&&(f&&f.push(j),g.push({name:m,value:i,type:j.type,required:j.required}));if(!a&&d.clk&&(c=b(d.clk),k=c[0],(m=k.name)&&!k.disabled&&"image"==k.type))g.push({name:m,value:c.val()}),g.push({name:m+".x",value:d.clk_x},{name:m+".y",value:d.clk_y});return g};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var f=
[];this.each(function(){var g=this.name;if(g){var d=b.fieldValue(this,a);if(d&&d.constructor==Array)for(var c=0,k=d.length;c<k;c++)f.push({name:g,value:d[c]});else null!==d&&"undefined"!=typeof d&&f.push({name:this.name,value:d})}});return b.param(f)};b.fn.fieldValue=function(a){for(var f=[],g=0,d=this.length;g<d;g++){var c=b.fieldValue(this[g],a);null===c||"undefined"==typeof c||c.constructor==Array&&!c.length||(c.constructor==Array?b.merge(f,c):f.push(c))}return f};b.fieldValue=function(a,f){var g=
a.name,d=a.type,c=a.tagName.toLowerCase();void 0===f&&(f=!0);if(f&&(!g||a.disabled||"reset"==d||"button"==d||("checkbox"==d||"radio"==d)&&!a.checked||("submit"==d||"image"==d)&&a.form&&a.form.clk!=a||"select"==c&&-1==a.selectedIndex))return null;if("select"==c){var k=a.selectedIndex;if(0>k)return null;for(var g=[],c=a.options,l=(d="select-one"==d)?k+1:c.length,k=d?k:0;k<l;k++){var m=c[k];if(m.selected){var i=m.value;i||(i=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value);
if(d)return i;g.push(i)}}return g}return b(a).val()};b.fn.clearForm=function(a){return this.each(function(){b("input,select,textarea",this).clearFields(a)})};b.fn.clearFields=b.fn.clearInputs=function(a){var f=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var g=this.type,d=this.tagName.toLowerCase();if(f.test(g)||"textarea"==d)this.value="";else if("checkbox"==g||"radio"==g)this.checked=!1;else if("select"==d)this.selectedIndex=
-1;else if(a&&(!0===a&&/hidden/.test(g)||"string"==typeof a&&b(this).is(a)))this.value=""})};b.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};b.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};b.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var f=this.type;"checkbox"==f||"radio"==f?this.checked=a:"option"==this.tagName.toLowerCase()&&
(f=b(this).parent("select"),a&&f[0]&&"select-one"==f[0].type&&f.find("option").selected(!1),this.selected=a)})};b.fn.ajaxSubmit.debug=!1})(jQuery)});
