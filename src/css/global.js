import { css } from '@emotion/react';

// Grids and layout

const contentMargin = `100px`;

export const pageGrid = css`
  display: grid;
  grid-template-columns: minmax(0px, 1fr) minmax(0, 1440px) minmax(0px, 1fr);
`;

export const pageGridColumn = css`
  grid-column: 2/3;
`;

export const contentGrid = css`
  display: grid;
  grid-template-columns: minmax(16px, ${contentMargin}) 1fr minmax(16px, ${contentMargin});

  @media (max-width: 768px) {
    grid-template-columns: 32px 1fr 32px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 16px 1fr 16px;
  }
`;

export const contentGridColumn = css`
  grid-column: 2/3;
`;

export const contentGridBleed = css`
  grid-column: 1/4;
`;

export const featuredNFTGrid = css`
  display: grid;
  grid-template-columns: minmax(0, ${contentMargin}) auto auto minmax(0, ${contentMargin});
  grid-template-rows: auto auto;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 32px) auto auto minmax(0, 32px);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr auto;
    grid-template-rows: auto auto auto;
  }
`;

// Styles

export const label = css`
  font-family: 'NeueMontreal', sans-serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const link = css`
  font-family: 'NeueMontreal', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

// Global fonts

export const headlineFont = css`
  font-family: EditorialNew;
`;

// Helpers

export const onlyMobile = css`
  display: none;
  @media (max-width: 480px) {
    display: initial;
  }
`;

export const hideMobile = css`
  display: initial;
  @media (max-width: 480px) {
    display: none;
  }
`;