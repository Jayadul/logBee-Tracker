define(["logBee","jquery","js/components/Modal","js/components/tables/HttpReferrersSourceTable","js/components/tables/HttpReferrersDestinationTable"],function(s,t,n,i,r){function e(o){o=t.extend(!0,{},a,o);var e=new n;e.events.on(n.EVENT_TYPES.build,function(e){var e=e.instance,t=e.getElement(),n=s.htmlDecode(t.find("[data-model]").html()),n=JSON.parse(n),a=t.find("[data-httpReferrers-source-table-container]"),a=(a.length&&(e._sourcesTable=new i({$container:a,applicationId:o.applicationId,localItems:n.sources}),e._sourcesTable.searchTable._viewModel.formatSource=function(e){return e.httpReferer.host+"/"+e.httpReferer.localPath},e._sourcesTable.searchTable.reload()),t.find("[data-httpReferrers-destination-table-container]"));a.length&&(e._destinationsTable=new r({$container:a,applicationId:o.applicationId,localItems:n.destinations}),e._destinationsTable.searchTable.reload())}),e.events.on(n.EVENT_TYPES.destroy,function(e){e.instance._sourcesTable&&e.instance._sourcesTable.destroy(),e.instance._destinationsTable&&e.instance._destinationsTable.destroy()}),e.load("/Components/SiteReferrerModal",{applicationId:o.applicationId,host:o.host})}const a={applicationId:"",host:""};return new function(){this.open=e}});