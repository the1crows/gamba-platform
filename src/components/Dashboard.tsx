import React from 'react';
import styled, { keyframes } from 'styled-components';
import Whitepaper from "../../public/Whitepaper.pdf";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const darken = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  & > button {
    border: 2px solid gold; /* Add border with desired color */
    border-radius: 15px;
    padding: 8px 16px;
    background: transparent; /* Set background to transparent */
    color: white;
    cursor: pointer;
    transition: background .2s ease;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
      background: #07070935; /* Change background color on hover */
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`;

function MainPage() {
  return (
    <CenteredContainer>
      <Buttons>
        <button onClick={() => window.open('https://explorer.gamba.so/platform/E8tzfzDJa2CVc2BVXu6mmg83sp2JV4mXeVTvR5GwCJyu', '_blank')}>
          Explorer
        </button>
        <button onClick={() => window.open(Whitepaper, '_blank')}>
          Whitepaper
        </button> 
        <button onClick={() => window.open('https://www.dextools.io/app/en/solana/pair-explorer/HdbjJ9YL2pZhNmHQfcu8xikR5LgxoMHbG2RDUz1rUunq?t=1710776526594', '_blank')}>
          Dextools
        </button>
        <button onClick={() => window.open('https://t.me/SolBetsCasino', '_blank')}>
          Telegram
        </button>
        <button onClick={() => window.open('https://x.com/SolBetsCasino', '_blank')}>
          X.com
        </button>
      </Buttons>
    </CenteredContainer>
  );
}

export default MainPage;
