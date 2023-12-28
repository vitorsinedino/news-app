
# Project Setup Guide

## Introduction

Welcome to the setup guide for the News Article App. This document will guide you through the steps to install and run the application on your local machine. Additionally, it provides an overview of the application's features and key improvements.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (preferably the latest stable version)
- npm (usually comes with Node.js)

## Installation

Follow these steps to set up the project:

1. **Clone the Repository**  
   If you have the Git URL for the project, clone it to your local machine using the following command:
   \`\`\`
   git clone [https://github.com/vitorsinedino/news-app.git]

2. **Install Dependencies**  
   Navigate to the project directory and run the following command to install the necessary dependencies:
   \`\`\`
   npm install
   \`\`\`

## Running the Application

To run the application, use the following command:

\`\`\`
npm start
\`\`\`

This will start the development server, and the application should be accessible via `http://localhost:3000` in your web browser.

## Features

- **News List View**: Displays a list of top headlines from the US, each with an image, title, author, source, and published date.
- **Responsive Layout**: The news grid adjusts to different screen sizes, with different column arrangements for desktop and mobile views.
- **News Detail View**: Clicking on a news item navigates to a detailed view, showing more information about the selected news article.

## Key Improvements

- **Separation of API Logic**: API fetching logic is extracted into separate functions, making the code more maintainable and readable.
- **Error Handling**: Improved error handling for network requests and response validation.
- **Async/Await Syntax**: Modern syntax for asynchronous operations enhances code readability and error handling.

## Screenshots (To be added)

- **Main News List View**  
  ![Main News List View](https://i.ibb.co/tz36spB/Home-page-desktop.png)

- **Responsive Layout on Mobile Devices**  
  ![Responsive Layout](https://i.ibb.co/tMJDqCb/Home-Page-Mobile.png)

- **Detailed News View**  
  ![Detailed News View](https://i.ibb.co/zV1nxmT/News-Details-Page.png)

Replace `path-to-image` with the actual path to your screenshots.

---

I hope this guide helps you set up and understand the project with ease. For any further questions or issues, feel free to reach out.
