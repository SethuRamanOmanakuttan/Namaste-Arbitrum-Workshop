import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaWhatsapp, FaQuestion } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="faq-item bg-white/5 backdrop-blur-sm border-l-4 border border-secondary/30 hover:border-accent transition-all duration-300 rounded-sm shadow-vector-shadow hover:shadow-neon-glow overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      <button 
        className="w-full flex justify-between items-center text-left p-4 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shadow-neon-glow flex-shrink-0">
            <FaQuestion className="text-secondary group-hover:text-accent transition-colors duration-300 text-sm" />
          </div>
          <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300">{question}</h3>
        </div>
        <div className="text-secondary group-hover:text-accent transition-colors duration-300">
          {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </div>
      </button>
      
      {isOpen && (
        <motion.div 
          className="px-4 pb-4 pt-0 border-t border-white/10 ml-11"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-gray-200">
            {typeof answer === 'string' ? (
              <p>{answer}</p>
            ) : (
              answer
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const FAQSection = () => {
  const { hackathonData } = useAppContext();
  
  const faqs = [
    {
      id: 1,
      question: 'How long is the hackathon?',
      answer: `You have 10 days to build and submit your project. The submission window is from ${hackathonData.dates.submissionStart} to ${hackathonData.dates.submission}`
    },
    {
      id: 2,
      question: 'Can I start before the hackathon?',
      answer: 'Yes, you can begin working on your project earlier, but final submission must be within the hackathon window.'
    },
    {
      id: 3,
      question: 'What\'s the team size?',
      answer: 'You can work solo or in teams of 2–4.'
    },
    {
      id: 4,
      question: 'How do I register?',
      answer: 'Fill the Registration Form first. It\'s mandatory to officially enter the hackathon.'
    },
    {
      id: 5,
      question: 'How do I submit my project?',
      answer: 'Use the Submission Link before the deadline. Submissions after the window will not be accepted.'
    },
    {
      id: 6,
      question: 'What are the tracks?',
      answer: (
        <div className="space-y-2">
          <p>We have three exciting tracks for you to choose from:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">DeFi & Payments</span> – wallets, staking apps, finance tools.</li>
            <li><span className="font-semibold">AI x Crypto</span> – AI-powered agents, tools, or integrations.</li>
            <li><span className="font-semibold">RWA & Stablecoins</span> – projects on real-world assets or stablecoins.</li>
          </ul>
        </div>
      )
    },
    {
      id: 7,
      question: 'What are the prizes?',
      answer: (
        <div className="space-y-3">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">$500</span> (1st prize per track)</li>
            <li><span className="font-semibold">$300</span> (2nd prize per track)</li>
            <li><span className="font-semibold">$200</span> (3rd prize per track)</li>
          </ul>
          <p className="font-semibold">Total prize pool: $3000 across 3 tracks.</p>
        </div>
      )
    },
    {
      id: 8,
      question: 'Can I ask for help?',
      answer: (
        <div>
          <p>Yes! Use the resources and videos we've provided, and feel free to reach out to our technical mentors and organisers anytime on the WhatsApp community.</p>
          <a 
            href={hackathonData.contact.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300"
          >
            <FaWhatsapp /> Join WhatsApp Community
          </a>
        </div>
      )
    },
    {
      id: 9,
      question: 'What happens if I copy a project?',
      answer: 'Copied projects will be disqualified. Inspiration is welcome, but originality is required.'
    },
    {
      id: 10,
      question: 'Where can I ask more questions?',
      answer: (
        <div>
          <p>Join our hackathon WhatsApp community and ask away!</p>
          <a 
            href={hackathonData.contact.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300"
          >
            <FaWhatsapp /> Join WhatsApp Community
          </a>
        </div>
      )
    },
    {
      id: 11,
      question: 'Can I register after submissions have already started?',
      answer: 'Yes! The registration window stays open throughout. You just need to register and submit your project before the submission deadline.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-grid-pattern-large bg-primary text-white relative overflow-hidden">
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
          className="mb-12 text-center"
        >
          <span className="retro-text text-sm md:text-base text-secondary inline-block px-4 py-1 border border-secondary mb-4">
            // QUESTIONS & ANSWERS //
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            Everything you need to know about the Build with Stylus Hackathon
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-12 p-6 vector-card border-l-4 border-accent backdrop-blur-md flex flex-col md:flex-row items-center gap-6 justify-center text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shadow-pink-glow flex-shrink-0 mx-auto md:mx-0">
              <FaWhatsapp className="text-accent text-2xl" />
            </div>
            <div>
              <p className="font-bold text-xl mb-2">Still have questions?</p>
              <p className="text-gray-200 mb-4">Join our WhatsApp community to get answers and connect with mentors and other participants!</p>
              <a 
                href={hackathonData.contact.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent text-white px-6 py-2 border border-accent hover:shadow-pink-glow transition-all duration-300 inline-flex items-center gap-2 font-medium rounded-sm"
              >
                Join WhatsApp Community
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
