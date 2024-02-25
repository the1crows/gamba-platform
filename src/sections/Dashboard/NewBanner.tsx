import React from 'react';
import styled, { keyframes } from 'styled-components';
import BackgroundImage from './assets/brazilbanner.jpg'; // Assuming './assets/brazilbanner.jpg' is the correct path to your image

// Define keyframe for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component for the banner container
const BannerContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease forwards;
  height: 441px; /* Set a fixed height for all banners */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent dark layer */
    z-index: 1;
  }

  @media (max-width: 768px) {
    border-radius: 0; /* Remove border radius for mobile */
    min-height: 350px; /* Set a minimum height for mobile */
  }
`;

// Styled component for the background image
const Background = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

// Styled component for the text container
const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; /* Ensure the text is above the dark layer */
  padding: 40px;
  color: white;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Styled components for title, description, and buttons remain the same
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  & > button {
    border: none;
    border-radius: 15px;
    padding: 10px 20px;
    background: #333;
    color: white;
    cursor: pointer;
    transition: background .2s ease;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    justify-content: center;
    &:hover {
      background: #555;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
`;

export function TokenListingBanner() {
  return (
    <BannerContainer>
      <Background />
      <TextContainer>
        <Title>New Token Listings Announcement 🚀</Title>
        <Description>
          We have just Listed BRZ (Brazilian Coin) as a play token!
        </Description>
        <Buttons>
          <button onClick={() => window.open('https://example.com', '_blank')}>
            Learn More
          </button>
        </Buttons>
      </TextContainer>
    </BannerContainer>
  );
}
