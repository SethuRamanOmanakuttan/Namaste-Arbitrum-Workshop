import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import Button from '../common/Button';
import { FaExternalLinkAlt } from 'react-icons/fa';

const RegistrationSection = () => {
  const { isRegistrationOpen, currentPhase, hackathonData } = useAppContext();
  
  // Use the registration form URL from the context
  const registrationFormUrl = "https://forms.gle/A5hLZrZyCNwJ48aS6";
  
  return (
    <section id="registration" className="py-16 bg-primary relative overflow-hidden">
      {/* Vector-style grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Geometric shapes for modern vector look */}
      <div className="absolute top-20 right-20 w-24 h-24 border-2 border-secondary opacity-10 rotate-45"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 border-2 border-secondary opacity-10 -rotate-12"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="retro-text inline-block mb-3 px-4 py-1 border-2 border-secondary text-secondary">
            JOIN THE FUTURE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            REGISTRATION
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {currentPhase === 'completed' ? (
            <motion.div 
              className="bg-primary p-8 border-2 border-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Registration Closed</h3>
              <p className="text-lg mb-4 text-center">
                The hackathon has been completed. Thank you for your interest!
              </p>
            </motion.div>
          ) : !isRegistrationOpen ? (
            <motion.div 
              className="bg-primary p-8 border-2 border-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Registration Closed</h3>
              <p className="text-lg mb-4 text-center">
                Registration for the hackathon is currently closed. Please check back later or contact us for more information.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              className="bg-primary p-8 border-2 border-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center text-secondary retro-text">JOIN THE HACKATHON</h3>
              <div className="bg-accent/10 border border-accent/30 p-3 mb-6 rounded-sm">
                <p className="text-center font-bold text-accent">
                  Registrations open on {hackathonData.dates.registration.start}
                </p>
              </div>
              <p className="text-lg mb-6 text-center">
                Ready to showcase your skills? Register to participate in our hackathon and compete for amazing prizes!
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="https://forms.gle/A5hLZrZyCNwJ48aS6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-8 py-3 border border-accent hover:shadow-pink-glow transition-all duration-300 inline-flex items-center gap-2 font-medium rounded-sm shadow-sleek-shadow transform hover:scale-105"
                >
                  Register Now <FaExternalLinkAlt />
                </a>
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-primary to-primary/80 backdrop-blur-sm border border-accent shadow-pink-glow rounded-md overflow-hidden">
                <div className="bg-accent py-3 px-6">
                  <h4 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                    <span className="animate-pulse">💰</span> 
                    Prize Pool: {hackathonData.prizePool}
                    <span className="animate-pulse">💰</span>
                  </h4>
                </div>
                
                <div className="p-6">
                  <p className="mb-4 text-center text-lg">Each track offers:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-primary/50 p-4 border border-secondary rounded-md shadow-neon-glow hover:shadow-pink-glow transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-4xl text-center mb-2">🥇</div>
                      <div className="text-xl font-bold text-center text-secondary mb-1">1st Place</div>
                      <div className="text-center text-white">{hackathonData.prizes.firstPlace}</div>
                    </div>
                    
                    <div className="bg-primary/50 p-4 border border-secondary rounded-md shadow-neon-glow hover:shadow-pink-glow transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-4xl text-center mb-2">🥈</div>
                      <div className="text-xl font-bold text-center text-secondary mb-1">2nd Place</div>
                      <div className="text-center text-white">{hackathonData.prizes.secondPlace}</div>
                    </div>
                    
                    <div className="bg-primary/50 p-4 border border-secondary rounded-md shadow-neon-glow hover:shadow-pink-glow transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-4xl text-center mb-2">🥉</div>
                      <div className="text-xl font-bold text-center text-secondary mb-1">3rd Place</div>
                      <div className="text-center text-white">{hackathonData.prizes.thirdPlace}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-sm text-gray-300 text-center">
                Registration closes on {hackathonData.dates.registration?.end || hackathonData.dates.registration}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
