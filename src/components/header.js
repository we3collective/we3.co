import * as React from 'react';
import { css } from '@emotion/react';

import { label, headlineFont } from '../css/global';

import we3Logo from '../images/logos/we3.svg';

const header = css`
  display: grid;
  grid-template-columns: auto 77px auto 1fr auto;
  height: 154px;
  justify-content: flex-start;
  align-items: center;
`;

const logo = css`
  grid-column: 1 / 2;
  height: 36px;
`;

const title = css`
  grid-column: 3 / 4;
  font-weight: 300;
  font-size: 40px;
  margin-top: 4px;
`;

const join = css`
  grid-column: 5 / 6;
`;

const HeaderComponent = () => {
  return (
    <div css={header}>
      <img css={logo} src={we3Logo}></img>
      <h1 css={[title, headlineFont]}>We are a design collective building Web3</h1>
      <h2 css={[join, label]}>join us</h2>
    </div>
  )
}

export default HeaderComponent;
