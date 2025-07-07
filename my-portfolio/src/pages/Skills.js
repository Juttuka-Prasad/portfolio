import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML5 / CSS3", level: "95%", color: "bg-orange-500" },
    { name: "JavaScript", level: "85%", color: "bg-yellow-400" },
    { name: "React JS", level: "80%", color: "bg-blue-500" },
    { name: "Tailwind CSS", level: "75%", color: "bg-cyan-500" },
    { name: "UI/UX Design", level: "70%", color: "bg-pink-500" },
    { name: "Photoshop / Canva", level: "80%", color: "bg-purple-500" },
    { name: "Git & GitHub", level: "85%", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-16 text-gray-800" id="skills">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-900 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🧠 My Skills
      </motion.h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1 font-medium">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <motion.div
                className={`h-4 rounded-full ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
