import * as React from 'react';
import { css } from '@emotion/react';

import { 
  headlineFont, 
  link, 
  pageGrid, 
  pageGridColumn, 
  contentGrid, 
  contentGridColumn,
} from '../css/global';

const footer = css`
  margin-top: 94px;
  padding-top: 80px;
  padding-bottom: 63px;
  background: #000000;
  color: #ffffff;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    margin-top: 32px;
  }
`;

const container = css`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const email = css`
  grid-column: 1/2;
  font-size: 60px;
  font-weight: 300;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    font-size: 40px;
    grid-row: 2/3;
    text-align: center;
    margin: 48px 0px;
  }
`;

const twitterItem = css`
  grid-column: 2/3;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & p {
    margin-top: 14px;
  }

  @media (max-width: 768px) {
    & p {
      margin-top: 4px;
    }
  }

  @media (max-width: 480px) {
    grid-column: 1/2;
    grid-row: 1/2;
    margin-top: 48px;
    & p {
      margin-top: 4px;
    }
  }
`;

const twitterIcon = css`
  height: 70px;
  fill: rgba(0,0,0,0);
  stroke: #ffffff;
  transition: all 250ms;

  &:hover {
    fill: #ffffff;
    transition: all 250ms;
  }
`;

const Footer = () => {
  return (
    <div css={[footer, pageGrid]}>
      <div css={[pageGridColumn, contentGrid]}>
        <div css={[container, contentGridColumn]}>
          <h1 css={[email, headlineFont]}><a href="mailto:gm@we3.co">gm@we3.co</a></h1>
          <a href="https://twitter.com/WE3co">
            <div css={twitterItem}>
              <svg css={twitterIcon} width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.0132 68.8871C27.9442 68.7556 21.9378 64.257 19.5803 57.9676C22.081 58.3256 24.5282 58.1348 26.782 57.5217L26.7494 56.5491C18.9487 54.9802 13.4774 48.1204 13.2692 40.6319C15.4857 41.7339 17.9698 42.3888 20.5877 42.4735L22.331 42.5299L20.8824 41.5585C13.6055 36.6789 11.3985 27.1727 15.3316 19.6856C23.9512 29.9718 36.6328 36.7156 50.9011 37.4325L51.5634 37.4658L51.4132 36.8199C48.9612 26.2772 56.9394 16.125 67.7906 16.125C72.625 16.125 76.9979 18.1716 80.0605 21.4477L80.2502 21.6506L80.5227 21.5968C84.0625 20.8977 87.4124 19.6698 90.486 17.9997C89.1022 21.3801 86.647 24.208 83.5504 26.0672L83.8673 26.9923C86.823 26.6382 89.6634 25.9249 92.3491 24.8873C90.2364 27.7396 87.6907 30.2638 84.8188 32.3441L84.6005 32.5022L84.6126 32.7715C85.6992 56.9522 67.7133 83.875 35.9109 83.875C26.9928 83.875 18.6402 81.4587 11.4486 77.2623C20.0389 77.761 28.4945 75.1403 35.3129 69.7801L36.4157 68.9132L35.0132 68.8871Z"/>
              </svg>
              <p css={link}>Follow</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
