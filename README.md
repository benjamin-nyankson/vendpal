# VendPal Dashboard

## Overview

VendPal is a modular and reusable dashboard application built with modern web technologies, following best practices in component design, state management, API integration, styling, routing, accessibility, and performance optimization.

## Tech Stack

- **React with Vite** – Fast and efficient development experience.
- **TypeScript** – Ensures type safety and maintainability.
- **Zustand** – Lightweight and scalable state management.
- **JSON Server** – Simulated API for handling mock data.
- **Tailwind CSS** – Responsive and utility-first styling.
- **React Router** – Client-side routing for seamless navigation.

## Features

### 🔹 Component Design & Reusability
- The dashboard is structured with reusable components such as buttons, cards, and navigation elements.
- Modular architecture enhances maintainability and scalability.

### 🔹 State Management
- Utilizes **Zustand** to manage global state efficiently.
- Ensures accurate and reactive data updates across components.

### 🔹 Simulated API Integration
- **JSON Server** provides a mock API to simulate real-world scenarios.
- Handles asynchronous data fetching, including loading and error states.

### 🔹 Styling & Responsiveness
- **Tailwind CSS** enables a minimalist yet highly customizable design.
- Ensures seamless adaptability across different screen sizes.

### 🔹 Routing & Navigation
- **React Router** enables smooth navigation between dashboard sections.
- Implements protected routes and dynamic route management.

### 🔹 Accessibility & Performance
- Follows best practices to enhance usability for all users.
- Implements **lazy loading** for improved performance and reduced initial load time.

### 🔹 Code Quality & Documentation
- Clean, modular, and well-documented code structure.
- Includes meaningful comments to explain design decisions.

## Installation & Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>= 16)
- npm 

### Steps to Run Locally

1. Clone the repository:
   ```sh
   git clone https://github.com/benjamin-nyankson/vendpal.git
   cd vendpal
   ```
2. Install dependencies:
   ```sh
   npm install 
   ```
3. Start JSON Server for the simulated API:
   ```sh
   npx json-server src/data.json
   ```
4. Start the development server:
   ```sh
   npm run dev  
   ```
5. Open the application in your browser at `http://localhost:5173/`

## Project Structure

```
├── src
│   ├── components     # Reusable UI components (Buttons, cards, navigation, etc.)
│   ├── pages          # Dashboard views and sections
│   ├── store          # Zustand store for state management
│   ├── api            # API handlers and simulated data
│   ├── routes         # React Router configurations
│   ├── styles         # Tailwind and global styles
│   └── appRoutes.tsx  # Main application entry point
├── public             # Static assets
├── db.json            # JSON Server mock data
├── README.md          # Project documentation
└── package.json       # Dependencies and scripts
```

## Additional Notes

- **Lazy Loading**: Dynamically imports components to boost performance.
- **Error Handling**: Implements error boundaries and API response validation.
- **Enhancements**: Future improvements may include real API integration and additional widgets.

For any questions, feel free to reach out! 🚀

