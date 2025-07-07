import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Yoga Pose Detection (2024)",
      description:
        "Built using Python & Machine Learning. This system detects human yoga poses and helps users improve form.",
      tech: "Python, OpenCV, ML",
      image: "https://source.unsplash.com/600x400/?yoga,pose", // you can replace later
    },
    {
      title: "Prasad Tourism Info Site (2022)",
      description:
        "Static website built using HTML and CSS to show famous tourism places with clean UI layout.",
      tech: "HTML, CSS",
      image: "https://source.unsplash.com/600x400/?travel,tourism", // replace later
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-16 text-gray-800" id="projects">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-900 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        💼 My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              <p className="mt-2 text-sm"><strong>Tech:</strong> {project.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
