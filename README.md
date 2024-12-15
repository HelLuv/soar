# Project Overview

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Vercel](https://img.shields.io/badge/Hosted_on-Vercel-black?logo=vercel)

## Introduction

This project is a **financial dashboard application** focused on performance, scalability, and maintainability. Built
with **TypeScript** and **React**, it provides multiple user views and leverages modern libraries for
styling, state management, animations and animated charts. 


### The deployed application is available live at: [soar-nine.vercel.app](https://soar-nine.vercel.app)

## Technologies Used

Below is a list of key technologies and tools used in the project:


- **TypeScript:** Adds static typing for better maintainability and readability.
- **React:** Used for building user interfaces leveraging component-driven development.
- **React Router:** Manages client-side routes and navigation effectively.
- **Vite:** Super-fast development server for optimized builds and smoother development workflow.
- **Zustand:** For efficient and scalable state management.
- **Zod:** A TypeScript-first schema declaration and validation library.
- **React Hook Form:** Lightweight form state management for handling and validating forms.
- **Recharts:** Data visualization with easy-to-use charts.
- **ShadCN UI:** A customizable, accessible, and unstyled component library for building modern UIs with flexibility.
- **TailwindCSS:** Modern utility-first CSS framework for styling.

---

## Development Practices

This project adheres to **modern development practices**, aiming at cleaner code, improved developer productivity, and
an optimized end-user experience. Features of the development approach include:

- **Modular and Component-based Architecture:** Features are developed as logically separated, self-contained modules
  and reusable components, ensuring scalability, flexibility, and maintainability across the application.
- **Git Flow with Consistent Branch Naming:** The project adheres to the Git Flow methodology, ensuring a structured
  branching strategy to maintain clarity and streamline collaboration.
- **Strict Type Safety:** Ensures fewer runtime bugs and better developer experience.
- **Linting and Formatting:** Uses **ESLint** and **Prettier** to enforce code quality and
  consistency.
- **Stateful Management with Zustand:** Minimalistic yet powerful state management inspired by simplified Flux
  principles.
- **ShadCN Components with TailwindCSS:** For accessible, customizable UI components styled using a modern utility-first
  CSS framework.

---

## Local Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**
   Use the following git command to clone the repository:
   ```bash
   git clone https://github.com/HelLuv/soar.git
   cd ./soar
   ```

2. **Install Dependencies**
   Make sure you have **Node.js (v18 or later)** and **npm** installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the Development Server**
   Start the development server using:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

4. **Build the Project**
   Generate an optimized production build using:
   ```bash
   npm run build
   ```

You are now ready to start development or testing the project locally. Happy coding!