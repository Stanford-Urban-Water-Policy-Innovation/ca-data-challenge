var my_data = [
	{'2013':97, '2014':87, '2015':74, '2016':83, region: 'North Coast'},
  {'2013':109, '2014':95, '2015':73, '2016':83, region: 'SF Bay'},
  {'2013':109, '2014':95, '2015':75, '2016':80, region: 'Central Coast'},
  {'2013':124, '2014':119, '2015':92, '2016':101, region: 'South Coast'}, 
  {'2013':226, '2014':184, '2015':146, '2016':179, region: 'Sacramento River'}, 
  {'2013':212, '2014':189, '2015':132, '2016':151, region: 'San Joaquin Coast'}, 
  {'2013':217, '2014':197, '2015':162, '2016':186, region: 'Tulare Lake'}, 
  {'2013':149, '2014':137, '2015':105, '2016':127, region: 'North Lahontan'}, 
  {'2013':201, '2014':187, '2015':141, '2016':157, region: 'South Lahontan'}, 
  {'2013':245, '2014':230, '2015':173, '2016':190, region: 'Colorado River'},  
];

var chart = c3.generate({
	bindto: '#statewide2_regions_chart',
    data: {
        json: my_data,
        keys: {
            value: ['2013', '2014', '2015', '2016'],
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