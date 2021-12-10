import * as React from 'react';
import { css } from '@emotion/react';

import { headlineFont, hideMobile } from '../css/global';

import we3LogoImg from '../images/logos/we3Vertical.svg';
import twitterImg from '../images/logos/twitter.svg';
import discordImg from '../images/logos/discord.svg';
import mediumImg from '../images/logos/medium.svg';

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

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const para = css`
  margin-top: 48px;

  @media (max-width: 768px) {
    margin-top: 32px;
  }

  @media (max-width: 480px) {
    text-align: center;
    margin-top: 24px;
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
            <img css={socialIcon} src={twitterImg} />
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
