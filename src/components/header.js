import * as React from 'react';
import { css } from '@emotion/react';

import { label, headlineFont } from '../css/global';

import we3Logo from '../images/logos/we3.svg';

const header = css`
  display: grid;
  grid-template-columns: auto 77px auto minmax(32px, 1fr) auto;
  grid-template-rows: 154px;
  align-items: center;

  @media (max-width: 1024px) {

  }

  @media (max-width: 768px) {
  }

  @media (max-width: 1200px) {
    margin-top: 24px;
    margin-bottom: 48px;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
  }
`;

const logo = css`
  grid-column: 1/2;
  height: 36px;

  @media (max-width: 1024px) {

  }

  @media (max-width: 768px) {

  }

  @media (max-width: 1200px) {
    grid-row: 1/2;
  }
`;

const title = css`
  grid-column: 3/4;
  margin-top: 4px;
  min-width: max-content;

  & h1 {
    font-weight: 300;
    font-size: 40px;
    line-height: 130%;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    min-width: auto;
  }

  @media (max-width: 1200px) {
    grid-column: 1/4;
    grid-row: 2/3;
    margin-top: 43px;
    text-align: center;
    min-width: auto;
  }
`;

const join = css`
  grid-column: 5/6;
  min-width: max-content;
  transition: all 250ms;

  padding: 10px 30px;
  margin-right: -30px;
  margin-bottom: 5px;

  &:hover {
    transition: all 250ms;
    color: #ffffff;
    background: #000000;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 1200px) {
    grid-row: 1/2;
    grid-column: 3/4;
    padding: 9px 22px;
    margin-right: -22px;
    margin-bottom: 0px;
  }
`;

export const onlyNarrow = css`
  display: none;
  @media (max-width: 768px) {
    display: initial;
  }
`;

export const hideNarrow = css`
  display: initial;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderComponent = () => {
  return (
    <div css={header}>
      <img css={logo} src={we3Logo}></img>
      <div css={[title, headlineFont, hideNarrow]}>
        <h1>We are a design collective building the Web3</h1>
      </div>
      <div css={[title, headlineFont, onlyNarrow]}>
        <h1>We are</h1>
        <h1>a design collective</h1>
        <h1>building the Web3</h1>
      </div>
      <h2 css={[join, label]}><a href="https://hello.we3.co">join us</a></h2>
    </div>
  )
}

export default HeaderComponent;
