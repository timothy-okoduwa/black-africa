import React from 'react';
import s from './images/security.png';
import c from './images/carbon.png';
import cu from './images/customer.png';
const Reliable = () => {
  return (
    <div className="container pb-5">
      <div>
        <div className="relie">Reliable, Secure & Compliant</div>
      </div>
      <div className="">
        <div className="row">
          <div className="col-12 col-lg-4 mb-5 aiai">
            <div className="dsf">
              <div className="hooo">
                <div className="opps">
                  <div className="r_black">
                    <img src={s} alt="" className="lil_bit" />
                  </div>
                </div>

                <div>
                  <div className="advv">Advanced protection</div>
                  <div className="kiki">
                    <div className="holdsd">
                      Black holds your funds in mobile money wallets secured by
                      Telco companies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5 aiai">
            <div className="dsf">
              <div className="hooo">
                <div className="opps">
                  <div className="r_black">
                    <img src={c} alt="" className="lil_bit" />
                  </div>
                </div>

                <div>
                  <div className="advv">100% Compliant</div>
                  <div className="kiki">
                    <div className="holdsd">
                      Wallet & savings services provided by a PSP-licensed
                      entity and an MFI partner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5 aiai">
            <div className="dsf">
              <div className="hooo">
                <div className="opps">
                  <div className="r_black">
                    <img src={cu} alt="" className="lil_bit" />
                  </div>
                </div>

                <div>
                  <div className="advv">24/7 support</div>
                  <div className="kiki">
                    <div className="holdsd">
                      Technical + human support available on a daily basis 24/7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reliable;
