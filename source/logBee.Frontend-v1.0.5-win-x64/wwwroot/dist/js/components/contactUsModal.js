define(["logBee","jquery","js/components/Modal","js/codemirror"],function(s,a,n,i){function e(o){(o=a.extend(!0,{},t,o)).message=o.message||t.message;var e=new n;e.events.on(n.EVENT_TYPES.build,function(e){window[r]=e.instance;const t=e.instance;var e=e.instance.getElement(),n=(s.bindForm("contact-us-form"),s.reCaptcha.bindForm("#contact-us-form"),a("#contact-us-form").data("validator").settings.submitHandler=function(e,n){e=a(e);return t._editor.save(),s.toggleFormLoading(e,!0),!0},e.find("#EmailAddress")),n=(o.emailAddress&&n.val(o.emailAddress),e.find("#Message"));n.val(o.message),t._editor=i.fromTextArea(n[0],{mode:null,viewportMargin:1/0}),n.parent().children(".CodeMirror").css({height:"auto","font-family":"var(--falcon-body-font-family)"})}),e.events.on(n.EVENT_TYPES.opened,function(e){window[r]=e.instance;var n=e.instance,e=e.instance.getElement(),t=(n._editor.refresh(),0<e.find("#EmailAddress").val().trim().length);(t?n._editor:e.find("#EmailAddress")).focus()}),e.events.on(n.EVENT_TYPES.destroy,function(e){delete window[r],e.instance._editor.toTextArea()}),e.load("/Components/ContactUsModal")}const r="contactUsModal",t=(window.onContactUsComplete=function(e,n){s.toggleFormLoading(this,!1),"success"!==n&&s.showXhrErrorToast(e),"success"===n&&(n=window[r])&&n.getElement().find("[data-container]").html(e.responseText)},{emailAddress:null,message:["Hello,","","",""].join("\n")});return new function(){this.open=e}});