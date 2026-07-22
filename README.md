# ToyVerse MERN Application

ToyVerse is a React, Express, MongoDB Atlas, and Node.js toy-store application with secure customer and administrator registration.

## Features

- Customer and administrator registration
- Administrator registration key validation
- Password hashing with bcrypt
- JWT login and protected profile endpoint
- Profile data loaded from MongoDB Atlas
- Login and logout session handling
- Store access is available only after registration and login
- Local toy assets: `car.jpg`, `teddy.jpg`, `blocks.jpg`, `robot.jpg`, `doll.jpg`, and `peng.jpg`

## MongoDB Atlas setup

1. Create a cluster at MongoDB Atlas.
2. Create a database user and allow your development IP address in Network Access.
3. Copy the Node.js connection string.
4. Create `backend/.env` from `backend/.env.example` and enter your values.

```env
PORT=5000
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER_URL/toyverse?retryWrites=true&w=majority
JWT_SECRET=replace-with-a-long-random-secret
ADMIN_EMAIL=dontoystore@gmail.com
ADMIN_REGISTRATION_KEY=replace-with-a-private-admin-key
```

Keep this file private. It is ignored by Git.

## Run locally

Install dependencies if needed:

```bash
npm install
cd backend
npm install
```

Start the backend in one terminal:

```bash
cd backend
npm run dev
```

Start the React application in a second terminal:

```bash
npm start
```

Open `http://localhost:3000`. The API runs at `http://localhost:5000/api`.

## API routes

| Method | Route | Description |
| --- | --- | --- |
| POST | `/api/auth/register` | Register a customer or administrator |
| POST | `/api/auth/login` | Authenticate and receive a JWT |
| GET | `/api/auth/me` | Retrieve the authenticated account |

Administrator registrations must include the `ADMIN_REGISTRATION_KEY`. Password hashes, never plaintext passwords, are stored in MongoDB.
