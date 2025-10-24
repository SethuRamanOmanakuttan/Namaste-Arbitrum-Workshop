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
        start: 'October 10, 2025',
        end: 'October 14, 2025',
      },
      onlineSession: 'October 25 | Saturday | 6:30 – 8:30 PM',
      submissionStart: 'October 15, 2025',
      submission: 'October 31, 2025',
      announcement: 'November 5, 2025',
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
        examples: [
          'Cross-chain DEX with Stylus-powered liquidity pools',
          'Yield aggregator with optimized gas efficiency',
          'Multi-signature wallet with social recovery',
          'Payment streaming protocol for freelancers',
          'Decentralized lending platform with novel collateral types'
        ]
      },
      {
        id: 'ai',
        name: 'AI x Crypto',
        description: 'Explore AI-powered agents, tools, or integrations',
        icon: 'robot',
        examples: [
          'AI-powered trading bot with on-chain execution',
          'Machine learning model marketplace on Arbitrum',
          'Decentralized content moderation using AI',
          'Predictive analytics dashboard for DeFi protocols',
          'AI-generated NFT platform with royalty distribution'
        ]
      },
      {
        id: 'rwa',
        name: 'RWA & Stablecoins',
        description: 'Work on real-world assets or stablecoin use cases',
        icon: 'coins',
        examples: [
          'Tokenized real estate investment platform',
          'Carbon credit marketplace with verification',
          'Algorithmic stablecoin with novel stability mechanism',
          'Supply chain financing using tokenized invoices',
          'Commodity-backed stablecoin with redemption features'
        ]
      },
    ],
    resources: {
      doc: 'https://assets.pyor.xyz/namaste-arbitrum/build-with-stylus.pdf',
      registrationForm: 'https://forms.gle/A5hLZrZyCNwJ48aS6',
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
