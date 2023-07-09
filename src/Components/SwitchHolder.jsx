import React from 'react';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';

const SwitchHolder = ({ step, setStep }) => {
  const renderForm = () => {
    switch (step) {
      case 1:
        return <One step={step} setStep={setStep} />;
      case 2:
        return <Two step={step} setStep={setStep} />;
      case 3:
        return <Three step={step} setStep={setStep} />;
      case 4:
        return <Four step={step} setStep={setStep} />;
      case 5:
        return <Five step={step} setStep={setStep} />;
      case 6:
        return <Six step={step} setStep={setStep} />;
      case 7:
        return <Seven step={step} setStep={setStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-5" id="earn">
      {renderForm()}
    </div>
  );
};

export default SwitchHolder;
