import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  index = 0,
}) => {
  const variantClasses = {
    default: 'bg-white shadow-md',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-text',
    accent: 'bg-accent text-white',
    outline: 'border-2 border-primary bg-transparent',
  };

  const hoverClasses = hover
    ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'
    : '';

  return (
    <motion.div
      className={`rounded-lg p-6 ${variantClasses[variant]} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'accent', 'outline']),
  hover: PropTypes.bool,
  index: PropTypes.number,
};

export default Card;
