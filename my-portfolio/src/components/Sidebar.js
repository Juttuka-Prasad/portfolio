import { Link } from "react-scroll";

const Sidebar = () => {
  const links = [
    { name: "Home", icon: "🏠", to: "home" },
    { name: "About", icon: "👤", to: "about" },
    { name: "Education", icon: "🎓", to: "education" },
    { name: "Skills", icon: "🧠", to: "skills" },
    { name: "Projects", icon: "💼", to: "projects" },
    { name: "Gallery", icon: "🎨", to: "gallery" },
    { name: "Contact", icon: "✉️", to: "contact" },
  ];

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          smooth={true}
          duration={500}
          className="group cursor-pointer flex flex-col items-center text-white hover:text-yellow-400 transition"
        >
          <div className="text-2xl">{link.icon}</div>
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all">
            {link.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
