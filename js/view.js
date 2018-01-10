/*global window, document,$,helperVar, controller*/
var view = {
    skillsToShow: [],
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
        'use strict';
        var menu = $('#menu'),
            items = ['Experience', 'Education', 'Projects'];
        items.forEach(function (item) {
            var menuItem = document.createElement('div'),
                idString = "menu-" + item,
                selector = "#" + idString;
            menuItem.setAttribute("class", "menu-item");
            menuItem.setAttribute("id", idString);
            menu.append(menuItem);
            $(selector).append('<a class="lt-gray-text">' + item + '</a>');
            $(selector).css('cursor', 'pointer');
            $(selector).click(function () {
                view.hideAll();
                $('#' + idString).toggleClass('selected');
                $('html, body').animate({
                    scrollTop: 0
                }, 'fast');
                $('#' + item.toLowerCase()).fadeIn();

            });
        });
    },
    displayBio: function (section) {
        'use strict';
        var BIO = controller.getBio(),
            contactLoc = section,
            FORMATTED_EMAIL = helperVar.HTMLemail.replace('%data%', BIO.CONTACTS.EMAIL),
            FORMATTED_GITHUB = helperVar.HTMLgithub.replace('%data%', BIO.CONTACTS.GITHUB),
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
                var el = $(helperVar.HTMLskills.replace('%data%', skill));
                var trimmedSkill = skill.replace(' ', '');
                view.skillsToShow.push(trimmedSkill);
                
                el.click(function () {
                    if (el.hasClass('skill-color')) {
                        var ind = view.skillsToShow.indexOf(trimmedSkill);
                        view.skillsToShow.splice(ind, 1);
                    } else {
                        view.skillsToShow.push(trimmedSkill);
                    }
                    el.toggleClass('skill-color');
                    $('.work-bullet').hide();
                    view.skillsToShow.forEach(function (skill) {
                        $('.' + skill).show();
                    });
                })


                if (!view.skillsToShow.includes(trimmedSkill)) {
                    view.skillsToShow.push(trimmedSkill);
                }
                $('#skills').append(el);
            });
        }
        $(contactLoc).append(FORMATTED_EMAIL);
        $(contactLoc).append(FORMATTED_GITHUB);
        $(contactLoc).append(FORMATED_LOCATION);
    },
    displayWork: function () {
        'use strict';
        var WORK = controller.getWork();
        if (WORK.JOBS.length > 0) {
            WORK.JOBS.forEach(function (job) {
                $('#experience').append(helperVar.HTMLworkStart);
                var FORMATTED_EMPLOYER = helperVar.HTMLworkEmployer.replace('%data%', job.EMPLOYER).replace('%URL%', job.URL),
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

                //*************************************************
                if (job.SKILLBULLET) {
                    job.SKILLBULLET.forEach(function (skillbullet) {
                        var el = $(helperVar.HTMLskillBullet.replace('%data%', skillbullet.BULLET));

                        skillbullet.SKILLS.forEach(function (skill) {
                            el.addClass(skill.replace(' ', ''));
                        });
                        $('.work-entry:last').append(el);
                    });
                }
                // ********************************************************
            });
            $('.workDesc-entry:last').append(helperVar.HTMLworkDescEnd);
        }
        $('#experience').hide();
    },
    displayEducation: function () {
        'use strict';
        var EDUCATION = controller.getEd();

        $('#education').append(helperVar.HTMLschoolFormalStart);
        $('#education').append(helperVar.HTMLedContainer);
        EDUCATION.SCHOOLS.forEach(function (school) {
            var FORMATTED_NAME = helperVar.HTMLschoolName.replace('%data%', school.NAME),
                FORMATTED_DEGREE = helperVar.HTMLschoolDegree.replace('%data%', school.DEGREE),
                FORMATTED_MAJOR = helperVar.HTMLschoolMajor.replace('%data%', school.MAJOR),
                FORMATTED_DATES = helperVar.HTMLschoolDates.replace('%data%', school.DATES),
                FORMATTED_LOCATION = helperVar.HTMLschoolLocation.replace('%data%', school.LOCATION);
            FORMATTED_NAME = FORMATTED_NAME.replace('%url%', school.URL);
            $('#edFlex').append(helperVar.HTMLschoolContainer);
            $('.education-entry:last').append(FORMATTED_NAME);
            $('.education-entry:last').append(FORMATTED_DATES);
            $('.education-entry:last').append(FORMATTED_LOCATION);
            $('.education-entry:last').append(FORMATTED_MAJOR);
            $('.education-entry:last').append(FORMATTED_DEGREE);

        });

        $('#education').append(helperVar.HTMLonlineSchoolStart);
        $('#education').append(helperVar.HTMLonlineContainer);
        EDUCATION.ONLINE.forEach(function (online) {
            var FORMATTED_SCHOOL = helperVar.HTMLonlineSchool.replace('%data%', online.SCHOOL),
                FORMATTED_TITLE = helperVar.HTMLonlineTitle.replace('%data%', online.TITLE),
                FORMATTED_DATES = helperVar.HTMLonlineDates.replace('%data%', online.DATES),
                FORMATTED_TOPIC = helperVar.HTMLonlineTopic.replace('%data%', online.TOPIC);
            FORMATTED_SCHOOL = FORMATTED_SCHOOL.replace('%url%', online.URL);
            $('#onlineFlex').append(helperVar.HTMLonlineSchoolContainer);
            $('.online-entry:last').append(FORMATTED_TITLE);
            $('.online-entry:last').append(FORMATTED_SCHOOL);
            $('.online-entry:last').append(FORMATTED_DATES);
            $('.online-entry:last').append(FORMATTED_TOPIC);

        });
        $('#education').hide();

    },
    displayProjects: function () {
        'use strict';
        var PROJECTS = controller.getProjects();
        PROJECTS.PROJECTS.forEach(function (project) {
            var FORMATTED_TITLE = helperVar.HTMLprojectTitle.replace('%url%', project.URL),
                FORMATTED_TITLE = FORMATTED_TITLE.replace('%data%', project.TITLE),
                FORMATTED_DATES = helperVar.HTMLprojectDates.replace('%data%', project.DATES),
                FORMATTED_GITURL = helperVar.HTMLprojectGiturl.replace('%data%', project.GITURL);
            FORMATTED_GITURL = FORMATTED_GITURL.replace('#2', project.GITURL);
            $('#projects').append(helperVar.HTMLprojectStart);
            $('.project-entry:last').append(FORMATTED_TITLE);
            $('.project-entry:last').append(FORMATTED_DATES);
            $('.project-entry:last').append(helperVar.HTMLprojDescStart);
            project.DESCRIPTION.forEach(function (bullet) {
                var FORMATTED_PROJECT_DESC = helperVar.HTMLprojectDescription.replace('%data%', bullet);
                $('.project-entry:last').append(FORMATTED_PROJECT_DESC);
            });
            $('.project-entry:last').append(helperVar.HTMLprojectImageContainer);
            project.IMAGES.forEach(function (image) {
                var FORMATTED_IMAGE = helperVar.HTMLprojectImage.replace('%data%', image);
                $('.projectImg-entry:last').append(FORMATTED_IMAGE);
            });
            $('.project-entry:last').append(FORMATTED_GITURL);
            $('.project-entry:last').append('<hr>');
            $('#projects').hide();

        });
    },
    hideAll: function () {
        'use strict';
        $('#experience').fadeOut("fast");
        $('#menu-Experience').removeClass('selected');
        $('#education').fadeOut("fast").removeClass('selected');
        $('#menu-Education').removeClass('selected');
        $('#projects').fadeOut("fast").removeClass('selected');
        $('#menu-Projects').removeClass('selected');
    }
};

view.init();
$('#menu-Experience').addClass('selected');
$('#experience').fadeIn();

//logic to make navigation bar "float with scroll
$(document).ready(function () {
    'use strict';
    var num = 380; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.menu').addClass('fixed');
        } else {
            $('.menu').removeClass('fixed');
        }
    });
});
