import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { FaTwitter, FaGlobe, FaDiscord, FaTelegram, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const OrganizerCard = ({ name, description, logo, website, twitter, linkedin, youtube, telegram, instagram, role, index }) => {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-sm border-l-4 border-secondary rounded-sm overflow-hidden shadow-vector-shadow hover:shadow-neon-glow transition-all duration-300 h-full relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 border border-secondary opacity-5 -rotate-12 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border border-accent opacity-5 rotate-12"></div>
      
      <div className="flex flex-col h-full p-6 relative z-10">
        {/* Top section with role badge and logo */}
        <div className="flex flex-col md:flex-row items-center mb-4 gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-secondary shadow-neon-glow bg-white flex items-center justify-center">
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
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-secondary mb-2">{name}</h3>
            {role && (
              <div className="bg-accent text-white text-xs font-bold py-1 px-3 rounded-full">
                {role}
              </div>
            )}
          </div>
        </div>
        
        {/* Description with subtle styling */}
        <div className="bg-white/5 p-4 rounded-sm mb-6 flex-grow">
          <p className="text-gray-200">{description}</p>
        </div>
        
        {/* Social links with improved styling */}
        <div className="flex flex-wrap justify-center gap-3 pt-3 border-t border-white/10">
          {website && (
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-secondary hover:text-black text-secondary p-2 rounded-sm transition-all duration-300"
              aria-label={`${name} website`}
            >
              <FaGlobe size={18} />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-secondary hover:text-black text-secondary p-2 rounded-sm transition-all duration-300"
              aria-label={`${name} Twitter`}
            >
              <FaTwitter size={18} />
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-secondary hover:text-black text-secondary p-2 rounded-sm transition-all duration-300"
              aria-label={`${name} LinkedIn`}
            >
              <FaLinkedin size={18} />
            </a>
          )}
          {youtube && (
            <a 
              href={youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-secondary hover:text-black text-secondary p-2 rounded-sm transition-all duration-300"
              aria-label={`${name} YouTube`}
            >
              <FaYoutube size={18} />
            </a>
          )}
          {telegram && (
            <a 
              href={telegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-secondary hover:text-black text-secondary p-2 rounded-sm transition-all duration-300"
              aria-label={`${name} Telegram`}
            >
              <FaTelegram size={18} />
            </a>
          )}
          {instagram && (
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-secondary hover:text-black text-secondary p-2 rounded-sm transition-all duration-300"
              aria-label={`${name} Instagram`}
            >
              <FaInstagram size={18} />
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
      instagram: "https://www.instagram.com/pyorxyz/",
      linkedin: "https://www.linkedin.com/company/pyorxyz",
      youtube: "https://www.youtube.com/@pyorxyz",
      role: 'Main Organizer'
    },
    {
      id: 'web3compass',
      name: 'Web3Compass',
      description: 'A platform built by builders, for builders, to explore and master Web3 and AI through hands-on campaigns and challenges.',
      logo: '/images/web3compass.png',
      website: "https://www.web3compass.xyz/",
      twitter: "https://x.com/the_web3compass",
      linkedin: "https://www.linkedin.com/company/the-web3compass",
      youtube: "https://www.youtube.com/@TheWeb3Compass",
      telegram: "https://t.me/+Bmec234RB3M3YTll",
      role: 'Technical Partner'
    }
  ];
  
  return (
    <section id="organizers" className="py-20 bg-primary relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-secondary/5 to-primary/0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-secondary opacity-10 rotate-12"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 border border-accent opacity-5 -rotate-12"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="retro-text text-sm md:text-base text-secondary inline-block px-4 py-1 border border-secondary mb-4">
            // THE TEAM BEHIND //
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ORGANIZERS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-200">
            Meet the organizations bringing this hackathon to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {organizers.map((organizer, index) => (
            <OrganizerCard 
              key={organizer.id}
              name={organizer.name}
              description={organizer.description}
              logo={organizer.logo}
              website={organizer.website}
              twitter={organizer.twitter}
              linkedin={organizer.linkedin}
              youtube={organizer.youtube}
              telegram={organizer.telegram}
              instagram={organizer.instagram}
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
