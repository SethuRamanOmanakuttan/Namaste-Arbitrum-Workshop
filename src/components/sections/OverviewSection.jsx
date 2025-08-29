import { motion } from 'framer-motion';

const OverviewSection = () => {
  return (
    <section id="overview" className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-primary">Overview</h2>
          <div className="max-w-3xl">
            <p className="mb-6 text-gray-800">
              Build With Stylus is a hackathon focused on developing innovative solutions using Arbitrum's Stylus platform. 
              This event brings together developers, designers, and blockchain enthusiasts to create cutting-edge applications 
              that leverage the power and flexibility of Stylus.
            </p>
            <p className="mb-6 text-gray-800">
              Whether you're an experienced blockchain developer or just getting started, this hackathon provides the perfect 
              opportunity to learn, build, and connect with the community. Participants will have access to workshops, mentorship, 
              and resources to help bring their ideas to life.
            </p>
            <p className="text-gray-800">
              Join us for an exciting journey of innovation, collaboration, and growth as we push the boundaries of what's 
              possible with Stylus technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
