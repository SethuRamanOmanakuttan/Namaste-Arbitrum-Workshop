import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaYoutube, FaCode } from 'react-icons/fa';

const SubmissionSection = () => {
  const { currentPhase, hackathonData } = useAppContext();
  
  // Default to development phase if currentPhase is not set
  const isSubmissionOpen = currentPhase === 'development';
  
  return (
    <section id="submission" className="py-16 bg-primary relative overflow-hidden">
      {/* Vector-style grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Geometric shapes for modern vector look */}
      <div className="absolute top-40 left-20 w-36 h-36 border-2 border-accent opacity-10 rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent opacity-10 -rotate-45"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="retro-text inline-block mb-3 px-4 py-1 border-2 border-accent text-accent">
            SHOWCASE YOUR WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            PROJECT SUBMISSION
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {!isSubmissionOpen ? (
            <motion.div 
              className="bg-primary p-8 border-2 border-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center text-accent">
                Submission {currentPhase === 'registration' ? 'Not Open Yet' : 'Closed'}
              </h3>
              <p className="text-lg mb-4 text-center">
                {currentPhase === 'registration' 
                  ? `Project submissions will open on ${hackathonData.dates.submissionStart}.` 
                  : 'The submission deadline has passed. Thank you for your participation!'}
              </p>
            </motion.div>
          ) : (
            <motion.div 
              className="bg-primary p-8 border-2 border-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center text-accent retro-text">SUBMIT YOUR PROJECT</h3>
              <p className="text-lg mb-6 text-center">
                Ready to showcase your project? Submit your hackathon project using the form below.
                Submissions are open until {hackathonData.dates.submission}.
              </p>
              
              <div className="mb-8 p-6 border-2 border-accent bg-primary">
                <h4 className="text-lg font-bold mb-3 text-accent">Submission Requirements:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1"><FaCode /></span>
                    <div>
                      <span className="font-bold">Project Details</span>
                      <p className="text-sm text-gray-200">Team name, project name, and description</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1"><FaGithub /></span>
                    <div>
                      <span className="font-bold">GitHub Repository</span>
                      <p className="text-sm text-gray-200">Link to your project's source code</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1"><FaYoutube /></span>
                    <div>
                      <span className="font-bold">Demo Video</span>
                      <p className="text-sm text-gray-200">A short video demonstrating your project</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href={hackathonData.resources.registrationForm} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-8 py-3 border-2 border-accent hover:shadow-pink-glow transition-all duration-300 inline-flex items-center gap-2 font-medium"
                >
                  Submit Project <FiExternalLink />
                </a>
              </div>
              
              <p className="mt-6 text-sm text-gray-300 text-center">
                Submissions will be reviewed by our panel of judges after the deadline.
              </p>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <h3 className="text-xl font-bold mb-4 text-secondary retro-text">CHOOSE YOUR TRACK</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {hackathonData.tracks.map((track) => (
                <div key={track.id} className="bg-primary p-6 border-2 border-secondary hover:border-accent transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2 text-secondary">{track.name}</h4>
                  <p className="text-sm">{track.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionSection;
