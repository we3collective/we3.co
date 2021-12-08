import * as React from 'react';
import { css } from '@emotion/react';

import { label, headlineFont } from '../css/global';

import icvImg from '../images/logos/icv.svg';
import delphiImg from '../images/logos/delphi.svg';
import nearImg from '../images/logos/near.svg';

const container = css`
  margin-top: 100px;

  @media (max-width: 480px) {
    margin-top: 24px;
  }
`;

const title = css`
  @media (max-width: 480px) {
    text-align: center;
  }
`;

const logos = css`
  margin-top: 60px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  max-width: 560px;

  @media (max-width: 768px) {
    margin-top: 32px;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    margin-top: 14px;
    flex-flow: column nowrap;
    max-width: initial;
  }
`;

// default, but at this point is just NEAR
const logo = css`
  height: 27px;

  @media (max-width: 768px) {
    height: 16px;
  }

  @media (max-width: 480px) {
    margin-top: 12px;
    height: 13px;
  }
`;

const delphi = css`
  height: 17px;

  @media (max-width: 768px) {
    height: 13px;
  }

  @media (max-width: 480px) {
    height: 11px;
  }
`;

const icv = css`
  height: 66px;

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 32px;
  }
`;

const Funding = () => {
  return (
    <div css={container}>
      <h1 css={[title, label]}>funding and support</h1>
      <div css={logos}>
        <a href="https://www.ideocolab.com/"><img css={[logo, icv]} src={icvImg} /></a>
        <a href="https://delphidigital.io/labs"><img css={[logo, delphi]} src={delphiImg} /></a>
        <a href="https://near.org/"><img css={logo} src={nearImg} /></a>
      </div>
    </div>
  )
}

export default Funding;
