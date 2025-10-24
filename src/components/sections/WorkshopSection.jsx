import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaLaptopCode, FaExternalLinkAlt, FaVideo } from 'react-icons/fa';
import { easings } from '../../utils/animation';
import { useAppContext } from '../../context/AppContext';

const WorkshopSection = () => {
  const { hackathonData } = useAppContext();
  
  const workshopDetails = {
    date: 'October 25, 2025',
    day: 'Saturday',
    time: '6:30 PM – 8:30 PM',
    duration: '2 hours',
    topics: [
      'Introduction to Arbitrum Stylus',
      'Building Smart Contracts with Rust',
      'Deployment and Testing Strategies',
      'Best Practices and Tips for the Hackathon'
    ]
  };

  return (
    <section id="workshop" className="py-20 bg-gradient-to-b from-primary via-primary/95 to-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern-large opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-vector-gradient-bg opacity-30"></div>
      
      {/* Geometric shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-40 h-40 border-4 border-secondary/20 rotate-45"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-32 h-32 border-4 border-accent/20 -rotate-12"
        animate={{ rotate: [-12, 12, -12], scale: [1, 0.95, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Glowing orbs */}
      <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easings.easeStep }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="retro-text text-sm md:text-base text-secondary inline-block px-4 py-1 border border-secondary mb-4">
            // LEARN & BUILD //
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ONLINE WORKSHOP
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            Join us for a hands-on workshop to kickstart your hackathon journey
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Workshop Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Date & Time Card */}
              <div className="vector-card border-l-4 border-accent p-6 backdrop-blur-md hover:shadow-pink-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 shadow-pink-glow">
                    <FaCalendarAlt className="text-accent text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Date & Time</h3>
                    <p className="text-gray-200 mb-1">
                      <span className="font-semibold text-secondary">{workshopDetails.date}</span> ({workshopDetails.day})
                    </p>
                    <div className="flex items-center gap-2 text-gray-200">
                      <FaClock className="text-secondary" />
                      <span>{workshopDetails.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Format Card */}
              <div className="vector-card border-l-4 border-secondary p-6 backdrop-blur-md hover:shadow-neon-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 shadow-neon-glow">
                    <FaVideo className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Online Format</h3>
                    <p className="text-gray-200 mb-2">
                      Join from anywhere! This is a fully online workshop accessible to all participants.
                    </p>
                    <p className="text-sm text-gray-300">
                      Duration: <span className="text-secondary font-semibold">{workshopDetails.duration}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Registration CTA */}
              <motion.div
                className="vector-card border-l-4 border-accent p-6 backdrop-blur-md bg-gradient-to-br from-accent/10 to-secondary/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3 text-white">Ready to Join?</h3>
                  <p className="text-gray-200 mb-6">
                    Register now to secure your spot in the workshop!
                  </p>
                  <a 
                    href={hackathonData.resources.workshopForm}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-8 py-3 border-2 border-accent hover:shadow-pink-glow transition-all duration-300 inline-flex items-center gap-2 font-medium rounded-sm transform hover:scale-105"
                  >
                    Register for Workshop <FaExternalLinkAlt />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="vector-card border-l-4 border-secondary p-6 backdrop-blur-md h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 shadow-neon-glow">
                    <FaLaptopCode className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">What You'll Learn</h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {workshopDetails.topics.map((topic, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/30 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                        {topic}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-white/5 border border-secondary/30 rounded-sm">
                  <p className="text-sm text-gray-300 text-center">
                    <span className="text-secondary font-semibold">Pro Tip:</span> Come prepared with questions! Our mentors will be available to help you throughout the workshop.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 vector-card border-l-4 border-accent p-6 backdrop-blur-md text-center"
          >
            <p className="text-lg text-gray-200">
              <span className="text-accent font-bold">Note:</span> Workshop attendance is optional but highly recommended for all participants. 
              The session will be recorded and shared with registered participants.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
