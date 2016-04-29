function format(element, replacement) {
	return element.replace("%data%", replacement);
}

function formatURL(element, replacement, url) {
	return format(element, replacement).replace("#", url);
}

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
}

var education = {
	"schools": [
		{
			"name": "University of Alberta",
			"location": "Edmonton", 
			"degree": "Bachelor of Science",
			"majors": "Honors in Computing Science",
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
}

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
}

var projects = {
	"projects": [
		{
			"title": "Fbook",
			"dates": "01/16 - 04/16",
			"description": "Built a distributed social networking system as part of CMPUT 404 - Web Applications and Architecture. We utilized Flask, Postgresql, Jquery, Bootstrap and Heroku.",
			"images": ""
		},
		{
			"title": "Imaginary",
			"dates": "01/16 - 04/16",
			"description": "Built a 2d platforming game as part of INTD 450 - Computers and Games. We used Pygame.",
			"images": ""
		},
		{
			"title": "Hanoi Robot",
			"dates": "01/16 - 04/16",
			"description": "Built a mobile robot that used visual servoing to solve the 'Tower of Hanoi' puzzle. Our robot used the Lego EV3 brick and was programmed in Java using the provided SDK.",
			"images": ""
		},
		{
			"title": "RFIs for the Faculty of Medicine",
			"dates": "09/15 - 12/15",
			"description": "Built a RFI (Request for Information) data collection system for the Faculty of Medicine as part of CMPUT 401 - Software Processes. We utilized Laravel, MySQL, Jquery and Bootstrap.",
			"images": ""
		}
	]
}

bio.display = function() {
	$("#header").prepend(format(HTMLheaderRole, bio.role));
	$("#header").prepend(format(HTMLheaderName, bio.name));

	var contacts = bio.contacts;
	$("#topContacts").append(format(HTMLmobile, contacts.mobile));
	$("#topContacts").append(format(HTMLemail, contacts.email));
	$("#topContacts").append(format(HTMLgithub, contacts.github));
	$("#topContacts").append(format(HTMLlocation, contacts.location));

	$("#footerContacts").append(format(HTMLmobile, contacts.mobile));
	$("#footerContacts").append(format(HTMLemail, contacts.email));
	$("#footerContacts").append(format(HTMLgithub, contacts.github));
	$("#footerContacts").append(format(HTMLlocation, contacts.location));

	$("#header").append(format(HTMLwelcomeMsg, bio.welcomeMessage));

	$("#header").append(format(HTMLbioPic, bio.biopic));

	var skills = bio.skills;
	if (skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		skills.forEach(function(entry) {
			$("#skills").append(format(HTMLskills, entry));
		});
	}
}

education.display = function() {
	var schools = education.schools;
	if (schools.length > 0) {
		schools.forEach(function(entry) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formatURL(HTMLschoolName, entry.name, entry.url) + format(HTMLschoolDegree, entry.degree));
			$(".education-entry:last").append(format(HTMLschoolDates, entry.dates));
			$(".education-entry:last").append(format(HTMLschoolLocation, entry.location));
			$(".education-entry:last").append(format(HTMLschoolMajor, entry.majors));
		})
	}

	var onlineCourses = education.onlineCourses;
	if (onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		onlineCourses.forEach(function(entry) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formatURL(HTMLonlineTitle, entry.title, entry.url) + format(HTMLonlineSchool, entry.school));
			$(".education-entry:last").append(format(HTMLonlineDates, entry.date));
			$(".education-entry:last").append(format(HTMLonlineURL, entry.url));
		})
	}
}

work.display = function() {
	var jobs = work.jobs;
	if (jobs.length > 0) {
		jobs.forEach(function(entry) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(format(HTMLworkEmployer, entry.employer) + format(HTMLworkTitle, entry.title));
			$(".work-entry:last").append(format(HTMLworkDates, entry.dates));
			$(".work-entry:last").append(format(HTMLworkLocation, entry.location));
			$(".work-entry:last").append(format(HTMLworkDescription, entry.description));
		})
	}
}

projects.display = function() {
	var projs = projects.projects;
	if (projs.length > 0) {
		projs.forEach(function(entry) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(format(HTMLprojectTitle, entry.title));
			$(".project-entry:last").append(format(HTMLprojectDates, entry.dates));
			$(".project-entry:last").append(format(HTMLprojectDescription, entry.description));
			if (entry.images != "") {
				$(".project-entry:last").append(format(HTMLprojectImage, entry.images));
			}

		})
	}
}

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
