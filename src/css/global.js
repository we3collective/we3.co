import { css } from '@emotion/react';

export const contentMargin = `100px`;

export const pageGrid = css`
  display: grid;
  grid-template-columns: minmax(0px, 1fr) minmax(0, 1440px) minmax(0px, 1fr);
`;

export const pageGridColumn = css`
  grid-column: 2 / 3;
`;

export const contentGrid = css`
  display: grid;
  grid-template-columns: ${contentMargin} minmax(0, 1fr) ${contentMargin};
`;

export const contentGridColumn = css`
  grid-column: 2 / 3;
`;

