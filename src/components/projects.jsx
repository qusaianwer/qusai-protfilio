function Projects() {
  return (
    <section className="projects">
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
      </div>
    </section>
  );
}

export default Projects;