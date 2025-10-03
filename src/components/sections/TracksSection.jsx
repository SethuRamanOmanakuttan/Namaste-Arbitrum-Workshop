import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { FaWallet, FaRobot, FaCoins } from 'react-icons/fa';

const TrackCard = ({ track, index }) => {
  const icons = {
    wallet: <FaWallet className="text-3xl" />,
    robot: <FaRobot className="text-3xl" />,
    coins: <FaCoins className="text-3xl" />
  };

  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-sm border-l-4 border border-secondary rounded-sm overflow-hidden shadow-vector-shadow hover:shadow-neon-glow transition-all duration-300 h-full relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, borderColor: '#e3066e' }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 border border-secondary opacity-5 -rotate-12 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border border-accent opacity-5 rotate-12"></div>
      
      <div className="p-6 relative z-10 flex flex-col h-full">
        {/* Header with icon and title */}
        <div className="flex items-center gap-4 mb-5 pb-4 border-b border-white/10">
          <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center shadow-neon-glow">
            <div className="text-secondary group-hover:text-accent transition-colors duration-300">
              {icons[track.icon]}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors duration-300">{track.name}</h3>
            <p className="text-gray-300 text-sm">{track.description}</p>
          </div>
        </div>
        
        {/* Examples Section */}
        <div className="flex-grow">
          <div className="inline-block px-3 py-1 bg-secondary/10 rounded-sm mb-3">
            <h4 className="text-xs font-bold text-secondary tracking-wider">EXAMPLE PROJECTS</h4>
          </div>
          
          <ul className="space-y-3">
            {track.examples && track.examples.map((example, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                <span className="text-gray-200 text-sm leading-relaxed">{example}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </motion.div>
  );
};

const TracksSection = () => {
  const { hackathonData } = useAppContext();

  return (
    <section id="tracks" className="py-24 bg-primary relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
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
          className="mb-16 text-center"
        >
          <span className="retro-text text-sm md:text-base text-secondary inline-block px-4 py-1 border border-secondary mb-4">
            // CHOOSE YOUR PATH //
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            HACKATHON TRACKS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-200">
            Choose from 3 exciting tracks to showcase your skills and compete for prizes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {hackathonData.tracks.map((track, index) => (
            <TrackCard 
              key={track.id}
              track={track}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-secondary/30 rounded-sm p-8 shadow-vector-shadow relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 border border-tertiary opacity-5 -rotate-12 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-accent opacity-5 rotate-12"></div>
            
            <span className="retro-text text-xs text-secondary inline-block px-3 py-1 border border-secondary mb-4">
              // REWARDS //
            </span>
            <h3 className="text-2xl font-bold mb-6 text-white">PRIZE STRUCTURE</h3>
            <p className="mb-8 text-gray-200">Each track offers the following prizes:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 border-t-4 border-tertiary rounded-sm hover:shadow-sleek-shadow transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-tertiary text-4xl block mb-3">🥇</span>
                <span className="text-2xl font-bold text-white block mb-1">{hackathonData.prizes.firstPlace}</span>
                <p className="text-accent font-bold">1st Place</p>
              </div>
              
              <div className="bg-white/5 p-6 border-t-4 border-secondary rounded-sm hover:shadow-sleek-shadow transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-secondary text-4xl block mb-3">🥈</span>
                <span className="text-2xl font-bold text-white block mb-1">{hackathonData.prizes.secondPlace}</span>
                <p className="text-accent font-bold">2nd Place</p>
              </div>
              
              <div className="bg-white/5 p-6 border-t-4 border-accent rounded-sm hover:shadow-sleek-shadow transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-accent text-4xl block mb-3">🥉</span>
                <span className="text-2xl font-bold text-white block mb-1">{hackathonData.prizes.thirdPlace}</span>
                <p className="text-accent font-bold">3rd Place</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-300 text-sm">Additional prizes may be awarded for outstanding projects at the judges' discretion</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TracksSection;
