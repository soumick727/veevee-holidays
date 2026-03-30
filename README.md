# 🚌 VeeVee Holiday Bus Management System


> **VeeVee Holiday Bus Management System** is a full-stack web application that helps bus operators and travel companies manage their fleet efficiently. From adding new buses to tracking service history, this system provides a clean and simple interface to handle all bus-related operations in one place.

---

## 🤔 What Problem Does It Solve?

Managing a fleet of buses manually is time-consuming and error-prone. Travel companies like VeeVee Holidays need a centralized system to:

- 📋 Keep track of all buses in their fleet
- 🔧 Monitor service dates and kilometers traveled
- 🚌 Know which buses are AC or Non-AC
- ✏️ Update bus information when needed
- 🗑️ Remove buses that are no longer in service

This system solves all of the above with a simple, fast and reliable web application.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ➕ Add Bus | Add new buses with complete details |
| 📋 View Buses | View all buses in a clean table format |
| ✏️ Edit Bus | Update existing bus information |
| 🗑️ Delete Bus | Remove buses from the system |
| 🌐 REST API | Full backend API with Spring Boot |
| 💾 Persistent Storage | MySQL database for reliable data storage |
| 🎨 Clean UI | Simple and responsive design |
| 🔀 Routing | Seamless navigation between pages |

---

## 🛠️ Tech Stack

### Frontend
- **Angular** (latest) — Component-based UI framework
- **TypeScript** — Strongly typed JavaScript
- **Plain CSS** — Custom styling

### Backend
- **Spring Boot 3.x** — Java-based REST API framework
- **Spring Data JPA** — Database operations made easy
- **Hibernate** — ORM for MySQL
- **Maven** — Build and dependency management

### Database
- **MySQL 8.0** — Relational database for persistent storage

### Tools
- **Git & GitHub** — Version control
- **Postman / Thunder Client** — API testing
- **VS Code** — Code editor
- **MySQL Workbench** — Database management

---

## 📁 Project Structure

```
veevee-holidays/
│
├── 📂 angularapp/                  # Angular Frontend (Port 4200)
│   └── src/
│       └── app/
│           ├── 📂 about/           # About page
│           ├── 📂 add-bus/         # Add Bus form
│           ├── 📂 edit-bus/        # Edit Bus form
│           ├── 📂 home/            # Home landing page
│           ├── 📂 model/           # Bus TypeScript interface
│           ├── 📂 nav-bar/         # Navigation bar
│           ├── 📂 services/        # HTTP service (API calls)
│           └── 📂 view-bus/        # View all buses table
│
└── 📂 springapp/                   # Spring Boot Backend (Port 8080)
    └── src/main/java/com/example/springapp/
        ├── 📂 configuration/       # CORS configuration
        ├── 📂 controller/          # REST API endpoints
        ├── 📂 model/               # Bus entity
        ├── 📂 repository/          # Database operations
        └── 📂 service/             # Business logic
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have these installed:

| Tool | Version |
|------|---------|
| Java | 17+ |
| Node.js | 20+ |
| Angular CLI | Latest |
| MySQL | 8.0+ |
| Maven | 3.x+ |

---

### 🔧 Backend Setup

**Step 1 — Clone the repository**
```bash
git clone https://github.com/yourusername/veevee-holidays.git
cd veevee-holidays
```

**Step 2 — Create MySQL database**
```sql
CREATE DATABASE veeveedb;
```

**Step 3 — Configure `application.properties`**
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/veeveedb
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
server.port=8080
```

**Step 4 — Run the backend**
```bash
cd springapp
mvnw spring-boot:run
```
✅ Backend starts at `http://localhost:8080`

---

### 🎨 Frontend Setup

**Step 1 — Navigate to Angular app**
```bash
cd angularapp
```

**Step 2 — Install dependencies**
```bash
npm install
```

**Step 3 — Run the frontend**
```bash
ng serve
```
✅ Frontend starts at `http://localhost:4200`

---

## 📡 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/addBus` | Add a new bus | Bus object |
| `GET` | `/getAllBus` | Get all buses | None |
| `GET` | `/getBus/{id}` | Get bus by ID | None |
| `PUT` | `/updateBus/{id}` | Update a bus | Bus object |
| `DELETE` | `/deleteBus/{id}` | Delete a bus | None |

### Sample Request Body
```json
{
    "name": "Express Bus",
    "capacity": 50,
    "servicedate": "2024-01-15",
    "Kilometer": 1200,
    "BusType": "AC"
}
```

### Sample Response
```json
{
    "id": 1,
    "name": "Express Bus",
    "capacity": 50,
    "servicedate": "2024-01-15",
    "Kilometer": 1200,
    "BusType": "AC"
}
```

---

## 🗄️ Database Schema

```sql
CREATE TABLE bus (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(255),
    capacity    INT,
    servicedate VARCHAR(255),
    Kilometer   INT,
    BusType     VARCHAR(255)
);
```

---

## 📸 Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| 🏠 Home | `/` | Landing page with features overview |
| ℹ️ About | `/about` | About VeeVee Holidays |
| ➕ Add Bus | `/bus` | Form to add a new bus |
| 📋 View Buses | `/viewbus` | Table showing all buses |
| ✏️ Edit Bus | `/edit-bus/:id` | Form to update a bus |

---

## 💡 How It Works

```
User (Browser)
     │
     ▼
Angular Frontend (Port 4200)
     │  HTTP Requests (GET, POST, PUT, DELETE)
     ▼
Spring Boot Backend (Port 8080)
     │  JPA / Hibernate
     ▼
MySQL Database (Port 3306)
```

1. User opens the Angular app in the browser
2. Angular sends HTTP requests to the Spring Boot REST API
3. Spring Boot processes the request using the Service layer
4. Data is saved/retrieved from MySQL via JPA Repository
5. Response is sent back to Angular and displayed to the user

---

## ✅ Progress

- [x] Spring Boot project setup
- [x] MySQL database configuration
- [x] Bus model, repository, service
- [x] REST API endpoints (CRUD)
- [x] CORS configuration
- [x] API tested with Postman
- [x] Angular project setup
- [x] Routing configuration
- [x] Bus service (HTTP calls)
- [x] Navbar component
- [x] Home component
- [x] About component
- [x] Add Bus component
- [x] View Bus component
- [x] Edit Bus component
- [x] Delete Bus functionality
- [x] Pushed to GitHub

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

Made with ❤️ by **[Your Name]**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 📄 License

 feel free to use it for learning and development!

---

> ⭐ If you found this project helpful, please give it a star on GitHub!
