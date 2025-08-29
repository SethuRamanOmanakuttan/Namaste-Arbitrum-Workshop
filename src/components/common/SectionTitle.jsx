import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SectionTitle = ({
  title,
  subtitle,
  align = 'left',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-8 ${alignmentClasses[align]} ${className}`}>
      <motion.h2
        className={`section-title ${titleClassName}`}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className={`mt-3 text-lg ${subtitleClassName}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  subtitleClassName: PropTypes.string,
};

export default SectionTitle;
