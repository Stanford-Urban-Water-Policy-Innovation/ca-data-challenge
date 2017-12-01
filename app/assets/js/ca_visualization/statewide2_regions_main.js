var my_data = [
	{'2013':99, '2014':89, '2015':75, '2016':83, '2017':81, region: 'North Coast'},
  {'2013':110, '2014':96, '2015':73, '2016':82, '2017':87, region: 'SF Bay'},
  {'2013':110, '2014':96, '2015':75, '2016':80, '2017':84, region: 'Central Coast'},
  {'2013':125, '2014':121, '2015':92, '2016':101, '2017':105, region: 'South Coast'}, 
  {'2013':231, '2014':187, '2015':148, '2016':179, '2017':191, region: 'Sacramento River'}, 
  {'2013':216, '2014':192, '2015':132, '2016':151, '2017':158, region: 'San Joaquin River'}, 
  {'2013':226, '2014':205, '2015':164, '2016':186, '2017':196, region: 'Tulare Lake'}, 
  {'2013':159, '2014':150, '2015':118, '2016':144, '2017':146, region: 'North Lahontan'}, 
  {'2013':205, '2014':191, '2015':142, '2016':155, '2017':155, region: 'South Lahontan'}, 
  {'2013':260, '2014':246, '2015':177, '2016':196, '2017':219, region: 'Colorado River'},  
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