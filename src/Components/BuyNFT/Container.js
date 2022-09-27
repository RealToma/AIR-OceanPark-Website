import styled from 'styled-components'
import BuyNFTProgress from './Progress'
import { customColor } from "../../Config/Color"

const StyledComponent = styled.div`
  border: 1px solid red;
  width: 100%;
  padding: 100px 40px;
`

const StyledProgressWrapper = styled.div`
  border: 1px solid red;
  max-width: 986px;
  margin: auto;
  padding-top: 13px;
`

const StyledBuyHeading = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${customColor.mainColor02};
`

const BuyNFTContainer = (props) => {
  const { children, step } = props
  return (
    <StyledComponent>
      <StyledBuyHeading>Get your AiR CITIZEN</StyledBuyHeading>
      <StyledProgressWrapper>
        <BuyNFTProgress step={step} />
      </StyledProgressWrapper>
      <div>{children}</div>
    </StyledComponent>
  )
}

export default BuyNFTContainer