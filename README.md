# medblocks-fe

Frontend for the OAuth 2.0 demo app. Built with Next.js 16, Tailwind CSS v4, and TypeScript.

## Live Demo

https://medblocks-fe.vercel.app

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- Axios

## Prerequisites

- Node.js 18+
- The backend (`medblocks-be`) running locally or deployed

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Gyan-Raj/medblocks-fe.git
cd medblocks-fe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:5000
```

If pointing to the deployed backend instead:

```env
NEXT_PUBLIC_BASE_URL=https://medblocks-be.onrender.com
```

### 4. Run the development server

```bash
npm run dev
```

The app will be available at http://localhost:3000.

## Project Structure

```
app/
├── (protected)/
│   └── dashboard/
│       └── page.tsx       # Profile page — shown after login
├── (public)/
│   ├── login/
│   │   └── page.tsx       # Login page with Google + GitHub OAuth buttons
│   └── signup/
│       └── page.tsx       # Signup page
├── page.tsx               # Root — redirects to /login
└── globals.css
```

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## How OAuth Login Works

1. User clicks "Sign in with Google" or "Sign in with GitHub"
2. Browser redirects to the backend OAuth route (`/auth/google` or `/auth/github`)
3. Backend handles the OAuth flow and sets a JWT in an `httpOnly` cookie
4. Browser is redirected to `/dashboard`
5. Dashboard calls `/auth/me` (cookie sent automatically) to load the user profile
NOTE: Local auth is also supported via email/password.

## Notes

- The app uses `withCredentials: true` on all Axios requests so the `httpOnly` cookie is sent cross-origin
- No token is stored in `localStorage` — authentication state lives entirely in the `httpOnly` cookie
- To work correctly in production, both frontend and backend should be on subdomains of the same domain (to avoid Chrome's third-party cookie restrictions)
