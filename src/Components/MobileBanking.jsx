import React from 'react';
import SwitchHolder from './SwitchHolder';

const MobileBanking = ({ step, setStep }) => {
  // const [step, setStep] = useState(1);

  const clickk = (targetStep) => {
    setStep(targetStep);
  };

  return (
    <div className="container pt-4 pb-4">
      <div>
        <div>
          <div className="sub_nav">
            <div className="seven_holder">
              <div
                className={`tabs ${step === 1 ? 'bank' : ''}`}
                onClick={() => clickk(1)}
              >
                Bank
              </div>
              <div
                className={`tabs ${step === 2 ? 'earn' : ''}`}
                onClick={() => clickk(2)}
              >
                Earn
              </div>
              <div
                className={`tabs ${step === 3 ? 'save' : ''}`}
                onClick={() => clickk(3)}
              >
                Save
              </div>
              <div
                className={`tabs ${step === 4 ? 'invest' : ''}`}
                onClick={() => clickk(4)}
              >
                Invest
              </div>
              <div
                className={`tabs ${step === 5 ? 'budget' : ''}`}
                onClick={() => clickk(5)}
              >
                Budget
              </div>
              <div
                className={`tabs ${step === 6 ? 'loan' : ''}`}
                onClick={() => clickk(6)}
              >
                Loan
              </div>
              <div
                className={`tabs ${step === 7 ? 'orange' : ''}`}
                onClick={() => clickk(7)}
              >
                Grow
              </div>
            </div>
          </div>
        </div>

        <SwitchHolder step={step} setStep={setStep} />
      </div>
    </div>
  );
};

export default MobileBanking;
