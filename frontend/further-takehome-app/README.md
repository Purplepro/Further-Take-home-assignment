# Further Contact Form Application

A Next.js application featuring a contact form that collects user information and submits it to a Zapier webhook. The application also integrates with Google Tag Manager for tracking form submissions.

## Features

- Contact form with fields for first name, last name, email, and phone number
- Form validation
- Google Tag Manager integration for tracking form submissions
- Zapier webhook integration for processing form submissions
- Success page and in-form success message

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd further-takehome-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Environment Setup

Create a `.env.local` file in the root directory with the following content:

```
# Server-side only secret
SECRET_KEY="YOUR_GTM_ID"
```

This environment variable is used for Google Tag Manager integration.

## Running the Application

### Development Mode

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

This will start the development server with Turbopack. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
further-takehome-app/
├── public/                  # Static files
├── src/                     # Source code
│   ├── app/                 # Next.js App Router
│   │   ├── components/      # React components
│   │   │   └── contactForm.tsx  # Contact form component
│   │   ├── pages/           # Page components
│   │   │   └── success.tsx  # Success page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
├── .env.local               # Environment variables
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Additional Commands

- **Linting**: Run ESLint to check for code quality issues:

```bash
npm run lint
# or
yarn lint
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Tag Manager](https://tagmanager.google.com/) - Tag management system
- [Zapier](https://zapier.com/) - Automation tool for connecting apps and services

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.