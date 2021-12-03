import * as React from 'react';
import { css } from '@emotion/react';

import '../css/global.css';

import { Header, FeaturedNFT, WhoWeAre } from '../components';
import {pageGrid, pageGridColumn, contentGrid, contentGridColumn, contentGridBleed } from '../css/global';

const IndexPage = () => {
  return (
    <main>
      <div css={pageGrid}>
        <div css={pageGridColumn}>
          <div css={contentGrid}>
            <div css={contentGridColumn}>
              <Header />
            </div>
            <div css={contentGridBleed}>
              <FeaturedNFT />
            </div>
            <div css={contentGridColumn}>
              <WhoWeAre />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage;
