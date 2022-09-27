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
  position: relative;
  width: 100%;
  @media (min-width: 900px) {
    max-width: 591px;
    margin: auto;
  }
`

const StyledSteps = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  text-align: center;
`

const StyledStep = styled.div`
  color: ${(props) => props.active ? customColor.mainColor02 : customColor.progressBar};
  ${StyledStepNumber} {
    background-color: ${(props) => props.active ? customColor.mainColor02 : customColor.progressBar};
  }
`

const StyledStepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
`

const StyledBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 13px;
`

const StyledPadding = styled.div`
  padding: 0 10px;
  position: relative;
`

const StyledBar = styled.div`
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.width}%;
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledStepTwoThree = styled(StyledStep)`
  width: 25%;
  @media (min-width: 900px) {
    width: auto;
  }
`

const BuyNFTProgress = (props) => {
  const { step } = props
  return (
    <StyledContainer>
      <StyledBarWrapper>
        <StyledPadding>
          <div style={{position: 'relative'}}>
            <StyledBar bgColor={customColor.progressBar} width={100} />
            <StyledBar bgColor={customColor.mainColor02} width={(step - 1) * 33.3 - 1.5} />
          </div>
        </StyledPadding>
      </StyledBarWrapper>

      <StyledSteps>
        <StyledStep active={step >= 1}>
          <StyledStepContent>
            <StyledStepNumber>1</StyledStepNumber>
            <div>Login</div>
          </StyledStepContent>
        </StyledStep>
        <StyledStepTwoThree active={step >= 2}>
          <StyledStepContent>
            <StyledStepNumber>2</StyledStepNumber>
            <div>Check out</div>
          </StyledStepContent>
        </StyledStepTwoThree>
        <StyledStepTwoThree active={step >= 3}>
          <StyledStepContent>
            <StyledStepNumber>3</StyledStepNumber>
            <div>Payment / Redeem</div>
          </StyledStepContent>
        </StyledStepTwoThree>
        <StyledStep active={step >= 4}>
          <StyledStepContent>
            <StyledStepNumber>4</StyledStepNumber>
            <div>Reveal</div>
          </StyledStepContent>
        </StyledStep>
      </StyledSteps>
    
    </StyledContainer>
  )
}

export default BuyNFTProgress