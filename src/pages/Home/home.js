import React from 'react';
import Hero from './Hero/hero.jsx';
import Services from './Services/services.jsx';
import Stats from './Stats/stats.jsx';
import Partners from './Partners/partners.jsx';
import CallToAction from '../../components/CallToAction/CallToAction.jsx';

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Partners />
      <CallToAction currentPage="home" />
    </main>
  );
}

export default Home;