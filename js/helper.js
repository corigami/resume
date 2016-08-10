/*global helperVar, controller, google*/

//helper variables for BIO block of resumeBuilder.js

var helperVar = {

    HTMLheaderName: '<h1 id="name">%data%</h1>',

    HTMLheaderRole: '<span>%data%</span><hr/>',

    HTMLcontactGeneric: '<li class="flex-item"><span class="lt-green-text">%contact%</span><span class="lt-blue-text">%data%</span></li>',

    HTMLmobile: '<li class="flex-item"><span class="lt-green-text">mobile</span><span class="lt-blue-text">%data%</span></li>',

    HTMLemail: '<li class="flex-item"><span class="lt-green-text">email</span><span class="lt-blue-text">%data%</span></li>',

    HTMLtwitter: '<li class="flex-item"><span class="lt-green-text">twitter</span><span class="lt-blue-text">%data%</span></li>',

    HTMLgithub: '<li class="flex-item"><span class="lt-green-text">github</span><span class="lt-blue-text">%data%</span></li>',

    HTMLblog: '<li class="flex-item"><span class="lt-green-text">blog</span><span class="lt-blue-text">%data%</span></li>',

    HTMLlocation: '<li class="flex-item"><span class="lt-green-text">location</span><span class="lt-blue-text">%data%</span></li>',

    HTMLbioPic: '<img src="%data%" class="biopic">',

    HTMLwelcomeMsg: '<span class="welcome-message">%data%</span>',

    HTMLskillsStart: '<h3 id="skills-h3" class="skills-start">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',

    HTMLskills: '<li class="flex-item"><span class="lt-blue-text">%data%</span></li>',



    //helper variables for WORK block of resumeBuilder.js



    //HTMLworkStart: '<div class="work-entry"></div>',
    HTMLworkStart: '<div class="w3-card-4">'+
                        '<div class="work-entry">'+
                        '</div></div>',
    HTMLworkEmployer: '<a href="#">%data%',

    HTMLworkTitle: ' - %data%</a>',

    HTMLworkDates: '<div class="date-text">%data%</div>',

    HTMLworkLocation: '<div class="location-text">%data%</div>',

    HTMLworkDescStart: '<div class="workDesc-entry"><br><UL></div>',

    HTMLworkDescription: '<LI><p>%data%</p>',

    HTMLworkDescEnd: '</UL>',



    //helper variables for PROJECT block of resumeBuilder.js

    HTMLprojectStart: '<div class="w3-card-4">'+
                        '<div class="project-entry">'+
                        '</div></div>',

    HTMLprojectTitle: '<a href="%url%">%data%</a>',

    HTMLprojectDates: '<div class="date-text">%data%</div>',

    HTMLprojectDescription: '<p><br>%data%</p>',

    HTMLprojectImage: '<img src="%data%">',

    HTMLprojectGiturl: '<a href="#2">%data%</a><br>',

    HTMLprojectEmbed: '<div class="embed-container">%data</div>',



    //helper variables for EDUCATION block of resumeBuilder.js

   // HTMLschoolFormalStart: '<h3 class="education-entry">Formal Education<br></h3>',

    HTMLschoolStart: '<div class="w3-card-4 education-entry"></div>',
                      //  '<div class="education-entry">'+
//'</div></div>',

    HTMLschoolName: '<a href="%url%">%data%',

    HTMLschoolDegree: ' -- %data%</a>',

    HTMLschoolDates: '<div class="date-text">%data%</div>',

    HTMLschoolLocation: '<div class="location-text">%data%</div>',

    HTMLschoolMajor: '<em><br>Major: %data%</em>',

    HTMLonlineClasses: '<div class="education-entry w3-card-4"><br><strong>Certificates and Other Relevent Courses<strong><br></div>',

    HTMLonlineSchool: '<a href="%url%">%data%</a>',

    HTMLonlineTitle: '<div><p>%data%</p></div>',

    HTMLonlineDates: '<div class="date-text">%data%</div><br><br>',





    //variables used for map generation

    googleMap: '<div id="map" class="map"></div>',

    map: '' // declares a global map variable

};



