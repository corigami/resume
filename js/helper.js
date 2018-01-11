/*global window, document, controller, google*/
//helper variables for BIO block of resumeBuilder.js
var helperVar = {
    HTMLheaderName: '<h1 id="name">%data%</h1>',
    HTMLheaderRole: '<div class="role">%data%</div><hr/>',
    HTMLcontactGeneric: '<li class="flex-item"><span class="lt-green-text">%contact%</span><span class="lt-blue-text">%data%</span></li>',
    HTMLmobile: '<li class="flex-item"><span class="lt-green-text">mobile</span><span class="lt-blue-text">%data%</span></li>',
    HTMLemail: '<li class="flex-item"><span class="lt-green-text">email</span><span class="lt-blue-text">%data%</span></li>',
    HTMLtwitter: '<li class="flex-item"><span class="lt-green-text">twitter</span><span class="lt-blue-text">%data%</span></li>',
    HTMLgithub: '<li class="flex-item"><span class="lt-green-text">github</span><a class="inline" href="https://github.com/corigami">%data%</a></span></li>',
    HTMLblog: '<li class="flex-item"><span class="lt-green-text">blog</span><span class="lt-blue-text">%data%</span></li>',
    HTMLlocation: '<li class="flex-item"><span class="lt-green-text">location</span><span class="lt-blue-text">%data%</span></li>',
    HTMLbioPic: '<img src="%data%" class="biopic">',
    HTMLwelcomeMsg: '<span class="welcome-message">%data%</span>',
    HTMLskillsStart: '<h3 id="skills-h3" class="skills-header">Skills -  <span class="note">click a type or individual skill to ' +
        'filter experience bullets</span></h3><div id="skill-group"></div>',
    HTMLskillsGroupHeader: '<h4 class="skills-header show">%data%</h4>',
    HTMLskillsGroupStart: '<div class="skills header-flex-box"></div>',
    HTMLskills: '<span class="lt-blue-text skill-item skill-color %type%">%data%</span>',

    //helper variables for WORK block of resumeBuilder.js
    HTMLworkStart: '<div class="work-entry lt-gray shadow"></div>',
    HTMLworkEmployer: '<a class="title-link" href="%URL%">%data%',
    HTMLworkTitle: ' - %data%</a>',
    HTMLworkDates: '<div class="date-text">%data%</div>',
    HTMLworkLocation: '<div class="location-text">%data%</div>',
    HTMLworkDescStart: '<div class="workDesc-entry"><UL><br>',
    HTMLworkDescription: '<li class="work-bullet">%data%</li>',
    HTMLskillBullet: '<li class="work-bullet">%data%</li>',
    HTMLworkDescEnd: '</UL></div>',

    //helper variables for EDUCATION block of resumeBuilder.js
    HTMLschoolFormalStart: '<h3 class="education-entry ed-header">Formal Education<br></h3>',
    HTMLschoolStart: '<div class="education-entry lt-gray"></div>',
    HTMLschoolName: '<a class="title-link" href="%url%">%data%',
    HTMLschoolDegree: ' -- %data%</a>',
    HTMLschoolDates: '<div class="date-text">%data%</div>',
    HTMLschoolLocation: '<div class="location-text">%data%</div>',
    HTMLschoolMajor: '<em><br>Major: %data%</em>',

    //helper variable for online portion of EDUCATION block
    HTMLonlineSchoolStart: '<h4 class="online-entry ed-header">Certificates and Other Relevent Courses<br></h4>',
    HTMLonlineStart: '<div class="online-entry lt-gray"></div>',
    HTMLonlineTitle: '<a class="title-link" href="%url%">%data%</a>',
    HTMLonlineSchool: '<p>%data%</p>',
    HTMLonlineDates: '<div class="date-text">%data%</div><br>',
    HTMLonlineTopic: '--<span class="ed-topic">%data%</span><br>',

    //Test variables for new Cards
    HTMLedContainer: '<div id="edFlex" class="flex-box"></div>',
    HTMLschoolContainer: '<div class="education-entry ed-flex-item shadow"></div>',
    HTMLonlineContainer: '<div id="onlineFlex" class="flex-box"></div>',
    HTMLonlineSchoolContainer: '<div class="online-entry ed-flex-item shadow"></div>',

    //helper variables for PROJECT block of resumeBuilder.js
    HTMLprojectStart: '<div class="project-entry lt-gray shadow"></div>',
    HTMLprojectTitle: '<a class="title-link" href="%url%">%data%</a>',
    HTMLprojectDates: '<div class="date-text">%data%</div><br>',
    HTMLprojectDescStart: '<div class="projectDesc-entry"><br><UL></div>',
    HTMLprojectDescription: '<LI>%data%</LI>',
    HTMLprojectImageContainer: '<div class="projectImg-entry flex-box"></div>',
    HTMLprojectImage: '<img class="proj-flex-item" src="%data%">',
    HTMLprojectGiturl: '<a href="#2">%data%</a><br>',



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
            //   EDUCATION = controller.getEd(),
            WORK = controller.getWork();
        //adds the single location property from BIO to the locations array

        locations.push(BIO.CONTACTS.LOCATION);

        // iterates through school and work locations and appends each location to
        // the locations array.  Since Google textSearch api's limits response to 10 values,
        // logic has been added to not add duplicates


        WORK.JOBS.forEach(function (job) {
            //        if (locations.indexOf(job.LOCATION) === -1) {
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
        if (status === google.maps.places.PlacesServiceStatus.OK) {
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
window.addEventListener('resize', function () {
    'use strict';
    //  Make sure the map bounds get updated on page resize
    helperVar.map.fitBounds(window.mapBounds);
});
