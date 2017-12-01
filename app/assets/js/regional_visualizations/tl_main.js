d3.json("https://api.myjson.com/bins/ky64r", function(remote_json){

  window.remote_json = remote_json;
  
  // crossfilter
  var cf = crossfilter(remote_json);
  
  // dimensions
  var supplier = cf.dimension(function(d){return d.supplier_name; });
 	var mandate = cf.dimension(function(d){return Math.floor(d.mandate/5)*5; });
  var date = cf.dimension(function(d){return d.date; });
  var water_days = cf.dimension(function(d){return d.water_days; });
  var rebound = cf.dimension(function(d){return d.backslide; });

	// groups 
  var all = cf.groupAll();
  var mandate_group = mandate.group().reduce(
        /* callback for when data is added to the current filter results */
        function (p, v) {
            ++p.count;
            p.avg = (p.count / 9);
            return p;
        },
        /* callback for when data is removed from the current filter results */
        function (p, v) {
            --p.count;
            p.avg = (p.count / 9);
            return p;
        },
        /* initialize p */
        function () {
            return {
                count: 0,
                avg: 0,
            };
        }  
  );
  var conservation_group = date.group().reduce(
        /* callback for when data is added to the current filter results */
  		function(p,v){
  			p.conservation += v.conservation_month_gal;
  			p.ref += v.production_2013;
  			p.percent = d3.round((p.conservation / p.ref)*100,2);
  			return p; 
  		},
        /* callback for when data is removed from the current filter results */  		
  		function(p,v){
  			p.conservation -= v.conservation_month_gal;
  			p.ref -= v.production_2013;
  			p.percent = d3.round((p.conservation / p.ref)*100,2);
  			return p;
  		},
        /* initialize p */  		
  		function () {
  			return {
  				conservation: 0,
  				ref: 0,
  				percent: 0,
  			};
  		}
  );
  var water_days_group = date.group().reduce(
        /* callback for when data is added to the current filter results */
        function (p, v) {
            ++p.count;
            p.total += v.water_days;
            p.avg = d3.round((p.total / p.count),0);
            return p;
        },
        /* callback for when data is removed from the current filter results */
        function (p, v) {
            --p.count;
            p.total -= v.water_days;
            p.avg = d3.round((p.total / p.count),0);
            return p;
        },
        /* initialize p */
        function () {
            return {
                count: 0,
                total: 0,
                avg: 0,
            };
        }
    );
  var rebound_by_supplier = supplier.group().reduceSum(function(d){return d.backslide/9; });

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
    .valueAccessor(function(p) { return p.value.avg; })
    .yAxisLabel("number of suppliers")
    .xAxisLabel("(%)")
    .x(d3.scale.linear().domain([0,60]))
    .xUnits(dc.units.fp.precision(5))
    .elasticY(true);

  var conservation_chart = dc
  	.barChart("#conservation_chart")
    .width(500)
    .height(260)
    .dimension(date)
    .group(conservation_group)
    .valueAccessor(function(p) { return p.value.percent; })
    .centerBar(true)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .elasticY(true)
    .yAxisLabel("% wrt 2013")
    .margins({ top: 10, left: 50, right: 10, bottom: 100 })
		.renderlet(function (conservation_chart){conservation_chart.selectAll("g.x text").attr('dx', '-50').attr('dy', '-5').attr('transform', "rotate(-90)");});
    
	var water_days_chart = dc
		.barChart("#water_days_chart")
		.width(300)
		.height(260)
		.dimension(date)
		.group(water_days_group)
		.valueAccessor(function(p) { return p.value.avg; })
		.centerBar(true)
		.yAxisLabel("Avg. number of days")
		.x(d3.scale.ordinal())
		.xUnits(dc.units.ordinal)
		.elasticY(true)
    	.margins({ top: 10, left: 50, right: 10, bottom: 100 })
			.renderlet(function (conservation_chart){conservation_chart.selectAll("g.x text").attr('dx', '-50').attr('dy', '-5').attr('transform', "rotate(-90)");});		
		 
  var rebound_chart = dc
  	.barChart("#rebound_chart")
    .width(1000)
    .height(400)
    .dimension(supplier)
    .group(rebound_by_supplier)
    .centerBar(true)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .elasticY(true)
    .y(d3.scale.linear().domain([-30,20]))
		.margins({ top: 10, left: 30, right: 10, bottom: 260 })
		.renderlet(function (rebound_chart) {rebound_chart.selectAll("g.x text").attr('dx', '-130').attr('dy', '-5').attr('transform', "rotate(-90)");});
    
  dc.renderAll();

     // reset button
  var showButton = function(){
    
    if(suppliers_count.filters().length > 0
      || mandate_chart.filters().length >0
      || conservation_chart.filters().length >0
      || water_days_chart.filters().length >0
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
              water_days_chart.filter(null);
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
  water_days_chart.on('filtered', function(){showButton();});
  rebound_chart.on('filtered', function(){showButton();});
});         