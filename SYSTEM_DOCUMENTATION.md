# StudentSphere - Complete Academic Management System

## 📚 Project Overview

StudentSphere is a comprehensive student academic management platform built with **Next.js 16.2.6**, **React 19.2.4**, **TypeScript**, **Tailwind CSS 4**, and **Prisma 5** with SQLite database.

The system provides students with all tools needed to manage their academic life including task tracking, subject organization, attendance tracking, grade management, exam planning, and notes storage.

---

## 🎯 Core Features

### 1. **Authentication & Profile Management**
- Student registration and login
- Profile page with student information
- **Downloadable Student ID Card** with holographic effect
- Academic statistics display (GPA, Attendance, Subjects)

### 2. **Dashboard**
- Overview of all academic activities
- Quick statistics (Completed tasks, Pending tasks, Subjects, Completion rate)
- Task management with add/edit/delete functionality
- Subject list organized by academic level
- Weekly progress tracking
- Quick action links to all features

### 3. **Task & Assignment Management**
- Create, read, update, delete tasks
- Due date tracking with calendar
- Priority levels (Low, Medium, High)
- Task status tracking (Pending, In-Progress, Completed)
- Bulk operations support

### 4. **Subject Organization**
- Add and manage multiple subjects
- Subject instructor information
- Subject course codes
- Link assignments and exams to subjects

### 5. **Attendance Tracking**
- Mark attendance per subject per day
- Overall attendance percentage calculation
- Subject-wise attendance statistics
- Visual attendance progress bars
- Attendance history

### 6. **Grade Management**
- View all grades and assessments
- Calculate subject-wise averages
- Overall GPA calculation
- Grade visualization with letter grades (A+, A, B, C, D)
- Performance analytics

### 7. **Exam Planning**
- Schedule exams across subjects
- Exam date and time management
- Mark obtained and maximum marks
- Exam performance tracking

### 8. **Study Notes**
- Create and organize notes by subject
- Rich text content support
- Download notes as text files
- Edit and delete notes
- Easy search and organization

---

## 🏗️ System Architecture

### **Database Schema (Prisma Models)**

```
Student (Main User)
├── Tasks
├── Subjects
├── Exams
├── Attendance
├── Notes
└── Grades

Subject
├── Tasks
├── Exams
├── Attendance
├── Notes
└── Grades
```

### **File Structure**

```
StudentSphere/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── login/page.tsx           # Login with validation
│   ├── signup/page.tsx          # Registration with validation
│   ├── profile/page.tsx         # Student profile & ID card
│   ├── dashboard/
│   │   ├── page.tsx             # Main dashboard
│   │   ├── attendance/page.tsx   # Attendance tracker
│   │   ├── grades/page.tsx       # Grade management
│   │   └── notes/page.tsx        # Study notes
│   ├── features/page.tsx        # Features page
│   ├── pricing/page.tsx         # Pricing plans
│   ├── about/page.tsx           # About page
│   ├── testimonials/page.tsx    # Testimonials
│   ├── contact/page.tsx         # Contact form
│   ├── api/
│   │   └── students/
│   │       ├── route.ts         # Create/list students
│   │       └── [id]/route.ts    # Get/update student
│   └── globals.css              # Global styles
├── components/
│   ├── NavbarProCompact.tsx     # Single compact navbar
│   ├── PageLayout.tsx           # Reusable page wrapper
│   └── ContactForm.tsx          # Reusable contact form
├── lib/
│   └── formUtils.ts             # Form validation utilities
├── prisma/
│   └── schema.prisma            # Database schema
├── public/                      # Static assets
└── package.json
```

---

## 🎨 UI/UX Improvements

### **Text Size Reduction (25% Smaller)**
All text is reduced by 25% for a cleaner, more aesthetic look:
- H1: 2.25rem → 1.69rem
- H2: 1.875rem → 1.41rem
- H3: 1.5rem → 1.125rem
- Body: 1rem → 0.875rem

### **Clean Design Elements**
- Minimal borders with subtle gray colors
- Soft shadows for depth (2px, 4px)
- Card-based layout with rounded corners
- Smooth transitions and hover effects
- Responsive grid layouts

### **Single Navbar**
- Compact navbar for all pages
- Dropdown menus for organization
- Mobile hamburger menu
- Quick login/signup buttons
- Logout functionality
- Dynamic display based on authentication state

---

## 🔐 Authentication Flow

1. **Signup**: User registers with name, email, password, academic level
2. **Validation**: Email validation, password confirmation
3. **Storage**: Student data stored in localStorage (demo) or database
4. **Session**: Student ID stored in localStorage for session management
5. **Login**: Email and password verification
6. **Dashboard Access**: Redirects to dashboard after login
7. **Logout**: Clears session and returns to homepage

---

## 💾 Data Management

### **Mock Data (Current Implementation)**
- Uses localStorage for demo purposes
- API routes store data in memory
- No database persistence yet

