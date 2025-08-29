import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Section = ({
  id,
  className = '',
  children,
  bgColor = 'bg-white',
  textColor = 'text-primary',
  containerClassName = '',
}) => {
  return (
    <section id={id} className={`py-16 ${bgColor} ${textColor} ${className}`}>
      <div className={`container-custom ${containerClassName}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default Section;
