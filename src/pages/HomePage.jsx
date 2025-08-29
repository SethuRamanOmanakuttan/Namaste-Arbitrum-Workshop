import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import RegistrationSection from '../components/sections/RegistrationSection';
import TracksSection from '../components/sections/TracksSection';
import SubmissionSection from '../components/sections/SubmissionSection';
import ResourcesSection from '../components/sections/ResourcesSection';
import OrganizersSection from '../components/sections/OrganizersSection';
import TimelineSection from '../components/sections/TimelineSection';

const HomePage = () => {
  return (
    <>
      {/* Main sections */}
      <HeroSection />
      <RegistrationSection />
      <TracksSection />
      <SubmissionSection />
      <ResourcesSection />
      <TimelineSection />
      <OrganizersSection />
    </>
  );
};

export default HomePage;
