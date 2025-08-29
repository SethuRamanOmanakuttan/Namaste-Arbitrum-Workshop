import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { FaFilePdf, FaLink, FaCode, FaVideo, FaBook } from 'react-icons/fa';

const ResourceCard = ({ title, description, icon, link, index }) => {
  const icons = {
    pdf: <FaFilePdf size={32} className="text-secondary" />,
    link: <FaLink size={32} className="text-secondary" />,
    code: <FaCode size={32} className="text-secondary" />,
    video: <FaVideo size={32} className="text-secondary" />,
    book: <FaBook size={32} className="text-secondary" />
  };

  return (
    <motion.div 
      className="retro-card border-secondary hover:shadow-neon-glow transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center justify-center mb-4">
        {icons[icon]}
      </div>
      <h3 className="text-lg font-bold mb-3 text-secondary text-center">{title}</h3>
      {description && <p className="text-center mb-4">{description}</p>}
      <div className="flex justify-center mt-auto pt-4">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-secondary text-sm inline-flex items-center gap-2"
        >
          Access Resource <FaLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

const ResourcesSection = () => {
  const { hackathonData } = useAppContext();
  
  const resources = [
    {
      id: 'guide',
      title: 'Build with Stylus Guide',
      description: 'Complete guide with setup instructions, code examples, and tutorials',
      icon: 'pdf',
      link: hackathonData.resources.doc
    },
    {
      id: 'tutorials',
      title: 'Video Tutorials',
      description: 'Step-by-step video tutorials to help you get started with Stylus',
      icon: 'video',
      link: 'https://www.youtube.com/@pyorxyz'
    },
    {
      id: 'examples',
      title: 'Code Examples',
      description: 'Sample projects and code snippets to jumpstart your development',
      icon: 'code',
      link: 'https://github.com/OffchainLabs/stylus-hello-world'
    }
  ];

  return (
    <section id="resources" className="py-16 bg-primary relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="retro-text text-sm md:text-base block mb-2">// LEVEL UP YOUR SKILLS //</span>
            RESOURCES
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            We've put together everything you need to get started building with Stylus
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard 
              key={resource.id}
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
              link={resource.link}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-16 p-6 retro-card border-accent max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-accent text-center">Need Help?</h3>
          <p className="text-center mb-6">
            Join our WhatsApp group for daily updates and support from the community
          </p>
          <div className="flex justify-center">
            <a 
              href={hackathonData.contact.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-accent inline-flex items-center gap-2"
            >
              Join WhatsApp Group <FaLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;
