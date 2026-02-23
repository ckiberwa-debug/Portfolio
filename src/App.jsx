import React, { useEffect, useState } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";

// ------------------- Skills -------------------
const skills = [
  { name: "React", type: "tech" },
  { name: "JavaScript", type: "tech" },
  { name: "ES6+", type: "tech" },
  { name: "HTML & CSS", type: "tech" },
  { name: "Node.js", type: "tech" },
  { name: "Express.js", type: "tech" },
  { name: "API Integration", type: "tech" },
  { name: "Git & GitHub", type: "tech" },
  { name: "Bootstrap / Tailwind", type: "tech" },
  { name: "Data Visualization", type: "tech" },
  { name: "Problem Solving", type: "soft" },
  { name: "Communication", type: "soft" },
  { name: "Team Collaboration", type: "soft" }
];

// ------------------- Projects -------------------
const projects = [
  {
    title: "Invoice Dashboard",
    description:
      "A dashboard to manage invoices efficiently, track payments, and generate reports.",
    tools: ["React", "CSS", "JavaScript"]
  },
  {
    title: "Client Management System",
    description:
      "A system to organize client data, track interactions, and improve client communication.",
    tools: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Data Reporting Tool",
    description:
      "Generates interactive data reports and visualizations to support business decisions.",
    tools: ["React", "Chart.js", "CSS"]
  },
  {
    title: "Interactive Scheduler",
    description:
      "A calendar-based tool to schedule tasks, meetings, and reminders with drag-and-drop functionality.",
    tools: ["React", "FullCalendar", "JavaScript"]
  },
  {
    title: "Expense Tracker",
    description:
      "Tracks personal or business expenses with categories, charts, and summary reports.",
    tools: ["React", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing projects, skills, and contact information.",
    tools: ["React", "Vite", "CSS"]
  },
  {
    title: "Task Manager",
    description:
      "Organize tasks with status, priority levels, and due dates for better productivity.",
    tools: ["React", "CSS", "JavaScript"]
  },
  {
    title: "Weather App",
    description: "Displays real-time weather information for any location using a weather API.",
    tools: ["React", "API Integration", "CSS"]
  }
];

function App() {
  const [visibleSkills, setVisibleSkills] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(false);

  useEffect(() => {
    const skillTimeout = setTimeout(() => setVisibleSkills(true), 300);
    const projectTimeout = setTimeout(() => setVisibleProjects(true), 600);

    return () => {
      clearTimeout(skillTimeout);
      clearTimeout(projectTimeout);
    };
  }, []);

  return (
    <div className="App">
      {/* ---------------- About Me ---------------- */}
      <section className="about-me">
        <div className="profile-container">
          <img
            src={profilePic}
            alt="Kiberwa Caroline"
            className="profile-pic-large"
          />
          <h2 className="full-name">Kiberwa Caroline</h2>
        </div>
        <div className="intro-text-expanded">
          <h1>Hey, I'm Caroline</h1>
          <p>
            I am a passionate developer with experience in building interactive web applications.
            I love creating clean, responsive, and visually appealing user interfaces.
            I enjoy solving complex problems and working collaboratively on exciting projects.
            I am always learning new technologies and improving my skills to build better software.
          </p>
        </div>
      </section>

      {/* ---------------- Skills ---------------- */}
      <section className={`skills-section ${visibleSkills ? "slide-in" : ""}`}>
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <span key={skill.name} className={`skill-badge ${skill.type}`}>
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- Projects ---------------- */}
      <section className={`projects-section ${visibleProjects ? "slide-in" : ""}`}>
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tools">
                <strong>Tools:</strong> {project.tools.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section className="contact-section-expanded">
        <div className="contact-form">
          <h2>Reach Out</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Me</h2>
          <div className="contact-cards">
            <div className="contact-card phone">📞 +250786567499</div>
            <div className="contact-card email">📧 ckiberwa@gmail.com</div>
            <div className="contact-card github">
              🐱{" "}
              <a
                href="https://github.com/ckiberwa-debug"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;