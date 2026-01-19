"use client";

import { useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import { Portfolio } from '@/components/Portfolio';

export default function Page() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <>
      {!showPortfolio ? (
        <LandingPage onGetStarted={() => setShowPortfolio(true)} />
      ) : (
        <Portfolio />
      )}
    </>
  );
}
