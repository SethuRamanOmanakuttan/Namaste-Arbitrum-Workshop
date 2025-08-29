import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const CommunitySection = () => {
  // Sample QR code image - in a real project, you would use an actual QR code image
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://chat.whatsapp.com/example";

  return (
    <section id="community" className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-primary">Community</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
            <div className="max-w-xl">
              <h3 className="text-xl font-bold mb-4">Join our WhatsApp Community</h3>
              <p className="mb-6 text-gray-800">
                Connect with fellow participants, mentors, and organizers. Get updates, ask questions, 
                and collaborate with others in our active WhatsApp community.
              </p>
              <a 
                href="https://chat.whatsapp.com/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn btn-primary"
              >
                <FaWhatsapp size={20} /> Join WhatsApp Group
              </a>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src={qrCodeUrl} 
                alt="WhatsApp Community QR Code" 
                className="w-48 h-48"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
