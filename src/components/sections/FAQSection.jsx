import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button 
        className="w-full flex justify-between items-center text-left py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold">{question}</h3>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      
      {isOpen && (
        <motion.div 
          className="pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-opacity-80">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: 'Who can participate in the hackathon?',
      answer: 'Anyone with an interest in blockchain development can participate. Whether you\'re a seasoned developer or just getting started, all skill levels are welcome.'
    },
    {
      id: 2,
      question: 'Do I need to have a team?',
      answer: 'You can participate as an individual or as part of a team of up to 5 members. We encourage collaboration, but solo participants are also welcome.'
    },
    {
      id: 3,
      question: 'What should I build?',
      answer: 'You can build any application that utilizes Stylus technology. Check out our tracks section for specific themes and ideas.'
    },
    {
      id: 4,
      question: 'Is there any cost to participate?',
      answer: 'No, participation in the hackathon is completely free. All you need is your creativity and coding skills.'
    },
    {
      id: 5,
      question: 'How will projects be judged?',
      answer: 'Projects will be evaluated based on innovation, technical complexity, design, practicality, and adherence to the chosen track.'
    },
    {
      id: 6,
      question: 'Will there be mentorship available?',
      answer: 'Yes, we will have mentors available throughout the hackathon to provide guidance and support for your projects.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">FAQ's and Code of Conduct</h2>
          
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Code of Conduct</h3>
              <p className="mb-4">
                We are committed to providing a harassment-free and inclusive experience for everyone. We do not tolerate harassment of participants in any form.
              </p>
              <p>
                All participants are required to adhere to the code of conduct throughout the event. This includes respecting others, communicating professionally, and creating a supportive environment for all participants.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p>Still have a question, ask in the whatsapp group or drop an email!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
