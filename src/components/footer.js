import * as React from 'react';
import { css } from '@emotion/react';

import { 
  headlineFont, 
  link, 
  pageGrid, 
  pageGridColumn, 
  contentGrid, 
  contentGridColumn,
  hideMobile,
  onlyMobile
} from '../css/global';

import twitterImgLarge from '../images/logos/twitterLarge.svg';
import twitterImgWhite from '../images/logos/twitterWhite.svg';

const footer = css`
  margin-top: 94px;
  background: #000000;
  color: #ffffff;
  height: 266px;

  @media (max-width: 480px) {
    margin-top: 32px;
    height: auto;
  }
`;

const container = css`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  @media (max-width: 480px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const email = css`
  grid-column: 1/2;
  font-size: 60px;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 32px;
  }
`;

const twitterItem = css`
  grid-column: 2/3;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 103px;

  & p {
    margin-top: 14px;
  }

  @media (max-width: 480px) {
    margin-top: 16px;
    & p {
      margin-top: 8px;
    }
  }
`;

const twitterIcon = css`
  height: 103px;

  @media (max-width: 480px) {
    height: 32px;
  }
`;

const Footer = () => {
  return (
    <div css={[footer, pageGrid]}>
      <div css={[pageGridColumn, contentGrid]}>
        <div css={[container, contentGridColumn]}>

          <h1 css={[email, headlineFont]}>gm@we3.co</h1>
   
          <div css={twitterItem}>
            <img css={[twitterIcon, hideMobile]} src={twitterImgLarge} />
            <img css={[twitterIcon, onlyMobile]} src={twitterImgWhite} />
            <p css={link}>Follow</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Footer;
