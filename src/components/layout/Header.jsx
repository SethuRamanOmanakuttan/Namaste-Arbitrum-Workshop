import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAppContext } from '../../context/AppContext';
import { easings } from '../../utils/animation';

const Header = () => {
  const { hackathonData } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'Registration', path: '#registration' },
    { name: 'Tracks', path: '#tracks' },
    { name: 'Submission', path: '#submission' },
    { name: 'Resources', path: '#resources' },
    { name: 'Timeline', path: '#timeline' },
    { name: 'Organizers', path: '#organizers' },
  ];

  return (
    <header 
      className={`py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md shadow-vector-shadow' : 'bg-transparent'}`}
    >
      {/* Vector accent line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      
      {/* Vector decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 border border-secondary opacity-5 rounded-full"></div>
        <div className="absolute -bottom-20 -right-10 w-40 h-40 border border-accent opacity-5 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-vector-lines opacity-5"></div>
      </div>
      
      <div className="container-custom flex justify-between items-center relative z-10">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Link to="/" className="text-xl md:text-2xl font-bold text-white font-display flex items-center gap-2 group">
            <span className="text-secondary text-md font-retro group-hover:text-accent transition-colors duration-300">{'</'}</span>
            <span className="relative">
              {hackathonData.title}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-500"></span>
            </span>
            <span className="text-secondary text-md font-retro group-hover:text-accent transition-colors duration-300">{'>'}</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.path}
              className="nav-link text-white font-medium relative overflow-hidden group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3, ease: "easeIn" }}
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-secondary/10 group-hover:h-full transition-all duration-300 -z-10"></span>
            </motion.a>
          ))}
          <motion.a
            href={hackathonData?.resources?.registrationForm || '#registration'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black font-bold ml-2 px-5 py-2 border border-secondary hover:bg-transparent hover:text-secondary transition-all duration-300 flex items-center gap-2 shadow-sleek-shadow hover:shadow-neon-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: navLinks.length * 0.1, duration: 0.3, ease: "easeIn" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="font-retro text-xs">{'>'}</span>
            <span>Register</span>
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2 relative z-20 border border-white/10 bg-white/5 backdrop-blur-sm shadow-sleek-shadow hover:border-secondary hover:shadow-neon-glow transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easings.easeStep }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FiX size={20} className="text-accent" /> : <FiMenu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-primary/95 backdrop-blur-md absolute top-full left-0 w-full shadow-vector-shadow border-t border-white/10 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: easings.easeStep }}
          >
            {/* Vector decorative elements for mobile menu */}
            <div className="absolute inset-0 bg-retro-grid opacity-10 pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 border border-accent opacity-5 rounded-full pointer-events-none"></div>
            <div className="container-custom py-4 flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  className="py-3 px-4 text-white hover:text-secondary transition-colors border-l border-transparent hover:border-secondary font-medium relative group overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2, ease: easings.easeStep }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-secondary/10 group-hover:h-full transition-all duration-300 -z-10"></span>
                </motion.a>
              ))}
              <motion.a
                href={hackathonData?.resources?.registrationForm || '#registration'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-black font-bold mt-6 mx-4 py-3 text-center flex items-center justify-center gap-2 border border-secondary hover:bg-transparent hover:text-secondary transition-all duration-300 shadow-sleek-shadow hover:shadow-neon-glow"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2, ease: easings.easeStep }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-retro text-xs">{'>'}</span>
                <span>Register Now</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
