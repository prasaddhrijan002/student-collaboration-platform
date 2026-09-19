# StudentConnect 

> A student collaboration platform that helps students discover teammates, find projects, and collaborate based on their skills and interests.

##  Live Demo

**Live Website:**  
https://main.dg3dxkc4h7sf5.amplifyapp.com

**GitHub Repository:**  
https://github.com/prasaddhrijan002/student-collaboration-platform

---

##  Problem

Students often have project ideas but struggle to find the right people to work with.

Finding teammates with the right skills, discovering student projects, and starting collaboration can be difficult when students rely only on their existing college networks.

##  Solution

**StudentConnect** is a student collaboration platform where students can:

- Discover other students based on skills and interests
- View student profiles
- Discover projects created by other students
- Create their own projects
- Specify required skills and team size
- Request to join projects
- Find opportunities to collaborate with other students

---

##  Features

###  Student Discovery
- Search students by name, college, skills, and interests
- View detailed student profiles
- Explore potential collaborators

###  Project Discovery
- Browse projects created by students
- View project descriptions and required skills
- See current team size and available spots

###  Create Projects
Students can create projects by providing:

- Project title
- Description
- Required skills
- Team size

Projects are stored in Amazon DynamoDB through the AWS backend.

###  Request to Join
Students can open a project and send a request to join the team.

Join requests are stored in Amazon DynamoDB.

---

##  AWS Architecture

```text
                    Student
                       │
                       ▼
              AWS Amplify Hosting
                       │
                       ▼
              StudentConnect Web App
                 HTML / CSS / JS
                       │
                       ▼
                 Amazon API Gateway
                  HTTP API (REST)
                  ┌────┴─────┐
                  ▼          ▼
              Projects    Requests
                  │          │
                  └────┬─────┘
                       ▼
                  AWS Lambda
              StudentConnectBackend
                       │
                       ▼
                Amazon DynamoDB
             ┌─────────┴─────────┐
             ▼                   ▼
     StudentConnectProjects   StudentConnectRequests
