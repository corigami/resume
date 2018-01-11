/*global window, document,$,helperVar, controller*/
/*eslint no-unused-vars: ["error", { "vars": "local" }]*/

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
    },

    // Display Menu - creates 'tabs' to display 
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

    //displayBio- creates 'tabs' to display 
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

        //add elements to header, we'll reuse them later for the footer   
        if (section === '#header') {
            contactLoc = '#topContacts';
            $(section).prepend(FORMATTED_BIOPIC);
            $(section).prepend(FORMATTED_ROLE);
            $(section).prepend(FORMATTED_NAME);
            $(contactLoc).append(FORMATTED_EMAIL);
            $(contactLoc).append(FORMATTED_GITHUB);
            $(contactLoc).append(FORMATED_LOCATION);

            // Add skills section to the bio
            $(section).append(helperVar.HTMLskillsStart);

            //Add header and toggle functionality for each skill group
            BIO.SKILLS.forEach(function (skillType) {
                var groupHeader = $(helperVar.HTMLskillsGroupHeader.replace('%data%', skillType.TYPE));
                groupHeader.css('cursor', 'pointer');
                $('#skill-group').append(groupHeader);

                groupHeader.click(function () {
                    if (groupHeader.hasClass('show')) {
                        $('.' + skillType.TYPE).each(function () {
                            view.toggleShow($(this), 'hide');
                        });
                    } else {
                        $('.' + skillType.TYPE).each(function () {
                            view.toggleShow($(this), 'show');
                        });
                    }
                    groupHeader.toggleClass('show');
                });

                //Add skills and toggle functionality to each group
                $('#skill-group').append($(helperVar.HTMLskillsGroupStart));
                skillType.SKILL.forEach(function (skill) {
                    var el = $(helperVar.HTMLskills.replace('%data%', skill).replace('%type%', skillType.TYPE)),
                        trimmedSkill = skill.replace(' ', '').toLowerCase();
                    el.css('cursor', 'pointer');
                    view.skillsToShow.push(trimmedSkill);

                    el.click(function () {
                        view.toggleShow(el);
                    });

                    if (!view.skillsToShow.includes(trimmedSkill)) {
                        view.skillsToShow.push(trimmedSkill);
                    }
                    $('.skills:last').append(el);
                });
            });
        }
    },
    //toggleShow - toggles bullets on and off based
    toggleShow: function (element, action) {
        'use strict';
        var trimmedSkill = element.text().replace(" ", "").toLowerCase(),
            ind = view.skillsToShow.indexOf(element.text().trimmedSkill);

        if (action === 'show') {
            view.skillsToShow.push(trimmedSkill);
            element.addClass('skill-color');
        } else if (action === 'hide') {

            view.skillsToShow.splice(ind, 1);
            element.removeClass('skill-color');
        } else {
            if (element.hasClass('skill-color')) {
                view.skillsToShow.splice(ind, 1);
            } else {
                view.skillsToShow.push(trimmedSkill);
            }
            element.toggleClass('skill-color');
        }

        //Hide all entries and only show items that apply to current filter
        $('.work-bullet').hide();
        $('.project-entry').hide();
        $('.education-entry').hide();
        $('.online-entry').hide();
        view.skillsToShow.forEach(function (skill) {
            $('.' + skill).show();
        });
    },

    //displayWork - displays experience tab when menu item is selected
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
                if (job.DESCRIPTION) {
                    job.DESCRIPTION.forEach(function (bullet) {
                        var FORMATTED_JOB_DESC = helperVar.HTMLworkDescription.replace('%data%', bullet);
                        $('.workDesc-entry:last').append(FORMATTED_JOB_DESC);
                    });
                }

                if (job.SKILLBULLET) {
                    job.SKILLBULLET.forEach(function (skillbullet) {
                        var el = $(helperVar.HTMLskillBullet.replace('%data%', skillbullet.BULLET));

                        skillbullet.SKILLS.forEach(function (skill) {
                            el.addClass(skill.replace(' ', '').toLowerCase());
                        });
                        $('.work-entry:last').append(el);
                    });
                }
            });
            $('.workDesc-entry:last').append(helperVar.HTMLworkDescEnd);
        }
        $('#experience').hide();
    },
    //displayEducation - displays education tab when selected from the menu
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
                FORMATTED_LOCATION = helperVar.HTMLschoolLocation.replace('%data%', school.LOCATION),
                edElement = $(helperVar.HTMLschoolContainer);
            FORMATTED_NAME = FORMATTED_NAME.replace('%url%', school.URL);

            if (school.SKILLS) {
                school.SKILLS.forEach(function (skill) {
                    edElement.addClass(skill.replace(' ', '').toLowerCase());
                });
            }

            $('#edFlex').append(edElement);
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
                FORMATTED_TOPIC = helperVar.HTMLonlineTopic.replace('%data%', online.TOPIC),
                onlineElement = $(helperVar.HTMLonlineSchoolContainer);
            FORMATTED_SCHOOL = FORMATTED_SCHOOL.replace('%url%', online.URL);

            if (online.SKILLS) {
                online.SKILLS.forEach(function (skill) {
                    onlineElement.addClass(skill.replace(' ', '').toLowerCase());
                });
            }

            $('#onlineFlex').append(onlineElement);
            $('.online-entry:last').append(FORMATTED_TITLE);
            $('.online-entry:last').append(FORMATTED_SCHOOL);
            $('.online-entry:last').append(FORMATTED_DATES);
            $('.online-entry:last').append(FORMATTED_TOPIC);

        });
        $('#education').hide();

    },

    //displayProjects - displays Project tab when selected from the menu
    displayProjects: function () {
        'use strict';
        var PROJECTS = controller.getProjects();
        PROJECTS.PROJECTS.forEach(function (project) {
            var FORMATTED_TITLE = helperVar.HTMLprojectTitle.replace('%url%', project.URL),
                FORMATTED_DATES = helperVar.HTMLprojectDates.replace('%data%', project.DATES),
                FORMATTED_GITURL = helperVar.HTMLprojectGiturl.replace('%data%', project.GITURL),
                projectElement = $(helperVar.HTMLprojectStart);
            FORMATTED_GITURL = FORMATTED_GITURL.replace('#2', project.GITURL);
            FORMATTED_TITLE = FORMATTED_TITLE.replace('%data%', project.TITLE);

            if (project.SKILLS) {
                project.SKILLS.forEach(function (skill) {
                    projectElement.addClass(skill.replace(' ', '').toLowerCase());
                });
            }

            $('#projects').append(projectElement);
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
