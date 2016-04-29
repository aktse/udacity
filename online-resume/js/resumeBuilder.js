function format(element, replacement) {
	return element.replace("%data%", replacement);
};

function formatURL(element, replacement, url) {
	return format(element, replacement).replace("#", url);
};

var bio = {	
	"name": "Aaron Tse",
	"role": "Software Developer",
	"contacts": {
		"mobile": "111-111-1111",
		"email": "akt@ualberta.ca",
		"github": "http://github.com/aktse",
		"location": "Edmonton"
	},
	"welcomeMessage": "Hi there! Welcome to my resume :)",
	"skills": [
		"Agile", 
		"Web Development",
		"Linux",
		"Python",
		"RDBMS",
		"Java",
		"C++"
	],
	"biopic": "images/Profile.jpg"
};

var education = {
	"schools": [
		{
			"name": "University of Alberta",
			"location": "Edmonton", 
			"degree": "Bachelor of Science",
			"majors": ["Honors in Computing Science"],
			"dates": "09/12 - 06/16",
			"url": "http://ualberta.ca"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "04/16 - 05/16",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "JYLtek.inc",
			"title": "Software Developer",
			"location": "Edmonton",
			"dates": "05/15 - Current",
			"description": "I work as a software developer building an IOS point of sales system integrated with Microsoft Azure."
		},
		{
			"employer": "Machina Corp",
			"title": "Intern",
			"location": "Edmonton",
			"dates": "05/14 - 09/14",
			"description": "I worked as an intern, creating 3D models and manuals while learning about 3D printing."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Fbook",
			"dates": "01/16 - 04/16",
			"description": "Built a distributed social networking system as part of CMPUT 404 - Web Applications and Architecture. We utilized Flask, Postgresql, Jquery, Bootstrap and Heroku.",
			"images": []
		},
		{
			"title": "Imaginary",
			"dates": "01/16 - 04/16",
			"description": "Built a 2d platforming game as part of INTD 450 - Computers and Games. We used Pygame.",
			"images": []
		},
		{
			"title": "Hanoi Robot",
			"dates": "01/16 - 04/16",
			"description": "Built a mobile robot that used visual servoing to solve the 'Tower of Hanoi' puzzle. Our robot used the Lego EV3 brick and was programmed in Java using the provided SDK.",
			"images": []
		},
		{
			"title": "RFIs for the Faculty of Medicine",
			"dates": "09/15 - 12/15",
			"description": "Built a RFI (Request for Information) data collection system for the Faculty of Medicine as part of CMPUT 401 - Software Processes. We utilized Laravel, MySQL, Jquery and Bootstrap.",
			"images": []
		}
	]
};

bio.display = function() {
	$("#header").prepend(
		format(HTMLheaderRole, bio.role),
		format(HTMLheaderName, bio.name),
		format(HTMLwelcomeMsg, bio.welcomeMessage), 
		format(HTMLbioPic, bio.biopic));

	var contacts = bio.contacts;
	$("#topContacts").append(
		format(HTMLmobile, contacts.mobile), 
		format(HTMLemail, contacts.email), 
		format(HTMLgithub, contacts.github),
		format(HTMLlocation, contacts.location));

	$("#footerContacts").append(
		format(HTMLmobile, contacts.mobile), 
		format(HTMLemail, contacts.email), 
		format(HTMLgithub, contacts.github), 
		format(HTMLlocation, contacts.location));

	var skills = bio.skills;
	if (skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		skills.forEach(function(entry) {
			$("#skills").append(format(HTMLskills, entry));
		});
	}
};

education.display = function() {
	var schools = education.schools;
	if (schools.length > 0) {
		schools.forEach(function(entry) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(
				formatURL(HTMLschoolName, entry.name, entry.url) + format(HTMLschoolDegree, entry.degree),
				format(HTMLschoolDates, entry.dates),
				format(HTMLschoolLocation, entry.location));

			entry.majors.forEach(function(major) {
				$(".education-entry:last").append(format(HTMLschoolMajor, major));
			});
		});
	};

	var onlineCourses = education.onlineCourses;
	if (onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		onlineCourses.forEach(function(entry) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(
				formatURL(HTMLonlineTitle, entry.title, entry.url) + format(HTMLonlineSchool, entry.school),
				format(HTMLonlineDates, entry.date),
				format(HTMLonlineURL, entry.url));
		});
	}
};

work.display = function() {
	var jobs = work.jobs;
	if (jobs.length > 0) {
		jobs.forEach(function(entry) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(
				format(HTMLworkEmployer, entry.employer) + format(HTMLworkTitle, entry.title),
				format(HTMLworkDates, entry.dates),
				format(HTMLworkLocation, entry.location),
				format(HTMLworkDescription, entry.description));
		});
	}
};

projects.display = function() {
	var projs = projects.projects;
	if (projs.length > 0) {
		projs.forEach(function(entry) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(
				format(HTMLprojectTitle, entry.title),
				format(HTMLprojectDates, entry.dates),
				format(HTMLprojectDescription, entry.description));
			if (entry.images.length) {
				entry.images.forEach(function(img) {
					$(".project-entry:last").append(format(HTMLprojectImage, img));
				})
			}

		})
	}
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
