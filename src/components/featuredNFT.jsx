import * as React from 'react';
import { css } from '@emotion/react';

import src from '../images/banner.png';
import { link, contentMargin } from '../css/global';

const featuredNFTGrid = css`
  display: grid;
  grid-template-columns: ${contentMargin} auto auto ${contentMargin};
  grid-template-rows: auto auto;
`;

const featuredNFT = css`
  grid-column: 1/5;
  grid-row: 1/3;
`;

const featuredNFTImg = css`
  width: 100%;
  display: block;
`;

const artistContainer = css`
  grid-column: 3/4;
  grid-row: 2/3;
  background: #000000;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0.03em;
  padding: 10px 16px;
`;

const viewNFT = css`
  margin-left: 26px;
`;

const FeaturedNFT = () => {
  return (
    <div css={featuredNFTGrid}>
      <div css={featuredNFT}>
        <div><img css={featuredNFTImg} src={src}></img></div>
      </div>
      <div css={artistContainer}>
        <p>Made by charlota.eth
          <span css={[viewNFT, link]}>view nft</span>
        </p>
      </div>
    </div>
  )
}

export default FeaturedNFT;
