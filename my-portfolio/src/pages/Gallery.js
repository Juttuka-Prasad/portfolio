import { useState } from "react";
import { motion } from "framer-motion";

function Gallery() {
  const [filter, setFilter] = useState("All");

  const images = [
    {
      title: "Peacock Drawing",
      type: "Drawing",
      image: "https://source.unsplash.com/600x400/?drawing,art",
    },
    {
      title: "Nature Sketch",
      type: "Drawing",
      image: "https://source.unsplash.com/600x400/?pencil,sketch",
    },
    {
      title: "Poster Design",
      type: "Photoshop",
      image: "https://source.unsplash.com/600x400/?poster,design",
    },
    {
      title: "Creative Edit",
      type: "Photoshop",
      image: "https://source.unsplash.com/600x400/?photoshop,edit",
    },
  ];

  const filtered = filter === "All" ? images : images.filter((img) => img.type === filter);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-16" id="gallery">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🎨 My Gallery
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Drawing", "Photoshop"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border ${
              filter === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((img, index) => (
          <motion.div
            key={index}
            className="rounded overflow-hidden shadow-lg border"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={img.image} alt={img.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">{img.title}</h3>
              <p className="text-sm text-gray-500">{img.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
