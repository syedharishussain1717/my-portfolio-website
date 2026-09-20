# Personal Portfolio Website

A modern and responsive personal portfolio website built using the **MERN Stack**. The website showcases my skills, projects, education, and professional information through a clean and interactive user interface.

The project includes a **React.js frontend**, **Node.js/Express backend**, and **MongoDB database** for handling and storing contact form submissions.

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
* REST API for communication between frontend and backend

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
* Mongoose
* MongoDB Compass

### Tools

* Git
* GitHub
* Visual Studio Code

## Project Structure

```text
my-portfolio/
│
├── public/
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

Move into the Server folder:

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
PORT=5000
```

> Never upload your `.env` file or database credentials to GitHub.

### 6. Start the Backend

Inside the `Server` folder:

```bash
npm start
```

The backend will run on:

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

The portfolio includes a functional contact form connected to the backend.

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
MongoDB
       ↓
Message stored in database
```

The contact form stores:

* Email
* Subject
* Message
* Creation date

## Learning Objectives

This project was developed to gain practical experience with full-stack web development, including:

* Building interfaces with React
* Client-side routing with React Router
* Creating REST APIs with Express
* Working with Node.js
* Connecting applications to MongoDB
* Using Mongoose for database operations
* Handling frontend-backend communication
* Managing projects with Git and GitHub

## Future Improvements

* Deploy the portfolio online
* Add an admin dashboard
* Add authentication and authorization
* Improve animations and UI interactions
* Add more projects and portfolio content
* Expand backend functionality

## Author

**Haris Shah**

Computer Science Undergraduate
AI & Software Development | Database Systems

---

If you like this project, feel free to ⭐ the repository.