function initializeMap() {

    'use strict';

    var locations, mapOptions;

    mapOptions = {

        disableDefaultUI: true

    };

    helperVar.map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    /*

    locationFinder() returns an array of every location string from the JSONs

    written for bio, education, and work.

    */

    function locationFinder() {

        var locations = [],

            BIO = controller.getBio(),

            EDUCATION = controller.getEd(),

            WORK = controller.getWork();

        //adds the single location property from BIO to the locations array



        locations.push(BIO.CONTACTS.LOCATION);



        // iterates through school and work locations and appends each location to

        // the locations array.  Since Google textSearch api's limits response to 10 values,

        // logic has been added to not add duplicates

        //  EDUCATION.SCHOOLS.forEach(function (school) {

        //            //    if (locations.indexOf(school.LOCATION) == -1) {

        //  locations.push(school.LOCATION);

        //                 }

        //   });

        WORK.JOBS.forEach(function (job) {

            //        if (locations.indexOf(job.LOCATION) == -1) {

            locations.push(job.LOCATION);

            //       }

        });

        return locations;

    }



    /*

    createMapMarker(placeData) reads Google Places search results to create map pins.

    placeData is the object returned from search results containing information

    about a single location.

    */

    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables

        var lat = placeData.geometry.location.lat(), // latitude from the place service

            lon = placeData.geometry.location.lng(), // longitude from the place service

            name = placeData.formatted_address, // name of the place from the place service

            bounds = window.mapBounds, // current boundaries of the map window

            // marker is an object with additional data about the pin for a single location

            marker = new google.maps.Marker({

                map: helperVar.map,

                position: placeData.geometry.location,

                title: name

            }),

            // infoWindows are the little helper windows that open when you click

            // or hover over a pin on a map. They usually contain more information

            // about a location.

            infoWindow = new google.maps.InfoWindow({

                content: '<div id="markerName">' +

                    '<b>' + name + '</b>' +

                    '</div>'

            });



        google.maps.event.addListener(marker, 'click', function () {

            infoWindow.open(helperVar.map, marker);

        });



        // this is where the pin actually gets added to the map.

        // bounds.extend() takes in a map location object

        bounds.extend(new google.maps.LatLng(lat, lon));

        helperVar.map.fitBounds(bounds); // fit the map to the new marker

        helperVar.map.setCenter(bounds.getCenter()); // center the map

    }



    /*

    callback(results, status) makes sure the search returned results for a location.

    If so, it creates a new map marker for that location.

    */

    function callback(results, status) {

        if (status == google.maps.places.PlacesServiceStatus.OK) {

            createMapMarker(results[0]);

        }

    }



    /*

    pinPoster(locations) takes in the array of locations created by locationFinder()

    and fires off Google place searches for each location

    */

    function pinPoster(locations) {



        // creates a Google place search service object. PlacesService does the work of

        // actually searching for location data.

        var service = new google.maps.places.PlacesService(helperVar.map);



        // Iterates through the array of locations, creates a search object for each location

        locations.forEach(function (place) {



            // the search request object

            var request = {

                query: place

            };



            // Actually searches the Google Maps API for location data and runs the callback

            // function with the search results after each search.

            service.textSearch(request, callback);

        });

    }



    // Sets the boundaries of the map based on pin locations

    window.mapBounds = new google.maps.LatLngBounds();



    // locations is an array of location strings returned from locationFinder()

    locations = locationFinder();



    // pinPoster(locations) creates pins on the map for each location in

    // the locations array

    pinPoster(locations);

}



// Calls the initializeMap() function when the page loads

window.addEventListener('load', initializeMap);



// Vanilla JS way to listen for resizing of the window and adjust map bounds

window.addEventListener('resize', function (e) {

    'use strict';

    //  Make sure the map bounds get updated on page resize

    helperVar.map.fitBounds(window.mapBounds);

});

