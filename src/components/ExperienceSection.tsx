
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection: React.FC = () => {
  const experienceData = [
    {
      id: 1,
      position: "Software Developer",
      company: "Electem Business Solution",
      location: "Bangalore",
      duration: "2024 - Present",
      description: "Designed and developed scalable software solutions using Node.js and React.js, contributing to the end-to-end development of business applications and AI-powered tools.",
      responsibilities: [
      "Architecting scalable frontend solutions with React.js and Tailwind CSS",
      "Developing and integrating RESTful APIs using Node.js and NestJS/ExpressJs",
      "Implementing performance optimizations and responsive design",
      "Collaborating with cross-functional teams to deliver AI-based solutions, including an image shopping assistant",
      "Working with PostgreSQL for efficient data storage and complex query handling",
    ]
    },
    {
      id: 2,
      position: "Training",
      company: "JSpider",
      location: "Bangalore",
      duration: "2023 - 2024",
      description: "Acquired hands-on experience in building dynamic web applications Completed end-to-end project development, encompassing UI design, backend integration, and database management",
      responsibilities: [
       "Completed full-stack web development training with a focus on Java, SQL, and Web Technologies.",
       "Gained practical experience in front-end technologies like HTML, CSS, JavaScript, and ReactJS.",
       "Worked on database handling using MySQL, including complex queries and normalization.",
      ]
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Work Experience</h2>
            <p className="text-gray-600 mt-4">
              My professional journey has allowed me to work on diverse projects and gain valuable industry experience.
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {experienceData.map((job) => (
              <motion.div key={job.id} variants={item} className="timeline-item">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0 bg-portfolio-teal/10 p-3 rounded-full">
                        <Briefcase className="h-6 w-6 text-portfolio-teal" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-portfolio-dark">{job.position}</h3>
                        <h4 className="text-lg font-medium text-portfolio-teal">{job.company}</h4>
                        <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{job.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-600">{job.description}</p>
                        <div className="mt-3">
                          <h5 className="font-medium text-portfolio-purple mb-2">Key Responsibilities:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            {job.responsibilities.map((responsibility, index) => (
                              <li key={index}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
