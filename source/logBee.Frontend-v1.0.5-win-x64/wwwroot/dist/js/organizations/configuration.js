define(["logBee","jquery","ko","chart-js","luxon"],function(i,l,e,s,d){window.onUpdateOrganizationPropertiesComplete=function(e,t){i.toggleFormLoading(this,!1),"success"!==t&&i.showXhrErrorToast(e),"success"===t&&i.showToast({body:"Properties have been updated",type:"success"})};return{init:function(t){i.bindForm("organization-properties-form");var e=i.htmlDecode(l("#page-model").html()),e=JSON.parse(e);if(e.organizationUsageChartData){for(var o=e.organizationUsageChartData,a=[],r=0,n=o.intervals.length;r<n;r++)a.push(o.intervals[r].from);e=document.getElementById("organizationUsageChart").getContext("2d");new s(e,{type:"bar",options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{intersect:!1,mode:"index",callbacks:{title:function(e,t){e=e[0].label;return""+d.DateTime.fromISO(e).toFormat("MMMM yyyy")}}}},scales:{y:{beginAtZero:!0},x:{ticks:{callback:function(e){e=this.getLabelForValue(e);return d.DateTime.fromISO(e).toFormat("MMM yy")}}}},elements:{point:{radius:0},line:{borderWidth:2}}},data:{labels:a,datasets:[{label:"Created",fill:!0,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgb(54, 162, 235)",data:o.intervals.map(function(e){return e.value.requestLogs.createdCount})},{label:"Throttled",fill:!0,backgroundColor:"rgb(253, 220, 142)",borderColor:"rgb(253, 220, 142)",data:o.intervals.map(function(e){return e.value.requestLogs.throttledCount})},{label:"Plan limit exceeded",fill:!0,backgroundColor:"rgb(255, 143, 0)",borderColor:"rgb(255, 143, 0)",data:o.intervals.map(function(e){return e.value.requestLogs.limitExceededCount})}]}})}l("#content").find("[data-time-ago]").each(function(){i.timeAgoTag(l(this))}),l("#content").on("click","[data-delete-organization]",function(e){e.preventDefault(),require(["js/account/deleteOrganizationModal"],function(e){e.open({organizationId:t})})}),l("#Name").focus()}}});