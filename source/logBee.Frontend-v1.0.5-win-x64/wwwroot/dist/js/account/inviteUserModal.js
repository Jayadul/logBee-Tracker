define(["logBee","jquery","js/components/Modal"],function(e,t,i){const s="inviteUserModal",d={organizationId:"",onComplete:function(){}};let c=function(){};window.onSendInvitationComplete=function(n,o){e.toggleFormLoading(this,!1),"success"!==o&&e.showXhrErrorToast(n),"success"===o&&c.apply(this,[n.responseJSON,window[s]])};function n(n){(n=t.extend(!0,{},d,n)).onComplete&&(c=function(){n.onComplete.apply(this,arguments),c=function(){}});var o=new i;o.events.on(i.EVENT_TYPES.build,function(n){window[s]=n.instance,e.bindForm("invite-form")}),o.events.on(i.EVENT_TYPES.opened,function(n){n.instance.getElement().find("#EmailAddress").focus()}),o.events.on(i.EVENT_TYPES.destroy,function(n){delete window[s]}),o.load("/Account/InviteUserModal",{organizationId:n.organizationId})}return new function(){this.open=n}});