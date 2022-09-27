import styled from 'styled-components'
import { customColor } from "../../Config/Color"

const StyledStepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledStep = styled.div`
  color: ${(props) => props.active ? customColor.mainColor02 : customColor.textColor02_50};
  ${StyledStepNumber} {
    background-color: ${(props) => props.active ? customColor.mainColor02 : customColor.textColor02_50};
  }
`

const StyledStepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
`

const BuyNFTProgress = (props) => {
  const { step } = props
  return (
    <StyledContainer>
      <StyledStep active={step >= 1}>
        <StyledStepContent>
          <StyledStepNumber>1</StyledStepNumber>
          <div>Login</div>
        </StyledStepContent>
      </StyledStep>
      <StyledStep active={step >= 2}>
        <StyledStepContent>
          <StyledStepNumber>2</StyledStepNumber>
          <div>Check out</div>
        </StyledStepContent>
      </StyledStep>
      <StyledStep active={step >= 3}>
        <StyledStepContent>
          <StyledStepNumber>3</StyledStepNumber>
          <div>Payment / Redeem</div>
        </StyledStepContent>
      </StyledStep>
      <StyledStep active={step >= 4}>
        <StyledStepContent>
          <StyledStepNumber>4</StyledStepNumber>
          <div>Reveal</div>
        </StyledStepContent>
      </StyledStep>
    </StyledContainer>
  )
}

export default BuyNFTProgress