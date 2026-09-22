function Projects() {

    return (

        <section className="projects">

            <h1>My Projects</h1>

            <div className="project-cards">

                {/* Project 1 */}
                <div className="project-card">

                    <h2>MERN Stack Portfolio Website</h2>

                    <p>
                        Designed and developed a responsive personal portfolio website using React.js, Node.js, Express.js,
                        and
                        MongoDB.
                    </p>
                    <p>
                        Implemented reusable components, React Router navigation, responsive layouts, project showcases, and
                        an
                        interactive contact form connected to a MongoDB database through a REST API.
                    </p>
                    <p>
                        Configured environment variables and deployed the frontend and backend using Vercel, with MongoDB
                        Atlas for
                        cloud database management.
                    </p>


                    <p className="technologies">
                        <strong>Technologies:</strong> React.js, JavaScript, HTML5, CSS3, Node.js, Express.js, MongoDB,
                        Mongoose, REST API, React Router, Vercel, MongoDB Atlas, Git & GitHub.
                    </p>

                    <div className="project-links">

                        <a href="#" target="_blank">
                            GitHub
                        </a>

                        <a href="#" target="_blank">
                            Live Demo
                        </a>

                    </div>

                </div>


                {/* Project 2 */}
                <div className="project-card">

                    <h2>WalletLenz</h2>

                    <p>
                        Designed and developed a mobile expense-tracking application
                        enabling users to log, categorize, and monitor personal
                        spending in real time. Implemented an intuitive UI with
                        data visualization features to help users track budgets
                        and identify spending patterns.
                    </p>

                    <p className="technologies">
                        <strong>Technologies:</strong> MIT App Inventor, Block Coding, TinyDBs
                    </p>

                    <div className="project-links">

                        <a href="#" target="_blank">
                            GitHub
                        </a>

                        <a href="#" target="_blank">
                            Live Demo
                        </a>

                    </div>

                </div>


                {/* Project 3 */}
                <div className="project-card">

                    <h2>Library Management System</h2>

                    <p>
                        A management system built with object-oriented programming,
                        implementing core record management functionality.
                    </p>

                    <p className="technologies">
                        <strong>Technologies:</strong> C++, Object Oriented Programming
                    </p>

                    <div className="project-links">

                        <a href="#" target="_blank">
                            GitHub
                        </a>

                        <a href="#" target="_blank">
                            Live Demo
                        </a>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Projects;