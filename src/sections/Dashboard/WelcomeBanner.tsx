import React from 'react';
import styled, { keyframes } from 'styled-components';
import mascotImage from '../../../public/mascot.png';
import SBCLogo from '../../../public/SBC.png'; // Replace with the actual token logo
import SolanaLogo from '../../../public/Sol.png'; // Replace with the actual token logo
import BesaLogo from '../../../public/Besa.png'; // Replace with the actual token logo
import JupiterLogo from '../../../public/Jupiter.png'; // Replace with the actual token logo
import wLogo from '../../../public/W.png'; // Replace with the actual token logo
import UsccLogo from '../../../public/Usdc.png'; // Replace with the actual token logo

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

const BannerContainer = styled.div`
  background: linear-gradient(to right, #4f004f, #760076, #4f004f);
  background-image: url('/casino.png');
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  height: 441px; /* Set a fixed height for all banners */
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 0.8s ease forwards;
  min-height: 350px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 350px; /* Set a minimum height for mobile */
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    animation: ${darken} 0.8s ease forwards;
  }
`;

const Mascot = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 20px;
  position: relative;
  z-index: 2; /* Ensure mascot appears above the darken effect */

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  z-index: 1; /* Ensure text appears above the darken effect */

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const TokensTitle = styled.p`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;
 
 const TokenLogo = styled.img`
  width: 50px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  cursor: pointer; /* Show cursor as pointer on hover */
  transition: transform 0.2s ease; /* Add a smooth transition effect */
  
  &:hover {
    transform: scale(1.1); /* Scale up the image slightly on hover */
  }
`;

export function WelcomeBanner() {
  return (
    <BannerContainer>
      <Mascot src={mascotImage} alt="Mascot" />
      <TextContainer>
        <Title>Welcome to SolBets Casino</Title>
        <Description>
          Discover a transparent and decentralized casino experience on Solana, where participants can generate income by contributing to a shared liquidity pool.
        </Description>
        <TokensTitle>Tokens available in the casino</TokensTitle>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <TokenLogo src={SBCLogo} alt="SBC" onClick={() => window.open('https://dexscreener.com/solana/hdbjj9yl2pzhnmhqfcu8xikr5lgxomhbg2rduz1ruunq', '_blank')} />
          <TokenLogo src={SolanaLogo} alt="Sol" onClick={() => window.open('https://solscan.io/token/So11111111111111111111111111111111111111112', '_blank')} />
          <TokenLogo src={BesaLogo} alt="Besa" onClick={() => window.open('https://dexscreener.com/solana/5rsztkbcuxeotpw3fxwpw1zuayn4segp8nx1mwf5vmxq', '_blank')} />
          <TokenLogo src={JupiterLogo} alt="Jupiter" onClick={() => window.open('https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN', '_blank')} />
          <TokenLogo src={WLogo} alt="W" onClick={() => window.open('https://solscan.io/token/HbztV13A283sP7AWQVqfxe46WT89te5pBFFjpjSess4t', '_blank')} />
          <TokenLogo src={UsdcLogo} alt="Usdc" onClick={() => window.open('https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', '_blank')} />
        </div>
      </TextContainer>
    </BannerContainer>
  );
}
