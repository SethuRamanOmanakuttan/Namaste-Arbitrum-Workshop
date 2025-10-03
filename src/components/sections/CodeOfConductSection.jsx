import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

const CodeOfConductSection = () => {
  return (
    <section id="code-of-conduct" className="py-16 bg-grid-pattern-large bg-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-vector-gradient-bg opacity-40"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Code of Conduct</h2>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <motion.div 
              className="vector-card backdrop-blur-md border-l-4 border-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-100 leading-relaxed">
                At Namaste Arbitrum, we want a fair, fun, and safe hackathon experience for everyone. 
                By joining, you agree to follow this Code of Conduct:
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="conduct-item vector-card border-l-4 border-secondary hover:border-accent transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shadow-neon-glow">
                    <FiCheckCircle className="text-secondary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Be Respectful</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">Treat all participants, mentors, and organizers with respect.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">Encourage collaboration, not hostility.</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="conduct-item vector-card border-l-4 border-secondary hover:border-accent transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shadow-neon-glow">
                    <FiCheckCircle className="text-secondary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Play Fair</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">Projects must be original. Getting inspired is fine, copying is not.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">No plagiarism, resubmission of old work, or using someone else's code as your own.</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="conduct-item vector-card border-l-4 border-secondary hover:border-accent transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shadow-neon-glow">
                    <FiCheckCircle className="text-secondary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Stay Ethical</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">No offensive, discriminatory, or harmful content.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">No projects promoting scams, violence, or illegal activity.</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="conduct-item vector-card border-l-4 border-secondary hover:border-accent transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shadow-neon-glow">
                    <FiCheckCircle className="text-secondary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Follow Guidelines</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">Stick to the provided tracks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">Respect deadlines and submission rules.</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="conduct-item vector-card border-l-4 border-secondary hover:border-accent transition-colors duration-300 md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shadow-neon-glow">
                    <FiCheckCircle className="text-secondary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Have Fun & Learn</h3>
                </div>
                <ul className="space-y-2 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">Ask mentors for help, share knowledge, and support other teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span className="text-gray-200">The hackathon is about building, learning, and growing the ecosystem.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-10 p-5 vector-card border-l-4 border-accent backdrop-blur-md flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shadow-pink-glow flex-shrink-0">
                <FiAlertTriangle className="text-accent text-2xl" />
              </div>
              <p className="font-bold text-white">
                Violations of the Code of Conduct may result in disqualification.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeOfConductSection;
