# 🍽️ Foodies — Share Your Signature Recipes  
A community-driven recipe-sharing platform built with **Next.js** and a **local SQLite backend**.  
Users can upload their signature dishes, images, ingredients, steps, and help others try and enjoy new food creations!

<p align="center">
  <img src="./public/images/readme1.png" width="850" />
</p>
<p align="center">
  <img src="./public/images/readme2.png" width="850" />
</p>
<p align="center">
  <img src="./public/images/readme3.png" width="850" />
</p>

---

## ⭐ Features

- 📸 Upload images of dishes  
- 🥘 Add ingredients, steps, and cooking instructions  
- 🔍 Browse recipes shared by the community  
- ⚡ Local backend using **SQLite** (no external database needed)  
- 🧭 Clean UX powered by **Next.js**  
- 📱 Fully responsive UI  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js** | Frontend + API Routes backend |
| **SQLite** | Local lightweight database |
| **better-sqlite3** | SQLite driver |
| **Formidable** | File upload handling |
| **React** | UI components |
| **CSS / Tailwind (optional)** | Styling |

---

## 🚀 Getting Started (Local Setup)

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/NikhilG6704/foodies.git
cd foodies

3️⃣ Run the Development Server
This will automatically create foodies.db on first use.
npm run dev
# or
yarn dev
Your app will be running at:
👉 http://localhost:3000
🗄️ SQLite Local Backend
The backend is fully local — no external server needed.
SQLite file is created automatically (data/foodies.db)
API routes inside pages/api/recipes perform all CRUD operations
Works offline, lightweight, fast
📸 Image Uploads
Images are stored inside public/images/
The API handles uploads via Formidable
Use images like:
<img src={`/images/${recipe.image}`} alt={recipe.title} />
📦 Build for Production
npm run build
npm start
🤝 Contributing
Fork the repo
Create a feature branch:
git checkout -b feature/my-feature
Commit your changes
Open a pull request
📜 License
This project is under the MIT License.
❤️ Thank You for Using Foodies!
If you'd like, I can also generate:
✓ A professional project logo
✓ More screenshots
✓ A deployment guide (Vercel + SQLite)
✓ API documentation
Just tell me! 🍽️😄
