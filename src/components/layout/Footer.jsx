import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { FaTwitter, FaTelegram, FaDiscord, FaGlobe } from 'react-icons/fa';
import { easings } from '../../utils/animation';

const Footer = () => {
  const { hackathonData } = useAppContext();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-16 relative overflow-hidden">
      {/* Vector-based background with retro grid */}
      <div className="absolute inset-0 bg-retro-grid opacity-30"></div>
      <div className="absolute inset-0 bg-vector-lines opacity-20"></div>
      
      {/* Sleek accent line at the top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      
      {/* Vector decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-secondary opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-accent opacity-10 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easings.easeStep }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 w-12 h-12 border border-secondary opacity-30"></div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              <span className="text-white font-display">{hackathonData.title}</span>
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gradient-to-r from-secondary to-accent"></span>
            </h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              {hackathonData.description}
            </p>
            <div className="flex space-x-4">
              {hackathonData.contact.twitter && (
                <a 
                  href={hackathonData.contact.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-secondary hover:text-black text-white p-3 backdrop-blur-sm border border-white/10 hover:border-secondary shadow-sleek-shadow hover:shadow-neon-glow transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter size={18} />
                </a>
              )}
              {hackathonData.contact.telegram && (
                <a 
                  href={hackathonData.contact.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-secondary hover:text-black text-white p-3 backdrop-blur-sm border border-white/10 hover:border-secondary shadow-sleek-shadow hover:shadow-neon-glow transition-all duration-300"
                  aria-label="Telegram"
                >
                  <FaTelegram size={18} />
                </a>
              )}
              {hackathonData.contact.discord && (
                <a 
                  href={hackathonData.contact.discord} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-secondary hover:text-black text-white p-3 backdrop-blur-sm border border-white/10 hover:border-secondary shadow-sleek-shadow hover:shadow-neon-glow transition-all duration-300"
                  aria-label="Discord"
                >
                  <FaDiscord size={18} />
                </a>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: easings.easeStep }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 w-8 h-8 border border-accent opacity-30"></div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              <span className="text-white font-display">Quick Links</span>
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gradient-to-r from-secondary to-accent"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#hero" className="hover:text-secondary transition-colors flex items-center gap-2 group">
                  <span className="text-secondary text-xs font-retro opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span> 
                  <span className="relative overflow-hidden group-hover:pr-2">
                    <span className="relative z-10">Home</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#registration" className="hover:text-secondary transition-colors flex items-center gap-2 group">
                  <span className="text-secondary text-xs font-['Press_Start_2P'] opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span> Registration
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-secondary transition-colors flex items-center gap-2 group">
                  <span className="text-secondary text-xs font-['Press_Start_2P'] opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span> Tracks
                </a>
              </li>
              <li>
                <a href="#submission" className="hover:text-secondary transition-colors flex items-center gap-2 group">
                  <span className="text-secondary text-xs font-['Press_Start_2P'] opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span> Submission
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-secondary transition-colors flex items-center gap-2 group">
                  <span className="text-secondary text-xs font-['Press_Start_2P'] opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span> Resources
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easings.easeStep }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-6 -bottom-6 w-16 h-16 border border-tertiary opacity-20 rotate-12"></div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              <span className="text-white font-display">Organizers</span>
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gradient-to-r from-secondary to-accent"></span>
            </h3>
            <div className="space-y-4">
              {hackathonData.organizers.map((org) => (
                <div key={org.id} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-secondary transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-vector-gradient opacity-30"></div>
                    <img 
                      src={org.logo || `https://via.placeholder.com/48?text=${org.name.charAt(0)}`} 
                      alt={org.name} 
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{org.name}</p>
                    {org.website && (
                      <a 
                        href={org.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-secondary hover:text-white transition-colors flex items-center gap-1 mt-1 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <FaGlobe size={12} className="animate-glow-pulse" /> Visit Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: easings.easeStep }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 font-mono text-sm">&copy; {currentYear} <span className="text-secondary">{hackathonData.title}</span>. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
