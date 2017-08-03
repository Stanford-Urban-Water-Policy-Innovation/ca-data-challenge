// C3 init

var media_chart = c3.generate({
	bindto: '#media_chart',
    data: {
        x: 'x',
       	xFormat: '%m/%d/%Y', 
        columns: [
['x','1/1/2012','2/1/2012','3/1/2012','4/1/2012','5/1/2012','6/1/2012','7/1/2012','8/1/2012','9/1/2012','10/1/2012','11/1/2012','12/1/2012','1/1/2013','2/1/2013','3/1/2013','4/1/2013','5/1/2013','6/1/2013','7/1/2013','8/1/2013','9/1/2013','10/1/2013','11/1/2013','12/1/2013','1/1/2014','2/1/2014','3/1/2014','4/1/2014','5/1/2014','6/1/2014','7/1/2014','8/1/2014','9/1/2014','10/1/2014','11/1/2014','12/1/2014','1/1/2015','2/1/2015','3/1/2015','4/1/2015','5/1/2015','6/1/2015','7/1/2015','8/1/2015','9/1/2015','10/1/2015','11/1/2015','12/1/2015','1/1/2016','2/1/2016','3/1/2016','4/1/2016','5/1/2016','6/1/2016','7/1/2016','8/1/2016'], 		
['Articles',13,5,8,12,4,8,17,24,12,14,8,7,11,16,10,8,9,15,16,31,13,12,14,19,89,104,88,86,98,85,157,133,147,102,107,148,35,53,86,249,157,161,114,128,86,61,66,54,60,63,87,59,74,66,36,10], ['Searches',3,2,2,3,2,1,2,2,2,2,2,1,1,1,2,2,3,2,2,2,1,2,2,6,66,66,35,22,22,14,35,66,51,36,28,62,21,25,50,100,69,51,44,36,37,33,27,31,46,25,40,23,23,14,12,12]        
        ],
      //type: 'point',
    	selection: {
      		enabled: true
  },
      axes: {
    			Articles:'y2',
      		Searches:'y'
      },
      colors: {
            'Searches': '#009688',
            'Articles': '#880096'
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%b %Y',
                values: ['1/1/2012','7/1/2012','1/1/2013','7/1/2013','1/1/2014','7/1/2014','1/1/2015','7/1/2015','1/1/2016','7/1/2016']
                }
            },
        y: {
        		label: 'Relative Number of Google Searches',
            position: 'outer-center'
        },
        y2: {
            show: true,
            position: 'outer-center',
            label: 'Monthly Volume of Newspaper Articles from 8 Sources',
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

var slide_00 = function() {
  media_chart.focus("Searches");
  document.getElementById("message3").innerHTML = "In the previous visualization, we used Google searches to examine how public interest in the California drought has evolved over time is related to water conservation.";
};

var slide_01 = function() {
  media_chart.focus("Articles");
  document.getElementById("message3").innerHTML = "In this visualization, we look at one factor associated with increased public interest: heightened news media coverage of the state's water crisis.";
};

var slide_02 = function() {
  document.getElementById("message3").innerHTML = "Here we use monthly data of the relative Google search rates for the term 'California Drought' and the volume of newspaper articles written about the drought from 8 news sources.";
};

var slide_03 = function() {
media_chart.revert();
};

var slide_04 = function() {
 media_chart.regions([{
   start: '1/1/2014'
  }]);
  document.getElementById("message3").innerHTML = "Increased public interest as approximated by Google Searches and heightened news media coverage started at the same time, in January 2014.";
};

var slide_05 = function() {
	media_chart.regions([]);
  document.getElementById("message3").innerHTML = "Similarly, the peaks of public interest and news media coverage occur during the same months.";
};

var slide_06 = function() {
  media_chart.select(["Articles"], [24]);
  media_chart.select(["Searches"], [24]);
  document.getElementById("message3").innerHTML = "When Governor Jerry Brown declared a drought Sate of Emergency in January 2014";
};

var slide_07 = function() {
  media_chart.unselect();
};

var slide_08 = function() {
  media_chart.select(["Articles"], [30]);
  media_chart.select(["Searches"], [31]);
  document.getElementById("message3").innerHTML = "In late July/early August 2014 when the State Water Board enacted an emergency regulation targeting oudoor urban water use in an effort to increase conservation practices for all Californians";
};

var slide_09 = function() {
  media_chart.unselect();
};

var slide_010 = function() {
  media_chart.select(["Articles"], [39]);
  media_chart.select(["Searches"], [39]);
  document.getElementById("message3").innerHTML = "And the largest peak in April 2015 when Governor Brown declared the first ever madatory statewide water conservation restrictions";
};

var slide_011 = function() {
  media_chart.unselect();
};

var slide_012 = function() {
  media_chart.select(["Articles"], [35]);
  media_chart.select(["Searches"], [35]);
  document.getElementById("message3").innerHTML = "We see one other peak in this analysis as well: In December 2014 during an intense rain event, with many articles speculating whether or not the drought was over.";
};

var slide_013 = function() {
  media_chart.unselect();
};

var slide_014 = function() {
	media_chart.regions([{
		start: '1/1/2016'
  }]);
  document.getElementById("message3").innerHTML = "Then, in 2016 when many agencies across the state experienced conservation backslide, we also see declining media coverage and public interest as well.";
};


var slide_015 = function() {
  media_chart.regions([]);
  media_chart.unselect();
  document.getElementById("message3").innerHTML = "These visualizations demonstrate the correlation between public interest, political actions, and news media coverage. When coupled with statewide water use analyses, these figures provide insight into the linkages between water demand and the composite of the political, social, and economic drought-related activities conveyed by the news media.";
};

var slide_016 = function() {
  media_chart.unselect();
  document.getElementById("message3").innerHTML = "This relationship offers an opportunity to water agencies to design more effective ongoing outreach programs and campaigns in order to enhance public awareness and educate public  about their water supply sources.";
};

var slides2 = [slide_00, slide_01, slide_02, slide_03, slide_04, slide_05, slide_06, slide_07, slide_08, slide_09, slide_010, slide_011, slide_012, slide_013, slide_014, slide_015, slide_016];

// cycle through slides

var current_slide2 = 0;

var run = function() {
  slides2[current_slide2]();
  current_slide2 += 1;

  if (current_slide2 === 1) {
    document.getElementById("start_btn1").innerHTML = "Start";
  } else if (current_slide2 === slides2.length) {
    current_slide2 = 0;
    document.getElementById("start_btn1").innerHTML = "Replay";
  } else {
    document.getElementById("start_btn1").innerHTML = "Continue";
  }
};

// button event handler

document.getElementById('start_btn1').addEventListener("click", run);

// init

run();



