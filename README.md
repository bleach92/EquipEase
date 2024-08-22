EquipEase

EquipEase is a medical inventory management system designed to streamline the tracking and managing of medical equipment and supplies. The system consists of a backend built with Node.js and MongoDB, and a frontend using standard web technologies.

Features
Inventory Management: Track medical equipment and supplies.
User Authentication: Secure login and access control.
Search and Filter: Easily find items in the inventory.
Responsive Design: Access the system on various devices.
Table of Contents
Installation
Backend Setup
Frontend Setup
Usage
Contributing
License
Installation
Before you begin, ensure you have Node.js and MongoDB installed on your system.

Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/bleach92/EquipEase.git
cd EquipEase/medical-inventory-backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the medical-inventory-backend directory with the following variables:

env
Copy code
MONGODB_URI=<your_mongodb_connection_string>
PORT=3001
JWT_SECRET=<your_jwt_secret>
Start the backend server:

bash
Copy code
npm start
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../medical-inventory-frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
Usage
Access the frontend at http://localhost:3000 and the backend at http://localhost:3001.
Register a new account or log in with existing credentials to start managing your medical inventory.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature or bugfix:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Add a descriptive commit message"
Push to the branch:
bash
Copy code
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

