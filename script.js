// ----------------------------------
// STUDENT DATA
// ----------------------------------

const students = [

    {
        id: 1,
        name: "Rahul Sharma",
        college: "MAIT",
        skills: ["Java", "DSA", "Web Development"],
        interests: ["AI", "Startups"],
        about: "Computer engineering student interested in building useful web applications."
    },

    {
        id: 2,
        name: "Priya Singh",
        college: "DTU",
        skills: ["UI/UX", "Figma", "HTML", "CSS"],
        interests: ["Design", "Technology"],
        about: "Designer interested in creating simple and user-friendly digital experiences."
    },

    {
        id: 3,
        name: "Arjun Kumar",
        college: "NSUT",
        skills: ["Python", "Machine Learning", "AI"],
        interests: ["Artificial Intelligence", "Data Science"],
        about: "Student exploring machine learning and artificial intelligence."
    },

    {
        id: 4,
        name: "Neha Verma",
        college: "IGDTUW",
        skills: ["JavaScript", "React", "Frontend"],
        interests: ["Web Development", "Open Source"],
        about: "Frontend developer interested in building modern web applications."
    },

    {
        id: 5,
        name: "Aman Gupta",
        college: "MAIT",
        skills: ["Java", "Spring Boot", "SQL"],
        interests: ["Backend Development", "Cloud"],
        about: "Backend developer interested in APIs, databases and cloud technologies."
    },

    {
        id: 6,
        name: "Karan Mehta",
        college: "DU",
        skills: ["Python", "Django", "JavaScript"],
        interests: ["Startups", "Web Development"],
        about: "Full-stack enthusiast looking for interesting student projects."
    }
];

const projects = [
    {
        id: 1,
        title: "AI Study Assistant",
        description: "Building an AI-powered study assistant to help students organize and understand their study material.",
        creator: "Rahul Sharma",
        skills: ["Python", "AI/ML", "JavaScript"],
        teamSize: 4,
        currentMembers: 2
    },

    {
        id: 2,
        title: "Campus Event Finder",
        description: "A platform where students can discover and share events happening around their campus.",
        creator: "Priya Singh",
        skills: ["HTML", "CSS", "JavaScript"],
        teamSize: 3,
        currentMembers: 1
    },

    {
        id: 3,
        title: "Student Expense Tracker",
        description: "A simple application that helps students track and manage their monthly expenses.",
        creator: "Aman Gupta",
        skills: ["Java", "Spring Boot", "SQL"],
        teamSize: 4,
        currentMembers: 2
    }
];

// ----------------------------------
// DISPLAY STUDENTS
// ----------------------------------

const studentContainer =
    document.getElementById("studentContainer");


function displayStudents(studentList) {
    studentContainer.innerHTML = "";

    if (studentList.length === 0) {
        studentContainer.innerHTML = `
            <div class="no-students">
                <h3>🔍 No students found</h3>
                <p>Try searching for another skill, college, or interest.</p>
            </div>
        `;
        return;
    }

    studentList.forEach(function(student) {   

        const card = document.createElement("div");

        card.classList.add("student-card");


        const firstLetter =
            student.name.charAt(0);


        card.innerHTML = `

            <div class="student-avatar">
                ${firstLetter}
            </div>

            <h3>
                ${student.name}
            </h3>

            <p class="student-college">
                ${student.college}
            </p>


            <div class="skills-container">

                ${student.skills.map(function(skill) {

                    return `
                        <span class="skill-tag">
                            ${skill}
                        </span>
                    `;

                }).join("")}

            </div>


            <p class="interests">
                Interests:
                ${student.interests.join(", ")}
            </p>


            <a
                href="#"
                class="profile-btn"
                data-id="${student.id}"
            >
                View Profile
            </a>

        `;


        studentContainer.appendChild(card);

    });

}


// Display students when page loads

displayStudents(students);

// ----------------------------------
// STUDENT SEARCH
// ----------------------------------

const studentSearch =
    document.getElementById("studentSearch");


