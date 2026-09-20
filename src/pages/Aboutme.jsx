import TypingText from "../components/TypingText";
function Aboutme() {

  return (
    <section className="about">

      <div className="about-intro">
        <TypingText/>

        <p>
          Final-year BS Computer Science student with hands-on experience
          in web development and software projects. Interested in technology,
          digital operations, and developing solutions that support business growth.
        </p>

      </div>

      <div className="education">

        <h2>Qualifications</h2>

        <div className="education-cards">

          <div className="education-card">
            <h3>BS Computer Science</h3>
            <p>University of Central Punjab</p>
          </div>

          <div className="education-card">
            <h3>Intermediate in Pre - Engineering</h3>
            <p>Punjab Group of Colleges</p>
          </div>

          <div className="education-card">
            <h3>Matriculation</h3>
            <p>Crescent Model Higher Secondary School</p>
          </div>

        </div>

      </div>

      <div className="experience">

        <h2>Professional Experience</h2>

        <div className="experience-card">

          <h3>HR Intern</h3>
          <h4>Lotte Akthar Beverages Pvt. Limited</h4>

          <p>
            1. Maintained and organized employee records and HR documentation
            in accordance with departmental policies and confidentiality standards.
          </p>

          <p>
            2. Gained hands-on exposure to Compensation & Benefits processes,
            including salary structuring, tax slab application, and benefits
            administration within the Pakistan regulatory context.
          </p>

          <p>
            3. Rotated through Organizational Development activities, supporting
            initiatives related to employee engagement and workforce planning.
            Supported Talent Acquisition functions, gaining familiarity with
            sourcing, screening, and candidate coordination processes.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Aboutme;