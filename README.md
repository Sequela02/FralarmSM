# FrAlarm Security Management System

The FrAlarm Security Management System is a web-based local application designed to streamline the management of security solutions provided by FrAlarm Security, including camera installations, smoke detectors, and alarm systems. This README provides an overview of the project, its components, and instructions for getting started.

## Table of Contents

- [Project Introduction](#project-introduction)
- [Backend Structure](#backend-structure)
- [Frontend Overview](#frontend-overview)
- [Getting Started](#getting-started)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)

## Project Introduction

The FrAlarm Security Management System aims to replace paper records and Excel spreadsheets with a more efficient, digital solution for managing security solutions. It includes features for client management, project tracking, inventory management, user management, reporting, and more.

## Backend Structure

The backend of the system is developed using Spring Boot, utilizing Java 17 and MySQL for persistence. It offers RESTful APIs for managing clients, projects, inventory items, and user accounts. Detailed API documentation can be found in the backend codebase.

## Frontend Overview

The frontend is responsible for providing a user-friendly interface for interacting with the system. Here are the key features and technologies used in the frontend:

- **Authentication (Optional for Phase 1):** Implement a login page for user authentication (to be developed in later phases if not initially required).
- **Client Management:** Dashboard for listing, creating, editing, and deleting client information.
- **Project Management:** Interface for tracking project status, assignments, and deadlines.
- **Inventory Management:** System for monitoring stock levels, managing purchase orders, and receiving inventory alerts.
- **User Management:** Admin interface for handling user profiles, roles, and permissions (for future implementation).
- **Reporting:** Components for generating and displaying reports on clients, projects, and inventory status. Export capabilities for reports (e.g., to CSV or PDF).
- **Error Handling:** User-friendly error messages based on responses from the backend API.
- **Form Validation:** Client-side validation for forms to match backend validation rules.
- **User Interface:** Intuitive and user-friendly UI designed for desktop use within a local network.

## Getting Started

To get the FrAlarm Security Management System up and running, follow these steps:

1. **Clone the Repository:** 
git clone <repository-url>
cd fralarm-security-management-system

2. **Backend Setup:** Refer to the backend documentation for setting up the Spring Boot application, Java, and MySQL.

3. **Frontend Setup:**

- Install Node.js and npm if not already installed.
- Navigate to the frontend directory:
  ```
  cd frontend
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the development server:
  ```
  npm start
  ```

4. **Access the Application:** Open a web browser and access the FrAlarm Security Management System at `http://localhost:3000`.

## Technology Stack

- **Frontend:**
- Framework: React.js
- State Management: Redux (or Context API)
- Styling: CSS Modules (or Styled-components)
- Forms: Formik (or React-hook-form)
- HTTP Client: Axios
- Routing: React Router

- **Backend:**
- Spring Boot with Java 17
- MySQL for data persistence

## Contributing

We welcome contributions to the project. If you'd like to contribute, please follow our [contribution guidelines](CONTRIBUTING.md).

## Testing

- Unit tests should be written for components and utility functions in the frontend.
- Integration tests should be implemented to check interactions with the backend API.

## License

This project is licensed under the [MIT License](LICENSE).
