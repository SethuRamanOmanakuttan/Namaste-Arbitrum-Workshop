import React from 'react';
import PropTypes from 'prop-types';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const SocialLinks = ({ 
  links, 
  size = 'md', 
  color = 'default',
  className = '',
  iconClassName = ''
}) => {
  const sizeClasses = {
    sm: '16',
    md: '20',
    lg: '24',
    xl: '32'
  };

  const colorClasses = {
    default: 'text-current hover:text-secondary',
    white: 'text-white hover:text-secondary',
    primary: 'text-primary hover:text-secondary',
    secondary: 'text-secondary hover:text-primary',
  };

  const getIconComponent = (platform) => {
    const iconSize = Number(sizeClasses[size]);
    
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <FaInstagram size={iconSize} />;
      case 'linkedin':
        return <FaLinkedin size={iconSize} />;
      case 'twitter':
      case 'x':
        return <FaTwitter size={iconSize} />;
      case 'youtube':
        return <FaYoutube size={iconSize} />;
      case 'telegram':
        return <FaTelegram size={iconSize} />;
      case 'github':
        return <FaGithub size={iconSize} />;
      case 'discord':
        return <FaDiscord size={iconSize} />;
      default:
        return <FaLink size={iconSize} />;
    }
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors duration-300 ${colorClasses[color]} ${iconClassName}`}
          aria-label={link.platform}
        >
          {getIconComponent(link.platform)}
        </a>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  color: PropTypes.oneOf(['default', 'white', 'primary', 'secondary']),
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default SocialLinks;
