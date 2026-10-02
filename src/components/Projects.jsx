function Projects() {

    return (

        <section className="projects">

            <h1>My Projects</h1>

            <div className="project-cards">



                {/* Project 4 */}
                <div className="project-card">
                    <span className="project-badge">Project</span>

                    <h2>MERN Stack Portfolio Website</h2>

                    <p>
                        Designed and developed a responsive personal portfolio website using React.js, Node.js, Express.js,
                        and
                        MongoDB.Implemented reusable components, React Router navigation, responsive layouts, project showcases, and
                        an
                        interactive contact form connected to a MongoDB database through a REST API.Configured environment variables and deployed the frontend and backend using Vercel, with MongoDB
                        Atlas for
                        cloud database management.
                    </p>




                    <div className="tech-tags">
                        <span>React.js</span>
                        <span>JavaScript</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                        <span>Mongoose</span>
                        <span>API</span>
                        <span>React Router</span>
                        <span>Vercel</span>
                        <span>MongoDB Atlas</span>
                        <span> Git & GitHub.</span>
                    </div>

                    <div className="project-links">
                        <a href="#" target="_blank" rel="noreferrer" className="btn-outline">
                            GitHub
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="btn-filled">
                            Live Demo
                        </a>
                    </div>
                </div>


                <div className="project-card">
                    <span className="project-badge">Full Stack</span>

                    <h2>WalletLenz</h2>

                    <p>
                        A full-stack personal expense management app built with the MERN stack.
                        Users can securely register, log in, and manage their expenses, then
                        analyze spending through a dashboard with statistics, a category-based
                        pie chart, and category and date filtering. It uses JWT authentication
                        with bcrypt password hashing and protected API routes.
                    </p>

                    <div className="tech-tags">
                        <span>MongoDB</span>
                        <span>Express.js</span>
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Vite</span>
                        <span>JWT</span>
                        <span>Recharts</span>
                        <span>React Router</span>
                    </div>

                    <div className="project-links">
                        <a href="#" target="_blank" rel="noreferrer" className="btn-outline">
                            GitHub
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="btn-filled">
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <span className="project-badge">AI / ML</span>

                    <h2>AI Text-to-Image Generator</h2>

                    <p>
                        A simple Streamlit web app that generates images from text prompts
                        using Stable Diffusion v1.5 from Hugging Face. Users type a prompt
                        and get an AI-generated image in seconds.
                    </p>

                    <div className="tech-tags">
                        <span>Python</span>
                        <span>Streamlit</span>
                        <span>Stable Diffusion v1.5</span>
                        <span>Hugging Face</span>
                    </div>

                    <div className="project-links">
                        <a href="#" target="_blank" rel="noreferrer" className="btn-outline">
                            GitHub
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="btn-filled">
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <span className="project-badge">AI / ML</span>

                    <h2>AI Email Writer</h2>

                    <p>
                        A beginner-friendly Streamlit web app that turns a rough description
                        into a short, polite, professional email. Type what you want to say,
                        and the Groq API generates the email right on the page. Deployed on
                        Streamlit Community Cloud with the API key kept safely in Secrets.
                    </p>

                    <div className="tech-tags">
                        <span>Python</span>
                        <span>Streamlit</span>
                        <span>Groq API</span>
                    </div>

                    <div className="project-links">
                        <a href="#" target="_blank" rel="noreferrer" className="btn-outline">
                            GitHub
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="btn-filled">
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <span className="project-badge">AI / ML</span>

                    <h2>AI Essay Writer</h2>

                    <p>
                        A beginner-friendly Streamlit web app that writes a short, well-structured
                        essay on any topic. Enter a topic, pick a length, and the Groq API
                        generates an essay with an introduction, body paragraphs, and a conclusion
                        right on the page. Deployed on Streamlit Community Cloud.
                    </p>

                    <div className="tech-tags">
                        <span>Python</span>
                        <span>Streamlit</span>
                        <span>Groq API</span>
                    </div>

                    <div className="project-links">
                        <a href="#" target="_blank" rel="noreferrer" className="btn-outline">
                            GitHub
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="btn-filled">
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <span className="project-badge">AI / ML</span>

                    <h2>Dialogue Summarizer</h2>

                    <p>
                        An AI-powered text summarization web app built with Python, Hugging Face
                        Transformers, and Streamlit. It uses a DistilGPT2 model fine-tuned on the
                        SAMSum dataset to turn conversations into short summaries. The model is
                        hosted on Hugging Face.
                    </p>

                    <div className="tech-tags">
                        <span>Python</span>
                        <span>Transformers</span>
                        <span>DistilGPT2</span>
                        <span>PyTorch</span>
                        <span>Streamlit</span>
                        <span>SAMSum</span>
                    </div>

                    <div className="project-links">
                        <a href="#" target="_blank" rel="noreferrer" className="btn-outline">
                            GitHub
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="btn-filled">
                            Live Demo
                        </a>
                    </div>
                </div>

                {/* next project cards go here */}


            </div>



        </section>

    );
}

export default Projects;