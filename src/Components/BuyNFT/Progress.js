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
  align-items: center;
  position: relative;
  text-align: center;
  padding: 0 20px;
`

const StyledStep = styled.div`
  position: relative;
  color: ${(props) => props.active ? customColor.mainColor02 : customColor.progressBar};
  ${StyledStepNumber} {
    background-color: ${(props) => props.active ? customColor.mainColor02 : customColor.progressBar};
  }
`

const StyledStepContent = styled.div`
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 76px;
  @media (min-width: 900px) {
    width: 132px;
  }
`

const StyledBar = styled.div`
  background-color: ${(props) => props.bgColor};
  flex: 1;
  height: 4px;
`


const BuyNFTProgress = (props) => {
  const { step, siteCopy } = props
  return (
    <StyledContainer>
      <StyledSteps>
        <StyledStep active={step >= 1}>
          <StyledStepNumber>1</StyledStepNumber>
          <StyledStepContent>
            <div>{siteCopy.login}</div>
          </StyledStepContent>
        </StyledStep>

        <StyledBar  bgColor={customColor.progressBar}>
          {step > 1 && <StyledBar  bgColor={customColor.mainColor02}></StyledBar>}
        </StyledBar>

        <StyledStep active={step >= 2}>
          <StyledStepNumber>2</StyledStepNumber>
          <StyledStepContent>
            <div>{siteCopy.checkout}</div>
          </StyledStepContent>
        </StyledStep>

        <StyledBar  bgColor={customColor.progressBar}>
          {step > 2 && <StyledBar  bgColor={customColor.mainColor02}></StyledBar>}
        </StyledBar>

        <StyledStep active={step >= 3}>
          <StyledStepNumber>3</StyledStepNumber>
          <StyledStepContent>
            <div>{siteCopy.paymentRedeem}</div>
          </StyledStepContent>
        </StyledStep>
        
        <StyledBar  bgColor={customColor.progressBar}>
          {step > 3 && <StyledBar  bgColor={customColor.mainColor02}></StyledBar>}
        </StyledBar>
        
        <StyledStep active={step >= 4}>
          <StyledStepNumber>4</StyledStepNumber>
          <StyledStepContent>
            <div>{siteCopy.reveal}</div>
          </StyledStepContent>
        </StyledStep>
      </StyledSteps>
    </StyledContainer>
  )
}

export default BuyNFTProgress