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

export const BtnGroupComp = styled('div')`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  @media (max-width: 767px) {
    gap: 0.5rem;
  }
`;

export const BtnGroup = styled('div')`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  @media (max-width: 767px) {
    gap: 0.5rem;
    .btn-general {
      padding: 8px 15px;
      font-size: 14px;
      white-space: nowrap;
    }
  }
`;

export const WrapperMenu = styled('div')`
  @media (max-width: 900px) {
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
    transition: transform ease 0.3s;
    background: white;
    position: fixed;
    top: 81px;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 16px;
    z-index: 2;
  }
`;
