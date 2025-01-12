# Blogging Website
![image](https://github.com/user-attachments/assets/75c87389-d8ca-49d2-ab45-12333f34525b)

A full-stack blogging application built with **Node.js**, **Express**, **EJS** (SSR), and **MongoDB Atlas**. This platform allows users to create, read, update, and delete blog posts with a user-friendly interface.

## Features

- **Create, Read, Update, and Delete (CRUD):** Users can manage their blog posts easily.
- **Authentication:** Secure login and registration system (if implemented).
- **Server-Side Rendering:** Dynamic views rendered on the server using **EJS**.
- **Responsive Design:** Optimized for mobile and desktop users.
- **MongoDB Atlas Integration:** Cloud-based database for scalability and reliability.

---

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB Atlas**: Cloud-based NoSQL database.

### Frontend
- **EJS**: Template engine for server-side rendering.
- **CSS Framework**: (e.g., Bootstrap or custom CSS for styling).

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A MongoDB Atlas account and cluster.

### Steps
1.Install dependencies:
bash
```
npm install
Create a .env file in the root directory and add the following:
```
2.Create a .env file in the root directory and add the following:
```
PORT=8000
MONGO_URI=your-mongodb-atlas-connection-string
SESSION_SECRET=your-secret-key
```
3.Start the server:
bash
```
npm start
```

Folder Structure
blogging-website/
│
├── public/                # Static files (CSS, JS, images)
├── views/                 # EJS templates
│   ├── partials/          # Reusable partials (e.g., header, footer)
│   ├── blog.ejs           # Blog page template
│   └── index.ejs          # Homepage template
│
├── routes/                # Express routes
│   ├── blog.js            # Blog-related routes
│   └── user.js            # User-related routes (if applicable)
│
├── models/                # Mongoose models
│   ├── Blog.js            # Blog model
│   └── User.js            # User model (if applicable)
│
├── app.js                 # Main entry point
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
