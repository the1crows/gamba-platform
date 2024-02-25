import React from 'react';
import styled, { keyframes } from 'styled-components';
import mascotImage from '../../../public/mascot.png';

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
  background-image: url('/casino.gif'); /* Legg til din GIF her */
  background-size: cover; /* Dekker hele containeren, kan justeres etter behov */
  background-position: center; /* Sentrerer bakgrunnsbildet */
  background-repeat: no-repeat; /* Forhindrer gjentakelse av bildet */
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  height: 441px; /* Sett en fast høyde for alle bannere */
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 0.8s ease forwards;
  min-height: 350px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 350px; /* Sett en minimumshøyde for mobil */
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Juster dette for ønsket mørklegging */
    z-index: 1; /* Sørg for at dette ligger over GIFen, men under alt annet innhold */
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

export function WelcomeBanner() {
  return (
    <BannerContainer>
      <Mascot src={mascotImage} alt="Mascot" />
      <TextContainer>
        <Title>Welcome to SolVegas Casino</Title>
        <Description>
          Discover a transparent and decentralized casino experience on Solana, where participants can generate income by contributing to a shared liquidity pool.
        </Description>
      </TextContainer>
    </BannerContainer>
  );
}
