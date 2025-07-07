import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      course: "MCA (PG)",
      college: "Nobel Institute of Science & Technology",
      year: "2022 – 2024",
      cgpa: "8.3",
    },
    {
      course: "B.Sc (MECs)",
      college: "Dadi Veeru Naidu Degree College",
      year: "2019 – 2022",
      cgpa: "8.4",
    },
    {
      course: "Intermediate (MPC)",
      college: "Dr. S Radhakrishnan Jr. College",
      year: "2017 – 2019",
      cgpa: "7.47",
    },
    {
      course: "10th Class",
      college: "ZPH School, Anakapalle",
      year: "2016 – 2017",
      cgpa: "7.8",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-16 text-gray-800" id="education">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-900 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🎓 Education
      </motion.h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Institution</th>
              <th className="px-4 py-2">Year</th>
              <th className="px-4 py-2">CGPA</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center bg-white border-b"
              >
                <td className="px-4 py-3 font-semibold">{edu.course}</td>
                <td className="px-4 py-3">{edu.college}</td>
                <td className="px-4 py-3">{edu.year}</td>
                <td className="px-4 py-3 text-blue-700 font-bold">{edu.cgpa}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Education;
