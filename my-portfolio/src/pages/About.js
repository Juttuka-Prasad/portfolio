import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-16" id="about">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        👋 About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          className="w-48 h-48"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/00000000" // replace with your image later
            alt="Juttuka Prasad"
            className="rounded-full shadow-lg w-full h-full object-cover border-4 border-blue-500"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg leading-relaxed">
            I believe in <strong className="text-blue-700">hard work, creativity, and patience.</strong> I’m a passionate frontend developer and UI/UX designer from Rebaka, Anakapalle, Andhra Pradesh.
          </p>

          <p className="mt-4">
            📧 <strong>Email:</strong> juttukaprasad42@gmail.com <br />
            📍 <strong>Location:</strong> Anakapalle, Visakhapatnam, AP
          </p>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.div
        className="mt-12 text-center italic text-blue-600 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        "Work hard, expect nothing — Results will come with dedication."
      </motion.div>
    </div>
  );
}

export default About;
