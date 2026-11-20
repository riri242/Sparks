# Sparks

**A calm space to practice speaking—without pressure.**

Sparks is a web application concept for building speaking confidence through structured, self-paced practice. Its experience is designed around a simple loop: choose a prompt, speak with intention, and reflect on what to improve next.

> **Project status:** The current codebase includes the public landing experience and Firebase authentication foundation. The full guided speaking-session workflow is still under development; see [Current scope](#current-scope).

## Overview

Sparks aims to make speaking practice feel approachable and repeatable. The product direction is organized around three practice modes:

- **Warm-up** — gentle prompts to help users get started and find their flow.
- **Timed practice** — focused exercises for clarity, pacing, and structure.
- **Reflection** — notes and takeaways that help users learn from each session.

The interface uses a calm visual style, responsive layouts, and lightweight motion to support a focused practice environment.

## Current capabilities

The following functionality is present in the active application code:

- Responsive landing page introducing the Sparks experience and practice modes.
- Light and dark theme toggle, with the selected theme saved in browser local storage.
- Email and password registration and sign-in using Firebase Authentication.
- Google sign-in using Firebase Authentication popup flow.
- Password reset email flow.
- Local or session-based authentication persistence.
- Firestore user document creation/update after authentication.
- Page transitions and parallax effects for selected landing-page sections.

## Current scope

The repository is an early-stage implementation. The following product concepts are part of the intended Sparks experience but are **not yet implemented as complete, active workflows**:

- Guided prompt selection and a complete speaking session.
- A working practice timer.
- Audio recording and playback.
- Reflection-note creation and persistence.
- Session history and progress tracking.

The landing page currently introduces these concepts; its calls to action and feature cards should not be interpreted as proof that every workflow is available yet.

## Technology stack

| Area | Technologies |
| --- | --- |
| Frontend framework | React 19 |
| Language | TypeScript 5.9 |
| Development and build | Vite 7 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 7 |
| Backend services | Firebase 12 (Authentication and Cloud Firestore) |
| Animation and motion | Framer Motion, React Scroll Parallax |
| UI and icons | Radix UI, Headless UI, Lucide React, Heroicons, React Icons |
| Code quality | ESLint |

## Project structure

```text
Sparks/
├── public/                  # Static public assets (including the app favicon)
├── src/
│   ├── assets/              # Brand and illustration assets
│   ├── auth/                # Authentication context and route helpers
│   ├── components/
│   │   └── layout/          # Shared navigation and footer
│   ├── hooks/               # Reusable application hooks
│   ├── lib/                 # Firebase initialization
│   ├── pages/               # Landing, authentication, and page views
│   ├── App.tsx              # Application routes and providers
│   ├── index.css            # Global styles and Tailwind layers
│   └── main.tsx             # React application entry point
├── .env.example             # Required environment variable template
├── index.html               # HTML document metadata and entry point
├── package.json             # Dependencies and npm scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig*.json           # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm
- A Firebase project

### 1. Clone the repository

```bash
git clone https://github.com/riri242/Sparks.git
cd Sparks
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a Firebase project and configure the web app.

In Firebase Console:

1. Enable **Email/Password** and **Google** providers under Authentication.
2. Create a Cloud Firestore database.
3. Register a web app and copy its Firebase configuration values.

Create a local environment file from the example:

```bash
cp .env.example .env
```

On Windows PowerShell, you can use:

```powershell
Copy-Item .env.example .env
```

Add your Firebase web app configuration to `.env`:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

The measurement ID is optional unless analytics is enabled. The current Firebase initialization uses Authentication and Firestore.

> **Security note:** Vite exposes variables prefixed with `VITE_` in the client bundle. Firebase web configuration is intended to be used by client applications, but it is not a security boundary. Configure Firebase Authentication and Firestore Security Rules carefully, and never put private service-account credentials or server secrets in frontend environment variables.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Runs TypeScript project checks and creates a production build. |
| `npm run preview` | Serves the production build locally for preview. |
| `npm run lint` | Runs ESLint across the project. |

## Production build

To create and preview a production build:

```bash
npm run build
npm run preview
```

The generated static files are placed in `dist/`.

## Deployment

There is currently **no verified public deployment URL** configured for this repository. Sparks can be deployed to a static hosting provider that supports Vite applications.

Typical deployment settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variables:** Add the Firebase variables listed above to the hosting provider.
- **Routing:** Configure a single-page application fallback so client-side routes resolve to `index.html`.

Once deployed, add the live URL to the GitHub repository's **About → Website** field and to this README.

## Contributing

Suggestions and improvements are welcome. For substantial changes, consider opening an issue first to discuss the proposed implementation.

## License

No license has been specified for this repository yet. Until a license is added, standard copyright restrictions apply to reuse and redistribution.
