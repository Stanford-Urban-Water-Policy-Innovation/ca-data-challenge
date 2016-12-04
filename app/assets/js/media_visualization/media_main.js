// C3 init

var media_chart = c3.generate({
	bindto:"#media_chart",
    data: {
        x: 'x',
       	xFormat: '%m/%d/%Y', 
        columns: [
['x','7/1/2012','8/1/2012','9/1/2012','10/1/2012','11/1/2012','12/1/2012','1/1/2013','2/1/2013','3/1/2013','4/1/2013','5/1/2013','6/1/2013','7/1/2013','8/1/2013','9/1/2013','10/1/2013','11/1/2013','12/1/2013','1/1/2014','2/1/2014','3/1/2014','4/1/2014','5/1/2014','6/1/2014','7/1/2014','8/1/2014','9/1/2014','10/1/2014','11/1/2014','12/1/2014','1/1/2015','2/1/2015','3/1/2015','4/1/2015','5/1/2015','6/1/2015'], 		['Articles2',21,31,12,17,10,7,10,18,16,13,13,13,21,33,14,13,17,24,121,160,135,139,156,129,224,202,204,162,152,244,46,57,87,252,171,163],         
        ],
      //type: 'point',
    	selection: {
      		enabled: true
  },
      axes: {
    			Articles2:'y',
      		Searches2:'y2'
      }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%b %Y',
                values: ['1/1/2013', '1/1/2014','1/1/2015']
                }
            },
        y: {
        		label: 'Monthly Volume of Newspaper Articles from 8 Sources',
            position: 'outer-center'
        },
        y2: {
            show: true,
            position: 'outer-center',
            label: 'Relative Number of Google Searches',
        }
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
  document.getElementById("message3").innerHTML = "Since 2012, California has been experiencing a severe drought.";
};

var slide_1 = function() {
  media_chart.focus("Articles2");
  document.getElementById("message3").innerHTML = "The news media has been covering this hydrological phenomena in an unprecedented way, publishing a high volume of newspaper articles about the California drought in local and national new outlets.";
};

var slide_2 = function() {
 media_chart.regions([{
   start: '1/1/2014'
  }]);
  document.getElementById("message3").innerHTML = "Although the drought started in 2012, extensive media coverage didn't begin until 2014.";
};

var slide_3= function() {
  document.getElementById("message3").innerHTML = "At the same time, the public has become more aware of the drought and its implications."
};

var slide_4 = function() {
  media_chart.load({
    columns: [ ['Searches2',2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2,3,6,68,66,34,23,21,15,34,70,50,37,26,61,21,27,49,100,70,50]
    ],
    });
    document.getElementById("message3").innerHTML = "We make this connection by finding that the relative number of Google searches for the term 'California Drought' is highly correlated to the volume of news media coverage.";
};

var slide_5 = function() {
  media_chart.revert();
};


var slide_6 = function() {
	media_chart.regions([]);
  document.getElementById("message3").innerHTML = "There have been four distinct months when news media volume was highest, and these times correspond to specific events.";
};

var slide_7 = function() {
  media_chart.select(["Articles2"], [18]);
  media_chart.select(["Searches2"], [18]);
  document.getElementById("message3").innerHTML = "Such as when Governor Jerry Brown declared a drought Sate of Emergency in January 2014.";
};

var slide_8 = function() {
  media_chart.unselect();
};

var slide_9 = function() {
  media_chart.select(["Articles2"], [24, 25]);
  media_chart.select(["Searches2"], [24, 25]);
  document.getElementById("message3").innerHTML = "Or in late July/early August 2014 when the State Water Board enacted an emergency regulation targeting oudoor urban water use in an effort to increase conservation practices for all Californians.";
};

var slide_10 = function() {
  media_chart.unselect();
};

var slide_11 = function() {
  media_chart.select(["Articles2"], [29]);
  media_chart.select(["Searches2"], [29]);
  document.getElementById("message3").innerHTML = "Media coverage even spiked in December 2014 during an intense rain event, with many articles speculating whether or not the drought was over.";
};

var slide_12 = function() {
  media_chart.unselect();
};

var slide_13 = function() {
  chart.select(["Articles2"], [33]);
  chart.select(["Searches2"], [33]);
  document.getElementById("message3").innerHTML = "The largest media coverage and public interest, however, occurred in April 2015 when Governor Brown declared the first ever madatory statewide water conservation restrictions.";
};

var slide_14 = function() {
  chart.unselect();
  document.getElementById("message3").innerHTML = "News media coverage has played an important role in prompting many California residents to conserve water, helping the state to achieve signifigant savings during this hydrologic crisis.";
};

var slides = [slide_0, slide_1, slide_2, slide_3, slide_4, slide_5, slide_6, slide_7, slide_8, slide_9, slide_10, slide_11, slide_12, slide_13, slide_14];

// cycle through slides

var current_slide = 0;

var run = function() {
  slides[current_slide]();
  current_slide += 1;

  if (current_slide === 1) {
    document.getElementById("start_btn1").innerHTML = "Start";
  } else if (current_slide === slides.length) {
    current_slide = 0;
    document.getElementById("start_btn1").innerHTML = "Replay";
  } else {
    document.getElementById("start_btn1").innerHTML = "Continue";
  }
};

// button event handler

document.getElementById('start_btn1').addEventListener("click", run);

// init

run();


