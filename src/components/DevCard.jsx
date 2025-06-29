import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import SkillModal from "./SkillModal";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function DevCard({
  name,
  role,
  image,
  skills,
  extraSkills = [],
  email,
  linkedin
}) {
  const [openSkillModal, setOpenSkillModal] = useState(false);
  const previewSkills = skills.slice(0, 4); // Only first 4 skills

  return (
    <>
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        className="rounded-2xl"
      >
        <div className="bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform duration-300">
          <div className="text-center">
            <img
              src={image}
              alt={name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white/30"
            />
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm text-indigo-300">{role}</p>

            {/* Contact Icons */}
            <div className="flex justify-center gap-4 mt-3">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-blue-400 hover:text-blue-500"
                  title="Send Email"
                >
                  <FaEnvelope size={20} />
                </a>
              )}
            </div>

            <div className="flex flex-wrap justify-center mt-4 gap-2">
              {previewSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-500/70 px-3 py-1 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}

              {skills.length > previewSkills.length && (
                <button
                  onClick={() => setOpenSkillModal(true)}
                  className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold hover:bg-white/30"
                  title="View all skills"
                >
                  +{skills.length - previewSkills.length}
                </button>
              )}
            </div>
          </div>
        </div>
      </Tilt>

      {openSkillModal && (
        <SkillModal
          title={`${name}'s Skills`}
          skills={skills}
          extraSkills={extraSkills}
          onClose={() => setOpenSkillModal(false)}
        />
      )}
    </>
  );
}
