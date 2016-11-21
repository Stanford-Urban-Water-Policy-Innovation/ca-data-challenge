d3.json("https://api.myjson.com/bins/5cs76", function(remote_json){
//https://api.myjson.com/bins/4xs2q

  window.remote_json = remote_json;
  
  // crossfilter
  var cf = crossfilter(remote_json);
  
  // dimensions
  var supplier = cf.dimension(function(d){return d.supplier_name; });
 	var mandate = cf.dimension(function(d){return Math.ceil(d.mandate/0.05)*0.05*100; });
  var conservation = cf.dimension(function(d){return d.conservation_month_gal/325851000; });
  var date = cf.dimension(function(d){return d.date; });
  var rebound = cf.dimension(function(d){return d.conservation_diff_16; });

	// groups 
  var all = cf.groupAll();
  var mandate_group = mandate.group().reduceCount();
  var conservation_group = date.group().reduceSum(function(d){return d.conservation_month_gal/325851000; });
  var rebound_by_supplier = supplier.group().reduceSum(function(d){return d.conservation_diff_16/9*100; });

  // unique name extraction
   var supplier_name = _.chain(remote_json).pluck("supplier_name").uniq().value();
   var dates = _.chain(remote_json).pluck("date").uniq().value();

	// charts
  var suppliers_count = dc
  	.numberDisplay("#suppliers_count")
    .formatNumber(d3.format("d"))
    .valueAccessor(function(d){return d; })
    .group(all);  
  
	var mandate_chart = dc
  	.barChart("#mandate_chart")
    .width(300)
    .height(200)
    .dimension(mandate)
    .group(mandate_group)
    .yAxisLabel("number of suppliers")
    .x(d3.scale.linear().domain([0,60]))
    .xUnits(dc.units.fp.precision(5));

  var conservation_chart = dc
  	.barChart("#conservation_chart")
    .width(500)
    .height(200)
    .dimension(date)
    .group(conservation_group)
    .centerBar(true)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .elasticY(true)
    .yAxisLabel("Thousand AF")
    .margins({ top: 10, left: 30, right: 10, bottom: 100 })
		.renderlet(function (conservation_chart){conservation_chart.selectAll("g.x text").attr('dx', '-50').attr('transform', "rotate(-90)");});
    
  var rebound_chart = dc
  	.barChart("#rebound_chart")
    .width(1000)
    .height(300)
    .dimension(supplier)
    .group(rebound_by_supplier)
    .centerBar(true)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .y(d3.scale.linear().domain([-30,20]))
    .elasticY(true)
		.margins({ top: 10, left: 30, right: 10, bottom: 200 })
		.renderlet(function (rebound_chart) {rebound_chart.selectAll("g.x text").attr('dx', '-50').attr('transform', "rotate(-90)");});
    
  dc.renderAll();

     // reset button
  var showButton = function(){
    
    if(suppliers_count.filters().length > 0
      || mandate_chart.filters().length >0
      || conservation_chart.filters().length >0
      || rebound_chart.filters().length >0
				){
        d3.select("#dcjs_reset_btn")
        	.remove();
        d3.select("#dcjs_reset_btn_container")
          .append("button")
          .attr("id","dcjs_reset_btn")
          .attr("class","btn btn-primary")
          .text("Reset")
          .on("click", function(){
              suppliers_count.filter(null);
              mandate_chart.filter(null);
              conservation_chart.filter(null);
              rebound_chart.filter(null);
              dc.redrawAll();
          });
    
    } else {
        
    	d3.select("#dcjs_reset_btn")
    		.remove();
    }
	
  };

  suppliers_count.on('filtered', function(){showButton();});
  mandate_chart.on('filtered', function(){showButton();});
  conservation_chart.on('filtered', function(){showButton();});
  rebound_chart.on('filtered', function(){showButton();});
});     