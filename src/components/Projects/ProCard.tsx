
// import img from "../../assets/ark-slide-5.jpg"
import TravelVerse from "../../assets/ProjectsPic/TravelVerse.png";
import AdminDash from "../../assets/ProjectsPic/AdminDash.jpg";
import Astronova from "../../assets/ProjectsPic/Astronova.png";
import Ecommerce from "../../assets/ProjectsPic/MyShop.jpg";
import Laravel from "../../assets/ProjectsPic/Laravel.png";
export const ProCard = () => {
  const projects = [
    {
      image: TravelVerse,
      title: "TravelVerse",
      description:
        "A scalable full-stack travel booking platform that enables users to explore destinations and book trips, hotels, flights, cruises, restaurants, cars, and activities through a unified and high-performance system.",
      skills: ["React", "Redux Toolkit", " React Query","Axios", "Authentication & Authorization" ,"React Router"],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/Abdallah-Younes10/Travel_Verse",
    },
    {
      image: AdminDash,
      title: "Admin Dashboard Web Application",
      description:
        "A modern and high‑performance admin dashboard built with React and Vite, designed for managing users, products, orders, and analytics. The project features a scalable architecture, reusable components, and real‑world dashboard functionalities suitablefor e‑commerce and SaaS platforms.",
      skills: ["React", "Vite", "TanStack Query (React Query)","React Router","Tailwind CSS","Recharts / ApexCharts","Data Table UI Components"],
      liveUrl: "https://dashbase-three.vercel.app/",
      githubUrl: "https://github.com/Abdallah-Younes10/AdminDash",
    },
    {
      image: Astronova,
      title: "Astronova – NASA Space Apps Challenge (1st Place Winner)",
      description:
        "Built an interactive educational web platform focused on space exploration, enabling users to explore planets, discover space missions, and access real-time space data via integrated public APIs.",
      skills: ["HTML", "CSS", "JavaScript","Bootstrap","RestAPIs"],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/Abdallah-Younes10/Astronova",
    },
    {
      image: Ecommerce,
      title: "Ecommerce-Website",
      description:
        "A production-ready e-commerce web application built with React and Vite, designed as a scalable and responsive online store with modern frontend practices.",
      skills: ["React", "Vite", "Tailwind CSS","Redux Toolkit"," React Query"," React Router","SPA Architecture","Performance Optimization"],
      liveUrl: "https://ecommerce-myshop-sage.vercel.app/",
      githubUrl: "https://github.com/Abdallah-Younes10/Ecommerce-Website",
    },
    {
      image: Laravel,
      title: "TravelVerse API",
      description:
        "Developed backend Laravel APIs with MySQL, following MVC architecture, handling authentication (JWT/Sanctum), CRUD operations, and complex relationships (e.g.,polymorphic associations).",
      skills: ["Laravel (REST API)", "MySQL", "MVC Architecture","Eloquent ORM "],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/Abdallah-Younes10/TravelVersse-API",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15 p-6">
      {projects.map((project) => (
        <div
  key={project.title}
  className="bg-slate-900/50 border border-cyan-600/30 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col"
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-56 object-cover"
  />

  <div className="p-6 flex flex-col flex-1 gap-4">
    <h3 className="text-2xl font-semibold">{project.title}</h3>

    <p className="text-slate-300">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 border border-cyan-600 rounded-lg text-sm"
        >
          {skill}
        </span>
      ))}
    </div>

    <div className="flex gap-3 mt-auto">
      {
        project.liveUrl && <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-lg bg-cyan-600"
      >
        Live Demo
      </a>

      }
      
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-lg border border-cyan-600"
      >
        GitHub
      </a>
    </div>
  </div>
</div>
      ))}
    </div>
  );
};