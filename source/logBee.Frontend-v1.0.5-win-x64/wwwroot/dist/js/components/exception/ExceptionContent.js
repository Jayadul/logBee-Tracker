define(["jquery","logBee","ko","chart-js","luxon","js/chart-utils","numeral"],function(i,o,n,a,r,s,t){const l={domId:""};function e(t){this._options=i.extend(!0,{},l,t);var t=i("#"+this._options.domId),e=o.htmlDecode(t.find("[data-model]").html());(e=JSON.parse(e)).exception.requestLog.applicationId=e.exception.applicationId,this._viewModel={exception:e.exception},n.applyBindings(this._viewModel,t[0]),this._exceptionChart=function(t,e){for(var t=t.find("[data-exception-chart]"),i=[],o=0,n=e.intervals.length;o<n;o++)i.push(e.intervals[o].from);t=t[0].getContext("2d");return new a(t,{type:"line",options:{onResize:function(t,e){e=e.width;const o=600<=e?2:480<=e?3:4;t.options.scales.x.ticks.callback=function(t,e,i){return(t+1)%o!=0?null:(t=this.getLabelForValue(t),r.DateTime.fromISO(t).toFormat("dd-MM"))}},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{intersect:!1,mode:"index",callbacks:{title:function(t,e){t=t[0].label;return r.DateTime.fromISO(t).toFormat("dd MMMM")}}},verticalLiner:{lineWidth:3,color:"#282c34"}},scales:{y:{beginAtZero:!0,position:"right"},x:{ticks:{}}},elements:{point:{radius:0},line:{borderWidth:2}}},plugins:[s.verticalLinerPlugin],data:{labels:i,datasets:[{label:"Occurrences",fill:!0,backgroundColor:s.statusCode500BackgroundGradient(t,100),borderColor:s.statusCode500BorderColor(),data:e.intervals.map(function(t){return t.value})}]}})}(t,e.exceptionChartData),t.find("[data-time-ago]").each(function(){o.timeAgoTag(i(this))}),t.find("[data-numeral]").each(function(){o.formatNumeralTag(i(this))}),t.find(".container-fluid").each(function(){i(this).children(".row").each(function(t,e){t%2==0&&i(this).addClass("bg-200")})})}return e.prototype.destroy=function(){var t=i("#"+this._options.domId);this._exceptionChart&&this._exceptionChart.destroy(),n.disposeKoViewModel(this._viewModel,t)},e});