import TypingText from "../components/TypingText";
function Aboutme() {

  return (
    <section className="about">

      <div className="about-intro">
        <TypingText />

        <p>
          I am a Computer Science undergraduate with a keen interest in Agentic AI,
          Intelligent Automation, Software Development, Web Applications, and
          Databases. I am also interested in Business Development and Human
          Resources, exploring how technology and business can work together to
          create meaningful solutions. Passionate about learning, building, and
          growing through new opportunities.
        </p>
      </div>

      <div className="education">

        <h2 className="section-title">Qualifications</h2>

        <div className="education-cards">

          <div className="education-card">
            <span className="card-icon">🎓</span>
            <h3>BS Computer Science</h3>
            <p>University of Central Punjab</p>
          </div>

          <div className="education-card">
            <span className="card-icon">📘</span>
            <h3>Intermediate in Pre - Engineering</h3>
            <p>Punjab Group of Colleges</p>
          </div>

          <div className="education-card">
            <span className="card-icon">🏫</span>
            <h3>Matriculation</h3>
            <p>Crescent Model Higher Secondary School</p>
          </div>

        </div>

      </div>

      <div className="experience">

        <h2 className="section-title">Professional Experience</h2>

        <div className="experience-card">

          <h3>HR Intern</h3>
          <h4>Lotte Akthar Beverages Pvt. Limited</h4>

          <div className="exp-tags">
            <span>Compensation &amp; Benefits</span>
            <span>Organizational Development</span>
            <span>Talent Acquisition</span>
          </div>

          <ul className="exp-list">
            <li>
              Maintained and organized employee records and HR documentation
              in accordance with departmental policies and confidentiality standards.
            </li>
            <li>
              Gained hands-on exposure to Compensation &amp; Benefits processes,
              including salary structuring, tax slab application, and benefits
              administration within the Pakistan regulatory context.
            </li>
            <li>
              Rotated through Organizational Development activities, supporting
              initiatives related to employee engagement and workforce planning.
            </li>
            <li>
              Supported Talent Acquisition functions, gaining familiarity with
              sourcing, screening, and candidate coordination processes.
            </li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default Aboutme;