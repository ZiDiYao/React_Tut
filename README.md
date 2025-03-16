# Project: GitHub User Searching & To-Do List

## Description
This repository contains two separate projects:
1. **GitHub User Searching** - A web application that allows users to search for GitHub users and view their profile details, including repositories and follower counts.
2. **To-Do List** - A simple to-do list application that enables users to manage their tasks efficiently by adding, editing, and deleting items.

## Features
### GitHub User Searching
- Search for GitHub users by their username
- Display user profile details (avatar, bio, repositories, followers, etc.)
- Responsive UI with an intuitive search interface

### To-Do List
- Add new tasks to the list
- Mark tasks as completed
- Edit existing tasks
- Delete tasks
- Store tasks locally for persistence

## Installation
### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

### Clone the Repository
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Install Dependencies
```sh
npm install
```

## Running the Project
To start the development server, run:
```sh
npm start
```
This will launch the project on `http://localhost:3000/` (or a different port if 3000 is occupied).

## Folder Structure
```
.
├── src
│   ├── components  # Reusable UI components
│   ├── pages       # Main pages for each project
│   ├── assets      # Images and styles
│   ├── utils       # Helper functions
│   ├── App.js      # Main application entry point
│   ├── index.js    # Renders the application
├── public          # Static assets
├── package.json    # Project dependencies and scripts
└── README.md       # Documentation
```

## Technologies Used
- React.js
- JavaScript (ES6+)
- CSS/SCSS for styling
- GitHub API (for GitHub User Searching)
- Local Storage (for To-Do List persistence)

---
### Author
Your Name - [ZiDiYao](https://github.com/your-username)

