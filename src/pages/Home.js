import React from 'react';

import ActionButton from '../components/ActionButton';
import Button from '../components/Button';
import Card from '../components/Card';
import Checkbox from '../components/Checkbox';
import CodePreview from '../components/CodePreview';
import Radio from '../components/Radio';
import SectionTitle from '../components/SectionTitle';
import Swatch from '../components/Swatch';
import Switch from '../components/Switch';
import ProfileCard from '../components/ProfileCard';

const Home = () => (
  <div className="page page--home">

    { /***** Colors *****/ }

    <div className="section section--colors">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='colors' text='Colors' superscript={'01'} />
        </div>
      </div>
      <div className="row mt-100">
        <div className="col-xs-12">
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
              <div className="col-xs-4">
                <h4 className="color-success">Success Color</h4>
                <Swatch
                  marginTop={20}
                  colorClass='bg-success'
                  headerText='Success Color'
                  colors={['#64C38E']}
                />
              </div>
              <div className="col-xs-4">
                <h4 className="color-error">Error Color</h4>
                <Swatch
                  marginTop={20}
                  colorClass='bg-error'
                  headerText='Error Color'
                  colors={['#F94D46']}
                />
              </div>
            </div>
            <div className="row mt-100">
              <div className="col-xs-12">
                <h4>Text Colors</h4>
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
          <SectionTitle id='text' text='Text' superscript={'02'} />
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

    { /***** Buttons / Switches *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='buttons' text='Buttons / Switches' superscript={'03'} />
        </div>
      </div>
      <div className="row mt-65">
        <div className="col-xs-12">
          <h4>Small Buttons</h4>
          <div className="mt-15">
            <Button size='small' type='primary'>Primary Button</Button>{' '}
            <Button size='small' type='secondary'>Secondary Button</Button>{' '}
            <Button size='small' type='outline'>Outline Button</Button>{' '}
            <Button size='small' type='disabled'>Disabled Button</Button>{' '}
          </div>
        </div>
      </div>
      <div className="row mt-65">
        <div className="col-xs-12">
          <h4>Medium Buttons</h4>
          <div className="mt-15">
            <Button type='primary'>Primary Button</Button>{' '}
            <Button type='secondary'>Secondary Button</Button>{' '}
            <Button type='outline'>Outline Button</Button>{' '}
            <Button type='disabled'>Disabled Button</Button>{' '}
          </div>
        </div>
      </div>
      <div className="row mt-65">
        <div className="col-xs-12">
          <h4>Large Buttons</h4>
          <div className="mt-15">
            <Button size='large' type='primary'>Primary Button</Button>{' '}
            <Button size='large' type='secondary'>Secondary Button</Button>{' '}
            <Button size='large' type='outline'>Outline Button</Button>{' '}
            <Button size='large' type='disabled'>Disabled Button</Button>{' '}
          </div>
        </div>
      </div>
      <div className="row mt-25">
        <div className="col-xs-12">
          <CodePreview>
{`
<button class="btn btn-sm btn--primary">Primary Button</button>
<button class="btn btn-sm btn--secondary">Secondary Button</button>
<button class="btn btn-sm btn--outline">Outline Button</button>
<button class="btn btn-sm btn--disabled">Disabled Button</button>

<button class="btn btn--primary">Primary Button</button>
<button class="btn btn--secondary">Secondary Button</button>
<button class="btn btn--outline">Outline Button</button>
<button class="btn btn--disabled">Disabled Button</button>

<button class="btn btn-lg btn--primary">Primary Button</button>
<button class="btn btn-lg btn--secondary">Secondary Button</button>
<button class="btn btn-lg btn--outline">Outline Button</button>
<button class="btn btn-lg btn--disabled">Disabled Button</button>
`}
          </CodePreview>
        </div>
      </div>
      <div className="row mt-65">
        <div className="col-xs-12">
          <h4>Block Level Buttons</h4>
          <div className="mt-15">
            <Button size='small' type='primary' block>Primary Button</Button>{' '}
            <Button size='small' type='secondary' block>Secondary Button</Button>{' '}
            <Button size='small' type='outline' block>Outline Button</Button>{' '}
            <Button size='small' type='disabled' block>Disabled Button</Button>{' '}
          </div>
        </div>
      </div>
      <div className="row mt-25">
        <div className="col-xs-12">
          <CodePreview>
{`
<button class="btn btn-sm btn-block btn--primary">Small Block Level Button</button>
<button class="btn btn-block btn--secondary">Medium Block Level Button</button>
<button class="btn btn-lg btn-block btn--outline">Large Block Level Button</button>
<button class="btn btn-block btn--disabled">Disabled Block Level Button</button>
`}
          </CodePreview>
        </div>
      </div>
      <div className="row mt-65">
        <div className="col-xs-8">
          <h4>Action Buttons</h4>
          <div className="flex justify-between v-align-center mt-20">
            <Radio name="test" label="Radio label" />
            <Checkbox label="Checkbox label" />
            <ActionButton type='plus' />
            <ActionButton type='minus' />
            <ActionButton type='check' />
            <ActionButton type='close' />
          </div>
        </div>
        <div className="col-xs-4">
          <h4>Switches</h4>
          <div className="flex justify-between v-align-center mt-20">
            <Switch type="success" />
            <Switch />
            <Switch type="text" />
          </div>
        </div>
      </div>
      <div className="row mt-25">
        <div className="col-xs-12">
          <CodePreview>
{`
<!-- Radio button -->
<div class="radio">
  <input type="radio" name="name">
  <span></span>
  <label>Radio label</label>
</div>

<!-- Checkbox -->
<div class="checkbox">
  <input type="checkbox">
  <span></span>
  <label>Checkbox label</label>
</div>

<!-- Action buttons -->
...

<!-- Switches -->
<div class="switch switch--success">
  <label>
    <input type="checkbox">
    <span class="lever"></span>
  </label>
</div>
<div class="switch">
  <label>
    <input type="checkbox">
    <span class="lever"></span>
  </label>
</div>
<div class="switch switch--text">
  <label>
    <input type="checkbox">
    <span class="lever">
      <span class="switch__text"></span>
    </span>
  </label>
</div>
`}
          </CodePreview>
        </div>
      </div>
    </div>

    { /***** Popups, Tooltips, Loaders & Cards *****/ }

    <div className="section section--styling mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='popups' text='Popups, Tooltips, Loaders & Cards' superscript={'04'} />
        </div>
      </div>
      <div className="row mt-100">
        <div className="col-xs-4">
          <ProfileCard img="https://placeimg.com/150/150/people" name="Bessie Lindsey" profile="UI Developer"/>
        </div>
        <div className="col-xs-4">
          <ProfileCard img="https://placeimg.com/150/150/tech" name="Virginia Reyes" />
        </div>
        <div className="col-xs-4">
          <ProfileCard img="https://placeimg.com/150/150/nature" name="Donald Carroll" />
        </div>
        <div className="col-xs-4">
          <p className="text-center fw-bold">Standard Card</p>
          <div className="card mt-30"></div>
            <CodePreview>
            {`
<div class="card">
  <div class="card__header"></div>
  <div class="card__content"></div>
  <div class="card__footer"></div>
</div>
`}
            </CodePreview>
        </div>
        <div className="col-xs-4">
          <p className="text-center fw-bold">Button on bottom</p>
          <div className="card mt-30">
            <div className="card__footer">
              <Button size="large" type="primary" block children="Button on bottom" />
            </div>
          </div>
            <CodePreview>
            {`
<div class="card">
  <div class="card__header"></div>
  <div class="card__content"></div>
  <div class="card__footer">
    <button class="btn btn-lg btn--primary btn-block">Button on bottom</button>
  </div>
</div>
`}
            </CodePreview>
        </div>
        <div className="col-xs-4">
          <p className="text-center fw-bold">Button with text under</p>
          <div className="card mt-30">
            <div className="card__footer text-center">
              <Button size="large" type="primary" children="Button with text under" />
              <p className="card__text">Meta Description: Select up to 5 personas that best represent your customer base.</p>
            </div>
          </div>
            <CodePreview>
            {`
<div class="card">
  <div class="card__header"></div>
  <div class="card__content"></div>
  <div class="card__footer">
    <button class="btn btn-lg btn--primary btn-block">Button with text under</button>
  </div>
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
        
      </div>
    </div>

    { /***** Charts *****/ }

    <div className="section section--charts mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='charts' text='Charts' superscript={'05'} />
        </div>
      </div>
    </div>

    { /***** Modals *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='modals' text='Modals' superscript={'06'} />
        </div>
      </div>
      <div className="row mt-100">
        <div className="col-xs-5">
          <div className="modal">
            <div className="modal__content-wrap">
              <div className="modal__header">
                <h3>Modal Title</h3>
              </div>
              <div className="modal__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="modal__footer">

              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-7"></div>
      </div>
    </div>

    { /***** Tables *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='tables' text='Tables' superscript={'07'} />
        </div>
      </div>
    </div>

    { /***** Forms / Menus *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='forms' text='Forms / Menus' superscript={'08'} />
        </div>
      </div>
    </div>

    { /***** Icons *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='icons' text='Product Icons' superscript={'09'} />
        </div>
      </div>
    </div>

    { /***** File Uploader *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='uploader' text='File Uploader' superscript={'10'} />
        </div>
      </div>
    </div>

    { /***** Accordions *****/ }

    <div className="section section--modals mt-150">
      <div className="row">
        <div className="col-xs-12">
          <SectionTitle id='accordions' text='Accordions' superscript={'11'} />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
