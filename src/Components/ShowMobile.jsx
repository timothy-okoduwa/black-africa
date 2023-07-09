import React from 'react';
import m from './images/mbank.png';
import me from './images/mearn.png';
import th from './images/msave.png';
import f from './images/minvest.png';
import fi from './images/mloan.png';
import six from './images/mbudgeet.png';
import sev from './images/mgrow.png';
import { AiOutlineCheck } from 'react-icons/ai';
const ShowMobile = () => {
  return (
    <div className="container">
      <div className="ones mt-3" id="scott0">
        <div className="container">
          <div>
            <div className="row ">
              <div className="col-12 col-lg-6 mb-5">
                <div>
                  <div className="mobb">Mobile Banking made easy</div>
                  <div className="opp">
                    Open a free XAF, XOF, UAE, US, UK & EU Banking wallet.
                    Receive and make foreign payments or convert currencies .
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 ">
                <div className="px-5 d-flex justify-content-center ">
                  <img
                    src={m}
                    alt=""
                    style={{ width: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="twos mt-3" id="scott">
        <div className="container">
          <div>
            <div className="row ">
              <div className="col-12 col-lg-6 mb-5">
                <div>
                  <div className="mobb">Early Salary Access</div>
                  <div className="opp">
                    Get instant access to your salary, take control of your
                    finances and embrace the freedom of managing your money on
                    your own terms
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="px-5 d-flex justify-content-center">
                  <img
                    src={me}
                    alt=""
                    style={{ width: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="threes mt-3" id="scott2">
        <div className="container">
          <div>
            <div className="row ">
              <div className="col-12 col-lg-6 mb-5">
                <div>
                  <div className="mobb">Smart Savings</div>
                  <div className="opp">
                    Embark on a transformative journey & enjoy flexibl personal
                    credit group saving options with competitive interest rates
                    & intelligent financial management
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="px-5 d-flex justify-content-center">
                  <img
                    src={th}
                    alt=""
                    style={{ width: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fours mt-3">
        <div className="container">
          <div>
            <div className="row ">
              <div className="col-12 col-lg-6 mb-5">
                <div>
                  <div className="mobb">Automated budgetting </div>
                  <div className="opp">
                    Black helps you effortlessly track bills & expenses, set
                    financial goals, achieve financial stability & uncover
                    savings habits
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="px-5 d-flex justify-content-center">
                  <img
                    src={f}
                    alt=""
                    style={{ width: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fives mt-3" id="scott3">
        <div className="container">
          <div>
            <div className="row ">
              <div className="col-12 col-lg-6 mb-5">
                <div>
                  <div className="mobb">Secure Investments</div>
                  <div className="opp">
                    Discover trusted investment opportunities, protect your
                    assets, and achieve long-term prosperity, Mutual funds, life
                    insurance & alternative assets
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="px-5 d-flex justify-content-center">
                  <img
                    src={fi}
                    alt=""
                    style={{ width: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="six mt-3">
        <div className="container">
          <div>
            <div className="row ">
              <div className="col-12 col-lg-6 mb-5">
                <div>
                  <div className="mobb" style={{ color: 'black' }}>
                    Loan & Debt Management
                  </div>
                  <div className="opp" style={{ color: 'black' }}>
                    Effortlessly track loans, manage debts, and stay on top of
                    your financial obligations. Take control of your finances
                    for a debt-free future.
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="px-5 d-flex justify-content-center">
                  <img
                    src={six}
                    alt=""
                    style={{ width: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sevsen mt-3" id="scott4">
        <div className="container">
          <div>
            <div className="row ">
              <div className="col-12 col-lg-6 mb-5">
                <div>
                  <div className="mobb">Deals & Discounts</div>
                  <div className="opp">
                    Endless possibilities, discounts & cash back deals <br />{' '}
                    <AiOutlineCheck className="checkss" /> Startup visas <br />{' '}
                    <AiOutlineCheck className="checkss" /> Immigrant worker’s
                    pack <br /> <AiOutlineCheck className="checkss" /> Cashbacks{' '}
                    <br /> <AiOutlineCheck className="checkss" /> Personal job
                    opportunities
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="px-5 d-flex justify-content-center ">
                  <img
                    src={sev}
                    alt=""
                    style={{ width: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMobile;
