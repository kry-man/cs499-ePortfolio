
<head>
<title>My Portfolio</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Georgia;
  margin: 0;
}

/* Header */
header {
  padding: 60px;
  text-align: center;
  background: #8e6da6;
  color: white;
}

/* Top navigation bar */
.navbar {
  display: flex;
  background-color: #333;
  position: sticky;
  top: 0;
  overflow: hidden;
}

/* Navigation bar links */
.navbar a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
  float: left;
  display: block;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #8e6da6;
  color: white;
}

/* Column container */
.container {  
  display: flex;
  flex-wrap: wrap;
}

/* Main column */
.main {
  flex: 70%;
  background-color: #dfcaed;
  padding: 20px;
}

/* Footer */
footer {
  padding: 20px;
  text-align: center;
  background: #836d99;
  color: white;
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .container, .navbar {   
    flex-direction: column;
  }
}
</style>
</head>
<body>

 <!-- Header -->
<header>
  <h1> Krystal's CS499 ePortfolio </h1>
</header> 
<!-- Navigation Bar -->
<div class="navbar">
  <a href="#self_assess">Self-Assessment</a>
  <a href="#code_review">Code Review</a>
  <a href="#enhancement1">Enhancement One</a>
  <a href="#enhancement2">Enhancement Two</a>
  <a href="#enhancement3">Enhancement Three</a>
</div>  
<!-- Content Container -->
<div class="container">
  <div class="main">
    <div class= "Self-Assessment" id="self_assess">
      <br>
      <br>
<h2>Professional Self-Assessment</h2>
<p>I started my journey into Computer Science with a Data Analytics concentration in 2023, culminating in this portfolio in 2026 with the dream of becoming a database administrator. There have been multiple lessons I have taken away from the courses during my time in the program, but three stand out to me. The first one is the importance of object-oriented programming (OOP), starting with my first Python class, where we designed a simple map game. There was a consistent throughline of using encapsulation, inheritance, polymorphism, and abstraction that allowed for easy maintenance, scalability, and reusability. I have learned how to use multiple programming languages to build a firm understanding of the logic needed to run a program, such as developing simple CRUD programs and making complex queries in SQL and NoSQL environments. The importance of these functions was deeply highlighted within my Software Testing and Automation and Data Science courses to build my foundational understanding that supported my capstone. Additionally, I learned the value of maintaining good programming practices and documentation. For example, using proper spacing and comments to ensure that someone could easily interpret my code and what I was trying to accomplish with it. Lastly, I have learned about the program development process. When I started, I had no coding experience nor how that worked in a professional setting. It has become clear to me that time, patience, careful planning, effective communication, and significant testing are required to adequately develop a program or solution.</p>

<p>Throughout my enrollment at Southern New Hampshire University. I learned about the software development process, such as the scrum team and how to work collaboratively. There was clear definitions of how each team member collaborates and communicates to support development. These lessons helped formulate the importance of how you should plan to connect with stakeholders, inside and outside of the development team. For example, there were practice emails for how to communicate support requests and peer-to-peer development of ideas in discussions in every course. Being meticulous is a key part of the development process, particularly when it comes to data structures, algorithms, software engineering, databases, and security. It is critical to be mindful of syntax while remaining organized to follow industry standards for maintaining a reusable and well-documented instance. Overall, this is ingrained in my problem-solving approach, and I always keep in mind the end user experience in mind allows me to provide the best program for all of the parties involved.</p>

<p>The three enhancements used in this capstone portfolio demonstrate my software design and engineering, algorithm and data structure, and database skills. Each of the enhancements builds upon the next to develop a full-stack web application using a MEAN approach based on the Travlr Getaways project from CS-465. That project was the perfect culmination of all the course objectives and skills that I wanted to demonstrate. All three enhancements were focused on building out the meals and rooms sections of the web application. The first enhancement made the customer-facing web application more dynamic and cohesive with the original project by creating templates for the data to quickly load and improve administrative usage. By the second enhancement, I implemented new schemas for the data structures in preparation of the database connection for the final enhancement. The final enhancement culminated in the creation of adding new database connections that required an administrative login to create, read, and update rooms and meals as cards in an admin-view for the web application. 
</p>

