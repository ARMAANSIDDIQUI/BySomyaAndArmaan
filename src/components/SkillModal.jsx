import React from "react";
import { motion } from "framer-motion";

export default function SkillModal({ title, skills, extraSkills, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white text-black w-full max-w-lg rounded-2xl shadow-xl p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Main Skills</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-lg text-sm font-medium text-center shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Extra Skills</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {extraSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium text-center shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
