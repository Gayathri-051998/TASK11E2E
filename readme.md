# Task 11 - User Authentication & Authorization API

## 👩‍💻 Author: Gayathri V

This is a Node.js backend project implementing **User Authentication and Authorization** using JWT, Express, Mongoose, and MongoDB. The project follows the **MVC pattern**, supports **Bearer Token** authentication, and is **deployed on Render**.

---

## 🌐 Live API Base URL
```
https://task11e2e-1.onrender.com
```

---

## 📁 Project Structure

```
├── controllers/         # Controller logic
├── middlewares/         # JWT Auth middleware
├── models/              # Mongoose schemas
├── routes/              # API route definitions
├── utils/               # Config / logger utils
├── app.js               # App entry (mounts middleware & routes)
├── server.js            # Starts server + connects DB
├── .env                 # Environment variables
├── package.json         # NPM dependencies
```

---

## 🔐 API Endpoints

### ✅ Register
**POST** `/users/register`  
```json
{
  "username": "gayathri",
  "email": "test99@mail.com",
  "password": "123456"
}
```

### ✅ Login
**POST** `/users/login`  
```json
{
  "email": "test99@mail.com",
  "password": "123456"
}
```  
🔁 Returns JWT token.

### ✅ Profile (Protected)
**GET** `/users/me`  
Headers: `Authorization: Bearer <token>`

### ✅ Logout
**POST** `/users/logout`  
Headers: `Authorization: Bearer <token>`

---

## 🧪 Postman Testing Steps

1. Register a user → `POST /users/register`
2. Login → Copy token from response
3. Paste token in `Authorization` header as `Bearer <token>`
4. Access `/users/me` to verify
5. Use `/users/logout` for dummy logout

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- `bcryptjs` for password hashing
- Hosted on **Render**

---

## 🚀 Deployment

### Environment Variables (.env)
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3001
```

### Render Setup:
- Create new Web Service from GitHub repo
- Build Command: `npm install`
- Start Command: `npm start`
- Add env vars via dashboard

---

## 📦 Installation (Local)
```bash
git clone https://github.com/Gayathri-051998/TASK11E2E.git
cd TASK11E2E
npm install
npm run dev
```

---
