import React from 'react';
import { motion } from 'framer-motion';

const PrizeCard = ({ place, amount, index }) => {
  return (
    <motion.div 
      className="prize-card text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-2">{place}</h3>
      <p className="text-2xl font-bold">{amount}</p>
    </motion.div>
  );
};

const PrizesSection = () => {
  const prizes = [
    { id: 1, place: '1st Place', amount: '$10,000' },
    { id: 2, place: '2nd Place', amount: '$5,000' },
    { id: 3, place: '3rd Place', amount: '$3,000' },
  ];

  return (
    <section id="prizes" className="py-16 bg-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Prizes</h2>
          
          <div className="mt-8">
            <motion.div
              className="bg-primary bg-opacity-50 p-6 rounded-lg mb-8 inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">POOL</h3>
              <p className="text-3xl font-bold">$25,000</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {prizes.map((prize, index) => (
                <PrizeCard 
                  key={prize.id}
                  place={prize.place}
                  amount={prize.amount}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {prizes.map((prize, index) => (
                <div key={`list-${prize.id}`} className="text-left">
                  <ol className="list-decimal pl-6">
                    <li>Best UI/UX</li>
                    <li>Most Innovative</li>
                    <li>Community Choice</li>
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;
