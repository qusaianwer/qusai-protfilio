const skills = ["Java", "Python", "C++", "Web Development", "Automation"];

function About() {
  return (
    <section className="ab-section" id="about">
      <h2 className="ab-title">About</h2>

      <div className="ab-content">
        <p>
          I'm Qusai Anwer, a Software Engineering student at International
          Islamic University of Jordan (IIU). I'm passionate about software
          development, problem solving, and building real-world projects that
          turn ideas into useful digital experiences.
        </p>

        <p>
          Currently, I'm developing my skills in the technologies below, while
          continuously learning new technologies and improving my programming
          fundamentals.
        </p>

        <div className="ab-skills">
          {skills.map((skill) => (
            <span className="ab-skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <div className="ab-goal">
          <h3>My Goal</h3>
          <p>
            To grow into a skilled software engineer by building meaningful
            projects, solving challenging problems, and gaining practical
            experience along the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;