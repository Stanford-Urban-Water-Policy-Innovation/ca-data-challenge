// C3 init

var chart = c3.generate({
	bindto: "#google_chart",
    data: {
        x: 'x',
       	xFormat: '%m/%d/%y', 
        columns: [
['x','1/1/12','1/8/12','1/15/12','1/22/12','1/29/12','2/5/12','2/12/12','2/19/12','2/26/12','3/4/12','3/11/12','3/18/12','3/25/12','4/1/12','4/8/12','4/15/12','4/22/12','4/29/12','5/6/12','5/13/12','5/20/12','5/27/12','6/3/12','6/10/12','6/17/12','6/24/12','7/1/12','7/8/12','7/15/12','7/22/12','7/29/12','8/5/12','8/12/12','8/19/12','8/26/12','9/2/12','9/9/12','9/16/12','9/23/12','9/30/12','10/7/12','10/14/12','10/21/12','10/28/12','11/4/12','11/11/12','11/18/12','11/25/12','12/2/12','12/9/12','12/16/12','12/23/12','12/30/12','1/6/13','1/13/13','1/20/13','1/27/13','2/3/13','2/10/13','2/17/13','2/24/13','3/3/13','3/10/13','3/17/13','3/24/13','3/31/13','4/7/13','4/14/13','4/21/13','4/28/13','5/5/13','5/12/13','5/19/13','5/26/13','6/2/13','6/9/13','6/16/13','6/23/13','6/30/13','7/7/13','7/14/13','7/21/13','7/28/13','8/4/13','8/11/13','8/18/13','8/25/13','9/1/13','9/8/13','9/15/13','9/22/13','9/29/13','10/6/13','10/13/13','10/20/13','10/27/13','11/3/13','11/10/13','11/17/13','11/24/13','12/1/13','12/8/13','12/15/13','12/22/13','12/29/13','1/5/14','1/12/14','1/19/14','1/26/14','2/2/14','2/9/14','2/16/14','2/23/14','3/2/14','3/9/14','3/16/14','3/23/14','3/30/14','4/6/14','4/13/14','4/20/14','4/27/14','5/4/14','5/11/14','5/18/14','5/25/14','6/1/14','6/8/14','6/15/14','6/22/14','6/29/14','7/6/14','7/13/14','7/20/14','7/27/14','8/3/14','8/10/14','8/17/14','8/24/14','8/31/14','9/7/14','9/14/14','9/21/14','9/28/14','10/5/14','10/12/14','10/19/14','10/26/14','11/2/14','11/9/14','11/16/14','11/23/14','11/30/14','12/7/14','12/14/14','12/21/14','12/28/14','1/4/15','1/11/15','1/18/15','1/25/15','2/1/15','2/8/15','2/15/15','2/22/15','3/1/15','3/8/15','3/15/15','3/22/15','3/29/15','4/5/15','4/12/15','4/19/15','4/26/15','5/3/15','5/10/15','5/17/15','5/24/15','5/31/15','6/7/15','6/14/15','6/21/15','6/28/15','7/5/15','7/12/15','7/19/15','7/26/15','8/2/15','8/9/15','8/16/15','8/23/15','8/30/15','9/6/15','9/13/15','9/20/15','9/27/15','10/4/15','10/11/15','10/18/15','10/25/15','11/1/15','11/8/15','11/15/15','11/22/15','11/29/15','12/6/15','12/13/15','12/20/15','12/27/15','1/3/16','1/10/16','1/17/16','1/24/16','1/31/16','2/7/16','2/14/16','2/21/16','2/28/16','3/6/16','3/13/16','3/20/16','3/27/16','4/3/16','4/10/16','4/17/16','4/24/16','5/1/16','5/8/16','5/15/16','5/22/16','5/29/16','6/5/16','6/12/16','6/19/16','6/26/16','7/3/16','7/10/16','7/17/16','7/24/16','7/31/16','8/7/16','8/14/16','8/21/16','8/28/16','9/4/16','9/11/16','9/18/16','9/25/16','10/2/16','10/9/16','10/16/16','10/23/16','10/30/16','11/6/16','11/13/16','11/20/16','11/27/16'
], 		['Searches',4,4,2,2,3,2,1,3,3,3,3,2,1,3,3,2,1,3,1,2,2,1,2,1,2,2,1,2,2,3,2,2,2,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,3,2,2,2,1,2,3,2,2,1,2,1,2,2,1,2,1,2,1,1,2,1,1,1,2,1,1,2,1,2,1,2,2,2,3,2,1,2,3,5,9,14,19,71,89,67,62,49,40,61,45,20,16,20,35,14,12,15,17,17,19,19,16,15,12,12,12,11,17,36,29,38,32,29,89,69,51,44,42,32,33,36,26,30,24,22,18,26,13,67,66,62,13,13,11,18,16,21,21,25,21,18,26,25,65,46,94,100,63,65,60,61,72,56,51,48,43,39,38,37,37,38,42,28,29,31,29,29,29,32,32,30,31,33,29,25,23,24,22,21,13,24,24,20,28,21,60,30,52,22,26,21,24,20,21,56,47,27,19,19,27,24,19,25,21,15,19,19,10,8,10,12,11,9,10,11,9,9,10,13,15,9,11,14,13,10,11,13,14,14,10,16,13,28],         
        ],
        colors: {
            'Searches': '#009688'
        },
      //type: 'point',
    	selection: {
      		enabled: true
  },
      axes: {
    			Searches:'y'
      }
    },
    point: {
        show: false
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%b %y',
                values: ['1/1/12', '7/1/12','1/6/13','7/7/13', '1/5/14','7/6/14','1/4/15', '7/5/15','1/3/16','7/3/16']
                }
            },
        y: {
        		label: 'Relative Number of Google Searches',
            position: 'outer-center'
        },
    },
    grid: {
    	x: {
      "show": false
    },
    y: {
      "show": true
    }}
});   

