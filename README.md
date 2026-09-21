# Personal Portfolio Website

A modern, responsive personal portfolio website built using the **MERN Stack**. The website showcases my skills, projects, education, and professional information through a clean and interactive user interface.

The project includes a **React.js frontend**, **Node.js/Express backend**, and **MongoDB database** for handling and storing contact form submissions.

## Live Demo

**Frontend:**
https://syed-haris-hussain-shah-portfolio-frontend.vercel.app

**Backend API:**
https://syed-haris-hussain-shah-portfolio-backend.vercel.app


## Features

* Responsive and modern portfolio design
* Home/Hero section
* About Me section
* Skills and technologies
* Projects showcase
* Functional contact form
* Contact messages stored in MongoDB
* React Router navigation
* Responsive design for desktop and mobile devices
* REST API for frontend-backend communication
* Deployed frontend and backend using Vercel
* MongoDB Atlas for cloud database storage

## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* React Router
* Vite

### Backend

* Node.js
* Express.js
* REST API
* CORS
* dotenv

### Database

* MongoDB
* MongoDB Atlas
* Mongoose
* MongoDB Compass

### Tools

* Git
* GitHub
* Visual Studio Code
* Vercel

## Project Structure

```text
my-portfolio/

│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   └── ...
│
├── Server/
│   ├── models/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> The `Server/.env` file contains environment variables and is intentionally excluded from GitHub using `.gitignore`.

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/syedharishussain1717/my-portfolio-website.git
```

### 2. Open the Project

```bash
cd my-portfolio-website
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Install Backend Dependencies

Move into the `Server` folder:

```bash
cd Server
```

Then install the backend dependencies:

```bash
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the `Server` folder.

Add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

> The backend uses port `5000` locally by default. Never upload your `.env` file or database credentials to GitHub.

### 6. Start the Backend

Inside the `Server` folder, run:

```bash
npm start
```

The backend will run locally on:

```text
http://localhost:5000
```

### 7. Start the Frontend

Open a new terminal and go back to the main project folder:

```bash
cd ..
```

Then run:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

## Contact Form

The portfolio includes a functional contact form connected to the Express backend.

The process works as follows:

```text
User submits form
       ↓
React Frontend
       ↓
Express REST API
       ↓
Mongoose
       ↓
MongoDB Atlas
       ↓
Message stored in database
```

The contact form stores:

* Email
* Subject
* Message
* Creation date

## Deployment

The application is deployed using **Vercel**.

The deployment consists of two Vercel projects:

```text
React/Vite Frontend
       ↓
     Vercel
       ↓
Express/Node.js Backend
       ↓
     Vercel
       ↓
MongoDB Atlas
```

The frontend communicates with the deployed Express backend through the REST API.

Environment variables such as the MongoDB connection string are configured securely in Vercel and are not stored in the GitHub repository.

## Learning Objectives

This project was developed to gain practical experience with full-stack web development, including:

* Building user interfaces with React
* Client-side routing with React Router
* Creating REST APIs with Express
* Working with Node.js
* Connecting applications to MongoDB
* Using Mongoose for database operations
* Working with MongoDB Atlas
* Handling frontend-backend communication
* Managing environment variables
* Using Git and GitHub
* Deploying full-stack applications with Vercel

## Future Improvements

* Add an admin dashboard
* Add authentication and authorization
* Improve animations and UI interactions
* Add more projects and portfolio content
* Add additional backend functionality
* Improve form validation and error handling
* Add analytics and performance monitoring

## Author

**Syed Haris Hussain Shah**

Computer Science Undergraduate

AI & Software Development | Database Systems

---

If you like this project, feel free to ⭐ the repository.
