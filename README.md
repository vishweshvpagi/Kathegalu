

# Kathegalu

**Kathegalu** (ಕಥೆಗಳು) is a blogging platform designed to share and celebrate Kannada literature. Users can upload blogs, poems, and quotes in Kannada, connecting people with the beauty of the language. The project is built using **React.js** for the frontend and **Node.js** for the backend.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Create and Share Content**: Users can upload and share blogs, poems, and quotes in Kannada.
- **Rich Text Editor**: Create beautifully formatted content with an easy-to-use editor.
- **Categories**: Organize content by type (blogs, poems, quotes).
- **Responsive Design**: Optimized for desktop and mobile users.
- **User Authentication**: Secure login and registration for contributors.
- **Kannada Support**: Fully supports Kannada language input and display.

---

## Technologies Used

### Frontend
- **React.js**: For building the user interface
- **React Router**: For navigation
- **Axios**: For making API calls
- **CSS/Bootstrap**: For styling

### Backend
- **Node.js** with **Express.js**: For the server and API
- **MongoDB**: For storing user content and data
- **Mongoose**: For MongoDB object modeling
- **JWT**: For user authentication
- **Multer**: For handling image uploads

---

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js**: [Download](https://nodejs.org/)
- **MongoDB**: [Download](https://www.mongodb.com/try/download/community)
- **Git**: [Download](https://git-scm.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kathegalu.git
   cd kathegalu
   ```

2. Install dependencies:
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Backend:
     ```bash
     cd ../backend
     npm install
     ```

3. Set up environment variables:
   In the `backend` directory, create a `.env` file and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm start
     ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage

1. **Create an Account**: Register on the platform to start contributing.
2. **Upload Content**: Write blogs, poems, or quotes in Kannada and share them with the community.
3. **Browse**: Explore content uploaded by other users, categorized by type.
4. **Edit or Delete**: Manage your own uploads.

---

## Folder Structure

```plaintext
kathegalu/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
└── README.md
```

---

## API Endpoints

### Authentication
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login an existing user

### Content Management
- **GET /api/posts** - Fetch all content
- **POST /api/posts** - Create a new post
- **GET /api/posts/:id** - Fetch a specific post by ID
- **PUT /api/posts/:id** - Update a post (Author only)
- **DELETE /api/posts/:id** - Delete a post (Author only)

### Categories
- **GET /api/categories** - Fetch all categories (blogs, poems, quotes)

---

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request on GitHub.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
