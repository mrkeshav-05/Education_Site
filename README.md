# 🎓 Education Site - Online Learning Platform

A modern, responsive online education platform built with React and Vite, offering various courses including Software Engineering, Stock Market Trading, Pharma, Mathematics, and more. Features user authentication, video courses, and an intuitive interface for seamless learning experience.

![Education Site Banner](<!-- PASTE YOUR SCREENSHOT LINK HERE -->)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Firebase Configuration](#firebase-configuration)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 🔐 **User Authentication** - Secure login/signup with Firebase Authentication and Google OAuth
- 📚 **Course Catalog** - Browse through various courses including:
  - Software Engineering Programs
  - App Development
  - UI/UX Design
  - Stock Market Trading
  - Pharmaceutical Courses
  - Mathematics Programs
- 🎥 **Video Lessons** - Integrated video player using React Player
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS and Material-UI
- 📱 **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- 🔄 **Dynamic Routing** - Smooth navigation with React Router DOM
- 🎯 **Course Details** - Detailed information about each course including instructor, price, and curriculum
- 👤 **User Profile** - Personalized user experience with authentication state management
- 📞 **Contact Form** - Easy way for users to get in touch
- 🏠 **Multiple Sections** - Home, About, Courses, Contact, and more

## 🛠 Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Vite 5.2.0** - Build tool and dev server
- **React Router DOM 6.22.3** - Client-side routing
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Material-UI 5.15.15** - React component library
- **React Icons 5.0.1** - Icon library

### Backend & Services
- **Firebase 10.10.0** - Authentication and backend services
  - Firebase Authentication
  - Firebase Analytics
  - Google OAuth Provider

### Media & UI Components
- **React Player 2.16.0** - Video player component
- **Emotion** - CSS-in-JS library for Material-UI

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📸 Screenshots

### Home Page
![Home Page](<!-- PASTE YOUR HOME PAGE SCREENSHOT LINK HERE -->)

### Courses Page
![Courses Page](<!-- PASTE YOUR COURSES PAGE SCREENSHOT LINK HERE -->)

### Course Details
![Course Details](<!-- PASTE YOUR COURSE DETAILS SCREENSHOT LINK HERE -->)

### Login Page
![Login Page](<!-- PASTE YOUR LOGIN PAGE SCREENSHOT LINK HERE -->)

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- A **Firebase account** for authentication setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrkeshav-05/Education_Site.git
   cd Education_Site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password and Google Sign-In
   - Copy your Firebase configuration
   - Update the `src/config.js` file with your Firebase credentials

4. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 💻 Usage

### User Authentication
1. Click on the **Login** button in the header
2. Sign up with email/password or use Google OAuth
3. Once logged in, your name will appear in the header

### Browsing Courses
1. Navigate to the **Courses** section
2. Browse through available courses
3. Click on any course card to view detailed information
4. Access video lessons and course curriculum

### Course Features
- View course ratings and pricing
- See instructor information
- Access course descriptions and structure
- Watch video lessons with the integrated player

## 📁 Project Structure

```
Education_Site/
├── public/
│   └── images/           # Public image assets
├── src/
│   ├── assets/
│   │   └── images/       # Course and category images
│   ├── components/       # Reusable React components
│   │   ├── Button.jsx
│   │   ├── Cards.jsx
│   │   ├── Course.jsx
│   │   ├── Crousal.jsx
│   │   ├── data.js       # Course and card data
│   │   ├── Detail.jsx
│   │   ├── InputControls.jsx
│   │   ├── ParticulerCourse.jsx
│   │   └── VideoPage.jsx
│   ├── sections/         # Page sections/routes
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Courses.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Offers.jsx
│   │   └── Signup.jsx
│   ├── App.jsx           # Main application component
│   ├── Layout.jsx        # Layout wrapper
│   ├── config.js         # Firebase configuration
│   ├── main.jsx          # Application entry point
│   ├── App.css           # Application styles
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── README.md             # Project documentation
```

## 🔧 Firebase Configuration

To set up Firebase for this project:

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard

2. **Enable Authentication**
   - In Firebase Console, go to Authentication
   - Click "Get Started"
   - Enable "Email/Password" and "Google" sign-in methods

3. **Get Configuration**
   - Go to Project Settings > General
   - Scroll down to "Your apps" and select Web app
   - Copy the Firebase configuration object

4. **Update config.js**
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

## 📜 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Keshav Thakur**
- GitHub: [@mrkeshav-05](https://github.com/mrkeshav-05)

## 🙏 Acknowledgments

- React team for the amazing framework
- Firebase for authentication services
- Tailwind CSS for the utility-first CSS framework
- Material-UI for beautiful React components
- All contributors and supporters of this project

---

⭐ **Star this repository if you find it helpful!** ⭐