<p>During the course of my capstone, I had to review the components that changed the original open-source code to a dynamic web application. This required referring to all the trip related data and coding to plan out what needed to be implemented and amended during the three enhancements as seen in the code review video. I was able to use the original details to define what needed to be added. Part of the capstone made me realize how important planning consistent naming conventions were so that similar names did not accidentally run the wrong code. I also found myself needing to create a new interface that I had not originally planned, but it best supported better practices to maintain a reusable administrative view in enhancement three. I enjoyed making the changes by ensuring the environment was well designed to support the needs of customers and administrators. My capstone highlights my decision-making process, my careful attention to detail, my willingness to pivot to produce a better final product, and my dedication to creating the best user experience possible.</p>
<br>
    </div>
    <div class= "Code Review" id="code_review">
      <br>
      <br>
<h2> Code Review </h2>

<p>The code review encompasses the original state of the enhancements in this portfolio. I walk through all the existing code and identify where the enhancements will be implemented.</p>

<h6>You can watch this video <a href="https://drive.google.com/file/d/15DEdsomYCAz8udnnIybnUqD5yC7f2vl2/view?usp=sharing"> here</a>. Based on the original project <a href="https://github.com/kry-man/cs465-fullstack.git"> here </a></h6>
    </div>
    <div class= "enhancement one" id="enhancement1">
      <br>
      <br>
<h2> Enhancement One: Software Design and Engineering </h2>

<p>The enhanced artifact is building on the CS-465 Full Stack Development I course’s Travlr Getaways Project. The original document was created on November 2, 2025, using an open-source template provided in my course, with its last update on December 12, 2025, for its final submission in CS-465. This project was originally created to transform a static HTML website and create a full-stack web application using a MEAN approach. </p>

<p>I purposely selected this artifact for enhancement because it reminded me a lot of the portal management work I do for my current employer, but it gave me the clarity and insights as to why and how some of the design choices created by the original developer function the way they do. In the course, I was only tasked with building out the travel page for the sake of an eight-week course; however, I really wanted to fully realize and develop the remaining pages to get more practice and challenge myself. Therefore, to further develop the software design and engineering, I created additional controllers, routes, .json files, and handlebars to make the rooms and meals pages transform from static to dynamic content. The enhancement demonstrates my ability to create a more cohesive, simple, faster, and cleaner web application by eliminating unnecessary and redundant code. It functions by using templates and loops to ensure better latency and design, so an individual can easily implement new rooms and meals by adding them to the .json files. </p>

<p>The enhancement supports the three outcomes I intended to. First, it employs strategies for building a collaborative environment to enable diverse audiences to support decision-making because it enhances both the external users and the internal administrators to have a better, streamlined application. The design is professional and coherent, with comments to aid audiences in understanding the enhancements, while also providing a sound web application for users to engage with that matches the experience from the original project’s travel page and now extends across the meals and rooms pages. Lastly, this ensures a more secure application to prevent exploitation because it forces data to be called from reading a file that is only accessible to the developer and administrator.</p>

<p>
One of the things I overlooked when putting this project forward was having to establish a new git connection to push my work to my portfolio. I had to create a new connection to the ePortfolio and then make a copy with a new name of the original “travlr” file location on my computer. I panicked at first, but then I realized it was to my advantage since it makes it easier for me to track the iterations of change and easily recall them as a backup if necessary. Once I got past this hurdle, it felt easier to proceed. The biggest challenge for me overall is that my enhancements are intertwined with each other, so it has been difficult to separate them. Overall, I am enjoying the process because it forces me to focus and make decisions about the unique needs for each page. </p>

<h6>Enhancement One  can be accessed <a href="https://github.com/kry-man/cs499-ePortfolio/tree/enhancement1"> here</a>.</h6>
    </div>
        <div class= "enhancement two" id="enhancement2">
          <br>
          <br>
<h2> Enhancement Two: Algorithms and Data Structures </h2>
<p>The enhanced artifact is building on the Travlr Getaways Project with the changes from Enhancement One. Enhancement One was created and last updated on January 25, 2026, based on the original project from November 2, 2025, using an open-source template provided in my course, with its last update on December 12, 2025, for its final submission in CS-465. This project was originally created to transform a static HTML website and create a full-stack web application using a MEAN approach. </p>

<p>I purposely selected this artifact for enhancement because it supports growing my portal management skills that I utilize for my current employer. By further developing the application using a MEAN approach, I can find new ways to enhance existing portals to be dynamic and have better structures to output data to the different users engaging with it. In the course, I was only tasked with building out the travel page for customers and the travel administrative page for the eight-week course; however, I wanted to fully realize and develop the remaining pages to gain experience toward my long-term career goals. In order to further develop the algorithms and data structures, I implemented two new schemas under the “models” folder for the new databases I am connecting to the web application in Enhancement Three. The new schemas demonstrate my commitment to consistent data structures throughout a singular web application to ensure ease of use for both the end users, administrators, and developers. I ensured that the database connection was properly configured so that Enhancement Three will be ready for implementation.</p>

