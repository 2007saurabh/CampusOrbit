# 🚀 CampusOrbit - College Event Management System

CampusOrbit is a centralized, web-based event management platform designed to streamline the lifecycle of college events—from creation and approval to registration, attendance, and certification. It bridges the gap between college clubs, event organizers, and students by providing a structured workflow.

## 📌 Features Overview
- **Role-Based Access:** Super Admin, College Admin, Club Moderator, Student.
- **Event Lifecycle:** Create, publish, and manage events (Hackathons, Fests, Workshops).
- **Smart Registration:** Auto-waitlist system with automatic promotion on cancellation.
- **QR Check-in:** Unique QR code generation per student and scanner for organizers.
- **Auto-Certificates:** PDF certificate generation upon attendance.
- **Team Registration:** Hackathon team formation with invite codes.

## 🛠️ Tech Stack (Recommended)
- **Frontend:** HTML, CSS, JavaScript (React.js + Tailwind CSS for advanced UI)
- **Backend:** Node.js + Express.js
- **Database:** PostgreSQL (or Supabase for rapid development)
- **Authentication:** JWT (JSON Web Tokens) + bcrypt
- **Libraries:** `qrcode`, `html5-qrcode`, `pdfkit`, `Chart.js`

---

## 🗺️ Step-by-Step Development Roadmap

This project is divided into 5 main phases. Follow this roadmap strictly to avoid scope creep.

### Phase 1: UI/UX & Frontend Skeleton (Week 1)
*Goal: Build the visual interface we created earlier.*
- [ ] Set up the project folder structure (`index.html`, `style.css`, `script.js`).
- [ ] Build the landing page with the Horizontal Categories and Featured Events Carousel.
- [ ] Create static HTML pages for:
  - Login / Register
  - Student Dashboard
  - Club Moderator Dashboard
  - Event Details Page
- [ ] Make the UI fully responsive for mobile and desktop.

### Phase 2: Backend Setup & Authentication (Week 2)
*Goal: Set up the server and database.*
- [ ] Initialize a Node.js/Express backend project.
- [ ] Set up a PostgreSQL database and design the tables (`users`, `clubs`, `events`, `registrations`).
- [ ] Implement Role-Based Authentication (JWT).
  - Create `/register` and `/login` endpoints.
  - Restrict access so only "Club Moderators" can access the event creation page.
- [ ] Connect the frontend Login/Register forms to the backend API.

### Phase 3: Core Event & Club Workflows (Week 3)
*Goal: Make the system functional (CRUD operations).*
- [ ] **Club Creation:** API to submit a club request (Student) and approve it (Admin).
- [ ] **Event Management:** API for Moderators to create, edit, and publish events.
- [ ] **Event Browsing:** API for students to fetch published events (with search and filter).
- [ ] Build the dynamic rendering on the frontend (replace hardcoded cards with real database data).

### Phase 4: Registration & Waitlist Logic (Week 4)
*Goal: Implement the core logic.*
- [ ] Create the `/register-for-event` API.
- [ ] Implement the capacity check:
  - If `current_registrations < capacity`, status = "Confirmed".
  - If full, status = "Waitlisted".
- [ ] Implement **Auto-Promotion Logic:** When a student cancels via the Student Dashboard, write a backend function to find the first "Waitlisted" student and change their status to "Confirmed".

### Phase 5: QR Code, Certificates & Analytics (Week 5)
*Goal: Add the "Wow" factor features.*
- [ ] **QR Code:** Generate a unique QR string for every confirmed registration using the `qrcode` library.
- [ ] **Scanner:** Build a Moderator page that uses `html5-qrcode` to scan the student's phone and mark attendance in the database.
- [ ] **Certificates:** Use `pdfkit` to generate a PDF certificate template and inject the student's name and event details upon successful check-in.
- [ ] **Analytics Dashboard:** Use `Chart.js` to display graphs of event registrations and attendance rates for Admins/Moderators.

### Phase 6: Testing & Deployment (Week 6)
- [ ] Test edge cases (What happens if two people click register at the exact same second?).
- [ ] Deploy Frontend (Vercel / Netlify).
- [ ] Deploy Backend & Database (Render / Railway / Supabase).
- [ ] Write the final project report and prepare for the viva.

---

## 💻 How to Run This Project Locally

### Prerequisites
Make sure you have **Node.js** and **Git** installed on your computer.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/CampusOrbit.git
cd CampusOrbit