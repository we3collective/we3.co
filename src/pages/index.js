import * as React from 'react';
import { css } from '@emotion/react';

import '../css/global.css';
import we3Image from '../images/we3.svg';
import heroImg from '../images/banner.png';

const grid = css`
  margin-top: 117px;
  display: grid;
  grid-template-columns: minmax(64px, 1fr) minmax(0, 1200px) minmax(64px, 1fr);

  h1 {
    font-size: 44px;
    font-weight: 200;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const gridColumn = css`
  grid-column: 2 / 3;
`;

const title = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 44px;
`;

const we3 = css`
  height: 36px;
  margin-right: 64px;
`;

const hero = css`
  width: 100%;
`;

const weAre = css`
  margin: 87px 0px 128px 0px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 41px;
    margin-top: 48px;
  }

  h1:first-of-type {
    margin-top: 12px;
  }
`;

const IndexPage = () => {
  return (
    <main css={grid}>
      <div css={gridColumn}>
        <div css={title}>
          <img css={we3} src={we3Image}></img>
          <h1>We are a design collective building Web3</h1>
        </div>
        <img css={hero} src={heroImg}></img>
        <div css={weAre}>
          <h2>Who we are</h2>
          <h1>We are a new kind of design organization partnering with teams to work on web 3.0. projects.</h1>
          <h1>We believe internet platforms should be more participative, open, and community owned.</h1>
        </div>
      </div>
    </main>
  )
}

export default IndexPage;
