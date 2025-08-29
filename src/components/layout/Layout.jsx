import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import { AppProvider } from '../../context/AppContext';
import { easings } from '../../utils/animation';

const Layout = () => {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background elements */}
        <div className="fixed inset-0 bg-primary z-0">
          {/* Modern gradient background with subtle grid overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>
          
          {/* Grid patterns with reduced opacity for a cleaner look */}
          <div className="absolute inset-0 bg-grid-pattern-large opacity-15"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Modern decorative elements with subtle retro influence */}
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-secondary/20 backdrop-blur-xl rounded-sm"
            animate={{
              x: [0, 20, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 backdrop-blur-xl rounded-sm"
            animate={{
              x: [0, -15, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Retro-inspired element with modern animation */}
          <motion.div 
            className="absolute top-1/2 right-1/4 w-40 h-40 bg-tertiary/20 backdrop-blur-xl rounded-sm"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Additional subtle glow effect */}
          <div className="absolute inset-0 bg-glow-conic opacity-5 mix-blend-overlay"></div>
        </div>
        
        <Header />
        <main className="flex-grow z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </AppProvider>
  );
};

export default Layout;
