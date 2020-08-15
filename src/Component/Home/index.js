import React from 'react';

import { SectionWrapper } from './skins';
import Header from './Header';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <SectionWrapper>
        <LeftSection />

        <RightSection />
      </SectionWrapper>
    </React.Fragment>
  );
}

export default Home;
