# 🚀 VMS Frontend  

VMS Frontend is a **React 19 + Vite** project using **Tailwind CSS v4**, **Ant Design**, **Zustand**, and **React Query**.  
This stack ensures **fast development**, **scalable architecture**, and **future readiness** (desktop app support with CapacitorJS if needed).  

---

## 📦 Tech Stack  

| Purpose                         | Tech                                        |
|---------------------------------|---------------------------------------------|
| **UI Components**               | [Ant Design](https://ant.design/)           |
| **Styling**                     | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Client State Management**     | [Zustand](https://zustand-demo.pmnd.rs/)    |
| **Server/API State Management** | [React Query](https://tanstack.com/query)   |
| **Routing**                     | [React Router v7](https://reactrouter.com/) |
| **Build Tool**                  | [Vite](https://vitejs.dev/)                 |

---

## 📂 Project Structure  

```bash
vms-frontend/
├─ public/
├─ src/
│  ├─ assets/        # Images, icons, static assets
│  ├─ components/    # Reusable UI components
│  ├─ pages/         # Route-level pages
│  ├─ store/         # Zustand store files
│  ├─ controllers/   # API logic, React Query hooks
│  ├─ App.jsx        # Root component
│  ├─ main.jsx       # App entry point
│  └─ index.css      # Tailwind entry file
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ package.json



## 🛠 Installation & Setup  

Clone and install dependencies:  

```bash
git clone <your-repo-url>
cd vms-frontend
npm install
````

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🧹 Code Quality

Linting and formatting are included:

* **Lint:**

```bash
npm run lint
```

* **Fix lint issues:**

```bash
npm run lint:fix
```

* **Format code with Prettier:**

```bash
npm run format
```

```


