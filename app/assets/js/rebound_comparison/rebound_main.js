// C3 init

var agency_names = ['Alco Water Service','Alhambra City of','Amador Water Agency','American Canyon City of','Anaheim City of','Anderson City of','Antioch City of','Apple Valley Ranchos Water Company','Arcadia City of','Arcata City of','Arroyo Grande  City of','Arvin Community Services District','Atwater City of','Azusa City of','Bakersfield City of','Bakman Water Company','Banning City of','Beaumont-Cherry Valley Water District','Bella Vista Water District','Bellflower-Somerset Mutual Water Company','Benicia City of','Beverly Hills  City of','Big Bear City Community Services District','Blythe City of','Brawley City of','Brea City of','Brentwood City of','Buena Park City of','Burbank City of','Burlingame City of','Calaveras County Water District','Calexico City of','California City City of','CalWater Antelope Valley','CalWater Bakersfield','CalWater Bear Gulch','CalWater Chico District','CalWater Dixon City of','CalWater Dominguez','CalWater East Los Angeles','CalWater Hermosa/Redondo','CalWater Kern River Valley','CalWater King City','CalWater Livermore','CalWater Los Altos/Suburban','CalWater Marysville','CalWater Mid Peninsula','CalWater Oroville','CalWater Palos Verdes','CalWater Redwood Valley','CalWater Salinas District','CalWater Selma','CalWater South San Francisco','CalWater Stockton','CalWater Visalia','CalWater Westlake','CalWater Willows','CalAm Water Company Los Angeles District','CalAm Water Company Monterey District','CalAm Water Company Sacramento District','CalAm Water Company San Diego District','CalAm Water Ventura District','Camarillo City of','Cambria Community Services District','Camrosa Water District','Carlsbad Municipal Water District','Carmichael Water District','Carpinteria Valley Water District','Casitas Municipal Water District','Castaic Lake Water Agency Santa Clarita Water Division','Ceres City of','Cerritos  City of','Chino City of','Chino Hills City of','Citrus Heights Water District','City of Big Bear Lake, Dept of Water & Power','Clovis City of','Coachella Valley Water District','Coastside County Water District','Colton City of','Compton City of','Contra Costa Water District','Corona City of','Covina City of','Crescent City City of','Crescenta Valley Water District','Crestline Village Water District','Cucamonga Valley Water District','Daly City City of','Davis  City of','Del Oro Water Company','Delano City of','Desert Water Agency','Diablo Water District','Dinuba City of','Discovery Bay Community Services District','Downey  City of','Dublin San Ramon Services District','East Bay MUD','East Niles Community Service District','East Orange County Water District','East Palo Alto, City of','East Valley Water District','Eastern Municipal Water District','El Centro City of','El Dorado Irrigation District','El Monte City of','El Toro Water District','Elk Grove Water Service','Elsinore Valley Municipal Water District','Escondido City of','Estero Municipal Improvement District','Eureka City of','Exeter City of','Fair Oaks Water District','Fairfield City of','Fallbrook Public Utility District','Folsom City of','Fountain Valley City of','Fresno City of','Fruitridge Vista Water Company','Fullerton City of','Garden Grove City of','Georgetown Divide Public Utilities District','Gilroy  City of','Glendale City of','Glendora City of','Golden State Water Company Artesia','Golden State Water Co. Barstow','Golden State Water Co. Bay Point','Golden State Water Company Bell-Bell Gardens','Golden State Water Co. Claremont','Golden State Water Co. Cordova','Golden State Water Company Culver City','Golden State Water Co. Florence Graham','Golden State Water Co, Norwalk','Golden State Water Co. Orcutt','Golden State Water Co. Placentia','Golden State Water Co. S Arcadia','Golden State Water Co. S San Gabriel','Golden State Water Co. San Dimas','Golden State Water Co. Simi Valley','Golden State Water Co. Southwest','Golden State Water Co. West Orange','Goleta Water District','Greenfield City of','Groveland Community Services District','Hanford City of','Hawthorne City of','Hayward  City of','Healdsburg  City of','Helix Water District','Hemet City of','Hesperia Water District City of','Hi-Desert Water District','Hillsborough Town of','Hollister City of','Humboldt Bay Municipal Water District','Humboldt Community Service District','Huntington Beach City of','Huntington Park City of','Imperial City of','Indian Wells Valley Water District','Indio  City of','Inglewood City of','Irvine Ranch Water District','Joshua Basin Water District','Jurupa Community Service District','Kerman City of','Kingsburg City of','La Habra City of Public Works','La Palma City of','La Verne City of','Laguna Beach County Water District','Lake Arrowhead Community Services District','Lake Hemet Municipal Water District','Lakeside Water District','Lakewood City of','Lamont Public Utility District','Las Virgenes Municipal Water District','Lathrop, City of','Lee Lake Water District','Lemoore City of','Lincoln City of','Lincoln Avenue Water Company','Linda County Water District','Livermore City of Division of Water Resources','Livingston City of','Lodi City of Public Works Department','Loma Linda City of','Lomita City of','Lompoc  City of','Long Beach City of','LA County Public Works Waterworks District 29','LA County Public Works Waterworks District 40','LA Department of Water and Power','Los Banos City of','Manhattan Beach City of','Manteca City of','Marin Municipal Water District','Marina Coast Water District','Menlo Park  City of','Merced City of','Mesa Water District','Mid-Peninsula WD','Millbrae City of','Milpitas  City of','Modesto, City of','Monte Vista Water District','Montebello Land and Water Company','Montecito Water District','Monterey Park City of','Morgan Hill City of','Morro Bay City of','Moulton Niguel Water District','Mountain View City of','Napa City of','Nevada Irrigation District','Newhall County Water District','Newport Beach City of','Nipomo Community Services District','Norco City of','North Coast County Water District','North Marin Water District','North Tahoe PUD','Norwalk City of','Oakdale  City of','Oceanside City of','Oildale Mutual Water Company','Olivehurst PUD','Olivenhain MWD','Ontario City of','Orange  City of','Orange Vale Water Company','Orchard Dale Water District','Otay Water District','Padre Dam Municipal Water District','Palmdale Water District','Palo Alto City of','Paradise Irrigation District','Paramount City of','Park Water Company','Pasadena City of','Paso Robles  City of','Patterson City of',"'Perris, City of'",'Petaluma  City of','Phelan Pinon Hills Community Services District','Pico Rivera City of','Pico Water District','Pismo Beach City of','Pittsburg City of','Placer County Water Agency','Pleasanton City of','Pomona  City of','Port Hueneme City of','Porterville  City of','Poway  City of','Quartz Hill Water District','Rainbow Municipal Water District','Ramona Municipal Water District','Rancho California Water District','Redding City of','Redlands  City of','Redwood City City of','Reedley City of','Rialto  City of','Rincon Del Diablo Municipal Water District','Rio Linda - Elverta Community Water District','Rio Vista City of','Ripon City of','Riverside City of','Riverside Highland Water Company','Rohnert Park City of','Rosamond Community Service District','Roseville City of','Rowland Water District','Rubidoux Community Service District','Rubio Canyon Land and Water Association','Sacramento City of','Sacramento County Water Agency','Sacramento Suburban Water District','San Bernardino City of','San Bernardino County Service Area 64','San Bernardino County Service Area 70J','San Bruno  City of','San Buenaventura City of','San Clemente City of','San Diego City of','San Dieguito Water District','San Fernando City of','San Francisco PUC','San Gabriel County WD','San Gabriel Valley Fontana Water Company','San Gabriel Valley Water Company','San Jacinto City of','San Jose City of','San Jose Water Company','San Juan Capistrano City of','San Juan Water District','San Lorenzo Valley Water District','San Luis Obispo City of','Sanger City of','Santa Ana City of','Santa Barbara City of','Santa Clara City of','Santa Cruz City of','Santa Fe Irrigation District','Santa Fe Springs City of','Santa Margarita Water District','Santa Maria City of','Santa Monica City of','Santa Paula City of','Santa Rosa City of','Seal Beach  City of','Shafter City of','Sierra Madre City of','Soledad City of','Sonoma City of','Soquel Creek Water District','South Coast Water District','South Gate City of','South Pasadena City of','South Tahoe PUD','Stockton City of','Suburban Water Systems San Jose Hills','Suburban Water Systems Whittier/La Mirada','Suisun-Solano Water Authority','Sunny Slope Water Company','Sunnyslope County WD','Sweetwater Authority','Sweetwater Springs WD','Tahoe City Public Utilities District','Tehachapi City of','Thousand Oaks City of','Torrance City of','Trabuco Canyon Water District','Tracy City of','Triunfo Sanitation District / Oak Park Water Service','Truckee-Donner Public Utilities District','Tulare City of','Tuolumne Utilities District','Turlock City of','Tustin City of','Twentynine Palms Water District','Upland City of','Vacaville  City of','Valencia Water Company','Vallecitos Water District','Vallejo City of','Valley Center Municipal Water District','Valley County Water District','Valley Water Company','Valley of the Moon Water District','Vaughn Water Company','Ventura County Waterworks District No 1','Ventura County Waterworks District No 8','Vernon City of','Victorville Water District','Vista Irrigation District','Walnut Valley Water District','Wasco City of','Watsonville City of','West Kern Water District','West Sacramento City of','West Valley Water District','Westborough Water District','Western Municipal Water District of Riverside','Westminster City of','Whittier City of','Windsor Town of','Woodland City of','Yorba Linda Water District','Yreka City of','Yuba City City of','Yucaipa Valley WD'];

