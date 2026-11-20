# React Routing & Firebase Authentication

Assignment for **Tools & Technologies for Internet Programming**.
A simple React app(GateKeeper) with React Router, Firebase Email/Password Authentication and Protected Routes.

## Pages

| Page      | Route        | Access    |
|-----------|--------------|-----------|
| Home      | `/`          | Public    |
| Login     | `/login`     | Public    |
| Register  | `/register`  | Public    |
| Dashboard | `/dashboard` | Protected |
| Profile   | `/profile`   | Protected |

## Tech Stack
React 19 · Vite · React Router · Firebase Authentication · Context API

## Project Structure
```
src/
├── components/   Navbar.jsx, ProtectedRoute.jsx
├── pages/        Home, Login, Register, Dashboard, Profile
├── providers/    AuthProvider.jsx   (auth state + functions via Context)
├── firebase/     firebase.config.js
├── utils/        authErrors.js      (friendly error messages)
├── App.jsx       (routes)
└── main.jsx      (entry point)
```

## How to Run
1. `npm install`
2. Create a Firebase project -> add a Web app -> copy the config into `src/firebase/firebase.config.js`
3. Firebase Console -> Authentication -> Sign-in method -> enable **Email/Password**
4. `npm run dev` and open http://localhost:5173

## How It Works
- **Routing:** `BrowserRouter`, `Routes`, `Route`, `NavLink`, `useNavigate`.
- **Authentication:** `AuthProvider` exposes `user`, `loading`, `createUser`, `signInUser`, `logOut` using Context.
- **Persistent login:** `onAuthStateChanged` restores the user after a page refresh.
- **Protected routes:** `ProtectedRoute` waits for `loading`, then redirects to `/login` if there is no user.
