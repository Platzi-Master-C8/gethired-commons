import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

export const HeaderContent = styled('header')(
  ({ theme }) => css`
    align-items: center;
    border-bottom: 1px solid ${theme.palette.secondary.main};
    display: flex;
    height: 80px;
    width: 100%;
    img {
      width: 160px;
      @media (max-width: 560px) {
        width: 110px;
      }
    }
    .MuiContainer-root {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  `,
);

export const BtnGroup = styled('div')`
  display: inline-flex;
  gap: 1rem;
  @media (max-width: 767px) {
    display: none;
  }
`;
