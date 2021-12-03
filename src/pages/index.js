import * as React from 'react';
import { css } from '@emotion/react';

import { Header } from '../components';

import '../css/global.css';
import featuredNFTImage from '../images/banner.png';

const pageGrid = css`
  display: grid;
  grid-template-columns: minmax(0px, 1fr) minmax(0, 1440px) minmax(0px, 1fr);
`;

const pageGridColumn = css`
  grid-column: 2 / 3;
`;

const contentGrid = css`
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr) 100px;
`;

const contentGridColumn = css`
  grid-column: 2 / 3;
`;

const featuredNFTGridColumn = css`
  grid-column: 1 / 4;
`;

const featuredNFT = css`
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
    <main>
      <div css={pageGrid}>
        <div css={pageGridColumn}>
          <div css={contentGrid}>
            <div css={contentGridColumn}>
              <Header />
            </div>
            <div css={featuredNFTGridColumn}>
              <img css={featuredNFT} src={featuredNFTImage}></img>
            </div>
            <div css={contentGridColumn}>
              <div css={weAre}>
                <h2>Who we are</h2>
                <h1>We are a new kind of design organization partnering with teams to work on web 3.0. projects.</h1>
                <h1>We believe internet platforms should be more participative, open, and community owned.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage;