studentSearch.addEventListener("input", function() {

    const searchText =
        studentSearch.value.toLowerCase().trim();


    const filteredStudents =
        students.filter(function(student) {

            const name =
                student.name.toLowerCase();

            const college =
                student.college.toLowerCase();


            const skillsMatch =
                student.skills.some(function(skill) {
            return skill.toLowerCase() === searchText;
            });

            const interestsMatch =
                student.interests.some(function(interest) {
            return interest.toLowerCase() === searchText;
            });


            return (
                name.includes(searchText) ||
                college.includes(searchText) ||
                skillsMatch ||
                interestsMatch
            );
            
        });


    displayStudents(filteredStudents);

});

const profileSection = document.getElementById("profile");
const profileContent = document.getElementById("profileContent");
const backToStudents = document.getElementById("backToStudents");

function showProfile(studentId) {
    const student = students.find(function(student) {
        return student.id === studentId;
    });

    if (!student) {
        return;
    }

    profileContent.innerHTML = `
        <div class="student-avatar">${student.name.charAt(0)}</div>

        <h1>${student.name}</h1>

        <p class="student-college">${student.college}</p>

        <h3>Skills</h3>

        <div class="skills-container">
            ${student.skills.map(function(skill) {
                return `<span class="skill-tag">${skill}</span>`;
            }).join("")}
        </div>

        <h3>Interests</h3>

        <p class="interests">
            ${student.interests.join(", ")}
        </p>

        <h3>About</h3>

        <p class="profile-about">
            ${student.about}
        </p>

        <button class="collaboration-btn" id="collaborationBtn" >
            🤝 Request Collaboration
        </button>
    `;

    document.getElementById("students").style.display = "none";
    profileSection.style.display = "block";

    profileSection.scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("profile-btn")) {
        event.preventDefault();

        const studentId = Number(event.target.dataset.id);

        showProfile(studentId);
    }
});

backToStudents.addEventListener("click", function() {
    profileSection.style.display = "none";
    
    document.getElementById("students").style.display = "block";

    document.getElementById("students").scrollIntoView({
        behavior: "smooth"
    });
});

document.addEventListener("click", async function(event) {
    if (event.target.id === "collaborationBtn") {

        event.target.textContent = "✓ Request Sent";
        event.target.disabled = true;

    }
});

const projectsContainer = document.getElementById("projectsContainer");

