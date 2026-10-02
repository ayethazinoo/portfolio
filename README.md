# Personal Portfolio

A responsive personal portfolio website built with React and Tailwind CSS.
This portfolio showcases my skills, experience, projects, and provides a contact form for visitors to send messages directly.

## 🚀 Features

* Responsive personal portfolio website
* Home, About, Skills, Experience, Projects, and Contact sections
* Responsive navigation
* Project showcase with Demo and GitHub links
* Contact form with:
  * Name
  * Email
  * Message
  * Form validation
  * Success and error messages
* Contact form data is stored in MongoDB
* Email notification is sent using Nodemailer
* Responsive design for desktop, tablet, and mobile devices

## 🛠️ Technologies

### Frontend

* React
* React Router
* Tailwind CSS
* Axios
* React Icons
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemailer
* CORS
* dotenv

## 📋 Projects

### Tasks Management

A task management web application built with React, Node.js, Express, and MongoDB.

Features include:

* User registration and login
* Create, edit, and delete tasks
* Task status management
* Task count by status
* Drag and drop functionality
* Task details such as title, description, and creation date

### News Media

A news media web application built with React, Node.js, Express, and MongoDB.

Features include:

* User registration and login
* Create news
* View news details
* Edit and delete news
* Pagination
* News information such as title, description, author, type, and creation date

### Movie App

A movie information web application built with React and Tailwind CSS.

Features include:

* Fetch movie data from TMDB API
* Currently playing movies
* Movie search
* Movie details
* Movie poster, rating, release date, and overview
* Responsive design
* State management with Redux Toolkit
* API communication with Axios
* Page routing with React Router

### Weather App

A responsive weather application built with React.

Features include:

* Search weather by city
* Fetch weather data from OpenWeather API
* Display current temperature
* Weather conditions
* Weather icon
* Humidity
* Visibility
* Responsive design

### Todo App

A Todo application built with React.

Features include:

* Add tasks
* Edit tasks
* Delete tasks
* Manage data with React useState
* Communication with JSON Server using Axios
* Passing data between components using Props

### Calculator App

A simple calculator web application built with React.

Features include:

* Addition
* Subtraction
* Multiplication
* Division
* Display input values and calculation results

## 📧 Contact Form

The portfolio includes a contact form connected to a Node.js/Express backend.

When a visitor submits the form:

1. The form data is sent to the Express API.
2. The submitted data is stored in MongoDB.
3. Nodemailer sends an email notification.
4. A success message is displayed after successful submission.
5. The form fields are reset.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ayethazinoo/portfolio.git
cd portfolio
```

### 2. Install frontend dependencies

```bash
cd my-profile
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=4000

DATABASE_URL=your_mongodb_connection_string

EMAIL_USER=your_gmail_address
EMAIL_PASSWORD=your_gmail_app_password
```

> `EMAIL_PASSWORD` should be a Gmail App Password, not your regular Gmail password.

For security reasons, the `.env` file is not included in this repository.

The `.gitignore` file includes:

```gitignore
node_modules
.env
```

## ▶️ Run the Application

### Start the backend

Inside the `backend` folder:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:4000
```

### Start the frontend

Inside the `my-profile` folder:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

## 📱 Responsive Design

The portfolio is designed to work across different screen sizes:

* Desktop
* Tablet
* Mobile

## 🎯 Purpose

I created this portfolio to showcase my web development skills and practical projects while continuing to improve my knowledge of frontend and backend development.

I am particularly interested in developing web applications and continuously learning new technologies.

## 📬 Contact

If you would like to contact me, please use the contact form available on the portfolio website.

---

**Built with React, Tailwind CSS, Node.js, Express, and MongoDB.**

Author

Aye Thazin Oo
