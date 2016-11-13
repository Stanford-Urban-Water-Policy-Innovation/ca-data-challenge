  // ------------------------------------------------------------------
  // load data

d3.json("data/conservation.json", function(conservation_data){
 
  // ------------------------------------------------------------------
  // init crossfilter

var cf = crossfilter(conservation_data);
  
  // ------------------------------------------------------------------
  // build dimensions

var region = cf.dimension(function(d){if (d.month == '2016-08-15') {return d.hydrologic_region; }});
var population = cf.dimension(function(d){if (d.month =='2016-08-15') {return Math.ceil(d.population /10000) * 10000; }});
var conservation_standard = cf.dimension(function(d){if (d.month =='2015-06-15') {return Math.ceil(d.conservation_standard /0.05) * 0.05 * 100; }});

  // ------------------------------------------------------------------
  // build groups
  
var all = cf.groupAll();
var region_suppliers_group = region.group().reduceCount();
var population_by_supplier = population.group().reduceCount(function(d) {return d.population; });
var conservation_standard_group = conservation_standard.group().reduceCount();   
  	
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
  
var regions_chart = dc
  	.pieChart("#regions_chart")
	.width(500)
  	.height(300)
  	.radius(125)
  	.innerRadius(50)
    .minAngleForLabel(0)
  	.dimension(region)
  	.group(region_suppliers_group)   
  	.renderLabel(true);
    
var population_chart = dc
  	.barChart("#population_chart")
    .width(500)
    .height(300)
    .dimension(population)
    .group(population_by_supplier)
    .x(d3.scale.linear().domain([0,1000000]))
    .xUnits(dc.units.fp.precision(10000))
    .xAxisLabel("population")
    .yAxisLabel("number of suppliers");

var conservation_standard_chart = dc
  	.barChart("#conservation_standard_chart")
    .width(250)
    .height(200)
    .dimension(conservation_standard)
    .group(conservation_standard_group)
    .x(d3.scale.linear().domain([0,40]))
    .xUnits(dc.units.fp.precision(5))
    .xAxisLabel("conservation standard (%)")
    .yAxisLabel("number of suppliers");  
   
  // ------------------------------------------------------------------
  // render everything
  
dc.renderAll();

  // ------------------------------------------------------------------
  // handle the reset button

var showButton = function(){
    
	if(regions_chart.filters().length > 0
      || population_chart.filters().length >0
      || conservation_standard_chart.filters().length >0
	){
    	d3.select("#dcjs_reset_btn")
        	.remove();
        d3.select("#dcjs_reset_btn_container")
          	.append("button")
        	.attr("id","dcjs_reset_btn")
          	.attr("class","btn btn-primary")
          	.text("Reset")
          	.on("click", function(){
              regions_chart.filter(null);
              population_chart.filter(null);
              conservation_standard_chart.filter(null);              
              dc.redrawAll();
          });
    
    } else {
        
    	d3.select("#dcjs_reset_btn")
    		.remove();
    }
	
  };

  regions_chart.on('filtered', function(){showButton();});
  population_chart.on('filtered', function(){showButton();});
  conservation_standard_chart.on('filtered', function(){showButton();});  
});