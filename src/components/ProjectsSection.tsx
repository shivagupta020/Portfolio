
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI Image Generator",
      category: "ai",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
      description: "An application that generates images based on text descriptions using AI. Built with the OpenAI API and React.",
      technologies: ["React", "OpenAI API", "TailwindCSS", "Next.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
      description: "A productivity app that helps users organize tasks, set deadlines, and track progress. Includes features like drag-and-drop, filtering, and data visualization.",
      technologies: ["React", "TypeScript", "Firebase", "Redux", "ChartJS"],
      liveLink: "#",
      githubLink: "#"
     
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "A modern portfolio website showcasing my projects and skills. Features smooth animations, responsive design, and contact form.",
      technologies: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      liveLink: "#",
      githubLink: "https://github.com/shivagupta020/Myportfolio"
     
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveLink: "#",
      githubLink: "#"
     
    },
    {
      id: 5,
      title: "Recipe Finder App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352",
      description: "A mobile app that allows users to search for recipes based on ingredients they have. Includes features like saving favorites and meal planning.",
      technologies: ["React Native", "Expo", "Firebase", "API Integration"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      description: "A weather dashboard that provides current conditions and forecasts for any location. Features include interactive maps, charts, and alerts.",
      technologies: ["JavaScript", "WeatherAPI", "D3.js", "CSS Grid"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    // { id: 'web', label: 'Web Development' },
    // { id: 'mobile', label: 'Mobile Apps' },
    // { id: 'design', label: 'UI/UX Design' },
    // { id: 'ai', label: 'AI Projects' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here's a selection of projects I've worked on. Each one presented unique challenges
            and opportunities for learning and growth.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button 
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={filter === category.id 
                ? "bg-portfolio-purple hover:bg-portfolio-purple/90" 
                : "hover:bg-portfolio-purple/10 hover:text-portfolio-purple"
              }
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map(project => (
            <motion.div key={project.id} variants={item} className="project-card">
              <Card className="h-full overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" className="flex items-center gap-1 text-portfolio-purple border-portfolio-purple hover:bg-portfolio-purple/10" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button className="flex items-center gap-1 bg-portfolio-teal hover:bg-portfolio-teal/90" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Eye size={16} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
