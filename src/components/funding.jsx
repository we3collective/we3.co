import * as React from 'react';
import { css } from '@emotion/react';

import { label, headlineFont } from '../css/global';

import ideoImg from '../images/logos/ideo.svg';
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
    margin-top: 32px;
    flex-flow: column nowrap;
    max-width: initial;
  }
`;

const logo = css`
  height: 27px;

  @media (max-width: 768px) {
    height: 16px;
  }

  @media (max-width: 480px) {
    &:not(:first-child) {
      margin-top: 8px;
    }

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
