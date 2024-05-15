define(["logBee","jquery","js/formatFileContent","beautifier","chart-js","luxon","js/chart-utils"],function(o,i,a,e,l,s,d){const c={domId:""},u=function(t){try{return e.js_beautify(t,{max_preserve_newlines:2})}catch(t){}return t};function t(t){this._options=i.extend(!0,{},c,t);var t=i("#"+this._options.domId),e=o.htmlDecode(t.find("[data-alert-model]").html()),e=JSON.parse(e);this._alertChart=function(t,e){for(var t=t.find("[data-alert-chart]"),n=[],r=0,o=e.intervals.length;r<o;r++)n.push(e.intervals[r].from);t=t[0].getContext("2d");return new l(t,{type:"line",options:{onResize:function(t,e){e=e.width;const r=600<=e?2:480<=e?3:4;t.options.scales.x.ticks.callback=function(t,e,n){return(t+1)%r!=0?null:(t=this.getLabelForValue(t),s.DateTime.fromISO(t).toFormat("dd-MM"))}},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{intersect:!1,mode:"index",callbacks:{title:function(t,e){t=t[0].label;return s.DateTime.fromISO(t).toFormat("dd MMMM")}}},verticalLiner:{lineWidth:3,color:"#282c34"}},scales:{y:{beginAtZero:!0,position:"right"},x:{ticks:{}}},elements:{point:{radius:0},line:{borderWidth:2}}},plugins:[d.verticalLinerPlugin],data:{labels:n,datasets:[{label:"Occurrences",fill:!0,backgroundColor:d.statusCode200BackgroundGradient(t,100),borderColor:d.statusCode200BorderColor(),data:e.intervals.map(function(t){return t.value})}]}})}(t,e.alertChartData);{const n=i("#"+(t=this)._options.domId).find("[data-formatted-javascript-code]"),r=(t=o.htmlDecode(n.html().trim()),u(t));a.highlightContent(r).then(t=>{t?n.html(t):n.html(r)})}}return t.prototype.destroy=function(){this._alertChart&&this._alertChart.destroy()},t});