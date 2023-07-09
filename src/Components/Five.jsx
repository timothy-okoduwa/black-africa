import React from 'react';
import m from './images/budget.png';
// import { Slide } from 'react-awesome-reveal';
const Five = () => {
  return (
    <div className="container mt-5">
      <div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="px-5 ">
              <img src={m} alt="" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="wrmg">
              <div className="mbm">Automated budgetting </div>
              <div className="down">
                Black helps you effortlessly track bills & expenses, set
                financial goals, achieve financial stability & uncover savings
                habits
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
