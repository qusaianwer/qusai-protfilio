import { FaGithub } from "react-icons/fa";
function Projects() {
  return (
    <section className="projects" id="project">
      <h2>my projects</h2>
      <div className="project-cards">
        <div className="card">
          <h3>project one</h3>
          <p><h4>Q3V | Programming & Problem Solving</h4> 
          A programming-focused YouTube channel created to share practical knowledge in Software Engineering, programming fundamentals, and problem solving.

The channel focuses on explaining programming concepts in a simple and practical way, with content covering Java, algorithms, data structures, problem-solving techniques, and software development fundamentals.

Role: Creator & Developer
Focus: Programming • Problem Solving • Software Engineering
Content: Tutorials • Programming Concepts • Coding Challenges
          </p>
          <a
  href="https://youtube.com/@q3v_203?si=nJ_gJDI9gQJcoDzD"
  target="_blank"
  rel="noopener noreferrer"
  className="youtube-btn"
>
  ▶ My Channel
</a>
        </div>
        <div className="card">
          <h3>project two</h3>
          <p><h4>Personal Portfolio</h4>
          A modern personal portfolio website designed and developed to showcase my skills, projects, experience, and journey as a Software Engineering student.

Built with a focus on clean UI, responsive design, smooth user experience, and a professional developer-oriented visual identity.

Role: Designer & Developer
Focus: Web Development • UI/UX • Responsive Design
          </p>
        </div>
        <div className="card">
         <h3>project three</h3>
          <p><h4>QNode — AI Automation Platform</h4> 
          QNode is a Jordan-focused AI automation platform designed to help businesses automate customer communication, bookings, orders, and repetitive tasks using AI agents and workflow automation.

The platform combines AI, n8n, APIs, and business automation to create practical solutions tailored to local businesses. It supports Arabic and English communication and is designed to integrate with platforms such as WhatsApp, Instagram, Telegram, Google Sheets, and other business tools.

Key Features

- 🤖 AI-powered customer support
- ⚙️ Automated business workflows using n8n
- 💬 Arabic & English communication
- 📦 Order and booking automation
- 📲 Social media and messaging integrations
- 👥 Customer and business management
- 📊 Admin dashboard and workflow monitoring
- 🔐 Role-based access and client management

Technologies
"n8n" "AI Agents" "APIs" "JavaScript" "Node.js" "Automation" "WhatsApp API" "Telegram Bot API"

My Role
Designed the concept, architecture, workflows, and user experience of the platform, with a focus on building practical AI automation solutions for small and medium-sized businesses.

Goal
To make AI automation accessible to local businesses by turning repetitive manual processes into reliable, automated workflows.
          </p></div>
          <div className="card">
  <h3>ExpTrack</h3>
  <p>
  ExpTrack is a desktop expense management application for Windows,
  designed to give you full control over your personal finances. Record
  income and expenses, set monthly budgets for each category, and analyze
  your spending habits through an interactive dashboard and detailed
  charts. Built with a clean dark interface, and all your data stays
  private on your own device.
</p>
  <p className="project-tech">Python • CustomTkinter • SQLite • Matplotlib</p>
  <a
    href="https://github.com/qusaianwer/ExpTrack"
    target="_blank"
    rel="noopener noreferrer"
    className="gh-btn"
  >
    <FaGithub /> View on GitHub
  </a>
</div>
         <div className="card p4-card" role="status" aria-live="polite">
  <div className="p4-inner">
    <svg className="p4-gear" viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>

    <h3 className="p4-title">Project Five</h3>

    <p className="p4-sub">
      Under Construction
      <span className="p4-dots" aria-hidden="true"><i /><i /><i /></span>
    </p>

    <div className="p4-bar" aria-hidden="true"><span /></div>

    <p className="p4-note">Something new is being built. Coming soon.</p>
  </div>
</div>
      </div>
    </section>
  );
}

export default Projects;