<p>The algorithms and data structures enhancement supports the four outcomes I intended to. It employs strategies for building a collaborative environment to enable diverse audiences to support decision-making because it enhances both the external user and the internal administrators to have a better structured application by implementing schemas and templates. The design is professional and coherent with comments to aid audiences in understanding the enhancements, while also providing a sound web application for users to engage with that provides consistency from the original project’s travel content to its meals and rooms content. By creating the schema for the upcoming database connections in Enhancement Three, I have ensured that the algorithm can adequately output the desired data in the format and structure that would enable simpler updates for developers. The enhancement required the use of innovative techniques and the use of skills to deliver value in the best industry practices.</p>

<p>I forgot that when putting the proposal for this project forward, I had to install a new mongoose connection for MongoDB so my web application can connect to the database. Since Enhancement One forced me to make a duplicate file to create my ePortfolio, I needed to install the mongoose packages for the new project to ensure the mongoose connection required to be a full-stack application. In doing so, I identified three vulnerabilities that I was able to fix to maintain current standards. I also had to rename the “rate” variable I created for rooms to “room_rate” to prevent a system default that I had not considered in the original naming as I built the schema. I verified that the database connection was set up and prepared to run with the newly developed structures, so that it will be prepared for Enhancement Three. </p>

<h6>Enhancement Two can be accessed <a href="https://github.com/kry-man/cs499-ePortfolio/tree/enhancement2"> here</a>.</h6>
    </div>
        <div class= "enhancement three" id="enhancement3">
      <br>
      <br>          
<h2> Enhancement Three: Databases </h2>

<p>The enhanced artifact is building on the Travlr Getaways Project with the changes from Enhancements One and Two. Enhancement Two was created and last updated on February 1, 2026, based on the original project from November 2, 2025, using an open-source template provided in my course, with its last update on December 12, 2025, for its final submission in CS-465. This project was originally created to transform a static HTML website and create a full-stack web application using a MEAN approach.</p>

<p>I purposely selected this artifact to further challenge myself by creating two new database collections with secure connections for the Enhancement Three: Databases component. I struggled a little the first time I implemented the authentication component in my web application in the original project, so I was looking forward to revisiting it with a cleaner approach. The entire MEAN approach to application development has changed how I work and view the portals I manage at my current employer, so I wanted to deepen my understanding by building out this project to the end. The focus of the original project was only to establish a secure database connection to the trips section of the application and to allow only administrators to update and change trip details. I felt it would be a good challenge to attempt to implement a similar structure for meals and rooms while including them for authentication services. I hooked up the schema from my last enhancement and seeded the corresponding collections into the database. I also had to spend a lot of time building out the different Angular components to support a RESTful API.</p>

<p>The databases enhancement supports all five of the course outcomes as I had originally intended them to. It employs strategies to build a collaborative environment that enables diverse audiences to support decision-making, as both external users and internal administrators benefit from a better-structured application via the schema and low latency when retrieving and pushing information directly to the database securely. The design is professional and coherent, with comments to aid audiences in understanding the enhancements, while also providing a sound web application that delivers a consistent experience for each stakeholder to easily navigate, access, and make changes as necessary, by integrating rooms and meals. Both the algorithmic principles and innovative techniques were employed to deliver value in best industry practices because I was forced to rethink how to authenticate services across all the data services, I created by making an authentication interface. By doing so, I was able to adopt a security mindset by ensuring limited access to non-administrators that requires a token through authentication to access by making changes to the collections within the database in a card format.</p>

<p>While modifying the artifact, I quickly realized that I had to build more files than I originally thought. For example, since my proposal, I forgot that to seed the new collections in MongoDB, I would need to create new models to seed each, since I needed to make new variables. Luckily, I was able to reuse my database model to make that simpler. I also realized when I created the data services for rooms and meals and was preparing to import the authentication service that I had to produce a solution to reuse the existing code, but just swap out the calls to each service when they are in use. Originally, I thought a dictionary would work, but I had to pivot and decided to implement an interface to easily access the user and authentication information. Then I was able to import the interface to the authentication service and easily align all of the services to require an approved user for access to get, push, and put information into the database. I was nervous at first to make something new, but once I realized it worked, I felt an intense sense of accomplishment. It was tedious to complete, yet so rewarding.</p>

<h6>Enhancement Three can be accessed <a href="https://github.com/kry-man/cs499-ePortfolio/tree/enhancement3"> here</a>.</h6>
    </div>
  </div>
</div>
<footer><h10>Last Updated February 2026</h10></footer>
