define(["logBee","js/templates","jquery","js/components/searchTable/SearchTable","js/components/searchTable/Column","js/components/searchTable/SortOperator","js/components/searchTable/FilterConstructor"],function(a,s,o,r,e,n,i){const l=[new e("tables-requests-columns-dateTime-template"),new e("tables-requests-columns-url-template"),new e("tables-requests-columns-statusCode-template"),new e("tables-requests-columns-logs-template"),new e("tables-requests-columns-user-template")],d={urlParams:function(){return{applicationId:""}},$container:o({}),isSelectable:!1,itemsPerPage:20,hasKeywordsSearch:!1};function t(e){const t=this;this._options=o.extend(!0,{},d,e),this._updateKeywordsFormOnQueryChanged=function(){var e=t,s=o("#keywordsInput_"+e._domId),a=(s.val(""),e.searchTable.getQuery().filter.getCriteria());for(let e=0,t=a.length;e<t;e++){var r=a[e];if(/^Keywords$/i.test(r.field)){s.val(r.value);break}}},e=s.requestsTable({hasKeywordsSearch:this._options.hasKeywordsSearch}),this._options.$container.append(e.html),this._domId=e.id,this.searchTable=new r({domId:e.id,url:"/Requests/SearchRequestLogs",urlParams:this._options.urlParams,columns:l,isSelectable:this._options.isSelectable,itemsPerPage:this._options.itemsPerPage}),this.searchTable.addColumnFilter({id:"date",columnName:"Date",field:"StartDateTime",fieldType:"number",placeholder:"2024-02-28T00:00:00Z"}),this.searchTable.addColumnFilter({id:"url",columnName:"Url",field:"Path",fieldType:"string"}),this.searchTable.addColumnFilter({id:"statusCode",columnName:"Status code",field:"HttpStatusCode",fieldType:"number"}),this.searchTable.events.on(r.EVENT_TYPES.afterDataSet,function(e){e.instance.getTable().find("[data-time-ago]").each(function(){a.timeAgoTag(o(this))})}),this._bindSearchKeywordsForm()}return t.prototype.getContainer=function(){return o("#"+this._domId)},t.prototype._bindSearchKeywordsForm=function(){const s=this;var e,t=this.getKeywordsForm();t.length&&(e=t.attr("id"),a.bindForm(e),t.data("validator").settings.submitHandler=function(e,t){return s._searchByKeywords(),!1},t.find("input").on("blur",function(){o(this).val().trim()||o.validator.defaults.unhighlight(this)}),this.searchTable.events.on("queryChanged",this._updateKeywordsFormOnQueryChanged))},t.prototype._searchByKeywords=function(){var e=o("#keywordsInput_"+this._domId).val().trim();if(e&&e.length){var t="searchForKeywordsForm_"+this._domId;const s=o("#"+t);a.toggleFormLoading(s,!0),this.searchTable.events.once("loadComplete",function(){a.toggleFormLoading(s,!1)});t=new i,e=(t.addOrUpdate(new i.Criterion("Keywords","Contains",e)),new n("StartDateTime","desc"));this.searchTable.applyFilter(t),this.searchTable.applySort(e)}},t.prototype.getKeywordsForm=function(){var e="searchForKeywordsForm_"+this._domId;return o("#"+e)},t.prototype.destroy=function(){this.searchTable.events.off("queryChanged",this._updateKeywordsFormOnQueryChanged),this.searchTable.destroy()},t});