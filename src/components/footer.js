import * as React from 'react';
import { css } from '@emotion/react';

import { 
  headlineFont, 
  link, 
  pageGrid, 
  pageGridColumn, 
  contentGrid, 
  contentGridColumn,
} from '../css/global';

import twitterImgLarge from '../images/logos/twitterLarge.svg';
import twitterImgWhite from '../images/logos/twitterWhite.svg';

const footer = css`
  margin-top: 94px;
  background: #000000;
  color: #ffffff;
  height: 266px;

  @media (max-width: 768px) {
    margin-top: 48px;
    height: 96px;
  }

  @media (max-width: 480px) {
    margin-top: 32px;
    height: 74px;
  }
`;

const container = css`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const email = css`
  grid-column: 1/2;
  font-size: 60px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const twitterItem = css`
  grid-column: 2/3;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & p {
    margin-top: 14px;
  }

  @media (max-width: 768px) {
    & p {
      margin-top: 4px;
    }
  }

  @media (max-width: 480px) {
    & p {
      margin-top: 4px;
    }
  }
`;

const twitterIcon = css`
  height: 103px;

  @media (max-width: 768px) {
    height: 24px;
  }

  @media (max-width: 480px) {
    height: 20px;
  }
`;

export const onlyMobile = css`
  display: none;
  @media (max-width: 768px) {
    display: initial;
  }
`;

export const hideMobile = css`
  display: initial;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <div css={[footer, pageGrid]}>
      <div css={[pageGridColumn, contentGrid]}>
        <div css={[container, contentGridColumn]}>
          <h1 css={[email, headlineFont]}><a href="mailto:gm@we3.co">gm@we3.co</a></h1>
          <a href="https://twitter.com/WE3co">
            <div css={twitterItem}>
              <img css={[twitterIcon, hideMobile]} src={twitterImgLarge} />
              <img css={[twitterIcon, onlyMobile]} src={twitterImgWhite} />
              <p css={link}>Follow</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
