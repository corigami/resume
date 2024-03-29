/*global window, document, controller, google*/
//helper variables for BIO block of resumeBuilder.js
var helperVar = {
    HTMLheaderName: '<div id="name">%data%</div>',
    HTMLheaderRole: '<div id="role">%data%</div><hr/>',
    HTMLcontactGeneric: '<li class="flex-item"><span class="lt-green-text">%contact%</span><span class="lt-blue-text">%data%</span></li>',
    HTMLmobile: '<li class="flex-item"><span class="lt-green-text">mobile</span><span class="lt-blue-text">%data%</span></li>',
    HTMLemail: '<li class="flex-item"><span class="lt-green-text">email</span><span class="lt-blue-text">%data%</span></li>',
    HTMLtwitter: '<li class="flex-item"><span class="lt-green-text">twitter</span><span class="lt-blue-text">%data%</span></li>',
    HTMLgithub: '<li class="flex-item"><span class="lt-green-text">github</span><a class="inline" href="https://github.com/corigami">%data%</a></span></li>',
    HTMLblog: '<li class="flex-item"><span class="lt-green-text">blog</span><span class="lt-blue-text">%data%</span></li>',
    HTMLlocation: '<li class="flex-item"><span class="lt-green-text">location</span><span class="lt-blue-text">%data%</span></li>',
    HTMLbioPic: '<img src="%data%" id="biopic">',
    HTMLwelcomeMsg: '<span class="welcome-message">%data%</span>',
    HTMLskillsStart: '<div id="skill-group"></div>',
    HTMLskillsGroupHeader: '<h3 class="skills-header show">%data%</h3>',
    HTMLskillsGroupStart: '<span class="skills header-flex-box"></span>',
    HTMLskills: '<span class="lt-blue-text skill-item %type%">%data%</span>',

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
    HTMLschoolFormalStart: ' <h3 class="school-header"><i class="fa-solid fa-graduation-cap icon"></i>Formal Education<br></h3>',
    HTMLschoolStart: '<div class="education-entry lt-gray"></div>',
    HTMLschoolName: '<a class="title-link" href="%url%">%data%',
    HTMLschoolDegree: ' -- %data%</a>',
    HTMLschoolDates: '<div class="date-text">%data%</div>',
    HTMLschoolLocation: '<div class="location-text">%data%</div>',
    HTMLschoolMajor: '<em><br>Major: %data%</em>',

    //helper variable for online portion of EDUCATION block
    HTMLonlineSchoolStart: '<h4 class="course-header"><i class="fa-solid fa-laptop icon"></i>Certificates and Courses<br></h4>',
    HTMLonlineStart: '<div class="lt-gray"></div>',
    HTMLonlineTitle: '<a class="title-link" href="%url%">%data%</a>',
    HTMLonlineDates: '<div class="date-text">%data%</div><br>',
    HTMLonlineSchool: '<div class="school-text">%data%</div>',
    HTMLonlineTopic: '--<span class="ed-topic">%data%</span><br>',

    //Test variables for new Cards
    HTMLedContainer: '<div id="edFlex" class="flex-box"></div>',
    HTMLschoolContainer: '<div class="education-entry ed-flex-school shadow"></div>',
    HTMLonlineContainer: '<div id="onlineFlex" class="flex-box"></div>',
    HTMLonlineSchoolContainer: '<div class="online-entry ed-flex-course shadow"></div>',

    //helper variables for PROJECT block of resumeBuilder.js
    HTMLprojContainer: '<div id="projFlex" class="proj-flex-box"></div>',
    HTMLprojectStart: '<div id="%id%" class="project-entry lt-gray shadow proj-flex-item"></div>',
    HTMLprojectTitle: '<a class="title-link" href="%url%">%data%</a>',
    HTMLprojectDates: '<div class="date-text">%data%</div><br>',
    HTMLprojectDescStart: '<div class="projectDesc-entry"><br><UL></div>',
    HTMLprojectDescription: '<LI>%data%</LI>',
    HTMLprojectImageContainer: '<div class="projectImg-entry flex-box"></div>',
    HTMLprojectImage: '<img class="proj-flex-item" src="%data%">',
    HTMLprojectGiturl: '<a href="#2">%data%</a><br>',

};
