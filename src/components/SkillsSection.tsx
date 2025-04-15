
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Paintbrush, Workflow } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <Code className="h-6 w-6 text-portfolio-purple" />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "NextJs", level: 75 },
        { name: "TailwindCSS", level: 70 },
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-portfolio-purple" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "NestJs", level: 85 },
        { name: "ExpressJS", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 80 },
      ]
    },
    // {
    //   id: 3,
    //   title: "Design & UI/UX",
    //   icon: <Paintbrush className="h-6 w-6 text-portfolio-purple" />,
    //   skills: [
    //     { name: "Figma", level: 80 },
    //     { name: "Adobe XD", level: 75 },
    //     { name: "UI Design", level: 85 },
    //     { name: "Responsive Design", level: 90 },
    //     { name: "Animation", level: 70 }
    //   ]
    // },
    {
      id: 4,
      title: "Tools & Others",
      icon: <Workflow className="h-6 w-6 text-portfolio-purple" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Visual Studio", level: 80 },
        { name: "CI/CD", level: 65 },
        { name: "AWS", level: 65 }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I've cultivated a diverse set of skills throughout my career, specializing in full-stack web development
            and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {skillCategories.map((category) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-purple/10 p-2 rounded-md mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-portfolio-dark">{category.title}</h3>
              </div>

              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {category.skills.map((skill, index) => (
                  <motion.div key={index} variants={item}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
