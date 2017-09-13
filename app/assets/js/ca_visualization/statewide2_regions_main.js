var my_data = [
	{'2013':99, '2014':89, '2015':75, '2016':83, '2017':74, region: 'North Coast'},
  {'2013':110, '2014':96, '2015':73, '2016':82, '2017':83, region: 'SF Bay'},
  {'2013':110, '2014':96, '2015':75, '2016':79, '2017':81, region: 'Central Coast'},
  {'2013':125, '2014':120, '2015':92, '2016':101, '2017':98, region: 'South Coast'}, 
  {'2013':234, '2014':190, '2015':149, '2016':180, '2017':170, region: 'Sacramento River'}, 
  {'2013':217, '2014':195, '2015':132, '2016':151, '2017':145, region: 'San Joaquin Coast'}, 
  {'2013':226, '2014':206, '2015':164, '2016':186, '2017':183, region: 'Tulare Lake'}, 
  {'2013':145, '2014':134, '2015':104, '2016':127, '2017':128, region: 'North Lahontan'}, 
  {'2013':205, '2014':191, '2015':142, '2016':155, '2017':137, region: 'South Lahontan'}, 
  {'2013':260, '2014':246, '2015':178, '2016':197, '2017':212, region: 'Colorado River'},  
];

var chart = c3.generate({
	bindto: '#statewide2_regions_chart',
    data: {
        json: my_data,
        keys: {
            value: ['2013', '2014', '2015', '2016', '2017'],
        },
        type: 'bar',
    },
    axis: {
    	x: {
      	type: 'category',
        categories: ['North Coast','SF Bay','Central Coast','South Coast','Sacramento River', 'San Joaquin Coast','Tulare Lake','North Lahontan','South Lahontan','Colorado River'],
      },
      y:{
        label: 'gpcd'      	
      }
    },
    
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
    },

});