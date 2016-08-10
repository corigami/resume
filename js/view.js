/*global model, controller*/
var view = {
    init: function () {
        'use strict';
        $('#map-div').append(helperVar.googleMap);
        view.displayBio('#header');
        view.displayBio('#footerContacts');
        view.displayMenu();
        view.displayWork();
        view.displayEducation();
        view.displayProjects();
        if (document.getElementsByClassName('flex-item').length === 0) {
            document.getElementById('topContacts').style.display = 'none';
        }
        if (document.getElementsByTagName('h1').length === 0) {
            document.getElementById('header').style.backgroundColor = "black";
        }
        if (document.getElementsByClassName('work-entry').length === 0) {
            document.getElementById('experience').style.backgroundColor = "black";
        }
        if (document.getElementsByClassName('project-entry').length === 0) {
            document.getElementById('projects').style.backgroundColor = "black";
        }
        if (document.getElementsByClassName('education-entry').length === 0) {
            document.getElementById('education').style.backgroundColor = "black";
        }
        if (document.getElementsByClassName('flex-item').length === 0) {
            document.getElementById('lets-connect').style.display = 'none';
        }
        if (document.getElementById('map') === null) {
            document.getElementById('map-div').style.display = 'none';
        }
    },
    displayMenu: function () {
        'use strice';
        var menu = $('#menu');
        var items = ['Experience', 'Education', 'Projects'];
        items.forEach(function (item) {
            var menuItem = document.createElement('div'),
                idString = "menu-" + item,
                selector = "#" + idString;
            menuItem.setAttribute("class", "menu-item");
            menuItem.setAttribute("id", idString);
            menu.append(menuItem);
            $(selector).append('<a>' + item + '</a>');
            $(selector).css('cursor', 'pointer');
            $(selector).click(function () {
                view.hideAll();
                $('#' + idString).toggleClass('selected');
                $('html, body').animate({
                    scrollTop: 0
                }, 'fast');
                $('#' + item.toLowerCase()).fadeIn("slow");

            });
        });
    },
    displayBio: function (section) {
        'use strict';
        var BIO = controller.getBio();
        var contactLoc = section,
            FORMATTED_EMAIL = helperVar.HTMLemail.replace('%data%', BIO.CONTACTS.EMAIL),
            FORMATTED_MOBILE = helperVar.HTMLmobile.replace('%data%', BIO.CONTACTS.MOBILE),
            FORMATTED_GITHUB = helperVar.HTMLgithub.replace('%data%', BIO.CONTACTS.GITHUB),
            FORMATTED_WELCOME_MSG = helperVar.HTMLwelcomeMsg.replace('%data%', BIO.WELCOME_MSG),
            FORMATED_LOCATION = helperVar.HTMLlocation.replace('%data%', BIO.CONTACTS.LOCATION),
            FORMATTED_ROLE = helperVar.HTMLheaderRole.replace('%data%', BIO.ROLE),
            FORMATTED_NAME = helperVar.HTMLheaderName.replace('%data%', BIO.NAME),
            FORMATTED_BIOPIC = helperVar.HTMLbioPic.replace('%data%', BIO.PICTURE);

        if (section === '#header') {
            contactLoc = '#topContacts';
            $(section).prepend(FORMATTED_BIOPIC);
            $(section).prepend(FORMATTED_ROLE);
            $(section).prepend(FORMATTED_NAME);

            //    $(section).append(FORMATTED_WELCOME_MSG);
            $(section).append(helperVar.HTMLskillsStart);
            BIO.SKILLS.forEach(function (skill) {
                var FORMATTED_SKILL = helperVar.HTMLskills.replace('%data%', skill);
                $('#skills').append(FORMATTED_SKILL);
            });
        }
        $(contactLoc).append(FORMATTED_EMAIL);
        // $(contactLoc).append(FORMATTED_MOBILE);
        $(contactLoc).append(FORMATTED_GITHUB);
        $(contactLoc).append(FORMATED_LOCATION);
    },
    displayWork: function () {
        'use strict';
        var WORK = controller.getWork();
        if (WORK.JOBS.length > 0) {
            WORK.JOBS.forEach(function (job) {
                $('#experience').append(helperVar.HTMLworkStart);
                var FORMATTED_EMPLOYER = helperVar.HTMLworkEmployer.replace('%data%', job.EMPLOYER),
                    FORMATTED_JOB_TITLE = helperVar.HTMLworkTitle.replace('%data%', job.TITLE),
                    FORMATTED_JOB_DATES = helperVar.HTMLworkDates.replace('%data%', job.DATES),
                    FORMATTED_JOB_LOC = helperVar.HTMLworkLocation.replace('%data%', job.LOCATION),
                    FORMATTED_EMP_TITLE = FORMATTED_EMPLOYER + FORMATTED_JOB_TITLE;
                $('.work-entry:last').append(FORMATTED_EMP_TITLE);
                $('.work-entry:last').append(FORMATTED_JOB_DATES);
                $('.work-entry:last').append(FORMATTED_JOB_LOC);
                $('.work-entry:last').append(helperVar.HTMLworkDescStart);
                job.DESCRIPTION.forEach(function (bullet) {
                    var FORMATTED_JOB_DESC = helperVar.HTMLworkDescription.replace('%data%', bullet);
                    $('.workDesc-entry:last').append(FORMATTED_JOB_DESC);
                });
                $('.workDesc-entry:last').append(helperVar.HTMLworkDescEnd);
            });
        }
        $('#experience').hide();
    },
    displayEducation: function () {
        'use strict';
        var EDUCATION = controller.getEd();
        $('#education').append(helperVar.HTMLschoolFormalStart);
        EDUCATION.SCHOOLS.forEach(function (school) {
            var FORMATTED_NAME = helperVar.HTMLschoolName.replace('%data%', school.NAME),
                FORMATTED_DEGREE = helperVar.HTMLschoolDegree.replace('%data%', school.DEGREE),
                FORMATTED_MAJOR = helperVar.HTMLschoolMajor.replace('%data%', school.MAJOR),
                FORMATTED_DATES = helperVar.HTMLschoolDates.replace('%data%', school.DATES),
                FORMATTED_LOCATION = helperVar.HTMLschoolLocation.replace('%data%', school.LOCATION);
            FORMATTED_NAME = FORMATTED_NAME.replace('%url', school.URL);
            $('#education').append(helperVar.HTMLschoolStart);
            $('.education-entry:last').append(FORMATTED_NAME);
            $('.education-entry:last').append(FORMATTED_DATES);
            $('.education-entry:last').append(FORMATTED_MAJOR);
            $('.education-entry:last').append(FORMATTED_DEGREE);
            $('.education-entry:last').append(FORMATTED_LOCATION);
        });

        $('#education').append(helperVar.HTMLonlineClasses);
        EDUCATION.ONLINE.forEach(function (online) {
            var FORMATTED_SCHOOL = helperVar.HTMLonlineSchool.replace('%data%', online.SCHOOL),
                FORMATTED_TITLE = helperVar.HTMLonlineTitle.replace('%data%', online.TITLE),
                FORMATTED_DATES = helperVar.HTMLonlineDates.replace('%data%', online.DATES),
                FORMATTED_TITLE_SCHOOL = FORMATTED_SCHOOL + '<br>' + FORMATTED_TITLE;
            FORMATTED_SCHOOL = FORMATTED_SCHOOL.replace('%url%', online.URL);
            $('.education-entry:last').append(FORMATTED_SCHOOL);
            $('.education-entry:last').append(FORMATTED_TITLE);
            $('.education-entry:last').append(FORMATTED_DATES);
            $('#education').hide();

        });
    },
    displayProjects: function () {
        'use strict';
        var PROJECTS = controller.getProjects();
        PROJECTS.PROJECTS.forEach(function (project) {
            var FORMATTED_TITLE = helperVar.HTMLprojectTitle.replace('%url%', project.URL),
                FORMATTED_TITLE = FORMATTED_TITLE.replace('%data%', project.TITLE),
                FORMATTED_DATES = helperVar.HTMLprojectDates.replace('%data%', project.DATES),
                FORMATTED_DESC = helperVar.HTMLprojectDescription.replace('%data%', project.DESCRIPTION),
                FORMATTED_EMBED = "";
            //  if (project.EMBED)
            //     FORMATTED_EMBED = helperVar.HTMLprojectEmbed.replace('%data', project.EMBED);
            var FORMATTED_GITURL = helperVar.HTMLprojectGiturl.replace('%data%', project.GITURL);
            FORMATTED_GITURL = FORMATTED_GITURL.replace('#2', project.GITURL);
            $('#projects').append(helperVar.HTMLprojectStart);
            $('.project-entry:last').append(FORMATTED_TITLE);
            $('.project-entry:last').append(FORMATTED_DATES);
            $('.project-entry:last').append(FORMATTED_DESC);
            project.IMAGES.forEach(function (image) {
                var FORMATTED_IMAGE = helperVar.HTMLprojectImage.replace('%data%', image);
                $('.project-entry:last').append(FORMATTED_IMAGE);
            });
            if (project.EMBED)
                $('.project-entry:last').append(FORMATTED_EMBED);
            $('.project-entry:last').append(FORMATTED_GITURL);
            $('.project-entry:last').append('<hr>');
            $('#projects').hide();

        });
    },
    hideAll: function () {
        /*
        if (!$('#experience').hasClass("hidden")) {
            $('#experience').addClass("hidden");
        }
        if (!$('#education').hasClass("hidden")) {
            $('#education').addClass("hidden");
        }
        if (!$('#projects').hasClass("hidden")) {
            $('#projects').addClass("hidden");
        }
        */
        $('#experience').fadeOut("fast");
        $('#menu-Experience').removeClass('selected');
        $('#education').fadeOut("fast").removeClass('selected');
        $('#menu-Education').removeClass('selected');
        $('#projects').fadeOut("fast").removeClass('selected');
        $('#menu-Projects').removeClass('selected');
    }
};

view.init();

//logic to make navigation bar "float with scroll
$(document).ready(function () {

    var num = 300; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.menu').addClass('fixed');
        } else {
            $('.menu').removeClass('fixed');
        }
    });
});
