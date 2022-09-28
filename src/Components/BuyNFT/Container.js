import styled from 'styled-components'
import BuyNFTProgress from './Progress'
import { customColor } from "../../Config/Color"
import {ReactComponent as SvgReturn} from "../../Assets/svg/return.svg"
import RoundBtn from '../../Components/Button/RoundBtn'
import { Link } from 'react-router-dom'

const StyledComponent = styled.div`
  padding: 100px 20px;
  position: relative;
`

const StyledProgressWrapper = styled.div`
  max-width: 986px;
  margin: auto;
  padding-top: 13px;
  position: relative;
  width: 100%;
`

const StyledBuyHeading = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${customColor.mainColor02};
`

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 900px) {
    display: block;
  }
`

const StyledReturn = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`

const StyledCancel = styled.div`
  position: absolute;
  display: none;
  cursor: pointer;
  @media (min-width: 900px) {
    display: inherit;
  }
`

const onCancel = () => {
  console.log('onCancel')
}

const BuyNFTContainer = (props) => {
  const { children, step } = props
  return (
    <StyledComponent>
      {step < 4 && (
        <StyledHead>
          <StyledReturn><Link to="/"><SvgReturn /></Link></StyledReturn>
          <StyledBuyHeading>Get your AiR CITIZEN</StyledBuyHeading>
          <div></div>
        </StyledHead>
      )}
      
      {step < 4 && (
        <StyledProgressWrapper>
          <StyledCancel onClick={onCancel}>
            <RoundBtn bgColor="none" color={customColor.mainColor02} border={`1px solid ${customColor.mainColor02}`}>
              <div style={{padding: '5px 12px'}}>
              Cancel
              </div>
            </RoundBtn>
          </StyledCancel>
          <BuyNFTProgress step={step} />
        </StyledProgressWrapper>
      )}

      <div>{children}</div>
    </StyledComponent>
  )
}

export default BuyNFTContainer