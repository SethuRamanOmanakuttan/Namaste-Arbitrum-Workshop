import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa';

const OrganizationCard = ({ name, description, socialLinks }) => {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">{name}</h3>
      <p className="mb-4 text-white text-opacity-80">{description}</p>
      <div className="flex space-x-3">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition-colors"
            aria-label={link.platform}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const organizations = [
    {
      id: 1,
      name: 'Namaste Arbitrum',
      description: 'A community-driven organization focused on promoting Arbitrum adoption and education in India and beyond. We organize events, workshops, and hackathons to foster innovation in the blockchain space.',
      socialLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/namastearbitrum', icon: <FaInstagram size={20} /> },
        { platform: 'LinkedIn', url: 'https://linkedin.com/company/namastearbitrum', icon: <FaLinkedin size={20} /> },
        { platform: 'Twitter', url: 'https://twitter.com/namastearbitrum', icon: <FaTwitter size={20} /> },
        { platform: 'YouTube', url: 'https://youtube.com/namastearbitrum', icon: <FaYoutube size={20} /> }
      ]
    },
    {
      id: 2,
      name: 'Web3compass',
      description: 'A leading organization dedicated to guiding developers and entrepreneurs through the Web3 ecosystem. We provide resources, mentorship, and networking opportunities to help build the future of decentralized applications.',
      socialLinks: [
        { platform: 'YouTube', url: 'https://youtube.com/web3compass', icon: <FaYoutube size={20} /> },
        { platform: 'Twitter', url: 'https://twitter.com/web3compass', icon: <FaTwitter size={20} /> },
        { platform: 'LinkedIn', url: 'https://linkedin.com/company/web3compass', icon: <FaLinkedin size={20} /> },
        { platform: 'Instagram', url: 'https://instagram.com/web3compass', icon: <FaInstagram size={20} /> },
        { platform: 'Telegram', url: 'https://t.me/web3compass', icon: <FaTelegram size={20} /> }
      ]
    }
  ];

  return (
    <section id="about" className="py-16 bg-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {organizations.map((org, index) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <OrganizationCard 
                  name={org.name}
                  description={org.description}
                  socialLinks={org.socialLinks}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <div className="flex space-x-3">
              <a href="https://instagram.com/buildwithstylus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/company/buildwithstylus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/buildwithstylus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://youtube.com/buildwithstylus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
