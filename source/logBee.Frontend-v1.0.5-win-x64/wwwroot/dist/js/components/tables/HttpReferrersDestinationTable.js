define(["logBee","js/templates","jquery","js/components/searchTable/SearchTable","js/components/searchTable/Column"],function(t,n,s,a,e){const o=[new e("tables-httpReferrers-destination-columns-path-template"),new e("tables-httpReferrers-destination-columns-visits-template"),new e("tables-httpReferrers-destination-columns-lastSeen-template")],i={applicationId:"",templateName:"tables-httpReferrers-destination-table",$container:s({}),itemsPerPage:10,localItems:[]};function r(e){this._options=s.extend(!0,{},i,e),e=n.renderTemplate(this._options.templateName),this._options.$container.append(e.html),this._domId=e.id,this.searchTable=new a({domId:e.id,columns:o,itemsPerPage:this._options.itemsPerPage,localItems:this._options.localItems}),this.searchTable.events.on(a.EVENT_TYPES.afterDataSet,function(e){e.instance.getTable().find("[data-time-ago]").each(function(){t.timeAgoTag(s(this))})})}return r.prototype.getContainer=function(){return s("#"+this._domId)},r.prototype.destroy=function(){this.searchTable.destroy()},r});