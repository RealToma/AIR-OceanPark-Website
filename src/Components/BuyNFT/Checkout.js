import styled from 'styled-components'
import { customColor } from "../../Config/Color"
import klook from "../../Assets/image/kklook.png"
import nft from "../../Assets/image/nft.png"
import {ReactComponent as SvgTick} from "../../Assets/svg/tick.svg"
import {ReactComponent as SvgIncrease} from "../../Assets/svg/increase.svg"
import {ReactComponent as SvgDecrease} from "../../Assets/svg/decrease.svg"
import { useState } from 'react'
import RoundBtn from '../../Components/Button/RoundBtn'

const StyledContainer = styled.div`
  position: relative;
  padding-top: 37px;
  max-width: 100%;
  margin: auto;
  @media (min-width: 900px) {
    width: 386px;
  }
`

const StyledKlookWrapper = styled.div`
  display: flex;
  justify-content: center;

`
const StyledKlookBtn = styled.div`
  border: 1px solid ${customColor.mainColor02};
  border-radius: 6px;
  padding: 12px 14px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
`
const StyledKlookBtnContent = styled.div`
  display: flex;
  align-items: center;
  color: ${customColor.mainColor02};
`

const StyledCheckoutPane = styled.div`
  padding-top: 20px;
`

const StyledCheckoutContent = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 16px 16px 20px 16px;
  position: relative;
  filter: drop-shadow(4px 4px 21px rgba(0, 0, 0, 0.1));
  min-height: 400px;
`

const StyledCheckoutContentBubble = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: white;
  border-radius: 100%;
  background-color: ${customColor.mainColor02};
  line-height: 160%;
  transform: rotate(15deg);
  width: 96px;
  height: 96px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: -25px;
  right: -10px;
`

const StyledNFT = styled.div`
  width: 150px;
  margin: auto;
`

const StyleAmountControlPane = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 14px;
`

const StyledDecreasePane = styled.div`
  cursor: pointer;
`
const StyledIncreasePane = styled.div`
  cursor: pointer;
`
const StyledTotalPane = styled.div`
  text-align: center;
  padding-top: 14px;
`

const StyledTotalLabel = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
`
const StyledTotalValue = styled.div`
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  color: ${customColor.mainColor02};
`

const StyledConsentPane = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  padding-top: 17px;
`

const StyledConsentBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: ${customColor.backColor03};
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledNextBtnWrapper = styled.div`
  margin-top: 10px;
`

const StyledNextBtn = styled.div`
  padding: 12px 0;
`

const StyledAmountValue = styled.div`
  width: 60px;
  border: 1px solid #EFEFEF;
  border-radius: 4px;
  text-align: center;
  margin: 0 18px;
  padding: 0 12px;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: ${customColor.mainColor02};
`

const Checkout = () => {
  const [amount, setAmount] = useState(1)
  const [agreement, setAgreement] = useState(false)
  const total = 500 * amount

  const increase = () => {
    setAmount(amount + 1)
  }

  const descrease = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const handleNext = async () => {
    console.log('handleNext')
  }

  return (
    <StyledContainer>
      <StyledKlookWrapper>
        <StyledKlookBtn>
          <StyledKlookBtnContent>
            <div style={{width: '78px'}}>
              <img
                src={klook}
                width={"100%"}
                alt={""}
              />
            </div>
            <div style={{ paddingLeft: '13px' }}>Redeem here</div>
          </StyledKlookBtnContent>
        </StyledKlookBtn>
      </StyledKlookWrapper> 

      <StyledCheckoutPane>
        <StyledCheckoutContent>
          <StyledNFT>
            <img src={nft} width="100%" />
          </StyledNFT>

          <StyleAmountControlPane>
            <StyledDecreasePane onClick={descrease}>
              <SvgDecrease />
            </StyledDecreasePane>
            <StyledAmountValue>x{amount}</StyledAmountValue>
            <StyledIncreasePane onClick={increase}>
              <SvgIncrease />
            </StyledIncreasePane>
          </StyleAmountControlPane>

          <StyledTotalPane>
            <StyledTotalLabel>Total</StyledTotalLabel>
            <StyledTotalValue>HKD ${total}</StyledTotalValue>
          </StyledTotalPane>

          <StyledConsentPane>
            <StyledConsentBox onClick={() => setAgreement(!agreement)}>
              {agreement && (
                <SvgTick />
              )}
            </StyledConsentBox>
            <div style={{ paddingLeft: '12px'}}>I agree to the T&C</div>
          </StyledConsentPane>

          <StyledNextBtnWrapper>
            <RoundBtn>
              <StyledNextBtn onClick={handleNext}>
                Next
              </StyledNextBtn>
            </RoundBtn>
          </StyledNextBtnWrapper>

          <StyledCheckoutContentBubble>
            <div style={{ fontSize: '20px' }}>70%</div>
            <div>REMAIN</div>
          </StyledCheckoutContentBubble>
        </StyledCheckoutContent>
      </StyledCheckoutPane>
    </StyledContainer>
  )
}

export default Checkout