import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { FaTwitter, FaGlobe, FaDiscord, FaTelegram } from 'react-icons/fa';

const OrganizerCard = ({ name, description, logo, website, twitter, role, index }) => {
  return (
    <motion.div 
      className="retro-card border-secondary hover:shadow-neon-glow transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col items-center">
        {role && (
          <div className="bg-accent text-white text-xs font-bold py-1 px-3 rounded-full mb-3">
            {role}
          </div>
        )}
        <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-secondary glow-effect bg-white flex items-center justify-center">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="w-full h-full object-contain p-1"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/100?text=' + name.charAt(0);
            }}
          />
        </div>
        <h3 className="text-xl font-bold mb-2 text-secondary">{name}</h3>
        <p className="text-center mb-4">{description}</p>
        <div className="flex gap-3 mt-auto">
          {website && (
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              aria-label={`${name} website`}
            >
              <FaGlobe size={20} />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              aria-label={`${name} Twitter`}
            >
              <FaTwitter size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const OrganizersSection = () => {
  const { hackathonData } = useAppContext();
  
  // Define organizers with their roles and logos
  const organizers = [
    {
      id: 'namaste-arbitrum',
      name: 'Namaste Arbitrum',
      description: 'A grassroots initiative building the Arbitrum builder ecosystem in India through content, education, and real-world community projects.',
      logo: '/images/namaste.png',
      website: "#",
      twitter: "https://x.com/NamasteArbitrum",
      role: 'Main Organizer'
    },
    {
      id: 'web3compass',
      name: 'Web3 Compass',
      description: 'A platform built by builders, for builders, to explore and master Web3 and AI through hands-on campaigns and challenges.',
      logo: '/images/web3compass.png',
      website: "https://www.web3compass.xyz/",
      twitter: "https://x.com/the_web3compass",
      role: 'Technical Partner'
    }
  ];
  
  return (
    <section id="organizers" className="py-16 bg-primary relative overflow-hidden">
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
            <span className="retro-text text-sm md:text-base block mb-2">// THE TEAM BEHIND //</span>
            ORGANIZERS
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Meet the organizations bringing this hackathon to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {organizers.map((organizer, index) => (
            <OrganizerCard 
              key={organizer.id}
              name={organizer.name}
              description={organizer.description}
              logo={organizer.logo}
              website={organizer.website}
              twitter={organizer.twitter}
              role={organizer.role}
              index={index}
            />
          ))}
        </div>
        
        {/* Connect With Us section removed as requested */}
      </div>
    </section>
  );
};

export default OrganizersSection;
