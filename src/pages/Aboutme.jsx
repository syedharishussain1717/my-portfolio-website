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

      <div className="experience">

        <h2 className="section-title">Professional Experience</h2>

        <div className="exp-timeline">

          <div className="exp-item">
            <span className="exp-dot"></span>

            <div className="exp-head">
              <div className="exp-logo">
                <img src="/zee-logo.png" alt="Zee Outsourcing Solutions logo" />
              </div>

              <div className="exp-title">
                <h3>Agentic AI Intern</h3>
                <h4>Zee Outsourcing Solutions (Pvt.) Limited</h4>
                <span className="exp-type">Internship</span>
                <span className="exp-date">Oct 2026 – Nov 2026</span>
              </div>
            </div>

            <div className="exp-tags">
              <span>Agentic AI</span>
              <span>RAG</span>
              <span>Multi-Agent Systems</span>
              <span>n8n</span>
            </div>

            <ul className="exp-list">
              <li>
                Developed a foundational understanding of Agentic AI, AI Agents,
                Retrieval-Augmented Generation (RAG), and Multi-Agent Systems.
              </li>
              <li>
                Gained hands-on experience with n8n by designing and implementing
                automated workflows to streamline tasks and integrate AI-powered processes.
              </li>
              <li>
                Designed and developed multiple projects involving RAG-based applications,
                AI agents, and intelligent workflow automation.
              </li>
              <li>
                Applied AI concepts to build practical solutions for information
                retrieval, task automation, and AI-driven problem-solving.
              </li>
            </ul>
          </div>

          <div className="exp-item">
            <span className="exp-dot"></span>

            <div className="exp-head">
              <div className="exp-logo">
                <img src="/company-logo.png" alt="Lotte Akthar Beverages logo" />
              </div>

              <div className="exp-title">
                <h3>HR Intern</h3>
                <h4>Lotte Akthar Beverages Pvt. Limited</h4>
                <span className="exp-type">Internship</span>
                <span className="exp-date">July 2026 – Aug 2026</span>
                {/* <span className="exp-date">Jun 2026 - Aug 2026</span> */}
              </div>
            </div>

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

          {/* Future roles: copy the whole exp-item block and paste it here */}

        </div>


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

    </section>
  );
}

export default Aboutme;