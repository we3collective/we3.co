import * as React from 'react';
import { css } from '@emotion/react';

import '../css/global.css';

import { Header, FeaturedNFT } from '../components';
import {pageGrid, pageGridColumn, contentGrid, contentGridColumn } from '../css/global';

const container = css`
  margin-bottom: 300px;
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
      <div css={[pageGrid, container]}>
        <div css={pageGridColumn}>
          <div css={contentGrid}>
            <div css={contentGridColumn}>
              <Header />
            </div>
            <FeaturedNFT />
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
