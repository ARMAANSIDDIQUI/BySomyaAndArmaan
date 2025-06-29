import React, { useState } from "react";
import DevCard from "./components/DevCard";
import ContactModal from "./components/ContactModal";
import { motion } from "framer-motion";
import "./index.css";
import QuotationTable from "./components/QuotationTable";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-700 to-blue-800 text-white relative">
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold">✨ Meet Our Creative Minds ✨</h1>
        <p className="text-gray-300 mt-2">Innovators, Designers, Developers</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        

        <DevCard
          name="Armaan Siddiqui"
          role="Full Stack Developer"
          image="https://res.cloudinary.com/dnnmzxljv/image/upload/v1751205354/WhatsApp_Image_2025-06-29_at_19.25.40_266d46df_srujdj.jpg"
          email="armaansiddiqui.pms@gmail.com"
          linkedin="https://www.linkedin.com/in/armaan-siddiqui-6902ba294/"
          description="Passionate full-stack developer with expertise in frontend engineering, Firebase integration, and crafting animated user experiences."
          skills={[
            "React",
            "Tailwind/CSS",
            "HTML5",
            "JavaScript (ES6+)",
            "Firebase",
            "Framer Motion",
            "Vite",
            "Redux Toolkit",
            "React Router",
            "Lottie",
            "API Integration",
            "Git/GitHub",
            "Figma to Code",
            "Responsive Design",
            "Deployment (Vercel/Netlify)"
          ]}
          extraSkills={[
            "TypeScript",
            "Next.js (basics)",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Jest",
            "Cypress",
            "Progressive Web Apps (PWA)",
            "Zustand",
            "Styled Components"
          ]}
        />


        <DevCard
          name="Somya Kaushik"
          role="UI/UX Designer & Frontend Developer"
          image="https://res.cloudinary.com/dnnmzxljv/image/upload/v1751204898/WhatsApp_Image_2025-06-29_at_19.16.19_1e39f6f0_nmvd6q.jpg"
          email="somya@example.com"
          linkedin="https://www.linkedin.com/in/somya0911kaushik/"
          description="Creative UI/UX enthusiast blending visual storytelling with responsive front-end development using modern tools and design systems."
          skills={[
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "JavaScript(ES6+)",
            "Figma",
            "Firebase",
            "React",
            "Responsive Design",
            "Prototyping",
            "Wireframing",
            "UI/UX Principles",
            "Git/GitHub",
            "Color Theory"
          ]}
          extraSkills={[
            "Framer Motion",
            "Storybook",
            "Adobe XD",
            "Design Tokens",
            "Accessibility (a11y)",
            "Illustrator",
            "Photoshop",
            "Typography",
            "Interaction Design",
            "User Research"
          ]}
        />

      </section>

      {/* Contact button */}
      <div className="flex justify-center mt-12">
        <motion.button
          onClick={() => setContactOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 10px rgba(59, 130, 246, 0.5)",
              "0 0 20px rgba(99, 102, 241, 0.7)",
              "0 0 10px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          aria-label="Contact Developers"
        >
          Contact Us
        </motion.button>
      </div>

      <div className="pb-16">
        <QuotationTable />
      </div>

      {/* Contact Modal */}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  );
}
