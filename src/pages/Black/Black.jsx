import React from 'react';
import './Black.css';
import HeadPart from '../../Components/HeadPart';
import MobileBanking from '../../Components/MobileBanking';
import Clientel from '../../Components/Clientel';
import Reliable from '../../Components/Reliable';
import ShowMobile from '../../Components/ShowMobile';
import WaitList from '../../Components/WaitList';
const Black = ({ step, setStep }) => {
  return (
    <div>
      <HeadPart />
      <div className="hidden">
        <MobileBanking step={step} setStep={setStep} />
      </div>
      <div className="hid_for_web">
        <ShowMobile />
      </div>
      <Clientel />
      <Reliable />
      <WaitList />
    </div>
  );
};

export default Black;
