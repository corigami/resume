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
        'filter experience bullets, education, and project items</span></h3><div id="skill-group"></div>',
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
    HTMLschoolFormalStart: '<h3 class="ed-header">Formal Education<br></h3>',
    HTMLschoolStart: '<div class="education-entry lt-gray"></div>',
    HTMLschoolName: '<a class="title-link" href="%url%">%data%',
    HTMLschoolDegree: ' -- %data%</a>',
    HTMLschoolDates: '<div class="date-text">%data%</div>',
    HTMLschoolLocation: '<div class="location-text">%data%</div>',
    HTMLschoolMajor: '<em><br>Major: %data%</em>',

    //helper variable for online portion of EDUCATION block
    HTMLonlineSchoolStart: '<h4 class="ed-header">Certificates and Other Relevant Courses<br></h4>',
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
    HTMLprojectStart: '<div id="%id%" class="project-entry lt-gray shadow"></div>',
    HTMLprojectTitle: '<a class="title-link" href="%url%">%data%</a>',
    HTMLprojectDates: '<div class="date-text">%data%</div><br>',
    HTMLprojectDescStart: '<div class="projectDesc-entry"><br><UL></div>',
    HTMLprojectDescription: '<LI>%data%</LI>',
    HTMLprojectImageContainer: '<div class="projectImg-entry flex-box"></div>',
    HTMLprojectImage: '<img class="proj-flex-item" src="%data%">',
    HTMLprojectGiturl: '<a href="#2">%data%</a><br>',

};
