// jcaisystems/jcai-website/src/app/blueprint/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { ValueStack } from "@/components/ValueStack";
import { SignupForm } from "@/components/SignupForm";
import { RoiCalculator } from "@/components/RoiCalculator";
import { ProofAndReason } from "@/components/ProofAndReason";

const BlueprintPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(20);

  useEffect(() => {
    const spotsKey = "availableSpots";
    const initialSpotsValue = 20;
    const minSpots = 5;

    const decrementSpots = () => {
      let currentSpots = parseInt(
        localStorage.getItem(spotsKey) || initialSpotsValue.toString()
      );
      if (currentSpots > minSpots) {
        currentSpots--;
        localStorage.setItem(spotsKey, String(currentSpots));
        setSpotsLeft(currentSpots);
      }
    };

    const spotsInStorage = localStorage.getItem(spotsKey);

    if (!spotsInStorage) {
      localStorage.setItem(spotsKey, String(initialSpotsValue));
      setSpotsLeft(initialSpotsValue);
    } else {
      setSpotsLeft(parseInt(spotsInStorage));
    }

    const timer = setTimeout(decrementSpots, 5000);
    const timer2 = setTimeout(decrementSpots, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <main>
      <Hero onGetStarted={() => setShowForm(true)} spotsLeft={spotsLeft} />
      <ValueStack onGetStarted={() => setShowForm(true)} />
      <RoiCalculator />
      <ProofAndReason />
      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </main>
  );
};

export default BlueprintPage;