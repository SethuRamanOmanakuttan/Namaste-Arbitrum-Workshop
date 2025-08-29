import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { easings, pixelAnimations } from '../../utils/animation';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-300 font-bold shadow-sleek-shadow';
  
  const variantClasses = {
    primary: 'bg-accent text-white border border-accent hover:bg-opacity-90 hover:shadow-pink-glow',
    secondary: 'bg-secondary text-black border border-secondary hover:bg-transparent hover:text-secondary hover:shadow-neon-glow',
    outline: 'bg-transparent border border-white text-white hover:bg-white hover:text-primary hover:bg-opacity-10',
    accent: 'bg-accent text-white border border-accent hover:bg-opacity-90 hover:shadow-pink-glow',
    tertiary: 'bg-tertiary text-black border border-tertiary hover:bg-transparent hover:text-tertiary',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`;
  
  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: easings.easeStep }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'accent', 'tertiary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Button;
