# leakageForm

# Leakage Form Management System

The Leakage Form Management System is a web application designed to manage forms related to leakage tasks. The system categorizes forms into three types: "Today’s", "Pending", and "Saved". It is built using a React frontend, Node.js/Express backend, and MongoDB as the database.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Setup Environment](#setup-environment)
4. [Database Setup](#database-setup)
5. [Starting the Server and Client](#starting-the-server-and-client)
6. [Usage](#usage)
7. [License](#license)

## Project Overview

This project provides a system to manage forms for tasks categorized by their completion status. It allows users to:
- View and manage forms scheduled for today.
- Save forms as pending if they are not completed.
- Finalize and save completed forms.

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- **Node.js**: JavaScript runtime environment (https://nodejs.org/)
- **MongoDB**: NoSQL database (https://www.mongodb.com/)
- **Git**: Version control system (https://git-scm.com/)

## Setup Environment

### 1. Clone the Repository

Clone the project repository to your local machine using Git:

```bash
git clone https://github.com/pibrahimkhan001/leakageForm.git
cd leakage-form-management-system
```
### 2. Install Dependencies
The project is divided into two main parts: the backend (server) and the frontend (client). You will need to install dependencies for both.

#### Install Server Dependencies
Navigate to the server directory and install the required Node.js packages:
```
cd server
npm install
```

#### Install Client Dependencies
Navigate to the client directory and install the required Node.js packages for the React application:
```
cd ../client
npm install
```
### Database Setup
The application uses MongoDB to store form data. You'll need to set up MongoDB and import the necessary data.

#### Import the Database
To import the database into MongoDB, use the following command:
```
mongorestore --db your_database_name ./backup/your_database_name
```

Replace your_database_name with the actual name of your database.

## Starting the Server and Client
Once the environment and database are set up, you can start both the server and the client.

### 1. Setup Environment Variables
Create a .env file in the server directory to store environment variables. Add the following content to the file:

```
MONGO_URI=mongodb://localhost:27017/your_database_name
PORT=5000
```

* MONGO_URI: The connection string for MongoDB.
* PORT: The port on which the server will run.

### 2. Start the Server
Navigate to the server directory and start the Node.js server:

```
cd server
npm start
```
The server will start and listen for requests at http://localhost:5000.

### 3. Start the Client
Navigate to the client directory and start the React development server:

```
cd ../client
npm start
```
The client will start and be accessible at http://localhost:3000.

## Usage
The Leakage Form Management System consists of three main sections:

### 1. Today’s Forms
This section displays all forms that are scheduled for the current date. Users can view and manage these forms, update actual counts, and save them as pending if not completed.

### 2. Pending Forms
Forms that have been saved but not finalized are categorized as pending. This section allows users to review and finalize these forms, moving them to the "Saved" section once completed.

### 3. Saved Forms
Forms that have been completed and finalized are stored in this section. These forms are typically read-only, serving as a historical record of completed tasks.

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this software as per the terms of the license.


### **Explanation of the Sections:**

1. **Project Overview**: Provides a brief description of what the project does.
2. **Prerequisites**: Lists the software requirements for running the project.
3. **Setup Environment**: Detailed steps for cloning the repository and installing necessary dependencies.
4. **Database Setup**: Instructions for exporting and importing the MongoDB database.
5. **Starting the Server and Client**: Steps to start the backend server and frontend client, including setting up environment variables.
6. **Usage**: Describes the functionality of the application, focusing on the different categories of forms.
7. **License**: Includes the licensing information.