var my_data = [["conservation_percent_15",22,27,33,27,26,27,36,32,29,1,37,35,36,24,32,34,32,26,55,20,36,20,24,15,36,18,44,24,27,34,37,19,20,42,34,38,43,35,13,17,19,18,22,46,39,32,29,30,31,38,29,41,24,27,26,34,36,30,17,40,28,27,24,42,26,26,37,34,34,35,26,26,24,26,41,20,33,30,23,20,15,40,23,25,17,30,23,30,13,31,44,24,33,35,36,40,23,43,30,32,39,21,33,20,19,32,16,25,39,26,35,18,13,34,39,27,24,33,26,30,38,25,23,37,34,25,36,17,28,30,16,45,38,19,13,21,40,31,30,14,35,37,15,25,29,26,35,10,11,34,28,28,26,26,10,44,26,-7,11,25,15,18,27,24,18,18,26,26,27,39,25,26,32,22,34,39,32,29,29,34,34,34,20,37,32,39,40,10,30,24,22,28,19,24,39,18,26,23,32,23,33,48,43,25,32,28,27,32,30,19,47,18,37,18,23,35,27,37,31,23,35,26,33,35,29,18,43,26,30,40,34,23,28,41,20,27,33,29,34,46,21,20,24,34,30,26,28,17,21,24,26,26,25,45,26,21,35,37,39,38,33,30,32,23,32,24,21,34,39,34,30,26,34,19,31,39,18,21,31,34,40,36,31,34,31,26,25,28,25,22,23,16,25,30,37,34,34,36,27,41,29,24,25,20,38,27,31,41,26,29,18,22,31,28,22,31,24,21,35,33,32,12,30,24,34,27,26,28,29,37,26,28,37,31,32,24,33,33,36,35,27,40,27,29,17,32,37,37,31,25,40,25,31,32,30,28,30,3,29,29,29,26,25,23,40,22,23,28,20,21,26,36,41,21,32,25],
["conservation_percent_16",23,27,19,28,16,21,25,28,24,-1,36,16,22,19,21,34,21,12,37,16,38,20,15,20,28,17,29,19,24,27,17,-1,18,39,24,25,32,30,12,15,17,16,32,29,24,21,20,26,20,33,26,38,23,19,19,25,31,22,15,27,12,23,19,35,17,17,23,27,9,18,24,16,16,16,23,11,20,22,14,10,16,29,14,17,14,21,9,19,8,20,40,19,24,22,30,20,17,31,18,20,29,15,24,16,13,15,10,26,22,11,25,8,14,26,22,13,16,11,21,23,25,19,15,21,25,19,22,13,24,21,13,27,21,14,9,9,29,19,25,14,22,22,12,18,28,16,22,19,12,25,19,18,20,17,1,27,17,-2,7,15,15,10,22,21,16,16,15,15,20,27,10,21,19,16,15,29,22,19,22,16,20,19,20,17,22,23,24,8,20,14,18,25,14,11,23,14,22,17,23,12,35,40,36,14,23,20,22,25,22,17,47,17,22,23,16,27,17,19,18,19,28,16,38,14,14,12,24,19,22,25,17,15,18,26,6,16,20,22,19,34,7,20,19,23,37,28,24,9,16,20,21,18,17,30,20,18,24,26,28,48,20,20,21,20,21,19,17,28,25,19,29,15,23,15,21,19,15,16,18,25,18,21,22,24,21,21,22,24,15,18,19,12,18,22,32,30,27,28,20,13,15,22,12,16,39,22,22,18,23,16,18,19,22,18,16,20,15,17,16,27,26,9,27,9,20,22,19,25,21,23,19,21,27,22,23,9,20,20,27,17,17,22,18,21,9,21,24,22,17,15,31,20,14,23,17,23,21,6,20,14,19,37,18,12,23,15,22,14,17,13,15,24,28,18,26,7],
];

