import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { FaWallet, FaRobot, FaCoins } from 'react-icons/fa';

const TrackCard = ({ track, index }) => {
  const icons = {
    wallet: <FaWallet className="text-2xl" />,
    robot: <FaRobot className="text-2xl" />,
    coins: <FaCoins className="text-2xl" />
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
      <div className="flex items-center justify-center mb-4 text-secondary">
        {icons[track.icon]}
      </div>
      <h3 className="text-xl font-bold mb-3 text-secondary text-center">{track.name}</h3>
      <div className="h-1 w-12 bg-secondary mx-auto mb-4"></div>
      <p className="text-center">{track.description}</p>
    </motion.div>
  );
};

const TracksSection = () => {
  const { hackathonData } = useAppContext();

  return (
    <section id="tracks" className="py-16 bg-primary relative overflow-hidden">
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
            <span className="retro-text text-sm md:text-base block mb-2">// CHOOSE YOUR PATH //</span>
            HACKATHON TRACKS
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto mb-12">
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
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-4 border-2 border-secondary rounded-md bg-primary bg-opacity-50">
            <h3 className="text-xl font-bold mb-2 text-secondary">PRIZE STRUCTURE</h3>
            <p className="mb-4">Each track offers the following prizes:</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
              <div className="p-3">
                <span className="text-tertiary text-2xl block mb-1">🥇</span>
                <span className="font-bold">{hackathonData.prizes.firstPlace}</span>
                <p className="text-sm opacity-75">1st Place</p>
              </div>
              <div className="p-3">
                <span className="text-tertiary text-2xl block mb-1">🥈</span>
                <span className="font-bold">{hackathonData.prizes.secondPlace}</span>
                <p className="text-sm opacity-75">2nd Place</p>
              </div>
              <div className="p-3">
                <span className="text-tertiary text-2xl block mb-1">🥉</span>
                <span className="font-bold">{hackathonData.prizes.thirdPlace}</span>
                <p className="text-sm opacity-75">3rd Place</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TracksSection;
