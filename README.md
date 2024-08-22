# EquipEase

EquipEase is a medical inventory management system designed to streamline the tracking and managing of medical equipment and supplies. The system consists of a backend built with Node.js and MongoDB, and a frontend using standard web technologies.

## Features
Inventory Management: Track medical equipment and supplies.
User Authentication: Secure login and access control.
Search and Filter: Easily find items in the inventory.
Responsive Design: Access the system on various devices.

# Installation

> Before you begin, ensure you have Node.js and MongoDB installed on your system.

## Backend Setup

### Clone the repository:

`git clone https://github.com/bleach92/EquipEase.git
cd EquipEase/medical-inventory-backend`

### Install dependencies:

`npm install`

### Create a .env file in the medical-inventory-backend directory with the following variables:

`MONGODB_URI=<your_mongodb_connection_string>
PORT=<mongodb_port>
JWT_SECRET=<your_jwt_secret>`

### Start the backend server:

`npm start`

# Frontend Setup

### Navigate to the frontend directory:

`cd ../medical-inventory-frontend`

### Install dependencies:

`npm install`

### Start the frontend server:

`npm start`

# Usage

Access the frontend at http://localhost:3000 and the backend at http://localhost:5001.
Register a new account or log in with existing credentials to start managing your medical inventory.
