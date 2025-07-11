# Simple URL Shortener

A lightweight and efficient URL shortening service that converts long URLs into short, manageable links.

## Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **Custom Short Codes**: Generate random short codes for URLs
- **URL Redirection**: Redirect users from short URLs to original URLs
- **Simple Interface**: Clean and user-friendly web interface
- **Database Storage**: Persistent storage of URL mappings
- **Analytics**: Basic click tracking and statistics
- **API Support**: RESTful API for programmatic access

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Additional Libraries**:
  - Body-parser for request handling
  - Mongoose for database operations
  - Shortid for generating unique short codes

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sonu99kr/simple-url-shortner.git
   cd simple-url-shortner
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the application**

   ```bash
   npm start
   ```

4. **Development mode**
   ```bash
   npm run dev
   ```

## Project Structure

```
simple-url-shortner/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── src/
│   ├── models/
│   │   └── url.js
│   ├── routes/
│   │   └── url.js
│   ├── controllers/
│   │   └── urlController.js
│   └── config/
│       └── database.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

The application will be available at `http://localhost:8001`

---

Made with ❤️ by [Sonu99kr](https://github.com/Sonu99kr) simple-url-shortner
