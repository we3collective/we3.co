import * as React from 'react';
import { css } from '@emotion/react';

import { label, headlineFont } from '../css/global';

import ideoImg from '../images/logos/ideo.svg';
import delphiImg from '../images/logos/delphi.svg';
import nearImg from '../images/logos/near.svg';

const container = css`
  margin-top: 100px;
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

  @media (max-width: 480px) {
    margin-top: 32px;
    flex-flow: column nowrap;
  }
`;

const logo = css`
  height: 27px;

  &:not(:first-child) {
    margin-left: 71px;
  }

  @media (max-width: 480px) {
    &:not(:first-child) {
      margin-left: 0px;
      margin-top: 16px;
    }

    height: 16px;
  }
`;

const delphi = css`
  height: 17px;
`;

const Funding = () => {
  return (
    <div css={container}>
      <h1 css={[title, label]}>funding and support</h1>
      <div css={logos}>
        <img css={logo} src={ideoImg} />
        <img css={[logo, delphi]} src={delphiImg} />
        <img css={logo} src={nearImg} />
      </div>
    </div>
  )
}

export default Funding;