// slides

var slide_0 = function() {
  document.getElementById("message4").innerHTML = "As water conservation in California has changed over the past few years, has public interest in the drought changed as well?";
};

var slide_1= function() {
  document.getElementById("message4").innerHTML = "To investigate this relationship, we examine the relative number of weekly Google searches for the term 'California drought' within the state of California from January 2012 to December 2016"
};

var slide_2= function() {
  document.getElementById("message4").innerHTML = "By examining the magnitude of searches during this time period, we see some interesting patterns."
};

var slide_3 = function() {
 chart.regions([{
   start: '1/5/14'
  }]);
  document.getElementById("message4").innerHTML = "First, although the drought started in 2012, extensive interest didn't begin until 2014.";
};

var slide_4 = function() {
	chart.regions([]);
  document.getElementById("message4").innerHTML = "During this time period, the three weeks when Californians were most interested in the drought occurred during distinct political actions in 2014 and 2015";
};

var slide_5 = function() {
  chart.select(["Searches"], [107]);
  document.getElementById("message4").innerHTML = "First, in January 2014 when Governor Jerry Brown declared a drought Sate of Emergency.";
};

var slide_6 = function() {
  chart.unselect();
};

var slide_7 = function() {
  chart.select(["Searches"], [137]);
  document.getElementById("message4").innerHTML = "Second, in early August 2014 after the State Water Board enacted an emergency regulation targeting oudoor urban water use in an effort to increase conservation practices for all Californians.";
};

var slide_8 = function() {
  chart.unselect();
};

var slide_9 = function() {
  chart.select(["Searches"], [170]);
  document.getElementById("message4").innerHTML = "And third, the largest volume of Google searches occurred in April 2015 when Governor Brown declared the first ever madatory statewide water conservation restrictions.";
};

var slide_10 = function() {
  chart.unselect();
  document.getElementById("message4").innerHTML = "This shows that the public was aware of and interested in state-level  drought-related political actions.";
};

var slide_11 = function() {
 chart.regions([
   {start: '6/1/14', end:'8/31/14'},
   {start: '6/7/15', end: '8/30/15'},
   {start: '6/5/16', end:'8/28/16'}
  ]);
  chart.axis.range({
  min: {
    x: '6/1/14',
  },
  max: {
    x: '8/28/16',
  },
});
  document.getElementById("message4").innerHTML = "Next, we examine Google searches during the summers of 2014, 2015, and 2016 to see how public interest levels match water conservation levels.";
};

var slide_12 = function() {
	chart.select(["Searches"], [132, 185, 237]);
  document.getElementById("message4").innerHTML = "Of the three summers, public interest was highest in the summer of 2015, the same summer that the highest levels of conservation were achieved. Public interest was lowest in the summer of 2016, matching the conservation backslide patterns shown by water use data.";
};

var slide_13 = function() {
  chart.unselect();
};

var slide_14 = function() {
  chart.regions([]);
  chart.axis.range({
  min: {
    x: '1/1/12',
  },
  max: {
    x: '11/27/16',
  }
  });
  document.getElementById("message4").innerHTML = "This visualization provides two novel insights into water conservation behavior: (1) High-level political actions have the potential to engage the public and (2) This increased public interest is related to increased water conservation.";
};

var slides = [slide_0, slide_1, slide_2, slide_3, slide_4, slide_5, slide_6, slide_7, slide_8, slide_9, slide_10, slide_11, slide_12, slide_13, slide_14];

// cycle through slides

var current_slide = 0;

var run = function() {
  slides[current_slide]();
  current_slide += 1;

  if (current_slide === 1) {
    document.getElementById("start_btn2").innerHTML = "Start";
  } else if (current_slide === slides.length) {
    current_slide = 0;
    document.getElementById("start_btn2").innerHTML = "Replay";
  } else {
    document.getElementById("start_btn2").innerHTML = "Continue";
  }
};

// button event handler

document.getElementById('start_btn2').addEventListener("click", run);

// init

run();