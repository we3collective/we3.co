import * as React from 'react';
import { css } from '@emotion/react';

import { headlineFont, hideMobile } from '../css/global';

import we3LogoImg from '../images/logos/we3Vertical.svg';

const container = css`
  margin-top: 48px;

  @media (max-width: 480px) {
    margin-top: 32px;
  }
`;

const header = css`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto;
  }
`;

const socialLinks = css`
  grid-column: 3/4;

  @media (max-width: 480px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const socialIcon = css`
  height: 32px;

  &:not(:first-child) {
    margin-left: 26px;
  }

  fill: #000000;
  stroke: #000000;
  transition: all 250ms;

  &:hover {
    fill: #ffffff;
    transition: all 250ms;
  }
`;

const body = css`
  display: grid;
  grid-template-columns: minmax(0px, 850px) minmax(32px, 1fr) auto;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`;

const copy = css`
  grid-column: 1 / 2;
  font-size: 54px;
  font-weight: 300;
  line-height: 130%;
  margin-right: 48px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {

  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const para = css`
  &:not(:first-of-type) {
    margin-top: 48px;
  }
`;

const logoContainer = css`
  grid-column: 3 / 4;
`;

const logo = css`
grid-column: 3 / 4;
  height: 124px;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const WhoWeAre = () => {
  return (
    <div css={container}>
      
      <div css={header}>
        <div css={[socialLinks, hideMobile]}>
          <a href="https://twitter.com/WE3co">
            <svg css={socialIcon} width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 7.60449C29.0066 8.04666 27.939 8.34444 26.8185 8.47867C27.9626 7.79173 28.8412 6.70324 29.2541 5.40607C28.1842 6.04225 26.9985 6.50472 25.7362 6.754C24.7271 5.67453 23.286 5 21.693 5C18.1166 5 15.4886 8.34557 16.2964 11.8186C11.694 11.5874 7.6125 9.37654 4.87987 6.0163C3.42863 8.51251 4.12725 11.778 6.59325 13.4316C5.6865 13.4023 4.8315 13.153 4.08562 12.7368C4.02487 15.3097 5.86425 17.7168 8.52825 18.2526C7.74862 18.4646 6.89475 18.5143 6.02625 18.3473C6.7305 20.5536 8.77575 22.1587 11.2013 22.2039C8.8725 24.0346 5.9385 24.8523 3 24.5049C5.45138 26.0807 8.364 27 11.4915 27C21.7763 27 27.5869 18.2909 27.2359 10.4797C28.3181 9.69575 29.2575 8.7178 30 7.60449Z" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div css={body}>
        <div css={[copy, headlineFont]}>
          <p css={para}>We’re a new kind of design organization, partnering with ambitious teams to work on the next internet.</p>
          <p css={para}>We believe internet platforms should be more participative, open, and community owned.</p>
          <p css={para}>We bring excellence of craft, willingness to experiment, and a passion for building.</p>
        </div>
        <div css={[logoContainer, hideMobile]}>
          <img css={logo} src={we3LogoImg} />
        </div>
      </div>

    </div>
  )
}

export default WhoWeAre;
