import * as React from 'react';
import { css } from '@emotion/react';

import src from '../images/banner.png';
import { contentMargin, pageGridColumn } from '../css/global';

const featuredNFTGrid = css`
  display: grid;
  grid-template-columns: ${contentMargin} 1fr auto ${contentMargin};
  grid-template-rows: 1fr auto;
`;

const featuredNFT = css`
  grid-column: 1 / 5;
  grid-row: 1 / 3;
`;

const featuredNFTImg = css`
  width: 100%;
`;

const artistContainer = css`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  background: #000000;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0.03em;
  padding: 10px 16px;
`;

const link = css`
  margin-left: 26px;
  text-transform: uppercase;
`;

const FeaturedNFT = () => {
  return (
    <div css={[pageGridColumn, featuredNFTGrid]}>
      <div css={featuredNFT}>
        <img css={featuredNFTImg} src={src}></img>
      </div>
      <div css={artistContainer}>
        <p>Made by charlota.eth
          <span css={link}>view nft 😭</span>
        </p>
      </div>
    </div>
  )
}

export default FeaturedNFT;