var my_chart_parameters = {
	"bindto": "#chart2",
	"data": {
  	"x": "conservation_percent_15",
    "y": "conservation_percent_16",
  	"columns": my_data,
    "type": "scatter",
    "colors": {
    	"conservation_percent_16": "#ff0000",
      },
    "selection": {
    	"enabled": false
    },
	},
  "tooltip": {
  	"show": true,
    "format": {
    	"title": function(value) { 
          var index = my_data[0].indexOf(value);
          return agency_names[index - 1];
        }
      }
		},  
  "legend": {
  	"show": true
  },
	"axis": {
		"x": {
    	"label": "Conservation in summer 2015",
      "min": 0,
      "max": 60,
			"tick": {
      	"values": [10, 20, 30, 40, 50, 60],
       }
		},
    "y": {
    	"label": "Conservation in summer 2016 (%)",
      "min":0,
      "max":60,
    }
	},
  "point": {
  	"r": 5,
    "show": false,
    "focus": {
    	"expand": {
      	"r": 10,
        "enabled": true
      }
    }
  }
};

var mandate_chart = c3.generate(my_chart_parameters);

var slide = function(){
	mandate_chart.data.names({
      conservation_percent_16: 'Conservation in summer 2016 (%)'
  })
	mandate_chart.load({
  	columns:[
 ["1:1 line",-7,1,3,10,10,10,11,11,12,13,13,13,13,14,15,15,15,15,16,16,16,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,40,40,40,40,41,41,41,41,41,41,42,42,43,43,43,43,44,44,44,45,45,46,46,47,48,55]
    ],
    type: "line",
  });
  document.getElementById("message2").innerHTML = "Hover over the scatter plot to see how each individual utility did. In this interactive plot, dots under the 1:1 line represent utilities with higher water use in summer 2016 compared to summer 2015, and dots above the line represent utilities that surpassed their summer 2015 conservation levels "
};

slide();