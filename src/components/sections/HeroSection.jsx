import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { FiArrowDown } from 'react-icons/fi';

const HeroSection = () => {
  const { hackathonData } = useAppContext();
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary text-white relative overflow-hidden">
      {/* Background image - hidden on mobile, visible on desktop */}
      <div className="absolute inset-x-[5%] inset-y-[5%] bg-center bg-no-repeat hidden md:block" style={{ 
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'contain', // Maintains aspect ratio without stretching
        backgroundPosition: 'center center',
        opacity: 0.98, // Almost fully opaque
        mixBlendMode: 'normal'
      }}></div>
      
      {/* Subtle grid overlay for texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-32 h-32 mx-auto rounded-full p-2 shadow-neon-glow border border-secondary">
              <img 
                src="/images/namaste.png" 
                alt="Namaste Arbitrum Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150?text=NA';
                }}
              />
            </div>
          </motion.div>
          
          <motion.span 
            className="retro-text inline-block mb-4 px-4 py-1 border-2 border-secondary text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            NAMASTE ARBITRUM PRESENTS
          </motion.span>
          
          <motion.h1 
            className="font-retro text-4xl md:text-6xl mb-8 tracking-tight text-[#e3066e] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              textShadow: '2px 0 #00FFC8',
              letterSpacing: '0.05em'
            }}
          >
            BUILD WITH STYLUS
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-10 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {hackathonData.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a href="https://forms.gle/KTjNfHy3wDJWAStq6" target='_blank' className="btn bg-accent text-white border-accent hover:bg-accent/90 hover:shadow-pink-glow transition-all duration-300 rounded-sm font-medium">Register Now</a>
            <a href="#tracks" className="btn bg-transparent text-white border-2 border-secondary hover:bg-secondary/10 transition-all duration-300 rounded-sm font-medium">Explore Tracks</a>
          </motion.div>
          
          <div className="mt-16 flex flex-col items-center">
            <p className="text-accent font-bold mb-4 text-xl">{hackathonData.prizePool} PRIZE POOL</p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
              <span className="px-4 py-2 border-2 border-secondary rounded-sm">ONLINE</span>
              <span className="px-4 py-2 border-2 border-secondary rounded-sm">FOR STUDENTS & DEVELOPERS</span>
              <span className="px-4 py-2 border-2 border-secondary rounded-sm">ACROSS INDIA</span>
            </div>
          </div>
          
          <motion.div 
            className="mt-16 flex flex-col items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          >
            <a href="#tracks" className="text-secondary flex flex-col items-center group">
              <span className="mb-2 group-hover:text-accent transition-colors duration-300">Scroll to explore</span>
              <FiArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
