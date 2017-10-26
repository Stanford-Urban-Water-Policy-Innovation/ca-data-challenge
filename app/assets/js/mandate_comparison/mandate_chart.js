// ------------------------------------------------------------------
// load data

d3.json("https://api.myjson.com/bins/fcnkl", function(remote_json){
	
  window.remote_json = remote_json;
  
// ------------------------------------------------------------------
  	// set the stage
	var margin = {t:30, r:20, b:20, l:40 },
		w = 600 - margin.l - margin.r,
		h = 500 - margin.t - margin.b,
		x = d3.scale.linear().range([0, w]),
		y = d3.scale.linear().range([h - 60, 0]),
		//colors that will reflect geographical regions
		color = d3.scale.category10();

	var svg = d3.select("#chart11").append("svg")
		.attr("width", w + margin.l + margin.r)
		.attr("height", h + margin.t + margin.b);

	// set axes, as well as details on their ticks
	var xAxis = d3.svg.axis()
		.scale(x)
		.ticks(20)
		.tickSubdivide(true)
		.tickSize(6, 3, 0)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.ticks(20)
		.tickSubdivide(true)
		.tickSize(6, 3, 0)
		.orient("left");

	// group that will contain all of the plots
	var groups = svg.append("g").attr("transform", "translate(" + margin.l + "," + margin.t + ")");

	// array of the regions, used for the legend

  var dropDown = d3.select("#filter11").append("select")
                    .attr("name", "country-list");


// ------------------------------------------------------------------
// bring in the data, and do everything that is data-driven

	// sort data alphabetically by region, so that the colors match with legend
	remote_json.sort(function(a, b) { return d3.ascending(a.supplier_name, b.supplier_name); })
	console.log(remote_json)

	var x0 = Math.max(-d3.min(remote_json, function(d) { return d.conservation_standard; }), d3.max(remote_json, function(d) { return d.conservation_standard; }));
	x.domain([0, 60]);
	y.domain([0, 60])

	// style the circles, set their locations based on data
	var circles =
	groups.selectAll("circle")
		.data(remote_json)
	  .enter().append("circle")
	  .attr("class", "circles")
	  .attr({
	    cx: function(d) { return x(+d.conservation_standard); },
	    cy: function(d) { return y(+d.conservation_percent_15); },
	    r: 5,
	    id: function(d) { return d.supplier_name; }
	  })
		.style("fill", function(d) { return color(d.region); });

	var options = dropDown.selectAll("option")
           	.data([{supplier_name:"All"}].concat(remote_json))
         	.enter()
           	.append("option");

	options.text(function (d) { return d.supplier_name; })
       	.attr("value", function (d) { return d.supplier_name; });
       
	// what to do when we mouse over a bubble
	var mouseOn = function() { 
		var circle = d3.select(this);

	// transition to increase size/opacity of bubble
		circle.transition()
		.duration(800).style("opacity", 1)
		.attr("r", 16).ease("elastic");

		// append lines to bubbles that will be used to show the precise data points.
		// translate their location based on margins
		svg.append("g")
			.attr("class", "guide")
		.append("line")
			.attr("x1", circle.attr("cx"))
			.attr("x2", circle.attr("cx"))
			.attr("y1", +circle.attr("cy") + 26)
			.attr("y2", h - margin.t - margin.b)
			.attr("transform", "translate(40,20)")
			.style("stroke", circle.style("fill"))
			.transition().delay(200).duration(400).styleTween("opacity", 
						function() { return d3.interpolate(0, .5); })

		svg.append("g")
			.attr("class", "guide")
		.append("line")
			.attr("x1", +circle.attr("cx") - 16)
			.attr("x2", 0)
			.attr("y1", circle.attr("cy"))
			.attr("y2", circle.attr("cy"))
			.attr("transform", "translate(40,30)")
			.style("stroke", circle.style("fill"))
			.transition().delay(200).duration(400).styleTween("opacity", 
						function() { return d3.interpolate(0, .5); });

	// function to move mouseover item to front of SVG stage, in case
	// another bubble overlaps it
		d3.selection.prototype.moveToFront = function() { 
		  return this.each(function() { 
			this.parentNode.appendChild(this); 
		  }); 
		};

	// skip this functionality for IE9, which doesn't like it
		if (!$.browser.msie) {
			circle.moveToFront();	
			}
	};
	// what happens when we leave a bubble?
	var mouseOff = function() {
		var circle = d3.select(this);

		// go back to original size and opacity
		circle.transition()
		.duration(800).style("opacity", .5)
		.attr("r", 8).ease("elastic");

		// fade out guide lines, then remove them
		d3.selectAll(".guide").transition().duration(100).styleTween("opacity", 
						function() { return d3.interpolate(.5, 0); })
			.remove()
	};

	// run the mouseon/out functions
	circles.on("mouseover", mouseOn);
	circles.on("mouseout", mouseOff);

	// tooltips (using jQuery plugin tipsy)
	circles.append("title")
			.text(function(d) { return d.supplier_name; })

	$(".circles").tipsy({ gravity: 's', });


	// draw axes and axis labels
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(" + margin.l + "," + (h - 60 + margin.t) + ")")
		.call(xAxis);

	svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" + margin.l + "," + margin.t + ")")
		.call(yAxis);

	svg.append("text")
		.attr("class", "x label")
		.attr("text-anchor", "end")
		.attr("x", w + 50)
		.attr("y", h - margin.t - 5)
		.text("Conservation mandate (%)");

	svg.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("x", -20)
		.attr("y", 45)
		.attr("dy", ".75em")
		.attr("transform", "rotate(-90)")
		.text("Conservation in summer 2015 (%)");
		
		
	dropDown.on("change", function() {
      var selected = this.value;
      displayOthers = this.checked ? "inline" : "none";
      display = this.checked ? "none" : "inline";

      if(selected == 'All'){
        svg.selectAll(".circles")
            .attr("display", display);
      }
      else{
        svg.selectAll(".circles")
            .filter(function(d) {return selected != d.supplier_name;})
            .attr("display", displayOthers);
            
        svg.selectAll(".circles")
            .filter(function(d) {return selected == d.supplier_name;})
            .attr("display", display);
      }
  });
});