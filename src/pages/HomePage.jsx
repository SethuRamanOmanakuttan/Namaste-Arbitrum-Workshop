import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import RegistrationSection from '../components/sections/RegistrationSection';
import TracksSection from '../components/sections/TracksSection';
import SubmissionSection from '../components/sections/SubmissionSection';
import ResourcesSection from '../components/sections/ResourcesSection';
import OrganizersSection from '../components/sections/OrganizersSection';
import TimelineSection from '../components/sections/TimelineSection';
import CodeOfConductSection from '../components/sections/CodeOfConductSection';
import FAQSection from '../components/sections/FAQSection';

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
      <FAQSection />
      <CodeOfConductSection />
      <OrganizersSection />
    </>
  );
};

export default HomePage;
