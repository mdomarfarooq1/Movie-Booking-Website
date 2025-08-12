# MERN Movie Tickets Booking Application

A comprehensive full-stack movie ticket booking system built using the **MERN** stack — **MongoDB**, **Express.js**, **React.js**, and **Node.js**.

---

## 🚀 Project Overview

This application simulates a real-world movie booking platform with distinct roles and functionalities for **Users**, **Admins**, and **Theatre Owners**. It features secure authentication, dynamic seat availability checks, and integrated payment processing, all wrapped in a sleek, responsive UI.

---

## 🎯 Key Features

- **Role-Based Access**  
  Separate interfaces and permissions for Users, Admins, and Theatre Owners to streamline workflows.

- **User Authentication & Security**  
  Implemented JWT-based authentication with secure password hashing using bcrypt.

- **Movie & Theatre Management**  
  - Admins can upload and manage movies.  
  - Theatre Owners can add theatres and schedule shows, subject to admin approval.

- **Show & Seat Management**  
  Real-time seat availability checking based on selected showtimes and dates to prevent double bookings.

- **Payment Integration**  
  Secure ticket booking with Stripe payment gateway, including handling failed or negative payment scenarios.

- **State Management**  
  Utilized Redux Toolkit for efficient and scalable frontend state management.

- **UI/UX Design**  
  Built with Ant Design components, enhanced by custom stylesheets for consistent branding and usability.

- **Deployment**  
  Hosted on Heroku for easy access and continuous deployment.

---

## 💻 Technology Stack

| Frontend            | Backend             | Database          | Authentication     | Payments      |
|---------------------|---------------------|-------------------|--------------------|---------------|
| React.js            | Node.js + Express.js| MongoDB (Atlas)   | JWT + bcrypt       | Stripe API    |
| Ant Design UI       | RESTful API design  | Mongoose ODM      | Secure Passwords   |               |
| Redux Toolkit       |                     |                   |                    |               |

---

## 📌 Functionality Breakdown

### Users
- Register and log in securely.
- Browse movies and showtimes.
- Select seats and book tickets.
- View booking history and profile details.

### Admins
- Manage movies: add, update, delete.
- Approve theatre owner requests.
- Monitor users and tickets.
- View analytics and reports (optional enhancement).

### Theatre Owners
- Register and get approval from Admin.
- Add theatres and schedule movie shows.
- Manage showtimes and seating availability.

---

## ⚙️ Setup and Installation
