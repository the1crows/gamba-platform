import { TokenValue, useCurrentPool, useUserBalance } from 'gamba-react-ui-v2'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Modal } from '../components/Modal'
import TokenSelect from './TokenSelect'
import { UserButton } from './UserButton'

const Bonus = styled.button`
  all: unset;
  cursor: pointer;
  color: #003c00;
  border-radius: 10px;
  background: #03ffa4;
  padding: 2px 10px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  transition: background .2s;
  &:hover {
    background: white;
  }
`

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background: rgba(33, 34, 51, 0.9);
  position: fixed;
  background: #000000CC;
  backdrop-filter: blur(20px);
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);

  @media (min-width: 561px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Logo = styled(NavLink)`
  height: 55px;
  margin: auto;

  & > img {
    height: 100%;
  }
`

const Row = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin: auto;
`

export default function Header() {
  const pool = useCurrentPool()
  const balance = useUserBalance()
  const [bonusHelp, setBonusHelp] = React.useState(false)
  const [jackpotHelp, setJackpotHelp] = React.useState(false)
  const isMobile = window.innerWidth <= 560;

  return (
    <>
      {bonusHelp && (
        <Modal onClose={() => setBonusHelp(false)}>
          <h1>You have a bonus!</h1>
          <p>
            You have <b><TokenValue amount={balance.bonusBalance} /></b> worth of free plays. This bonus will be applied automatically when you play.
          </p>
        </Modal>
      )}
      {jackpotHelp && (
        <Modal onClose={() => setJackpotHelp(false)}>
          <h1>🏆 Jackpot</h1>
          <p>There{'\''}s <span style={{ color: '#03ffa4' }}><TokenValue amount={pool.jackpotBalance} /></span> in the Jackpot. The Jackpot accumulates everytime a bet is made,every coin has its own Jackpot and you have a chance to get it wherever you make a new bet. Good Luck ! 🍀</p>
        </Modal>
      )}
      <StyledHeader>
        <Row>
          <Logo to="/">
              <img alt="SwiftDice desktop logo" src="/logo.svg" />
          </Logo>
        </Row>
        <Row>
          {pool.jackpotBalance > 0 && (
            <Bonus onClick={() => setJackpotHelp(true)}>
             <TokenValue amount={pool.jackpotBalance} />
            </Bonus>
          )}
          {balance.bonusBalance > 0 && (
            <Bonus onClick={() => setBonusHelp(true)}>
              +<TokenValue amount={balance.bonusBalance} />
            </Bonus>
          )}
          <TokenSelect />
          <UserButton />
        </Row>
      </StyledHeader>
    </>
  )
}
