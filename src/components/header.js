import * as React from 'react';
import { css } from '@emotion/react';

import we3Logo from '../images/we3.svg';

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
  font-family: EditorialNew;
  font-weight: 300;
  font-size: 40px;
  margin-top: 4px;
`;

const join = css`
  grid-column: 5 / 6;
  font-family: NeueMontreal;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
`;

const HeaderComponent = () => {
  return (
    <div css={header}>
      <img css={logo} src={we3Logo}></img>
      <h1 css={title}>We are a design collective building Web3</h1>
      <h2 css={join}>join us</h2>
    </div>
  )
}

export default HeaderComponent;
