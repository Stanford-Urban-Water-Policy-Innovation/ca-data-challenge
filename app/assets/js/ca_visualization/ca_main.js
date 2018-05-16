
// ------------------------------------------------------------------
// load data

//d3.json("https://api.myjson.com/bins/3fizm", function(remote_json){
d3.json("https://api.myjson.com/bins/sikgj", function(remote_json){
	
  window.remote_json = remote_json;
  
  // ------------------------------------------------------------------
  // init crossfilter

	var cf = crossfilter(remote_json);
  
  // ------------------------------------------------------------------
  // build dimensions
 
 	var region = cf.dimension(function(d){return d.hydrologic_region; });
 	var region2 = cf.dimension(function(d){return d.hydrologic_region; });
	var conservation_taf = cf.dimension(function(d){return d.conservation/325851000; });
  	var conservation_per = cf.dimension(function(d){return Math.ceil(d.percent /0.05) * 0.05 * 100; });

  // ------------------------------------------------------------------
  // build groups
  
  	var all = cf.groupAll();  
  	var region_suppliers_count = region2.group().reduceCount();
  	var conservation_taf_sum = region.group().reduceSum(function(d) {return d.conservation/325851000; }); 
  	var conservation_per_group = conservation_per.group();
  	
  // ------------------------------------------------------------------
  // unique name extraction

   	var region_names = _.chain(remote_json).pluck("hydrologic_region").uniq().value();
	
  // ------------------------------------------------------------------
  // build charts

	var suppliers_count = dc
		.numberDisplay("#suppliers_count")
	    .formatNumber(d3.format("d"))
	    .valueAccessor(function(d){return d; })
	    .group(all);
  
	var suppliers_chart = dc
  		.pieChart("#suppliers_chart")
		.width(300)
  		.height(300)
  		.radius(125)
  		.innerRadius(50)
    	.minAngleForLabel(0)
  		.dimension(region2)
  		.group(region_suppliers_count)   
  		.renderLabel(true);
    
  	var aggregate_chart = dc
  		.barChart("#aggregate_chart")
    	.width(300)
    	.height(250)
    	.dimension(region)
    	.group(conservation_taf_sum)
    	.x(d3.scaleOrdinal())
    	.xUnits(dc.units.ordinal)
    	.elasticY(true)
		.margins({ top: 10, left: 30, right: 10, bottom: 100 })
		.renderlet(function (aggregate_chart) {aggregate_chart.selectAll("g.x text").attr('dx', '-50').attr('dy', '-5').attr('transform', "rotate(-90)");});

	var percent_chart = dc
  		.barChart("#percent_chart")
    	.width(300)
    	.height(250)
    	.dimension(conservation_per)
    	.group(conservation_per_group)
    	.x(d3.scaleLinear().domain([0,60]))
    	.xUnits(dc.units.fp.precision(5))
    	.elasticY(true)
    	.yAxisLabel("number of suppliers")
    	.xAxisLabel("%");

   
  // ------------------------------------------------------------------
  // render everything
  
  	dc.renderAll();

  // ------------------------------------------------------------------
  // handle the reset button

  var showButton = function(){
    
    if(suppliers_count.filters().length > 0
    	|| suppliers_chart.filters().length >0
      || aggregate_chart.filters().length >0
      || percent_chart.filters().length >0
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
              suppliers_chart.filter(null);
              aggregate_chart.filter(null);
              percent_chart.filter(null);
              dc.redrawAll();
          });
    
    } else {
        
    	d3.select("#dcjs_reset_btn")
    		.remove();
    }
	
  };

  suppliers_count.on('filtered', function(){showButton();});
  suppliers_chart.on('filtered', function(){showButton();});
  aggregate_chart.on('filtered', function(){showButton();});
  percent_chart.on('filtered', function(){showButton();});
});