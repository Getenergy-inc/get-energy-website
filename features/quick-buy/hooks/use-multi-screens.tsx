import React from "react";
export default function useMultiScreens(screens: React.ReactElement[]) {
  const [step, setStep] = React.useState(0);
  const goto = (val: number) => setStep((prev) => {
    if (val > screens.length - 1) return prev;
    return val;
  });
  const next = () => setStep((prev) => {
    if (prev < screens.length - 1) return prev + 1;
    return prev;
  });
  const prev = () => setStep((previous) => {
    if (previous < 1) return previous;
    return previous - 1;
  });
  return {
    screens,
    currentStep: step,
    totalSteps: screens.length - 1,
    goto,
    next,
    prev,
    currentScreen: screens[step]
  }
}
