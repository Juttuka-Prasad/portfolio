import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const roles = [
  "Frontend Developer 💻",
  "UI/UX Enthusiast 🎨",
  "Creative Designer ✍️",
];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black text-white text-center overflow-hidden">
      {/* Bubbles Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 6, random: true },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
          },
        }}
        className="absolute w-full h-full top-0 left-0 z-0"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <motion.div
          className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-xl mb-6 overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/9919?v=4"
            alt="Juttuka Prasad"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-yellow-400">Juttuka Prasad</span>
        </motion.h1>
        <span className="text-sm font-semibold px-3 py-1 mt-1 rounded-full bg-yellow-500 text-black animate-pulse shadow-md">
          🎓 Fresher | Frontend Enthusiast
        </span>

        <motion.p
          key={index}
          className="mt-4 text-xl md:text-2xl text-gray-300 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {roles[index]}
        </motion.p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300 transition shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition shadow-md"
          >
            Hire Me
          </a>
        </div>

        <div className="flex gap-6 mt-8">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
