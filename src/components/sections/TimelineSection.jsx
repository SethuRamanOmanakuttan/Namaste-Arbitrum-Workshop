import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFlag, FaRocket, FaCheckCircle, FaTrophy } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';
import { easings } from '../../utils/animation';

const TimelineEvent = ({ event, index, total }) => {
  const icons = {
    registration: <FaCalendarAlt className="text-white" size={18} />,
    kickoff: <FaRocket className="text-white" size={18} />,
    submission: <FaCheckCircle className="text-white" size={18} />,
    announcement: <FaTrophy className="text-white" size={18} />
  };

  return (
    <motion.div 
      className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} md:w-1/2 mb-12 md:mb-0`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: easings.easeStep }}
      viewport={{ once: true }}
    >
      {/* Timeline dot */}
      <div className="absolute top-0 left-0 md:inset-0 flex items-start md:items-center justify-start md:justify-end">
        <div 
          className={`z-20 flex items-center justify-center w-12 h-12 border-2 border-secondary bg-primary
            ${index % 2 === 0 ? 'md:mr-[-24px]' : 'md:ml-[-24px]'}`}
        >
          {icons[event.icon]}
        </div>
      </div>

      {/* Content */}
      <div 
        className={`relative z-10 bg-primary p-6 border-2 border-secondary ml-16 md:ml-0 md:mr-0 
          ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'} hover:border-accent transition-all duration-300 mt-2 md:mt-0`}
      >
        <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
        <p className="text-sm mb-3 text-secondary retro-text">{event.date}</p>
        <p className="text-gray-200">{event.description}</p>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const { hackathonData } = useAppContext();
  
  const timelineEvents = [
    { 
      id: 1, 
      title: 'Registration Opens', 
      date: hackathonData.dates.registration?.start || hackathonData.dates.registration, 
      icon: 'registration',
      description: 'Register your team and start brainstorming ideas for the hackathon.'
    },
    { 
      id: 2, 
      title: 'Kickoff Event', 
      date: hackathonData.dates.kickoff, 
      icon: 'kickoff',
      description: 'Join us for the official kickoff event with workshops and networking.'
    },
    { 
      id: 3, 
      title: 'Submission Deadline', 
      date: hackathonData.dates.submission, 
      icon: 'submission',
      description: 'Submit your project before the deadline to be eligible for judging.'
    },
    { 
      id: 4, 
      title: 'Winners Announced', 
      date: hackathonData.dates.announcement, 
      icon: 'announcement',
      description: 'Winners will be announced and prizes will be distributed.'
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-primary relative overflow-hidden">
      {/* Vector-style grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Geometric shapes for modern vector look */}
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-secondary opacity-10 rotate-45"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 border-4 border-secondary opacity-10 -rotate-12"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-tertiary opacity-10 rotate-12"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easings.easeStep }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="retro-text inline-block mb-3 px-4 py-1 border-2 border-secondary text-secondary">
            MARK YOUR CALENDAR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            TIMELINE
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto"></div>
          <p className="text-lg max-w-2xl mx-auto mt-6 text-gray-200">
            Key dates for the {hackathonData.title} hackathon
          </p>
        </motion.div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="mb-10 last:mb-0">
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
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Vector markers along the timeline */}
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-4 h-4 bg-secondary" 
                  style={{ top: `${i * 25 + 12.5}%`, left: '-6px', transform: 'rotate(45deg)' }}
                />
              ))}
            </motion.div>
            
            <div className="flex flex-col space-y-24">
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
            href={hackathonData?.resources?.registrationForm || '#registration'} 
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
