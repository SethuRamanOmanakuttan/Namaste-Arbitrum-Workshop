import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  // State values
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const [currentPhase, setCurrentPhase] = useState('registration'); // registration, development, judging, completed
  
  // Hackathon data based on provided details
  const hackathonData = {
    title: 'BUILD WITH STYLUS',
    description: 'An online hackathon for students and young developers across India to start building dApps on Arbitrum using Stylus.',
    dates: {
      registration: {
        start: 'September 15, 2025',
        end: 'September 30, 2025',
      },
      kickoff: 'October 1, 2025',
      submission: 'October 15, 2025',
      announcement: 'October 20, 2025',
    },
    prizePool: '$3,000',
    prizes: {
      firstPlace: '$500',
      secondPlace: '$300',
      thirdPlace: '$200',
    },
    tracks: [
      {
        id: 'defi',
        name: 'DeFi & Payments',
        description: 'Build wallets, staking apps, or finance tools',
        icon: 'wallet',
      },
      {
        id: 'ai',
        name: 'AI x Crypto',
        description: 'Explore AI-powered agents, tools, or integrations',
        icon: 'robot',
      },
      {
        id: 'rwa',
        name: 'RWA & Stablecoins',
        description: 'Work on real-world assets or stablecoin use cases',
        icon: 'coins',
      },
    ],
    resources: {
      doc: 'https://assets.pyor.xyz/namaste-arbitrum/build-with-stylus.pdf',
      registrationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSclBukvhlW6HPSQH7BLs3G5CbDuX9eRwwcVgfIHQvZbmhWjlg/viewform?usp=dialog',
    },
    organizers: [
      {
        name: 'Namaste Arbitrum',
        description: 'A grassroots initiative building the Arbitrum builder ecosystem in India through content, education, and real-world community projects.',
        social: {
          twitter: 'https://x.com/NamasteArbitru',
          instagram: 'https://www.instagram.com/pyorxyz/',
          linkedin: 'https://www.linkedin.com/company/pyorxyz',
          youtube: 'https://www.youtube.com/@pyorxyz',
        },
        logo: '/images/namaste.png'
      },
      {
        name: 'Web3Compass',
        description: 'A platform built by builders, for builders, to explore and master Web3 and AI through hands-on campaigns and challenges.',
        social: {
          twitter: 'https://x.com/the_web3compass',
          linkedin: 'https://www.linkedin.com/company/the-web3compass',
          telegram: 'https://t.me/+Bmec234RB3M3YTll',
          youtube: 'https://www.youtube.com/@TheWeb3Compass',
        },
        logo: '/images/web3compass.png'
      },
    ],
    contact: {
      whatsapp: 'https://chat.whatsapp.com/IX5FVuf79Ao22Eg84RPZtJ',
    },
  };

  // Values to be provided to consumers
  const contextValue = {
    isRegistrationOpen,
    setIsRegistrationOpen,
    currentPhase,
    setCurrentPhase,
    hackathonData,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