### **Real Database (Ready)**
- Prisma ORM configured with SQLite
- Database schema created (`prisma/schema.prisma`)
- Migration files generated (`migrations/20260519091644_init/`)
- Ready for production migration

### **To Enable Database:**
```bash
npx prisma db push
npx prisma generate
```

---

## 🚀 Getting Started

### **Installation**
```bash
npm install
npx prisma migrate dev --name init
npm run dev
```

### **Access Points**
- **Landing Page**: http://localhost:3000
- **Login**: http://localhost:3000/login
- **Sign Up**: http://localhost:3000/signup
- **Dashboard**: http://localhost:3000/dashboard
- **Profile**: http://localhost:3000/profile

---

## 📝 Key Components

### **NavbarProCompact.tsx**
Clean, single navbar with:
- Logo and branding
- Responsive navigation links
- Mobile hamburger menu
- Authentication state awareness
- Dynamic logout button

### **Dashboard**
Main hub with:
- Quick statistics cards
- Task management interface
- Subject listing
- Progress tracking
- Quick action links

### **Profile Page**
Displays:
- Student information
- Professional ID card (downloadable)
- Academic statistics
- Avatar with student initials

### **Attendance Tracker**
Features:
- Mark attendance per subject
- Calculate percentages
- Visual progress bars
- Subject-wise breakdown

### **Grades Page**
Shows:
- Overall average
- Subject-wise grades
- Grade letter conversion (A+, A, B, etc.)
- Assessment details
- Performance visualization

### **Notes Manager**
Enables:
- Create notes by subject
- Download as text files
- Edit and delete
- Organized by subject
- Full-text support

---

## 🔧 Form Validation

All forms use `lib/formUtils.ts`:
- Email validation (regex)
- Password validation (minimum length)
- Required field checking
- Error message display with icons
- Custom field validation

---

## 🎯 Styling System

### **Global CSS Classes**
- `.card-clean`: Clean card styling
- `.btn-clean`: Minimalist buttons
- `.smooth-shadow`: Subtle shadows
- `.clean-border`: Subtle borders
- `.section-spacing`: Consistent padding

### **Tailwind Configuration**
- Custom animation definitions
- Font family extensions (Poppins)
- Responsive breakpoints
- Color palette

### **Icon System**
- React Icons (io5 set) ~400+ icons
- Consistent sizing and colors
- Semantic icon usage

---

## 📱 Responsive Design

- **Mobile (< 640px)**: Single column, hamburger menu
- **Tablet (640px - 1024px)**: Two column layouts
- **Desktop (> 1024px)**: Full three-column layouts
- Touch-friendly button sizes
- Optimized spacing for all devices

---

## 🔄 User Flow

```
Landing Page
    ↓
Sign Up / Login
    ↓
Dashboard
    ├── View Tasks
    ├── Add Tasks
    ├── View Subjects
    ├── Check Attendance
    ├── View Grades
    ├── Manage Notes
    └── Profile → ID Card
```

---

## 📊 Database Models

### **Student**
```prisma
- id (String, primary key)
- name (String)
- email (String, unique)
- password (String)
- academicLevel (String)
- enrollDate (DateTime)
- avatar (String, optional)
- relationships: tasks, subjects, exams, attendance, notes, grades
```

### **Task**
```prisma
- id, studentId, title, description, dueDate, subjectId
- status: pending/in-progress/completed
- priority: low/medium/high
```

### **Subject**
```prisma
- id, studentId, name, code, instructor, credits
- relationships: tasks, attendance, exams, notes, grades
```

### **Other Models**
- Exam: exam scheduling and marks tracking
- Attendance: daily attendance records
- Note: study materials storage
- Grade: assessment and grade tracking

---

## 🎨 Color Scheme

- **Primary**: Blue (#3B82F6)
- **Secondary**: Indigo (#6366F1)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Danger**: Red (#EF4444)
- **Neutral**: Gray (#6B7280)

---

## 📈 Performance Optimizations

- Next.js App Router for optimal performance
- Client components for interactivity
- Static generation where possible
- Optimized images and assets
- Minimal bundle size

---

## 🔮 Future Enhancements

1. **Real-time Notifications**: Push notifications for deadlines
2. **Collaborative Features**: Study groups, shared notes
3. **AI Recommendations**: Smart study suggestions
4. **Mobile App**: Native iOS/Android applications
5. **Advanced Analytics**: Detailed performance insights
6. **Integration**: Calendar, email, third-party apps
7. **Dark Mode**: System-wide dark theme
8. **Offline Support**: PWA capabilities

---

## 📄 License

MIT License - StudentSphere Academic Management System

---

## 👥 Support

For issues, features requests, or feedback:
- Email: support@studentsphere.com
- Contact: /contact page
- Phone: +1 (555) 123-4567

---

## ✨ Version

**StudentSphere v1.0.0** - May 2026
Built with ❤️ for students worldwide
