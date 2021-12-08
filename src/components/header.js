import * as React from 'react';
import { css } from '@emotion/react';

import { label, headlineFont } from '../css/global';

import we3Logo from '../images/logos/we3.svg';

const header = css`
  display: grid;
  grid-template-columns: auto minmax(16px, 77px) auto minmax(32px, 1fr) auto;
  height: 154px;
  align-items: center;

  @media (max-width: 1024px) {
    height: 128px;
  }

  @media (max-width: 768px) {
    height: 96px;
    grid-template-columns: auto 16px auto minmax(16px, 1fr) auto;
  }

  @media (max-width: 480px) {
    height: 80px;
  }
`;

const logo = css`
  grid-column: 1 / 2;
  height: 36px;

  @media (max-width: 1024px) {
    height: 26px;
  }

  @media (max-width: 768px) {
    height: 18px;
  }

  @media (max-width: 480px) {
    height: 15px;
  }
`;

const title = css`
  grid-column: 3 / 4;
  font-weight: 300;
  font-size: 40px;
  margin-top: 4px;
  min-width: max-content;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    min-width: auto;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    min-width: auto;
  }
`;

const join = css`
  grid-column: 5 / 6;
  min-width: max-content;
`;

const HeaderComponent = () => {
  return (
    <div css={header}>
      <img css={logo} src={we3Logo}></img>
      <h1 css={[title, headlineFont]}>We are a design collective building Web3</h1>
      <h2 css={[join, label]}><a href="https://hello.we3.co">join us</a></h2>
    </div>
  )
}

export default HeaderComponent;
