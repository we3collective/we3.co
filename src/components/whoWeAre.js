import * as React from 'react';
import { css } from '@emotion/react';

import { label, headlineFont } from '../css/global';

import we3LogoImg from '../images/we3Vertical.svg';
import twitterImg from '../images/twitter.svg';
import discordImg from '../images/discord.svg';
import mediumImg from '../images/medium.svg';

const container = css`
  margin-top: 48px;
`;

const header = css`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
`;

const title = css`
  grid-column: 1 / 2;
`;

const socialLinks = css`
  grid-column: 3 / 4;
`;

const socialIcon = css`
  height: 32px;

  &:not(:first-child) {
    margin-left: 26px;
  }
`;

const body = css`
  display: grid;
  grid-template-columns: minmax(0px, 850px) 1fr auto;
  align-items: center;
`;

const copy = css`
  grid-column: 1 / 2;
  font-size: 54px;
  font-weight: 300;
  line-height: 130%;
`;

const para = css`
  margin-top: 48px;
`;

const logo = css`
  grid-column: 3 / 4;
  height: 36px;
`;

const WhoWeAre = () => {
  return (
    <div css={container}>
      
      <div css={header}>
        <h1 css={[title, label]}>who we are</h1>
        <div css={socialLinks}>
          <img css={socialIcon} src={twitterImg} />
          <img css={socialIcon} src={discordImg} />
          <img css={socialIcon} src={mediumImg} />
        </div>
      </div>

      <div css={body}>
        <div css={[copy, headlineFont]}>
          <p css={para}>We’re a new kind of design organization partnering with ambitious teams to work on the new internet.</p>
          <p css={para}>We believe internet platforms should be more participative, open, and community owned.</p>
          <p css={para}>We bring an excellence of craft, willingness to experiment, collaborative mindset and passion for building.</p>
        </div>
        <div css={logo}>
          <img src={we3LogoImg} />
        </div>
      </div>

    </div>
  )
}

export default WhoWeAre;
