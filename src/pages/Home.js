import React from 'react';

import SectionTitle from '../components/SectionTitle';

const Home = () => (
  <div className="page page--home">
    <div className="section section--colors">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Colors' superscript={'01'} />
        </div>
      </div>
      <div className="row mt-100">
        <div className="col-xs-offset-1 col-xs-11">
          <div className="section__content">
            <div className="row">
              <div className="col-xs-4">
                <h4 className="gradient-text">Call-to-Action Color</h4>
                <div className="swatch swatch--gradient mt-20">
                  <div className="swatch__color"></div>
                  <div className="swatch__body">
                    <h5>CTA</h5>
                    <p className="color-medium">#C253DD - #3023AE</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-4">
                <h4 className="color-primary">Primary Color</h4>
                <div className="swatch swatch--primary mt-20">
                  <div className="swatch__color"></div>
                  <div className="swatch__body">
                    <h5>Primary Color</h5>
                    <p className="color-medium">#C253DD</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-4">
                <h4 className="color-secondary">Secondary Color</h4>
                <div className="swatch swatch--secondary mt-20">
                  <div className="swatch__color"></div>
                  <div className="swatch__body">
                    <h5>Secondary Color</h5>
                    <p className="color-medium">#3023AE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-100">
              <div className="col-xs-12">
                <h4>Text Color</h4>
              </div>
              <div className="col-xs-4">
                <div className="swatch swatch--dark mt-20">
                  <div className="swatch__color"></div>
                  <div className="swatch__body">
                    <h5>Paving Black</h5>
                    <p className="color-medium">#2B2829</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="swatch swatch--medium mt-20">
                  <div className="swatch__color"></div>
                  <div className="swatch__body">
                    <h5>Cyanish Grey</h5>
                    <p className="color-medium">#A7A8A8</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="swatch swatch--light mt-20">
                  <div className="swatch__color"></div>
                  <div className="swatch__body">
                    <h5>Gainsboro Grey</h5>
                    <p className="color-medium">#DDD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section--text mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Text' superscript={'02'} />
        </div>
      </div>
      <div className="row mt-100">
        <div className="col-xs-12">
          <div className="section__content">
            <div className="row">
              <div className="col-xs-6">
                <p className="text-sub">Fonts</p>
                <div className="mt-25">
                  <h1>Headline 1/Lato</h1>
                  <p className="text-sub mt-5">Lato Black, 42px, 44px LH</p>
                </div>
                <div className="mt-25">
                  <h2>Headline 2/Lato</h2>
                  <p className="text-sub mt-5">Lato Bold, 32px, 38px LH</p>
                </div>
                <div className="mt-25">
                  <h3>Headline 3/Lato</h3>
                  <p className="text-sub mt-5">Lato Bold, 28px, 34px LH</p>
                </div>
                <div className="mt-25">
                  <h4>Headline 4/Lato</h4>
                  <p className="text-sub mt-5">Lato Bold, 24px, 30px LH</p>
                </div>
                <div className="mt-25">
                  <h5>Headline 5/Lato</h5>
                  <p className="text-sub mt-5">Lato Bold, 18px, 22px LH</p>
                </div>
                <div className="mt-25">
                  <h6>Headline 6/Lato</h6>
                  <p className="text-sub mt-5">Lato Regular, 16px, 22px LH</p>
                </div>
                <div className="mt-25">
                  <p>Body Copy Large / Lato</p>
                  <p className="text-sub mt-5">Lato Light, 21px, 36px LH</p>
                </div>
                <div className="mt-25">
                  <p className="text-small">Body Copy Small / Lato</p>
                  <p className="text-sub mt-5">Lato Light, 16px, 26px LH</p>
                </div>
                <div className="mt-25">
                  <label className="mt-25">Label / Lato</label>
                  <p className="text-sub mt-5">Lato Bold, 16px, 19px LH</p>
                </div>
                <div className="mt-25">
                  <p className="caption">Caption / Lato</p>
                  <p className="text-sub mt-5">Lato Bold, 12px, 15px, LS 0.3</p>
                </div>
                <div className="mt-25">
                  <p className="text-btn">BTN / Lato</p>
                  <p className="text-sub mt-5">Lato Black, 12px, 15px, LS 0.3</p>
                </div>
              </div>
              <div className="col-xs-6">
                <p className="text-sub">Pairing</p>
                <div className="mt-25">
                  <h1><span className="fw-light">H1 Light to</span> Bold Combos</h1>
                  <h3 className="color-medium">Headline 3</h3>
                </div>
                <div className="mt-25">
                  <h2>Headline 2</h2>
                  <h4>Headline 4</h4>
                </div>
                <div className="mt-25">
                  <h3><span className="fw-light">Headline </span>3</h3>
                  <h5>Headline 5</h5>
                  <h6>Headline 6</h6>
                </div>
                <div className="mt-25">
                  <p><span className="fw-bold">Large Description: </span>Select up to 5 that best represent your customer base. The more we know about your audience, the better we can build a site that helps drive conversion.</p>
                </div>
                <div className="mt-25">
                  <p className="text-small"><span className="fw-bold">Small Description: </span>Select up to 5 that best represent your customer base. The more we know about your audience, the better we can build a site that helps drive conversion.</p>
                </div>
                <div className="mt-25">
                  <p className="text-meta">Meta Description: Select up to 5 that best represent your customer base. The more we know about your audience, the better we can build a site that helps drive conversion.</p>
                </div>
                <div className="mt-25">
                  <p className="text-meta color-medium">Meta Description: Select up to 5 that best represent your customer base. The more we know about your audience, the better we can build a site that helps drive conversion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section--styling mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Cards / Popups' superscript={'03'} />
        </div>
      </div>
      <div className="row mt-100">
        <div className="col-xs-4">
          <p className="text-center fw-bold">Standard Card</p>
          <div className="card mt-30"></div>
        </div>
        <div className="col-xs-4">
          <p className="text-center fw-bold">Popup</p>
          <div className="popup mt-30"></div>
        </div>
        <div className="col-xs-4"></div>
      </div>
    </div>
  </div>
);

export default Home;
