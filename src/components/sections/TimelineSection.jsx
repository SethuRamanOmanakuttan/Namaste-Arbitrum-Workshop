import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFlag, FaRocket, FaCheckCircle, FaTrophy, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';
import { easings } from '../../utils/animation';

const TimelineEvent = ({ event, index, total }) => {
  return (
    <motion.div 
      className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} md:w-1/2 mb-16 md:mb-0`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: easings.easeStep }}
      viewport={{ once: true }}
    >
      {/* Content */}
      <motion.div 
        className={`relative z-10 bg-white/5 backdrop-blur-sm p-6 border-l-4 border border-secondary/30 ml-20 md:ml-0 md:mr-0 
          ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} hover:border-accent transition-all duration-300 mt-2 md:mt-0 
          overflow-hidden group rounded-sm shadow-vector-shadow hover:shadow-neon-glow`}
        whileHover={{ scale: 1.02, borderColor: '#e3066e' }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border border-secondary opacity-5 -rotate-12 rounded-full"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">{event.title}</h3>
            <div className="px-4 py-1.5 border border-accent/50 bg-primary/80 text-accent text-xs font-bold uppercase tracking-wider rounded-full shadow-sleek-shadow">{event.date}</div>
          </div>
          <p className="text-gray-200 bg-white/5 p-3 rounded-sm">{event.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const { hackathonData } = useAppContext();
  
  const timelineEvents = [
    { 
      id: 1, 
      title: 'Registration Opens', 
      date: hackathonData.dates.registration.start, 
      icon: 'registration',
      description: 'Registration opens for all participants. Form your team and start brainstorming innovative ideas for the hackathon.'
    },
    { 
      id: 2, 
      title: 'Online Session', 
      date: hackathonData.dates.onlineSession, 
      icon: 'workshop',
      description: 'Join us for an online session featuring technical workshops on Stylus and guidance from mentors to help kickstart your project.'
    },
    { 
      id: 3, 
      title: 'Submissions Open', 
      date: hackathonData.dates.submissionStart, 
      icon: 'networking',
      description: 'Project submissions open! Start uploading your projects and prepare your documentation and demo videos.'
    },
    { 
      id: 4, 
      title: 'Submission Deadline', 
      date: hackathonData.dates.submission, 
      icon: 'submission',
      description: 'Final deadline to submit your completed projects. Make sure to include all required documentation and demo videos.'
    },
    { 
      id: 5, 
      title: 'Winners Announced', 
      date: hackathonData.dates.announcement, 
      icon: 'announcement',
      description: 'Winners will be announced across all tracks and prizes will be distributed to the winning teams.'
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-primary relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-secondary/5 to-primary/0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-secondary opacity-10 rotate-12"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 border border-accent opacity-5 -rotate-12"></div>
      
      {/* Geometric shapes for modern vector look */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 border-4 border-secondary opacity-10"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-48 h-48 border-4 border-secondary opacity-10"
        animate={{ rotate: [-12, 12, -12], scale: [1, 0.95, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-tertiary opacity-10"
        animate={{ rotate: [12, -12, 12], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border border-accent opacity-5"></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20 rotate-45"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easings.easeStep }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="retro-text text-sm md:text-base text-secondary inline-block px-4 py-1 border border-secondary mb-4">
            // IMPORTANT DATES //
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            TIMELINE
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            Mark your calendar with these key dates for the hackathon
          </p>
        </motion.div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden">
          {/* Vertical line */}
          <motion.div 
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="mb-16 last:mb-0 relative">
              {/* Icon at each point */}
              <motion.div 
                className="absolute left-0 top-6 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-primary shadow-neon-glow overflow-hidden"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(0, 255, 200, 0.7)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/10 opacity-80"></div>
                <div className="w-8 h-8 flex items-center justify-center bg-secondary/20 rounded-full">
                  {event.icon === 'registration' && <FaCalendarAlt className="text-white" size={18} />}
                  {event.icon === 'kickoff' && <FaRocket className="text-white" size={18} />}
                  {event.icon === 'workshop' && <FaLaptopCode className="text-white" size={18} />}
                  {event.icon === 'networking' && <FaUsers className="text-white" size={18} />}
                  {event.icon === 'submission' && <FaCheckCircle className="text-white" size={18} />}
                  {event.icon === 'announcement' && <FaTrophy className="text-white" size={18} />}
                </div>
              </motion.div>
              
              {/* Pulse effect */}
              <div className="absolute left-6 top-6 w-0.5 h-0.5">
                <span className="absolute w-2 h-2 rounded-full bg-accent animate-ping opacity-75"></span>
              </div>
              
              <TimelineEvent 
                event={event} 
                index={index} 
                total={timelineEvents.length} 
              />
            </div>
          ))}
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Center line - vector style */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-accent via-secondary to-accent"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Animated glow effect */}
              <div className="absolute inset-0 animate-pulse-slow">
                <div className="absolute inset-0 blur-sm bg-accent opacity-20"></div>
              </div>
              
              {/* Icon markers along the timeline */}
              {timelineEvents.map((event, i) => (
                <motion.div 
                  key={i} 
                  className="absolute z-20 flex items-center justify-center w-12 h-12 rounded-full bg-primary shadow-neon-glow overflow-hidden" 
                  style={{ top: `${i * 20 + 10}%`, left: '-6px', transform: 'translateX(-50%)' }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(0, 255, 200, 0.7)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/10 opacity-80"></div>
                  <div className="w-8 h-8 flex items-center justify-center bg-secondary/20 rounded-full">
                    {event.icon === 'registration' && <FaCalendarAlt className="text-white" size={18} />}
                    {event.icon === 'kickoff' && <FaRocket className="text-white" size={18} />}
                    {event.icon === 'workshop' && <FaLaptopCode className="text-white" size={18} />}
                    {event.icon === 'networking' && <FaUsers className="text-white" size={18} />}
                    {event.icon === 'submission' && <FaCheckCircle className="text-white" size={18} />}
                    {event.icon === 'announcement' && <FaTrophy className="text-white" size={18} />}
                  </div>
                </motion.div>
              ))}
              
              {/* Pulse effects */}
              {timelineEvents.map((_, i) => (
                <div 
                  key={`pulse-${i}`} 
                  className="absolute" 
                  style={{ top: `${i * 20 + 10}%`, left: '-4px' }}
                >
                  <span className="absolute w-2 h-2 rounded-full bg-accent animate-ping opacity-75"></span>
                </div>
              ))}
            </motion.div>
            
            <div className="flex flex-col space-y-20">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className={`flex ${index % 2 === 0 ? '' : 'justify-end'} relative`}
                >
                  <TimelineEvent 
                    event={event} 
                    index={index} 
                    total={timelineEvents.length} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: easings.easeStep }}
          viewport={{ once: true }}
        >
          <a 
            href={hackathonData.resources.registrationForm}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent text-white px-8 py-3 border-2 border-accent hover:shadow-pink-glow transition-all duration-300 inline-flex items-center gap-2 font-medium"
          >
            Register Now <FaRocket size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
