/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
var model = {
    BIO: {
        NAME: 'Corey Willinger',
        ROLE: 'Transitioning Cyber Operations Officer with a passion for Teaching, Coding, and Learning',
        CONTACTS: {
            EMAIL: 'corey.willinger@gmail.com',
            MOBILE: '',
            GITHUB: 'corigami',
            LOCATION: 'Dayton, OH, USA'
        },
        PICTURE: 'images/me2.jpg',
        WELCOME_MSG: '',
        SKILLS: [
            {
                TYPE: 'Technical',
                SKILL: [
                    'Agile',
                    'Avionics',
                    'C++',
                    'CSS',
                    'Cyber Security',
                    'Deep Learning',
                    'Design Patterns',
                    'Electronic Priniciples',
                    'GIT',
                    'HTML5',
                    'Java',
                    'JavaScript',
                    'JUnit',
                    'Networking',
                    'Object-Oriented',
                    'Programming',
                    'Security+',
                    'Software Engineering',
                    'Software Testing',
                    'Trouble-shooting',
                    'Visual Studio'
                ]
            }, {
                TYPE: 'Non-Technical',
                SKILL: [
                    'Acquisitions',
                    'Consulting',
                    'Communication',
                    'Critical Thinking',
                    'Customer Service',
                    'IT Management',
                    'Leadership',
                    'Management',
                    'Problem Solving',
                    'Program Management',
                    'Quality Assurance',
                    'Requirements',
                    'SharePoint',
                    'Strategic Planning',
                    'Teaching',
                    'Training'
                ]
            }
        ]
    },

    WORK: {
        JOBS: [
            {
                TITLE: 'Course Director, Avionics Cyber Vulnerability, Mitigation, and Protection',
                SKILLBULLET: [
                    {
                        BULLET: 'Develops/instructs course for avionics cyber vulnerability assessment processes for system program managers',
                        SKILLS: ['Software Engineering', 'Cyber Security', 'Security+', 'Teaching', 'Program Management', 'Acquisitions', 'Management', 'Communication', 'Critical Thinking']
                    },
                    {
                        BULLET: 'Developed/taught courses on software testing, development life-cycles, engineering & management topics',
                        SKILLS: ['Software Engineering', 'Agile', 'Teaching', 'Program Management', 'Education', 'Object-Oriented', 'Management', 'Critical Thinking', 'Communication']
                    },
                    {
                        BULLET: 'Developed 5+hrs video lesson content on Software Testing— TDD, Unit, Black-box, White-box, Integration, Planning',
                        SKILLS: ['Software Engineering', 'Agile', 'Teaching', 'Program Management', 'Education', 'Object-Oriented', 'Management', 'Critical Thinking', 'Communication']
                    },
                    {
                        BULLET: 'Coordinates with senior USAF officials to ensure cyber security and software education requirements are met',
                        SKILLS: ['Software Engineering', 'Consulting', 'Critical Thinking', 'Teaching', 'Program Management', 'Acquisitions', 'Management', 'Leadership', 'Communication']
                    },
                    {
                        BULLET: 'Provides programming and software design advice to local courseware developers for web based courses',
                        SKILLS: ['Software Engineering', 'Consulting', 'JavaScript', 'CSS', 'HTML5']
                    },
                    {
                        BULLET: 'Manages collaboration through milSuite.mil; develops custom web interactions and products',
                        SKILLS: ['HTML5', 'CSS', 'JavaScript', 'MS Office', 'SharePoint', 'Management', 'Leadership', 'Communication', 'Programming']
                    }, 
                    {
                        BULLET: 'Developed multiple HTML5/JavaScript utilities to support and display self-created educational video content',
                        SKILLS: ['Critical Thinking', 'JavaScript', 'HTML5', 'Programming']
                    },
                    {
                        BULLET: 'Managed SharePoint 2007/2013 intranet for 10K+ users; design custom sites, web parts, managed permissions',
                        SKILLS: ['HTML5', 'JavaScript', 'MS Office', 'SharePoint', 'Management', 'Leadership', 'Communication']
                    }
                ],
                EMPLOYER: 'USAF',
                DATES: '2015-Present',
                LOCATION: 'Wright-Patterson AFB, OH, USA',
                URL: 'https://www.afit.edu'
            }, {
                TITLE: 'Adjunct Faculty',
                SKILLBULLET: [
                    {
                        BULLET: 'Teaches programming: pseudo-code, Java, C++, HTML, CSS, JavaScript',
                        SKILLS: ['Software Engineering', 'Teaching', 'Java', 'JUnit', 'C++', 'HTML5', 'CSS', 'JavaScript', 'Communication', 'Programming']
                    },
                    {
                        BULLET: 'Demonstrates Object-Oriented concepts - program design, tracing, debugging, composition, inheritance',
                        SKILLS: ['Software Engineering', 'Teaching', 'Critical Thinking', 'Java', 'C++', 'HTML5', 'CSS', 'JavaScript', 'Communication', 'Programming']
                    },
                    {
                        BULLET: 'Teaches introductory computer architecture topics: combinational/sequential logic and CPU concepts',
                        SKILLS: ['Software Engineering', 'Teaching', 'Avionics', 'Electronic Principles', 'Hardware']
                    },
                    {
                        BULLET: 'Develops and implements class syllabi, lectures, coding exercises; ensures standards are met on time',
                        SKILLS: ['Teaching', 'Program Management', 'Critical Thinking', 'Education', 'Leadership', 'Communication']
                    },
                    {
                        BULLET: 'Assesses student grades based on performance, participation, assignments and examinations',
                        SKILLS: ['Teaching', 'Program Management', 'Education', 'Management']
                    }
                ],
                EMPLOYER: 'Park University',
                DATES: '2016-Present',
                LOCATION: 'Wright-Patterson AFB, OH, USA',
                URL: 'https://military.park.edu/location/park-university-at-wright-patterson-afb-in-dayton-oh/'
            },
            {
                TITLE: 'Branch Chief, Network Infrastructure / Plans & Programs Division Chief',
                SKILLBULLET: [
                    {
                        BULLET: 'Led 9 civ/mil personnel in Plans & Programming, Budget, and Information Assurance',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Acquisitions',
                                'Cyber Security', 'Security+', 'Program Management', 'Requirements']
                    },
                    {
                        BULLET: 'Managed $1 Mil budget, established purchase processes, reviewed/approved IT requirements',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Acquisitions',
                                'Cyber Security', 'Program Management', 'Requirements', 'Critical Thinking']
                    },
                    {
                        BULLET: 'Directed/managed Air Force Institute of Technology Network Certification and Accreditation process',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Critical Thinking', 'Information Technology', 'Cyber Security', 'Program                Management', 'Requirements']
                    },
                    {
                        BULLET: 'Managed CISCO network infrastructure, VoIP, Video Conferencing System',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Cyber Security', 'Program Management', 'Networking']
                    }
                ],
                EMPLOYER: 'USAF',
                DATES: '2011-2013',
                LOCATION: 'Wright-Patterson AFB, OH, USA',
                URL: 'https://www.afit.edu'
            }, {
                TITLE: 'Officer in Charge, Client Systems Branch / Project Manager',
                DESCRIPTION: [

                ],
                SKILLBULLET: [
                    {
                        BULLET: 'Led 90 mil/civilian personnel in help desk, Land Mobile Radio, Plans and Programs and Quality Assurance work centers',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Customer Service', 'Communication', ' Customer Service', 'Program Management', 'Requirements', 'Quality Assurance']
                    },
                    {
                        BULLET: 'Coordinated critical network infrastructure and airfield maintenance actions, outages, and upgrades',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Program Management', 'Requirements', 'Quality Assurance']
                    },
                    {
                        BULLET: 'Directed network infrastructure, VoIP, VTC, and satellite communications systems for deployed Special Operations',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Program Management', 'Requirements', 'Quality Assurance']
                    },
                    {
                        BULLET: 'Lead vulnerability remediation efforts; 3000 computers/printers--earned excellent on HQ Cyber Readiness inspection ',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Program Management', 'Requirements', 'Cyber Security', 'Security+', 'SharePoint']
                    },
                    {
                        BULLET: 'Managed procurement, tracking and distribution of $25 Million in installation IT assets',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Program Management', 'Requirements', 'Quality               Assurance']
                    }
                ],
                EMPLOYER: 'USAF',
                DATES: '2007-2008',
                LOCATION: 'Hurlburt Field, FL, USA',
                URL: 'http://www.hurlburt.af.mil/About-Us/Fact-Sheets/Fact-Sheets/Article/204544/1st-special-operations-communications-squadron/'
            }, {
                TITLE: 'Wing Equipment Control Officer',
                SKILLBULLET: [
                    {
                        BULLET: 'Managed 105 IT Equipment Custodians, spanning 54 accounts',
                        SKILLS: ['Leadership', 'Management', 'Information Technology', 'Program Management', 'Requirements']
                    }, {
                        BULLET: 'Procured IT assets for the wing through purchasing channels and no-cost lateral resources',
                        SKILLS: ['Management', 'Strategic Planning', 'Information Technology', 'Program Management', 'Requirements', 'IT Management', 'Acquisitions']
                    }, {
                        BULLET: 'Ensured compliance with federal and Air Force mandates for software management',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Program Management', 'Requirements', 'Quality                Assurance', 'Program Management', 'IT Management']
                    }, {
                        BULLET: 'Coordinated IT service requests with higher divisions',
                        SKILLS: ['Management', 'Strategic Planning', 'Information Technology',
                                'Program Management', 'Requirements', 'Quality Assurance', 'Communication', 'IT Management']
                    }, {
                        BULLET: 'Managed $5 million in Wing IT assets',
                        SKILLS: ['Leadership', 'Management', 'Strategic Planning', 'Information Technology', 'Program Management', 'Requirements', 'Quality                Assurance']
                    }
                ],
                EMPLOYER: 'USAF',
                DATES: '2012-2013',
                LOCATION: 'Hill AFB, UT, USA',
                URL: 'http://www.388fw.acc.af.mil/'
            }, {
                TITLE: 'Automated Test Station Production Supervisor',
                SKILLBULLET: [
                    {
                        BULLET: 'Supervised maintenance actions of 42 personnel on three Avionics Test Station and ' +
                            'F-16 Line Replaceable Units for 66 assigned aircraft',
                        SKILLS: ['Leadership', 'Management', 'Avionics', 'Trouble-shooting', 'Electronic Priniciples']
                    }, {
                        BULLET: 'Provided extensive troubleshooting knowledge and training for complex malfunctions',
                        SKILLS: ['Leadership', 'Management', 'Avionics', 'Trouble-shooting', 'Electronic Priniciples']
                    }, {
                        BULLET: 'Ensured section compliance with safety, environmental, and security programs',
                        SKILLS: ['Management', 'Quality Assuance', 'Program Management']
                    }, {
                        BULLET: 'Evaluated team leader and team member production skills, aptitude, and proficiency',
                        SKILLS: ['Leadership', 'Management', 'Avionics', 'Trouble-shooting', 'Electronic Priniciples', 'Quality Assurance', 'Training']
                    }, {
                        BULLET: 'Managed squadron and section level Data Integrity Team program for maintenance documentation accuracy',
                        SKILLS: ['Management', 'Trouble-shooting', 'Quality Assurance']
                    }, {
                        BULLET: 'Managed $18 million of test and support equipment',
                        SKILLS: ['Management', 'Avionics']
                    }, {
                        BULLET: 'Developed and maintained 50 user MS Access Database - tracked production data for all maintenance actions',
                        SKILLS: ['Management', 'Trouble-shooting', 'Quality Assurance', 'Programming', 'Critical Thinking']
                    }
                ],
                EMPLOYER: 'USAF',
                DATES: '2005-2007',
                LOCATION: 'Hill AFB, UT, USA',
                URL: 'http://www.388fw.acc.af.mil/'
            }, {
                TITLE: 'Avionics Intermediate Section Production Supervisor',
                SKILLBULLET: [
                    {
                        BULLET: 'Led maintenance actions of 11 personnel on Improved Avionics Test Station, A-10 and F-16 Line Replaceable units',
                        SKILLS: ['Leadership', 'Management', 'Avionics', 'Trouble-shooting', 'Electronic Priniciples']
                    }, {
                        BULLET: 'Established work methods, production controls and performance standards for assigned tasks',
                        SKILLS: ['Leadership', 'Management', 'Avionics', 'Trouble-shooting', 'Electronic Priniciples', 'Quality Assurance']
                    }, {
                        BULLET: 'Ensured compliance with safety, environmental, training, equipment account and security programs',
                        SKILLS: ['Leadership', 'Management', 'Avionics', 'Trouble-shooting', 'Electronic Priniciples', 'Program Management']
                    }, {
                        BULLET: 'Managed $5.2 million of test and support equipment',
                        SKILLS: ['Management', 'Quality Assuance', 'Program Management']
                    }, {
                        BULLET: 'Maintained 65 user MS Access Database - tracked production data for all maintenance actions',
                        SKILLS: ['Management', 'Trouble-shooting', 'Quality Assurance', 'Programming', 'Critical Thinking']
                    }, {
                        BULLET: 'Led flight control center during exercise and contingency operations',
                        SKILLS: ['Leadership', 'Training', 'Critical Thinking']
                    }
                ],
                EMPLOYER: 'USAF',
                DATES: '2004-2005',
                LOCATION: 'Osan AB, South Korea',
                URL: 'http://www.osan.af.mil/'
            }, {
                TITLE: 'Avionics Intermediate Shop Team Leader',
                SKILLBULLET: [
                    {
                        BULLET: 'Ensured four repair team members were qualified to perform assigned tasks',
                        SKILLS: ['Leadership', 'Management', 'Avionics', 'Trouble-shooting', 'Electronic Priniciples']
                    }, {
                        BULLET: 'Managed and directed work effort of the repair team; was responsible for the quality of maintenance actions',
                        SKILLS: ['Leadership', 'Management', 'Avionics', 'Trouble-shooting', 'Electronic Priniciples', 'Quality Assurance']
                    }, {
                        BULLET: 'Ensured assigned equipment was properly maintained, repaired and calibrated to published standards',
                        SKILLS: ['Leadership', 'Management', 'Avionics', 'Trouble-shooting', 'Electronic Priniciples', 'Program Management']
                    }, {
                        BULLET: 'Maintained, programmed and performed time critical updates on avionic components, test stations and support equipment',
                        SKILLS: ['Management', 'Quality Assuance', 'Program Management', 'Critical Thinking', 'Trouble-shooting']
                    }, {
                        BULLET: 'Wrote Career Development Course Tester program in Java - helped 40+ maintainers pass qualification tests',
                        SKILLS: ['Java', 'Programming', 'Object-Oriented', 'Critical Thinking', 'Trouble-shooting']
                    }
                ],
                EMPLOYER: 'USAF',
                DATES: '2001-2004',
                LOCATION: 'Luke AFB, AZ, USA',
                URL: 'http://www.luke.af.mil/'

            }, {
                TITLE: 'Avionics Intermediate Shop Team Member',
                SKILLBULLET: [
                    {
                        BULLET: 'Operated, troubleshoot, repaired, inspected, and calibrated three Radar/Electronic Warfare Avionic Test Stations',
                        SKILLS: ['Avionics', 'Trouble-shooting', 'Electronic Priniciples']
                    }, {
                        BULLET: 'Performed maintenance, calibration, and operation checkout on Line Replaceable Units for 31 assigned B-1B aircraft',
                        SKILLS: ['Avionics', 'Trouble-shooting', 'Electronic Priniciples', 'Quality Assurance']
                    }, {
                        BULLET: 'Managed work center section Electronic Static Discharge program, ensured standards were met or exceeded - zero defects',
                        SKILLS: ['Management', 'Electronic Priniciples', 'Program Management']
                    }, {
                        BULLET: 'Developed scripts for terminal emulation program to automate maintenance logging and processing procedures',
                        SKILLS: ['Trouble-shooting', 'Critical Thinking', 'Programming']
                    }, {
                        BULLET: 'Maintained, programmed and performed time critical updates on avionic components, test stations and support equipment',
                        SKILLS: ['Management', 'Quality Assuance', 'Program Management', 'Critical Thinking', 'Trouble-shooting']
                    }, {
                        BULLET: 'Managed $8.1 million of test and support equipment',
                        SKILLS: ['Management', 'Quality Assuance', 'Program Management']
                    }
                ],
                EMPLOYER: 'USAF',
                DATES: '1998-2001',
                LOCATION: 'Ellsworth AFB, SD, USA',
                URL: 'http://www.ellsworth.af.mil/'
            }
        ]
    },

    EDUCATION: {
        SCHOOLS: [
            {
                NAME: 'Air Force Institute of Technology',
                DEGREE: 'Masters',
                MAJOR: 'Computer Science (Software Engineering)',
                DATES: '2013 - 2015',
                LOCATION: 'Wright-Patterson AFB, OH, USA',
                URL: 'http://www.afit.edu',
                SKILLS: ['Software Engineering', 'Cyber Security', 'Management', 'Communication', 'Critical Thinking', 'R', 'Java', 'C++', 'Object-Oriented', 'Software Testing', 'Visual Studio', 'Agile', 'Problem Solving']
            }, {
                NAME: 'Park University',
                DEGREE: 'Bachelors (Summa Cum Laude)',
                MAJOR: 'Computer Science',
                DATES: '2002 - 2007',
                LOCATION: 'Hill AFB, UT',
                URL: 'http://www.park.edu',
                SKILLS: ['Java', 'C++', 'Object-Oriented', 'Programming', 'Visual Studio', 'Critical Thinking', 'Problem Solving']
            }
        ],
        ONLINE: [
            {
                SCHOOL: 'Udacity',
                TITLE: 'Nano-degree: Deep Learning Fundamentals',
                DATES: '2017-Present',
                TOPIC: 'Neural , Convolutional, Recurrent, and Generative Adversarial Networks, ' +
                    'Keras, Tensorflow, Python',
                URL: 'http://www.udacity.com',
                SKILLS: ['Software Engineering', 'Python', 'Deep Learning', 'Critcal Thinking', 'Programming', 'Problem Solving']
            },
            {
                SCHOOL: 'Udacity',
                TITLE: 'Nano-degree: Front-end Web Development',
                DATES: 'June 2015- Jan 2016',
                TOPIC: 'HTML5, CSS3, JavaScript, Responsive Design, Website Optimization, Version Control',
                URL: 'http://www.udacity.com',

                SKILLS: ['Software Engineering', 'Critical Thinking', 'JavaScript', 'HTML5', 'JUnit', 'Agile', 'Communication', 'Problem Solving']
            },
            {
                SCHOOL: 'AFIT',
                TITLE: 'Cyber 200',
                DATES: 'Sep 2015',
                TOPIC: 'Network defense and exploitation, security appliances and tools, national policy',
                URL: 'http://www.afit.edu',
                SKILLS: ['Cyber Security', 'Security+', 'Critical Thinking', 'Networking', 'Strategic Thinking', 'Communication', 'Problem Solving']
            },
            {
                SCHOOL: 'AFIT',
                TITLE: 'Instructor Certification Course ',
                DATES: 'June 2015',
                TOPIC: '(40 Hours) Instructional System Design, Active Learning methods, presentation techniques',
                URL: 'http://www.afit.edu',
                SKILLS: ['Teaching', 'Program Management', 'Management', 'Communication', 'Critical Thinking']
            },
            {
                SCHOOL: 'Comptia',
                TITLE: 'Security+ Certification',
                DATES: 'Valid: Jul 2013 - Present',
                TOPIC: 'Security, netowork controls, physical controls, Cyber Security concepts, encryption, continuity planning',
                URL: 'https://certification.comptia.org',
                SKILLS: ['Cyber Security', 'Security+', 'Critical Thinking']
            }, {
                SCHOOL: 'Air Force Training Command',
                TITLE: 'Cyberspace Officer Network Training (CCNA based)',
                DATES: 'Apr 2012',
                TOPIC: '(117 Hours) IPv4 Network training, Cisco switch & router configuration',
                URL: '#',
                SKILLS: ['Cyber Security', 'Security+', 'Networking', 'Critical Thinking']
            },
            {
                SCHOOL: 'Air Force Training Command',
                TITLE: 'Basic Communications Officer Training ',
                DATES: 'May 2009',
                TOPIC: '(208 Hours) Satellite Communications, Large Scale Networks, Net-Ops, Cyber Defense',
                URL: '#',
                SKILLS: ['Leadership', 'Management', 'Communication', 'Critical Thinking', 'IT Managagement', 'Networking', 'Strategic Planning']
            },
            {
                SCHOOL: 'Air Education & Training Command',
                TITLE: 'Officer Training School',
                DATES: 'Sep-Nov 2008',
                TOPIC: 'Management, Leadership, Air and Space Military Doctrine, Critical Thinking',
                URL: '#',
                SKILLS: ['Leadership', 'Management', 'Communication', 'Critical Thinking', 'Strategic Planning', 'Problem Solving']
            },
            {
                SCHOOL: 'Aviation and Electronic Schools of America',
                TITLE: 'FCC General Radiotelephone Operator\'s License \\w Radar Endorsement',
                DATES: 'Nov 2002',
                TOPIC: 'Electronic/RF theory, analog/digital circuitry, computing principles',
                URL: '#',
                SKILLS: ['Electronic Principles', 'Avionics', 'Critical Thinking']
            },
            {
                SCHOOL: 'Air Force Training Command',
                TITLE: 'Electronic Principles',
                DATES: 'Jan-Apr 1998',
                TOPIC: '(504 Hours) Electronic/RF theory, analog/digital circuitry, computing principles',
                URL: '#',
                SKILLS: ['Electronic Principles', 'Avionics']
            }


        ]
    },

    PROJECTS: {
        PROJECTS: [
            {
                TITLE: 'Personal Resume Site',
                DATES: '2016 - Present',
                DESCRIPTION: [
                    'Implements Responsive Design using JavaScript, jQuery, async API calls to Google Maps, MVC Design Pattern',
                    'Interactive components - filters display by on selected skills',
                    'Hosted on personally managed/controlled domain using SFTP, remote admin'
                ],
                URL: 'https://www.gamisweb.com',
                GITURL: 'https://github.com/corigami/resume',
                IMAGES: [
                    'images/resume.JPG'
                ],
                SKILLS: ['Software Engineering', 'JavaScript', 'HTML5', 'Agile', 'Programming', 'GIT', 'Communication', 'Critical Thinking']
            }, {
                TITLE: 'OMNet++ UAV P2P File Replication Simulation',
                DATES: '2015',
                DESCRIPTION: [
                    'Master\'s Thesis project, examining impact of file replication in a UAV swarm utilizing reactive MANET protocols',
                    'Produced utilizing OMNeT++ v4.6 and is written in C++',
                    'Simulates a swarm of UAVs generating files at variable rates',
                    'Implmented custom variation of ORION transfer protocol for MANETs ',
                    'Results were analyzed with and documented utilizing custom R scripts and Latex.',
                    'Full Thesis can viewed at the Defense Technical Information Center by clicking on the Title link'
                ],
                URL: 'http://www.dtic.mil/docs/citations/ADA615415',
                EMBED: '<iframe src="https://mix.office.com/embed/zvbylas7wt19" frameborder="0" allowfullscreen></iframe>',
                GITURL: 'https://github.com/corigami/thesis_orion_omnet',
                IMAGES: [
                    'images/omnet.jpg'
                ],
                SKILLS: ['Software Engineering', 'Software Testing', 'Object-Oriented','Design Patterns', 'Agile', 'Programming', 'Problem Solving', 'GIT', 'Communication', 'Critical Thinking']
            },
            {
                TITLE: 'Unity 3D Ant Colony Optimization',
                DATES: '2014',
                DESCRIPTION: [
                    'Written in C# utilizing Unity 3d game environment',
                    'Implementes Ad hoc On-demand Distance Vector (AODV) routing protocol',
                    'Demonstrates Ant Colony Optimization and Genetic algorithm to produce a minimally connected dominated set (MCDS)',
                    'Extendable to use different mobility and network models due to implemention using SOLID design principles'
                ],
                URL: 'https://github.com/corigami/Simulator',
                GITURL: 'https://github.com/corigami/Simulator',
                IMAGES: [
                    'images/unityACO_sq_300.jpg',
                    'images/unityACO_300_b.jpg'
                ],
                SKILLS:  ['Software Engineering', 'JavaScript', 'Software Testing', 'Object-Oriented','Design Patterns','HTML5', 'Agile', 'Programming', 'Problem Solving', 'GIT', 'Communication', 'Critical Thinking']
            },
            {
                TITLE: 'Computer Science Course Videos',
                DATES: '2016',
                DESCRIPTION: [
                    'Created 35 videos of multimedia content for Computer Science; Supports Flipped Classroom construct',
                    'Demostrates Course theory and samples of programs-- allows more time for in class labs and exercises'
                ],
                URL: 'https://www.youtube.com/watch?v=WCP_j29HBA8&list=PL3hxNehc1Jwlwye68RhpB7ZsfektFU73G',
                IMAGES: [
                    'images/video_sample.JPG'
                ],
                SKILLS:  ['Software Engineering', 'JavaScript', 'Software Testing', 'Object-Oriented','Design Patterns','HTML5', 'Programming', 'Problem Solving', 'GIT', 'Communication', 'Critical Thinking']
            },
            {
                TITLE: 'Software Testing Course Videos',
                DATES: '2015',
                DESCRIPTION: [
                    'Created 30 videos of multimedia content for Software Testing curriculum utilized to support distance learning',
                    'Demostrates fundamental concepts of Software Testing--Functional Testing, Structural Testing, Testing Strategies, Test Planning'
                ],
                URL: 'https://www.youtube.com/watch?v=uDoNL77FzTE&list=PL3hxNehc1Jwl17w1Jsoe-H4_m2XyXG-Nj',
                IMAGES: [
                    'images/swTest_vid_sample.PNG'
                ],
                SKILLS:  ['Software Engineering', 'JavaScript', 'Software Testing', 'Object-Oriented','Design Patterns','HTML5', 'Agile', 'Programming', 'Problem Solving', 'GIT', 'Communication', 'Critical Thinking']
            },{
                TITLE: 'Software Testing Video Player',
                DATES: '2016',
                DESCRIPTION: [
                    'Designed HTML5 Video Player for Software Testing videos for use on MilSuite plaform',
                    'Developed Dynamic UI elements to display video content in logical and accessible manner',
                    'Uses AJAX call to retrieve closed-captioning information from alternate location'
                ],
                URL: 'www.milSuite.mil/book/groups/spdp',
                GITURL: 'https://github.com/corigami/milSuiteVideoPlayer',
                IMAGES: [
                    'images/swtest_vid_player.PNG'
                ],
                SKILLS: ['Software Engineering', 'JavaScript', 'HTML5', 'Agile', 'Programming', 'GIT', 'Communication', 'Critical Thinking']
            }, {
                TITLE: 'Closed Captioning VTT File Creator',
                DATES: '2016',
                DESCRIPTION: [
                    'Designed HTML5 utility to generate closed caption files to support Sec 508 compliance',
                    'Developed using the state design pattern to handle mouse events based on video type and timing',
                ],
                URL: 'www.milSuite.mil/book/groups/spdp',
                GITURL: 'https://github.com/corigami/vttCreator',
                IMAGES: [
                    'images/VTT_creator.PNG'
                ],
                SKILLS: ['Software Engineering', 'JavaScript', 'HTML5', 'Agile', 'Programming', 'GIT', 'Communication', 'Critical Thinking']
            },
            {
                TITLE: 'ToC Sim v2',
                DATES: '2017',
                DESCRIPTION: [
                    'Reworked version of Theory of Constraints Simulation v1 (below)',
                    'Implemented Unit Tests through Extensive use of Jasmin Testing Framework',
                    'Test Script can be run at https://www.gamisweb.com/toc2/test/SpecRunner.html',
                    'Unit tests can be viewed in github repository'
                ],
                URL: 'https://www.gamisweb.com/toc2',
                GITURL: 'https://github.com/corigami/TOC-Sim-2',
                IMAGES: [
                    'images/toc2_1.JPG',
                    'images/toc2_2.JPG'
                ],
                SKILLS: ['Software Engineering', 'JavaScript', 'HTML5', 'Agile', 'Programming', 'GIT', 'Communication', 'Critical Thinking']
            }, {
                TITLE: 'Theory of Constraints Simulation v1',
                DATES: '2016',
                DESCRIPTION: [
                    'Theory of Constraints and Critical Chain theory for logistics management',
                    'Makes use of the Chart.js to dynamicly build graphs based on simulation data',
                    'Uses jQuery to ease managment of input data'
                ],
                URL: 'http://www.gamisweb.com/toc',
                GITURL: 'https://github.com/corigami/ToC-Sim',
                IMAGES: [
                    'images/toc_500.JPG'
                ],
                SKILLS: ['Software Engineering', 'JavaScript', 'HTML5', 'Agile', 'Programming', 'GIT', 'Communication', 'Critical Thinking']
            },
            {
                TITLE: 'RSS Feed - Test Driven Development Using Jasmine',
                DATES: '2016',
                DESCRIPTION: [
                    'Uses Jasmine JavaScript Testing Framework to conduct unit tests on a basic web application',
                    'Tests for functionality of have certain functions have been implemented',
                    'Developed using red-green-refactor Test Driven Development methodology'
                ],
                URL: 'http://www.gamisweb.com/tdd',
                GITURL: 'https://github.com/corigami/FEND-feedreader-testing',
                IMAGES: [
                    'images/rss.JPG'
                ],
                SKILLS: ['Software Engineering', 'JavaScript', 'Software Testing', 'HTML5', 'Agile', 'Programming', 'GIT', 'Communication', 'Critical Thinking']
            },
            {
                TITLE: 'Neighborhod Map',
                DATES: '2016',
                DESCRIPTION: [
                    'Responsive design, asynchronous third-party API calls to Google and Wikipedia',
                    'Encorperates error-handling, separation of concerns,and MVVM design pattern',
                    'Utilizes jQuery and Knockout.js frameworks to support interface requirements'
                ],
                URL: 'http://www.gamisweb.com/map',
                GITURL: 'https://github.com/corigami/FEND-neighborhood-map',
                IMAGES: [
                    'images/map.JPG'
                ],
                SKILLS: ['Software Engineering', 'Object-Oriented','JavaScript', 'Software Testing', 'HTML5', 'Agile', 'Programming', 'GIT', 'Communication', 'Critical Thinking']
            },
            {
                TITLE: 'Arcade Game Clone',
                DATES: '2015',
                DESCRIPTION: [
                    'Demonstrates Object Oriented Programming in JavaScript',
                    'Implements working movement controller, collision detection with enemies and obstacles and level progression.'],
                URL: 'http://www.gamisweb.com/frogger',
                GITURL: 'https://github.com/corigami/frontend-nanodegree-arcade-game',
                IMAGES: [
                    'images/frogger.JPG'
                ],
                SKILLS: ['Software Engineering', 'JavaScript', 'Object-Oriented','Design Patterns','Software Testing', 'HTML5', 'Agile', 'Programming', 'GIT', 'Communication', 'Problem Solving', 'Critical Thinking']
            },
            {
                TITLE: 'Career Development Course Tester',
                DATES: '2005ish',
                DESCRIPTION: [
                    'Implements Java Swing libaray for UI elements',
                    'Created and integrated text parser to load data from from external files',
                    'Created before completing undergradute degree'
                ],
                GITURL: 'https://github.com/corigami/gamitester',
                URL: 'https://github.com/corigami/gamitester',
                IMAGES: [
                    'images/cdcTester_sq_300.jpg',
                    'images/cdcTester_sq_300b.jpg',
                    'images/cdcTester_sq_300c.jpg'
                ],
                SKILLS: ['Programming', 'Java', 'Programming', 'Problem Solving', 'GIT', 'Object-Oriented','Critical Thinking']
            }
        ]
    }
};
