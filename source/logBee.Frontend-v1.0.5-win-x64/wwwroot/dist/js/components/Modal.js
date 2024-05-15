define(["logBee","jquery","bootstrap","Emitter"],function(n,i,s,e){let d=0;function r(t,e){var o={instance:t,eventType:e},s=Array.from(arguments).slice(2);s.unshift(o),t.events.emit(e,...s)}const l={build:"build",opened:"opened",close:"close",destroy:"destroy"},o={destroyOnClose:!0,openAfterBuild:!0};function t(t){this._options=i.extend(!0,{},o,t),this.events=new e.default,this.domId=null,this._bsModal=null}return t.prototype.load=function(t,e,o){const s=this;if(!t)throw new Error("url must be provided");i["post"===o?"post":"get"](t,e=e||{}).done(t=>{s._build(t)}).fail(function(t){n.showXhrErrorToast(t,!0),s.destroy()})},t.prototype.buildFromHtml=function(t){return this._build(t)},t.prototype._build=function(t){const e=this;!1===(t=!1===t.startsWith("<div")?t.substring(t.indexOf("<div")):t).endsWith("</div>")&&(t=t.substring(0,t.lastIndexOf("</div>")+"</div>".length));var t=i(t),t=(this.domId="modal_"+d++,t.attr("id",this.domId),t.css({"z-index":1055+d}),i("body").append(t),r(this,l.build),this.getElement()[0]),o=s.Modal.getOrCreateInstance(t,{backdrop:!1,keyboard:!1});this._bsModal=o,t.addEventListener("shown.bs.modal",function(t){r(e,l.opened)}),t.addEventListener("hidden.bs.modal",function(t){r(e,l.close),e._options.destroyOnClose&&e.destroy()}),this._options.openAfterBuild&&o.show()},t.prototype.getElement=function(){return i("#"+this.domId)},t.prototype.close=function(){this._bsModal.hide()},t.prototype.open=function(){this._bsModal.show()},t.prototype.destroy=function(){this._bsModal&&this._bsModal.dispose(),r(this,l.destroy),this.events.destroy(),this.getElement().remove()},t.EVENT_TYPES=l,t});