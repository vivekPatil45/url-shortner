# URL Shortener

A comprehensive URL shortener application featuring advanced functionalities like authentication, URL shortening, analytics tracking, QR code generation, and image uploads. Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/), this project provides a robust and fully responsive user interface using [Shad CN UI](https://shadcn.dev/).

You can view the [Live Demo](https://trimrr2.vercel.app/) of the application.


<a href='https://trimrr2.vercel.app/' target='_blank'>
    <img src="https://img.shields.io/badge/Project%20Status-Live-green"></a>
</a>

## Features

- **Authentication**: Secure user sign-up and login.
- **URL Shortening**: Convert long URLs into short, shareable links.
- **Analytics Tracking**: Monitor and analyze URL usage and performance.
- **QR Code Generation**: Automatically generate QR codes for shortened URLs.
- **Image Uploads**: Upload images to Supabase storage buckets.
- **Responsive UI**: Fully responsive and visually appealing design using Shad CN UI.

## Tech Stack

- Vite
- React.js
  - Hooks
  - React Router
- Supabase (for authentication, URL management, and storage)
- Shad CN UI (for UI components and styling)

## Build and Run

### Prerequisites

1. Install Node.js and npm:
   - Refer [here](https://nodejs.org/en/download/)

### Run Software

1. Clone Repo:
   - `$ git clone https://github.com/vivekPatil45/url-shortner.git`
2. Change Directory:
   - `$ cd url-shortner/`
3. Install Dependencies:
   - `$ npm install`
4. Start Development Server:
   - `$ npm run dev`



## Configuration

### .env File

To ensure the application functions correctly, you need to configure environment variables in the `.env` file. 

Create a `.env` file in the root directory of your project with the following content:

```plaintext
VITE_SUPABASE_KEY=your_supabase_key
VITE_SUPABASE_URL=your_supabase_url
```
## Directory Structure

    url-shortner/
    ├── src/                    # Front-end Folder
    ├── public/                 # Public assets
    ├── .env                    # Environment variables
    ├── README.md               # README file
    └── package.json            # Holds package dependencies and scripts

## Contact Me

- [Vivek Patil](https://github.com/vivekPatil45)
