var bio = {
	"name": "Simone Raponi",
	"role": "Computer Scientist",
	"contacts": {
		"email": "s.raponi.93@gmail.com",
		"github": "SimoneRaponi",
		"location": "Rome, Italy",
		"mobile": "393 0897 242"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "I'm currently part of the research group of Prof. Alessandro Mei and Prof. Julinda Stefa at the University La Sapienza of Rome.",
	"skills": ["Distributed systems", "Cloud Computing", "Security", "Privacy", "Machine Learning", "Social Networks"]
};

var work = {
	"jobs": [
		{
			"employer": "",
			"title": "",
			"location": "",
			"datesWorked": "",
			"description": ""
		}
	]
};

var education = {
	"schools": [
		{ "name": "University La Sapienza of Rome",
			"datesAttended": "January 2016 - October 2017",
			"location": "Rome, Italy",
			"degree": "Master Degree",
			"major": "Computer Science",
			"grade": "110/110 summa cum laude",
			"thesis": "Geographical De-Anonymization of Crowds in the Dark Web -- (Privacy)"
		},
		{ "name": "University La Sapienza of Rome",
			"datesAttended": "September 2012 - January 2016",
			"location": "Rome, Italy",
			"degree": "Bachelor Degree",
			"major": "Computer Science",
			"grade": "110/110 summa cum laude",
			"thesis": "An Administrative Model for Attribute Based Access Control (ABAC) -- (Security)"
		},
	],
	"onlineCourses": []
};

var workProjects = {
	"projects": [
		{
			"title": "OnionGatherer",
			"datesWorked": "June 2016 - January 2017",
			"description": "OnionGatherer is a Google Chrome extension that allows to know the hidden " + 
			"services status without surfing the Tor Networks. After the installation, when the user " +
			"is surfing the web, OnionGatherer collects all the URL inside the visited pages and " + 
			"provides an instant visual response to their status. The extension is composed by a " + 
			"client component and a server component. The client, developed entirely in javascript, " + 
			"automatically sends all the hidden services' address to the server. It makes a parsing " + 
			"of the text content of the visited pages and stores inside a data structure all the ones " +  
			"that match with a synthetic regex. It converts the data to JSON and it sends them to the " + 
			"server. Once it receives the response, the client makes an HTML injection inside the page " +
			"in order to place the corresponding marker near to each address. The marker will be " + 
			"green if the hidden service is up, red if it is down, orange if it is currently evaluated. " + 
			"The server is entirely developed using Django web framework, Apache web service and Postgres db. " + 
			"It is composed by three components: a dedicated layer for the APIs that allows the interfacing; " + 
			"a batch module, useful to asynchronously evaluate the status of the addresses that are not in " + 
			"the database; a module called 'service extractor' that can obtain updated information about hidden " + 
			"service exploiting several services that are both in the clear and in the dark web. " +
			"OnionGatherer's source code was released open source on GitHub, capturing the attention of " +
			"the Tor developers community"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Machine Learning Virtual Firewall Performance Evaluation",
			"datesWorked": "February 2017 - June 2017",
			"description": "Development of a virtual firewall performance evaluation model. " 
			+ "The firewall uses Machine Learning algorithms to dinamically update its rules",
		},
		{
			"title": "VPN Penetration Testing",
			"datesWorked": "October 2016 - January 2017",
			"description": "Penetration testing on a virtual network composed by host in different levels " + 
			"using metasploit, the world's most used penetration testing software",
		},
		{
			"title": "Symbolic Execution",
			"datesWorked": "October 2016 - January 2017",
			"description": "Binary file analysis using the framework Angr. The symbolic execution is useful "
			 + "in order to determine what inputs cause each part of program to execute",
		},
		{
			"title": "BasketBall Forecasting",
			"datesWorked": "February 2016 - June 2016",
			"description": "Prediction of the outcome of a direct match of BasketBall "
			 + "using anonymous information about the previous matches and Weka, "
			 + "an automatic learning software",
		},
		{
			"title": "Vulnerability Static Analysis",
			"datesWorked": "February 2016 - June 2016",
			"description": "Vulnerability analysis of a software using static analysis tools like "
			 + "YASCA, RIPS, RATS, Visual Code Grepper and PREfast"
		},
		{
			"title": "OWASP Standard Satisfaction",
			"datesWorked": "February 2016 - June 2016",
			"description": "Security requirement verification of MediaWiki using the OWASP "
			 + "Application Security Verification Standard 3.0. MediaWiki is a free software "
			 + "open source wiki package writter in PHP, originally for use on Wikipedia"
		},
		{
			"title": "Co-occurrences of Items in Transactional Data",
			"datesWorked": "February 2016 - June 2016",
			"description": "Development and optimization of a scalable software that exploits "
			 + "the distributed computation offered by Apache Map Reduce to calculate "
			 + "several conditioned probabilities inside transactional data "
		},
		{
			"title": "Archers' Revenge",
			"datesWorked": "February 2013 - June 2013",
			"description": "Design and management of the tower defense game Archers' Revenge "
			 + " using playN, a Java multi-platform development framework"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

//displayWork();

workProjects.display = function() {
	if(workProjects.projects.length > 0) {
		for(i in workProjects.projects) {
			$("#workProjects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", workProjects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", workProjects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", workProjects.projects[i].description);

			$(".work-project-entry:last").append(formattedProjectTitle);
			$(".work-project-entry:last").append(formattedProjectDates);
			$(".work-project-entry:last").append(formattedProjectDescription);

			/*
			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			*/

		}
	}
}

workProjects.display();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLacademicProjectStart);

			var formattedAcademicProjectTitle = HTMLacademicProjectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedAcademicProjectDates = HTMLacademicProjectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedAcademicProjectDescription = HTMLacademicProjectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedAcademicProjectTitle);
			$(".project-entry:last").append(formattedAcademicProjectDates);
			$(".project-entry:last").append(formattedAcademicProjectDescription);

			/*
			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			*/

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);	
			var formattedSchoolGrade = HTMLschoolGrade.replace("%data%", education.schools[i].grade);
			var formattedSchoolThesis = HTMLschoolThesis.replace("%data%", education.schools[i].thesis);

			console.log(formattedSchoolThesis);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolThesis);
			$(".education-entry:last").append(formattedSchoolGrade);
		}
		/*
		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		*/
	}
}

education.display();