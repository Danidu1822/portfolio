// ===================================================================
// Portfolio content — ported directly from the original index.tsx
// Edit this file to update any text on the site.
// ===================================================================

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "coursework", label: "Coursework" },
  { id: "contact", label: "Contact" },
];

const TYPING = ["Software Engineer", "Web Developer", "UI/UX Enthusiast", "Problem Solver"];

const TECH_SKILLS = [
  { name: "HTML", level: 50 },
   ,
  ,  { name: "Java", level: 50 },
  { name: "Python", level: 80 },
  { name: "MySQL", level: 50 },
  { name: "GitHub", level: 50 }, { name: "OOP", level: 50 },
 
];

const SOFT_SKILLS = [
  { name: "Problem Solving", icon: "brain" },
  { name: "Teamwork", icon: "users" },
  { name: "Communication", icon: "message-square" },
  { name: "Leadership", icon: "target" },
  { name: "Time Management", icon: "clock" },
  { name: "Quick Learning", icon: "zap" },
  { name: "Critical Thinking", icon: "lightbulb" },
];

const PROJECTS = [
  {
    title: "To-Do List Manager",
    status: "Completed",
    desc: "A sleek dark-themed desktop to-do app built with Python & Tkinter. Add, complete, delete tasks with undo history, unique-task validation, and persistent file storage.",
    tech: ["Python", "Tkinter", "OOP", "File I/O"],
    github: "https://github.com/Danidu1822",
    demo: "https://github.com/Danidu1822",
    gradient: "linear-gradient(135deg, oklch(0.72 0.22 300 / 30%), oklch(0.70 0.20 250 / 30%))",
    icon: "📝",
  },
  {
    title: "Hospital Management System",
    status: "Upcoming",
    desc: "A Java + MySQL desktop application to manage patients, doctors, appointments, and medical records with role-based access and CRUD workflows.",
    tech: ["Java", "MySQL", "JDBC", "Swing"],
    github: "https://github.com/Danidu1822",
    demo: null,
    gradient: "linear-gradient(135deg, oklch(0.85 0.15 200 / 30%), oklch(0.72 0.22 300 / 30%))",
    icon: "🏥",
  },
];

const EDUCATION = [
  { year: "2025 — Present", title: "B.Sc. Software Engineering (Undergraduate)", place: "Sri Lanka Technology Campus (SLTC)", desc: "Studying core software engineering — OOP, DSA, databases, web technologies." },
  { year: "", title: "G.C.E. Advanced Level — Technology Stream", place: "Ananda Sastralaya, Mathugama", desc: "Passed A/Ls in the Technology stream, foundation for engineering studies." },
  { year: "", title: "G.C.E. Ordinary Level", place: "Ananda Sastralaya, Mathugama", desc: "Successfully completed O/Ls." },
];

const EXPERIENCE = [
  { role: "Software Engineering Undergraduate", org: "Sri Lanka Technology Campus", period: "2025 — Present", desc: "Building academic and personal projects across Python, Java, C++ and web technologies. Collaborating in team assignments and independent learning." },
  { role: "Independent Developer", org: "Personal Projects", period: "Ongoing", desc: "Design and ship small tools and apps to practice OOP, databases and modern web stacks. Open source on GitHub." },
];

const coursework = [
  { name: "Python Programming", issuer: "Self-paced", icon: "🐍" },
  { name: "Java Fundamentals", issuer: "University Coursework", icon: "☕" },
  { name: "Database Management (MySQL)", issuer: "University Coursework", icon: "🗄️" },
  { name: "Web Development Basics", issuer: "Self-paced", icon: "🌐" },
];

const ACHIEVEMENTS = [
  { title: "Built first full desktop app", desc: "Shipped a polished Tkinter To-Do Manager with undo history.", icon: "rocket" },
  { title: "Consistent GitHub activity", desc: "Regularly publishing learning projects and experiments.", icon: "github" },
  { title: "Strong academic foundation", desc: "Passed A/L Technology stream and entered SLTC for Software Engineering.", icon: "graduation-cap" },
  { title: "Quick tech adopter", desc: "Comfortable across Python, Java, C++, and modern JS ecosystem.", icon: "zap" },
];

const STATS = [
  { value: 5, suffix: "+", label: "Technologies" },
  { value: 2, suffix: "", label: "Projects" },
  { value: 1, suffix: "+", label: "Years Learning" },
  { value: 100, suffix: "%", label: "Passion" },
];

const CONTACT = {
  email: "danidu1822@gmail.com",
  phone: "077-5473037",
  phoneHref: "tel:+94775473037",
  location: "Kaluthara, Sri Lanka",
  github: "https://github.com/Danidu1822",
  githubHandle: "Danidu1822",
  linkedin: "https://www.linkedin.com/in/danidu-wijegunawardhana-85416a414/",
  linkedinHandle: "danidu-wijegunawardhana",
};
