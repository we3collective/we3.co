import * as React from 'react';
import { css } from '@emotion/react';

import placeholder from '../images/featuredNFTs/placeholder.png';
import nft0 from '../images/featuredNFTs/charlota.jpg';
import nft1 from '../images/featuredNFTs/snehaSanks.png';
import nft2 from '../images/featuredNFTs/snehaSanks2.png';

import { link, contentMargin, featuredNFTGrid } from '../css/global';

const nfts = [nft0, nft1, nft2];
const creators = ['charlota.eth', 'Sneha Sanks', 'Sneha Sanks'];

const featuredNFT = css`
  grid-column: 1/5;
  grid-row: 1/3;

  @media (max-width: 480px) {
    grid-column: 1/4;
  }
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

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    padding: 6px 10px;
    grid-column: 2/3;
  }
`;

const viewNFT = css`
  margin-left: 26px;
`;

// <span css={[viewNFT, link]}>view nft</span>

class FeaturedNFT extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      nft: placeholder, 
      creator: '',
      mounted: false 
    };
  }

  componentDidMount() {
    const idx = Math.floor(Math.random()*nfts.length);

    this.setState({
      mounted: true,
      creator: creators[idx],
      nft: nfts[idx],
    });
  }

  render() {
    return (
      <div css={featuredNFTGrid}>
        <div css={featuredNFT}>
          <div><img css={featuredNFTImg} src={this.state.nft}></img></div>
        </div>

        {this.state.mounted &&
          <div css={artistContainer}>
            <p>Made by {this.state.creator}</p>
          </div>
        }
      </div>
    )
  }
}

export default FeaturedNFT;