function displayProjects(projectList) {
    projectsContainer.innerHTML = "";

    projectList.forEach(function(project) {

        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        const availableSpots = project.teamSize - project.currentMembers;

        projectCard.innerHTML = `
            <h3>${project.title}</h3>

            <p class="project-creator">
                Created by ${project.creator}
            </p>

            <p class="project-description">
                ${project.description}
            </p>

            <div class="skills-container">
                ${project.skills.map(function(skill) {
                    return `<span class="skill-tag">${skill}</span>`;
                }).join("")}
            </div>

            <p class="team-info">
                👥 Team: ${project.currentMembers} / ${project.teamSize}
            </p>

            <p class="spots-info">
                ${availableSpots} spot${availableSpots !== 1 ? "s" : ""} available
            </p>

            <a href="#" class="project-btn" data-id="${project.id}">
                View Project
            </a>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

const API_URL =
  "https://51wlhxz97l.execute-api.ap-south-1.amazonaws.com/prod/projects";

async function loadProjectsFromAPI() {
  try {
    const response = await fetch(API_URL);
    const apiProjects = await response.json();

    if (apiProjects.length > 0) {
      displayProjects([...projects, ...apiProjects]);
    } else {
      displayProjects(projects);
    }
  } catch (error) {
    console.error("Error loading projects:", error);
    displayProjects(projects);
  }
}

loadProjectsFromAPI();


const projectDetailsSection = document.getElementById("projectDetails");
const projectDetailsContent = document.getElementById("projectDetailsContent");
const backToProjects = document.getElementById("backToProjects");

function showProject(projectId) {
    const project = projects.find(function(project) {
        return project.id === projectId;
    });

    if (!project) {
        return;
    }

    const availableSpots = project.teamSize - project.currentMembers;

    projectDetailsContent.innerHTML = `
        <h1>${project.title}</h1>

        <p class="project-creator">
            Created by ${project.creator}
        </p>

        <h3>About this project</h3>

        <p class="project-description">
            ${project.description}
        </p>

        <h3>Required Skills</h3>

        <div class="skills-container">
            ${project.skills.map(function(skill) {
                return `<span class="skill-tag">${skill}</span>`;
            }).join("")}
        </div>

        <h3>Team</h3>

        <p class="team-info">
            👥 ${project.currentMembers} / ${project.teamSize} members
        </p>

        <p class="spots-info">
            ${availableSpots} spot${availableSpots !== 1 ? "s" : ""} available
        </p>

        <button class="collaboration-btn" id="joinProjectBtn" data-project-id="${project.id}">
            🤝 Request to Join
        </button>
    `;

    document.getElementById("projects").style.display = "none";
    projectDetailsSection.style.display = "block";

    projectDetailsSection.scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener("click", function(event) {

    if (event.target.classList.contains("project-btn")) {

        event.preventDefault();

        const projectId = Number(event.target.dataset.id);

        showProject(projectId);
    }

});

backToProjects.addEventListener("click", function() {

    projectDetailsSection.style.display = "none";

    document.getElementById("projects").style.display = "block";

    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });

});

document.addEventListener("click", async function(event) {


    if (event.target.id === "joinProjectBtn") {

        const projectId = event.target.dataset.projectId;

        try {
            const response = await fetch(
                "https://51wlhxz97l.execute-api.ap-south-1.amazonaws.com/prod/requests",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        projectId: projectId,
                        studentName: "You"
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Failed to send request");
            }

            event.target.textContent = "✓ Request Sent";
            event.target.disabled = true;

        } catch (error) {
            console.error("Error sending join request:", error);
            alert("Could not send request. Please try again.");
        }
    }
    

});

const createProjectBtn = document.getElementById("createProjectBtn");
const createProjectForm = document.getElementById("createProjectForm");

createProjectBtn.addEventListener("click", function() {
    createProjectForm.style.display = "block";

    createProjectForm.scrollIntoView({
        behavior: "smooth"
    });
});

const cancelProjectBtn = document.getElementById("cancelProjectBtn");

cancelProjectBtn.addEventListener("click", function() {
    createProjectForm.style.display = "none";

    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});

const publishProjectBtn = document.getElementById("publishProjectBtn");

publishProjectBtn.addEventListener("click", async function() {
    const title = document.getElementById("projectTitle").value.trim();
    const description = document.getElementById("projectDescription").value.trim();
    const skillsText = document.getElementById("projectSkills").value.trim();
    const teamSize = Number(document.getElementById("projectTeamSize").value);

    if (!title || !description || !skillsText || !teamSize) {
        alert("Please fill in all project details.");
        return;
    }

    const skills = skillsText
        .split(",")
        .map(function(skill) {
            return skill.trim();
        })
        .filter(function(skill) {
            return skill !== "";
        });

    const newProject = {
        title: title,
        description: description,
        skills: skills,
        teamSize: teamSize,
        creator: "You"
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProject)
        });

        if (!response.ok) {
            throw new Error("Failed to create project");
        }

        const savedProject = await response.json();

        alert("Project published successfully!");

        createProjectForm.style.display = "none";

        document.getElementById("projectTitle").value = "";
        document.getElementById("projectDescription").value = "";
        document.getElementById("projectSkills").value = "";
        document.getElementById("projectTeamSize").value = "";

        await loadProjectsFromAPI();

        document.getElementById("projects").scrollIntoView({
            behavior: "smooth"
        });

    } catch (error) {
        console.error("Error creating project:", error);
        alert("Could not publish project. Please try again.");
    }
});



