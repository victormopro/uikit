import React from 'react';

import Card from '../components/Card';
import CodePreview from '../components/CodePreview';
import SectionTitle from '../components/SectionTitle';
import Swatch from '../components/Swatch';

const Home = () => (
  <div className="page page--home">

    { /***** Colors *****/ }

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
                <h4 className="gradient-text">Primary Gradient</h4>
                <Swatch
                  marginTop={20}
                  colorClass='bg-grad-primary'
                  headerText='Primary Gradient / CTA'
                  colors={['#C253DD', '#3023AE']}
                />
              </div>
              <div className="col-xs-4">
                <h4 className="gradient-text-secondary">Secondary Gradient</h4>
                <Swatch
                  marginTop={20}
                  colorClass='bg-grad-secondary'
                  headerText='Secondary Gradient'
                  colors={['#FF6A88', '#FF925A']}
                />
              </div>
              <div className="col-xs-4">
                <h4 className="color-primary">Primary Color</h4>
                <Swatch
                  marginTop={20}
                  colorClass='bg-primary'
                  headerText='Primary Color'
                  colors={['#C253DD']}
                />
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-xs-4">
                <h4 className="color-secondary">Secondary Color</h4>
                <Swatch
                  marginTop={20}
                  colorClass='bg-secondary'
                  headerText='Secondary Color'
                  colors={['#3023AE']}
                />
              </div>
            </div>
            <div className="row mt-100">
              <div className="col-xs-12">
                <h4>Text Color</h4>
              </div>
              <div className="col-xs-4">
                <Swatch
                  marginTop={20}
                  colorClass='bg-dark'
                  headerText='Paving Black'
                  colors={['#2B2829']}
                />
              </div>
              <div className="col-xs-4">
                <Swatch
                  marginTop={20}
                  colorClass='bg-medium'
                  headerText='Cyanish Grey'
                  colors={['#A7A8A8']}
                />
              </div>
              <div className="col-xs-4">
                <Swatch
                  marginTop={20}
                  colorClass='bg-light'
                  headerText='Gainsboro Grey'
                  colors={['#DDD']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    { /***** Text *****/ }

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

    { /***** Popups, Tooltips, Loaders & Cards *****/ }

    <div className="section section--styling mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Popups, Tooltips, Loaders & Cards' superscript={'03'} />
        </div>
      </div>
      <div className="row mt-100">
        <div className="col-xs-4">
          <p className="text-center fw-bold">Standard Card</p>
          <div className="card mt-30"></div>
            <CodePreview>
{`
<div class="card">
  <div class="card__header"></div>
  <div class="card__content"></div>
</div>
`}
            </CodePreview>
        </div>
        <div className="col-xs-4">
          <p className="text-center fw-bold">Popup</p>
          <div className="popup mt-30"></div>
            <CodePreview>
{`
<div class="popup">
  <div class="popup__header"></div>
  <div class="popup__content"></div>
</div>
`}
            </CodePreview>
        </div>
        <div className="col-xs-4"></div>
      </div>
    </div>

    { /***** Charts *****/ }

    <div className="section section--charts mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Charts' superscript={'04'} />
        </div>
      </div>
    </div>

    { /***** Modals *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Modals' superscript={'05'} />
        </div>
      </div>
    </div>

    { /***** Tables *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Tables' superscript={'06'} />
        </div>
      </div>
    </div>

    { /***** Forms / Menus *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Forms / Menus' superscript={'07'} />
        </div>
      </div>
    </div>

    { /***** Icons *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Product Icons' superscript={'08'} />
        </div>
      </div>
    </div>

    { /***** Buttons / Switches *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Buttons / Switches' superscript={'09'} />
        </div>
      </div>
    </div>

    { /***** File Uploader *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='File Uploader' superscript={'10'} />
        </div>
      </div>
    </div>

    { /***** Accordions *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle text='Accordions' superscript={'11'} />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
