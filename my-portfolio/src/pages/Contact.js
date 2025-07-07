import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-16 text-gray-800" id="contact">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-900 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        📞 Contact Me
      </motion.h2>

      <motion.div
        className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 border rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 font-bold rounded-md hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Static Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Email: <a href="mailto:juttukaprasad42@gmail.com" className="text-blue-600">juttukaprasad42@gmail.com</a></p>
          <p>Phone: 8897088984</p>
          <p>Location: Rebaka, Anakapalle, Andhra Pradesh</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
