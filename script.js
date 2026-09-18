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

        <button class="collaboration-btn">
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