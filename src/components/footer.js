import * as React from 'react';
import { css } from '@emotion/react';

import { headlineFont, link, pageGrid, pageGridColumn, contentGrid, contentGridColumn } from '../css/global';

import twitterImg from '../images/logos/twitterLarge.svg';

const footer = css`
  margin-top: 94px;
  background: #000000;
  color: #ffffff;
  height: 266px;
`;

const container = css`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const email = css`
  grid-column: 1/2;
  font-size: 60px;
`;

const twitter = css`
  grid-column: 2/3;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 103px;

  & p {
    margin-top: 14px;
  }
`;

const Footer = () => {
  return (
    <div css={[footer, pageGrid]}>
      <div css={[pageGridColumn, contentGrid]}>
        <div css={[container, contentGridColumn]}>

          <h1 css={[email, headlineFont]}>gm@we3.co</h1>
   
          <div css={twitter}>
            <img src={twitterImg} />
            <p css={link}>Follow</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Footer;
